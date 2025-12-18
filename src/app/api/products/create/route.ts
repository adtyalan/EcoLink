import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import { connectDB } from "@/libs/mongodb";
import { Product } from "@/models/Products";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-08-16",
});

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user || !(session.user as any)._id) {
      return NextResponse.json({ message: "Anda harus login." }, { status: 401 });
    }

    const body = await req.json();
    const { name, category, description, sizeOrQty, price, images } = body as {
      name: string;
      category: "limbah" | "makanan" | "kerajinan";
      description: string;
      sizeOrQty?: string;
      price: number;
      images: string[];
    };

    if (!name || !category || !description) {
      return NextResponse.json({ message: "Nama, kategori, dan deskripsi wajib." }, { status: 400 });
    }
    if (!["limbah", "makanan", "kerajinan"].includes(category)) {
      return NextResponse.json({ message: "Kategori tidak valid." }, { status: 400 });
    }
    if (!images || !Array.isArray(images) || images.length === 0) {
      return NextResponse.json({ message: "Minimal satu gambar diperlukan." }, { status: 400 });
    }
    const numericPrice = Number(price);
    if (!Number.isFinite(numericPrice) || numericPrice <= 0) {
      return NextResponse.json({ message: "Harga harus lebih dari 0 untuk membuat harga Stripe." }, { status: 400 });
    }

    await connectDB();

    const stripePrice = await stripe.prices.create({
      currency: "idr",
      unit_amount: Math.round(numericPrice),
      product_data: {
        name,
        metadata: {
          category,
          createdBy: (session.user as any)._id as string,
        },
      },
    });

    const doc = await Product.create({
      name,
      description,
      price: numericPrice,
      category,
      sizes: sizeOrQty ? [sizeOrQty] : [],
      image: images,
      variants: [
        {
          priceId: stripePrice.id,
          color: "default",
          images,
        },
      ],
    });

    return NextResponse.json({ ok: true, productId: doc._id }, { status: 201 });
  } catch (err: any) {
    console.error("Create product error:", err);
    return NextResponse.json({ message: err?.message || "Terjadi kesalahan" }, { status: 500 });
  }
}

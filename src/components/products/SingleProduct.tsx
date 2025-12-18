"use client";

import { ProductImages } from "@/components/products/ProductImages";
import { ProductDocument, VariantsDocument } from "@/types/types";
import { Session } from "next-auth";
import { useState } from "react";
import { formatPrice } from "@/helpers/indonesianTranslations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AddToCart from "../cart/AddToCart";
interface SingleProduct {
  product: string;
  session: Session | null;
}

export const SingleProduct = ({ product, session }: SingleProduct) => {
  const productPlainObject: ProductDocument = JSON.parse(product);
  const [selectedVariant, setSelectedVariant] = useState<VariantsDocument>(
    productPlainObject.variants[0]
  );

  if (!product) {
    return <div>Produk tidak ditemukan</div>;
  }

  return (
    <div className="flex flex-wrap justify-between gap-8">
      <div className="grow-999 basis-0">
        <ProductImages
          name={productPlainObject.name}
          selectedVariant={selectedVariant}
        />
      </div>

      <div className="sticky flex flex-col items-center justify-center w-full h-full gap-5 grow basis-600 top-8">
        <div className="w-full border border-solid rounded border-border-primary bg-background-secondary">
          <div className="flex flex-col justify-between gap-3 p-5 border-b border-solid border-border-primary">
            <h1 className="text-base font-semibold">
              {productPlainObject.name}
            </h1>
            <span className="text-sm">
              {formatPrice(productPlainObject.price)}
            </span>
            <p className="text-sm">{productPlainObject.description}</p>
          </div>

          <AddToCart
            session={session}
            product={productPlainObject}
            selectedVariant={selectedVariant}
            setSelectedVariant={setSelectedVariant}
          />
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-sm">KOMPOSISI</AccordionTrigger>
            <AccordionContent>
              <p>
                Kami bekerja dengan program pemantauan untuk memastikan
                kepatuhan terhadap standar sosial, lingkungan, dan kesehatan
                serta keselamatan kami untuk produk kami. Untuk menilai
                kepatuhan, kami telah mengembangkan program audit dan rencana
                perbaikan berkelanjutan.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-sm">PERAWATAN</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2">
              <p>Merawat pakaian Anda adalah merawat lingkungan.</p>
              <p>
                Mencuci dengan suhu lebih rendah dan siklus spin yang lembut
                lebih lembut pada pakaian dan membantu melindungi warna, bentuk,
                dan struktur kain. Selain itu, mereka mengurangi jumlah energi
                yang digunakan dalam proses perawatan.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-sm">ASAL</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2">
              <p>
                Kami bekerja dengan pemasok, pekerja, serikat pekerja, dan
                organisasi internasional untuk mengembangkan rantai pasokan di
                mana hak asasi manusia dihormati dan dipromosikan, berkontribusi
                pada Tujuan Pembangunan Berkelanjutan Perserikatan
                Bangsa-Bangsa.
              </p>
              <p>
                Berkat kolaborasi dengan pemasok kami, kami bekerja untuk
                mengetahui fasilitas dan proses yang digunakan untuk memproduksi
                produk kami untuk memahami ketertelusuran mereka.
              </p>
              <p>Dibuat di Portugal</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

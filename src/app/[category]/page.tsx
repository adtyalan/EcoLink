import { Products } from "@/components/products/Products";
import { getCategoryProducts } from "../actions";
import ProductSkeleton from "@/components/skeletons/ProductSkeleton";
import { Suspense } from "react";
import { redirect } from "next/navigation";

// Map kategori lama ke kategori baru
const categoryMapping: { [key: string]: string } = {
  "t-shirts": "limbah",
  pants: "makanan",
  sweatshirts: "kerajinan",
};

type Props = {
  params: {
    category: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Handle redirect untuk kategori lama
  if (categoryMapping[params.category]) {
    return {
      title: `Kategori | Ecommerce Template`,
    };
  }

  const capitalizedCategory = capitalizeFirstLetter(params.category);

  return {
    title: `${capitalizedCategory} | Ecommerce Template`,
    description: `Kategori ${capitalizedCategory} di e-commerce template`,
  };
}

const CategoryPage = async ({ params }: Props) => {
  // Redirect kategori lama ke kategori baru
  if (categoryMapping[params.category]) {
    redirect(`/${categoryMapping[params.category]}`);
  }

  return (
    <section className="pt-14">
      <Suspense
        fallback={<ProductSkeleton extraClassname="" numberProducts={6} />}
      >
        <CategoryProducts category={params.category} />
      </Suspense>
    </section>
  );
};

const CategoryProducts = async ({ category }: { category: string }) => {
  const products: any = await getCategoryProducts(category);

  return <Products products={products} extraClassname="" />;
};

export default CategoryPage;

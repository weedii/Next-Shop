import ProductList from "@/components/shared/Product/ProductList";
import { getLatestProducts } from "@/lib/actions/product.actions";

export default async function Home() {
  const latestProducts = await getLatestProducts();
  return (
    <div className="space-y-8">
      <ProductList title="Newest Arrivels" data={latestProducts} />
    </div>
  );
}

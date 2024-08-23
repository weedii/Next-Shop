import { ProductType } from "@/types";
import ProductCard from "./ProductCard";

const ProductList = ({
  title,
  data,
}: {
  title: string;
  data: ProductType[];
}) => {
  return (
    <>
      <h2 className="h2-bold">{title}</h2>
      {data.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((product: ProductType) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p>No products available</p>
        </div>
      )}
    </>
  );
};

export default ProductList;

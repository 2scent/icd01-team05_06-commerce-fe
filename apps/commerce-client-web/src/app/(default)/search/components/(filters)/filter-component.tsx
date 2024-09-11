import { Product } from '@/types/productTypes';
import { Accordion } from '@/components/ui/accordion';
import PriceFilter from './price-filter';
import PublisherFilter from './publisher-filter';
import CategoryFilter from './category-filter';

const FilterComponent = ({ products }: { products: Product[] }) => {
  const publishers = [...new Set(products.map((product) => product.publisher))];

  return (
    <div className="w-full max-w-md rounded-lg border p-4">
      <Accordion type="multiple" className="w-full">
        <PriceFilter />
        <Suspense fallback="로딩 중..">
          <PublisherFilter publishers={publishers} />
        </Suspense>
        <CategoryFilter products={products} />
      </Accordion>
    </div>
  );
};

export default FilterComponent;

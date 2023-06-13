import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />

      <ProductCard
        product={product}
        className="bg-dark text-white"
        key={product.id}
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({reset,count, increaseBy, isMaxCountReached, maxCount}) => (
            <>
              <ProductImage
                className="custom-image"
                style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
              />
              <ProductTitle className="text-bold" activeClass="active" />
              <ProductButtons className="custom-buttons" />

              <button onClick={reset}>Reset</button>
              <button onClick={ () => increaseBy(-2)}> -2 </button>
              {
                (!isMaxCountReached && <button onClick={ () => increaseBy(+2)}> +2 </button>)
              }
              
              <span>{count} - {maxCount}</span>
            </>
          )
        }
        
      </ProductCard>
    </div>
  );
};

import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";

const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
            <ProductCard.Image />
            <ProductCard.Title  title={'Café'}/>
            <ProductCard.Buttons />
        </ProductCard>

         <ProductCard product={product}>
            <ProductImage/>
            <ProductTitle title={'Test'}/>
            <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};

import { useState, useEffect, React } from "react";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await fetch("https://fakestoreapi.com/products");
        let products = await res.json();
        setData(products);
      } catch (error) {
        console.log({ message: `Error Occured ${error}` });
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          id="productCard"
          style={{
            // border: "1px solid black",
            height: "auto",
            boxShadow:
              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
              padding:"10px 20px"
          }}
        >
          <img
            src={item.image}
            alt={`${item.title} Product Image`}
            width="100%"
            height="100vh"
            style={{
            
              scale: "1px",
              height: "50vh",
              margin: "auto",
            }}
          />
          <h1>
            <strong>Title : </strong>
            {item.title}
          </h1>
          <p>
            <strong>Price :</strong>
            &nbsp;$ {item.price}
          </p>
        </div>
      ))}
    </>
  );
}

export default Products;

import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div
      id="productsContainer"
      style={{
        // border: "1px solid black",
        margin: "auto",
        padding: "20px",
        marginTop: "20px",
        width: "95vw",
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "20px",
      }}
    >
      <Products />
    </div>
  );
}

export default Home;

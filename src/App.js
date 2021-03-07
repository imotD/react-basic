// import logo from "./logo.svg";
import "./App.css";

function App() {
  //JSX JavaScript XML bisa mengabungkan tag html

  return (
    <div className="ParentBox">
      <ProductImg />
      <ProductInfo
        isDiscount="yes"
        category="Special"
        title="Puma Black Classic"
        price="1500"
      />
    </div>
  );
}

function CheckDiscount(props) {
  const { isDiscount } = props;
  if (isDiscount === "yes") {
    return <p>Diskon 50%</p>;
  } else if (isDiscount === "comming") {
    return <p>Comming soon</p>;
  } else {
    return <p>Belum ada diskon</p>;
  }
}

function ProductImg() {
  return (
    <div className="Foto">
      <img src="https://www.sneakpeek.com.ph/8355-big_default_2x/suede-classic-plus-black.jpg"></img>
    </div>
  );
}

function ProductInfo(props) {
  const { category, title, price, isDiscount } = props;
  const benefits = ["Bahan canvas", "sangat ringan", "tampilan casual"];
  const ListBenefits = benefits.map((itemBenefits) => <li>{itemBenefits}</li>);

  return (
    <div className="Desc">
      <p className="Category">{category}</p>
      <h1 className="Title">{title}</h1>
      <p className="Price">IDR {price} K</p>
      <CheckDiscount isDiscount={isDiscount} />
      {ListBenefits}
      <p className="Info">
        Create React App doesn’t handle backend logic or databases; it just
        creates a frontend build pipeline, so you can use it with any backend
        you want. Under the hood, it uses Babel and webpack, but you don’t need
        to know anything about them. When you’re ready to deploy to production,
      </p>
      <a onClick={(i) => addToCart(title, i)} href="#">
        Add to Cart
      </a>
    </div>
  );
}

function addToCart(i) {
  return console.log("tambah Item " + i);
}

export default App;

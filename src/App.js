// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="ParentBox">
        <FotoProduk />
        <ProdukInfo
          isDiscount="no"
          name="Nike Air Force"
          category="FlashSale"
        />
      </div>
    </div>
  );
}

function FotoProduk() {
  return (
    <div className="Foto">
      <img alt="test" src="nike.png" />
    </div>
  );
}

function ProdukInfo(props) {
  const { category, name, isDiscount } = props;
  const price = "1890000";
  const benefits = [
    "tidak kusut terkena air",
    "bahan lebih halus",
    "tidak gerah"
  ];
  const listItem = benefits.map(item =>
    <li>
      {item}
    </li>
  );

  return (
    <div className="Deskripsi">
      <p className="Tag">
        {category}
      </p>
      <h1 className="Title">
        {name}
      </h1>
      <CheckDiscount isDiscount={isDiscount} />
      <p className="Price">
        IDR {price}
      </p>
      <ul>
        <li>
          {listItem}
        </li>
      </ul>
      <p className="Info">loremfsdfasdf</p>
      <a onClick={e => TambahCart(name, e)} href="#t">
        Add to Cart
      </a>
    </div>
  );
}

function TambahCart(e) {
  return console.log("Membeli produk..." + e);
}

function CheckDiscount(props) {
  const { isDiscount } = props;
  if (isDiscount === "yes") {
    return <p>Diskon 50%</p>;
  } else {
    return <p>Belum ada diskon</p>;
  }
}

export default App;

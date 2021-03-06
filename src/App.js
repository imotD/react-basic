// import logo from "./logo.svg";
import "./App.css";

function App() {
  //JSX JavaScript XML bisa mengabungkan tag html
  const category = "Sneaker";
  const title = "Puma Classic Suede";
  const price = 1500;

  return (
    <div class="ParentBox">
      <div class="Foto">
        <img src="https://www.sneakpeek.com.ph/8355-big_default_2x/suede-classic-plus-black.jpg"></img>
      </div>
      <div class="Desc">
        <p class="Category">{category}</p>
        <h1 class="Title">{title}</h1>
        <p class="Price">IDR {price} K</p>
        <p class="Info">
          Create React App doesn’t handle backend logic or databases; it just
          creates a frontend build pipeline, so you can use it with any backend
          you want. Under the hood, it uses Babel and webpack, but you don’t
          need to know anything about them. When you’re ready to deploy to
          production, running npm run build will create an optimized build of
          your app in the build folder. You can learn more about Create React
          App from its README and the User Guide.
        </p>
      </div>
    </div>
  );
}

export default App;

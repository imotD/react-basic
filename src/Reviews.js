import "./App.css";

function Reviews() {
  const users = [
    {
      id: 1,
      name: "Yessi Hutagaol",
      review: "Barangnya sesuai gambaar, kualitas jangan ditanya",
      img:
        "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 2,
      name: "Paramansyah H",
      review: "Gak nyesel gue beli ini. asyoy banget",
      img:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 3,
      name: "Curzhika Yuandari",
      review: "Aku suka banget sepatunya.. makasih sayang",
      img:
        "https://images.pexels.com/photos/6941834/pexels-photo-6941834.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];

  const dataUsers = users.map((data) => (
    <div className="Item">
      <img src={data.img}></img>
      <div className="User">
        <h3>{data.name}</h3>
        <p>{data.review}</p>
      </div>
    </div>
  ));

  return (
    <div className="Review-box">
      <h2>Review</h2>
      {dataUsers}
    </div>
  );
}

export default Reviews;

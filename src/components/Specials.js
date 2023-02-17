import "../assets/style/Specials.css";


const Specials = () => {
  const items = [
    {
      id:1,
      img: require("../assets/img/greek_salad.jpg"),
      title: "Greek salad",
      price: "12.99",
      description: "",
    },
    {
      id:2,
      img: require("../assets/img/bruchetta.svg"),
      title: "Bruchetta",
      price: "5.99",
      description: "",
    },
    {
      id:3,
      img: require("../assets/img/lemon_dessert.jpg"),
      title: "Lemon Dessert",
      price: "5.00",
      description: "",
    },
  ]
  return(
    <section className="Specials">
      <div>
        <h2>This Weeks Specials</h2>
        <button>Menu</button>
      </div>
      <div>
        {
          items.map((item) => (
            <article key={item.id}>
              <img src={item.img} alt={item.title}/>
              <div>
                <h3>{item.title}</h3>
                <p>$ {item.price}</p>
              </div>
              <p>{item.description}</p>
              <button>Order a delivery </button>
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Specials;
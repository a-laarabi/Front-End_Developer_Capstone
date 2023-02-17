import restauranfood from "../assets/img/restauranfood.jpg";
import "../assets/style/CallToAction.css";

const CallToAction = () => {
  return (
    <section>
      <div>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <button>Reserve a Table</button>
      </div>
      <div>
        <img src={restauranfood} alt="restauran food" />
      </div>
    </section>
  )
}

export default CallToAction;
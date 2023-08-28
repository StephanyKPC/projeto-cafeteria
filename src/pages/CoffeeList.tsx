import { useNavigate } from "react-router-dom";
import { coffeeList } from "../data";
import './coffeeList.css';

function CoffeeList() {
  const navigate = useNavigate();
 return (
    <div className="list-page">
    <h1>CoffeeList page</h1>
    <hr />
    <main>
      {coffeeList.map((coffee) => (
        <button
        className="coffee-card"
        style={{
          backgroundImage: `url(${coffee.image})`,
          backgroundSize: 'cover',
        }}
        onClick={() => navigate(`/coffees/${coffee.slug}`)}
        >
          <h3>{coffee.title}</h3>
        </button>
      ))}
    </main>
   </div>
 )
}

export default CoffeeList;
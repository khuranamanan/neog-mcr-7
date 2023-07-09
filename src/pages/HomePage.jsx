import Card from "../components/Card";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const { data } = useData();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-3xl font-bold">Welcome To Trip Advisor</h1>
      <p className="text-blue-600 font-medium">
        Top Continents for your next holiday
      </p>
      <div className="flex gap-3 flex-wrap justify-center mb-4">
        {data.continents.map((con) => {
          function handleNavigation() {
            navigate(`/${con.id}`);
          }

          return (
            <Card
              key={con.id}
              image={con.image}
              heading={con.name}
              click={handleNavigation}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;

import { useParams, useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";
import Card from "../components/Card";
import { AiOutlineArrowLeft } from "react-icons/ai";

function CountriesPage() {
  const { continenetID } = useParams();
  const { data } = useData();
  const navigate = useNavigate();

  const findCon = data.continents.find(
    (con) => con.id === Number(continenetID)
  );

  return (
    <div className="flex flex-col gap-4 items-center">
      <button
        className="p-2 aspect-square h-8 bg-blue-900 hover:bg-blue-800 self-start rounded-full"
        onClick={() => navigate(-1)}
      >
        <AiOutlineArrowLeft />
      </button>
      <h1 className="text-2xl font-bold">
        Top Countries in {findCon.name} for your travel
      </h1>

      <div className="flex gap-3 flex-wrap justify-center mb-4">
        {findCon.countries.map((con) => {
          function handleNavigation() {
            navigate(`${con.id}`);
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

export default CountriesPage;

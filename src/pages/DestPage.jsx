import { useParams, useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";
import Card from "../components/Card";
import { AiOutlineArrowLeft } from "react-icons/ai";

function DestPage() {
  const { continenetID, countryID } = useParams();
  const { data } = useData();
  const navigate = useNavigate();

  const findCon = data.continents.find(
    (con) => con.id === Number(continenetID)
  );

  const findCountry = findCon.countries.find(
    (country) => country.id === Number(countryID)
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
        Top Places in {findCountry.name} for your travel
      </h1>

      <div className="flex gap-3 flex-wrap justify-center mb-4">
        {findCountry.destinations.map((country) => {
          function handleNavigation() {
            navigate(`${country.id}`);
          }

          return (
            <Card
              key={country.id}
              image={country.image}
              heading={country.name}
              click={handleNavigation}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DestPage;

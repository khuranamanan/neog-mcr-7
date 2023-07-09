import { useParams, useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";
import { AiOutlineArrowLeft } from "react-icons/ai";

function PlacePage() {
  const { continenetID, countryID, placeID } = useParams();
  const { data } = useData();
  const navigate = useNavigate();

  const findCon = data.continents.find(
    (con) => con.id === Number(continenetID)
  );

  const findCountry = findCon.countries.find(
    (country) => country.id === Number(countryID)
  );

  const findPlace = findCountry.destinations.find(
    (place) => place.id === Number(placeID)
  );

  return (
    <div className="flex flex-col gap-4 items-center">
      <button
        className="p-2 aspect-square h-8 bg-blue-900 hover:bg-blue-800 self-start rounded-full"
        onClick={() => navigate(-1)}
      >
        <AiOutlineArrowLeft />
      </button>
      <h1 className="text-4xl font-bold">{findPlace.name}</h1>

      <div className="flex gap-3 flex-wrap justify-center mb-4">
        <div className="max-w-[300px] aspect-square">
          <img
            src={findPlace.image}
            alt={findPlace.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="grow p-4 flex flex-col gap-3">
          <p>
            <span className="text-blue-900"> Description:</span>
            {findPlace.description}
          </p>
          <p>
            <span className="text-blue-900"> Rating:</span> {findPlace.reatings}
          </p>
          <p>
            <span className="text-blue-900"> Reviews:</span> {findPlace.reviews}
          </p>
          <p>
            <span className="text-blue-900"> Location:</span>{" "}
            {findPlace.location}
          </p>
          <p>
            <span className="text-blue-900"> Opening Hours:</span>{" "}
            {findPlace.openingHours}
          </p>
          <p>
            <span className="text-blue-900"> Ticket Price:</span>{" "}
            {findPlace.ticketPrice}
          </p>
          <p>
            <span className="text-blue-900"> Website:</span>{" "}
            <a
              href={findPlace.website}
              target="_blank"
              rel="noreferrer"
              className="underline text-blue-600"
            >
              {findPlace.website}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlacePage;

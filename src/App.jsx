import { Route, Routes } from "react-router";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import CountriesPage from "./pages/CountriesPage";
import DestPage from "./pages/DestPage";
import PlacePage from "./pages/PlacePage";

function App() {
  return (
    <div className="flex flex-col gap-2 bg-gray-900 text-white min-h-screen">
      <NavigationBar />
      <div className="container mx-auto p-2">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:continenetID" element={<CountriesPage />} />
          <Route path="/:continenetID/:countryID" element={<DestPage />} />
          <Route
            path="/:continenetID/:countryID/:placeID"
            element={<PlacePage />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="flex flex-col gap-2">
      <NavigationBar />
      <div className="container mx-auto p-2">
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
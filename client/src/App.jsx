import Layout from "./layout";
import DetailsPage from "./pages/details";
import Home from "./pages/home";
import {
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router";

function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/country-details/:id" element={<DetailsPage />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

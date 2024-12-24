import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Route";

function App() {
  return (
    <div className="mx-auto bg-no-repeat">
      <RouterProvider router={router}>
        
      </RouterProvider>
    </div>
  );
}

export default App;

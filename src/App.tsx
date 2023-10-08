import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Welcome from "./routes/Welcome";
import ProfileSearch from "./routes/Profile/ProfileSearch";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<Welcome />} />
          <Route path="profile" element={<ProfileSearch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

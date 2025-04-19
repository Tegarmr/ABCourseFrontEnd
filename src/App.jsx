import { Routes, Route } from "react-router-dom";
import Overview from "./overview/Overview";

/* ini import materi */
import Adjectives from "./materials/Adjectives";
/* ini import quiz */
import QuizPronouns from "./quiz/QuizPronouns";

function AppRoutes() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/quizPronouns" element={<QuizPronouns />} />
        <Route path="/adjective" element={<Adjectives />} />
      </Routes>
    </main>
  );
}

export default AppRoutes;

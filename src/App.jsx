import { Routes, Route } from "react-router-dom";
import Overview from "./overview/Overview";
import Chatbot from "./overview/components/Chatbot";
import Courses from "./overview/components/Courses";

/* ini import materi */
import Adjectives from "./materials/Adjectives";
import Causative from "./materials/Causative";

/* ini import quiz */
import QuizPronouns from "./quiz/QuizPronouns";

/* ini import overview */
import Layout from "./overview/Layout";

function AppRoutes() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Overview />} />
        {/* ini import quiz */}
        <Route path="/quizPronouns" element={<QuizPronouns />} />

        {/* ini import materi */}
        <Route path="/adjective" element={<Adjectives />} />
        <Route path="/causative" element={<Causative />} />

        {/* ini import overview */}
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/courses" element={<Courses />} />

        <Route path="/layout" element={<Layout />} />
      </Routes>
    </main>
  );
}

export default AppRoutes;

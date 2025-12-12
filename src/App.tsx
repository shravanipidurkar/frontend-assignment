import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import QuizLanding from "./components/QuizLanding";
import QuizQuestionPage from "./components/QuizQuestionPage";
import QuizQuestionPage2 from "./components/QuizQuestionPage2";
import QuizQuestionPage3 from "./components/QuizQuestionPage3";
import FinalScore from "./components/FinalScorePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizLanding />} />
        <Route path="/question2" element={<QuizQuestionPage />} />
        <Route path="/question3" element={<QuizQuestionPage2 />} />
        <Route path="/question4" element={<QuizQuestionPage3 />} />
        <Route path="/result" element={<FinalScore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

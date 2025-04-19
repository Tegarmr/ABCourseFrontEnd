import { Link } from "react-router-dom";

function Overview() {
  return (
    <div>
      <h1>Selamat Datang di Halaman Utama!</h1>
      <p>Ini adalah halaman Home yang sangat sederhana 😄</p>
      <p>=====================ini adalah materi=========================</p>
      <Link to="/adjective">Materi adjective</Link>
      <Link to="/causative">Materi causative</Link>
      <p>=====================ini adalah kuis=========================</p>
      {/* Ini adalah link kuis */}
      <Link to="/quizPronouns">Pronouns Quiz</Link>

      {/* coba overview */}
      <p>=====================ini adalah overview=========================</p>
      <Link to="/layout">layout</Link>
    </div>
  );
}

export default Overview;

// src/pages/Courses.jsx
import { Link } from 'react-router-dom';
import Layout from '../Layout';
import "../css/Courses.css";

import Image1 from "../../assets/gambar1.png";
import Image2 from "../../assets/gambar2.png";
import Image3 from "../../assets/gambar3.png";
import Image4 from "../../assets/gambar4.png";

const courseList = [
  { title: "Pronouns", link: "/adjective", image: Image1 },
  { title: "Conditionals", link: "/causative", image: Image2 }
];

const Courses = () => {
  return (
    <Layout>
      <div className="courses-container">
        <h1 className="courses-title">Welcome back, ready for your next lesson?</h1>
        <div className="courses-grid">
          {courseList.map((course, index) => (
            <Link to={course.link} key={index} className="course-card">
              <img src={course.image} alt={course.title} className="course-image" />
              <div className="divider" />
              <h3 className="course-title">{course.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Courses;

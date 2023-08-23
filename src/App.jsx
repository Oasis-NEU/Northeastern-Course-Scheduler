import { CourseForm } from "./components/CourseForm";
import { CourseList } from "./components/CourseList";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [courses, setCourses] = useState([]);

  function addCourse(name, day) {
    setCourses((currentCourses) => {
      return [...currentCourses, { id: crypto.randomUUID(), name, day }];
    });
  }

  function deleteCourse(id) {
    setCourses((currentCourses) => {
      return currentCourses.filter((course) => course.id !== id);
    });
  }

  console.log(courses);

  return (
    <>
      <div className="container">
        <CourseForm onSubmit={addCourse} />
        <h1 className="header">Northeastern Course Scheduler</h1>
        <div className="list-container">
          <CourseList courses={courses} deleteCourse={deleteCourse} />
        </div>
      </div>
    </>
  );
}

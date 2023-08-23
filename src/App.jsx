import { CourseForm } from "./components/CourseForm";
import { CourseList } from "./components/CourseList";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [courses, setCourses] = useState([]);

  function addCourse(name, day) {
    setCourses((currentCourses) => {
      return [...currentCourses, { name, day }];
    });
  }

  function deleteCourse(name, day) {
    setCourses((currentCourses) => {
      return currentCourses.filter(
        (course) => !(course.name === name && course.day === day)
      );
    });
  }

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

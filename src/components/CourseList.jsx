import { Course } from "./Course";

export function CourseList({ courses, deleteCourse }) {
  return (
    <ul className="list">
      {courses.length === 0 && <p>No courses added yet.</p>}
      {courses.map((course) => (
        <Course {...course} deleteCourse={deleteCourse} />
      ))}
    </ul>
  );
}

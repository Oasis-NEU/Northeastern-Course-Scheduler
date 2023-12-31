import { useState } from "react";
export function CourseForm({ onSubmit }) {
  const [newCourse, setNewCourse] = useState("");
  const [newDay, setNewDay] = useState("Monday");

  function handleSubmit(e) {
    e.preventDefault();

    if (newCourse === "") return;

    onSubmit(newCourse, newDay);

    setNewCourse("");
    setNewDay("Monday");
  }

  return (
    <form className="new-class-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <p htmlFor="course">Course</p>
        <input
          type="text"
          id="course"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
        />
        <p>Day</p>
        <select
          name="days"
          id="days"
          value={newDay}
          onChange={(e) => setNewDay(e.target.value)}
        >
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
        </select>

        <button className="Add">Add</button>
      </div>
    </form>
  );
}

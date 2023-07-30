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
        <label htmlFor="class">Course</label>
        <input
          type="text"
          id="class"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
        />
        <label>Day</label>
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

export function Course({ name, day, deleteCourse }) {
  return (
    <li>
      <label>
        <span className="course-name">{name}</span> on {day}
      </label>
      <button className="delete-button" onClick={() => deleteCourse(name, day)}>
        Delete
      </button>
    </li>
  );
}

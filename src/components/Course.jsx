export function Course({ id, name, day, deleteCourse }) {
  return (
    <li key={id}>
      <label>
        <span className="course-name">{name}</span> on {day}
      </label>
      <button className="delete-button" onClick={() => deleteCourse(id)}>
        Delete
      </button>
    </li>
  );
}

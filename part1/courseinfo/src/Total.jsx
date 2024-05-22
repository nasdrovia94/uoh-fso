const Total = ({ parts }) => {
  let totalExercises =
    parts[0].exercises + parts[1].exercises + parts[2].exercises;

  return <p>total exercises: {totalExercises}</p>;
};

export default Total;

const Content = ({ parts }) => {
  return (
    <>
      <div>
        {parts[0].name}, number of exercises: {parts[0].exercises}
      </div>
      <div>
        {parts[1].name}, number of exercises:{parts[1].exercises}
      </div>
      <div>
        {parts[2].name}, number of exercises:{parts[2].exercises}
      </div>
    </>
  );
};

export default Content;

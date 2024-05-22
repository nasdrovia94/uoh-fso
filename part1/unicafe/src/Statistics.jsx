import StatisticLine from "./StatisticLine";

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  averageScore,
  positivePercentage,
}) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>total</td>
          <td>{totalFeedback}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{Math.round(averageScore * 100) / 100}</td>
        </tr>
        <tr>
          <td>positive percentage</td>
          <td>{Math.round(positivePercentage * 100) / 100}%</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Statistics;

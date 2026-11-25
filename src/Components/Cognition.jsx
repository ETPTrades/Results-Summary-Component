export default function Cognition({ image, name, score, colors }) {
  return (
    <div className="cognition__container" style={colors}>
      <div className="cognition__category-container">
        <img src={image} alt="" />
        <span>{name}</span>
      </div>
      <div className="cognition__score-container">
        <span>{score} / 100</span>
      </div>
    </div>
  );
}

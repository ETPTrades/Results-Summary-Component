export default function Cognition({ image, name, score }) {
  return (
    <div className="cognition__container">
      <div className="cogition__category-container">
        <img src={image} alt="" />
        <span>{name}</span>
      </div>
      <div className="cognition__score-container">
        <span>{score} / 100</span>
      </div>
    </div>
  );
}

import Cognition from "./Cognition.jsx";

export default function Summary() {
  const cognitiveArr = [
    {
      id: 1,
      image: "../assets/images/icon-reaction.svg",
      name: "Reaction",
      score: 80,
    },
    {
      id: 2,
      image: "../assets/images/icon-memory.svg",
      name: "Memory",
      score: 92,
    },
    {
      id: 3,
      image: "../assets/images/icon-verbal.svg",
      name: "Visual",
      score: 61,
    },
    {
      id: 4,
      image: "../assets/images/icon-visual.svg",
      name: "Verbal",
      score: 73,
    },
  ];
  return (
    <div className="summary__container">
      <p>summary</p>
      {cognitiveArr.map((sense) => (
        <Cognition
          key={sense.id}
          image={sense.image}
          name={sense.name}
          score={sense.score}
        />
      ))}
      <button>Continue</button>
    </div>
  );
}

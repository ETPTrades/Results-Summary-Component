import Cognition from "./Cognition.jsx";

export default function Summary() {
  const cognitiveArr = [
    {
      id: 1,
      image: "../assets/images/icon-reaction.svg",
      name: "Reaction",
      score: 80,
      colors: { color: "var(--red-dark)", backgroundColor: "var(--red-light)" },
    },
    {
      id: 2,
      image: "../assets/images/icon-memory.svg",
      name: "Memory",
      score: 92,
      colors: {
        color: "var(--yellow-dark)",
        backgroundColor: "var(--yellow-light)",
      },
    },
    {
      id: 3,
      image: "../assets/images/icon-verbal.svg",
      name: "Verbal",
      score: 61,
      colors: {
        color: "var(--green-dark)",
        backgroundColor: "var(--green-light)",
      },
    },
    {
      id: 4,
      image: "../assets/images/icon-visual.svg",
      name: "Visual",
      score: 73,
      colors: {
        color: "var(--blue-dark)",
        backgroundColor: "var(--blue-light)",
      },
    },
  ];
  return (
    <div className="summary__container">
      <p style={{ marginBlock: "24px", color: "var(--navy-dark)" }}>Summary</p>
      {cognitiveArr.map((sense) => (
        <Cognition
          key={sense.id}
          image={sense.image}
          name={sense.name}
          score={sense.score}
          colors={sense.colors}
        />
      ))}
      <button>Continue</button>
    </div>
  );
}

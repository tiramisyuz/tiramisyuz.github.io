import Background from "../components/Background";
import InfoCard from "../components/InfoCard";

export default function Home() {
  return <div style={{
      display: "flex",
      "justify-content": "center",
    "align-items": "center",
      height: "100vh"
  }}>
    <Background />
    <InfoCard/>
  </div>;
}

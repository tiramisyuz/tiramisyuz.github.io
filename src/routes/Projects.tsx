import Background from "../components/Background";
import ProjectsCard from "../components/ProjectsCard";

export default function Projects() {
    return <div style={{
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        height: "100vh"
    }}>
        <Background />
        <ProjectsCard/>
    </div>;
}

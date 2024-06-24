import Background from "../components/Background";
import FriendsCard from "../components/FriendsCard";

export default function Friends() {
    return <div style={{
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        height: "100vh"
    }}>
        <Background />
        <FriendsCard />
    </div>;
}

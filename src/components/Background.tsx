export default function Background() {
    return <iframe style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        "z-index": -1,
        "pointer-events": "none"
    }} src="https://www.shadertoy.com/embed/WdSSRD?gui=false&t=10&paused=false&muted=true" allowfullscreen></iframe>;
}
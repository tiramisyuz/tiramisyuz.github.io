import { Breadcrumbs, Avatar, Card, Link, Typography, CardContent } from "@suid/material";

export default function ProjectsCard() {
    return <Card sx={{ display: "flex", padding: 3, borderRadius: 3, backdropFilter: "blur(40px)", filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.5))", background: "rgba(0,0,0,0.5)" }}>
        <Breadcrumbs aria-label="breadcrumb" color="gray">
            <Link underline="hover" color="gray" href="/">
                tiramisu.gay
            </Link>
            <Typography color="white">Projects</Typography>
        </Breadcrumbs>
        <CardContent sx={{ marginLeft: "-190px", marginTop: "15px" }}>
            <Typography color="white">I wanna make this look nicer in the future, but the main projects</Typography>
            <Typography color="white">I've worked on are <Link href="https://github.com/tiramisyuz/ghcss-ext" target="none">ghcss</Link> and <Link href="https://sendchat.xyz" target="none">Sendchat</Link>.</Typography>
            <br></br>
            <Typography color="white">And, this very site. ♥</Typography>
        </CardContent>
    </Card>;
}
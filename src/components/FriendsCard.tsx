import { Breadcrumbs, Avatar, Card, Link, Typography, CardContent } from "@suid/material";

export default function FriendsCard() {
    return <Card sx={{ display: "flex", padding: 3, borderRadius: 3, backdropFilter: "blur(40px)", filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.5))", background: "rgba(0,0,0,0.5)" }}>
        <Breadcrumbs aria-label="breadcrumb" color="gray">
            <Link underline="hover" color="gray" href="/">
                tiramisu.gay
            </Link>
            <Typography color="white">Friends</Typography>
        </Breadcrumbs>
        <CardContent sx={{ display: "flex", marginLeft: "-190px", marginTop: "15px" }}>
            <Link sx={{margin: "5px"}} href="https://github.com/Kodarru">
                <Avatar src="https://github.com/Kodarru.png" />
            </Link>
            <Link sx={{ margin: "5px" }} href="https://sendchat.xyz/user/intbar">
                <Avatar src="https://github.com/Intbar.png" />
            </Link>
            <Link sx={{ margin: "5px" }} href="https://trixie.tiramisu.gay/">
                <Avatar src="https://github.com/trixie909.png" />
            </Link>
            <Link sx={{ margin: "5px" }} href="https://github.com/sallykorisu">
                <Avatar src="https://github.com/sallykorisu.png" />
            </Link>
            <Link sx={{ margin: "5px" }} href="https://elh.gay/">
                <Avatar src="https://dp.nea.moe/avatar/334833943838720000.png" />
            </Link>
            <Link sx={{ margin: "5px" }} href="https://zoey-on-github.github.io/">
                <Avatar src="https://github.com/zoey-on-github.png" />
            </Link>
            <Link sx={{ margin: "5px" }} href="https://github.com/pandaptable">
                <Avatar src="https://github.com/pandaptable.png" />
            </Link>
            <Link sx={{ margin: "5px" }} href="https://f53.dev/">
                <Avatar src="https://github.com/CodeF53.png" />
            </Link>
            <Link sx={{ margin: "5px" }} href="https://linktr.ee/greentea1">
                <Avatar src="https://dp.nea.moe/avatar/851461775521480774.png" />
            </Link>
            {/*<Link sx={{ margin: "5px" }} href="https://bims.sh/">
                <Avatar src="https://github.com/Bims-sh.png" />
            </Link>*/}
        </CardContent>
    </Card>;
}
import { ButtonGroup, Button, CardMedia, Card, CardContent, Typography, Box } from "@suid/material";

export default function InfoCard() {
    return <Card sx={{ minWidth: 315, maxWidth: 525, display: "flex", padding: 3, borderRadius: 3, backdropFilter: "blur(40px)", filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.5))", background: "rgba(0,0,0,0.5)" }}>
        <CardMedia sx={{ width: 200, height: 200, borderRadius: "50%" }} image="https://github.com/tiramisyuz.png" />
        <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}>
            <br></br>
            <Typography sx={{ color: "white", marginLeft: "15px", marginTop: "10px" }} component="div" variant="h5">
                i'm Tiramisu
            </Typography>
            <Typography sx={{ color: "white", marginLeft: "16px", marginTop: "10px" }} component="div" variant="subtitle1">
                hi! i enjoy programming things
            </Typography>
            <CardContent sx={{ flex: "1 0 auto" }}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button sx={{ background: "#f6085c" }} href="https://github.com/tiramisyuz">Github</Button>
                    <Button sx={{ background: "#f6085c" }} href="/projects">Projects</Button>
                    <Button sx={{ background: "#f6085c" }} href="/friends">Friends</Button>
                </ButtonGroup>
            </CardContent>
        </Box>
    </Card>;
}
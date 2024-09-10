import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import Logo from "@/components/Logo/Logo";

export default async function Navbar() {

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Box sx={{ flexGrow: 1, }}>
                    <Logo />
                </Box>
                <Button variant="contained">Login</Button>
            </Toolbar>
        </AppBar>
    );

}
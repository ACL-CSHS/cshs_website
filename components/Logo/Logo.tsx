import React from 'react';
import {Barlow_Condensed} from "next/font/google";
import {Typography} from "@mui/material";
import Link from "next/link";

const font = Barlow_Condensed({
    weight: "900",
    subsets: ["latin"],
});

export default function Logo({ big }: { big?: boolean }) {
    return (
        <Link href="/" style={{ color: 'inherit', textDecoration: 'none', }}>
            <Typography fontSize={big ? 150 : 50} letterSpacing={15} {...font.style}>CSHS</Typography>
        </Link>
    );
}
import React from "react";
import { Helmet } from "react-helmet";

export default function Header() {
    return (
        <Helmet>
        <title>0x22</title>
        <meta name="description" content="0x22" />
        <meta name="keywords" content="0x22" />
        <meta name="author" content="0x22" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="favicon.ico" />
        </Helmet>
    );
    }
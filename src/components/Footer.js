import React from "react";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <div>
            <p className="ml-auto px-auto flex justify-center mb-5">&copy;&nbsp;2022 - {year} &nbsp;<a href="https://aydgn.me/">aydgn.me</a></p>
        </div>
    );
}
import React from 'react'
import { IconLogoWhite } from "../static";
import { Center, Image } from "@chakra-ui/react";
import "./Header.css";

const Header = () => {
    return (
        <header>
        <div className="main">
            <Center bg="#2C2B2B" w="100%" h="50px" color="white">
                <a
                    href="https://nftgarden.app"
                    alt="nft_garden"
                    rel="noreferrer"
                    target="_blank"
                >
                    <Image h="31px" w="200px" src={IconLogoWhite} alt="NFT_logo" />
                </a>
            </Center>
        </div>
        </header>
    )
}

export default Header
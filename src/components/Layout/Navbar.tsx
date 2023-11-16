import Image from "next/image";
import React from "react";
import logo from "@/assets/image/logo.jpg";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="sticky top-0 shadow-lg bg-white z-50">
            <div className="container flex justify-between items-center">
                <div className="logo">
                    <Image
                        src={logo}
                        alt={"brand"}
                        width={100}
                        height={100}
                        className="rounded-3xl"
                    />
                </div>
                <div className="flex items-center gap-5">
                    <Link
                        href={"/"}
                        className="text-blue-600 font-bold"
                    >
                        Asosiy sahifa
                    </Link>
                    <Link
                        href={"/products"}
                        className="text-blue-600 font-bold"
                    >
                        Mahsulotlar
                    </Link>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        href={"/sing-in"}
                        className="text-white font-bold border bg-blue-600 py-2 px-5 rounded-xl"
                    >
                        Kirish
                    </Link>
                    <Link
                        href={"/sing-in"}
                        className="text-blue-600 font-bold border border-blue-600 py-2 px-5 rounded-xl"
                    >
                        Ro'yxatdan o'tish
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

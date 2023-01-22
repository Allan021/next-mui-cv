import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link
      href="/"
      passHref
      style={{
        display: "flex",
      }}
    >
      <Image
        src="/aceweb.png"
        alt="Logo de ACEWEB"
        priority={true}
        width={145}
        height={35}
      />
    </Link>
  );
};

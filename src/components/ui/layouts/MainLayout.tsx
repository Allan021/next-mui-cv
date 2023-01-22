import Head from "next/head";
import React, { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const MainLayout: FC<LayoutProps> = ({
  children,
  title = "CV | Allan Castro",
  description = "Portfolio of Allan Castro",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main>{children}</main>
    </>
  );
};

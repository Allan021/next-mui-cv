import { Box } from "@mui/material";
import Head from "next/head";
import React, { FC } from "react";
import { Header } from "../navbar";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const MainLayout: FC<LayoutProps> = ({
  children,
  title = "CV | Allan Castro",
  description = "Portfolio de Allan Castro - Desarrollador Web",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <Box>
        <Header />
        <main>{children}</main>
      </Box>
    </>
  );
};

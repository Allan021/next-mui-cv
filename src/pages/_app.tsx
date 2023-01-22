import "@/styles/globals.css";
import "typeface-poppins";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material/";
import { mainTheme } from "@/themes";
import { UIProvider } from "@/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  );
}

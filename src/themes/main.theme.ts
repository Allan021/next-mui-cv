import { createTheme } from "@mui/material/styles";


export const mainTheme = createTheme({
    palette: {
        primary: {
            main: "#19232b",
            "900": "#111111",
        },
        secondary: {
            main: "#20ce65",
        },

    },
    typography: {
        fontFamily: 'Poppins, sans-serif',
        h1: {
            fontSize: '2.3125rem',
            fontWeight: 700,
            lineHeight: 1.2,
            color: "#20ce65"
        },

    },

    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#19232b",
                    color: "#20ce65",
                    transition: "background-color .3s ease, box-shadow .3s ease",
                }
            }
        },
    }
})
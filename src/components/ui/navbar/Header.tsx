import React from "react";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import { Stack } from "@mui/material";
import { Logo } from "../logo";
import { NavList } from "./";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 2,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    sx: {
      backgroundColor: trigger ? "primary.900" : "primary.main",
      boxShadow: trigger ? "0 0 3px rgb(255 255 255 / 20%)" : "none",
    },
  });
}

export const Header = () => {
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar>
          <Toolbar
            sx={{
              height: {
                xs: 64,
                sm: 88,
              },
            }}
          >
            <Container maxWidth="lg">
              <Stack
                direction="row"
                alignItems="center"
                justifyContent={"space-between"}
              >
                <Logo />
                <NavList />
              </Stack>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(122)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Container>
    </React.Fragment>
  );
};

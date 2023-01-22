import { FC } from "react";
import NextLink from "next/link";

import { ListItem, ListItemText } from "@mui/material";
import { Section, useUIContext } from "@/context";
import styles from "./NavItem.module.css";

export const NavItem: FC<Section> = ({ href, id, name }) => {
  const { activeSection } = useUIContext();

  return (
    <ListItem key={id}>
      <NextLink
        href={`#${href}`}
        passHref
        legacyBehavior
        style={{
          textDecoration: "none",
        }}
      >
        <ListItemText
          primary={name}
          className={`${styles["nav-item"]}`}
          sx={{
            textTransform: "uppercase",
            fontWeight: activeSection === `${href}` ? "bold" : "normal",
            color: activeSection === `#${href}` ? "primary.main" : "white",
          }}
        />
      </NextLink>
    </ListItem>
  );
};

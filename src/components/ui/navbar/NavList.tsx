import { useUIContext } from "@/context";
import { List } from "@mui/material";
import { FC } from "react";
import { NavItem } from "./NavItem";
export const NavList: FC = () => {
  const { sections } = useUIContext();

  return (
    <List
      component={"nav"}
      sx={{
        display: "flex",
      }}
    >
      {sections.map((section) => (
        <NavItem key={section.id} {...section} />
      ))}
    </List>
  );
};

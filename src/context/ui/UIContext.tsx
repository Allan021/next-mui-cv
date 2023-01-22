import { createContext, useContext } from "react";

export interface Section {
  id: string;
  name: string;
  href: string;
}

interface ContextProps {
  activeSection: string;
  setActiveSection: (activeSection: string) => void;
  sections: Section[];
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export const UIContext = createContext({} as ContextProps);

export const useUIContext = () => {
  return useContext(UIContext);
};

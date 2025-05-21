import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("jimsify-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("jimsify-theme", theme);
    set({ theme });
  },
}));

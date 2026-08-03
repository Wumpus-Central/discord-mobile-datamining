// === Module 4191: useTheme ===

// Module 4191 (useTheme)
import { ThemeTypes } from "ME";

function useTheme() {
  return require(4101) /* AccessibilityAnnouncer */.useThemeContext().theme;
}
const result = require("set").fileFinishedImporting("hooks/useTheme.tsx");

export default useTheme;
export { useTheme };
export const useThemeIndex = function useThemeIndex() {
  const theme = require(4101) /* AccessibilityAnnouncer */.useThemeContext().theme;
  let num = 0;
  if (ThemeTypes.DARK !== theme) {
    if (ThemeTypes.LIGHT === theme) {
      num = 1;
    }
  }
  return num;
};
export const getThemeIndex = function getThemeIndex(arg0) {
  if (ThemeTypes.DARK === arg0) {
    return 0;
  } else if (tmp.LIGHT === arg0) {
    return 1;
  }
};
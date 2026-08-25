// === Module 4315: useTheme ===

// Module 4315 (useTheme)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;

function useTheme() {
  return AccessibilityAnnouncer.useThemeContext().theme;
}
const ThemeTypes = ME.ThemeTypes;
const result = set.fileFinishedImporting("hooks/useTheme.tsx");

export default useTheme;
export { useTheme };
export const useThemeIndex = function useThemeIndex() {
  const theme = AccessibilityAnnouncer.useThemeContext().theme;
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
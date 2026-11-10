// === Module 5371: useTheme ===

// Module 5371 (useTheme)
import Constants from "Constants" /* 1072 */;
import shared from "shared" /* 5149 */;
import size from "module_2" /* 2 */;

function useTheme() {
  return shared.useThemeContext().theme;
}
const ThemeTypes = Constants.ThemeTypes;
const result = size.fileFinishedImporting("hooks/useTheme.tsx");

export default useTheme;
export { useTheme };
export function useThemeIndex() {
  const theme = shared.useThemeContext().theme;
  let num = 0;
  if (ThemeTypes.DARK !== theme) {
    if (ThemeTypes.LIGHT === theme) {
      num = 1;
    }
  }
  return num;
}
export function getThemeIndex(arg0) {
  if (ThemeTypes.DARK === arg0) {
    return 0;
  } else if (tmp.LIGHT === arg0) {
    return 1;
  }
}
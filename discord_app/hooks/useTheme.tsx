// discord_app/hooks/useTheme.tsx
import Constants from "../Constants.tsx";
import shared from "../design/shared.tsx";
import size from "../../_runtime/metro/00002__.js";

function useTheme() {
  return shared.useThemeContext().theme;
}
const ThemeTypes = Constants.ThemeTypes;
const result = size.fileFinishedImporting("hooks/useTheme.tsx");

export default useTheme;
export { useTheme };
export const useThemeIndex = function useThemeIndex() {
  const theme = shared.useThemeContext().theme;
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

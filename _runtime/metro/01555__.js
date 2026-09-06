// _runtime/metro/01555__.js
import _mod1520 from "01520__.js";
import noop from "00019__.js";

require = arg1;

export const useTheme = function useTheme() {
  const context = noop.useContext(_mod1520.ThemeContext);
  if (null == context) {
    const _Error = Error;
    const error = new Error(
      "Couldn't find a theme. Is your component inside NavigationContainer or does it have a theme?",
    );
    throw error;
  } else {
    return context;
  }
};

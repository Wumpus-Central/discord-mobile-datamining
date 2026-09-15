// _runtime/metro/01556__.js
import _mod1521 from "01521__.js";
import noop from "00019__.js";

require = arg1;

export const useTheme = function useTheme() {
  const context = noop.useContext(_mod1521.ThemeContext);
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

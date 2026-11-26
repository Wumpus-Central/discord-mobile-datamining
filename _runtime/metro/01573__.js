// _runtime/metro/01573__.js
import _mod1538 from "01538__.js";
import noop from "00019__.js";

require = arg1;

export function useTheme() {
  const context = noop.useContext(_mod1538.ThemeContext);
  if (null == context) {
    const _Error = Error;
    const error = new Error(
      "Couldn't find a theme. Is your component inside NavigationContainer or does it have a theme?",
    );
    throw error;
  } else {
    return context;
  }
}

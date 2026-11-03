// _runtime/metro/01571__.js
import _mod1536 from "01536__.js";
import noop from "00019__.js";

require = arg1;

export function useTheme() {
  const context = noop.useContext(_mod1536.ThemeContext);
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

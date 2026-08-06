// _runtime/01552_useTheme.js
import noop from "noop";
import { context } from "01517_context.js";

const require = arg1;

export const useTheme = function useTheme() {
  const context = React.useContext(context.ThemeContext);
  if (null == context) {
    const _Error = Error;
    const error = new Error("Couldn't find a theme. Is your component inside NavigationContainer or does it have a theme?");
    throw error;
  } else {
    return context;
  }
};
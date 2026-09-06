// === Module 4284: json ===

// Module 4284 (json)
import importAllResult from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

let c0 = importAllResult;
({ Fragment: closure_1, jsx: obj1 } = jsxProd);
let obj = { theme: "light", primaryColor: null, secondaryColor: null, gradient: null, flags: 0, contrast: 1, saturation: 1, density: "compact", disableAdaptiveTheme: false, reduceAdaptiveTheme: false };
obj = {};
let json = JSON.stringify(obj);
let merged = Object.assign(obj);
obj.key = json;
let context = importAllResult.createContext(obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/ThemeContextProvider/ThemeContext.tsx");

export const createThemedContext = function createThemedContext(arg0) {
  const obj = {};
  const json = JSON.stringify(arg0);
  const merged = Object.assign(arg0);
  obj.key = json;
  return obj;
};
export const useThemeContext = function useThemeContext() {
  context = importAllResult.useContext(context);
  if (null == context) {
    const _Error = Error;
    error = new Error("useThemeContext must be used within a ThemeContext.Provider");
    throw error;
  } else {
    return context;
  }
};
export const FALLBACK_THEME_CONTEXT_VALUE = obj;
export const ThemeContext = context;
export const UseThemeContext = function UseThemeContext(children) {
  context = importAllResult.useContext(context);
  if (null == context) {
    const _Error = Error;
    error = new Error("useThemeContext must be used within a ThemeContext.Provider");
    throw error;
  } else {
    const obj = { children: null };
    obj[0] = children.children(context);
    return callback(closure_1, obj);
  }
};
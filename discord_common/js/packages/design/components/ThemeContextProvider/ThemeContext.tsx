// === Module 5031: ThemeContext ===

// Module 5031 (ThemeContext)
import noop from "module_19" /* 19 */;

const jsxProd = fn(21);
({ Fragment: closure_1, jsx: c2 } = jsxProd);
let obj = { theme: fn(1083).ThemeTypes.LIGHT, primaryColor: null, secondaryColor: null, gradient: null, flags: 0, contrast: 1, saturation: 1, density: "compact", disableAdaptiveTheme: false, reduceAdaptiveTheme: false };
const obj2 = {};
let json = JSON.stringify(obj);
let merged = Object.assign(obj);
obj2.key = json;
let context = noop.createContext(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/ThemeContextProvider/ThemeContext.tsx");

export function createThemedContext(arg0) {
  const obj = {};
  const json = JSON.stringify(arg0);
  const merged = Object.assign(arg0);
  obj.key = json;
  return obj;
}
export function useThemeContext() {
  context = noop.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useThemeContext must be used within a ThemeContext.Provider");
    throw error;
  } else {
    return context;
  }
}
export const FALLBACK_THEME_CONTEXT_VALUE = obj2;
export const ThemeContext = context;
export function UseThemeContext(children) {
  context = noop.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useThemeContext must be used within a ThemeContext.Provider");
    throw error;
  } else {
    const obj = { children: children.children(context) };
    return React2(framebus, obj);
  }
}
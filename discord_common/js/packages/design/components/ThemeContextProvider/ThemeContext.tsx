// discord_common/js/packages/design/components/ThemeContextProvider/ThemeContext.tsx
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";

let c0 = importAllResult;
({ Fragment: closure_1, jsx: obj1 } = jsxProd);
let obj = {};
let json = JSON.stringify(obj);
let merged = Object.assign(obj);
obj.key = json;
let context = importAllResult.createContext(obj);
const result = require("obj132").fileFinishedImporting("../discord_common/js/packages/design/components/ThemeContextProvider/ThemeContext.tsx");

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
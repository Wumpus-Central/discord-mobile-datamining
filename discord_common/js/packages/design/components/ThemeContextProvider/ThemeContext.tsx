// discord_common/js/packages/design/components/ThemeContextProvider/ThemeContext.tsx
import c from "../../../../../../_runtime/00576_c.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ Fragment: c3, jsx: closure_4 } = jsxProd);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useThemeContext() {
      context = noop.useContext(context);
      if (null == context) {
        const _Error = Error;
        const error = new Error("useThemeContext must be used within a ThemeContext.Provider");
        throw error;
      } else {
        return context;
      }
    }
  : function useThemeContext() {
      context = noop.useContext(context);
      if (null == context) {
        const _Error = Error;
        const error = new Error("useThemeContext must be used within a ThemeContext.Provider");
        throw error;
      } else {
        return context;
      }
    };
let closure_5 = tmp3;
let obj = {
  theme: fn(1096).ThemeTypes.LIGHT,
  primaryColor: null,
  secondaryColor: null,
  gradient: null,
  flags: 0,
  contrast: 1,
  saturation: 1,
  density: "compact",
  disableAdaptiveTheme: false,
  reduceAdaptiveTheme: false,
};
const obj3 = {};
let json = JSON.stringify(obj);
let merged = Object.assign(obj);
obj3.key = json;
let context = noop.createContext(obj3);
ReactCompilerGating = fn(558);
function createThemedContext(arg0) {
  const obj = {};
  const json = JSON.stringify(arg0);
  const merged = Object.assign(arg0);
  obj.key = json;
  return obj;
}
const size = fn(2);
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/design/components/ThemeContextProvider/ThemeContext.tsx",
);

export { createThemedContext };
export const useThemeContext = tmp3;
export const FALLBACK_THEME_CONTEXT_VALUE = obj3;
export const ThemeContext = context;
export const UseThemeContext = ReactCompilerGating.isReactCompilerEnabled()
  ? function UseThemeContext(children) {
      const cResult = c.c(5);
      children = children.children;
      const tmp2 = closure_5();
      if (cResult[0] === children) {
        if (cResult[1] === tmp2) {
          let tmp3 = cResult[2];
        }
        if (cResult[3] !== tmp3) {
          const obj2 = { children: tmp3 };
          const tmp8 = React4(React3, obj2);
          cResult[3] = tmp3;
          cResult[4] = tmp8;
          let tmp5 = tmp8;
        } else {
          tmp5 = cResult[4];
        }
        return tmp5;
      }
      const childrenResult = children(tmp2);
      cResult[0] = children;
      cResult[1] = tmp2;
      cResult[2] = childrenResult;
      tmp3 = childrenResult;
    }
  : function UseThemeContext(children) {
      return React4(React3, { children: children.children(closure_5()) });
    };

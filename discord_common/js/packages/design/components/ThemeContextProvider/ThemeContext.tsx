// discord_common/js/packages/design/components/ThemeContextProvider/ThemeContext.tsx
import react2 from "../../../../../../_runtime/00576_react.js";
import Constants from "../../../../shared/Constants.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../../../../discord_app/modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let children;

let c3;
let closure_4;
let json;
const ThemeTypes = Constants.ThemeTypes;
({ Fragment: c3, jsx: closure_4 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function () {
      context = react.useContext(context);
      if (null == context) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("useThemeContext must be used within a ThemeContext.Provider");
        throw error;
      } else {
        return context;
      }
    }
  : function () {
      context = react.useContext(context);
      if (null == context) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("useThemeContext must be used within a ThemeContext.Provider");
        throw error;
      } else {
        return context;
      }
    };
let closure_5 = tmp3;
let obj = {
  theme: ThemeTypes.LIGHT,
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
let obj2 = { key: json };
json = JSON.stringify(obj);
let merged = Object.assign(obj);
let context = react.createContext(obj2);
ReactCompilerGating = ReactCompilerGating_mod;
function createThemedContext(arg0) {
  let json;
  const obj = { key: json };
  json = JSON.stringify(arg0);
  const merged = Object.assign(arg0);
  return obj;
}
const tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const obj = react2;
      const cResult = obj.c(5);
      children = children.children;
      const tmp2 = closure_5();
      if (cResult[0] === children) {
        let tmp3;
        let tmp5;
        if (cResult[1] === tmp2) {
          tmp3 = cResult[2];
        }
        if (cResult[3] !== tmp3) {
          const obj2 = { children: tmp3 };
          const tmp8 = React3(_false, obj2);
          cResult[3] = tmp3;
          cResult[4] = tmp8;
          tmp5 = tmp8;
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
  : (children) => {
      const obj = { children: children.children(closure_5()) };
      return React3(_false, obj);
    };
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/design/components/ThemeContextProvider/ThemeContext.tsx",
);

export { createThemedContext };
export const useThemeContext = tmp3;
export const FALLBACK_THEME_CONTEXT_VALUE = obj2;
export const ThemeContext = context;
export const UseThemeContext = tmp7;

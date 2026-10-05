// === Module 4888: useManaTextMigrationHighlight ===

// Module 4888 (useManaTextMigrationHighlight)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import DevSettingsStore from "DevSettingsStore" /* 4889 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let obj2;
let resolveSemanticColor;
let resolveSemanticColor2;
const StyleSheet = react_native.StyleSheet;
let createStyles = createStyles_mod;
let obj = { highlight: obj2, overridden: { borderWidth: 1, borderStyle: "dashed", borderColor: nativeDefault.colors.STATUS_DANGER } };
obj2 = { borderWidth: 1, borderColor: nativeDefault.colors.STATUS_POSITIVE };
createStyles = createStyles.createStyles;
({ borderWidth: 1, borderStyle: "dashed", borderColor: nativeDefault.colors.STATUS_DANGER });
let closure_5 = createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let tmp5;
  let tmp6;
  const obj = react;
  const cResult = obj.c(7);
  const tmp4 = closure_5();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DevSettingsStore];
    const fn = function s() {
      return DevSettingsStore.get("highlight_mana_text");
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let tmp8 = null;
  const tmpResult = get_initialized;
  if (tmpResult.useStateFromStores(tmp5, tmp6)) {
    if (cResult[2] === arg1) {
      if (cResult[3] === tmp4.highlight) {
        if (cResult[4] === tmp4.overridden) {
          let tmp11;
          if (cResult[5] === arg0) {
            tmp11 = cResult[6];
          }
          tmp8 = tmp11;
        }
      }
    }
    let closure_0 = arg0;
    let closure_1 = StyleSheet.flatten(arg1);
    const _Object = Object;
    const keys = Object.keys(arg0);
    const tmp13 = keys.some((item) => {
      if ("includeFontPadding" === item) {
        return false;
      } else {
        let tmp2 = undefined !== closure_0[item];
        if (tmp2) {
          let tmp4;
          if (closure_1 != null) {
            tmp4 = closure_1[item];
          }
          tmp2 = undefined !== tmp4;
        }
        return tmp2;
      }
    }) ? tmp4.overridden : tmp4.highlight;
    cResult[2] = arg1;
    cResult[3] = tmp4.highlight;
    cResult[4] = tmp4.overridden;
    cResult[5] = arg0;
    cResult[6] = tmp13;
    tmp11 = tmp13;
  }
  return tmp8;
}) : ((arg0, arg1) => {
  const tmp = closure_5();
  const items = [DevSettingsStore];
  let tmp2 = null;
  const obj = get_initialized;
  if (obj.useStateFromStores(items, () => DevSettingsStore.get("highlight_mana_text"))) {
    let tmp4 = arg1;
    let closure_0 = arg0;
    let closure_1 = StyleSheet.flatten(arg1);
    const _Object = Object;
    const keys = Object.keys(arg0);
    tmp2 = keys.some((item) => {
      if ("includeFontPadding" === item) {
        return false;
      } else {
        let tmp2 = undefined !== closure_0[item];
        if (tmp2) {
          let tmp4;
          if (closure_1 != null) {
            tmp4 = closure_1[item];
          }
          tmp2 = undefined !== tmp4;
        }
        return tmp2;
      }
    }) ? tmp.overridden : tmp.highlight;
  }
  return tmp2;
});
let closure_6 = DevSettingsStore.get("highlight_mana_text");
const obj4 = { borderWidth: 1, borderColor: resolveSemanticColor(nativeDefault.themes.DARK, nativeDefault.colors.STATUS_WARNING) };
const internal = nativeDefault.internal;
resolveSemanticColor = internal.resolveSemanticColor;
const obj5 = { borderWidth: 1, borderColor: resolveSemanticColor2(nativeDefault.themes.LIGHT, nativeDefault.colors.STATUS_WARNING) };
const internal2 = nativeDefault.internal;
resolveSemanticColor2 = internal2.resolveSemanticColor;
const result = size.fileFinishedImporting("design/components/Text/native/useManaTextMigrationHighlight.tsx");

export const useManaTextMigrationHighlight = tmp3;
export const withManaTextMigrationHighlight = function withManaTextMigrationHighlight(fromEntries2Result) {
  let theme;
  let proxy = fromEntries2Result;
  if (closure_6) {
    const _Proxy = Proxy;
    let obj = {
      get(arg0, str, arg2) {
          const value = Reflect.get(arg0, str, arg2);
          if (typeof str === "string") {
            if (null != value) {
              const obj = require("shared");
              const obj2 = {};
              const tmp5 = obj.isThemeLight(theme.theme) ? obj5 : obj4;
              const merged = Object.assign(value);
              const merged1 = Object.assign(tmp5);
              return obj2;
            }
          }
          return value;
        }
    };
    const self = this;
    const self2 = this;
    proxy = new Proxy(fromEntries2Result, obj);
  }
  return proxy;
};
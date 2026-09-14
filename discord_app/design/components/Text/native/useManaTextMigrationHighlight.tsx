// === Module 4634: useManaTextMigrationHighlight ===

// Module 4634 (useManaTextMigrationHighlight)
import _mod17 from "module_17" /* 17 */;
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import DevSettingsStore from "DevSettingsStore" /* 4635 */;
import ThemeStore from "ThemeStore" /* 1181 */;
import createStyles from "createStyles" /* 4636 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const StyleSheet = _mod17.StyleSheet;
let obj = { highlight: { borderWidth: 1, borderColor: nativeDefault.colors.STATUS_POSITIVE }, overridden: null };
let obj2 = { borderWidth: 1, borderColor: nativeDefault.colors.STATUS_POSITIVE };
obj.overridden = { borderWidth: 1, borderStyle: "dashed", borderColor: nativeDefault.colors.STATUS_DANGER };
let closure_5 = createStyles.createStyles(obj);
let closure_6 = DevSettingsStore.get("highlight_mana_text");
const obj4 = { borderWidth: 1, borderColor: null };
const internal = nativeDefault.internal;
obj4.borderColor = internal.resolveSemanticColor(nativeDefault.themes.DARK, nativeDefault.colors.STATUS_WARNING);
const obj5 = { borderWidth: 1, borderColor: null };
const internal2 = nativeDefault.internal;
obj5.borderColor = internal2.resolveSemanticColor(nativeDefault.themes.LIGHT, nativeDefault.colors.STATUS_WARNING);
const result = size.fileFinishedImporting("design/components/Text/native/useManaTextMigrationHighlight.tsx");

export const useManaTextMigrationHighlight = function useManaTextMigrationHighlight(fromEntriesResult, style) {
  const tmp = closure_5();
  const items = [DevSettingsStore];
  if (!obj.useStateFromStores(items, () => DevSettingsStore.get("highlight_mana_text"))) {
    return null;
  } else {
    closure_0 = fromEntriesResult;
    closure_1 = StyleSheet.flatten(style);
    const _Object = Object;
    const keys = Object.keys(fromEntriesResult);
    keys.some((item) => {
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
  obj = initialize;
};
export const withManaTextMigrationHighlight = function withManaTextMigrationHighlight(fromEntriesResult) {
  let proxy = fromEntriesResult;
  if (closure_6) {
    const _Proxy = Proxy;
    const obj = {
      get(arg0, str, arg2) {
          value = Reflect.get(arg0, str, arg2);
          if (typeof str === "string") {
            if (null != value) {
              const tmp5 = require("shared").isThemeLight(theme.theme) ? obj5 : obj4;
              const obj2 = {};
              const merged = Object.assign(value);
              const merged1 = Object.assign(tmp5);
              return obj2;
            }
          }
          return value;
        }
    };
    proxy = new Proxy(fromEntriesResult, obj);
  }
  return proxy;
};
// discord_app/design/components/Text/native/useManaTextMigrationHighlight.tsx
import { StyleSheet } from "get ActivityIndicator";
import importDefaultResult from "getUserAgnosticState";
import handleThemeChange from "handleThemeChange";
import createCacheKey from "createCacheKey";
import { internal } from "Themes";
import { internal as internal2 } from "Themes";

let c3 = importDefaultResult;
let obj = { highlight: null, overridden: null };
obj = { borderWidth: 1, borderColor: require("Themes").colors.STATUS_POSITIVE };
obj[0] = obj;
obj[1] = { borderWidth: 1, borderStyle: "dashed", borderColor: require("Themes").colors.STATUS_DANGER };
let closure_5 = createCacheKey.createStyles(obj);
let closure_6 = importDefaultResult.get("highlight_mana_text");
const obj2 = { borderWidth: 1, borderColor: null };
obj2[1] = internal.resolveSemanticColor(require("Themes").themes.DARK, require("Themes").colors.STATUS_WARNING);
const obj3 = { borderWidth: 1, borderColor: null };
obj3[1] = internal2.resolveSemanticColor(require("Themes").themes.LIGHT, require("Themes").colors.STATUS_WARNING);
const obj1 = { borderWidth: 1, borderStyle: "dashed", borderColor: require("Themes").colors.STATUS_DANGER };
const result = require("handleThemeChange").fileFinishedImporting("design/components/Text/native/useManaTextMigrationHighlight.tsx");

export const useManaTextMigrationHighlight = function useManaTextMigrationHighlight(arg0, style) {
  const tmp = callback();
  const items = [closure_3];
  if (!obj.useStateFromStores(items, () => closure_3.get("highlight_mana_text"))) {
    return null;
  } else {
    const _require = arg0;
    const dependencyMap = StyleSheet.flatten(style);
    const _Object = Object;
    const keys = Object.keys(arg0);
    keys.some((arg0) => {
      if ("includeFontPadding" === arg0) {
        return false;
      } else {
        let tmp2 = undefined !== table[arg0];
        if (tmp2) {
          let tmp4;
          if (table2 != null) {
            tmp4 = table2[arg0];
          }
          tmp2 = undefined !== tmp4;
        }
        return tmp2;
      }
    }) ? tmp.overridden : tmp.highlight;
  }
};
export const withManaTextMigrationHighlight = function withManaTextMigrationHighlight(fromEntriesResult) {
  let proxy = fromEntriesResult;
  if (closure_6) {
    const _Proxy = Proxy;
    let obj = { get: null };
    obj[0] = function get(arg0, str) {
      const value = Reflect.get(arg0, str, arg2);
      if (typeof str === "string") {
        if (null != value) {
          let obj = callback(table[6]);
          const tmp5 = obj.isThemeLight(theme.theme) ? closure_8 : closure_7;
          obj = {};
          const merged = Object.assign(value);
          const merged1 = Object.assign(tmp5);
          return obj;
        }
      }
      return value;
    };
    proxy = new Proxy(fromEntriesResult, obj);
  }
  return proxy;
};
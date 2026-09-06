// discord_app/design/components/Text/native/useManaTextMigrationHighlight.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import DevSettingsStore from "../../../../modules/devtools/dev_settings/DevSettingsStore.tsx";
import ThemeStore from "../../../../modules/user_settings/ThemeStore.tsx";
import createStyles from "../../Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const StyleSheet = _mod17.StyleSheet;
let obj = { highlight: null, overridden: null };
obj = { borderWidth: 1, borderColor: nativeDefault.colors.STATUS_POSITIVE };
obj.highlight = obj;
obj.overridden = { borderWidth: 1, borderStyle: "dashed", borderColor: nativeDefault.colors.STATUS_DANGER };
let closure_5 = createStyles.createStyles(obj);
let closure_6 = DevSettingsStore.get("highlight_mana_text");
const obj2 = { borderWidth: 1, borderColor: null };
const internal = nativeDefault.internal;
obj2.borderColor = internal.resolveSemanticColor(nativeDefault.themes.DARK, nativeDefault.colors.STATUS_WARNING);
const obj3 = { borderWidth: 1, borderColor: null };
const internal2 = nativeDefault.internal;
obj3.borderColor = internal2.resolveSemanticColor(nativeDefault.themes.LIGHT, nativeDefault.colors.STATUS_WARNING);
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
    })
      ? tmp.overridden
      : tmp.highlight;
  }
};
export const withManaTextMigrationHighlight = function withManaTextMigrationHighlight(fromEntriesResult) {
  let proxy = fromEntriesResult;
  if (closure_6) {
    const _Proxy = Proxy;
    let obj = {
      get(arg0, str, arg2) {
        value = Reflect.get(arg0, str, arg2);
        if (typeof str === "string") {
          if (null != value) {
            let obj = require("shared");
            const tmp5 = obj.isThemeLight(theme.theme) ? obj3 : obj2;
            obj = {};
            const merged = Object.assign(value);
            const merged1 = Object.assign(tmp5);
            return obj;
          }
        }
        return value;
      },
    };
    proxy = new Proxy(fromEntriesResult, obj);
  }
  return proxy;
};

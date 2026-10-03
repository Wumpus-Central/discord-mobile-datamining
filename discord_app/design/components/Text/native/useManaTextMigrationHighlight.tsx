// discord_app/design/components/Text/native/useManaTextMigrationHighlight.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import DevSettingsStore from "../../../../modules/devtools/dev_settings/DevSettingsStore.tsx";
import ThemeStore from "../../../../modules/user_settings/ThemeStore.tsx";
import createStyles from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const StyleSheet = _mod17.StyleSheet;
let obj = { highlight: { borderWidth: 1, borderColor: nativeDefault.colors.STATUS_POSITIVE }, overridden: null };
let obj2 = { borderWidth: 1, borderColor: nativeDefault.colors.STATUS_POSITIVE };
obj.overridden = { borderWidth: 1, borderStyle: "dashed", borderColor: nativeDefault.colors.STATUS_DANGER };
let closure_5 = createStyles.createStyles(obj);
const obj3 = { borderWidth: 1, borderStyle: "dashed", borderColor: nativeDefault.colors.STATUS_DANGER };
let closure_6 = DevSettingsStore.get("highlight_mana_text");
const obj4 = { borderWidth: 1, borderColor: null };
const internal = nativeDefault.internal;
obj4.borderColor = internal.resolveSemanticColor(nativeDefault.themes.DARK, nativeDefault.colors.STATUS_WARNING);
const obj5 = { borderWidth: 1, borderColor: null };
const internal2 = nativeDefault.internal;
obj5.borderColor = internal2.resolveSemanticColor(nativeDefault.themes.LIGHT, nativeDefault.colors.STATUS_WARNING);
const result = size.fileFinishedImporting("design/components/Text/native/useManaTextMigrationHighlight.tsx");

export const useManaTextMigrationHighlight = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      const cResult = c.c(7);
      let overridden = closure_5();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [DevSettingsStore];
        const fn = function s() {
          return DevSettingsStore.get("highlight_mana_text");
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      if (!tmpResult.useStateFromStores(tmp4, tmp5)) {
        return null;
      } else {
        let highlight = arg1;
        closure_0 = arg0;
        closure_1 = StyleSheet.flatten(highlight);
        const _Object = Object;
        const keys = Object.keys(arg0);
        const tmp9 = keys.some((item) => {
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
          ? overridden.overridden
          : overridden.highlight;
        cResult[2] = highlight;
        highlight = overridden.highlight;
        cResult[3] = highlight;
        overridden = overridden.overridden;
        cResult[4] = overridden;
        cResult[5] = arg0;
        cResult[6] = tmp9;
      }
      tmpResult = initialize;
    }
  : (arg0, arg1) => {
      const tmp = closure_5();
      const items = [DevSettingsStore];
      if (!obj.useStateFromStores(items, () => DevSettingsStore.get("highlight_mana_text"))) {
        return null;
      } else {
        closure_0 = arg0;
        closure_1 = StyleSheet.flatten(arg1);
        const _Object = Object;
        const keys = Object.keys(arg0);
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
      },
    };
    proxy = new Proxy(fromEntriesResult, obj);
  }
  return proxy;
};

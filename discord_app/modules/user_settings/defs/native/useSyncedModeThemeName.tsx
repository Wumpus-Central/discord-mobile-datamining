// discord_app/modules/user_settings/defs/native/useSyncedModeThemeName.tsx
import intl2 from "../../../../intl/index.native.tsx";
import ClientThemesUtils from "../../../client_themes/ClientThemesUtils.tsx";
import ClientThemesConstants from "../../../client_themes/ClientThemesConstants.tsx";
import _modDef2751 from "../../../client_themes/intl/ClientThemes.messages.js";
import ThemeStore from "../../ThemeStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let closure_4 = ClientThemesConstants.BACKGROUND_GRADIENT_PRESETS_MAP;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ThemeStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          let stringResult;
          const syncedClientTheme = ThemeStore.getSyncedClientTheme(closure_0);
          const obj = ClientThemesUtils;
          const themeName = obj.getThemeName(ThemeStore.themePreferenceForSystemTheme(closure_0));
          let prop;
          if (syncedClientTheme != null) {
            prop = syncedClientTheme.customUserThemeSettings;
          }
          if (null != prop) {
            const intl = intl2.intl;
            stringResult = intl.string(_modDef2751.yl1iMm);
          } else {
            let prop1;
            if (syncedClientTheme != null) {
              prop1 = syncedClientTheme.backgroundGradientPresetId;
            }
            stringResult = themeName;
            if (null != prop1) {
              let name;
              if (closure_4[syncedClientTheme.backgroundGradientPresetId] != null) {
                const getName = tmp9.getName;
                if (getName != null) {
                  name = getName();
                }
              }
              if (name == null) {
                name = themeName;
              }
              stringResult = name;
            }
          }
          return stringResult;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      let obj = require("get initialized");
      const items = [ThemeStore];
      return obj.useStateFromStores(items, () => {
        let stringResult;
        const syncedClientTheme = ThemeStore.getSyncedClientTheme(closure_0);
        const obj = ClientThemesUtils;
        const themeName = obj.getThemeName(ThemeStore.themePreferenceForSystemTheme(closure_0));
        let prop;
        if (syncedClientTheme != null) {
          prop = syncedClientTheme.customUserThemeSettings;
        }
        if (null != prop) {
          const intl = intl2.intl;
          stringResult = intl.string(_modDef2751.yl1iMm);
        } else {
          let prop1;
          if (syncedClientTheme != null) {
            prop1 = syncedClientTheme.backgroundGradientPresetId;
          }
          stringResult = themeName;
          if (null != prop1) {
            let name;
            if (closure_4[syncedClientTheme.backgroundGradientPresetId] != null) {
              const getName = tmp9.getName;
              if (getName != null) {
                name = getName();
              }
            }
            if (name == null) {
              name = themeName;
            }
            stringResult = name;
          }
        }
        return stringResult;
      });
    };
const result = size.fileFinishedImporting("modules/user_settings/defs/native/useSyncedModeThemeName.tsx");

export const useSyncedModeThemeName = tmp2;

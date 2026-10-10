// === Module 15576: useSyncedModeThemeName ===

// Module 15576 (useSyncedModeThemeName)
import util from "util" /* 1126 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1252 */;
import _modDef2798 from "module_2798" /* 2798 */;
import ThemeStore from "ThemeStore" /* 1205 */;

const require = globalThis.__r;

require = fn;
let closure_4 = fn(1253).BACKGROUND_GRADIENT_PRESETS_MAP;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/useSyncedModeThemeName.tsx");

export const useSyncedModeThemeName = ReactCompilerGating.isReactCompilerEnabled() ? (function useSyncedModeThemeName(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ThemeStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const syncedClientTheme = ThemeStore.getSyncedClientTheme(closure_0);
      const themeName = ClientThemesUtils.getThemeName(ThemeStore.themePreferenceForSystemTheme(closure_0));
      let prop;
      if (syncedClientTheme != null) {
        prop = syncedClientTheme.customUserThemeSettings;
      }
      if (null != prop) {
        const intl = util.intl;
        let stringResult = intl.string(_modDef2798.yl1iMm);
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
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : (function useSyncedModeThemeName(arg0) {
  _require = arg0;
  const items = [ThemeStore];
  return require("initialize").useStateFromStores(items, () => {
    const syncedClientTheme = ThemeStore.getSyncedClientTheme(closure_0);
    const themeName = ClientThemesUtils.getThemeName(ThemeStore.themePreferenceForSystemTheme(closure_0));
    let prop;
    if (syncedClientTheme != null) {
      prop = syncedClientTheme.customUserThemeSettings;
    }
    if (null != prop) {
      const intl = util.intl;
      let stringResult = intl.string(_modDef2798.yl1iMm);
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
});
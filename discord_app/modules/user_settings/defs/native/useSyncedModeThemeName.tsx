// === Module 16711: useSyncedModeThemeName ===

// Module 16711 (useSyncedModeThemeName)
import util from "util" /* 1112 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1238 */;
import _modDef3056 from "module_3056" /* 3056 */;
import ThemeStore from "ThemeStore" /* 1191 */;

const require = globalThis.__r;

require = fn;
let closure_4 = fn(1239).BACKGROUND_GRADIENT_PRESETS_MAP;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/useSyncedModeThemeName.tsx");

export function useSyncedModeThemeName(DARK) {
  _require = DARK;
  items = [ThemeStore];
  return require("initialize").useStateFromStores(items, () => {
    const syncedClientTheme = ThemeStore.getSyncedClientTheme(closure_0);
    const themeName = ClientThemesUtils.getThemeName(ThemeStore.themePreferenceForSystemTheme(closure_0));
    let prop;
    if (syncedClientTheme != null) {
      prop = syncedClientTheme.customUserThemeSettings;
    }
    if (null != prop) {
      const intl = util.intl;
      let stringResult = intl.string(_modDef3056.yl1iMm);
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
}
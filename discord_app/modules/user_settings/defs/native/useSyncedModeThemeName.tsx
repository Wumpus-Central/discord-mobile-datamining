// === Module 15641: useSyncedModeThemeName ===

// Module 15641 (useSyncedModeThemeName)
import util from "util" /* 1115 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1228 */;
import _modDef2714 from "module_2714" /* 2714 */;
import ThemeStore from "ThemeStore" /* 1182 */;

const require = globalThis.__r;

require = fn;
let closure_4 = fn(1229).BACKGROUND_GRADIENT_PRESETS_MAP;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/useSyncedModeThemeName.tsx");

export const useSyncedModeThemeName = function useSyncedModeThemeName(DARK) {
  _require = DARK;
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
      let stringResult = intl.string(_modDef2714.yl1iMm);
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
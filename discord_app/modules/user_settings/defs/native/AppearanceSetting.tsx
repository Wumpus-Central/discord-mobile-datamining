// === Module 16666: AppearanceSetting ===

// Module 16666 (AppearanceSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1238 */;
import _modDef3056 from "module_3056" /* 3056 */;
import useThemeDefault from "useTheme" /* 5122 */;
import useActiveTheme from "useActiveTheme" /* 8572 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4937 */;

require = fn;
function useAppearanceSettingTrailing() {
  const tmp3 = useThemeDefault();
  items = [ClientThemesBackgroundStore];
  const stateFromStores = initialize.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const themeName = ClientThemesUtils.getThemeName(tmp3);
  const activeThemeType = useActiveTheme.useActiveThemeType();
  if (ActiveThemeType.CUSTOM === activeThemeType) {
    const intl2 = util.intl;
    return intl2.string(_modDef3056.KSBBpC);
  } else if (ActiveThemeType.CLIENT === activeThemeType) {
    let name;
    if (stateFromStores != null) {
      const getName = stateFromStores.getName;
      if (getName != null) {
        name = getName();
      }
    }
    if (name == null) {
      name = themeName;
    }
    return name;
  } else if (ActiveThemeType.SYSTEM === activeThemeType) {
    const intl = util.intl;
    return intl.string(util.t.wFpwSk);
  } else {
    return ActiveThemeType.DEFAULT === activeThemeType ? themeName : undefined;
  }
}
const ActiveThemeType = fn(1194).ActiveThemeType;
const SettingBuilders = fn(11937);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["iHH+ky"]);
  },
  parent: null,
  IconComponent: fn(16667).PaintPaletteIcon,
  useTrailing: useAppearanceSettingTrailing,
  screen: {
    route: fn(1071).UserSettingsSections.APPEARANCE,
    getComponent() {
      return require("SettingsAppearanceScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AppearanceSetting.tsx");

export default route;
export { useAppearanceSettingTrailing };
// === Module 14607: useAppearanceSettingTrailing ===

// Module 14607 (useAppearanceSettingTrailing)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getThemeForColor from "getThemeForColor" /* 1347 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import messagesProxyDefault from "messagesProxy" /* 2533 */;
import useThemeDefault from "useTheme" /* 4310 */;
import useActiveThemeType from "useActiveThemeType" /* 8503 */;
import isSyncedModeThemesEnabled from "isSyncedModeThemesEnabled" /* 4195 */;
import { ActiveThemeType } from "SystemThemeState" /* 1305 */;
import createToggle from "createToggle" /* 10669 */;

require = fn;
function useAppearanceSettingTrailing() {
  const tmp3 = useThemeDefault();
  const tmp4 = useIsMobileVisualRefreshExperimentEnabledDefault("AppearanceSettingTrailing");
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const themeName = getThemeForColor.getThemeName(tmp3, tmp4);
  const activeThemeType = useActiveThemeType.useActiveThemeType();
  if (ActiveThemeType.CUSTOM === activeThemeType) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(messagesProxyDefault.KSBBpC);
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
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.wFpwSk);
  } else {
    return ActiveThemeType.DEFAULT === activeThemeType ? themeName : undefined;
  }
}
{
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["iHH+ky"]);
  },
  parent: null,
  IconComponent: require("PaintPaletteIcon").PaintPaletteIcon,
  useTrailing: useAppearanceSettingTrailing,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.APPEARANCE,
  getComponent() {
    return require(14608).default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/AppearanceSetting.tsx");

export default createToggle;
export { useAppearanceSettingTrailing };
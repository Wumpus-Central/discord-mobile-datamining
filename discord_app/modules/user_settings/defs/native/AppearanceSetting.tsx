// === Module 14607: useAppearanceSettingTrailing ===

// Module 14607 (useAppearanceSettingTrailing)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getThemeForColor from "getThemeForColor" /* 1347 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import messagesProxyDefault from "messagesProxy" /* 2533 */;
import useThemeDefault from "useTheme" /* 4310 */;
import useActiveThemeType from "useActiveThemeType" /* 8503 */;
import closure_3 from "isSyncedModeThemesEnabled" /* 4195 */;
import { ActiveThemeType } from "SystemThemeState" /* 1305 */;
import createToggle from "createToggle" /* 10669 */;

require = arg1;
function useAppearanceSettingTrailing() {
  const tmp = importDefault;
  const tmp3 = useThemeDefault();
  const tmp4 = useIsMobileVisualRefreshExperimentEnabledDefault("AppearanceSettingTrailing");
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const obj = initialize;
  const themeName = getThemeForColor.getThemeName(tmp3, tmp4);
  const obj2 = getThemeForColor;
  const activeThemeType = useActiveThemeType.useActiveThemeType();
  if (ActiveThemeType.CUSTOM === activeThemeType) {
    const intl2 = tmp5(1236).intl;
    return intl2.string(messagesProxyDefault.KSBBpC);
  } else if (tmp9.CLIENT === activeThemeType) {
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
  } else if (tmp9.SYSTEM === activeThemeType) {
    const intl = tmp5(1236).intl;
    return intl.string(tmp5(1236).t.wFpwSk);
  } else {
    return tmp9.DEFAULT === activeThemeType ? themeName : undefined;
  }
  const obj3 = useActiveThemeType;
}
createToggle = {
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
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AppearanceSetting.tsx");

export default createToggle;
export { useAppearanceSettingTrailing };
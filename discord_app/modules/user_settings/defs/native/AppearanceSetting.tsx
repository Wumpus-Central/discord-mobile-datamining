// === Module 15086: useAppearanceSettingTrailing ===

// Module 15086 (useAppearanceSettingTrailing)
import initialize from "initialize" /* 586 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import getThemeForColor from "getThemeForColor" /* 1346 */;
import messagesProxyDefault from "messagesProxy" /* 2598 */;
import useThemeDefault from "useTheme" /* 4413 */;
import useActiveThemeType from "useActiveThemeType" /* 7628 */;
import closure_3 from "reset" /* 4297 */;
import { ActiveThemeType } from "SystemThemeState" /* 1304 */;
import createToggle from "createToggle" /* 11288 */;

require = arg1;
function useAppearanceSettingTrailing() {
  const tmp = importDefault;
  const tmp3 = useThemeDefault();
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const obj = initialize;
  const themeName = getThemeForColor.getThemeName(tmp3);
  const obj2 = getThemeForColor;
  const activeThemeType = useActiveThemeType.useActiveThemeType();
  if (ActiveThemeType.CUSTOM === activeThemeType) {
    const intl2 = tmp4(1233).intl;
    return intl2.string(messagesProxyDefault.KSBBpC);
  } else if (tmp8.CLIENT === activeThemeType) {
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
  } else if (tmp8.SYSTEM === activeThemeType) {
    const intl = tmp4(1233).intl;
    return intl.string(tmp4(1233).t.wFpwSk);
  } else {
    return tmp8.DEFAULT === activeThemeType ? themeName : undefined;
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
    return require(15087).default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AppearanceSetting.tsx");

export default createToggle;
export { useAppearanceSettingTrailing };
import isSyncedModeThemesEnabled from "isSyncedModeThemesEnabled";
import { ActiveThemeType } from "SystemThemeState";
import createToggle from "createToggle";

const require = arg1;
function useAppearanceSettingTrailing() {
  const tmp = importDefault;
  const tmp3 = importDefault(4129)();
  const tmp4 = importDefault(1348)("AppearanceSettingTrailing");
  const items = [isSyncedModeThemesEnabled];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const obj = require(589) /* initialize */;
  const themeName = require(4036) /* getThemeForColor */.getThemeName(tmp3, tmp4);
  const obj2 = require(4036) /* getThemeForColor */;
  const activeThemeType = require(8835) /* useActiveThemeType */.useActiveThemeType();
  if (ActiveThemeType.CUSTOM === activeThemeType) {
    const intl2 = tmp5(1236).intl;
    return intl2.string(tmp(2423).KSBBpC);
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
  const obj3 = require(8835) /* useActiveThemeType */;
}
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["iHH+ky"]);
  },
  parent: null,
  IconComponent: require("PaintPaletteIcon").PaintPaletteIcon,
  useTrailing: useAppearanceSettingTrailing,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.APPEARANCE,
  getComponent() {
    return require(14298).default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AppearanceSetting.tsx");

export default createToggle;
export { useAppearanceSettingTrailing };
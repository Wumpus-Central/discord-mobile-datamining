// discord_app/modules/user_settings/defs/native/AppearanceSetting.tsx
import isSyncedModeThemesEnabled from "isSyncedModeThemesEnabled";
import { ActiveThemeType } from "SystemThemeState";
import createToggle from "createToggle";

const require = arg1;
function useAppearanceSettingTrailing() {
  const tmp = importDefault;
  const tmp3 = require("../../../../hooks/useTheme.tsx")();
  const tmp4 = require("../../../themes/experiments/MobileVisualRefreshExperiment.tsx")("AppearanceSettingTrailing");
  const items = [isSyncedModeThemesEnabled];
  const stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const obj = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  const themeName = require("../../../client_themes/ClientThemesUtils.tsx") /* getThemeForColor */.getThemeName(tmp3, tmp4);
  const obj2 = require("../../../client_themes/ClientThemesUtils.tsx") /* getThemeForColor */;
  const activeThemeType = require("../../../client_themes/native/useActiveTheme.tsx") /* useActiveThemeType */.useActiveThemeType();
  if (ActiveThemeType.CUSTOM === activeThemeType) {
    const intl2 = tmp5(1236).intl;
    return intl2.string(tmp(2483).KSBBpC);
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
  const obj3 = require("../../../client_themes/native/useActiveTheme.tsx") /* useActiveThemeType */;
}
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["iHH+ky"]);
  },
  parent: null,
  IconComponent: require("PaintPaletteIcon").PaintPaletteIcon,
  useTrailing: useAppearanceSettingTrailing,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.APPEARANCE,
  getComponent() {
    return require("../../appearance/native/SettingsAppearanceScreen.tsx").default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AppearanceSetting.tsx");

export default createToggle;
export { useAppearanceSettingTrailing };
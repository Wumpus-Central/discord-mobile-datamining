// discord_app/modules/user_settings/defs/native/AppearanceSetting.tsx
import isSyncedModeThemesEnabled from "isSyncedModeThemesEnabled";
import { ActiveThemeType } from "SystemThemeState";
import createToggle from "createToggle";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useTheme } from "../../../../hooks/useTheme.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { getThemeForColor } from "../../../client_themes/ClientThemesUtils.tsx";
import { useActiveThemeType } from "../../../client_themes/native/useActiveTheme.tsx";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import { SettingsAppearanceScreen } from "../../appearance/native/SettingsAppearanceScreen.tsx";

const require = arg1;
function useAppearanceSettingTrailing() {
  const tmp = importDefault;
  const tmp3 = useTheme();
  const tmp4 = useIsMobileVisualRefreshExperimentEnabled("AppearanceSettingTrailing");
  const items = [isSyncedModeThemesEnabled];
  const stateFromStores = initialize.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const obj = initialize;
  const themeName = getThemeForColor.getThemeName(tmp3, tmp4);
  const obj2 = getThemeForColor;
  const activeThemeType = useActiveThemeType.useActiveThemeType();
  if (ActiveThemeType.CUSTOM === activeThemeType) {
    const intl2 = tmp5(1236).intl;
    return intl2.string(tmp(2453).KSBBpC);
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
    return SettingsAppearanceScreen.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AppearanceSetting.tsx");

export default createToggle;
export { useAppearanceSettingTrailing };
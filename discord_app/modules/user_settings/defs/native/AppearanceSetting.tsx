// discord_app/modules/user_settings/defs/native/AppearanceSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import getThemeForColor from "../../../client_themes/ClientThemesUtils.tsx";
import useIsMobileVisualRefreshExperimentEnabledDefault from "../../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import messagesProxyDefault from "../../../client_themes/intl/ClientThemes.messages.js";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import useActiveThemeType from "../../../client_themes/native/useActiveTheme.tsx";
import isSyncedModeThemesEnabled from "../../../client_themes/ClientThemesBackgroundStore.tsx";
import { ActiveThemeType } from "../../ThemeConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

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
    return require("../../appearance/native/SettingsAppearanceScreen.tsx").default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/AppearanceSetting.tsx");

export default createToggle;
export { useAppearanceSettingTrailing };
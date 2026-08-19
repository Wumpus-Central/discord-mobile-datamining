// === Module 14719: useEnableSwitchIconsSettingValue ===

// Module 14719 (useEnableSwitchIconsSettingValue)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import "createToggle";

require = fn;
function useEnableSwitchIconsSettingValue() {
  const items = [closure_3];
  return initialize.useStateFromStores(items, () => isSwitchIconsEnabled.isSwitchIconsEnabled);
}
let createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["S3z+pV"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useValue: useEnableSwitchIconsSettingValue,
  onValueChange: require("setFontSize").setSwitchIconsEnabled,
  usePredicate: function useShowSwitchIconsSetting() {
    return useIsMobileVisualRefreshExperimentEnabledDefault("SettingsAccessibilityScreen");
  },
  hasIcon: true
};
createToggle = createToggle.createToggle(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/EnableSwitchIconsSetting.tsx");

export default createToggle;
export { useEnableSwitchIconsSettingValue };
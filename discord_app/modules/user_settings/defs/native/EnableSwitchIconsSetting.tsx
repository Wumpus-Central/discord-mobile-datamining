// === Module 15253: useEnableSwitchIconsSettingValue ===

// Module 15253 (useEnableSwitchIconsSettingValue)
import initialize from "initialize" /* 586 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import closure_2 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import createToggle from "createToggle" /* 11292 */;

require = arg1;
function useEnableSwitchIconsSettingValue() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => isSwitchIconsEnabled.isSwitchIconsEnabled);
}
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["S3z+pV"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useValue: useEnableSwitchIconsSettingValue,
  onValueChange: require("setFontSize").setSwitchIconsEnabled,
  hasIcon: true
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/EnableSwitchIconsSetting.tsx");

export default createToggle;
export { useEnableSwitchIconsSettingValue };
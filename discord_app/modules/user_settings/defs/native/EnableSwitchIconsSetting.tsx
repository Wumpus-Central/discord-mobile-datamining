// === Module 16696: EnableSwitchIconsSetting ===

// Module 16696 (EnableSwitchIconsSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import AccessibilityStore from "AccessibilityStore" /* 4795 */;

require = fn;
function useEnableSwitchIconsSettingValue() {
  items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => isSwitchIconsEnabled.isSwitchIconsEnabled);
}
const SettingBuilders = fn(11817);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["S3z+pV"]);
  },
  parent: fn(8592).MobileUserSettings.ACCESSIBILITY,
  useValue: useEnableSwitchIconsSettingValue,
  onValueChange: fn(15524).setSwitchIconsEnabled,
  hasIcon: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EnableSwitchIconsSetting.tsx");

export default toggle;
export { useEnableSwitchIconsSettingValue };
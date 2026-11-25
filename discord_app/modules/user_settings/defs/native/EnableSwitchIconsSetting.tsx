// === Module 16974: EnableSwitchIconsSetting ===

// Module 16974 (EnableSwitchIconsSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import AccessibilityStore from "AccessibilityStore" /* 5013 */;

require = fn;
function useEnableSwitchIconsSettingValue() {
  items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => isSwitchIconsEnabled.isSwitchIconsEnabled);
}
const SettingBuilders = fn(11914);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["S3z+pV"]);
  },
  parent: fn(9513).MobileUserSettings.ACCESSIBILITY,
  useValue: useEnableSwitchIconsSettingValue,
  onValueChange: fn(15789).setSwitchIconsEnabled,
  hasIcon: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EnableSwitchIconsSetting.tsx");

export default toggle;
export { useEnableSwitchIconsSettingValue };
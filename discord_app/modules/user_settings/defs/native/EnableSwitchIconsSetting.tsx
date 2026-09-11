// === Module 15474: EnableSwitchIconsSetting ===

// Module 15474 (EnableSwitchIconsSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import AccessibilityStore from "AccessibilityStore" /* 4598 */;

require = fn;
function useEnableSwitchIconsSettingValue() {
  const items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => isSwitchIconsEnabled.isSwitchIconsEnabled);
}
fn(11562);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["S3z+pV"]);
  },
  parent: fn(8049).MobileUserSettings.ACCESSIBILITY,
  useValue: useEnableSwitchIconsSettingValue,
  onValueChange: fn(14490).setSwitchIconsEnabled,
  hasIcon: true
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EnableSwitchIconsSetting.tsx");

export default SettingBuilders;
export { useEnableSwitchIconsSettingValue };
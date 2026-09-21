// discord_app/modules/user_settings/defs/native/EnableSwitchIconsSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
function useEnableSwitchIconsSettingValue() {
  const items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => isSwitchIconsEnabled.isSwitchIconsEnabled);
}
const SettingBuilders = fn(11725);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["S3z+pV"]);
  },
  parent: fn(8233).MobileUserSettings.ACCESSIBILITY,
  useValue: useEnableSwitchIconsSettingValue,
  onValueChange: fn(14717).setSwitchIconsEnabled,
  hasIcon: true,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EnableSwitchIconsSetting.tsx");

export default toggle;
export { useEnableSwitchIconsSettingValue };

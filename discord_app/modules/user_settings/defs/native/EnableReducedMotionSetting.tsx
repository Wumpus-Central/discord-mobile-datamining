// discord_app/modules/user_settings/defs/native/EnableReducedMotionSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import AccessibilityActionCreators from "../../../a11y/AccessibilityActionCreators.tsx";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.e3TR1b);
  },
  parent: fn(7975).MobileUserSettings.ACCESSIBILITY,
  useValue: function useReducedMotionSettingValue() {
    const items = [AccessibilityStore];
    return initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  },
  onValueChange: function onReducedMotionSettingValueChange(arg0) {
    let str = "no-preference";
    if (arg0) {
      str = "reduce";
    }
    const result = AccessibilityActionCreators.setPrefersReducedMotion(str);
  },
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/EnableReducedMotionSetting.tsx");

export default SettingBuilders;

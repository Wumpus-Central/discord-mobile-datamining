// discord_app/modules/user_settings/defs/native/SyncReducedMotionWithDeviceSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import setFontSize from "../../../a11y/AccessibilityActionCreators.tsx";
import closure_2 from "../../../a11y/AccessibilityStore.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["St+DJK"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useValue: function useReducedMotionSyncSettingValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => "auto" === obj.rawPrefersReducedMotion);
  },
  onValueChange: function onReducedMotionSyncSettingValueChange(arg0) {
    const obj = setFontSize;
    let str = "auto";
    if (!arg0) {
      str = obj.systemPrefersReducedMotion;
    }
    const result = obj.setPrefersReducedMotion(str);
  },
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting(
  "modules/user_settings/defs/native/SyncReducedMotionWithDeviceSetting.tsx",
);

export default createToggle;

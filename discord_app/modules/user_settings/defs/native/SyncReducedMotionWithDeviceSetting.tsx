// discord_app/modules/user_settings/defs/native/SyncReducedMotionWithDeviceSetting.tsx
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import createToggle from "createToggle";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { setFontSize } from "../../../a11y/AccessibilityActionCreators.tsx";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["St+DJK"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue: function useReducedMotionSyncSettingValue() {
    const items = [maybeApplyNoTextColorForLightCustomTheme];
    return initialize /* initialize */.useStateFromStores(items, () => "auto" === obj.rawPrefersReducedMotion);
  },
  onValueChange: function onReducedMotionSyncSettingValueChange(arg0) {
    const obj = setFontSize /* setFontSize */;
    let str = "auto";
    if (!arg0) {
      str = obj.systemPrefersReducedMotion;
    }
    const result = obj.setPrefersReducedMotion(str);
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/SyncReducedMotionWithDeviceSetting.tsx");

export default createToggle;
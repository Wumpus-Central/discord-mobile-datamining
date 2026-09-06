// === Module 15413: ReduceSaturationSetting ===

// Module 15413 (ReduceSaturationSetting)
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11204 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14437 */;
import CircleMinusIcon from "CircleMinusIcon" /* 15312 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
const jsx = fn(21).jsx;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["5PWWCY"]);
  },
  parent: fn(7975).MobileUserSettings.ACCESSIBILITY,
  useTrailing() {
    return jsx(native.BetaTag, { size: native.BetaSizes.SMALL });
  },
  useProps: function useSaturationSettingProps() {
    return noop.useMemo(() => ({ value: saturation.saturation, onSlidingComplete: AccessibilityActionCreators.setSaturation, minimumValue: 0, maximumValue: 1, step: 0.05, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}) }), []);
  }
};
SettingBuilders = SettingBuilders.createSlider(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ReduceSaturationSetting.tsx");

export default SettingBuilders;
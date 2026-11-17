// === Module 18079: ReduceSaturationSetting ===

// Module 18079 (ReduceSaturationSetting)
import util from "util" /* 1113 */;
import native from "native" /* 1187 */;
import CirclePlusIcon from "CirclePlusIcon" /* 13621 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 16924 */;
import CircleMinusIcon from "CircleMinusIcon" /* 17976 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5311 */;

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(12612);
const slider = SettingBuilders.createSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["5PWWCY"]);
  },
  parent: fn(9213).MobileUserSettings.ACCESSIBILITY,
  useTrailing() {
    return jsx(native.BetaTag, { size: native.BetaSizes.SMALL });
  },
  useProps: function useSaturationSettingProps() {
    return noop.useMemo(() => ({ value: saturation.saturation, onChangeEnd: AccessibilityActionCreators.setSaturation, minValue: 0, maxValue: 1, step: 0.05, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}) }), []);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ReduceSaturationSetting.tsx");

export default slider;
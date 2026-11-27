// === Module 17034: ReduceSaturationSetting ===

// Module 17034 (ReduceSaturationSetting)
import util from "util" /* 1112 */;
import native from "native" /* 1186 */;
import CirclePlusIcon from "CirclePlusIcon" /* 13103 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15847 */;
import CircleMinusIcon from "CircleMinusIcon" /* 16931 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11970);
const slider = SettingBuilders.createSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["5PWWCY"]);
  },
  parent: fn(9556).MobileUserSettings.ACCESSIBILITY,
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
// === Module 17679: ReduceSaturationSetting ===

// Module 17679 (ReduceSaturationSetting)
import util from "util" /* 1113 */;
import native from "native" /* 1187 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11686 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 16528 */;
import CircleMinusIcon from "CircleMinusIcon" /* 17577 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5144 */;

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11737);
const slider = SettingBuilders.createSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["5PWWCY"]);
  },
  parent: fn(8578).MobileUserSettings.ACCESSIBILITY,
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
// === Module 15529: ContrastModeSetting ===

// Module 15529 (ContrastModeSetting)
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11358 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14561 */;
import CircleMinusIcon from "CircleMinusIcon" /* 15429 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4632 */;

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11622);
const slider = SettingBuilders.createSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["TYyfO/"]);
  },
  parent: fn(8111).MobileUserSettings.ACCESSIBILITY,
  useTrailing() {
    return jsx(native.BetaTag, { size: native.BetaSizes.SMALL });
  },
  useProps: function useContrastSettingProps() {
    return noop.useMemo(() => ({ value: contrast.contrast, onSlidingComplete: AccessibilityActionCreators.setContrast, minimumValue: 0, maximumValue: 2, step: 0.1, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}) }), []);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ContrastModeSetting.tsx");

export default slider;
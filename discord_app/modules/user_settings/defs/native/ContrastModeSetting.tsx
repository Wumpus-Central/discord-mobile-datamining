// === Module 17549: ContrastModeSetting ===

// Module 17549 (ContrastModeSetting)
import util from "util" /* 1113 */;
import native from "native" /* 1187 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11626 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 16413 */;
import CircleMinusIcon from "CircleMinusIcon" /* 17448 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11677);
const slider = SettingBuilders.createSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["TYyfO/"]);
  },
  parent: fn(8556).MobileUserSettings.ACCESSIBILITY,
  useTrailing() {
    return jsx(native.BetaTag, { size: native.BetaSizes.SMALL });
  },
  useProps: function useContrastSettingProps() {
    return noop.useMemo(() => ({ value: contrast.contrast, onChangeEnd: AccessibilityActionCreators.setContrast, minValue: 0, maxValue: 2, step: 0.1, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}) }), []);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ContrastModeSetting.tsx");

export default slider;
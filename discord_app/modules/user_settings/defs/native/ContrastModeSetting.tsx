// === Module 15498: ContrastModeSetting ===

// Module 15498 (ContrastModeSetting)
import util from "util" /* 1114 */;
import native from "native" /* 1176 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11338 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14526 */;
import CircleMinusIcon from "CircleMinusIcon" /* 15398 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11602);
const slider = SettingBuilders.createSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["TYyfO/"]);
  },
  parent: fn(8079).MobileUserSettings.ACCESSIBILITY,
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
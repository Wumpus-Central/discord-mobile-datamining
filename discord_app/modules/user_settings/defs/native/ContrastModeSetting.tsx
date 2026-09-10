// === Module 15493: ContrastModeSetting ===

// Module 15493 (ContrastModeSetting)
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11276 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14514 */;
import CircleMinusIcon from "CircleMinusIcon" /* 15393 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4597 */;

require = fn;
const jsx = fn(21).jsx;
fn(11540);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["TYyfO/"]);
  },
  parent: fn(8027).MobileUserSettings.ACCESSIBILITY,
  useTrailing() {
    return jsx(native.BetaTag, { size: native.BetaSizes.SMALL });
  },
  useProps: function useContrastSettingProps() {
    return noop.useMemo(() => ({ value: contrast.contrast, onSlidingComplete: AccessibilityActionCreators.setContrast, minimumValue: 0, maximumValue: 2, step: 0.1, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}) }), []);
  }
};
SettingBuilders = SettingBuilders.createSlider(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ContrastModeSetting.tsx");

export default SettingBuilders;
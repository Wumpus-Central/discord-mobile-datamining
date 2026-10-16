// === Module 16389: ContrastModeSetting ===

// Module 16389 (ContrastModeSetting)
import c from "c" /* 576 */;
import util from "util" /* 1128 */;
import native from "native" /* 1202 */;
import CirclePlusIcon from "CirclePlusIcon" /* 10858 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15383 */;
import CircleMinusIcon from "CircleMinusIcon" /* 16288 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5143 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11006);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useContrastSettingProps() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { value: AccessibilityStore.contrast, onSlidingComplete: AccessibilityActionCreators.setContrast, minimumValue: 0, maximumValue: 2, step: 0.1, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}) };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function useContrastSettingProps() {
  return noop.useMemo(() => ({ value: contrast.contrast, onSlidingComplete: AccessibilityActionCreators.setContrast, minimumValue: 0, maximumValue: 2, step: 0.1, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}) }), []);
});
const slider = SettingBuilders.createSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["TYyfO/"]);
  },
  parent: fn(8213).MobileUserSettings.ACCESSIBILITY,
  useTrailing() {
    return jsx(native.BetaTag, { size: native.BetaSizes.SMALL });
  },
  useProps: ReactCompilerGating.isReactCompilerEnabled() ? (function useContrastSettingProps() {
    const cResult = c.c(1);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { value: AccessibilityStore.contrast, onSlidingComplete: AccessibilityActionCreators.setContrast, minimumValue: 0, maximumValue: 2, step: 0.1, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}) };
      cResult[0] = obj2;
      let first = obj2;
    } else {
      first = cResult[0];
    }
    return first;
  }) : (function useContrastSettingProps() {
    return noop.useMemo(() => ({ value: contrast.contrast, onSlidingComplete: AccessibilityActionCreators.setContrast, minimumValue: 0, maximumValue: 2, step: 0.1, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}) }), []);
  })
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ContrastModeSetting.tsx");

export default slider;
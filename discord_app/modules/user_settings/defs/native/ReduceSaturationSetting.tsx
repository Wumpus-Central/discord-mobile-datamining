// === Module 15511: ReduceSaturationSetting ===

// Module 15511 (ReduceSaturationSetting)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11220 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14520 */;
import CircleMinusIcon from "CircleMinusIcon" /* 15409 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11262);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSaturationSettingProps() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { value: AccessibilityStore.saturation, onSlidingComplete: AccessibilityActionCreators.setSaturation, minimumValue: 0, maximumValue: 1, step: 0.05, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}) };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function useSaturationSettingProps() {
  return noop.useMemo(() => ({ value: saturation.saturation, onSlidingComplete: AccessibilityActionCreators.setSaturation, minimumValue: 0, maximumValue: 1, step: 0.05, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}) }), []);
});
const slider = SettingBuilders.createSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["5PWWCY"]);
  },
  parent: fn(7966).MobileUserSettings.ACCESSIBILITY,
  useTrailing() {
    return jsx(native.BetaTag, { size: native.BetaSizes.SMALL });
  },
  useProps: ReactCompilerGating.isReactCompilerEnabled() ? (function useSaturationSettingProps() {
    const cResult = c.c(1);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { value: AccessibilityStore.saturation, onSlidingComplete: AccessibilityActionCreators.setSaturation, minimumValue: 0, maximumValue: 1, step: 0.05, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}) };
      cResult[0] = obj2;
      let first = obj2;
    } else {
      first = cResult[0];
    }
    return first;
  }) : (function useSaturationSettingProps() {
    return noop.useMemo(() => ({ value: saturation.saturation, onSlidingComplete: AccessibilityActionCreators.setSaturation, minimumValue: 0, maximumValue: 1, step: 0.05, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}) }), []);
  })
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ReduceSaturationSetting.tsx");

export default slider;
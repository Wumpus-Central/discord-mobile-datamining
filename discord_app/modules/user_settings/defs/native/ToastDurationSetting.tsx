// === Module 17281: ToastDurationSetting ===

// Module 17281 (ToastDurationSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1125 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11249 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 16185 */;
import CircleMinusIcon from "CircleMinusIcon" /* 17181 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5006 */;

require = fn;
function formatToastDuration(seconds) {
  const intl = util.intl;
  return intl.formatToPlainString(util.t.geSp4K, { seconds });
}
const Accessibility = fn(1084).Accessibility;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11302);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useToastDurationSettingProps() {
  const cResult = c.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function o() {
      return minToastDurationMs.minToastDurationMs / 1000;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c(arg0) {
      AccessibilityActionCreators.setMinToastDuration(1000 * arg0);
    };
    cResult[2] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== stateFromStores) {
    const intl = util.intl;
    const obj2 = { seconds: stateFromStores };
    const formatResult = intl.format(util.t.pyvjRp, obj2);
    cResult[3] = stateFromStores;
    cResult[4] = formatResult;
    let tmp9 = formatResult;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp14 = jsx(CircleMinusIcon.CircleMinusIcon, {});
    const tmp15 = jsx(CirclePlusIcon.CirclePlusIcon, {});
    cResult[5] = tmp14;
    cResult[6] = tmp15;
    let tmp12 = tmp15;
    let tmp11 = tmp14;
  } else {
    tmp11 = cResult[5];
    tmp12 = cResult[6];
  }
  if (cResult[7] === stateFromStores) {
    if (cResult[8] === tmp9) {
      let tmp16 = cResult[9];
    }
    return tmp16;
  }
  const obj3 = { value: stateFromStores, onChange: tmp8, minValue: Accessibility.TOAST_DURATION_MIN_SECONDS, maxValue: Accessibility.TOAST_DURATION_MAX_SECONDS, step: 1, startIcon: tmp11, endIcon: tmp12, formatValue: formatToastDuration, valueLabel: tmp9, defaultValue: Accessibility.TOAST_DURATION_DEFAULT_MS / 1000 };
  cResult[7] = stateFromStores;
  cResult[8] = tmp9;
  cResult[9] = obj3;
  tmp16 = obj3;
  const tmpResult = initialize;
}) : (function useToastDurationSettingProps() {
  const items = [AccessibilityStore];
  stateFromStores = stateFromStores(onChange[8]).useStateFromStores(items, () => minToastDurationMs.minToastDurationMs / 1000);
  onChange = noop.useCallback((arg0) => {
    stateFromStores(callback[9]).setMinToastDuration(1000 * arg0);
  }, []);
  const items1 = [stateFromStores, onChange];
  return noop.useMemo(() => {
    const intl = util.intl;
    const obj2 = { value: stateFromStores, onChange, minValue: Accessibility.TOAST_DURATION_MIN_SECONDS, maxValue: Accessibility.TOAST_DURATION_MAX_SECONDS, step: 1, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}), formatValue: formatToastDuration, valueLabel: intl.format(util.t.pyvjRp, { seconds: stateFromStores }), defaultValue: Accessibility.TOAST_DURATION_DEFAULT_MS / 1000 };
    return obj2;
  }, items1);
});
const slider = SettingBuilders.createSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3oxlia"]);
  },
  parent: fn(8387).MobileUserSettings.ACCESSIBILITY,
  useProps: ReactCompilerGating.isReactCompilerEnabled() ? (function useToastDurationSettingProps() {
    const cResult = c.c(10);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [AccessibilityStore];
      const fn = function o() {
        return minToastDurationMs.minToastDurationMs / 1000;
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp4 = items;
      tmp5 = fn;
    } else {
      [tmp4, tmp5] = cResult;
    }
    const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function c(arg0) {
        AccessibilityActionCreators.setMinToastDuration(1000 * arg0);
      };
      cResult[2] = fn2;
      let tmp8 = fn2;
    } else {
      tmp8 = cResult[2];
    }
    if (cResult[3] !== stateFromStores) {
      const intl = util.intl;
      const obj2 = { seconds: stateFromStores };
      const formatResult = intl.format(util.t.pyvjRp, obj2);
      cResult[3] = stateFromStores;
      cResult[4] = formatResult;
      let tmp9 = formatResult;
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp14 = jsx(CircleMinusIcon.CircleMinusIcon, {});
      const tmp15 = jsx(CirclePlusIcon.CirclePlusIcon, {});
      cResult[5] = tmp14;
      cResult[6] = tmp15;
      let tmp12 = tmp15;
      let tmp11 = tmp14;
    } else {
      tmp11 = cResult[5];
      tmp12 = cResult[6];
    }
    if (cResult[7] === stateFromStores) {
      if (cResult[8] === tmp9) {
        let tmp16 = cResult[9];
      }
      return tmp16;
    }
    const obj3 = { value: stateFromStores, onChange: tmp8, minValue: Accessibility.TOAST_DURATION_MIN_SECONDS, maxValue: Accessibility.TOAST_DURATION_MAX_SECONDS, step: 1, startIcon: tmp11, endIcon: tmp12, formatValue: formatToastDuration, valueLabel: tmp9, defaultValue: Accessibility.TOAST_DURATION_DEFAULT_MS / 1000 };
    cResult[7] = stateFromStores;
    cResult[8] = tmp9;
    cResult[9] = obj3;
    tmp16 = obj3;
    const tmpResult = initialize;
  }) : (function useToastDurationSettingProps() {
    const items = [AccessibilityStore];
    stateFromStores = stateFromStores(onChange[8]).useStateFromStores(items, () => minToastDurationMs.minToastDurationMs / 1000);
    onChange = noop.useCallback((arg0) => {
      stateFromStores(callback[9]).setMinToastDuration(1000 * arg0);
    }, []);
    const items1 = [stateFromStores, onChange];
    return noop.useMemo(() => {
      const intl = util.intl;
      const obj2 = { value: stateFromStores, onChange, minValue: Accessibility.TOAST_DURATION_MIN_SECONDS, maxValue: Accessibility.TOAST_DURATION_MAX_SECONDS, step: 1, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}), formatValue: formatToastDuration, valueLabel: intl.format(util.t.pyvjRp, { seconds: stateFromStores }), defaultValue: Accessibility.TOAST_DURATION_DEFAULT_MS / 1000 };
      return obj2;
    }, items1);
  })
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ToastDurationSetting.tsx");

export default slider;
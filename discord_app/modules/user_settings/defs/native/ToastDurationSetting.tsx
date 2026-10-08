// === Module 15512: ToastDurationSetting ===

// Module 15512 (ToastDurationSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import DesignSystemsNotificationComponentsExperiment from "DesignSystemsNotificationComponentsExperiment" /* 4772 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11220 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14520 */;
import CircleMinusIcon from "CircleMinusIcon" /* 15409 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;

require = fn;
const Accessibility = fn(1085).Accessibility;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11262);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useToastDurationSettingProps() {
  const cResult = c.c(15);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function s() {
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
  if (cResult[7] !== stateFromStores) {
    const intl2 = util.intl;
    const obj3 = { seconds: stateFromStores };
    const formatToPlainStringResult = intl2.formatToPlainString(util.t.geSp4K, obj3);
    cResult[7] = stateFromStores;
    cResult[8] = formatToPlainStringResult;
    let tmp16 = formatToPlainStringResult;
  } else {
    tmp16 = cResult[8];
  }
  if (cResult[9] !== tmp16) {
    const obj4 = { text: tmp16 };
    cResult[9] = tmp16;
    cResult[10] = obj4;
    let tmp18 = obj4;
  } else {
    tmp18 = cResult[10];
  }
  if (cResult[11] === stateFromStores) {
    if (cResult[12] === tmp18) {
      if (cResult[13] === tmp9) {
        let tmp19 = cResult[14];
      }
      return tmp19;
    }
  }
  const obj5 = { value: stateFromStores, onValueChange: tmp8, minimumValue: Accessibility.TOAST_DURATION_MIN_SECONDS, maximumValue: Accessibility.TOAST_DURATION_MAX_SECONDS, step: 1, startIcon: tmp11, endIcon: tmp12, accessibilityValue: tmp18, valueLabel: tmp9, defaultValue: Accessibility.TOAST_DURATION_DEFAULT_MS / 1000 };
  cResult[11] = stateFromStores;
  cResult[12] = tmp18;
  cResult[13] = tmp9;
  cResult[14] = obj5;
  tmp19 = obj5;
  const tmpResult = initialize;
}) : (function useToastDurationSettingProps() {
  const items = [AccessibilityStore];
  stateFromStores = stateFromStores(onValueChange[7]).useStateFromStores(items, () => minToastDurationMs.minToastDurationMs / 1000);
  onValueChange = noop.useCallback((arg0) => {
    stateFromStores(callback[8]).setMinToastDuration(1000 * arg0);
  }, []);
  const items1 = [stateFromStores, onValueChange];
  return noop.useMemo(() => {
    const intl = util.intl;
    const obj2 = { value: stateFromStores, onValueChange, minimumValue: Accessibility.TOAST_DURATION_MIN_SECONDS, maximumValue: Accessibility.TOAST_DURATION_MAX_SECONDS, step: 1, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}), accessibilityValue: null, valueLabel: null, defaultValue: null };
    const obj3 = { text: null };
    const intl2 = util.intl;
    obj3.text = intl2.formatToPlainString(util.t.geSp4K, { seconds: stateFromStores });
    obj2.accessibilityValue = obj3;
    obj2.valueLabel = intl.format(util.t.pyvjRp, { seconds: stateFromStores });
    obj2.defaultValue = Accessibility.TOAST_DURATION_DEFAULT_MS / 1000;
    return obj2;
  }, items1);
});
const slider = SettingBuilders.createSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3oxlia"]);
  },
  parent: fn(7966).MobileUserSettings.ACCESSIBILITY,
  usePredicate() {
    return DesignSystemsNotificationComponentsExperiment.useDesignSystemsNotificationComponents("ToastDurationSettingNative");
  },
  useProps: ReactCompilerGating.isReactCompilerEnabled() ? (function useToastDurationSettingProps() {
    const cResult = c.c(15);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [AccessibilityStore];
      const fn = function s() {
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
    if (cResult[7] !== stateFromStores) {
      const intl2 = util.intl;
      const obj3 = { seconds: stateFromStores };
      const formatToPlainStringResult = intl2.formatToPlainString(util.t.geSp4K, obj3);
      cResult[7] = stateFromStores;
      cResult[8] = formatToPlainStringResult;
      let tmp16 = formatToPlainStringResult;
    } else {
      tmp16 = cResult[8];
    }
    if (cResult[9] !== tmp16) {
      const obj4 = { text: tmp16 };
      cResult[9] = tmp16;
      cResult[10] = obj4;
      let tmp18 = obj4;
    } else {
      tmp18 = cResult[10];
    }
    if (cResult[11] === stateFromStores) {
      if (cResult[12] === tmp18) {
        if (cResult[13] === tmp9) {
          let tmp19 = cResult[14];
        }
        return tmp19;
      }
    }
    const obj5 = { value: stateFromStores, onValueChange: tmp8, minimumValue: Accessibility.TOAST_DURATION_MIN_SECONDS, maximumValue: Accessibility.TOAST_DURATION_MAX_SECONDS, step: 1, startIcon: tmp11, endIcon: tmp12, accessibilityValue: tmp18, valueLabel: tmp9, defaultValue: Accessibility.TOAST_DURATION_DEFAULT_MS / 1000 };
    cResult[11] = stateFromStores;
    cResult[12] = tmp18;
    cResult[13] = tmp9;
    cResult[14] = obj5;
    tmp19 = obj5;
    const tmpResult = initialize;
  }) : (function useToastDurationSettingProps() {
    const items = [AccessibilityStore];
    stateFromStores = stateFromStores(onValueChange[7]).useStateFromStores(items, () => minToastDurationMs.minToastDurationMs / 1000);
    onValueChange = noop.useCallback((arg0) => {
      stateFromStores(callback[8]).setMinToastDuration(1000 * arg0);
    }, []);
    const items1 = [stateFromStores, onValueChange];
    return noop.useMemo(() => {
      const intl = util.intl;
      const obj2 = { value: stateFromStores, onValueChange, minimumValue: Accessibility.TOAST_DURATION_MIN_SECONDS, maximumValue: Accessibility.TOAST_DURATION_MAX_SECONDS, step: 1, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}), accessibilityValue: null, valueLabel: null, defaultValue: null };
      const obj3 = { text: null };
      const intl2 = util.intl;
      obj3.text = intl2.formatToPlainString(util.t.geSp4K, { seconds: stateFromStores });
      obj2.accessibilityValue = obj3;
      obj2.valueLabel = intl.format(util.t.pyvjRp, { seconds: stateFromStores });
      obj2.defaultValue = Accessibility.TOAST_DURATION_DEFAULT_MS / 1000;
      return obj2;
    }, items1);
  })
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ToastDurationSetting.tsx");

export default slider;
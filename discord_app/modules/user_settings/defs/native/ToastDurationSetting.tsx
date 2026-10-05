// === Module 15235: ToastDurationSetting ===

// Module 15235 (ToastDurationSetting)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import DesignSystemsNotificationComponentsExperiment from "DesignSystemsNotificationComponentsExperiment" /* 4574 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import CirclePlusIcon from "CirclePlusIcon" /* 10983 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14277 */;
import CircleMinusIcon from "CircleMinusIcon" /* 15132 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const Accessibility = Constants.Accessibility;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let minToastDurationMs;
  let tmp11;
  let tmp12;
  let tmp16;
  let tmp18;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(15);
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c(arg0) {
      const obj = AccessibilityActionCreators;
      obj.setMinToastDuration(1000 * arg0);
    };
    cResult[2] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== stateFromStores) {
    const intl = intl3.intl;
    const obj2 = { seconds: stateFromStores };
    const formatResult = intl.format(intl3.t.pyvjRp, obj2);
    cResult[3] = stateFromStores;
    cResult[4] = formatResult;
    tmp9 = formatResult;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp14 = jsx(CircleMinusIcon.CircleMinusIcon, {});
    const tmp15 = jsx(CirclePlusIcon.CirclePlusIcon, {});
    cResult[5] = tmp14;
    cResult[6] = tmp15;
    tmp12 = tmp15;
    tmp11 = tmp14;
  } else {
    tmp11 = cResult[5];
    tmp12 = cResult[6];
  }
  if (cResult[7] !== stateFromStores) {
    const intl2 = intl3.intl;
    const obj3 = { seconds: stateFromStores };
    const formatToPlainStringResult = intl2.formatToPlainString(intl3.t.geSp4K, obj3);
    cResult[7] = stateFromStores;
    cResult[8] = formatToPlainStringResult;
    tmp16 = formatToPlainStringResult;
  } else {
    tmp16 = cResult[8];
  }
  if (cResult[9] !== tmp16) {
    const obj4 = { text: tmp16 };
    cResult[9] = tmp16;
    cResult[10] = obj4;
    tmp18 = obj4;
  } else {
    tmp18 = cResult[10];
  }
  if (cResult[11] === stateFromStores) {
    if (cResult[12] === tmp18) {
      let tmp19;
      if (cResult[13] === tmp9) {
        tmp19 = cResult[14];
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
}) : (() => {
  let minToastDurationMs;
  let onValueChange;
  let stateFromStores;
  let obj = stateFromStores(onValueChange[7]);
  const items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => minToastDurationMs.minToastDurationMs / 1000);
  onValueChange = react.useCallback((arg0) => {
    const obj = stateFromStores(callback[8]);
    obj.setMinToastDuration(1000 * arg0);
  }, []);
  const items1 = [stateFromStores, onValueChange];
  return react.useMemo(() => {
    let formatResult;
    let intl2;
    let obj3;
    const intl = intl3.intl;
    const obj = { seconds: stateFromStores };
    const obj2 = { value: stateFromStores, onValueChange, minimumValue: Accessibility.TOAST_DURATION_MIN_SECONDS, maximumValue: Accessibility.TOAST_DURATION_MAX_SECONDS, step: 1, startIcon: null, endIcon: null, accessibilityValue: obj3, valueLabel: formatResult, defaultValue: Accessibility.TOAST_DURATION_DEFAULT_MS / 1000 };
    formatResult = intl.format(intl3.t.pyvjRp, obj);
    obj3 = { text: intl2.formatToPlainString(intl3.t.geSp4K, obj4) };
    intl2 = intl3.intl;
    return obj2;
  }, items1);
});
let obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t["3oxlia"]);
  },
  parent: MobileUserSettings.ACCESSIBILITY,
  usePredicate() {
    const obj = DesignSystemsNotificationComponentsExperiment;
    return obj.useDesignSystemsNotificationComponents("ToastDurationSettingNative");
  },
  useProps: tmp2
};
const slider = SettingBuilders.createSlider(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ToastDurationSetting.tsx");

export default slider;
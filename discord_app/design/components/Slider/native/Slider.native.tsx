// discord_app/design/components/Slider/native/Slider.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import HapticUtils from "../../../../modules/haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../../../modules/haptics/HapticFeedbackTypes.tsx";
import _modDef8843 from "../../../../../_runtime/metro/08843__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5009);
let obj2 = {
  container: { flexGrow: 1, flexDirection: "row", alignItems: "center" },
  slider: { flex: 1 },
  minimumTrackTintColor: { backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED },
  maximumTrackTintColor: null,
  startIcon: null,
  endIcon: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
obj2.maximumTrackTintColor = { backgroundColor: nativeDefault.colors.SLIDER_TRACK_BACKGROUND };
let obj4 = { backgroundColor: nativeDefault.colors.SLIDER_TRACK_BACKGROUND };
obj2.startIcon = { marginRight: nativeDefault.space.PX_8 };
let obj5 = { marginRight: nativeDefault.space.PX_8 };
obj2.endIcon = { marginLeft: nativeDefault.space.PX_8 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Slider/native/Slider.native.tsx");

export function useLatestSliderValue(value, defaultValue, minValue) {
  let tmp = value;
  if (value == null) {
    tmp = defaultValue;
  }
  if (tmp == null) {
    tmp = minValue;
  }
  [tmp3, tmp4] = noop.useState(tmp);
  const tmp5 = _slicedToArray(noop.useState(value), 2);
  if (value !== tmp5[0]) {
    tmp5[1](value);
    if (null != value) {
      tmp4(value);
    }
  }
  const items = [tmp3, tmp4];
  return items;
}
export function Slider(maxValue) {
  ({ value, defaultValue, minValue } = maxValue);
  if (minValue === undefined) {
    minValue = 0;
  }
  let num = maxValue.maxValue;
  if (num === undefined) {
    num = 100;
  }
  const step = maxValue.step;
  ({ onChange: importDefault, formatValue, startIcon, endIcon } = maxValue);
  dependencyMap = undefined;
  ({ onChangeEnd, disabled, accessibilityLabel, accessibilityHint, testID } = maxValue);
  const tmp = closure_8();
  let tmp2 = defaultValue;
  if (defaultValue == null) {
    tmp2 = minValue;
  }
  let tmp4 = first;
  if (first == null) {
    tmp4 = defaultValue;
  }
  if (tmp4 == null) {
    tmp4 = minValue;
  }
  [tmp6, tmp7] = noop.useState(tmp4);
  const tmp3Result3 = _slicedToArray(noop.useState(first), 2);
  if (first !== tmp3Result3[0]) {
    tmp3Result3[1](first);
    if (null != first) {
      tmp7(first);
    }
  }
  const items = [tmp6, tmp7];
  const tmp3Result4 = _slicedToArray(items, 2);
  dependencyMap = tmp3Result4[1];
  const obj2 = { style: tmp.container, children: null };
  let tmp14 = null;
  if (null != startIcon) {
    const obj3 = { style: tmp.startIcon, children: startIcon };
    tmp14 = closure_6(View, obj3);
  }
  const items1 = [tmp14, ,];
  const obj4 = {
    style: tmp.slider,
    value: null,
    minimumValue: null,
    maximumValue: null,
    step: null,
    disabled: null,
    onValueChange: null,
    onSlidingComplete: null,
    minimumTrackTintColor: null,
    maximumTrackTintColor: null,
    tapToSeek: true,
    accessibilityLabel: null,
    accessibilityHint: null,
    accessibilityValue: null,
    testID: null,
    onResponderGrant: null,
  };
  const tmp3Result = _slicedToArray(noop.useState(tmp4), 2);
  if (first == null) {
    first = _slicedToArray(noop.useState(tmp2), 1)[0];
  }
  obj4.value = first;
  obj4.minimumValue = minValue;
  obj4.maximumValue = num;
  obj4.step = step;
  obj4.disabled = disabled;
  obj4.onValueChange = function handleValueChange(arg0) {
    if (null != step) {
      const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
    }
    closure_2(arg0);
    if (closure_1_1 != null) {
      closure_1_1(arg0);
    }
  };
  obj4.onSlidingComplete = onChangeEnd;
  obj4.minimumTrackTintColor = tmp.minimumTrackTintColor.backgroundColor;
  obj4.maximumTrackTintColor = tmp.maximumTrackTintColor.backgroundColor;
  obj4.accessibilityLabel = accessibilityLabel;
  obj4.accessibilityHint = accessibilityHint;
  let tmp19;
  if (null != formatValue) {
    const obj5 = { text: formatValue(tmp3Result4[0]) };
    tmp19 = obj5;
  }
  obj4.accessibilityValue = tmp19;
  obj4.testID = testID;
  const tmp18 = _modDef8843;
  let fn;
  if (obj6.isAndroid()) {
    fn = () => true;
  }
  obj4.onResponderGrant = fn;
  items1[1] = closure_6(tmp18, obj4);
  let tmp16Result = null;
  if (null != endIcon) {
    const obj7 = { style: tmp.endIcon, children: endIcon };
    tmp16Result = closure_6(View, obj7);
  }
  items1[2] = tmp16Result;
  obj2.children = items1;
  return closure_7(View, obj2);
}

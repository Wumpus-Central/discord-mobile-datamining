// discord_app/design/components/Slider/native/Slider.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import HapticUtils from "../../../../modules/haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../../../modules/haptics/HapticFeedbackTypes.tsx";
import _modDef8718 from "../../../../../_runtime/metro/08718__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(4917);
const obj2 = {
  container: { flexGrow: 1, flexDirection: "row", alignItems: "center" },
  disabled: { opacity: 0.5 },
  slider: { flex: 1 },
  minimumTrackTintColor: { backgroundColor: nativeDefault.colors.SLIDER_INDICATOR_BACKGROUND },
  maximumTrackTintColor: null,
  startIcon: null,
  endIcon: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.SLIDER_INDICATOR_BACKGROUND };
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
  items = [tmp3, tmp4];
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
  ({ onChange: importDefault, onChangeEnd: dependencyMap, formatValue, disabled, startIcon, endIcon } = maxValue);
  _slicedToArray = undefined;
  noop = undefined;
  ({ accessibilityLabel, accessibilityHint, testID } = maxValue);
  const tmp = closure_8();
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  _slicedToArray = tmp5[1];
  let tmp6 = defaultValue;
  if (defaultValue == null) {
    tmp6 = minValue;
  }
  let tmp7 = first;
  if (first == null) {
    tmp7 = defaultValue;
  }
  if (tmp7 == null) {
    tmp7 = minValue;
  }
  let obj = step(4978);
  [tmp9, tmp10] = noop.useState(tmp7);
  const tmp4Result3 = _slicedToArray(noop.useState(first), 2);
  if (first !== tmp4Result3[0]) {
    tmp4Result3[1](first);
    if (null != first) {
      tmp10(first);
    }
  }
  items = [tmp9, tmp10];
  const tmp4Result4 = _slicedToArray(items, 2);
  noop = tmp4Result4[1];
  let num2 = 16;
  if (tmp5[0]) {
    num2 = 16;
    if (!disabled) {
      num2 = 20;
    }
  }
  const items1 = [tmp.container];
  let disabled1 = null;
  if (disabled) {
    disabled1 = tmp.disabled;
  }
  const obj3 = { style: items1, children: null };
  items1[1] = disabled1;
  let tmp18 = null;
  if (null != startIcon) {
    const obj4 = { style: tmp.startIcon, children: startIcon };
    tmp18 = closure_6(View, obj4);
  }
  const items2 = [tmp18, ,];
  const obj5 = {
    style: tmp.slider,
    value: null,
    minimumValue: null,
    maximumValue: null,
    step: null,
    disabled: null,
    onValueChange: null,
    onSlidingStart: null,
    onSlidingComplete: null,
    thumbImage: null,
    thumbSize: null,
    minimumTrackTintColor: null,
    maximumTrackTintColor: null,
    tapToSeek: true,
    accessibilityLabel: null,
    accessibilityHint: null,
    accessibilityValue: null,
    testID: null,
    onResponderGrant: null,
  };
  const tmp4Result = _slicedToArray(noop.useState(tmp7), 2);
  if (first == null) {
    first = tmp4(noop.useState(tmp6), 1)[0];
  }
  obj5.value = first;
  obj5.minimumValue = minValue;
  obj5.maximumValue = num;
  obj5.step = step;
  obj5.disabled = disabled;
  obj5.onValueChange = function handleValueChange(arg0) {
    if (null != step) {
      const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
    }
    closure_4(arg0);
    if (closure_1_1 != null) {
      closure_1_1(arg0);
    }
  };
  obj5.onSlidingStart = function onSlidingStart() {
    return closure_3(true);
  };
  obj5.onSlidingComplete = function handleSlidingComplete(arg0) {
    closure_3(false);
    if (dependencyMap != null) {
      tmp2(arg0);
    }
  };
  const tmp21 = _modDef8718;
  if (tmp2Result.isThemeDark(obj.useThemeContext().theme)) {
    let tmp2Result3 = tmp2(14772);
  } else {
    tmp2Result3 = tmp2(14773);
  }
  obj5.thumbImage = tmp2Result3;
  obj5.thumbSize = 1.625 * num2;
  obj5.minimumTrackTintColor = tmp.minimumTrackTintColor.backgroundColor;
  obj5.maximumTrackTintColor = tmp.maximumTrackTintColor.backgroundColor;
  obj5.accessibilityLabel = accessibilityLabel;
  obj5.accessibilityHint = accessibilityHint;
  let tmp23;
  if (null != formatValue) {
    const obj6 = { text: formatValue(tmp4Result4[0]) };
    tmp23 = obj6;
  }
  obj5.accessibilityValue = tmp23;
  obj5.testID = testID;
  tmp2Result = step(5082);
  let fn;
  if (tmp2Result4.isAndroid()) {
    fn = () => true;
  }
  obj5.onResponderGrant = fn;
  items2[1] = closure_6(tmp21, obj5);
  let tmp20Result = null;
  if (null != endIcon) {
    const obj7 = { style: tmp.endIcon, children: endIcon };
    tmp20Result = closure_6(View, obj7);
  }
  items2[2] = tmp20Result;
  obj3.children = items2;
  return closure_7(View, obj3);
}

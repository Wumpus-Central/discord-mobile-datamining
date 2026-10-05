// _runtime/00430_TouchableWithoutFeedback.js
import Fragment from "react/00021_Fragment.js";
import usePressabilityDefault from "00301_usePressability.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import "react";
import react from "00019_react.js";

let hasOwnProperty;
let metroRequire;
let closure_2 = ["onBlur", "onFocus"];
({ cloneElement: hasOwnProperty, useMemo: metroRequire } = react);
const jsx = Fragment.jsx;
let closure_7 = [
  "accessibilityActions",
  "accessibilityElementsHidden",
  "accessibilityHint",
  "accessibilityLanguage",
  "accessibilityIgnoresInvertColors",
  "accessibilityLabel",
  "accessibilityLiveRegion",
  "accessibilityRole",
  "accessibilityValue",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "accessibilityViewIsModal",
  "aria-modal",
  "hitSlop",
  "importantForAccessibility",
  "nativeID",
  "onAccessibilityAction",
  "onBlur",
  "onFocus",
  "onLayout",
  "testID",
];

export default function TouchableWithoutFeedback(disabled) {
  let accessibilityElementsHidden;
  let accessibilityLiveRegion;
  let nativeID;
  let onBlur2;
  let onFocus2;
  let prop1;
  let prop2;
  let prop3;
  let prop4;
  let str;
  let str2;
  let tmp18;
  let tmp7;
  disabled = disabled.disabled;
  const rejectResponderTermination = disabled.rejectResponderTermination;
  const prop = disabled["aria-disabled"];
  const accessibilityState = disabled.accessibilityState;
  const hitSlop = disabled.hitSlop;
  const delayLongPress = disabled.delayLongPress;
  const delayPressIn = disabled.delayPressIn;
  const delayPressOut = disabled.delayPressOut;
  const pressRetentionOffset = disabled.pressRetentionOffset;
  const touchSoundDisabled = disabled.touchSoundDisabled;
  const onBlur = disabled.onBlur;
  const onFocus = disabled.onFocus;
  const onLongPress = disabled.onLongPress;
  const onPress = disabled.onPress;
  const onPressIn = disabled.onPressIn;
  const onPressOut = disabled.onPressOut;
  const items = [rejectResponderTermination, disabled, prop, , , , , , , , , , , , ,];
  let disabled1;
  if (accessibilityState != null) {
    disabled1 = accessibilityState.disabled;
  }
  items[3] = disabled1;
  items[4] = hitSlop;
  items[5] = delayLongPress;
  items[6] = delayPressIn;
  items[7] = delayPressOut;
  items[8] = pressRetentionOffset;
  items[9] = touchSoundDisabled;
  items[10] = onBlur;
  items[11] = onFocus;
  items[12] = onLongPress;
  items[13] = onPress;
  items[14] = onPressIn;
  items[15] = onPressOut;
  const tmp2Result = metroRequire(() => {
    let tmp;
    const obj = {
      cancelable: !rejectResponderTermination,
      disabled: tmp,
      hitSlop,
      delayLongPress,
      delayPressIn,
      delayPressOut,
      minPressDuration: 0,
      pressRectOffset: pressRetentionOffset,
      android_disableSound: touchSoundDisabled,
      onBlur,
      onFocus,
      onLongPress,
      onPress,
      onPressIn,
      onPressOut,
    };
    tmp = disabled;
    if (null === disabled) {
      let tmp2 = prop;
      if (prop == null) {
        disabled = undefined;
        if (accessibilityState != null) {
          disabled = accessibilityState.disabled;
        }
        tmp2 = disabled;
      }
      tmp = tmp2;
    }
    return obj;
  }, items);
  const tmp5 = usePressabilityDefault(tmp2Result);
  const Children = react.Children;
  const items1 = [Children.only(disabled.children).props.children];
  ({ "aria-live": accessibilityLiveRegion, "aria-busy": tmp7 } = disabled);
  Children.only(disabled.children);
  if (tmp7 == null) {
    const accessibilityState2 = disabled.accessibilityState;
    let busy;
    if (accessibilityState2 != null) {
      busy = accessibilityState2.busy;
    }
  }
  let obj = { busy: tmp7, checked: prop1, disabled: prop2, expanded: prop3, selected: prop4 };
  prop1 = disabled["aria-checked"];
  if (prop1 == null) {
    const accessibilityState3 = disabled.accessibilityState;
    let checked;
    if (accessibilityState3 != null) {
      checked = accessibilityState3.checked;
    }
    prop1 = checked;
  }
  prop2 = disabled["aria-disabled"];
  if (prop2 == null) {
    const accessibilityState4 = disabled.accessibilityState;
    let disabled2;
    if (accessibilityState4 != null) {
      disabled2 = accessibilityState4.disabled;
    }
    prop2 = disabled2;
  }
  prop3 = disabled["aria-expanded"];
  if (prop3 == null) {
    const accessibilityState5 = disabled.accessibilityState;
    let expanded;
    if (accessibilityState5 != null) {
      expanded = accessibilityState5.expanded;
    }
    prop3 = expanded;
  }
  prop4 = disabled["aria-selected"];
  if (prop4 == null) {
    const accessibilityState6 = disabled.accessibilityState;
    let selected;
    if (accessibilityState6 != null) {
      selected = accessibilityState6.selected;
    }
    prop4 = selected;
  }
  ({ onBlur: onBlur2, onFocus: onFocus2 } = tmp5);
  const obj2 = {
    accessible: false !== disabled.accessible,
    accessibilityState: tmp18,
    focusable: false !== disabled.focusable && undefined !== disabled.onPress && !disabled.disabled,
    accessibilityElementsHidden,
    importantForAccessibility: str,
    accessibilityLiveRegion: str2,
    nativeID,
  };
  const merged = Object.assign(_objectWithoutProperties(tmp5, closure_2));
  tmp18 = obj;
  if (null != disabled.disabled) {
    const obj3 = { disabled: disabled.disabled };
    const merged1 = Object.assign(obj);
    tmp18 = obj3;
  }
  accessibilityElementsHidden = disabled["aria-hidden"];
  if (accessibilityElementsHidden == null) {
    accessibilityElementsHidden = disabled.accessibilityElementsHidden;
  }
  str = "no-hide-descendants";
  if (true !== disabled["aria-hidden"]) {
    str = disabled.importantForAccessibility;
  }
  str2 = "none";
  if ("off" !== accessibilityLiveRegion) {
    if (accessibilityLiveRegion == null) {
      accessibilityLiveRegion = disabled.accessibilityLiveRegion;
    }
    str2 = accessibilityLiveRegion;
  }
  nativeID = disabled.id;
  if (nativeID == null) {
    nativeID = disabled.nativeID;
  }
  for (const item10094 of closure_7) {
    if (undefined !== disabled[item10094]) {
      obj2[item10094] = disabled[item10094];
    }
    continue;
  }
  return hasOwnProperty(obj2, ...items1);
}

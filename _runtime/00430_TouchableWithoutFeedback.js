import _objectWithoutProperties from "_objectWithoutProperties";
import closure_4 from "noop";
import noop from "noop";
import { jsx } from "jsxProd";

let c5;
let closure_6;
let closure_2 = ["onBlur", "onFocus"];
({ cloneElement: c5, useMemo: closure_6 } = noop);
let closure_7 = ["accessibilityActions", "accessibilityElementsHidden", "accessibilityHint", "accessibilityLanguage", "accessibilityIgnoresInvertColors", "accessibilityLabel", "accessibilityLiveRegion", "accessibilityRole", "accessibilityValue", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "accessibilityViewIsModal", "aria-modal", "hitSlop", "importantForAccessibility", "nativeID", "onAccessibilityAction", "onBlur", "onFocus", "onLayout", "testID"];

export default function TouchableWithoutFeedback(disabled) {
  let accessibilityLiveRegion;
  let onBlur2;
  let onFocus2;
  let tmp6;
  disabled = disabled.disabled;
  const rejectResponderTermination = disabled.rejectResponderTermination;
  aria_disabled = disabled["aria-disabled"];
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
  const items = [rejectResponderTermination, disabled, aria_disabled, , , , , , , , , , , , , ];
  disabled = undefined;
  if (accessibilityState != null) {
    disabled = accessibilityState.disabled;
  }
  items[3] = disabled;
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
  const tmp4 = disabled(rejectResponderTermination[3])(delayPressIn(() => {
    const obj = { cancelable: !rejectResponderTermination, disabled: null, hitSlop: null, delayLongPress: null, delayPressIn: null, delayPressOut: null, minPressDuration: 0, pressRectOffset: null, android_disableSound: null, onBlur: null, onFocus: null, onLongPress: null, onPress: null, onPressIn: null, onPressOut: null };
    let tmp = disabled;
    if (null === disabled) {
      let tmp2 = aria_disabled;
      if (aria_disabled == null) {
        disabled = undefined;
        if (accessibilityState != null) {
          disabled = accessibilityState.disabled;
        }
        tmp2 = disabled;
      }
      tmp = tmp2;
    }
    obj[1] = tmp;
    obj[2] = hitSlop;
    obj[3] = delayLongPress;
    obj[4] = delayPressIn;
    obj[5] = delayPressOut;
    obj[7] = pressRetentionOffset;
    obj[8] = touchSoundDisabled;
    obj[9] = onBlur;
    obj[10] = onFocus;
    obj[11] = onLongPress;
    obj[12] = onPress;
    obj[13] = onPressIn;
    obj[14] = onPressOut;
    return obj;
  }, items));
  const Children = hitSlop.Children;
  let tmp = delayPressIn;
  const tmpResult = delayPressIn(() => {
    const obj = { cancelable: !rejectResponderTermination, disabled: null, hitSlop: null, delayLongPress: null, delayPressIn: null, delayPressOut: null, minPressDuration: 0, pressRectOffset: null, android_disableSound: null, onBlur: null, onFocus: null, onLongPress: null, onPress: null, onPressIn: null, onPressOut: null };
    let tmp = disabled;
    if (null === disabled) {
      let tmp2 = aria_disabled;
      if (aria_disabled == null) {
        disabled = undefined;
        if (accessibilityState != null) {
          disabled = accessibilityState.disabled;
        }
        tmp2 = disabled;
      }
      tmp = tmp2;
    }
    obj[1] = tmp;
    obj[2] = hitSlop;
    obj[3] = delayLongPress;
    obj[4] = delayPressIn;
    obj[5] = delayPressOut;
    obj[7] = pressRetentionOffset;
    obj[8] = touchSoundDisabled;
    obj[9] = onBlur;
    obj[10] = onFocus;
    obj[11] = onLongPress;
    obj[12] = onPress;
    obj[13] = onPressIn;
    obj[14] = onPressOut;
    return obj;
  }, items);
  const items1 = [Children.only(disabled.children).props.children];
  ({ aria-live: accessibilityLiveRegion, aria-busy: tmp6 } = disabled);
  if (tmp6 == null) {
    const accessibilityState2 = disabled.accessibilityState;
    let busy;
    if (accessibilityState2 != null) {
      busy = accessibilityState2.busy;
    }
  }
  let obj = { busy: tmp6, checked: null, disabled: null, expanded: null, selected: null };
  aria_checked = disabled["aria-checked"];
  if (aria_checked == null) {
    const accessibilityState3 = disabled.accessibilityState;
    let checked;
    if (accessibilityState3 != null) {
      checked = accessibilityState3.checked;
    }
    aria_checked = checked;
  }
  obj[1] = aria_checked;
  aria_disabled2 = disabled["aria-disabled"];
  if (aria_disabled2 == null) {
    const accessibilityState4 = disabled.accessibilityState;
    let disabled1;
    if (accessibilityState4 != null) {
      disabled1 = accessibilityState4.disabled;
    }
    aria_disabled2 = disabled1;
  }
  obj[2] = aria_disabled2;
  aria_expanded = disabled["aria-expanded"];
  if (aria_expanded == null) {
    const accessibilityState5 = disabled.accessibilityState;
    let expanded;
    if (accessibilityState5 != null) {
      expanded = accessibilityState5.expanded;
    }
    aria_expanded = expanded;
  }
  obj[3] = aria_expanded;
  aria_selected = disabled["aria-selected"];
  if (aria_selected == null) {
    const accessibilityState6 = disabled.accessibilityState;
    let selected;
    if (accessibilityState6 != null) {
      selected = accessibilityState6.selected;
    }
    aria_selected = selected;
  }
  obj[4] = aria_selected;
  ({ onBlur: onBlur2, onFocus: onFocus2 } = tmp4);
  obj = {};
  const merged = Object.assign(accessibilityState(tmp4, aria_disabled));
  obj.accessible = false !== disabled.accessible;
  let tmp13 = obj;
  if (null != disabled.disabled) {
    obj = {};
    const merged1 = Object.assign(obj);
    obj.disabled = disabled.disabled;
    tmp13 = obj;
  }
  obj.accessibilityState = tmp13;
  obj.focusable = false !== disabled.focusable && undefined !== disabled.onPress && !disabled.disabled;
  let accessibilityElementsHidden = disabled["aria-hidden"];
  if (accessibilityElementsHidden == null) {
    accessibilityElementsHidden = disabled.accessibilityElementsHidden;
  }
  obj.accessibilityElementsHidden = accessibilityElementsHidden;
  let str = "no-hide-descendants";
  if (true !== disabled["aria-hidden"]) {
    str = disabled.importantForAccessibility;
  }
  obj.importantForAccessibility = str;
  let str2 = "none";
  if ("off" !== accessibilityLiveRegion) {
    if (accessibilityLiveRegion == null) {
      accessibilityLiveRegion = disabled.accessibilityLiveRegion;
    }
    str2 = accessibilityLiveRegion;
  }
  obj.accessibilityLiveRegion = str2;
  let nativeID = disabled.id;
  if (nativeID == null) {
    nativeID = disabled.nativeID;
  }
  obj.nativeID = nativeID;
  for (const item10094 of delayPressOut) {
    let tmp17 = item10094;
    if (undefined !== arg0[item10094]) {
      let tmp18 = item10094;
      obj[tmp17] = arg0[tmp17];
    }
    continue;
  }
  return delayLongPress(obj, ...items1);
};
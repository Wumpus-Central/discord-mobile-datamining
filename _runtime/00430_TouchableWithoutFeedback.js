// === Module 430: TouchableWithoutFeedback ===

// Module 430 (TouchableWithoutFeedback)
import _modDef301 from "module_301" /* 301 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import "module_19";

let closure_2 = ["onBlur", "onFocus"];
const noop = fn(19);
({ cloneElement: hasOwnProperty, useMemo: metroRequire } = noop);
const jsx = fn(21).jsx;
let closure_7 = ["accessibilityActions", "accessibilityElementsHidden", "accessibilityHint", "accessibilityLanguage", "accessibilityIgnoresInvertColors", "accessibilityLabel", "accessibilityLiveRegion", "accessibilityRole", "accessibilityValue", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "accessibilityViewIsModal", "aria-modal", "hitSlop", "importantForAccessibility", "nativeID", "onAccessibilityAction", "onBlur", "onFocus", "onLayout", "testID"];

export default function TouchableWithoutFeedback(disabled) {
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
  const items = [rejectResponderTermination, disabled, prop, , , , , , , , , , , , , ];
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
  const tmp5 = _modDef301(timestampProducer(() => {
    const obj = { cancelable: !rejectResponderTermination, disabled: null, hitSlop: null, delayLongPress: null, delayPressIn: null, delayPressOut: null, minPressDuration: 0, pressRectOffset: null, android_disableSound: null, onBlur: null, onFocus: null, onLongPress: null, onPress: null, onPressIn: null, onPressOut: null };
    let tmp = disabled;
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
    obj.disabled = tmp;
    obj.hitSlop = hitSlop;
    obj.delayLongPress = delayLongPress;
    obj.delayPressIn = delayPressIn;
    obj.delayPressOut = delayPressOut;
    obj.pressRectOffset = pressRetentionOffset;
    obj.android_disableSound = touchSoundDisabled;
    obj.onBlur = onBlur;
    obj.onFocus = onFocus;
    obj.onLongPress = onLongPress;
    obj.onPress = onPress;
    obj.onPressIn = onPressIn;
    obj.onPressOut = onPressOut;
    return obj;
  }, items));
  const Children = noop.Children;
  const tmp2Result = timestampProducer(() => {
    const obj = { cancelable: !rejectResponderTermination, disabled: null, hitSlop: null, delayLongPress: null, delayPressIn: null, delayPressOut: null, minPressDuration: 0, pressRectOffset: null, android_disableSound: null, onBlur: null, onFocus: null, onLongPress: null, onPress: null, onPressIn: null, onPressOut: null };
    let tmp = disabled;
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
    obj.disabled = tmp;
    obj.hitSlop = hitSlop;
    obj.delayLongPress = delayLongPress;
    obj.delayPressIn = delayPressIn;
    obj.delayPressOut = delayPressOut;
    obj.pressRectOffset = pressRetentionOffset;
    obj.android_disableSound = touchSoundDisabled;
    obj.onBlur = onBlur;
    obj.onFocus = onFocus;
    obj.onLongPress = onLongPress;
    obj.onPress = onPress;
    obj.onPressIn = onPressIn;
    obj.onPressOut = onPressOut;
    return obj;
  }, items);
  const items1 = [Children.only(disabled.children).props.children];
  ({ aria-live: accessibilityLiveRegion, aria-busy: tmp7 } = disabled);
  if (tmp7 == null) {
    const accessibilityState2 = disabled.accessibilityState;
    let busy;
    if (accessibilityState2 != null) {
      busy = accessibilityState2.busy;
    }
  }
  let obj = { busy: tmp7, checked: null, disabled: null, expanded: null, selected: null };
  let prop1 = disabled["aria-checked"];
  if (prop1 == null) {
    const accessibilityState3 = disabled.accessibilityState;
    let checked;
    if (accessibilityState3 != null) {
      checked = accessibilityState3.checked;
    }
    prop1 = checked;
  }
  obj.checked = prop1;
  let prop2 = disabled["aria-disabled"];
  if (prop2 == null) {
    const accessibilityState4 = disabled.accessibilityState;
    let disabled1;
    if (accessibilityState4 != null) {
      disabled1 = accessibilityState4.disabled;
    }
    prop2 = disabled1;
  }
  obj.disabled = prop2;
  let prop3 = disabled["aria-expanded"];
  if (prop3 == null) {
    const accessibilityState5 = disabled.accessibilityState;
    let expanded;
    if (accessibilityState5 != null) {
      expanded = accessibilityState5.expanded;
    }
    prop3 = expanded;
  }
  obj.expanded = prop3;
  let prop4 = disabled["aria-selected"];
  if (prop4 == null) {
    const accessibilityState6 = disabled.accessibilityState;
    let selected;
    if (accessibilityState6 != null) {
      selected = accessibilityState6.selected;
    }
    prop4 = selected;
  }
  obj.selected = prop4;
  ({ onBlur: onBlur2, onFocus: onFocus2 } = tmp5);
  obj = {};
  const merged = Object.assign(_objectWithoutProperties(tmp5, closure_2));
  obj.accessible = false !== disabled.accessible;
  let tmp18 = obj;
  if (null != disabled.disabled) {
    obj = {};
    const merged1 = Object.assign(obj);
    obj.disabled = disabled.disabled;
    tmp18 = obj;
  }
  obj.accessibilityState = tmp18;
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
  for (const item10094 of closure_7) {
    let tmp22 = item10094;
    if (undefined !== arg0[item10094]) {
      obj[tmp22] = arg0[tmp22];
    }
    continue;
  }
  return hasOwnProperty(obj, ...items1);
};
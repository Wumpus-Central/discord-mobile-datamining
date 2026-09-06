// === Module 414: ? ===

// Module 414
import ViewDefault from "View" /* 108 */;
import _modDef301 from "module_301" /* 301 */;
import _modDef334 from "module_334" /* 334 */;
import _modDef415 from "module_415" /* 415 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import "module_19";

let closure_2 = ["accessible", "accessibilityState", "aria-live", "android_disableSound", "android_ripple", "aria-busy", "aria-checked", "aria-disabled", "aria-expanded", "aria-label", "aria-selected", "blockNativeResponder", "cancelable", "children", "delayHoverIn", "delayHoverOut", "delayLongPress", "disabled", "focusable", "hitSlop", "onBlur", "onFocus", "onHoverIn", "onHoverOut", "onLongPress", "onPress", "onPressIn", "onPressMove", "onPressOut", "pressRetentionOffset", "style", "testOnly_pressed", "unstable_pressDelay"];
const noop = fn(19);
({ useMemo: hasOwnProperty, useRef: metroRequire, useState: closure_7, memo } = noop);
const jsxProd = fn(21);
({ jsx, jsxs: closure_8 } = jsxProd);
const memoResult = memo(function Pressable(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  android_disableSound = undefined;
  blockNativeResponder = undefined;
  delayHoverIn = undefined;
  unstable_pressDelay = undefined;
  closure_21 = undefined;
  ({ accessibilityState, aria-live: accessibilityLiveRegion, android_disableSound } = merged);
  ({ aria-busy: tmp2, aria-checked: tmp3, aria-disabled: tmp4, aria-expanded: tmp5, aria-label: accessibilityLabel, aria-selected: tmp6, blockNativeResponder } = merged);
  const cancelable = merged.cancelable;
  ({ children, delayHoverIn } = merged);
  const delayHoverOut = merged.delayHoverOut;
  const delayLongPress = merged.delayLongPress;
  let disabled = merged.disabled;
  const hitSlop = merged.hitSlop;
  const onBlur = merged.onBlur;
  const onFocus = merged.onFocus;
  const onHoverIn = merged.onHoverIn;
  const onHoverOut = merged.onHoverOut;
  const onLongPress = merged.onLongPress;
  const onPress = merged.onPress;
  const onPressIn = merged.onPressIn;
  const onPressMove = merged.onPressMove;
  const onPressOut = merged.onPressOut;
  const pressRetentionOffset = merged.pressRetentionOffset;
  ({ style, unstable_pressDelay } = merged);
  ({ accessible, android_ripple, focusable, testOnly_pressed } = merged);
  const tmp7 = _objectWithoutProperties(merged, closure_2);
  const tmp8 = timestampProducer(null);
  const tmp12 = _modDef415(android_ripple, tmp8);
  closure_19 = tmp12;
  const tmp11 = _modDef334(ref.ref, tmp8);
  [tmp15, tmp16] = _slicedToArray(React5(false), 2);
  const items = [tmp15, tmp16];
  const tmp14 = _slicedToArray(React5(false), 2);
  [tmp18, tmp19] = _slicedToArray(items, 2);
  c20 = tmp19;
  let tmp20 = typeof children === "function";
  if (typeof children !== "function") {
    tmp20 = typeof style === "function";
  }
  closure_21 = tmp20;
  if (tmp2 == null) {
    let busy;
    if (accessibilityState != null) {
      busy = accessibilityState.busy;
    }
  }
  let obj = { busy: tmp2, checked: null, disabled: null, expanded: null, selected: null };
  if (tmp3 == null) {
    let checked;
    if (accessibilityState != null) {
      checked = accessibilityState.checked;
    }
  }
  obj.checked = tmp3;
  if (tmp4 == null) {
    disabled = undefined;
    if (accessibilityState != null) {
      disabled = accessibilityState.disabled;
    }
  }
  obj.disabled = tmp4;
  if (tmp5 == null) {
    let expanded;
    if (accessibilityState != null) {
      expanded = accessibilityState.expanded;
    }
  }
  obj.expanded = tmp5;
  if (tmp6 == null) {
    let selected;
    if (accessibilityState != null) {
      selected = accessibilityState.selected;
    }
  }
  obj.selected = tmp6;
  let tmp26 = obj;
  if (null != disabled) {
    obj = {};
    const merged1 = Object.assign(obj);
    obj.disabled = disabled;
    tmp26 = obj;
  }
  let prop = merged["aria-valuemax"];
  if (prop == null) {
    const accessibilityValue = merged.accessibilityValue;
    let max;
    if (accessibilityValue != null) {
      max = accessibilityValue.max;
    }
    prop = max;
  }
  const range = { max: prop, min: null, now: null, text: null };
  let prop1 = merged["aria-valuemin"];
  if (prop1 == null) {
    const accessibilityValue2 = merged.accessibilityValue;
    let min;
    if (accessibilityValue2 != null) {
      min = accessibilityValue2.min;
    }
    prop1 = min;
  }
  range.min = prop1;
  let prop2 = merged["aria-valuenow"];
  if (prop2 == null) {
    const accessibilityValue3 = merged.accessibilityValue;
    let now;
    if (accessibilityValue3 != null) {
      now = accessibilityValue3.now;
    }
    prop2 = now;
  }
  range.now = prop2;
  let prop3 = merged["aria-valuetext"];
  if (prop3 == null) {
    const accessibilityValue4 = merged.accessibilityValue;
    let text;
    if (accessibilityValue4 != null) {
      text = accessibilityValue4.text;
    }
    prop3 = text;
  }
  range.text = prop3;
  let str = "none";
  if ("off" !== accessibilityLiveRegion) {
    if (accessibilityLiveRegion == null) {
      accessibilityLiveRegion = merged.accessibilityLiveRegion;
    }
    str = accessibilityLiveRegion;
  }
  if (accessibilityLabel == null) {
    accessibilityLabel = merged.accessibilityLabel;
  }
  obj = {};
  const merged2 = Object.assign(tmp7);
  let viewProps;
  if (tmp12 != null) {
    viewProps = tmp12.viewProps;
  }
  const merged3 = Object.assign(viewProps);
  obj.accessible = false !== accessible;
  let accessibilityViewIsModal = tmp7["aria-modal"];
  if (accessibilityViewIsModal == null) {
    accessibilityViewIsModal = tmp7.accessibilityViewIsModal;
  }
  obj.accessibilityViewIsModal = accessibilityViewIsModal;
  obj.accessibilityLiveRegion = str;
  obj.accessibilityLabel = accessibilityLabel;
  obj.accessibilityState = tmp26;
  obj.focusable = false !== focusable;
  obj.accessibilityValue = range;
  obj.hitSlop = hitSlop;
  const items1 = [android_disableSound, tmp12, blockNativeResponder, cancelable, delayHoverIn, delayHoverOut, delayLongPress, disabled, hitSlop, onBlur, onFocus, onHoverIn, onHoverOut, onLongPress, onPress, onPressIn, onPressMove, onPressOut, pressRetentionOffset, tmp19, tmp20, unstable_pressDelay];
  const tmp13Result = _slicedToArray(items, 2);
  const tmp41 = hasOwnProperty(() => ({
    cancelable,
    disabled,
    hitSlop,
    pressRectOffset: pressRetentionOffset,
    android_disableSound,
    delayHoverIn,
    delayHoverOut,
    delayLongPress,
    delayPressIn: unstable_pressDelay,
    onBlur,
    onFocus,
    onHoverIn,
    onHoverOut,
    onLongPress,
    onPress,
    onPressIn(arg0) {
      if (null != closure_1_19) {
        closure_1_19.onPressIn(arg0);
      }
      if (closure_1_21) {
        closure_1_20(true);
      }
      if (null != onPressIn) {
        tmp4(arg0);
      }
    },
    onPressMove(arg0) {
      if (closure_1_19 != null) {
        closure_1_19.onPressMove(arg0);
      }
      if (null != onPressMove) {
        tmp2(arg0);
      }
    },
    onPressOut(arg0) {
      if (null != closure_1_19) {
        closure_1_19.onPressOut(arg0);
      }
      if (closure_1_21) {
        closure_1_20(false);
      }
      if (null != onPressOut) {
        tmp4(arg0);
      }
    },
    blockNativeResponder
  }), items1);
  const obj1 = {};
  const tmp42 = _modDef301(hasOwnProperty(() => ({
    cancelable,
    disabled,
    hitSlop,
    pressRectOffset: pressRetentionOffset,
    android_disableSound,
    delayHoverIn,
    delayHoverOut,
    delayLongPress,
    delayPressIn: unstable_pressDelay,
    onBlur,
    onFocus,
    onHoverIn,
    onHoverOut,
    onLongPress,
    onPress,
    onPressIn(arg0) {
      if (null != closure_1_19) {
        closure_1_19.onPressIn(arg0);
      }
      if (closure_1_21) {
        closure_1_20(true);
      }
      if (null != onPressIn) {
        tmp4(arg0);
      }
    },
    onPressMove(arg0) {
      if (closure_1_19 != null) {
        closure_1_19.onPressMove(arg0);
      }
      if (null != onPressMove) {
        tmp2(arg0);
      }
    },
    onPressOut(arg0) {
      if (null != closure_1_19) {
        closure_1_19.onPressOut(arg0);
      }
      if (closure_1_21) {
        closure_1_20(false);
      }
      if (null != onPressOut) {
        tmp4(arg0);
      }
    },
    blockNativeResponder
  }), items1));
  const merged4 = Object.assign(obj);
  const merged5 = Object.assign(tmp42);
  obj1.ref = tmp11;
  if (typeof style === "function") {
    const obj2 = { pressed: tmp18 };
    style = style(obj2);
  }
  obj1.style = style;
  obj1.collapsable = false;
  let childrenResult = children;
  if (typeof children === "function") {
    const obj3 = { pressed: tmp18 };
    childrenResult = children(obj3);
  }
  const items2 = [childrenResult, null];
  obj1.children = items2;
  return React6(ViewDefault, obj1);
});
memoResult.displayName = "Pressable";

export default memoResult;
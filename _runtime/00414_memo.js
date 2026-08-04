import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import "noop";
import noop from "noop";
import jsxProd from "jsxProd";

let c5;
let closure_6;
let error;
let jsx;
let memo;
let metroImportAll;
let closure_2 = ["accessible", "accessibilityState", "aria-live", "android_disableSound", "android_ripple", "aria-busy", "aria-checked", "aria-disabled", "aria-expanded", "aria-label", "aria-selected", "blockNativeResponder", "cancelable", "children", "delayHoverIn", "delayHoverOut", "delayLongPress", "disabled", "focusable", "hitSlop", "onBlur", "onFocus", "onHoverIn", "onHoverOut", "onLongPress", "onPress", "onPressIn", "onPressMove", "onPressOut", "pressRetentionOffset", "style", "testOnly_pressed", "unstable_pressDelay"];
({ useMemo: c5, useRef: closure_6, useState: error, memo } = noop);
({ jsx, jsxs: metroImportAll } = jsxProd);
const memoResult = memo(function Pressable(ref) {
  let accessibilityLabel;
  let accessibilityLiveRegion;
  let accessibilityState;
  let accessible;
  let android_disableSound;
  let android_ripple;
  let blockNativeResponder;
  let children;
  let delayHoverIn;
  let focusable;
  let style;
  let testOnly_pressed;
  let tmp15;
  let tmp16;
  let tmp18;
  let tmp19;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let unstable_pressDelay;
  const merged = Object.assign(ref, Object.create(null));
  android_disableSound = undefined;
  blockNativeResponder = undefined;
  let cancelable;
  delayHoverIn = undefined;
  let delayHoverOut;
  let delayLongPress;
  let disabled;
  let hitSlop;
  let onBlur;
  let onFocus;
  let onHoverIn;
  let onHoverOut;
  let onLongPress;
  let onPress;
  let onPressIn;
  let onPressMove;
  let onPressOut;
  let pressRetentionOffset;
  unstable_pressDelay = undefined;
  let c19;
  let c20;
  let c21;
  ({ accessibilityState, aria-live: accessibilityLiveRegion, android_disableSound } = merged);
  ({ aria-busy: tmp2, aria-checked: tmp3, aria-disabled: tmp4, aria-expanded: tmp5, aria-label: accessibilityLabel, aria-selected: tmp6, blockNativeResponder } = merged);
  cancelable = merged.cancelable;
  ({ children, delayHoverIn } = merged);
  delayHoverOut = merged.delayHoverOut;
  delayLongPress = merged.delayLongPress;
  disabled = merged.disabled;
  hitSlop = merged.hitSlop;
  onBlur = merged.onBlur;
  onFocus = merged.onFocus;
  onHoverIn = merged.onHoverIn;
  onHoverOut = merged.onHoverOut;
  onLongPress = merged.onLongPress;
  onPress = merged.onPress;
  onPressIn = merged.onPressIn;
  onPressMove = merged.onPressMove;
  onPressOut = merged.onPressOut;
  pressRetentionOffset = merged.pressRetentionOffset;
  ({ style, unstable_pressDelay } = merged);
  ({ accessible, android_ripple, focusable, testOnly_pressed } = merged);
  const tmp7 = delayHoverOut(merged, cancelable);
  const tmp8 = disabled(null);
  const tmp12 = android_disableSound(blockNativeResponder[5])(android_ripple, tmp8);
  c19 = tmp12;
  const tmp11 = android_disableSound(blockNativeResponder[4])(ref.ref, tmp8);
  const tmp13 = delayHoverIn;
  [tmp15, tmp16] = delayHoverIn(hitSlop(false), 2);
  const items = [tmp15, tmp16];
  const tmp14 = delayHoverIn(hitSlop(false), 2);
  [tmp18, tmp19] = tmp13(items, 2);
  c20 = tmp19;
  let tmp20 = typeof children === "function";
  if (typeof children !== "function") {
    tmp20 = typeof style === "function";
  }
  c21 = tmp20;
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
  obj[1] = tmp3;
  if (tmp4 == null) {
    disabled = undefined;
    if (accessibilityState != null) {
      disabled = accessibilityState.disabled;
    }
  }
  obj[2] = tmp4;
  if (tmp5 == null) {
    let expanded;
    if (accessibilityState != null) {
      expanded = accessibilityState.expanded;
    }
  }
  obj[3] = tmp5;
  if (tmp6 == null) {
    let selected;
    if (accessibilityState != null) {
      selected = accessibilityState.selected;
    }
  }
  obj[4] = tmp6;
  let tmp26 = obj;
  if (null != disabled) {
    obj = {};
    const merged1 = Object.assign(obj);
    obj.disabled = disabled;
    tmp26 = obj;
  }
  aria_valuemax = merged["aria-valuemax"];
  if (aria_valuemax == null) {
    const accessibilityValue = merged.accessibilityValue;
    let max;
    if (accessibilityValue != null) {
      max = accessibilityValue.max;
    }
    aria_valuemax = max;
  }
  obj = { max: aria_valuemax, min: null, now: null, text: null };
  aria_valuemin = merged["aria-valuemin"];
  if (aria_valuemin == null) {
    const accessibilityValue2 = merged.accessibilityValue;
    let min;
    if (accessibilityValue2 != null) {
      min = accessibilityValue2.min;
    }
    aria_valuemin = min;
  }
  obj[1] = aria_valuemin;
  aria_valuenow = merged["aria-valuenow"];
  if (aria_valuenow == null) {
    const accessibilityValue3 = merged.accessibilityValue;
    let now;
    if (accessibilityValue3 != null) {
      now = accessibilityValue3.now;
    }
    aria_valuenow = now;
  }
  obj[2] = aria_valuenow;
  aria_valuetext = merged["aria-valuetext"];
  if (aria_valuetext == null) {
    const accessibilityValue4 = merged.accessibilityValue;
    let text;
    if (accessibilityValue4 != null) {
      text = accessibilityValue4.text;
    }
    aria_valuetext = text;
  }
  obj[3] = aria_valuetext;
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
  const obj1 = {};
  const merged2 = Object.assign(tmp7);
  let viewProps;
  if (tmp12 != null) {
    viewProps = tmp12.viewProps;
  }
  const merged3 = Object.assign(viewProps);
  obj1.accessible = false !== accessible;
  let accessibilityViewIsModal = tmp7["aria-modal"];
  if (accessibilityViewIsModal == null) {
    accessibilityViewIsModal = tmp7.accessibilityViewIsModal;
  }
  obj1.accessibilityViewIsModal = accessibilityViewIsModal;
  obj1.accessibilityLiveRegion = str;
  obj1.accessibilityLabel = accessibilityLabel;
  obj1.accessibilityState = tmp26;
  obj1.focusable = false !== focusable;
  obj1.accessibilityValue = obj;
  obj1.hitSlop = hitSlop;
  const items1 = [android_disableSound, tmp12, blockNativeResponder, cancelable, delayHoverIn, delayHoverOut, delayLongPress, disabled, hitSlop, onBlur, onFocus, onHoverIn, onHoverOut, onLongPress, onPress, onPressIn, onPressMove, onPressOut, pressRetentionOffset, tmp19, tmp20, unstable_pressDelay];
  const tmp13Result = tmp13(items, 2);
  const tmp37 = delayLongPress(() => ({
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
      if (null != closure_19) {
        closure_19.onPressIn(arg0);
      }
      if (closure_21) {
        callback(true);
      }
      if (null != closure_14) {
        tmp4(arg0);
      }
    },
    onPressMove(arg0) {
      if (closure_19 != null) {
        closure_19.onPressMove(arg0);
      }
      if (null != closure_15) {
        tmp2(arg0);
      }
    },
    onPressOut(arg0) {
      if (null != closure_19) {
        closure_19.onPressOut(arg0);
      }
      if (closure_21) {
        callback(false);
      }
      if (null != closure_16) {
        tmp4(arg0);
      }
    },
    blockNativeResponder
  }), items1);
  const obj2 = {};
  const tmp38 = android_disableSound(blockNativeResponder[6])(delayLongPress(() => ({
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
      if (null != closure_19) {
        closure_19.onPressIn(arg0);
      }
      if (closure_21) {
        callback(true);
      }
      if (null != closure_14) {
        tmp4(arg0);
      }
    },
    onPressMove(arg0) {
      if (closure_19 != null) {
        closure_19.onPressMove(arg0);
      }
      if (null != closure_15) {
        tmp2(arg0);
      }
    },
    onPressOut(arg0) {
      if (null != closure_19) {
        closure_19.onPressOut(arg0);
      }
      if (closure_21) {
        callback(false);
      }
      if (null != closure_16) {
        tmp4(arg0);
      }
    },
    blockNativeResponder
  }), items1));
  const tmp39 = onBlur;
  const merged4 = Object.assign(obj1);
  const merged5 = Object.assign(tmp38);
  obj2.ref = tmp11;
  if (typeof style === "function") {
    const obj3 = { pressed: null };
    obj3[0] = tmp18;
    style = style(obj3);
  }
  obj2.style = style;
  obj2.collapsable = false;
  let childrenResult = children;
  if (typeof children === "function") {
    const obj4 = { pressed: null };
    obj4[0] = tmp18;
    childrenResult = children(obj4);
  }
  const items2 = [childrenResult, null];
  obj2.children = items2;
  return tmp39(android_disableSound(blockNativeResponder[7]), obj2);
});
memoResult.displayName = "Pressable";

export default memoResult;
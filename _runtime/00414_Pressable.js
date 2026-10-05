// _runtime/00414_Pressable.js
import ViewDefault from "00108_View.js";
import usePressabilityDefault from "00301_usePressability.js";
import useMergeRefsDefault from "00334_useMergeRefs.js";
import useAndroidRippleForViewDefault from "00415_useAndroidRippleForView.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import "react";
import react from "00019_react.js";
import Fragment from "react/00021_Fragment.js";

let hasOwnProperty;
let jsx;
let memo;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let closure_2 = [
  "accessible",
  "accessibilityState",
  "aria-live",
  "android_disableSound",
  "android_ripple",
  "aria-busy",
  "aria-checked",
  "aria-disabled",
  "aria-expanded",
  "aria-label",
  "aria-selected",
  "blockNativeResponder",
  "cancelable",
  "children",
  "delayHoverIn",
  "delayHoverOut",
  "delayLongPress",
  "disabled",
  "focusable",
  "hitSlop",
  "onBlur",
  "onFocus",
  "onHoverIn",
  "onHoverOut",
  "onLongPress",
  "onPress",
  "onPressIn",
  "onPressMove",
  "onPressOut",
  "pressRetentionOffset",
  "style",
  "testOnly_pressed",
  "unstable_pressDelay",
];
({ useMemo: hasOwnProperty, useRef: metroRequire, useState: metroImportDefault, memo } = react);
({ jsx, jsxs: metroImportAll } = Fragment);
const memoResult = memo(function Pressable(ref) {
  let accessibilityLabel;
  let accessibilityLiveRegion;
  let accessibilityState;
  let accessibilityViewIsModal;
  let accessible;
  let android_disableSound;
  let android_ripple;
  let blockNativeResponder;
  let children;
  let delayHoverIn;
  let focusable;
  let items2;
  let prop1;
  let prop2;
  let prop3;
  let style;
  let style1;
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
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  android_disableSound = undefined;
  blockNativeResponder = undefined;
  delayHoverIn = undefined;
  unstable_pressDelay = undefined;
  ({ accessibilityState, "aria-live": accessibilityLiveRegion, android_disableSound } = merged);
  ({
    "aria-busy": tmp2,
    "aria-checked": tmp3,
    "aria-disabled": tmp4,
    "aria-expanded": tmp5,
    "aria-label": accessibilityLabel,
    "aria-selected": tmp6,
    blockNativeResponder,
  } = merged);
  const cancelable = merged.cancelable;
  ({ children, delayHoverIn } = merged);
  const delayHoverOut = merged.delayHoverOut;
  const delayLongPress = merged.delayLongPress;
  const disabled = merged.disabled;
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
  const tmp8 = metroRequire(null);
  const tmp11 = useMergeRefsDefault(ref.ref, tmp8);
  const tmp12 = useAndroidRippleForViewDefault(android_ripple, tmp8);
  let closure_19 = tmp12;
  [tmp15, tmp16] = metroImportDefault(false);
  _slicedToArray(metroImportDefault(false), 2);
  const items = [tmp15, tmp16];
  [tmp18, tmp19] = items;
  let c20 = tmp19;
  let closure_21 = tmp20;
  _slicedToArray(items, 2);
  if (tmp2 == null) {
    let busy;
    if (accessibilityState != null) {
      busy = accessibilityState.busy;
    }
    tmp2 = busy;
  }
  const obj = { busy: tmp2, checked: tmp3, disabled: tmp4, expanded: tmp5, selected: tmp6 };
  if (tmp3 == null) {
    let checked;
    if (accessibilityState != null) {
      checked = accessibilityState.checked;
    }
  }
  if (tmp4 == null) {
    let disabled1;
    if (accessibilityState != null) {
      disabled1 = accessibilityState.disabled;
    }
  }
  if (tmp5 == null) {
    let expanded;
    if (accessibilityState != null) {
      expanded = accessibilityState.expanded;
    }
    tmp5 = expanded;
  }
  if (tmp6 == null) {
    let selected;
    if (accessibilityState != null) {
      selected = accessibilityState.selected;
    }
  }
  let tmp26 = obj;
  if (null != disabled) {
    const obj2 = { disabled };
    const merged1 = Object.assign(obj);
    tmp26 = obj2;
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
  const range = { max: prop, min: prop1, now: prop2, text: prop3 };
  prop1 = merged["aria-valuemin"];
  if (prop1 == null) {
    const accessibilityValue2 = merged.accessibilityValue;
    let min;
    if (accessibilityValue2 != null) {
      min = accessibilityValue2.min;
    }
    prop1 = min;
  }
  prop2 = merged["aria-valuenow"];
  if (prop2 == null) {
    const accessibilityValue3 = merged.accessibilityValue;
    let now;
    if (accessibilityValue3 != null) {
      now = accessibilityValue3.now;
    }
    prop2 = now;
  }
  prop3 = merged["aria-valuetext"];
  if (prop3 == null) {
    const accessibilityValue4 = merged.accessibilityValue;
    let text;
    if (accessibilityValue4 != null) {
      text = accessibilityValue4.text;
    }
    prop3 = text;
  }
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
  const obj3 = {
    accessible: false !== accessible,
    accessibilityViewIsModal,
    accessibilityLiveRegion: str,
    accessibilityLabel,
    accessibilityState: tmp26,
    focusable: false !== focusable,
    accessibilityValue: range,
    hitSlop,
  };
  const merged2 = Object.assign(tmp7);
  let viewProps;
  if (tmp12 != null) {
    viewProps = tmp12.viewProps;
  }
  const merged3 = Object.assign(viewProps);
  accessibilityViewIsModal = tmp7["aria-modal"];
  if (accessibilityViewIsModal == null) {
    accessibilityViewIsModal = tmp7.accessibilityViewIsModal;
  }
  const items1 = [
    android_disableSound,
    tmp12,
    blockNativeResponder,
    cancelable,
    delayHoverIn,
    delayHoverOut,
    delayLongPress,
    disabled,
    hitSlop,
    onBlur,
    onFocus,
    onHoverIn,
    onHoverOut,
    onLongPress,
    onPress,
    onPressIn,
    onPressMove,
    onPressOut,
    pressRetentionOffset,
    tmp19,
    typeof children === "function" || typeof style === "function",
    unstable_pressDelay,
  ];
  const obj4 = { ref: tmp11, style: style1, collapsable: false, children: items2 };
  const tmp41 = hasOwnProperty(
    () => ({
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
          tmp5(arg0);
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
          tmp5(arg0);
        }
      },
      blockNativeResponder,
    }),
    items1,
  );
  const tmp42 = usePressabilityDefault(tmp41);
  const tmp9Result = ViewDefault;
  const merged4 = Object.assign(obj3);
  const merged5 = Object.assign(tmp42);
  style1 = style;
  if (typeof style === "function") {
    const obj5 = { pressed: tmp18 };
    style1 = style(obj5);
  }
  let childrenResult = children;
  if (typeof children === "function") {
    const obj6 = { pressed: tmp18 };
    childrenResult = children(obj6);
  }
  items2 = [childrenResult, null];
  return metroImportAll(tmp9Result, obj4);
});
memoResult.displayName = "Pressable";

export default memoResult;

// === Module 6258: ? ===

// Module 6258
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod6219 from "module_6219" /* 6219 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;

let closure_12, closure_7, pointerInside;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let closure_3 = ["underlayColor", "defaultUnderlayOpacity", "activeUnderlayOpacity", "defaultOpacity", "animationDuration", "androidRipple", "delayLongPress", "onLongPress", "onPress", "onPressIn", "onPressOut", "children", "disabled", "cancelOnLeave", "ref"];
let react = react_mod;
({ use: hasOwnProperty, useCallback: metroRequire, useRef: metroImportDefault } = react);
react = react_mod;
const Platform = react_native.Platform;
let jsx = Fragment.jsx;
let closure_9 = { rippleColor: "transparent" };
let constants = { UNKNOWN: 0, [0]: "UNKNOWN", INSIDE: 1, [1]: "INSIDE", OUTSIDE: 2, [2]: "OUTSIDE" };

export const Touchable = (hitSlop) => {
  let androidRipple;
  let animationDuration;
  let borderless;
  let closure_10;
  let closure_8;
  let delayLongPress;
  let foreground;
  let num10;
  let num11;
  let num13;
  let num8;
  let num9;
  let obj;
  let obj7;
  let radius;
  let tmp29;
  let tmp36;
  const underlayColor = hitSlop.underlayColor;
  let str = "transparent";
  if (undefined !== underlayColor) {
    str = underlayColor;
  }
  const defaultUnderlayOpacity = hitSlop.defaultUnderlayOpacity;
  let num = 0;
  if (undefined !== defaultUnderlayOpacity) {
    num = defaultUnderlayOpacity;
  }
  const activeUnderlayOpacity = hitSlop.activeUnderlayOpacity;
  let num2 = 0.105;
  if (undefined !== activeUnderlayOpacity) {
    num2 = activeUnderlayOpacity;
  }
  const defaultOpacity = hitSlop.defaultOpacity;
  let num3 = 1;
  if (undefined !== defaultOpacity) {
    num3 = defaultOpacity;
  }
  ({ animationDuration, androidRipple, delayLongPress } = hitSlop);
  let num4 = 600;
  if (undefined !== delayLongPress) {
    num4 = delayLongPress;
  }
  const onLongPress = hitSlop.onLongPress;
  const onPress = hitSlop.onPress;
  const onPressIn = hitSlop.onPressIn;
  const onPressOut = hitSlop.onPressOut;
  const disabled = hitSlop.disabled;
  let tmp = undefined !== disabled;
  const children = hitSlop.children;
  if (tmp) {
    tmp = disabled;
  }
  const cancelOnLeave = hitSlop.cancelOnLeave;
  let ref = hitSlop.ref;
  const tmp2 = undefined === cancelOnLeave || cancelOnLeave;
  const tmp4 = num13(hitSlop, onPressOut);
  if (undefined === animationDuration) {
    obj = { tapAnimationInDuration: 50, tapAnimationOutDuration: 100, longPressAnimationOutDuration: 100, hoverAnimationInDuration: 50, hoverAnimationOutDuration: 100 };
  } else if (typeof animationDuration === "number") {
    const _Number6 = Number;
    let num12 = 0;
    if (Number.isFinite(animationDuration)) {
      num12 = 0;
      if (animationDuration >= 0) {
        num12 = animationDuration;
      }
    }
    obj = { tapAnimationInDuration: num12, tapAnimationOutDuration: num12, longPressAnimationOutDuration: num12, hoverAnimationInDuration: num12, hoverAnimationOutDuration: num12 };
    const obj2 = { tapAnimationInDuration: num12, tapAnimationOutDuration: num12, longPressAnimationOutDuration: num12, hoverAnimationInDuration: num12, hoverAnimationOutDuration: num12 };
  } else {
    let num5 = 0;
    if ("in" in animationDuration) {
      num5 = animationDuration.in;
    }
    let num6 = 0;
    if ("out" in animationDuration) {
      num6 = animationDuration.out;
    }
    const tap = animationDuration.tap;
    let out;
    if (tap != null) {
      out = tap.out;
    }
    if (out == null) {
      out = num6;
    }
    const tap2 = animationDuration.tap;
    let _in;
    if (tap2 != null) {
      _in = tap2.in;
    }
    if (_in == null) {
      _in = num5;
    }
    const tmp8 = globalThis;
    const _Number = Number;
    const tmp9 = _in;
    let num7 = 0;
    if (Number.isFinite(_in)) {
      num7 = 0;
      if (_in >= 0) {
        num7 = _in;
      }
    }
    obj = { tapAnimationInDuration: num7, tapAnimationOutDuration: num8, longPressAnimationOutDuration: num9, hoverAnimationInDuration: num10, hoverAnimationOutDuration: num11 };
    const _Number2 = Number;
    num8 = 0;
    if (Number.isFinite(out)) {
      num8 = 0;
      if (out >= 0) {
        num8 = out;
      }
    }
    const longPress = animationDuration.longPress;
    let out1;
    if (longPress != null) {
      out1 = longPress.out;
    }
    if (out1 == null) {
      out1 = out;
    }
    const _Number3 = Number;
    num9 = 0;
    if (Number.isFinite(out1)) {
      num9 = 0;
      if (out1 >= 0) {
        num9 = out1;
      }
    }
    const hover = animationDuration.hover;
    let _in1;
    if (hover != null) {
      _in1 = hover.in;
    }
    if (_in1 == null) {
      _in1 = num5;
    }
    const _Number4 = Number;
    num10 = 0;
    if (Number.isFinite(_in1)) {
      num10 = 0;
      if (_in1 >= 0) {
        num10 = _in1;
      }
    }
    const hover2 = animationDuration.hover;
    let out2;
    if (hover2 != null) {
      out2 = hover2.out;
    }
    if (out2 == null) {
      out2 = num6;
    }
    const _Number5 = Number;
    num11 = 0;
    if (Number.isFinite(out2)) {
      num11 = 0;
      if (out2 >= 0) {
        num11 = out2;
      }
    }
  }
  num13 = 0;
  if (Number.isFinite(num4)) {
    num13 = 0;
    if (num4 >= 0) {
      num13 = num4;
    }
  }
  ref = closure_7(constants.UNKNOWN);
  const ref2 = closure_7(false);
  closure_7 = closure_7(undefined);
  const tmp19 = ref(onLongPress(onPressIn[4]).JSResponderContext);
  jsx = tmp19;
  closure_9 = closure_7(null);
  const items = [tmp19];
  const tmp20 = ref2(() => {
    if (closure_9.current == null) {
      const obj = _mod6219;
      tmp.current = obj.isKeyboardDismissingTap(closure_8);
    }
  }, items);
  constants = tmp20;
  const tmp21 = ref2(() => {
    closure_9.current = null;
  }, []);
  let closure_11 = tmp21;
  const items1 = [onLongPress];
  const tmp22 = ref2(() => {
    ref2.current = true;
    if (onLongPress != null) {
      tmp();
    }
  }, items1);
  closure_12 = tmp22;
  const items2 = [onLongPress, num13, tmp22];
  const tmp23 = ref2(() => {
    ref2.current = false;
    const tmp = onLongPress && !closure_7.current;
    if (tmp) {
      const _setTimeout = setTimeout;
      closure_7.current = setTimeout(closure_12, num13);
    }
  }, items2);
  let closure_13 = tmp23;
  const items3 = [tmp20, tmp23, onPressIn];
  const items4 = [tmp21, onPressOut, onPress];
  const items5 = [onPressIn, onPressOut];
  const tmp24 = ref2((pointerInside) => {
    closure_10();
    if (pointerInside.pointerInside) {
      if (!closure_9.current) {
        if (onPressIn != null) {
          onPressIn(pointerInside);
        }
        closure_13();
        ref.current = closure_10.INSIDE;
      }
    }
    ref.current = closure_10.OUTSIDE;
  }, items3);
  const tmp25 = ref2((pointerInside) => {
    pointerInside = pointerInside.pointerInside || undefined === closure_7.current;
    if (!pointerInside) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_7.current);
      closure_7.current = undefined;
    }
  }, []);
  const tmp26 = ref2((canceled) => {
    const current = closure_9.current || ref.current !== constants.INSIDE;
    if (!current) {
      if (onPressOut != null) {
        tmp4(canceled);
      }
    }
    const current2 = closure_9.current || canceled.canceled || ref2.current || !canceled.pointerInside;
    if (!current2) {
      if (onPress != null) {
        tmp8(canceled);
      }
    }
    ref.current = constants.UNKNOWN;
    if (undefined !== closure_7.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_7.current);
      closure_7.current = undefined;
    }
    closure_11();
  }, items4);
  const tmp27 = ref2((pointerInside) => {
    if (!closure_9.current) {
      if (ref.current !== constants.UNKNOWN) {
        const current = ref.current;
        if (pointerInside.pointerInside) {
          if (current === constants.OUTSIDE) {
            if (onPressIn != null) {
              tmp9(pointerInside);
            }
          }
          ref.current = constants.INSIDE;
        } else {
          if (current === constants.INSIDE) {
            if (onPressOut != null) {
              tmp3(pointerInside);
            }
            if (undefined !== closure_7.current) {
              const _clearTimeout = clearTimeout;
              clearTimeout(closure_7.current);
              closure_7.current = undefined;
            }
          }
          ref.current = constants.OUTSIDE;
        }
      }
    }
  }, items5);
  const obj3 = onLongPress(onPressIn[5]);
  const obj4 = { onBegin: tmp24, onActivate: tmp25, onFinalize: tmp26, onUpdate: tmp27, hitSlop: hitSlop.hitSlop, testID: hitSlop.testID, enabled: !tmp, shouldCancelWhenOutside: tmp2, disableReanimated: true, shouldActivateOnStart: false, disallowInterruption: true, yieldsToContinuousGestures: true };
  const nativeGesture = obj3.useNativeGesture(obj4);
  if (undefined !== androidRipple) {
    let color;
    if (androidRipple != null) {
      color = androidRipple.color;
    }
    const obj5 = { rippleColor: color, rippleRadius: radius, borderless, foreground };
    radius = undefined;
    if (androidRipple != null) {
      radius = androidRipple.radius;
    }
    borderless = undefined;
    if (androidRipple != null) {
      borderless = androidRipple.borderless;
    }
    foreground = undefined;
    if (androidRipple != null) {
      foreground = androidRipple.foreground;
    }
    tmp29 = obj5;
  } else {
    tmp29 = closure_9;
  }
  const tmp17Result = onLongPress(onPressIn[6]);
  const tVProps = tmp17Result.getTVProps(tmp4);
  const obj6 = { gesture: nativeGesture, children: jsx(tmp36, obj7) };
  const NativeDetector = tmp17(tmp18[7]).NativeDetector;
  obj7 = { ref, enabled: !tmp, defaultOpacity: num3, defaultUnderlayOpacity: num, activeUnderlayOpacity: num2, underlayColor: str, longPressDuration: num13, children };
  tmp36 = onPress(onPressIn[8]);
  const merged = Object.assign(tmp4);
  const merged1 = Object.assign(tVProps);
  const merged2 = Object.assign(tmp29);
  const merged3 = Object.assign(obj);
  if (ref == null) {
    ref = null;
  }
  return jsx(NativeDetector, obj6);
};
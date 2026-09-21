// === Module 7008: Touchable ===

// Module 7008 (Touchable)
import _mod6969 from "module_6969" /* 6969 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop_mod from "module_19" /* 19 */;

require = fn;
let closure_3 = ["underlayColor", "defaultUnderlayOpacity", "activeUnderlayOpacity", "defaultOpacity", "animationDuration", "androidRipple", "delayLongPress", "onLongPress", "onPress", "onPressIn", "onPressOut", "children", "disabled", "cancelOnLeave", "ref"];
let noop = fn(19);
({ use: hasOwnProperty, useCallback: metroRequire, useRef: closure_7 } = noop);
let noop = noop_mod;
const Platform = fn(17).Platform;
let jsx = fn(21).jsx;
let closure_9 = { rippleColor: "transparent" };
let constants = { UNKNOWN: 0, [0]: "UNKNOWN", INSIDE: 1, [1]: "INSIDE", OUTSIDE: 2, [2]: "OUTSIDE" };

export const Touchable = (hitSlop) => {
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
  if (tmp) {
    tmp = disabled;
  }
  const cancelOnLeave = hitSlop.cancelOnLeave;
  let ref = hitSlop.ref;
  const tmp4 = num13(hitSlop, onPressOut);
  if (undefined === animationDuration) {
    let obj = { tapAnimationInDuration: 50, tapAnimationOutDuration: 100, longPressAnimationOutDuration: 100, hoverAnimationInDuration: 50, hoverAnimationOutDuration: 100 };
  } else if (typeof animationDuration === "number") {
    const _Number6 = Number;
    let num12 = 0;
    if (Number.isFinite(animationDuration)) {
      num12 = 0;
      if (animationDuration >= 0) {
        num12 = animationDuration;
      }
    }
    const obj2 = { tapAnimationInDuration: num12, tapAnimationOutDuration: num12, longPressAnimationOutDuration: num12, hoverAnimationInDuration: num12, hoverAnimationOutDuration: num12 };
    obj = obj2;
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
    const _Number = Number;
    let num7 = 0;
    if (Number.isFinite(_in)) {
      num7 = 0;
      if (_in >= 0) {
        num7 = _in;
      }
    }
    obj = { tapAnimationInDuration: num7, tapAnimationOutDuration: null, longPressAnimationOutDuration: null, hoverAnimationInDuration: null, hoverAnimationOutDuration: null };
    const _Number2 = Number;
    let num8 = 0;
    if (Number.isFinite(out)) {
      num8 = 0;
      if (out >= 0) {
        num8 = out;
      }
    }
    obj.tapAnimationOutDuration = num8;
    const longPress = animationDuration.longPress;
    let out1;
    if (longPress != null) {
      out1 = longPress.out;
    }
    if (out1 == null) {
      out1 = out;
    }
    const _Number3 = Number;
    let num9 = 0;
    if (Number.isFinite(out1)) {
      num9 = 0;
      if (out1 >= 0) {
        num9 = out1;
      }
    }
    obj.longPressAnimationOutDuration = num9;
    const hover = animationDuration.hover;
    let _in1;
    if (hover != null) {
      _in1 = hover.in;
    }
    if (_in1 == null) {
      _in1 = num5;
    }
    const _Number4 = Number;
    let num10 = 0;
    if (Number.isFinite(_in1)) {
      num10 = 0;
      if (_in1 >= 0) {
        num10 = _in1;
      }
    }
    obj.hoverAnimationInDuration = num10;
    const hover2 = animationDuration.hover;
    let out2;
    if (hover2 != null) {
      out2 = hover2.out;
    }
    if (out2 == null) {
      out2 = num6;
    }
    const _Number5 = Number;
    let num11 = 0;
    if (Number.isFinite(out2)) {
      num11 = 0;
      if (out2 >= 0) {
        num11 = out2;
      }
    }
    obj.hoverAnimationOutDuration = num11;
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
      tmp.current = _mod6969.isKeyboardDismissingTap(closure_8);
    }
  }, items);
  constants = tmp20;
  const tmp21 = ref2(() => {
    closure_9.current = null;
  }, []);
  closure_11 = tmp21;
  const items1 = [onLongPress];
  const tmp22 = ref2(() => {
    closure_6.current = true;
    if (onLongPress != null) {
      tmp();
    }
  }, items1);
  closure_12 = tmp22;
  const items2 = [onLongPress, num13, tmp22];
  const tmp23 = ref2(() => {
    closure_6.current = false;
    let tmp = onLongPress;
    if (onLongPress) {
      tmp = !closure_7.current;
    }
    if (tmp) {
      const _setTimeout = setTimeout;
      closure_7.current = setTimeout(closure_12, num13);
    }
  }, items2);
  closure_13 = tmp23;
  const items3 = [tmp20, tmp23, onPressIn];
  const items4 = [tmp21, onPressOut, onPress];
  const tmp2 = undefined === cancelOnLeave || cancelOnLeave;
  const tmp24 = ref2((pointerInside) => {
    closure_10();
    if (pointerInside.pointerInside) {
      if (!closure_9.current) {
        if (onPressIn != null) {
          onPressIn(pointerInside);
        }
        closure_13();
        closure_5.current = closure_10.INSIDE;
      }
    }
    closure_5.current = closure_10.OUTSIDE;
  }, items3);
  const items5 = [onPressIn, onPressOut];
  const tmp25 = ref2((pointerInside) => {
    pointerInside = pointerInside.pointerInside;
    if (!pointerInside) {
      pointerInside = undefined === closure_7.current;
    }
    if (!pointerInside) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_7.current);
      closure_7.current = undefined;
    }
  }, []);
  const tmp26 = ref2((canceled) => {
    let current = closure_9.current;
    if (!current) {
      current = ref.current !== closure_10.INSIDE;
    }
    if (!current) {
      if (onPressOut != null) {
        tmp4(canceled);
      }
    }
    let current2 = closure_9.current || canceled.canceled;
    if (!current2) {
      current2 = ref2.current;
    }
    if (!current2) {
      current2 = !canceled.pointerInside;
    }
    if (!current2) {
      if (onPress != null) {
        tmp8(canceled);
      }
    }
    ref.current = closure_10.UNKNOWN;
    if (undefined !== closure_7.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_7.current);
      closure_7.current = undefined;
    }
    closure_11();
  }, items4);
  const tmp27 = ref2((pointerInside) => {
    if (!closure_9.current) {
      if (ref.current !== closure_10.UNKNOWN) {
        const current = ref.current;
        if (pointerInside.pointerInside) {
          if (current === closure_10.OUTSIDE) {
            if (onPressIn != null) {
              tmp9(pointerInside);
            }
          }
          ref.current = closure_10.INSIDE;
        } else {
          if (current === closure_10.INSIDE) {
            if (onPressOut != null) {
              tmp3(pointerInside);
            }
            if (undefined !== closure_7.current) {
              const _clearTimeout = clearTimeout;
              clearTimeout(closure_7.current);
              closure_7.current = undefined;
            }
          }
          ref.current = closure_10.OUTSIDE;
        }
      }
    }
  }, items5);
  const nativeGesture = onLongPress(onPressIn[5]).useNativeGesture({ onBegin: tmp24, onActivate: tmp25, onFinalize: tmp26, onUpdate: tmp27, hitSlop: hitSlop.hitSlop, testID: hitSlop.testID, enabled: !tmp, shouldCancelWhenOutside: tmp2, disableReanimated: true, shouldActivateOnStart: false, disallowInterruption: true, yieldsToContinuousGestures: true });
  if (undefined !== androidRipple) {
    let color;
    if (androidRipple != null) {
      color = androidRipple.color;
    }
    const obj5 = { rippleColor: color, rippleRadius: null, borderless: null, foreground: null };
    let radius;
    if (androidRipple != null) {
      radius = androidRipple.radius;
    }
    obj5.rippleRadius = radius;
    let borderless;
    if (androidRipple != null) {
      borderless = androidRipple.borderless;
    }
    obj5.borderless = borderless;
    let foreground;
    if (androidRipple != null) {
      foreground = androidRipple.foreground;
    }
    obj5.foreground = foreground;
    let tmp29 = obj5;
  } else {
    tmp29 = closure_9;
  }
  const obj3 = onLongPress(onPressIn[5]);
  const obj4 = { onBegin: tmp24, onActivate: tmp25, onFinalize: tmp26, onUpdate: tmp27, hitSlop: hitSlop.hitSlop, testID: hitSlop.testID, enabled: !tmp, shouldCancelWhenOutside: tmp2, disableReanimated: true, shouldActivateOnStart: false, disallowInterruption: true, yieldsToContinuousGestures: true };
  const tVProps = onLongPress(onPressIn[6]).getTVProps(tmp4);
  const obj6 = { gesture: nativeGesture, children: null };
  const obj7 = {};
  const tmp17Result = onLongPress(onPressIn[6]);
  const merged = Object.assign(tmp4);
  const merged1 = Object.assign(tVProps);
  const merged2 = Object.assign(tmp29);
  const merged3 = Object.assign(obj);
  if (ref == null) {
    ref = null;
  }
  obj7.ref = ref;
  obj7.enabled = !tmp;
  obj7.defaultOpacity = num3;
  obj7.defaultUnderlayOpacity = num;
  obj7.activeUnderlayOpacity = num2;
  obj7.underlayColor = str;
  obj7.longPressDuration = num13;
  obj7.children = hitSlop.children;
  obj6.children = jsx(onPress(onPressIn[8]), obj7);
  return jsx(onLongPress(onPressIn[7]).NativeDetector, obj6);
};
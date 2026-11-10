// _runtime/05542_Touchable.js
import JSResponderContext from "05497_JSResponderContext.js";
import _slicedToArray from "metro/00032__.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import noop_mod from "metro/00019__.js";

require = fn;
let closure_3 = ["underlayColor", "defaultUnderlayOpacity", "activeUnderlayOpacity", "defaultOpacity", "animationDuration", "androidRipple", "delayLongPress", "onLongPress", "onPress", "onPressIn", "onPressOut", "onHoverIn", "onHoverOut", "children", "disabled", "cancelOnLeave", "immediatePressOut", "ref"];
let noop = fn(19);
({ use: closure_6, useCallback: metroImportDefault, useMemo: closure_8, useRef: closure_9, useState: closure_10 } = noop);
let noop = noop_mod;
const Platform = fn(17).Platform;
const jsx = fn(21).jsx;
let closure_12 = { rippleColor: "transparent" };

export (underlayColor) => {
  underlayColor = underlayColor.underlayColor;
  let str = "transparent";
  if (undefined !== underlayColor) {
    str = underlayColor;
  }
  const defaultUnderlayOpacity = underlayColor.defaultUnderlayOpacity;
  let num = 0;
  if (undefined !== defaultUnderlayOpacity) {
    num = defaultUnderlayOpacity;
  }
  const activeUnderlayOpacity = underlayColor.activeUnderlayOpacity;
  let num2 = 0.105;
  if (undefined !== activeUnderlayOpacity) {
    num2 = activeUnderlayOpacity;
  }
  const defaultOpacity = underlayColor.defaultOpacity;
  let num3 = 1;
  if (undefined !== defaultOpacity) {
    num3 = defaultOpacity;
  }
  ({ animationDuration, androidRipple, delayLongPress } = underlayColor);
  let num4 = 600;
  if (undefined !== delayLongPress) {
    num4 = delayLongPress;
  }
  const onLongPress = underlayColor.onLongPress;
  const onPress = underlayColor.onPress;
  const onPressIn = underlayColor.onPressIn;
  const onPressOut = underlayColor.onPressOut;
  const onHoverIn = underlayColor.onHoverIn;
  const onHoverOut = underlayColor.onHoverOut;
  let disabled = underlayColor.disabled;
  let tmp = undefined !== disabled;
  if (tmp) {
    tmp = disabled;
  }
  disabled = tmp;
  const cancelOnLeave = underlayColor.cancelOnLeave;
  const immediatePressOut = underlayColor.immediatePressOut;
  let ref = underlayColor.ref;
  const tmp5 = onHoverOut(underlayColor, onPressOut);
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
  let num13 = 0;
  if (Number.isFinite(num4)) {
    num13 = 0;
    if (num4 >= 0) {
      num13 = num4;
    }
  }
  const tmp20 = disabled(onLongPress(onPressIn[6]).JSResponderContext);
  closure_7 = tmp20;
  closure_8 = closure_9(null);
  items = [tmp, tmp20];
  const items1 = [onPress];
  const items2 = [tmp20, onPressIn];
  const tmp2 = undefined === cancelOnLeave || cancelOnLeave;
  const tmp21 = closure_7(() => {
    if (!disabled) {
      const result = JSResponderContext.updateResponderEventValue(closure_7, true);
    }
    return false;
  }, items);
  const tmp3 = undefined === immediatePressOut || immediatePressOut;
  const items3 = [onPressOut];
  const tmp22 = closure_7((nativeEvent) => {
    if (!closure_8.current) {
      if (onPress != null) {
        tmp(nativeEvent.nativeEvent);
      }
    }
  }, items1);
  const items4 = [onLongPress];
  const tmp23 = closure_7((nativeEvent) => {
    if (closure_8.current == null) {
      closure_8.current = JSResponderContext.isKeyboardDismissingTap(closure_7);
    }
    if (!closure_8.current) {
      if (onPressIn != null) {
        tmp5(nativeEvent.nativeEvent);
      }
    }
  }, items2);
  const items5 = [onHoverIn];
  const tmp24 = closure_7((nativeEvent) => {
    if (!closure_8.current) {
      if (onPressOut != null) {
        tmp(nativeEvent.nativeEvent);
      }
    }
  }, items3);
  const items6 = [onHoverOut];
  const tmp25 = closure_7((nativeEvent) => {
    if (!closure_8.current) {
      if (onLongPress != null) {
        tmp(nativeEvent.nativeEvent);
      }
    }
  }, items4);
  const tmp26 = closure_8(() => {
    let fn;
    if (onHoverIn) {
      fn = (nativeEvent) => onHoverIn(nativeEvent.nativeEvent);
    }
    return fn;
  }, items5);
  const tmp27 = closure_8(() => {
    let fn;
    if (onHoverOut) {
      fn = (nativeEvent) => onHoverOut(nativeEvent.nativeEvent);
    }
    return fn;
  }, items6);
  if (undefined !== androidRipple) {
    let color;
    if (androidRipple != null) {
      color = androidRipple.color;
    }
    const obj3 = { rippleColor: color, rippleRadius: null, borderless: null, foreground: null };
    let radius;
    if (androidRipple != null) {
      radius = androidRipple.radius;
    }
    obj3.rippleRadius = radius;
    let borderless;
    if (androidRipple != null) {
      borderless = androidRipple.borderless;
    }
    obj3.borderless = borderless;
    let foreground;
    if (androidRipple != null) {
      foreground = androidRipple.foreground;
    }
    obj3.foreground = foreground;
    let tmp29 = obj3;
  } else {
    tmp29 = closure_12;
  }
  const tmp28 = closure_7(() => {
    closure_8.current = null;
  }, []);
  const tVProps = onLongPress(onPressIn[7]).getTVProps(tmp5);
  if (typeof underlayColor.hitSlop === "number") {
    const rect = { top: null, left: null, bottom: null, right: null };
    ({ hitSlop: obj5.top, hitSlop: obj5.left, hitSlop: obj5.bottom, hitSlop: obj5.right } = underlayColor);
    let hitSlop = rect;
  } else {
    hitSlop = underlayColor.hitSlop;
  }
  const obj4 = {};
  const tmp18Result = onLongPress(onPressIn[7]);
  const merged = Object.assign(tmp5);
  const merged1 = Object.assign(tVProps);
  const merged2 = Object.assign(tmp29);
  const merged3 = Object.assign(obj);
  if (ref == null) {
    ref = null;
  }
  obj4.ref = ref;
  obj4.enabled = !tmp;
  obj4.onStartShouldSetResponderCapture = tmp21;
  const tmp36 = onPress(onPressIn[8]);
  obj4.moduleId = onLongPress(onPressIn[9]).getModuleId();
  obj4.handlerTag = onHoverIn(closure_10(() => onLongPress(onPressIn[5]).getNextHandlerTag()), 1)[0];
  obj4.cancelOnLeave = tmp2;
  obj4.gestureTestID = underlayColor.testID;
  obj4.gestureHitSlop = hitSlop;
  obj4.defaultOpacity = num3;
  obj4.defaultUnderlayOpacity = num;
  obj4.activeUnderlayOpacity = num2;
  obj4.underlayColor = str;
  obj4.longPressDuration = num13;
  obj4.immediatePressOut = tmp3;
  obj4.hasLongPressHandler = undefined !== onLongPress;
  obj4.onButtonPress = tmp22;
  obj4.onButtonPressIn = tmp23;
  obj4.onButtonPressOut = tmp24;
  obj4.onButtonLongPress = tmp25;
  obj4.onButtonHoverIn = tmp26;
  obj4.onButtonHoverOut = tmp27;
  obj4.onButtonInteractionFinished = tmp28;
  obj4.children = underlayColor.children;
  return <tmp36 />;
}
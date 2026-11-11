// === Module 5654: delayHoverIn ===

// Module 5654 (delayHoverIn)
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop_mod from "module_19" /* 19 */;

const require = fn;
let closure_2 = ["testOnly_pressed", "hitSlop", "pressRetentionOffset", "delayHoverIn", "delayHoverOut", "delayLongPress", "unstable_pressDelay", "onHoverIn", "onHoverOut", "onPress", "onPressIn", "onPressOut", "onLongPress", "onLayout", "style", "children", "android_disableSound", "android_ripple", "disabled", "accessible", "ref", "immediatePressOut"];
let closure_3 = ["cancelable", "dimensionsAfterResize", "simultaneousWith", "requireToFail", "block"];
let noop = fn(19);
({ useEffect: closure_6, useRef: metroImportDefault, useState: closure_8 } = noop);
let noop = noop_mod;
const jsxProd = fn(21);
({ jsx, jsxs: closure_9 } = jsxProd);
const tagMessage = fn(5539);
let closure_10 = tagMessage.isTestEnv();
let animationDuration = { in: 50, out: 100, tap: { in: 130 } };

export default function _default(delayHoverOut) {
  ({ testOnly_pressed, hitSlop, pressRetentionOffset, delayHoverIn } = delayHoverOut);
  delayHoverOut = delayHoverOut.delayHoverOut;
  ({ delayLongPress, unstable_pressDelay } = delayHoverOut);
  const onHoverIn = delayHoverOut.onHoverIn;
  const onHoverOut = delayHoverOut.onHoverOut;
  const onPress = delayHoverOut.onPress;
  const onPressIn = delayHoverOut.onPressIn;
  const onPressOut = delayHoverOut.onPressOut;
  const onLongPress = delayHoverOut.onLongPress;
  ({ onLayout: closure_9, style, children, android_disableSound, android_ripple, immediatePressOut } = delayHoverOut);
  let tmp = undefined !== immediatePressOut;
  ({ disabled, accessible, ref } = delayHoverOut);
  if (tmp) {
    tmp = immediatePressOut;
  }
  const tmp2 = onPress(delayHoverOut, unstable_pressDelay);
  ({ cancelable, dimensionsAfterResize, simultaneousWith, requireToFail, block } = tmp2);
  const tmp4 = onHoverOut(onLongPress(false), 2);
  closure_10 = tmp4[1];
  animationDuration = onPressOut({ press: null, hoverIn: null, hoverOut: null });
  const tmp3 = onPress(tmp2, onHoverIn);
  closure_13 = onPressOut(false);
  onPressIn(() => () => {
    const current = ref.current;
    if (current.press) {
      const _clearTimeout = clearTimeout;
      clearTimeout(current.press);
    }
    if (current.hoverIn) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(current.hoverIn);
    }
    if (current.hoverOut) {
      const _clearTimeout3 = clearTimeout;
      clearTimeout(current.hoverOut);
    }
  }, []);
  let tmp6;
  if (android_ripple) {
    const color = android_ripple.color;
    let obj = { color, borderless: null, radius: null, foreground: null };
    const borderless = android_ripple.borderless;
    obj.borderless = borderless;
    const radius = android_ripple.radius;
    obj.radius = radius;
    const foreground = android_ripple.foreground;
    obj.foreground = foreground;
    tmp6 = obj;
  }
  if (typeof hitSlop === "number") {
    let numberAsInsetResult = delayHoverIn(delayHoverOut[5]).numberAsInset(hitSlop);
    let obj3 = delayHoverIn(delayHoverOut[5]);
  } else {
    numberAsInsetResult = hitSlop;
    if (hitSlop == null) {
      numberAsInsetResult = delayHoverIn(delayHoverOut[5]).numberAsInset(0);
      let obj2 = delayHoverIn(delayHoverOut[5]);
    }
  }
  ref = onPressOut({ width: 0, height: 0 });
  if (typeof pressRetentionOffset === "number") {
    let numberAsInsetResult1 = delayHoverIn(tmp14[5]).numberAsInset(pressRetentionOffset);
    const tmp13Result = delayHoverIn(tmp14[5]);
  } else {
    numberAsInsetResult1 = pressRetentionOffset;
    if (pressRetentionOffset == null) {
      numberAsInsetResult1 = delayHoverIn(tmp14[5]).numberAsInset(0);
      const tmp13Result2 = delayHoverIn(tmp14[5]);
    }
  }
  let obj4 = delayHoverIn(delayHoverOut[5]);
  if (delayLongPress == null) {
    delayLongPress = 500;
  }
  if (unstable_pressDelay == null) {
    unstable_pressDelay = 0;
  }
  function firePressIn(arg0) {

  }
  let fn;
  const sum = delayLongPress + unstable_pressDelay;
  if (onPress) {
    fn = (arg0) => {
      if (closure_13.current) {
        const obj = { identifier: 0, locationX: null, locationY: null, pageX: null, pageY: null, target: 0, timestamp: null, touches: null, changedTouches: null, force: "PX_8" };
        ({ x: obj.locationX, y: obj.locationY, absoluteX: obj.pageX, absoluteY: obj.pageY } = arg0);
        const _Date = Date;
        obj.timestamp = Date.now();
        obj.touches = [];
        obj.changedTouches = [];
        const obj2 = { nativeEvent: null };
        const obj3 = {};
        const merged = Object.assign(obj);
        items = [obj];
        obj3.touches = items;
        const items1 = [obj];
        obj3.changedTouches = items1;
        obj2.nativeEvent = obj3;
        onPress(obj2);
      }
    };
  }
  let fn2;
  if (onLongPress) {
    fn2 = (arg0) => {
      if (closure_13.current) {
        if (closure_11.current.press) {
          const _clearTimeout = clearTimeout;
          clearTimeout(closure_11.current.press);
          closure_11.current.press = null;
          if (typeof firePressIn === "function") {
            closure_10(true);
            if (onPressIn != null) {
              const obj2 = { identifier: 0, locationX: null, locationY: null, pageX: null, pageY: null, target: 0, timestamp: null, touches: null, changedTouches: null, force: "PX_8" };
              ({ x: obj4.locationX, y: obj4.locationY, absoluteX: obj4.pageX, absoluteY: obj4.pageY } = arg0);
              const _Date2 = Date;
              obj2.timestamp = Date.now();
              obj2.touches = [];
              obj2.changedTouches = [];
              const obj3 = { nativeEvent: null };
              const obj5 = {};
              const merged = Object.assign(obj2);
              items = [obj2];
              obj5.touches = items;
              const items1 = [obj2];
              obj5.changedTouches = items1;
              obj3.nativeEvent = obj5;
              tmp9(obj3);
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        const obj = { identifier: 0, locationX: null, locationY: null, pageX: null, pageY: null, target: 0, timestamp: null, touches: null, changedTouches: null, force: "PX_8" };
        ({ x: obj.locationX, y: obj.locationY, absoluteX: obj.pageX, absoluteY: obj.pageY } = arg0);
        const _Date = Date;
        obj.timestamp = Date.now();
        obj.touches = [];
        obj.changedTouches = [];
        const obj6 = { nativeEvent: null };
        const obj11 = {};
        const merged1 = Object.assign(obj);
        const items2 = [obj];
        obj11.touches = items2;
        const items3 = [obj];
        obj11.changedTouches = items3;
        obj6.nativeEvent = obj11;
        onLongPress(obj6);
      }
    };
  }
  if (null != onHoverIn) {
    const fn3 = (arg0) => {
      closure_0 = arg0;
      if (ref.current.hoverOut) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current.hoverOut);
        ref.current.hoverOut = null;
      }
      if (onHoverIn) {
        if (closure_0) {
          const _setTimeout = setTimeout;
          ref.current.hoverIn = setTimeout(() => {
            ref.current.hoverIn = null;
            const obj = { identifier: 0, locationX: closure_0.x, locationY: closure_0.y, pageX: closure_0.absoluteX, pageY: closure_0.absoluteY, target: 0, timestamp: Date.now(), touches: [], changedTouches: [], force: "PX_8" };
            const obj2 = { nativeEvent: null };
            const obj3 = {};
            const merged = Object.assign(obj);
            items = [obj];
            obj3.touches = items;
            const items1 = [obj];
            obj3.changedTouches = items1;
            obj2.nativeEvent = obj3;
            onHoverIn(obj2);
          }, tmp6);
        } else {
          let obj = { identifier: 0, locationX: null, locationY: null, pageX: null, pageY: null, target: 0, timestamp: null, touches: null, changedTouches: null, force: "PX_8" };
          ({ x: obj.locationX, y: obj.locationY, absoluteX: obj.pageX, absoluteY: obj.pageY } = arg0);
          const _Date = Date;
          obj.timestamp = Date.now();
          obj.touches = [];
          obj.changedTouches = [];
          let obj2 = { nativeEvent: null };
          let obj3 = {};
          let merged = Object.assign(obj);
          items = [obj];
          obj3.touches = items;
          let items1 = [obj];
          obj3.changedTouches = items1;
          obj2.nativeEvent = obj3;
          tmp5(obj2);
        }
      }
    };
  }
  if (null != onHoverOut) {
    const fn4 = (arg0) => {
      closure_0 = arg0;
      if (ref.current.hoverIn) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current.hoverIn);
        ref.current.hoverIn = null;
      }
      if (onHoverOut) {
        if (delayHoverOut) {
          const _setTimeout = setTimeout;
          ref.current.hoverOut = setTimeout(() => {
            ref.current.hoverOut = null;
            const obj = { identifier: 0, locationX: closure_0.x, locationY: closure_0.y, pageX: closure_0.absoluteX, pageY: closure_0.absoluteY, target: 0, timestamp: Date.now(), touches: [], changedTouches: [], force: "PX_8" };
            const obj2 = { nativeEvent: null };
            const obj3 = {};
            const merged = Object.assign(obj);
            items = [obj];
            obj3.touches = items;
            const items1 = [obj];
            obj3.changedTouches = items1;
            obj2.nativeEvent = obj3;
            onHoverOut(obj2);
          }, tmp6);
        } else {
          let obj = { identifier: 0, locationX: null, locationY: null, pageX: null, pageY: null, target: 0, timestamp: null, touches: null, changedTouches: null, force: "PX_8" };
          ({ x: obj.locationX, y: obj.locationY, absoluteX: obj.pageX, absoluteY: obj.pageY } = arg0);
          const _Date = Date;
          obj.timestamp = Date.now();
          obj.touches = [];
          obj.changedTouches = [];
          let obj2 = { nativeEvent: null };
          let obj3 = {};
          let merged = Object.assign(obj);
          items = [obj];
          obj3.touches = items;
          let items1 = [obj];
          obj3.changedTouches = items1;
          obj2.nativeEvent = obj3;
          tmp5(obj2);
        }
      }
    };
  }
  if (testOnly_pressed == null) {
    testOnly_pressed = tmp4[0];
  }
  let style1 = style;
  if (typeof style === "function") {
    let obj5 = { pressed: testOnly_pressed };
    style1 = style(obj5);
  }
  let childrenResult = children;
  if (typeof children === "function") {
    let obj6 = { pressed: testOnly_pressed };
    childrenResult = children(obj6);
  }
  const obj7 = {};
  let merged = Object.assign(tmp3);
  obj7.ref = ref;
  obj7.accessible = false !== accessible;
  obj7.disabled = true === disabled;
  obj7.hitSlop = delayHoverIn(delayHoverOut[5]).addInsets(numberAsInsetResult, numberAsInsetResult1);
  obj7.onLayout = function onLayout(nativeEvent) {
    if (closure_1_9 != null) {
      tmp(nativeEvent);
    }
    closure_12.current = nativeEvent.nativeEvent.layout;
  };
  obj7.androidRipple = tmp6;
  obj7.touchSoundDisabled = android_disableSound;
  obj7.delayLongPress = sum;
  items = [delayHoverIn(delayHoverOut[7]).pointerStyle, style1];
  obj7.style = items;
  obj7.animationDuration = animationDuration;
  obj7.immediatePressOut = tmp;
  obj7.onPressIn = function onPressIn(locationX) {
    closure_0 = locationX;
    let obj = delayHoverIn(delayHoverOut[5]);
    closure_13.current = obj.isTouchWithinInset(ref.current, closure_14, { identifier: 0, locationX: locationX.x, locationY: locationX.y, pageX: locationX.absoluteX, pageY: locationX.absoluteY, target: 0, timestamp: Date.now(), touches: [], changedTouches: [], force: "PX_8" });
    if (closure_13.current) {
      if (unstable_pressDelay) {
        if (ref.current.press) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current.press);
        }
        const _setTimeout = setTimeout;
        ref.current.press = setTimeout(() => {
          ref.current.press = null;
          if (typeof firePressIn === "function") {
            closure_10(true);
            if (onPressIn != null) {
              const obj = { identifier: 0, locationX: null, locationY: null, pageX: null, pageY: null, target: 0, timestamp: null, touches: null, changedTouches: null, force: "PX_8" };
              ({ x: obj.locationX, y: obj.locationY, absoluteX: obj.pageX, absoluteY: obj.pageY } = closure_0);
              const _Date = Date;
              obj.timestamp = Date.now();
              obj.touches = [];
              obj.changedTouches = [];
              const obj2 = { nativeEvent: null };
              const obj3 = {};
              const merged = Object.assign(obj);
              items = [obj];
              obj3.touches = items;
              const items1 = [obj];
              obj3.changedTouches = items1;
              obj2.nativeEvent = obj3;
              tmp4(obj2);
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }, tmp);
      } else if (typeof firePressIn === "function") {
        closure_10(true);
        if (onPressIn != null) {
          const obj4 = { identifier: 0, locationX: null, locationY: null, pageX: null, pageY: null, target: 0, timestamp: null, touches: null, changedTouches: null, force: "PX_8" };
          ({ x: obj3.locationX, y: obj3.locationY, absoluteX: obj3.pageX, absoluteY: obj3.pageY } = locationX);
          let _Date = Date;
          obj4.timestamp = Date.now();
          obj4.touches = [];
          obj4.changedTouches = [];
          const obj5 = { nativeEvent: null };
          const obj9 = {};
          let merged = Object.assign(obj4);
          items = [obj4];
          obj9.touches = items;
          let items1 = [obj4];
          obj9.changedTouches = items1;
          obj5.nativeEvent = obj9;
          tmp5(obj5);
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      return tmp7;
    }
    let obj2 = { identifier: 0, locationX: locationX.x, locationY: locationX.y, pageX: locationX.absoluteX, pageY: locationX.absoluteY, target: 0, timestamp: Date.now(), touches: [], changedTouches: [], force: "PX_8" };
  };
  obj7.onPressOut = function onPressOut(arg0) {
    if (closure_13.current) {
      if (closure_11.current.press) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_11.current.press);
        closure_11.current.press = null;
        if (typeof firePressIn === "function") {
          closure_10(true);
          if (onPressIn != null) {
            const obj = { identifier: 0, locationX: null, locationY: null, pageX: null, pageY: null, target: 0, timestamp: null, touches: null, changedTouches: null, force: "PX_8" };
            ({ x: obj.locationX, y: obj.locationY, absoluteX: obj.pageX, absoluteY: obj.pageY } = arg0);
            const _Date = Date;
            obj.timestamp = Date.now();
            obj.touches = [];
            obj.changedTouches = [];
            const obj2 = { nativeEvent: null };
            const obj3 = {};
            const merged = Object.assign(obj);
            items = [obj];
            obj3.touches = items;
            const items1 = [obj];
            obj3.changedTouches = items1;
            obj2.nativeEvent = obj3;
            tmp9(obj2);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      closure_10(false);
      if (onPressOut != null) {
        const obj5 = { identifier: 0, locationX: null, locationY: null, pageX: null, pageY: null, target: 0, timestamp: null, touches: null, changedTouches: null, force: "PX_8" };
        ({ x: obj4.locationX, y: obj4.locationY, absoluteX: obj4.pageX, absoluteY: obj4.pageY } = arg0);
        const _Date2 = Date;
        obj5.timestamp = Date.now();
        obj5.touches = [];
        obj5.changedTouches = [];
        const obj6 = { nativeEvent: null };
        const obj11 = {};
        const merged1 = Object.assign(obj5);
        const items2 = [obj5];
        obj11.touches = items2;
        const items3 = [obj5];
        obj11.changedTouches = items3;
        obj6.nativeEvent = obj11;
        tmp12(obj6);
      }
    }
  };
  obj7.onPress = fn;
  obj7.onLongPress = fn2;
  obj7.onHoverIn = fn3;
  obj7.onHoverOut = fn4;
  let tmp23;
  if (closure_10) {
    tmp23 = onPress;
  }
  obj7.testOnly_onPress = tmp23;
  let tmp24;
  if (closure_10) {
    tmp24 = onPressIn;
  }
  obj7.testOnly_onPressIn = tmp24;
  let tmp25;
  if (closure_10) {
    tmp25 = onPressOut;
  }
  obj7.testOnly_onPressOut = tmp25;
  let tmp26;
  if (closure_10) {
    tmp26 = onLongPress;
  }
  obj7.testOnly_onLongPress = tmp26;
  let tmp27;
  if (closure_10) {
    tmp27 = onHoverIn;
  }
  obj7.testOnly_onHoverIn = tmp27;
  let tmp28;
  if (closure_10) {
    tmp28 = onHoverOut;
  }
  obj7.testOnly_onHoverOut = tmp28;
  let items1 = [childrenResult, null];
  obj7.children = items1;
  return closure_9(delayHoverIn(delayHoverOut[6]).Touchable, obj7);
};
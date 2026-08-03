// === Module 5414: hitSlop ===

// Module 5414 (hitSlop)
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import noop from "noop";
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import toArray from "toArray";

let c10;
let c9;
let closure_12;
let closure_14;
let closure_6;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
let closure_3 = ["testOnly_pressed", "hitSlop", "pressRetentionOffset", "delayHoverIn", "delayHoverOut", "delayLongPress", "unstable_pressDelay", "onHoverIn", "onHoverOut", "onPress", "onPressIn", "onPressOut", "onLongPress", "onLayout", "style", "children", "android_disableSound", "android_ripple", "disabled", "accessible", "simultaneousWithExternalGesture", "requireExternalGestureToFail", "blocksExternalGesture"];
({ useCallback: closure_6, useEffect: error, useMemo: metroImportAll, useRef: c9, useState: c10 } = noop);
({ Platform: unpackModuleId, processColor: closure_12 } = get_ActivityIndicator);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
toArray = toArray.isTestEnv();
let c16 = null;
let closure_17 = { code: "function pnpm_PressableTsx1(event){const{hoverInTimeout,clearTimeout,delayHoverOut,hoverOutTimeout,setTimeout,onHoverOut,gestureToPressableEvent}=this.__closure;var _onHoverOut2;if(hoverInTimeout.current){clearTimeout(hoverInTimeout.current);}if(delayHoverOut){hoverOutTimeout.current=setTimeout(function(){var _onHoverOut;return(_onHoverOut=onHoverOut)===null||_onHoverOut===void 0?void 0:_onHoverOut(gestureToPressableEvent(event));},delayHoverOut);return;}(_onHoverOut2=onHoverOut)===null||_onHoverOut2===void 0||_onHoverOut2(gestureToPressableEvent(event));}" };
let closure_18 = { code: "function pnpm_PressableTsx2(event){const{hoverOutTimeout,clearTimeout,delayHoverIn,hoverInTimeout,setTimeout,onHoverIn,gestureToPressableEvent}=this.__closure;var _onHoverIn2;if(hoverOutTimeout.current){clearTimeout(hoverOutTimeout.current);}if(delayHoverIn){hoverInTimeout.current=setTimeout(function(){var _onHoverIn;return(_onHoverIn=onHoverIn)===null||_onHoverIn===void 0?void 0:_onHoverIn(gestureToPressableEvent(event));},delayHoverIn);return;}(_onHoverIn2=onHoverIn)===null||_onHoverIn2===void 0||_onHoverIn2(gestureToPressableEvent(event));}" };
let closure_19 = { code: "function pnpm_PressableTsx3(_event,success){const{Platform,stateMachine,StateMachineEvent,handleFinalize}=this.__closure;if(Platform.OS==='web'){if(success){stateMachine.handleEvent(StateMachineEvent.FINALIZE);}else{stateMachine.handleEvent(StateMachineEvent.CANCEL);}handleFinalize();}}" };
let closure_20 = { code: "function pnpm_PressableTsx4(event){const{gestureTouchToPressableEvent,stateMachine,handlePressOut}=this.__closure;const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.reset();handlePressOut(pressableEvent,false);}" };
let closure_21 = { code: "function pnpm_PressableTsx5(){const{Platform,isScreenReaderEnabled,stateMachine,handleFinalize}=this.__closure;if(Platform.OS==='android'&&!isScreenReaderEnabled){stateMachine.reset();handleFinalize();}}" };
let closure_22 = { code: "function pnpm_PressableTsx6(event){const{gestureTouchToPressableEvent,stateMachine,StateMachineEvent}=this.__closure;const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.handleEvent(StateMachineEvent.LONG_PRESS_TOUCHES_DOWN,pressableEvent);}" };
let closure_23 = { code: "function pnpm_PressableTsx7(_event,success){const{Platform,stateMachine,StateMachineEvent,handleFinalize}=this.__closure;if(Platform.OS!=='web'){if(success){stateMachine.handleEvent(StateMachineEvent.FINALIZE);}else{stateMachine.handleEvent(StateMachineEvent.CANCEL);}if(Platform.OS!=='ios'){handleFinalize();}}}" };
let closure_24 = { code: "function pnpm_PressableTsx8(){const{Platform,stateMachine,StateMachineEvent}=this.__closure;if(Platform.OS!=='android'){stateMachine.handleEvent(StateMachineEvent.NATIVE_START);}}" };
let closure_25 = { code: "function pnpm_PressableTsx9(){const{stateMachine,StateMachineEvent}=this.__closure;stateMachine.handleEvent(StateMachineEvent.NATIVE_BEGIN);}" };
let closure_26 = { code: "function pnpm_PressableTsx10(event){const{Platform,gestureTouchToPressableEvent,stateMachine,handlePressOut}=this.__closure;if(Platform.OS!=='macos'&&Platform.OS!=='web'){const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.reset();handlePressOut(pressableEvent,false);}}" };

export default function _default(pressRetentionOffset) {
  let accessible;
  let android_disableSound;
  let android_ripple;
  let blocksExternalGesture;
  let children;
  let disabled;
  let hitSlop;
  let requireExternalGestureToFail;
  let simultaneousWithExternalGesture;
  let style;
  let testOnly_pressed;
  let tmp4;
  let toArray;
  ({ testOnly_pressed, hitSlop } = pressRetentionOffset);
  pressRetentionOffset = pressRetentionOffset.pressRetentionOffset;
  const delayHoverIn = pressRetentionOffset.delayHoverIn;
  const delayHoverOut = pressRetentionOffset.delayHoverOut;
  const delayLongPress = pressRetentionOffset.delayLongPress;
  const unstable_pressDelay = pressRetentionOffset.unstable_pressDelay;
  const onHoverIn = pressRetentionOffset.onHoverIn;
  const onHoverOut = pressRetentionOffset.onHoverOut;
  const onPress = pressRetentionOffset.onPress;
  const onPressIn = pressRetentionOffset.onPressIn;
  const onPressOut = pressRetentionOffset.onPressOut;
  const onLongPress = pressRetentionOffset.onLongPress;
  const onLayout = pressRetentionOffset.onLayout;
  ({ style, children, android_disableSound, android_ripple } = pressRetentionOffset);
  ({ disabled, accessible, simultaneousWithExternalGesture, requireExternalGestureToFail, blocksExternalGesture } = pressRetentionOffset);
  let closure_14 = { simultaneousWithExternalGesture, requireExternalGestureToFail, blocksExternalGesture };
  if (testOnly_pressed == null) {
    testOnly_pressed = false;
  }
  const tmp = unstable_pressDelay(pressRetentionOffset, delayHoverOut);
  const tmp2 = onPressOut;
  [tmp4, toArray] = delayLongPress(onPressOut(testOnly_pressed), 2);
  let closure_16 = onPressIn(null);
  let closure_17 = onPressIn(null);
  let closure_18 = onPressIn(true);
  let closure_19 = onPressIn(false);
  let closure_20 = onPressIn({ width: 0, height: 0 });
  const items = [hitSlop];
  let tmp5 = onPress(() => {
    if (typeof hitSlop === "Object") {
      let numberAsInsetResult = hitSlop(delayHoverIn[6]).numberAsInset(tmp);
      const obj2 = hitSlop(delayHoverIn[6]);
    } else {
      numberAsInsetResult = tmp;
      if (tmp == null) {
        numberAsInsetResult = {};
      }
    }
    return numberAsInsetResult;
  }, items);
  let closure_21 = tmp5;
  const items1 = [pressRetentionOffset];
  let tmp3 = delayLongPress(onPressOut(testOnly_pressed), 2);
  let obj = hitSlop(delayHoverIn[6]);
  const addInsetsResult = obj.addInsets(tmp5, onPress(() => {
    if (typeof pressRetentionOffset === "Object") {
      let numberAsInsetResult = hitSlop(delayHoverIn[6]).numberAsInset(tmp);
      const obj2 = hitSlop(delayHoverIn[6]);
    } else {
      numberAsInsetResult = tmp;
      if (tmp == null) {
        numberAsInsetResult = {};
      }
    }
    return numberAsInsetResult;
  }, items1));
  const tmp8 = onHoverIn(() => {
    if (ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
      closure_18.current = true;
    }
  }, []);
  let closure_23 = tmp8;
  let tmp9 = onHoverIn(() => {
    if (ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
  }, []);
  let closure_24 = tmp9;
  const items2 = [onLongPress, tmp8, delayLongPress];
  const tmp10 = onHoverIn((arg0) => {
    let closure_0 = arg0;
    if (onLongPress) {
      tmp8();
      let num = delayLongPress;
      if (delayLongPress == null) {
        num = 500;
      }
      closure_16.current = setTimeout(() => {
        outer1_18.current = false;
        outer1_11(closure_0);
      }, num);
      const tmp3 = closure_16;
    }
  }, items2);
  let closure_25 = tmp10;
  const items3 = [onPressIn, tmp10];
  const tmp11 = onHoverIn((arg0) => {
    if (onPressIn != null) {
      tmp(arg0);
    }
    tmp10(arg0);
    callback(true);
    if (ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp5.current);
      tmp5.current = null;
    }
  }, items3);
  let closure_26 = tmp11;
  const items4 = [tmp9, tmp8];
  let tmp12 = onHoverIn(() => {
    closure_19.current = false;
    tmp8();
    tmp9();
    callback(false);
  }, items4);
  let closure_27 = tmp12;
  const items5 = [tmp11, tmp5, unstable_pressDelay];
  const tmp13 = onHoverIn((nativeEvent) => {
    let closure_0 = nativeEvent;
    const changedTouches = nativeEvent.nativeEvent.changedTouches;
    if (obj.isTouchWithinInset(ref5.current, closure_21, changedTouches.at(-1))) {
      closure_19.current = true;
      if (unstable_pressDelay) {
        const _setTimeout = setTimeout;
        closure_17.current = setTimeout(() => {
          outer1_26(closure_0);
        }, tmp2);
      } else {
        tmp11(nativeEvent);
      }
    }
  }, items5);
  let closure_28 = tmp13;
  const items6 = [tmp12, tmp11, onPress, onPressOut];
  const tmp14 = onHoverIn((arg0) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    if (ref4.current) {
      tmp.current = false;
      if (ref2.current) {
        tmp11(arg0);
      }
      if (onPressOut != null) {
        onPressOut(arg0);
      }
      if (tmp9) {
        if (onPress != null) {
          onPress(arg0);
        }
      }
      tmp12 = tmp12();
      tmp9 = ref3.current && flag;
    }
  }, items6);
  let closure_29 = tmp14;
  const tmp15 = onPress(() => {
    const pressableStateMachine = new hitSlop(delayHoverIn[7]).PressableStateMachine();
    return pressableStateMachine;
  }, []);
  let closure_30 = tmp15;
  let obj1 = hitSlop(delayHoverIn[8]);
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  const items7 = [tmp13, tmp14, tmp15, isScreenReaderEnabled];
  onHoverOut(() => {
    tmp15.setStates(hitSlop(delayHoverIn[9]).getStatesConfig(closure_28, closure_29, isScreenReaderEnabled));
  }, items7);
  let closure_32 = onPressIn(null);
  let closure_33 = onPressIn(null);
  const items8 = [delayHoverIn, delayHoverOut, onHoverIn, onHoverOut];
  const items9 = [tmp15, tmp12, tmp14, isScreenReaderEnabled];
  const tmp6 = onPress(() => {
    if (typeof pressRetentionOffset === "Object") {
      let numberAsInsetResult = hitSlop(delayHoverIn[6]).numberAsInset(tmp);
      const obj2 = hitSlop(delayHoverIn[6]);
    } else {
      numberAsInsetResult = tmp;
      if (tmp == null) {
        numberAsInsetResult = {};
      }
    }
    return numberAsInsetResult;
  }, items1);
  const items10 = [tmp15, tmp14, tmp12];
  const tmp18 = onPress(() => {
    const GestureObjects = hitSlop(delayHoverIn[10]).GestureObjects;
    const HoverResult = GestureObjects.Hover();
    const manualActivationResult = GestureObjects.Hover().manualActivation(true);
    const fn = function n(arg0) {
      let closure_0 = arg0;
      if (ref2.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      if (closure_2) {
        const _setTimeout = setTimeout;
        closure_32.current = setTimeout(() => {
          let tmpResult;
          if (outer1_6 != null) {
            tmpResult = tmp(outer2_0(outer2_2[6]).gestureToPressableEvent(closure_0));
            const obj = outer2_0(outer2_2[6]);
          }
          return tmpResult;
        }, tmp4);
      } else if (closure_6 != null) {
        tmp5(outer1_0(outer1_2[6]).gestureToPressableEvent(arg0));
        let obj = outer1_0(outer1_2[6]);
      }
    };
    let obj = { hoverOutTimeout: closure_33, clearTimeout: clearTimeout, delayHoverIn, hoverInTimeout: closure_32, setTimeout: setTimeout, onHoverIn, gestureToPressableEvent: hitSlop(delayHoverIn[6]).gestureToPressableEvent };
    fn.__closure = obj;
    fn.__workletHash = 145410820733;
    fn.__initData = closure_18;
    const cancelsTouchesInViewResult = GestureObjects.Hover().manualActivation(true).cancelsTouchesInView(false);
    const fn2 = function t(arg0) {
      let closure_0 = arg0;
      if (ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      if (closure_3) {
        const _setTimeout = setTimeout;
        closure_33.current = setTimeout(() => {
          let tmpResult;
          if (outer1_7 != null) {
            tmpResult = tmp(outer2_0(outer2_2[6]).gestureToPressableEvent(closure_0));
            const obj = outer2_0(outer2_2[6]);
          }
          return tmpResult;
        }, tmp4);
      } else if (closure_7 != null) {
        tmp5(outer1_0(outer1_2[6]).gestureToPressableEvent(arg0));
        let obj = outer1_0(outer1_2[6]);
      }
    };
    obj = { hoverInTimeout: closure_32, clearTimeout: clearTimeout, delayHoverOut, hoverOutTimeout: closure_33, setTimeout: setTimeout, onHoverOut, gestureToPressableEvent: hitSlop(delayHoverIn[6]).gestureToPressableEvent };
    fn2.__closure = obj;
    fn2.__workletHash = 117886059607;
    fn2.__initData = closure_17;
    return GestureObjects.Hover().manualActivation(true).cancelsTouchesInView(false).onBegin(fn).onFinalize(fn2);
  }, items8);
  let closure_34 = tmp20;
  const items11 = [
    onPress(() => {
      const GestureObjects = hitSlop(delayHoverIn[10]).GestureObjects;
      const fn = function o(arg0) {
        const result = outer1_0(outer1_2[6]).gestureTouchToPressableEvent(arg0);
        navigation.reset();
        callback2(result, false);
      };
      let obj = { Platform: onLongPress, gestureTouchToPressableEvent: hitSlop(delayHoverIn[6]).gestureTouchToPressableEvent, stateMachine: closure_30, handlePressOut: closure_29 };
      fn.__closure = obj;
      fn.__workletHash = 9061249296673;
      fn.__initData = closure_26;
      const NativeResult = GestureObjects.Native();
      const fn2 = function s() {
        navigation.handleEvent(outer1_0(outer1_2[9]).StateMachineEvent.NATIVE_BEGIN);
      };
      obj = { stateMachine: closure_30, StateMachineEvent: hitSlop(delayHoverIn[9]).StateMachineEvent };
      fn2.__closure = obj;
      fn2.__workletHash = 11605577071200;
      fn2.__initData = closure_25;
      const onTouchesCancelledResult = GestureObjects.Native().onTouchesCancelled(fn);
      const fn3 = function n() {

      };
      const onBeginResult = GestureObjects.Native().onTouchesCancelled(fn).onBegin(fn2);
      fn3.__closure = { Platform: onLongPress, stateMachine: closure_30, StateMachineEvent: hitSlop(delayHoverIn[9]).StateMachineEvent };
      fn3.__workletHash = 1583717288778;
      fn3.__initData = closure_24;
      const obj1 = { Platform: onLongPress, stateMachine: closure_30, StateMachineEvent: hitSlop(delayHoverIn[9]).StateMachineEvent };
      const fn4 = function t(arg0, arg1) {
        const handleEvent = navigation.handleEvent;
        const StateMachineEvent = outer1_0(outer1_2[9]).StateMachineEvent;
        if (arg1) {
          handleEvent(StateMachineEvent.FINALIZE);
        } else {
          handleEvent(StateMachineEvent.CANCEL);
        }
        callback();
      };
      const onStartResult = onBeginResult.onStart(fn3);
      fn4.__closure = { Platform: onLongPress, stateMachine: closure_30, StateMachineEvent: hitSlop(delayHoverIn[9]).StateMachineEvent, handleFinalize: closure_27 };
      fn4.__workletHash = 13697558324309;
      fn4.__initData = closure_23;
      return onStartResult.onFinalize(fn4);
    }, items10),
    onPress(() => {
      const GestureObjects = hitSlop(delayHoverIn[10]).GestureObjects;
      const LongPressResult = GestureObjects.LongPress();
      const minDurationResult = GestureObjects.LongPress().minDuration(hitSlop(delayHoverIn[5]).INT32_MAX);
      const maxDistanceResult = GestureObjects.LongPress().minDuration(hitSlop(delayHoverIn[5]).INT32_MAX).maxDistance(hitSlop(delayHoverIn[5]).INT32_MAX);
      const fn = function o(arg0) {
        const result = outer1_0(outer1_2[6]).gestureTouchToPressableEvent(arg0);
        navigation.handleEvent(outer1_0(outer1_2[9]).StateMachineEvent.LONG_PRESS_TOUCHES_DOWN, result);
      };
      let obj = { gestureTouchToPressableEvent: hitSlop(delayHoverIn[6]).gestureTouchToPressableEvent, stateMachine: closure_30, StateMachineEvent: hitSlop(delayHoverIn[9]).StateMachineEvent };
      fn.__closure = obj;
      fn.__workletHash = 5538605329543;
      fn.__initData = addInsetsResult;
      const cancelsTouchesInViewResult = GestureObjects.LongPress().minDuration(hitSlop(delayHoverIn[5]).INT32_MAX).maxDistance(hitSlop(delayHoverIn[5]).INT32_MAX).cancelsTouchesInView(false);
      const fn2 = function s() {
        if (!closure_31) {
          navigation.reset();
          callback();
        }
      };
      obj = { Platform: onLongPress, isScreenReaderEnabled, stateMachine: closure_30, handleFinalize: closure_27 };
      fn2.__closure = obj;
      fn2.__workletHash = 8055694403599;
      fn2.__initData = closure_21;
      const onTouchesDownResult = GestureObjects.LongPress().minDuration(hitSlop(delayHoverIn[5]).INT32_MAX).maxDistance(hitSlop(delayHoverIn[5]).INT32_MAX).cancelsTouchesInView(false).onTouchesDown(fn);
      const fn3 = function n(arg0) {
        const result = outer1_0(outer1_2[6]).gestureTouchToPressableEvent(arg0);
        navigation.reset();
        callback2(result, false);
      };
      const onTouchesUpResult = GestureObjects.LongPress().minDuration(hitSlop(delayHoverIn[5]).INT32_MAX).maxDistance(hitSlop(delayHoverIn[5]).INT32_MAX).cancelsTouchesInView(false).onTouchesDown(fn).onTouchesUp(fn2);
      fn3.__closure = { gestureTouchToPressableEvent: hitSlop(delayHoverIn[6]).gestureTouchToPressableEvent, stateMachine: closure_30, handlePressOut: closure_29 };
      fn3.__workletHash = 8223505277740;
      fn3.__initData = closure_20;
      const obj1 = { gestureTouchToPressableEvent: hitSlop(delayHoverIn[6]).gestureTouchToPressableEvent, stateMachine: closure_30, handlePressOut: closure_29 };
      const fn4 = function t(arg0, arg1) {

      };
      const onTouchesCancelledResult = onTouchesUpResult.onTouchesCancelled(fn3);
      fn4.__closure = { Platform: onLongPress, stateMachine: closure_30, StateMachineEvent: hitSlop(delayHoverIn[9]).StateMachineEvent, handleFinalize: closure_27 };
      fn4.__workletHash = 946627735228;
      fn4.__initData = closure_19;
      return onTouchesCancelledResult.onFinalize(fn4);
    }, items9),
    tmp18
  ];
  function _loop(iter) {
    let closure_0 = iter;
    iter.enabled(closure_34);
    iter.runOnJS(true);
    iter.hitSlop(closure_22);
    const entries = Object.entries(closure_14);
    const item = entries.forEach((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      iter(outer1_2[11]).applyRelationProp(iter, tmp, tmp2);
    });
  }
  const iter = items11[Symbol.iterator]();
  while (iter !== undefined) {
    let _loopResult = _loop(iter.next());
    continue;
  }
  let GestureObjects = hitSlop(delayHoverIn[10]).GestureObjects;
  const items12 = [...items11];
  const tmp19 = onPress(() => {
    const GestureObjects = hitSlop(delayHoverIn[10]).GestureObjects;
    const LongPressResult = GestureObjects.LongPress();
    const minDurationResult = GestureObjects.LongPress().minDuration(hitSlop(delayHoverIn[5]).INT32_MAX);
    const maxDistanceResult = GestureObjects.LongPress().minDuration(hitSlop(delayHoverIn[5]).INT32_MAX).maxDistance(hitSlop(delayHoverIn[5]).INT32_MAX);
    const fn = function o(arg0) {
      const result = outer1_0(outer1_2[6]).gestureTouchToPressableEvent(arg0);
      navigation.handleEvent(outer1_0(outer1_2[9]).StateMachineEvent.LONG_PRESS_TOUCHES_DOWN, result);
    };
    let obj = { gestureTouchToPressableEvent: hitSlop(delayHoverIn[6]).gestureTouchToPressableEvent, stateMachine: closure_30, StateMachineEvent: hitSlop(delayHoverIn[9]).StateMachineEvent };
    fn.__closure = obj;
    fn.__workletHash = 5538605329543;
    fn.__initData = addInsetsResult;
    const cancelsTouchesInViewResult = GestureObjects.LongPress().minDuration(hitSlop(delayHoverIn[5]).INT32_MAX).maxDistance(hitSlop(delayHoverIn[5]).INT32_MAX).cancelsTouchesInView(false);
    const fn2 = function s() {
      if (!closure_31) {
        navigation.reset();
        callback();
      }
    };
    obj = { Platform: onLongPress, isScreenReaderEnabled, stateMachine: closure_30, handleFinalize: closure_27 };
    fn2.__closure = obj;
    fn2.__workletHash = 8055694403599;
    fn2.__initData = closure_21;
    const onTouchesDownResult = GestureObjects.LongPress().minDuration(hitSlop(delayHoverIn[5]).INT32_MAX).maxDistance(hitSlop(delayHoverIn[5]).INT32_MAX).cancelsTouchesInView(false).onTouchesDown(fn);
    const fn3 = function n(arg0) {
      const result = outer1_0(outer1_2[6]).gestureTouchToPressableEvent(arg0);
      navigation.reset();
      callback2(result, false);
    };
    const onTouchesUpResult = GestureObjects.LongPress().minDuration(hitSlop(delayHoverIn[5]).INT32_MAX).maxDistance(hitSlop(delayHoverIn[5]).INT32_MAX).cancelsTouchesInView(false).onTouchesDown(fn).onTouchesUp(fn2);
    fn3.__closure = { gestureTouchToPressableEvent: hitSlop(delayHoverIn[6]).gestureTouchToPressableEvent, stateMachine: closure_30, handlePressOut: closure_29 };
    fn3.__workletHash = 8223505277740;
    fn3.__initData = closure_20;
    const obj1 = { gestureTouchToPressableEvent: hitSlop(delayHoverIn[6]).gestureTouchToPressableEvent, stateMachine: closure_30, handlePressOut: closure_29 };
    const fn4 = function t(arg0, arg1) {

    };
    const onTouchesCancelledResult = onTouchesUpResult.onTouchesCancelled(fn3);
    fn4.__closure = { Platform: onLongPress, stateMachine: closure_30, StateMachineEvent: hitSlop(delayHoverIn[9]).StateMachineEvent, handleFinalize: closure_27 };
    fn4.__workletHash = 946627735228;
    fn4.__initData = closure_19;
    return onTouchesCancelledResult.onFinalize(fn4);
  }, items9);
  const tmp22 = hitSlop;
  if (typeof style !== "HAS_APPLICATION") {
    obj = { pressed: null };
    obj[0] = tmp4;
    style = style(obj);
  }
  let childrenResult = children;
  if (typeof children !== "HAS_APPLICATION") {
    obj = { pressed: null };
    obj[0] = tmp4;
    childrenResult = children(obj);
  }
  const items13 = [android_ripple];
  const items14 = [onLayout];
  const applyResult = GestureObjects.Simultaneous.apply(items12);
  const tmp27 = onPress(() => {
    if (null === closure_16) {
      closure_16 = hitSlop(delayHoverIn[5]).isFabric();
      const obj = hitSlop(delayHoverIn[5]);
    }
    let color;
    if (android_ripple != null) {
      color = tmp3.color;
    }
    if (color == null) {
      color = str;
    }
    let tmp5 = color;
    if (!closure_16) {
      tmp5 = onLayout(color);
    }
    return tmp5;
  }, items13);
  obj1 = { gesture: applyResult, children: null };
  let obj2 = {};
  const tmp28 = onHoverIn((nativeEvent) => {
    if (onLayout != null) {
      tmp(nativeEvent);
    }
    closure_20.current = nativeEvent.nativeEvent.layout;
  }, items14);
  const tmp29 = android_ripple;
  const tmp30 = closure_14;
  const merged = Object.assign(tmp);
  obj2.onLayout = tmp28;
  obj2.accessible = false !== accessible;
  obj2.hitSlop = addInsetsResult;
  obj2.enabled = true !== disabled;
  obj2.touchSoundDisabled = android_disableSound;
  obj2.rippleColor = tmp27;
  let radius;
  if (android_ripple != null) {
    radius = android_ripple.radius;
  }
  obj2.rippleRadius = radius;
  const items15 = [{}, style];
  obj2.style = items15;
  let tmp35;
  if (toArray) {
    tmp35 = onPress;
  }
  obj2.testOnly_onPress = tmp35;
  let tmp36;
  if (toArray) {
    tmp36 = onPressIn;
  }
  obj2.testOnly_onPressIn = tmp36;
  let tmp37;
  if (toArray) {
    tmp37 = onPressOut;
  }
  obj2.testOnly_onPressOut = tmp37;
  let tmp38;
  if (toArray) {
    tmp38 = onLongPress;
  }
  obj2.testOnly_onLongPress = tmp38;
  const items16 = [childrenResult, null];
  obj2.children = items16;
  obj1[1] = tmp30(pressRetentionOffset(delayHoverIn[13]), obj2);
  return tmp29(tmp22(delayHoverIn[12]).GestureDetector, obj1);
};
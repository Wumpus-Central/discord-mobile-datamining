// === Module 5736: hitSlop ===

// Module 5736 (hitSlop)
import noopDefault from "noop" /* 19 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import noop from "noop" /* 19 */;
import { Platform } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import tagMessage from "tagMessage" /* 5622 */;

const require = arg1;
let closure_2 = ["testOnly_pressed", "hitSlop", "pressRetentionOffset", "delayHoverIn", "delayHoverOut", "delayLongPress", "unstable_pressDelay", "onHoverIn", "onHoverOut", "onPress", "onPressIn", "onPressOut", "onLongPress", "onLayout", "style", "children", "android_disableSound", "android_ripple", "disabled", "accessible", "simultaneousWithExternalGesture", "requireExternalGestureToFail", "blocksExternalGesture"];
({ useCallback: c5, useEffect: closure_6, useMemo: error, useRef: closure_8, useState: c9 } = noop);
noopDefault;
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = tagMessage.isTestEnv();
let closure_14 = { code: "function pnpm_PressableTsx1(event){const{hoverInTimeout,clearTimeout,delayHoverOut,hoverOutTimeout,setTimeout,onHoverOut,gestureToPressableEvent}=this.__closure;var _onHoverOut2;if(hoverInTimeout.current){clearTimeout(hoverInTimeout.current);}if(delayHoverOut){hoverOutTimeout.current=setTimeout(function(){var _onHoverOut;return(_onHoverOut=onHoverOut)===null||_onHoverOut===void 0?void 0:_onHoverOut(gestureToPressableEvent(event));},delayHoverOut);return;}(_onHoverOut2=onHoverOut)===null||_onHoverOut2===void 0||_onHoverOut2(gestureToPressableEvent(event));}" };
let closure_15 = { code: "function pnpm_PressableTsx2(event){const{hoverOutTimeout,clearTimeout,delayHoverIn,hoverInTimeout,setTimeout,onHoverIn,gestureToPressableEvent}=this.__closure;var _onHoverIn2;if(hoverOutTimeout.current){clearTimeout(hoverOutTimeout.current);}if(delayHoverIn){hoverInTimeout.current=setTimeout(function(){var _onHoverIn;return(_onHoverIn=onHoverIn)===null||_onHoverIn===void 0?void 0:_onHoverIn(gestureToPressableEvent(event));},delayHoverIn);return;}(_onHoverIn2=onHoverIn)===null||_onHoverIn2===void 0||_onHoverIn2(gestureToPressableEvent(event));}" };
let closure_16 = { code: "function pnpm_PressableTsx3(_event,success){const{Platform,stateMachine,StateMachineEvent,handleFinalize}=this.__closure;if(Platform.OS==='web'){if(success){stateMachine.handleEvent(StateMachineEvent.FINALIZE);}else{stateMachine.handleEvent(StateMachineEvent.CANCEL);}handleFinalize();}}" };
let closure_17 = { code: "function pnpm_PressableTsx4(event){const{gestureTouchToPressableEvent,stateMachine,handlePressOut}=this.__closure;const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.reset();handlePressOut(pressableEvent,false);}" };
let closure_18 = { code: "function pnpm_PressableTsx5(){const{Platform,isScreenReaderEnabled,stateMachine,handleFinalize}=this.__closure;if(Platform.OS==='android'&&!isScreenReaderEnabled){stateMachine.reset();handleFinalize();}}" };
let closure_19 = { code: "function pnpm_PressableTsx6(event){const{gestureTouchToPressableEvent,stateMachine,StateMachineEvent}=this.__closure;const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.handleEvent(StateMachineEvent.LONG_PRESS_TOUCHES_DOWN,pressableEvent);}" };
let closure_20 = { code: "function pnpm_PressableTsx7(_event,success){const{Platform,stateMachine,StateMachineEvent,handleFinalize}=this.__closure;if(Platform.OS!=='web'){if(success){stateMachine.handleEvent(StateMachineEvent.FINALIZE);}else{stateMachine.handleEvent(StateMachineEvent.CANCEL);}if(Platform.OS!=='ios'){handleFinalize();}}}" };
let closure_21 = { code: "function pnpm_PressableTsx8(){const{Platform,stateMachine,StateMachineEvent}=this.__closure;if(Platform.OS!=='android'){stateMachine.handleEvent(StateMachineEvent.NATIVE_START);}}" };
let closure_22 = { code: "function pnpm_PressableTsx9(){const{Platform,isScreenReaderEnabled,stateMachine,StateMachineEvent,viewCenterToPressableEvent,dimensions}=this.__closure;if(Platform.OS==='android'&&isScreenReaderEnabled){stateMachine.handleEvent(StateMachineEvent.NATIVE_BEGIN,viewCenterToPressableEvent(dimensions.current));return;}stateMachine.handleEvent(StateMachineEvent.NATIVE_BEGIN);}" };
let closure_23 = { code: "function pnpm_PressableTsx10(event){const{Platform,gestureTouchToPressableEvent,stateMachine,handlePressOut}=this.__closure;if(Platform.OS!=='macos'&&Platform.OS!=='web'){const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.reset();handlePressOut(pressableEvent,false);}}" };

export default function _default(pressRetentionOffset) {
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
  closure_14 = { simultaneousWithExternalGesture, requireExternalGestureToFail, blocksExternalGesture };
  if (testOnly_pressed == null) {
    testOnly_pressed = false;
  }
  const tmp = delayLongPress(pressRetentionOffset, delayHoverIn);
  const tmp2 = onPressIn;
  [tmp4, closure_15] = delayHoverOut(onPressIn(testOnly_pressed), 2);
  closure_16 = onPress(null);
  closure_17 = onPress(null);
  closure_18 = onPress(true);
  closure_19 = onPress(false);
  closure_20 = onPress({ width: 0, height: 0 });
  const items = [hitSlop];
  const tmp5 = onHoverOut(() => {
    if (typeof hitSlop === "number") {
      let numberAsInsetResult = hitSlop(pressRetentionOffset[6]).numberAsInset(tmp);
      const obj2 = hitSlop(pressRetentionOffset[6]);
    } else {
      numberAsInsetResult = tmp;
      if (tmp == null) {
        numberAsInsetResult = {};
      }
    }
    return numberAsInsetResult;
  }, items);
  closure_21 = tmp5;
  const items1 = [pressRetentionOffset];
  let tmp3 = delayHoverOut(onPressIn(testOnly_pressed), 2);
  let obj = hitSlop(pressRetentionOffset[6]);
  const addInsetsResult = obj.addInsets(tmp5, onHoverOut(() => {
    if (typeof pressRetentionOffset === "number") {
      let numberAsInsetResult = hitSlop(pressRetentionOffset[6]).numberAsInset(tmp);
      const obj2 = hitSlop(pressRetentionOffset[6]);
    } else {
      numberAsInsetResult = tmp;
      if (tmp == null) {
        numberAsInsetResult = {};
      }
    }
    return numberAsInsetResult;
  }, items1));
  const tmp8 = unstable_pressDelay(() => {
    if (ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
      closure_18.current = true;
    }
  }, []);
  closure_23 = tmp8;
  let tmp9 = unstable_pressDelay(() => {
    if (ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
  }, []);
  closure_24 = tmp9;
  const items2 = [onLongPress, tmp8, delayLongPress];
  const tmp10 = unstable_pressDelay((arg0) => {
    closure_0 = arg0;
    if (onLongPress) {
      callback2();
      let num = delayLongPress;
      if (delayLongPress == null) {
        num = 500;
      }
      closure_16.current = setTimeout(() => {
        closure_1_18.current = false;
        closure_1_11(closure_0);
      }, num);
      const tmp3 = closure_16;
    }
  }, items2);
  closure_25 = tmp10;
  const items3 = [onPressIn, tmp10];
  const tmp11 = unstable_pressDelay((arg0) => {
    if (onPressIn != null) {
      tmp(arg0);
    }
    callback4(arg0);
    callback(true);
    if (ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp5.current);
      tmp5.current = null;
    }
  }, items3);
  closure_26 = tmp11;
  const items4 = [tmp9, tmp8];
  const tmp12 = unstable_pressDelay(() => {
    closure_19.current = false;
    callback2();
    callback3();
    callback(false);
  }, items4);
  closure_27 = tmp12;
  const items5 = [tmp11, tmp5, unstable_pressDelay];
  const tmp13 = unstable_pressDelay((nativeEvent) => {
    closure_0 = nativeEvent;
    const changedTouches = nativeEvent.nativeEvent.changedTouches;
    if (obj.isTouchWithinInset(ref5.current, closure_21, changedTouches.at(-1))) {
      closure_19.current = true;
      if (unstable_pressDelay) {
        const _setTimeout = setTimeout;
        closure_17.current = setTimeout(() => {
          closure_1_26(closure_0);
        }, tmp2);
      } else {
        callback5(nativeEvent);
      }
    }
  }, items5);
  closure_28 = tmp13;
  const items6 = [tmp12, tmp11, onPress, onPressOut];
  const tmp14 = unstable_pressDelay((arg0) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    if (ref4.current) {
      tmp.current = false;
      if (ref2.current) {
        callback5(arg0);
      }
      if (onPressOut != null) {
        onPressOut(arg0);
      }
      if (tmp9) {
        if (onPress != null) {
          onPress(arg0);
        }
      }
      callback6();
      tmp9 = ref3.current && flag;
    }
  }, items6);
  closure_29 = tmp14;
  const tmp15 = onHoverOut(() => {
    const pressableStateMachine = new hitSlop(pressRetentionOffset[7]).PressableStateMachine();
    return pressableStateMachine;
  }, []);
  closure_30 = tmp15;
  obj1 = hitSlop(pressRetentionOffset[8]);
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  const items7 = [tmp13, tmp14, tmp15, isScreenReaderEnabled];
  onHoverIn(() => {
    states.setStates(hitSlop(pressRetentionOffset[9]).getStatesConfig(closure_28, closure_29, isScreenReaderEnabled));
  }, items7);
  closure_32 = onPress(null);
  closure_33 = onPress(null);
  const items8 = [delayHoverIn, delayHoverOut, onHoverIn, onHoverOut];
  const items9 = [tmp15, tmp12, tmp14, isScreenReaderEnabled];
  const tmp6 = onHoverOut(() => {
    if (typeof pressRetentionOffset === "number") {
      let numberAsInsetResult = hitSlop(pressRetentionOffset[6]).numberAsInset(tmp);
      const obj2 = hitSlop(pressRetentionOffset[6]);
    } else {
      numberAsInsetResult = tmp;
      if (tmp == null) {
        numberAsInsetResult = {};
      }
    }
    return numberAsInsetResult;
  }, items1);
  const items10 = [tmp15, tmp14, tmp12, isScreenReaderEnabled];
  const tmp18 = onHoverOut(() => {
    const GestureObjects = hitSlop(pressRetentionOffset[10]).GestureObjects;
    const HoverResult = GestureObjects.Hover();
    const manualActivationResult = GestureObjects.Hover().manualActivation(true);
    const fn = function n(arg0) {
      closure_0 = arg0;
      if (ref2.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      if (closure_2) {
        const _setTimeout = setTimeout;
        closure_32.current = setTimeout(() => {
          let tmpResult;
          if (closure_1_6 != null) {
            tmpResult = tmp(closure_2_0(closure_2_1[6]).gestureToPressableEvent(closure_0));
            const obj = closure_2_0(closure_2_1[6]);
          }
          return tmpResult;
        }, tmp4);
      } else if (closure_6 != null) {
        tmp5(closure_1_0(closure_1_1[6]).gestureToPressableEvent(arg0));
        let obj = closure_1_0(closure_1_1[6]);
      }
    };
    let obj = { hoverOutTimeout: closure_33, clearTimeout: clearTimeout, delayHoverIn, hoverInTimeout: closure_32, setTimeout: setTimeout, onHoverIn, gestureToPressableEvent: hitSlop(pressRetentionOffset[6]).gestureToPressableEvent };
    fn.__closure = obj;
    fn.__workletHash = 145410820733;
    fn.__initData = closure_1_15;
    const cancelsTouchesInViewResult = GestureObjects.Hover().manualActivation(true).cancelsTouchesInView(false);
    const fn2 = function t(arg0) {
      closure_0 = arg0;
      if (ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      if (closure_3) {
        const _setTimeout = setTimeout;
        closure_33.current = setTimeout(() => {
          let tmpResult;
          if (closure_1_7 != null) {
            tmpResult = tmp(closure_2_0(closure_2_1[6]).gestureToPressableEvent(closure_0));
            const obj = closure_2_0(closure_2_1[6]);
          }
          return tmpResult;
        }, tmp4);
      } else if (closure_7 != null) {
        tmp5(closure_1_0(closure_1_1[6]).gestureToPressableEvent(arg0));
        let obj = closure_1_0(closure_1_1[6]);
      }
    };
    obj = { hoverInTimeout: closure_32, clearTimeout: clearTimeout, delayHoverOut, hoverOutTimeout: closure_33, setTimeout: setTimeout, onHoverOut, gestureToPressableEvent: hitSlop(pressRetentionOffset[6]).gestureToPressableEvent };
    fn2.__closure = obj;
    fn2.__workletHash = 117886059607;
    fn2.__initData = closure_14;
    return GestureObjects.Hover().manualActivation(true).cancelsTouchesInView(false).onBegin(fn).onFinalize(fn2);
  }, items8);
  closure_34 = tmp20;
  const items11 = [
    onHoverOut(() => {
      const GestureObjects = hitSlop(pressRetentionOffset[10]).GestureObjects;
      const fn = function o(arg0) {
        const result = closure_1_0(closure_1_1[6]).gestureTouchToPressableEvent(arg0);
        navigation.reset();
        callback2(result, false);
      };
      let obj = { Platform: onPressOut, gestureTouchToPressableEvent: hitSlop(pressRetentionOffset[6]).gestureTouchToPressableEvent, stateMachine: closure_30, handlePressOut: closure_29 };
      fn.__closure = obj;
      fn.__workletHash = 9061249296673;
      fn.__initData = closure_23;
      const NativeResult = GestureObjects.Native();
      const fn2 = function s() {
        const handleEvent = navigation.handleEvent;
        const NATIVE_BEGIN = closure_1_0(closure_1_1[9]).StateMachineEvent.NATIVE_BEGIN;
        if (closure_31) {
          handleEvent(NATIVE_BEGIN, closure_1_0(closure_1_1[6]).viewCenterToPressableEvent(ref.current));
          const obj = closure_1_0(closure_1_1[6]);
        } else {
          handleEvent(NATIVE_BEGIN);
        }
      };
      obj = { Platform: onPressOut, isScreenReaderEnabled, stateMachine: closure_30, StateMachineEvent: hitSlop(pressRetentionOffset[9]).StateMachineEvent, viewCenterToPressableEvent: hitSlop(pressRetentionOffset[6]).viewCenterToPressableEvent, dimensions: closure_20 };
      fn2.__closure = obj;
      fn2.__workletHash = 9788273325262;
      fn2.__initData = addInsetsResult;
      const onTouchesCancelledResult = GestureObjects.Native().onTouchesCancelled(fn);
      const fn3 = function n() {

      };
      const onBeginResult = GestureObjects.Native().onTouchesCancelled(fn).onBegin(fn2);
      fn3.__closure = { Platform: onPressOut, stateMachine: closure_30, StateMachineEvent: hitSlop(pressRetentionOffset[9]).StateMachineEvent };
      fn3.__workletHash = 1583717288778;
      fn3.__initData = closure_21;
      obj1 = { Platform: onPressOut, stateMachine: closure_30, StateMachineEvent: hitSlop(pressRetentionOffset[9]).StateMachineEvent };
      const fn4 = function t(arg0, arg1) {
        const handleEvent = navigation.handleEvent;
        const StateMachineEvent = closure_1_0(closure_1_1[9]).StateMachineEvent;
        if (arg1) {
          handleEvent(StateMachineEvent.FINALIZE);
        } else {
          handleEvent(StateMachineEvent.CANCEL);
        }
        callback();
      };
      const onStartResult = onBeginResult.onStart(fn3);
      fn4.__closure = { Platform: onPressOut, stateMachine: closure_30, StateMachineEvent: hitSlop(pressRetentionOffset[9]).StateMachineEvent, handleFinalize: closure_27 };
      fn4.__workletHash = 13697558324309;
      fn4.__initData = closure_20;
      const obj2 = { Platform: onPressOut, stateMachine: closure_30, StateMachineEvent: hitSlop(pressRetentionOffset[9]).StateMachineEvent, handleFinalize: closure_27 };
      return onStartResult.onFinalize(fn4).shouldActivateOnStart(false);
    }, items10),
    onHoverOut(() => {
      const GestureObjects = hitSlop(pressRetentionOffset[10]).GestureObjects;
      const LongPressResult = GestureObjects.LongPress();
      const minDurationResult = GestureObjects.LongPress().minDuration(hitSlop(pressRetentionOffset[5]).INT32_MAX);
      const maxDistanceResult = GestureObjects.LongPress().minDuration(hitSlop(pressRetentionOffset[5]).INT32_MAX).maxDistance(hitSlop(pressRetentionOffset[5]).INT32_MAX);
      const fn = function o(arg0) {
        const result = closure_1_0(closure_1_1[6]).gestureTouchToPressableEvent(arg0);
        navigation.handleEvent(closure_1_0(closure_1_1[9]).StateMachineEvent.LONG_PRESS_TOUCHES_DOWN, result);
      };
      let obj = { gestureTouchToPressableEvent: hitSlop(pressRetentionOffset[6]).gestureTouchToPressableEvent, stateMachine: closure_30, StateMachineEvent: hitSlop(pressRetentionOffset[9]).StateMachineEvent };
      fn.__closure = obj;
      fn.__workletHash = 5538605329543;
      fn.__initData = closure_19;
      const cancelsTouchesInViewResult = GestureObjects.LongPress().minDuration(hitSlop(pressRetentionOffset[5]).INT32_MAX).maxDistance(hitSlop(pressRetentionOffset[5]).INT32_MAX).cancelsTouchesInView(false);
      const fn2 = function s() {
        if (!closure_31) {
          navigation.reset();
          callback();
        }
      };
      obj = { Platform: onPressOut, isScreenReaderEnabled, stateMachine: closure_30, handleFinalize: closure_27 };
      fn2.__closure = obj;
      fn2.__workletHash = 8055694403599;
      fn2.__initData = closure_18;
      const onTouchesDownResult = GestureObjects.LongPress().minDuration(hitSlop(pressRetentionOffset[5]).INT32_MAX).maxDistance(hitSlop(pressRetentionOffset[5]).INT32_MAX).cancelsTouchesInView(false).onTouchesDown(fn);
      const fn3 = function n(arg0) {
        const result = closure_1_0(closure_1_1[6]).gestureTouchToPressableEvent(arg0);
        navigation.reset();
        callback2(result, false);
      };
      const onTouchesUpResult = GestureObjects.LongPress().minDuration(hitSlop(pressRetentionOffset[5]).INT32_MAX).maxDistance(hitSlop(pressRetentionOffset[5]).INT32_MAX).cancelsTouchesInView(false).onTouchesDown(fn).onTouchesUp(fn2);
      fn3.__closure = { gestureTouchToPressableEvent: hitSlop(pressRetentionOffset[6]).gestureTouchToPressableEvent, stateMachine: closure_30, handlePressOut: closure_29 };
      fn3.__workletHash = 8223505277740;
      fn3.__initData = closure_17;
      obj1 = { gestureTouchToPressableEvent: hitSlop(pressRetentionOffset[6]).gestureTouchToPressableEvent, stateMachine: closure_30, handlePressOut: closure_29 };
      const fn4 = function t(arg0, arg1) {

      };
      const onTouchesCancelledResult = onTouchesUpResult.onTouchesCancelled(fn3);
      fn4.__closure = { Platform: onPressOut, stateMachine: closure_30, StateMachineEvent: hitSlop(pressRetentionOffset[9]).StateMachineEvent, handleFinalize: closure_27 };
      fn4.__workletHash = 946627735228;
      fn4.__initData = closure_16;
      return onTouchesCancelledResult.onFinalize(fn4);
    }, items9),
    tmp18
  ];
  function _loop(iter) {
    closure_0 = iter;
    iter.enabled(closure_34);
    iter.runOnJS(true);
    iter.hitSlop(closure_22);
    const entries = Object.entries(closure_14);
    const item = entries.forEach((arg0) => {
      [tmp, tmp2] = arg0;
      iter(closure_1_1[11]).applyRelationProp(iter, tmp, tmp2);
    });
  }
  const iter = items11[Symbol.iterator]();
  while (iter !== undefined) {
    let _loopResult = _loop(iter.next());
    continue;
  }
  let GestureObjects = hitSlop(pressRetentionOffset[10]).GestureObjects;
  const items12 = [...items11];
  const tmp19 = onHoverOut(() => {
    const GestureObjects = hitSlop(pressRetentionOffset[10]).GestureObjects;
    const LongPressResult = GestureObjects.LongPress();
    const minDurationResult = GestureObjects.LongPress().minDuration(hitSlop(pressRetentionOffset[5]).INT32_MAX);
    const maxDistanceResult = GestureObjects.LongPress().minDuration(hitSlop(pressRetentionOffset[5]).INT32_MAX).maxDistance(hitSlop(pressRetentionOffset[5]).INT32_MAX);
    const fn = function o(arg0) {
      const result = closure_1_0(closure_1_1[6]).gestureTouchToPressableEvent(arg0);
      navigation.handleEvent(closure_1_0(closure_1_1[9]).StateMachineEvent.LONG_PRESS_TOUCHES_DOWN, result);
    };
    let obj = { gestureTouchToPressableEvent: hitSlop(pressRetentionOffset[6]).gestureTouchToPressableEvent, stateMachine: closure_30, StateMachineEvent: hitSlop(pressRetentionOffset[9]).StateMachineEvent };
    fn.__closure = obj;
    fn.__workletHash = 5538605329543;
    fn.__initData = closure_19;
    const cancelsTouchesInViewResult = GestureObjects.LongPress().minDuration(hitSlop(pressRetentionOffset[5]).INT32_MAX).maxDistance(hitSlop(pressRetentionOffset[5]).INT32_MAX).cancelsTouchesInView(false);
    const fn2 = function s() {
      if (!closure_31) {
        navigation.reset();
        callback();
      }
    };
    obj = { Platform: onPressOut, isScreenReaderEnabled, stateMachine: closure_30, handleFinalize: closure_27 };
    fn2.__closure = obj;
    fn2.__workletHash = 8055694403599;
    fn2.__initData = closure_18;
    const onTouchesDownResult = GestureObjects.LongPress().minDuration(hitSlop(pressRetentionOffset[5]).INT32_MAX).maxDistance(hitSlop(pressRetentionOffset[5]).INT32_MAX).cancelsTouchesInView(false).onTouchesDown(fn);
    const fn3 = function n(arg0) {
      const result = closure_1_0(closure_1_1[6]).gestureTouchToPressableEvent(arg0);
      navigation.reset();
      callback2(result, false);
    };
    const onTouchesUpResult = GestureObjects.LongPress().minDuration(hitSlop(pressRetentionOffset[5]).INT32_MAX).maxDistance(hitSlop(pressRetentionOffset[5]).INT32_MAX).cancelsTouchesInView(false).onTouchesDown(fn).onTouchesUp(fn2);
    fn3.__closure = { gestureTouchToPressableEvent: hitSlop(pressRetentionOffset[6]).gestureTouchToPressableEvent, stateMachine: closure_30, handlePressOut: closure_29 };
    fn3.__workletHash = 8223505277740;
    fn3.__initData = closure_17;
    obj1 = { gestureTouchToPressableEvent: hitSlop(pressRetentionOffset[6]).gestureTouchToPressableEvent, stateMachine: closure_30, handlePressOut: closure_29 };
    const fn4 = function t(arg0, arg1) {

    };
    const onTouchesCancelledResult = onTouchesUpResult.onTouchesCancelled(fn3);
    fn4.__closure = { Platform: onPressOut, stateMachine: closure_30, StateMachineEvent: hitSlop(pressRetentionOffset[9]).StateMachineEvent, handleFinalize: closure_27 };
    fn4.__workletHash = 946627735228;
    fn4.__initData = closure_16;
    return onTouchesCancelledResult.onFinalize(fn4);
  }, items9);
  if (typeof style === "function") {
    obj = { pressed: null };
    obj[0] = tmp4;
    style = style(obj);
  }
  let childrenResult = children;
  if (typeof children === "function") {
    obj = { pressed: null };
    obj[0] = tmp4;
    childrenResult = children(obj);
  }
  const items13 = [android_ripple];
  const items14 = [onLayout];
  const applyResult = GestureObjects.Simultaneous.apply(items12);
  const tmp27 = onHoverOut(() => {
    let color;
    if (android_ripple != null) {
      color = tmp.color;
    }
    if (color == null) {
      color = str;
    }
    return color;
  }, items13);
  obj1 = { gesture: applyResult, children: null };
  let obj2 = {};
  const merged = Object.assign(tmp);
  obj2.needsOffscreenAlphaCompositing = true;
  obj2.onLayout = unstable_pressDelay((nativeEvent) => {
    if (onLayout != null) {
      tmp(nativeEvent);
    }
    closure_20.current = nativeEvent.nativeEvent.layout;
  }, items14);
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
  let tmp34;
  if (android_ripple) {
    tmp34 = onPress;
  }
  obj2.testOnly_onPress = tmp34;
  let tmp35;
  if (android_ripple) {
    tmp35 = onPressIn;
  }
  obj2.testOnly_onPressIn = tmp35;
  let tmp36;
  if (android_ripple) {
    tmp36 = onPressOut;
  }
  obj2.testOnly_onPressOut = tmp36;
  let tmp37;
  if (android_ripple) {
    tmp37 = onLongPress;
  }
  obj2.testOnly_onLongPress = tmp37;
  const items16 = [childrenResult, null];
  obj2.children = items16;
  obj1[1] = onLayout(hitSlop(pressRetentionOffset[13]).ButtonComponent, obj2);
  return onLongPress(hitSlop(pressRetentionOffset[12]).GestureDetector, obj1);
};
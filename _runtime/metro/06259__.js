// === Module 6259: ? ===

// Module 6259
import react_native from "react-native" /* 17 */;
import _mod6241 from "module_6241" /* 6241 */;
import react_native2 from "react-native" /* 6244 */;
import GestureObjects2 from "GestureObjects" /* 6260 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import module_6145 from "tagMessage" /* 6145 */;

let __initData, __initData3, __initData4, __initData5;

let c9;
let closure_12;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let closure_2 = ["testOnly_pressed", "hitSlop", "pressRetentionOffset", "delayHoverIn", "delayHoverOut", "delayLongPress", "unstable_pressDelay", "onHoverIn", "onHoverOut", "onPress", "onPressIn", "onPressOut", "onLongPress", "onLayout", "style", "children", "android_disableSound", "android_ripple", "disabled", "accessible", "simultaneousWithExternalGesture", "requireExternalGestureToFail", "blocksExternalGesture"];
let react = react_mod;
({ useCallback: hasOwnProperty, useEffect: metroRequire, useMemo: metroImportDefault, useRef: metroImportAll, useState: c9 } = react);
react = react_mod;
const Platform = react_native.Platform;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = module_6145.isTestEnv();
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
  let ButtonComponent;
  let __initData8;
  let accessible;
  let android_disableSound;
  let android_ripple;
  let blocksExternalGesture;
  let children;
  let disabled;
  let hitSlop;
  let items15;
  let items16;
  let obj6;
  let radius;
  let requireExternalGestureToFail;
  let simultaneousWithExternalGesture;
  let style;
  let testOnly_pressed;
  let tmp30;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp4;
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
  const tmp = delayLongPress(pressRetentionOffset, delayHoverIn);
  __initData = { simultaneousWithExternalGesture, requireExternalGestureToFail, blocksExternalGesture };
  let tmp2 = onPressIn;
  if (testOnly_pressed == null) {
    testOnly_pressed = false;
  }
  [tmp4, closure_15] = delayHoverOut(tmp2(testOnly_pressed), 2);
  const tmp3 = delayHoverOut(tmp2(testOnly_pressed), 2);
  __initData3 = onPress(null);
  __initData4 = onPress(null);
  __initData5 = onPress(true);
  const __initData6 = onPress(false);
  const ref = onPress({ width: 0, height: 0 });
  const items = [hitSlop];
  const tmp5 = onHoverOut(() => {
    let numberAsInsetResult;
    if (typeof hitSlop === "number") {
      const obj2 = _mod6241;
      numberAsInsetResult = obj2.numberAsInset(hitSlop);
    } else {
      numberAsInsetResult = hitSlop;
      if (hitSlop == null) {
        numberAsInsetResult = {};
      }
    }
    return numberAsInsetResult;
  }, items);
  const __initData7 = tmp5;
  const items1 = [pressRetentionOffset];
  const tmp6 = onHoverOut(() => {
    let numberAsInsetResult;
    if (typeof pressRetentionOffset === "number") {
      const obj2 = _mod6241;
      numberAsInsetResult = obj2.numberAsInset(pressRetentionOffset);
    } else {
      numberAsInsetResult = pressRetentionOffset;
      if (pressRetentionOffset == null) {
        numberAsInsetResult = {};
      }
    }
    return numberAsInsetResult;
  }, items1);
  let obj = hitSlop(pressRetentionOffset[6]);
  const addInsetsResult = obj.addInsets(tmp5, tmp6);
  const tmp8 = unstable_pressDelay(() => {
    if (__initData3.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(__initData3.current);
      __initData3.current = null;
      __initData5.current = true;
    }
  }, []);
  const __initData9 = tmp8;
  let tmp9 = unstable_pressDelay(() => {
    if (__initData4.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(__initData4.current);
      __initData4.current = null;
    }
  }, []);
  let closure_24 = tmp9;
  const items2 = [onLongPress, tmp8, delayLongPress];
  const tmp10 = unstable_pressDelay((arg0) => {
    let closure_0 = arg0;
    if (onLongPress) {
      __initData9();
      let num = delayLongPress;
      const _setTimeout = setTimeout;
      if (delayLongPress == null) {
        num = 500;
      }
      closure_16.current = _setTimeout(() => {
        __initData5.current = false;
        onLongPress(closure_0);
      }, num);
    }
  }, items2);
  let closure_25 = tmp10;
  const items3 = [onPressIn, tmp10];
  const tmp11 = unstable_pressDelay((arg0) => {
    if (onPressIn != null) {
      tmp(arg0);
    }
    closure_25(arg0);
    __initData2(true);
    if (__initData4.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(__initData4.current);
      __initData4.current = null;
    }
  }, items3);
  let closure_26 = tmp11;
  const items4 = [tmp9, tmp8];
  const tmp12 = unstable_pressDelay(() => {
    __initData6.current = false;
    __initData9();
    closure_24();
    __initData2(false);
  }, items4);
  const handleFinalize = tmp12;
  const items5 = [tmp11, tmp5, unstable_pressDelay];
  const tmp13 = unstable_pressDelay((nativeEvent) => {
    let closure_0 = nativeEvent;
    const changedTouches = nativeEvent.nativeEvent.changedTouches;
    const obj = hitSlop(pressRetentionOffset[6]);
    if (obj.isTouchWithinInset(ref.current, closure_21, changedTouches.at(-1))) {
      closure_19.current = true;
      if (unstable_pressDelay) {
        const _setTimeout = setTimeout;
        closure_17.current = setTimeout(() => {
          closure_26(nativeEvent);
        }, tmp2);
      } else {
        closure_26(nativeEvent);
      }
    }
  }, items5);
  let closure_28 = tmp13;
  const items6 = [tmp12, tmp11, onPress, onPressOut];
  const tmp14 = unstable_pressDelay((arg0) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    if (__initData6.current) {
      tmp.current = false;
      if (__initData4.current) {
        closure_26(arg0);
      }
      if (onPressOut != null) {
        onPressOut(arg0);
      }
      const tmp9 = __initData5.current && flag;
      if (tmp9) {
        if (onPress != null) {
          onPress(arg0);
        }
      }
      handleFinalize();
    }
  }, items6);
  const handlePressOut = tmp14;
  const tmp15 = onHoverOut(() => {
    const pressableStateMachine = new hitSlop(pressRetentionOffset[7]).PressableStateMachine();
    return pressableStateMachine;
  }, []);
  const stateMachine = tmp15;
  let obj2 = hitSlop(pressRetentionOffset[8]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  const items7 = [tmp13, tmp14, tmp15, isScreenReaderEnabled];
  onHoverIn(() => {
    const obj = react_native2;
    stateMachine.setStates(obj.getStatesConfig(closure_28, handlePressOut, isScreenReaderEnabled));
  }, items7);
  const hoverInTimeout = onPress(null);
  const hoverOutTimeout = onPress(null);
  const items8 = [delayHoverIn, delayHoverOut, onHoverIn, onHoverOut];
  const items9 = [tmp15, tmp12, tmp14, isScreenReaderEnabled];
  const items10 = [tmp15, tmp14, tmp12, isScreenReaderEnabled];
  let closure_34 = tmp20;
  const items11 = [, , ];
  const tmp18 = onHoverOut(() => {
    let ref2;
    const GestureObjects = GestureObjects2.GestureObjects;
    const HoverResult = GestureObjects.Hover();
    const fn = function n(handlerTag) {
      let closure_0 = handlerTag;
      if (ref2.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      if (closure_2) {
        const _setTimeout = setTimeout;
        closure_32.current = setTimeout(() => {
          let tmpResult;
          if (onHoverIn != null) {
            const obj = hitSlop(pressRetentionOffset[6]);
            tmpResult = tmp(obj.gestureToPressableEvent(handlerTag));
          }
          return tmpResult;
        }, tmp4);
      } else if (closure_6 != null) {
        let obj = hitSlop(pressRetentionOffset[6]);
        tmp5(obj.gestureToPressableEvent(handlerTag));
      }
    };
    const manualActivationResult = HoverResult.manualActivation(true);
    const cancelsTouchesInViewResult = manualActivationResult.cancelsTouchesInView(false);
    let obj = { hoverOutTimeout, clearTimeout: clearTimeout, delayHoverIn, hoverInTimeout, setTimeout: setTimeout, onHoverIn, gestureToPressableEvent: _mod6241.gestureToPressableEvent };
    fn.__closure = obj;
    fn.__workletHash = 145410820733;
    fn.__initData = __initData2;
    const fn2 = function t(handlerTag) {
      let closure_0 = handlerTag;
      if (ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      if (closure_3) {
        const _setTimeout = setTimeout;
        closure_33.current = setTimeout(() => {
          let tmpResult;
          if (onHoverOut != null) {
            const obj = hitSlop(pressRetentionOffset[6]);
            tmpResult = tmp(obj.gestureToPressableEvent(handlerTag));
          }
          return tmpResult;
        }, tmp4);
      } else if (closure_7 != null) {
        let obj = hitSlop(pressRetentionOffset[6]);
        tmp5(obj.gestureToPressableEvent(handlerTag));
      }
    };
    const onBeginResult = cancelsTouchesInViewResult.onBegin(fn);
    fn2.__closure = { hoverInTimeout, clearTimeout: clearTimeout, delayHoverOut, hoverOutTimeout, setTimeout: setTimeout, onHoverOut, gestureToPressableEvent: _mod6241.gestureToPressableEvent };
    fn2.__workletHash = 117886059607;
    fn2.__initData = __initData;
    ({ hoverInTimeout, clearTimeout: clearTimeout, delayHoverOut, hoverOutTimeout, setTimeout: setTimeout, onHoverOut, gestureToPressableEvent: _mod6241.gestureToPressableEvent });
    return onBeginResult.onFinalize(fn2);
  }, items8);
  const tmp19 = onHoverOut(() => {
    const GestureObjects = GestureObjects2.GestureObjects;
    const LongPressResult = GestureObjects.LongPress();
    const minDurationResult = LongPressResult.minDuration(module_6145.INT32_MAX);
    const fn = function o(handlerTag) {
      const obj = hitSlop(pressRetentionOffset[6]);
      const result = obj.gestureTouchToPressableEvent(handlerTag);
      navigation.handleEvent(hitSlop(pressRetentionOffset[9]).StateMachineEvent.LONG_PRESS_TOUCHES_DOWN, result);
    };
    const maxDistanceResult = minDurationResult.maxDistance(module_6145.INT32_MAX);
    const cancelsTouchesInViewResult = maxDistanceResult.cancelsTouchesInView(false);
    let obj = { gestureTouchToPressableEvent: _mod6241.gestureTouchToPressableEvent, stateMachine, StateMachineEvent: react_native2.StateMachineEvent };
    fn.__closure = obj;
    fn.__workletHash = 5538605329543;
    fn.__initData = __initData6;
    const fn2 = function s() {
      if (!isScreenReaderEnabled) {
        navigation.reset();
        handleFinalize();
      }
    };
    const obj2 = { Platform, isScreenReaderEnabled, stateMachine, handleFinalize };
    fn2.__closure = obj2;
    fn2.__workletHash = 8055694403599;
    fn2.__initData = __initData5;
    const fn3 = function n(handlerTag) {
      const obj = hitSlop(pressRetentionOffset[6]);
      const result = obj.gestureTouchToPressableEvent(handlerTag);
      navigation.reset();
      handlePressOut(result, false);
    };
    const onTouchesDownResult = cancelsTouchesInViewResult.onTouchesDown(fn);
    const onTouchesUpResult = onTouchesDownResult.onTouchesUp(fn2);
    fn3.__closure = { gestureTouchToPressableEvent: _mod6241.gestureTouchToPressableEvent, stateMachine, handlePressOut };
    fn3.__workletHash = 8223505277740;
    fn3.__initData = __initData4;
    ({ gestureTouchToPressableEvent: _mod6241.gestureTouchToPressableEvent, stateMachine, handlePressOut });
    const fn4 = function t(arg0, arg1) {

    };
    const onTouchesCancelledResult = onTouchesUpResult.onTouchesCancelled(fn3);
    fn4.__closure = { Platform, stateMachine, StateMachineEvent: react_native2.StateMachineEvent, handleFinalize };
    fn4.__workletHash = 946627735228;
    fn4.__initData = __initData3;
    ({ Platform, stateMachine, StateMachineEvent: react_native2.StateMachineEvent, handleFinalize });
    return onTouchesCancelledResult.onFinalize(fn4);
  }, items9);
  items11[0] = onHoverOut(() => {
    const GestureObjects = GestureObjects2.GestureObjects;
    const fn = function o(handlerTag) {
      const obj = hitSlop(pressRetentionOffset[6]);
      const result = obj.gestureTouchToPressableEvent(handlerTag);
      navigation.reset();
      handlePressOut(result, false);
    };
    const NativeResult = GestureObjects.Native();
    let obj = { Platform, gestureTouchToPressableEvent: _mod6241.gestureTouchToPressableEvent, stateMachine, handlePressOut };
    fn.__closure = obj;
    fn.__workletHash = 9061249296673;
    fn.__initData = __initData9;
    const fn2 = function s() {
      const handleEvent = navigation.handleEvent;
      const NATIVE_BEGIN = hitSlop(pressRetentionOffset[9]).StateMachineEvent.NATIVE_BEGIN;
      if (isScreenReaderEnabled) {
        const obj = hitSlop(pressRetentionOffset[6]);
        handleEvent(NATIVE_BEGIN, obj.viewCenterToPressableEvent(ref.current));
      } else {
        handleEvent(NATIVE_BEGIN);
      }
    };
    const onTouchesCancelledResult = NativeResult.onTouchesCancelled(fn);
    fn2.__closure = { Platform, isScreenReaderEnabled, stateMachine, StateMachineEvent: react_native2.StateMachineEvent, viewCenterToPressableEvent: _mod6241.viewCenterToPressableEvent, dimensions: ref };
    fn2.__workletHash = 9788273325262;
    fn2.__initData = __initData8;
    ({ Platform, isScreenReaderEnabled, stateMachine, StateMachineEvent: react_native2.StateMachineEvent, viewCenterToPressableEvent: _mod6241.viewCenterToPressableEvent, dimensions: ref });
    const fn3 = function n() {

    };
    const onBeginResult = onTouchesCancelledResult.onBegin(fn2);
    fn3.__closure = { Platform, stateMachine, StateMachineEvent: react_native2.StateMachineEvent };
    fn3.__workletHash = 1583717288778;
    fn3.__initData = __initData7;
    ({ Platform, stateMachine, StateMachineEvent: react_native2.StateMachineEvent });
    const fn4 = function t(arg0, arg1) {
      const handleEvent = navigation.handleEvent;
      const StateMachineEvent = hitSlop(pressRetentionOffset[9]).StateMachineEvent;
      const tmp2 = arg1;
      if (tmp2) {
        handleEvent(StateMachineEvent.FINALIZE);
      } else {
        handleEvent(StateMachineEvent.CANCEL);
      }
      handleFinalize();
    };
    const onStartResult = onBeginResult.onStart(fn3);
    fn4.__closure = { Platform, stateMachine, StateMachineEvent: react_native2.StateMachineEvent, handleFinalize };
    fn4.__workletHash = 13697558324309;
    fn4.__initData = ref;
    ({ Platform, stateMachine, StateMachineEvent: react_native2.StateMachineEvent, handleFinalize });
    const onFinalizeResult = onStartResult.onFinalize(fn4);
    return onFinalizeResult.shouldActivateOnStart(false);
  }, items10);
  items11[1] = tmp19;
  items11[2] = tmp18;
  function _loop(iter) {
    let closure_0 = iter;
    iter.enabled(closure_34);
    iter.runOnJS(true);
    iter.hitSlop(addInsetsResult);
    const entries = Object.entries(__initData);
    const item = entries.forEach((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      const obj = hitSlop(pressRetentionOffset[11]);
      obj.applyRelationProp(closure_0, tmp, tmp2);
    });
  }
  const iter = items11[Symbol.iterator]();
  while (iter !== undefined) {
    let _loopResult = _loop(iter.next());
    continue;
  }
  let GestureObjects = hitSlop(pressRetentionOffset[10]).GestureObjects;
  const items12 = [...items11];
  let style1 = style;
  const applyResult = GestureObjects.Simultaneous.apply(items12);
  if (typeof style === "function") {
    const obj3 = { pressed: tmp4 };
    style1 = style(obj3);
  }
  let childrenResult = children;
  if (typeof children === "function") {
    const obj4 = { pressed: tmp4 };
    childrenResult = children(obj4);
  }
  const items13 = [android_ripple];
  const items14 = [onLayout];
  const tmp27 = onHoverOut(() => {
    let color;
    if (android_ripple != null) {
      color = android_ripple.color;
    }
    if (color == null) {
      color = str;
    }
    return color;
  }, items13);
  const obj5 = { gesture: applyResult, children: tmp30(ButtonComponent, obj6) };
  const tmp28 = unstable_pressDelay((nativeEvent) => {
    if (onLayout != null) {
      tmp(nativeEvent);
    }
    ref.current = nativeEvent.nativeEvent.layout;
  }, items14);
  const GestureDetector = tmp22(tmp23[12]).GestureDetector;
  obj6 = { needsOffscreenAlphaCompositing: true, onLayout: tmp28, accessible: false !== accessible, hitSlop: addInsetsResult, enabled: true !== disabled, touchSoundDisabled: android_disableSound, rippleColor: tmp27, rippleRadius: radius, style: items15, testOnly_onPress: tmp34, testOnly_onPressIn: tmp35, testOnly_onPressOut: tmp36, testOnly_onLongPress: tmp37, children: items16 };
  ButtonComponent = tmp22(tmp23[13]).ButtonComponent;
  const merged = Object.assign(tmp);
  radius = undefined;
  const tmp29 = onLongPress;
  tmp30 = onLayout;
  if (android_ripple != null) {
    radius = android_ripple.radius;
  }
  items15 = [{}, style1];
  tmp34 = undefined;
  if (android_ripple) {
    tmp34 = onPress;
  }
  tmp35 = undefined;
  if (android_ripple) {
    tmp35 = onPressIn;
  }
  tmp36 = undefined;
  if (android_ripple) {
    tmp36 = onPressOut;
  }
  tmp37 = undefined;
  if (android_ripple) {
    tmp37 = onLongPress;
  }
  items16 = [childrenResult, null];
  return tmp29(GestureDetector, obj5);
};
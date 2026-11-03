// === Module 5545: ? ===

// Module 5545
import tagMessage2 from "tagMessage" /* 5431 */;
import touchDataToPressEvent from "touchDataToPressEvent" /* 5527 */;
import StateMachineEvent from "StateMachineEvent" /* 5530 */;
import GestureObjects2 from "GestureObjects" /* 5546 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop_mod from "module_19" /* 19 */;

require = fn;
let closure_2 = ["testOnly_pressed", "hitSlop", "pressRetentionOffset", "delayHoverIn", "delayHoverOut", "delayLongPress", "unstable_pressDelay", "onHoverIn", "onHoverOut", "onPress", "onPressIn", "onPressOut", "onLongPress", "onLayout", "style", "children", "android_disableSound", "android_ripple", "disabled", "accessible", "simultaneousWithExternalGesture", "requireExternalGestureToFail", "blocksExternalGesture"];
let noop = fn(19);
({ useCallback: hasOwnProperty, useEffect: metroRequire, useMemo: closure_7, useRef: closure_8, useState: closure_9 } = noop);
let noop = noop_mod;
const Platform = fn(17).Platform;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const tagMessage = fn(5431);
let closure_13 = tagMessage.isTestEnv();
let closure_14 = { code: "(function pnpm_PressableTsx1(event){let[hoverOutTimeout,delayHoverIn,hoverInTimeout,onHoverIn,gestureToPressableEvent]=this.__closure;var _onHoverIn2;if(hoverOutTimeout.current){clearTimeout(hoverOutTimeout.current);}if(delayHoverIn){hoverInTimeout.current=setTimeout(function(){var _onHoverIn;return(_onHoverIn=onHoverIn)===null||_onHoverIn===void 0?void 0:_onHoverIn(gestureToPressableEvent(event));},delayHoverIn);return;}(_onHoverIn2=onHoverIn)===null||_onHoverIn2===void 0||_onHoverIn2(gestureToPressableEvent(event));})" };
let closure_15 = { code: "(function pnpm_PressableTsx2(event){let[hoverInTimeout,delayHoverOut,hoverOutTimeout,onHoverOut,gestureToPressableEvent]=this.__closure;var _onHoverOut2;if(hoverInTimeout.current){clearTimeout(hoverInTimeout.current);}if(delayHoverOut){hoverOutTimeout.current=setTimeout(function(){var _onHoverOut;return(_onHoverOut=onHoverOut)===null||_onHoverOut===void 0?void 0:_onHoverOut(gestureToPressableEvent(event));},delayHoverOut);return;}(_onHoverOut2=onHoverOut)===null||_onHoverOut2===void 0||_onHoverOut2(gestureToPressableEvent(event));})" };
let closure_16 = { code: "(function pnpm_PressableTsx3(event){let[gestureTouchToPressableEvent,stateMachine,StateMachineEvent]=this.__closure;const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.handleEvent(StateMachineEvent.LONG_PRESS_TOUCHES_DOWN,pressableEvent);})" };
let closure_17 = { code: "(function pnpm_PressableTsx4(){let[Platform,isScreenReaderEnabled,stateMachine,handleFinalize]=this.__closure;if(Platform.OS==='android'&&!isScreenReaderEnabled){stateMachine.reset();handleFinalize();}})" };
let closure_18 = { code: "(function pnpm_PressableTsx5(event){let[gestureTouchToPressableEvent,stateMachine,handlePressOut]=this.__closure;const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.reset();handlePressOut(pressableEvent,false);})" };
let closure_19 = { code: "(function pnpm_PressableTsx6(_event,success){let[Platform,stateMachine,StateMachineEvent,handleFinalize]=this.__closure;if(Platform.OS==='web'){if(success){stateMachine.handleEvent(StateMachineEvent.FINALIZE);}else{stateMachine.handleEvent(StateMachineEvent.CANCEL);}handleFinalize();}})" };
let closure_20 = { code: "(function pnpm_PressableTsx7(event){let[Platform,gestureTouchToPressableEvent,stateMachine,handlePressOut]=this.__closure;if(Platform.OS!=='macos'&&Platform.OS!=='web'){const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.reset();handlePressOut(pressableEvent,false);}})" };
let closure_21 = { code: "(function pnpm_PressableTsx8(){let[Platform,isScreenReaderEnabled,stateMachine,StateMachineEvent,viewCenterToPressableEvent,dimensions]=this.__closure;if(Platform.OS==='android'&&isScreenReaderEnabled){stateMachine.handleEvent(StateMachineEvent.NATIVE_BEGIN,viewCenterToPressableEvent(dimensions.current));return;}stateMachine.handleEvent(StateMachineEvent.NATIVE_BEGIN);})" };
let closure_22 = { code: "(function pnpm_PressableTsx9(){let[Platform,stateMachine,StateMachineEvent]=this.__closure;if(Platform.OS!=='android'){stateMachine.handleEvent(StateMachineEvent.NATIVE_START);}})" };
let closure_23 = { code: "(function pnpm_PressableTsx10(_event,success){let[Platform,stateMachine,StateMachineEvent,handleFinalize]=this.__closure;if(Platform.OS!=='web'){if(success){stateMachine.handleEvent(StateMachineEvent.FINALIZE);}else{stateMachine.handleEvent(StateMachineEvent.CANCEL);}if(Platform.OS!=='ios'){handleFinalize();}}})" };

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
  let tmp = delayLongPress(pressRetentionOffset, delayHoverIn);
  [tmp4, closure_15] = delayHoverOut(onPressIn(testOnly_pressed), 2);
  onPress(null);
  onPress(null);
  onPress(true);
  onPress(false);
  onPress({ width: 0, height: 0 });
  items = [hitSlop];
  const tmp5 = onHoverOut(() => {
    if (typeof hitSlop === "number") {
      let numberAsInsetResult = touchDataToPressEvent.numberAsInset(hitSlop);
    } else {
      numberAsInsetResult = hitSlop;
      if (hitSlop == null) {
        numberAsInsetResult = {};
      }
    }
    return numberAsInsetResult;
  }, items);
  closure_21 = tmp5;
  let items1 = [pressRetentionOffset];
  let tmp3 = delayHoverOut(onPressIn(testOnly_pressed), 2);
  const tmp6 = onHoverOut(() => {
    if (typeof pressRetentionOffset === "number") {
      let numberAsInsetResult = touchDataToPressEvent.numberAsInset(pressRetentionOffset);
    } else {
      numberAsInsetResult = pressRetentionOffset;
      if (pressRetentionOffset == null) {
        numberAsInsetResult = {};
      }
    }
    return numberAsInsetResult;
  }, items1);
  const addInsetsResult = hitSlop(pressRetentionOffset[6]).addInsets(tmp5, tmp6);
  const tmp8 = unstable_pressDelay(() => {
    if (ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
      closure_18.current = true;
    }
  }, []);
  closure_23 = tmp8;
  let tmp9 = unstable_pressDelay(() => {
    if (ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref2.current);
      ref2.current = null;
    }
  }, []);
  closure_24 = tmp9;
  let items2 = [onLongPress, tmp8, delayLongPress];
  const tmp10 = unstable_pressDelay((arg0) => {
    closure_0 = arg0;
    if (onLongPress) {
      closure_23();
      let num = delayLongPress;
      if (delayLongPress == null) {
        num = 500;
      }
      closure_16.current = setTimeout(() => {
        closure_18.current = false;
        onLongPress(closure_0);
      }, num);
    }
  }, items2);
  closure_25 = tmp10;
  let items3 = [onPressIn, tmp10];
  const tmp11 = unstable_pressDelay((arg0) => {
    if (onPressIn != null) {
      tmp(arg0);
    }
    closure_25(arg0);
    closure_1_15(true);
    if (ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref2.current);
      ref2.current = null;
    }
  }, items3);
  closure_26 = tmp11;
  let items4 = [tmp9, tmp8];
  const tmp12 = unstable_pressDelay(() => {
    closure_19.current = false;
    closure_23();
    closure_24();
    closure_1_15(false);
  }, items4);
  closure_27 = tmp12;
  let items5 = [tmp11, tmp5, unstable_pressDelay];
  const tmp13 = unstable_pressDelay((nativeEvent) => {
    closure_0 = nativeEvent;
    const changedTouches = nativeEvent.nativeEvent.changedTouches;
    if (obj.isTouchWithinInset(ref5.current, closure_21, changedTouches.at(-1))) {
      closure_19.current = true;
      if (unstable_pressDelay) {
        const _setTimeout = setTimeout;
        closure_17.current = setTimeout(() => {
          closure_26(closure_0);
        }, tmp2);
      } else {
        closure_26(nativeEvent);
      }
    }
    obj = hitSlop(pressRetentionOffset[6]);
  }, items5);
  closure_28 = tmp13;
  let items6 = [tmp12, tmp11, onPress, onPressOut];
  const tmp14 = unstable_pressDelay((arg0) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    if (ref4.current) {
      tmp.current = false;
      if (ref2.current) {
        closure_26(arg0);
      }
      if (onPressOut != null) {
        onPressOut(arg0);
      }
      if (tmp9) {
        if (onPress != null) {
          onPress(arg0);
        }
      }
      closure_27();
      tmp9 = ref3.current && flag;
    }
  }, items6);
  closure_29 = tmp14;
  const tmp15 = onHoverOut(() => {
    const pressableStateMachine = new hitSlop(pressRetentionOffset[7]).PressableStateMachine();
    return pressableStateMachine;
  }, []);
  const states = tmp15;
  let obj = hitSlop(pressRetentionOffset[6]);
  const isScreenReaderEnabled = hitSlop(pressRetentionOffset[8]).useIsScreenReaderEnabled();
  let items7 = [tmp13, tmp14, tmp15, isScreenReaderEnabled];
  onHoverIn(() => {
    states.setStates(StateMachineEvent.getStatesConfig(closure_28, closure_29, isScreenReaderEnabled));
  }, items7);
  closure_32 = onPress(null);
  closure_33 = onPress(null);
  const items8 = [delayHoverIn, delayHoverOut, onHoverIn, onHoverOut];
  const items9 = [tmp15, tmp12, tmp14, isScreenReaderEnabled];
  let obj2 = hitSlop(pressRetentionOffset[8]);
  const items10 = [tmp15, tmp14, tmp12, isScreenReaderEnabled];
  const tmp18 = onHoverOut(() => {
    const GestureObjects = GestureObjects2.GestureObjects;
    const HoverResult = GestureObjects.Hover();
    const manualActivationResult = GestureObjects.Hover().manualActivation(true);
    items = [closure_14, closure_33, delayHoverIn, closure_32, onHoverIn, touchDataToPressEvent.gestureToPressableEvent];
    [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
    function pnpm_PressableTsx1(arg0) {
      _undefined = arg0;
      if (_undefined.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      if (c1) {
        const _setTimeout = setTimeout;
        c2.current = setTimeout(() => {
          let tmpResult;
          if (c3 != null) {
            tmpResult = tmp(c4(closure_0));
          }
          return tmpResult;
        }, tmp4);
      } else if (c3 != null) {
        tmp5(_undefined2(arg0));
      }
    }
    const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10];
    pnpm_PressableTsx1.__closure = items1;
    pnpm_PressableTsx1.__workletHash = 2197594387164;
    pnpm_PressableTsx1.__initData = tmp5;
    const cancelsTouchesInViewResult = GestureObjects.Hover().manualActivation(true).cancelsTouchesInView(false);
    const items2 = [closure_15, closure_32, delayHoverOut, closure_33, onHoverOut, touchDataToPressEvent.gestureToPressableEvent];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items2;
    function pnpm_PressableTsx2(arg0) {
      _undefined = arg0;
      if (_undefined.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      if (c1) {
        const _setTimeout = setTimeout;
        c2.current = setTimeout(() => {
          let tmpResult;
          if (c3 != null) {
            tmpResult = tmp(c4(closure_0));
          }
          return tmpResult;
        }, tmp4);
      } else if (c3 != null) {
        tmp5(_undefined2(arg0));
      }
    }
    const items3 = [tmp12, tmp13, tmp14, tmp15, tmp16];
    pnpm_PressableTsx2.__closure = items3;
    pnpm_PressableTsx2.__workletHash = 15483873706614;
    pnpm_PressableTsx2.__initData = tmp11;
    return GestureObjects.Hover().manualActivation(true).cancelsTouchesInView(false).onBegin(pnpm_PressableTsx1).onFinalize(pnpm_PressableTsx2);
  }, items8);
  closure_34 = tmp20;
  const items11 = [
    onHoverOut(() => {
      const GestureObjects = GestureObjects2.GestureObjects;
      items = [closure_20, Platform, touchDataToPressEvent.gestureTouchToPressableEvent, closure_30, closure_29];
      [tmp5, tmp6, tmp7, tmp8, tmp9] = items;
      function pnpm_PressableTsx7(arg0) {
        if ("macos" !== _undefined.OS) {
          if ("web" !== _undefined.OS) {
            _undefined3.reset();
            _undefined4(_undefined2(arg0), false);
            const tmp3 = _undefined2(arg0);
          }
        }
      }
      const items1 = [tmp6, tmp7, tmp8, tmp9];
      pnpm_PressableTsx7.__closure = items1;
      pnpm_PressableTsx7.__workletHash = 10748986980398;
      pnpm_PressableTsx7.__initData = tmp5;
      const NativeResult = GestureObjects.Native();
      const items2 = [closure_21, Platform, isScreenReaderEnabled, closure_30, StateMachineEvent.StateMachineEvent, touchDataToPressEvent.viewCenterToPressableEvent, closure_20];
      c4 = undefined;
      c5 = undefined;
      [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items2;
      function pnpm_PressableTsx8() {
        if ("android" === _undefined.OS) {
          if (c1) {
            _undefined3.handleEvent(_undefined4.NATIVE_BEGIN, _undefined5(_undefined6.current));
          }
        }
        _undefined3.handleEvent(_undefined4.NATIVE_BEGIN);
      }
      const items3 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_PressableTsx8.__closure = items3;
      pnpm_PressableTsx8.__workletHash = 5621213784566;
      pnpm_PressableTsx8.__initData = tmp10;
      const onTouchesCancelledResult = GestureObjects.Native().onTouchesCancelled(pnpm_PressableTsx7);
      const items4 = [closure_22, Platform, closure_30, StateMachineEvent.StateMachineEvent];
      [tmp17, tmp18, tmp19, tmp20] = items4;
      function pnpm_PressableTsx9() {
        if ("android" !== _undefined.OS) {
          _undefined2.handleEvent(_undefined3.NATIVE_START);
        }
      }
      const items5 = [tmp18, tmp19, tmp20];
      pnpm_PressableTsx9.__closure = items5;
      pnpm_PressableTsx9.__workletHash = 1749228919026;
      pnpm_PressableTsx9.__initData = tmp17;
      const onBeginResult = GestureObjects.Native().onTouchesCancelled(pnpm_PressableTsx7).onBegin(pnpm_PressableTsx8);
      const items6 = [closure_23, Platform, closure_30, StateMachineEvent.StateMachineEvent, closure_27];
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      [tmp21, tmp22, tmp23, tmp24, tmp25] = items6;
      function pnpm_PressableTsx10(arg0, arg1) {
        if ("web" !== _undefined.OS) {
          const handleEvent = _undefined2.handleEvent;
          if (arg1) {
            handleEvent(constants.FINALIZE);
          } else {
            handleEvent(constants.CANCEL);
          }
          if ("ios" !== tmp.OS) {
            _undefined4();
          }
        }
      }
      const items7 = [tmp22, tmp23, tmp24, tmp25];
      pnpm_PressableTsx10.__closure = items7;
      pnpm_PressableTsx10.__workletHash = 15562564620826;
      pnpm_PressableTsx10.__initData = tmp21;
      const onStartResult = GestureObjects.Native().onTouchesCancelled(pnpm_PressableTsx7).onBegin(pnpm_PressableTsx8).onStart(pnpm_PressableTsx9);
      return GestureObjects.Native().onTouchesCancelled(pnpm_PressableTsx7).onBegin(pnpm_PressableTsx8).onStart(pnpm_PressableTsx9).onFinalize(pnpm_PressableTsx10).shouldActivateOnStart(false);
    }, items10),
    onHoverOut(() => {
      const GestureObjects = GestureObjects2.GestureObjects;
      const LongPressResult = GestureObjects.LongPress();
      const minDurationResult = GestureObjects.LongPress().minDuration(tagMessage2.INT32_MAX);
      const maxDistanceResult = GestureObjects.LongPress().minDuration(tagMessage2.INT32_MAX).maxDistance(tagMessage2.INT32_MAX);
      items = [closure_16, touchDataToPressEvent.gestureTouchToPressableEvent, closure_30, StateMachineEvent.StateMachineEvent];
      [tmp4, tmp5, tmp6, tmp7] = items;
      function pnpm_PressableTsx3(arg0) {
        _undefined2.handleEvent(_undefined3.LONG_PRESS_TOUCHES_DOWN, _undefined(arg0));
      }
      const items1 = [tmp5, tmp6, tmp7];
      pnpm_PressableTsx3.__closure = items1;
      pnpm_PressableTsx3.__workletHash = 609256038395;
      pnpm_PressableTsx3.__initData = tmp4;
      const cancelsTouchesInViewResult = GestureObjects.LongPress().minDuration(tagMessage2.INT32_MAX).maxDistance(tagMessage2.INT32_MAX).cancelsTouchesInView(false);
      const items2 = [closure_17, Platform, isScreenReaderEnabled, closure_30, closure_27];
      [tmp10, tmp11, tmp12, tmp13, tmp14] = items2;
      function pnpm_PressableTsx4() {
        if (!tmp) {
          _undefined3.reset();
          _undefined4();
        }
        tmp = "android" !== _undefined.OS || c1;
      }
      const items3 = [tmp11, tmp12, tmp13, tmp14];
      pnpm_PressableTsx4.__closure = items3;
      pnpm_PressableTsx4.__workletHash = 17273070663319;
      pnpm_PressableTsx4.__initData = tmp10;
      const onTouchesDownResult = GestureObjects.LongPress().minDuration(tagMessage2.INT32_MAX).maxDistance(tagMessage2.INT32_MAX).cancelsTouchesInView(false).onTouchesDown(pnpm_PressableTsx3);
      const items4 = [closure_18, touchDataToPressEvent.gestureTouchToPressableEvent, closure_30, closure_29];
      [tmp15, tmp16, tmp17, tmp18] = items4;
      function pnpm_PressableTsx5(arg0) {
        _undefined2.reset();
        _undefined3(_undefined(arg0), false);
      }
      const items5 = [tmp16, tmp17, tmp18];
      pnpm_PressableTsx5.__closure = items5;
      pnpm_PressableTsx5.__workletHash = 468722124596;
      pnpm_PressableTsx5.__initData = tmp15;
      const onTouchesUpResult = GestureObjects.LongPress().minDuration(tagMessage2.INT32_MAX).maxDistance(tagMessage2.INT32_MAX).cancelsTouchesInView(false).onTouchesDown(pnpm_PressableTsx3).onTouchesUp(pnpm_PressableTsx4);
      const items6 = [closure_19, Platform, closure_30, StateMachineEvent.StateMachineEvent, closure_27];
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      [tmp19, tmp20, tmp21, tmp22, tmp23] = items6;
      function pnpm_PressableTsx6(arg0, arg1) {
        if ("web" === _undefined.OS) {
          const handleEvent = _undefined2.handleEvent;
          let handleEventResult = c2;
          if (arg1) {
            handleEventResult = handleEvent(handleEventResult.FINALIZE);
          } else {
            handleEvent(handleEventResult.CANCEL);
          }
          _undefined4();
        }
      }
      const items7 = [tmp20, tmp21, tmp22, tmp23];
      pnpm_PressableTsx6.__closure = items7;
      pnpm_PressableTsx6.__workletHash = 16463885478272;
      pnpm_PressableTsx6.__initData = tmp19;
      return GestureObjects.LongPress().minDuration(tagMessage2.INT32_MAX).maxDistance(tagMessage2.INT32_MAX).cancelsTouchesInView(false).onTouchesDown(pnpm_PressableTsx3).onTouchesUp(pnpm_PressableTsx4).onTouchesCancelled(pnpm_PressableTsx5).onFinalize(pnpm_PressableTsx6);
    }, items9),
    tmp18
  ];
  function _loop(iter) {
    closure_0 = iter;
    iter.enabled(closure_34);
    iter.runOnJS(true);
    iter.hitSlop(addInsetsResult);
    const entries = Object.entries(closure_14);
    const item = entries.forEach((item) => {
      [tmp, tmp2] = item;
      hitSlop(pressRetentionOffset[11]).applyRelationProp(closure_0, tmp, tmp2);
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
  const tmp19 = onHoverOut(() => {
    const GestureObjects = GestureObjects2.GestureObjects;
    const LongPressResult = GestureObjects.LongPress();
    const minDurationResult = GestureObjects.LongPress().minDuration(tagMessage2.INT32_MAX);
    const maxDistanceResult = GestureObjects.LongPress().minDuration(tagMessage2.INT32_MAX).maxDistance(tagMessage2.INT32_MAX);
    items = [closure_16, touchDataToPressEvent.gestureTouchToPressableEvent, closure_30, StateMachineEvent.StateMachineEvent];
    [tmp4, tmp5, tmp6, tmp7] = items;
    function pnpm_PressableTsx3(arg0) {
      _undefined2.handleEvent(_undefined3.LONG_PRESS_TOUCHES_DOWN, _undefined(arg0));
    }
    const items1 = [tmp5, tmp6, tmp7];
    pnpm_PressableTsx3.__closure = items1;
    pnpm_PressableTsx3.__workletHash = 609256038395;
    pnpm_PressableTsx3.__initData = tmp4;
    const cancelsTouchesInViewResult = GestureObjects.LongPress().minDuration(tagMessage2.INT32_MAX).maxDistance(tagMessage2.INT32_MAX).cancelsTouchesInView(false);
    const items2 = [closure_17, Platform, isScreenReaderEnabled, closure_30, closure_27];
    [tmp10, tmp11, tmp12, tmp13, tmp14] = items2;
    function pnpm_PressableTsx4() {
      if (!tmp) {
        _undefined3.reset();
        _undefined4();
      }
      tmp = "android" !== _undefined.OS || c1;
    }
    const items3 = [tmp11, tmp12, tmp13, tmp14];
    pnpm_PressableTsx4.__closure = items3;
    pnpm_PressableTsx4.__workletHash = 17273070663319;
    pnpm_PressableTsx4.__initData = tmp10;
    const onTouchesDownResult = GestureObjects.LongPress().minDuration(tagMessage2.INT32_MAX).maxDistance(tagMessage2.INT32_MAX).cancelsTouchesInView(false).onTouchesDown(pnpm_PressableTsx3);
    const items4 = [closure_18, touchDataToPressEvent.gestureTouchToPressableEvent, closure_30, closure_29];
    [tmp15, tmp16, tmp17, tmp18] = items4;
    function pnpm_PressableTsx5(arg0) {
      _undefined2.reset();
      _undefined3(_undefined(arg0), false);
    }
    const items5 = [tmp16, tmp17, tmp18];
    pnpm_PressableTsx5.__closure = items5;
    pnpm_PressableTsx5.__workletHash = 468722124596;
    pnpm_PressableTsx5.__initData = tmp15;
    const onTouchesUpResult = GestureObjects.LongPress().minDuration(tagMessage2.INT32_MAX).maxDistance(tagMessage2.INT32_MAX).cancelsTouchesInView(false).onTouchesDown(pnpm_PressableTsx3).onTouchesUp(pnpm_PressableTsx4);
    const items6 = [closure_19, Platform, closure_30, StateMachineEvent.StateMachineEvent, closure_27];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    [tmp19, tmp20, tmp21, tmp22, tmp23] = items6;
    function pnpm_PressableTsx6(arg0, arg1) {
      if ("web" === _undefined.OS) {
        const handleEvent = _undefined2.handleEvent;
        let handleEventResult = c2;
        if (arg1) {
          handleEventResult = handleEvent(handleEventResult.FINALIZE);
        } else {
          handleEvent(handleEventResult.CANCEL);
        }
        _undefined4();
      }
    }
    const items7 = [tmp20, tmp21, tmp22, tmp23];
    pnpm_PressableTsx6.__closure = items7;
    pnpm_PressableTsx6.__workletHash = 16463885478272;
    pnpm_PressableTsx6.__initData = tmp19;
    return GestureObjects.LongPress().minDuration(tagMessage2.INT32_MAX).maxDistance(tagMessage2.INT32_MAX).cancelsTouchesInView(false).onTouchesDown(pnpm_PressableTsx3).onTouchesUp(pnpm_PressableTsx4).onTouchesCancelled(pnpm_PressableTsx5).onFinalize(pnpm_PressableTsx6);
  }, items9);
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
  const applyResult = GestureObjects.Simultaneous.apply(items12);
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
  const obj5 = { gesture: applyResult, children: null };
  const obj6 = {};
  const merged = Object.assign(tmp);
  obj6.needsOffscreenAlphaCompositing = true;
  obj6.onLayout = unstable_pressDelay((nativeEvent) => {
    if (onLayout != null) {
      tmp(nativeEvent);
    }
    closure_20.current = nativeEvent.nativeEvent.layout;
  }, items14);
  obj6.accessible = false !== accessible;
  obj6.hitSlop = addInsetsResult;
  obj6.enabled = true !== disabled;
  obj6.touchSoundDisabled = android_disableSound;
  obj6.rippleColor = tmp27;
  let radius;
  if (android_ripple != null) {
    radius = android_ripple.radius;
  }
  obj6.rippleRadius = radius;
  const items15 = [{}, style1];
  obj6.style = items15;
  let tmp34;
  if (android_ripple) {
    tmp34 = onPress;
  }
  obj6.testOnly_onPress = tmp34;
  let tmp35;
  if (android_ripple) {
    tmp35 = onPressIn;
  }
  obj6.testOnly_onPressIn = tmp35;
  let tmp36;
  if (android_ripple) {
    tmp36 = onPressOut;
  }
  obj6.testOnly_onPressOut = tmp36;
  let tmp37;
  if (android_ripple) {
    tmp37 = onLongPress;
  }
  obj6.testOnly_onLongPress = tmp37;
  const items16 = [childrenResult, null];
  obj6.children = items16;
  obj5.children = onLayout(hitSlop(pressRetentionOffset[13]).ButtonComponent, obj6);
  return onLongPress(hitSlop(pressRetentionOffset[12]).GestureDetector, obj5);
};
// === Module 5526: Pressable ===

// Module 5526 (Pressable)
import _mod5498 from "module_5498" /* 5498 */;
import touchDataToPressEvent from "touchDataToPressEvent" /* 5527 */;
import StateMachineEvent from "StateMachineEvent" /* 5530 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop_mod from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_2 = ["testOnly_pressed", "hitSlop", "pressRetentionOffset", "delayHoverIn", "delayHoverOut", "delayLongPress", "unstable_pressDelay", "onHoverIn", "onHoverOut", "onPress", "onPressIn", "onPressOut", "onLongPress", "onLayout", "style", "children", "android_disableSound", "android_ripple", "disabled", "accessible", "simultaneousWith", "requireToFail", "block"];
let noop = fn(19);
({ use: hasOwnProperty, useCallback: metroRequire, useEffect: closure_7, useMemo: closure_8, useRef: closure_9, useState: closure_10 } = noop);
let noop = noop_mod;
const Platform = fn(17).Platform;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const tagMessage = fn(5431);
let closure_14 = tagMessage.isTestEnv();
let closure_15 = { code: "(function pnpm_PressableTsx1(event){let[hoverOutTimeout,delayHoverIn,hoverInTimeout,onHoverIn,gestureToPressableEvent]=this.__closure;var _onHoverIn2;if(hoverOutTimeout.current){clearTimeout(hoverOutTimeout.current);}if(delayHoverIn){hoverInTimeout.current=setTimeout(function(){var _onHoverIn;return(_onHoverIn=onHoverIn)===null||_onHoverIn===void 0?void 0:_onHoverIn(gestureToPressableEvent(event));},delayHoverIn);return;}(_onHoverIn2=onHoverIn)===null||_onHoverIn2===void 0||_onHoverIn2(gestureToPressableEvent(event));})" };
let closure_16 = { code: "(function pnpm_PressableTsx2(event){let[hoverInTimeout,delayHoverOut,hoverOutTimeout,onHoverOut,gestureToPressableEvent]=this.__closure;var _onHoverOut2;if(hoverInTimeout.current){clearTimeout(hoverInTimeout.current);}if(delayHoverOut){hoverOutTimeout.current=setTimeout(function(){var _onHoverOut;return(_onHoverOut=onHoverOut)===null||_onHoverOut===void 0?void 0:_onHoverOut(gestureToPressableEvent(event));},delayHoverOut);return;}(_onHoverOut2=onHoverOut)===null||_onHoverOut2===void 0||_onHoverOut2(gestureToPressableEvent(event));})" };
let closure_17 = { code: "(function pnpm_PressableTsx3(event){let[captureKeyboardDismiss,dropKeyboardTapRef,gestureTouchToPressableEvent,stateMachine,StateMachineEvent]=this.__closure;captureKeyboardDismiss();if(dropKeyboardTapRef.current){return;}const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.handleEvent(StateMachineEvent.LONG_PRESS_TOUCHES_DOWN,pressableEvent);})" };
let closure_18 = { code: "(function pnpm_PressableTsx4(){let[Platform,isScreenReaderEnabled,stateMachine,handleFinalize]=this.__closure;if(Platform.OS==='android'&&!isScreenReaderEnabled){stateMachine.reset();handleFinalize();}})" };
let closure_19 = { code: "(function pnpm_PressableTsx5(event){let[gestureTouchToPressableEvent,stateMachine,handlePressOut]=this.__closure;const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.reset();handlePressOut(pressableEvent,false);})" };
let closure_20 = { code: "(function pnpm_PressableTsx6(event){let[Platform,stateMachine,StateMachineEvent,handleFinalize]=this.__closure;if(Platform.OS!=='web'){return;}stateMachine.handleEvent(event.canceled?StateMachineEvent.CANCEL:StateMachineEvent.FINALIZE);handleFinalize();})" };
let closure_21 = { code: "(function pnpm_PressableTsx7(event){let[Platform,gestureTouchToPressableEvent,stateMachine,handlePressOut]=this.__closure;if(Platform.OS!=='macos'&&Platform.OS!=='web'){const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.reset();handlePressOut(pressableEvent,false);}})" };
let closure_22 = { code: "(function pnpm_PressableTsx8(){let[captureKeyboardDismiss,dropKeyboardTapRef,Platform,handlePressIn,viewCenterToPressableEvent,dimensions,isScreenReaderEnabled,stateMachine,StateMachineEvent]=this.__closure;captureKeyboardDismiss();if(dropKeyboardTapRef.current){return;}if(Platform.isTV){handlePressIn(viewCenterToPressableEvent(dimensions.current),true);return;}if(Platform.OS==='android'&&isScreenReaderEnabled){stateMachine.handleEvent(StateMachineEvent.NATIVE_BEGIN,viewCenterToPressableEvent(dimensions.current));return;}stateMachine.handleEvent(StateMachineEvent.NATIVE_BEGIN);})" };
let closure_23 = { code: "(function pnpm_PressableTsx9(){let[Platform,stateMachine,StateMachineEvent]=this.__closure;if(!Platform.isTV&&Platform.OS!=='android'){stateMachine.handleEvent(StateMachineEvent.NATIVE_START);}})" };
let closure_24 = { code: "(function pnpm_PressableTsx10(event){let[Platform,handlePressOut,viewCenterToPressableEvent,dimensions,handleFinalize,stateMachine,StateMachineEvent]=this.__closure;if(Platform.OS==='web'){return;}if(Platform.isTV){handlePressOut(viewCenterToPressableEvent(dimensions.current),!event.canceled);handleFinalize();return;}stateMachine.handleEvent(event.canceled?StateMachineEvent.CANCEL:StateMachineEvent.FINALIZE);handleFinalize();})" };

export default function _default(pressRetentionOffset) {
  ({ testOnly_pressed, hitSlop } = pressRetentionOffset);
  _require = hitSlop;
  pressRetentionOffset = pressRetentionOffset.pressRetentionOffset;
  dependencyMap = pressRetentionOffset;
  const delayLongPress = pressRetentionOffset.delayLongPress;
  c2 = delayLongPress;
  const unstable_pressDelay = pressRetentionOffset.unstable_pressDelay;
  _slicedToArray = unstable_pressDelay;
  const onPress = pressRetentionOffset.onPress;
  _objectWithoutProperties = onPress;
  const onPressIn = pressRetentionOffset.onPressIn;
  c5 = onPressIn;
  const onPressOut = pressRetentionOffset.onPressOut;
  c6 = onPressOut;
  const onLongPress = pressRetentionOffset.onLongPress;
  c7 = onLongPress;
  const onLayout = pressRetentionOffset.onLayout;
  c8 = onLayout;
  ({ style, children, android_disableSound, android_ripple } = pressRetentionOffset);
  ({ simultaneousWith, requireToFail, block } = pressRetentionOffset);
  ({ delayHoverIn, delayHoverOut, onHoverIn, onHoverOut, disabled, accessible } = pressRetentionOffset);
  let tmp = _objectWithoutProperties(pressRetentionOffset, c2);
  if (testOnly_pressed == null) {
    testOnly_pressed = false;
  }
  [tmp4, closure_10] = closure_10(testOnly_pressed);
  const ref = android_ripple(null);
  let tmp3 = _slicedToArray(closure_10(testOnly_pressed), 2);
  const ref2 = android_ripple(null);
  const tmp7 = c5(require("module_5498").JSResponderContext);
  closure_14 = tmp7;
  const ref3 = android_ripple(true);
  const tmp8 = android_ripple({ width: 0, height: 0 });
  let tmp9 = android_ripple(null);
  items = [hitSlop];
  const tmp11 = c8(() => {
    if (typeof c0 === "number") {
      let numberAsInsetResult = touchDataToPressEvent.numberAsInset(c0);
    } else {
      numberAsInsetResult = c0;
      if (c0 == null) {
        numberAsInsetResult = touchDataToPressEvent.numberAsInset(0);
      }
    }
    return numberAsInsetResult;
  }, items);
  closure_18 = tmp11;
  const items1 = [pressRetentionOffset];
  const ref4 = android_ripple(false);
  const ref5 = tmp8;
  const ref6 = tmp9;
  const tmp10 = c8;
  const tmp12 = c8(() => {
    if (typeof c1 === "number") {
      let numberAsInsetResult = touchDataToPressEvent.numberAsInset(c1);
    } else {
      numberAsInsetResult = c1;
      if (c1 == null) {
        numberAsInsetResult = {};
      }
    }
    return numberAsInsetResult;
  }, items1);
  const addInsetsResult = require("touchDataToPressEvent").addInsets(tmp11, tmp12);
  const tmp15 = c6(() => {
    if (ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
      closure_13.current = true;
    }
  }, []);
  closure_19 = tmp15;
  const tmp16 = c6(() => {
    if (ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref2.current);
      ref2.current = null;
    }
  }, []);
  closure_20 = tmp16;
  const items2 = [onLongPress, tmp15, delayLongPress];
  const tmp17 = c6((arg0) => {
    closure_0 = arg0;
    if (c7) {
      closure_19();
      let num = c2;
      if (c2 == null) {
        num = 500;
      }
      closure_11.current = setTimeout(() => {
        closure_13.current = false;
        c7(closure_0);
      }, num);
    }
  }, items2);
  closure_21 = tmp17;
  const items3 = [onPressIn, tmp17];
  const tmp18 = c6((arg0) => {
    if (c5 != null) {
      tmp(arg0);
    }
    closure_21(arg0);
    closure_1_10(true);
    if (ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref2.current);
      ref2.current = null;
    }
  }, items3);
  closure_22 = tmp18;
  const items4 = [tmp16, tmp15];
  const tmp19 = c6(() => {
    closure_15.current = false;
    closure_17.current = null;
    closure_19();
    closure_20();
    closure_1_10(false);
  }, items4);
  closure_23 = tmp19;
  const items5 = [tmp7];
  const tmp20 = c6(() => {
    if (ref6.current == null) {
      tmp.current = _mod5498.isKeyboardDismissingTap(closure_14);
    }
  }, items5);
  const items6 = [tmp18, tmp11, unstable_pressDelay];
  const tmp21 = c6((nativeEvent) => {
    closure_0 = nativeEvent;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    if (!flag) {
      const changedTouches = nativeEvent.nativeEvent.changedTouches;
      flag = _undefined(_undefined2[7]).isTouchWithinInset(ref5.current, closure_18, changedTouches.at(-1));
      const obj = _undefined(_undefined2[7]);
    }
    if (flag) {
      closure_15.current = true;
      if (c3) {
        const _setTimeout = setTimeout;
        closure_12.current = setTimeout(() => {
          closure_22(closure_0);
        }, tmp6);
      } else {
        closure_22(nativeEvent);
      }
    }
  }, items6);
  closure_24 = tmp21;
  const items7 = [tmp19, tmp18, onPress, onPressOut];
  const tmp22 = c6((arg0) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    if (ref4.current) {
      tmp.current = false;
      if (ref2.current) {
        closure_22(arg0);
      }
      if (_undefined7 != null) {
        _undefined7(arg0);
      }
      if (tmp9) {
        if (_undefined5 != null) {
          _undefined5(arg0);
        }
      }
      closure_23();
      tmp9 = ref3.current && flag;
    }
  }, items7);
  closure_25 = tmp22;
  const tmp23 = c8(() => {
    const pressableStateMachine = new _undefined(_undefined2[8]).PressableStateMachine();
    return pressableStateMachine;
  }, []);
  const states = tmp23;
  let obj = require("touchDataToPressEvent");
  const tmp14 = c6;
  const isScreenReaderEnabled = require("module_5529").useIsScreenReaderEnabled();
  const items8 = [tmp21, tmp22, tmp23, isScreenReaderEnabled];
  c7(() => {
    states.setStates(StateMachineEvent.getStatesConfig(closure_24, closure_25, isScreenReaderEnabled));
  }, items8);
  const tmp26 = android_ripple(null);
  const tmp27 = android_ripple(null);
  let obj2 = require("module_5529");
  const items9 = [ref4, tmp27, delayHoverIn, tmp26, onHoverIn, require("touchDataToPressEvent").gestureToPressableEvent];
  _require = undefined;
  [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33] = items9;
  const obj4 = { manualActivation: true, cancelsTouchesInView: false, onBegin: null, onFinalize: null, enabled: null, disableReanimated: true, simultaneousWith: null, block: null, requireToFail: null, hitSlop: null };
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
      tmp5(_undefined5(arg0));
    }
  }
  const items10 = [tmp29, tmp30, tmp31, tmp32, tmp33];
  pnpm_PressableTsx1.__closure = items10;
  pnpm_PressableTsx1.__workletHash = 2197594387164;
  pnpm_PressableTsx1.__initData = tmp28;
  obj4.onBegin = pnpm_PressableTsx1;
  const items11 = [ref5, tmp26, delayHoverOut, tmp27, onHoverOut, require("touchDataToPressEvent").gestureToPressableEvent];
  _require = undefined;
  [tmp34, tmp35, tmp36, tmp37, tmp38, tmp39] = items11;
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
      tmp5(_undefined5(arg0));
    }
  }
  const items12 = [tmp35, tmp36, tmp37, tmp38, tmp39];
  pnpm_PressableTsx2.__closure = items12;
  pnpm_PressableTsx2.__workletHash = 15483873706614;
  pnpm_PressableTsx2.__initData = tmp34;
  obj4.onFinalize = pnpm_PressableTsx2;
  obj4.enabled = true !== disabled;
  obj4.simultaneousWith = simultaneousWith;
  obj4.block = block;
  obj4.requireToFail = requireToFail;
  obj4.hitSlop = addInsetsResult;
  const hoverGesture = require("module_5531").useHoverGesture(obj4);
  const obj3 = require("module_5531");
  const obj5 = { minDuration: require("tagMessage").INT32_MAX, maxDistance: require("tagMessage").INT32_MAX, cancelsTouchesInView: false, onTouchesDown: null, onTouchesUp: null, onTouchesCancel: null, onFinalize: null, enabled: null, disableReanimated: true, simultaneousWith: null, block: null, requireToFail: null, hitSlop: null };
  const items13 = [ref6, tmp20, tmp9, require("touchDataToPressEvent").gestureTouchToPressableEvent, tmp23, require("StateMachineEvent").StateMachineEvent];
  [tmp42, tmp43, tmp44, tmp45, tmp46, tmp47] = items13;
  function pnpm_PressableTsx3(arg0) {
    _undefined();
    if (!_undefined2.current) {
      _undefined4.handleEvent(_undefined5.LONG_PRESS_TOUCHES_DOWN, _undefined3(arg0));
    }
  }
  const items14 = [tmp43, tmp44, tmp45, tmp46, tmp47];
  pnpm_PressableTsx3.__closure = items14;
  pnpm_PressableTsx3.__workletHash = 7059468047103;
  pnpm_PressableTsx3.__initData = tmp42;
  obj5.onTouchesDown = pnpm_PressableTsx3;
  const items15 = [closure_18, ref, isScreenReaderEnabled, tmp23, tmp19];
  _require = undefined;
  [tmp49, tmp50, tmp51, tmp52, tmp53] = items15;
  function pnpm_PressableTsx4() {
    if (!tmp) {
      _undefined3.reset();
      _undefined4();
    }
    tmp = "android" !== _undefined.OS || c1;
  }
  const items16 = [tmp50, tmp51, tmp52, tmp53];
  pnpm_PressableTsx4.__closure = items16;
  pnpm_PressableTsx4.__workletHash = 17273070663319;
  pnpm_PressableTsx4.__initData = tmp49;
  obj5.onTouchesUp = pnpm_PressableTsx4;
  const items17 = [closure_19, require("touchDataToPressEvent").gestureTouchToPressableEvent, tmp23, tmp22];
  _require = undefined;
  [tmp54, tmp55, tmp56, tmp57] = items17;
  function pnpm_PressableTsx5(arg0) {
    _undefined2.reset();
    _undefined3(_undefined(arg0), false);
  }
  const items18 = [tmp55, tmp56, tmp57];
  pnpm_PressableTsx5.__closure = items18;
  pnpm_PressableTsx5.__workletHash = 468722124596;
  pnpm_PressableTsx5.__initData = tmp54;
  obj5.onTouchesCancel = pnpm_PressableTsx5;
  const items19 = [closure_20, ref, tmp23, require("StateMachineEvent").StateMachineEvent, tmp19];
  _require = undefined;
  [tmp58, tmp59, tmp60, tmp61, tmp62] = items19;
  function pnpm_PressableTsx6(canceled) {
    if ("web" === _undefined.OS) {
      _undefined2.handleEvent(canceled.canceled ? constants.CANCEL : constants.FINALIZE);
      _undefined4();
    }
  }
  const items20 = [tmp59, tmp60, tmp61, tmp62];
  pnpm_PressableTsx6.__closure = items20;
  pnpm_PressableTsx6.__workletHash = 16124198535183;
  pnpm_PressableTsx6.__initData = tmp58;
  obj5.onFinalize = pnpm_PressableTsx6;
  obj5.enabled = true !== disabled;
  obj5.simultaneousWith = simultaneousWith;
  obj5.block = block;
  obj5.requireToFail = requireToFail;
  obj5.hitSlop = addInsetsResult;
  const longPressGesture = require("module_5531").useLongPressGesture(obj5);
  const tmp5Result = require("module_5531");
  const items21 = [closure_21, ref, require("touchDataToPressEvent").gestureTouchToPressableEvent, tmp23, tmp22];
  _require = undefined;
  [tmp64, tmp65, tmp66, tmp67, tmp68] = items21;
  const obj6 = { onTouchesCancel: null, onBegin: null, onActivate: null, onFinalize: null, enabled: null, disableReanimated: true, simultaneousWith: null, block: null, requireToFail: null, hitSlop: null, shouldActivateOnStart: false };
  function pnpm_PressableTsx7(arg0) {
    if ("macos" !== _undefined.OS) {
      if ("web" !== _undefined.OS) {
        _undefined3.reset();
        _undefined4(_undefined2(arg0), false);
        const tmp3 = _undefined2(arg0);
      }
    }
  }
  const items22 = [tmp65, tmp66, tmp67, tmp68];
  pnpm_PressableTsx7.__closure = items22;
  pnpm_PressableTsx7.__workletHash = 10748986980398;
  pnpm_PressableTsx7.__initData = tmp64;
  obj6.onTouchesCancel = pnpm_PressableTsx7;
  const items23 = [closure_22, tmp20, tmp9, ref, tmp21, require("touchDataToPressEvent").viewCenterToPressableEvent, tmp8, isScreenReaderEnabled, tmp23, require("StateMachineEvent").StateMachineEvent];
  _require = undefined;
  c7 = undefined;
  c8 = undefined;
  [tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78] = items23;
  function pnpm_PressableTsx8() {
    _undefined();
    if (!_undefined2.current) {
      if (_undefined3.isTV) {
        _undefined4(_undefined5(_undefined6.current), true);
      } else {
        if ("android" === tmp2.OS) {
          if (c6) {
            _undefined8.handleEvent(_undefined9.NATIVE_BEGIN, _undefined5(_undefined6.current));
          }
        }
        _undefined8.handleEvent(_undefined9.NATIVE_BEGIN);
      }
    }
  }
  const items24 = [tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78];
  pnpm_PressableTsx8.__closure = items24;
  pnpm_PressableTsx8.__workletHash = 6957601484343;
  pnpm_PressableTsx8.__initData = tmp69;
  obj6.onBegin = pnpm_PressableTsx8;
  const items25 = [closure_23, ref, tmp23, require("StateMachineEvent").StateMachineEvent];
  _require = undefined;
  [tmp79, tmp80, tmp81, tmp82] = items25;
  function pnpm_PressableTsx9() {
    let isTV = _undefined.isTV;
    if (!isTV) {
      isTV = "android" === _undefined.OS;
    }
    if (!isTV) {
      _undefined2.handleEvent(_undefined3.NATIVE_START);
    }
  }
  const items26 = [tmp80, tmp81, tmp82];
  pnpm_PressableTsx9.__closure = items26;
  pnpm_PressableTsx9.__workletHash = 3100451590170;
  pnpm_PressableTsx9.__initData = tmp79;
  obj6.onActivate = pnpm_PressableTsx9;
  const items27 = [closure_24, ref, tmp22, require("touchDataToPressEvent").viewCenterToPressableEvent, tmp8, tmp19, tmp23, require("StateMachineEvent").StateMachineEvent];
  _require = undefined;
  dependencyMap = undefined;
  c2 = undefined;
  _slicedToArray = undefined;
  _objectWithoutProperties = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90] = items27;
  function pnpm_PressableTsx10(canceled) {
    if ("web" !== _undefined.OS) {
      if (tmp.isTV) {
        _undefined2(_undefined3(_undefined4.current), !canceled.canceled);
        _undefined5();
      } else {
        _undefined6.handleEvent(canceled.canceled ? constants2.CANCEL : constants2.FINALIZE);
        _undefined5();
      }
    }
  }
  const items28 = [tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90];
  pnpm_PressableTsx10.__closure = items28;
  pnpm_PressableTsx10.__workletHash = 3894882419110;
  pnpm_PressableTsx10.__initData = tmp83;
  obj6.onFinalize = pnpm_PressableTsx10;
  obj6.enabled = true !== disabled;
  obj6.simultaneousWith = simultaneousWith;
  obj6.block = block;
  obj6.requireToFail = requireToFail;
  obj6.hitSlop = addInsetsResult;
  const nativeGesture = require("module_5531").useNativeGesture(obj6);
  const tmp5Result4 = require("module_5531");
  let style1 = style;
  const simultaneousGestures = require("module_5531").useSimultaneousGestures(nativeGesture, longPressGesture, hoverGesture);
  if (typeof style === "function") {
    const obj7 = { pressed: tmp4 };
    style1 = style(obj7);
  }
  let childrenResult = children;
  if (typeof children === "function") {
    const obj8 = { pressed: tmp4 };
    childrenResult = children(obj8);
  }
  const items29 = [android_ripple];
  const items30 = [onLayout];
  const tmp5Result5 = require("module_5531");
  const tmp10Result = tmp10(() => {
    let color;
    if (android_ripple != null) {
      color = android_ripple.color;
    }
    if (color == null) {
      color = str;
    }
    return color;
  }, items29);
  const tmp14Result = tmp14((nativeEvent) => {
    if (c8 != null) {
      tmp(nativeEvent);
    }
    closure_16.current = nativeEvent.nativeEvent.layout;
  }, items30);
  const tVProps = require("module_5524").getTVProps(tmp);
  const obj9 = { gesture: simultaneousGestures, children: null };
  const obj10 = {};
  const merged = Object.assign(tmp);
  const merged1 = Object.assign(tVProps);
  obj10.onLayout = tmp14Result;
  obj10.accessible = false !== accessible;
  obj10.hitSlop = addInsetsResult;
  obj10.enabled = true !== disabled;
  obj10.touchSoundDisabled = android_disableSound;
  obj10.rippleColor = tmp10Result;
  let radius;
  if (android_ripple != null) {
    radius = android_ripple.radius;
  }
  obj10.rippleRadius = radius;
  const items31 = [{}, style1];
  obj10.style = items31;
  let tmp104;
  if (closure_14) {
    tmp104 = onPress;
  }
  obj10.testOnly_onPress = tmp104;
  let tmp105;
  if (closure_14) {
    tmp105 = onPressIn;
  }
  obj10.testOnly_onPressIn = tmp105;
  let tmp106;
  if (closure_14) {
    tmp106 = onPressOut;
  }
  obj10.testOnly_onPressOut = tmp106;
  let tmp107;
  if (closure_14) {
    tmp107 = onLongPress;
  }
  obj10.testOnly_onLongPress = tmp107;
  const items32 = [childrenResult, null];
  obj10.children = items32;
  obj9.children = ref3(require("Animated").PureNativeButton, obj10);
  return ref2(require("GestureDetectorType").GestureDetector, obj9);
};
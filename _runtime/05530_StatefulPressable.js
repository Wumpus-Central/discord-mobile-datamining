// _runtime/05530_StatefulPressable.js
import JSResponderContext from "05497_JSResponderContext.js";
import touchDataToPressEvent from "05531_touchDataToPressEvent.js";
import StateMachineEvent from "05534_StateMachineEvent.js";
import _slicedToArray from "metro/00032__.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import noop_mod from "metro/00019__.js";

const require = globalThis.__r;

require = fn;
let closure_2 = [
  "testOnly_pressed",
  "hitSlop",
  "pressRetentionOffset",
  "delayHoverIn",
  "delayHoverOut",
  "delayLongPress",
  "unstable_pressDelay",
  "onHoverIn",
  "onHoverOut",
  "onPress",
  "onPressIn",
  "onPressOut",
  "onLongPress",
  "onLayout",
  "style",
  "children",
  "android_disableSound",
  "android_ripple",
  "disabled",
  "accessible",
  "simultaneousWith",
  "requireToFail",
  "block",
  "ref",
  "immediatePressOut",
];
let noop = fn(19);
({
  use: hasOwnProperty,
  useCallback: closure_6,
  useEffect: metroImportDefault,
  useMemo: closure_8,
  useRef: closure_9,
  useState: closure_10,
} = noop);
let noop = noop_mod;
const Platform = fn(17).Platform;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const tagMessage = fn(5426);
let closure_14 = tagMessage.isTestEnv();
let closure_15 = {
  code: "(function pnpm_StatefulPressableTsx1(event){let[hoverOutTimeout,delayHoverIn,hoverInTimeout,onHoverIn,gestureToPressableEvent]=this.__closure;var _onHoverIn2;if(hoverOutTimeout.current){clearTimeout(hoverOutTimeout.current);}if(delayHoverIn){hoverInTimeout.current=setTimeout(function(){var _onHoverIn;return(_onHoverIn=onHoverIn)===null||_onHoverIn===void 0?void 0:_onHoverIn(gestureToPressableEvent(event));},delayHoverIn);return;}(_onHoverIn2=onHoverIn)===null||_onHoverIn2===void 0||_onHoverIn2(gestureToPressableEvent(event));})",
};
let closure_16 = {
  code: "(function pnpm_StatefulPressableTsx2(event){let[hoverInTimeout,delayHoverOut,hoverOutTimeout,onHoverOut,gestureToPressableEvent]=this.__closure;var _onHoverOut2;if(hoverInTimeout.current){clearTimeout(hoverInTimeout.current);}if(delayHoverOut){hoverOutTimeout.current=setTimeout(function(){var _onHoverOut;return(_onHoverOut=onHoverOut)===null||_onHoverOut===void 0?void 0:_onHoverOut(gestureToPressableEvent(event));},delayHoverOut);return;}(_onHoverOut2=onHoverOut)===null||_onHoverOut2===void 0||_onHoverOut2(gestureToPressableEvent(event));})",
};
let closure_17 = {
  code: "(function pnpm_StatefulPressableTsx3(event){let[captureKeyboardDismiss,dropKeyboardTapRef,gestureTouchToPressableEvent,stateMachine,StateMachineEvent]=this.__closure;captureKeyboardDismiss();if(dropKeyboardTapRef.current){return;}const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.handleEvent(StateMachineEvent.LONG_PRESS_TOUCHES_DOWN,pressableEvent);})",
};
let closure_18 = {
  code: "(function pnpm_StatefulPressableTsx4(){let[Platform,isScreenReaderEnabled,stateMachine,handleFinalize]=this.__closure;if(Platform.OS==='android'&&!isScreenReaderEnabled){stateMachine.reset();handleFinalize();}})",
};
let closure_19 = {
  code: "(function pnpm_StatefulPressableTsx5(event){let[gestureTouchToPressableEvent,stateMachine,handlePressOut]=this.__closure;const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.reset();handlePressOut(pressableEvent,false);})",
};
let closure_20 = {
  code: "(function pnpm_StatefulPressableTsx6(event){let[Platform,stateMachine,StateMachineEvent,handleFinalize]=this.__closure;if(Platform.OS!=='web'){return;}stateMachine.handleEvent(event.canceled?StateMachineEvent.CANCEL:StateMachineEvent.FINALIZE);handleFinalize();})",
};
let closure_21 = {
  code: "(function pnpm_StatefulPressableTsx7(event){let[Platform,gestureTouchToPressableEvent,stateMachine,handlePressOut]=this.__closure;if(Platform.OS!=='macos'&&Platform.OS!=='web'){const pressableEvent=gestureTouchToPressableEvent(event);stateMachine.reset();handlePressOut(pressableEvent,false);}})",
};
let closure_22 = {
  code: "(function pnpm_StatefulPressableTsx8(){let[captureKeyboardDismiss,dropKeyboardTapRef,Platform,handlePressIn,viewCenterToPressableEvent,dimensions,isScreenReaderEnabled,stateMachine,StateMachineEvent]=this.__closure;captureKeyboardDismiss();if(dropKeyboardTapRef.current){return;}if(Platform.isTV){handlePressIn(viewCenterToPressableEvent(dimensions.current),true);return;}if(Platform.OS==='android'&&isScreenReaderEnabled){stateMachine.handleEvent(StateMachineEvent.NATIVE_BEGIN,viewCenterToPressableEvent(dimensions.current));return;}stateMachine.handleEvent(StateMachineEvent.NATIVE_BEGIN);})",
};
let closure_23 = {
  code: "(function pnpm_StatefulPressableTsx9(){let[Platform,stateMachine,StateMachineEvent]=this.__closure;if(!Platform.isTV&&Platform.OS!=='android'){stateMachine.handleEvent(StateMachineEvent.NATIVE_START);}})",
};
let closure_24 = {
  code: "(function pnpm_StatefulPressableTsx10(event){let[Platform,handlePressOut,viewCenterToPressableEvent,dimensions,handleFinalize,stateMachine,StateMachineEvent]=this.__closure;if(Platform.OS==='web'){return;}if(Platform.isTV){handlePressOut(viewCenterToPressableEvent(dimensions.current),!event.canceled);handleFinalize();return;}stateMachine.handleEvent(event.canceled?StateMachineEvent.CANCEL:StateMachineEvent.FINALIZE);handleFinalize();})",
};

export default function _default(pressRetentionOffset) {
  ({ testOnly_pressed, hitSlop } = pressRetentionOffset);
  _require = hitSlop;
  pressRetentionOffset = pressRetentionOffset.pressRetentionOffset;
  const delayLongPress = pressRetentionOffset.delayLongPress;
  c2 = delayLongPress;
  const unstable_pressDelay = pressRetentionOffset.unstable_pressDelay;
  _slicedToArray = unstable_pressDelay;
  ({ onHoverIn, onHoverOut, onPress } = pressRetentionOffset);
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
  ({ simultaneousWith, requireToFail, block, immediatePressOut } = pressRetentionOffset);
  ({ delayHoverIn, delayHoverOut, disabled, accessible, ref } = pressRetentionOffset);
  let tmp = _objectWithoutProperties(pressRetentionOffset, c2);
  const tmp2 = _slicedToArray(closure_10(false), 2);
  closure_10 = tmp2[1];
  ref = android_ripple(null);
  const ref2 = android_ripple(null);
  const tmp5 = c5(require("JSResponderContext").JSResponderContext);
  closure_14 = tmp5;
  const ref3 = android_ripple(true);
  const tmp6 = android_ripple({ width: 0, height: 0 });
  const tmp7 = android_ripple(null);
  items = [hitSlop];
  let tmp9 = c8(() => {
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
  closure_18 = tmp9;
  const items1 = [pressRetentionOffset];
  const ref4 = android_ripple(false);
  const ref5 = tmp6;
  const ref6 = tmp7;
  const tmp8 = c8;
  const tmp10 = c8(() => {
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
  const addInsetsResult = require("touchDataToPressEvent").addInsets(tmp9, tmp10);
  const tmp13 = c6(() => {
    if (ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
      closure_13.current = true;
    }
  }, []);
  closure_19 = tmp13;
  const tmp14 = c6(() => {
    if (ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref2.current);
      ref2.current = null;
    }
  }, []);
  closure_20 = tmp14;
  const items2 = [onLongPress, tmp13, delayLongPress];
  const tmp15 = c6((arg0) => {
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
  closure_21 = tmp15;
  const items3 = [onPressIn, tmp15];
  const tmp16 = c6((arg0) => {
    if (c5 != null) {
      tmp(arg0);
    }
    closure_21(arg0);
    closure_10(true);
    if (ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref2.current);
      ref2.current = null;
    }
  }, items3);
  closure_22 = tmp16;
  const items4 = [tmp14, tmp13];
  const tmp17 = c6(() => {
    closure_15.current = false;
    closure_17.current = null;
    closure_19();
    closure_20();
    closure_10(false);
  }, items4);
  closure_23 = tmp17;
  const items5 = [tmp5];
  const tmp18 = c6(() => {
    if (ref6.current == null) {
      tmp.current = JSResponderContext.isKeyboardDismissingTap(closure_14);
    }
  }, items5);
  const items6 = [tmp16, tmp9, unstable_pressDelay];
  const tmp19 = c6((nativeEvent) => {
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
  closure_24 = tmp19;
  const items7 = [tmp17, tmp16, onPress, onPressOut];
  const tmp20 = c6((arg0) => {
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
  closure_25 = tmp20;
  const tmp21 = c8(() => {
    const pressableStateMachine = new _undefined(_undefined2[8]).PressableStateMachine();
    return pressableStateMachine;
  }, []);
  const states = tmp21;
  let obj = require("touchDataToPressEvent");
  const tmp12 = c6;
  const isScreenReaderEnabled = require("metro/05533__.js").useIsScreenReaderEnabled();
  const items8 = [tmp19, tmp20, tmp21, isScreenReaderEnabled];
  c7(() => {
    states.setStates(StateMachineEvent.getStatesConfig(closure_24, closure_25, isScreenReaderEnabled));
  }, items8);
  const tmp24 = android_ripple(null);
  closure_28 = tmp24;
  const tmp25 = android_ripple(null);
  closure_29 = tmp25;
  c7(
    () => () => {
      if (ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      if (ref2.current) {
        const _clearTimeout2 = clearTimeout;
        clearTimeout(tmp4.current);
      }
      if (ref3.current) {
        const _clearTimeout3 = clearTimeout;
        clearTimeout(tmp7.current);
      }
      if (ref4.current) {
        const _clearTimeout4 = clearTimeout;
        clearTimeout(tmp10.current);
      }
    },
    [],
  );
  let obj2 = require("metro/05533__.js");
  const items9 = [
    ref4,
    tmp25,
    delayHoverIn,
    tmp24,
    onHoverIn,
    require("touchDataToPressEvent").gestureToPressableEvent,
  ];
  _require = undefined;
  [tmp27, tmp28, tmp29, tmp30, tmp31, tmp32] = items9;
  const obj4 = {
    manualActivation: true,
    cancelsTouchesInView: false,
    onBegin: null,
    onFinalize: null,
    enabled: null,
    disableReanimated: true,
    simultaneousWith: null,
    block: null,
    requireToFail: null,
    hitSlop: null,
  };
  function pnpm_StatefulPressableTsx1(arg0) {
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
  const items10 = [tmp28, tmp29, tmp30, tmp31, tmp32];
  pnpm_StatefulPressableTsx1.__closure = items10;
  pnpm_StatefulPressableTsx1.__workletHash = 3655104435508;
  pnpm_StatefulPressableTsx1.__initData = tmp27;
  obj4.onBegin = pnpm_StatefulPressableTsx1;
  const items11 = [
    ref5,
    tmp24,
    delayHoverOut,
    tmp25,
    onHoverOut,
    require("touchDataToPressEvent").gestureToPressableEvent,
  ];
  _require = undefined;
  [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38] = items11;
  function pnpm_StatefulPressableTsx2(arg0) {
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
  const items12 = [tmp34, tmp35, tmp36, tmp37, tmp38];
  pnpm_StatefulPressableTsx2.__closure = items12;
  pnpm_StatefulPressableTsx2.__workletHash = 1799471960094;
  pnpm_StatefulPressableTsx2.__initData = tmp33;
  obj4.onFinalize = pnpm_StatefulPressableTsx2;
  obj4.enabled = true !== disabled;
  obj4.simultaneousWith = simultaneousWith;
  obj4.block = block;
  obj4.requireToFail = requireToFail;
  obj4.hitSlop = addInsetsResult;
  const hoverGesture = require("metro/05535__.js").useHoverGesture(obj4);
  const obj3 = require("metro/05535__.js");
  const obj5 = {
    minDuration: require("tagMessage").INT32_MAX,
    maxDistance: require("tagMessage").INT32_MAX,
    cancelsTouchesInView: false,
    onTouchesDown: null,
    onTouchesUp: null,
    onTouchesCancel: null,
    onFinalize: null,
    enabled: null,
    disableReanimated: true,
    simultaneousWith: null,
    block: null,
    requireToFail: null,
    hitSlop: null,
  };
  const items13 = [
    ref6,
    tmp18,
    tmp7,
    require("touchDataToPressEvent").gestureTouchToPressableEvent,
    tmp21,
    require("StateMachineEvent").StateMachineEvent,
  ];
  [tmp41, tmp42, tmp43, tmp44, tmp45, tmp46] = items13;
  function pnpm_StatefulPressableTsx3(arg0) {
    _undefined();
    if (!_undefined2.current) {
      _undefined4.handleEvent(_undefined5.LONG_PRESS_TOUCHES_DOWN, _undefined3(arg0));
    }
  }
  const items14 = [tmp42, tmp43, tmp44, tmp45, tmp46];
  pnpm_StatefulPressableTsx3.__closure = items14;
  pnpm_StatefulPressableTsx3.__workletHash = 7237086242263;
  pnpm_StatefulPressableTsx3.__initData = tmp41;
  obj5.onTouchesDown = pnpm_StatefulPressableTsx3;
  const items15 = [closure_18, ref, isScreenReaderEnabled, tmp21, tmp17];
  _require = undefined;
  [tmp48, tmp49, tmp50, tmp51, tmp52] = items15;
  function pnpm_StatefulPressableTsx4() {
    if (!tmp) {
      _undefined3.reset();
      _undefined4();
    }
    tmp = "android" !== _undefined.OS || c1;
  }
  const items16 = [tmp49, tmp50, tmp51, tmp52];
  pnpm_StatefulPressableTsx4.__closure = items16;
  pnpm_StatefulPressableTsx4.__workletHash = 16099665781823;
  pnpm_StatefulPressableTsx4.__initData = tmp48;
  obj5.onTouchesUp = pnpm_StatefulPressableTsx4;
  const items17 = [closure_19, require("touchDataToPressEvent").gestureTouchToPressableEvent, tmp21, tmp20];
  _require = undefined;
  [tmp53, tmp54, tmp55, tmp56] = items17;
  function pnpm_StatefulPressableTsx5(arg0) {
    _undefined2.reset();
    _undefined3(_undefined(arg0), false);
  }
  const items18 = [tmp54, tmp55, tmp56];
  pnpm_StatefulPressableTsx5.__closure = items18;
  pnpm_StatefulPressableTsx5.__workletHash = 4719517475932;
  pnpm_StatefulPressableTsx5.__initData = tmp53;
  obj5.onTouchesCancel = pnpm_StatefulPressableTsx5;
  const items19 = [closure_20, ref, tmp21, require("StateMachineEvent").StateMachineEvent, tmp17];
  _require = undefined;
  [tmp57, tmp58, tmp59, tmp60, tmp61] = items19;
  function pnpm_StatefulPressableTsx6(canceled) {
    if ("web" === _undefined.OS) {
      _undefined2.handleEvent(canceled.canceled ? constants.CANCEL : constants.FINALIZE);
      _undefined4();
    }
  }
  const items20 = [tmp58, tmp59, tmp60, tmp61];
  pnpm_StatefulPressableTsx6.__closure = items20;
  pnpm_StatefulPressableTsx6.__workletHash = 14251064846759;
  pnpm_StatefulPressableTsx6.__initData = tmp57;
  obj5.onFinalize = pnpm_StatefulPressableTsx6;
  obj5.enabled = true !== disabled;
  obj5.simultaneousWith = simultaneousWith;
  obj5.block = block;
  obj5.requireToFail = requireToFail;
  obj5.hitSlop = addInsetsResult;
  const longPressGesture = require("metro/05535__.js").useLongPressGesture(obj5);
  const tmp3Result = require("metro/05535__.js");
  const items21 = [closure_21, ref, require("touchDataToPressEvent").gestureTouchToPressableEvent, tmp21, tmp20];
  _require = undefined;
  [tmp63, tmp64, tmp65, tmp66, tmp67] = items21;
  const obj6 = {
    onTouchesCancel: null,
    onBegin: null,
    onActivate: null,
    onFinalize: null,
    enabled: null,
    disableReanimated: true,
    simultaneousWith: null,
    block: null,
    requireToFail: null,
    hitSlop: null,
    shouldActivateOnStart: false,
  };
  function pnpm_StatefulPressableTsx7(arg0) {
    if ("macos" !== _undefined.OS) {
      if ("web" !== _undefined.OS) {
        _undefined3.reset();
        _undefined4(_undefined2(arg0), false);
        const tmp3 = _undefined2(arg0);
      }
    }
  }
  const items22 = [tmp64, tmp65, tmp66, tmp67];
  pnpm_StatefulPressableTsx7.__closure = items22;
  pnpm_StatefulPressableTsx7.__workletHash = 3579970117830;
  pnpm_StatefulPressableTsx7.__initData = tmp63;
  obj6.onTouchesCancel = pnpm_StatefulPressableTsx7;
  const items23 = [
    closure_22,
    tmp18,
    tmp7,
    ref,
    tmp19,
    require("touchDataToPressEvent").viewCenterToPressableEvent,
    tmp6,
    isScreenReaderEnabled,
    tmp21,
    require("StateMachineEvent").StateMachineEvent,
  ];
  _require = undefined;
  c7 = undefined;
  c8 = undefined;
  [tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77] = items23;
  function pnpm_StatefulPressableTsx8() {
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
  const items24 = [tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77];
  pnpm_StatefulPressableTsx8.__closure = items24;
  pnpm_StatefulPressableTsx8.__workletHash = 11546367468319;
  pnpm_StatefulPressableTsx8.__initData = tmp68;
  obj6.onBegin = pnpm_StatefulPressableTsx8;
  const items25 = [closure_23, ref, tmp21, require("StateMachineEvent").StateMachineEvent];
  _require = undefined;
  [tmp78, tmp79, tmp80, tmp81] = items25;
  function pnpm_StatefulPressableTsx9() {
    let isTV = _undefined.isTV;
    if (!isTV) {
      isTV = "android" === _undefined.OS;
    }
    if (!isTV) {
      _undefined2.handleEvent(_undefined3.NATIVE_START);
    }
  }
  const items26 = [tmp79, tmp80, tmp81];
  pnpm_StatefulPressableTsx9.__closure = items26;
  pnpm_StatefulPressableTsx9.__workletHash = 4962601206002;
  pnpm_StatefulPressableTsx9.__initData = tmp78;
  obj6.onActivate = pnpm_StatefulPressableTsx9;
  const items27 = [
    closure_24,
    ref,
    tmp20,
    require("touchDataToPressEvent").viewCenterToPressableEvent,
    tmp6,
    tmp17,
    tmp21,
    require("StateMachineEvent").StateMachineEvent,
  ];
  _require = undefined;
  dependencyMap = undefined;
  c2 = undefined;
  _slicedToArray = undefined;
  _objectWithoutProperties = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89] = items27;
  function pnpm_StatefulPressableTsx10(canceled) {
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
  const items28 = [tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89];
  pnpm_StatefulPressableTsx10.__closure = items28;
  pnpm_StatefulPressableTsx10.__workletHash = 10604054146638;
  pnpm_StatefulPressableTsx10.__initData = tmp82;
  obj6.onFinalize = pnpm_StatefulPressableTsx10;
  obj6.enabled = true !== disabled;
  obj6.simultaneousWith = simultaneousWith;
  obj6.block = block;
  obj6.requireToFail = requireToFail;
  obj6.hitSlop = addInsetsResult;
  const nativeGesture = require("metro/05535__.js").useNativeGesture(obj6);
  const tmp3Result4 = require("metro/05535__.js");
  const simultaneousGestures = require("metro/05535__.js").useSimultaneousGestures(
    nativeGesture,
    longPressGesture,
    hoverGesture,
  );
  if (testOnly_pressed == null) {
    testOnly_pressed = tmp2[0];
  }
  let style1 = style;
  if (typeof style === "function") {
    const obj7 = { pressed: testOnly_pressed };
    style1 = style(obj7);
  }
  let childrenResult = children;
  if (typeof children === "function") {
    const obj8 = { pressed: testOnly_pressed };
    childrenResult = children(obj8);
  }
  const items29 = [android_ripple];
  const items30 = [onLayout];
  const tmp3Result5 = require("metro/05535__.js");
  const tmp8Result = tmp8(() => {
    let color;
    if (android_ripple != null) {
      color = android_ripple.color;
    }
    if (color == null) {
      color = str;
    }
    return color;
  }, items29);
  const tmp12Result = tmp12((nativeEvent) => {
    if (c8 != null) {
      tmp(nativeEvent);
    }
    closure_16.current = nativeEvent.nativeEvent.layout;
  }, items30);
  const tVProps = require("metro/05526__.js").getTVProps(tmp);
  const obj9 = { gesture: simultaneousGestures, children: null };
  const obj10 = {};
  const merged = Object.assign(tmp);
  obj10.ref = ref;
  const merged1 = Object.assign(tVProps);
  obj10.onLayout = tmp12Result;
  obj10.accessible = false !== accessible;
  obj10.hitSlop = addInsetsResult;
  obj10.enabled = true !== disabled;
  obj10.touchSoundDisabled = android_disableSound;
  obj10.rippleColor = tmp8Result;
  let radius;
  if (android_ripple != null) {
    radius = android_ripple.radius;
  }
  obj10.rippleRadius = radius;
  let borderless;
  if (android_ripple != null) {
    borderless = android_ripple.borderless;
  }
  obj10.borderless = borderless;
  let foreground;
  if (android_ripple != null) {
    foreground = android_ripple.foreground;
  }
  obj10.foreground = foreground;
  const items31 = [{}, style1];
  obj10.style = items31;
  let tmp105;
  if (closure_14) {
    tmp105 = onPress;
  }
  obj10.testOnly_onPress = tmp105;
  let tmp106;
  if (closure_14) {
    tmp106 = onPressIn;
  }
  obj10.testOnly_onPressIn = tmp106;
  let tmp107;
  if (closure_14) {
    tmp107 = onPressOut;
  }
  obj10.testOnly_onPressOut = tmp107;
  let tmp108;
  if (closure_14) {
    tmp108 = onLongPress;
  }
  obj10.testOnly_onLongPress = tmp108;
  let tmp109;
  if (closure_14) {
    tmp109 = onHoverIn;
  }
  obj10.testOnly_onHoverIn = tmp109;
  let tmp110;
  if (closure_14) {
    tmp110 = onHoverOut;
  }
  obj10.testOnly_onHoverOut = tmp110;
  const items32 = [childrenResult, null];
  obj10.children = items32;
  obj9.children = ref3(require("Animated").PureNativeButton, obj10);
  return ref2(require("GestureDetectorType").GestureDetector, obj9);
}

// _runtime/metro/01849__.js
import _mod17 from "00017__.js";
import cancelAnimation from "../01636_cancelAnimation.js";

const value = _mod17.Platform.Version >= 30 || false;
let __closure = { duration: 250, easing: null };
const Easing = cancelAnimation.Easing;
__closure.easing = Easing.bezier(0.19919472913616398, 0.010644531250000006, 0.27920937042459737, 0.91025390625);
let closure_4 = {
  code: "function pnpm_useSmoothKeyboardHandlerTs1(){const{IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS,persistedHeight,TELEGRAM_ANDROID_TIMING_CONFIG,target,animatedKeyboardHeight}=this.__closure;if(IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS){return;}if(persistedHeight.value===0){return;}const event={duration:TELEGRAM_ANDROID_TIMING_CONFIG.duration,target:target.value,height:animatedKeyboardHeight.value,progress:animatedKeyboardHeight.value/persistedHeight.value};return event;}",
};
const __initData = {
  code: "function pnpm_useSmoothKeyboardHandlerTs2(evt){const{handler,height,persistedHeight}=this.__closure;var _handler$onMove,_handler;if(!evt){return;}(_handler$onMove=(_handler=handler).onMove)===null||_handler$onMove===void 0||_handler$onMove.call(_handler,evt);if(evt.height===height.value){var _handler$onEnd,_handler2;(_handler$onEnd=(_handler2=handler).onEnd)===null||_handler$onEnd===void 0||_handler$onEnd.call(_handler2,evt);persistedHeight.value=height.value;}}",
};
const __initData2 = {
  code: "function pnpm_useSmoothKeyboardHandlerTs3(e){const{IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS,persistedHeight,handler,target,height,animatedKeyboardHeight,withTiming,TELEGRAM_ANDROID_TIMING_CONFIG}=this.__closure;var _handler$onStart2,_handler3;if(!IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS&&e.height===persistedHeight.value){var _handler$onStart,_handler,_handler$onEnd,_handler2;(_handler$onStart=(_handler=handler).onStart)===null||_handler$onStart===void 0||_handler$onStart.call(_handler,e);(_handler$onEnd=(_handler2=handler).onEnd)===null||_handler$onEnd===void 0||_handler$onEnd.call(_handler2,e);return;}target.value=e.target;height.value=e.height;if(e.height>0){persistedHeight.value=e.height;}if(!IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS){animatedKeyboardHeight.value=withTiming(e.height,TELEGRAM_ANDROID_TIMING_CONFIG);}(_handler$onStart2=(_handler3=handler).onStart)===null||_handler$onStart2===void 0||_handler$onStart2.call(_handler3,{...e,duration:IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS?e.duration:TELEGRAM_ANDROID_TIMING_CONFIG.duration});}",
};
const __initData3 = {
  code: "function pnpm_useSmoothKeyboardHandlerTs4(e){const{IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS,handler}=this.__closure;if(IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS){var _handler$onMove,_handler;(_handler$onMove=(_handler=handler).onMove)===null||_handler$onMove===void 0||_handler$onMove.call(_handler,e);}}",
};
const __initData4 = {
  code: "function pnpm_useSmoothKeyboardHandlerTs5(e){const{IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS,handler}=this.__closure;if(IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS){var _handler$onEnd,_handler;(_handler$onEnd=(_handler=handler).onEnd)===null||_handler$onEnd===void 0||_handler$onEnd.call(_handler,e);}}",
};

export const useSmoothKeyboardHandler = (handler, items11) => {
  _require = handler;
  __closure = require("cancelAnimation");
  sharedValue = __closure.useSharedValue(-1);
  let obj1 = require("cancelAnimation");
  const sharedValue1 = obj1.useSharedValue(0);
  const sharedValue2 = require("cancelAnimation").useSharedValue(0);
  const obj3 = require("cancelAnimation");
  const sharedValue3 = require("cancelAnimation").useSharedValue(0);
  const obj4 = require("cancelAnimation");
  const fn = function s() {
    if (!closure_2) {
      if (0 !== sharedValue2.value) {
        const obj = { duration: null, target: null, height: null, progress: null };
        obj.duration = obj.duration;
        obj.target = sharedValue.value;
        obj.height = sharedValue3.value;
        obj.progress = sharedValue3.value / iter.value;
        return obj;
      }
    }
  };
  __closure = {
    IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS: sharedValue1,
    persistedHeight: sharedValue2,
    TELEGRAM_ANDROID_TIMING_CONFIG: sharedValue2,
    target: sharedValue,
    animatedKeyboardHeight: sharedValue3,
  };
  fn.__closure = __closure;
  fn.__workletHash = 4217597553195;
  fn.__initData = sharedValue3;
  class I {
    constructor(arg0) {
      if (handler) {
        tmp = closure_0;
        onMove = closure_0.onMove;
        tmp2 = null;
        if (onMove != null) {
          onMoveResult = onMove(handler);
        }
        if (handler.height === closure_2.value) {
          onEnd = tmp.onEnd;
          if (onEnd != null) {
            onEndResult = onEnd(handler);
          }
          tmp5 = closure_3;
          closure_3.value = iter.value;
        }
      }
      return;
    }
  }
  I.__closure = { handler, height: sharedValue1, persistedHeight: sharedValue2 };
  I.__workletHash = 1186520959152;
  I.__initData = __initData;
  let tmp9 = items11;
  if (items11) {
    const items = [];
    HermesBuiltin.arraySpread(items11, 0);
    tmp9 = items;
  }
  const animatedReaction = require("cancelAnimation").useAnimatedReaction(fn, I, tmp9);
  const obj5 = require("cancelAnimation");
  const tmp8 = sharedValue2;
  __closure = { onStart: null, onMove: null, onEnd: null };
  const fn2 = function v(height) {
    if (!closure_2) {
      if (height.height === sharedValue2.value) {
        const onStart = handler.onStart;
        if (onStart != null) {
          onStart(height);
        }
        const onEnd = handler.onEnd;
        if (onEnd != null) {
          onEnd(height);
        }
      }
    }
    sharedValue.value = height.target;
    sharedValue1.value = height.height;
    if (height.height > 0) {
      sharedValue2.value = height.height;
    }
    if (!closure_2) {
      let onStart2Result = cancelAnimation;
      sharedValue3.value = onStart2Result.withTiming(height.height, obj);
    }
    const onStart2 = handler.onStart;
    if (onStart2 != null) {
      onStart2Result = {};
      const merged = Object.assign(height);
      if (closure_2) {
        let duration = height.duration;
      } else {
        duration = obj.duration;
      }
      onStart2Result.duration = duration;
      onStart2Result = onStart2(onStart2Result);
    }
  };
  obj1 = {
    IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS: tmp7,
    persistedHeight: sharedValue2,
    handler,
    target: sharedValue,
    height: sharedValue1,
    animatedKeyboardHeight: sharedValue3,
    withTiming: tmp(tmp2[1]).withTiming,
    TELEGRAM_ANDROID_TIMING_CONFIG: tmp8,
  };
  fn2.__closure = obj1;
  fn2.__workletHash = 2049629670138;
  fn2.__initData = __initData2;
  __closure.onStart = fn2;
  class R {
    constructor(arg0) {
      if (c2) {
        onMove = closure_0.onMove;
        tmp2 = null;
        if (onMove != null) {
          tmp3 = handler;
          onMoveResult = onMove(handler);
        }
      }
      return;
    }
  }
  R.__closure = { IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS: sharedValue1, handler };
  R.__workletHash = 16381726355375;
  R.__initData = __initData3;
  __closure.onMove = R;
  class O {
    constructor(arg0) {
      if (c2) {
        onEnd = closure_0.onEnd;
        tmp2 = null;
        if (onEnd != null) {
          tmp3 = handler;
          onEndResult = onEnd(handler);
        }
      }
      return;
    }
  }
  O.__closure = { IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS: sharedValue1, handler };
  O.__workletHash = 9348108811600;
  O.__initData = __initData4;
  __closure.onEnd = O;
  require("01830__.js").useKeyboardHandler(__closure, items11);
};

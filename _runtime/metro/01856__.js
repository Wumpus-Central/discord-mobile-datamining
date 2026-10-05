// _runtime/metro/01856__.js
import react_native from "../00017_react-native.js";
import _mod1643 from "01643__.js";

const require = globalThis.__r;
let _require;

let Easing;
const tmp2 = react_native.Platform.Version >= 30 || false;
const value = tmp2;
let obj = {
  duration: 250,
  easing: Easing.bezier(0.19919472913616398, 0.010644531250000006, 0.27920937042459737, 0.91025390625),
};
Easing = _mod1643.Easing;
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
  let fn2;
  let sharedValue;
  _require = handler;
  obj = require("01643__.js");
  sharedValue = obj.useSharedValue(-1);
  let obj2 = require("01643__.js");
  const sharedValue1 = obj2.useSharedValue(0);
  const obj3 = require("01643__.js");
  const sharedValue2 = obj3.useSharedValue(0);
  const obj4 = require("01643__.js");
  const sharedValue3 = obj4.useSharedValue(0);
  const fn = function s() {
    if (!React2) {
      if (0 !== sharedValue2.value) {
        obj = {
          duration: obj.duration,
          target: sharedValue.value,
          height: sharedValue3.value,
          progress: sharedValue3.value / iter.value,
        };
        return obj;
      }
    }
  };
  const obj5 = {
    IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS: sharedValue1,
    persistedHeight: sharedValue2,
    TELEGRAM_ANDROID_TIMING_CONFIG: sharedValue2,
    target: sharedValue,
    animatedKeyboardHeight: sharedValue3,
  };
  fn.__closure = obj5;
  fn.__workletHash = 4217597553195;
  fn.__initData = sharedValue3;
  const tmp8 = require("01643__.js");
  class I {
    constructor(height) {
      const tmp = height;
      if (tmp) {
        const onMove = handler.onMove;
        if (onMove != null) {
          onMove(height);
        }
        if (height.height === sharedValue1.value) {
          const onEnd = handler.onEnd;
          if (onEnd != null) {
            onEnd(height);
          }
          sharedValue2.value = iter.value;
        }
      }
    }
  }
  I.__closure = { handler, height: sharedValue1, persistedHeight: sharedValue2 };
  I.__workletHash = 1186520959152;
  I.__initData = __initData;
  let tmp11 = items11;
  const useAnimatedReaction = tmp8.useAnimatedReaction;
  if (items11) {
    const items = [];
    HermesBuiltin.arraySpread(items, items11, 0);
    tmp11 = items;
  }
  const animatedReaction = useAnimatedReaction(fn, I, tmp11);
  const obj6 = { onStart: fn2, onMove: R, onEnd: O };
  fn2 = function v(height) {
    let duration;
    if (!React2) {
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
    if (!React2) {
      obj = _mod1643;
      sharedValue3.value = obj.withTiming(height.height, obj);
    }
    const onStart2 = handler.onStart;
    if (onStart2 != null) {
      const obj2 = { duration };
      const merged = Object.assign(height);
      if (React2) {
        duration = height.duration;
      } else {
        duration = obj.duration;
      }
      onStart2(obj2);
    }
  };
  const useKeyboardHandler = require("01837__.js").useKeyboardHandler;
  fn2.__closure = {
    IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS: sharedValue1,
    persistedHeight: sharedValue2,
    handler,
    target: sharedValue,
    height: sharedValue1,
    animatedKeyboardHeight: sharedValue3,
    withTiming: require("01643__.js").withTiming,
    TELEGRAM_ANDROID_TIMING_CONFIG: sharedValue2,
  };
  fn2.__workletHash = 2049629670138;
  fn2.__initData = __initData2;
  ({
    IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS: sharedValue1,
    persistedHeight: sharedValue2,
    handler,
    target: sharedValue,
    height: sharedValue1,
    animatedKeyboardHeight: sharedValue3,
    withTiming: require("01643__.js").withTiming,
    TELEGRAM_ANDROID_TIMING_CONFIG: sharedValue2,
  });
  class R {
    constructor(arg0) {
      if (React2) {
        const onMove = handler.onMove;
        if (onMove != null) {
          onMove(arg0);
        }
      }
    }
  }
  R.__closure = { IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS: sharedValue1, handler };
  R.__workletHash = 16381726355375;
  R.__initData = __initData3;
  class O {
    constructor(arg0) {
      if (React2) {
        const onEnd = handler.onEnd;
        if (onEnd != null) {
          onEnd(arg0);
        }
      }
    }
  }
  O.__closure = { IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS: sharedValue1, handler };
  O.__workletHash = 9348108811600;
  O.__initData = __initData4;
  useKeyboardHandler(obj6, items11);
};

// _runtime/01992_useSmoothKeyboardHandler.js
import _mod17 from "metro/00017__.js";
import _mod1652 from "metro/01652__.js";
import _mod1973 from "metro/01973__.js";

let closure_2 = _mod17.Platform.Version >= 30 || false;
let obj = { duration: 250, easing: null };
const Easing = _mod1652.Easing;
obj.easing = Easing.bezier(0.19919472913616398, 0.010644531250000006, 0.27920937042459737, 0.91025390625);
let closure_4 = { code: "(function pnpm_useSmoothKeyboardHandlerTs1(){let[IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS,persistedHeight,TELEGRAM_ANDROID_TIMING_CONFIG,target,animatedKeyboardHeight]=this.__closure;if(IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS){return;}if(persistedHeight.value===0){return;}const event={duration:TELEGRAM_ANDROID_TIMING_CONFIG.duration,target:target.value,height:animatedKeyboardHeight.value,progress:animatedKeyboardHeight.value/persistedHeight.value};return event;})" };
let closure_5 = { code: "(function pnpm_useSmoothKeyboardHandlerTs2(evt){let[handler,height,persistedHeight]=this.__closure;var _handler$onMove,_handler;if(!evt){return;}(_handler$onMove=(_handler=handler).onMove)===null||_handler$onMove===void 0||_handler$onMove.call(_handler,evt);if(evt.height===height.value){var _handler$onEnd,_handler2;(_handler$onEnd=(_handler2=handler).onEnd)===null||_handler$onEnd===void 0||_handler$onEnd.call(_handler2,evt);persistedHeight.value=height.value;}})" };
let closure_6 = { code: "(function pnpm_useSmoothKeyboardHandlerTs3(e){let[IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS,persistedHeight,handler,target,height,animatedKeyboardHeight,withTiming,TELEGRAM_ANDROID_TIMING_CONFIG]=this.__closure;var _handler$onStart2,_handler3;if(!IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS&&e.height===persistedHeight.value){var _handler$onStart,_handler,_handler$onEnd,_handler2;(_handler$onStart=(_handler=handler).onStart)===null||_handler$onStart===void 0||_handler$onStart.call(_handler,e);(_handler$onEnd=(_handler2=handler).onEnd)===null||_handler$onEnd===void 0||_handler$onEnd.call(_handler2,e);return;}target.value=e.target;height.value=e.height;if(e.height>0){persistedHeight.value=e.height;}if(!IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS){animatedKeyboardHeight.value=withTiming(e.height,TELEGRAM_ANDROID_TIMING_CONFIG);}(_handler$onStart2=(_handler3=handler).onStart)===null||_handler$onStart2===void 0||_handler$onStart2.call(_handler3,{...e,duration:IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS?e.duration:TELEGRAM_ANDROID_TIMING_CONFIG.duration});})" };
let closure_7 = { code: "(function pnpm_useSmoothKeyboardHandlerTs4(e){let[IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS,handler]=this.__closure;if(IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS){var _handler$onMove,_handler;(_handler$onMove=(_handler=handler).onMove)===null||_handler$onMove===void 0||_handler$onMove.call(_handler,e);}})" };
let closure_8 = { code: "(function pnpm_useSmoothKeyboardHandlerTs5(e){let[IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS,handler]=this.__closure;if(IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS){var _handler$onEnd,_handler;(_handler$onEnd=(_handler=handler).onEnd)===null||_handler$onEnd===void 0||_handler$onEnd.call(_handler,e);}})" };

export (arg0, items33) => {
  obj = _mod1652;
  const sharedValue = obj.useSharedValue(-1);
  const sharedValue1 = _mod1652.useSharedValue(0);
  const sharedValue2 = _mod1652.useSharedValue(0);
  const sharedValue3 = _mod1652.useSharedValue(0);
  items = [_undefined5, _undefined3, sharedValue2, obj, sharedValue, sharedValue3];
  c3 = undefined;
  c4 = undefined;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
  function pnpm_useSmoothKeyboardHandlerTs1() {
    if (!c0) {
      if (0 !== _undefined2.value) {
        obj = { duration: _undefined3.duration, target: _undefined4.value, height: _undefined5.value, progress: _undefined5.value / iter.value };
        return obj;
      }
    }
  }
  const items1 = [tmp10, tmp11, tmp12, tmp13, tmp14];
  pnpm_useSmoothKeyboardHandlerTs1.__closure = items1;
  pnpm_useSmoothKeyboardHandlerTs1.__workletHash = 4625113059826;
  pnpm_useSmoothKeyboardHandlerTs1.__initData = tmp9;
  const items2 = [closure_5, arg0, sharedValue1, sharedValue2];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp15, tmp16, tmp17, tmp18] = items2;
  function pnpm_useSmoothKeyboardHandlerTs2(height) {
    if (height) {
      const onMove = _undefined.onMove;
      if (onMove != null) {
        onMove(height);
      }
      if (height.height === _undefined2.value) {
        const onEnd = _undefined.onEnd;
        if (onEnd != null) {
          onEnd(height);
        }
        c2.value = iter.value;
      }
    }
  }
  const items3 = [tmp16, tmp17, tmp18];
  pnpm_useSmoothKeyboardHandlerTs2.__closure = items3;
  pnpm_useSmoothKeyboardHandlerTs2.__workletHash = 2933081891273;
  pnpm_useSmoothKeyboardHandlerTs2.__initData = tmp15;
  let tmp19 = items33;
  if (items33) {
    const items4 = [];
    HermesBuiltin.arraySpread(items33, 0);
    tmp19 = items4;
  }
  const animatedReaction = _mod1652.useAnimatedReaction(pnpm_useSmoothKeyboardHandlerTs1, pnpm_useSmoothKeyboardHandlerTs2, tmp19);
  const tmp8 = obj;
  const items5 = [_undefined6, _undefined3, sharedValue2, arg0, sharedValue, sharedValue1, sharedValue3, _mod1652.withTiming, tmp8];
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32] = items5;
  const obj6 = { onStart: null, onMove: null, onEnd: null };
  function pnpm_useSmoothKeyboardHandlerTs3(height) {
    if (!c0) {
      if (height.height === _undefined2.value) {
        const onStart = _undefined3.onStart;
        if (onStart != null) {
          onStart(height);
        }
        const onEnd = _undefined3.onEnd;
        if (onEnd != null) {
          onEnd(height);
        }
      }
    }
    c3.value = height.target;
    c4.value = height.height;
    if (height.height > 0) {
      _undefined2.value = height.height;
    }
    if (!c0) {
      c5.value = _undefined6(height.height, _undefined7);
    }
    const onStart2 = _undefined3.onStart;
    if (onStart2 != null) {
      let onStart2Result = {};
      const merged = Object.assign(height);
      if (c0) {
        duration = height.duration;
      } else {
        duration = _undefined7.duration;
      }
      onStart2Result.duration = duration;
      onStart2Result = onStart2(onStart2Result);
    }
  }
  const items6 = [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32];
  pnpm_useSmoothKeyboardHandlerTs3.__closure = items6;
  pnpm_useSmoothKeyboardHandlerTs3.__workletHash = 10073398960835;
  pnpm_useSmoothKeyboardHandlerTs3.__initData = tmp24;
  obj6.onStart = pnpm_useSmoothKeyboardHandlerTs3;
  const items7 = [_undefined7, _undefined3, arg0];
  [tmp33, tmp34, tmp35] = items7;
  function pnpm_useSmoothKeyboardHandlerTs4(arg0) {
    if (c0) {
      const onMove = _undefined2.onMove;
      if (onMove != null) {
        onMove(arg0);
      }
    }
  }
  const items8 = [tmp34, tmp35];
  pnpm_useSmoothKeyboardHandlerTs4.__closure = items8;
  pnpm_useSmoothKeyboardHandlerTs4.__workletHash = 6468236428886;
  pnpm_useSmoothKeyboardHandlerTs4.__initData = tmp33;
  obj6.onMove = pnpm_useSmoothKeyboardHandlerTs4;
  const items9 = [closure_8, _undefined3, arg0];
  c0 = undefined;
  c1 = undefined;
  [tmp36, tmp37, tmp38] = items9;
  function pnpm_useSmoothKeyboardHandlerTs5(arg0) {
    if (c0) {
      const onEnd = _undefined2.onEnd;
      if (onEnd != null) {
        onEnd(arg0);
      }
    }
  }
  const items10 = [tmp37, tmp38];
  pnpm_useSmoothKeyboardHandlerTs5.__closure = items10;
  pnpm_useSmoothKeyboardHandlerTs5.__workletHash = 463977787241;
  pnpm_useSmoothKeyboardHandlerTs5.__initData = tmp36;
  obj6.onEnd = pnpm_useSmoothKeyboardHandlerTs5;
  _mod1973.useKeyboardHandler(obj6, items33);
  const tmpResult = _mod1973;
}
// === Module 1740: _isNativeReflectConstruct ===

// Module 1740 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";

const SequencedTransition = arg1;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_6 = { code: "function pnpm_SequencedTransitionTs1(values){const{delayFunction,delay,withSequence,withTiming,reverse,config,callback}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withSequence(withTiming(reverse?values.currentOriginX:values.targetOriginX,config),withTiming(values.targetOriginX,config))),originY:delayFunction(delay,withSequence(withTiming(reverse?values.targetOriginY:values.currentOriginY,config),withTiming(values.targetOriginY,config))),width:delayFunction(delay,withSequence(withTiming(reverse?values.currentWidth:values.targetWidth,config),withTiming(values.targetWidth,config))),height:delayFunction(delay,withSequence(withTiming(reverse?values.targetHeight:values.currentHeight,config),withTiming(values.targetHeight,config)))},callback:callback};}" };
class SequencedTransition {
  constructor() {
    self = this;
    items = [...arguments];
    apply = undefined;
    tmp = _isNativeReflectConstruct(this, apply);
    items1 = [...items];
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(apply);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    tmp3Result.reversed = false;
    tmp3Result.build = () => {
      delayFunction = delayFunction.getDelayFunction();
      const callbackV = delayFunction.callbackV;
      const delay = delayFunction.getDelay();
      let num = delayFunction.durationV;
      if (num == null) {
        num = 500;
      }
      let obj = { duration: num / 2 };
      const reversed = delayFunction.reversed;
      const fn = function e(currentOriginX) {
        obj = { initialValues: obj, animations: null, callback: null };
        obj = { originX: currentOriginX.currentOriginX, originY: currentOriginX.currentOriginY, width: currentOriginX.currentWidth, height: currentOriginX.currentHeight };
        const obj3 = delayFunction(callbackV[5]);
        obj = { originX: null, originY: null, width: null, height: null };
        const obj4 = delayFunction(callbackV[5]);
        let tmp3Result = tmp3(tmp4[5]);
        obj[0] = delayFunction(delay, obj3.withSequence(delayFunction(callbackV[5]).withTiming(reversed ? currentOriginX.currentOriginX : currentOriginX.targetOriginX, obj), tmp3Result.withTiming(currentOriginX.targetOriginX, obj)));
        tmp3Result = tmp3(tmp4[5]);
        const withTimingResult = delayFunction(callbackV[5]).withTiming(reversed ? currentOriginX.currentOriginX : currentOriginX.targetOriginX, obj);
        const tmp3Result1 = delayFunction(callbackV[5]);
        const withTimingResult1 = delayFunction(callbackV[5]).withTiming(reversed ? currentOriginX.targetOriginY : currentOriginX.currentOriginY, obj);
        obj[1] = delayFunction(delay, tmp3Result.withSequence(withTimingResult1, delayFunction(callbackV[5]).withTiming(currentOriginX.targetOriginY, obj)));
        const tmp3Result2 = delayFunction(callbackV[5]);
        const tmp3Result3 = delayFunction(callbackV[5]);
        const tmp3Result4 = delayFunction(callbackV[5]);
        const withTimingResult2 = delayFunction(callbackV[5]).withTiming(reversed ? currentOriginX.currentWidth : currentOriginX.targetWidth, obj);
        obj[2] = delayFunction(delay, tmp3Result3.withSequence(withTimingResult2, delayFunction(callbackV[5]).withTiming(currentOriginX.targetWidth, obj)));
        const tmp3Result5 = delayFunction(callbackV[5]);
        const tmp3Result6 = delayFunction(callbackV[5]);
        const tmp3Result7 = delayFunction(callbackV[5]);
        const withTimingResult3 = delayFunction(callbackV[5]).withTiming(reversed ? currentOriginX.targetHeight : currentOriginX.currentHeight, obj);
        obj[3] = delayFunction(delay, tmp3Result6.withSequence(withTimingResult3, delayFunction(callbackV[5]).withTiming(currentOriginX.targetHeight, obj)));
        obj[1] = obj;
        obj[2] = callbackV;
        return obj;
      };
      obj = { delayFunction, delay, withSequence: _undefined(outer1_1[5]).withSequence, withTiming: _undefined(outer1_1[5]).withTiming, reverse: reversed, config: obj, callback: callbackV };
      fn.__closure = obj;
      fn.__workletHash = 255577740024;
      fn.__initData = outer1_6;
      return fn;
    };
    return tmp3Result;
  }
}
require("_inherits")(SequencedTransition, require("BaseAnimationBuilder").BaseAnimationBuilder);
let obj = {
  key: "reverse",
  value: function reverse() {
    this.reversed = !this.reversed;
    return this;
  }
};
let items = [obj];
obj = {
  key: "createInstance",
  value: function createInstance() {
    return SequencedTransition();
  }
};
let items1 = [
  obj,
  {
    key: "reverse",
    value: function reverse() {
      const instance = SequencedTransition.createInstance();
      return instance.reverse();
    }
  }
];
const importDefaultResultResult = importDefaultResult(SequencedTransition, items, items1);
importDefaultResultResult.presetName = "SequencedTransition";

export const SequencedTransition = importDefaultResultResult;
// _runtime/metro/01770__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const SequencedTransition = fn;
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
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
let closure_6 = {
  code: "function pnpm_SequencedTransitionTs1(values){const{delayFunction,delay,withSequence,withTiming,reverse,config,callback}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withSequence(withTiming(reverse?values.currentOriginX:values.targetOriginX,config),withTiming(values.targetOriginX,config))),originY:delayFunction(delay,withSequence(withTiming(reverse?values.targetOriginY:values.currentOriginY,config),withTiming(values.targetOriginY,config))),width:delayFunction(delay,withSequence(withTiming(reverse?values.currentWidth:values.targetWidth,config),withTiming(values.targetWidth,config))),height:delayFunction(delay,withSequence(withTiming(reverse?values.targetHeight:values.currentHeight,config),withTiming(values.targetHeight,config)))},callback:callback};}",
};
class SequencedTransition {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, SequencedTransition);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(SequencedTransition);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.reversed = false;
    tmp3Result.build = () => {
      delayFunction = delayFunction.getDelayFunction();
      const callbackV = delayFunction.callbackV;
      const delay = delayFunction.getDelay();
      let num = delayFunction.durationV;
      if (num == null) {
        num = 500;
      }
      let __closure = { duration: num / 2 };
      const reversed = delayFunction.reversed;
      const fn = function e(originX) {
        obj = {
          initialValues: {
            originX: originX.currentOriginX,
            originY: originX.currentOriginY,
            width: originX.currentWidth,
            height: originX.currentHeight,
          },
          animations: null,
          callback: null,
        };
        const obj2 = delayFunction(1708);
        const size = { originX: null, originY: null, width: null, height: null };
        const obj3 = delayFunction(1708);
        let tmp3Result = tmp3(1708);
        size.originX = delayFunction(
          delay,
          obj2.withSequence(
            delayFunction(1708).withTiming(reversed ? originX.currentOriginX : originX.targetOriginX, obj),
            tmp3Result.withTiming(originX.targetOriginX, obj),
          ),
        );
        tmp3Result = tmp3(1708);
        const withTimingResult = delayFunction(1708).withTiming(
          reversed ? originX.currentOriginX : originX.targetOriginX,
          obj,
        );
        const tmp3Result1 = delayFunction(1708);
        const withTimingResult1 = delayFunction(1708).withTiming(
          reversed ? originX.targetOriginY : originX.currentOriginY,
          obj,
        );
        size.originY = delayFunction(
          delay,
          tmp3Result.withSequence(withTimingResult1, delayFunction(1708).withTiming(originX.targetOriginY, obj)),
        );
        const tmp3Result2 = delayFunction(1708);
        const tmp3Result3 = delayFunction(1708);
        const tmp3Result4 = delayFunction(1708);
        const withTimingResult2 = delayFunction(1708).withTiming(
          reversed ? originX.currentWidth : originX.targetWidth,
          obj,
        );
        size.width = delayFunction(
          delay,
          tmp3Result3.withSequence(withTimingResult2, delayFunction(1708).withTiming(originX.targetWidth, obj)),
        );
        const tmp3Result5 = delayFunction(1708);
        const tmp3Result6 = delayFunction(1708);
        const tmp3Result7 = delayFunction(1708);
        const withTimingResult3 = delayFunction(1708).withTiming(
          reversed ? originX.targetHeight : originX.currentHeight,
          obj,
        );
        size.height = delayFunction(
          delay,
          tmp3Result6.withSequence(withTimingResult3, delayFunction(1708).withTiming(originX.targetHeight, obj)),
        );
        obj.animations = size;
        obj.callback = callbackV;
        return obj;
      };
      __closure = {
        delayFunction,
        delay,
        withSequence: SequencedTransition(1708).withSequence,
        withTiming: SequencedTransition(1708).withTiming,
        reverse: reversed,
        config: __closure,
        callback: callbackV,
      };
      fn.__closure = __closure;
      fn.__workletHash = 255577740024;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(SequencedTransition, fn(1706).BaseAnimationBuilder);
const entry = {
  key: "reverse",
  value: function reverse() {
    this.reversed = !this.reversed;
    return this;
  },
};
let items = [entry];
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    return SequencedTransition();
  },
};
let items1 = [
  entry1,
  {
    key: "reverse",
    value: function reverse() {
      const instance = SequencedTransition.createInstance();
      return instance.reverse();
    },
  },
];
const importDefaultResultResult = _createClass(SequencedTransition, items, items1);
importDefaultResultResult.presetName = "SequencedTransition";

export const SequencedTransition = importDefaultResultResult;

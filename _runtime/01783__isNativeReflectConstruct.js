// _runtime/01783__isNativeReflectConstruct.js
import _inheritsDefault from "00098__inherits.js";
import closure_2 from "metro/00041__classCallCheck.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";

const FadingTransition = arg1;
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
  code: "function pnpm_FadingTransitionTs1(values){const{delayFunction,delay,withSequence,withTiming,halfDuration,withDelay,callback}=this.__closure;return{initialValues:{opacity:1,originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{opacity:delayFunction(delay,withSequence(withTiming(0,{duration:halfDuration}),withTiming(1,{duration:halfDuration}))),originX:withDelay(delay+halfDuration,withTiming(values.targetOriginX,{duration:0})),originY:withDelay(delay+halfDuration,withTiming(values.targetOriginY,{duration:0})),width:withDelay(delay+halfDuration,withTiming(values.targetWidth,{duration:0})),height:withDelay(delay+halfDuration,withTiming(values.targetHeight,{duration:0}))},callback:callback};}",
};
class FadingTransition {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_2(this, closure_0);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(closure_0);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      delayFunction = delayFunction.getDelayFunction();
      const callbackV = delayFunction.callbackV;
      const delay = delayFunction.getDelay();
      let num = delayFunction.durationV;
      if (num == null) {
        num = 500;
      }
      const result = num / 2;
      closure_3 = result;
      const fn = function t(currentOriginX) {
        obj = { initialValues: obj, animations: null, callback: null };
        obj = {
          opacity: 1,
          originX: currentOriginX.currentOriginX,
          originY: currentOriginX.currentOriginY,
          width: currentOriginX.currentWidth,
          height: currentOriginX.currentHeight,
        };
        obj = { opacity: null, originX: null, originY: null, width: null, height: null };
        const obj4 = delayFunction(callbackV[5]);
        obj1 = { duration: closure_3 };
        const obj5 = delayFunction(callbackV[5]);
        const withTimingResult = delayFunction(callbackV[5]).withTiming(0, { duration: closure_3 });
        obj[0] = delayFunction(
          delay,
          obj4.withSequence(withTimingResult, delayFunction(callbackV[5]).withTiming(1, { duration: closure_3 })),
        );
        const obj2 = { duration: closure_3 };
        const obj7 = delayFunction(callbackV[5]);
        const sum = delay + closure_3;
        const obj9 = delayFunction(callbackV[5]);
        obj[1] = obj9.withDelay(
          sum,
          delayFunction(callbackV[5]).withTiming(currentOriginX.targetOriginX, { duration: 0 }),
        );
        const obj10 = delayFunction(callbackV[5]);
        const sum1 = delay + closure_3;
        const obj11 = delayFunction(callbackV[5]);
        obj[2] = obj11.withDelay(
          sum1,
          delayFunction(callbackV[5]).withTiming(currentOriginX.targetOriginY, { duration: 0 }),
        );
        const obj12 = delayFunction(callbackV[5]);
        const sum2 = delay + closure_3;
        const obj13 = delayFunction(callbackV[5]);
        obj[3] = obj13.withDelay(
          sum2,
          delayFunction(callbackV[5]).withTiming(currentOriginX.targetWidth, { duration: 0 }),
        );
        const obj14 = delayFunction(callbackV[5]);
        const sum3 = delay + closure_3;
        const obj15 = delayFunction(callbackV[5]);
        obj[4] = obj15.withDelay(
          sum3,
          delayFunction(callbackV[5]).withTiming(currentOriginX.targetHeight, { duration: 0 }),
        );
        obj[1] = obj;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = {
        delayFunction,
        delay,
        withSequence: callback(closure_1_1[5]).withSequence,
        withTiming: callback(closure_1_1[5]).withTiming,
        halfDuration: result,
        withDelay: callback(closure_1_1[5]).withDelay,
        callback: callbackV,
      };
      fn.__workletHash = 3440645628303;
      fn.__initData = closure_1_6;
      return fn;
    };
    return tmp3Result;
  }
}
_inheritsDefault(FadingTransition, require("BaseAnimationBuilder").BaseAnimationBuilder);
let items = [
  {
    key: "createInstance",
    value: function createInstance() {
      return FadingTransition();
    },
  },
];
const importDefaultResultResult = importDefaultResult(FadingTransition, null, items);
importDefaultResultResult.presetName = "FadingTransition";

export const FadingTransition = importDefaultResultResult;

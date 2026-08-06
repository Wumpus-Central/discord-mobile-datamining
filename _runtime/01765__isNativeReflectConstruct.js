// _runtime/01765__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";

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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_6 = { code: "function pnpm_FadingTransitionTs1(values){const{delayFunction,delay,withSequence,withTiming,halfDuration,withDelay,callback}=this.__closure;return{initialValues:{opacity:1,originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{opacity:delayFunction(delay,withSequence(withTiming(0,{duration:halfDuration}),withTiming(1,{duration:halfDuration}))),originX:withDelay(delay+halfDuration,withTiming(values.targetOriginX,{duration:0})),originY:withDelay(delay+halfDuration,withTiming(values.targetOriginY,{duration:0})),width:withDelay(delay+halfDuration,withTiming(values.targetWidth,{duration:0})),height:withDelay(delay+halfDuration,withTiming(values.targetHeight,{duration:0}))},callback:callback};}" };
class FadingTransition {
  constructor() {
    self = this;
    items = [...arguments];
    apply = undefined;
    tmp = _isNativeReflectConstruct(this, apply);
    items1 = [...items];
    tmp2 = __esModule;
    obj = __esModule(apply);
    tmp3 = __esModule;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    tmp3Result.build = () => {
      delayFunction = delayFunction.getDelayFunction();
      const callbackV = delayFunction.callbackV;
      const delay = delayFunction.getDelay();
      let num = delayFunction.durationV;
      if (num == null) {
        num = 500;
      }
      const result = num / 2;
      let _possibleConstructorReturn = result;
      const fn = function t(currentOriginX) {
        obj = { initialValues: obj, animations: null, callback: null };
        obj = { opacity: 1, originX: currentOriginX.currentOriginX, originY: currentOriginX.currentOriginY, width: currentOriginX.currentWidth, height: currentOriginX.currentHeight };
        obj = { opacity: null, originX: null, originY: null, width: null, height: null };
        const obj4 = delayFunction(callbackV[5]);
        const obj1 = { duration: _possibleConstructorReturn };
        const obj5 = delayFunction(callbackV[5]);
        const withTimingResult = delayFunction(callbackV[5]).withTiming(0, { duration: _possibleConstructorReturn });
        obj[0] = delayFunction(delay, obj4.withSequence(withTimingResult, delayFunction(callbackV[5]).withTiming(1, { duration: _possibleConstructorReturn })));
        const obj2 = { duration: _possibleConstructorReturn };
        const obj7 = delayFunction(callbackV[5]);
        const sum = delay + _possibleConstructorReturn;
        const obj9 = delayFunction(callbackV[5]);
        obj[1] = obj9.withDelay(sum, delayFunction(callbackV[5]).withTiming(currentOriginX.targetOriginX, { duration: 0 }));
        const obj10 = delayFunction(callbackV[5]);
        const sum1 = delay + _possibleConstructorReturn;
        const obj11 = delayFunction(callbackV[5]);
        obj[2] = obj11.withDelay(sum1, delayFunction(callbackV[5]).withTiming(currentOriginX.targetOriginY, { duration: 0 }));
        const obj12 = delayFunction(callbackV[5]);
        const sum2 = delay + _possibleConstructorReturn;
        const obj13 = delayFunction(callbackV[5]);
        obj[3] = obj13.withDelay(sum2, delayFunction(callbackV[5]).withTiming(currentOriginX.targetWidth, { duration: 0 }));
        const obj14 = delayFunction(callbackV[5]);
        const sum3 = delay + _possibleConstructorReturn;
        const obj15 = delayFunction(callbackV[5]);
        obj[4] = obj15.withDelay(sum3, delayFunction(callbackV[5]).withTiming(currentOriginX.targetHeight, { duration: 0 }));
        obj[1] = obj;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, withSequence: _undefined(outer1_1[5]).withSequence, withTiming: _undefined(outer1_1[5]).withTiming, halfDuration: result, withDelay: _undefined(outer1_1[5]).withDelay, callback: callbackV };
      fn.__workletHash = 3440645628303;
      fn.__initData = outer1_6;
      return fn;
    };
    return tmp3Result;
  }
}
require("_inherits")(FadingTransition, require("BaseAnimationBuilder").BaseAnimationBuilder);
let items = [
  {
    key: "createInstance",
    value: function createInstance() {
      return FadingTransition();
    }
  }
];
const importDefaultResultResult = importDefaultResult(FadingTransition, null, items);
importDefaultResultResult.presetName = "FadingTransition";

export const FadingTransition = importDefaultResultResult;
// === Module 1767: ? ===

// Module 1767
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const FadingTransition = fn;
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
  } catch (err) {
  }
}
let closure_6 = { code: "function pnpm_FadingTransitionTs1(values){const{delayFunction,delay,withSequence,withTiming,halfDuration,withDelay,callback}=this.__closure;return{initialValues:{opacity:1,originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{opacity:delayFunction(delay,withSequence(withTiming(0,{duration:halfDuration}),withTiming(1,{duration:halfDuration}))),originX:withDelay(delay+halfDuration,withTiming(values.targetOriginX,{duration:0})),originY:withDelay(delay+halfDuration,withTiming(values.targetOriginY,{duration:0})),width:withDelay(delay+halfDuration,withTiming(values.targetWidth,{duration:0})),height:withDelay(delay+halfDuration,withTiming(values.targetHeight,{duration:0}))},callback:callback};}" };
class FadingTransition {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, FadingTransition);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(FadingTransition);
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
      const fn = function t(originX) {
        let obj = { initialValues: { opacity: 1, originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight }, animations: null, callback: null };
        const size = { opacity: null, originX: null, originY: null, width: null, height: null };
        const obj3 = delayFunction(1708);
        obj = { duration: result };
        const obj4 = delayFunction(1708);
        const withTimingResult = delayFunction(1708).withTiming(0, obj);
        obj = { duration: result };
        size.opacity = delayFunction(delay, obj3.withSequence(withTimingResult, delayFunction(1708).withTiming(1, obj)));
        const obj6 = delayFunction(1708);
        const sum = delay + result;
        const obj8 = delayFunction(1708);
        size.originX = obj8.withDelay(sum, delayFunction(1708).withTiming(originX.targetOriginX, { duration: 0 }));
        const obj9 = delayFunction(1708);
        const sum1 = delay + result;
        const obj10 = delayFunction(1708);
        size.originY = obj10.withDelay(sum1, delayFunction(1708).withTiming(originX.targetOriginY, { duration: 0 }));
        const obj11 = delayFunction(1708);
        const sum2 = delay + result;
        const obj12 = delayFunction(1708);
        size.width = obj12.withDelay(sum2, delayFunction(1708).withTiming(originX.targetWidth, { duration: 0 }));
        const obj13 = delayFunction(1708);
        const sum3 = delay + result;
        const obj14 = delayFunction(1708);
        size.height = obj14.withDelay(sum3, delayFunction(1708).withTiming(originX.targetHeight, { duration: 0 }));
        obj.animations = size;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, withSequence: FadingTransition(1708).withSequence, withTiming: FadingTransition(1708).withTiming, halfDuration: result, withDelay: FadingTransition(1708).withDelay, callback: callbackV };
      fn.__workletHash = 3440645628303;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(FadingTransition, fn(1706).BaseAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    return FadingTransition();
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(FadingTransition, null, items);
importDefaultResultResult.presetName = "FadingTransition";

export const FadingTransition = importDefaultResultResult;
// === Module 1774: ? ===

// Module 1774
import BaseAnimationBuilder from "BaseAnimationBuilder" /* 1713 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let size;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
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
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, FadingTransition);
    const items1 = [...items];
    let obj = _getPrototypeOf(FadingTransition);
    if (_isNativeReflectConstruct()) {
      const tmp5 = globalThis;
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const callbackV = closure_0.callbackV;
      const delay = closure_0.getDelay();
      let num = closure_0.durationV;
      if (num == null) {
        num = 500;
      }
      const result = num / 2;
      const fn = function t(originX) {
        let obj10;
        let obj4;
        let obj5;
        let obj7;
        let obj8;
        let obj9;
        let sum;
        let sum1;
        let sum2;
        let sum3;
        let withDelay;
        let withDelay2;
        let withDelay3;
        let withDelay4;
        let withSequence;
        let withTimingResult;
        const obj = { initialValues: { opacity: 1, originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight }, animations: size, callback: callbackV };
        size = { opacity: delayFunction(delay, withSequence(withTimingResult, obj5.withTiming(1, obj4))), originX: withDelay(sum, obj7.withTiming(originX.targetOriginX, { duration: 0 })), originY: withDelay2(sum1, obj8.withTiming(originX.targetOriginY, { duration: 0 })), width: withDelay3(sum2, obj9.withTiming(originX.targetWidth, { duration: 0 })), height: withDelay4(sum3, obj10.withTiming(originX.targetHeight, { duration: 0 })) };
        withSequence = closure_2_0(closure_2_1[5]).withSequence;
        closure_2_0(closure_2_1[5]);
        const obj2 = { duration: result };
        const obj3 = closure_2_0(closure_2_1[5]);
        obj4 = { duration: result };
        withTimingResult = obj3.withTiming(0, obj2);
        obj5 = closure_2_0(closure_2_1[5]);
        withDelay = closure_2_0(closure_2_1[5]).withDelay;
        sum = delay + result;
        closure_2_0(closure_2_1[5]);
        obj7 = closure_2_0(closure_2_1[5]);
        withDelay2 = closure_2_0(closure_2_1[5]).withDelay;
        sum1 = delay + result;
        closure_2_0(closure_2_1[5]);
        obj8 = closure_2_0(closure_2_1[5]);
        withDelay3 = closure_2_0(closure_2_1[5]).withDelay;
        sum2 = delay + result;
        closure_2_0(closure_2_1[5]);
        obj9 = closure_2_0(closure_2_1[5]);
        withDelay4 = closure_2_0(closure_2_1[5]).withDelay;
        sum3 = delay + result;
        closure_2_0(closure_2_1[5]);
        obj10 = closure_2_0(closure_2_1[5]);
        return obj;
      };
      let obj = { delayFunction, delay, withSequence: FadingTransition(closure_2_1[5]).withSequence, withTiming: FadingTransition(closure_2_1[5]).withTiming, halfDuration: result, withDelay: FadingTransition(closure_2_1[5]).withDelay, callback: callbackV };
      fn.__closure = obj;
      fn.__workletHash = 3440645628303;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(FadingTransition, BaseAnimationBuilder.BaseAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = FadingTransition();
    return tmp;
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(FadingTransition, null, items);
importDefaultResultResult.presetName = "FadingTransition";
const FadingTransition_export = importDefaultResultResult;

export { FadingTransition_export as FadingTransition };
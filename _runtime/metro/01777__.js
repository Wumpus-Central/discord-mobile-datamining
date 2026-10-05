// === Module 1777: ? ===

// Module 1777
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
let closure_6 = { code: "function pnpm_SequencedTransitionTs1(values){const{delayFunction,delay,withSequence,withTiming,reverse,config,callback}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withSequence(withTiming(reverse?values.currentOriginX:values.targetOriginX,config),withTiming(values.targetOriginX,config))),originY:delayFunction(delay,withSequence(withTiming(reverse?values.targetOriginY:values.currentOriginY,config),withTiming(values.targetOriginY,config))),width:delayFunction(delay,withSequence(withTiming(reverse?values.currentWidth:values.targetWidth,config),withTiming(values.targetWidth,config))),height:delayFunction(delay,withSequence(withTiming(reverse?values.targetHeight:values.currentHeight,config),withTiming(values.targetHeight,config)))},callback:callback};}" };
class SequencedTransition {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, SequencedTransition);
    const items1 = [...items];
    let obj = _getPrototypeOf(SequencedTransition);
    if (_isNativeReflectConstruct()) {
      const tmp5 = globalThis;
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    let tmp3Result = c3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.reversed = false;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const callbackV = closure_0.callbackV;
      const delay = closure_0.getDelay();
      let num = closure_0.durationV;
      if (num == null) {
        num = 500;
      }
      let obj = { duration: num / 2 };
      const reversed = closure_0.reversed;
      const fn = function e(originX) {
        let tmp3Result;
        let tmp3Result12;
        let tmp3Result15;
        let tmp3Result18;
        let withSequence2;
        let withSequence3;
        let withSequence4;
        let withTimingResult;
        let withTimingResult1;
        let withTimingResult2;
        let withTimingResult3;
        obj = { initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight }, animations: size, callback: callbackV };
        const withSequence = closure_2_0(closure_2_1[5]).withSequence;
        closure_2_0(closure_2_1[5]);
        size = { originX: delayFunction(delay, withSequence(withTimingResult, tmp3Result.withTiming(originX.targetOriginX, obj))), originY: delayFunction(delay, withSequence2(withTimingResult1, tmp3Result12.withTiming(originX.targetOriginY, obj))), width: delayFunction(delay, withSequence3(withTimingResult2, tmp3Result15.withTiming(originX.targetWidth, obj))), height: delayFunction(delay, withSequence4(withTimingResult3, tmp3Result18.withTiming(originX.targetHeight, obj))) };
        const obj2 = closure_2_0(closure_2_1[5]);
        withTimingResult = obj2.withTiming(reversed ? originX.currentOriginX : originX.targetOriginX, obj);
        tmp3Result = closure_2_0(closure_2_1[5]);
        withSequence2 = closure_2_0(closure_2_1[5]).withSequence;
        closure_2_0(closure_2_1[5]);
        const tmp3Result11 = closure_2_0(closure_2_1[5]);
        withTimingResult1 = tmp3Result11.withTiming(reversed ? originX.targetOriginY : originX.currentOriginY, obj);
        tmp3Result12 = closure_2_0(closure_2_1[5]);
        withSequence3 = closure_2_0(closure_2_1[5]).withSequence;
        closure_2_0(closure_2_1[5]);
        const tmp3Result14 = closure_2_0(closure_2_1[5]);
        withTimingResult2 = tmp3Result14.withTiming(reversed ? originX.currentWidth : originX.targetWidth, obj);
        tmp3Result15 = closure_2_0(closure_2_1[5]);
        withSequence4 = closure_2_0(closure_2_1[5]).withSequence;
        closure_2_0(closure_2_1[5]);
        const tmp3Result17 = closure_2_0(closure_2_1[5]);
        withTimingResult3 = tmp3Result17.withTiming(reversed ? originX.targetHeight : originX.currentHeight, obj);
        tmp3Result18 = closure_2_0(closure_2_1[5]);
        return obj;
      };
      let obj2 = { delayFunction, delay, withSequence: SequencedTransition(closure_2_1[5]).withSequence, withTiming: SequencedTransition(closure_2_1[5]).withTiming, reverse: reversed, config: obj, callback: callbackV };
      fn.__closure = obj2;
      fn.__workletHash = 255577740024;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(SequencedTransition, BaseAnimationBuilder.BaseAnimationBuilder);
const entry = {
  key: "reverse",
  value: function reverse() {
    this.reversed = !this.reversed;
    return this;
  }
};
let items = [entry];
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = SequencedTransition();
    return tmp;
  }
};
let items1 = [
  entry1,
  {
    key: "reverse",
    value: function reverse() {
      const instance = SequencedTransition.createInstance();
      return instance.reverse();
    }
  }
];
const importDefaultResultResult = _createClass(SequencedTransition, items, items1);
importDefaultResultResult.presetName = "SequencedTransition";
const SequencedTransition_export = importDefaultResultResult;

export { SequencedTransition_export as SequencedTransition };
// _runtime/01785__isNativeReflectConstruct.js
import _inheritsDefault from "00098__inherits.js";
import closure_2 from "metro/00041__classCallCheck.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";

const JumpingTransition = arg1;
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
  code: "function pnpm_JumpingTransitionTs1(values){const{delayFunction,delay,withTiming,config,withSequence,halfDuration,Easing,callback}=this.__closure;const d=Math.max(Math.abs(values.targetOriginX-values.currentOriginX),Math.abs(values.targetOriginY-values.currentOriginY));return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withTiming(values.targetOriginX,config)),originY:delayFunction(delay,withSequence(withTiming(Math.min(values.targetOriginY,values.currentOriginY)-d,{duration:halfDuration,easing:Easing.out(Easing.exp)}),withTiming(values.targetOriginY,{...config,duration:halfDuration,easing:Easing.bounce}))),width:delayFunction(delay,withTiming(values.targetWidth,config)),height:delayFunction(delay,withTiming(values.targetHeight,config))},callback:callback};}",
};
class JumpingTransition {
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
        num = 300;
      }
      const result = num / 2;
      closure_3 = result;
      let obj = { duration: num };
      const fn = function n(originX) {
        const absolute = Math.abs(originX.targetOriginX - originX.currentOriginX);
        obj = { initialValues: obj, animations: null, callback: null };
        obj = {
          originX: originX.currentOriginX,
          originY: originX.currentOriginY,
          width: originX.currentWidth,
          height: originX.currentHeight,
        };
        obj = { originX: null, originY: null, width: null, height: null };
        const bound = Math.max(absolute, Math.abs(originX.targetOriginY - originX.currentOriginY));
        obj[0] = delayFunction(delay, delayFunction(callbackV[5]).withTiming(originX.targetOriginX, obj));
        const obj4 = delayFunction(callbackV[5]);
        const obj5 = delayFunction(callbackV[5]);
        obj1 = { duration: closure_3, easing: null };
        const diff = Math.min(originX.targetOriginY, originX.currentOriginY) - bound;
        const Easing = delayFunction(callbackV[6]).Easing;
        obj1[1] = Easing.out(delayFunction(callbackV[6]).Easing.exp);
        const obj6 = delayFunction(callbackV[5]);
        const withTimingResult = delayFunction(callbackV[5]).withTiming(diff, obj1);
        const obj2 = {};
        const merged = Object.assign(obj);
        obj2.duration = closure_3;
        obj2.easing = delayFunction(callbackV[6]).Easing.bounce;
        obj[1] = delayFunction(
          delay,
          obj5.withSequence(withTimingResult, delayFunction(callbackV[5]).withTiming(originX.targetOriginY, obj2)),
        );
        const obj8 = delayFunction(callbackV[5]);
        obj[2] = delayFunction(delay, delayFunction(callbackV[5]).withTiming(originX.targetWidth, obj));
        const obj10 = delayFunction(callbackV[5]);
        obj[3] = delayFunction(delay, delayFunction(callbackV[5]).withTiming(originX.targetHeight, obj));
        obj[1] = obj;
        obj[2] = callbackV;
        return obj;
      };
      obj = {
        delayFunction,
        delay,
        withTiming: callback(closure_1_1[5]).withTiming,
        config: obj,
        withSequence: callback(closure_1_1[5]).withSequence,
        halfDuration: result,
        Easing: callback(closure_1_1[6]).Easing,
        callback: callbackV,
      };
      fn.__closure = obj;
      fn.__workletHash = 11549153259849;
      fn.__initData = closure_1_6;
      return fn;
    };
    return tmp3Result;
  }
}
_inheritsDefault(JumpingTransition, require("BaseAnimationBuilder").BaseAnimationBuilder);
let items = [
  {
    key: "createInstance",
    value: function createInstance() {
      return JumpingTransition();
    },
  },
];
const importDefaultResultResult = importDefaultResult(JumpingTransition, null, items);
importDefaultResultResult.presetName = "JumpingTransition";

export const JumpingTransition = importDefaultResultResult;

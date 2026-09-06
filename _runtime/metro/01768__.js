// _runtime/metro/01768__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const JumpingTransition = fn;
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
    tmp = c2(this, JumpingTransition);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(JumpingTransition);
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
        num = 300;
      }
      const result = num / 2;
      closure_3 = result;
      let __closure = { duration: num };
      const fn = function n(originX) {
        const absolute = Math.abs(originX.targetOriginX - originX.currentOriginX);
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
        const size = { originX: null, originY: null, width: null, height: null };
        const bound = Math.max(absolute, Math.abs(originX.targetOriginY - originX.currentOriginY));
        size.originX = delayFunction(delay, delayFunction(1708).withTiming(originX.targetOriginX, obj));
        const obj3 = delayFunction(1708);
        const obj4 = delayFunction(1708);
        obj = { duration: result, easing: null };
        const diff = Math.min(originX.targetOriginY, originX.currentOriginY) - bound;
        const Easing = delayFunction(1688).Easing;
        obj.easing = Easing.out(delayFunction(1688).Easing.exp);
        const obj5 = delayFunction(1708);
        const withTimingResult = delayFunction(1708).withTiming(diff, obj);
        obj = {};
        const merged = Object.assign(obj);
        obj.duration = result;
        obj.easing = delayFunction(1688).Easing.bounce;
        size.originY = delayFunction(
          delay,
          obj4.withSequence(withTimingResult, delayFunction(1708).withTiming(originX.targetOriginY, obj)),
        );
        const obj7 = delayFunction(1708);
        size.width = delayFunction(delay, delayFunction(1708).withTiming(originX.targetWidth, obj));
        const obj9 = delayFunction(1708);
        size.height = delayFunction(delay, delayFunction(1708).withTiming(originX.targetHeight, obj));
        obj.animations = size;
        obj.callback = callbackV;
        return obj;
      };
      __closure = {
        delayFunction,
        delay,
        withTiming: JumpingTransition(1708).withTiming,
        config: __closure,
        withSequence: JumpingTransition(1708).withSequence,
        halfDuration: result,
        Easing: JumpingTransition(1688).Easing,
        callback: callbackV,
      };
      fn.__closure = __closure;
      fn.__workletHash = 11549153259849;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(JumpingTransition, fn(1706).BaseAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    return JumpingTransition();
  },
};
let items = [entry];
const importDefaultResultResult = _createClass(JumpingTransition, null, items);
importDefaultResultResult.presetName = "JumpingTransition";

export const JumpingTransition = importDefaultResultResult;

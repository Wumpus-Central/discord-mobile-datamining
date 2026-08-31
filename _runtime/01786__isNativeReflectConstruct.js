// _runtime/01786__isNativeReflectConstruct.js
import _inheritsDefault from "00098__inherits.js";
import LinearTransition from "metro/00032__slicedToArray.js";
import closure_1 from "metro/00041__classCallCheck.js";
import closure_2 from "metro/00093__possibleConstructorReturn.js";
import closure_3 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";

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
let closure_5 = { code: "function pnpm_LinearTransitionTs1(values){const{delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,animation(values.targetOriginX,config)),originY:delayFunction(delay,animation(values.targetOriginY,config)),width:delayFunction(delay,animation(values.targetWidth,config)),height:delayFunction(delay,animation(values.targetHeight,config))},callback:callback};}" };
class LinearTransition {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, closure_0);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(closure_0);
    tmp3 = closure_2;
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
      const tmp2 = callback(delayFunction.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      closure_2 = tmp4;
      const callbackV = delayFunction.callbackV;
      const delay = delayFunction.getDelay();
      const fn = function t(currentOriginX) {
        obj = { initialValues: obj, animations: null, callback: null };
        obj = { originX: currentOriginX.currentOriginX, originY: currentOriginX.currentOriginY, width: currentOriginX.currentWidth, height: currentOriginX.currentHeight };
        obj = { originX: delayFunction(delay, first(currentOriginX.targetOriginX, closure_2)), originY: delayFunction(delay, first(currentOriginX.targetOriginY, closure_2)), width: delayFunction(delay, first(currentOriginX.targetWidth, closure_2)), height: delayFunction(delay, first(currentOriginX.targetHeight, closure_2)) };
        obj[1] = obj;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 16224579837767;
      fn.__initData = closure_1_5;
      return fn;
    };
    return tmp3Result;
  }
}
_inheritsDefault(LinearTransition, require("BaseAnimationBuilder").ComplexAnimationBuilder);
let items = [
  {
    key: "createInstance",
    value: function createInstance() {
      return LinearTransition();
    }
  }
];
const importDefaultResultResult = importDefaultResult(LinearTransition, null, items);
importDefaultResultResult.presetName = "LinearTransition";

export const LinearTransition = importDefaultResultResult;
export const Layout = importDefaultResultResult;
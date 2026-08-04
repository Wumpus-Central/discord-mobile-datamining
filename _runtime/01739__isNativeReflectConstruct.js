// _runtime/01739__isNativeReflectConstruct.js
import LinearTransition from "_slicedToArray";
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";

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
let closure_5 = { code: "function pnpm_LinearTransitionTs1(values){const{delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,animation(values.targetOriginX,config)),originY:delayFunction(delay,animation(values.targetOriginY,config)),width:delayFunction(delay,animation(values.targetWidth,config)),height:delayFunction(delay,animation(values.targetHeight,config))},callback:callback};}" };
class LinearTransition {
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
      const tmp2 = _undefined(delayFunction.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let _possibleConstructorReturn = tmp4;
      const callbackV = delayFunction.callbackV;
      const delay = delayFunction.getDelay();
      const fn = function t(currentOriginX) {
        obj = { initialValues: obj, animations: null, callback: null };
        obj = { originX: currentOriginX.currentOriginX, originY: currentOriginX.currentOriginY, width: currentOriginX.currentWidth, height: currentOriginX.currentHeight };
        obj = { originX: delayFunction(delay, first(currentOriginX.targetOriginX, _possibleConstructorReturn)), originY: delayFunction(delay, first(currentOriginX.targetOriginY, _possibleConstructorReturn)), width: delayFunction(delay, first(currentOriginX.targetWidth, _possibleConstructorReturn)), height: delayFunction(delay, first(currentOriginX.targetHeight, _possibleConstructorReturn)) };
        obj[1] = obj;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 16224579837767;
      fn.__initData = outer1_5;
      return fn;
    };
    return tmp3Result;
  }
}
require("_inherits")(LinearTransition, require("BaseAnimationBuilder").ComplexAnimationBuilder);
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
// _runtime/01775__isNativeReflectConstruct.js
import PinwheelOut from "_slicedToArray";
import _classCallCheck from "_classCallCheck";
import importDefaultResult from "_createClass";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult1 from "_inherits";

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
let closure_5 = { code: "function pnpm_PinwheelTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{scale:delayFunction(delay,animation(1,config))},{rotate:delayFunction(delay,animation('0rad',config))}]},initialValues:{opacity:0,transform:[{scale:0},{rotate:'5rad'}],...initialValues},callback:callback};}" };
class PinwheelIn {
  constructor() {
    self = this;
    items = [...arguments];
    apply = undefined;
    tmp = _isNativeReflectConstruct(this, apply);
    items1 = [...items];
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(apply);
    tmp3 = _isNativeReflectConstruct;
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
      const delay = delayFunction.getDelay();
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const fn = function e() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(1, _possibleConstructorReturn)), transform: null };
        obj = { scale: delayFunction(delay, first(1, _possibleConstructorReturn)) };
        const items = [obj, { rotate: delayFunction(delay, first("0rad", _possibleConstructorReturn)) }];
        obj[1] = items;
        obj[0] = obj;
        const items1 = [{ scale: 0 }, { rotate: "5rad" }];
        const merged = Object.assign(initialValues);
        obj[1] = { opacity: 0, transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 8890961567516;
      fn.__initData = outer1_5;
      return fn;
    };
    return tmp3Result;
  }
}
PinwheelOut = PinwheelIn;
importDefaultResult1(PinwheelIn, require("BaseAnimationBuilder").ComplexAnimationBuilder);
let obj = {
  key: "createInstance",
  value: function createInstance() {
    return PinwheelOut();
  }
};
let items = [obj];
const importDefaultResultResult = importDefaultResult(PinwheelIn, null, items);
importDefaultResultResult.presetName = "PinwheelIn";
let closure_6 = { code: "function pnpm_PinwheelTs2(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{scale:delayFunction(delay,animation(0,config))},{rotate:delayFunction(delay,animation('5rad',config))}]},initialValues:{opacity:1,transform:[{scale:1},{rotate:'0rad'}],...initialValues},callback:callback};}" };
class PinwheelOut {
  constructor() {
    self = this;
    items = [...arguments];
    apply = undefined;
    tmp = _isNativeReflectConstruct(this, apply);
    items1 = [...items];
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(apply);
    tmp3 = _isNativeReflectConstruct;
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
      const delay = delayFunction.getDelay();
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const fn = function e() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(0, _possibleConstructorReturn)), transform: null };
        obj = { scale: delayFunction(delay, first(0, _possibleConstructorReturn)) };
        const items = [obj, { rotate: delayFunction(delay, first("5rad", _possibleConstructorReturn)) }];
        obj[1] = items;
        obj[0] = obj;
        const items1 = [{ scale: 1 }, { rotate: "0rad" }];
        const merged = Object.assign(initialValues);
        obj[1] = { opacity: 1, transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 15028563671839;
      fn.__initData = outer1_6;
      return fn;
    };
    return tmp3Result;
  }
}
importDefaultResult1(PinwheelOut, require("BaseAnimationBuilder").ComplexAnimationBuilder);
obj = {
  key: "createInstance",
  value: function createInstance() {
    return PinwheelOut();
  }
};
let items1 = [obj];
const importDefaultResultResult1 = importDefaultResult(PinwheelOut, null, items1);
importDefaultResultResult1.presetName = "PinwheelOut";

export const PinwheelIn = importDefaultResultResult;
export const PinwheelOut = importDefaultResultResult1;
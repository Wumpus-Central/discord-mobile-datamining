// _runtime/metro/01758__.js
import _slicedToArray from "00032__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c2 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

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
let closure_5 = {
  code: "function pnpm_PinwheelTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{scale:delayFunction(delay,animation(1,config))},{rotate:delayFunction(delay,animation('0rad',config))}]},initialValues:{opacity:0,transform:[{scale:0},{rotate:'5rad'}],...initialValues},callback:callback};}",
};
class PinwheelIn {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, PinwheelOut);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(PinwheelOut);
    tmp3 = c2;
    if (closure_4()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = _slicedToArray(closure_0.getAnimationAndConfig(), 2);
      const animation = tmp2[0];
      closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function e() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(1, closure_2)), transform: null };
        obj = { scale: delayFunction(delay, first(1, closure_2)) };
        const items = [obj, { rotate: delayFunction(delay, first("0rad", closure_2)) }];
        obj.transform = items;
        obj.animations = obj;
        const obj2 = { opacity: 0, transform: null };
        const items1 = [{ scale: 0 }, { rotate: "5rad" }];
        obj2.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj2;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 8890961567516;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = PinwheelIn;
_inherits(PinwheelIn, fn(1706).ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
let items = [entry];
const importDefaultResultResult = _createClass(PinwheelIn, null, items);
importDefaultResultResult.presetName = "PinwheelIn";
let closure_6 = {
  code: "function pnpm_PinwheelTs2(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{scale:delayFunction(delay,animation(0,config))},{rotate:delayFunction(delay,animation('5rad',config))}]},initialValues:{opacity:1,transform:[{scale:1},{rotate:'0rad'}],...initialValues},callback:callback};}",
};
class PinwheelOut {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, PinwheelOut);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(PinwheelOut);
    tmp3 = c2;
    if (closure_4()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = _slicedToArray(closure_0.getAnimationAndConfig(), 2);
      const animation = tmp2[0];
      closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function e() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(0, closure_2)), transform: null };
        obj = { scale: delayFunction(delay, first(0, closure_2)) };
        const items = [obj, { rotate: delayFunction(delay, first("5rad", closure_2)) }];
        obj.transform = items;
        obj.animations = obj;
        const obj2 = { opacity: 1, transform: null };
        const items1 = [{ scale: 1 }, { rotate: "0rad" }];
        obj2.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj2;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 15028563671839;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = PinwheelOut;
_inherits(PinwheelOut, fn(1706).ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(PinwheelOut, null, items1);
importDefaultResultResult1.presetName = "PinwheelOut";

export const PinwheelIn = importDefaultResultResult;
export const PinwheelOut = importDefaultResultResult1;

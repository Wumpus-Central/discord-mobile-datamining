// _runtime/01780__isNativeReflectConstruct.js
import StretchOutY from "_slicedToArray";
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
let closure_5 = { code: "function pnpm_StretchTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleX:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{scaleX:0}],...initialValues},callback:callback};}" };
class StretchInX {
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
      const fn = function n() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { scaleX: delayFunction(delay, first(1, _possibleConstructorReturn)) };
        const items = [obj];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ scaleX: 0 }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 8236429657427;
      fn.__initData = outer1_5;
      return fn;
    };
    return tmp3Result;
  }
}
StretchOutY = StretchInX;
importDefaultResult1(StretchInX, require("BaseAnimationBuilder").ComplexAnimationBuilder);
let obj = {
  key: "createInstance",
  value: function createInstance() {
    return StretchOutY();
  }
};
let items = [obj];
const importDefaultResultResult = importDefaultResult(StretchInX, null, items);
importDefaultResultResult.presetName = "StretchInX";
let closure_6 = { code: "function pnpm_StretchTs2(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleY:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{scaleY:0}],...initialValues},callback:callback};}" };
class StretchInY {
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
      const fn = function n() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { scaleY: delayFunction(delay, first(1, _possibleConstructorReturn)) };
        const items = [obj];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ scaleY: 0 }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 15758510181808;
      fn.__initData = outer1_6;
      return fn;
    };
    return tmp3Result;
  }
}
StretchOutY = StretchInY;
importDefaultResult1(StretchInY, require("BaseAnimationBuilder").ComplexAnimationBuilder);
obj = {
  key: "createInstance",
  value: function createInstance() {
    return StretchOutY();
  }
};
let items1 = [obj];
const importDefaultResultResult1 = importDefaultResult(StretchInY, null, items1);
importDefaultResultResult1.presetName = "StretchInY";
let closure_7 = { code: "function pnpm_StretchTs3(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleX:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scaleX:1}],...initialValues},callback:callback};}" };
class StretchOutX {
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
      const fn = function n() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { scaleX: delayFunction(delay, first(0, _possibleConstructorReturn)) };
        const items = [obj];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ scaleX: 1 }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 2374207350737;
      fn.__initData = outer1_7;
      return fn;
    };
    return tmp3Result;
  }
}
StretchOutY = StretchOutX;
importDefaultResult1(StretchOutX, require("BaseAnimationBuilder").ComplexAnimationBuilder);
obj = {
  key: "createInstance",
  value: function createInstance() {
    return StretchOutY();
  }
};
const items2 = [obj];
const importDefaultResultResult2 = importDefaultResult(StretchOutX, null, items2);
importDefaultResultResult2.presetName = "StretchOutX";
let closure_8 = { code: "function pnpm_StretchTs4(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleY:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scaleY:1}],...initialValues},callback:callback};}" };
class StretchOutY {
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
      const fn = function n() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { scaleY: delayFunction(delay, first(0, _possibleConstructorReturn)) };
        const items = [obj];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ scaleY: 1 }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 3228047902646;
      fn.__initData = outer1_8;
      return fn;
    };
    return tmp3Result;
  }
}
importDefaultResult1(StretchOutY, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items3 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return StretchOutY();
    }
  }
];
const importDefaultResultResult3 = importDefaultResult(StretchOutY, null, items3);
importDefaultResultResult3.presetName = "StretchOutY";

export const StretchInX = importDefaultResultResult;
export const StretchInY = importDefaultResultResult1;
export const StretchOutX = importDefaultResultResult2;
export const StretchOutY = importDefaultResultResult3;
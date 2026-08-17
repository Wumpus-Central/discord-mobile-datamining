// _runtime/01777__isNativeReflectConstruct.js
import RollOutRight from "_slicedToArray" /* 32 */;
import closure_1 from "_classCallCheck" /* 41 */;
import importDefaultResult from "_createClass" /* 42 */;
import closure_2 from "_possibleConstructorReturn" /* 93 */;
import closure_3 from "_getPrototypeOf" /* 95 */;
import importDefaultResult1 from "_inherits" /* 98 */;

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
let closure_5 = { code: "function pnpm_RollTs1(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(0,config))},{rotate:delayFunction(delay,animation('0deg',config))}]},initialValues:{transform:[{translateX:-values.windowWidth},{rotate:'-180deg'}],...initialValues},callback:callback};}" };
class RollInLeft {
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
      const delay = delayFunction.getDelay();
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const fn = function n(translateX) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateX: delayFunction(delay, first(0, closure_2)) };
        const items = [obj, { rotate: delayFunction(delay, first("0deg", closure_2)) }];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ translateX: -translateX.windowWidth }, { rotate: "-180deg" }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 16303599954051;
      fn.__initData = closure_1_5;
      return fn;
    };
    return tmp3Result;
  }
}
RollOutRight = RollInLeft;
importDefaultResult1(RollInLeft, require("BaseAnimationBuilder").ComplexAnimationBuilder);
let obj = {
  key: "createInstance",
  value: function createInstance() {
    return RollOutRight();
  }
};
let items = [obj];
const importDefaultResultResult = importDefaultResult(RollInLeft, null, items);
importDefaultResultResult.presetName = "RollInLeft";
let closure_6 = { code: "function pnpm_RollTs2(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(0,config))},{rotate:delayFunction(delay,animation('0deg',config))}]},initialValues:{transform:[{translateX:values.windowWidth},{rotate:'180deg'}],...initialValues},callback:callback};}" };
class RollInRight {
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
      const delay = delayFunction.getDelay();
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const fn = function n(translateX) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateX: delayFunction(delay, first(0, closure_2)) };
        const items = [obj, { rotate: delayFunction(delay, first("0deg", closure_2)) }];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ translateX: translateX.windowWidth }, { rotate: "180deg" }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 514820713152;
      fn.__initData = closure_1_6;
      return fn;
    };
    return tmp3Result;
  }
}
RollOutRight = RollInRight;
importDefaultResult1(RollInRight, require("BaseAnimationBuilder").ComplexAnimationBuilder);
obj = {
  key: "createInstance",
  value: function createInstance() {
    return RollOutRight();
  }
};
let items1 = [obj];
const importDefaultResultResult1 = importDefaultResult(RollInRight, null, items1);
importDefaultResultResult1.presetName = "RollInRight";
let closure_7 = { code: "function pnpm_RollTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(-values.windowWidth,config))},{rotate:delayFunction(delay,animation('-180deg',config))}]},initialValues:{transform:[{translateX:0},{rotate:'0deg'}],...initialValues},callback:callback};}" };
class RollOutLeft {
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
      const delay = delayFunction.getDelay();
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const fn = function n(windowWidth) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateX: delayFunction(delay, first(-windowWidth.windowWidth, closure_2)) };
        const items = [obj, { rotate: delayFunction(delay, first("-180deg", closure_2)) }];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ translateX: 0 }, { rotate: "0deg" }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 1569061887041;
      fn.__initData = closure_1_7;
      return fn;
    };
    return tmp3Result;
  }
}
RollOutRight = RollOutLeft;
importDefaultResult1(RollOutLeft, require("BaseAnimationBuilder").ComplexAnimationBuilder);
obj = {
  key: "createInstance",
  value: function createInstance() {
    return RollOutRight();
  }
};
const items2 = [obj];
const importDefaultResultResult2 = importDefaultResult(RollOutLeft, null, items2);
importDefaultResultResult2.presetName = "RollOutLeft";
let closure_8 = { code: "function pnpm_RollTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(values.windowWidth,config))},{rotate:delayFunction(delay,animation('180deg',config))}]},initialValues:{transform:[{translateX:0},{rotate:'0deg'}],...initialValues},callback:callback};}" };
class RollOutRight {
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
      const delay = delayFunction.getDelay();
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const fn = function n(windowWidth) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateX: delayFunction(delay, first(windowWidth.windowWidth, closure_2)) };
        const items = [obj, { rotate: delayFunction(delay, first("180deg", closure_2)) }];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ translateX: 0 }, { rotate: "0deg" }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 9663216530406;
      fn.__initData = closure_1_8;
      return fn;
    };
    return tmp3Result;
  }
}
importDefaultResult1(RollOutRight, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items3 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return RollOutRight();
    }
  }
];
const importDefaultResultResult3 = importDefaultResult(RollOutRight, null, items3);
importDefaultResultResult3.presetName = "RollOutRight";

export const RollInLeft = importDefaultResultResult;
export const RollInRight = importDefaultResultResult1;
export const RollOutLeft = importDefaultResultResult2;
export const RollOutRight = importDefaultResultResult3;
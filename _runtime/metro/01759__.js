// _runtime/metro/01759__.js
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
  code: "function pnpm_RollTs1(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(0,config))},{rotate:delayFunction(delay,animation('0deg',config))}]},initialValues:{transform:[{translateX:-values.windowWidth},{rotate:'-180deg'}],...initialValues},callback:callback};}",
};
class RollInLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, RollOutRight);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(RollOutRight);
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
      const fn = function n(translateX) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateX: delayFunction(delay, first(0, closure_2)) };
        const items = [obj, { rotate: delayFunction(delay, first("0deg", closure_2)) }];
        obj.transform = items;
        obj.animations = obj;
        const obj2 = { transform: null };
        const items1 = [{ translateX: -translateX.windowWidth }, { rotate: "-180deg" }];
        obj2.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj2;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 16303599954051;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = RollInLeft;
_inherits(RollInLeft, fn(1706).ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
let items = [entry];
const importDefaultResultResult = _createClass(RollInLeft, null, items);
importDefaultResultResult.presetName = "RollInLeft";
let closure_6 = {
  code: "function pnpm_RollTs2(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(0,config))},{rotate:delayFunction(delay,animation('0deg',config))}]},initialValues:{transform:[{translateX:values.windowWidth},{rotate:'180deg'}],...initialValues},callback:callback};}",
};
class RollInRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, RollOutRight);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(RollOutRight);
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
      const fn = function n(translateX) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateX: delayFunction(delay, first(0, closure_2)) };
        const items = [obj, { rotate: delayFunction(delay, first("0deg", closure_2)) }];
        obj.transform = items;
        obj.animations = obj;
        const obj2 = { transform: null };
        const items1 = [{ translateX: translateX.windowWidth }, { rotate: "180deg" }];
        obj2.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj2;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 514820713152;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = RollInRight;
_inherits(RollInRight, fn(1706).ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(RollInRight, null, items1);
importDefaultResultResult1.presetName = "RollInRight";
let closure_7 = {
  code: "function pnpm_RollTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(-values.windowWidth,config))},{rotate:delayFunction(delay,animation('-180deg',config))}]},initialValues:{transform:[{translateX:0},{rotate:'0deg'}],...initialValues},callback:callback};}",
};
class RollOutLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, RollOutRight);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(RollOutRight);
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
      const fn = function n(windowWidth) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateX: delayFunction(delay, first(-windowWidth.windowWidth, closure_2)) };
        const items = [obj, { rotate: delayFunction(delay, first("-180deg", closure_2)) }];
        obj.transform = items;
        obj.animations = obj;
        const obj2 = { transform: null };
        const items1 = [{ translateX: 0 }, { rotate: "0deg" }];
        obj2.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj2;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 1569061887041;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = RollOutLeft;
_inherits(RollOutLeft, fn(1706).ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(RollOutLeft, null, items2);
importDefaultResultResult2.presetName = "RollOutLeft";
let closure_8 = {
  code: "function pnpm_RollTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(values.windowWidth,config))},{rotate:delayFunction(delay,animation('180deg',config))}]},initialValues:{transform:[{translateX:0},{rotate:'0deg'}],...initialValues},callback:callback};}",
};
class RollOutRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, RollOutRight);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(RollOutRight);
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
      const fn = function n(windowWidth) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateX: delayFunction(delay, first(windowWidth.windowWidth, closure_2)) };
        const items = [obj, { rotate: delayFunction(delay, first("180deg", closure_2)) }];
        obj.transform = items;
        obj.animations = obj;
        const obj2 = { transform: null };
        const items1 = [{ translateX: 0 }, { rotate: "0deg" }];
        obj2.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj2;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 9663216530406;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = RollOutRight;
_inherits(RollOutRight, fn(1706).ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(RollOutRight, null, items3);
importDefaultResultResult3.presetName = "RollOutRight";

export const RollInLeft = importDefaultResultResult;
export const RollInRight = importDefaultResultResult1;
export const RollOutLeft = importDefaultResultResult2;
export const RollOutRight = importDefaultResultResult3;

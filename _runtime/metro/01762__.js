// === Module 1762: ? ===

// Module 1762
import _slicedToArray from "module_32" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c2 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
let closure_5 = { code: "function pnpm_StretchTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleX:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{scaleX:0}],...initialValues},callback:callback};}" };
class StretchInX {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, StretchOutY);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(StretchOutY);
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
      const fn = function n() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { scaleX: delayFunction(delay, first(1, closure_2)) };
        const items = [obj];
        obj.transform = items;
        obj.animations = obj;
        const obj1 = { transform: null };
        const items1 = [{ scaleX: 0 }];
        obj1.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj1;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 8236429657427;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = StretchInX;
_inherits(StretchInX, fn(1706).ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(StretchInX, null, items);
importDefaultResultResult.presetName = "StretchInX";
let closure_6 = { code: "function pnpm_StretchTs2(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleY:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{scaleY:0}],...initialValues},callback:callback};}" };
class StretchInY {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, StretchOutY);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(StretchOutY);
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
      const fn = function n() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { scaleY: delayFunction(delay, first(1, closure_2)) };
        const items = [obj];
        obj.transform = items;
        obj.animations = obj;
        const obj1 = { transform: null };
        const items1 = [{ scaleY: 0 }];
        obj1.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj1;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 15758510181808;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = StretchInY;
_inherits(StretchInY, fn(1706).ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  }
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(StretchInY, null, items1);
importDefaultResultResult1.presetName = "StretchInY";
let closure_7 = { code: "function pnpm_StretchTs3(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleX:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scaleX:1}],...initialValues},callback:callback};}" };
class StretchOutX {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, StretchOutY);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(StretchOutY);
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
      const fn = function n() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { scaleX: delayFunction(delay, first(0, closure_2)) };
        const items = [obj];
        obj.transform = items;
        obj.animations = obj;
        const obj1 = { transform: null };
        const items1 = [{ scaleX: 1 }];
        obj1.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj1;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 2374207350737;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = StretchOutX;
_inherits(StretchOutX, fn(1706).ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  }
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(StretchOutX, null, items2);
importDefaultResultResult2.presetName = "StretchOutX";
let closure_8 = { code: "function pnpm_StretchTs4(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleY:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scaleY:1}],...initialValues},callback:callback};}" };
class StretchOutY {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, StretchOutY);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(StretchOutY);
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
      const fn = function n() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { scaleY: delayFunction(delay, first(0, closure_2)) };
        const items = [obj];
        obj.transform = items;
        obj.animations = obj;
        const obj1 = { transform: null };
        const items1 = [{ scaleY: 1 }];
        obj1.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj1;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 3228047902646;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = StretchOutY;
_inherits(StretchOutY, fn(1706).ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  }
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(StretchOutY, null, items3);
importDefaultResultResult3.presetName = "StretchOutY";

export const StretchInX = importDefaultResultResult;
export const StretchInY = importDefaultResultResult1;
export const StretchOutX = importDefaultResultResult2;
export const StretchOutY = importDefaultResultResult3;
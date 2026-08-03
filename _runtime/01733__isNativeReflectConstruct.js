import ZoomOutEasyDown from "_slicedToArray";
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
let closure_5 = { code: "function pnpm_ZoomTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{scale:0}],...initialValues},callback:callback};}" };
class ZoomIn {
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
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { scale: delayFunction(delay, first(1, _possibleConstructorReturn)) };
        const items = [obj];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ scale: 0 }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 1262081960523;
      fn.__initData = outer1_5;
      return fn;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomIn;
importDefaultResult1(ZoomIn, require("BaseAnimationBuilder").ComplexAnimationBuilder);
let obj = {
  key: "createInstance",
  value: function createInstance() {
    return ZoomOutEasyDown();
  }
};
let items = [obj];
const importDefaultResultResult = importDefaultResult(ZoomIn, null, items);
importDefaultResultResult.presetName = "ZoomIn";
let closure_6 = { code: "function pnpm_ZoomTs2(){const{delayFunction,delay,animation,config,rotate,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,animation(1,config))},{rotate:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scale:0},{rotate:rotate+\"rad\"}],...initialValues},callback:callback};}" };
class ZoomInRotate {
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
      const tmp3 = _undefined(delayFunction.getAnimationAndConfig(), 2);
      const first = tmp3[0];
      let _possibleConstructorReturn = tmp5;
      const delay = delayFunction.getDelay();
      let str = "0.3";
      if (delayFunction.rotateV) {
        str = tmp.rotateV;
      }
      const callbackV = tmp.callbackV;
      const initialValues = tmp.initialValues;
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { scale: delayFunction(delay, first(1, _possibleConstructorReturn)) };
        const items = [obj, { rotate: delayFunction(delay, first(0, _possibleConstructorReturn)) }];
        obj[0] = items;
        obj[0] = obj;
        const obj2 = { transform: null };
        const items1 = [{ scale: 0 }, ];
        const obj1 = { rotate: delayFunction(delay, first(0, _possibleConstructorReturn)) };
        items1[1] = { rotate: "" + str + "rad" };
        obj2[0] = items1;
        const merged = Object.assign(initialValues);
        obj[1] = obj2;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp3[1], rotate: str, initialValues, callback: callbackV };
      fn.__workletHash = 15519876599894;
      fn.__initData = outer1_6;
      return fn;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomInRotate;
importDefaultResult1(ZoomInRotate, require("BaseAnimationBuilder").ComplexAnimationBuilder);
obj = {
  key: "createInstance",
  value: function createInstance() {
    return ZoomOutEasyDown();
  }
};
let items1 = [obj];
const importDefaultResultResult1 = importDefaultResult(ZoomInRotate, null, items1);
importDefaultResultResult1.presetName = "ZoomInRotate";
let closure_7 = { code: "function pnpm_ZoomTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateX:-values.windowWidth},{scale:0}],...initialValues},callback:callback};}" };
class ZoomInLeft {
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
      const fn = function t(translateX) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateX: delayFunction(delay, first(0, _possibleConstructorReturn)) };
        const items = [obj, { scale: delayFunction(delay, first(1, _possibleConstructorReturn)) }];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ translateX: -translateX.windowWidth }, { scale: 0 }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 9623778840206;
      fn.__initData = outer1_7;
      return fn;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomInLeft;
importDefaultResult1(ZoomInLeft, require("BaseAnimationBuilder").ComplexAnimationBuilder);
obj = {
  key: "createInstance",
  value: function createInstance() {
    return ZoomOutEasyDown();
  }
};
const items2 = [obj];
const importDefaultResultResult2 = importDefaultResult(ZoomInLeft, null, items2);
importDefaultResultResult2.presetName = "ZoomInLeft";
let closure_8 = { code: "function pnpm_ZoomTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateX:values.windowWidth},{scale:0}],...initialValues},callback:callback};}" };
class ZoomInRight {
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
      const fn = function t(translateX) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateX: delayFunction(delay, first(0, _possibleConstructorReturn)) };
        const items = [obj, { scale: delayFunction(delay, first(1, _possibleConstructorReturn)) }];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ translateX: translateX.windowWidth }, { scale: 0 }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 3951441470564;
      fn.__initData = outer1_8;
      return fn;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomInRight;
importDefaultResult1(ZoomInRight, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items3 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return ZoomOutEasyDown();
    }
  }
];
const importDefaultResultResult3 = importDefaultResult(ZoomInRight, null, items3);
importDefaultResultResult3.presetName = "ZoomInRight";
let closure_9 = { code: "function pnpm_ZoomTs5(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateY:-values.windowHeight},{scale:0}],...initialValues},callback:callback};}" };
class ZoomInUp {
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
      const fn = function t(translateY) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateY: delayFunction(delay, first(0, _possibleConstructorReturn)) };
        const items = [obj, { scale: delayFunction(delay, first(1, _possibleConstructorReturn)) }];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ translateY: -translateY.windowHeight }, { scale: 0 }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 11673124834481;
      fn.__initData = outer1_9;
      return fn;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomInUp;
importDefaultResult1(ZoomInUp, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items4 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return ZoomOutEasyDown();
    }
  }
];
const importDefaultResultResult4 = importDefaultResult(ZoomInUp, null, items4);
importDefaultResultResult4.presetName = "ZoomInUp";
let closure_10 = { code: "function pnpm_ZoomTs6(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateY:values.windowHeight},{scale:0}],...initialValues},callback:callback};}" };
class ZoomInDown {
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
      const fn = function t(translateY) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateY: delayFunction(delay, first(0, _possibleConstructorReturn)) };
        const items = [obj, { scale: delayFunction(delay, first(1, _possibleConstructorReturn)) }];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ translateY: translateY.windowHeight }, { scale: 0 }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 16474472853503;
      fn.__initData = outer1_10;
      return fn;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomInDown;
importDefaultResult1(ZoomInDown, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items5 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return ZoomOutEasyDown();
    }
  }
];
const importDefaultResultResult5 = importDefaultResult(ZoomInDown, null, items5);
importDefaultResultResult5.presetName = "ZoomInDown";
let closure_11 = { code: "function pnpm_ZoomTs7(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateY:-values.targetHeight},{scale:0}],...initialValues},callback:callback};}" };
class ZoomInEasyUp {
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
      const fn = function t(targetHeight) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateY: delayFunction(delay, first(0, _possibleConstructorReturn)) };
        const items = [obj, { scale: delayFunction(delay, first(1, _possibleConstructorReturn)) }];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ translateY: -targetHeight.targetHeight }, { scale: 0 }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 9580191401742;
      fn.__initData = outer1_11;
      return fn;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomInEasyUp;
importDefaultResult1(ZoomInEasyUp, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items6 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return ZoomOutEasyDown();
    }
  }
];
const importDefaultResultResult6 = importDefaultResult(ZoomInEasyUp, null, items6);
importDefaultResultResult6.presetName = "ZoomInEasyUp";
let closure_12 = { code: "function pnpm_ZoomTs8(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateY:values.targetHeight},{scale:0}],...initialValues},callback:callback};}" };
class ZoomInEasyDown {
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
      const fn = function t(targetHeight) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateY: delayFunction(delay, first(0, _possibleConstructorReturn)) };
        const items = [obj, { scale: delayFunction(delay, first(1, _possibleConstructorReturn)) }];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ translateY: targetHeight.targetHeight }, { scale: 0 }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 8663849822572;
      fn.__initData = outer1_12;
      return fn;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomInEasyDown;
importDefaultResult1(ZoomInEasyDown, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items7 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return ZoomOutEasyDown();
    }
  }
];
const importDefaultResultResult7 = importDefaultResult(ZoomInEasyDown, null, items7);
importDefaultResultResult7.presetName = "ZoomInEasyDown";
let closure_13 = { code: "function pnpm_ZoomTs9(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scale:1}],...initialValues},callback:callback};}" };
class ZoomOut {
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
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { scale: delayFunction(delay, first(0, _possibleConstructorReturn)) };
        const items = [obj];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ scale: 1 }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 11880899972707;
      fn.__initData = outer1_13;
      return fn;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomOut;
importDefaultResult1(ZoomOut, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items8 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return ZoomOutEasyDown();
    }
  }
];
const importDefaultResultResult8 = importDefaultResult(ZoomOut, null, items8);
importDefaultResultResult8.presetName = "ZoomOut";
let closure_14 = { code: "function pnpm_ZoomTs10(){const{delayFunction,delay,animation,config,rotate,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,animation(0,config))},{rotate:delayFunction(delay,animation(rotate,config))}]},initialValues:{transform:[{scale:1},{rotate:'0rad'}],...initialValues},callback:callback};}" };
class ZoomOutRotate {
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
      const tmp3 = _undefined(delayFunction.getAnimationAndConfig(), 2);
      const first = tmp3[0];
      let _possibleConstructorReturn = tmp5;
      const delay = delayFunction.getDelay();
      let str = "0.3";
      if (delayFunction.rotateV) {
        str = tmp.rotateV;
      }
      const callbackV = tmp.callbackV;
      const initialValues = tmp.initialValues;
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { scale: delayFunction(delay, first(0, _possibleConstructorReturn)) };
        const items = [obj, { rotate: delayFunction(delay, first(str, _possibleConstructorReturn)) }];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ scale: 1 }, { rotate: "0rad" }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp3[1], rotate: str, initialValues, callback: callbackV };
      fn.__workletHash = 14218456220590;
      fn.__initData = outer1_14;
      return fn;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomOutRotate;
importDefaultResult1(ZoomOutRotate, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items9 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return ZoomOutEasyDown();
    }
  }
];
const importDefaultResultResult9 = importDefaultResult(ZoomOutRotate, null, items9);
importDefaultResultResult9.presetName = "ZoomOutRotate";
let closure_15 = { code: "function pnpm_ZoomTs11(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(-values.windowWidth,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateX:0},{scale:1}],...initialValues},callback:callback};}" };
class ZoomOutLeft {
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
      const fn = function t(windowWidth) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateX: delayFunction(delay, first(-windowWidth.windowWidth, _possibleConstructorReturn)) };
        const items = [obj, { scale: delayFunction(delay, first(0, _possibleConstructorReturn)) }];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ translateX: 0 }, { scale: 1 }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 4016039076957;
      fn.__initData = outer1_15;
      return fn;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomOutLeft;
importDefaultResult1(ZoomOutLeft, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items10 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return ZoomOutEasyDown();
    }
  }
];
const importDefaultResultResult10 = importDefaultResult(ZoomOutLeft, null, items10);
importDefaultResultResult10.presetName = "ZoomOutLeft";
let closure_16 = { code: "function pnpm_ZoomTs12(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(values.windowWidth,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateX:0},{scale:1}],...initialValues},callback:callback};}" };
class ZoomOutRight {
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
      const fn = function t(windowWidth) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateX: delayFunction(delay, first(windowWidth.windowWidth, _possibleConstructorReturn)) };
        const items = [obj, { scale: delayFunction(delay, first(0, _possibleConstructorReturn)) }];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ translateX: 0 }, { scale: 1 }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 13414598349747;
      fn.__initData = outer1_16;
      return fn;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomOutRight;
importDefaultResult1(ZoomOutRight, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items11 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return ZoomOutEasyDown();
    }
  }
];
const importDefaultResultResult11 = importDefaultResult(ZoomOutRight, null, items11);
importDefaultResultResult11.presetName = "ZoomOutRight";
let closure_17 = { code: "function pnpm_ZoomTs13(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(-values.windowHeight,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateY:0},{scale:1}],...initialValues},callback:callback};}" };
class ZoomOutUp {
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
      const fn = function t(windowHeight) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateY: delayFunction(delay, first(-windowHeight.windowHeight, _possibleConstructorReturn)) };
        const items = [obj, { scale: delayFunction(delay, first(0, _possibleConstructorReturn)) }];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ translateY: 0 }, { scale: 1 }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 570907039910;
      fn.__initData = outer1_17;
      return fn;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomOutUp;
importDefaultResult1(ZoomOutUp, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items12 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return ZoomOutEasyDown();
    }
  }
];
const importDefaultResultResult12 = importDefaultResult(ZoomOutUp, null, items12);
importDefaultResultResult12.presetName = "ZoomOutUp";
let closure_18 = { code: "function pnpm_ZoomTs14(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(values.windowHeight,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateY:0},{scale:1}],...initialValues},callback:callback};}" };
class ZoomOutDown {
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
      const fn = function t(windowHeight) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateY: delayFunction(delay, first(windowHeight.windowHeight, _possibleConstructorReturn)) };
        const items = [obj, { scale: delayFunction(delay, first(0, _possibleConstructorReturn)) }];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ translateY: 0 }, { scale: 1 }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 4332816695692;
      fn.__initData = outer1_18;
      return fn;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomOutDown;
importDefaultResult1(ZoomOutDown, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items13 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return ZoomOutEasyDown();
    }
  }
];
const importDefaultResultResult13 = importDefaultResult(ZoomOutDown, null, items13);
importDefaultResultResult13.presetName = "ZoomOutDown";
let closure_19 = { code: "function pnpm_ZoomTs15(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(-values.currentHeight,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateY:0},{scale:1}],...initialValues},callback:callback};}" };
class ZoomOutEasyUp {
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
      const fn = function t(currentHeight) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateY: delayFunction(delay, first(-currentHeight.currentHeight, _possibleConstructorReturn)) };
        const items = [obj, { scale: delayFunction(delay, first(0, _possibleConstructorReturn)) }];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ translateY: 0 }, { scale: 1 }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 1576389803461;
      fn.__initData = outer1_19;
      return fn;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomOutEasyUp;
importDefaultResult1(ZoomOutEasyUp, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items14 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return ZoomOutEasyDown();
    }
  }
];
const importDefaultResultResult14 = importDefaultResult(ZoomOutEasyUp, null, items14);
importDefaultResultResult14.presetName = "ZoomOutEasyUp";
let closure_20 = { code: "function pnpm_ZoomTs16(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(values.currentHeight,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateY:0},{scale:1}],...initialValues},callback:callback};}" };
class ZoomOutEasyDown {
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
      const fn = function t(currentHeight) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateY: delayFunction(delay, first(currentHeight.currentHeight, _possibleConstructorReturn)) };
        const items = [obj, { scale: delayFunction(delay, first(0, _possibleConstructorReturn)) }];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ translateY: 0 }, { scale: 1 }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 14278999536075;
      fn.__initData = outer1_20;
      return fn;
    };
    return tmp3Result;
  }
}
importDefaultResult1(ZoomOutEasyDown, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items15 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return ZoomOutEasyDown();
    }
  }
];
const importDefaultResultResult15 = importDefaultResult(ZoomOutEasyDown, null, items15);
importDefaultResultResult15.presetName = "ZoomOutEasyDown";

export const ZoomIn = importDefaultResultResult;
export const ZoomInRotate = importDefaultResultResult1;
export const ZoomInLeft = importDefaultResultResult2;
export const ZoomInRight = importDefaultResultResult3;
export const ZoomInUp = importDefaultResultResult4;
export const ZoomInDown = importDefaultResultResult5;
export const ZoomInEasyUp = importDefaultResultResult6;
export const ZoomInEasyDown = importDefaultResultResult7;
export const ZoomOut = importDefaultResultResult8;
export const ZoomOutRotate = importDefaultResultResult9;
export const ZoomOutLeft = importDefaultResultResult10;
export const ZoomOutRight = importDefaultResultResult11;
export const ZoomOutUp = importDefaultResultResult12;
export const ZoomOutDown = importDefaultResultResult13;
export const ZoomOutEasyUp = importDefaultResultResult14;
export const ZoomOutEasyDown = importDefaultResultResult15;
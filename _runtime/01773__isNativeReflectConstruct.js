// _runtime/01773__isNativeReflectConstruct.js
import FadeOutDown from "_slicedToArray";
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
let closure_5 = { code: "function pnpm_FadeTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config))},initialValues:{opacity:0,...initialValues},callback:callback};}" };
class FadeIn {
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
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const delay = delayFunction.getDelay();
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(1, _possibleConstructorReturn)) };
        obj[0] = obj;
        obj = { opacity: 0 };
        const merged = Object.assign(initialValues);
        obj[1] = obj;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 4187624806586;
      fn.__initData = outer1_5;
      return fn;
    };
    return tmp3Result;
  }
}
FadeOutDown = FadeIn;
importDefaultResult1(FadeIn, require("BaseAnimationBuilder").ComplexAnimationBuilder);
let obj = {
  key: "createInstance",
  value: function createInstance() {
    return FadeOutDown();
  }
};
let items = [obj];
const importDefaultResultResult = importDefaultResult(FadeIn, null, items);
importDefaultResultResult.presetName = "FadeIn";
let closure_6 = { code: "function pnpm_FadeTs2(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateX:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateX:25}],...initialValues},callback:callback};}" };
class FadeInRight {
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
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const delay = delayFunction.getDelay();
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(1, _possibleConstructorReturn)), transform: null };
        obj = { translateX: delayFunction(delay, first(0, _possibleConstructorReturn)) };
        const items = [obj];
        obj[1] = items;
        obj[0] = obj;
        const items1 = [{ translateX: 25 }];
        const merged = Object.assign(initialValues);
        obj[1] = { opacity: 0, transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 5328703857616;
      fn.__initData = outer1_6;
      return fn;
    };
    return tmp3Result;
  }
}
FadeOutDown = FadeInRight;
importDefaultResult1(FadeInRight, require("BaseAnimationBuilder").ComplexAnimationBuilder);
obj = {
  key: "createInstance",
  value: function createInstance() {
    return FadeOutDown();
  }
};
let items1 = [obj];
const importDefaultResultResult1 = importDefaultResult(FadeInRight, null, items1);
importDefaultResultResult1.presetName = "FadeInRight";
let closure_7 = { code: "function pnpm_FadeTs3(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateX:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateX:-25}],...initialValues},callback:callback};}" };
class FadeInLeft {
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
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const delay = delayFunction.getDelay();
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(1, _possibleConstructorReturn)), transform: null };
        obj = { translateX: delayFunction(delay, first(0, _possibleConstructorReturn)) };
        const items = [obj];
        obj[1] = items;
        obj[0] = obj;
        const items1 = [{ translateX: -25 }];
        const merged = Object.assign(initialValues);
        obj[1] = { opacity: 0, transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 3876464806620;
      fn.__initData = outer1_7;
      return fn;
    };
    return tmp3Result;
  }
}
FadeOutDown = FadeInLeft;
importDefaultResult1(FadeInLeft, require("BaseAnimationBuilder").ComplexAnimationBuilder);
obj = {
  key: "createInstance",
  value: function createInstance() {
    return FadeOutDown();
  }
};
const items2 = [obj];
const importDefaultResultResult2 = importDefaultResult(FadeInLeft, null, items2);
importDefaultResultResult2.presetName = "FadeInLeft";
let closure_8 = { code: "function pnpm_FadeTs4(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateY:-25}],...initialValues},callback:callback};}" };
class FadeInUp {
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
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const delay = delayFunction.getDelay();
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(1, _possibleConstructorReturn)), transform: null };
        obj = { translateY: delayFunction(delay, first(0, _possibleConstructorReturn)) };
        const items = [obj];
        obj[1] = items;
        obj[0] = obj;
        const items1 = [{ translateY: -25 }];
        const merged = Object.assign(initialValues);
        obj[1] = { opacity: 0, transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 14652570092763;
      fn.__initData = outer1_8;
      return fn;
    };
    return tmp3Result;
  }
}
FadeOutDown = FadeInUp;
importDefaultResult1(FadeInUp, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items3 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return FadeOutDown();
    }
  }
];
const importDefaultResultResult3 = importDefaultResult(FadeInUp, null, items3);
importDefaultResultResult3.presetName = "FadeInUp";
let closure_9 = { code: "function pnpm_FadeTs5(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateY:25}],...initialValues},callback:callback};}" };
class FadeInDown {
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
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const delay = delayFunction.getDelay();
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(1, _possibleConstructorReturn)), transform: null };
        obj = { translateY: delayFunction(delay, first(0, _possibleConstructorReturn)) };
        const items = [obj];
        obj[1] = items;
        obj[0] = obj;
        const items1 = [{ translateY: 25 }];
        const merged = Object.assign(initialValues);
        obj[1] = { opacity: 0, transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 3370389664855;
      fn.__initData = outer1_9;
      return fn;
    };
    return tmp3Result;
  }
}
FadeOutDown = FadeInDown;
importDefaultResult1(FadeInDown, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items4 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return FadeOutDown();
    }
  }
];
const importDefaultResultResult4 = importDefaultResult(FadeInDown, null, items4);
importDefaultResultResult4.presetName = "FadeInDown";
let closure_10 = { code: "function pnpm_FadeTs6(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config))},initialValues:{opacity:1,...initialValues},callback:callback};}" };
class FadeOut {
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
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const delay = delayFunction.getDelay();
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(0, _possibleConstructorReturn)) };
        obj[0] = obj;
        obj = { opacity: 1 };
        const merged = Object.assign(initialValues);
        obj[1] = obj;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 12496093665501;
      fn.__initData = outer1_10;
      return fn;
    };
    return tmp3Result;
  }
}
FadeOutDown = FadeOut;
importDefaultResult1(FadeOut, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items5 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return FadeOutDown();
    }
  }
];
const importDefaultResultResult5 = importDefaultResult(FadeOut, null, items5);
importDefaultResultResult5.presetName = "FadeOut";
let closure_11 = { code: "function pnpm_FadeTs7(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(25,config))}]},initialValues:{opacity:1,transform:[{translateX:0}],...initialValues},callback:callback};}" };
class FadeOutRight {
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
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const delay = delayFunction.getDelay();
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(0, _possibleConstructorReturn)), transform: null };
        obj = { translateX: delayFunction(delay, first(25, _possibleConstructorReturn)) };
        const items = [obj];
        obj[1] = items;
        obj[0] = obj;
        const items1 = [{ translateX: 0 }];
        const merged = Object.assign(initialValues);
        obj[1] = { opacity: 1, transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 8966511332149;
      fn.__initData = outer1_11;
      return fn;
    };
    return tmp3Result;
  }
}
FadeOutDown = FadeOutRight;
importDefaultResult1(FadeOutRight, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items6 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return FadeOutDown();
    }
  }
];
const importDefaultResultResult6 = importDefaultResult(FadeOutRight, null, items6);
importDefaultResultResult6.presetName = "FadeOutRight";
let closure_12 = { code: "function pnpm_FadeTs8(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(-25,config))}]},initialValues:{opacity:1,transform:[{translateX:0}],...initialValues},callback:callback};}" };
class FadeOutLeft {
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
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const delay = delayFunction.getDelay();
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(0, _possibleConstructorReturn)), transform: null };
        obj = { translateX: delayFunction(delay, first(-25, _possibleConstructorReturn)) };
        const items = [obj];
        obj[1] = items;
        obj[0] = obj;
        const items1 = [{ translateX: 0 }];
        const merged = Object.assign(initialValues);
        obj[1] = { opacity: 1, transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 7570822684087;
      fn.__initData = outer1_12;
      return fn;
    };
    return tmp3Result;
  }
}
FadeOutDown = FadeOutLeft;
importDefaultResult1(FadeOutLeft, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items7 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return FadeOutDown();
    }
  }
];
const importDefaultResultResult7 = importDefaultResult(FadeOutLeft, null, items7);
importDefaultResultResult7.presetName = "FadeOutLeft";
let closure_13 = { code: "function pnpm_FadeTs9(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateY:delayFunction(delay,animation(-25,config))}]},initialValues:{opacity:1,transform:[{translateY:0}],...initialValues},callback:callback};}" };
class FadeOutUp {
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
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const delay = delayFunction.getDelay();
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(0, _possibleConstructorReturn)), transform: null };
        obj = { translateY: delayFunction(delay, first(-25, _possibleConstructorReturn)) };
        const items = [obj];
        obj[1] = items;
        obj[0] = obj;
        const items1 = [{ translateY: 0 }];
        const merged = Object.assign(initialValues);
        obj[1] = { opacity: 1, transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 7080775562358;
      fn.__initData = outer1_13;
      return fn;
    };
    return tmp3Result;
  }
}
FadeOutDown = FadeOutUp;
importDefaultResult1(FadeOutUp, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items8 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return FadeOutDown();
    }
  }
];
const importDefaultResultResult8 = importDefaultResult(FadeOutUp, null, items8);
importDefaultResultResult8.presetName = "FadeOutUp";
let closure_14 = { code: "function pnpm_FadeTs10(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateY:delayFunction(delay,animation(25,config))}]},initialValues:{opacity:1,transform:[{translateY:0}],...initialValues},callback:callback};}" };
class FadeOutDown {
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
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const delay = delayFunction.getDelay();
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(0, _possibleConstructorReturn)), transform: null };
        obj = { translateY: delayFunction(delay, first(25, _possibleConstructorReturn)) };
        const items = [obj];
        obj[1] = items;
        obj[0] = obj;
        const items1 = [{ translateY: 0 }];
        const merged = Object.assign(initialValues);
        obj[1] = { opacity: 1, transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 4897427935171;
      fn.__initData = outer1_14;
      return fn;
    };
    return tmp3Result;
  }
}
importDefaultResult1(FadeOutDown, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items9 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return FadeOutDown();
    }
  }
];
const importDefaultResultResult9 = importDefaultResult(FadeOutDown, null, items9);
importDefaultResultResult9.presetName = "FadeOutDown";

export const FadeIn = importDefaultResultResult;
export const FadeInRight = importDefaultResultResult1;
export const FadeInLeft = importDefaultResultResult2;
export const FadeInUp = importDefaultResultResult3;
export const FadeInDown = importDefaultResultResult4;
export const FadeOut = importDefaultResultResult5;
export const FadeOutRight = importDefaultResultResult6;
export const FadeOutLeft = importDefaultResultResult7;
export const FadeOutUp = importDefaultResultResult8;
export const FadeOutDown = importDefaultResultResult9;
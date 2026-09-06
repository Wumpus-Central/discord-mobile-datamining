// === Module 1755: ? ===

// Module 1755
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
let closure_5 = { code: "function pnpm_FadeTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config))},initialValues:{opacity:0,...initialValues},callback:callback};}" };
class FadeIn {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, FadeOutDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(FadeOutDown);
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
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const delay = closure_0.getDelay();
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(1, closure_2)) };
        obj.animations = obj;
        obj = { opacity: 0 };
        const merged = Object.assign(initialValues);
        obj.initialValues = obj;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 4187624806586;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = FadeIn;
_inherits(FadeIn, fn(1706).ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(FadeIn, null, items);
importDefaultResultResult.presetName = "FadeIn";
let closure_6 = { code: "function pnpm_FadeTs2(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateX:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateX:25}],...initialValues},callback:callback};}" };
class FadeInRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, FadeOutDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(FadeOutDown);
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
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const delay = closure_0.getDelay();
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(1, closure_2)), transform: null };
        obj = { translateX: delayFunction(delay, first(0, closure_2)) };
        const items = [obj];
        obj.transform = items;
        obj.animations = obj;
        const obj1 = { opacity: 0, transform: null };
        const items1 = [{ translateX: 25 }];
        obj1.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj1;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 5328703857616;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = FadeInRight;
_inherits(FadeInRight, fn(1706).ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  }
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(FadeInRight, null, items1);
importDefaultResultResult1.presetName = "FadeInRight";
let closure_7 = { code: "function pnpm_FadeTs3(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateX:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateX:-25}],...initialValues},callback:callback};}" };
class FadeInLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, FadeOutDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(FadeOutDown);
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
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const delay = closure_0.getDelay();
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(1, closure_2)), transform: null };
        obj = { translateX: delayFunction(delay, first(0, closure_2)) };
        const items = [obj];
        obj.transform = items;
        obj.animations = obj;
        const obj1 = { opacity: 0, transform: null };
        const items1 = [{ translateX: -25 }];
        obj1.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj1;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 3876464806620;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = FadeInLeft;
_inherits(FadeInLeft, fn(1706).ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  }
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(FadeInLeft, null, items2);
importDefaultResultResult2.presetName = "FadeInLeft";
let closure_8 = { code: "function pnpm_FadeTs4(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateY:-25}],...initialValues},callback:callback};}" };
class FadeInUp {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, FadeOutDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(FadeOutDown);
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
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const delay = closure_0.getDelay();
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(1, closure_2)), transform: null };
        obj = { translateY: delayFunction(delay, first(0, closure_2)) };
        const items = [obj];
        obj.transform = items;
        obj.animations = obj;
        const obj1 = { opacity: 0, transform: null };
        const items1 = [{ translateY: -25 }];
        obj1.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj1;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 14652570092763;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = FadeInUp;
_inherits(FadeInUp, fn(1706).ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  }
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(FadeInUp, null, items3);
importDefaultResultResult3.presetName = "FadeInUp";
let closure_9 = { code: "function pnpm_FadeTs5(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{translateY:25}],...initialValues},callback:callback};}" };
class FadeInDown {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, FadeOutDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(FadeOutDown);
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
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const delay = closure_0.getDelay();
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(1, closure_2)), transform: null };
        obj = { translateY: delayFunction(delay, first(0, closure_2)) };
        const items = [obj];
        obj.transform = items;
        obj.animations = obj;
        const obj1 = { opacity: 0, transform: null };
        const items1 = [{ translateY: 25 }];
        obj1.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj1;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 3370389664855;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = FadeInDown;
_inherits(FadeInDown, fn(1706).ComplexAnimationBuilder);
const entry4 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  }
};
const items4 = [entry4];
const importDefaultResultResult4 = _createClass(FadeInDown, null, items4);
importDefaultResultResult4.presetName = "FadeInDown";
let closure_10 = { code: "function pnpm_FadeTs6(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config))},initialValues:{opacity:1,...initialValues},callback:callback};}" };
class FadeOut {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, FadeOutDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(FadeOutDown);
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
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const delay = closure_0.getDelay();
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(0, closure_2)) };
        obj.animations = obj;
        obj = { opacity: 1 };
        const merged = Object.assign(initialValues);
        obj.initialValues = obj;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 12496093665501;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = FadeOut;
_inherits(FadeOut, fn(1706).ComplexAnimationBuilder);
const entry5 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  }
};
const items5 = [entry5];
const importDefaultResultResult5 = _createClass(FadeOut, null, items5);
importDefaultResultResult5.presetName = "FadeOut";
let closure_11 = { code: "function pnpm_FadeTs7(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(25,config))}]},initialValues:{opacity:1,transform:[{translateX:0}],...initialValues},callback:callback};}" };
class FadeOutRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, FadeOutDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(FadeOutDown);
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
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const delay = closure_0.getDelay();
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(0, closure_2)), transform: null };
        obj = { translateX: delayFunction(delay, first(25, closure_2)) };
        const items = [obj];
        obj.transform = items;
        obj.animations = obj;
        const obj1 = { opacity: 1, transform: null };
        const items1 = [{ translateX: 0 }];
        obj1.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj1;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 8966511332149;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = FadeOutRight;
_inherits(FadeOutRight, fn(1706).ComplexAnimationBuilder);
const entry6 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  }
};
const items6 = [entry6];
const importDefaultResultResult6 = _createClass(FadeOutRight, null, items6);
importDefaultResultResult6.presetName = "FadeOutRight";
let closure_12 = { code: "function pnpm_FadeTs8(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(-25,config))}]},initialValues:{opacity:1,transform:[{translateX:0}],...initialValues},callback:callback};}" };
class FadeOutLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, FadeOutDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(FadeOutDown);
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
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const delay = closure_0.getDelay();
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(0, closure_2)), transform: null };
        obj = { translateX: delayFunction(delay, first(-25, closure_2)) };
        const items = [obj];
        obj.transform = items;
        obj.animations = obj;
        const obj1 = { opacity: 1, transform: null };
        const items1 = [{ translateX: 0 }];
        obj1.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj1;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 7570822684087;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = FadeOutLeft;
_inherits(FadeOutLeft, fn(1706).ComplexAnimationBuilder);
const entry7 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  }
};
const items7 = [entry7];
const importDefaultResultResult7 = _createClass(FadeOutLeft, null, items7);
importDefaultResultResult7.presetName = "FadeOutLeft";
let closure_13 = { code: "function pnpm_FadeTs9(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateY:delayFunction(delay,animation(-25,config))}]},initialValues:{opacity:1,transform:[{translateY:0}],...initialValues},callback:callback};}" };
class FadeOutUp {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, FadeOutDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(FadeOutDown);
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
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const delay = closure_0.getDelay();
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(0, closure_2)), transform: null };
        obj = { translateY: delayFunction(delay, first(-25, closure_2)) };
        const items = [obj];
        obj.transform = items;
        obj.animations = obj;
        const obj1 = { opacity: 1, transform: null };
        const items1 = [{ translateY: 0 }];
        obj1.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj1;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 7080775562358;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = FadeOutUp;
_inherits(FadeOutUp, fn(1706).ComplexAnimationBuilder);
const entry8 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  }
};
const items8 = [entry8];
const importDefaultResultResult8 = _createClass(FadeOutUp, null, items8);
importDefaultResultResult8.presetName = "FadeOutUp";
let closure_14 = { code: "function pnpm_FadeTs10(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateY:delayFunction(delay,animation(25,config))}]},initialValues:{opacity:1,transform:[{translateY:0}],...initialValues},callback:callback};}" };
class FadeOutDown {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, FadeOutDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(FadeOutDown);
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
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const delay = closure_0.getDelay();
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(0, closure_2)), transform: null };
        obj = { translateY: delayFunction(delay, first(25, closure_2)) };
        const items = [obj];
        obj.transform = items;
        obj.animations = obj;
        const obj1 = { opacity: 1, transform: null };
        const items1 = [{ translateY: 0 }];
        obj1.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj1;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 4897427935171;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = FadeOutDown;
_inherits(FadeOutDown, fn(1706).ComplexAnimationBuilder);
const entry9 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  }
};
const items9 = [entry9];
const importDefaultResultResult9 = _createClass(FadeOutDown, null, items9);
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
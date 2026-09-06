// _runtime/metro/01763__.js
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
  code: "function pnpm_ZoomTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{scale:0}],...initialValues},callback:callback};}",
};
class ZoomIn {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(ZoomOutEasyDown);
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
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { scale: delayFunction(delay, first(1, closure_2)) };
        const items = [obj];
        obj.transform = items;
        obj.animations = obj;
        const obj1 = { transform: null };
        const items1 = [{ scale: 0 }];
        obj1.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj1;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 1262081960523;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = ZoomIn;
_inherits(ZoomIn, fn(1706).ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
let items = [entry];
const importDefaultResultResult = _createClass(ZoomIn, null, items);
importDefaultResultResult.presetName = "ZoomIn";
let closure_6 = {
  code: 'function pnpm_ZoomTs2(){const{delayFunction,delay,animation,config,rotate,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,animation(1,config))},{rotate:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scale:0},{rotate:rotate+"rad"}],...initialValues},callback:callback};}',
};
class ZoomInRotate {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(ZoomOutEasyDown);
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
      const tmp3 = _slicedToArray(closure_0.getAnimationAndConfig(), 2);
      const animation = tmp3[0];
      closure_2 = tmp5;
      const delay = closure_0.getDelay();
      let str = "0.3";
      if (closure_0.rotateV) {
        str = closure_0.rotateV;
      }
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { scale: delayFunction(delay, first(1, closure_2)) };
        const items = [obj, { rotate: delayFunction(delay, first(0, closure_2)) }];
        obj.transform = items;
        obj.animations = obj;
        const obj2 = { transform: null };
        const items1 = [{ scale: 0 }];
        const obj1 = { rotate: delayFunction(delay, first(0, closure_2)) };
        items1[1] = { rotate: "" + str + "rad" };
        obj2.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj2;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = {
        delayFunction,
        delay,
        animation,
        config: tmp3[1],
        rotate: str,
        initialValues,
        callback: callbackV,
      };
      fn.__workletHash = 15519876599894;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = ZoomInRotate;
_inherits(ZoomInRotate, fn(1706).ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(ZoomInRotate, null, items1);
importDefaultResultResult1.presetName = "ZoomInRotate";
let closure_7 = {
  code: "function pnpm_ZoomTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateX:-values.windowWidth},{scale:0}],...initialValues},callback:callback};}",
};
class ZoomInLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(ZoomOutEasyDown);
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
      const fn = function t(translateX) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateX: delayFunction(delay, first(0, closure_2)) };
        const items = [obj, { scale: delayFunction(delay, first(1, closure_2)) }];
        obj.transform = items;
        obj.animations = obj;
        const obj2 = { transform: null };
        const items1 = [{ translateX: -translateX.windowWidth }, { scale: 0 }];
        obj2.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj2;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 9623778840206;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = ZoomInLeft;
_inherits(ZoomInLeft, fn(1706).ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(ZoomInLeft, null, items2);
importDefaultResultResult2.presetName = "ZoomInLeft";
let closure_8 = {
  code: "function pnpm_ZoomTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateX:values.windowWidth},{scale:0}],...initialValues},callback:callback};}",
};
class ZoomInRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(ZoomOutEasyDown);
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
      const fn = function t(translateX) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateX: delayFunction(delay, first(0, closure_2)) };
        const items = [obj, { scale: delayFunction(delay, first(1, closure_2)) }];
        obj.transform = items;
        obj.animations = obj;
        const obj2 = { transform: null };
        const items1 = [{ translateX: translateX.windowWidth }, { scale: 0 }];
        obj2.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj2;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 3951441470564;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = ZoomInRight;
_inherits(ZoomInRight, fn(1706).ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(ZoomInRight, null, items3);
importDefaultResultResult3.presetName = "ZoomInRight";
let closure_9 = {
  code: "function pnpm_ZoomTs5(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateY:-values.windowHeight},{scale:0}],...initialValues},callback:callback};}",
};
class ZoomInUp {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(ZoomOutEasyDown);
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
      const fn = function t(translateY) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateY: delayFunction(delay, first(0, closure_2)) };
        const items = [obj, { scale: delayFunction(delay, first(1, closure_2)) }];
        obj.transform = items;
        obj.animations = obj;
        const obj2 = { transform: null };
        const items1 = [{ translateY: -translateY.windowHeight }, { scale: 0 }];
        obj2.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj2;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 11673124834481;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = ZoomInUp;
_inherits(ZoomInUp, fn(1706).ComplexAnimationBuilder);
const entry4 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items4 = [entry4];
const importDefaultResultResult4 = _createClass(ZoomInUp, null, items4);
importDefaultResultResult4.presetName = "ZoomInUp";
let closure_10 = {
  code: "function pnpm_ZoomTs6(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateY:values.windowHeight},{scale:0}],...initialValues},callback:callback};}",
};
class ZoomInDown {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(ZoomOutEasyDown);
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
      const fn = function t(translateY) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateY: delayFunction(delay, first(0, closure_2)) };
        const items = [obj, { scale: delayFunction(delay, first(1, closure_2)) }];
        obj.transform = items;
        obj.animations = obj;
        const obj2 = { transform: null };
        const items1 = [{ translateY: translateY.windowHeight }, { scale: 0 }];
        obj2.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj2;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 16474472853503;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = ZoomInDown;
_inherits(ZoomInDown, fn(1706).ComplexAnimationBuilder);
const entry5 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items5 = [entry5];
const importDefaultResultResult5 = _createClass(ZoomInDown, null, items5);
importDefaultResultResult5.presetName = "ZoomInDown";
let closure_11 = {
  code: "function pnpm_ZoomTs7(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateY:-values.targetHeight},{scale:0}],...initialValues},callback:callback};}",
};
class ZoomInEasyUp {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(ZoomOutEasyDown);
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
      const fn = function t(targetHeight) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateY: delayFunction(delay, first(0, closure_2)) };
        const items = [obj, { scale: delayFunction(delay, first(1, closure_2)) }];
        obj.transform = items;
        obj.animations = obj;
        const obj2 = { transform: null };
        const items1 = [{ translateY: -targetHeight.targetHeight }, { scale: 0 }];
        obj2.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj2;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 9580191401742;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = ZoomInEasyUp;
_inherits(ZoomInEasyUp, fn(1706).ComplexAnimationBuilder);
const entry6 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items6 = [entry6];
const importDefaultResultResult6 = _createClass(ZoomInEasyUp, null, items6);
importDefaultResultResult6.presetName = "ZoomInEasyUp";
let closure_12 = {
  code: "function pnpm_ZoomTs8(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(0,config))},{scale:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{translateY:values.targetHeight},{scale:0}],...initialValues},callback:callback};}",
};
class ZoomInEasyDown {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(ZoomOutEasyDown);
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
      const fn = function t(targetHeight) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateY: delayFunction(delay, first(0, closure_2)) };
        const items = [obj, { scale: delayFunction(delay, first(1, closure_2)) }];
        obj.transform = items;
        obj.animations = obj;
        const obj2 = { transform: null };
        const items1 = [{ translateY: targetHeight.targetHeight }, { scale: 0 }];
        obj2.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj2;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 8663849822572;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = ZoomInEasyDown;
_inherits(ZoomInEasyDown, fn(1706).ComplexAnimationBuilder);
const entry7 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items7 = [entry7];
const importDefaultResultResult7 = _createClass(ZoomInEasyDown, null, items7);
importDefaultResultResult7.presetName = "ZoomInEasyDown";
let closure_13 = {
  code: "function pnpm_ZoomTs9(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scale:1}],...initialValues},callback:callback};}",
};
class ZoomOut {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(ZoomOutEasyDown);
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
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { scale: delayFunction(delay, first(0, closure_2)) };
        const items = [obj];
        obj.transform = items;
        obj.animations = obj;
        const obj1 = { transform: null };
        const items1 = [{ scale: 1 }];
        obj1.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj1;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 11880899972707;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = ZoomOut;
_inherits(ZoomOut, fn(1706).ComplexAnimationBuilder);
const entry8 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items8 = [entry8];
const importDefaultResultResult8 = _createClass(ZoomOut, null, items8);
importDefaultResultResult8.presetName = "ZoomOut";
let closure_14 = {
  code: "function pnpm_ZoomTs10(){const{delayFunction,delay,animation,config,rotate,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,animation(0,config))},{rotate:delayFunction(delay,animation(rotate,config))}]},initialValues:{transform:[{scale:1},{rotate:'0rad'}],...initialValues},callback:callback};}",
};
class ZoomOutRotate {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(ZoomOutEasyDown);
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
      const tmp3 = _slicedToArray(closure_0.getAnimationAndConfig(), 2);
      const animation = tmp3[0];
      closure_2 = tmp5;
      const delay = closure_0.getDelay();
      let str = "0.3";
      if (closure_0.rotateV) {
        str = closure_0.rotateV;
      }
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function t() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { scale: delayFunction(delay, first(0, closure_2)) };
        const items = [obj, { rotate: delayFunction(delay, first(str, closure_2)) }];
        obj.transform = items;
        obj.animations = obj;
        const obj2 = { transform: null };
        const items1 = [{ scale: 1 }, { rotate: "0rad" }];
        obj2.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj2;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = {
        delayFunction,
        delay,
        animation,
        config: tmp3[1],
        rotate: str,
        initialValues,
        callback: callbackV,
      };
      fn.__workletHash = 14218456220590;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = ZoomOutRotate;
_inherits(ZoomOutRotate, fn(1706).ComplexAnimationBuilder);
const entry9 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items9 = [entry9];
const importDefaultResultResult9 = _createClass(ZoomOutRotate, null, items9);
importDefaultResultResult9.presetName = "ZoomOutRotate";
let closure_15 = {
  code: "function pnpm_ZoomTs11(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(-values.windowWidth,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateX:0},{scale:1}],...initialValues},callback:callback};}",
};
class ZoomOutLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(ZoomOutEasyDown);
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
      const fn = function t(windowWidth) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateX: delayFunction(delay, first(-windowWidth.windowWidth, closure_2)) };
        const items = [obj, { scale: delayFunction(delay, first(0, closure_2)) }];
        obj.transform = items;
        obj.animations = obj;
        const obj2 = { transform: null };
        const items1 = [{ translateX: 0 }, { scale: 1 }];
        obj2.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj2;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 4016039076957;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = ZoomOutLeft;
_inherits(ZoomOutLeft, fn(1706).ComplexAnimationBuilder);
const entry10 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items10 = [entry10];
const importDefaultResultResult10 = _createClass(ZoomOutLeft, null, items10);
importDefaultResultResult10.presetName = "ZoomOutLeft";
let closure_16 = {
  code: "function pnpm_ZoomTs12(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(values.windowWidth,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateX:0},{scale:1}],...initialValues},callback:callback};}",
};
class ZoomOutRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(ZoomOutEasyDown);
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
      const fn = function t(windowWidth) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateX: delayFunction(delay, first(windowWidth.windowWidth, closure_2)) };
        const items = [obj, { scale: delayFunction(delay, first(0, closure_2)) }];
        obj.transform = items;
        obj.animations = obj;
        const obj2 = { transform: null };
        const items1 = [{ translateX: 0 }, { scale: 1 }];
        obj2.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj2;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 13414598349747;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = ZoomOutRight;
_inherits(ZoomOutRight, fn(1706).ComplexAnimationBuilder);
const entry11 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items11 = [entry11];
const importDefaultResultResult11 = _createClass(ZoomOutRight, null, items11);
importDefaultResultResult11.presetName = "ZoomOutRight";
let closure_17 = {
  code: "function pnpm_ZoomTs13(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(-values.windowHeight,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateY:0},{scale:1}],...initialValues},callback:callback};}",
};
class ZoomOutUp {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(ZoomOutEasyDown);
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
      const fn = function t(windowHeight) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateY: delayFunction(delay, first(-windowHeight.windowHeight, closure_2)) };
        const items = [obj, { scale: delayFunction(delay, first(0, closure_2)) }];
        obj.transform = items;
        obj.animations = obj;
        const obj2 = { transform: null };
        const items1 = [{ translateY: 0 }, { scale: 1 }];
        obj2.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj2;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 570907039910;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = ZoomOutUp;
_inherits(ZoomOutUp, fn(1706).ComplexAnimationBuilder);
const entry12 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items12 = [entry12];
const importDefaultResultResult12 = _createClass(ZoomOutUp, null, items12);
importDefaultResultResult12.presetName = "ZoomOutUp";
let closure_18 = {
  code: "function pnpm_ZoomTs14(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(values.windowHeight,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateY:0},{scale:1}],...initialValues},callback:callback};}",
};
class ZoomOutDown {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(ZoomOutEasyDown);
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
      const fn = function t(windowHeight) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateY: delayFunction(delay, first(windowHeight.windowHeight, closure_2)) };
        const items = [obj, { scale: delayFunction(delay, first(0, closure_2)) }];
        obj.transform = items;
        obj.animations = obj;
        const obj2 = { transform: null };
        const items1 = [{ translateY: 0 }, { scale: 1 }];
        obj2.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj2;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 4332816695692;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = ZoomOutDown;
_inherits(ZoomOutDown, fn(1706).ComplexAnimationBuilder);
const entry13 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items13 = [entry13];
const importDefaultResultResult13 = _createClass(ZoomOutDown, null, items13);
importDefaultResultResult13.presetName = "ZoomOutDown";
let closure_19 = {
  code: "function pnpm_ZoomTs15(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(-values.currentHeight,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateY:0},{scale:1}],...initialValues},callback:callback};}",
};
class ZoomOutEasyUp {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(ZoomOutEasyDown);
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
      const fn = function t(currentHeight) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateY: delayFunction(delay, first(-currentHeight.currentHeight, closure_2)) };
        const items = [obj, { scale: delayFunction(delay, first(0, closure_2)) }];
        obj.transform = items;
        obj.animations = obj;
        const obj2 = { transform: null };
        const items1 = [{ translateY: 0 }, { scale: 1 }];
        obj2.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj2;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 1576389803461;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = ZoomOutEasyUp;
_inherits(ZoomOutEasyUp, fn(1706).ComplexAnimationBuilder);
const entry14 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items14 = [entry14];
const importDefaultResultResult14 = _createClass(ZoomOutEasyUp, null, items14);
importDefaultResultResult14.presetName = "ZoomOutEasyUp";
let closure_20 = {
  code: "function pnpm_ZoomTs16(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,animation(values.currentHeight,config))},{scale:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{translateY:0},{scale:1}],...initialValues},callback:callback};}",
};
class ZoomOutEasyDown {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(ZoomOutEasyDown);
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
      const fn = function t(currentHeight) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateY: delayFunction(delay, first(currentHeight.currentHeight, closure_2)) };
        const items = [obj, { scale: delayFunction(delay, first(0, closure_2)) }];
        obj.transform = items;
        obj.animations = obj;
        const obj2 = { transform: null };
        const items1 = [{ translateY: 0 }, { scale: 1 }];
        obj2.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj2;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 14278999536075;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = ZoomOutEasyDown;
_inherits(ZoomOutEasyDown, fn(1706).ComplexAnimationBuilder);
const entry15 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  },
};
const items15 = [entry15];
const importDefaultResultResult15 = _createClass(ZoomOutEasyDown, null, items15);
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

// _runtime/01778__isNativeReflectConstruct.js
import RotateOutUpRight from "metro/00032__slicedToArray.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import importDefaultResult from "metro/00042__createClass.js";
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import importDefaultResult1 from "00098__inherits.js";

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
let closure_5 = { code: "function pnpm_RotateTs1(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'-90deg'},{translateX:values.targetWidth/2-values.targetHeight/2},{translateY:-(values.targetWidth/2-values.targetHeight/2)}],...initialValues},callback:callback};}" };
class RotateInDownLeft {
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
      const fn = function n(targetWidth) {
        { opacity: delayFunction(delay, first(1, closure_2)), transform: null };
        const obj = { rotate: delayFunction(delay, first("0deg", closure_2)) };
        const items = [obj, { translateX: delayFunction(delay, first(0, closure_2)) }, ];
        obj1 = { translateX: delayFunction(delay, first(0, closure_2)) };
        items[2] = { translateY: delayFunction(delay, first(0, closure_2)) };
        obj[1] = items;
        obj[0] = obj;
        const items1 = [{ rotate: "-90deg" }, { translateX: targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 }, { translateY: -targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 }];
        const merged = Object.assign(initialValues);
        obj[1] = { opacity: 0, transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 1900668823867;
      fn.__initData = closure_1_5;
      return fn;
    };
    return tmp3Result;
  }
}
RotateOutUpRight = RotateInDownLeft;
importDefaultResult1(RotateInDownLeft, require("BaseAnimationBuilder").ComplexAnimationBuilder);
let obj = {
  key: "createInstance",
  value: function createInstance() {
    return RotateOutUpRight();
  }
};
let items = [obj];
const importDefaultResultResult = importDefaultResult(RotateInDownLeft, null, items);
importDefaultResultResult.presetName = "RotateInDownLeft";
let closure_6 = { code: "function pnpm_RotateTs2(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'90deg'},{translateX:-(values.targetWidth/2-values.targetHeight/2)},{translateY:-(values.targetWidth/2-values.targetHeight/2)}],...initialValues},callback:callback};}" };
class RotateInDownRight {
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
      const fn = function n(targetWidth) {
        { opacity: delayFunction(delay, first(1, closure_2)), transform: null };
        const obj = { rotate: delayFunction(delay, first("0deg", closure_2)) };
        const items = [obj, { translateX: delayFunction(delay, first(0, closure_2)) }, ];
        obj1 = { translateX: delayFunction(delay, first(0, closure_2)) };
        items[2] = { translateY: delayFunction(delay, first(0, closure_2)) };
        obj[1] = items;
        obj[0] = obj;
        const items1 = [{ rotate: "90deg" }, { translateX: -targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 }, { translateY: -targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 }];
        const merged = Object.assign(initialValues);
        obj[1] = { opacity: 0, transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 1066189129817;
      fn.__initData = closure_1_6;
      return fn;
    };
    return tmp3Result;
  }
}
RotateOutUpRight = RotateInDownRight;
importDefaultResult1(RotateInDownRight, require("BaseAnimationBuilder").ComplexAnimationBuilder);
obj = {
  key: "createInstance",
  value: function createInstance() {
    return RotateOutUpRight();
  }
};
let items1 = [obj];
const importDefaultResultResult1 = importDefaultResult(RotateInDownRight, null, items1);
importDefaultResultResult1.presetName = "RotateInDownRight";
let closure_7 = { code: "function pnpm_RotateTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'90deg'},{translateX:values.targetWidth/2-values.targetHeight/2},{translateY:values.targetWidth/2-values.targetHeight/2}],...initialValues},callback:callback};}" };
class RotateInUpLeft {
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
      const fn = function n(targetWidth) {
        { opacity: delayFunction(delay, first(1, closure_2)), transform: null };
        const obj = { rotate: delayFunction(delay, first("0deg", closure_2)) };
        const items = [obj, { translateX: delayFunction(delay, first(0, closure_2)) }, ];
        obj1 = { translateX: delayFunction(delay, first(0, closure_2)) };
        items[2] = { translateY: delayFunction(delay, first(0, closure_2)) };
        obj[1] = items;
        obj[0] = obj;
        const items1 = [{ rotate: "90deg" }, { translateX: targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 }, { translateY: targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 }];
        const merged = Object.assign(initialValues);
        obj[1] = { opacity: 0, transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 11999620665656;
      fn.__initData = closure_1_7;
      return fn;
    };
    return tmp3Result;
  }
}
RotateOutUpRight = RotateInUpLeft;
importDefaultResult1(RotateInUpLeft, require("BaseAnimationBuilder").ComplexAnimationBuilder);
obj = {
  key: "createInstance",
  value: function createInstance() {
    return RotateOutUpRight();
  }
};
const items2 = [obj];
const importDefaultResultResult2 = importDefaultResult(RotateInUpLeft, null, items2);
importDefaultResultResult2.presetName = "RotateInUpLeft";
let closure_8 = { code: "function pnpm_RotateTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{rotate:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))},{translateY:delayFunction(delay,animation(0,config))}]},initialValues:{opacity:0,transform:[{rotate:'-90deg'},{translateX:-(values.targetWidth/2-values.targetHeight/2)},{translateY:values.targetWidth/2-values.targetHeight/2}],...initialValues},callback:callback};}" };
class RotateInUpRight {
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
      const fn = function n(targetWidth) {
        { opacity: delayFunction(delay, first(1, closure_2)), transform: null };
        const obj = { rotate: delayFunction(delay, first("0deg", closure_2)) };
        const items = [obj, { translateX: delayFunction(delay, first(0, closure_2)) }, ];
        obj1 = { translateX: delayFunction(delay, first(0, closure_2)) };
        items[2] = { translateY: delayFunction(delay, first(0, closure_2)) };
        obj[1] = items;
        obj[0] = obj;
        const items1 = [{ rotate: "-90deg" }, { translateX: -targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 }, { translateY: targetWidth.targetWidth / 2 - targetWidth.targetHeight / 2 }];
        const merged = Object.assign(initialValues);
        obj[1] = { opacity: 0, transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 15143335307550;
      fn.__initData = closure_1_8;
      return fn;
    };
    return tmp3Result;
  }
}
RotateOutUpRight = RotateInUpRight;
importDefaultResult1(RotateInUpRight, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items3 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return RotateOutUpRight();
    }
  }
];
const importDefaultResultResult3 = importDefaultResult(RotateInUpRight, null, items3);
importDefaultResultResult3.presetName = "RotateInUpRight";
let closure_9 = { code: "function pnpm_RotateTs5(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('90deg',config))},{translateX:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))},{translateY:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}" };
class RotateOutDownLeft {
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
      const fn = function n(currentWidth) {
        { opacity: delayFunction(delay, first(0, closure_2)), transform: null };
        const obj = { rotate: delayFunction(delay, first("90deg", closure_2)) };
        const items = [obj, { translateX: delayFunction(delay, first(currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) }, ];
        obj1 = { translateX: delayFunction(delay, first(currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) };
        items[2] = { translateY: delayFunction(delay, first(currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) };
        obj[1] = items;
        obj[0] = obj;
        const items1 = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        const merged = Object.assign(initialValues);
        obj[1] = { opacity: 1, transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 11712932777694;
      fn.__initData = closure_1_9;
      return fn;
    };
    return tmp3Result;
  }
}
RotateOutUpRight = RotateOutDownLeft;
importDefaultResult1(RotateOutDownLeft, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items4 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return RotateOutUpRight();
    }
  }
];
const importDefaultResultResult4 = importDefaultResult(RotateOutDownLeft, null, items4);
importDefaultResultResult4.presetName = "RotateOutDownLeft";
let closure_10 = { code: "function pnpm_RotateTs6(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('-90deg',config))},{translateX:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))},{translateY:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}" };
class RotateOutDownRight {
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
      const fn = function n(currentWidth) {
        { opacity: delayFunction(delay, first(0, closure_2)), transform: null };
        const obj = { rotate: delayFunction(delay, first("-90deg", closure_2)) };
        const items = [obj, { translateX: delayFunction(delay, first(-currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) }, ];
        obj1 = { translateX: delayFunction(delay, first(-currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) };
        items[2] = { translateY: delayFunction(delay, first(currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) };
        obj[1] = items;
        obj[0] = obj;
        const items1 = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        const merged = Object.assign(initialValues);
        obj[1] = { opacity: 1, transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 16449003298460;
      fn.__initData = closure_1_10;
      return fn;
    };
    return tmp3Result;
  }
}
RotateOutUpRight = RotateOutDownRight;
importDefaultResult1(RotateOutDownRight, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items5 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return RotateOutUpRight();
    }
  }
];
const importDefaultResultResult5 = importDefaultResult(RotateOutDownRight, null, items5);
importDefaultResultResult5.presetName = "RotateOutDownRight";
let closure_11 = { code: "function pnpm_RotateTs7(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('-90deg',config))},{translateX:delayFunction(delay,animation(values.currentWidth/2-values.currentHeight/2,config))},{translateY:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}" };
class RotateOutUpLeft {
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
      const fn = function n(currentWidth) {
        { opacity: delayFunction(delay, first(0, closure_2)), transform: null };
        const obj = { rotate: delayFunction(delay, first("-90deg", closure_2)) };
        const items = [obj, { translateX: delayFunction(delay, first(currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) }, ];
        obj1 = { translateX: delayFunction(delay, first(currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) };
        items[2] = { translateY: delayFunction(delay, first(-currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) };
        obj[1] = items;
        obj[0] = obj;
        const items1 = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        const merged = Object.assign(initialValues);
        obj[1] = { opacity: 1, transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 16777964503997;
      fn.__initData = closure_1_11;
      return fn;
    };
    return tmp3Result;
  }
}
RotateOutUpRight = RotateOutUpLeft;
importDefaultResult1(RotateOutUpLeft, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items6 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return RotateOutUpRight();
    }
  }
];
const importDefaultResultResult6 = importDefaultResult(RotateOutUpLeft, null, items6);
importDefaultResultResult6.presetName = "RotateOutUpLeft";
let closure_12 = { code: "function pnpm_RotateTs8(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{rotate:delayFunction(delay,animation('90deg',config))},{translateX:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))},{translateY:delayFunction(delay,animation(-(values.currentWidth/2-values.currentHeight/2),config))}]},initialValues:{opacity:1,transform:[{rotate:'0deg'},{translateX:0},{translateY:0}],...initialValues},callback:callback};}" };
class RotateOutUpRight {
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
      const fn = function n(currentWidth) {
        { opacity: delayFunction(delay, first(0, closure_2)), transform: null };
        const obj = { rotate: delayFunction(delay, first("90deg", closure_2)) };
        const items = [obj, { translateX: delayFunction(delay, first(-currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) }, ];
        obj1 = { translateX: delayFunction(delay, first(-currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) };
        items[2] = { translateY: delayFunction(delay, first(-currentWidth.currentWidth / 2 - currentWidth.currentHeight / 2, closure_2)) };
        obj[1] = items;
        obj[0] = obj;
        const items1 = [{ rotate: "0deg" }, { translateX: 0 }, { translateY: 0 }];
        const merged = Object.assign(initialValues);
        obj[1] = { opacity: 1, transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 14312403608563;
      fn.__initData = closure_1_12;
      return fn;
    };
    return tmp3Result;
  }
}
importDefaultResult1(RotateOutUpRight, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items7 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return RotateOutUpRight();
    }
  }
];
const importDefaultResultResult7 = importDefaultResult(RotateOutUpRight, null, items7);
importDefaultResultResult7.presetName = "RotateOutUpRight";

export const RotateInDownLeft = importDefaultResultResult;
export const RotateInDownRight = importDefaultResultResult1;
export const RotateInUpLeft = importDefaultResultResult2;
export const RotateInUpRight = importDefaultResultResult3;
export const RotateOutDownLeft = importDefaultResultResult4;
export const RotateOutDownRight = importDefaultResultResult5;
export const RotateOutUpLeft = importDefaultResultResult6;
export const RotateOutUpRight = importDefaultResultResult7;
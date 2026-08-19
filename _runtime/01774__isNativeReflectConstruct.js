// _runtime/01774__isNativeReflectConstruct.js
import FlipOutEasyY from "metro/00032__slicedToArray.js";
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
let closure_5 = { code: "function pnpm_FlipTs1(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'90deg'},{translateY:-targetValues.targetHeight}],...initialValues},animations:{transform:[{perspective:500},{rotateX:delayFunction(delay,animation('0deg',config))},{translateY:delayFunction(delay,animation(0,config))}]},callback:callback};}" };
class FlipInXUp {
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
      const fn = function n(targetHeight) {
        const items = [{ perspective: 500 }, { rotateX: "90deg" }, ];
        const obj = { translateY: -targetHeight.targetHeight };
        items[2] = obj;
        const merged = Object.assign(initialValues);
        obj[0] = obj;
        obj1 = { transform: null };
        const items1 = [{ perspective: 500 }, { rotateX: delayFunction(delay, first("0deg", closure_2)) }, ];
        const obj2 = { rotateX: delayFunction(delay, first("0deg", closure_2)) };
        items1[2] = { translateY: delayFunction(delay, first(0, closure_2)) };
        obj1[0] = items1;
        obj[1] = obj1;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 17482936202676;
      fn.__initData = closure_1_5;
      return fn;
    };
    return tmp3Result;
  }
}
FlipOutEasyY = FlipInXUp;
importDefaultResult1(FlipInXUp, require("BaseAnimationBuilder").ComplexAnimationBuilder);
let obj = {
  key: "createInstance",
  value: function createInstance() {
    return FlipOutEasyY();
  }
};
let items = [obj];
const importDefaultResultResult = importDefaultResult(FlipInXUp, null, items);
importDefaultResultResult.presetName = "FlipInXUp";
let closure_6 = { code: "function pnpm_FlipTs2(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'-90deg'},{translateX:-targetValues.targetWidth}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))}]},callback:callback};}" };
class FlipInYLeft {
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
        const items = [{ perspective: 500 }, { rotateY: "-90deg" }, ];
        const obj = { translateX: -targetWidth.targetWidth };
        items[2] = obj;
        const merged = Object.assign(initialValues);
        obj[0] = obj;
        obj1 = { transform: null };
        const items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, , ];
        const obj2 = { perspective: delayFunction(delay, first(500, closure_2)) };
        items1[1] = { rotateY: delayFunction(delay, first("0deg", closure_2)) };
        const obj3 = { rotateY: delayFunction(delay, first("0deg", closure_2)) };
        items1[2] = { translateX: delayFunction(delay, first(0, closure_2)) };
        obj1[0] = items1;
        obj[1] = obj1;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 7030831354781;
      fn.__initData = closure_1_6;
      return fn;
    };
    return tmp3Result;
  }
}
FlipOutEasyY = FlipInYLeft;
importDefaultResult1(FlipInYLeft, require("BaseAnimationBuilder").ComplexAnimationBuilder);
obj = {
  key: "createInstance",
  value: function createInstance() {
    return FlipOutEasyY();
  }
};
let items1 = [obj];
const importDefaultResultResult1 = importDefaultResult(FlipInYLeft, null, items1);
importDefaultResultResult1.presetName = "FlipInYLeft";
let closure_7 = { code: "function pnpm_FlipTs3(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'-90deg'},{translateY:targetValues.targetHeight}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('0deg',config))},{translateY:delayFunction(delay,animation(0,config))}]},callback:callback};}" };
class FlipInXDown {
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
      const fn = function n(targetHeight) {
        const items = [{ perspective: 500 }, { rotateX: "-90deg" }, ];
        const obj = { translateY: targetHeight.targetHeight };
        items[2] = obj;
        const merged = Object.assign(initialValues);
        obj[0] = obj;
        obj1 = { transform: null };
        const items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, , ];
        const obj2 = { perspective: delayFunction(delay, first(500, closure_2)) };
        items1[1] = { rotateX: delayFunction(delay, first("0deg", closure_2)) };
        const obj3 = { rotateX: delayFunction(delay, first("0deg", closure_2)) };
        items1[2] = { translateY: delayFunction(delay, first(0, closure_2)) };
        obj1[0] = items1;
        obj[1] = obj1;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 8540727794920;
      fn.__initData = closure_1_7;
      return fn;
    };
    return tmp3Result;
  }
}
FlipOutEasyY = FlipInXDown;
importDefaultResult1(FlipInXDown, require("BaseAnimationBuilder").ComplexAnimationBuilder);
obj = {
  key: "createInstance",
  value: function createInstance() {
    return FlipOutEasyY();
  }
};
const items2 = [obj];
const importDefaultResultResult2 = importDefaultResult(FlipInXDown, null, items2);
importDefaultResultResult2.presetName = "FlipInXDown";
let closure_8 = { code: "function pnpm_FlipTs4(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'90deg'},{translateX:targetValues.targetWidth}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('0deg',config))},{translateX:delayFunction(delay,animation(0,config))}]},callback:callback};}" };
class FlipInYRight {
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
        const items = [{ perspective: 500 }, { rotateY: "90deg" }, ];
        const obj = { translateX: targetWidth.targetWidth };
        items[2] = obj;
        const merged = Object.assign(initialValues);
        obj[0] = obj;
        obj1 = { transform: null };
        const items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, , ];
        const obj2 = { perspective: delayFunction(delay, first(500, closure_2)) };
        items1[1] = { rotateY: delayFunction(delay, first("0deg", closure_2)) };
        const obj3 = { rotateY: delayFunction(delay, first("0deg", closure_2)) };
        items1[2] = { translateX: delayFunction(delay, first(0, closure_2)) };
        obj1[0] = items1;
        obj[1] = obj1;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 10571583952635;
      fn.__initData = closure_1_8;
      return fn;
    };
    return tmp3Result;
  }
}
FlipOutEasyY = FlipInYRight;
importDefaultResult1(FlipInYRight, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items3 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return FlipOutEasyY();
    }
  }
];
const importDefaultResultResult3 = importDefaultResult(FlipInYRight, null, items3);
importDefaultResultResult3.presetName = "FlipInYRight";
let closure_9 = { code: "function pnpm_FlipTs5(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'90deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('0deg',config))}]},callback:callback};}" };
class FlipInEasyX {
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
      const fn = function n() {
        let obj = { transform: items };
        items = [{ perspective: 500 }, { rotateX: "90deg" }];
        const merged = Object.assign(initialValues);
        obj[0] = obj;
        obj = { transform: null };
        const items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, ];
        obj1 = { perspective: delayFunction(delay, first(500, closure_2)) };
        items1[1] = { rotateX: delayFunction(delay, first("0deg", closure_2)) };
        obj[0] = items1;
        obj[1] = obj;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 5139023366989;
      fn.__initData = closure_1_9;
      return fn;
    };
    return tmp3Result;
  }
}
FlipOutEasyY = FlipInEasyX;
importDefaultResult1(FlipInEasyX, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items4 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return FlipOutEasyY();
    }
  }
];
const importDefaultResultResult4 = importDefaultResult(FlipInEasyX, null, items4);
importDefaultResultResult4.presetName = "FlipInEasyX";
let closure_10 = { code: "function pnpm_FlipTs6(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'90deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('0deg',config))}]},callback:callback};}" };
class FlipInEasyY {
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
      const fn = function n() {
        let obj = { transform: items };
        items = [{ perspective: 500 }, { rotateY: "90deg" }];
        const merged = Object.assign(initialValues);
        obj[0] = obj;
        obj = { transform: null };
        const items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, ];
        obj1 = { perspective: delayFunction(delay, first(500, closure_2)) };
        items1[1] = { rotateY: delayFunction(delay, first("0deg", closure_2)) };
        obj[0] = items1;
        obj[1] = obj;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 4577193778414;
      fn.__initData = closure_1_10;
      return fn;
    };
    return tmp3Result;
  }
}
FlipOutEasyY = FlipInEasyY;
importDefaultResult1(FlipInEasyY, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items5 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return FlipOutEasyY();
    }
  }
];
const importDefaultResultResult5 = importDefaultResult(FlipInEasyY, null, items5);
importDefaultResultResult5.presetName = "FlipInEasyY";
let closure_11 = { code: "function pnpm_FlipTs7(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'0deg'},{translateY:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('90deg',config))},{translateY:delayFunction(delay,animation(-targetValues.currentHeight,config))}]},callback:callback};}" };
class FlipOutXUp {
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
      const fn = function n(currentHeight) {
        let obj = { transform: items };
        items = [{ perspective: 500 }, { rotateX: "0deg" }, { translateY: 0 }];
        const merged = Object.assign(initialValues);
        obj[0] = obj;
        obj = { transform: null };
        const items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, , ];
        obj1 = { perspective: delayFunction(delay, first(500, closure_2)) };
        items1[1] = { rotateX: delayFunction(delay, first("90deg", closure_2)) };
        const obj2 = { rotateX: delayFunction(delay, first("90deg", closure_2)) };
        items1[2] = { translateY: delayFunction(delay, first(-currentHeight.currentHeight, closure_2)) };
        obj[0] = items1;
        obj[1] = obj;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 3506458137332;
      fn.__initData = closure_1_11;
      return fn;
    };
    return tmp3Result;
  }
}
FlipOutEasyY = FlipOutXUp;
importDefaultResult1(FlipOutXUp, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items6 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return FlipOutEasyY();
    }
  }
];
const importDefaultResultResult6 = importDefaultResult(FlipOutXUp, null, items6);
importDefaultResultResult6.presetName = "FlipOutXUp";
let closure_12 = { code: "function pnpm_FlipTs8(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'0deg'},{translateX:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('-90deg',config))},{translateX:delayFunction(delay,animation(-targetValues.currentWidth,config))}]},callback:callback};}" };
class FlipOutYLeft {
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
        let obj = { transform: items };
        items = [{ perspective: 500 }, { rotateY: "0deg" }, { translateX: 0 }];
        const merged = Object.assign(initialValues);
        obj[0] = obj;
        obj = { transform: null };
        const items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, , ];
        obj1 = { perspective: delayFunction(delay, first(500, closure_2)) };
        items1[1] = { rotateY: delayFunction(delay, first("-90deg", closure_2)) };
        const obj2 = { rotateY: delayFunction(delay, first("-90deg", closure_2)) };
        items1[2] = { translateX: delayFunction(delay, first(-currentWidth.currentWidth, closure_2)) };
        obj[0] = items1;
        obj[1] = obj;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 17419119819311;
      fn.__initData = closure_1_12;
      return fn;
    };
    return tmp3Result;
  }
}
FlipOutEasyY = FlipOutYLeft;
importDefaultResult1(FlipOutYLeft, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items7 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return FlipOutEasyY();
    }
  }
];
const importDefaultResultResult7 = importDefaultResult(FlipOutYLeft, null, items7);
importDefaultResultResult7.presetName = "FlipOutYLeft";
let closure_13 = { code: "function pnpm_FlipTs9(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'0deg'},{translateY:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('-90deg',config))},{translateY:delayFunction(delay,animation(targetValues.currentHeight,config))}]},callback:callback};}" };
class FlipOutXDown {
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
      const fn = function n(currentHeight) {
        let obj = { transform: items };
        items = [{ perspective: 500 }, { rotateX: "0deg" }, { translateY: 0 }];
        const merged = Object.assign(initialValues);
        obj[0] = obj;
        obj = { transform: null };
        const items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, , ];
        obj1 = { perspective: delayFunction(delay, first(500, closure_2)) };
        items1[1] = { rotateX: delayFunction(delay, first("-90deg", closure_2)) };
        const obj2 = { rotateX: delayFunction(delay, first("-90deg", closure_2)) };
        items1[2] = { translateY: delayFunction(delay, first(currentHeight.currentHeight, closure_2)) };
        obj[0] = items1;
        obj[1] = obj;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 9961334044730;
      fn.__initData = closure_1_13;
      return fn;
    };
    return tmp3Result;
  }
}
FlipOutEasyY = FlipOutXDown;
importDefaultResult1(FlipOutXDown, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items8 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return FlipOutEasyY();
    }
  }
];
const importDefaultResultResult8 = importDefaultResult(FlipOutXDown, null, items8);
importDefaultResultResult8.presetName = "FlipOutXDown";
let closure_14 = { code: "function pnpm_FlipTs10(targetValues){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'0deg'},{translateX:0}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('90deg',config))},{translateX:delayFunction(delay,animation(targetValues.currentWidth,config))}]},callback:callback};}" };
class FlipOutYRight {
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
        let obj = { transform: items };
        items = [{ perspective: 500 }, { rotateY: "0deg" }, { translateX: 0 }];
        const merged = Object.assign(initialValues);
        obj[0] = obj;
        obj = { transform: null };
        const items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, , ];
        obj1 = { perspective: delayFunction(delay, first(500, closure_2)) };
        items1[1] = { rotateY: delayFunction(delay, first("90deg", closure_2)) };
        const obj2 = { rotateY: delayFunction(delay, first("90deg", closure_2)) };
        items1[2] = { translateX: delayFunction(delay, first(currentWidth.currentWidth, closure_2)) };
        obj[0] = items1;
        obj[1] = obj;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 12107293900726;
      fn.__initData = closure_1_14;
      return fn;
    };
    return tmp3Result;
  }
}
FlipOutEasyY = FlipOutYRight;
importDefaultResult1(FlipOutYRight, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items9 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return FlipOutEasyY();
    }
  }
];
const importDefaultResultResult9 = importDefaultResult(FlipOutYRight, null, items9);
importDefaultResultResult9.presetName = "FlipOutYRight";
let closure_15 = { code: "function pnpm_FlipTs11(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateX:'0deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateX:delayFunction(delay,animation('90deg',config))}]},callback:callback};}" };
class FlipOutEasyX {
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
      const fn = function n() {
        let obj = { transform: items };
        items = [{ perspective: 500 }, { rotateX: "0deg" }];
        const merged = Object.assign(initialValues);
        obj[0] = obj;
        obj = { transform: null };
        const items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, ];
        obj1 = { perspective: delayFunction(delay, first(500, closure_2)) };
        items1[1] = { rotateX: delayFunction(delay, first("90deg", closure_2)) };
        obj[0] = items1;
        obj[1] = obj;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 9417124215224;
      fn.__initData = closure_1_15;
      return fn;
    };
    return tmp3Result;
  }
}
FlipOutEasyY = FlipOutEasyX;
importDefaultResult1(FlipOutEasyX, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items10 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return FlipOutEasyY();
    }
  }
];
const importDefaultResultResult10 = importDefaultResult(FlipOutEasyX, null, items10);
importDefaultResultResult10.presetName = "FlipOutEasyX";
let closure_16 = { code: "function pnpm_FlipTs12(){const{initialValues,delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{transform:[{perspective:500},{rotateY:'0deg'}],...initialValues},animations:{transform:[{perspective:delayFunction(delay,animation(500,config))},{rotateY:delayFunction(delay,animation('90deg',config))}]},callback:callback};}" };
class FlipOutEasyY {
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
      const fn = function n() {
        let obj = { transform: items };
        items = [{ perspective: 500 }, { rotateY: "0deg" }];
        const merged = Object.assign(initialValues);
        obj[0] = obj;
        obj = { transform: null };
        const items1 = [{ perspective: delayFunction(delay, first(500, closure_2)) }, ];
        obj1 = { perspective: delayFunction(delay, first(500, closure_2)) };
        items1[1] = { rotateY: delayFunction(delay, first("90deg", closure_2)) };
        obj[0] = items1;
        obj[1] = obj;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { initialValues, delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 4473299233947;
      fn.__initData = closure_1_16;
      return fn;
    };
    return tmp3Result;
  }
}
importDefaultResult1(FlipOutEasyY, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items11 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return FlipOutEasyY();
    }
  }
];
const importDefaultResultResult11 = importDefaultResult(FlipOutEasyY, null, items11);
importDefaultResultResult11.presetName = "FlipOutEasyY";

export const FlipInXUp = importDefaultResultResult;
export const FlipInYLeft = importDefaultResultResult1;
export const FlipInXDown = importDefaultResultResult2;
export const FlipInYRight = importDefaultResultResult3;
export const FlipInEasyX = importDefaultResultResult4;
export const FlipInEasyY = importDefaultResultResult5;
export const FlipOutXUp = importDefaultResultResult6;
export const FlipOutYLeft = importDefaultResultResult7;
export const FlipOutXDown = importDefaultResultResult8;
export const FlipOutYRight = importDefaultResultResult9;
export const FlipOutEasyX = importDefaultResultResult10;
export const FlipOutEasyY = importDefaultResultResult11;
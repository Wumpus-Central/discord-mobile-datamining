// _runtime/01779__isNativeReflectConstruct.js
import SlideOutDown from "_slicedToArray";
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
let closure_5 = { code: "function pnpm_SlideTs1(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(values.targetOriginX,config))},initialValues:{originX:values.targetOriginX+values.windowWidth,...initialValues},callback:callback};}" };
class SlideInRight {
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
      const fn = function e(targetOriginX) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { originX: delayFunction(delay, first(targetOriginX.targetOriginX, _possibleConstructorReturn)) };
        obj[0] = obj;
        obj = { originX: targetOriginX.targetOriginX + targetOriginX.windowWidth };
        const merged = Object.assign(initialValues);
        obj[1] = obj;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 10760418577189;
      fn.__initData = outer1_5;
      return fn;
    };
    return tmp3Result;
  }
}
SlideOutDown = SlideInRight;
importDefaultResult1(SlideInRight, require("BaseAnimationBuilder").ComplexAnimationBuilder);
let obj = {
  key: "createInstance",
  value: function createInstance() {
    return SlideOutDown();
  }
};
let items = [obj];
const importDefaultResultResult = importDefaultResult(SlideInRight, null, items);
importDefaultResultResult.presetName = "SlideInRight";
let closure_6 = { code: "function pnpm_SlideTs2(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(values.targetOriginX,config))},initialValues:{originX:values.targetOriginX-values.windowWidth,...initialValues},callback:callback};}" };
class SlideInLeft {
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
      const fn = function e(targetOriginX) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { originX: delayFunction(delay, first(targetOriginX.targetOriginX, _possibleConstructorReturn)) };
        obj[0] = obj;
        obj = { originX: targetOriginX.targetOriginX - targetOriginX.windowWidth };
        const merged = Object.assign(initialValues);
        obj[1] = obj;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 2180499422144;
      fn.__initData = outer1_6;
      return fn;
    };
    return tmp3Result;
  }
}
SlideOutDown = SlideInLeft;
importDefaultResult1(SlideInLeft, require("BaseAnimationBuilder").ComplexAnimationBuilder);
obj = {
  key: "createInstance",
  value: function createInstance() {
    return SlideOutDown();
  }
};
let items1 = [obj];
const importDefaultResultResult1 = importDefaultResult(SlideInLeft, null, items1);
importDefaultResultResult1.presetName = "SlideInLeft";
let closure_7 = { code: "function pnpm_SlideTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(Math.max(values.currentOriginX+values.windowWidth,values.windowWidth),config))},initialValues:{originX:values.currentOriginX,...initialValues},callback:callback};}" };
class SlideOutRight {
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
      const fn = function e(currentOriginX) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { originX: delayFunction(delay, first(Math.max(currentOriginX.currentOriginX + currentOriginX.windowWidth, currentOriginX.windowWidth), _possibleConstructorReturn)) };
        obj[0] = obj;
        obj = { originX: currentOriginX.currentOriginX };
        const merged = Object.assign(initialValues);
        obj[1] = obj;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 12812296890492;
      fn.__initData = outer1_7;
      return fn;
    };
    return tmp3Result;
  }
}
SlideOutDown = SlideOutRight;
importDefaultResult1(SlideOutRight, require("BaseAnimationBuilder").ComplexAnimationBuilder);
obj = {
  key: "createInstance",
  value: function createInstance() {
    return SlideOutDown();
  }
};
const items2 = [obj];
const importDefaultResultResult2 = importDefaultResult(SlideOutRight, null, items2);
importDefaultResultResult2.presetName = "SlideOutRight";
let closure_8 = { code: "function pnpm_SlideTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(Math.min(values.currentOriginX-values.windowWidth,-values.windowWidth),config))},initialValues:{originX:values.currentOriginX,...initialValues},callback:callback};}" };
class SlideOutLeft {
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
      const fn = function e(currentOriginX) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { originX: delayFunction(delay, first(Math.min(currentOriginX.currentOriginX - currentOriginX.windowWidth, -currentOriginX.windowWidth), _possibleConstructorReturn)) };
        obj[0] = obj;
        obj = { originX: currentOriginX.currentOriginX };
        const merged = Object.assign(initialValues);
        obj[1] = obj;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 6273927341006;
      fn.__initData = outer1_8;
      return fn;
    };
    return tmp3Result;
  }
}
SlideOutDown = SlideOutLeft;
importDefaultResult1(SlideOutLeft, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items3 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return SlideOutDown();
    }
  }
];
const importDefaultResultResult3 = importDefaultResult(SlideOutLeft, null, items3);
importDefaultResultResult3.presetName = "SlideOutLeft";
let closure_9 = { code: "function pnpm_SlideTs5(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(values.targetOriginY,config))},initialValues:{originY:-values.windowHeight,...initialValues},callback:callback};}" };
class SlideInUp {
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
      const fn = function e(originY) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { originY: delayFunction(delay, first(originY.targetOriginY, _possibleConstructorReturn)) };
        obj[0] = obj;
        obj = { originY: -originY.windowHeight };
        const merged = Object.assign(initialValues);
        obj[1] = obj;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 9846507393044;
      fn.__initData = outer1_9;
      return fn;
    };
    return tmp3Result;
  }
}
SlideOutDown = SlideInUp;
importDefaultResult1(SlideInUp, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items4 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return SlideOutDown();
    }
  }
];
const importDefaultResultResult4 = importDefaultResult(SlideInUp, null, items4);
importDefaultResultResult4.presetName = "SlideInUp";
let closure_10 = { code: "function pnpm_SlideTs6(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(values.targetOriginY,config))},initialValues:{originY:values.targetOriginY+values.windowHeight,...initialValues},callback:callback};}" };
class SlideInDown {
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
      const fn = function e(targetOriginY) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { originY: delayFunction(delay, first(targetOriginY.targetOriginY, _possibleConstructorReturn)) };
        obj[0] = obj;
        obj = { originY: targetOriginY.targetOriginY + targetOriginY.windowHeight };
        const merged = Object.assign(initialValues);
        obj[1] = obj;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 9348728185019;
      fn.__initData = outer1_10;
      return fn;
    };
    return tmp3Result;
  }
}
SlideOutDown = SlideInDown;
importDefaultResult1(SlideInDown, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items5 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return SlideOutDown();
    }
  }
];
const importDefaultResultResult5 = importDefaultResult(SlideInDown, null, items5);
importDefaultResultResult5.presetName = "SlideInDown";
let closure_11 = { code: "function pnpm_SlideTs7(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(Math.min(values.currentOriginY-values.windowHeight,-values.windowHeight),config))},initialValues:{originY:values.currentOriginY,...initialValues},callback:callback};}" };
class SlideOutUp {
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
      const fn = function e(currentOriginY) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { originY: delayFunction(delay, first(Math.min(currentOriginY.currentOriginY - currentOriginY.windowHeight, -currentOriginY.windowHeight), _possibleConstructorReturn)) };
        obj[0] = obj;
        obj = { originY: currentOriginY.currentOriginY };
        const merged = Object.assign(initialValues);
        obj[1] = obj;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 14850009730573;
      fn.__initData = outer1_11;
      return fn;
    };
    return tmp3Result;
  }
}
SlideOutDown = SlideOutUp;
importDefaultResult1(SlideOutUp, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items6 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return SlideOutDown();
    }
  }
];
const importDefaultResultResult6 = importDefaultResult(SlideOutUp, null, items6);
importDefaultResultResult6.presetName = "SlideOutUp";
let closure_12 = { code: "function pnpm_SlideTs8(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(Math.max(values.currentOriginY+values.windowHeight,values.windowHeight),config))},initialValues:{originY:values.currentOriginY,...initialValues},callback:callback};}" };
class SlideOutDown {
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
      const fn = function e(currentOriginY) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { originY: delayFunction(delay, first(Math.max(currentOriginY.currentOriginY + currentOriginY.windowHeight, currentOriginY.windowHeight), _possibleConstructorReturn)) };
        obj[0] = obj;
        obj = { originY: currentOriginY.currentOriginY };
        const merged = Object.assign(initialValues);
        obj[1] = obj;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 14065812257143;
      fn.__initData = outer1_12;
      return fn;
    };
    return tmp3Result;
  }
}
importDefaultResult1(SlideOutDown, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items7 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return SlideOutDown();
    }
  }
];
const importDefaultResultResult7 = importDefaultResult(SlideOutDown, null, items7);
importDefaultResultResult7.presetName = "SlideOutDown";

export const SlideInRight = importDefaultResultResult;
export const SlideInLeft = importDefaultResultResult1;
export const SlideOutRight = importDefaultResultResult2;
export const SlideOutLeft = importDefaultResultResult3;
export const SlideInUp = importDefaultResultResult4;
export const SlideInDown = importDefaultResultResult5;
export const SlideOutUp = importDefaultResultResult6;
export const SlideOutDown = importDefaultResultResult7;
// === Module 1761: ? ===

// Module 1761
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
let closure_5 = { code: "function pnpm_SlideTs1(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(values.targetOriginX,config))},initialValues:{originX:values.targetOriginX+values.windowWidth,...initialValues},callback:callback};}" };
class SlideInRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, SlideOutDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(SlideOutDown);
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
      const fn = function e(targetOriginX) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { originX: delayFunction(delay, first(targetOriginX.targetOriginX, closure_2)) };
        obj.animations = obj;
        obj = { originX: targetOriginX.targetOriginX + targetOriginX.windowWidth };
        const merged = Object.assign(initialValues);
        obj.initialValues = obj;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 10760418577189;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = SlideInRight;
_inherits(SlideInRight, fn(1706).ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(SlideInRight, null, items);
importDefaultResultResult.presetName = "SlideInRight";
let closure_6 = { code: "function pnpm_SlideTs2(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(values.targetOriginX,config))},initialValues:{originX:values.targetOriginX-values.windowWidth,...initialValues},callback:callback};}" };
class SlideInLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, SlideOutDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(SlideOutDown);
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
      const fn = function e(targetOriginX) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { originX: delayFunction(delay, first(targetOriginX.targetOriginX, closure_2)) };
        obj.animations = obj;
        obj = { originX: targetOriginX.targetOriginX - targetOriginX.windowWidth };
        const merged = Object.assign(initialValues);
        obj.initialValues = obj;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 2180499422144;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = SlideInLeft;
_inherits(SlideInLeft, fn(1706).ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  }
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(SlideInLeft, null, items1);
importDefaultResultResult1.presetName = "SlideInLeft";
let closure_7 = { code: "function pnpm_SlideTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(Math.max(values.currentOriginX+values.windowWidth,values.windowWidth),config))},initialValues:{originX:values.currentOriginX,...initialValues},callback:callback};}" };
class SlideOutRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, SlideOutDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(SlideOutDown);
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
      const fn = function e(currentOriginX) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { originX: delayFunction(delay, first(Math.max(currentOriginX.currentOriginX + currentOriginX.windowWidth, currentOriginX.windowWidth), closure_2)) };
        obj.animations = obj;
        obj = { originX: currentOriginX.currentOriginX };
        const merged = Object.assign(initialValues);
        obj.initialValues = obj;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 12812296890492;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = SlideOutRight;
_inherits(SlideOutRight, fn(1706).ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  }
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(SlideOutRight, null, items2);
importDefaultResultResult2.presetName = "SlideOutRight";
let closure_8 = { code: "function pnpm_SlideTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originX:delayFunction(delay,animation(Math.min(values.currentOriginX-values.windowWidth,-values.windowWidth),config))},initialValues:{originX:values.currentOriginX,...initialValues},callback:callback};}" };
class SlideOutLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, SlideOutDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(SlideOutDown);
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
      const fn = function e(currentOriginX) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { originX: delayFunction(delay, first(Math.min(currentOriginX.currentOriginX - currentOriginX.windowWidth, -currentOriginX.windowWidth), closure_2)) };
        obj.animations = obj;
        obj = { originX: currentOriginX.currentOriginX };
        const merged = Object.assign(initialValues);
        obj.initialValues = obj;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 6273927341006;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = SlideOutLeft;
_inherits(SlideOutLeft, fn(1706).ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  }
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(SlideOutLeft, null, items3);
importDefaultResultResult3.presetName = "SlideOutLeft";
let closure_9 = { code: "function pnpm_SlideTs5(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(values.targetOriginY,config))},initialValues:{originY:-values.windowHeight,...initialValues},callback:callback};}" };
class SlideInUp {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, SlideOutDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(SlideOutDown);
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
      const fn = function e(originY) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { originY: delayFunction(delay, first(originY.targetOriginY, closure_2)) };
        obj.animations = obj;
        obj = { originY: -originY.windowHeight };
        const merged = Object.assign(initialValues);
        obj.initialValues = obj;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 9846507393044;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = SlideInUp;
_inherits(SlideInUp, fn(1706).ComplexAnimationBuilder);
const entry4 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  }
};
const items4 = [entry4];
const importDefaultResultResult4 = _createClass(SlideInUp, null, items4);
importDefaultResultResult4.presetName = "SlideInUp";
let closure_10 = { code: "function pnpm_SlideTs6(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(values.targetOriginY,config))},initialValues:{originY:values.targetOriginY+values.windowHeight,...initialValues},callback:callback};}" };
class SlideInDown {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, SlideOutDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(SlideOutDown);
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
      const fn = function e(targetOriginY) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { originY: delayFunction(delay, first(targetOriginY.targetOriginY, closure_2)) };
        obj.animations = obj;
        obj = { originY: targetOriginY.targetOriginY + targetOriginY.windowHeight };
        const merged = Object.assign(initialValues);
        obj.initialValues = obj;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 9348728185019;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = SlideInDown;
_inherits(SlideInDown, fn(1706).ComplexAnimationBuilder);
const entry5 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  }
};
const items5 = [entry5];
const importDefaultResultResult5 = _createClass(SlideInDown, null, items5);
importDefaultResultResult5.presetName = "SlideInDown";
let closure_11 = { code: "function pnpm_SlideTs7(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(Math.min(values.currentOriginY-values.windowHeight,-values.windowHeight),config))},initialValues:{originY:values.currentOriginY,...initialValues},callback:callback};}" };
class SlideOutUp {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, SlideOutDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(SlideOutDown);
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
      const fn = function e(currentOriginY) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { originY: delayFunction(delay, first(Math.min(currentOriginY.currentOriginY - currentOriginY.windowHeight, -currentOriginY.windowHeight), closure_2)) };
        obj.animations = obj;
        obj = { originY: currentOriginY.currentOriginY };
        const merged = Object.assign(initialValues);
        obj.initialValues = obj;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 14850009730573;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = SlideOutUp;
_inherits(SlideOutUp, fn(1706).ComplexAnimationBuilder);
const entry6 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  }
};
const items6 = [entry6];
const importDefaultResultResult6 = _createClass(SlideOutUp, null, items6);
importDefaultResultResult6.presetName = "SlideOutUp";
let closure_12 = { code: "function pnpm_SlideTs8(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{originY:delayFunction(delay,animation(Math.max(values.currentOriginY+values.windowHeight,values.windowHeight),config))},initialValues:{originY:values.currentOriginY,...initialValues},callback:callback};}" };
class SlideOutDown {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, SlideOutDown);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(SlideOutDown);
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
      const fn = function e(currentOriginY) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { originY: delayFunction(delay, first(Math.max(currentOriginY.currentOriginY + currentOriginY.windowHeight, currentOriginY.windowHeight), closure_2)) };
        obj.animations = obj;
        obj = { originY: currentOriginY.currentOriginY };
        const merged = Object.assign(initialValues);
        obj.initialValues = obj;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 14065812257143;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_slicedToArray = SlideOutDown;
_inherits(SlideOutDown, fn(1706).ComplexAnimationBuilder);
const entry7 = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  }
};
const items7 = [entry7];
const importDefaultResultResult7 = _createClass(SlideOutDown, null, items7);
importDefaultResultResult7.presetName = "SlideOutDown";

export const SlideInRight = importDefaultResultResult;
export const SlideInLeft = importDefaultResultResult1;
export const SlideOutRight = importDefaultResultResult2;
export const SlideOutLeft = importDefaultResultResult3;
export const SlideInUp = importDefaultResultResult4;
export const SlideInDown = importDefaultResultResult5;
export const SlideOutUp = importDefaultResultResult6;
export const SlideOutDown = importDefaultResultResult7;
// === Module 1758: ? ===

// Module 1758
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _slicedToArray from "module_32" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let LightSpeedOutLeft = fn;
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
_possibleConstructorReturnDefault;
let closure_7 = { code: "function pnpm_LightspeedTs1(values){const{delayFunction,delay,withTiming,duration,animation,config,withSequence,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,withTiming(1,{duration:duration})),transform:[{translateX:delayFunction(delay,animation(0,{...config,duration:duration*0.7}))},{skewX:delayFunction(delay,withSequence(withTiming('10deg',{duration:duration*0.7}),withTiming('-5deg',{duration:duration*0.15}),withTiming('0deg',{duration:duration*0.15})))}]},initialValues:{opacity:0,transform:[{translateX:values.windowWidth},{skewX:'-45deg'}],...initialValues},callback:callback};}" };
class LightSpeedInRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, LightSpeedOutLeft);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(LightSpeedOutLeft);
    tmp3 = closure_4;
    if (metroRequire()) {
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
      const tmp2 = _slicedToArray(delayFunction.getAnimationAndConfig(), 2);
      const animation = tmp2[0];
      closure_2 = tmp4;
      const delay = delayFunction.getDelay();
      const duration = delayFunction.getDuration();
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const fn = function n(translateX) {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { opacity: delayFunction(delay, delayFunction(1709).withTiming(1, { duration })), transform: null };
        const obj5 = { translateX: null };
        const obj6 = {};
        const merged = Object.assign(closure_2);
        obj6.duration = 0.7 * duration;
        obj5.translateX = delayFunction(delay, first(0, obj6));
        const items = [obj5, ];
        const obj7 = { skewX: null };
        const obj3 = delayFunction(1709);
        const obj4 = { duration };
        const obj8 = delayFunction(1709);
        const obj10 = { duration: 0.7 * duration };
        const obj9 = delayFunction(1709);
        const withTimingResult = delayFunction(1709).withTiming("10deg", { duration: 0.7 * duration });
        const obj11 = delayFunction(1709);
        const obj12 = { duration: 0.15 * duration };
        const withTimingResult1 = delayFunction(1709).withTiming("-5deg", { duration: 0.15 * duration });
        obj7.skewX = delayFunction(delay, obj8.withSequence(withTimingResult, withTimingResult1, delayFunction(1709).withTiming("0deg", { duration: 0.15 * duration })));
        items[1] = obj7;
        obj2.transform = items;
        obj.animations = obj2;
        const obj15 = { opacity: 0, transform: null };
        const items1 = [{ translateX: translateX.windowWidth }, { skewX: "-45deg" }];
        obj15.transform = items1;
        const merged1 = Object.assign(initialValues);
        obj.initialValues = obj15;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, withTiming: LightSpeedOutLeft(1709).withTiming, duration, animation, config: tmp2[1], withSequence: LightSpeedOutLeft(1709).withSequence, initialValues, callback: callbackV };
      fn.__workletHash = 14533434616043;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
LightSpeedOutLeft = LightSpeedInRight;
_inherits(LightSpeedInRight, fn(1707).ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    return LightSpeedOutLeft();
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(LightSpeedInRight, null, items);
importDefaultResultResult.presetName = "LightSpeedInRight";
let closure_8 = { code: "function pnpm_LightspeedTs2(values){const{delayFunction,delay,withTiming,duration,animation,config,withSequence,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,withTiming(1,{duration:duration})),transform:[{translateX:delayFunction(delay,animation(0,{...config,duration:duration*0.7}))},{skewX:delayFunction(delay,withSequence(withTiming('-10deg',{duration:duration*0.7}),withTiming('5deg',{duration:duration*0.15}),withTiming('0deg',{duration:duration*0.15})))}]},initialValues:{opacity:0,transform:[{translateX:-values.windowWidth},{skewX:'45deg'}],...initialValues},callback:callback};}" };
class LightSpeedInLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, LightSpeedOutLeft);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(LightSpeedOutLeft);
    tmp3 = closure_4;
    if (metroRequire()) {
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
      const tmp2 = _slicedToArray(delayFunction.getAnimationAndConfig(), 2);
      const animation = tmp2[0];
      closure_2 = tmp4;
      const delay = delayFunction.getDelay();
      const duration = delayFunction.getDuration();
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const fn = function n(translateX) {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { opacity: delayFunction(delay, delayFunction(1709).withTiming(1, { duration })), transform: null };
        const obj5 = { translateX: null };
        const obj6 = {};
        const merged = Object.assign(closure_2);
        obj6.duration = 0.7 * duration;
        obj5.translateX = delayFunction(delay, first(0, obj6));
        const items = [obj5, ];
        const obj7 = { skewX: null };
        const obj3 = delayFunction(1709);
        const obj4 = { duration };
        const obj8 = delayFunction(1709);
        const obj10 = { duration: 0.7 * duration };
        const obj9 = delayFunction(1709);
        const withTimingResult = delayFunction(1709).withTiming("-10deg", { duration: 0.7 * duration });
        const obj11 = delayFunction(1709);
        const obj12 = { duration: 0.15 * duration };
        const withTimingResult1 = delayFunction(1709).withTiming("5deg", { duration: 0.15 * duration });
        obj7.skewX = delayFunction(delay, obj8.withSequence(withTimingResult, withTimingResult1, delayFunction(1709).withTiming("0deg", { duration: 0.15 * duration })));
        items[1] = obj7;
        obj2.transform = items;
        obj.animations = obj2;
        const obj15 = { opacity: 0, transform: null };
        const items1 = [{ translateX: -translateX.windowWidth }, { skewX: "45deg" }];
        obj15.transform = items1;
        const merged1 = Object.assign(initialValues);
        obj.initialValues = obj15;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, withTiming: LightSpeedOutLeft(1709).withTiming, duration, animation, config: tmp2[1], withSequence: LightSpeedOutLeft(1709).withSequence, initialValues, callback: callbackV };
      fn.__workletHash = 7816705328872;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
LightSpeedOutLeft = LightSpeedInLeft;
_inherits(LightSpeedInLeft, fn(1707).ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    return LightSpeedOutLeft();
  }
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(LightSpeedInLeft, null, items1);
importDefaultResultResult1.presetName = "LightSpeedInLeft";
let closure_9 = { code: "function pnpm_LightspeedTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(values.windowWidth,config))},{skewX:delayFunction(delay,animation('-45deg',config))}]},initialValues:{opacity:1,transform:[{translateX:0},{skewX:'0deg'}],...initialValues},callback:callback};}" };
class LightSpeedOutRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, LightSpeedOutLeft);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(LightSpeedOutLeft);
    tmp3 = closure_4;
    if (metroRequire()) {
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
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { opacity: delayFunction(delay, first(0, closure_2)), transform: null };
        const items = [{ translateX: delayFunction(delay, first(windowWidth.windowWidth, closure_2)) }, ];
        const obj3 = { translateX: delayFunction(delay, first(windowWidth.windowWidth, closure_2)) };
        items[1] = { skewX: delayFunction(delay, first("-45deg", closure_2)) };
        obj2.transform = items;
        obj.animations = obj2;
        const obj5 = { opacity: 1, transform: null };
        const items1 = [{ translateX: 0 }, { skewX: "0deg" }];
        obj5.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj5;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 222611120175;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
LightSpeedOutLeft = LightSpeedOutRight;
_inherits(LightSpeedOutRight, fn(1707).ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    return LightSpeedOutLeft();
  }
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(LightSpeedOutRight, null, items2);
importDefaultResultResult2.presetName = "LightSpeedOutRight";
let closure_10 = { code: "function pnpm_LightspeedTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(-values.windowWidth,config))},{skewX:delayFunction(delay,animation('45deg',config))}]},initialValues:{opacity:1,transform:[{translateX:0},{skewX:'0deg'}],...initialValues},callback:callback};}" };
class LightSpeedOutLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, LightSpeedOutLeft);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(LightSpeedOutLeft);
    tmp3 = closure_4;
    if (metroRequire()) {
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
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { opacity: delayFunction(delay, first(0, closure_2)), transform: null };
        const items = [{ translateX: delayFunction(delay, first(-windowWidth.windowWidth, closure_2)) }, ];
        const obj3 = { translateX: delayFunction(delay, first(-windowWidth.windowWidth, closure_2)) };
        items[1] = { skewX: delayFunction(delay, first("45deg", closure_2)) };
        obj2.transform = items;
        obj.animations = obj2;
        const obj5 = { opacity: 1, transform: null };
        const items1 = [{ translateX: 0 }, { skewX: "0deg" }];
        obj5.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj5;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 766058259752;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(LightSpeedOutLeft, fn(1707).ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    return LightSpeedOutLeft();
  }
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(LightSpeedOutLeft, null, items3);
importDefaultResultResult3.presetName = "LightSpeedOutLeft";

export const LightSpeedInRight = importDefaultResultResult;
export const LightSpeedInLeft = importDefaultResultResult1;
export const LightSpeedOutRight = importDefaultResultResult2;
export const LightSpeedOutLeft = importDefaultResultResult3;
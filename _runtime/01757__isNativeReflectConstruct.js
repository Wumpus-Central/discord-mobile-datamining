// === Module 1757: _isNativeReflectConstruct ===

// Module 1757 (_isNativeReflectConstruct)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "_classCallCheck" /* 41 */;
import importDefaultResult from "_createClass" /* 42 */;
import closure_4 from "_possibleConstructorReturn" /* 93 */;
import closure_5 from "_getPrototypeOf" /* 95 */;
import importDefaultResult1 from "_inherits" /* 98 */;

let LightSpeedOutLeft = arg1;
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
let closure_7 = { code: "function pnpm_LightspeedTs1(values){const{delayFunction,delay,withTiming,duration,animation,config,withSequence,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,withTiming(1,{duration:duration})),transform:[{translateX:delayFunction(delay,animation(0,{...config,duration:duration*0.7}))},{skewX:delayFunction(delay,withSequence(withTiming('10deg',{duration:duration*0.7}),withTiming('-5deg',{duration:duration*0.15}),withTiming('0deg',{duration:duration*0.15})))}]},initialValues:{opacity:0,transform:[{translateX:values.windowWidth},{skewX:'-45deg'}],...initialValues},callback:callback};}" };
class LightSpeedInRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, closure_0);
    items1 = [...items];
    tmp2 = closure_5;
    obj = closure_5(closure_0);
    tmp3 = closure_4;
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
      const tmp2 = closure_1_2(delayFunction.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      closure_2 = tmp4;
      const delay = delayFunction.getDelay();
      const duration = delayFunction.getDuration();
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const fn = function n(translateX) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: null, transform: null };
        let obj2 = delayFunction(first[6]);
        obj = { duration };
        obj[0] = delayFunction(delay, obj2.withTiming(1, obj));
        obj1 = { translateX: null };
        obj2 = {};
        const merged = Object.assign(closure_2);
        obj2.duration = 0.7 * duration;
        obj1[0] = delayFunction(delay, first(0, obj2));
        const items = [obj1, ];
        const obj3 = { skewX: null };
        let obj7 = delayFunction(first[6]);
        let obj8 = delayFunction(first[6]);
        const obj4 = { duration: 0.7 * duration };
        const withTimingResult = obj8.withTiming("10deg", { duration: 0.7 * duration });
        const obj11 = delayFunction(first[6]);
        const obj5 = { duration: 0.15 * duration };
        const withTimingResult1 = delayFunction(first[6]).withTiming("-5deg", { duration: 0.15 * duration });
        obj3[0] = delayFunction(delay, obj7.withSequence(withTimingResult, withTimingResult1, delayFunction(first[6]).withTiming("0deg", { duration: 0.15 * duration })));
        items[1] = obj3;
        obj[1] = items;
        obj[0] = obj;
        obj7 = { opacity: 0, transform: items1 };
        obj8 = { translateX: translateX.windowWidth };
        items1 = [obj8, { skewX: "-45deg" }];
        const merged1 = Object.assign(initialValues);
        obj[1] = obj7;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, withTiming: callback(closure_1_1[6]).withTiming, duration, animation: first, config: tmp2[1], withSequence: callback(closure_1_1[6]).withSequence, initialValues, callback: callbackV };
      fn.__workletHash = 14533434616043;
      fn.__initData = closure_1_7;
      return fn;
    };
    return tmp3Result;
  }
}
LightSpeedOutLeft = LightSpeedInRight;
importDefaultResult1(LightSpeedInRight, require("BaseAnimationBuilder").ComplexAnimationBuilder);
let obj = {
  key: "createInstance",
  value: function createInstance() {
    return LightSpeedOutLeft();
  }
};
let items = [obj];
const importDefaultResultResult = importDefaultResult(LightSpeedInRight, null, items);
importDefaultResultResult.presetName = "LightSpeedInRight";
let closure_8 = { code: "function pnpm_LightspeedTs2(values){const{delayFunction,delay,withTiming,duration,animation,config,withSequence,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,withTiming(1,{duration:duration})),transform:[{translateX:delayFunction(delay,animation(0,{...config,duration:duration*0.7}))},{skewX:delayFunction(delay,withSequence(withTiming('-10deg',{duration:duration*0.7}),withTiming('5deg',{duration:duration*0.15}),withTiming('0deg',{duration:duration*0.15})))}]},initialValues:{opacity:0,transform:[{translateX:-values.windowWidth},{skewX:'45deg'}],...initialValues},callback:callback};}" };
class LightSpeedInLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, closure_0);
    items1 = [...items];
    tmp2 = closure_5;
    obj = closure_5(closure_0);
    tmp3 = closure_4;
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
      const tmp2 = closure_1_2(delayFunction.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      closure_2 = tmp4;
      const delay = delayFunction.getDelay();
      const duration = delayFunction.getDuration();
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const fn = function n(translateX) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: null, transform: null };
        let obj2 = delayFunction(first[6]);
        obj = { duration };
        obj[0] = delayFunction(delay, obj2.withTiming(1, obj));
        obj1 = { translateX: null };
        obj2 = {};
        const merged = Object.assign(closure_2);
        obj2.duration = 0.7 * duration;
        obj1[0] = delayFunction(delay, first(0, obj2));
        const items = [obj1, ];
        const obj3 = { skewX: null };
        let obj7 = delayFunction(first[6]);
        let obj8 = delayFunction(first[6]);
        const obj4 = { duration: 0.7 * duration };
        const withTimingResult = obj8.withTiming("-10deg", { duration: 0.7 * duration });
        const obj11 = delayFunction(first[6]);
        const obj5 = { duration: 0.15 * duration };
        const withTimingResult1 = delayFunction(first[6]).withTiming("5deg", { duration: 0.15 * duration });
        obj3[0] = delayFunction(delay, obj7.withSequence(withTimingResult, withTimingResult1, delayFunction(first[6]).withTiming("0deg", { duration: 0.15 * duration })));
        items[1] = obj3;
        obj[1] = items;
        obj[0] = obj;
        obj7 = { opacity: 0, transform: items1 };
        obj8 = { translateX: -translateX.windowWidth };
        items1 = [obj8, { skewX: "45deg" }];
        const merged1 = Object.assign(initialValues);
        obj[1] = obj7;
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, withTiming: callback(closure_1_1[6]).withTiming, duration, animation: first, config: tmp2[1], withSequence: callback(closure_1_1[6]).withSequence, initialValues, callback: callbackV };
      fn.__workletHash = 7816705328872;
      fn.__initData = closure_1_8;
      return fn;
    };
    return tmp3Result;
  }
}
LightSpeedOutLeft = LightSpeedInLeft;
importDefaultResult1(LightSpeedInLeft, require("BaseAnimationBuilder").ComplexAnimationBuilder);
obj = {
  key: "createInstance",
  value: function createInstance() {
    return LightSpeedOutLeft();
  }
};
let items1 = [obj];
const importDefaultResultResult1 = importDefaultResult(LightSpeedInLeft, null, items1);
importDefaultResultResult1.presetName = "LightSpeedInLeft";
let closure_9 = { code: "function pnpm_LightspeedTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(values.windowWidth,config))},{skewX:delayFunction(delay,animation('-45deg',config))}]},initialValues:{opacity:1,transform:[{translateX:0},{skewX:'0deg'}],...initialValues},callback:callback};}" };
class LightSpeedOutRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, closure_0);
    items1 = [...items];
    tmp2 = closure_5;
    obj = closure_5(closure_0);
    tmp3 = closure_4;
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
      const tmp2 = closure_1_2(delayFunction.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      closure_2 = tmp4;
      const delay = delayFunction.getDelay();
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const fn = function n(windowWidth) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(0, closure_2)), transform: null };
        obj = { translateX: delayFunction(delay, first(windowWidth.windowWidth, closure_2)) };
        const items = [obj, { skewX: delayFunction(delay, first("-45deg", closure_2)) }];
        obj[1] = items;
        obj[0] = obj;
        const items1 = [{ translateX: 0 }, { skewX: "0deg" }];
        const merged = Object.assign(initialValues);
        obj[1] = { opacity: 1, transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 222611120175;
      fn.__initData = closure_1_9;
      return fn;
    };
    return tmp3Result;
  }
}
LightSpeedOutLeft = LightSpeedOutRight;
importDefaultResult1(LightSpeedOutRight, require("BaseAnimationBuilder").ComplexAnimationBuilder);
obj = {
  key: "createInstance",
  value: function createInstance() {
    return LightSpeedOutLeft();
  }
};
const items2 = [obj];
const importDefaultResultResult2 = importDefaultResult(LightSpeedOutRight, null, items2);
importDefaultResultResult2.presetName = "LightSpeedOutRight";
let closure_10 = { code: "function pnpm_LightspeedTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(-values.windowWidth,config))},{skewX:delayFunction(delay,animation('45deg',config))}]},initialValues:{opacity:1,transform:[{translateX:0},{skewX:'0deg'}],...initialValues},callback:callback};}" };
class LightSpeedOutLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, closure_0);
    items1 = [...items];
    tmp2 = closure_5;
    obj = closure_5(closure_0);
    tmp3 = closure_4;
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
      const tmp2 = closure_1_2(delayFunction.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      closure_2 = tmp4;
      const delay = delayFunction.getDelay();
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const fn = function n(windowWidth) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(0, closure_2)), transform: null };
        obj = { translateX: delayFunction(delay, first(-windowWidth.windowWidth, closure_2)) };
        const items = [obj, { skewX: delayFunction(delay, first("45deg", closure_2)) }];
        obj[1] = items;
        obj[0] = obj;
        const items1 = [{ translateX: 0 }, { skewX: "0deg" }];
        const merged = Object.assign(initialValues);
        obj[1] = { opacity: 1, transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 766058259752;
      fn.__initData = closure_1_10;
      return fn;
    };
    return tmp3Result;
  }
}
importDefaultResult1(LightSpeedOutLeft, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items3 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return LightSpeedOutLeft();
    }
  }
];
const importDefaultResultResult3 = importDefaultResult(LightSpeedOutLeft, null, items3);
importDefaultResultResult3.presetName = "LightSpeedOutLeft";

export const LightSpeedInRight = importDefaultResultResult;
export const LightSpeedInLeft = importDefaultResultResult1;
export const LightSpeedOutRight = importDefaultResultResult2;
export const LightSpeedOutLeft = importDefaultResultResult3;
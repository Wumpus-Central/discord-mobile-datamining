// _runtime/metro/01757__.js
import _possibleConstructorReturnDefault from "00093__possibleConstructorReturn.js";
import _slicedToArray from "00032__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

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
  } catch (err) {}
}
_possibleConstructorReturnDefault;
let closure_7 = {
  code: "function pnpm_LightspeedTs1(values){const{delayFunction,delay,withTiming,duration,animation,config,withSequence,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,withTiming(1,{duration:duration})),transform:[{translateX:delayFunction(delay,animation(0,{...config,duration:duration*0.7}))},{skewX:delayFunction(delay,withSequence(withTiming('10deg',{duration:duration*0.7}),withTiming('-5deg',{duration:duration*0.15}),withTiming('0deg',{duration:duration*0.15})))}]},initialValues:{opacity:0,transform:[{translateX:values.windowWidth},{skewX:'-45deg'}],...initialValues},callback:callback};}",
};
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
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: null, transform: null };
        let obj2 = delayFunction(1708);
        obj = { duration };
        obj.opacity = delayFunction(delay, obj2.withTiming(1, obj));
        const obj1 = { translateX: null };
        obj2 = {};
        const merged = Object.assign(closure_2);
        obj2.duration = 0.7 * duration;
        obj1.translateX = delayFunction(delay, first(0, obj2));
        const items = [obj1];
        const obj3 = { skewX: null };
        let obj7 = delayFunction(1708);
        let obj8 = delayFunction(1708);
        const obj4 = { duration: 0.7 * duration };
        const withTimingResult = obj8.withTiming("10deg", { duration: 0.7 * duration });
        const obj11 = delayFunction(1708);
        const obj5 = { duration: 0.15 * duration };
        const withTimingResult1 = delayFunction(1708).withTiming("-5deg", { duration: 0.15 * duration });
        obj3.skewX = delayFunction(
          delay,
          obj7.withSequence(
            withTimingResult,
            withTimingResult1,
            delayFunction(1708).withTiming("0deg", { duration: 0.15 * duration }),
          ),
        );
        items[1] = obj3;
        obj.transform = items;
        obj.animations = obj;
        obj7 = { opacity: 0, transform: null };
        obj8 = { translateX: translateX.windowWidth };
        const items1 = [obj8, { skewX: "-45deg" }];
        obj7.transform = items1;
        const merged1 = Object.assign(initialValues);
        obj.initialValues = obj7;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = {
        delayFunction,
        delay,
        withTiming: LightSpeedOutLeft(1708).withTiming,
        duration,
        animation,
        config: tmp2[1],
        withSequence: LightSpeedOutLeft(1708).withSequence,
        initialValues,
        callback: callbackV,
      };
      fn.__workletHash = 14533434616043;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
LightSpeedOutLeft = LightSpeedInRight;
_inherits(LightSpeedInRight, fn(1706).ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    return LightSpeedOutLeft();
  },
};
let items = [entry];
const importDefaultResultResult = _createClass(LightSpeedInRight, null, items);
importDefaultResultResult.presetName = "LightSpeedInRight";
let closure_8 = {
  code: "function pnpm_LightspeedTs2(values){const{delayFunction,delay,withTiming,duration,animation,config,withSequence,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,withTiming(1,{duration:duration})),transform:[{translateX:delayFunction(delay,animation(0,{...config,duration:duration*0.7}))},{skewX:delayFunction(delay,withSequence(withTiming('-10deg',{duration:duration*0.7}),withTiming('5deg',{duration:duration*0.15}),withTiming('0deg',{duration:duration*0.15})))}]},initialValues:{opacity:0,transform:[{translateX:-values.windowWidth},{skewX:'45deg'}],...initialValues},callback:callback};}",
};
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
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: null, transform: null };
        let obj2 = delayFunction(1708);
        obj = { duration };
        obj.opacity = delayFunction(delay, obj2.withTiming(1, obj));
        const obj1 = { translateX: null };
        obj2 = {};
        const merged = Object.assign(closure_2);
        obj2.duration = 0.7 * duration;
        obj1.translateX = delayFunction(delay, first(0, obj2));
        const items = [obj1];
        const obj3 = { skewX: null };
        let obj7 = delayFunction(1708);
        let obj8 = delayFunction(1708);
        const obj4 = { duration: 0.7 * duration };
        const withTimingResult = obj8.withTiming("-10deg", { duration: 0.7 * duration });
        const obj11 = delayFunction(1708);
        const obj5 = { duration: 0.15 * duration };
        const withTimingResult1 = delayFunction(1708).withTiming("5deg", { duration: 0.15 * duration });
        obj3.skewX = delayFunction(
          delay,
          obj7.withSequence(
            withTimingResult,
            withTimingResult1,
            delayFunction(1708).withTiming("0deg", { duration: 0.15 * duration }),
          ),
        );
        items[1] = obj3;
        obj.transform = items;
        obj.animations = obj;
        obj7 = { opacity: 0, transform: null };
        obj8 = { translateX: -translateX.windowWidth };
        const items1 = [obj8, { skewX: "45deg" }];
        obj7.transform = items1;
        const merged1 = Object.assign(initialValues);
        obj.initialValues = obj7;
        obj.callback = callbackV;
        return obj;
      };
      fn.__closure = {
        delayFunction,
        delay,
        withTiming: LightSpeedOutLeft(1708).withTiming,
        duration,
        animation,
        config: tmp2[1],
        withSequence: LightSpeedOutLeft(1708).withSequence,
        initialValues,
        callback: callbackV,
      };
      fn.__workletHash = 7816705328872;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
LightSpeedOutLeft = LightSpeedInLeft;
_inherits(LightSpeedInLeft, fn(1706).ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    return LightSpeedOutLeft();
  },
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(LightSpeedInLeft, null, items1);
importDefaultResultResult1.presetName = "LightSpeedInLeft";
let closure_9 = {
  code: "function pnpm_LightspeedTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(values.windowWidth,config))},{skewX:delayFunction(delay,animation('-45deg',config))}]},initialValues:{opacity:1,transform:[{translateX:0},{skewX:'0deg'}],...initialValues},callback:callback};}",
};
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
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(0, closure_2)), transform: null };
        obj = { translateX: delayFunction(delay, first(windowWidth.windowWidth, closure_2)) };
        const items = [obj, { skewX: delayFunction(delay, first("-45deg", closure_2)) }];
        obj.transform = items;
        obj.animations = obj;
        const obj2 = { opacity: 1, transform: null };
        const items1 = [{ translateX: 0 }, { skewX: "0deg" }];
        obj2.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj2;
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
_inherits(LightSpeedOutRight, fn(1706).ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    return LightSpeedOutLeft();
  },
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(LightSpeedOutRight, null, items2);
importDefaultResultResult2.presetName = "LightSpeedOutRight";
let closure_10 = {
  code: "function pnpm_LightspeedTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{translateX:delayFunction(delay,animation(-values.windowWidth,config))},{skewX:delayFunction(delay,animation('45deg',config))}]},initialValues:{opacity:1,transform:[{translateX:0},{skewX:'0deg'}],...initialValues},callback:callback};}",
};
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
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { opacity: delayFunction(delay, first(0, closure_2)), transform: null };
        obj = { translateX: delayFunction(delay, first(-windowWidth.windowWidth, closure_2)) };
        const items = [obj, { skewX: delayFunction(delay, first("45deg", closure_2)) }];
        obj.transform = items;
        obj.animations = obj;
        const obj2 = { opacity: 1, transform: null };
        const items1 = [{ translateX: 0 }, { skewX: "0deg" }];
        obj2.transform = items1;
        const merged = Object.assign(initialValues);
        obj.initialValues = obj2;
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
_inherits(LightSpeedOutLeft, fn(1706).ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    return LightSpeedOutLeft();
  },
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(LightSpeedOutLeft, null, items3);
importDefaultResultResult3.presetName = "LightSpeedOutLeft";

export const LightSpeedInRight = importDefaultResultResult;
export const LightSpeedInLeft = importDefaultResultResult1;
export const LightSpeedOutRight = importDefaultResultResult2;
export const LightSpeedOutLeft = importDefaultResultResult3;

// === Module 1772: _isNativeReflectConstruct ===

// Module 1772 (_isNativeReflectConstruct)
import closure_2 from "_classCallCheck" /* 41 */;
import importDefaultResult from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import importDefaultResult1 from "_inherits" /* 98 */;

let BounceOutRight = arg1;
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
let closure_6 = { code: "function pnpm_BounceTs1(){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,withSequence(withTiming(1.2,{duration:duration*0.55}),withTiming(0.9,{duration:duration*0.15}),withTiming(1.1,{duration:duration*0.15}),withTiming(1,{duration:duration*0.15})))}]},initialValues:{transform:[{scale:0}],...initialValues},callback:callback};}" };
class BounceIn {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_2(this, closure_0);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(closure_0);
    tmp3 = closure_3;
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
      const delay = delayFunction.getDelay();
      const duration = delayFunction.getDuration();
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const fn = function n() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { scale: null };
        let obj3 = delayFunction(delay[5]);
        let obj4 = delayFunction(delay[5]);
        obj1 = { duration: 0.55 * duration };
        const withTimingResult = obj4.withTiming(1.2, { duration: 0.55 * duration });
        const obj2 = { duration: 0.15 * duration };
        const obj7 = delayFunction(delay[5]);
        const withTimingResult1 = delayFunction(delay[5]).withTiming(0.9, { duration: 0.15 * duration });
        obj3 = { duration: 0.15 * duration };
        const obj9 = delayFunction(delay[5]);
        const withTimingResult2 = delayFunction(delay[5]).withTiming(1.1, obj3);
        obj4 = { duration: 0.15 * duration };
        obj[0] = delayFunction(delay, obj3.withSequence(withTimingResult, withTimingResult1, withTimingResult2, delayFunction(delay[5]).withTiming(1, obj4)));
        const items = [obj];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ scale: 0 }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, withSequence: callback(closure_1_1[5]).withSequence, withTiming: callback(closure_1_1[5]).withTiming, duration, initialValues, callback: callbackV };
      fn.__workletHash = 6814288411244;
      fn.__initData = closure_1_6;
      return fn;
    };
    return tmp3Result;
  }
}
BounceOutRight = BounceIn;
importDefaultResult1(BounceIn, require("BaseAnimationBuilder").ComplexAnimationBuilder);
let obj = {
  key: "getDuration",
  value: function getDuration() {
    let num = this.durationV;
    if (num == null) {
      num = 600;
    }
    return num;
  }
};
let items = [obj];
obj = {
  key: "createInstance",
  value: function createInstance() {
    return BounceOutRight();
  }
};
let items1 = [
  obj,
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult = importDefaultResult(BounceIn, items, items1);
importDefaultResultResult.presetName = "BounceIn";
let closure_7 = { code: "function pnpm_BounceTs2(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(-20,{duration:duration*0.55}),withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateY:values.windowHeight}],...initialValues},callback:callback};}" };
class BounceInDown {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_2(this, closure_0);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(closure_0);
    tmp3 = closure_3;
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
      const delay = delayFunction.getDelay();
      const duration = delayFunction.getDuration();
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const fn = function n(translateY) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateY: null };
        let obj3 = delayFunction(delay[5]);
        let obj4 = delayFunction(delay[5]);
        let obj6 = delayFunction(delay[5]);
        obj1 = { duration: 0.55 * duration };
        const obj2 = { duration: 0.15 * duration };
        const withTimingResult = obj4.withTiming(-20, { duration: 0.55 * duration });
        const withTimingResult1 = obj6.withTiming(10, { duration: 0.15 * duration });
        obj3 = { duration: 0.15 * duration };
        const obj9 = delayFunction(delay[5]);
        const withTimingResult2 = delayFunction(delay[5]).withTiming(-10, obj3);
        obj4 = { duration: 0.15 * duration };
        obj[0] = delayFunction(delay, obj3.withSequence(withTimingResult, withTimingResult1, withTimingResult2, delayFunction(delay[5]).withTiming(0, obj4)));
        const items = [obj];
        obj[0] = items;
        obj[0] = obj;
        obj6 = { translateY: translateY.windowHeight };
        const items1 = [obj6];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, withSequence: callback(closure_1_1[5]).withSequence, withTiming: callback(closure_1_1[5]).withTiming, duration, initialValues, callback: callbackV };
      fn.__workletHash = 4551292686981;
      fn.__initData = closure_1_7;
      return fn;
    };
    return tmp3Result;
  }
}
BounceOutRight = BounceInDown;
importDefaultResult1(BounceInDown, require("BaseAnimationBuilder").ComplexAnimationBuilder);
obj = {
  key: "getDuration",
  value: function getDuration() {
    let num = this.durationV;
    if (num == null) {
      num = 600;
    }
    return num;
  }
};
const items2 = [obj];
const items3 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return BounceOutRight();
    }
  },
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult1 = importDefaultResult(BounceInDown, items2, items3);
importDefaultResultResult1.presetName = "BounceInDown";
let closure_8 = { code: "function pnpm_BounceTs3(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(20,{duration:duration*0.55}),withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateY:-values.windowHeight}],...initialValues},callback:callback};}" };
class BounceInUp {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_2(this, closure_0);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(closure_0);
    tmp3 = closure_3;
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
      const delay = delayFunction.getDelay();
      const duration = delayFunction.getDuration();
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const fn = function n(translateY) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateY: null };
        let obj3 = delayFunction(delay[5]);
        let obj4 = delayFunction(delay[5]);
        let obj6 = delayFunction(delay[5]);
        obj1 = { duration: 0.55 * duration };
        const obj2 = { duration: 0.15 * duration };
        const withTimingResult = obj4.withTiming(20, { duration: 0.55 * duration });
        const withTimingResult1 = obj6.withTiming(-10, { duration: 0.15 * duration });
        obj3 = { duration: 0.15 * duration };
        const obj9 = delayFunction(delay[5]);
        const withTimingResult2 = delayFunction(delay[5]).withTiming(10, obj3);
        obj4 = { duration: 0.15 * duration };
        obj[0] = delayFunction(delay, obj3.withSequence(withTimingResult, withTimingResult1, withTimingResult2, delayFunction(delay[5]).withTiming(0, obj4)));
        const items = [obj];
        obj[0] = items;
        obj[0] = obj;
        obj6 = { translateY: -translateY.windowHeight };
        const items1 = [obj6];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, withSequence: callback(closure_1_1[5]).withSequence, withTiming: callback(closure_1_1[5]).withTiming, duration, initialValues, callback: callbackV };
      fn.__workletHash = 11333943352836;
      fn.__initData = closure_1_8;
      return fn;
    };
    return tmp3Result;
  }
}
BounceOutRight = BounceInUp;
importDefaultResult1(BounceInUp, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items4 = [
  {
    key: "getDuration",
    value: function getDuration() {
      let num = this.durationV;
      if (num == null) {
        num = 600;
      }
      return num;
    }
  }
];
const items5 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return BounceOutRight();
    }
  },
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult2 = importDefaultResult(BounceInUp, items4, items5);
importDefaultResultResult2.presetName = "BounceInUp";
let closure_9 = { code: "function pnpm_BounceTs4(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(20,{duration:duration*0.55}),withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateX:-values.windowWidth}],...initialValues},callback:callback};}" };
class BounceInLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_2(this, closure_0);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(closure_0);
    tmp3 = closure_3;
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
      const delay = delayFunction.getDelay();
      const duration = delayFunction.getDuration();
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const fn = function n(translateX) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateX: null };
        let obj3 = delayFunction(delay[5]);
        let obj4 = delayFunction(delay[5]);
        let obj6 = delayFunction(delay[5]);
        obj1 = { duration: 0.55 * duration };
        const obj2 = { duration: 0.15 * duration };
        const withTimingResult = obj4.withTiming(20, { duration: 0.55 * duration });
        const withTimingResult1 = obj6.withTiming(-10, { duration: 0.15 * duration });
        obj3 = { duration: 0.15 * duration };
        const obj9 = delayFunction(delay[5]);
        const withTimingResult2 = delayFunction(delay[5]).withTiming(10, obj3);
        obj4 = { duration: 0.15 * duration };
        obj[0] = delayFunction(delay, obj3.withSequence(withTimingResult, withTimingResult1, withTimingResult2, delayFunction(delay[5]).withTiming(0, obj4)));
        const items = [obj];
        obj[0] = items;
        obj[0] = obj;
        obj6 = { translateX: -translateX.windowWidth };
        const items1 = [obj6];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, withSequence: callback(closure_1_1[5]).withSequence, withTiming: callback(closure_1_1[5]).withTiming, duration, initialValues, callback: callbackV };
      fn.__workletHash = 10162410157050;
      fn.__initData = closure_1_9;
      return fn;
    };
    return tmp3Result;
  }
}
BounceOutRight = BounceInLeft;
importDefaultResult1(BounceInLeft, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items6 = [
  {
    key: "getDuration",
    value: function getDuration() {
      let num = this.durationV;
      if (num == null) {
        num = 600;
      }
      return num;
    }
  }
];
const items7 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return BounceOutRight();
    }
  },
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult3 = importDefaultResult(BounceInLeft, items6, items7);
importDefaultResultResult3.presetName = "BounceInLeft";
let closure_10 = { code: "function pnpm_BounceTs5(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(-20,{duration:duration*0.55}),withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateX:values.windowWidth}],...initialValues},callback:callback};}" };
class BounceInRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_2(this, closure_0);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(closure_0);
    tmp3 = closure_3;
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
      const delay = delayFunction.getDelay();
      const duration = delayFunction.getDuration();
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const fn = function n(translateX) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateX: null };
        let obj3 = delayFunction(delay[5]);
        let obj4 = delayFunction(delay[5]);
        let obj6 = delayFunction(delay[5]);
        obj1 = { duration: 0.55 * duration };
        const obj2 = { duration: 0.15 * duration };
        const withTimingResult = obj4.withTiming(-20, { duration: 0.55 * duration });
        const withTimingResult1 = obj6.withTiming(10, { duration: 0.15 * duration });
        obj3 = { duration: 0.15 * duration };
        const obj9 = delayFunction(delay[5]);
        const withTimingResult2 = delayFunction(delay[5]).withTiming(-10, obj3);
        obj4 = { duration: 0.15 * duration };
        obj[0] = delayFunction(delay, obj3.withSequence(withTimingResult, withTimingResult1, withTimingResult2, delayFunction(delay[5]).withTiming(0, obj4)));
        const items = [obj];
        obj[0] = items;
        obj[0] = obj;
        obj6 = { translateX: translateX.windowWidth };
        const items1 = [obj6];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, withSequence: callback(closure_1_1[5]).withSequence, withTiming: callback(closure_1_1[5]).withTiming, duration, initialValues, callback: callbackV };
      fn.__workletHash = 4134237895259;
      fn.__initData = closure_1_10;
      return fn;
    };
    return tmp3Result;
  }
}
BounceOutRight = BounceInRight;
importDefaultResult1(BounceInRight, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items8 = [
  {
    key: "getDuration",
    value: function getDuration() {
      let num = this.durationV;
      if (num == null) {
        num = 600;
      }
      return num;
    }
  }
];
const items9 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return BounceOutRight();
    }
  },
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult4 = importDefaultResult(BounceInRight, items8, items9);
importDefaultResultResult4.presetName = "BounceInRight";
let closure_11 = { code: "function pnpm_BounceTs6(){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,withSequence(withTiming(1.1,{duration:duration*0.15}),withTiming(0.9,{duration:duration*0.15}),withTiming(1.2,{duration:duration*0.15}),withTiming(0,{duration:duration*0.55})))}]},initialValues:{transform:[{scale:1}],...initialValues},callback:callback};}" };
class BounceOut {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_2(this, closure_0);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(closure_0);
    tmp3 = closure_3;
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
      const delay = delayFunction.getDelay();
      const duration = delayFunction.getDuration();
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const fn = function n() {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { scale: null };
        let obj3 = delayFunction(delay[5]);
        let obj4 = delayFunction(delay[5]);
        obj1 = { duration: 0.15 * duration };
        const withTimingResult = obj4.withTiming(1.1, { duration: 0.15 * duration });
        const obj2 = { duration: 0.15 * duration };
        const obj7 = delayFunction(delay[5]);
        const withTimingResult1 = delayFunction(delay[5]).withTiming(0.9, { duration: 0.15 * duration });
        obj3 = { duration: 0.15 * duration };
        const obj9 = delayFunction(delay[5]);
        const withTimingResult2 = delayFunction(delay[5]).withTiming(1.2, obj3);
        obj4 = { duration: 0.55 * duration };
        obj[0] = delayFunction(delay, obj3.withSequence(withTimingResult, withTimingResult1, withTimingResult2, delayFunction(delay[5]).withTiming(0, obj4)));
        const items = [obj];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ scale: 1 }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, withSequence: callback(closure_1_1[5]).withSequence, withTiming: callback(closure_1_1[5]).withTiming, duration, initialValues, callback: callbackV };
      fn.__workletHash = 15864962046507;
      fn.__initData = closure_1_11;
      return fn;
    };
    return tmp3Result;
  }
}
BounceOutRight = BounceOut;
importDefaultResult1(BounceOut, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items10 = [
  {
    key: "getDuration",
    value: function getDuration() {
      let num = this.durationV;
      if (num == null) {
        num = 600;
      }
      return num;
    }
  }
];
const items11 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return BounceOutRight();
    }
  },
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult5 = importDefaultResult(BounceOut, items10, items11);
importDefaultResultResult5.presetName = "BounceOut";
let closure_12 = { code: "function pnpm_BounceTs7(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(-20,{duration:duration*0.15}),withTiming(values.windowHeight,{duration:duration*0.55})))}]},initialValues:{transform:[{translateY:0}],...initialValues},callback:callback};}" };
class BounceOutDown {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_2(this, closure_0);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(closure_0);
    tmp3 = closure_3;
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
      const delay = delayFunction.getDelay();
      const duration = delayFunction.getDuration();
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const fn = function n(windowHeight) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateY: null };
        let obj3 = delayFunction(delay[5]);
        let obj4 = delayFunction(delay[5]);
        obj1 = { duration: 0.15 * duration };
        const withTimingResult = obj4.withTiming(-10, { duration: 0.15 * duration });
        const obj2 = { duration: 0.15 * duration };
        const obj7 = delayFunction(delay[5]);
        const withTimingResult1 = delayFunction(delay[5]).withTiming(10, { duration: 0.15 * duration });
        obj3 = { duration: 0.15 * duration };
        const obj9 = delayFunction(delay[5]);
        const withTimingResult2 = delayFunction(delay[5]).withTiming(-20, obj3);
        obj4 = { duration: 0.55 * duration };
        obj[0] = delayFunction(delay, obj3.withSequence(withTimingResult, withTimingResult1, withTimingResult2, delayFunction(delay[5]).withTiming(windowHeight.windowHeight, obj4)));
        const items = [obj];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ translateY: 0 }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, withSequence: callback(closure_1_1[5]).withSequence, withTiming: callback(closure_1_1[5]).withTiming, duration, initialValues, callback: callbackV };
      fn.__workletHash = 4170057933312;
      fn.__initData = closure_1_12;
      return fn;
    };
    return tmp3Result;
  }
}
BounceOutRight = BounceOutDown;
importDefaultResult1(BounceOutDown, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items12 = [
  {
    key: "getDuration",
    value: function getDuration() {
      let num = this.durationV;
      if (num == null) {
        num = 600;
      }
      return num;
    }
  }
];
const items13 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return BounceOutRight();
    }
  },
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult6 = importDefaultResult(BounceOutDown, items12, items13);
importDefaultResultResult6.presetName = "BounceOutDown";
let closure_13 = { code: "function pnpm_BounceTs8(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(20,{duration:duration*0.15}),withTiming(-values.windowHeight,{duration:duration*0.55})))}]},initialValues:{transform:[{translateY:0}],...initialValues},callback:callback};}" };
class BounceOutUp {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_2(this, closure_0);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(closure_0);
    tmp3 = closure_3;
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
      const delay = delayFunction.getDelay();
      const duration = delayFunction.getDuration();
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const fn = function n(windowHeight) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateY: null };
        let obj3 = delayFunction(delay[5]);
        let obj4 = delayFunction(delay[5]);
        obj1 = { duration: 0.15 * duration };
        const withTimingResult = obj4.withTiming(10, { duration: 0.15 * duration });
        const obj2 = { duration: 0.15 * duration };
        const obj7 = delayFunction(delay[5]);
        const withTimingResult1 = delayFunction(delay[5]).withTiming(-10, { duration: 0.15 * duration });
        obj3 = { duration: 0.15 * duration };
        const obj9 = delayFunction(delay[5]);
        const withTimingResult2 = delayFunction(delay[5]).withTiming(20, obj3);
        obj4 = { duration: 0.55 * duration };
        obj[0] = delayFunction(delay, obj3.withSequence(withTimingResult, withTimingResult1, withTimingResult2, delayFunction(delay[5]).withTiming(-windowHeight.windowHeight, obj4)));
        const items = [obj];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ translateY: 0 }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, withSequence: callback(closure_1_1[5]).withSequence, withTiming: callback(closure_1_1[5]).withTiming, duration, initialValues, callback: callbackV };
      fn.__workletHash = 8059944917039;
      fn.__initData = closure_1_13;
      return fn;
    };
    return tmp3Result;
  }
}
BounceOutRight = BounceOutUp;
importDefaultResult1(BounceOutUp, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items14 = [
  {
    key: "getDuration",
    value: function getDuration() {
      let num = this.durationV;
      if (num == null) {
        num = 600;
      }
      return num;
    }
  }
];
const items15 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return BounceOutRight();
    }
  },
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult7 = importDefaultResult(BounceOutUp, items14, items15);
importDefaultResultResult7.presetName = "BounceOutUp";
let closure_14 = { code: "function pnpm_BounceTs9(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(20,{duration:duration*0.15}),withTiming(-values.windowWidth,{duration:duration*0.55})))}]},initialValues:{transform:[{translateX:0}],...initialValues},callback:callback};}" };
class BounceOutLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_2(this, closure_0);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(closure_0);
    tmp3 = closure_3;
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
      const delay = delayFunction.getDelay();
      const duration = delayFunction.getDuration();
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const fn = function n(windowWidth) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateX: null };
        let obj3 = delayFunction(delay[5]);
        let obj4 = delayFunction(delay[5]);
        obj1 = { duration: 0.15 * duration };
        const withTimingResult = obj4.withTiming(10, { duration: 0.15 * duration });
        const obj2 = { duration: 0.15 * duration };
        const obj7 = delayFunction(delay[5]);
        const withTimingResult1 = delayFunction(delay[5]).withTiming(-10, { duration: 0.15 * duration });
        obj3 = { duration: 0.15 * duration };
        const obj9 = delayFunction(delay[5]);
        const withTimingResult2 = delayFunction(delay[5]).withTiming(20, obj3);
        obj4 = { duration: 0.55 * duration };
        obj[0] = delayFunction(delay, obj3.withSequence(withTimingResult, withTimingResult1, withTimingResult2, delayFunction(delay[5]).withTiming(-windowWidth.windowWidth, obj4)));
        const items = [obj];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ translateX: 0 }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, withSequence: callback(closure_1_1[5]).withSequence, withTiming: callback(closure_1_1[5]).withTiming, duration, initialValues, callback: callbackV };
      fn.__workletHash = 6930767645815;
      fn.__initData = closure_1_14;
      return fn;
    };
    return tmp3Result;
  }
}
BounceOutRight = BounceOutLeft;
importDefaultResult1(BounceOutLeft, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items16 = [
  {
    key: "getDuration",
    value: function getDuration() {
      let num = this.durationV;
      if (num == null) {
        num = 600;
      }
      return num;
    }
  }
];
const items17 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return BounceOutRight();
    }
  },
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult8 = importDefaultResult(BounceOutLeft, items16, items17);
importDefaultResultResult8.presetName = "BounceOutLeft";
let closure_15 = { code: "function pnpm_BounceTs10(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(-20,{duration:duration*0.15}),withTiming(values.windowWidth,{duration:duration*0.55})))}]},initialValues:{transform:[{translateX:0}],...initialValues},callback:callback};}" };
class BounceOutRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_2(this, closure_0);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(closure_0);
    tmp3 = closure_3;
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
      const delay = delayFunction.getDelay();
      const duration = delayFunction.getDuration();
      const callbackV = delayFunction.callbackV;
      const initialValues = delayFunction.initialValues;
      const fn = function n(windowWidth) {
        let obj = { animations: null, initialValues: null, callback: null };
        obj = { transform: null };
        obj = { translateX: null };
        let obj3 = delayFunction(delay[5]);
        let obj4 = delayFunction(delay[5]);
        obj1 = { duration: 0.15 * duration };
        const withTimingResult = obj4.withTiming(-10, { duration: 0.15 * duration });
        const obj2 = { duration: 0.15 * duration };
        const obj7 = delayFunction(delay[5]);
        const withTimingResult1 = delayFunction(delay[5]).withTiming(10, { duration: 0.15 * duration });
        obj3 = { duration: 0.15 * duration };
        const obj9 = delayFunction(delay[5]);
        const withTimingResult2 = delayFunction(delay[5]).withTiming(-20, obj3);
        obj4 = { duration: 0.55 * duration };
        obj[0] = delayFunction(delay, obj3.withSequence(withTimingResult, withTimingResult1, withTimingResult2, delayFunction(delay[5]).withTiming(windowWidth.windowWidth, obj4)));
        const items = [obj];
        obj[0] = items;
        obj[0] = obj;
        const items1 = [{ translateX: 0 }];
        const merged = Object.assign(initialValues);
        obj[1] = { transform: items1 };
        obj[2] = callbackV;
        return obj;
      };
      fn.__closure = { delayFunction, delay, withSequence: callback(closure_1_1[5]).withSequence, withTiming: callback(closure_1_1[5]).withTiming, duration, initialValues, callback: callbackV };
      fn.__workletHash = 11465945086863;
      fn.__initData = closure_1_15;
      return fn;
    };
    return tmp3Result;
  }
}
importDefaultResult1(BounceOutRight, require("BaseAnimationBuilder").ComplexAnimationBuilder);
const items18 = [
  {
    key: "getDuration",
    value: function getDuration() {
      let num = this.durationV;
      if (num == null) {
        num = 600;
      }
      return num;
    }
  }
];
const items19 = [
  {
    key: "createInstance",
    value: function createInstance() {
      return BounceOutRight();
    }
  },
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult9 = importDefaultResult(BounceOutRight, items18, items19);
importDefaultResultResult9.presetName = "BounceOutRight";

export const BounceIn = importDefaultResultResult;
export const BounceInDown = importDefaultResultResult1;
export const BounceInUp = importDefaultResultResult2;
export const BounceInLeft = importDefaultResultResult3;
export const BounceInRight = importDefaultResultResult4;
export const BounceOut = importDefaultResultResult5;
export const BounceOutDown = importDefaultResultResult6;
export const BounceOutUp = importDefaultResultResult7;
export const BounceOutLeft = importDefaultResultResult8;
export const BounceOutRight = importDefaultResultResult9;
// _runtime/01764_LightSpeedInRight.js
import BaseAnimationBuilder from "01713_BaseAnimationBuilder.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
let closure_7 = {
  code: "function pnpm_LightspeedTs1(values){const{delayFunction,delay,withTiming,duration,animation,config,withSequence,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,withTiming(1,{duration:duration})),transform:[{translateX:delayFunction(delay,animation(0,{...config,duration:duration*0.7}))},{skewX:delayFunction(delay,withSequence(withTiming('10deg',{duration:duration*0.7}),withTiming('-5deg',{duration:duration*0.15}),withTiming('0deg',{duration:duration*0.15})))}]},initialValues:{opacity:0,transform:[{translateX:values.windowWidth},{skewX:'-45deg'}],...initialValues},callback:callback};}",
};
class LightSpeedInRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, LightSpeedInRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(LightSpeedInRight);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = _possibleConstructorReturn(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = closure_2_2(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const duration = closure_0.getDuration();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(translateX) {
        let items;
        let items1;
        let obj12;
        let obj13;
        let obj14;
        let obj2;
        let obj3;
        let obj4;
        let obj6;
        let withSequence;
        let withTimingResult;
        let withTimingResult1;
        const obj = { animations: obj2, initialValues: obj14, callback: callbackV };
        obj2 = { opacity: delayFunction(delay, obj3.withTiming(1, obj4)), transform: items };
        obj3 = closure_2_0(closure_2_1[6]);
        obj4 = { duration };
        const obj5 = { translateX: delayFunction(delay, first(0, obj6)) };
        obj6 = { duration: 0.7 * duration };
        const merged = Object.assign(closure_2);
        items = [obj5];
        const obj7 = {
          skewX: delayFunction(
            delay,
            withSequence(withTimingResult, withTimingResult1, obj12.withTiming("0deg", obj13)),
          ),
        };
        withSequence = closure_2_0(closure_2_1[6]).withSequence;
        closure_2_0(closure_2_1[6]);
        const obj8 = closure_2_0(closure_2_1[6]);
        const obj9 = { duration: 0.7 * duration };
        withTimingResult = obj8.withTiming("10deg", obj9);
        const obj10 = closure_2_0(closure_2_1[6]);
        const obj11 = { duration: 0.15 * duration };
        withTimingResult1 = obj10.withTiming("-5deg", obj11);
        obj13 = { duration: 0.15 * duration };
        items[1] = obj7;
        obj14 = { opacity: 0, transform: items1 };
        items1 = [,];
        const obj15 = { translateX: translateX.windowWidth };
        items1[0] = obj15;
        items1[1] = { skewX: "-45deg" };
        obj12 = closure_2_0(closure_2_1[6]);
        const merged1 = Object.assign(initialValues);
        return obj;
      };
      let obj = {
        delayFunction,
        delay,
        withTiming: LightSpeedInRight(closure_2_1[6]).withTiming,
        duration,
        animation: first,
        config: tmp4,
        withSequence: LightSpeedInRight(closure_2_1[6]).withSequence,
        initialValues,
        callback: callbackV,
      };
      fn.__closure = obj;
      fn.__workletHash = 14533434616043;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(LightSpeedInRight, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = LightSpeedInRight();
    return tmp;
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
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, LightSpeedInLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(LightSpeedInLeft);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = _possibleConstructorReturn(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = closure_2_2(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const duration = closure_0.getDuration();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(translateX) {
        let items;
        let items1;
        let obj12;
        let obj13;
        let obj14;
        let obj2;
        let obj3;
        let obj4;
        let obj6;
        let withSequence;
        let withTimingResult;
        let withTimingResult1;
        const obj = { animations: obj2, initialValues: obj14, callback: callbackV };
        obj2 = { opacity: delayFunction(delay, obj3.withTiming(1, obj4)), transform: items };
        obj3 = closure_2_0(closure_2_1[6]);
        obj4 = { duration };
        const obj5 = { translateX: delayFunction(delay, first(0, obj6)) };
        obj6 = { duration: 0.7 * duration };
        const merged = Object.assign(closure_2);
        items = [obj5];
        const obj7 = {
          skewX: delayFunction(
            delay,
            withSequence(withTimingResult, withTimingResult1, obj12.withTiming("0deg", obj13)),
          ),
        };
        withSequence = closure_2_0(closure_2_1[6]).withSequence;
        closure_2_0(closure_2_1[6]);
        const obj8 = closure_2_0(closure_2_1[6]);
        const obj9 = { duration: 0.7 * duration };
        withTimingResult = obj8.withTiming("-10deg", obj9);
        const obj10 = closure_2_0(closure_2_1[6]);
        const obj11 = { duration: 0.15 * duration };
        withTimingResult1 = obj10.withTiming("5deg", obj11);
        obj13 = { duration: 0.15 * duration };
        items[1] = obj7;
        obj14 = { opacity: 0, transform: items1 };
        items1 = [,];
        const obj15 = { translateX: -translateX.windowWidth };
        items1[0] = obj15;
        items1[1] = { skewX: "45deg" };
        obj12 = closure_2_0(closure_2_1[6]);
        const merged1 = Object.assign(initialValues);
        return obj;
      };
      let obj = {
        delayFunction,
        delay,
        withTiming: LightSpeedInLeft(closure_2_1[6]).withTiming,
        duration,
        animation: first,
        config: tmp4,
        withSequence: LightSpeedInLeft(closure_2_1[6]).withSequence,
        initialValues,
        callback: callbackV,
      };
      fn.__closure = obj;
      fn.__workletHash = 7816705328872;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(LightSpeedInLeft, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = LightSpeedInLeft();
    return tmp;
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
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, LightSpeedOutRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(LightSpeedOutRight);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = _possibleConstructorReturn(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = closure_2_2(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(windowWidth) {
        let items;
        let items1;
        let obj2;
        let obj5;
        const obj = { animations: obj2, initialValues: obj5, callback: callbackV };
        obj2 = { opacity: delayFunction(delay, first(0, closure_2)), transform: items };
        items = [{ translateX: delayFunction(delay, first(windowWidth.windowWidth, closure_2)) }];
        ({ translateX: delayFunction(delay, first(windowWidth.windowWidth, closure_2)) });
        items[1] = { skewX: delayFunction(delay, first("-45deg", closure_2)) };
        obj5 = { opacity: 1, transform: items1 };
        items1 = [{ translateX: 0 }, { skewX: "0deg" }];
        ({ skewX: delayFunction(delay, first("-45deg", closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 222611120175;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(LightSpeedOutRight, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = LightSpeedOutRight();
    return tmp;
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
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, LightSpeedOutLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(LightSpeedOutLeft);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = _possibleConstructorReturn(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = closure_2_2(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(windowWidth) {
        let items;
        let items1;
        let obj2;
        let obj5;
        const obj = { animations: obj2, initialValues: obj5, callback: callbackV };
        obj2 = { opacity: delayFunction(delay, first(0, closure_2)), transform: items };
        items = [{ translateX: delayFunction(delay, first(-windowWidth.windowWidth, closure_2)) }];
        ({ translateX: delayFunction(delay, first(-windowWidth.windowWidth, closure_2)) });
        items[1] = { skewX: delayFunction(delay, first("45deg", closure_2)) };
        obj5 = { opacity: 1, transform: items1 };
        items1 = [{ translateX: 0 }, { skewX: "0deg" }];
        ({ skewX: delayFunction(delay, first("45deg", closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 766058259752;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(LightSpeedOutLeft, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = LightSpeedOutLeft();
    return tmp;
  },
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(LightSpeedOutLeft, null, items3);
importDefaultResultResult3.presetName = "LightSpeedOutLeft";
const LightSpeedInRight_export = importDefaultResultResult;
const LightSpeedInLeft_export = importDefaultResultResult1;
const LightSpeedOutRight_export = importDefaultResultResult2;
const LightSpeedOutLeft_export = importDefaultResultResult3;

export { LightSpeedInRight_export as LightSpeedInRight };
export { LightSpeedInLeft_export as LightSpeedInLeft };
export { LightSpeedOutRight_export as LightSpeedOutRight };
export { LightSpeedOutLeft_export as LightSpeedOutLeft };

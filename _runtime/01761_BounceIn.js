// === Module 1761: BounceIn ===

// Module 1761 (BounceIn)
import BaseAnimationBuilder from "BaseAnimationBuilder" /* 1713 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
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
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, BounceIn);
    let items1 = [...items];
    let obj = _getPrototypeOf(BounceIn);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const delay = closure_0.getDelay();
      const duration = closure_0.getDuration();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n() {
        let items;
        let items1;
        let obj10;
        let obj11;
        let obj12;
        let obj2;
        let withSequence;
        let withTimingResult;
        let withTimingResult1;
        let withTimingResult2;
        const obj = { animations: obj2, initialValues: obj12, callback: callbackV };
        obj2 = { transform: items };
        const obj3 = { scale: delayFunction(delay, withSequence(withTimingResult, withTimingResult1, withTimingResult2, obj10.withTiming(1, obj11))) };
        withSequence = closure_2_0(closure_2_1[5]).withSequence;
        closure_2_0(closure_2_1[5]);
        const obj4 = closure_2_0(closure_2_1[5]);
        const obj5 = { duration: 0.55 * duration };
        withTimingResult = obj4.withTiming(1.2, obj5);
        const obj6 = closure_2_0(closure_2_1[5]);
        const obj7 = { duration: 0.15 * duration };
        withTimingResult1 = obj6.withTiming(0.9, obj7);
        const obj8 = closure_2_0(closure_2_1[5]);
        const obj9 = { duration: 0.15 * duration };
        withTimingResult2 = obj8.withTiming(1.1, obj9);
        items = [obj3];
        obj12 = { transform: items1 };
        items1 = [{ scale: 0 }];
        obj10 = closure_2_0(closure_2_1[5]);
        obj11 = { duration: 0.15 * duration };
        const merged = Object.assign(initialValues);
        return obj;
      };
      let obj = { delayFunction, delay, withSequence: BounceIn(closure_2_1[5]).withSequence, withTiming: BounceIn(closure_2_1[5]).withTiming, duration, initialValues, callback: callbackV };
      fn.__closure = obj;
      fn.__workletHash = 6814288411244;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(BounceIn, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry = {
  key: "getDuration",
  value: function getDuration() {
    let num = this.durationV;
    if (num == null) {
      num = 600;
    }
    return num;
  }
};
let items = [entry];
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = BounceIn();
    return tmp;
  }
};
let items1 = [
  entry1,
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult = _createClass(BounceIn, items, items1);
importDefaultResultResult.presetName = "BounceIn";
let closure_7 = { code: "function pnpm_BounceTs2(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(-20,{duration:duration*0.55}),withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateY:values.windowHeight}],...initialValues},callback:callback};}" };
class BounceInDown {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, BounceInDown);
    let items1 = [...items];
    let obj = _getPrototypeOf(BounceInDown);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const delay = closure_0.getDelay();
      const duration = closure_0.getDuration();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(translateY) {
        let items;
        let items1;
        let obj10;
        let obj11;
        let obj12;
        let obj2;
        let withSequence;
        let withTimingResult;
        let withTimingResult1;
        let withTimingResult2;
        const obj = { animations: obj2, initialValues: obj12, callback: callbackV };
        obj2 = { transform: items };
        const obj3 = { translateY: delayFunction(delay, withSequence(withTimingResult, withTimingResult1, withTimingResult2, obj10.withTiming(0, obj11))) };
        withSequence = closure_2_0(closure_2_1[5]).withSequence;
        closure_2_0(closure_2_1[5]);
        const obj4 = closure_2_0(closure_2_1[5]);
        const obj5 = { duration: 0.55 * duration };
        withTimingResult = obj4.withTiming(-20, obj5);
        const obj6 = closure_2_0(closure_2_1[5]);
        const obj7 = { duration: 0.15 * duration };
        withTimingResult1 = obj6.withTiming(10, obj7);
        const obj8 = closure_2_0(closure_2_1[5]);
        const obj9 = { duration: 0.15 * duration };
        withTimingResult2 = obj8.withTiming(-10, obj9);
        items = [obj3];
        obj12 = { transform: items1 };
        items1 = [];
        obj11 = { duration: 0.15 * duration };
        const obj13 = { translateY: translateY.windowHeight };
        items1[0] = obj13;
        obj10 = closure_2_0(closure_2_1[5]);
        const merged = Object.assign(initialValues);
        return obj;
      };
      let obj = { delayFunction, delay, withSequence: BounceInDown(closure_2_1[5]).withSequence, withTiming: BounceInDown(closure_2_1[5]).withTiming, duration, initialValues, callback: callbackV };
      fn.__closure = obj;
      fn.__workletHash = 4551292686981;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(BounceInDown, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry2 = {
  key: "getDuration",
  value: function getDuration() {
    let num = this.durationV;
    if (num == null) {
      num = 600;
    }
    return num;
  }
};
const items2 = [entry2];
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = BounceInDown();
    return tmp;
  }
};
const items3 = [
  entry3,
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult1 = _createClass(BounceInDown, items2, items3);
importDefaultResultResult1.presetName = "BounceInDown";
let closure_8 = { code: "function pnpm_BounceTs3(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(20,{duration:duration*0.55}),withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateY:-values.windowHeight}],...initialValues},callback:callback};}" };
class BounceInUp {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, BounceInUp);
    let items1 = [...items];
    let obj = _getPrototypeOf(BounceInUp);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const delay = closure_0.getDelay();
      const duration = closure_0.getDuration();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(translateY) {
        let items;
        let items1;
        let obj10;
        let obj11;
        let obj12;
        let obj2;
        let withSequence;
        let withTimingResult;
        let withTimingResult1;
        let withTimingResult2;
        const obj = { animations: obj2, initialValues: obj12, callback: callbackV };
        obj2 = { transform: items };
        const obj3 = { translateY: delayFunction(delay, withSequence(withTimingResult, withTimingResult1, withTimingResult2, obj10.withTiming(0, obj11))) };
        withSequence = closure_2_0(closure_2_1[5]).withSequence;
        closure_2_0(closure_2_1[5]);
        const obj4 = closure_2_0(closure_2_1[5]);
        const obj5 = { duration: 0.55 * duration };
        withTimingResult = obj4.withTiming(20, obj5);
        const obj6 = closure_2_0(closure_2_1[5]);
        const obj7 = { duration: 0.15 * duration };
        withTimingResult1 = obj6.withTiming(-10, obj7);
        const obj8 = closure_2_0(closure_2_1[5]);
        const obj9 = { duration: 0.15 * duration };
        withTimingResult2 = obj8.withTiming(10, obj9);
        items = [obj3];
        obj12 = { transform: items1 };
        items1 = [];
        obj11 = { duration: 0.15 * duration };
        const obj13 = { translateY: -translateY.windowHeight };
        items1[0] = obj13;
        obj10 = closure_2_0(closure_2_1[5]);
        const merged = Object.assign(initialValues);
        return obj;
      };
      let obj = { delayFunction, delay, withSequence: BounceInUp(closure_2_1[5]).withSequence, withTiming: BounceInUp(closure_2_1[5]).withTiming, duration, initialValues, callback: callbackV };
      fn.__closure = obj;
      fn.__workletHash = 11333943352836;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(BounceInUp, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry4 = {
  key: "getDuration",
  value: function getDuration() {
    let num = this.durationV;
    if (num == null) {
      num = 600;
    }
    return num;
  }
};
const items4 = [entry4];
const entry5 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = BounceInUp();
    return tmp;
  }
};
const items5 = [
  entry5,
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult2 = _createClass(BounceInUp, items4, items5);
importDefaultResultResult2.presetName = "BounceInUp";
let closure_9 = { code: "function pnpm_BounceTs4(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(20,{duration:duration*0.55}),withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateX:-values.windowWidth}],...initialValues},callback:callback};}" };
class BounceInLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, BounceInLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(BounceInLeft);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const delay = closure_0.getDelay();
      const duration = closure_0.getDuration();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(translateX) {
        let items;
        let items1;
        let obj10;
        let obj11;
        let obj12;
        let obj2;
        let withSequence;
        let withTimingResult;
        let withTimingResult1;
        let withTimingResult2;
        const obj = { animations: obj2, initialValues: obj12, callback: callbackV };
        obj2 = { transform: items };
        const obj3 = { translateX: delayFunction(delay, withSequence(withTimingResult, withTimingResult1, withTimingResult2, obj10.withTiming(0, obj11))) };
        withSequence = closure_2_0(closure_2_1[5]).withSequence;
        closure_2_0(closure_2_1[5]);
        const obj4 = closure_2_0(closure_2_1[5]);
        const obj5 = { duration: 0.55 * duration };
        withTimingResult = obj4.withTiming(20, obj5);
        const obj6 = closure_2_0(closure_2_1[5]);
        const obj7 = { duration: 0.15 * duration };
        withTimingResult1 = obj6.withTiming(-10, obj7);
        const obj8 = closure_2_0(closure_2_1[5]);
        const obj9 = { duration: 0.15 * duration };
        withTimingResult2 = obj8.withTiming(10, obj9);
        items = [obj3];
        obj12 = { transform: items1 };
        items1 = [];
        obj11 = { duration: 0.15 * duration };
        const obj13 = { translateX: -translateX.windowWidth };
        items1[0] = obj13;
        obj10 = closure_2_0(closure_2_1[5]);
        const merged = Object.assign(initialValues);
        return obj;
      };
      let obj = { delayFunction, delay, withSequence: BounceInLeft(closure_2_1[5]).withSequence, withTiming: BounceInLeft(closure_2_1[5]).withTiming, duration, initialValues, callback: callbackV };
      fn.__closure = obj;
      fn.__workletHash = 10162410157050;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(BounceInLeft, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry6 = {
  key: "getDuration",
  value: function getDuration() {
    let num = this.durationV;
    if (num == null) {
      num = 600;
    }
    return num;
  }
};
const items6 = [entry6];
const entry7 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = BounceInLeft();
    return tmp;
  }
};
const items7 = [
  entry7,
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult3 = _createClass(BounceInLeft, items6, items7);
importDefaultResultResult3.presetName = "BounceInLeft";
let closure_10 = { code: "function pnpm_BounceTs5(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(-20,{duration:duration*0.55}),withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(0,{duration:duration*0.15})))}]},initialValues:{transform:[{translateX:values.windowWidth}],...initialValues},callback:callback};}" };
class BounceInRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, BounceInRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(BounceInRight);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const delay = closure_0.getDelay();
      const duration = closure_0.getDuration();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(translateX) {
        let items;
        let items1;
        let obj10;
        let obj11;
        let obj12;
        let obj2;
        let withSequence;
        let withTimingResult;
        let withTimingResult1;
        let withTimingResult2;
        const obj = { animations: obj2, initialValues: obj12, callback: callbackV };
        obj2 = { transform: items };
        const obj3 = { translateX: delayFunction(delay, withSequence(withTimingResult, withTimingResult1, withTimingResult2, obj10.withTiming(0, obj11))) };
        withSequence = closure_2_0(closure_2_1[5]).withSequence;
        closure_2_0(closure_2_1[5]);
        const obj4 = closure_2_0(closure_2_1[5]);
        const obj5 = { duration: 0.55 * duration };
        withTimingResult = obj4.withTiming(-20, obj5);
        const obj6 = closure_2_0(closure_2_1[5]);
        const obj7 = { duration: 0.15 * duration };
        withTimingResult1 = obj6.withTiming(10, obj7);
        const obj8 = closure_2_0(closure_2_1[5]);
        const obj9 = { duration: 0.15 * duration };
        withTimingResult2 = obj8.withTiming(-10, obj9);
        items = [obj3];
        obj12 = { transform: items1 };
        items1 = [];
        obj11 = { duration: 0.15 * duration };
        const obj13 = { translateX: translateX.windowWidth };
        items1[0] = obj13;
        obj10 = closure_2_0(closure_2_1[5]);
        const merged = Object.assign(initialValues);
        return obj;
      };
      let obj = { delayFunction, delay, withSequence: BounceInRight(closure_2_1[5]).withSequence, withTiming: BounceInRight(closure_2_1[5]).withTiming, duration, initialValues, callback: callbackV };
      fn.__closure = obj;
      fn.__workletHash = 4134237895259;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(BounceInRight, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry8 = {
  key: "getDuration",
  value: function getDuration() {
    let num = this.durationV;
    if (num == null) {
      num = 600;
    }
    return num;
  }
};
const items8 = [entry8];
const entry9 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = BounceInRight();
    return tmp;
  }
};
const items9 = [
  entry9,
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult4 = _createClass(BounceInRight, items8, items9);
importDefaultResultResult4.presetName = "BounceInRight";
let closure_11 = { code: "function pnpm_BounceTs6(){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,withSequence(withTiming(1.1,{duration:duration*0.15}),withTiming(0.9,{duration:duration*0.15}),withTiming(1.2,{duration:duration*0.15}),withTiming(0,{duration:duration*0.55})))}]},initialValues:{transform:[{scale:1}],...initialValues},callback:callback};}" };
class BounceOut {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, BounceOut);
    let items1 = [...items];
    let obj = _getPrototypeOf(BounceOut);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const delay = closure_0.getDelay();
      const duration = closure_0.getDuration();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n() {
        let items;
        let items1;
        let obj10;
        let obj11;
        let obj12;
        let obj2;
        let withSequence;
        let withTimingResult;
        let withTimingResult1;
        let withTimingResult2;
        const obj = { animations: obj2, initialValues: obj12, callback: callbackV };
        obj2 = { transform: items };
        const obj3 = { scale: delayFunction(delay, withSequence(withTimingResult, withTimingResult1, withTimingResult2, obj10.withTiming(0, obj11))) };
        withSequence = closure_2_0(closure_2_1[5]).withSequence;
        closure_2_0(closure_2_1[5]);
        const obj4 = closure_2_0(closure_2_1[5]);
        const obj5 = { duration: 0.15 * duration };
        withTimingResult = obj4.withTiming(1.1, obj5);
        const obj6 = closure_2_0(closure_2_1[5]);
        const obj7 = { duration: 0.15 * duration };
        withTimingResult1 = obj6.withTiming(0.9, obj7);
        const obj8 = closure_2_0(closure_2_1[5]);
        const obj9 = { duration: 0.15 * duration };
        withTimingResult2 = obj8.withTiming(1.2, obj9);
        items = [obj3];
        obj12 = { transform: items1 };
        items1 = [{ scale: 1 }];
        obj10 = closure_2_0(closure_2_1[5]);
        obj11 = { duration: 0.55 * duration };
        const merged = Object.assign(initialValues);
        return obj;
      };
      let obj = { delayFunction, delay, withSequence: BounceOut(closure_2_1[5]).withSequence, withTiming: BounceOut(closure_2_1[5]).withTiming, duration, initialValues, callback: callbackV };
      fn.__closure = obj;
      fn.__workletHash = 15864962046507;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(BounceOut, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry10 = {
  key: "getDuration",
  value: function getDuration() {
    let num = this.durationV;
    if (num == null) {
      num = 600;
    }
    return num;
  }
};
const items10 = [entry10];
const entry11 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = BounceOut();
    return tmp;
  }
};
const items11 = [
  entry11,
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult5 = _createClass(BounceOut, items10, items11);
importDefaultResultResult5.presetName = "BounceOut";
let closure_12 = { code: "function pnpm_BounceTs7(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(-20,{duration:duration*0.15}),withTiming(values.windowHeight,{duration:duration*0.55})))}]},initialValues:{transform:[{translateY:0}],...initialValues},callback:callback};}" };
class BounceOutDown {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, BounceOutDown);
    let items1 = [...items];
    let obj = _getPrototypeOf(BounceOutDown);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const delay = closure_0.getDelay();
      const duration = closure_0.getDuration();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(windowHeight) {
        let items;
        let items1;
        let obj10;
        let obj11;
        let obj12;
        let obj2;
        let withSequence;
        let withTimingResult;
        let withTimingResult1;
        let withTimingResult2;
        const obj = { animations: obj2, initialValues: obj12, callback: callbackV };
        obj2 = { transform: items };
        const obj3 = { translateY: delayFunction(delay, withSequence(withTimingResult, withTimingResult1, withTimingResult2, obj10.withTiming(windowHeight.windowHeight, obj11))) };
        withSequence = closure_2_0(closure_2_1[5]).withSequence;
        closure_2_0(closure_2_1[5]);
        const obj4 = closure_2_0(closure_2_1[5]);
        const obj5 = { duration: 0.15 * duration };
        withTimingResult = obj4.withTiming(-10, obj5);
        const obj6 = closure_2_0(closure_2_1[5]);
        const obj7 = { duration: 0.15 * duration };
        withTimingResult1 = obj6.withTiming(10, obj7);
        const obj8 = closure_2_0(closure_2_1[5]);
        const obj9 = { duration: 0.15 * duration };
        withTimingResult2 = obj8.withTiming(-20, obj9);
        items = [obj3];
        obj12 = { transform: items1 };
        items1 = [{ translateY: 0 }];
        obj10 = closure_2_0(closure_2_1[5]);
        obj11 = { duration: 0.55 * duration };
        const merged = Object.assign(initialValues);
        return obj;
      };
      let obj = { delayFunction, delay, withSequence: BounceOutDown(closure_2_1[5]).withSequence, withTiming: BounceOutDown(closure_2_1[5]).withTiming, duration, initialValues, callback: callbackV };
      fn.__closure = obj;
      fn.__workletHash = 4170057933312;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(BounceOutDown, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry12 = {
  key: "getDuration",
  value: function getDuration() {
    let num = this.durationV;
    if (num == null) {
      num = 600;
    }
    return num;
  }
};
const items12 = [entry12];
const entry13 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = BounceOutDown();
    return tmp;
  }
};
const items13 = [
  entry13,
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult6 = _createClass(BounceOutDown, items12, items13);
importDefaultResultResult6.presetName = "BounceOutDown";
let closure_13 = { code: "function pnpm_BounceTs8(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(20,{duration:duration*0.15}),withTiming(-values.windowHeight,{duration:duration*0.55})))}]},initialValues:{transform:[{translateY:0}],...initialValues},callback:callback};}" };
class BounceOutUp {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, BounceOutUp);
    let items1 = [...items];
    let obj = _getPrototypeOf(BounceOutUp);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const delay = closure_0.getDelay();
      const duration = closure_0.getDuration();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(windowHeight) {
        let items;
        let items1;
        let obj10;
        let obj11;
        let obj12;
        let obj2;
        let withSequence;
        let withTimingResult;
        let withTimingResult1;
        let withTimingResult2;
        const obj = { animations: obj2, initialValues: obj12, callback: callbackV };
        obj2 = { transform: items };
        const obj3 = { translateY: delayFunction(delay, withSequence(withTimingResult, withTimingResult1, withTimingResult2, obj10.withTiming(-windowHeight.windowHeight, obj11))) };
        withSequence = closure_2_0(closure_2_1[5]).withSequence;
        closure_2_0(closure_2_1[5]);
        const obj4 = closure_2_0(closure_2_1[5]);
        const obj5 = { duration: 0.15 * duration };
        withTimingResult = obj4.withTiming(10, obj5);
        const obj6 = closure_2_0(closure_2_1[5]);
        const obj7 = { duration: 0.15 * duration };
        withTimingResult1 = obj6.withTiming(-10, obj7);
        const obj8 = closure_2_0(closure_2_1[5]);
        const obj9 = { duration: 0.15 * duration };
        withTimingResult2 = obj8.withTiming(20, obj9);
        items = [obj3];
        obj12 = { transform: items1 };
        items1 = [{ translateY: 0 }];
        obj10 = closure_2_0(closure_2_1[5]);
        obj11 = { duration: 0.55 * duration };
        const merged = Object.assign(initialValues);
        return obj;
      };
      let obj = { delayFunction, delay, withSequence: BounceOutUp(closure_2_1[5]).withSequence, withTiming: BounceOutUp(closure_2_1[5]).withTiming, duration, initialValues, callback: callbackV };
      fn.__closure = obj;
      fn.__workletHash = 8059944917039;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(BounceOutUp, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry14 = {
  key: "getDuration",
  value: function getDuration() {
    let num = this.durationV;
    if (num == null) {
      num = 600;
    }
    return num;
  }
};
const items14 = [entry14];
const entry15 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = BounceOutUp();
    return tmp;
  }
};
const items15 = [
  entry15,
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult7 = _createClass(BounceOutUp, items14, items15);
importDefaultResultResult7.presetName = "BounceOutUp";
let closure_14 = { code: "function pnpm_BounceTs9(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(20,{duration:duration*0.15}),withTiming(-values.windowWidth,{duration:duration*0.55})))}]},initialValues:{transform:[{translateX:0}],...initialValues},callback:callback};}" };
class BounceOutLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, BounceOutLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(BounceOutLeft);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const delay = closure_0.getDelay();
      const duration = closure_0.getDuration();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(windowWidth) {
        let items;
        let items1;
        let obj10;
        let obj11;
        let obj12;
        let obj2;
        let withSequence;
        let withTimingResult;
        let withTimingResult1;
        let withTimingResult2;
        const obj = { animations: obj2, initialValues: obj12, callback: callbackV };
        obj2 = { transform: items };
        const obj3 = { translateX: delayFunction(delay, withSequence(withTimingResult, withTimingResult1, withTimingResult2, obj10.withTiming(-windowWidth.windowWidth, obj11))) };
        withSequence = closure_2_0(closure_2_1[5]).withSequence;
        closure_2_0(closure_2_1[5]);
        const obj4 = closure_2_0(closure_2_1[5]);
        const obj5 = { duration: 0.15 * duration };
        withTimingResult = obj4.withTiming(10, obj5);
        const obj6 = closure_2_0(closure_2_1[5]);
        const obj7 = { duration: 0.15 * duration };
        withTimingResult1 = obj6.withTiming(-10, obj7);
        const obj8 = closure_2_0(closure_2_1[5]);
        const obj9 = { duration: 0.15 * duration };
        withTimingResult2 = obj8.withTiming(20, obj9);
        items = [obj3];
        obj12 = { transform: items1 };
        items1 = [{ translateX: 0 }];
        obj10 = closure_2_0(closure_2_1[5]);
        obj11 = { duration: 0.55 * duration };
        const merged = Object.assign(initialValues);
        return obj;
      };
      let obj = { delayFunction, delay, withSequence: BounceOutLeft(closure_2_1[5]).withSequence, withTiming: BounceOutLeft(closure_2_1[5]).withTiming, duration, initialValues, callback: callbackV };
      fn.__closure = obj;
      fn.__workletHash = 6930767645815;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(BounceOutLeft, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry16 = {
  key: "getDuration",
  value: function getDuration() {
    let num = this.durationV;
    if (num == null) {
      num = 600;
    }
    return num;
  }
};
const items16 = [entry16];
const entry17 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = BounceOutLeft();
    return tmp;
  }
};
const items17 = [
  entry17,
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult8 = _createClass(BounceOutLeft, items16, items17);
importDefaultResultResult8.presetName = "BounceOutLeft";
let closure_15 = { code: "function pnpm_BounceTs10(values){const{delayFunction,delay,withSequence,withTiming,duration,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(-20,{duration:duration*0.15}),withTiming(values.windowWidth,{duration:duration*0.55})))}]},initialValues:{transform:[{translateX:0}],...initialValues},callback:callback};}" };
class BounceOutRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, BounceOutRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(BounceOutRight);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const delay = closure_0.getDelay();
      const duration = closure_0.getDuration();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(windowWidth) {
        let items;
        let items1;
        let obj10;
        let obj11;
        let obj12;
        let obj2;
        let withSequence;
        let withTimingResult;
        let withTimingResult1;
        let withTimingResult2;
        const obj = { animations: obj2, initialValues: obj12, callback: callbackV };
        obj2 = { transform: items };
        const obj3 = { translateX: delayFunction(delay, withSequence(withTimingResult, withTimingResult1, withTimingResult2, obj10.withTiming(windowWidth.windowWidth, obj11))) };
        withSequence = closure_2_0(closure_2_1[5]).withSequence;
        closure_2_0(closure_2_1[5]);
        const obj4 = closure_2_0(closure_2_1[5]);
        const obj5 = { duration: 0.15 * duration };
        withTimingResult = obj4.withTiming(-10, obj5);
        const obj6 = closure_2_0(closure_2_1[5]);
        const obj7 = { duration: 0.15 * duration };
        withTimingResult1 = obj6.withTiming(10, obj7);
        const obj8 = closure_2_0(closure_2_1[5]);
        const obj9 = { duration: 0.15 * duration };
        withTimingResult2 = obj8.withTiming(-20, obj9);
        items = [obj3];
        obj12 = { transform: items1 };
        items1 = [{ translateX: 0 }];
        obj10 = closure_2_0(closure_2_1[5]);
        obj11 = { duration: 0.55 * duration };
        const merged = Object.assign(initialValues);
        return obj;
      };
      let obj = { delayFunction, delay, withSequence: BounceOutRight(closure_2_1[5]).withSequence, withTiming: BounceOutRight(closure_2_1[5]).withTiming, duration, initialValues, callback: callbackV };
      fn.__closure = obj;
      fn.__workletHash = 11465945086863;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(BounceOutRight, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry18 = {
  key: "getDuration",
  value: function getDuration() {
    let num = this.durationV;
    if (num == null) {
      num = 600;
    }
    return num;
  }
};
const items18 = [entry18];
const entry19 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = BounceOutRight();
    return tmp;
  }
};
const items19 = [
  entry19,
  {
    key: "getDuration",
    value: function getDuration() {
      return 600;
    }
  }
];
const importDefaultResultResult9 = _createClass(BounceOutRight, items18, items19);
importDefaultResultResult9.presetName = "BounceOutRight";
const BounceIn_export = importDefaultResultResult;
const BounceInDown_export = importDefaultResultResult1;
const BounceInUp_export = importDefaultResultResult2;
const BounceInLeft_export = importDefaultResultResult3;
const BounceInRight_export = importDefaultResultResult4;
const BounceOut_export = importDefaultResultResult5;
const BounceOutDown_export = importDefaultResultResult6;
const BounceOutUp_export = importDefaultResultResult7;
const BounceOutLeft_export = importDefaultResultResult8;
const BounceOutRight_export = importDefaultResultResult9;

export { BounceIn_export as BounceIn };
export { BounceInDown_export as BounceInDown };
export { BounceInUp_export as BounceInUp };
export { BounceInLeft_export as BounceInLeft };
export { BounceInRight_export as BounceInRight };
export { BounceOut_export as BounceOut };
export { BounceOutDown_export as BounceOutDown };
export { BounceOutUp_export as BounceOutUp };
export { BounceOutLeft_export as BounceOutLeft };
export { BounceOutRight_export as BounceOutRight };
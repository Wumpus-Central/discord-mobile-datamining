// === Module 1937: Bounce ===

// Module 1937 (Bounce)
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let BounceOutRight = fn;
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
let closure_6 = { code: "(function pnpm_BounceTs1(){let[delayFunction,delay,withSequence,withTiming,duration,resolveTransformValue,targetValues,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,withSequence(withTiming(1.2,{duration:duration*0.55}),withTiming(0.9,{duration:duration*0.15}),withTiming(1.1,{duration:duration*0.15}),withTiming(resolveTransformValue({scale:1},0,targetValues),{duration:duration*0.15})))}]},initialValues:{transform:pickTransformValues([{scale:0}],initialValues)},callback:callback};})" };
class BounceIn {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, BounceOutRight);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(BounceOutRight);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = _undefined.getDelayFunction();
      const delay = _undefined.getDelay();
      items = [closure_6, delayFunction, delay, , , , , , , , ];
      duration = _undefined.getDuration();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[3] = BounceOutRight(1842).withSequence;
      items[4] = BounceOutRight(1842).withTiming;
      items[5] = duration;
      items[6] = BounceOutRight(1938).resolveTransformValue;
      items[7] = targetValues;
      items[8] = BounceOutRight(1938).pickTransformValues;
      items[9] = initialValues;
      items[10] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      c9 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
      function pnpm_BounceTs1() {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        const obj3 = { scale: null };
        const obj4 = { duration: 0.55 * c4 };
        const obj5 = { duration: 0.15 * c4 };
        const tmp = _undefined3(1.2, { duration: 0.55 * c4 });
        const obj6 = { duration: 0.15 * c4 };
        const tmp2 = _undefined3(0.9, { duration: 0.15 * c4 });
        obj3.scale = _undefined(c1, _undefined2(tmp, tmp2, _undefined3(1.1, { duration: 0.15 * c4 }), _undefined3(_undefined4({ scale: 1 }, 0, c6), { duration: 0.15 * c4 })));
        items = [obj3];
        obj2.transform = items;
        obj.animations = obj2;
        const obj8 = { transform: null };
        const items1 = [{ scale: 0 }];
        obj8.transform = _undefined5(items1, c8);
        obj.initialValues = obj8;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
      pnpm_BounceTs1.__closure = items1;
      pnpm_BounceTs1.__workletHash = 6753595614435;
      pnpm_BounceTs1.__initData = tmp4;
      return pnpm_BounceTs1;
    };
    return tmp3Result;
  }
}
BounceOutRight = BounceIn;
_inherits(BounceIn, fn(1875).ComplexAnimationBuilder);
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
    return BounceOutRight();
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
let closure_7 = { code: "(function pnpm_BounceTs2(values){let[delayFunction,delay,withSequence,withTiming,duration,resolveTransformValue,targetValues,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(-20,{duration:duration*0.55}),withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(resolveTransformValue({translateY:0},0,targetValues),{duration:duration*0.15})))}]},initialValues:{transform:pickTransformValues([{translateY:values.windowHeight}],initialValues)},callback:callback};})" };
class BounceInDown {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, BounceOutRight);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(BounceOutRight);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = _undefined.getDelayFunction();
      const delay = _undefined.getDelay();
      items = [_undefined5, delayFunction, delay, , , , , , , , ];
      duration = _undefined.getDuration();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[3] = BounceOutRight(1842).withSequence;
      items[4] = BounceOutRight(1842).withTiming;
      items[5] = duration;
      items[6] = BounceOutRight(1938).resolveTransformValue;
      items[7] = targetValues;
      items[8] = BounceOutRight(1938).pickTransformValues;
      items[9] = initialValues;
      items[10] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      c9 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
      function pnpm_BounceTs2(translateY) {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        const obj3 = { translateY: null };
        const obj4 = { duration: 0.55 * c4 };
        const obj5 = { duration: 0.15 * c4 };
        const tmp = _undefined3(-20, { duration: 0.55 * c4 });
        const obj6 = { duration: 0.15 * c4 };
        const tmp2 = _undefined3(10, { duration: 0.15 * c4 });
        obj3.translateY = _undefined(c1, _undefined2(tmp, tmp2, _undefined3(-10, { duration: 0.15 * c4 }), _undefined3(_undefined4({ translateY: 0 }, 0, c6), { duration: 0.15 * c4 })));
        items = [obj3];
        obj2.transform = items;
        obj.animations = obj2;
        const obj8 = { transform: null };
        const items1 = [{ translateY: translateY.windowHeight }];
        obj8.transform = _undefined5(items1, c8);
        obj.initialValues = obj8;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
      pnpm_BounceTs2.__closure = items1;
      pnpm_BounceTs2.__workletHash = 5802004628781;
      pnpm_BounceTs2.__initData = tmp4;
      return pnpm_BounceTs2;
    };
    return tmp3Result;
  }
}
BounceOutRight = BounceInDown;
_inherits(BounceInDown, fn(1875).ComplexAnimationBuilder);
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
    return BounceOutRight();
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
let closure_8 = { code: "(function pnpm_BounceTs3(values){let[delayFunction,delay,withSequence,withTiming,duration,resolveTransformValue,targetValues,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(20,{duration:duration*0.55}),withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(resolveTransformValue({translateY:0},0,targetValues),{duration:duration*0.15})))}]},initialValues:{transform:pickTransformValues([{translateY:-values.windowHeight}],initialValues)},callback:callback};})" };
class BounceInUp {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, BounceOutRight);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(BounceOutRight);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = _undefined.getDelayFunction();
      const delay = _undefined.getDelay();
      items = [closure_8, delayFunction, delay, , , , , , , , ];
      duration = _undefined.getDuration();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[3] = BounceOutRight(1842).withSequence;
      items[4] = BounceOutRight(1842).withTiming;
      items[5] = duration;
      items[6] = BounceOutRight(1938).resolveTransformValue;
      items[7] = targetValues;
      items[8] = BounceOutRight(1938).pickTransformValues;
      items[9] = initialValues;
      items[10] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      c9 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
      function pnpm_BounceTs3(translateY) {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        const obj3 = { translateY: null };
        const obj4 = { duration: 0.55 * c4 };
        const obj5 = { duration: 0.15 * c4 };
        const tmp = _undefined3(20, { duration: 0.55 * c4 });
        const obj6 = { duration: 0.15 * c4 };
        const tmp2 = _undefined3(-10, { duration: 0.15 * c4 });
        obj3.translateY = _undefined(c1, _undefined2(tmp, tmp2, _undefined3(10, { duration: 0.15 * c4 }), _undefined3(_undefined4({ translateY: 0 }, 0, c6), { duration: 0.15 * c4 })));
        items = [obj3];
        obj2.transform = items;
        obj.animations = obj2;
        const obj8 = { transform: null };
        const items1 = [{ translateY: -translateY.windowHeight }];
        obj8.transform = _undefined5(items1, c8);
        obj.initialValues = obj8;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
      pnpm_BounceTs3.__closure = items1;
      pnpm_BounceTs3.__workletHash = 9867045525644;
      pnpm_BounceTs3.__initData = tmp4;
      return pnpm_BounceTs3;
    };
    return tmp3Result;
  }
}
BounceOutRight = BounceInUp;
_inherits(BounceInUp, fn(1875).ComplexAnimationBuilder);
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
    return BounceOutRight();
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
let closure_9 = { code: "(function pnpm_BounceTs4(values){let[delayFunction,delay,withSequence,withTiming,duration,resolveTransformValue,targetValues,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(20,{duration:duration*0.55}),withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(resolveTransformValue({translateX:0},0,targetValues),{duration:duration*0.15})))}]},initialValues:{transform:pickTransformValues([{translateX:-values.windowWidth}],initialValues)},callback:callback};})" };
class BounceInLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, BounceOutRight);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(BounceOutRight);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = _undefined.getDelayFunction();
      const delay = _undefined.getDelay();
      items = [callback, delayFunction, delay, , , , , , , , ];
      duration = _undefined.getDuration();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[3] = BounceOutRight(1842).withSequence;
      items[4] = BounceOutRight(1842).withTiming;
      items[5] = duration;
      items[6] = BounceOutRight(1938).resolveTransformValue;
      items[7] = targetValues;
      items[8] = BounceOutRight(1938).pickTransformValues;
      items[9] = initialValues;
      items[10] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      c9 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
      function pnpm_BounceTs4(translateX) {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        const obj3 = { translateX: null };
        const obj4 = { duration: 0.55 * c4 };
        const obj5 = { duration: 0.15 * c4 };
        const tmp = _undefined3(20, { duration: 0.55 * c4 });
        const obj6 = { duration: 0.15 * c4 };
        const tmp2 = _undefined3(-10, { duration: 0.15 * c4 });
        obj3.translateX = _undefined(c1, _undefined2(tmp, tmp2, _undefined3(10, { duration: 0.15 * c4 }), _undefined3(_undefined4({ translateX: 0 }, 0, c6), { duration: 0.15 * c4 })));
        items = [obj3];
        obj2.transform = items;
        obj.animations = obj2;
        const obj8 = { transform: null };
        const items1 = [{ translateX: -translateX.windowWidth }];
        obj8.transform = _undefined5(items1, c8);
        obj.initialValues = obj8;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
      pnpm_BounceTs4.__closure = items1;
      pnpm_BounceTs4.__workletHash = 9019850662195;
      pnpm_BounceTs4.__initData = tmp4;
      return pnpm_BounceTs4;
    };
    return tmp3Result;
  }
}
BounceOutRight = BounceInLeft;
_inherits(BounceInLeft, fn(1875).ComplexAnimationBuilder);
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
    return BounceOutRight();
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
let closure_10 = { code: "(function pnpm_BounceTs5(values){let[delayFunction,delay,withSequence,withTiming,duration,resolveTransformValue,targetValues,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(-20,{duration:duration*0.55}),withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(resolveTransformValue({translateX:0},0,targetValues),{duration:duration*0.15})))}]},initialValues:{transform:pickTransformValues([{translateX:values.windowWidth}],initialValues)},callback:callback};})" };
class BounceInRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, BounceOutRight);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(BounceOutRight);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = _undefined.getDelayFunction();
      const delay = _undefined.getDelay();
      items = [closure_10, delayFunction, delay, , , , , , , , ];
      duration = _undefined.getDuration();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[3] = BounceOutRight(1842).withSequence;
      items[4] = BounceOutRight(1842).withTiming;
      items[5] = duration;
      items[6] = BounceOutRight(1938).resolveTransformValue;
      items[7] = targetValues;
      items[8] = BounceOutRight(1938).pickTransformValues;
      items[9] = initialValues;
      items[10] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      c9 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
      function pnpm_BounceTs5(translateX) {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        const obj3 = { translateX: null };
        const obj4 = { duration: 0.55 * c4 };
        const obj5 = { duration: 0.15 * c4 };
        const tmp = _undefined3(-20, { duration: 0.55 * c4 });
        const obj6 = { duration: 0.15 * c4 };
        const tmp2 = _undefined3(10, { duration: 0.15 * c4 });
        obj3.translateX = _undefined(c1, _undefined2(tmp, tmp2, _undefined3(-10, { duration: 0.15 * c4 }), _undefined3(_undefined4({ translateX: 0 }, 0, c6), { duration: 0.15 * c4 })));
        items = [obj3];
        obj2.transform = items;
        obj.animations = obj2;
        const obj8 = { transform: null };
        const items1 = [{ translateX: translateX.windowWidth }];
        obj8.transform = _undefined5(items1, c8);
        obj.initialValues = obj8;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
      pnpm_BounceTs5.__closure = items1;
      pnpm_BounceTs5.__workletHash = 14463193545746;
      pnpm_BounceTs5.__initData = tmp4;
      return pnpm_BounceTs5;
    };
    return tmp3Result;
  }
}
BounceOutRight = BounceInRight;
_inherits(BounceInRight, fn(1875).ComplexAnimationBuilder);
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
    return BounceOutRight();
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
let closure_11 = { code: "(function pnpm_BounceTs6(){let[delayFunction,delay,withSequence,withTiming,duration,resolveTransformValue,targetValues,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:[{scale:delayFunction(delay,withSequence(withTiming(1.1,{duration:duration*0.15}),withTiming(0.9,{duration:duration*0.15}),withTiming(1.2,{duration:duration*0.15}),withTiming(resolveTransformValue({scale:0},0,targetValues),{duration:duration*0.55})))}]},initialValues:{transform:pickTransformValues([{scale:1}],initialValues)},callback:callback};})" };
class BounceOut {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, BounceOutRight);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(BounceOutRight);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = _undefined.getDelayFunction();
      const delay = _undefined.getDelay();
      items = [closure_11, delayFunction, delay, , , , , , , , ];
      duration = _undefined.getDuration();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[3] = BounceOutRight(1842).withSequence;
      items[4] = BounceOutRight(1842).withTiming;
      items[5] = duration;
      items[6] = BounceOutRight(1938).resolveTransformValue;
      items[7] = targetValues;
      items[8] = BounceOutRight(1938).pickTransformValues;
      items[9] = initialValues;
      items[10] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      c9 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
      function pnpm_BounceTs6() {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        const obj3 = { scale: null };
        const obj4 = { duration: 0.15 * c4 };
        const obj5 = { duration: 0.15 * c4 };
        const tmp = _undefined3(1.1, { duration: 0.15 * c4 });
        const obj6 = { duration: 0.15 * c4 };
        const tmp2 = _undefined3(0.9, { duration: 0.15 * c4 });
        obj3.scale = _undefined(c1, _undefined2(tmp, tmp2, _undefined3(1.2, { duration: 0.15 * c4 }), _undefined3(_undefined4({ scale: 0 }, 0, c6), { duration: 0.55 * c4 })));
        items = [obj3];
        obj2.transform = items;
        obj.animations = obj2;
        const obj8 = { transform: null };
        const items1 = [{ scale: 1 }];
        obj8.transform = _undefined5(items1, c8);
        obj.initialValues = obj8;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
      pnpm_BounceTs6.__closure = items1;
      pnpm_BounceTs6.__workletHash = 5096859415204;
      pnpm_BounceTs6.__initData = tmp4;
      return pnpm_BounceTs6;
    };
    return tmp3Result;
  }
}
BounceOutRight = BounceOut;
_inherits(BounceOut, fn(1875).ComplexAnimationBuilder);
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
    return BounceOutRight();
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
let closure_12 = { code: "(function pnpm_BounceTs7(values){let[delayFunction,delay,withSequence,withTiming,duration,resolveTransformValue,targetValues,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(-20,{duration:duration*0.15}),withTiming(resolveTransformValue({translateY:values.windowHeight},0,targetValues),{duration:duration*0.55})))}]},initialValues:{transform:pickTransformValues([{translateY:0}],initialValues)},callback:callback};})" };
class BounceOutDown {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, BounceOutRight);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(BounceOutRight);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = _undefined.getDelayFunction();
      const delay = _undefined.getDelay();
      items = [closure_12, delayFunction, delay, , , , , , , , ];
      duration = _undefined.getDuration();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[3] = BounceOutRight(1842).withSequence;
      items[4] = BounceOutRight(1842).withTiming;
      items[5] = duration;
      items[6] = BounceOutRight(1938).resolveTransformValue;
      items[7] = targetValues;
      items[8] = BounceOutRight(1938).pickTransformValues;
      items[9] = initialValues;
      items[10] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      c9 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
      function pnpm_BounceTs7(translateY) {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        const obj3 = { translateY: null };
        const obj4 = { duration: 0.15 * c4 };
        const obj5 = { duration: 0.15 * c4 };
        const tmp = _undefined3(-10, { duration: 0.15 * c4 });
        const obj6 = { duration: 0.15 * c4 };
        const tmp2 = _undefined3(10, { duration: 0.15 * c4 });
        obj3.translateY = _undefined(c1, _undefined2(tmp, tmp2, _undefined3(-20, { duration: 0.15 * c4 }), _undefined3(_undefined4({ translateY: translateY.windowHeight }, 0, c6), { duration: 0.55 * c4 })));
        items = [obj3];
        obj2.transform = items;
        obj.animations = obj2;
        const obj9 = { transform: null };
        const items1 = [{ translateY: 0 }];
        obj9.transform = _undefined5(items1, c8);
        obj.initialValues = obj9;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
      pnpm_BounceTs7.__closure = items1;
      pnpm_BounceTs7.__workletHash = 1114803268712;
      pnpm_BounceTs7.__initData = tmp4;
      return pnpm_BounceTs7;
    };
    return tmp3Result;
  }
}
BounceOutRight = BounceOutDown;
_inherits(BounceOutDown, fn(1875).ComplexAnimationBuilder);
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
    return BounceOutRight();
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
let closure_13 = { code: "(function pnpm_BounceTs8(values){let[delayFunction,delay,withSequence,withTiming,duration,resolveTransformValue,targetValues,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:[{translateY:delayFunction(delay,withSequence(withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(20,{duration:duration*0.15}),withTiming(resolveTransformValue({translateY:-values.windowHeight},0,targetValues),{duration:duration*0.55})))}]},initialValues:{transform:pickTransformValues([{translateY:0}],initialValues)},callback:callback};})" };
class BounceOutUp {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, BounceOutRight);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(BounceOutRight);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = _undefined.getDelayFunction();
      const delay = _undefined.getDelay();
      items = [closure_13, delayFunction, delay, , , , , , , , ];
      duration = _undefined.getDuration();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[3] = BounceOutRight(1842).withSequence;
      items[4] = BounceOutRight(1842).withTiming;
      items[5] = duration;
      items[6] = BounceOutRight(1938).resolveTransformValue;
      items[7] = targetValues;
      items[8] = BounceOutRight(1938).pickTransformValues;
      items[9] = initialValues;
      items[10] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      c9 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
      function pnpm_BounceTs8(translateY) {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        const obj3 = { translateY: null };
        const obj4 = { duration: 0.15 * c4 };
        const obj5 = { duration: 0.15 * c4 };
        const tmp = _undefined3(10, { duration: 0.15 * c4 });
        const obj6 = { duration: 0.15 * c4 };
        const tmp2 = _undefined3(-10, { duration: 0.15 * c4 });
        obj3.translateY = _undefined(c1, _undefined2(tmp, tmp2, _undefined3(20, { duration: 0.15 * c4 }), _undefined3(_undefined4({ translateY: -translateY.windowHeight }, 0, c6), { duration: 0.55 * c4 })));
        items = [obj3];
        obj2.transform = items;
        obj.animations = obj2;
        const obj9 = { transform: null };
        const items1 = [{ translateY: 0 }];
        obj9.transform = _undefined5(items1, c8);
        obj.initialValues = obj9;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
      pnpm_BounceTs8.__closure = items1;
      pnpm_BounceTs8.__workletHash = 14798494424007;
      pnpm_BounceTs8.__initData = tmp4;
      return pnpm_BounceTs8;
    };
    return tmp3Result;
  }
}
BounceOutRight = BounceOutUp;
_inherits(BounceOutUp, fn(1875).ComplexAnimationBuilder);
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
    return BounceOutRight();
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
let closure_14 = { code: "(function pnpm_BounceTs9(values){let[delayFunction,delay,withSequence,withTiming,duration,resolveTransformValue,targetValues,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(10,{duration:duration*0.15}),withTiming(-10,{duration:duration*0.15}),withTiming(20,{duration:duration*0.15}),withTiming(resolveTransformValue({translateX:-values.windowWidth},0,targetValues),{duration:duration*0.55})))}]},initialValues:{transform:pickTransformValues([{translateX:0}],initialValues)},callback:callback};})" };
class BounceOutLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, BounceOutRight);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(BounceOutRight);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = _undefined.getDelayFunction();
      const delay = _undefined.getDelay();
      items = [closure_14, delayFunction, delay, , , , , , , , ];
      duration = _undefined.getDuration();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[3] = BounceOutRight(1842).withSequence;
      items[4] = BounceOutRight(1842).withTiming;
      items[5] = duration;
      items[6] = BounceOutRight(1938).resolveTransformValue;
      items[7] = targetValues;
      items[8] = BounceOutRight(1938).pickTransformValues;
      items[9] = initialValues;
      items[10] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      c9 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
      function pnpm_BounceTs9(translateX) {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        const obj3 = { translateX: null };
        const obj4 = { duration: 0.15 * c4 };
        const obj5 = { duration: 0.15 * c4 };
        const tmp = _undefined3(10, { duration: 0.15 * c4 });
        const obj6 = { duration: 0.15 * c4 };
        const tmp2 = _undefined3(-10, { duration: 0.15 * c4 });
        obj3.translateX = _undefined(c1, _undefined2(tmp, tmp2, _undefined3(20, { duration: 0.15 * c4 }), _undefined3(_undefined4({ translateX: -translateX.windowWidth }, 0, c6), { duration: 0.55 * c4 })));
        items = [obj3];
        obj2.transform = items;
        obj.animations = obj2;
        const obj9 = { transform: null };
        const items1 = [{ translateX: 0 }];
        obj9.transform = _undefined5(items1, c8);
        obj.initialValues = obj9;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
      pnpm_BounceTs9.__closure = items1;
      pnpm_BounceTs9.__workletHash = 12494614757886;
      pnpm_BounceTs9.__initData = tmp4;
      return pnpm_BounceTs9;
    };
    return tmp3Result;
  }
}
BounceOutRight = BounceOutLeft;
_inherits(BounceOutLeft, fn(1875).ComplexAnimationBuilder);
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
    return BounceOutRight();
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
let closure_15 = { code: "(function pnpm_BounceTs10(values){let[delayFunction,delay,withSequence,withTiming,duration,resolveTransformValue,targetValues,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,withSequence(withTiming(-10,{duration:duration*0.15}),withTiming(10,{duration:duration*0.15}),withTiming(-20,{duration:duration*0.15}),withTiming(resolveTransformValue({translateX:values.windowWidth},0,targetValues),{duration:duration*0.55})))}]},initialValues:{transform:pickTransformValues([{translateX:0}],initialValues)},callback:callback};})" };
class BounceOutRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, BounceOutRight);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(BounceOutRight);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = _undefined.getDelayFunction();
      const delay = _undefined.getDelay();
      items = [closure_15, delayFunction, delay, , , , , , , , ];
      duration = _undefined.getDuration();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[3] = BounceOutRight(1842).withSequence;
      items[4] = BounceOutRight(1842).withTiming;
      items[5] = duration;
      items[6] = BounceOutRight(1938).resolveTransformValue;
      items[7] = targetValues;
      items[8] = BounceOutRight(1938).pickTransformValues;
      items[9] = initialValues;
      items[10] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      c9 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
      function pnpm_BounceTs10(translateX) {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        const obj3 = { translateX: null };
        const obj4 = { duration: 0.15 * c4 };
        const obj5 = { duration: 0.15 * c4 };
        const tmp = _undefined3(-10, { duration: 0.15 * c4 });
        const obj6 = { duration: 0.15 * c4 };
        const tmp2 = _undefined3(10, { duration: 0.15 * c4 });
        obj3.translateX = _undefined(c1, _undefined2(tmp, tmp2, _undefined3(-20, { duration: 0.15 * c4 }), _undefined3(_undefined4({ translateX: translateX.windowWidth }, 0, c6), { duration: 0.55 * c4 })));
        items = [obj3];
        obj2.transform = items;
        obj.animations = obj2;
        const obj9 = { transform: null };
        const items1 = [{ translateX: 0 }];
        obj9.transform = _undefined5(items1, c8);
        obj.initialValues = obj9;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
      pnpm_BounceTs10.__closure = items1;
      pnpm_BounceTs10.__workletHash = 11053891036006;
      pnpm_BounceTs10.__initData = tmp4;
      return pnpm_BounceTs10;
    };
    return tmp3Result;
  }
}
_inherits(BounceOutRight, fn(1875).ComplexAnimationBuilder);
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
    return BounceOutRight();
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
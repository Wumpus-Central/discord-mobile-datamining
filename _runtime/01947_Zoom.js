// === Module 1947: Zoom ===

// Module 1947 (Zoom)
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let ZoomOutEasyDown = fn;
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
let closure_6 = { code: "(function pnpm_ZoomTs1(){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{scale:1}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{scale:0}],initialValues)},callback:callback};})" };
class ZoomIn {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(ZoomOutEasyDown);
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
      const animationAndConfig = _undefined.getAnimationAndConfig();
      items = [closure_6, , , , , , , , ];
      const delay = _undefined.getDelay();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = ZoomOutEasyDown(1938).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomOutEasyDown(1938).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs1() {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        items = [{ scale: 1 }];
        obj2.transform = _undefined(items, c1, c2, c3, c4);
        obj.animations = obj2;
        const obj3 = { transform: null };
        const items1 = [{ scale: 0 }];
        obj3.transform = _undefined2(items1, c6);
        obj.initialValues = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs1.__closure = items1;
      pnpm_ZoomTs1.__workletHash = 12922814466908;
      pnpm_ZoomTs1.__initData = tmp4;
      return pnpm_ZoomTs1;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomIn;
_inherits(ZoomIn, fn(1875).ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    return ZoomOutEasyDown();
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(ZoomIn, null, items);
importDefaultResultResult.presetName = "ZoomIn";
let closure_7 = { code: "(function pnpm_ZoomTs2(){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,rotate,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{scale:1},{rotate:'0rad'}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{scale:0},{rotate:rotate+\"rad\"}],initialValues)},callback:callback};})" };
class ZoomInRotate {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(ZoomOutEasyDown);
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
      const animationAndConfig = _undefined.getAnimationAndConfig();
      let str = "0.3";
      const delay = _undefined.getDelay();
      if (_undefined.rotateV) {
        str = _undefined.rotateV;
      }
      items = [closure_7, , , , , , , , , ];
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = ZoomOutEasyDown(1938).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomOutEasyDown(1938).pickTransformValues;
      items[7] = str;
      items[8] = initialValues;
      items[9] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
      function pnpm_ZoomTs2() {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        items = [{ scale: 1 }, { rotate: "0rad" }];
        obj2.transform = _undefined(items, c1, c2, c3, c4);
        obj.animations = obj2;
        const obj3 = { transform: null };
        const items1 = [{ scale: 0 }, { rotate: "" + c6 + "rad" }];
        obj3.transform = _undefined2(items1, c7);
        obj.initialValues = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
      pnpm_ZoomTs2.__closure = items1;
      pnpm_ZoomTs2.__workletHash = 8386313629096;
      pnpm_ZoomTs2.__initData = tmp5;
      return pnpm_ZoomTs2;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomInRotate;
_inherits(ZoomInRotate, fn(1875).ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    return ZoomOutEasyDown();
  }
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(ZoomInRotate, null, items1);
importDefaultResultResult1.presetName = "ZoomInRotate";
let closure_8 = { code: "(function pnpm_ZoomTs3(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateX:0},{scale:1}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateX:-values.windowWidth},{scale:0}],initialValues)},callback:callback};})" };
class ZoomInLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(ZoomOutEasyDown);
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
      const animationAndConfig = _undefined.getAnimationAndConfig();
      items = [closure_8, , , , , , , , ];
      const delay = _undefined.getDelay();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = ZoomOutEasyDown(1938).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomOutEasyDown(1938).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs3(translateX) {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        items = [{ translateX: 0 }, { scale: 1 }];
        obj2.transform = _undefined(items, c1, c2, c3, c4);
        obj.animations = obj2;
        const obj3 = { transform: null };
        const items1 = [{ translateX: -translateX.windowWidth }, { scale: 0 }];
        obj3.transform = _undefined2(items1, c6);
        obj.initialValues = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs3.__closure = items1;
      pnpm_ZoomTs3.__workletHash = 2081834512039;
      pnpm_ZoomTs3.__initData = tmp4;
      return pnpm_ZoomTs3;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomInLeft;
_inherits(ZoomInLeft, fn(1875).ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    return ZoomOutEasyDown();
  }
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(ZoomInLeft, null, items2);
importDefaultResultResult2.presetName = "ZoomInLeft";
let closure_9 = { code: "(function pnpm_ZoomTs4(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateX:0},{scale:1}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateX:values.windowWidth},{scale:0}],initialValues)},callback:callback};})" };
class ZoomInRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(ZoomOutEasyDown);
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
      const animationAndConfig = _undefined.getAnimationAndConfig();
      items = [closure_9, , , , , , , , ];
      const delay = _undefined.getDelay();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = ZoomOutEasyDown(1938).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomOutEasyDown(1938).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs4(translateX) {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        items = [{ translateX: 0 }, { scale: 1 }];
        obj2.transform = _undefined(items, c1, c2, c3, c4);
        obj.animations = obj2;
        const obj3 = { transform: null };
        const items1 = [{ translateX: translateX.windowWidth }, { scale: 0 }];
        obj3.transform = _undefined2(items1, c6);
        obj.initialValues = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs4.__closure = items1;
      pnpm_ZoomTs4.__workletHash = 16835008505357;
      pnpm_ZoomTs4.__initData = tmp4;
      return pnpm_ZoomTs4;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomInRight;
_inherits(ZoomInRight, fn(1875).ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    return ZoomOutEasyDown();
  }
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(ZoomInRight, null, items3);
importDefaultResultResult3.presetName = "ZoomInRight";
let closure_10 = { code: "(function pnpm_ZoomTs5(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateY:0},{scale:1}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateY:-values.windowHeight},{scale:0}],initialValues)},callback:callback};})" };
class ZoomInUp {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(ZoomOutEasyDown);
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
      const animationAndConfig = _undefined.getAnimationAndConfig();
      items = [closure_10, , , , , , , , ];
      const delay = _undefined.getDelay();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = ZoomOutEasyDown(1938).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomOutEasyDown(1938).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs5(translateY) {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        items = [{ translateY: 0 }, { scale: 1 }];
        obj2.transform = _undefined(items, c1, c2, c3, c4);
        obj.animations = obj2;
        const obj3 = { transform: null };
        const items1 = [{ translateY: -translateY.windowHeight }, { scale: 0 }];
        obj3.transform = _undefined2(items1, c6);
        obj.initialValues = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs5.__closure = items1;
      pnpm_ZoomTs5.__workletHash = 6152288546008;
      pnpm_ZoomTs5.__initData = tmp4;
      return pnpm_ZoomTs5;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomInUp;
_inherits(ZoomInUp, fn(1875).ComplexAnimationBuilder);
const entry4 = {
  key: "createInstance",
  value: function createInstance() {
    return ZoomOutEasyDown();
  }
};
const items4 = [entry4];
const importDefaultResultResult4 = _createClass(ZoomInUp, null, items4);
importDefaultResultResult4.presetName = "ZoomInUp";
let closure_11 = { code: "(function pnpm_ZoomTs6(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateY:0},{scale:1}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateY:values.windowHeight},{scale:0}],initialValues)},callback:callback};})" };
class ZoomInDown {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(ZoomOutEasyDown);
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
      const animationAndConfig = _undefined.getAnimationAndConfig();
      items = [closure_11, , , , , , , , ];
      const delay = _undefined.getDelay();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = ZoomOutEasyDown(1938).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomOutEasyDown(1938).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs6(translateY) {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        items = [{ translateY: 0 }, { scale: 1 }];
        obj2.transform = _undefined(items, c1, c2, c3, c4);
        obj.animations = obj2;
        const obj3 = { transform: null };
        const items1 = [{ translateY: translateY.windowHeight }, { scale: 0 }];
        obj3.transform = _undefined2(items1, c6);
        obj.initialValues = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs6.__closure = items1;
      pnpm_ZoomTs6.__workletHash = 11979197724886;
      pnpm_ZoomTs6.__initData = tmp4;
      return pnpm_ZoomTs6;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomInDown;
_inherits(ZoomInDown, fn(1875).ComplexAnimationBuilder);
const entry5 = {
  key: "createInstance",
  value: function createInstance() {
    return ZoomOutEasyDown();
  }
};
const items5 = [entry5];
const importDefaultResultResult5 = _createClass(ZoomInDown, null, items5);
importDefaultResultResult5.presetName = "ZoomInDown";
let closure_12 = { code: "(function pnpm_ZoomTs7(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateY:0},{scale:1}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateY:-values.targetHeight},{scale:0}],initialValues)},callback:callback};})" };
class ZoomInEasyUp {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(ZoomOutEasyDown);
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
      const animationAndConfig = _undefined.getAnimationAndConfig();
      items = [closure_12, , , , , , , , ];
      const delay = _undefined.getDelay();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = ZoomOutEasyDown(1938).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomOutEasyDown(1938).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs7(targetHeight) {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        items = [{ translateY: 0 }, { scale: 1 }];
        obj2.transform = _undefined(items, c1, c2, c3, c4);
        obj.animations = obj2;
        const obj3 = { transform: null };
        const items1 = [{ translateY: -targetHeight.targetHeight }, { scale: 0 }];
        obj3.transform = _undefined2(items1, c6);
        obj.initialValues = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs7.__closure = items1;
      pnpm_ZoomTs7.__workletHash = 1752004228679;
      pnpm_ZoomTs7.__initData = tmp4;
      return pnpm_ZoomTs7;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomInEasyUp;
_inherits(ZoomInEasyUp, fn(1875).ComplexAnimationBuilder);
const entry6 = {
  key: "createInstance",
  value: function createInstance() {
    return ZoomOutEasyDown();
  }
};
const items6 = [entry6];
const importDefaultResultResult6 = _createClass(ZoomInEasyUp, null, items6);
importDefaultResultResult6.presetName = "ZoomInEasyUp";
let closure_13 = { code: "(function pnpm_ZoomTs8(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateY:0},{scale:1}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateY:values.targetHeight},{scale:0}],initialValues)},callback:callback};})" };
class ZoomInEasyDown {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(ZoomOutEasyDown);
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
      const animationAndConfig = _undefined.getAnimationAndConfig();
      items = [closure_13, , , , , , , , ];
      const delay = _undefined.getDelay();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = ZoomOutEasyDown(1938).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomOutEasyDown(1938).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs8(targetHeight) {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        items = [{ translateY: 0 }, { scale: 1 }];
        obj2.transform = _undefined(items, c1, c2, c3, c4);
        obj.animations = obj2;
        const obj3 = { transform: null };
        const items1 = [{ translateY: targetHeight.targetHeight }, { scale: 0 }];
        obj3.transform = _undefined2(items1, c6);
        obj.initialValues = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs8.__closure = items1;
      pnpm_ZoomTs8.__workletHash = 16986215799013;
      pnpm_ZoomTs8.__initData = tmp4;
      return pnpm_ZoomTs8;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomInEasyDown;
_inherits(ZoomInEasyDown, fn(1875).ComplexAnimationBuilder);
const entry7 = {
  key: "createInstance",
  value: function createInstance() {
    return ZoomOutEasyDown();
  }
};
const items7 = [entry7];
const importDefaultResultResult7 = _createClass(ZoomInEasyDown, null, items7);
importDefaultResultResult7.presetName = "ZoomInEasyDown";
let closure_14 = { code: "(function pnpm_ZoomTs9(){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{scale:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{scale:1}],initialValues)},callback:callback};})" };
class ZoomOut {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(ZoomOutEasyDown);
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
      const animationAndConfig = _undefined.getAnimationAndConfig();
      items = [closure_14, , , , , , , , ];
      const delay = _undefined.getDelay();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = ZoomOutEasyDown(1938).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomOutEasyDown(1938).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs9() {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        items = [{ scale: 0 }];
        obj2.transform = _undefined(items, c1, c2, c3, c4);
        obj.animations = obj2;
        const obj3 = { transform: null };
        const items1 = [{ scale: 1 }];
        obj3.transform = _undefined2(items1, c6);
        obj.initialValues = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs9.__closure = items1;
      pnpm_ZoomTs9.__workletHash = 396670226420;
      pnpm_ZoomTs9.__initData = tmp4;
      return pnpm_ZoomTs9;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomOut;
_inherits(ZoomOut, fn(1875).ComplexAnimationBuilder);
const entry8 = {
  key: "createInstance",
  value: function createInstance() {
    return ZoomOutEasyDown();
  }
};
const items8 = [entry8];
const importDefaultResultResult8 = _createClass(ZoomOut, null, items8);
importDefaultResultResult8.presetName = "ZoomOut";
let closure_15 = { code: "(function pnpm_ZoomTs10(){let[animateTransformToValues,rotate,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{scale:0},{rotate:rotate}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{scale:1},{rotate:'0rad'}],initialValues)},callback:callback};})" };
class ZoomOutRotate {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(ZoomOutEasyDown);
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
      const animationAndConfig = _undefined.getAnimationAndConfig();
      let str = "0.3";
      const delay = _undefined.getDelay();
      if (_undefined.rotateV) {
        str = _undefined.rotateV;
      }
      items = [closure_15, , , , , , , , , ];
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = ZoomOutEasyDown(1938).animateTransformToValues;
      items[2] = str;
      items[3] = targetValues;
      items[4] = animationAndConfig;
      items[5] = delayFunction;
      items[6] = delay;
      items[7] = ZoomOutEasyDown(1938).pickTransformValues;
      items[8] = initialValues;
      items[9] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
      function pnpm_ZoomTs10() {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        items = [{ scale: 0 }, { rotate }];
        obj2.transform = _undefined(items, c2, c3, c4, c5);
        obj.animations = obj2;
        const obj4 = { transform: null };
        const items1 = [{ scale: 1 }, { rotate: "0rad" }];
        obj4.transform = _undefined2(items1, c7);
        obj.initialValues = obj4;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
      pnpm_ZoomTs10.__closure = items1;
      pnpm_ZoomTs10.__workletHash = 1552380564423;
      pnpm_ZoomTs10.__initData = tmp5;
      return pnpm_ZoomTs10;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomOutRotate;
_inherits(ZoomOutRotate, fn(1875).ComplexAnimationBuilder);
const entry9 = {
  key: "createInstance",
  value: function createInstance() {
    return ZoomOutEasyDown();
  }
};
const items9 = [entry9];
const importDefaultResultResult9 = _createClass(ZoomOutRotate, null, items9);
importDefaultResultResult9.presetName = "ZoomOutRotate";
let closure_16 = { code: "(function pnpm_ZoomTs11(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateX:-values.windowWidth},{scale:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateX:0},{scale:1}],initialValues)},callback:callback};})" };
class ZoomOutLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(ZoomOutEasyDown);
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
      const animationAndConfig = _undefined.getAnimationAndConfig();
      items = [closure_16, , , , , , , , ];
      const delay = _undefined.getDelay();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = ZoomOutEasyDown(1938).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomOutEasyDown(1938).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs11(translateX) {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        items = [{ translateX: -translateX.windowWidth }, { scale: 0 }];
        obj2.transform = _undefined(items, c1, c2, c3, c4);
        obj.animations = obj2;
        const obj4 = { transform: null };
        const items1 = [{ translateX: 0 }, { scale: 1 }];
        obj4.transform = _undefined2(items1, c6);
        obj.initialValues = obj4;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs11.__closure = items1;
      pnpm_ZoomTs11.__workletHash = 9712636232340;
      pnpm_ZoomTs11.__initData = tmp4;
      return pnpm_ZoomTs11;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomOutLeft;
_inherits(ZoomOutLeft, fn(1875).ComplexAnimationBuilder);
const entry10 = {
  key: "createInstance",
  value: function createInstance() {
    return ZoomOutEasyDown();
  }
};
const items10 = [entry10];
const importDefaultResultResult10 = _createClass(ZoomOutLeft, null, items10);
importDefaultResultResult10.presetName = "ZoomOutLeft";
let closure_17 = { code: "(function pnpm_ZoomTs12(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateX:values.windowWidth},{scale:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateX:0},{scale:1}],initialValues)},callback:callback};})" };
class ZoomOutRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(ZoomOutEasyDown);
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
      const animationAndConfig = _undefined.getAnimationAndConfig();
      items = [closure_17, , , , , , , , ];
      const delay = _undefined.getDelay();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = ZoomOutEasyDown(1938).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomOutEasyDown(1938).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs12(translateX) {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        items = [{ translateX: translateX.windowWidth }, { scale: 0 }];
        obj2.transform = _undefined(items, c1, c2, c3, c4);
        obj.animations = obj2;
        const obj4 = { transform: null };
        const items1 = [{ translateX: 0 }, { scale: 1 }];
        obj4.transform = _undefined2(items1, c6);
        obj.initialValues = obj4;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs12.__closure = items1;
      pnpm_ZoomTs12.__workletHash = 813568534426;
      pnpm_ZoomTs12.__initData = tmp4;
      return pnpm_ZoomTs12;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomOutRight;
_inherits(ZoomOutRight, fn(1875).ComplexAnimationBuilder);
const entry11 = {
  key: "createInstance",
  value: function createInstance() {
    return ZoomOutEasyDown();
  }
};
const items11 = [entry11];
const importDefaultResultResult11 = _createClass(ZoomOutRight, null, items11);
importDefaultResultResult11.presetName = "ZoomOutRight";
let closure_18 = { code: "(function pnpm_ZoomTs13(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateY:-values.windowHeight},{scale:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateY:0},{scale:1}],initialValues)},callback:callback};})" };
class ZoomOutUp {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(ZoomOutEasyDown);
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
      const animationAndConfig = _undefined.getAnimationAndConfig();
      items = [closure_18, , , , , , , , ];
      const delay = _undefined.getDelay();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = ZoomOutEasyDown(1938).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomOutEasyDown(1938).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs13(translateY) {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        items = [{ translateY: -translateY.windowHeight }, { scale: 0 }];
        obj2.transform = _undefined(items, c1, c2, c3, c4);
        obj.animations = obj2;
        const obj4 = { transform: null };
        const items1 = [{ translateY: 0 }, { scale: 1 }];
        obj4.transform = _undefined2(items1, c6);
        obj.initialValues = obj4;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs13.__closure = items1;
      pnpm_ZoomTs13.__workletHash = 5114640931727;
      pnpm_ZoomTs13.__initData = tmp4;
      return pnpm_ZoomTs13;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomOutUp;
_inherits(ZoomOutUp, fn(1875).ComplexAnimationBuilder);
const entry12 = {
  key: "createInstance",
  value: function createInstance() {
    return ZoomOutEasyDown();
  }
};
const items12 = [entry12];
const importDefaultResultResult12 = _createClass(ZoomOutUp, null, items12);
importDefaultResultResult12.presetName = "ZoomOutUp";
let closure_19 = { code: "(function pnpm_ZoomTs14(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateY:values.windowHeight},{scale:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateY:0},{scale:1}],initialValues)},callback:callback};})" };
class ZoomOutDown {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(ZoomOutEasyDown);
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
      const animationAndConfig = _undefined.getAnimationAndConfig();
      items = [closure_19, , , , , , , , ];
      const delay = _undefined.getDelay();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = ZoomOutEasyDown(1938).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomOutEasyDown(1938).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs14(translateY) {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        items = [{ translateY: translateY.windowHeight }, { scale: 0 }];
        obj2.transform = _undefined(items, c1, c2, c3, c4);
        obj.animations = obj2;
        const obj4 = { transform: null };
        const items1 = [{ translateY: 0 }, { scale: 1 }];
        obj4.transform = _undefined2(items1, c6);
        obj.initialValues = obj4;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs14.__closure = items1;
      pnpm_ZoomTs14.__workletHash = 13969217164037;
      pnpm_ZoomTs14.__initData = tmp4;
      return pnpm_ZoomTs14;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomOutDown;
_inherits(ZoomOutDown, fn(1875).ComplexAnimationBuilder);
const entry13 = {
  key: "createInstance",
  value: function createInstance() {
    return ZoomOutEasyDown();
  }
};
const items13 = [entry13];
const importDefaultResultResult13 = _createClass(ZoomOutDown, null, items13);
importDefaultResultResult13.presetName = "ZoomOutDown";
let closure_20 = { code: "(function pnpm_ZoomTs15(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateY:-values.currentHeight},{scale:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateY:0},{scale:1}],initialValues)},callback:callback};})" };
class ZoomOutEasyUp {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(ZoomOutEasyDown);
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
      const animationAndConfig = _undefined.getAnimationAndConfig();
      items = [closure_20, , , , , , , , ];
      const delay = _undefined.getDelay();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = ZoomOutEasyDown(1938).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomOutEasyDown(1938).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs15(currentHeight) {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        items = [{ translateY: -currentHeight.currentHeight }, { scale: 0 }];
        obj2.transform = _undefined(items, c1, c2, c3, c4);
        obj.animations = obj2;
        const obj4 = { transform: null };
        const items1 = [{ translateY: 0 }, { scale: 1 }];
        obj4.transform = _undefined2(items1, c6);
        obj.initialValues = obj4;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs15.__closure = items1;
      pnpm_ZoomTs15.__workletHash = 16783034363628;
      pnpm_ZoomTs15.__initData = tmp4;
      return pnpm_ZoomTs15;
    };
    return tmp3Result;
  }
}
ZoomOutEasyDown = ZoomOutEasyUp;
_inherits(ZoomOutEasyUp, fn(1875).ComplexAnimationBuilder);
const entry14 = {
  key: "createInstance",
  value: function createInstance() {
    return ZoomOutEasyDown();
  }
};
const items14 = [entry14];
const importDefaultResultResult14 = _createClass(ZoomOutEasyUp, null, items14);
importDefaultResultResult14.presetName = "ZoomOutEasyUp";
let closure_21 = { code: "(function pnpm_ZoomTs16(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateY:values.currentHeight},{scale:0}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateY:0},{scale:1}],initialValues)},callback:callback};})" };
class ZoomOutEasyDown {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, ZoomOutEasyDown);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(ZoomOutEasyDown);
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
      const animationAndConfig = _undefined.getAnimationAndConfig();
      items = [closure_21, , , , , , , , ];
      const delay = _undefined.getDelay();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = ZoomOutEasyDown(1938).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = ZoomOutEasyDown(1938).pickTransformValues;
      items[7] = initialValues;
      items[8] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_ZoomTs16(currentHeight) {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        items = [{ translateY: currentHeight.currentHeight }, { scale: 0 }];
        obj2.transform = _undefined(items, c1, c2, c3, c4);
        obj.animations = obj2;
        const obj4 = { transform: null };
        const items1 = [{ translateY: 0 }, { scale: 1 }];
        obj4.transform = _undefined2(items1, c6);
        obj.initialValues = obj4;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_ZoomTs16.__closure = items1;
      pnpm_ZoomTs16.__workletHash = 16766082812226;
      pnpm_ZoomTs16.__initData = tmp4;
      return pnpm_ZoomTs16;
    };
    return tmp3Result;
  }
}
_inherits(ZoomOutEasyDown, fn(1875).ComplexAnimationBuilder);
const entry15 = {
  key: "createInstance",
  value: function createInstance() {
    return ZoomOutEasyDown();
  }
};
const items15 = [entry15];
const importDefaultResultResult15 = _createClass(ZoomOutEasyDown, null, items15);
importDefaultResultResult15.presetName = "ZoomOutEasyDown";

export const ZoomIn = importDefaultResultResult;
export const ZoomInRotate = importDefaultResultResult1;
export const ZoomInLeft = importDefaultResultResult2;
export const ZoomInRight = importDefaultResultResult3;
export const ZoomInUp = importDefaultResultResult4;
export const ZoomInDown = importDefaultResultResult5;
export const ZoomInEasyUp = importDefaultResultResult6;
export const ZoomInEasyDown = importDefaultResultResult7;
export const ZoomOut = importDefaultResultResult8;
export const ZoomOutRotate = importDefaultResultResult9;
export const ZoomOutLeft = importDefaultResultResult10;
export const ZoomOutRight = importDefaultResultResult11;
export const ZoomOutUp = importDefaultResultResult12;
export const ZoomOutDown = importDefaultResultResult13;
export const ZoomOutEasyUp = importDefaultResultResult14;
export const ZoomOutEasyDown = importDefaultResultResult15;
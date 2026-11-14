// === Module 1943: Roll ===

// Module 1943 (Roll)
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let RollOutRight = fn;
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
let closure_6 = { code: "(function pnpm_RollTs1(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateX:0},{rotate:'0deg'}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateX:-values.windowWidth},{rotate:'-180deg'}],initialValues)},callback:callback};})" };
class RollInLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, RollOutRight);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(RollOutRight);
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
      items[1] = RollOutRight(1938).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = RollOutRight(1938).pickTransformValues;
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
      function pnpm_RollTs1(translateX) {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        items = [{ translateX: 0 }, { rotate: "0deg" }];
        obj2.transform = _undefined(items, c1, c2, c3, c4);
        obj.animations = obj2;
        const obj3 = { transform: null };
        const items1 = [{ translateX: -translateX.windowWidth }, { rotate: "-180deg" }];
        obj3.transform = _undefined2(items1, c6);
        obj.initialValues = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_RollTs1.__closure = items1;
      pnpm_RollTs1.__workletHash = 5900075290634;
      pnpm_RollTs1.__initData = tmp4;
      return pnpm_RollTs1;
    };
    return tmp3Result;
  }
}
RollOutRight = RollInLeft;
_inherits(RollInLeft, fn(1875).ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    return RollOutRight();
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(RollInLeft, null, items);
importDefaultResultResult.presetName = "RollInLeft";
let closure_7 = { code: "(function pnpm_RollTs2(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateX:0},{rotate:'0deg'}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateX:values.windowWidth},{rotate:'180deg'}],initialValues)},callback:callback};})" };
class RollInRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, RollOutRight);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(RollOutRight);
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
      items = [callback, , , , , , , , ];
      const delay = _undefined.getDelay();
      ({ callbackV, initialValues, targetValues } = _undefined);
      items[1] = RollOutRight(1938).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = RollOutRight(1938).pickTransformValues;
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
      function pnpm_RollTs2(translateX) {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        items = [{ translateX: 0 }, { rotate: "0deg" }];
        obj2.transform = _undefined(items, c1, c2, c3, c4);
        obj.animations = obj2;
        const obj3 = { transform: null };
        const items1 = [{ translateX: translateX.windowWidth }, { rotate: "180deg" }];
        obj3.transform = _undefined2(items1, c6);
        obj.initialValues = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_RollTs2.__closure = items1;
      pnpm_RollTs2.__workletHash = 1511523287401;
      pnpm_RollTs2.__initData = tmp4;
      return pnpm_RollTs2;
    };
    return tmp3Result;
  }
}
RollOutRight = RollInRight;
_inherits(RollInRight, fn(1875).ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    return RollOutRight();
  }
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(RollInRight, null, items1);
importDefaultResultResult1.presetName = "RollInRight";
let closure_8 = { code: "(function pnpm_RollTs3(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateX:-values.windowWidth},{rotate:'-180deg'}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateX:0},{rotate:'0deg'}],initialValues)},callback:callback};})" };
class RollOutLeft {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, RollOutRight);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(RollOutRight);
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
      items[1] = RollOutRight(1938).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = RollOutRight(1938).pickTransformValues;
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
      function pnpm_RollTs3(translateX) {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        items = [{ translateX: -translateX.windowWidth }, { rotate: "-180deg" }];
        obj2.transform = _undefined(items, c1, c2, c3, c4);
        obj.animations = obj2;
        const obj4 = { transform: null };
        const items1 = [{ translateX: 0 }, { rotate: "0deg" }];
        obj4.transform = _undefined2(items1, c6);
        obj.initialValues = obj4;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_RollTs3.__closure = items1;
      pnpm_RollTs3.__workletHash = 5971696103848;
      pnpm_RollTs3.__initData = tmp4;
      return pnpm_RollTs3;
    };
    return tmp3Result;
  }
}
RollOutRight = RollOutLeft;
_inherits(RollOutLeft, fn(1875).ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    return RollOutRight();
  }
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(RollOutLeft, null, items2);
importDefaultResultResult2.presetName = "RollOutLeft";
let closure_9 = { code: "(function pnpm_RollTs4(values){let[animateTransformToValues,targetValues,animationAndConfig,delayFunction,delay,pickTransformValues,initialValues,callback]=this.__closure;return{animations:{transform:animateTransformToValues([{translateX:values.windowWidth},{rotate:'180deg'}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{transform:pickTransformValues([{translateX:0},{rotate:'0deg'}],initialValues)},callback:callback};})" };
class RollOutRight {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, RollOutRight);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(RollOutRight);
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
      items[1] = RollOutRight(1938).animateTransformToValues;
      items[2] = targetValues;
      items[3] = animationAndConfig;
      items[4] = delayFunction;
      items[5] = delay;
      items[6] = RollOutRight(1938).pickTransformValues;
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
      function pnpm_RollTs4(translateX) {
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { transform: null };
        items = [{ translateX: translateX.windowWidth }, { rotate: "180deg" }];
        obj2.transform = _undefined(items, c1, c2, c3, c4);
        obj.animations = obj2;
        const obj4 = { transform: null };
        const items1 = [{ translateX: 0 }, { rotate: "0deg" }];
        obj4.transform = _undefined2(items1, c6);
        obj.initialValues = obj4;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_RollTs4.__closure = items1;
      pnpm_RollTs4.__workletHash = 5973472889039;
      pnpm_RollTs4.__initData = tmp4;
      return pnpm_RollTs4;
    };
    return tmp3Result;
  }
}
_inherits(RollOutRight, fn(1875).ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    return RollOutRight();
  }
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(RollOutRight, null, items3);
importDefaultResultResult3.presetName = "RollOutRight";

export const RollInLeft = importDefaultResultResult;
export const RollInRight = importDefaultResultResult1;
export const RollOutLeft = importDefaultResultResult2;
export const RollOutRight = importDefaultResultResult3;
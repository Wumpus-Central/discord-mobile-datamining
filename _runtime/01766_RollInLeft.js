// === Module 1766: RollInLeft ===

// Module 1766 (RollInLeft)
import BaseAnimationBuilder from "BaseAnimationBuilder" /* 1713 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c2 from "_possibleConstructorReturn" /* 93 */;
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
let closure_5 = { code: "function pnpm_RollTs1(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(0,config))},{rotate:delayFunction(delay,animation('0deg',config))}]},initialValues:{transform:[{translateX:-values.windowWidth},{rotate:'-180deg'}],...initialValues},callback:callback};}" };
class RollInLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, RollInLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(RollInLeft);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c2(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = RollInLeft(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(translateX) {
        let items;
        let items1;
        let obj2;
        let obj5;
        const obj = { animations: obj2, initialValues: obj5, callback: callbackV };
        obj2 = { transform: items };
        items = [{ translateX: delayFunction(delay, first(0, closure_2)) }, ];
        ({ translateX: delayFunction(delay, first(0, closure_2)) });
        items[1] = { rotate: delayFunction(delay, first("0deg", closure_2)) };
        obj5 = { transform: items1 };
        items1 = [, ];
        const obj6 = { translateX: -translateX.windowWidth };
        items1[0] = obj6;
        items1[1] = { rotate: "-180deg" };
        ({ rotate: delayFunction(delay, first("0deg", closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 16303599954051;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(RollInLeft, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = RollInLeft();
    return tmp;
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(RollInLeft, null, items);
importDefaultResultResult.presetName = "RollInLeft";
let closure_6 = { code: "function pnpm_RollTs2(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(0,config))},{rotate:delayFunction(delay,animation('0deg',config))}]},initialValues:{transform:[{translateX:values.windowWidth},{rotate:'180deg'}],...initialValues},callback:callback};}" };
class RollInRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, RollInRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(RollInRight);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c2(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = RollInRight(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n(translateX) {
        let items;
        let items1;
        let obj2;
        let obj5;
        const obj = { animations: obj2, initialValues: obj5, callback: callbackV };
        obj2 = { transform: items };
        items = [{ translateX: delayFunction(delay, first(0, closure_2)) }, ];
        ({ translateX: delayFunction(delay, first(0, closure_2)) });
        items[1] = { rotate: delayFunction(delay, first("0deg", closure_2)) };
        obj5 = { transform: items1 };
        items1 = [, ];
        const obj6 = { translateX: translateX.windowWidth };
        items1[0] = obj6;
        items1[1] = { rotate: "180deg" };
        ({ rotate: delayFunction(delay, first("0deg", closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 514820713152;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(RollInRight, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = RollInRight();
    return tmp;
  }
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(RollInRight, null, items1);
importDefaultResultResult1.presetName = "RollInRight";
let closure_7 = { code: "function pnpm_RollTs3(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(-values.windowWidth,config))},{rotate:delayFunction(delay,animation('-180deg',config))}]},initialValues:{transform:[{translateX:0},{rotate:'0deg'}],...initialValues},callback:callback};}" };
class RollOutLeft {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, RollOutLeft);
    let items1 = [...items];
    let obj = _getPrototypeOf(RollOutLeft);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c2(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = RollOutLeft(closure_0.getAnimationAndConfig(), 2);
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
        obj2 = { transform: items };
        items = [{ translateX: delayFunction(delay, first(-windowWidth.windowWidth, closure_2)) }, ];
        ({ translateX: delayFunction(delay, first(-windowWidth.windowWidth, closure_2)) });
        items[1] = { rotate: delayFunction(delay, first("-180deg", closure_2)) };
        obj5 = { transform: items1 };
        items1 = [{ translateX: 0 }, { rotate: "0deg" }];
        ({ rotate: delayFunction(delay, first("-180deg", closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 1569061887041;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(RollOutLeft, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = RollOutLeft();
    return tmp;
  }
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(RollOutLeft, null, items2);
importDefaultResultResult2.presetName = "RollOutLeft";
let closure_8 = { code: "function pnpm_RollTs4(values){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{translateX:delayFunction(delay,animation(values.windowWidth,config))},{rotate:delayFunction(delay,animation('180deg',config))}]},initialValues:{transform:[{translateX:0},{rotate:'0deg'}],...initialValues},callback:callback};}" };
class RollOutRight {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, RollOutRight);
    let items1 = [...items];
    let obj = _getPrototypeOf(RollOutRight);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c2(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const tmp2 = RollOutRight(closure_0.getAnimationAndConfig(), 2);
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
        obj2 = { transform: items };
        items = [{ translateX: delayFunction(delay, first(windowWidth.windowWidth, closure_2)) }, ];
        ({ translateX: delayFunction(delay, first(windowWidth.windowWidth, closure_2)) });
        items[1] = { rotate: delayFunction(delay, first("180deg", closure_2)) };
        obj5 = { transform: items1 };
        items1 = [{ translateX: 0 }, { rotate: "0deg" }];
        ({ rotate: delayFunction(delay, first("180deg", closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 9663216530406;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(RollOutRight, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = RollOutRight();
    return tmp;
  }
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(RollOutRight, null, items3);
importDefaultResultResult3.presetName = "RollOutRight";
const RollInLeft_export = importDefaultResultResult;
const RollInRight_export = importDefaultResultResult1;
const RollOutLeft_export = importDefaultResultResult2;
const RollOutRight_export = importDefaultResultResult3;

export { RollInLeft_export as RollInLeft };
export { RollInRight_export as RollInRight };
export { RollOutLeft_export as RollOutLeft };
export { RollOutRight_export as RollOutRight };
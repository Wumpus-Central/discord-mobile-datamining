// _runtime/01769_StretchInX.js
import BaseAnimationBuilder from "01713_BaseAnimationBuilder.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import c2 from "metro/00093__possibleConstructorReturn.js";
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
let closure_5 = {
  code: "function pnpm_StretchTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleX:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{scaleX:0}],...initialValues},callback:callback};}",
};
class StretchInX {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, StretchInX);
    let items1 = [...items];
    let obj = _getPrototypeOf(StretchInX);
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
      const tmp2 = StretchInX(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n() {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { animations: obj2, initialValues: obj4, callback: callbackV };
        obj2 = { transform: items };
        items = [{ scaleX: delayFunction(delay, first(1, closure_2)) }];
        obj4 = { transform: items1 };
        items1 = [{ scaleX: 0 }];
        ({ scaleX: delayFunction(delay, first(1, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 8236429657427;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(StretchInX, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = StretchInX();
    return tmp;
  },
};
let items = [entry];
const importDefaultResultResult = _createClass(StretchInX, null, items);
importDefaultResultResult.presetName = "StretchInX";
let closure_6 = {
  code: "function pnpm_StretchTs2(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleY:delayFunction(delay,animation(1,config))}]},initialValues:{transform:[{scaleY:0}],...initialValues},callback:callback};}",
};
class StretchInY {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, StretchInY);
    let items1 = [...items];
    let obj = _getPrototypeOf(StretchInY);
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
      const tmp2 = StretchInY(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n() {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { animations: obj2, initialValues: obj4, callback: callbackV };
        obj2 = { transform: items };
        items = [{ scaleY: delayFunction(delay, first(1, closure_2)) }];
        obj4 = { transform: items1 };
        items1 = [{ scaleY: 0 }];
        ({ scaleY: delayFunction(delay, first(1, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 15758510181808;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(StretchInY, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = StretchInY();
    return tmp;
  },
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(StretchInY, null, items1);
importDefaultResultResult1.presetName = "StretchInY";
let closure_7 = {
  code: "function pnpm_StretchTs3(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleX:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scaleX:1}],...initialValues},callback:callback};}",
};
class StretchOutX {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, StretchOutX);
    let items1 = [...items];
    let obj = _getPrototypeOf(StretchOutX);
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
      const tmp2 = StretchOutX(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n() {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { animations: obj2, initialValues: obj4, callback: callbackV };
        obj2 = { transform: items };
        items = [{ scaleX: delayFunction(delay, first(0, closure_2)) }];
        obj4 = { transform: items1 };
        items1 = [{ scaleX: 1 }];
        ({ scaleX: delayFunction(delay, first(0, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 2374207350737;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(StretchOutX, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry2 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = StretchOutX();
    return tmp;
  },
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(StretchOutX, null, items2);
importDefaultResultResult2.presetName = "StretchOutX";
let closure_8 = {
  code: "function pnpm_StretchTs4(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{transform:[{scaleY:delayFunction(delay,animation(0,config))}]},initialValues:{transform:[{scaleY:1}],...initialValues},callback:callback};}",
};
class StretchOutY {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, StretchOutY);
    let items1 = [...items];
    let obj = _getPrototypeOf(StretchOutY);
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
      const tmp2 = StretchOutY(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function n() {
        let items;
        let items1;
        let obj2;
        let obj4;
        const obj = { animations: obj2, initialValues: obj4, callback: callbackV };
        obj2 = { transform: items };
        items = [{ scaleY: delayFunction(delay, first(0, closure_2)) }];
        obj4 = { transform: items1 };
        items1 = [{ scaleY: 1 }];
        ({ scaleY: delayFunction(delay, first(0, closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 3228047902646;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(StretchOutY, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry3 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = StretchOutY();
    return tmp;
  },
};
const items3 = [entry3];
const importDefaultResultResult3 = _createClass(StretchOutY, null, items3);
importDefaultResultResult3.presetName = "StretchOutY";
const StretchInX_export = importDefaultResultResult;
const StretchInY_export = importDefaultResultResult1;
const StretchOutX_export = importDefaultResultResult2;
const StretchOutY_export = importDefaultResultResult3;

export { StretchInX_export as StretchInX };
export { StretchInY_export as StretchInY };
export { StretchOutX_export as StretchOutX };
export { StretchOutY_export as StretchOutY };

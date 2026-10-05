// _runtime/01765_PinwheelIn.js
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
  code: "function pnpm_PinwheelTs1(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(1,config)),transform:[{scale:delayFunction(delay,animation(1,config))},{rotate:delayFunction(delay,animation('0rad',config))}]},initialValues:{opacity:0,transform:[{scale:0},{rotate:'5rad'}],...initialValues},callback:callback};}",
};
class PinwheelIn {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, PinwheelIn);
    let items1 = [...items];
    let obj = _getPrototypeOf(PinwheelIn);
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
      const tmp2 = PinwheelIn(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function e() {
        let items;
        let items1;
        let obj2;
        let obj5;
        const obj = { animations: obj2, initialValues: obj5, callback: callbackV };
        obj2 = { opacity: delayFunction(delay, first(1, closure_2)), transform: items };
        items = [{ scale: delayFunction(delay, first(1, closure_2)) }];
        ({ scale: delayFunction(delay, first(1, closure_2)) });
        items[1] = { rotate: delayFunction(delay, first("0rad", closure_2)) };
        obj5 = { opacity: 0, transform: items1 };
        items1 = [{ scale: 0 }, { rotate: "5rad" }];
        ({ rotate: delayFunction(delay, first("0rad", closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 8890961567516;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(PinwheelIn, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = PinwheelIn();
    return tmp;
  },
};
let items = [entry];
const importDefaultResultResult = _createClass(PinwheelIn, null, items);
importDefaultResultResult.presetName = "PinwheelIn";
let closure_6 = {
  code: "function pnpm_PinwheelTs2(){const{delayFunction,delay,animation,config,initialValues,callback}=this.__closure;return{animations:{opacity:delayFunction(delay,animation(0,config)),transform:[{scale:delayFunction(delay,animation(0,config))},{rotate:delayFunction(delay,animation('5rad',config))}]},initialValues:{opacity:1,transform:[{scale:1},{rotate:'0rad'}],...initialValues},callback:callback};}",
};
class PinwheelOut {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, PinwheelOut);
    let items1 = [...items];
    let obj = _getPrototypeOf(PinwheelOut);
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
      const tmp2 = PinwheelOut(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const delay = closure_0.getDelay();
      const callbackV = closure_0.callbackV;
      const initialValues = closure_0.initialValues;
      const fn = function e() {
        let items;
        let items1;
        let obj2;
        let obj5;
        const obj = { animations: obj2, initialValues: obj5, callback: callbackV };
        obj2 = { opacity: delayFunction(delay, first(0, closure_2)), transform: items };
        items = [{ scale: delayFunction(delay, first(0, closure_2)) }];
        ({ scale: delayFunction(delay, first(0, closure_2)) });
        items[1] = { rotate: delayFunction(delay, first("5rad", closure_2)) };
        obj5 = { opacity: 1, transform: items1 };
        items1 = [{ scale: 1 }, { rotate: "0rad" }];
        ({ rotate: delayFunction(delay, first("5rad", closure_2)) });
        const merged = Object.assign(initialValues);
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], initialValues, callback: callbackV };
      fn.__workletHash = 15028563671839;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(PinwheelOut, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = PinwheelOut();
    return tmp;
  },
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(PinwheelOut, null, items1);
importDefaultResultResult1.presetName = "PinwheelOut";
const PinwheelIn_export = importDefaultResultResult;
const PinwheelOut_export = importDefaultResultResult1;

export { PinwheelIn_export as PinwheelIn };
export { PinwheelOut_export as PinwheelOut };

// === Module 1942: Pinwheel ===

// Module 1942 (Pinwheel)
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _slicedToArray from "module_32" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let PinwheelOut = fn;
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
_possibleConstructorReturnDefault;
let closure_7 = { code: "(function pnpm_PinwheelTs1(){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:1,config)),transform:animateTransformToValues([{scale:1},{rotate:'0rad'}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:0,transform:pickTransformValues([{scale:0},{rotate:'5rad'}],initialValues)},callback:callback};})" };
class PinwheelIn {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, PinwheelOut);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(PinwheelOut);
    tmp3 = closure_4;
    if (closure_6()) {
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
      [tmp4, tmp5] = animationAndConfig;
      items = [_undefined4, delayFunction, _undefined.getDelay(), tmp4, _undefined.targetValues, tmp5, , , , , ];
      ({ callbackV, initialValues } = _undefined);
      items[6] = PinwheelOut(1938).animateTransformToValues;
      items[7] = animationAndConfig;
      items[8] = initialValues;
      items[9] = PinwheelOut(1938).pickTransformValues;
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
      [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items;
      function pnpm_PinwheelTs1() {
        let num;
        if (_undefined3 != null) {
          num = _undefined3.opacity;
        }
        if (num == null) {
          num = 1;
        }
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { opacity: _undefined(c1, _undefined2(num, c4)), transform: null };
        items = [{ scale: 1 }, { rotate: "0rad" }];
        obj2.transform = _undefined(items, _undefined3, c6, _undefined, c1);
        obj.animations = obj2;
        let num2;
        if (_undefined4 != null) {
          num2 = _undefined4.opacity;
        }
        if (num2 == null) {
          num2 = 0;
        }
        const obj3 = { opacity: num2, transform: null };
        const items1 = [{ scale: 0 }, { rotate: "5rad" }];
        obj3.transform = _undefined2(items1, _undefined4);
        obj.initialValues = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_PinwheelTs1.__closure = items1;
      pnpm_PinwheelTs1.__workletHash = 13598073066740;
      pnpm_PinwheelTs1.__initData = tmp6;
      return pnpm_PinwheelTs1;
    };
    return tmp3Result;
  }
}
PinwheelOut = PinwheelIn;
_inherits(PinwheelIn, fn(1875).ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    return PinwheelOut();
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(PinwheelIn, null, items);
importDefaultResultResult.presetName = "PinwheelIn";
let closure_8 = { code: "(function pnpm_PinwheelTs2(){let[delayFunction,delay,animation,targetValues,config,animateTransformToValues,animationAndConfig,initialValues,pickTransformValues,callback]=this.__closure;var _targetValues$opacity,_targetValues,_initialValues$opacit,_initialValues;return{animations:{opacity:delayFunction(delay,animation((_targetValues$opacity=(_targetValues=targetValues)===null||_targetValues===void 0?void 0:_targetValues.opacity)!==null&&_targetValues$opacity!==void 0?_targetValues$opacity:0,config)),transform:animateTransformToValues([{scale:0},{rotate:'5rad'}],targetValues,animationAndConfig,delayFunction,delay)},initialValues:{opacity:(_initialValues$opacit=(_initialValues=initialValues)===null||_initialValues===void 0?void 0:_initialValues.opacity)!==null&&_initialValues$opacit!==void 0?_initialValues$opacit:1,transform:pickTransformValues([{scale:1},{rotate:'0rad'}],initialValues)},callback:callback};})" };
class PinwheelOut {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, PinwheelOut);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(PinwheelOut);
    tmp3 = closure_4;
    if (closure_6()) {
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
      [tmp4, tmp5] = animationAndConfig;
      items = [_undefined2, delayFunction, _undefined.getDelay(), tmp4, _undefined.targetValues, tmp5, , , , , ];
      ({ callbackV, initialValues } = _undefined);
      items[6] = PinwheelOut(1938).animateTransformToValues;
      items[7] = animationAndConfig;
      items[8] = initialValues;
      items[9] = PinwheelOut(1938).pickTransformValues;
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
      [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items;
      function pnpm_PinwheelTs2() {
        let num;
        if (_undefined3 != null) {
          num = _undefined3.opacity;
        }
        if (num == null) {
          num = 0;
        }
        const obj = { animations: null, initialValues: null, callback: null };
        const obj2 = { opacity: _undefined(c1, _undefined2(num, c4)), transform: null };
        items = [{ scale: 0 }, { rotate: "5rad" }];
        obj2.transform = _undefined(items, _undefined3, c6, _undefined, c1);
        obj.animations = obj2;
        let num2;
        if (_undefined4 != null) {
          num2 = _undefined4.opacity;
        }
        if (num2 == null) {
          num2 = 1;
        }
        const obj3 = { opacity: num2, transform: null };
        const items1 = [{ scale: 1 }, { rotate: "0rad" }];
        obj3.transform = _undefined2(items1, _undefined4);
        obj.initialValues = obj3;
        obj.callback = callback;
        return obj;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
      pnpm_PinwheelTs2.__closure = items1;
      pnpm_PinwheelTs2.__workletHash = 5922905214967;
      pnpm_PinwheelTs2.__initData = tmp6;
      return pnpm_PinwheelTs2;
    };
    return tmp3Result;
  }
}
_inherits(PinwheelOut, fn(1875).ComplexAnimationBuilder);
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    return PinwheelOut();
  }
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(PinwheelOut, null, items1);
importDefaultResultResult1.presetName = "PinwheelOut";

export const PinwheelIn = importDefaultResultResult;
export const PinwheelOut = importDefaultResultResult1;
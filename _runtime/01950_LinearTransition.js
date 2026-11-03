// === Module 1950: LinearTransition ===

// Module 1950 (LinearTransition)
import _slicedToArray_mod from "module_32" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c2 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
let _slicedToArray = _slicedToArray_mod;
let closure_5 = { code: "(function pnpm_LinearTransitionTs1(values){let[delayFunction,delay,animation,config,callback]=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,animation(values.targetOriginX,config)),originY:delayFunction(delay,animation(values.targetOriginY,config)),width:delayFunction(delay,animation(values.targetWidth,config)),height:delayFunction(delay,animation(values.targetHeight,config))},callback:callback};})" };
class LinearTransition {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_1(this, LinearTransition);
    items1 = [...items];
    tmp2 = closure_3;
    obj = closure_3(LinearTransition);
    tmp3 = c2;
    if (closure_4()) {
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
      [tmp3, tmp4] = _undefined.getAnimationAndConfig();
      items = [closure_5, delayFunction, _undefined.getDelay(), tmp3, tmp4, _undefined.callbackV];
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
      function pnpm_LinearTransitionTs1(originX) {
        const obj = { initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight }, animations: null, callback: null };
        const size = { originX: _undefined(c1, _undefined2(originX.targetOriginX, c3)), originY: _undefined(c1, _undefined2(originX.targetOriginY, c3)), width: _undefined(c1, _undefined2(originX.targetWidth, c3)), height: _undefined(c1, _undefined2(originX.targetHeight, c3)) };
        obj.animations = size;
        obj.callback = callback;
        return obj;
      }
      const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10];
      pnpm_LinearTransitionTs1.__closure = items1;
      pnpm_LinearTransitionTs1.__workletHash = 5021943592286;
      pnpm_LinearTransitionTs1.__initData = tmp5;
      return pnpm_LinearTransitionTs1;
    };
    return tmp3Result;
  }
}
_slicedToArray = LinearTransition;
_inherits(LinearTransition, fn(1872).AnimationConfigBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    return _slicedToArray();
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(LinearTransition, null, items);
importDefaultResultResult.presetName = "LinearTransition";

export const LinearTransition = importDefaultResultResult;
export const Layout = importDefaultResultResult;
// _runtime/metro/01776__.js
import BaseAnimationBuilder from "../01713_BaseAnimationBuilder.js";
import _slicedToArray from "00032__slicedToArray.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c2 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

let size;

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
  code: "function pnpm_LinearTransitionTs1(values){const{delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,animation(values.targetOriginX,config)),originY:delayFunction(delay,animation(values.targetOriginY,config)),width:delayFunction(delay,animation(values.targetWidth,config)),height:delayFunction(delay,animation(values.targetHeight,config))},callback:callback};}",
};
class LinearTransition {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, LinearTransition);
    const items1 = [...items];
    let obj = _getPrototypeOf(LinearTransition);
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
      const tmp2 = LinearTransition(closure_0.getAnimationAndConfig(), 2);
      const first = tmp2[0];
      let closure_2 = tmp4;
      const callbackV = closure_0.callbackV;
      const delay = closure_0.getDelay();
      const fn = function t(originX) {
        const obj = {
          initialValues: {
            originX: originX.currentOriginX,
            originY: originX.currentOriginY,
            width: originX.currentWidth,
            height: originX.currentHeight,
          },
          animations: size,
          callback: callbackV,
        };
        size = {
          originX: delayFunction(delay, first(originX.targetOriginX, closure_2)),
          originY: delayFunction(delay, first(originX.targetOriginY, closure_2)),
          width: delayFunction(delay, first(originX.targetWidth, closure_2)),
          height: delayFunction(delay, first(originX.targetHeight, closure_2)),
        };
        return obj;
      };
      fn.__closure = { delayFunction, delay, animation: first, config: tmp2[1], callback: callbackV };
      fn.__workletHash = 16224579837767;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(LinearTransition, BaseAnimationBuilder.ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = LinearTransition();
    return tmp;
  },
};
let items = [entry];
const importDefaultResultResult = _createClass(LinearTransition, null, items);
importDefaultResultResult.presetName = "LinearTransition";
const LinearTransition_export = importDefaultResultResult;

export { LinearTransition_export as LinearTransition };
export const Layout = importDefaultResultResult;

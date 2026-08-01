// === Module 1735: _isNativeReflectConstruct ===

// Module 1735 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";

const CurvedTransition = arg1;
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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_6 = { code: "function pnpm_CurvedTransitionTs1(values){const{delayFunction,delay,withTiming,duration,easing,callback}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withTiming(values.targetOriginX,{duration:duration,easing:easing.easingX})),originY:delayFunction(delay,withTiming(values.targetOriginY,{duration:duration,easing:easing.easingY})),width:delayFunction(delay,withTiming(values.targetWidth,{duration:duration,easing:easing.easingWidth})),height:delayFunction(delay,withTiming(values.targetHeight,{duration:duration,easing:easing.easingHeight}))},callback:callback};}" };
class CurvedTransition {
  constructor() {
    self = this;
    items = [...arguments];
    apply = undefined;
    tmp = _isNativeReflectConstruct(this, apply);
    items1 = [...items];
    tmp2 = __esModule;
    obj = __esModule(apply);
    tmp3 = __esModule;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    Easing = require("linear").Easing;
    tmp3Result.easingXV = Easing.in(require("linear").Easing.ease);
    Easing2 = require("linear").Easing;
    tmp3Result.easingYV = Easing2.out(require("linear").Easing.ease);
    Easing3 = require("linear").Easing;
    tmp3Result.easingWidthV = Easing3.in(require("linear").Easing.exp);
    Easing4 = require("linear").Easing;
    tmp3Result.easingHeightV = Easing4.out(require("linear").Easing.exp);
    tmp3Result.build = () => {
      delayFunction = delayFunction.getDelayFunction();
      const callbackV = delayFunction.callbackV;
      const delay = delayFunction.getDelay();
      let num = delayFunction.durationV;
      if (num == null) {
        num = 300;
      }
      let obj = { easingX: tmp.easingXV, easingY: tmp.easingYV, easingWidth: tmp.easingWidthV, easingHeight: tmp.easingHeightV };
      const fn = function n(currentOriginX) {
        obj = { initialValues: obj, animations: null, callback: null };
        obj = { originX: currentOriginX.currentOriginX, originY: currentOriginX.currentOriginY, width: currentOriginX.currentWidth, height: currentOriginX.currentHeight };
        obj = { originX: null, originY: null, width: null, height: null };
        let obj3 = delayFunction(callbackV[6]);
        obj[0] = delayFunction(delay, obj3.withTiming(currentOriginX.targetOriginX, { duration: num, easing: obj.easingX }));
        obj[1] = delayFunction(delay, delayFunction(callbackV[6]).withTiming(currentOriginX.targetOriginY, { duration: num, easing: obj.easingY }));
        const obj1 = { duration: num, easing: obj.easingX };
        const obj2 = { duration: num, easing: obj.easingY };
        const obj6 = delayFunction(callbackV[6]);
        obj3 = { duration: num, easing: obj.easingWidth };
        obj[2] = delayFunction(delay, delayFunction(callbackV[6]).withTiming(currentOriginX.targetWidth, obj3));
        const obj8 = delayFunction(callbackV[6]);
        obj[3] = delayFunction(delay, delayFunction(callbackV[6]).withTiming(currentOriginX.targetHeight, { duration: num, easing: obj.easingHeight }));
        obj[1] = obj;
        obj[2] = callbackV;
        return obj;
      };
      obj = { delayFunction, delay, withTiming: _undefined(outer1_1[6]).withTiming, duration: num, easing: obj, callback: callbackV };
      fn.__closure = obj;
      fn.__workletHash = 8113645568730;
      fn.__initData = outer1_6;
      return fn;
    };
    return tmp3Result;
  }
}
require("_inherits")(CurvedTransition, require("BaseAnimationBuilder").BaseAnimationBuilder);
let obj = {
  key: "easingX",
  value: function easingX(easingXV) {
    this.easingXV = easingXV;
    return this;
  }
};
let items = [
  obj,
  {
    key: "easingY",
    value: function easingY(easingYV) {
      this.easingYV = easingYV;
      return this;
    }
  },
  {
    key: "easingWidth",
    value: function easingWidth(easingWidthV) {
      this.easingWidthV = easingWidthV;
      return this;
    }
  },
  {
    key: "easingHeight",
    value: function easingHeight(easingHeightV) {
      this.easingHeightV = easingHeightV;
      return this;
    }
  }
];
obj = {
  key: "createInstance",
  value: function createInstance() {
    return CurvedTransition();
  }
};
let items1 = [
  obj,
  {
    key: "easingX",
    value: function easingX(arg0) {
      const instance = this.createInstance();
      return instance.easingX(arg0);
    }
  },
  {
    key: "easingY",
    value: function easingY(arg0) {
      const instance = this.createInstance();
      return instance.easingY(arg0);
    }
  },
  {
    key: "easingWidth",
    value: function easingWidth(arg0) {
      const instance = this.createInstance();
      return instance.easingWidth(arg0);
    }
  },
  {
    key: "easingHeight",
    value: function easingHeight(arg0) {
      const instance = this.createInstance();
      return instance.easingHeight(arg0);
    }
  }
];
const importDefaultResultResult = importDefaultResult(CurvedTransition, items, items1);
importDefaultResultResult.presetName = "CurvedTransition";

export const CurvedTransition = importDefaultResultResult;
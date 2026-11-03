// === Module 1946: CurvedTransition ===

// Module 1946 (CurvedTransition)
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let CurvedTransition = fn;
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
let closure_6 = { code: "(function pnpm_CurvedTransitionTs1(values){let[delayFunction,delay,withTiming,duration,easing,callback]=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withTiming(values.targetOriginX,{duration:duration,easing:easing.easingX})),originY:delayFunction(delay,withTiming(values.targetOriginY,{duration:duration,easing:easing.easingY})),width:delayFunction(delay,withTiming(values.targetWidth,{duration:duration,easing:easing.easingWidth})),height:delayFunction(delay,withTiming(values.targetHeight,{duration:duration,easing:easing.easingHeight}))},callback:callback};})" };
class CurvedTransition {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, CurvedTransition);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(CurvedTransition);
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
    Easing = closure_0(closure_1[5]).Easing;
    tmp3Result.easingXV = Easing.in(closure_0(closure_1[5]).Easing.ease);
    Easing2 = closure_0(closure_1[5]).Easing;
    tmp3Result.easingYV = Easing2.out(closure_0(closure_1[5]).Easing.ease);
    Easing3 = closure_0(closure_1[5]).Easing;
    tmp3Result.easingWidthV = Easing3.in(closure_0(closure_1[5]).Easing.exp);
    Easing4 = closure_0(closure_1[5]).Easing;
    tmp3Result.easingHeightV = Easing4.out(closure_0(closure_1[5]).Easing.exp);
    tmp3Result.build = () => {
      const delayFunction = _undefined.getDelayFunction();
      ({ callbackV, durationV } = _undefined);
      const delay = _undefined.getDelay();
      if (durationV == null) {
        durationV = 300;
      }
      items = [closure_6, delayFunction, delay, CurvedTransition(1839).withTiming, durationV, { easingX: _undefined.easingXV, easingY: _undefined.easingYV, easingWidth: _undefined.easingWidthV, easingHeight: _undefined.easingHeightV }, callbackV];
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
      function pnpm_CurvedTransitionTs1(originX) {
        const obj = { initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight }, animations: null, callback: null };
        const size = { originX: _undefined(c1, _undefined2(originX.targetOriginX, { duration, easing: _undefined3.easingX })), originY: _undefined(c1, _undefined2(originX.targetOriginY, { duration, easing: _undefined3.easingY })), width: _undefined(c1, _undefined2(originX.targetWidth, { duration, easing: _undefined3.easingWidth })), height: _undefined(c1, _undefined2(originX.targetHeight, { duration, easing: _undefined3.easingHeight })) };
        obj.animations = size;
        obj.callback = callback;
        return obj;
      }
      const items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10];
      pnpm_CurvedTransitionTs1.__closure = items1;
      pnpm_CurvedTransitionTs1.__workletHash = 16947476180931;
      pnpm_CurvedTransitionTs1.__initData = tmp4;
      return pnpm_CurvedTransitionTs1;
    };
    return tmp3Result;
  }
}
_inherits(CurvedTransition, fn(1872).BaseAnimationBuilder);
const entry = {
  key: "easingX",
  value: function easingX(easingXV) {
    this.easingXV = easingXV;
    return this;
  }
};
let items = [
  entry,
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
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    return CurvedTransition();
  }
};
let items1 = [
  entry1,
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
const importDefaultResultResult = _createClass(CurvedTransition, items, items1);
importDefaultResultResult.presetName = "CurvedTransition";

export const CurvedTransition = importDefaultResultResult;
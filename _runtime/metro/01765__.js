// _runtime/metro/01765__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

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
  } catch (err) {}
}
let closure_6 = {
  code: "function pnpm_CurvedTransitionTs1(values){const{delayFunction,delay,withTiming,duration,easing,callback}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withTiming(values.targetOriginX,{duration:duration,easing:easing.easingX})),originY:delayFunction(delay,withTiming(values.targetOriginY,{duration:duration,easing:easing.easingY})),width:delayFunction(delay,withTiming(values.targetWidth,{duration:duration,easing:easing.easingWidth})),height:delayFunction(delay,withTiming(values.targetHeight,{duration:duration,easing:easing.easingHeight}))},callback:callback};}",
};
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
      delayFunction = delayFunction.getDelayFunction();
      const callbackV = delayFunction.callbackV;
      const delay = delayFunction.getDelay();
      let num = delayFunction.durationV;
      if (num == null) {
        num = 300;
      }
      let __closure = {
        easingX: tmp.easingXV,
        easingY: tmp.easingYV,
        easingWidth: tmp.easingWidthV,
        easingHeight: tmp.easingHeightV,
      };
      const fn = function n(originX) {
        obj = {
          initialValues: {
            originX: originX.currentOriginX,
            originY: originX.currentOriginY,
            width: originX.currentWidth,
            height: originX.currentHeight,
          },
          animations: null,
          callback: null,
        };
        const size = { originX: null, originY: null, width: null, height: null };
        let obj2 = delayFunction(1708);
        obj = { duration: num, easing: obj.easingX };
        size.originX = delayFunction(delay, obj2.withTiming(originX.targetOriginX, obj));
        obj = { duration: num, easing: obj.easingY };
        size.originY = delayFunction(delay, delayFunction(1708).withTiming(originX.targetOriginY, obj));
        const obj5 = delayFunction(1708);
        size.width = delayFunction(
          delay,
          delayFunction(1708).withTiming(originX.targetWidth, { duration: num, easing: obj.easingWidth }),
        );
        const obj1 = { duration: num, easing: obj.easingWidth };
        const obj7 = delayFunction(1708);
        obj2 = { duration: num, easing: obj.easingHeight };
        size.height = delayFunction(delay, delayFunction(1708).withTiming(originX.targetHeight, obj2));
        obj.animations = size;
        obj.callback = callbackV;
        return obj;
      };
      __closure = {
        delayFunction,
        delay,
        withTiming: CurvedTransition(1708).withTiming,
        duration: num,
        easing: __closure,
        callback: callbackV,
      };
      fn.__closure = __closure;
      fn.__workletHash = 8113645568730;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(CurvedTransition, fn(1706).BaseAnimationBuilder);
const entry = {
  key: "easingX",
  value: function easingX(easingXV) {
    this.easingXV = easingXV;
    return this;
  },
};
let items = [
  entry,
  {
    key: "easingY",
    value: function easingY(easingYV) {
      this.easingYV = easingYV;
      return this;
    },
  },
  {
    key: "easingWidth",
    value: function easingWidth(easingWidthV) {
      this.easingWidthV = easingWidthV;
      return this;
    },
  },
  {
    key: "easingHeight",
    value: function easingHeight(easingHeightV) {
      this.easingHeightV = easingHeightV;
      return this;
    },
  },
];
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    return CurvedTransition();
  },
};
let items1 = [
  entry1,
  {
    key: "easingX",
    value: function easingX(arg0) {
      const instance = this.createInstance();
      return instance.easingX(arg0);
    },
  },
  {
    key: "easingY",
    value: function easingY(arg0) {
      const instance = this.createInstance();
      return instance.easingY(arg0);
    },
  },
  {
    key: "easingWidth",
    value: function easingWidth(arg0) {
      const instance = this.createInstance();
      return instance.easingWidth(arg0);
    },
  },
  {
    key: "easingHeight",
    value: function easingHeight(arg0) {
      const instance = this.createInstance();
      return instance.easingHeight(arg0);
    },
  },
];
const importDefaultResultResult = _createClass(CurvedTransition, items, items1);
importDefaultResultResult.presetName = "CurvedTransition";

export const CurvedTransition = importDefaultResultResult;

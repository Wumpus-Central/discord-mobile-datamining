// _runtime/01772_CurvedTransition.js
import EasingNameSymbol from "01695_EasingNameSymbol.js";
import BaseAnimationBuilder from "01713_BaseAnimationBuilder.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import c3 from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

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
let closure_6 = {
  code: "function pnpm_CurvedTransitionTs1(values){const{delayFunction,delay,withTiming,duration,easing,callback}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withTiming(values.targetOriginX,{duration:duration,easing:easing.easingX})),originY:delayFunction(delay,withTiming(values.targetOriginY,{duration:duration,easing:easing.easingY})),width:delayFunction(delay,withTiming(values.targetWidth,{duration:duration,easing:easing.easingWidth})),height:delayFunction(delay,withTiming(values.targetHeight,{duration:duration,easing:easing.easingHeight}))},callback:callback};}",
};
class CurvedTransition {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, CurvedTransition);
    const items1 = [...items];
    let obj = _getPrototypeOf(CurvedTransition);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c3(self, constructResult);
    closure_0 = tmp3Result;
    const Easing = EasingNameSymbol.Easing;
    tmp3Result.easingXV = Easing.in(EasingNameSymbol.Easing.ease);
    const Easing2 = EasingNameSymbol.Easing;
    tmp3Result.easingYV = Easing2.out(EasingNameSymbol.Easing.ease);
    const Easing3 = EasingNameSymbol.Easing;
    tmp3Result.easingWidthV = Easing3.in(EasingNameSymbol.Easing.exp);
    const Easing4 = EasingNameSymbol.Easing;
    tmp3Result.easingHeightV = Easing4.out(EasingNameSymbol.Easing.exp);
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const callbackV = closure_0.callbackV;
      const delay = closure_0.getDelay();
      let num = closure_0.durationV;
      if (num == null) {
        num = 300;
      }
      let obj = {
        easingX: closure_0.easingXV,
        easingY: closure_0.easingYV,
        easingWidth: closure_0.easingWidthV,
        easingHeight: closure_0.easingHeightV,
      };
      const fn = function n(originX) {
        let obj2;
        let obj3;
        let obj4;
        let obj5;
        let obj6;
        let obj7;
        let obj8;
        let obj9;
        obj = {
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
          originX: delayFunction(delay, obj3.withTiming(originX.targetOriginX, obj2)),
          originY: delayFunction(delay, obj5.withTiming(originX.targetOriginY, obj4)),
          width: delayFunction(delay, obj7.withTiming(originX.targetWidth, obj6)),
          height: delayFunction(delay, obj9.withTiming(originX.targetHeight, obj8)),
        };
        obj2 = { duration: num, easing: obj.easingX };
        obj3 = closure_2_0(closure_2_1[6]);
        obj4 = { duration: num, easing: obj.easingY };
        obj5 = closure_2_0(closure_2_1[6]);
        obj6 = { duration: num, easing: obj.easingWidth };
        obj7 = closure_2_0(closure_2_1[6]);
        obj8 = { duration: num, easing: obj.easingHeight };
        obj9 = closure_2_0(closure_2_1[6]);
        return obj;
      };
      let obj2 = {
        delayFunction,
        delay,
        withTiming: CurvedTransition(closure_2_1[6]).withTiming,
        duration: num,
        easing: obj,
        callback: callbackV,
      };
      fn.__closure = obj2;
      fn.__workletHash = 8113645568730;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(CurvedTransition, BaseAnimationBuilder.BaseAnimationBuilder);
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
    const tmp = CurvedTransition();
    return tmp;
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
const CurvedTransition_export = importDefaultResultResult;

export { CurvedTransition_export as CurvedTransition };

// === Module 1951: FadingTransition ===

// Module 1951 (FadingTransition)
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const FadingTransition = fn;
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
let closure_6 = { code: "(function pnpm_FadingTransitionTs1(values){let[delayFunction,delay,withSequence,withTiming,halfDuration,withDelay,callback]=this.__closure;return{initialValues:{opacity:1,originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{opacity:delayFunction(delay,withSequence(withTiming(0,{duration:halfDuration}),withTiming(1,{duration:halfDuration}))),originX:withDelay(delay+halfDuration,withTiming(values.targetOriginX,{duration:0})),originY:withDelay(delay+halfDuration,withTiming(values.targetOriginY,{duration:0})),width:withDelay(delay+halfDuration,withTiming(values.targetWidth,{duration:0})),height:withDelay(delay+halfDuration,withTiming(values.targetHeight,{duration:0}))},callback:callback};})" };
class FadingTransition {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, FadingTransition);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(FadingTransition);
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
    tmp3Result.build = () => {
      const delayFunction = _undefined.getDelayFunction();
      ({ callbackV, durationV } = _undefined);
      const delay = _undefined.getDelay();
      if (durationV == null) {
        durationV = 500;
      }
      items = [callback, delayFunction, delay, , , , , ];
      const result = durationV / 2;
      items[3] = FadingTransition(1842).withSequence;
      items[4] = FadingTransition(1842).withTiming;
      items[5] = result;
      items[6] = FadingTransition(1842).withDelay;
      items[7] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
      function pnpm_FadingTransitionTs1(originX) {
        const obj = { initialValues: { opacity: 1, originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight }, animations: null, callback: null };
        const size = { opacity: _undefined(c1, _undefined2(_undefined3(0, { duration }), _undefined3(1, { duration }))), originX: null, originY: null, width: null, height: null };
        const sum = c1 + duration;
        size.originX = _undefined4(sum, _undefined3(originX.targetOriginX, { duration: 0 }));
        const sum1 = c1 + duration;
        size.originY = _undefined4(sum1, _undefined3(originX.targetOriginY, { duration: 0 }));
        const sum2 = c1 + duration;
        size.width = _undefined4(sum2, _undefined3(originX.targetWidth, { duration: 0 }));
        const sum3 = c1 + duration;
        size.height = _undefined4(sum3, _undefined3(originX.targetHeight, { duration: 0 }));
        obj.animations = size;
        obj.callback = callback;
        return obj;
      }
      const items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
      pnpm_FadingTransitionTs1.__closure = items1;
      pnpm_FadingTransitionTs1.__workletHash = 998771338102;
      pnpm_FadingTransitionTs1.__initData = tmp4;
      return pnpm_FadingTransitionTs1;
    };
    return tmp3Result;
  }
}
_inherits(FadingTransition, fn(1875).BaseAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    return FadingTransition();
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(FadingTransition, null, items);
importDefaultResultResult.presetName = "FadingTransition";

export const FadingTransition = importDefaultResultResult;
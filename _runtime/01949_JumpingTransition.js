// === Module 1949: JumpingTransition ===

// Module 1949 (JumpingTransition)
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const JumpingTransition = fn;
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
let closure_6 = { code: "(function pnpm_JumpingTransitionTs1(values){let[delayFunction,delay,withTiming,config,withSequence,halfDuration,Easing,callback]=this.__closure;const d=Math.max(Math.abs(values.targetOriginX-values.currentOriginX),Math.abs(values.targetOriginY-values.currentOriginY));return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withTiming(values.targetOriginX,config)),originY:delayFunction(delay,withSequence(withTiming(Math.min(values.targetOriginY,values.currentOriginY)-d,{duration:halfDuration,easing:Easing.out(Easing.exp)}),withTiming(values.targetOriginY,{...config,duration:halfDuration,easing:Easing.bounce}))),width:delayFunction(delay,withTiming(values.targetWidth,config)),height:delayFunction(delay,withTiming(values.targetHeight,config))},callback:callback};})" };
class JumpingTransition {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, JumpingTransition);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(JumpingTransition);
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
        durationV = 300;
      }
      items = [_undefined4, delayFunction, delay, , , , , , ];
      const result = durationV / 2;
      items[3] = JumpingTransition(1839).withTiming;
      items[4] = { duration: durationV };
      items[5] = JumpingTransition(1839).withSequence;
      items[6] = result;
      items[7] = JumpingTransition(1861).Easing;
      items[8] = callbackV;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
      function pnpm_JumpingTransitionTs1(originX) {
        const absolute = Math.abs(originX.targetOriginX - originX.currentOriginX);
        const obj = { initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight }, animations: null, callback: null };
        const size = { originX: null, originY: null, width: null, height: null };
        const bound = Math.max(absolute, Math.abs(originX.targetOriginY - originX.currentOriginY));
        size.originX = _undefined(c1, _undefined2(originX.targetOriginX, c3));
        const obj2 = { duration, easing: null };
        const diff = Math.min(originX.targetOriginY, originX.currentOriginY) - bound;
        obj2.easing = _undefined4.out(_undefined4.exp);
        const obj3 = {};
        const merged = Object.assign(c3);
        obj3.duration = duration;
        obj3.easing = _undefined4.bounce;
        size.originY = _undefined(c1, _undefined3(_undefined2(diff, obj2), _undefined2(originX.targetOriginY, obj3)));
        size.width = _undefined(c1, _undefined2(originX.targetWidth, c3));
        size.height = _undefined(c1, _undefined2(originX.targetHeight, c3));
        obj.animations = size;
        obj.callback = callback;
        return obj;
      }
      const items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
      pnpm_JumpingTransitionTs1.__closure = items1;
      pnpm_JumpingTransitionTs1.__workletHash = 14689950966864;
      pnpm_JumpingTransitionTs1.__initData = tmp4;
      return pnpm_JumpingTransitionTs1;
    };
    return tmp3Result;
  }
}
_inherits(JumpingTransition, fn(1872).BaseAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    return JumpingTransition();
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(JumpingTransition, null, items);
importDefaultResultResult.presetName = "JumpingTransition";

export const JumpingTransition = importDefaultResultResult;
// === Module 1775: ? ===

// Module 1775
import BaseAnimationBuilder from "BaseAnimationBuilder" /* 1713 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let size;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_6 = { code: "function pnpm_JumpingTransitionTs1(values){const{delayFunction,delay,withTiming,config,withSequence,halfDuration,Easing,callback}=this.__closure;const d=Math.max(Math.abs(values.targetOriginX-values.currentOriginX),Math.abs(values.targetOriginY-values.currentOriginY));return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withTiming(values.targetOriginX,config)),originY:delayFunction(delay,withSequence(withTiming(Math.min(values.targetOriginY,values.currentOriginY)-d,{duration:halfDuration,easing:Easing.out(Easing.exp)}),withTiming(values.targetOriginY,{...config,duration:halfDuration,easing:Easing.bounce}))),width:delayFunction(delay,withTiming(values.targetWidth,config)),height:delayFunction(delay,withTiming(values.targetHeight,config))},callback:callback};}" };
class JumpingTransition {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, JumpingTransition);
    const items1 = [...items];
    let obj = _getPrototypeOf(JumpingTransition);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      const delayFunction = closure_0.getDelayFunction();
      const callbackV = closure_0.callbackV;
      const delay = closure_0.getDelay();
      let num = closure_0.durationV;
      if (num == null) {
        num = 300;
      }
      const result = num / 2;
      let obj = { duration: num };
      const fn = function n(originX) {
        let Easing;
        let obj3;
        let obj4;
        let obj6;
        let obj7;
        let targetOriginY;
        let withSequence;
        let withTiming2;
        let withTimingResult;
        const absolute = Math.abs(originX.targetOriginX - originX.currentOriginX);
        obj = { initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight }, animations: size, callback: callbackV };
        size = { originX: delayFunction(delay, obj3.withTiming(originX.targetOriginX, obj)), originY: delayFunction(delay, withSequence(withTimingResult, withTiming2(targetOriginY, obj4))), width: delayFunction(delay, obj6.withTiming(originX.targetWidth, obj)), height: delayFunction(delay, obj7.withTiming(originX.targetHeight, obj)) };
        const maxResult = max(absolute, Math.abs(originX.targetOriginY - originX.currentOriginY));
        obj3 = closure_2_0(closure_2_1[5]);
        withSequence = closure_2_0(closure_2_1[5]).withSequence;
        closure_2_0(closure_2_1[5]);
        const withTiming = closure_2_0(closure_2_1[5]).withTiming;
        const obj2 = { duration: result, easing: Easing.out(closure_2_0(closure_2_1[6]).Easing.exp) };
        closure_2_0(closure_2_1[5]);
        const diff = Math.min(originX.targetOriginY, originX.currentOriginY) - maxResult;
        Easing = closure_2_0(closure_2_1[6]).Easing;
        withTimingResult = withTiming(diff, obj2);
        obj4 = { duration: result, easing: closure_2_0(closure_2_1[6]).Easing.bounce };
        withTiming2 = closure_2_0(closure_2_1[5]).withTiming;
        targetOriginY = originX.targetOriginY;
        closure_2_0(closure_2_1[5]);
        const merged = Object.assign(obj);
        obj6 = closure_2_0(closure_2_1[5]);
        obj7 = closure_2_0(closure_2_1[5]);
        return obj;
      };
      let obj2 = { delayFunction, delay, withTiming: JumpingTransition(closure_2_1[5]).withTiming, config: obj, withSequence: JumpingTransition(closure_2_1[5]).withSequence, halfDuration: result, Easing: JumpingTransition(closure_2_1[6]).Easing, callback: callbackV };
      fn.__closure = obj2;
      fn.__workletHash = 11549153259849;
      fn.__initData = __initData;
      return fn;
    };
    return tmp3Result;
  }
}
_inherits(JumpingTransition, BaseAnimationBuilder.BaseAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = JumpingTransition();
    return tmp;
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(JumpingTransition, null, items);
importDefaultResultResult.presetName = "JumpingTransition";
const JumpingTransition_export = importDefaultResultResult;

export { JumpingTransition_export as JumpingTransition };
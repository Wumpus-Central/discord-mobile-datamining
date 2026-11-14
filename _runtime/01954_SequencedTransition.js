// _runtime/01954_SequencedTransition.js
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import c3 from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

const SequencedTransition = fn;
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
  code: "(function pnpm_SequencedTransitionTs1(values){let[delayFunction,delay,withSequence,withTiming,reverse,config,callback]=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,withSequence(withTiming(reverse?values.currentOriginX:values.targetOriginX,config),withTiming(values.targetOriginX,config))),originY:delayFunction(delay,withSequence(withTiming(reverse?values.targetOriginY:values.currentOriginY,config),withTiming(values.targetOriginY,config))),width:delayFunction(delay,withSequence(withTiming(reverse?values.currentWidth:values.targetWidth,config),withTiming(values.targetWidth,config))),height:delayFunction(delay,withSequence(withTiming(reverse?values.targetHeight:values.currentHeight,config),withTiming(values.targetHeight,config)))},callback:callback};})",
};
class SequencedTransition {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, SequencedTransition);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(SequencedTransition);
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
    tmp3Result.reversed = false;
    tmp3Result.build = () => {
      const delayFunction = _undefined.getDelayFunction();
      ({ callbackV, durationV } = _undefined);
      const delay = _undefined.getDelay();
      if (durationV == null) {
        durationV = 500;
      }
      items = [
        callback,
        delayFunction,
        delay,
        SequencedTransition(1842).withSequence,
        SequencedTransition(1842).withTiming,
        _undefined.reversed,
        { duration: durationV / 2 },
        callbackV,
      ];
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
      function pnpm_SequencedTransitionTs1(originX) {
        const obj = {
          initialValues: {
            originX: originX.currentOriginX,
            originY: originX.currentOriginY,
            width: originX.currentWidth,
            height: originX.currentHeight,
          },
          animations: null,
          callback: null,
        };
        const size = {
          originX: _undefined(
            c1,
            _undefined2(
              _undefined3(c4 ? originX.currentOriginX : originX.targetOriginX, c5),
              _undefined3(originX.targetOriginX, c5),
            ),
          ),
          originY: null,
          width: null,
          height: null,
        };
        const tmp4Result = _undefined3(c4 ? originX.currentOriginX : originX.targetOriginX, c5);
        size.originY = _undefined(
          c1,
          _undefined2(
            _undefined3(c4 ? originX.targetOriginY : originX.currentOriginY, c5),
            _undefined3(originX.targetOriginY, c5),
          ),
        );
        const tmp4Result4 = _undefined3(c4 ? originX.targetOriginY : originX.currentOriginY, c5);
        size.width = _undefined(
          c1,
          _undefined2(
            _undefined3(c4 ? originX.currentWidth : originX.targetWidth, c5),
            _undefined3(originX.targetWidth, c5),
          ),
        );
        const tmp4Result5 = _undefined3(c4 ? originX.currentWidth : originX.targetWidth, c5);
        size.height = _undefined(
          c1,
          _undefined2(
            _undefined3(c4 ? originX.targetHeight : originX.currentHeight, c5),
            _undefined3(originX.targetHeight, c5),
          ),
        );
        obj.animations = size;
        obj.callback = callback;
        return obj;
      }
      const items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
      pnpm_SequencedTransitionTs1.__closure = items1;
      pnpm_SequencedTransitionTs1.__workletHash = 11737009723617;
      pnpm_SequencedTransitionTs1.__initData = tmp4;
      return pnpm_SequencedTransitionTs1;
    };
    return tmp3Result;
  }
}
_inherits(SequencedTransition, fn(1875).BaseAnimationBuilder);
const entry = {
  key: "reverse",
  value: function reverse() {
    this.reversed = !this.reversed;
    return this;
  },
};
let items = [entry];
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    return SequencedTransition();
  },
};
let items1 = [
  entry1,
  {
    key: "reverse",
    value: function reverse() {
      const instance = SequencedTransition.createInstance();
      return instance.reverse();
    },
  },
];
const importDefaultResultResult = _createClass(SequencedTransition, items, items1);
importDefaultResultResult.presetName = "SequencedTransition";

export const SequencedTransition = importDefaultResultResult;

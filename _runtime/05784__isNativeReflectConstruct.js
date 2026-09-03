// === Module 5784: _isNativeReflectConstruct ===

// Module 5784 (_isNativeReflectConstruct)
import _inheritsDefault from "_inherits" /* 98 */;
import PinchGesture from "_classCallCheck" /* 41 */;
import closure_1 from "_possibleConstructorReturn" /* 93 */;
import closure_2 from "_getPrototypeOf" /* 95 */;
import closure_3 from "_get" /* 96 */;
import importDefaultResult from "_createClass" /* 42 */;

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
function changeEventCalculator(scale, scale2) {
  if (undefined === scale2) {
    let obj = { scaleChange: null };
    obj[0] = scale.scale;
  } else {
    obj = { scaleChange: null };
    obj[0] = scale.scale / scale2.scale;
  }
  obj = {};
  const merged = Object.assign(scale);
  const merged1 = Object.assign(obj);
  return obj;
}
changeEventCalculator.__closure = {};
changeEventCalculator.__workletHash = 9876979738005;
changeEventCalculator.__initData = { code: "function changeEventCalculator_Pnpm_pinchGestureTs1(current,previous){let changePayload;if(previous===undefined){changePayload={scaleChange:current.scale};}else{changePayload={scaleChange:current.scale/previous.scale};}return{...current,...changePayload};}" };
class PinchGesture {
  constructor() {
    self = this;
    tmp = PinchGesture(this, PinchGesture);
    tmp2 = closure_2;
    obj = closure_2(PinchGesture);
    tmp3 = closure_1;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.handlerName = "PinchGestureHandler";
    return tmp3Result;
  }
}
_inheritsDefault(PinchGesture, require("_isNativeReflectConstruct").ContinousBaseGesture);
let items = [
  {
    key: "onChange",
    value: function onChange(arg0) {
      this.handlers.changeEventCalculator = changeEventCalculator;
      const self = this;
      let fn;
      fn = callback2(callback(self.prototype), "onChange", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      return fn(items);
    }
  }
];

export const PinchGesture = importDefaultResult(PinchGesture, items);
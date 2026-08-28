// === Module 5741: _isNativeReflectConstruct ===

// Module 5741 (_isNativeReflectConstruct)
import _inheritsDefault from "_inherits" /* 98 */;
import RotationGesture from "_classCallCheck" /* 41 */;
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
function changeEventCalculator(rotation, rotation2) {
  if (undefined === rotation2) {
    let obj = { rotationChange: null };
    obj[0] = rotation.rotation;
  } else {
    obj = { rotationChange: null };
    obj[0] = rotation.rotation - rotation2.rotation;
  }
  obj = {};
  const merged = Object.assign(rotation);
  const merged1 = Object.assign(obj);
  return obj;
}
changeEventCalculator.__closure = {};
changeEventCalculator.__workletHash = 11988645380499;
changeEventCalculator.__initData = { code: "function changeEventCalculator_Pnpm_rotationGestureTs1(current,previous){let changePayload;if(previous===undefined){changePayload={rotationChange:current.rotation};}else{changePayload={rotationChange:current.rotation-previous.rotation};}return{...current,...changePayload};}" };
class RotationGesture {
  constructor() {
    self = this;
    tmp = RotationGesture(this, RotationGesture);
    tmp2 = closure_2;
    obj = closure_2(RotationGesture);
    tmp3 = closure_1;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.handlerName = "RotationGestureHandler";
    return tmp3Result;
  }
}
_inheritsDefault(RotationGesture, require("_isNativeReflectConstruct").ContinousBaseGesture);
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

export const RotationGesture = importDefaultResult(RotationGesture, items);
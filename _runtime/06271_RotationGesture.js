// === Module 6271: RotationGesture ===

// Module 6271 (RotationGesture)
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 6168 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import map from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

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
function changeEventCalculator(rotation, rotation2) {
  let obj;
  if (undefined === rotation2) {
    obj = { rotationChange: rotation.rotation };
    const obj2 = { rotationChange: rotation.rotation };
  } else {
    obj = { rotationChange: rotation.rotation - rotation2.rotation };
  }
  const obj3 = {};
  const merged = Object.assign(rotation);
  const merged1 = Object.assign(obj);
  return obj3;
}
changeEventCalculator.__closure = {};
changeEventCalculator.__workletHash = 11988645380499;
changeEventCalculator.__initData = { code: "function changeEventCalculator_Pnpm_rotationGestureTs1(current,previous){let changePayload;if(previous===undefined){changePayload={rotationChange:current.rotation};}else{changePayload={rotationChange:current.rotation-previous.rotation};}return{...current,...changePayload};}" };
class RotationGesture {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, RotationGesture);
    const obj = _getPrototypeOf(RotationGesture);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = map(self, constructResult);
    tmp3Result.handlerName = "RotationGestureHandler";
    return tmp3Result;
  }
}
_inherits(RotationGesture, CALLBACK_TYPE.ContinousBaseGesture);
const entry = {
  key: "onChange",
  value: function onChange(arg0) {
    this.handlers.changeEventCalculator = changeEventCalculator;
    const self = this;
    let fn = _get(_getPrototypeOf(RotationGesture.prototype), "onChange", this);
    if (typeof fn === "function") {
      fn = (items) => fn.apply(self, items);
    }
    const items = [arg0];
    return fn(items);
  }
};
let items = [entry];
const RotationGesture_export = _createClass(RotationGesture, items);

export { RotationGesture_export as RotationGesture };
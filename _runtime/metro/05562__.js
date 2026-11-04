// _runtime/metro/05562__.js
import _possibleConstructorReturnDefault from "00093__possibleConstructorReturn.js";
import _classCallCheck_mod from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _get from "00096__get.js";
import _inherits from "../00098__inherits.js";

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
let _classCallCheck = _classCallCheck_mod;
_possibleConstructorReturnDefault;
let items = [
  {
    code: "(function changeEventCalculator_Pnpm_rotationGestureTs1(current,previous){let changePayload;if(previous===undefined){changePayload={rotationChange:current.rotation};}else{changePayload={rotationChange:current.rotation-previous.rotation};}return{...current,...changePayload};})",
  },
];
[tmp4] = items;
function changeEventCalculator(rotation, rotation2) {
  if (undefined === rotation2) {
    const obj2 = { rotationChange: rotation.rotation };
    let obj = obj2;
  } else {
    obj = { rotationChange: rotation.rotation - rotation2.rotation };
  }
  const merged = Object.assign(rotation);
  const merged1 = Object.assign(obj);
  return {};
}
changeEventCalculator.__workletHash = 6562048285106;
changeEventCalculator.__initData = tmp4;
class RotationGesture {
  constructor() {
    self = this;
    tmp = closure_0(this, RotationGesture);
    tmp2 = c2;
    obj = c2(RotationGesture);
    tmp3 = closure_1;
    if (closure_4()) {
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
_classCallCheck = RotationGesture;
_inherits(RotationGesture, fn(5448).ContinousBaseGesture);
const entry = {
  key: "onChange",
  value: function onChange(arg0) {
    this.handlers.changeEventCalculator = hasOwnProperty;
    const self = this;
    let fn = _get(_getPrototypeOf(_classCallCheck.prototype), "onChange", this);
    if (typeof fn === "function") {
      fn = (items) => fn.apply(self, items);
    }
    items = [arg0];
    return fn(items);
  },
};
const items1 = [entry];

export const RotationGesture = _createClass(RotationGesture, items1);

// _runtime/06270_PinchGesture.js
import CALLBACK_TYPE from "06168_CALLBACK_TYPE.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import map from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _get from "metro/00096__get.js";
import _inherits from "00098__inherits.js";

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
function changeEventCalculator(scale, scale2) {
  let obj;
  if (undefined === scale2) {
    obj = { scaleChange: scale.scale };
    const obj2 = { scaleChange: scale.scale };
  } else {
    obj = { scaleChange: scale.scale / scale2.scale };
  }
  const obj3 = {};
  const merged = Object.assign(scale);
  const merged1 = Object.assign(obj);
  return obj3;
}
changeEventCalculator.__closure = {};
changeEventCalculator.__workletHash = 9876979738005;
changeEventCalculator.__initData = {
  code: "function changeEventCalculator_Pnpm_pinchGestureTs1(current,previous){let changePayload;if(previous===undefined){changePayload={scaleChange:current.scale};}else{changePayload={scaleChange:current.scale/previous.scale};}return{...current,...changePayload};}",
};
class PinchGesture {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, PinchGesture);
    const obj = _getPrototypeOf(PinchGesture);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = map(self, constructResult);
    tmp3Result.handlerName = "PinchGestureHandler";
    return tmp3Result;
  }
}
_inherits(PinchGesture, CALLBACK_TYPE.ContinousBaseGesture);
const entry = {
  key: "onChange",
  value: function onChange(arg0) {
    this.handlers.changeEventCalculator = changeEventCalculator;
    const self = this;
    let fn = _get(_getPrototypeOf(PinchGesture.prototype), "onChange", this);
    if (typeof fn === "function") {
      fn = (items) => fn.apply(self, items);
    }
    const items = [arg0];
    return fn(items);
  },
};
let items = [entry];
const PinchGesture_export = _createClass(PinchGesture, items);

export { PinchGesture_export as PinchGesture };

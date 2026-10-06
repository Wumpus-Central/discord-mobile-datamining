// === Module 6270: PinchGesture ===

// Module 6270 (PinchGesture)
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
changeEventCalculator.__initData = { code: "function changeEventCalculator_Pnpm_pinchGestureTs1(current,previous){let changePayload;if(previous===undefined){changePayload={scaleChange:current.scale};}else{changePayload={scaleChange:current.scale/previous.scale};}return{...current,...changePayload};}" };
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
  }
};
let items = [entry];
const PinchGesture_export = _createClass(PinchGesture, items);

export { PinchGesture_export as PinchGesture };
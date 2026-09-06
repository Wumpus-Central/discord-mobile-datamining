// === Module 6778: ? ===

// Module 6778
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

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
_possibleConstructorReturnDefault;
function changeEventCalculator(scale, scale2) {
  if (undefined === scale2) {
    let obj = { scaleChange: scale.scale };
  } else {
    obj = { scaleChange: scale.scale / scale2.scale };
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
    tmp = closure_0(this, PinchGesture);
    tmp2 = c2;
    obj = c2(PinchGesture);
    tmp3 = closure_1;
    if (closure_4()) {
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
_classCallCheck = PinchGesture;
_inherits(PinchGesture, fn(6676).ContinousBaseGesture);
const entry = {
  key: "onChange",
  value: function onChange(arg0) {
    this.handlers.changeEventCalculator = hasOwnProperty;
    const self = this;
    let fn = _get(_getPrototypeOf(_classCallCheck.prototype), "onChange", this);
    if (typeof fn === "function") {
      fn = (items) => fn.apply(self, items);
    }
    const items = [arg0];
    return fn(items);
  }
};
let items = [entry];

export const PinchGesture = _createClass(PinchGesture, items);
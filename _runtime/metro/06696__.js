// === Module 6696: ? ===

// Module 6696
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
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
function changeEventCalculator(arg0, arg1) {
  if (undefined === arg1) {
    let obj = { changeX: null, changeY: null };
    ({ x: obj2.changeX, y: obj2.changeY } = arg0);
  } else {
    obj = { changeX: arg0.x - arg1.x, changeY: arg0.y - arg1.y };
  }
  obj = {};
  const merged = Object.assign(arg0);
  const merged1 = Object.assign(obj);
  return obj;
}
changeEventCalculator.__closure = {};
changeEventCalculator.__workletHash = 2074844346342;
changeEventCalculator.__initData = { code: "function changeEventCalculator_Pnpm_hoverGestureTs1(current,previous){let changePayload;if(previous===undefined){changePayload={changeX:current.x,changeY:current.y};}else{changePayload={changeX:current.x-previous.x,changeY:current.y-previous.y};}return{...current,...changePayload};}" };
class HoverGesture {
  constructor() {
    self = this;
    tmp = closure_0(this, HoverGesture);
    tmp2 = c2;
    obj = c2(HoverGesture);
    tmp3 = closure_1;
    if (closure_4()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.config = {};
    tmp3Result.handlerName = "HoverGestureHandler";
    return tmp3Result;
  }
}
_classCallCheck = HoverGesture;
_inherits(HoverGesture, fn(6676).ContinousBaseGesture);
const entry = {
  key: "effect",
  value: function effect(hoverEffect) {
    this.config.hoverEffect = hoverEffect;
    return this;
  }
};
let items = [
  entry,
  {
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
  }
];

export const HoverEffect = { NONE: 0, [0]: "NONE", LIFT: 1, [1]: "LIFT", HIGHLIGHT: 2, [2]: "HIGHLIGHT" };
export const hoverGestureHandlerProps = ["hoverEffect"];
export const HoverGesture = _createClass(HoverGesture, items);
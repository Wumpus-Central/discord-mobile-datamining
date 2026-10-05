// === Module 6181: HoverEffect ===

// Module 6181 (HoverEffect)
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 6161 */;
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
function changeEventCalculator(arg0, arg1) {
  let obj;
  if (undefined === arg1) {
    const obj3 = { changeX: null, changeY: null };
    ({ x: obj2.changeX, y: obj2.changeY } = arg0);
    obj = obj3;
  } else {
    obj = { changeX: arg0.x - arg1.x, changeY: arg0.y - arg1.y };
  }
  const obj5 = {};
  const merged = Object.assign(arg0);
  const merged1 = Object.assign(obj);
  return obj5;
}
changeEventCalculator.__closure = {};
changeEventCalculator.__workletHash = 2074844346342;
changeEventCalculator.__initData = { code: "function changeEventCalculator_Pnpm_hoverGestureTs1(current,previous){let changePayload;if(previous===undefined){changePayload={changeX:current.x,changeY:current.y};}else{changePayload={changeX:current.x-previous.x,changeY:current.y-previous.y};}return{...current,...changePayload};}" };
class HoverGesture {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, HoverGesture);
    const obj = _getPrototypeOf(HoverGesture);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = map(self, constructResult);
    tmp3Result.config = {};
    tmp3Result.handlerName = "HoverGestureHandler";
    return tmp3Result;
  }
}
_inherits(HoverGesture, CALLBACK_TYPE.ContinousBaseGesture);
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
      this.handlers.changeEventCalculator = changeEventCalculator;
      const self = this;
      let fn = _get(_getPrototypeOf(HoverGesture.prototype), "onChange", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      return fn(items);
    }
  }
];
const HoverGesture_export = _createClass(HoverGesture, items);

export const HoverEffect = { NONE: 0, [0]: "NONE", LIFT: 1, [1]: "LIFT", HIGHLIGHT: 2, [2]: "HIGHLIGHT" };
export const hoverGestureHandlerProps = ["hoverEffect"];
export { HoverGesture_export as HoverGesture };
// _runtime/metro/01754__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const CSSKeyframesRuleImpl = fn;
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
class CSSKeyframesRuleImpl {
  constructor(arg0, arg1) {
    self = this;
    tmp = c2(this, CSSKeyframesRuleImpl);
    items = [,];
    items[0] = global;
    items[1] = fn;
    tmp2 = closure_4;
    obj = closure_4(CSSKeyframesRuleImpl);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.normalizedKeyframesCache_ = {};
    return tmp3Result;
  }
}
_inherits(CSSKeyframesRuleImpl, fn(1784).CSSKeyframesRuleBase);
const entry = {
  key: "getNormalizedKeyframesConfig",
  value: function getNormalizedKeyframesConfig(compoundComponentName) {
    const self = this;
    const normalizedKeyframesCache_ = this.normalizedKeyframesCache_;
    if (normalizedKeyframesCache_[compoundComponentName] == null) {
      normalizedKeyframesCache_[compoundComponentName] = CSSKeyframesRuleImpl(1755).normalizeAnimationKeyframes(
        self.cssRules,
        compoundComponentName,
      );
      const obj = CSSKeyframesRuleImpl(1755);
    }
    return self.normalizedKeyframesCache_[compoundComponentName];
  },
};
let items = [entry];

export default _createClass(CSSKeyframesRuleImpl, items);

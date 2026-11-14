// === Module 1757: ? ===

// Module 1757
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
  } catch (err) {
  }
}
class CSSKeyframesRuleImpl {
  constructor(arg0, arg1) {
    self = this;
    tmp = c2(this, CSSKeyframesRuleImpl);
    items = [, ];
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
_inherits(CSSKeyframesRuleImpl, fn(1787).CSSKeyframesRuleBase);
const entry = {
  key: "getNormalizedKeyframesConfig",
  value: function getNormalizedKeyframesConfig(compoundComponentName) {
    const self = this;
    const normalizedKeyframesCache_ = this.normalizedKeyframesCache_;
    if (normalizedKeyframesCache_[compoundComponentName] == null) {
      normalizedKeyframesCache_[compoundComponentName] = CSSKeyframesRuleImpl(1758).normalizeAnimationKeyframes(self.cssRules, compoundComponentName);
      const obj = CSSKeyframesRuleImpl(1758);
    }
    return self.normalizedKeyframesCache_[compoundComponentName];
  }
};
let items = [entry];

export default _createClass(CSSKeyframesRuleImpl, items);
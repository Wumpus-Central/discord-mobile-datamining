// === Module 1786: CSSKeyframesRuleBase ===

// Module 1786 (CSSKeyframesRuleBase)
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const CSSKeyframesRuleBase = arg1;
class CSSKeyframesRuleBase {
  constructor(arg0, arg1) {
    self = this;
    json = arg1;
    obj = CSSKeyframesRuleBase;
    tmp2 = c2(this, CSSKeyframesRuleBase);
    this.cssRules_ = global;
    if (arg1 == null) {
      tmp3 = globalThis;
      _JSON = JSON;
      json = JSON.stringify(global);
    }
    self.cssText_ = json;
    self.length_ = Object.keys(global).length;
    self.name_ = obj.generateNextKeyframeName();
    return;
  }
}
const items = [
  {
    key: "cssRules",
    get() {
      return this.cssRules_;
    }
  },
  {
    key: "cssText",
    get() {
      return this.cssText_;
    }
  },
  {
    key: "length",
    get() {
      return this.length_;
    }
  },
  {
    key: "name",
    get() {
      return this.name_;
    }
  }
];
const entry = {
  key: "generateNextKeyframeName",
  value: function generateNextKeyframeName() {
    CSSKeyframesRuleBase.currentAnimationID = +CSSKeyframesRuleBase.currentAnimationID + 1;
    return "" + CSSKeyframesRuleBase(1761).ANIMATION_NAME_PREFIX + +CSSKeyframesRuleBase.currentAnimationID;
  }
};
const items1 = [entry];
const tmp2 = _createClassDefault(CSSKeyframesRuleBase, items, items1);
tmp2.currentAnimationID = 0;

export default tmp2;
// _runtime/01661_CSSKeyframesRegistry.js
import _createClassDefault from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

const CSSKeyframesRegistry = arg1;
class CSSKeyframesRegistry {
  constructor() {
    tmp = c2(this, CSSKeyframesRegistry);
    map = new Map();
    this.cssTextToNames_ = map;
    map1 = new Map();
    this.nameToKeyframes_ = map1;
    return;
  }
}
const entry = {
  key: "get",
  value: function get(arg0) {
    const self = this;
    const nameToKeyframes_ = this.nameToKeyframes_;
    value = nameToKeyframes_.get(arg0);
    if (value) {
      return value.keyframesRule;
    } else {
      const cssTextToNames_ = self.cssTextToNames_;
      const value4 = cssTextToNames_.get(arg0);
      let value5;
      if (value4 != null) {
        value5 = value4.values().next().value;
        const iter = value4.values();
      }
      let tmp4;
      if (value5) {
        const nameToKeyframes_2 = self.nameToKeyframes_;
        const value6 = nameToKeyframes_2.get(value5);
        let keyframesRule;
        if (value6 != null) {
          keyframesRule = value6.keyframesRule;
        }
        tmp4 = keyframesRule;
      }
      return tmp4;
    }
  },
};
let items = [
  entry,
  {
    key: "add",
    value: function add(name, arg1, compoundComponentName) {
      const self = this;
      const nameToKeyframes_ = this.nameToKeyframes_;
      value = nameToKeyframes_.get(name.name);
      let tmp2;
      if (value != null) {
        tmp2 = value.usedBy[compoundComponentName];
      }
      if (tmp2) {
        tmp2.add(arg1);
      } else {
        if (value) {
          const _Set2 = Set;
          items = [arg1];
          const set = new Set(items);
          value.usedBy[compoundComponentName] = set;
        } else {
          const nameToKeyframes_2 = self.nameToKeyframes_;
          const obj = { keyframesRule: name, usedBy: null };
          const obj2 = {};
          const _Set = Set;
          const items1 = [arg1];
          const set1 = new Set(items1);
          obj2[compoundComponentName] = set1;
          obj.usedBy = obj2;
          const result = nameToKeyframes_2.set(name.name, obj);
        }
        const cssTextToNames_ = self.cssTextToNames_;
        if (!cssTextToNames_.has(name.cssText)) {
          const cssTextToNames_2 = self.cssTextToNames_;
          const _Set3 = Set;
          const set2 = new Set();
          const result1 = cssTextToNames_2.set(name.cssText, set2);
        }
        const cssTextToNames_3 = self.cssTextToNames_;
        const value2 = cssTextToNames_3.get(name.cssText);
        if (value2 != null) {
          value2.add(name.name);
        }
        const normalizedKeyframesConfig = name.getNormalizedKeyframesConfig(compoundComponentName);
        CSSKeyframesRegistry(1662).registerCSSKeyframes(name.name, compoundComponentName, normalizedKeyframesConfig);
        const obj4 = CSSKeyframesRegistry(1662);
      }
    },
  },
  {
    key: "remove",
    value: function remove(arg0, arg1, arg2) {
      const self = this;
      const nameToKeyframes_ = this.nameToKeyframes_;
      value = nameToKeyframes_.get(arg0);
      if (value) {
        value.usedBy[arg2].delete(arg1);
        if (0 === value.usedBy[arg2].size) {
          const usedBy = value.usedBy;
          delete tmp[tmp2];
          const result = CSSKeyframesRegistry(1662).unregisterCSSKeyframes(arg0, arg2);
          const obj2 = CSSKeyframesRegistry(1662);
        }
        const _Object = Object;
        if (0 === Object.keys(value.usedBy).length) {
          const nameToKeyframes_2 = self.nameToKeyframes_;
          nameToKeyframes_2.delete(arg0);
          const cssTextToNames_ = self.cssTextToNames_;
          const value2 = cssTextToNames_.get(value.keyframesRule.cssText);
          if (value2) {
            value2.delete(arg0);
            if (0 === value2.size) {
              const cssTextToNames_2 = self.cssTextToNames_;
              cssTextToNames_2.delete(value.keyframesRule.cssText);
            }
          }
        }
      }
    },
  },
  {
    key: "clear",
    value: function clear() {
      const nameToKeyframes_ = this.nameToKeyframes_;
      nameToKeyframes_.clear();
      const cssTextToNames_ = this.cssTextToNames_;
      cssTextToNames_.clear();
    },
  },
];

export default new _createClassDefault(CSSKeyframesRegistry, items)();

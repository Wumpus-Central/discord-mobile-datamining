// _runtime/01657_subscribersFor.js
import _createClassDefault from "metro/00042__createClass.js";
import _classCallCheck_mod from "metro/00041__classCallCheck.js";

function subscribersFor(tag, subscribersByTag, retiringByTag) {
  value = subscribersByTag.get(tag);
  const value2 = retiringByTag.get(tag);
  let tmp3 = value;
  if (value2) {
    let set = value2;
    if (value) {
      const _Set = Set;
      items = [];
      HermesBuiltin.arraySpread(value2, HermesBuiltin.arraySpread(value, 0));
      set = new Set(items);
    }
    tmp3 = set;
  }
  return tmp3;
}
let _classCallCheck = _classCallCheck_mod;
class CSSCallbacksRegistry {
  constructor() {
    tmp = closure_0(this, CSSCallbacksRegistry);
    map = new Map();
    this.subscribersByTag = map;
    map1 = new Map();
    this.retiringByTag = map1;
    return;
  }
}
_classCallCheck = CSSCallbacksRegistry;
const entry = {
  key: "register",
  value: function register(arg0, arg1) {
    const retiringByTag = this.retiringByTag;
    value = retiringByTag.get(arg0);
    if (value != null) {
      value.delete(arg1);
    }
    const subscribersByTag = this.subscribersByTag;
    const value2 = subscribersByTag.get(arg0);
    if (value2) {
      value2.add(arg1);
    } else {
      const _Set = Set;
      items = [arg1];
      const set = new Set(items);
      const result = subscribersByTag.set(arg0, set);
    }
  },
};
let items = [
  entry,
  {
    key: "unregister",
    value: function unregister(arg0, arg1) {
      const subscribersByTag = this.subscribersByTag;
      value = subscribersByTag.get(arg0);
      if (value) {
        value.delete(arg1);
        if (0 === value.size) {
          const subscribersByTag2 = this.subscribersByTag;
          subscribersByTag2.delete(arg0);
        }
      }
    },
  },
  {
    key: "retire",
    value: function retire(arg0, arg1) {
      this.unregister(arg0, arg1);
      const retiringByTag = this.retiringByTag;
      value = retiringByTag.get(arg0);
      if (value) {
        value.add(arg1);
      } else {
        const _Set = Set;
        items = [arg1];
        const set = new Set(items);
        const result = retiringByTag.set(arg0, set);
      }
    },
  },
  {
    key: "dispatch",
    value: function dispatch(arg0) {
      this.retiringByTag = new Map();
      const iter = arg0[Symbol.iterator]();
      const nextResult = iter.next();
      if (iter !== undefined) {
        const tmp6 = subscribersFor(nextResult.tag, this.subscribersByTag, this.retiringByTag);
        if (tmp6) {
          const iter2 = tmp6[Symbol.iterator]();
          const nextResult1 = iter2.next();
          if (iter2 !== undefined) {
            try {
              obj.handleCSSEvent(tmp4);
            } catch (tmp16) {
              const _ErrorUtils = tmp.globalThis.ErrorUtils;
              _ErrorUtils.reportFatalError(tmp16);
            }
            obj = nextResult1;
          }
        }
        tmp4 = nextResult;
      }
      const map = new Map();
    },
  },
  {
    key: "clear",
    value: function clear() {
      const subscribersByTag = this.subscribersByTag;
      subscribersByTag.clear();
      const retiringByTag = this.retiringByTag;
      retiringByTag.clear();
    },
  },
];

export default new _createClassDefault(CSSCallbacksRegistry, items)();

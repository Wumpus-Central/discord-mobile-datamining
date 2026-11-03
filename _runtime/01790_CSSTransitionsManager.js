// _runtime/01790_CSSTransitionsManager.js
import _createClassDefault from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

const CSSTransitionsManager = arg1;
class CSSTransitionsManager {
  constructor(arg0, arg1) {
    tmp = c2(this, CSSTransitionsManager);
    this.prevProps = null;
    set = new Set();
    this.propsWithTransitions = set;
    this.hasTransition = false;
    this.appliedEventMask = 0;
    this.viewTag = arg1;
    this.shadowNodeWrapper = global;
    return;
  }
}
const entry = {
  key: "update",
  value: function update(prevTransitionProperties, arg1) {
    let num = arg2;
    if (arg2 === undefined) {
      num = 0;
    }
    let result = prevTransitionProperties;
    if (prevTransitionProperties) {
      result = CSSTransitionsManager(1755).normalizeCSSTransitionProperties(prevTransitionProperties);
      const obj = CSSTransitionsManager(1755);
    }
    let tmp4 = arg1;
    let obj2 = arg1;
    if (arg1 == null) {
      obj2 = {};
    }
    const self = this;
    const prevProps = this.prevProps;
    if (tmp4 == null) {
      tmp4 = null;
    }
    self.prevProps = tmp4;
    if (prevProps) {
      if (result) {
        const result1 = self.processTransitionConfig(prevProps, obj2, result);
        const _Object = Object;
        if (Object.keys(result1).length) {
          self.appliedEventMask = num;
          CSSTransitionsManager(1662).runCSSTransition(self.shadowNodeWrapper, result1, num);
          self.hasTransition = true;
          const obj4 = CSSTransitionsManager(1662);
        } else {
          if (tmp8) {
            self.appliedEventMask = num;
            CSSTransitionsManager(1662).runCSSTransition(self.shadowNodeWrapper, {}, num);
            const obj3 = CSSTransitionsManager(1662);
          }
          tmp8 = self.hasTransition && num !== self.appliedEventMask;
        }
        return false;
      }
    }
    let flag = self.hasTransition;
    if (flag) {
      self.detach();
      flag = true;
    }
    return flag;
  },
};
let items = [
  entry,
  {
    key: "unmountCleanup",
    value: function unmountCleanup() {},
  },
  {
    key: "detach",
    value: function detach() {
      const result = CSSTransitionsManager(1662).unregisterCSSTransition(this.viewTag);
      const propsWithTransitions = this.propsWithTransitions;
      propsWithTransitions.clear();
      this.hasTransition = false;
      this.appliedEventMask = 0;
    },
  },
  {
    key: "processTransitionConfig",
    value: function processTransitionConfig(prevProps, obj, specificProperties) {
      const self = this;
      closure_2 = obj;
      obj = {};
      specificProperties = specificProperties.specificProperties;
      function isAllowedProperty(key10014) {
        let hasItem = !specificProperties;
        if (specificProperties) {
          hasItem = specificProperties.has(key10014);
        }
        return hasItem;
      }
      function getPropertySettings(arg0) {}
      function triggerTransition(key10014) {
        if (typeof getPropertySettings === "function") {
          let all = specificProperties.settings[key10014];
          if (all == null) {
            all = specificProperties.settings.all;
          }
          obj = {};
          const merged = Object.assign(all);
          items = [prevProps[key10014], closure_2[key10014]];
          obj.value = items;
          tmp[key10014] = obj;
          const propsWithTransitions = self.propsWithTransitions;
          propsWithTransitions.add(key10014);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      for (const key10014 in arg1) {
        let isAllowedPropertyResult = isAllowedProperty(key10014);
        if (isAllowedPropertyResult) {
          let obj2 = CSSTransitionsManager(1758);
          isAllowedPropertyResult = !obj2.deepEqual(arg1[key10014], arg0[key10014]);
        }
        if (!isAllowedPropertyResult) {
          continue;
        } else {
          let triggerTransitionResult = triggerTransition(key10014);
          continue;
        }
        continue;
      }
      const iter = self.propsWithTransitions[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp6 = nextResult;
        if (!isAllowedProperty(nextResult)) {
          obj[tmp6] = null;
          let propsWithTransitions = self.propsWithTransitions;
          let deleteResult = propsWithTransitions.delete(tmp6);
        }
        continue;
      }
      for (const key10041 in arg0) {
        let isAllowedPropertyResult1 = isAllowedProperty(key10041);
        if (isAllowedPropertyResult1) {
          isAllowedPropertyResult1 = !(key10041 in arg1);
        }
        if (!isAllowedPropertyResult1) {
          continue;
        } else {
          let triggerTransitionResult1 = triggerTransition(key10041);
          continue;
        }
        continue;
      }
      return obj;
    },
  },
];

export default _createClassDefault(CSSTransitionsManager, items);

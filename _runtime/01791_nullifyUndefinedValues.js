// _runtime/01791_nullifyUndefinedValues.js
import _createClassDefault from "metro/00042__createClass.js";
import _slicedToArray from "metro/00032__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

const CSSPseudoStylesManager = arg1;
function nullifyUndefinedValues(buildResult) {
  for (const key10005 in arg0) {
    if (undefined !== arg0[key10005]) {
      continue;
    } else {
      arg0[key10005] = null;
      continue;
    }
    continue;
  }
}
function getPropertyTransitionSettings(nextResult, specificProperties) {
  let tmp = null;
  if (specificProperties) {
    if (!specificProperties.specificProperties) {
      let all = specificProperties.settings[nextResult];
      if (all == null) {
        all = specificProperties.settings.all;
      }
      if (all == null) {
        all = null;
      }
      let tmp3 = all;
    } else {
      specificProperties = specificProperties.specificProperties;
      tmp3 = null;
    }
    tmp = tmp3;
  }
  return tmp;
}
class CSSPseudoStylesManager {
  constructor(arg0, arg1, arg2, arg3) {
    tmp = closure_3(this, CSSPseudoStylesManager);
    this.prevPseudoStylesBySelector = null;
    this.prevTransitionProperties = null;
    this.isRegistered = false;
    this.shadowNodeWrapper = global;
    this.viewTag = arg1;
    this.propsBuilder = importDefault;
    this.componentName = importAll;
    return;
  }
}
const entry = {
  key: "update",
  value: function update(prevPseudoStylesBySelector, prevTransitionProperties) {
    const self = this;
    if (!obj.deepEqual(prevPseudoStylesBySelector, this.prevPseudoStylesBySelector)) {
      self.prevPseudoStylesBySelector = prevPseudoStylesBySelector;
      self.prevTransitionProperties = prevTransitionProperties;
      let isRegistered = self.isRegistered;
      if (prevPseudoStylesBySelector) {
        if (isRegistered) {
          isRegistered = (function hasRemovedNativeSelector(prevPseudoStylesBySelector, prevPseudoStylesBySelector) {
            if (prevPseudoStylesBySelector) {
              const _Set = Set;
              if (prevPseudoStylesBySelector) {
                const _Object = Object;
                let _Set1 = new _Set(Object.keys(prevPseudoStylesBySelector));
              } else {
                _Set1 = new _Set();
              }
              const _Object2 = Object;
              const keys = Object.keys(prevPseudoStylesBySelector);
              return keys.some((item) => {
                const NATIVE_PSEUDO_SELECTORS = CSSPseudoStylesManager(dependencyMap[5]).NATIVE_PSEUDO_SELECTORS;
                let hasItem = NATIVE_PSEUDO_SELECTORS.has(item);
                if (hasItem) {
                  hasItem = !_Set1.has(item);
                }
                return hasItem;
              });
            } else {
              return false;
            }
          })(self.prevPseudoStylesBySelector, prevPseudoStylesBySelector);
        }
        if (isRegistered) {
          self.detach();
        }
        let result = null;
        if (prevTransitionProperties) {
          result = CSSPseudoStylesManager(1755).normalizeCSSTransitionProperties(prevTransitionProperties);
          const tmp2Result = CSSPseudoStylesManager(1755);
        }
        const obj2 = {};
        let _Object = Object;
        const entries = Object.entries(prevPseudoStylesBySelector);
        const tmp15 = entries[Symbol.iterator]();
        while (tmp15 !== undefined) {
          let tmp20 = _slicedToArray(tmp17, 2);
          let defaultStyle = tmp20[1].defaultStyle;
          let NATIVE_PSEUDO_SELECTORS = CSSPseudoStylesManager(1761).NATIVE_PSEUDO_SELECTORS;
          if (NATIVE_PSEUDO_SELECTORS.has(tmp20[0])) {
            let _Object2 = Object;
            let merged = Object.assign(obj2, defaultStyle);
          }
          continue;
        }
        const propsBuilder = self.propsBuilder;
        const buildResult = propsBuilder.build(obj2, { includeUnprocessed: true });
        nullifyUndefinedValues(buildResult);
        items = [];
        const _Object3 = Object;
        const entries1 = Object.entries(prevPseudoStylesBySelector);
        for (const item10081 of entries1) {
          let tmp34 = _slicedToArray(item10081, 2);
          let first = tmp34[0];
          let selectorStyle = tmp34[1].selectorStyle;
          let tmp36 = first;
          let NATIVE_PSEUDO_SELECTORS2 = CSSPseudoStylesManager(1761).NATIVE_PSEUDO_SELECTORS;
          if (NATIVE_PSEUDO_SELECTORS2.has(first)) {
            let arr = items.push(self.buildPseudoStyleEntry(tmp36, selectorStyle, buildResult, result));
          }
          continue;
        }
        if (items.length > 0) {
          const obj3 = { defaultStyle: buildResult, selectors: items };
          CSSPseudoStylesManager(1662).registerPseudoStyles(self.shadowNodeWrapper, obj3);
          self.isRegistered = true;
          const obj5 = CSSPseudoStylesManager(1662);
        }
      } else if (isRegistered) {
        self.detach();
      }
    } else {
      CSSPseudoStylesManager(1758);
    }
    obj = CSSPseudoStylesManager(1758);
  },
};
let items = [
  entry,
  {
    key: "unmountCleanup",
    value: function unmountCleanup() {
      const self = this;
      if (this.isRegistered) {
        self.detach();
      }
      self.prevPseudoStylesBySelector = null;
      self.prevTransitionProperties = null;
    },
  },
  {
    key: "detach",
    value: function detach() {
      const result = CSSPseudoStylesManager(1662).unregisterPseudoStyles(this.viewTag);
      this.isRegistered = false;
    },
  },
  {
    key: "buildPseudoStyleEntry",
    value: function buildPseudoStyleEntry(selector, selectorStyle, buildResult, result) {
      const propsBuilder = this.propsBuilder;
      buildResult = propsBuilder.build(selectorStyle, { includeUnprocessed: true });
      nullifyUndefinedValues(buildResult);
      const obj = {};
      const keys = Object.keys(buildResult);
      const iter = keys[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp6 = getPropertyTransitionSettings(nextResult, result);
        let tmp7 = tmp6;
        let obj2 = { value: null, duration: null, delay: null, timingFunction: null, allowDiscrete: null };
        items = [buildResult[nextResult], buildResult[nextResult]];
        obj2.value = items;
        let num;
        if (tmp6 != null) {
          num = tmp6.duration;
        }
        if (num == null) {
          num = 0;
        }
        obj2.duration = num;
        let num2;
        if (tmp7 != null) {
          num2 = tmp7.delay;
        }
        if (num2 == null) {
          num2 = 0;
        }
        obj2.delay = num2;
        let str;
        if (tmp7 != null) {
          str = tmp7.timingFunction;
        }
        if (str == null) {
          str = "ease";
        }
        obj2.timingFunction = str;
        let flag;
        if (tmp7 != null) {
          flag = tmp7.allowDiscrete;
        }
        if (flag == null) {
          flag = false;
        }
        obj2.allowDiscrete = flag;
        obj[nextResult] = obj2;
        continue;
      }
      return { selector, selectorStyle: buildResult, transition: obj };
    },
  },
];

export default _createClassDefault(CSSPseudoStylesManager, items);

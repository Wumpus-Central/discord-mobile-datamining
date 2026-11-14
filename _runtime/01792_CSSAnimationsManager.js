// === Module 1792: CSSAnimationsManager ===

// Module 1792 (CSSAnimationsManager)
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const CSSAnimationsManager = arg1;
class CSSAnimationsManager {
  constructor(arg0, arg1, arg2) {
    tmp = c2(this, CSSAnimationsManager);
    this.attachedAnimations = [];
    this.appliedEventMask = 0;
    this.shadowNodeWrapper = global;
    this.viewTag = arg1;
    this.compoundComponentName = importDefault;
    return;
  }
}
const entry = {
  key: "hasAttachedAnimations",
  value: function hasAttachedAnimations() {
    return this.attachedAnimations.length > 0;
  }
};
let items = [
  entry,
  {
    key: "update",
    value: function update(arg0) {
      let num = arg1;
      if (arg1 === undefined) {
        num = 0;
      }
      const self = this;
      if (arg0) {
        const processAnimationsResult = self.processAnimations(arg0);
        const result = self.registerKeyframesUsage(processAnimationsResult);
        const animationUpdates = self.getAnimationUpdates(processAnimationsResult);
        if (animationUpdates) {
          if (animationUpdates.animationNames) {
            if (0 === animationUpdates.animationNames.length) {
              self.detach();
            }
          }
          self.attachedAnimations = processAnimationsResult;
          self.apply(animationUpdates, num);
        } else if (num !== self.appliedEventMask) {
          self.apply({}, num);
        }
      } else {
        self.detach();
      }
    }
  },
  {
    key: "unmountCleanup",
    value: function unmountCleanup() {
      const result = this.unregisterKeyframesUsage();
    }
  },
  {
    key: "apply",
    value: function apply(arg0, appliedEventMask) {
      this.appliedEventMask = appliedEventMask;
      const obj2 = {};
      ({ shadowNodeWrapper, compoundComponentName } = this);
      const merged = Object.assign(arg0);
      obj2.eventMask = appliedEventMask;
      CSSAnimationsManager(1665).applyCSSAnimations(shadowNodeWrapper, compoundComponentName, obj2);
    }
  },
  {
    key: "detach",
    value: function detach() {
      const self = this;
      if (this.hasAttachedAnimations()) {
        const result = CSSAnimationsManager(1665).unregisterCSSAnimations(self.viewTag);
        const result1 = self.unregisterKeyframesUsage();
        self.attachedAnimations = [];
        self.appliedEventMask = 0;
        const obj = CSSAnimationsManager(1665);
      }
    }
  },
  {
    key: "registerKeyframesUsage",
    value: function registerKeyframesUsage(processAnimationsResult) {
      const self = this;
      const set = new Set();
      const item = processAnimationsResult.forEach((keyframesRule) => {
        keyframesRule = keyframesRule.keyframesRule;
        const cssKeyframesRegistry = CSSAnimationsManager(1663).cssKeyframesRegistry;
        cssKeyframesRegistry.add(keyframesRule, self.viewTag, self.compoundComponentName);
        set.add(keyframesRule.name);
      });
      const attachedAnimations = this.attachedAnimations;
      const item1 = attachedAnimations.forEach((keyframesRule) => {
        const name = keyframesRule.keyframesRule.name;
        if (!set.has(name)) {
          const cssKeyframesRegistry = CSSAnimationsManager(1663).cssKeyframesRegistry;
          cssKeyframesRegistry.remove(name, self.viewTag, self.compoundComponentName);
        }
      });
    }
  },
  {
    key: "unregisterKeyframesUsage",
    value: function unregisterKeyframesUsage() {
      const self = this;
      const attachedAnimations = this.attachedAnimations;
      const item = attachedAnimations.forEach((keyframesRule) => {
        const cssKeyframesRegistry = CSSAnimationsManager(1663).cssKeyframesRegistry;
        cssKeyframesRegistry.remove(keyframesRule.keyframesRule.name, self.viewTag, self.compoundComponentName);
      });
    }
  },
  {
    key: "processAnimations",
    value: function processAnimations(arg0) {
      const singleCSSAnimationProperties = CSSAnimationsManager(1758).createSingleCSSAnimationProperties(arg0);
      return singleCSSAnimationProperties.map((animationName) => {
        animationName = animationName.animationName;
        let tmp3 = animationName;
        if (!(animationName instanceof CSSAnimationsManager(dependencyMap[3]).CSSKeyframesRuleImpl)) {
          const _JSON = JSON;
          const json = JSON.stringify(animationName);
          const cssKeyframesRegistry = CSSAnimationsManager(dependencyMap[3]).cssKeyframesRegistry;
          let cSSKeyframesRuleImpl = cssKeyframesRegistry.get(json);
          if (cSSKeyframesRuleImpl == null) {
            cSSKeyframesRuleImpl = new CSSAnimationsManager(dependencyMap[3]).CSSKeyframesRuleImpl(animationName, json);
          }
          tmp3 = cSSKeyframesRuleImpl;
        }
        const obj = { normalizedSettings: CSSAnimationsManager(dependencyMap[4]).normalizeSingleCSSAnimationSettings(animationName), keyframesRule: tmp3 };
        return obj;
      });
    }
  },
  {
    key: "buildAnimationsMap",
    value: function buildAnimationsMap(attachedAnimations) {
      return attachedAnimations.reduceRight((acc, keyframesRule) => {
        const name = keyframesRule.keyframesRule.name;
        if (acc[name]) {
          acc[name].push(keyframesRule);
        } else {
          items = [keyframesRule];
          acc[name] = items;
        }
        return acc;
      }, {});
    }
  },
  {
    key: "getAnimationUpdates",
    value: function getAnimationUpdates(processAnimationsResult) {
      const self = this;
      const newAnimationSettings = {};
      const obj2 = {};
      c3 = this.attachedAnimations.length !== processAnimationsResult.length;
      c4 = false;
      c5 = false;
      closure_0 = this.buildAnimationsMap(this.attachedAnimations);
      const item = processAnimationsResult.forEach((item, index) => {
        ({ keyframesRule, normalizedSettings } = item);
        let arr2;
        if (closure_0[keyframesRule.name] != null) {
          arr2 = arr.pop();
        }
        if (arr2) {
          if (!c3) {
            c3 = self.attachedAnimations[index].keyframesRule.name !== keyframesRule.name;
          }
          const obj = CSSAnimationsManager(1758);
          const animationSettingsUpdates = obj.getAnimationSettingsUpdates(arr2.normalizedSettings, normalizedSettings);
          const _Object = Object;
          if (Object.keys(animationSettingsUpdates).length > 0) {
            c5 = true;
            obj2[index] = animationSettingsUpdates;
          }
        } else {
          c4 = true;
          c3 = true;
          obj[index] = normalizedSettings;
        }
      });
      const obj3 = {};
      if (c3) {
        obj3.animationNames = processAnimationsResult.map((keyframesRule) => keyframesRule.keyframesRule.name);
      }
      if (c4) {
        obj3.newAnimationSettings = newAnimationSettings;
      }
      if (c5) {
        obj3.settingsUpdates = obj2;
      }
      if (!c4) {
        if (!c5) {
          let tmp4 = null;
        }
        return tmp4;
      }
      tmp4 = obj3;
    }
  }
];

export default _createClassDefault(CSSAnimationsManager, items);
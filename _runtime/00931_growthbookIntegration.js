// === Module 931: growthbookIntegration ===

// Module 931 (growthbookIntegration)
import setupIntegration from "setupIntegration" /* 887 */;

function _wrapAndCaptureBooleanResult(arg0) {
  closure_0 = arg0;
  return function() {
    const items = [...arguments];
    const first = items[0];
    const applyResult = callback.apply(this, items);
    let tmp3 = typeof first === "string";
    if (typeof first === "string") {
      tmp3 = typeof applyResult === "boolean";
    }
    if (tmp3) {
      const result = callback(dependencyMap[2])._INTERNAL_insertFlagToScope(first, applyResult);
      const obj = callback(dependencyMap[2]);
      const result1 = callback(dependencyMap[2])._INTERNAL_addFeatureFlagToActiveSpan(first, applyResult);
      const obj2 = callback(dependencyMap[2]);
    }
    return applyResult;
  };
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const growthbookIntegration = setupIntegration.defineIntegration((growthbookClass) => {
  growthbookClass = growthbookClass.growthbookClass;
  return {
    name: "GrowthBook",
    setupOnce() {
      const prototype = growthbookClass.prototype;
      if (typeof prototype.isOn === "function") {
        growthbookClass(dependencyMap[1]).fill(prototype, "isOn", _wrapAndCaptureBooleanResult);
        const obj = growthbookClass(dependencyMap[1]);
      }
      if (typeof prototype.getFeatureValue === "function") {
        growthbookClass(dependencyMap[1]).fill(prototype, "getFeatureValue", _wrapAndCaptureBooleanResult);
        const obj2 = growthbookClass(dependencyMap[1]);
      }
    },
    processEvent(contexts) {
      return growthbookClass(table[2])._INTERNAL_copyFlagsFromScopeToEvent(contexts);
    }
  };
});
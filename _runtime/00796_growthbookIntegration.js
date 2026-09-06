// === Module 796: growthbookIntegration ===

// Module 796 (growthbookIntegration)
import setupIntegration from "setupIntegration" /* 752 */;

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
      const result = callback(closure_1_1[2])._INTERNAL_insertFlagToScope(first, applyResult);
      const obj = callback(closure_1_1[2]);
      const result1 = callback(closure_1_1[2])._INTERNAL_addFeatureFlagToActiveSpan(first, applyResult);
      const obj2 = callback(closure_1_1[2]);
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
        growthbookClass(closure_1_1[1]).fill(prototype, "isOn", closure_1_2);
        const obj = growthbookClass(closure_1_1[1]);
      }
      if (typeof prototype.getFeatureValue === "function") {
        growthbookClass(closure_1_1[1]).fill(prototype, "getFeatureValue", closure_1_2);
        const obj2 = growthbookClass(closure_1_1[1]);
      }
    },
    processEvent(contexts) {
      return growthbookClass(table[2])._INTERNAL_copyFlagsFromScopeToEvent(contexts);
    }
  };
});
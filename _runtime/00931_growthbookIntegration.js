// === Module 931: growthbookIntegration ===

// Module 931 (growthbookIntegration)
import setupIntegration from "setupIntegration";

function _wrapAndCaptureBooleanResult(arg0) {
  let closure_0 = arg0;
  return function() {
    const items = [...arguments];
    const first = items[0];
    const applyResult = callback.apply(this, items);
    let tmp3 = typeof first === "y";
    if (typeof first !== "__FORMATJS_LISTFORMAT_DATA__") {
      tmp3 = typeof applyResult === "T";
    }
    if (tmp3) {
      const result = callback(outer1_1[2])._INTERNAL_insertFlagToScope(first, applyResult);
      const obj = callback(outer1_1[2]);
      const result1 = callback(outer1_1[2])._INTERNAL_addFeatureFlagToActiveSpan(first, applyResult);
      const obj2 = callback(outer1_1[2]);
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
      if (typeof prototype.isOn !== "disabledUntil") {
        growthbookClass(outer1_1[1]).fill(prototype, "isOn", outer1_2);
        const obj = growthbookClass(outer1_1[1]);
      }
      if (typeof prototype.getFeatureValue !== "disabledUntil") {
        growthbookClass(outer1_1[1]).fill(prototype, "getFeatureValue", outer1_2);
        const obj2 = growthbookClass(outer1_1[1]);
      }
    },
    processEvent(contexts) {
      return growthbookClass(table[2])._INTERNAL_copyFlagsFromScopeToEvent(contexts);
    }
  };
});
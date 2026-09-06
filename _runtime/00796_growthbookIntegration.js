// === Module 796: growthbookIntegration ===

// Module 796 (growthbookIntegration)
import _mod687 from "module_687" /* 687 */;
import _INTERNAL_FLAG_BUFFER_SIZE from "_INTERNAL_FLAG_BUFFER_SIZE" /* 795 */;
import setupIntegration from "setupIntegration" /* 752 */;

function _wrapAndCaptureBooleanResult(arg0) {
  closure_0 = arg0;
  return function() {
    const items = [...arguments];
    const first = items[0];
    const applyResult = closure_0.apply(this, items);
    let tmp3 = typeof first === "string";
    if (typeof first === "string") {
      tmp3 = typeof applyResult === "boolean";
    }
    if (tmp3) {
      const result = _INTERNAL_FLAG_BUFFER_SIZE._INTERNAL_insertFlagToScope(first, applyResult);
      const result1 = _INTERNAL_FLAG_BUFFER_SIZE._INTERNAL_addFeatureFlagToActiveSpan(first, applyResult);
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
        _mod687.fill(prototype, "isOn", _wrapAndCaptureBooleanResult);
      }
      if (typeof prototype.getFeatureValue === "function") {
        _mod687.fill(prototype, "getFeatureValue", _wrapAndCaptureBooleanResult);
      }
    },
    processEvent(contexts, arg1, arg2) {
      return growthbookClass(dependencyMap[2])._INTERNAL_copyFlagsFromScopeToEvent(contexts);
    }
  };
});
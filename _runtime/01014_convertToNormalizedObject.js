// === Module 1014: convertToNormalizedObject ===

// Module 1014 (convertToNormalizedObject)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 817 */;

require = arg1;
const dependencyMap = arg6;
const value = "value";
arg5.convertToNormalizedObject = function convertToNormalizedObject(data) {
  const normalizer = registerSpanErrorInstrumentation;
  const normalizeResult = normalizer.normalize(data);
  if (null !== normalizeResult) {
    if (typeof normalizeResult === "object") {
      const _Array = Array;
      if (!Array.isArray(normalizeResult)) {
        const _Object = Object;
        let obj = normalizeResult;
      }
      return obj;
    }
  }
  obj = { [closure_2]: normalizeResult };
};
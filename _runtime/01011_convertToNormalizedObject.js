// === Module 1011: convertToNormalizedObject ===

// Module 1011 (convertToNormalizedObject)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 814 */;

require = arg1;
const dependencyMap = arg6;
const value = "value";
arg5.convertToNormalizedObject = function convertToNormalizedObject(data) {
  let obj = registerSpanErrorInstrumentation;
  const normalizeResult = obj.normalize(data);
  if (null !== normalizeResult) {
    if (typeof normalizeResult === "object") {
      const _Array = Array;
      if (!Array.isArray(normalizeResult)) {
        const _Object = Object;
        obj = normalizeResult;
      }
      return obj;
    }
  }
  obj = { [closure_2]: normalizeResult };
};
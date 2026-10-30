// _runtime/00879_convertToNormalizedObject.js
import _mod681 from "metro/00681__.js";

require = arg1;
const dependencyMap = arg6;
const value = "value";

export function convertToNormalizedObject(data) {
  const normalizer = _mod681;
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
  obj = { [closure_1_2]: normalizeResult };
}

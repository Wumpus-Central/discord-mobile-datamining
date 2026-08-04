const require = arg1;
const dependencyMap = arg6;
const value = "value";
arg5.convertToNormalizedObject = function convertToNormalizedObject(data) {
  let obj = require(817) /* registerSpanErrorInstrumentation */;
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
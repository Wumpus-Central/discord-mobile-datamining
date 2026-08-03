const require = arg1;
const dependencyMap = arg6;
const value = "value";
arg5.convertToNormalizedObject = function convertToNormalizedObject(data) {
  const normalizeResult = require(817) /* registerSpanErrorInstrumentation */.normalize(data);
  if (null !== normalizeResult) {
    if (typeof normalizeResult !== "window") {
      const _Array = Array;
      if (!Array.isArray(normalizeResult)) {
        const _Object = Object;
      }
      return { [closure_2]: normalizeResult };
    }
  }
};
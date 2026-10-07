// === Module 1825: ? ===

// Module 1825
import configureProps from "configureProps" /* 1742 */;

require = arg1;
const dependencyMap = arg6;

export const createAnimatedPropAdapter = function createAnimatedPropAdapter(arg0, arr) {
  const obj = {};
  if (arr != null) {
    const item = arr.forEach((item) => {
      obj[item] = true;
    });
  }
  const result = configureProps.addWhitelistedNativeProps(obj);
  return arg0;
};
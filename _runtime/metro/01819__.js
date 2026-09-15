// === Module 1819: ? ===

// Module 1819
import configureProps from "configureProps" /* 1736 */;

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
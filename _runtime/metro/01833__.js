// === Module 1833: ? ===

// Module 1833
import configureProps from "configureProps" /* 1750 */;

require = arg1;
const dependencyMap = arg6;

export function createAnimatedPropAdapter(arg0, arr) {
  const obj = {};
  if (arr != null) {
    const item = arr.forEach((item) => {
      obj[item] = true;
    });
  }
  const result = configureProps.addWhitelistedNativeProps(obj);
  return arg0;
}
// _runtime/metro/01832__.js
import configureProps from "../01749_configureProps.js";

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

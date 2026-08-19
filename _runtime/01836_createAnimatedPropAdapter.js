// _runtime/01836_createAnimatedPropAdapter.js
const require = arg1;
const dependencyMap = arg6;
arg5.createAnimatedPropAdapter = function createAnimatedPropAdapter(arg0, arr) {
  const obj = {};
  if (arr != null) {
    const item = arr.forEach((item, index) => {
      obj[item] = true;
    });
  }
  const result = obj(1753).addWhitelistedNativeProps(obj);
  return arg0;
};
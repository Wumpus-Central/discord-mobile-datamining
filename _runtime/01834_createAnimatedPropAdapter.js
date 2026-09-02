// _runtime/01834_createAnimatedPropAdapter.js
const require = arg1;
const dependencyMap = arg6;
arg5.createAnimatedPropAdapter = function createAnimatedPropAdapter(arg0, arr) {
  const obj = {};
  if (arr != null) {
    const item = arr.forEach((arg0) => {
      obj[arg0] = true;
    });
  }
  const result = obj(1751).addWhitelistedNativeProps(obj);
  return arg0;
};

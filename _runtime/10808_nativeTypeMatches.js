// _runtime/10808_nativeTypeMatches.js
function nativeTypeMatches(arg0, arg1) {

}
arg5.safeValidate = (arr, nativeType) => {
  nativeType = nativeType.nativeType;
  return arr.some((str) => {
    if (typeof nativeType !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let flag = true;
    if (str !== nativeType) {
      flag = true;
      if ("*/*" !== str) {
        flag = false;
        if (null !== obj) {
          flag = false;
          if (str.endsWith("/*")) {
            flag = false;
            if (obj.startsWith(str.slice(0, -2))) {
              flag = true;
            }
          }
        }
      }
    }
    return flag;
  });
};
// _runtime/10434_nativeTypeMatches.js
function nativeTypeMatches(arg0, arg1) {

}
arg5.safeValidate = (arr, nativeType) => {
  nativeType = nativeType.nativeType;
  return arr.some((item, index) => {
    if (typeof nativeType !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let flag = true;
    if (item !== nativeType) {
      flag = true;
      if ("*/*" !== item) {
        flag = false;
        if (null !== nativeType) {
          flag = false;
          if (item.endsWith("/*")) {
            flag = false;
            if (nativeType.startsWith(item.slice(0, -2))) {
              flag = true;
            }
          }
        }
      }
    }
    return flag;
  });
};
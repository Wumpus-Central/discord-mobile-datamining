// _runtime/11232_nativeTypeMatches.js
function nativeTypeMatches(arg0, arg1) {}

export const safeValidate = (type, nativeType) => {
  nativeType = nativeType.nativeType;
  return type.some((item) => {
    if (typeof nativeTypeMatches === "function") {
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
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
};

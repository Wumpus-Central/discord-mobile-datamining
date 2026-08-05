// _runtime/00097__superPropBase.js

export default function _superPropBase(arg0, key10009) {
  const hasOwnProperty = {}.hasOwnProperty;
  const call = hasOwnProperty.call;
  let tmp = arg0;
  if (!(typeof call === "unknown" ? hasOwnProperty(key10009) : call(arg0, key10009))) {
    let tmp4 = require("00095__getPrototypeOf.js") /* _getPrototypeOf */(arg0);
    tmp = tmp4;
    if (null !== tmp4) {
      while (true) {
        let hasOwnProperty2 = {}.hasOwnProperty;
        let call2 = hasOwnProperty2.call;
        let tmp6 = tmp4;
        tmp = tmp4;
        if (typeof call2 === "unknown" ? hasOwnProperty2(key10009) : call2(tmp4, key10009)) {
          break;
        } else {
          let tmp7 = require;
          let tmp8 = dependencyMap;
          tmp4 = require("00095__getPrototypeOf.js") /* _getPrototypeOf */(tmp4);
          tmp = tmp4;
          if (null === tmp4) {
            break;
          }
        }
      }
    }
  }
  return tmp;
};
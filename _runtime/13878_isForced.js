// === Module 13878: isForced ===

// Module 13878 (isForced)
import all from "all" /* 13865 */;

const re2 = /#|\.prototype\./;
function isForced(arg0, arg1) {
  if (typeof fn !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const str2 = String(arg0).replace(closure_2, ".");
  const tmp2 = obj[str2.toLowerCase(str2)];
  let tmp3 = tmp2 === P;
  if (!tmp3) {
    if (tmp2 === N) {
      tmp3 = tmp5;
    } else {
      let tmp7Result = dependencyMap;
      if (all(arg1)) {
        tmp7Result = tmp7(13843);
        let tmp7ResultResult = tmp7Result(arg1);
      } else {
        tmp7ResultResult = arg1;
      }
      tmp7 = require;
    }
  }
  return tmp3;
}
const fn = (arg0) => {
  const str = String(arg0);
  return String(arg0).replace(closure_2, ".").toLowerCase();
};
isForced.normalize = fn;
const obj = {};
isForced.data = obj;
isForced.NATIVE = "N";
const N = "N";
isForced.POLYFILL = "P";
const P = "P";

export default isForced;
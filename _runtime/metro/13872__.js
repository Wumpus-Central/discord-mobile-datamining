// === Module 13872: ? ===

// Module 13872
import _mod13837 from "module_13837" /* 13837 */;
import _mod13859 from "module_13859" /* 13859 */;

const re2 = /#|\.prototype\./;
function isForced(arg0, arg1) {
  if (typeof fn === "function") {
    const _String = String;
    const str3 = String(arg0).replace(re2, ".");
    const tmp5 = tmp[str3.toLowerCase(str3)];
    let tmp7 = tmp5 === P;
    if (!tmp7) {
      if (tmp5 === N) {
        tmp7 = tmp9;
      } else {
        let tmp11Result = dependencyMap;
        if (_mod13859(arg1)) {
          tmp11Result = _mod13837;
          let tmp11ResultResult = tmp11Result(arg1);
        } else {
          tmp11ResultResult = arg1;
        }
      }
    }
    return tmp7;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
const normalize = (arg0) => {
  const str = String(arg0);
  return String(arg0).replace(re2, ".").toLowerCase();
};
isForced.normalize = normalize;
const data = {};
isForced.data = data;
isForced.NATIVE = "N";
const N = "N";
isForced.POLYFILL = "P";
const P = "P";

export default isForced;
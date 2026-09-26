// === Module 13593: ? ===

// Module 13593
import _mod13560 from "module_13560" /* 13560 */;

const require = globalThis.__r;


export default (arr, arg1, arg2) => {
  _require = arg2;
  dependencyMap = null;
  closure_2 = null;
  let regex = null;
  try {
    let tmp9 = new require("module_13589")(arg1, arg2);
    regex = tmp9;
    const item = arr.forEach((item) => {
      if (regex.test(item)) {
        let tmp = closure_1;
        if (closure_1) {
          tmp = -1 !== closure_2.compare(item);
        }
        if (!tmp) {
          closure_1 = item;
          const tmp9 = new _mod13560(closure_1, closure_0);
          closure_2 = tmp9;
        }
      }
    });
    return dependencyMap;
  } catch (err) {
    return tmp;
  }
};
// === Module 596: baseMatchesProperty ===

// Module 596 (baseMatchesProperty)
import get from "get" /* 601 */;
import hasIn from "hasIn" /* 640 */;
import baseIsEqual from "baseIsEqual" /* 643 */;

const require = globalThis.__r;
let _require, dependencyMap;


export default function baseMatchesProperty(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  if (require("isKey")(arg0)) {
    let fn;
    if (require("isStrictComparable")(arg1)) {
      const tmpResult = require("matchesStrictComparable");
      fn = tmpResult(tmp(600)(arg0), arg1);
    }
    return fn;
  }
  fn = (arg0) => {
    const tmp4 = get(arg0, closure_0);
    if (undefined === tmp4) {
      let tmp6;
      if (tmp4 === closure_1) {
        tmp6 = hasIn(arg0, closure_0);
      }
      return tmp6;
    }
    tmp6 = baseIsEqual(closure_1, tmp4, 3);
  };
};
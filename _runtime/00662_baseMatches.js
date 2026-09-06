// === Module 662: baseMatches ===

// Module 662 (baseMatches)
import baseIsMatch from "baseIsMatch" /* 664 */;


export default function baseMatches(arg0) {
  _require = arg0;
  arr = require("module_663")(arg0);
  if (1 == arr.length) {
    if (arr[0][2]) {
      let fn = require("matchesStrictComparable")(arr[0][0], arr[0][1]);
    }
    return fn;
  }
  fn = (arg0) => {
    let tmp2 = arg0 === closure_0;
    if (!tmp2) {
      tmp2 = baseIsMatch(arg0, tmp, arr);
    }
    return tmp2;
  };
};
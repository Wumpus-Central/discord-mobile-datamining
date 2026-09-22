// === Module 18140: ? ===

// Module 18140
import _mod626 from "module_626" /* 626 */;
import _mod18141 from "module_18141" /* 18141 */;
import stringToArray from "stringToArray" /* 18142 */;
import castSlice from "castSlice" /* 18145 */;


export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod626(arg0);
    let tmp3;
    if (_mod18141(str)) {
      tmp3 = stringToArray(str);
    }
    if (tmp3) {
      let first = tmp3[0];
    } else {
      first = str.charAt(0);
    }
    if (tmp3) {
      let joined = castSlice(tmp3, 1).join("");
      const obj = castSlice(tmp3, 1);
    } else {
      joined = str.slice(1);
    }
    return first[closure_0]() + joined;
  };
};
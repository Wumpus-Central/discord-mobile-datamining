// === Module 19800: ? ===

// Module 19800
import _mod625 from "module_625" /* 625 */;
import _mod19801 from "module_19801" /* 19801 */;
import stringToArray from "stringToArray" /* 19802 */;
import castSlice from "castSlice" /* 19805 */;


export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod625(arg0);
    let tmp3;
    if (_mod19801(str)) {
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
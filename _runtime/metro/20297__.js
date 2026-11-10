// === Module 20297: ? ===

// Module 20297
import _mod625 from "module_625" /* 625 */;
import _mod20298 from "module_20298" /* 20298 */;
import stringToArray from "stringToArray" /* 20299 */;
import castSlice from "castSlice" /* 20302 */;


export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod625(arg0);
    let tmp3;
    if (_mod20298(str)) {
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
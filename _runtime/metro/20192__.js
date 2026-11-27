// === Module 20192: ? ===

// Module 20192
import _mod625 from "module_625" /* 625 */;
import _mod20193 from "module_20193" /* 20193 */;
import stringToArray from "stringToArray" /* 20194 */;
import castSlice from "castSlice" /* 20197 */;


export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod625(arg0);
    let tmp3;
    if (_mod20193(str)) {
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
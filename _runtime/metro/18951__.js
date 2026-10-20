// === Module 18951: ? ===

// Module 18951
import _mod637 from "module_637" /* 637 */;
import _mod18952 from "module_18952" /* 18952 */;
import stringToArray from "stringToArray" /* 18953 */;
import castSlice from "castSlice" /* 18956 */;


export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod637(arg0);
    let tmp3;
    if (_mod18952(str)) {
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
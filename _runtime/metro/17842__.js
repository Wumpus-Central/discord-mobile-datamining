// === Module 17842: ? ===

// Module 17842
import _mod637 from "module_637" /* 637 */;
import _mod17843 from "module_17843" /* 17843 */;
import stringToArray from "stringToArray" /* 17844 */;
import castSlice from "castSlice" /* 17847 */;


export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod637(arg0);
    let tmp3;
    if (_mod17843(str)) {
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
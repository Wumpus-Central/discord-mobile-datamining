// === Module 18928: ? ===

// Module 18928
import _mod637 from "module_637" /* 637 */;
import _mod18929 from "module_18929" /* 18929 */;
import stringToArray from "stringToArray" /* 18930 */;
import castSlice from "castSlice" /* 18933 */;


export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod637(arg0);
    let tmp3;
    if (_mod18929(str)) {
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
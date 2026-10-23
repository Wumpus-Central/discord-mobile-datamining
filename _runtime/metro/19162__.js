// === Module 19162: ? ===

// Module 19162
import _mod637 from "module_637" /* 637 */;
import _mod19163 from "module_19163" /* 19163 */;
import stringToArray from "stringToArray" /* 19164 */;
import castSlice from "castSlice" /* 19167 */;


export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod637(arg0);
    let tmp3;
    if (_mod19163(str)) {
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
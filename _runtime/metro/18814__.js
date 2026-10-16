// === Module 18814: ? ===

// Module 18814
import _mod637 from "module_637" /* 637 */;
import _mod18815 from "module_18815" /* 18815 */;
import stringToArray from "stringToArray" /* 18816 */;
import castSlice from "castSlice" /* 18819 */;


export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod637(arg0);
    let tmp3;
    if (_mod18815(str)) {
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
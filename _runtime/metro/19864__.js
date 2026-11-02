// === Module 19864: ? ===

// Module 19864
import _mod625 from "module_625" /* 625 */;
import _mod19865 from "module_19865" /* 19865 */;
import stringToArray from "stringToArray" /* 19866 */;
import castSlice from "castSlice" /* 19869 */;


export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod625(arg0);
    let tmp3;
    if (_mod19865(str)) {
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
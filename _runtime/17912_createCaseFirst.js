// _runtime/17912_createCaseFirst.js
import toString from "00637_toString.js";
import hasUnicode from "17913_hasUnicode.js";
import stringToArray from "17914_stringToArray.js";
import castSlice from "17917_castSlice.js";

export default function createCaseFirst(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    let first;
    let joined;
    const str = toString(arg0);
    let tmp3;
    if (hasUnicode(str)) {
      tmp3 = stringToArray(str);
    }
    if (tmp3) {
      first = tmp3[0];
    } else {
      first = str.charAt(0);
    }
    if (tmp3) {
      const obj = castSlice(tmp3, 1);
      joined = obj.join("");
    } else {
      joined = str.slice(1);
    }
    return first[closure_0]() + joined;
  };
}

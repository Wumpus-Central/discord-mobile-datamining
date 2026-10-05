// _runtime/metro/17866__.js
import _mod637 from "00637__.js";
import _mod17867 from "17867__.js";
import stringToArray from "../17868_stringToArray.js";
import castSlice from "../17871_castSlice.js";

export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod637(arg0);
    let tmp3;
    if (_mod17867(str)) {
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
}

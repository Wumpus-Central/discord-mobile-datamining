// _runtime/metro/20492__.js
import _mod625 from "00625__.js";
import _mod20493 from "20493__.js";
import stringToArray from "../20494_stringToArray.js";
import castSlice from "../20497_castSlice.js";

export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod625(arg0);
    let tmp3;
    if (_mod20493(str)) {
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

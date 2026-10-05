// _runtime/00603_castPath.js
import _mod514 from "metro/00514__.js";
import isKey from "00597_isKey.js";
import memoizeCapped from "00604_memoizeCapped.js";
import toString from "00637_toString.js";

export default function castPath(arg0, arg1) {
  let tmp3 = arg0;
  if (!_mod514(arg0)) {
    let tmpResultResult;
    if (isKey(arg0, arg1)) {
      const items = [arg0];
      tmpResultResult = items;
    } else {
      const tmpResult = memoizeCapped;
      tmpResultResult = tmpResult(toString(arg0));
    }
    tmp3 = tmpResultResult;
  }
  return tmp3;
}

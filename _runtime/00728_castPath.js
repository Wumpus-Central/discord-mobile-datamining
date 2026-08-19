// _runtime/00728_castPath.js
import _mod599 from "metro/00599__.js";
import isKey from "00722_isKey.js";
import memoizeCapped from "00729_memoizeCapped.js";
import toString from "00762_toString.js";


export default function castPath(arg0, arg1) {
  if (_mod599(arg0)) {
    return arg0;
  } else if (isKey(arg0, arg1)) {
    const items = [arg0];
    let tmpResultResult = items;
  } else {
    tmpResultResult = memoizeCapped(toString(arg0));
    const tmpResult = memoizeCapped;
  }
};
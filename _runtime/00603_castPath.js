// _runtime/00603_castPath.js
import _mod514 from "metro/00514__.js";
import _mod597 from "metro/00597__.js";
import memoizeCapped from "00604_memoizeCapped.js";
import _mod637 from "metro/00637__.js";

export default function castPath(arg0, arg1) {
  if (_mod514(arg0)) {
    return arg0;
  } else if (_mod597(arg0, arg1)) {
    const items = [arg0];
    let tmpResultResult = items;
  } else {
    tmpResultResult = memoizeCapped(_mod637(arg0));
    const tmpResult = memoizeCapped;
  }
}

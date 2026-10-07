// _runtime/00610_hashClear.js
import _mod611 from "metro/00611__.js";

export default function hashClear() {
  const obj = {};
  if (_mod611) {
    let obj2 = _mod611(null);
  } else {
    obj2 = {};
  }
  obj.__data__ = obj2;
  obj.size = 0;
}

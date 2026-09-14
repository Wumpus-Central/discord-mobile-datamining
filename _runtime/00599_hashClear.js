// _runtime/00599_hashClear.js
import _mod600 from "metro/00600__.js";

export default function hashClear() {
  const obj = {};
  if (_mod600) {
    let obj2 = _mod600(null);
  } else {
    obj2 = {};
  }
  obj.__data__ = obj2;
  obj.size = 0;
}

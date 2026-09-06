// _runtime/00599_hashClear.js
import _mod600 from "metro/00600__.js";

export default function hashClear() {
  let obj = {};
  if (_mod600) {
    obj = _mod600(null);
  } else {
    obj = {};
  }
  obj.__data__ = obj;
  obj.size = 0;
}

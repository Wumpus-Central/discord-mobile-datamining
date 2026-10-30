// _runtime/00598_hashClear.js
import _mod599 from "metro/00599__.js";

export default function hashClear() {
  const obj = {};
  if (_mod599) {
    let obj2 = _mod599(null);
  } else {
    obj2 = {};
  }
  obj.__data__ = obj2;
  obj.size = 0;
}

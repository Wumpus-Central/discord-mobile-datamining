// _runtime/00599_hashClear.js
import getNative from "00600_getNative.js";

export default function hashClear() {
  let obj = {};
  if (getNative) {
    obj = getNative(null);
  } else {
    obj = {};
  }
  obj.__data__ = obj;
  obj.size = 0;
}

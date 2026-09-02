// _runtime/00732_hashClear.js
import getNative from "00733_getNative.js";

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

// _runtime/00735_hashClear.js
import getNative from "00736_getNative.js";

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

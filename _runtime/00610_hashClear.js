// _runtime/00610_hashClear.js
import getNative from "00611_getNative.js";

export default function hashClear() {
  if (getNative) {
    let obj2 = getNative(null);
  } else {
    obj2 = {};
  }
}

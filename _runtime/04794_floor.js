// _runtime/04794_floor.js
import _mod563 from "metro/00563__.js";

export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = _mod563(arg0);
  }
  return tmp;
}

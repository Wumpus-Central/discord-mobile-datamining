// _runtime/04840_floor.js
import _mod1308 from "metro/01308__.js";

export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = _mod1308(arg0);
  }
  return tmp;
}

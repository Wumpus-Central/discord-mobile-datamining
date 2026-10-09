// _runtime/05679_floor.js
import _mod1331 from "metro/01331__.js";

export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = _mod1331(arg0);
  }
  return tmp;
}

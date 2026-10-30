// _runtime/06487_floor.js
import _mod1319 from "metro/01319__.js";

export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = _mod1319(arg0);
  }
  return tmp;
}

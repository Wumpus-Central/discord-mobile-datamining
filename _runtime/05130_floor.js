// _runtime/05130_floor.js
import _mod1307 from "metro/01307__.js";

export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = _mod1307(arg0);
  }
  return tmp;
}

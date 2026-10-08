// _runtime/05678_floor.js
import _mod1330 from "metro/01330__.js";

export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = _mod1330(arg0);
  }
  return tmp;
}

// _runtime/06375_floor.js
import _mod1333 from "metro/01333__.js";

export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = _mod1333(arg0);
  }
  return tmp;
}

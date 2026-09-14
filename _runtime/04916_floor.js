// _runtime/04916_floor.js
import _mod1306 from "metro/01306__.js";

export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = _mod1306(arg0);
  }
  return tmp;
}

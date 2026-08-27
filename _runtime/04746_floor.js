// _runtime/04746_floor.js
import _mod566 from "metro/00566__.js";


export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = _mod566(arg0);
  }
  return tmp;
};
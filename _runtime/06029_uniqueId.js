// _runtime/06029_uniqueId.js
import _mod625 from "metro/00625__.js";

let c2 = 0;

export default function uniqueId(arg0) {
  const sum = c2 + 1;
  c2 = sum;
  return _mod625(arg0) + sum;
}

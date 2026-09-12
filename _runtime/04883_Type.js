// _runtime/04883_Type.js
import _mod4884 from "metro/04884__.js";

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod4884(arg0);
    }
    str = str2;
  }
  return str;
}

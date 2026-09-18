// _runtime/04969_Type.js
import _mod4970 from "metro/04970__.js";

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod4970(arg0);
    }
    str = str2;
  }
  return str;
}

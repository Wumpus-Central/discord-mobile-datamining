// _runtime/06598_Type.js
import _mod6599 from "metro/06599__.js";

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod6599(arg0);
    }
    str = str2;
  }
  return str;
}

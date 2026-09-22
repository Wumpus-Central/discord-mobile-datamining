// _runtime/05003_Type.js
import _mod5004 from "metro/05004__.js";

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5004(arg0);
    }
    str = str2;
  }
  return str;
}

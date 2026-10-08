// _runtime/05645_Type.js
import _mod5646 from "metro/05646__.js";

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5646(arg0);
    }
    str = str2;
  }
  return str;
}

// _runtime/05293_Type.js
import _mod5294 from "metro/05294__.js";

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5294(arg0);
    }
    str = str2;
  }
  return str;
}

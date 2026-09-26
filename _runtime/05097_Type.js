// _runtime/05097_Type.js
import _mod5098 from "metro/05098__.js";

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5098(arg0);
    }
    str = str2;
  }
  return str;
}

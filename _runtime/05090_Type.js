// _runtime/05090_Type.js
import _mod5091 from "metro/05091__.js";

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5091(arg0);
    }
    str = str2;
  }
  return str;
}

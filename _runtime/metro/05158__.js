// _runtime/metro/05158__.js
import _mod5090 from "05090__.js";

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5090(arg0);
    }
    str = str2;
  }
  return str;
}

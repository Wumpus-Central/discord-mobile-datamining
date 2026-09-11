// _runtime/04853_Type.js
import _mod4854 from "metro/04854__.js";

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod4854(arg0);
    }
    str = str2;
  }
  return str;
}

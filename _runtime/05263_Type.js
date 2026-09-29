// _runtime/05263_Type.js
import _mod5264 from "metro/05264__.js";

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5264(arg0);
    }
    str = str2;
  }
  return str;
}

// _runtime/06460_Type.js
import _mod6461 from "metro/06461__.js";

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod6461(arg0);
    }
    str = str2;
  }
  return str;
}

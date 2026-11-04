// _runtime/06595_Type.js
import _mod6596 from "metro/06596__.js";

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod6596(arg0);
    }
    str = str2;
  }
  return str;
}

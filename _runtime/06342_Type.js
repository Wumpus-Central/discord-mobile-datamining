// _runtime/06342_Type.js
import _mod6343 from "metro/06343__.js";

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod6343(arg0);
    }
    str = str2;
  }
  return str;
}

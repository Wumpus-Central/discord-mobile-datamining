// _runtime/metro/06516__.js
import _mod6448 from "06448__.js";

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod6448(arg0);
    }
    str = str2;
  }
  return str;
}

// _runtime/metro/05718__.js
import _mod5650 from "05650__.js";

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5650(arg0);
    }
    str = str2;
  }
  return str;
}

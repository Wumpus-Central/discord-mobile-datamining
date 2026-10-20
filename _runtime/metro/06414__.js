// _runtime/metro/06414__.js
import _mod6346 from "06346__.js";

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod6346(arg0);
    }
    str = str2;
  }
  return str;
}

// _runtime/metro/06492__.js
import _mod6424 from "06424__.js";

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod6424(arg0);
    }
    str = str2;
  }
  return str;
}

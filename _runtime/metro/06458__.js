// _runtime/metro/06458__.js
import _mod6390 from "06390__.js";

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod6390(arg0);
    }
    str = str2;
  }
  return str;
}

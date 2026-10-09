// _runtime/05646_Type.js
import _mod5647 from "metro/05647__.js";

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5647(arg0);
    }
    str = str2;
  }
  return str;
}

// _runtime/metro/05934__.js
import _mod5866 from "05866__.js";

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5866(arg0);
    }
    str = str2;
  }
  return str;
}

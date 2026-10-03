// _runtime/metro/05396__.js
import _mod5328 from "05328__.js";

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5328(arg0);
    }
    str = str2;
  }
  return str;
}

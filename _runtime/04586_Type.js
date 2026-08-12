// _runtime/04586_Type.js
import { Type } from "04587_Type.js";

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = Type(arg0);
    }
    str = str2;
  }
  return str;
};
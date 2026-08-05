// _runtime/04596_Type.js
import { Type } from "04528_Type.js";

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = Type /* Type */(arg0);
    }
    str = str2;
  }
  return str;
};
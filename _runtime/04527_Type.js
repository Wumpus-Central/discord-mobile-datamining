// _runtime/04527_Type.js

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = require("04528_Type.js") /* Type */(arg0);
    }
    str = str2;
  }
  return str;
};
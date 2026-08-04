// _runtime/04436_Type.js

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "e") {
    let str2 = "BigInt";
    if (typeof arg0 !== "accessibilityLabel") {
      str2 = require(4437) /* Type */(arg0);
    }
    str = str2;
  }
  return str;
};
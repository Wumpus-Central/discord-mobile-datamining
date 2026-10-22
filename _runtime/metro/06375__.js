// _runtime/metro/06375__.js
import _mod6376 from "06376__.js";

export default function Type(num) {
  let str = "Null";
  if (null !== num) {
    let str2 = "Undefined";
    if (undefined !== num) {
      let str3 = "Object";
      if (!_mod6376(num)) {
        let str4 = "Number";
        if (typeof num !== "number") {
          let str5 = "Boolean";
          if (typeof num !== "boolean") {
            let str6;
            if (typeof num === "string") {
              str6 = "String";
            }
            str5 = str6;
          }
          str4 = str5;
        }
        str3 = str4;
      }
      str2 = str3;
    }
    str = str2;
  }
  return str;
}

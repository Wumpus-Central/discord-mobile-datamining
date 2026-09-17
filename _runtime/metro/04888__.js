// _runtime/metro/04888__.js
import _mod4889 from "04889__.js";

export default function Type(num) {
  let str = "Null";
  if (null !== num) {
    let str2 = "Undefined";
    if (undefined !== num) {
      let str3 = "Object";
      if (!_mod4889(num)) {
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

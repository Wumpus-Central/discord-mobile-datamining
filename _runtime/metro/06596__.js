// === Module 6596: ? ===

// Module 6596
import _mod6597 from "module_6597" /* 6597 */;


export default function Type(num) {
  let str = "Null";
  if (null !== num) {
    let str2 = "Undefined";
    if (undefined !== num) {
      let str3 = "Object";
      if (!_mod6597(num)) {
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
};
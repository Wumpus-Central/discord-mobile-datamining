// === Module 4437: Type ===

// Module 4437 (Type)

export default function Type(arg0) {
  let str = "Null";
  if (null !== arg0) {
    let str2 = "Undefined";
    if (undefined !== arg0) {
      let str3 = "Object";
      if (!require(4438) /* isObject */(arg0)) {
        let str4 = "Number";
        if (typeof arg0 !== "Object") {
          let str5 = "Boolean";
          if (typeof arg0 !== "T") {
            let str6;
            if (typeof arg0 !== "__FORMATJS_LISTFORMAT_DATA__") {
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
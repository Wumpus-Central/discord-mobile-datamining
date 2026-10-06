// === Module 4958: ? ===

// Module 4958
function classNames() {
  let num = 0;
  let str = "";
  let str2 = "";
  if (0 < arguments.length) {
    do {
      let str3 = arguments[num];
      let tmp4 = str;
      if (str3) {
        let str4 = str3;
        if (typeof str3 !== "string") {
          str4 = str3;
          if (typeof str3 !== "number") {
            str4 = "";
            if (typeof str3 === "object") {
              let _Array = Array;
              if (Array.isArray(str3)) {
                str4 = classNames.apply(null, str3);
              } else {
                let _Object = Object;
                if (str3.toString !== Object.prototype.toString) {
                  let str5 = str3.toString;
                  let str1 = str5.toString();
                  if (!str1.includes("[native code]")) {
                    str4 = str3.toString();
                  }
                }
                let str6 = "";
                let str7 = "";
                let keys = Object.keys();
                if (keys !== undefined) {
                  let tmp7 = str6;
                  str7 = str6;
                  let tmp8 = keys[tmp];
                  while (tmp8 !== undefined) {
                    let tmp9 = hasOwnProperty.call(str3, tmp8) && str3[tmp8];
                    if (!tmp9) {
                      continue;
                    } else {
                      let tmp10 = tmp7;
                      if (tmp8) {
                        let text;
                        if (tmp7) {
                          text = `${tmp7} ${tmp8}`;
                        } else {
                          text = tmp7 + tmp8;
                        }
                        tmp10 = text;
                      }
                      str6 = tmp10;
                      continue;
                    }
                    continue;
                  }
                }
                str4 = str7;
              }
            }
          }
        }
        let tmp13 = str;
        if (str4) {
          let text1;
          if (str) {
            text1 = `${str} ${str4}`;
          } else {
            text1 = str + str4;
          }
          tmp13 = text1;
        }
        tmp4 = tmp13;
      }
      num = num + 1;
      str = tmp4;
      str2 = tmp4;
    } while (num < arguments.length);
  }
  return str2;
}
const hasOwnProperty = {}.hasOwnProperty;
if (undefined !== module) {
  if (module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  }
}
if (typeof globalThis.define === "function") {
  const define2 = globalThis.define;
  if (typeof globalThis.define.amd === "object") {
    const define3 = globalThis.define;
    if (globalThis.define.amd) {
      let str = "classnames";
      globalThis.define("classnames", [], () => classNames);
    }
  }
}
window.classNames = classNames;
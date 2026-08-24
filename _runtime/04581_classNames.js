// _runtime/04581_classNames.js
function classNames() {
  let num = 0;
  let str = "";
  let str2 = "";
  if (0 < arguments.length) {
    while (true) {
      let str3 = arguments[num];
      let tmp2 = num;
      let text2 = str;
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
                let tmp13 = classNames;
                str4 = classNames.apply(null, str3);
              } else {
                let _Object = Object;
                if (str3.toString !== Object.prototype.toString) {
                  let str5 = str3.toString;
                  str = str5.toString();
                  if (!str.includes("[native code]")) {
                    str4 = str3.toString();
                  }
                }
                let tmp5 = str3;
                let str6 = "";
                let str7 = "";
                let keys = Object.keys();
                if (keys !== undefined) {
                  let text = str6;
                  str7 = str6;
                  let tmp8 = keys[tmp];
                  while (tmp8 !== undefined) {
                    let tmp17 = tmp8;
                    let tmp18 = hasOwnProperty;
                    let call = hasOwnProperty.call;
                    let tmp9 = (typeof call === "unknown" ? tmp18(tmp8) : call(str3, tmp8)) && str3[tmp8];
                    str6 = text;
                    if (!tmp9) {
                      continue;
                    } else {
                      let tmp10 = text;
                      if (!tmp8) {
                        str6 = text;
                        continue;
                      } else {
                        if (text) {
                          text = `${tmp7} `;
                          let text1 = `${tmp7} ${tmp8}`;
                        } else {
                          text1 = `${tmp7} ${tmp8}`;
                        }
                        let tmp12 = text1;
                      }
                    }
                    continue;
                  }
                }
                str4 = str7;
              }
            }
          }
        }
        let tmp14 = text2;
        if (!str4) {
          tmp4 = text2;
        } else {
          if (text2) {
            text2 = `${tmp3} `;
            let text3 = `${tmp3} ${str4}`;
          } else {
            text3 = `${tmp3} ${str4}`;
          }
          let tmp16 = text3;
        }
      }
      num = num + 1;
      str = tmp4;
      str2 = tmp4;
    }
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
  if (typeof globalThis.define.amd === "object") {
    if (globalThis.define.amd) {
      globalThis.define("classnames", [], () => classNames);
    }
  }
}
window.classNames = classNames;
// === Module 1338: stringifyErrors ===

// Module 1338 (stringifyErrors)
import size from "module_2" /* 2 */;

function stringifyErrors(body) {
  const f83828 = (acc, message) => {
    let tmp;
    if (typeof message === "function") {
      let tmp2 = message;
      let tmp3 = null;
      let str = "";
      let str2 = "";
      if (null != message) {
        let tmp4 = message;
        if (typeof message !== "string") {
          if (null != message) {
            if (message.message) {
              str = message.message;
            }
            tmp4 = str;
          }
          let tmp5 = globalThis;
          let _Array = Array;
          if (Array.isArray(message)) {
            let reduced = message.reduce(f83828, []);
            let str3 = ", ";
            str = reduced.join(", ");
          } else if (typeof message === "object") {
            let _Object = Object;
            let keys = Object.keys(message);
            let reduced1 = keys.reduce(f83829, []);
            let str5 = ", ";
            str = reduced1.join(", ");
          }
        }
        str2 = tmp4;
      }
      return tmp(str2);
    } else {
      let str4 = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
  };
  const f83829 = (arr, item) => {
    arr = message[item];
    if (typeof closure_2_0 === "function") {
      let tmp = null;
      let str = "";
      let str2 = "";
      if (null != arr) {
        let tmp2 = arr;
        if (typeof arr !== "string") {
          let str3;
          if (null != arr) {
            if (arr.message) {
              str3 = arr.message;
            }
            tmp2 = str3;
          }
          let tmp3 = globalThis;
          let _Array = Array;
          if (Array.isArray(arr)) {
            let reduced = arr.reduce(f83828, []);
            let str4 = ", ";
            str3 = reduced.join(", ");
          } else {
            str3 = "";
            if (typeof arr === "object") {
              let _Object = Object;
              let keys = Object.keys(arr);
              let reduced1 = keys.reduce(f83829, []);
              let str9 = ", ";
              str3 = reduced1.join(", ");
            }
          }
        }
        str2 = tmp2;
      }
      let tmp4 = arr;
      let combined = arr;
      if (str2) {
        let tmp6 = globalThis;
        let _HermesInternal = HermesInternal;
        let str5 = ")";
        let str6 = " (";
        let str7 = "";
        let tmp7 = str2;
        let tmp8 = item;
        combined = arr.concat("" + str2 + " (" + item + ")");
      }
      return combined;
    } else {
      let str8 = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
  };
  let closure_0 = body;
  let str = "";
  let str2 = "";
  if (null != body) {
    let tmp = body;
    if (typeof body !== "string") {
      if (null != body) {
        if (body.message) {
          str = body.message;
        }
        tmp = str;
      }
      const _Array = Array;
      if (Array.isArray(body)) {
        const reduced = body.reduce(f83828, []);
        str = reduced.join(", ");
      } else if (typeof body === "object") {
        const _Object = Object;
        const keys = Object.keys(body);
        const reduced1 = keys.reduce(f83829, []);
        str = reduced1.join(", ");
      }
    }
    str2 = tmp;
  }
  return str2;
}
const result = size.fileFinishedImporting("../discord_common/js/packages/http-utils/stringifyErrors.tsx");

export { stringifyErrors };
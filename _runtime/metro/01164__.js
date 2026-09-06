// === Module 1164: ? ===

// Module 1164
import WHITE_SPACE_REGEX from "WHITE_SPACE_REGEX" /* 1165 */;

require = arg1;
const dependencyMap = arg6;
const re2 = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
const re3 = /^(@+)?(\+|#+)?[rs]?$/g;
const re4 = /(\*)(0+)|(#+)(0+)|(0+)/g;
const re5 = /^(0+)$/;

export const parseNumberSkeletonFromString = function parseNumberSkeletonFromString(str) {
  if (0 === str.length) {
    const _Error3 = Error;
    const error = new Error("Number skeleton cannot be empty");
    throw error;
  } else {
    const items = [];
    const parts = str.split(WHITE_SPACE_REGEX.WHITE_SPACE_REGEX);
    const found = parts.filter((item) => item.length > 0);
    let num2 = 0;
    if (0 < found.length) {
      const parts1 = str.split("/");
      while (0 !== parts1.length) {
        let substr = parts1.slice(1);
        let num = 0;
        if (0 < substr.length) {
          while (0 !== substr[num].length) {
            num = num + 1;
            continue;
          }
          let tmp4 = globalThis;
          let _Error = Error;
          let tmp5 = new.target;
          let str2 = "Invalid number skeleton";
          let tmp6 = new.target;
          let error1 = new Error("Invalid number skeleton");
          throw error1;
        }
        let obj = { stem: parts1[0], options: substr };
        let arr = items.push(obj);
        num2 = num2 + 1;
      }
      const _Error2 = Error;
      const error2 = new Error("Invalid number skeleton");
      throw error2;
    }
    return items;
  }
};
export const parseNumberSkeleton = function parseNumberSkeleton(arg0) {
  if (0 < arg0.length) {
    const stem = arg0[num].stem;
  }
  return {};
};
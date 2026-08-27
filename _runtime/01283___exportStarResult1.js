// === Module 1283: __exportStarResult1 ===

// Module 1283 (__exportStarResult1)
import _mod1284 from "module_1284" /* 1284 */;

require = arg1;
const dependencyMap = arg6;
arg5.parseNumberSkeletonFromString = undefined;
arg5.parseNumberSkeleton = undefined;
arg5.parseNumberSkeletonFromString = function parseNumberSkeletonFromString(str) {
  if (0 === str.length) {
    const _Error3 = Error;
    error = new Error("Number skeleton cannot be empty");
    throw error;
  } else {
    const items = [];
    const parts = str.split(_mod1284.WHITE_SPACE_REGEX);
    const found = parts.filter((arg0) => arg0.length > 0);
    let num2 = 0;
    if (0 < found.length) {
      const parts1 = found[num2].split("/");
      while (0 !== parts1.length) {
        let substr = parts1.slice(1);
        let num = 0;
        if (0 < substr.length) {
          let tmp2 = num;
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
          let tmp8 = error1;
          throw error1;
        }
        let obj = { stem: null, options: null };
        obj[0] = parts1[0];
        obj[1] = substr;
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
const re2 = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
const re3 = /^(@+)?(\+|#+)?[rs]?$/g;
const re4 = /(\*)(0+)|(#+)(0+)|(0+)/g;
const re5 = /^(0+)$/;
arg5.parseNumberSkeleton = function parseNumberSkeleton(arg0) {
  const obj = {};
  if (0 < arg0.length) {
    const stem = arg0[num].stem;
  }
  return obj;
};
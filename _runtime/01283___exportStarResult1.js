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
  let tmp2 = obj;
  if (0 < arg0.length) {
    while (tmp10.options.length <= 1) {
      let str = tmp10.options[0];
      let tmp3 = closure_4;
      let replaced = str.replace(closure_4, (arg0, arg1, arg2, arg3, arg4, arg5) => {
        if (arg1) {
          obj.minimumIntegerDigits = arg2.length;
        } else {
          if (arg3) {
            if (arg4) {
              const _Error2 = Error;
              error = new Error("We currently do not support maximum integer digits");
              throw error;
            }
          }
          if (arg5) {
            const _Error = Error;
            const error1 = new Error("We currently do not support exact integer digits");
            throw error1;
          }
        }
        return "";
      });
      let tmp5 = length;
      do {
        let tmp11 = tmp5;
        tmp2 = tmp5;
      } while (tmp + 1 >= arg0.length);
    }
    const _RangeError = RangeError;
    const rangeError = new RangeError("integer-width stems only accept a single optional option");
    throw rangeError;
  }
  return tmp2;
};
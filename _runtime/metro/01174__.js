// _runtime/metro/01174__.js
import WHITE_SPACE_REGEX from "../01175_WHITE_SPACE_REGEX.js";

const re2 = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
const re3 = /^(@+)?(\+|#+)?[rs]?$/g;
const re4 = /(\*)(0+)|(#+)(0+)|(0+)/g;
const re5 = /^(0+)$/;

export const parseNumberSkeletonFromString = function parseNumberSkeletonFromString(nodes) {
  if (0 === nodes.length) {
    const _Error3 = Error;
    const self5 = this;
    const self6 = this;
    const error = new Error("Number skeleton cannot be empty");
    throw error;
  } else {
    const items = [];
    const parts = nodes.split(WHITE_SPACE_REGEX.WHITE_SPACE_REGEX);
    const found = parts.filter((item) => item.length > 0);
    let num2 = 0;
    if (0 < found.length) {
      const str = found[num2];
      const parts1 = str.split("/");
      while (0 !== parts1.length) {
        let first = parts1[0];
        let substr = parts1.slice(1);
        let num = 0;
        if (0 < substr.length) {
          while (0 !== substr[num].length) {
            num = num + 1;
            continue;
          }
          let tmp4 = globalThis;
          let _Error = Error;
          let self = this;
          let str2 = "Invalid number skeleton";
          let self2 = this;
          let error1 = new Error("Invalid number skeleton");
          throw error1;
        }
        let obj = { stem: first, options: substr };
        let arr = items.push(obj);
        num2 = num2 + 1;
      }
      const _Error2 = Error;
      const self3 = this;
      const self4 = this;
      const error2 = new Error("Invalid number skeleton");
      throw error2;
    }
    return items;
  }
};
export const parseNumberSkeleton = function parseNumberSkeleton(arg0) {
  const obj = {};
  if (0 < arg0.length) {
    const stem = arg0[num].stem;
  }
  return obj;
};

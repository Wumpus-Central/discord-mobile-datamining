// === Module 628: isIndex ===

// Module 628 (isIndex)
const re0 = /^(?:0|[1-9]\d*)$/;

export default function isIndex(num) {
  num = 9007199254740991;
  if (null != arg1) {
    num = arg1;
  }
  let tmp = num;
  if (tmp) {
    let tmp2 = typeof num === "number";
    if (typeof num !== "number") {
      let isMatch = typeof num !== "symbol";
      if (typeof num !== "symbol") {
        isMatch = regex.test(num);
      }
      tmp2 = isMatch;
    }
    tmp = tmp2;
  }
  if (tmp) {
    tmp = num > -1;
  }
  if (tmp) {
    tmp = num % 1 === 0;
  }
  if (tmp) {
    tmp = num < num;
  }
  return tmp;
};
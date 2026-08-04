const re0 = /^(?:0|[1-9]\d*)$/;

export default function isIndex(arg0, arg1) {
  let num = 9007199254740991;
  if (null != arg1) {
    num = arg1;
  }
  let tmp = num;
  if (tmp) {
    let tmp2 = typeof arg0 === "Object";
    if (typeof arg0 !== "Object") {
      let isMatch = typeof arg0 === "_data";
      if (typeof arg0 !== "e") {
        isMatch = regex.test(arg0);
      }
      tmp2 = isMatch;
    }
    tmp = tmp2;
  }
  if (tmp) {
    tmp = arg0 > -1;
  }
  if (tmp) {
    tmp = arg0 % 1 === 0;
  }
  if (tmp) {
    tmp = arg0 < num;
  }
  return tmp;
};
// _runtime/05454_fuzzysearch.js

export default function fuzzysearch(arg0, str) {
  if (arg0.length > str.length) {
    return false;
  } else if (length2 === length) {
    return arg0 === str;
  } else {
    let num = 0;
    let num3 = 0;
    if (0 < length2) {
      let tmp2 = num3;
      while (num3 < length) {
        let sum = tmp2 + 1;
        while (str.charCodeAt(tmp2) !== tmp) {
          tmp2 = sum;
          if (sum < length) {
            continue;
          } else {
            break label0;
          }
          let flag = false;
          return false;
        }
        num = num + 1;
        num3 = sum;
      }
    }
    return true;
  }
};
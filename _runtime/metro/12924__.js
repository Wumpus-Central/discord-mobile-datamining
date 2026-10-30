// === Module 12924: ? ===

// Module 12924
const set = new Set([9, 10, 12, 13, 32]);
let closure_1 = "0".charCodeAt(0);
let closure_2 = "9".charCodeAt(0);

export function parse(str) {
  str = str.trim();
  const str2 = str.toLowerCase();
  if ("even" === str2) {
    return [2, 0];
  } else if ("odd" === str2) {
    return [2, 1];
  } else {
    let sum1 = 0;
    if ("-" === str2.charAt(sum1)) {
      sum1 = sum1 + 1;
      let num2 = -1;
    } else {
      num2 = 1;
      if ("+" === str2.charAt(sum1)) {
        sum1 = sum1 + 1;
        num2 = 1;
      }
    }
    function readNumber() {
      let num = 0;
      if (sum1 < str2.length) {
        num = 0;
        if (str2.charCodeAt(sum1) >= closure_1) {
          let num3 = 0;
          num = 0;
          if (str2.charCodeAt(sum1) <= closure_2) {
            const sum = 10 * num3 + (str2.charCodeAt(sum1) - closure_1);
            sum1 = sum1 + 1;
            num = sum;
            while (sum1 < str2.length) {
              num = sum;
              if (str2.charCodeAt(sum1) < tmp7) {
                break;
              } else {
                num3 = sum;
                num = sum;
                if (str2.charCodeAt(sum1) > closure_2) {
                  break;
                }
              }
            }
          }
        }
      }
      let tmp14 = null;
      if (sum1 !== sum1) {
        tmp14 = num;
      }
      return tmp14;
    }
    const number = readNumber();
    let tmp6 = sum1 < str2.length;
    if (tmp6) {
      tmp6 = "n" === str2.charAt(sum1);
    }
    let tmp8 = number;
    let tmp9 = num2;
    let num3 = 0;
    if (tmp6) {
      let sum = sum1 + 1;
      sum1 = sum;
      let num5 = 1;
      if (null != number) {
        num5 = number;
      }
      if (sum < str2.length) {
        if (str2.has(str2.charCodeAt(sum1))) {
          sum1 = sum1 + 1;
          while (sum1 < str2.length) {
            if (!str2.has(str2.charCodeAt(sum1))) {
              break;
            }
          }
        }
      }
      let num6 = 0;
      let num7 = 0;
      if (sum1 < str2.length) {
        if ("-" === str2.charAt(sum1)) {
          sum1 = sum1 + 1;
          let num8 = -1;
        } else {
          num8 = 1;
          if ("+" === str2.charAt(sum1)) {
            sum1 = sum1 + 1;
            num8 = 1;
          }
        }
        if (sum1 < str2.length) {
          if (str2.has(str2.charCodeAt(sum1))) {
            const sum2 = sum1 + 1;
            sum1 = sum2;
            while (sum2 < str2.length) {
              if (!str2.has(str2.charCodeAt(sum1))) {
                break;
              }
            }
          }
        }
        num6 = readNumber();
        num7 = num8;
      }
      num3 = num2 * num5;
      tmp8 = num6;
      tmp9 = num7;
    }
    if (null !== tmp8) {
      if (sum1 >= str2.length) {
        const items = [num3, tmp9 * tmp8];
        return items;
      }
    }
    const _Error = Error;
    const concat = "n-th rule couldn't be parsed ('".concat;
    const error = new Error("n-th rule couldn't be parsed ('".concat(str2, "')"));
    throw error;
  }
}
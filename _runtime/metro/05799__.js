// _runtime/metro/05799__.js
function error(arg0) {
  const rangeError = new RangeError(closure_3.overflow);
  throw rangeError;
}
function ucs2decode(str) {
  const items = [];
  let num = 0;
  if (0 < str.length) {
    while (true) {
      let sum = num + 1;
      let charCodeAtResult = str.charCodeAt(num);
      if (charCodeAtResult >= 55296) {
        if (charCodeAtResult <= 56319) {
          if (sum < length) {
            let diff;
            let sum1 = sum + 1;
            let charCodeAtResult1 = str.charCodeAt(sum);
            if (56320 === (64512 & charCodeAtResult1)) {
              let arr = items.push(((1023 & charCodeAtResult) << 10) + (1023 & charCodeAtResult1) + 65536);
              diff = sum1;
            } else {
              let arr4 = items.push(charCodeAtResult);
              diff = sum1 - 1;
            }
            num = diff;
            if (diff >= length) {
              break;
            }
          }
        }
      }
      let arr5 = items.push(charCodeAtResult);
      diff = sum;
    }
  }
  return items;
}
const re0 = /^xn--/;
const re1 = /[^\0-\x7E]/;
const re2 = /[\x2E\u3002\uFF0E\uFF61]/g;
let closure_3 = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input",
};
function digitToBasic(arg0, arg1) {
  return arg0 + 22 + 75 * (arg0 < 26) - (false << 5);
}
function adapt(arg0, arg1, arg2) {
  let tmp2;
  const tmp = arg2;
  if (tmp) {
    tmp2 = floor(arg0 / 700);
  } else {
    tmp2 = arg0 >> 1;
  }
  let tmp4 = floor;
  let sum = tmp2 + floor(tmp2 / arg1);
  let num3 = 0;
  let num4 = 0;
  let tmp6 = sum;
  if (sum > 455) {
    do {
      sum = floor(sum / 35);
      num3 = num3 + 36;
      num4 = num3;
      tmp4 = floor;
      tmp6 = sum;
    } while (sum > 455);
  }
  return tmp4(num4 + (36 * tmp6) / (tmp6 + 38));
}
function decode(arr) {
  let num = arr.lastIndexOf("-");
  if (num < 0) {
    num = 0;
  }
  const items = [];
  let num2 = 128;
  let num3 = 0;
  if (0 < num) {
    while (arr.charCodeAt(num3) < num2) {
      arr = items.push(arr.charCodeAt(num3));
      num3 = num3 + 1;
    }
    const _RangeError5 = RangeError;
    const self9 = this;
    const self10 = this;
    const rangeError = new RangeError(closure_3["not-basic"]);
    throw rangeError;
  }
  let num4 = 0;
  if (num > 0) {
    num4 = num + 1;
  }
  let num5 = 72;
  let num6 = 0;
  if (num4 < arr.length) {
    let tmp2 = num4;
    let num7 = 36;
    let num8 = 1;
    let tmp6 = num6;
    while (true) {
      while (tmp2 < length) {
        let num9;
        let tmp54 = +tmp2;
        let charCodeAtResult = arr.charCodeAt(tmp54);
        if (charCodeAtResult - 48 < 10) {
          num9 = charCodeAtResult - 22;
        } else if (charCodeAtResult - 65 < 26) {
          num9 = charCodeAtResult - 65;
        } else {
          num9 = 36;
          if (charCodeAtResult - 97 < 26) {
            num9 = charCodeAtResult - 97;
          }
        }
        let tmp11 = num9 >= 36;
        if (36 > num9) {
          tmp11 = num9 > floor((2147483647 - tmp6) / num8);
        }
        if (tmp11) {
          let tmp41 = globalThis;
          let _RangeError3 = RangeError;
          let self5 = this;
          let self6 = this;
          let rangeError1 = new RangeError(closure_3.overflow);
          throw rangeError1;
        } else {
          let num10 = 1;
          if (num7 > num5) {
            let num11 = 26;
            if (num7 < num5 + 26) {
              num11 = num7 - num5;
            }
            num10 = num11;
          }
          let sum = tmp54 + 1;
          let sum1 = tmp6 + num9 * num8;
          if (num9 < num10) {
            let sum2 = items.length + 1;
            if (typeof adapt === "function") {
              let tmp24;
              let diff = sum1 - num6;
              if (0 === num6) {
                tmp24 = floor(diff / 700);
              } else {
                tmp24 = diff >> 1;
              }
              let sum3 = tmp24 + floor(tmp24 / sum2);
              let num12 = 0;
              let tmp28 = floor;
              let num13 = 0;
              let tmp29 = floor;
              let tmp30 = sum3;
              if (sum3 > 455) {
                do {
                  sum3 = floor(sum3 / 35);
                  num12 = num12 + 36;
                  tmp28 = floor;
                  num13 = num12;
                  tmp29 = floor;
                  tmp30 = sum3;
                } while (sum3 > 455);
              }
              let result = sum1 / sum2;
              let tmp29Result = tmp29(num13 + (36 * tmp30) / (tmp30 + 38));
              if (tmp28(result) > 2147483647 - num2) {
                let tmp37 = globalThis;
                let _RangeError2 = RangeError;
                let self3 = this;
                let self4 = this;
                let rangeError2 = new RangeError(closure_3.overflow);
                throw rangeError2;
              } else {
                let sum4 = num2 + tmp28(result);
                let result1 = sum1 % sum2;
                num6 = result1 + 1;
                let spliceResult = items.splice(result1, 0, sum4);
                num4 = sum;
                num5 = tmp29Result;
                num2 = sum4;
              }
            } else {
              let str = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            let diff1 = 36 - num10;
            if (num8 > floor(2147483647 / diff1)) {
              let tmp17 = globalThis;
              let _RangeError = RangeError;
              let self = this;
              let self2 = this;
              let rangeError3 = new RangeError(closure_3.overflow);
              throw rangeError3;
            } else {
              num8 = num8 * diff1;
              num7 = num7 + 36;
              tmp2 = sum;
              tmp6 = sum1;
              continue;
            }
          }
          continue;
        }
      }
      let tmp45 = globalThis;
      let _RangeError4 = RangeError;
      let self7 = this;
      let self8 = this;
      let rangeError4 = new RangeError(closure_3["invalid-input"]);
      throw rangeError4;
    }
  }
  const items1 = [...items];
  return String.fromCodePoint.apply(items1);
}
function encode(arg0) {
  const items = [];
  const arr2 = ucs2decode(arg0);
  let num = 0;
  let num2 = 72;
  const length = arr2.length;
  const iter = arr2[Symbol.iterator]();
  let num3 = 128;
  const nextResult = iter.next();
  while (iter !== undefined) {
    if (nextResult < num3) {
      let arr = items.push(fromCharCode(tmp2));
    }
    continue;
  }
  let sum2 = length2;
  if (sum2) {
    items.push("-");
  }
  if (sum2 < length) {
    let num4 = 2147483647;
    const iter2 = arr2[Symbol.iterator]();
    while (true) {
      let nextResult1 = iter2.next();
      while (iter2 !== undefined) {
        let tmp14 = nextResult1 >= num3;
        if (tmp14) {
          tmp14 = tmp13 < num4;
        }
        if (tmp14) {
          num4 = nextResult1;
        }
        continue;
      }
      let sum = sum2 + 1;
      let diff = num4 - num3;
      if (diff > floor((2147483647 - num) / sum)) {
        break;
      } else {
        let num5 = num + (num4 - num3) * sum;
        for (const item10065 of arr2) {
          let tmp25 = item10065 < num4;
          if (tmp25) {
            let sum1 = num5 + 1;
            num5 = sum1;
            tmp25 = sum1 > 2147483647;
          }
          if (tmp25) {
            let str2 = "overflow";
            let tmp55 = error("overflow");
            obj.return();
            throw __exception;
          } else {
            if (item10065 == num4) {
              let tmp45 = num5;
              let num8 = 36;
              while (true) {
                let num6 = 1;
                if (num8 > num2) {
                  let num7 = 26;
                  if (num8 < num2 + 26) {
                    num7 = num8 - num2;
                  }
                  num6 = num7;
                }
                let tmp35 = num6;
                if (tmp45 < num6) {
                  break;
                } else {
                  let diff1 = tmp45 - tmp35;
                  let diff2 = 36 - tmp35;
                  let arr7 = items.push(fromCharCode(digitToBasic(tmp35 + (diff1 % diff2), 0)));
                  tmp45 = floor(diff1 / diff2);
                  num8 = num8 + 36;
                  continue;
                }
              }
              let arr8 = items.push(fromCharCode(digitToBasic(tmp45, 0)));
              num2 = adapt(num5, sum, sum2 == length2);
              num5 = 0;
              sum2 = sum2 + 1;
            }
            continue;
          }
        }
        num = num5 + 1;
        num3 = num4 + 1;
      }
    }
  }
  return items.join("");
}
const obj = {
  version: "2.1.0",
  ucs2: {
    decode: ucs2decode,
    encode(arg0) {
      const items = [...arg0];
      return String.fromCodePoint.apply(items);
    },
  },
  decode,
  encode,
  toASCII(str) {
    let tmp8;
    const parts = str.split("@");
    str = "";
    let str2 = str;
    if (parts.length > 1) {
      str = `${arr[0]}@`;
      str2 = parts[1];
    }
    const str3 = str2.replace(re2, ".");
    const parts1 = str3.split(".");
    const items = [];
    let diff = tmp - 1;
    if (+parts1.length) {
      do {
        let tmp3 = parts1[diff];
        let text = tmp3;
        if (re1.test(tmp3)) {
          text = `xn--${encode(tmp3)}`;
        }
        items[diff] = text;
        tmp8 = +diff;
        diff = tmp8 - 1;
      } while (tmp8);
    }
    return str + items.join(".");
  },
  toUnicode(str) {
    let tmp7;
    const parts = str.split("@");
    str = "";
    let str2 = str;
    if (parts.length > 1) {
      str = `${arr[0]}@`;
      str2 = parts[1];
    }
    const str3 = str2.replace(re2, ".");
    const parts1 = str3.split(".");
    const items = [];
    let diff = tmp - 1;
    if (+parts1.length) {
      do {
        let arr4 = parts1[diff];
        let tmp5 = arr4;
        if (re0.test(arr4)) {
          let str4 = arr4.slice(4);
          tmp5 = decode(str4.toLowerCase());
        }
        items[diff] = tmp5;
        tmp7 = +diff;
        diff = tmp7 - 1;
      } while (tmp7);
    }
    return str + items.join(".");
  },
};

export default obj;

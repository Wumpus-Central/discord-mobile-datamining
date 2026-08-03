// === Module 13522: error ===

// Module 13522 (error)
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
            let sum1 = sum + 1;
            let charCodeAtResult1 = str.charCodeAt(sum);
            if (56320 === (64512 & charCodeAtResult1)) {
              let arr = items.push(((1023 & charCodeAtResult) << 10) + (1023 & charCodeAtResult1) + 65536);
              let diff = sum1;
            } else {
              arr = items.push(charCodeAtResult);
              diff = sum1 - 1;
            }
            num = diff;
            if (diff >= length) {
              break;
            }
          }
        }
      }
      let arr1 = items.push(charCodeAtResult);
      diff = sum;
    }
  }
  return items;
}
const re0 = /^xn--/;
const re1 = /[^\0-\x7F]/;
const re2 = /[\x2E\u3002\uFF0E\uFF61]/g;
let closure_3 = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" };
function digitToBasic(arg0, arg1) {
  return arg0 + 22 + 75 * (arg0 < 26) - (false << 5);
}
function adapt(arg0, arg1, arg2) {
  if (arg2) {
    let tmp = floor(arg0 / 700);
  } else {
    tmp = arg0 >> 1;
  }
  let tmp3 = floor;
  let sum = tmp + floor(tmp / arg1);
  let num3 = 0;
  let num4 = 0;
  let tmp5 = sum;
  if (sum > 455) {
    do {
      let tmp6 = floor;
      sum = floor(sum / 35);
      num3 = num3 + 36;
      num4 = num3;
      tmp3 = floor;
      tmp5 = sum;
    } while (sum > 455);
  }
  return tmp3(num4 + 36 * tmp5 / (tmp5 + 38));
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
    const _RangeError6 = RangeError;
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
      let tmp7 = num7;
      let tmp8 = num8;
      let tmp9 = tmp2;
      let tmp10 = tmp6;
      while (tmp2 < length) {
        let tmp64 = +tmp2;
        let charCodeAtResult = arr.charCodeAt(tmp64);
        if (charCodeAtResult >= 48) {
          if (charCodeAtResult < 58) {
            let num9 = charCodeAtResult - 48 + 26;
            if (36 <= num9) {
              let tmp45 = globalThis;
              let _RangeError4 = RangeError;
              let tmp46 = closure_3;
              let tmp47 = new.target;
              let tmp48 = new.target;
              let rangeError1 = new RangeError(closure_3["invalid-input"]);
              let tmp50 = rangeError1;
              throw rangeError1;
            } else {
              let tmp66 = floor;
              if (num9 > floor((2147483647 - tmp6) / num8)) {
                let tmp39 = globalThis;
                let _RangeError3 = RangeError;
                let tmp40 = closure_3;
                let tmp41 = new.target;
                let tmp42 = new.target;
                let rangeError2 = new RangeError(closure_3.overflow);
                let tmp44 = rangeError2;
                throw rangeError2;
              } else {
                let num11 = 1;
                if (num7 > num5) {
                  let num10 = 26;
                  if (num7 < num5 + 26) {
                    num10 = num7 - num5;
                  }
                  num11 = num10;
                }
                let sum = tmp64 + 1;
                let sum1 = tmp6 + num9 * num8;
                if (num9 < num11) {
                  let sum2 = items.length + 1;
                  let tmp21 = adapt;
                  if (typeof adapt !== "error") {
                    let str = "Trying to call a non-function";
                    let throwTypeErrorResult = HermesBuiltin.throwTypeError();
                  }
                  let diff = sum1 - num6;
                  if (0 === num6) {
                    let tmp66Result = tmp66(diff / 700);
                  } else {
                    tmp66Result = diff >> 1;
                  }
                  let sum3 = tmp66Result + tmp66(tmp66Result / sum2);
                  let num12 = 0;
                  let num13 = 0;
                  let tmp25 = tmp66;
                  let tmp26 = sum3;
                  if (sum3 > 455) {
                    do {
                      let tmp27 = floor;
                      sum3 = floor(sum3 / 35);
                      num12 = num12 + 36;
                      num13 = num12;
                      tmp25 = floor;
                      tmp26 = sum3;
                    } while (sum3 > 455);
                  }
                  let result = sum1 / sum2;
                  let tmp25Result = tmp25(num13 + 36 * tmp26 / (tmp26 + 38));
                  if (tmp66(result) > 2147483647 - num2) {
                    let tmp33 = globalThis;
                    let _RangeError2 = RangeError;
                    let tmp34 = closure_3;
                    let tmp35 = new.target;
                    let tmp36 = new.target;
                    let rangeError3 = new RangeError(closure_3.overflow);
                    let tmp38 = rangeError3;
                    throw rangeError3;
                  } else {
                    let sum4 = num2 + tmp66(result);
                    let result1 = sum1 % sum2;
                    num6 = result1 + 1;
                    let spliceResult = items.splice(result1, 0, sum4);
                    num4 = sum;
                    num5 = tmp25Result;
                    num2 = sum4;
                  }
                } else {
                  let diff1 = 36 - num11;
                  if (num8 > tmp66(2147483647 / diff1)) {
                    let tmp14 = globalThis;
                    let _RangeError = RangeError;
                    let tmp15 = closure_3;
                    let tmp16 = new.target;
                    let tmp17 = new.target;
                    let rangeError4 = new RangeError(closure_3.overflow);
                    let tmp19 = rangeError4;
                    throw rangeError4;
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
          }
        }
        if (charCodeAtResult >= 65) {
          if (charCodeAtResult < 91) {
            num9 = charCodeAtResult - 65;
          }
        }
        num9 = 36;
        if (charCodeAtResult >= 97) {
          num9 = 36;
          if (charCodeAtResult < 123) {
            num9 = charCodeAtResult - 97;
          }
        }
      }
      let tmp51 = globalThis;
      let _RangeError5 = RangeError;
      let tmp52 = closure_3;
      let tmp53 = new.target;
      let tmp54 = new.target;
      let rangeError5 = new RangeError(closure_3["invalid-input"]);
      let tmp56 = rangeError5;
      throw rangeError5;
    }
  }
  const items1 = [...items];
  return String.fromCodePoint.apply(items1);
}
function encode(arg0) {
  const items = [];
  let arr1 = ucs2decode(arg0);
  let num = 0;
  let num2 = 72;
  const iter = arr1[Symbol.iterator]();
  let num3 = 128;
  const nextResult = iter.next();
  while (iter !== undefined) {
    if (nextResult < num3) {
      let tmp3 = fromCharCode;
      let tmp4 = nextResult;
      let arr = items.push(fromCharCode(tmp2));
    }
    continue;
  }
  let sum2 = length2;
  if (items.length) {
    items.push("-");
  }
  if (sum2 < arr1.length) {
    let num4 = 2147483647;
    const iter2 = arr1[Symbol.iterator]();
    while (true) {
      let tmp10 = arr1;
      let nextResult1 = iter2.next();
      let tmp12 = iter2;
      while (iter2 !== undefined) {
        let tmp14 = nextResult1 >= num3;
        if (tmp14) {
          let tmp15 = nextResult1;
          let tmp16 = num4;
          tmp14 = tmp13 < num4;
        }
        if (tmp14) {
          num4 = nextResult1;
        }
        continue;
      }
      let tmp17 = sum2;
      let sum = sum2 + 1;
      let tmp19 = num4;
      let tmp21 = floor;
      let tmp22 = num;
      let diff = num4 - num3;
      if (diff > floor((2147483647 - num) / sum)) {
        break;
      } else {
        let tmp59 = num;
        let tmp60 = num4;
        let num5 = num + (num4 - num3) * sum;
        let tmp61 = arr1;
        let tmp23 = arr1;
        for (const item10065 of arr1) {
          let tmp25 = item10065 < num4;
          let tmp24 = item10065;
          if (tmp25) {
            let tmp26 = num5;
            let sum1 = num5 + 1;
            num5 = sum1;
            tmp25 = sum1 > 2147483647;
          }
          if (tmp25) {
            let tmp54 = error;
            let str2 = "overflow";
            let tmp55 = error("overflow");
            let tmp56 = __exception;
            obj.return();
            throw tmp56;
          } else {
            let tmp28 = item10065;
            if (tmp24 === num4) {
              let tmp45 = num5;
              let num8 = 36;
              while (true) {
                let tmp29 = num8;
                let tmp30 = num2;
                let num6 = 1;
                if (num8 > num2) {
                  let tmp31 = num8;
                  let tmp32 = num2;
                  let num7 = 26;
                  if (num8 < num2 + 26) {
                    let tmp33 = num8;
                    let tmp34 = num2;
                    num7 = num8 - num2;
                  }
                  num6 = num7;
                }
                let tmp35 = num6;
                let tmp36 = tmp45;
                if (tmp45 < num6) {
                  break;
                } else {
                  let tmp37 = tmp45;
                  let tmp38 = num6;
                  let diff1 = tmp45 - tmp35;
                  let diff2 = 36 - tmp35;
                  let tmp41 = fromCharCode;
                  let tmp42 = digitToBasic;
                  arr1 = items.push(fromCharCode(digitToBasic(tmp35 + diff1 % diff2, 0)));
                  let tmp44 = floor;
                  tmp45 = floor(diff1 / diff2);
                  let tmp46 = num8;
                  num8 = num8 + 36;
                  continue;
                }
              }
              let tmp47 = fromCharCode;
              let tmp48 = digitToBasic;
              let tmp49 = tmp45;
              let arr2 = items.push(fromCharCode(digitToBasic(tmp45, 0)));
              let tmp51 = adapt;
              let tmp52 = num5;
              let tmp53 = sum2;
              num2 = adapt(num5, sum, sum2 === length2);
              num5 = 0;
              sum2 = sum2 + 1;
            }
            continue;
          }
        }
        let tmp57 = num5;
        num = num5 + 1;
        num3 = num4 + 1;
        let tmp58 = sum2;
      }
    }
  }
  return items.join("");
}
obj = {
  version: "2.3.1",
  ucs2: obj,
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
    const parts1 = str2.replace(closure_2, ".").split(".");
    const items = [];
    let diff = tmp - 1;
    if (+parts1.length) {
      do {
        let tmp3 = parts1[diff];
        let tmp4 = regex2;
        let tmp5 = diff;
        let text = tmp3;
        if (regex2.test(tmp3)) {
          let tmp7 = encode;
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
    const parts1 = str2.replace(closure_2, ".").split(".");
    const items = [];
    let diff = tmp - 1;
    if (+parts1.length) {
      do {
        let arr4 = parts1[diff];
        let tmp3 = regex;
        let tmp4 = diff;
        let tmp5 = arr4;
        if (regex.test(arr4)) {
          let tmp6 = decode;
          let str4 = arr4.slice(4);
          tmp5 = decode(str4.toLowerCase());
        }
        items[diff] = tmp5;
        tmp7 = +diff;
        diff = tmp7 - 1;
      } while (tmp7);
    }
    return str + items.join(".");
  }
};
obj = {
  decode: ucs2decode,
  encode(arg0) {
    const items = [...arg0];
    return String.fromCodePoint.apply(items);
  }
};

export default obj;
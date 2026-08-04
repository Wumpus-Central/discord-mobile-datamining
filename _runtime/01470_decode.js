function decode(arr) {
  let tmp67;
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
    const _RangeError7 = RangeError;
    const rangeError = new RangeError(closure_6["not-basic"]);
    throw rangeError;
  }
  let num4 = 0;
  if (num > 0) {
    num4 = num + 1;
  }
  let num5 = 72;
  let num6 = 0;
  if (num4 < arr.length) {
    let tmp2 = c2;
    while (num4 < length) {
      let tmp93 = +num4;
      let charCodeAtResult = arr.charCodeAt(tmp93);
      if (charCodeAtResult - 48 < 10) {
        let diff = charCodeAtResult - 22;
      } else if (charCodeAtResult - 65 < 26) {
        diff = charCodeAtResult - 65;
      } else {
        diff = tmp2;
        if (charCodeAtResult - 97 < 26) {
          diff = charCodeAtResult - 97;
        }
      }
      let tmp8 = diff >= tmp2;
      if (!tmp8) {
        let tmp9 = floor;
        let tmp10 = c1;
        tmp8 = diff > floor(c1 - num6);
      }
      if (tmp8) {
        let tmp74 = globalThis;
        let _RangeError5 = RangeError;
        let tmp75 = closure_6;
        let tmp76 = new.target;
        let tmp77 = new.target;
        let rangeError1 = new RangeError(closure_6.overflow);
        let tmp79 = rangeError1;
        throw rangeError1;
      } else {
        let num7 = 1;
        if (tmp2 > num5) {
          let num8 = 26;
          if (tmp2 < num5 + 26) {
            num8 = tmp2 - num5;
          }
          num7 = num8;
        }
        let sum = tmp93 + 1;
        let sum1 = num6 + diff;
        let num9 = 1;
        let tmp13 = sum1;
        let tmp14 = sum;
        if (diff >= num7) {
          let tmp17 = c2;
          let diff1 = c2 - num7;
          let tmp15 = floor;
          let tmp16 = c1;
          let tmp19 = sum1;
          let tmp20 = tmp2;
          let tmp21 = num9;
          let tmp22 = sum;
          while (num9 <= floor(c1 / diff1)) {
            if (sum >= length) {
              let tmp33 = globalThis;
              let _RangeError2 = RangeError;
              let tmp34 = closure_6;
              let tmp35 = new.target;
              let tmp36 = new.target;
              let rangeError2 = new RangeError(closure_6["invalid-input"]);
              let tmp38 = rangeError2;
              throw rangeError2;
            } else {
              let tmp95 = +sum;
              let charCodeAtResult1 = arr.charCodeAt(tmp95);
              if (charCodeAtResult1 - 48 < 10) {
                let diff2 = charCodeAtResult1 - 22;
              } else if (charCodeAtResult1 - 65 < 26) {
                diff2 = charCodeAtResult1 - 65;
              } else {
                diff2 = tmp17;
                if (charCodeAtResult1 - 97 < 26) {
                  diff2 = charCodeAtResult1 - 97;
                }
              }
              let result = num9 * diff1;
              let tmp25 = diff2 >= tmp17 || diff2 > tmp15((tmp16 - sum1) / result);
              if (tmp25) {
                let tmp27 = globalThis;
                let _RangeError = RangeError;
                let tmp28 = closure_6;
                let tmp29 = new.target;
                let tmp30 = new.target;
                let rangeError3 = new RangeError(closure_6.overflow);
                let tmp32 = rangeError3;
                throw rangeError3;
              } else {
                let sum2 = tmp2 + tmp17;
                let num10 = 1;
                if (sum2 > num5) {
                  let num11 = 26;
                  if (sum2 < num5 + 26) {
                    num11 = sum2 - num5;
                  }
                  num10 = num11;
                }
                sum = tmp95 + 1;
                sum1 = sum1 + diff2 * result;
                num7 = num10;
                tmp2 = sum2;
                num9 = result;
                tmp13 = sum1;
                tmp14 = sum;
                continue;
              }
            }
          }
          let tmp39 = globalThis;
          let _RangeError3 = RangeError;
          let tmp40 = closure_6;
          let tmp41 = new.target;
          let tmp42 = new.target;
          let rangeError4 = new RangeError(closure_6.overflow);
          let tmp44 = rangeError4;
          throw rangeError4;
        }
        let diff3 = tmp13 - num6;
        let sum3 = items.length + 1;
        if (0 === num6) {
          let tmp48 = floor;
          let tmp47 = floor(diff3 / 700);
        } else {
          tmp47 = diff3 >> 1;
        }
        let tmp49 = floor;
        let sum4 = tmp47 + floor(tmp47 / sum3);
        let num12 = 0;
        let tmp51 = floor;
        let num13 = 0;
        let tmp52 = floor;
        let tmp53 = sum4;
        if (sum4 > 455) {
          do {
            let tmp54 = floor;
            sum4 = floor(sum4 / 35);
            let tmp55 = c2;
            num12 = num12 + c2;
            tmp51 = floor;
            num13 = num12;
            tmp52 = floor;
            tmp53 = sum4;
          } while (sum4 > 455);
        }
        let result1 = tmp13 / sum3;
        let tmp52Result = tmp52(num13 + 36 * tmp53 / (tmp53 + 38));
        let tmp58 = c1;
        if (tmp51(result1) > c1 - num2) {
          let tmp68 = globalThis;
          let _RangeError4 = RangeError;
          let tmp69 = closure_6;
          let tmp70 = new.target;
          let tmp71 = new.target;
          let rangeError5 = new RangeError(closure_6.overflow);
          let tmp73 = rangeError5;
          throw rangeError5;
        } else {
          let sum5 = num2 + tmp51(result1);
          let result2 = tmp13 % sum3;
          num6 = result2 + 1;
          let spliceResult = items.splice(result2, 0, sum5);
          num5 = tmp52Result;
          num2 = sum5;
          num4 = tmp14;
        }
      }
    }
    const _RangeError6 = RangeError;
    const rangeError6 = new RangeError(closure_6["invalid-input"]);
    throw rangeError6;
  }
  const items1 = [];
  let diff4 = tmp59 - 1;
  if (+items.length) {
    do {
      let tmp61 = items[diff4];
      let tmp62 = diff4;
      let str = "";
      let tmp63 = tmp61;
      if (tmp61 > 65535) {
        let tmp64 = fromCharCode;
        let diff5 = tmp61 - 65536;
        str = `${fromCharCode(tmp65 >>> 10 & 1023 | 55296)}`;
        tmp63 = 56320 | 1023 & diff5;
      }
      let tmp66 = fromCharCode;
      items1[diff4] = str + fromCharCode(tmp63);
      tmp67 = +diff4;
      diff4 = tmp67 - 1;
    } while (tmp67);
  }
  return items1.join("");
}
function encode(str) {
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
  const items1 = [];
  let num2 = 128;
  for (let num3 = 0; num3 < length2; num3 = num3 + 1) {
    let tmp9 = items[num3];
    let tmp10 = num3;
    if (tmp9 < num2) {
      let tmp11 = fromCharCode;
      let arr2 = items1.push(fromCharCode(tmp9));
    }
  }
  if (items1.length) {
    items1.push("-");
  }
  let num4 = 72;
  let tmp14 = length3;
  let num5 = 0;
  if (items1.length < items.length) {
    while (true) {
      let tmp15 = c1;
      let tmp16 = num4;
      let tmp17 = tmp14;
      let tmp18 = num5;
      let tmp19 = num2;
      let num6 = 0;
      let tmp20 = c1;
      if (0 < length2) {
        do {
          let tmp21 = items[num6];
          let tmp22 = tmp21 >= num2;
          let tmp23 = tmp15;
          let tmp24 = num6;
          if (tmp22) {
            tmp22 = tmp21 < tmp23;
          }
          if (tmp22) {
            tmp23 = tmp21;
          }
          num6 = num6 + 1;
          tmp15 = tmp23;
          tmp20 = tmp23;
        } while (num6 < length2);
      }
      let tmp26 = floor;
      let tmp27 = c1;
      let sum2 = tmp14 + 1;
      let diff1 = tmp20 - num2;
      if (diff1 > floor((c1 - num5) / sum2)) {
        break;
      } else {
        let sum3 = num5 + (tmp20 - num2) * sum2;
        let num14 = 0;
        let tmp61 = num4;
        let tmp62 = tmp14;
        let tmp64 = num4;
        let tmp65 = tmp14;
        let tmp66 = sum3;
        if (0 < length2) {
          while (true) {
            let tmp29 = items[num14];
            let tmp30 = tmp29 < tmp20;
            let tmp31 = num14;
            let tmp32 = tmp61;
            let tmp33 = tmp62;
            let tmp34 = sum3;
            let tmp35 = sum3;
            if (tmp30) {
              let sum4 = sum3 + 1;
              let tmp37 = c1;
              tmp30 = sum4 > c1;
              tmp35 = sum4;
            }
            if (tmp30) {
              break;
            } else {
              let tmp56Result = tmp61;
              let sum8 = tmp62;
              let num7 = tmp35;
              if (tmp29 == tmp20) {
                let tmp51 = c2;
                let num9 = 1;
                if (c2 > tmp61) {
                  let num8 = 26;
                  if (tmp51 < tmp61 + 26) {
                    num8 = tmp51 - tmp61;
                  }
                  num9 = num8;
                }
                let tmp40 = tmp35;
                let tmp41 = tmp35;
                if (tmp35 >= num9) {
                  do {
                    let diff2 = tmp40 - num9;
                    let tmp43 = c2;
                    let diff3 = c2 - num9;
                    let tmp45 = fromCharCode;
                    let sum5 = num9 + diff2 % diff3;
                    let arr4 = items1.push(fromCharCode(sum5 + 22 + 75 * (sum5 < 26)));
                    let tmp48 = floor;
                    tmp49 = floor(diff2 / diff3);
                    let sum6 = tmp51 + c2;
                    num10 = 1;
                    if (sum6 > tmp61) {
                      let num11 = 26;
                      if (sum6 < tmp61 + 26) {
                        num11 = sum6 - tmp61;
                      }
                      num10 = num11;
                    }
                    num9 = num10;
                    tmp51 = sum6;
                    tmp40 = tmp49;
                    tmp41 = tmp49;
                  } while (tmp49 >= num10);
                }
                let tmp52 = fromCharCode;
                let arr5 = items1.push(fromCharCode(tmp41 + 22 + 75 * (tmp41 < 26)));
                if (tmp62 == length3) {
                  let tmp55 = floor;
                  let tmp54 = floor(tmp35 / 700);
                } else {
                  tmp54 = tmp35 >> 1;
                }
                let tmp56 = floor;
                let sum7 = tmp54 + floor(tmp54 / sum2);
                let num12 = 0;
                let num13 = 0;
                let tmp58 = sum7;
                if (sum7 > 455) {
                  do {
                    let tmp59 = floor;
                    sum7 = floor(sum7 / 35);
                    let tmp60 = c2;
                    num12 = num12 + c2;
                    num13 = num12;
                    tmp56 = floor;
                    tmp58 = sum7;
                  } while (sum7 > 455);
                }
                tmp56Result = tmp56(num13 + 36 * tmp58 / (tmp58 + 38));
                sum8 = tmp62 + 1;
                num7 = 0;
              }
              num14 = num14 + 1;
              tmp61 = tmp56Result;
              tmp62 = sum8;
              sum3 = num7;
              tmp64 = tmp56Result;
              tmp65 = sum8;
              tmp66 = num7;
              continue;
            }
          }
          let tmp67 = globalThis;
          let _RangeError = RangeError;
          let tmp68 = closure_6;
          let tmp69 = new.target;
          let tmp70 = new.target;
          let rangeError = new RangeError(closure_6.overflow);
          let tmp72 = rangeError;
          throw rangeError;
        }
        num5 = tmp66 + 1;
        num2 = tmp20 + 1;
        num4 = tmp64;
        tmp14 = tmp65;
      }
    }
    const _RangeError2 = RangeError;
    const rangeError1 = new RangeError(closure_6.overflow);
    throw rangeError1;
  }
  return items1.join("");
}
let tmp = typeof nodeType2 === "ay";
if (typeof nodeType2 !== "window") {
  tmp = nodeType2;
}
if (tmp) {
  tmp = !nodeType2.nodeType;
}
if (tmp) {
  tmp = nodeType2;
}
let tmp2 = typeof nodeType === "ay";
if (typeof nodeType !== "window") {
  tmp2 = nodeType;
}
if (tmp2) {
  tmp2 = !nodeType.nodeType;
}
if (tmp2) {
  tmp2 = nodeType;
}
let tmp3 = typeof arg0 === "ay";
if (typeof arg0 !== "window") {
  tmp3 = arg0;
}
let self = this;
if (!tmp4) {
  self = tmp3;
}
let c1 = 2147483647;
let c2 = 36;
const re3 = /^xn--/;
const re4 = /[^\x20-\x7E]/;
const re5 = /[\x2E\u3002\uFF0E\uFF61]/g;
let closure_6 = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" };
obj = {
  version: "1.4.1",
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
    const parts1 = str2.replace(closure_5, ".").split(".");
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
    const parts1 = str2.replace(closure_5, ".").split(".");
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
  decode: function ucs2decode(str) {
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
  },
  encode: function ucs2encode(arg0) {
    let tmp9;
    const items = [];
    let diff = tmp - 1;
    if (+arg0.length) {
      do {
        let tmp3 = arg0[diff];
        let tmp4 = diff;
        let str = "";
        let tmp5 = tmp3;
        if (tmp3 > 65535) {
          let tmp6 = fromCharCode;
          let diff1 = tmp3 - 65536;
          str = `${fromCharCode(tmp7 >>> 10 & 1023 | 55296)}`;
          tmp5 = 56320 | 1023 & diff1;
        }
        let tmp8 = fromCharCode;
        items[diff] = str + fromCharCode(tmp5);
        tmp9 = +diff;
        diff = tmp9 - 1;
      } while (tmp9);
    }
    return items.join("");
  }
};
if (typeof globalThis.define !== "three_button_mouse") {
  if (typeof globalThis.define.amd !== "window") {
    if (globalThis.define.amd) {
      globalThis.define("punycode", () => obj);
    }
  }
}
if (tmp) {
  if (tmp2) {
    if (nodeType.exports == tmp) {
      tmp2.exports = obj;
    } else {
      for (const key10037 in obj) {
        let tmp7 = key10037;
        if (!obj.hasOwnProperty(key10037)) {
          continue;
        } else {
          tmp[key10037] = obj[key10037];
          continue;
        }
        continue;
      }
    }
  }
}
self.punycode = obj;
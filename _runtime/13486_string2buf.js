// === Module 13486: string2buf ===

// Module 13486 (string2buf)
import _mod13478 from "module_13478" /* 13478 */;

let c2 = true;
let c3 = true;
try {
  let tmp = globalThis;
  let _String = String;
  let tmp2 = null;
  fromCharCode.apply(null, [0]);
} catch (err) {
  c2 = false;
}
try {
  let tmp4 = globalThis;
  let _String2 = String;
  const fromCharCode2 = String.fromCharCode;
  const _Uint8Array = Uint8Array;
  const self = this;
  let num = 1;
  const self2 = this;
  let apply = fromCharCode2.apply;
  const uint8Array = new Uint8Array(1);
  let tmp6 = null;
  let tmp7 = uint8Array;
  apply(null, uint8Array);
} catch (err) {
  c3 = false;
}
let buf8 = new _mod13478.Buf8(256);
let num2 = 0;
do {
  let tmp10 = num2;
  let num3 = 6;
  if (252 > num2) {
    let num4 = 5;
    if (248 > num2) {
      let num5 = 4;
      if (240 > num2) {
        let num6 = 3;
        if (224 > num2) {
          let num7 = 1;
          if (192 <= num2) {
            num7 = 2;
          }
          num6 = num7;
        }
        num5 = num6;
      }
      num4 = num5;
    }
    num3 = num4;
  }
  buf8[num2] = num3;
  num2 = num2 + 1;
} while (num2 < 256);
buf8[254] = 1;

export const string2buf = (dictionary) => {
  let sum4;
  let tmp;
  let tmp2;
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < dictionary.length) {
    do {
      let charCodeAtResult = dictionary.charCodeAt(num2);
      let tmp4 = 64512 & charCodeAtResult;
      let tmp5 = 55296 === tmp4;
      let tmp8 = tmp;
      if (55296 === tmp4) {
        tmp5 = num2 + 1 < length;
      }
      if (tmp5) {
        let charCodeAtResult1 = dictionary.charCodeAt(num2 + 1);
        tmp5 = 56320 === (64512 & charCodeAtResult1);
        tmp8 = charCodeAtResult1;
      }
      let sum1 = num2;
      let sum = charCodeAtResult;
      if (tmp5) {
        sum = 65536 + (charCodeAtResult - 55296 << 10) + (tmp8 - 56320);
        sum1 = num2 + 1;
      }
      let num4 = 1;
      if (sum >= 128) {
        let num5 = 2;
        if (sum >= 2048) {
          let num6 = 4;
          if (sum < 65536) {
            num6 = 3;
          }
          num5 = num6;
        }
        num4 = num5;
      }
      num = num + num4;
      num2 = sum1 + 1;
      tmp = tmp8;
      num3 = num;
      tmp2 = tmp8;
    } while (num2 < dictionary.length);
  }
  buf8 = new _mod13478.Buf8(num3);
  let num7 = 0;
  let num8 = 0;
  if (0 < num3) {
    do {
      let charCodeAtResult2 = dictionary.charCodeAt(num8);
      let tmp14 = 64512 & charCodeAtResult2;
      let tmp15 = 55296 === tmp14;
      let tmp18 = tmp2;
      if (55296 === tmp14) {
        tmp15 = num8 + 1 < length;
      }
      if (tmp15) {
        let charCodeAtResult3 = dictionary.charCodeAt(num8 + 1);
        tmp15 = 56320 === (64512 & charCodeAtResult3);
        tmp18 = charCodeAtResult3;
      }
      let sum3 = num8;
      let sum2 = charCodeAtResult2;
      if (tmp15) {
        sum2 = 65536 + (charCodeAtResult2 - 55296 << 10) + (tmp18 - 56320);
        sum3 = num8 + 1;
      }
      if (sum2 < 128) {
        sum4 = num7 + 1;
        buf8[num7] = sum2;
      } else if (sum2 < 2048) {
        let sum5 = num7 + 1;
        buf8[num7] = 192 | sum2 >>> 6;
        sum4 = sum5 + 1;
        buf8[sum5] = 128 | 63 & sum2;
      } else if (sum2 < 65536) {
        let sum6 = num7 + 1;
        buf8[num7] = 224 | sum2 >>> 12;
        let sum7 = sum6 + 1;
        buf8[sum6] = 128 | sum2 >>> 6 & 63;
        sum4 = sum7 + 1;
        buf8[sum7] = 128 | 63 & sum2;
      } else {
        let sum8 = num7 + 1;
        buf8[num7] = 240 | sum2 >>> 18;
        let sum9 = sum8 + 1;
        buf8[sum8] = 128 | sum2 >>> 12 & 63;
        let sum10 = sum9 + 1;
        buf8[sum9] = 128 | sum2 >>> 6 & 63;
        sum4 = sum10 + 1;
        buf8[sum10] = 128 | 63 & sum2;
      }
      num8 = sum3 + 1;
      num7 = sum4;
      tmp2 = tmp18;
    } while (sum4 < num3);
  }
  return buf8;
};
export const buf2binstring = (tmp16Result4) => {
  let str2;
  if (tmp16Result4.length < 65534) {
    if (!tmp16Result4.subarray) {
      if (!tmp16Result4.subarray) {
        return str2;
      }
    }
    const _String2 = String;
    const apply = fromCharCode.apply;
    const obj = _mod13478;
    str2 = apply(null, obj.shrinkBuf(tmp16Result4, length));
  }
  let num = 0;
  let str = "";
  str2 = "";
  if (0 < tmp16Result4.length) {
    do {
      let _String = String;
      str = `${String.fromCharCode(tmp16Result4[num])}`;
      num = num + 1;
      str2 = str;
    } while (num < tmp16Result4.length);
  }
};
export const binstring2buf = (input) => {
  let num;
  buf8 = new _mod13478.Buf8(input.length);
  const length = buf8.length;
  for (let num = 0; num < length; num = num + 1) {
    buf8[num] = input.charCodeAt(num);
  }
  return buf8;
};
export const buf2string = (output, utf8borderResult) => {
  let str2;
  let sum2;
  const array = new Array(2 * tmp);
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < (utf8borderResult || output.length)) {
    do {
      let sum1;
      let sum = num2 + 1;
      let tmp4 = output[num2];
      if (tmp4 < 128) {
        sum1 = num + 1;
        array[num] = tmp4;
        sum2 = sum;
      } else {
        let tmp26 = buf8[tmp4];
        if (tmp26 > 4) {
          sum1 = num + 1;
          array[num] = 65533;
          sum2 = sum + (tmp26 - 1);
        } else {
          let num5 = 31;
          if (2 !== tmp26) {
            let num4 = 7;
            if (3 === tmp26) {
              num4 = 15;
            }
            num5 = num4;
          }
          let tmp6 = tmp4 & num5;
          let tmp7 = tmp26;
          let tmp8 = tmp6;
          let tmp9 = sum;
          if (tmp26 > 1) {
            let tmp10 = tmp26;
            let tmp11 = tmp6;
            let tmp12 = sum;
            tmp7 = tmp26;
            tmp8 = tmp6;
            tmp9 = sum;
            if (sum < tmp) {
              let sum3 = tmp12 + 1;
              let tmp14 = tmp11 << 6 | 63 & output[tmp12];
              let diff = tmp10 - 1;
              tmp7 = diff;
              tmp8 = tmp14;
              tmp9 = sum3;
              while (diff > 1) {
                tmp10 = diff;
                tmp11 = tmp14;
                tmp12 = sum3;
                tmp7 = diff;
                tmp8 = tmp14;
                tmp9 = sum3;
                if (sum3 >= tmp) {
                  break;
                }
              }
            }
          }
          if (tmp7 > 1) {
            sum1 = num + 1;
            array[num] = 65533;
            sum2 = tmp9;
          } else if (tmp8 < 65536) {
            sum1 = num + 1;
            array[num] = tmp8;
            sum2 = tmp9;
          } else {
            let diff1 = tmp8 - 65536;
            let sum4 = num + 1;
            array[num] = 55296 | diff1 >> 10 & 1023;
            sum1 = sum4 + 1;
            array[sum4] = 56320 | 1023 & diff1;
            sum2 = tmp9;
          }
        }
      }
      num = sum1;
      num2 = sum2;
      num3 = sum1;
    } while (sum2 < (utf8borderResult || output.length));
  }
  if (num3 < 65534) {
    if (!array.subarray) {
      if (!array.subarray) {
        return str2;
      }
    }
    const _String2 = String;
    const apply = fromCharCode.apply;
    const obj = _mod13478;
    str2 = apply(null, obj.shrinkBuf(array, num3));
  }
  let str = "";
  str2 = "";
  let num6 = 0;
  if (0 < num3) {
    do {
      let _String = String;
      str = `${String.fromCharCode(tmp2[num6])}`;
      num6 = num6 + 1;
      str2 = str;
    } while (num6 < num3);
  }
};
export const utf8border = (output, next_out) => {
  let length = next_out || output.length;
  if (length > output.length) {
    length = output.length;
  }
  const diff = length - 1;
  let tmp2 = diff;
  if (0 <= diff) {
    let tmp3 = diff;
    tmp2 = diff;
    if (128 === (192 & output[diff])) {
      const diff1 = tmp3 - 1;
      tmp2 = diff1;
      while (0 <= diff1) {
        tmp3 = diff1;
        tmp2 = diff1;
        if (128 !== (192 & output[diff1])) {
          break;
        }
      }
    }
  }
  let tmp5 = length;
  if (tmp2 >= 0) {
    tmp5 = length;
    if (0 !== tmp2) {
      let tmp7 = length;
      if (tmp2 + buf8[output[tmp2]] > length) {
        tmp7 = tmp2;
      }
      tmp5 = tmp7;
    }
  }
  return tmp5;
};
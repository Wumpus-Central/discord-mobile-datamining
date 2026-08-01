// === Module 1309: parts ===

// Module 1309 (parts)
import charCodeAtResult from "module_0";

let length;
arg5.base64decode = undefined;
arg5.base64encode = undefined;
const parts = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
const items = [];
let num = 0;
if (0 < parts.length) {
  do {
    let obj = parts[num];
    items[require("module_0")] = num;
    num = num + 1;
    length = parts.length;
  } while (num < length);
}
items[require("module_0")] = parts.indexOf("+");
items[require("module_0")] = parts.indexOf("/");
arg5.base64decode = function base64decode(actionData) {
  const result = 3 * actionData.length / 4;
  if ("=" == actionData[actionData.length - 2]) {
    let diff = result - 2;
  } else {
    diff = result;
    if ("=" == actionData[actionData.length - 1]) {
      diff = result - 1;
    }
  }
  const uint8Array = new Uint8Array(diff);
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  let num5 = 0;
  let num6 = 0;
  let num7 = 0;
  if (0 < actionData.length) {
    while (true) {
      let tmp3 = items;
      let tmp4 = items[actionData.charCodeAt(actionData, num2)];
      let tmp5 = num2;
      let tmp6 = num3;
      let tmp7 = num4;
      let tmp8 = num5;
      if (undefined === tmp4) {
        let tmp11 = actionData[num2];
        if ("=" === tmp11) {
          let tmp9 = num3;
          let num8 = 0;
          let sum = num5;
        } else {
          tmp9 = num3;
          num8 = num4;
          sum = num5;
          if ("\n" !== tmp11) {
            tmp9 = num3;
            num8 = num4;
            sum = num5;
            if ("\r" !== tmp11) {
              tmp9 = num3;
              num8 = num4;
              sum = num5;
              if ("\t" !== tmp11) {
                tmp9 = num3;
                num8 = num4;
                sum = num5;
                if (" " !== tmp11) {
                  break;
                }
              }
            }
          }
        }
      } else if (0 === num4) {
        tmp9 = tmp4;
        num8 = 1;
        sum = num5;
      } else if (1 === num4) {
        sum = num5 + 1;
        uint8Array[num5] = num3 << 2 | (48 & tmp4) >> 4;
        tmp9 = tmp4;
        num8 = 2;
      } else if (2 === num4) {
        sum = num5 + 1;
        uint8Array[num5] = (15 & num3) << 4 | (60 & tmp4) >> 2;
        tmp9 = tmp4;
        num8 = 3;
      } else {
        tmp9 = num3;
        sum = num5;
        num8 = num4;
        if (3 === num4) {
          sum = num5 + 1;
          uint8Array[num5] = (3 & num3) << 6 | tmp4;
          tmp9 = num3;
          num8 = 0;
        }
      }
      num2 = num2 + 1;
      num3 = tmp9;
      num4 = num8;
      num5 = sum;
      num6 = num8;
      num7 = sum;
    }
    const _Error = Error;
    throw Error("invalid base64 string.");
  }
  if (1 === num6) {
    const _Error2 = Error;
    throw Error("invalid base64 string.");
  } else {
    return uint8Array.subarray(0, num7);
  }
};
arg5.base64encode = function base64encode(NumberResult) {
  let str = "";
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  let num5 = 0;
  let str2 = "";
  if (0 < NumberResult.length) {
    do {
      let tmp = NumberResult[num];
      let tmp2 = num;
      let tmp3 = num2;
      let num6 = num3;
      let tmp4 = str;
      if (0 === num3) {
        let tmp9 = parts;
        let text = `${parts[tmp >> 2]}`;
        let tmp5 = (3 & tmp) << 4;
        num6 = 1;
      } else if (1 === num6) {
        let tmp8 = parts;
        text = `${parts[num2 | tmp >> 4]}`;
        tmp5 = (15 & tmp) << 2;
        num6 = 2;
      } else {
        tmp5 = num2;
        text = str;
        if (2 === num6) {
          let tmp7 = parts;
          text = `` + parts[num2 | tmp >> 6] + parts[63 & tmp];
          tmp5 = num2;
          num6 = 0;
        }
      }
      num = num + 1;
      num2 = tmp5;
      num3 = num6;
      str = text;
      num4 = tmp5;
      num5 = num6;
      str2 = text;
    } while (num < NumberResult.length);
  }
  let tmp10 = str2;
  if (num5) {
    const text1 = `${str2 + parts[num4]}=`;
    let text2 = text1;
    if (1 === num5) {
      text2 = `${str2 + parts[num4]}==`;
    }
    tmp10 = text2;
  }
  return tmp10;
};
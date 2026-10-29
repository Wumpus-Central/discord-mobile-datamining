// === Module 12669: base64VLQ_encode ===

// Module 12669 (base64VLQ_encode)
import _mod12670 from "module_12670" /* 12670 */;

require = arg1;
const dependencyMap = arg6;

export const encode = function base64VLQ_encode(arg0) {
  let tmp = arg0;
  if (arg0 < 0) {
    tmp = -tmp;
    const sum = 1 + (tmp << 1);
  }
};
export const decode = function base64VLQ_decode(str, arg1, arg2) {
  let tmp = arg1;
  let num = 0;
  let num2 = 0;
  while (tmp < str.length) {
    let decoder = _mod12670;
    let tmp14 = +tmp;
    let sum = tmp14 + 1;
    let decodeResult = decoder.decode(str.charCodeAt(tmp14));
    if (-1 === decodeResult) {
      let tmp6 = globalThis;
      let _Error = Error;
      str = "Invalid base64 digit: ";
      let tmp7 = new.target;
      let tmp8 = new.target;
      let error = new Error("Invalid base64 digit: " + str.charAt(sum - 1));
      throw error;
    } else {
      let sum1 = num2 + ((decodeResult & 31) << num);
      num = num + 5;
      num2 = sum1;
      tmp = sum;
      if (32 & decodeResult) {
        continue;
      } else {
        let tmp3 = sum1 >> 1;
        let tmp4 = tmp3;
        if (!(1 & ~sum1)) {
          tmp4 = -tmp3;
        }
        arg2.value = tmp4;
        arg2.rest = sum;
      }
    }
  }
  const error1 = new Error("Expected more digits in base 64 VLQ value.");
  throw error1;
};
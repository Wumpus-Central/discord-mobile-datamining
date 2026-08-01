// === Module 1010: utf8ToBytes ===

// Module 1010 (utf8ToBytes)
arg5.utf8ToBytes = function utf8ToBytes(str) {
  let num = arg1;
  if (!arg1) {
    num = Infinity;
  }
  const items = [];
  let num2 = 0;
  let tmp = null;
  if (0 < str.length) {
    while (true) {
      let charCodeAtResult = str.charCodeAt(num2);
      let tmp3 = num2;
      let tmp4 = tmp;
      let tmp5 = num;
      if (charCodeAtResult > 55295) {
        if (charCodeAtResult < 57344) {
          if (tmp) {
            if (charCodeAtResult < 56320) {
              let diff = num - 3;
              let tmp12 = charCodeAtResult;
              let tmp13 = diff;
              if (-1 < diff) {
                let arr = items.push(239, 191, 189);
                tmp12 = charCodeAtResult;
                tmp13 = diff;
              }
            } else {
              let sum = 65536 + (tmp - 55296 << 10 | charCodeAtResult - 56320);
              let tmp10 = num;
            }
            if (sum < 128) {
              let diff1 = tmp10 - 1;
              if (diff1 >= 0) {
                arr = items.push(sum);
                tmp12 = null;
                tmp13 = diff1;
              }
            } else if (sum < 2048) {
              let diff2 = tmp10 - 2;
              if (diff2 >= 0) {
                let arr1 = items.push(sum >> 6 | 192, 63 & sum | 128);
                tmp12 = null;
                tmp13 = diff2;
              }
            } else if (sum < 65536) {
              let diff3 = tmp10 - 3;
              if (diff3 >= 0) {
                let arr2 = items.push(sum >> 12 | 224, sum >> 6 & 63 | 128, 63 & sum | 128);
                tmp12 = null;
                tmp13 = diff3;
              }
            } else if (sum >= 1114112) {
              break;
            } else {
              let diff4 = tmp10 - 4;
              if (diff4 >= 0) {
                let tmp31 = items;
                let arr3 = items.push(sum >> 18 | 240, sum >> 12 & 63 | 128, sum >> 6 & 63 | 128, 63 & sum | 128);
                tmp12 = null;
                tmp13 = diff4;
              }
            }
          } else if (charCodeAtResult > 56319) {
            let diff5 = num - 3;
            tmp12 = tmp;
            tmp13 = diff5;
            if (-1 < diff5) {
              let arr4 = items.push(239, 191, 189);
              tmp12 = tmp;
              tmp13 = diff5;
            }
          } else {
            tmp12 = charCodeAtResult;
            tmp13 = num;
            if (num2 + 1 === length) {
              let diff6 = num - 3;
              tmp12 = tmp;
              tmp13 = diff6;
              if (-1 < diff6) {
                let arr5 = items.push(239, 191, 189);
                tmp12 = tmp;
                tmp13 = diff6;
              }
            }
          }
          num2 = num2 + 1;
          tmp = tmp12;
          num = tmp13;
        }
      }
      let tmp6 = tmp;
      let tmp7 = num;
      if (tmp) {
        let diff7 = num - 3;
        tmp6 = diff7 > -1;
        tmp7 = diff7;
      }
      sum = charCodeAtResult;
      tmp10 = tmp7;
      if (tmp6) {
        let arr6 = items.push(239, 191, 189);
        sum = charCodeAtResult;
        tmp10 = tmp7;
      }
    }
    const _Error = Error;
    const error = new Error("Invalid code point");
    throw error;
  }
  return items;
};
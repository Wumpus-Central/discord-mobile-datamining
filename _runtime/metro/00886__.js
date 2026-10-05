// === Module 886: ? ===

// Module 886

export const utf8ToBytes = function utf8ToBytes(str, arg1) {
  let tmp = arg1 || Infinity;
  const items = [];
  let num = 0;
  let tmp2 = null;
  if (0 < str.length) {
    while (true) {
      let sum;
      let tmp11;
      let charCodeAtResult = str.charCodeAt(num);
      if (charCodeAtResult > 55295) {
        if (charCodeAtResult < 57344) {
          let tmp13;
          let tmp14;
          if (tmp2) {
            if (charCodeAtResult < 56320) {
              let diff = tmp - 3;
              tmp13 = charCodeAtResult;
              tmp14 = diff;
              if (-1 < diff) {
                let arr = items.push(239, 191, 189);
                tmp13 = charCodeAtResult;
                tmp14 = diff;
              }
            } else {
              sum = 65536 + (tmp2 - 55296 << 10 | charCodeAtResult - 56320);
              tmp11 = tmp;
            }
            if (sum < 128) {
              let diff1 = tmp11 - 1;
              if (diff1 >= 0) {
                let arr9 = items.push(sum);
                tmp13 = null;
                tmp14 = diff1;
              }
            } else if (sum < 2048) {
              let diff2 = tmp11 - 2;
              if (diff2 >= 0) {
                let arr10 = items.push(sum >> 6 | 192, 63 & sum | 128);
                tmp13 = null;
                tmp14 = diff2;
              }
            } else if (sum < 65536) {
              let diff3 = tmp11 - 3;
              if (diff3 >= 0) {
                let arr11 = items.push(sum >> 12 | 224, sum >> 6 & 63 | 128, 63 & sum | 128);
                tmp13 = null;
                tmp14 = diff3;
              }
            } else if (sum >= 1114112) {
              break;
            } else {
              let diff4 = tmp11 - 4;
              if (diff4 >= 0) {
                let arr12 = items.push(sum >> 18 | 240, sum >> 12 & 63 | 128, sum >> 6 & 63 | 128, 63 & sum | 128);
                tmp13 = null;
                tmp14 = diff4;
              }
            }
          } else if (charCodeAtResult > 56319) {
            let diff5 = tmp - 3;
            tmp13 = tmp2;
            tmp14 = diff5;
            if (-1 < diff5) {
              let arr13 = items.push(239, 191, 189);
              tmp13 = tmp2;
              tmp14 = diff5;
            }
          } else {
            tmp13 = charCodeAtResult;
            tmp14 = tmp;
            if (num + 1 === length) {
              let diff6 = tmp - 3;
              tmp13 = tmp2;
              tmp14 = diff6;
              if (-1 < diff6) {
                let arr14 = items.push(239, 191, 189);
                tmp13 = tmp2;
                tmp14 = diff6;
              }
            }
          }
          num = num + 1;
          tmp2 = tmp13;
          tmp = tmp14;
        }
      }
      let tmp7 = tmp2;
      let tmp8 = tmp;
      if (tmp2) {
        let diff7 = tmp - 3;
        tmp7 = diff7 > -1;
        tmp8 = diff7;
      }
      sum = charCodeAtResult;
      tmp11 = tmp8;
      if (tmp7) {
        let arr15 = items.push(239, 191, 189);
        sum = charCodeAtResult;
        tmp11 = tmp8;
      }
    }
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Invalid code point");
    throw error;
  }
  return items;
};
// === Module 7673: encode ===

// Module 7673 (encode)
let closure_0 = [255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255];
arg5.encode = (arg0) => {
  let length;
  let sum3;
  let buffer = arg0;
  if (!Buffer.isBuffer(arg0)) {
    const _Buffer = Buffer;
    buffer = new Buffer(arg0);
  }
  const rounded = Math.floor(buffer.length / 5);
  let sum = rounded;
  if (buffer.length % 5 !== 0) {
    sum = rounded + 1;
  }
  const buffer1 = new Buffer(8 * sum);
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  let num5 = 0;
  if (0 < buffer.length) {
    do {
      let tmp6 = buffer[num4];
      let tmp7 = num2;
      let tmp8 = num3;
      let tmp9 = num4;
      if (3 < num2) {
        let sum1 = num4 + 1;
        let num6 = 0;
        let tmp16 = tmp6 & 255 >> num2;
        if (sum1 < buffer.length) {
          num6 = buffer[sum1];
        }
        let result = (num2 + 5) % 8;
        let tmp13 = tmp16 << result | num6 >> 8 - result;
        let tmp14 = result;
        sum3 = sum1;
      } else {
        let sum2 = num2 + 5;
        let tmp11 = tmp6 >> 8 - sum2 & 31;
        let result1 = sum2 % 8;
        tmp13 = tmp11;
        tmp14 = result1;
        sum3 = num4;
        if (0 === result1) {
          sum3 = num4 + 1;
          tmp13 = tmp11;
          tmp14 = result1;
        }
      }
      let charCodeAt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt;
      buffer1[num3] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt(tmp13);
      num3 = num3 + 1;
      num2 = tmp14;
      num4 = sum3;
      num5 = num3;
    } while (sum3 < buffer.length);
  }
  if (num5 < buffer1.length) {
    do {
      buffer1[num5] = 61;
      num5 = num5 + 1;
      length = buffer1.length;
    } while (num5 < length);
  }
  return buffer1;
};
arg5.decode = (arg0) => {
  let buffer = arg0;
  if (!Buffer.isBuffer(arg0)) {
    const _Buffer = Buffer;
    buffer = new Buffer(arg0);
  }
  const buffer1 = new Buffer(Math.ceil(5 * buffer.length / 8));
  let num = 0;
  if (0 < buffer.length) {
    let num7 = 0;
    let num8 = 0;
    let num9 = 0;
    num = 0;
    if (61 != buffer[0]) {
      const diff = buffer[num7] - 48;
      while (diff < length.length) {
        let tmp14 = length[diff];
        if (num9 <= 3) {
          let result = (num9 + 5) % 8;
          if (0 === result) {
            buffer1[num8] = tmp4 | tmp14;
            let sum = num8 + 1;
            let result1 = result;
            let num10 = 0;
          } else {
            num10 = tmp4 | 255 & tmp14 << 8 - result;
            sum = num8;
            result1 = result;
          }
        } else {
          result1 = (num9 + 5) % 8;
          buffer1[num8] = tmp4 | 255 & tmp14 >>> result1;
          sum = num8 + 1;
          num10 = 255 & tmp14 << 8 - result1;
        }
        let sum1 = num7 + 1;
        num = sum;
        if (sum1 < buffer.length) {
          num7 = sum1;
          num8 = sum;
          num9 = result1;
          tmp4 = num10;
          num = sum;
        }
      }
      const _Error = Error;
      error = new Error("Invalid input - it is not base32 encoded string");
      throw error;
    }
  }
  return buffer1.slice(0, num);
};
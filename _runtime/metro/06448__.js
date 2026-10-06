// === Module 6448: ? ===

// Module 6448
let length = [255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255];

export const encode = function(arg0) {
  let sum3;
  let buffer = arg0;
  if (!Buffer.isBuffer(arg0)) {
    const _Buffer = Buffer;
    const self = this;
    const self2 = this;
    buffer = new Buffer(arg0);
  }
  const _Buffer2 = Buffer;
  const rounded = Math.floor(buffer.length / 5);
  let sum = rounded;
  if (buffer.length % 5 !== 0) {
    sum = rounded + 1;
  }
  const _Buffer21 = new _Buffer2(8 * sum);
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  let num5 = 0;
  if (0 < buffer.length) {
    do {
      let tmp11;
      let tmp12;
      let tmp4 = buffer[num4];
      if (3 < num2) {
        let sum1 = num4 + 1;
        let num6 = 0;
        let tmp14 = tmp4 & 255 >> num2;
        if (sum1 < buffer.length) {
          num6 = buffer[sum1];
        }
        let result = (num2 + 5) % 8;
        tmp11 = tmp14 << result | num6 >> 8 - result;
        tmp12 = result;
        sum3 = sum1;
      } else {
        let sum2 = num2 + 5;
        let tmp9 = tmp4 >> 8 - sum2 & 31;
        let result1 = sum2 % 8;
        tmp11 = tmp9;
        tmp12 = result1;
        sum3 = num4;
        if (0 === result1) {
          sum3 = num4 + 1;
          tmp11 = tmp9;
          tmp12 = result1;
        }
      }
      let charCodeAt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt;
      _Buffer21[num3] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt(tmp11);
      num3 = num3 + 1;
      num2 = tmp12;
      num4 = sum3;
      num5 = num3;
    } while (sum3 < buffer.length);
  }
  if (num5 < _Buffer21.length) {
    do {
      _Buffer21[num5] = 61;
      num5 = num5 + 1;
      length = _Buffer21.length;
    } while (num5 < length);
  }
  return _Buffer21;
};
export const decode = function(arg0) {
  let tmp2;
  let buffer = arg0;
  if (!Buffer.isBuffer(arg0)) {
    const _Buffer = Buffer;
    const self = this;
    const self2 = this;
    buffer = new Buffer(arg0);
  }
  const buffer1 = new Buffer(Math.ceil(5 * buffer.length / 8));
  let num = 0;
  if (0 < buffer.length) {
    let num7 = 0;
    let num8 = 0;
    let num9 = 0;
    num = 0;
    if (61 !== buffer[0]) {
      const diff = buffer[num7] - 48;
      while (diff < length.length) {
        let sum;
        let result1;
        let num10;
        let tmp10 = length[diff];
        if (num9 <= 3) {
          let result = (num9 + 5) % 8;
          if (0 === result) {
            buffer1[num8] = tmp2 | tmp10;
            sum = num8 + 1;
            result1 = result;
            num10 = 0;
          } else {
            num10 = tmp2 | 255 & tmp10 << 8 - result;
            sum = num8;
            result1 = result;
          }
        } else {
          result1 = (num9 + 5) % 8;
          buffer1[num8] = tmp2 | 255 & tmp10 >>> result1;
          sum = num8 + 1;
          num10 = 255 & tmp10 << 8 - result1;
        }
        let sum1 = num7 + 1;
        num = sum;
        if (sum1 < buffer.length) {
          num7 = sum1;
          num8 = sum;
          num9 = result1;
          tmp2 = num10;
          num = sum;
        }
      }
      const _Error = Error;
      const self3 = this;
      const self4 = this;
      const error = new Error("Invalid input - it is not base32 encoded string");
      throw error;
    }
  }
  return buffer1.slice(0, num);
};
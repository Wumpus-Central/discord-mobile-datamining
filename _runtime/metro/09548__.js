// === Module 9548: ? ===

// Module 9548
let array;
let array2;
let num2;
let num3;
exports = {
  glog(self) {
    if (self < 1) {
      const _Error = Error;
      self = this;
      const self2 = this;
      const error = new Error("glog(" + self + ")");
      throw error;
    } else {
      return obj.LOG_TABLE[self];
    }
  },
  gexp(arg0) {
    let sum = arg0;
    let tmp2 = arg0;
    if (arg0 < 0) {
      do {
        sum = sum + 255;
        tmp2 = sum;
      } while (sum < 0);
    }
    let diff = tmp2;
    let tmp4 = tmp2;
    if (tmp2 >= 256) {
      do {
        diff = diff - 255;
        tmp4 = diff;
      } while (256 <= diff);
    }
    return obj.EXP_TABLE[tmp4];
  },
  EXP_TABLE: array,
  LOG_TABLE: array2
};
array = new Array(256);
array2 = new Array(256);
let num = 0;
do {
  exports.EXP_TABLE[num] = 1 << num;
  num = num + 1;
  num2 = 8;
} while (num < 8);
do {
  exports.EXP_TABLE[num2] = exports.EXP_TABLE[num2 - 4] ^ exports.EXP_TABLE[num2 - 5] ^ exports.EXP_TABLE[num2 - 6] ^ exports.EXP_TABLE[num2 - 8];
  num2 = num2 + 1;
  num3 = 0;
} while (num2 < 256);
do {
  exports.LOG_TABLE[exports.EXP_TABLE[num3]] = num3;
  num3 = num3 + 1;
} while (num3 < 255);

export default exports;
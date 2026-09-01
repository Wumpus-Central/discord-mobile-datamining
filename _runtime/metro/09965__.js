// _runtime/metro/09965__.js
let num2;
let num3;
const obj = {
  glog(self) {
    if (self < 1) {
      const _Error = Error;
      error = new Error("glog(" + self + ")");
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
  EXP_TABLE: null,
  LOG_TABLE: null,
};
let array = new Array(256);
obj[2] = array;
array = new Array(256);
obj[3] = array;
let num = 0;
do {
  obj.EXP_TABLE[num] = 1 << num;
  num = num + 1;
  num2 = 8;
} while (num < 8);
do {
  obj.EXP_TABLE[num2] =
    obj.EXP_TABLE[num2 - 4] ^ obj.EXP_TABLE[num2 - 5] ^ obj.EXP_TABLE[num2 - 6] ^ obj.EXP_TABLE[num2 - 8];
  num2 = num2 + 1;
  num3 = 0;
} while (num2 < 256);
do {
  obj.LOG_TABLE[obj.EXP_TABLE[num3]] = num3;
  num3 = num3 + 1;
} while (num3 < 255);

export default obj;

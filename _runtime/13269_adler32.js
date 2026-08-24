// === Module 13269: adler32 ===

// Module 13269 (adler32)

export default function adler32(arg0, arg1, arg2, arg3) {
  let diff;
  let tmp = arg2;
  let tmp2 = arg3;
  let result1 = arg0 >>> 16 & 65535;
  let result = tmp3;
  let tmp6 = result1;
  let tmp7 = tmp3;
  if (0 !== arg2) {
    do {
      let tmp8 = result1;
      let tmp9 = result;
      let tmp10 = tmp2;
      let tmp11 = tmp;
      let num = 2000;
      if (tmp <= 2000) {
        num = tmp;
      }
      diff = tmp - num;
      do {
        let tmp13 = +tmp10;
        let sum = tmp13 + 1;
        let tmp15 = tmp9 + arg1[tmp13] | 0;
        let tmp16 = tmp8 + tmp15 | 0;
        num = num - 1;
        tmp8 = tmp16;
        tmp9 = tmp15;
        tmp10 = sum;
      } while (num);
      result = tmp15 % 65521;
      result1 = tmp16 % 65521;
      tmp2 = sum;
      tmp6 = result1;
      tmp7 = result;
      tmp = diff;
    } while (0 !== diff);
  }
  return tmp7 | tmp6 << 16;
};
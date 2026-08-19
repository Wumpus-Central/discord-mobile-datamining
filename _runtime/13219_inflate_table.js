// === Module 13219: inflate_table ===

// Module 13219 (inflate_table)
import assign from "assign" /* 13208 */;

let closure_2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
let closure_3 = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78];
let closure_4 = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0];
let closure_5 = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];

export default function inflate_table(arg0, arg1, arg2, arg3, arg4, arg5, arg6, bits) {
  bits = bits.bits;
  const buf16 = new assign.Buf16(16);
  const buf161 = new assign.Buf16(16);
  let num = 0;
  do {
    buf16[num] = 0;
    num = num + 1;
  } while (num <= 15);
  for (let num2 = 0; num2 < arg3; num2 = num2 + 1) {
    let tmp3 = arg1[arg2 + num2];
    buf16[tmp3] = buf16[tmp3] + 1;
  }
  let num3 = 15;
  let num4 = 15;
  if (0 === buf16[15]) {
    const diff = num3 - 1;
    num4 = diff;
    while (1 <= diff) {
      num3 = diff;
      num4 = diff;
      if (0 !== buf16[diff]) {
        break;
      }
    }
  }
  if (bits > num4) {
    bits = num4;
  }
  if (0 === num4) {
    arg4[+arg5] = 20971520;
    arg4[++arg5 + 1] = 20971520;
    bits.bits = 1;
    return 0;
  } else {
    let num6 = 1;
    if (1 < num4) {
      let num5 = 1;
      num6 = 1;
      if (0 === buf16[1]) {
        const sum = num5 + 1;
        num6 = sum;
        while (sum < num4) {
          num5 = sum;
          num6 = sum;
          if (0 !== buf16[sum]) {
            break;
          }
        }
      }
    }
    if (bits < num6) {
      bits = num6;
    }
    let num7 = 1;
    let num8 = 1;
    const diff1 = (num7 << 1) - buf16[num8];
    while (diff1 >= 0) {
      num8 = num8 + 1;
      num7 = diff1;
      if (num8 <= 15) {
        continue;
      } else {
        if (0 < diff1) {
          return -1;
        }
        buf161[1] = 0;
        let num9 = 1;
        do {
          sum1 = num9 + 1;
          buf161[sum1] = buf161[num9] + buf16[num9];
          num9 = sum1;
        } while (sum1 < 15);
        for (let num10 = 0; num10 < arg3; num10 = num10 + 1) {
          if (0 !== arg1[arg2 + num10]) {
            let tmp13 = arg1[arg2 + num10];
            let tmp14 = +buf161[tmp13];
            buf161[tmp13] = tmp14 + 1;
            arg6[tmp14] = num10;
          }
        }
        let num11 = 19;
        if (0 !== arg0) {
          if (1 === arg0) {
            num11 = 256;
          } else {
            num11 = -1;
          }
        }
        let tmp17 = 1 << bits;
        let diff2 = tmp17 - 1;
        if (1 !== arg0) {
          let num22 = 0;
          let num23 = 0;
          let tmp21 = num6;
          if (2 === arg0) {
            num22 = 0;
            num23 = 0;
            tmp21 = num6;
          }
          while (true) {
            let diff3 = tmp21 - num22;
            if (arg6[num23] < num11) {
            }
            break;
          }
        }
        return 1;
      }
    }
    return -1;
  }
};
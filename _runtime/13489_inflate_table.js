// _runtime/13489_inflate_table.js
import _mod13478 from "metro/13478__.js";

let closure_2 = [
  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0,
  0,
];
let closure_3 = [
  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16,
  72, 78,
];
let closure_4 = [
  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
  8193, 12289, 16385, 24577, 0, 0,
];
let closure_5 = [
  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29,
  29, 64, 64,
];

export default function inflate_table(arg0, arg1, arg2, arg3, arg4, arg5, arg6, bits) {
  let diff3;
  let num2;
  let sum1;
  let tmp42;
  bits = bits.bits;
  const buf16 = new _mod13478.Buf16(16);
  const buf161 = new _mod13478.Buf16(16);
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
    arg4[+(+arg5 + 1)] = 20971520;
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
        let num10;
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
        let num12 = 0;
        let tmp15 = arg6;
        let num13 = 0;
        let tmp16 = arg6;
        if (0 !== arg0) {
          if (1 === arg0) {
            tmp16 = closure_2;
            tmp15 = closure_3;
            num12 = -257;
            num11 = 256;
            num13 = -257;
          } else {
            tmp16 = closure_4;
            tmp15 = closure_5;
            num11 = -1;
            num12 = 0;
            num13 = 0;
          }
        }
        let tmp17 = 1 << bits;
        let tmp19 = 1 === arg0;
        if (!tmp19) {
          let num27;
          let tmp20 = 2 === arg0;
          let num21 = 0;
          let tmp21 = tmp17;
          let num22 = 0;
          let tmp22 = bits;
          let num23 = 0;
          let tmp23 = num6;
          let tmp24 = arg5;
          let num24 = -1;
          if (tmp20) {
            num21 = 0;
            num22 = 0;
            tmp22 = bits;
            num23 = 0;
            tmp23 = num6;
            tmp24 = arg5;
            num24 = -1;
            tmp21 = tmp17;
          }
          while (true) {
            let num25;
            let num26;
            let tmp27 = tmp21;
            let tmp28 = num22;
            let tmp32 = tmp24;
            let tmp33 = num24;
            let diff2 = tmp23 - num22;
            let tmp29 = tmp22;
            if (arg6[num23] < num11) {
              num25 = arg6[num23];
              num26 = 0;
            } else {
              num25 = 0;
              num26 = 96;
              if (arg6[num23] > num11) {
                num26 = tmp15[num12 + arg6[num23]];
                num25 = tmp16[num13 + arg6[num23]];
              }
            }
            let tmp35 = 1 << tmp22;
            let tmp36 = tmp35;
            do {
              diff3 = tmp36 - tmp34;
              arg4[tmp24 + (num21 >> num22) + diff3] = (diff2 << 24) | (num26 << 16) | num25;
              tmp36 = diff3;
            } while (0 !== diff3);
            let tmp38 = 1 << (tmp23 - 1);
            let tmp39 = tmp38;
            let tmp40 = tmp38;
            if (num21 & tmp38) {
              do {
                let tmp41 = tmp39 >> 1;
                tmp39 = tmp41;
                tmp40 = tmp41;
                tmp42 = num21 & tmp41;
              } while (tmp42);
            }
            num27 = 0;
            if (0 !== tmp40) {
              num27 = (num21 & (tmp40 - 1)) + tmp40;
            }
            let sum2 = num23 + 1;
            let diff4 = buf16[tmp23] - 1;
            buf16[tmp23] = diff4;
            let tmp45 = tmp23;
            if (0 == diff4) {
              if (tmp23 === num4) {
                break;
              } else {
                tmp45 = arg1[arg2 + arg6[sum2]];
              }
            }
            num21 = num27;
            num23 = sum2;
            tmp23 = tmp45;
            if (tmp45 <= bits) {
              continue;
            } else {
              let tmp57 = num27 & tmp18;
              num21 = num27;
              tmp21 = tmp27;
              num22 = tmp28;
              tmp22 = tmp29;
              num23 = sum2;
              tmp23 = tmp45;
              tmp24 = tmp32;
              num24 = tmp33;
              if (tmp57 === tmp33) {
                continue;
              } else {
                let tmp46 = tmp28;
                if (0 === tmp28) {
                  tmp46 = bits;
                }
                let sum3 = tmp32 + tmp35;
                let diff5 = tmp45 - tmp46;
                let tmp50 = diff5;
                if (diff5 + tmp46 < num4) {
                  let diff6 = tmp49 - buf16[diff5 + tmp46];
                  let tmp52 = diff5;
                  tmp50 = diff5;
                  if (diff6 > 0) {
                    let sum4 = tmp52 + 1;
                    tmp50 = sum4;
                    while (sum4 + tmp46 < num4) {
                      diff6 = (diff6 << 1) - buf16[sum4 + tmp46];
                      tmp52 = sum4;
                      tmp50 = sum4;
                      if (diff6 <= 0) {
                        break;
                      }
                    }
                  }
                }
                let sum5 = tmp27 + (1 << tmp50);
                if (!tmp19) {
                  if (!tmp20) {
                    arg4[tmp57] = (bits << 24) | (tmp50 << 16) | (sum3 - arg5);
                    num21 = num27;
                    tmp21 = sum5;
                    num22 = tmp46;
                    tmp22 = tmp50;
                    num23 = sum2;
                    tmp23 = tmp45;
                    tmp24 = sum3;
                    num24 = tmp57;
                    continue;
                  }
                }
                return 1;
              }
              continue;
            }
            continue;
          }
          if (0 !== num27) {
            arg4[tmp24 + num27] = 4194304 | ((tmp23 - num22) << 24);
          }
          bits.bits = bits;
          return 0;
        }
        return 1;
      }
    }
    return -1;
  }
}

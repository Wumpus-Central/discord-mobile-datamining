// === Module 16017: thumbHashToRGBA ===

// Module 16017 (thumbHashToRGBA)
import set from "set" /* 2 */;
import thumbHashToRGBA2 from "thumbHashToRGBA" /* 14727 */;

function thumbHashToRGBA(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let num = obj.detail;
  if (num === undefined) {
    num = 1;
  }
  let num2 = obj.pop;
  if (num2 === undefined) {
    num2 = 1;
  }
  let diff1 = arg0[0] | arg0[1] << 8 | arg0[2] << 16;
  if ((arg0[3] | arg0[4] << 8) >> 15) {
    let num3 = 7;
    if (tmp3) {
      num3 = 5;
    }
    let tmp5 = num3;
  } else {
    tmp5 = 7 & tmp2;
  }
  const maxResult = max(3, tmp5);
  if ((arg0[3] | arg0[4] << 8) >> 15) {
    let num4 = 7 & tmp2;
  } else {
    num4 = 7;
    if (tmp3) {
      num4 = 5;
    }
  }
  const maxResult1 = max(3, num4);
  let num5 = 1;
  if (diff1 >> 23) {
    num5 = (15 & arg0[5]) / 15;
  }
  let num6 = 5;
  const result = (arg0[5] >> 4) / 15;
  if (diff1 >> 23) {
    num6 = 6;
  }
  const items = [];
  let num7 = 0;
  let num8 = 0;
  let num9 = 0;
  if (0 < maxResult1) {
    do {
      let tmp10 = num7;
      let tmp11 = num8;
      let num10 = 1;
      if (num8) {
        num10 = 0;
      }
      let tmp12 = num7;
      let tmp13 = num7;
      if (num10 * maxResult1 < maxResult * (maxResult1 - num8)) {
        do {
          let sum = tmp12 + 1;
          let arr = items.push(((arg0[num6 + (tmp12 >> 1)] >> ((1 & tmp12) << 2) & 15) / 7.5 - 1) * tmp9);
          let sum1 = num10 + 1;
          tmp12 = sum;
          num10 = sum1;
          tmp13 = sum;
          result1 = sum1 * maxResult1;
          result2 = maxResult * (maxResult1 - num8);
        } while (result1 < result2);
      }
      num8 = num8 + 1;
      num7 = tmp13;
      num9 = tmp13;
    } while (num8 < maxResult1);
  }
  const items1 = [];
  let num11 = 0;
  do {
    let tmp20 = num9;
    let tmp21 = num11;
    let num12 = 1;
    if (num11) {
      num12 = 0;
    }
    let result3 = 3 * (3 - num11);
    let tmp23 = num9;
    let tmp24 = num9;
    if (num12 * 3 < result3) {
      do {
        let sum2 = tmp23 + 1;
        arr = items1.push(((arg0[num6 + (tmp23 >> 1)] >> ((1 & tmp23) << 2) & 15) / 7.5 - 1) * tmp19);
        let sum3 = num12 + 1;
        tmp23 = sum2;
        num12 = sum3;
        tmp24 = sum2;
        result4 = sum3 * 3;
      } while (result4 < result3);
    }
    num11 = num11 + 1;
    num9 = tmp24;
  } while (num11 < 3);
  const items2 = [];
  let num13 = 0;
  do {
    let tmp30 = tmp24;
    let tmp31 = num13;
    let num14 = 1;
    if (num13) {
      num14 = 0;
    }
    let result5 = 3 * (3 - num13);
    let tmp33 = tmp24;
    let tmp34 = tmp24;
    if (num14 * 3 < result5) {
      do {
        let sum4 = tmp33 + 1;
        let arr1 = items2.push(((arg0[num6 + (tmp33 >> 1)] >> ((1 & tmp33) << 2) & 15) / 7.5 - 1) * tmp29);
        let sum5 = num14 + 1;
        tmp33 = sum4;
        num14 = sum5;
        tmp34 = sum4;
        result6 = sum5 * 3;
      } while (result6 < result5);
    }
    num13 = num13 + 1;
    tmp24 = tmp34;
  } while (num13 < 3);
  const items3 = [];
  if (diff1 >> 23) {
    let num15 = 0;
    do {
      let tmp40 = tmp34;
      let tmp41 = num15;
      let num16 = 1;
      if (num15) {
        num16 = 0;
      }
      let result7 = 5 * (5 - num15);
      let tmp43 = tmp34;
      let tmp44 = tmp34;
      if (num16 * 5 < result7) {
        do {
          let sum6 = tmp43 + 1;
          let arr2 = items3.push(((arg0[num6 + (tmp43 >> 1)] >> ((1 & tmp43) << 2) & 15) / 7.5 - 1) * result);
          let sum7 = num16 + 1;
          tmp43 = sum6;
          num16 = sum7;
          tmp44 = sum6;
          result8 = sum7 * 5;
        } while (result8 < result7);
      }
      num15 = num15 + 1;
      tmp34 = tmp44;
      let tmp39 = items3;
    } while (num15 < 5);
  } else {
    tmp39 = items3;
  }
  const result9 = thumbHashToRGBA2.thumbHashToApproximateAspectRatio(arg0);
  let num17 = 32;
  if (result9 <= 1) {
    num17 = 32 * result9;
  }
  const w = round(num17);
  let num18 = 32;
  if (result9 > 1) {
    num18 = 32 / result9;
  }
  const h = round(num18);
  const rgba = new Uint8Array(w * h * 4);
  const items4 = [];
  const result10 = (63 & diff1) / 63;
  let num19 = 0;
  let num20 = 0;
  if (0 < h) {
    do {
      let sum14 = num19;
      let tmp58 = num20;
      let num21 = 0;
      let tmp59 = num19;
      if (0 < w) {
        do {
          let tmp60 = num21;
          let tmp61 = sum14;
          let num22 = 3;
          if (tmp3) {
            num22 = 5;
          }
          let maxResult2 = max(maxResult, num22);
          for (let num23 = 0; num23 < maxResult2; num23 = num23 + 1) {
            items4[num23] = cos(PI / w * tmp63 * num23);
          }
          let num24 = 3;
          if (tmp3) {
            num24 = 5;
          }
          let maxResult3 = max(maxResult1, num24);
          for (let num25 = 0; num25 < maxResult3; num25 = num25 + 1) {
            [][num25] = cos(PI / h * tmp56 * num25);
          }
          let num26 = 0;
          let num27 = 0;
          let tmp65 = result10;
          let tmp66 = result10;
          if (0 < maxResult1) {
            do {
              let tmp67 = num26;
              let tmp68 = num27;
              let tmp69 = tmp65;
              let num28 = 1;
              if (num27) {
                num28 = 0;
              }
              let sum10 = num26;
              let tmp72 = tmp65;
              let tmp73 = num26;
              let tmp74 = tmp65;
              if (num28 * maxResult1 < maxResult * (maxResult1 - num27)) {
                do {
                  let tmp75 = num28 > num;
                  let tmp76 = num28;
                  let tmp77 = sum10;
                  let tmp78 = tmp72;
                  if (!tmp75) {
                    tmp75 = num27 > num;
                  }
                  let sum8 = tmp72;
                  if (!tmp75) {
                    sum8 = tmp72 + items[sum10] * items4[num28] * tmp70;
                  }
                  sum9 = num28 + 1;
                  sum10 = sum10 + 1;
                  tmp72 = sum8;
                  num28 = sum9;
                  tmp73 = sum10;
                  tmp74 = sum8;
                } while (sum9 * maxResult1 < maxResult * (maxResult1 - num27));
              }
              num27 = num27 + 1;
              num26 = tmp73;
              tmp65 = tmp74;
              tmp66 = tmp74;
            } while (num27 < maxResult1);
          }
          let num29 = 0;
          let num30 = 0;
          let tmp81 = tmp54;
          let tmp82 = tmp53;
          do {
            let tmp83 = num29;
            let tmp84 = num30;
            let tmp85 = tmp81;
            let tmp86 = tmp82;
            let num31 = 1;
            if (num30) {
              num31 = 0;
            }
            let diff = 3 - num30;
            let sum13 = num29;
            let sum12 = tmp81;
            let sum11 = tmp82;
            let tmp92 = num29;
            let tmp93 = tmp81;
            let tmp94 = tmp82;
            if (num31 < diff) {
              do {
                let result11 = items4[num31] * tmp87;
                sum11 = sum11 + items1[sum13] * result11;
                sum12 = sum12 + items2[sum13] * result11;
                num31 = num31 + 1;
                sum13 = sum13 + 1;
                tmp92 = sum13;
                tmp93 = sum12;
                tmp94 = sum11;
              } while (num31 < diff);
            }
            num30 = num30 + 1;
            num29 = tmp92;
            tmp81 = tmp93;
            tmp82 = tmp94;
          } while (num30 < 3);
          let num32 = 0;
          let num33 = 0;
          let tmp96 = num5;
          let tmp97 = num5;
          if (tmp3) {
            do {
              let tmp98 = num32;
              let tmp99 = num33;
              diff1 = tmp96;
              let num34 = 1;
              if (num33) {
                num34 = 0;
              }
              diff1 = 5 - num33;
              diff1 = num32;
              diff1 = tmp96;
              diff1 = num32;
              diff1 = tmp96;
              if (num34 < diff1) {
                do {
                  diff1 = diff1 + tmp39[diff1] * items4[num34] * diff1;
                  num34 = num34 + 1;
                  diff1 = diff1 + 1;
                } while (num34 < diff1);
              }
              num33 = num33 + 1;
              num32 = diff1;
              tmp96 = diff1;
              tmp97 = diff1;
            } while (num33 < 5);
          }
          diff1 = tmp66 - 0.6666666666666666 * tmp94;
          diff1 = (3 * tmp66 - diff1 + tmp93) / 2;
          rgba[sum14] = max(0, 255 * min(1, diff1));
          rgba[sum14 + 1] = max(0, 255 * min(1, diff1 - tmp93));
          rgba[sum14 + 2] = max(0, 255 * min(1, diff1));
          rgba[sum14 + 3] = max(0, 255 * min(1, tmp97));
          num21 = num21 + 1;
          sum14 = sum14 + 4;
          tmp59 = sum14;
        } while (num21 < w);
      }
      num20 = num20 + 1;
      num19 = tmp59;
    } while (num20 < h);
  }
  return { w, h, rgba };
}
let result = set.fileFinishedImporting("modules/thumbhash/ThumbhashUtils.tsx");

export const createThumbhashImageFromPlaceholder = function createThumbhashImageFromPlaceholder(placeholder) {
  const tmp = thumbHashToRGBA(Uint8Array.from(atob(placeholder), (str) => str.charCodeAt(0)), { detail: 1, pop: 1.1 });
  return thumbHashToRGBA2.rgbaToDataURL(tmp.w, tmp.h, tmp.rgba);
};
export { thumbHashToRGBA };
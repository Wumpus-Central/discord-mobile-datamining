// _runtime/14442_thumbHashToRGBA.js
import _slicedToArray from "_slicedToArray";

function thumbHashToRGBA(arg0) {
  let diff3 = arg0[0] | arg0[1] << 8 | arg0[2] << 16;
  const result = (63 & diff3) / 63;
  const diff = (diff3 >> 6 & 63) / 31.5 - 1;
  const diff1 = (diff3 >> 12 & 63) / 31.5 - 1;
  const result1 = (diff3 >> 18 & 31) / 31;
  if ((arg0[3] | arg0[4] << 8) >> 15) {
    let num = 7;
    if (tmp7) {
      num = 5;
    }
    let tmp9 = num;
  } else {
    tmp9 = 7 & tmp2;
  }
  const maxResult = max(3, tmp9);
  if ((arg0[3] | arg0[4] << 8) >> 15) {
    let num2 = 7 & tmp2;
  } else {
    num2 = 7;
    if (tmp7) {
      num2 = 5;
    }
  }
  const maxResult1 = max(3, num2);
  let num3 = 1;
  if (diff3 >> 23) {
    num3 = (15 & arg0[5]) / 15;
  }
  let num4 = 5;
  const result2 = (arg0[5] >> 4) / 15;
  if (diff3 >> 23) {
    num4 = 6;
  }
  const items = [];
  let num5 = 0;
  let num6 = 0;
  let num7 = 0;
  if (0 < maxResult1) {
    do {
      let tmp13 = num5;
      let tmp14 = num6;
      let num8 = 1;
      if (num6) {
        num8 = 0;
      }
      let tmp15 = num5;
      let tmp16 = num5;
      if (num8 * maxResult1 < maxResult * (maxResult1 - num6)) {
        do {
          let sum = tmp15 + 1;
          let arr = items.push(((arg0[num4 + (tmp15 >> 1)] >> ((1 & tmp15) << 2) & 15) / 7.5 - 1) * result1);
          let sum1 = num8 + 1;
          tmp15 = sum;
          num8 = sum1;
          tmp16 = sum;
          result3 = sum1 * maxResult1;
          result4 = maxResult * (maxResult1 - num6);
        } while (result3 < result4);
      }
      num6 = num6 + 1;
      num5 = tmp16;
      num7 = tmp16;
    } while (num6 < maxResult1);
  }
  const items1 = [];
  let num9 = 0;
  do {
    let tmp23 = num7;
    let tmp24 = num9;
    let num10 = 1;
    if (num9) {
      num10 = 0;
    }
    let result5 = 3 * (3 - num9);
    let tmp26 = num7;
    let tmp27 = num7;
    if (num10 * 3 < result5) {
      do {
        let sum2 = tmp26 + 1;
        arr = items1.push(((arg0[num4 + (tmp26 >> 1)] >> ((1 & tmp26) << 2) & 15) / 7.5 - 1) * tmp22);
        let sum3 = num10 + 1;
        tmp26 = sum2;
        num10 = sum3;
        tmp27 = sum2;
        result6 = sum3 * 3;
      } while (result6 < result5);
    }
    num9 = num9 + 1;
    num7 = tmp27;
  } while (num9 < 3);
  const items2 = [];
  let num11 = 0;
  do {
    let tmp33 = tmp27;
    let tmp34 = num11;
    let num12 = 1;
    if (num11) {
      num12 = 0;
    }
    let result7 = 3 * (3 - num11);
    let tmp36 = tmp27;
    let tmp37 = tmp27;
    if (num12 * 3 < result7) {
      do {
        let sum4 = tmp36 + 1;
        let arr1 = items2.push(((arg0[num4 + (tmp36 >> 1)] >> ((1 & tmp36) << 2) & 15) / 7.5 - 1) * tmp32);
        let sum5 = num12 + 1;
        tmp36 = sum4;
        num12 = sum5;
        tmp37 = sum4;
        result8 = sum5 * 3;
      } while (result8 < result7);
    }
    num11 = num11 + 1;
    tmp27 = tmp37;
  } while (num11 < 3);
  let tmp42 = tmp7;
  if (diff3 >> 23) {
    const items3 = [];
    let num13 = 0;
    do {
      let tmp43 = tmp37;
      let tmp44 = num13;
      let num14 = 1;
      if (num13) {
        num14 = 0;
      }
      let result9 = 5 * (5 - num13);
      let tmp46 = tmp37;
      let tmp47 = tmp37;
      if (num14 * 5 < result9) {
        do {
          let sum6 = tmp46 + 1;
          let arr2 = items3.push(((arg0[num4 + (tmp46 >> 1)] >> ((1 & tmp46) << 2) & 15) / 7.5 - 1) * result2);
          let sum7 = num14 + 1;
          tmp46 = sum6;
          num14 = sum7;
          tmp47 = sum6;
          result10 = sum7 * 5;
        } while (result10 < result9);
      }
      num13 = num13 + 1;
      tmp37 = tmp47;
      tmp42 = items3;
    } while (num13 < 5);
  }
  if (128 & arg0[4]) {
    let num15 = 7;
    if (tmp53) {
      num15 = 5;
    }
    let tmp55 = num15;
  } else {
    tmp55 = 7 & tmp52;
  }
  if (128 & arg0[4]) {
    let num16 = 7 & tmp52;
  } else {
    num16 = 7;
    if (tmp53) {
      num16 = 5;
    }
  }
  const result11 = tmp55 / num16;
  let num17 = 32;
  if (1 >= result11) {
    num17 = 32 * result11;
  }
  const w = round(num17);
  let num18 = 32;
  if (1 < result11) {
    num18 = 32 / result11;
  }
  const h = round(num18);
  const rgba = new Uint8Array(w * h * 4);
  const items4 = [];
  let num19 = 0;
  let num20 = 0;
  if (0 < h) {
    do {
      let sum14 = num19;
      let tmp62 = num20;
      let num21 = 0;
      let tmp63 = num19;
      if (0 < w) {
        do {
          let tmp64 = num21;
          let tmp65 = sum14;
          let num22 = 3;
          if (tmp7) {
            num22 = 5;
          }
          let maxResult2 = max(maxResult, num22);
          for (let num23 = 0; num23 < maxResult2; num23 = num23 + 1) {
            items4[num23] = cos(PI / w * tmp67 * num23);
          }
          let num24 = 3;
          if (tmp7) {
            num24 = 5;
          }
          let maxResult3 = max(maxResult1, num24);
          for (let num25 = 0; num25 < maxResult3; num25 = num25 + 1) {
            [][num25] = cos(PI / h * tmp60 * num25);
          }
          let num26 = 0;
          let num27 = 0;
          let tmp69 = result;
          let tmp70 = result;
          if (0 < maxResult1) {
            do {
              let tmp71 = num26;
              let tmp72 = num27;
              let tmp73 = tmp69;
              let num28 = 1;
              if (num27) {
                num28 = 0;
              }
              let sum10 = num26;
              let sum8 = tmp69;
              let tmp77 = num26;
              let tmp78 = tmp69;
              if (num28 * maxResult1 < maxResult * (maxResult1 - num27)) {
                do {
                  sum8 = sum8 + items[sum10] * items4[num28] * tmp74;
                  let sum9 = num28 + 1;
                  sum10 = sum10 + 1;
                  num28 = sum9;
                  tmp77 = sum10;
                  tmp78 = sum8;
                  result12 = sum9 * maxResult1;
                  result13 = maxResult * (maxResult1 - num27);
                } while (result12 < result13);
              }
              num27 = num27 + 1;
              num26 = tmp77;
              tmp69 = tmp78;
              tmp70 = tmp78;
            } while (num27 < maxResult1);
          }
          let num29 = 0;
          let num30 = 0;
          let tmp82 = diff1;
          let tmp83 = diff;
          do {
            let tmp84 = num29;
            let tmp85 = num30;
            let tmp86 = tmp82;
            let tmp87 = tmp83;
            let num31 = 1;
            if (num30) {
              num31 = 0;
            }
            let diff2 = 3 - num30;
            let sum13 = num29;
            let sum12 = tmp82;
            let sum11 = tmp83;
            let tmp93 = num29;
            let tmp94 = tmp82;
            let tmp95 = tmp83;
            if (num31 < diff2) {
              do {
                let result14 = items4[num31] * tmp88;
                sum11 = sum11 + items1[sum13] * result14;
                sum12 = sum12 + items2[sum13] * result14;
                num31 = num31 + 1;
                sum13 = sum13 + 1;
                tmp93 = sum13;
                tmp94 = sum12;
                tmp95 = sum11;
              } while (num31 < diff2);
            }
            num30 = num30 + 1;
            num29 = tmp93;
            tmp82 = tmp94;
            tmp83 = tmp95;
          } while (num30 < 3);
          let num32 = 0;
          let num33 = 0;
          let tmp97 = num3;
          let tmp98 = num3;
          if (tmp7) {
            do {
              let tmp99 = num32;
              diff3 = num33;
              diff3 = tmp97;
              let num34 = 1;
              if (num33) {
                num34 = 0;
              }
              diff3 = 5 - num33;
              diff3 = num32;
              diff3 = tmp97;
              diff3 = num32;
              diff3 = tmp97;
              if (num34 < diff3) {
                do {
                  diff3 = diff3 + tmp42[diff3] * items4[num34] * diff3;
                  num34 = num34 + 1;
                  diff3 = diff3 + 1;
                } while (num34 < diff3);
              }
              num33 = num33 + 1;
              num32 = diff3;
              tmp97 = diff3;
              tmp98 = diff3;
            } while (num33 < 5);
          }
          diff3 = tmp70 - 0.6666666666666666 * tmp95;
          diff3 = (3 * tmp70 - diff3 + tmp94) / 2;
          rgba[sum14] = max(0, 255 * min(1, diff3));
          rgba[sum14 + 1] = max(0, 255 * min(1, diff3 - tmp94));
          rgba[sum14 + 2] = max(0, 255 * min(1, diff3));
          rgba[sum14 + 3] = max(0, 255 * min(1, tmp98));
          num21 = num21 + 1;
          sum14 = sum14 + 4;
          tmp63 = sum14;
        } while (num21 < w);
      }
      num20 = num20 + 1;
      num19 = tmp63;
    } while (num20 < h);
  }
  return { w, h, rgba };
}
function rgbaToDataURL(w, h, rgba) {
  let sum2;
  let tmp35;
  let tmp36;
  const sum = 4 * w + 1;
  const sum1 = 6 + h * (5 + sum);
  const items = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, w >> 8, 255 & w, 0, 0, h >> 8, 255 & h, 8, 6, 0, 0, 0, 0, 0, 0, 0, sum1 >>> 24, sum1 >> 16 & 255, sum1 >> 8 & 255, 255 & sum1, 73, 68, 65, 84, 120, 1];
  const items1 = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188];
  const diff = sum - 1;
  let sum4 = diff;
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  let num4 = 1;
  let num5 = 0;
  let num6 = 1;
  if (0 < h) {
    do {
      sum2 = num2 + 1;
      let tmp10 = sum4;
      let tmp11 = num;
      let tmp12 = num3;
      let tmp13 = num4;
      let num7 = 1;
      if (sum2 < h) {
        num7 = 0;
      }
      let tmp14 = items;
      let tmp15 = num7;
      let tmp16 = tmp7;
      let tmp17 = tmp4;
      let tmp18 = tmp6;
      let tmp19 = tmp5;
      let num8 = 0;
      let arr = items.push(num7, tmp7, tmp4, tmp6, tmp5, 0);
      let result = (num3 + num4) % 65521;
      let sum3 = num;
      let tmp23 = num4;
      let tmp24 = result;
      let tmp25 = num4;
      let tmp26 = num;
      if (num < sum4) {
        do {
          let tmp27 = 255 & rgba[sum3];
          arr = items.push(tmp27);
          let result1 = (tmp23 + tmp27) % 65521;
          result = (result + result1) % 65521;
          sum3 = sum3 + 1;
          tmp23 = result1;
          tmp24 = result;
          tmp25 = result1;
          tmp26 = sum3;
        } while (sum3 < sum4);
      }
      sum4 = sum4 + diff;
      num = tmp26;
      num3 = tmp24;
      num4 = tmp25;
      num5 = tmp24;
      num6 = tmp25;
      num2 = sum2;
    } while (sum2 < h);
  }
  items.push(num5 >> 8, 255 & num5, num6 >> 8, 255 & num6, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130);
  const items2 = [[12, 29], ];
  const items3 = [37, 41 + sum1];
  items2[1] = items3;
  while (tmp31 !== undefined) {
    let tmp33 = callback;
    let tmp34 = callback(tmp32, 2);
    [tmp35, tmp36] = tmp34;
    let tmp37 = tmp36;
    let num9 = -1;
    let tmp38 = tmp35;
    if (tmp35 < tmp36) {
      do {
        let tmp39 = num9;
        let tmp40 = tmp38;
        let tmp41 = num9 ^ items[tmp38];
        let tmp42 = tmp41;
        let tmp43 = tmp41 >>> 4 ^ items1[15 & tmp41];
        let tmp44 = tmp43;
        num9 = tmp43 >>> 4 ^ items1[15 & tmp43];
        sum5 = tmp38 + 1;
        tmp38 = sum5;
        let tmp46 = tmp36;
      } while (sum5 < tmp37);
    }
    let tmp47 = num9;
    let tmp48 = ~num9;
    let tmp49 = tmp48;
    let tmp50 = tmp36;
    let tmp51 = +tmp37;
    let sum6 = tmp51 + 1;
    let tmp53 = sum6;
    items[tmp51] = tmp48 >>> 24;
    let tmp54 = +sum6;
    let sum7 = tmp54 + 1;
    let tmp56 = sum7;
    items[tmp54] = tmp48 >> 16 & 255;
    let tmp57 = +sum7;
    let sum8 = tmp57 + 1;
    let tmp59 = sum8;
    items[tmp57] = tmp48 >> 8 & 255;
    let tmp60 = +sum8;
    let sum9 = tmp60 + 1;
    items[tmp60] = 255 & tmp48;
    continue;
  }
  const items4 = [...items];
  return "data:image/png;base64," + btoa(String.fromCharCode.apply(items4));
}

export const rgbaToThumbHash = function rgbaToThumbHash(arg0, arg1, arg2) {
  let result10;
  let result2;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp31;
  let tmp32;
  let tmp33;
  const callback = arg0;
  let closure_1 = arg1;
  if (arg0 <= 100) {
    if (arg1 <= 100) {
      const _Math = Math;
      const _Math2 = Math;
      const _Math3 = Math;
      const _Math4 = Math;
      const _Math5 = Math;
      let num6 = 0;
      let num5 = 0;
      let num4 = 0;
      let num3 = 0;
      let num2 = 0;
      let num = 0;
      let num7 = 0;
      let num8 = 0;
      let num9 = 0;
      let num10 = 0;
      if (0 < arg0 * arg1) {
        do {
          let result = arg2[num6 + 3] / 255;
          let result1 = result / 255;
          num = num + result1 * arg2[num6];
          num2 = num2 + result1 * arg2[num6 + 1];
          num3 = num3 + result1 * arg2[num6 + 2];
          num4 = num4 + result;
          num5 = num5 + 1;
          num6 = num6 + 4;
          num7 = num4;
          num8 = num3;
          num9 = num2;
          num10 = num;
          result2 = arg0 * arg1;
        } while (num5 < result2);
      }
      let result5 = num8;
      let result4 = num9;
      let result3 = num10;
      if (num7) {
        result3 = num10 / num7;
        result4 = num9 / num7;
        result5 = num8 / num7;
      }
      let num11 = 7;
      if (num7 < arg0 * arg1) {
        num11 = 5;
      }
      const result6 = num11 * arg0;
      let maxResult = max(1, round(result6 / max(arg0, arg1)));
      const result7 = num11 * arg1;
      const maxResult1 = max(1, round(result7 / max(arg0, arg1)));
      let items = [];
      let items1 = [];
      let items2 = [];
      const items3 = [];
      let num12 = 0;
      let num13 = 0;
      if (0 < arg0 * arg1) {
        do {
          let result8 = arg2[num12 + 3] / 255;
          let diff = 1 - result8;
          let result9 = result8 / 255;
          let sum = result3 * diff + result9 * arg2[num12];
          let sum1 = result4 * diff + result9 * arg2[num12 + 1];
          let sum2 = result5 * diff + result9 * arg2[num12 + 2];
          let sum3 = sum + sum1;
          items[num13] = (sum3 + sum2) / 3;
          items1[num13] = sum3 / 2 - sum2;
          items2[num13] = sum - sum1;
          items3[num13] = result8;
          num13 = num13 + 1;
          num12 = num12 + 4;
          result10 = arg0 * arg1;
        } while (num13 < result10);
      }
      function encodeChannel(items, maxResult2, arg2) {
        let length;
        items = [];
        const items1 = [];
        let num = 0;
        let num2 = 0;
        let num3 = 0;
        let num4 = 0;
        let num5 = 0;
        if (0 < arg2) {
          do {
            let tmp = num;
            let tmp2 = num2;
            let tmp3 = num3;
            let num6 = 0;
            let tmp4 = num2;
            let tmp5 = num3;
            if (0 < maxResult2 * (arg2 - num)) {
              do {
                let tmp6 = _slicedToArray;
                let tmp7 = num6;
                let tmp8 = tmp2;
                let tmp9 = tmp3;
                let num7 = 0;
                if (0 < _slicedToArray) {
                  do {
                    let tmp10 = cos;
                    let tmp11 = PI;
                    let tmp12 = _slicedToArray;
                    items1[num7] = cos(PI / _slicedToArray * num6 * (num7 + 0.5));
                    num7 = num7 + 1;
                    tmp6 = _slicedToArray;
                  } while (num7 < _slicedToArray);
                }
                let tmp13 = closure_1;
                let num8 = 0;
                let num9 = 0;
                let num10 = 0;
                if (0 < closure_1) {
                  do {
                    let tmp14 = cos;
                    let tmp15 = PI;
                    let tmp16 = closure_1;
                    let tmp18 = _slicedToArray;
                    let tmp19 = num8;
                    let sum = num9;
                    let num11 = 0;
                    let tmp21 = num9;
                    if (0 < _slicedToArray) {
                      do {
                        let tmp22 = _slicedToArray;
                        sum = sum + items[num11 + num8 * _slicedToArray] * items1[num11] * tmp17;
                        num11 = num11 + 1;
                        tmp21 = sum;
                        tmp18 = _slicedToArray;
                      } while (num11 < _slicedToArray);
                    }
                    num8 = num8 + 1;
                    tmp13 = closure_1;
                    num9 = tmp21;
                    tmp6 = tmp18;
                    num10 = tmp21;
                  } while (num8 < closure_1);
                }
                let result = num10 / (tmp6 * tmp13);
                if (num6) {
                  let arr = items.push(result);
                  let tmp27 = max;
                  let tmp28 = abs;
                  let tmp24 = max(tmp2, abs(result));
                  let tmp25 = tmp3;
                } else {
                  tmp24 = tmp2;
                  tmp25 = result;
                }
                sum1 = num6 + 1;
                tmp2 = tmp24;
                tmp3 = tmp25;
                num6 = sum1;
                tmp4 = tmp24;
                tmp5 = tmp25;
              } while (sum1 * arg2 < maxResult2 * (arg2 - num));
            }
            num = num + 1;
            num2 = tmp4;
            num3 = tmp5;
            num4 = tmp4;
            num5 = tmp5;
          } while (num < arg2);
        }
        if (num4) {
          let num12 = 0;
          if (0 < items.length) {
            do {
              items[num12] = 0.5 + 0.5 / num4 * items[num12];
              num12 = num12 + 1;
              length = items.length;
            } while (num12 < length);
          }
        }
        const items2 = [num5, items, num4];
        return items2;
      }
      const maxResult2 = max(3, maxResult);
      let tmp21 = callback;
      [tmp23, tmp24, tmp25] = callback(encodeChannel(items, max(3, maxResult), max(3, maxResult1)), 3);
      let tmp22 = callback(encodeChannel(items, max(3, maxResult), max(3, maxResult1)), 3);
      [tmp27, tmp28, tmp29] = callback(encodeChannel(items1, 3, 3), 3);
      const tmp26 = callback(encodeChannel(items1, 3, 3), 3);
      [tmp31, tmp32, tmp33] = callback(encodeChannel(items2, 3, 3), 3);
      if (num7 < arg0 * arg1) {
        let encodeChannelResult = encodeChannel(items3, 5, 5);
      } else {
        encodeChannelResult = [];
      }
      const tmp21Result = tmp21(encodeChannelResult, 3);
      let tmp35 = tmp21Result[1];
      const tmp30 = callback(encodeChannel(items2, 3, 3), 3);
      const roundResult = round(63 * tmp23);
      const tmp38 = round(63 * tmp23) | round(31.5 + 31.5 * tmp27) << 6;
      const tmp39 = round(31.5 + 31.5 * tmp31) << 12;
      if (arg0 > arg1) {
        maxResult = maxResult1;
      }
      const tmp41 = tmp38 | tmp39 | round(31 * tmp25) << 18 | (num7 < arg0 * arg1) << 23;
      const tmp40 = round(31 * tmp25) << 18;
      const tmp43 = maxResult | round(63 * tmp29) << 3 | round(63 * tmp33) << 9 | (arg0 > arg1) << 15;
      const items4 = [255 & tmp41, tmp41 >> 8 & 255, tmp41 >> 16, 255 & tmp43, tmp43 >> 8];
      if (num7 < arg0 * arg1) {
        items4.push(round(15 * tmp21Result[0]) | round(15 * tmp21Result[2]) << 4);
        const roundResult1 = round(15 * tmp21Result[0]);
      }
      if (num7 < arg0 * arg1) {
        const items5 = [tmp24, tmp28, tmp32, tmp35];
        let items6 = items5;
      } else {
        items6 = [tmp24, tmp28, tmp32];
      }
      tmp35 = items6[Symbol.iterator]();
      const tmp42 = maxResult | round(63 * tmp29) << 3;
    }
  }
  const error = new Error("" + arg0 + "x" + arg1 + " doesn't fit in 100x100");
  throw error;
};
export { thumbHashToRGBA };
export const thumbHashToAverageRGBA = function thumbHashToAverageRGBA(arg0) {
  let num = 1;
  if ((arg0[0] | arg0[1] << 8 | arg0[2] << 16) >> 23) {
    num = (15 & arg0[5]) / 15;
  }
  const result = (63 & tmp) / 63;
  const diff = (tmp >> 12 & 63) / 31.5 - 1;
  const diff1 = result - 0.6666666666666666 * ((tmp >> 6 & 63) / 31.5 - 1);
  const result1 = (3 * result - diff1 + diff) / 2;
  return { r: max(0, min(1, result1)), g: max(0, min(1, result1 - diff)), b: max(0, min(1, diff1)), a: num };
};
export const thumbHashToApproximateAspectRatio = function thumbHashToApproximateAspectRatio(arg0) {
  if (128 & arg0[4]) {
    let num = 7;
    if (tmp2) {
      num = 5;
    }
    let tmp4 = num;
  } else {
    tmp4 = 7 & tmp;
  }
  if (128 & arg0[4]) {
    let num2 = 7 & tmp;
  } else {
    num2 = 7;
    if (tmp2) {
      num2 = 5;
    }
  }
  return tmp4 / num2;
};
export { rgbaToDataURL };
export const thumbHashToDataURL = function thumbHashToDataURL(arg0) {
  const tmp = thumbHashToRGBA(arg0);
  return rgbaToDataURL(tmp.w, tmp.h, tmp.rgba);
};
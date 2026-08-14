// _runtime/13017_inflate_fast.js

export default function inflate_fast(avail_in) {
  let _window;
  let bits;
  let distcode;
  let hold;
  let input;
  let lencode;
  let next_in;
  let next_out;
  let output;
  let state;
  let wnext;
  let wsize;
  ({ state, next_in, input } = avail_in);
  let sum = next_in + (avail_in.avail_in - 5);
  ({ next_out, output } = avail_in);
  const sum1 = next_out + (avail_in.avail_out - 257);
  ({ wsize, wnext, window: _window, hold, bits, lencode, distcode } = state);
  while (true) {
    let tmp8 = bits;
    let tmp9 = hold;
    let tmp10 = next_out;
    let tmp11 = next_in;
    let sum4 = hold;
    let sum3 = next_in;
    let sum5 = bits;
    if (bits < 15) {
      let tmp15 = +next_in;
      let sum2 = bits + 8;
      let tmp17 = +tmp15 + 1;
      sum3 = tmp17 + 1;
      sum4 = hold + (input[tmp15] << bits) + (input[tmp17] << sum2);
      sum5 = sum2 + 8;
    }
    let tmp18 = lencode[sum4 & tmp6];
    let tmp19 = tmp18 >>> 24;
    let tmp20 = sum4 >>> tmp19;
    let diff = sum5 - tmp19;
    let tmp22 = tmp18 >>> 16 & 255;
    let tmp23 = tmp18;
    while (0 !== tmp22) {
      if (16 & tmp22) {
        let tmp28 = 65535 & tmp18;
        let tmp29 = tmp22 & 15;
        let sum9 = tmp28;
        let diff1 = diff;
        let tmp32 = tmp20;
        let tmp33 = sum3;
        if (tmp29) {
          let sum8 = diff;
          let sum7 = tmp20;
          let sum6 = sum3;
          if (diff < tmp29) {
            let tmp37 = +sum3;
            sum6 = tmp37 + 1;
            sum7 = tmp20 + (input[tmp37] << diff);
            sum8 = diff + 8;
          }
          sum9 = tmp28 + (sum7 & (1 << tmp29) - 1);
          tmp32 = sum7 >>> tmp29;
          diff1 = sum8 - tmp29;
          tmp33 = sum6;
        }
        let sum12 = tmp32;
        let sum11 = tmp33;
        let sum13 = diff1;
        if (diff1 < 15) {
          let tmp41 = +tmp33;
          let sum10 = diff1 + 8;
          let tmp43 = +tmp41 + 1;
          sum11 = tmp43 + 1;
          sum12 = tmp32 + (input[tmp41] << diff1) + (input[tmp43] << sum10);
          sum13 = sum10 + 8;
        }
        let tmp44 = distcode[sum12 & tmp7];
        let tmp45 = tmp44 >>> 24;
        let tmp46 = sum12 >>> tmp45;
        let diff2 = sum13 - tmp45;
        let tmp48 = tmp44 >>> 16 & 255;
        let tmp49 = tmp44;
        while (!(16 & tmp48)) {
          if (64 & tmp48) {
            let str2 = "invalid distance code";
            avail_in.msg = "invalid distance code";
            let num4 = 30;
            state.mode = 30;
            let tmp24 = diff2;
            let tmp25 = tmp46;
            let tmp26 = next_out;
            let tmp27 = sum11;
          } else {
            sum13 = diff2;
            sum12 = tmp46;
            continue;
          }
          sum = tmp24 >> 3;
          sum = tmp27 - sum;
          avail_in.next_in = sum;
          avail_in.next_out = tmp26;
          if (sum < sum) {
            sum = sum - sum + 5;
          } else {
            sum = 5 - (sum - sum);
          }
          avail_in.avail_in = sum;
          if (tmp26 < sum1) {
            sum = sum1 - tmp26 + 257;
          } else {
            sum = 257 - (tmp26 - sum1);
          }
          sum = tmp24 - (sum << 3);
          avail_in.avail_out = sum;
          state.hold = tmp25 & (1 << sum) - 1;
          state.bits = sum;
        }
        let tmp51 = tmp48 & 15;
        let tmp52 = diff2;
        let tmp53 = tmp46;
        let tmp54 = sum11;
        let tmp50 = 65535 & tmp44;
        if (diff2 < tmp51) {
          let tmp55 = +sum11;
          let sum14 = tmp55 + 1;
          let sum15 = tmp46 + (input[tmp55] << diff2);
          let sum16 = diff2 + 8;
          let sum18 = sum15;
          let sum17 = sum14;
          let sum19 = sum16;
          if (sum16 < tmp51) {
            let tmp62 = +sum14;
            sum17 = tmp62 + 1;
            sum18 = sum15 + (input[tmp62] << sum16);
            sum19 = sum16 + 8;
          }
          tmp52 = sum19;
          tmp53 = sum18;
          tmp54 = sum17;
        }
        let sum20 = tmp50 + (tmp53 & (1 << tmp51) - 1);
        if (sum20 > tmp4) {
          let str4 = "invalid distance too far back";
          avail_in.msg = "invalid distance too far back";
          let num8 = 30;
          state.mode = 30;
          tmp24 = tmp52;
          tmp25 = tmp53;
          tmp26 = next_out;
          tmp27 = tmp54;
        } else {
          sum = tmp53 >>> tmp51;
          sum = tmp52 - tmp51;
          sum = next_out - tmp2;
          if (sum20 > sum) {
            let diff3 = sum20 - sum;
            if (diff3 > tmp5) {
              if (state.sane) {
                let str3 = "invalid distance too far back";
                avail_in.msg = "invalid distance too far back";
                let num7 = 30;
                state.mode = 30;
                tmp24 = sum;
                tmp25 = sum;
                tmp26 = next_out;
                tmp27 = tmp54;
              }
            }
            if (0 === wnext) {
              sum = wsize - diff3;
              let tmp85 = _window;
              let num5 = sum;
              let diff4 = sum9;
              let tmp87 = next_out;
              if (diff3 < sum9) {
                sum = diff3;
                sum = next_out;
                do {
                  sum = +sum;
                  sum = sum + 1;
                  output[sum] = _window[sum];
                  sum = sum - 1;
                  sum = sum + 1;
                } while (sum);
                diff4 = sum9 - diff3;
                num5 = sum - sum20;
                tmp85 = output;
                tmp87 = sum;
              }
            } else if (wnext < diff3) {
              let diff5 = wsize + wnext - diff3;
              let diff6 = diff3 - wnext;
              tmp85 = _window;
              num5 = diff5;
              tmp87 = next_out;
              diff4 = sum9;
              if (diff6 < sum9) {
                let diff7 = diff6;
                let tmp97 = next_out;
                do {
                  let tmp94 = +tmp97;
                  let sum21 = tmp94 + 1;
                  output[tmp94] = _window[diff5];
                  diff7 = diff7 - 1;
                  diff5 = diff5 + 1;
                  tmp97 = sum21;
                } while (diff7);
                let diff8 = sum9 - diff6;
                tmp85 = _window;
                num5 = 0;
                diff4 = diff8;
                tmp87 = sum21;
                if (wnext < diff8) {
                  let num6 = 0;
                  sum = wnext;
                  let diff9 = diff8 - wnext;
                  do {
                    sum = +sum21;
                    sum = sum + 1;
                    output[sum] = _window[num6];
                    sum = sum - 1;
                    num6 = num6 + 1;
                    sum21 = sum;
                  } while (sum);
                  num5 = sum - sum20;
                  tmp85 = output;
                  diff4 = diff9;
                  tmp87 = sum;
                }
              }
            } else {
              let diff10 = wnext - diff3;
              tmp85 = _window;
              num5 = diff10;
              diff4 = sum9;
              tmp87 = next_out;
              if (diff3 < sum9) {
                let diff11 = diff3;
                let tmp91 = next_out;
                do {
                  let tmp88 = +tmp91;
                  let sum22 = tmp88 + 1;
                  output[tmp88] = _window[diff10];
                  diff11 = diff11 - 1;
                  diff10 = diff10 + 1;
                  tmp91 = sum22;
                } while (diff11);
                diff4 = sum9 - diff3;
                num5 = sum22 - sum20;
                tmp85 = output;
                tmp87 = sum22;
              }
            }
            sum = num5;
            sum = diff4;
            sum = tmp87;
            sum = num5;
            sum = tmp87;
            sum = diff4;
            if (2 < diff4) {
              do {
                sum = +sum;
                sum = sum + 1;
                output[sum] = tmp85[sum];
                sum = +sum + 1;
                sum = sum + 1;
                output[sum] = tmp85[sum];
                sum = +sum + 1;
                sum = sum + 1;
                sum = sum + 1;
                output[sum] = tmp85[sum];
                sum = sum - 3;
              } while (2 < sum);
            }
            let tmp75 = sum;
            let tmp76 = sum;
            let sum29 = sum;
            let tmp78 = tmp54;
            if (sum) {
              sum = +sum;
              sum = sum + 1;
              output[sum] = tmp85[sum];
              if (1 < sum) {
                sum = +sum;
                sum = sum + 1;
                output[sum] = tmp85[sum + 1];
              }
              sum29 = sum;
              tmp75 = sum;
              tmp76 = sum;
              tmp78 = tmp54;
            }
          } else {
            let diff12 = next_out - sum20;
            let tmp74 = sum9;
            let tmp73 = next_out;
            do {
              let tmp64 = +tmp73;
              let sum23 = diff12 + 1;
              output[tmp64] = output[diff12];
              let tmp66 = +tmp64 + 1;
              let sum24 = sum23 + 1;
              output[tmp66] = output[sum23];
              let tmp68 = +tmp66 + 1;
              let sum25 = tmp68 + 1;
              let sum26 = sum24 + 1;
              output[tmp68] = output[sum24];
              diff13 = tmp74 - 3;
              diff12 = sum26;
              tmp73 = sum25;
              tmp74 = diff13;
            } while (2 < diff13);
            tmp75 = sum;
            tmp76 = sum;
            sum29 = sum25;
            tmp78 = tmp54;
            if (diff13) {
              let tmp79 = +sum25;
              let sum27 = tmp79 + 1;
              output[tmp79] = output[sum26];
              let sum28 = sum27;
              if (1 < diff13) {
                let tmp82 = +sum27;
                sum28 = tmp82 + 1;
                output[tmp82] = output[sum26 + 1];
              }
              sum29 = sum28;
              tmp75 = sum;
              tmp76 = sum;
              tmp78 = tmp54;
            }
          }
          tmp24 = tmp75;
          tmp25 = tmp76;
          tmp26 = sum29;
          tmp27 = tmp78;
          if (tmp78 < sum) {
            bits = tmp75;
            hold = tmp76;
            next_out = sum29;
            next_in = tmp78;
            tmp24 = tmp75;
            tmp25 = tmp76;
            tmp26 = sum29;
            tmp27 = tmp78;
          }
        }
      } else if (64 & tmp22) {
        let num = 32;
        if (32 & tmp22) {
          let num3 = 12;
          state.mode = 12;
          tmp24 = diff;
          tmp25 = tmp20;
          tmp26 = next_out;
          tmp27 = sum3;
        } else {
          let str = "invalid literal/length code";
          avail_in.msg = "invalid literal/length code";
          let num2 = 30;
          state.mode = 30;
          tmp24 = diff;
          tmp25 = tmp20;
          tmp26 = next_out;
          tmp27 = sum3;
        }
      } else {
        sum5 = diff;
        sum4 = tmp20;
        continue;
      }
      continue;
    }
    sum = +next_out;
    sum29 = sum + 1;
    output[sum] = 65535 & tmp18;
    tmp75 = diff;
    tmp76 = tmp20;
    tmp78 = sum3;
  }
};
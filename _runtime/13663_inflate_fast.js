// _runtime/13663_inflate_fast.js

export default function inflate_fast(avail_in, arg1) {
  ({ state, next_in, input } = avail_in);
  const sum = next_in + (avail_in.avail_in - 5);
  ({ next_out, output } = avail_in);
  const sum1 = next_out + (avail_in.avail_out - 257);
  ({ wsize, wnext, window: _window, hold, bits, lencode, distcode } = state);
  while (true) {
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
    let tmp22 = (tmp18 >>> 16) & 255;
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
          sum9 = tmp28 + (sum7 & ((1 << tmp29) - 1));
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
        let tmp48 = (tmp44 >>> 16) & 255;
        while (!(16 & tmp48)) {
          if (64 & tmp48) {
            let str2 = "invalid distance code";
            avail_in.msg = "invalid distance code";
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
          let tmp124 = tmp24 >> 3;
          let diff3 = tmp27 - tmp124;
          avail_in.next_in = diff3;
          avail_in.next_out = tmp26;
          if (diff3 < sum) {
            let sum14 = sum - diff3 + 5;
          } else {
            sum14 = 5 - (diff3 - sum);
          }
          avail_in.avail_in = sum14;
          if (tmp26 < sum1) {
            let sum15 = sum1 - tmp26 + 257;
          } else {
            sum15 = 257 - (tmp26 - sum1);
          }
          let diff4 = tmp24 - (tmp124 << 3);
          avail_in.avail_out = sum15;
          state.hold = tmp25 & ((1 << diff4) - 1);
          state.bits = diff4;
        }
        let tmp51 = tmp48 & 15;
        let tmp52 = diff2;
        let tmp53 = tmp46;
        let tmp54 = sum11;
        let tmp50 = 65535 & tmp44;
        if (diff2 < tmp51) {
          let tmp55 = +sum11;
          let sum16 = tmp55 + 1;
          let sum17 = tmp46 + (input[tmp55] << diff2);
          let sum18 = diff2 + 8;
          let sum20 = sum17;
          let sum19 = sum16;
          let sum21 = sum18;
          if (sum18 < tmp51) {
            let tmp62 = +sum16;
            sum19 = tmp62 + 1;
            sum20 = sum17 + (input[tmp62] << sum18);
            sum21 = sum18 + 8;
          }
          tmp52 = sum21;
          tmp53 = sum20;
          tmp54 = sum19;
        }
        let sum22 = tmp50 + (tmp53 & ((1 << tmp51) - 1));
        if (sum22 > tmp4) {
          let str4 = "invalid distance too far back";
          avail_in.msg = "invalid distance too far back";
          state.mode = 30;
          tmp24 = tmp52;
          tmp25 = tmp53;
          tmp26 = next_out;
          tmp27 = tmp54;
        } else {
          let tmp129 = tmp53 >>> tmp51;
          let diff5 = tmp52 - tmp51;
          let diff6 = next_out - tmp2;
          if (sum22 > diff6) {
            let diff7 = sum22 - diff6;
            if (diff7 > tmp5) {
              if (state.sane) {
                let str3 = "invalid distance too far back";
                avail_in.msg = "invalid distance too far back";
                state.mode = 30;
                tmp24 = diff5;
                tmp25 = tmp129;
                tmp26 = next_out;
                tmp27 = tmp54;
              }
            }
            if (0 === wnext) {
              let diff8 = wsize - diff7;
              let tmp85 = _window;
              let num5 = diff8;
              let diff10 = sum9;
              let tmp87 = next_out;
              if (diff7 < sum9) {
                let diff9 = diff7;
                let tmp105 = next_out;
                do {
                  let tmp106 = +tmp105;
                  let sum23 = tmp106 + 1;
                  output[tmp106] = _window[diff8];
                  diff9 = diff9 - 1;
                  diff8 = diff8 + 1;
                  tmp105 = sum23;
                } while (diff9);
                diff10 = sum9 - diff7;
                num5 = sum23 - sum22;
                tmp85 = output;
                tmp87 = sum23;
              }
            } else if (wnext < diff7) {
              let diff11 = wsize + wnext - diff7;
              let diff12 = diff7 - wnext;
              tmp85 = _window;
              num5 = diff11;
              tmp87 = next_out;
              diff10 = sum9;
              if (diff12 < sum9) {
                let diff13 = diff12;
                let tmp97 = next_out;
                do {
                  let tmp94 = +tmp97;
                  let sum24 = tmp94 + 1;
                  output[tmp94] = _window[diff11];
                  diff13 = diff13 - 1;
                  diff11 = diff11 + 1;
                  tmp97 = sum24;
                } while (diff13);
                let diff14 = sum9 - diff12;
                tmp85 = _window;
                num5 = 0;
                diff10 = diff14;
                tmp87 = sum24;
                if (wnext < diff14) {
                  let num6 = 0;
                  let diff16 = wnext;
                  let diff15 = diff14 - wnext;
                  do {
                    let tmp101 = +sum24;
                    let sum25 = tmp101 + 1;
                    output[tmp101] = _window[num6];
                    diff16 = diff16 - 1;
                    num6 = num6 + 1;
                    sum24 = sum25;
                  } while (diff16);
                  num5 = sum25 - sum22;
                  tmp85 = output;
                  diff10 = diff15;
                  tmp87 = sum25;
                }
              }
            } else {
              let diff17 = wnext - diff7;
              tmp85 = _window;
              num5 = diff17;
              diff10 = sum9;
              tmp87 = next_out;
              if (diff7 < sum9) {
                let diff18 = diff7;
                let tmp91 = next_out;
                do {
                  let tmp88 = +tmp91;
                  let sum26 = tmp88 + 1;
                  output[tmp88] = _window[diff17];
                  diff18 = diff18 - 1;
                  diff17 = diff17 + 1;
                  tmp91 = sum26;
                } while (diff18);
                diff10 = sum9 - diff7;
                num5 = sum26 - sum22;
                tmp85 = output;
                tmp87 = sum26;
              }
            }
            let sum30 = num5;
            let diff19 = diff10;
            let sum29 = tmp87;
            let tmp111 = num5;
            let tmp112 = tmp87;
            let tmp113 = diff10;
            if (2 < diff10) {
              do {
                let tmp114 = +sum29;
                let sum27 = sum30 + 1;
                output[tmp114] = tmp85[sum30];
                let tmp116 = +tmp114 + 1;
                let sum28 = sum27 + 1;
                output[tmp116] = tmp85[sum27];
                let tmp118 = +tmp116 + 1;
                sum29 = tmp118 + 1;
                sum30 = sum28 + 1;
                output[tmp118] = tmp85[sum28];
                diff19 = diff19 - 3;
                tmp111 = sum30;
                tmp112 = sum29;
                tmp113 = diff19;
              } while (2 < diff19);
            }
            let tmp75 = diff5;
            let tmp76 = tmp129;
            let sum39 = tmp112;
            let tmp78 = tmp54;
            if (tmp113) {
              let tmp119 = +tmp112;
              let sum31 = tmp119 + 1;
              output[tmp119] = tmp85[tmp111];
              let sum32 = sum31;
              if (1 < tmp113) {
                let tmp122 = +sum31;
                sum32 = tmp122 + 1;
                output[tmp122] = tmp85[tmp111 + 1];
              }
              sum39 = sum32;
              tmp75 = diff5;
              tmp76 = tmp129;
              tmp78 = tmp54;
            }
          } else {
            let diff20 = next_out - sum22;
            let tmp74 = sum9;
            let tmp73 = next_out;
            do {
              let tmp64 = +tmp73;
              let sum33 = diff20 + 1;
              output[tmp64] = output[diff20];
              let tmp66 = +tmp64 + 1;
              let sum34 = sum33 + 1;
              output[tmp66] = output[sum33];
              let tmp68 = +tmp66 + 1;
              let sum35 = tmp68 + 1;
              let sum36 = sum34 + 1;
              output[tmp68] = output[sum34];
              diff21 = tmp74 - 3;
              diff20 = sum36;
              tmp73 = sum35;
              tmp74 = diff21;
            } while (2 < diff21);
            tmp75 = diff5;
            tmp76 = tmp129;
            sum39 = sum35;
            tmp78 = tmp54;
            if (diff21) {
              let tmp79 = +sum35;
              let sum37 = tmp79 + 1;
              output[tmp79] = output[sum36];
              let sum38 = sum37;
              if (1 < diff21) {
                let tmp82 = +sum37;
                sum38 = tmp82 + 1;
                output[tmp82] = output[sum36 + 1];
              }
              sum39 = sum38;
              tmp75 = diff5;
              tmp76 = tmp129;
              tmp78 = tmp54;
            }
          }
          tmp24 = tmp75;
          tmp25 = tmp76;
          tmp26 = sum39;
          tmp27 = tmp78;
          if (tmp78 < sum) {
            bits = tmp75;
            hold = tmp76;
            next_out = sum39;
            next_in = tmp78;
            tmp24 = tmp75;
            tmp25 = tmp76;
            tmp26 = sum39;
            tmp27 = tmp78;
          }
        }
      } else if (64 & tmp22) {
        if (32 & tmp22) {
          state.mode = 12;
          tmp24 = diff;
          tmp25 = tmp20;
          tmp26 = next_out;
          tmp27 = sum3;
        } else {
          let str = "invalid literal/length code";
          avail_in.msg = "invalid literal/length code";
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
    let tmp123 = +next_out;
    sum39 = tmp123 + 1;
    output[tmp123] = 65535 & tmp18;
    tmp75 = diff;
    tmp76 = tmp20;
    tmp78 = sum3;
  }
}

let c0;
let c1;
let c2;
let length3;
let length6;
let num2;
let tmp22;
let tmp24;
let tmp26;
let tmp28;
let tmp43;
let tmp58;
let tmp60;
let tmp62;
let tmp64;
c1 = function decodeImage(uint8Array, arg1, arg2, depth) {
  let ctype;
  let tmp69;
  let tmp70;
  let tmp71;
  const result = arg1 * arg2;
  const rounded = Math.ceil(arg1 * ([1, null, 3, 1, 2, null, 4][depth.ctype] * depth.depth) / 8);
  uint8Array = new Uint8Array(4 * result);
  const uint32Array = new Uint32Array(uint8Array.buffer);
  ({ ctype, depth } = depth);
  const readUshort = _undefined.readUshort;
  const timestamp = Date.now();
  if (6 == ctype) {
    if (8 == depth) {
      let num52 = 0;
      if (0 < tmp64) {
        do {
          uint8Array[num52] = uint8Array[num52];
          let sum = num52 + 1;
          uint8Array[sum] = uint8Array[sum];
          let sum1 = num52 + 2;
          uint8Array[sum1] = uint8Array[sum1];
          let sum2 = num52 + 3;
          uint8Array[sum2] = uint8Array[sum2];
          num52 = num52 + 4;
        } while (num52 < tmp64);
      }
    }
    if (16 == depth) {
      let num55 = 0;
      if (0 < tmp64) {
        do {
          uint8Array[num55] = uint8Array[num55 << 1];
          num55 = num55 + 1;
        } while (num55 < tmp64);
      }
    }
  } else if (2 == ctype) {
    let tRNS = depth.tabs.tRNS;
    if (null == tRNS) {
      if (8 == depth) {
        let num46 = 0;
        if (0 < result) {
          do {
            let result1 = 3 * num46;
            uint32Array[num46] = -16777216 | uint8Array[result1 + 2] << 16 | uint8Array[result1 + 1] << 8 | uint8Array[result1];
            num46 = num46 + 1;
          } while (num46 < result);
        }
      }
      if (16 == depth) {
        let num48 = 0;
        if (0 < result) {
          do {
            let result2 = 6 * num48;
            uint32Array[num48] = -16777216 | uint8Array[result2 + 4] << 16 | uint8Array[result2 + 2] << 8 | uint8Array[result2];
            num48 = num48 + 1;
          } while (num48 < result);
        }
      }
    } else {
      [tmp69, tmp70, tmp71] = tRNS;
      if (8 == depth) {
        let num39 = 0;
        if (0 < result) {
          do {
            let result3 = 3 * num39;
            let sum3 = result3 + 2;
            let sum4 = result3 + 1;
            uint32Array[num39] = -16777216 | uint8Array[sum3] << 16 | uint8Array[sum4] << 8 | uint8Array[result3];
            let tmp55 = uint8Array[result3] == tmp69;
            let tmp56 = num39;
            if (tmp55) {
              tmp55 = uint8Array[sum4] == tmp70;
            }
            if (tmp55) {
              tmp55 = uint8Array[sum3] == tmp71;
            }
            if (tmp55) {
              uint8Array[(num39 << 2) + 3] = 0;
            }
            num39 = num39 + 1;
          } while (num39 < result);
        }
      }
      if (16 == depth) {
        let num41 = 0;
        if (0 < result) {
          do {
            let result4 = 6 * num41;
            let sum5 = result4 + 4;
            let sum6 = result4 + 2;
            uint32Array[num41] = -16777216 | uint8Array[sum5] << 16 | uint8Array[sum6] << 8 | uint8Array[result4];
            let tmp60 = readUshort(uint8Array, result4) == tmp69;
            let tmp61 = num41;
            if (tmp60) {
              tmp60 = readUshort(uint8Array, sum6) == tmp70;
            }
            if (tmp60) {
              tmp60 = readUshort(uint8Array, sum5) == tmp71;
            }
            if (tmp60) {
              uint8Array[(num41 << 2) + 3] = 0;
            }
            num41 = num41 + 1;
          } while (num41 < result);
        }
      }
    }
  } else if (3 == ctype) {
    const PLTE = depth.tabs.PLTE;
    tRNS = depth.tabs.tRNS;
    let num26 = 0;
    if (tRNS) {
      num26 = tRNS.length;
    }
    if (1 == depth) {
      for (let num30 = 0; num30 < arg2; num30 = num30 + 1) {
        let tmp28 = num30;
        for (let num28 = 0; num28 < arg1; num28 = num28 + 1) {
          let tmp29 = tmp27 + num28 << 2;
          let tmp30 = uint8Array[tmp26 + (num28 >> 3)] >> 7 - (7 & num28) & 1;
          let result5 = 3 * tmp30;
          uint8Array[tmp29] = PLTE[result5];
          uint8Array[tmp29 + 1] = PLTE[result5 + 1];
          uint8Array[tmp29 + 2] = PLTE[result5 + 2];
          let tmp32 = num28;
          let num29 = 255;
          if (tmp30 < num26) {
            num29 = tRNS[tmp30];
          }
          uint8Array[tmp29 + 3] = num29;
        }
      }
    }
    if (2 == depth) {
      for (let num33 = 0; num33 < arg2; num33 = num33 + 1) {
        let tmp35 = num33;
        for (let num31 = 0; num31 < arg1; num31 = num31 + 1) {
          let tmp36 = tmp34 + num31 << 2;
          let tmp37 = uint8Array[tmp33 + (num31 >> 2)] >> 6 - ((3 & num31) << 1) & 3;
          let result6 = 3 * tmp37;
          uint8Array[tmp36] = PLTE[result6];
          uint8Array[tmp36 + 1] = PLTE[result6 + 1];
          uint8Array[tmp36 + 2] = PLTE[result6 + 2];
          let tmp39 = num31;
          let num32 = 255;
          if (tmp37 < num26) {
            num32 = tRNS[tmp37];
          }
          uint8Array[tmp36 + 3] = num32;
        }
      }
    }
    if (4 == depth) {
      for (let num36 = 0; num36 < arg2; num36 = num36 + 1) {
        let tmp42 = num36;
        for (let num34 = 0; num34 < arg1; num34 = num34 + 1) {
          let tmp43 = tmp41 + num34 << 2;
          let tmp44 = uint8Array[tmp40 + (num34 >> 1)] >> 4 - ((1 & num34) << 2) & 15;
          let result7 = 3 * tmp44;
          uint8Array[tmp43] = PLTE[result7];
          uint8Array[tmp43 + 1] = PLTE[result7 + 1];
          uint8Array[tmp43 + 2] = PLTE[result7 + 2];
          let tmp46 = num34;
          let num35 = 255;
          if (tmp44 < num26) {
            num35 = tRNS[tmp44];
          }
          uint8Array[tmp43 + 3] = num35;
        }
      }
    }
    if (8 == depth) {
      let num38 = 0;
      if (0 < result) {
        do {
          let tmp47 = num38 << 2;
          let tmp48 = uint8Array[num38];
          let result8 = 3 * tmp48;
          uint8Array[tmp47] = PLTE[result8];
          uint8Array[tmp47 + 1] = PLTE[result8 + 1];
          uint8Array[tmp47 + 2] = PLTE[result8 + 2];
          let tmp50 = num38;
          let num37 = 255;
          if (tmp48 < num26) {
            num37 = tRNS[tmp48];
          }
          uint8Array[tmp47 + 3] = num37;
          num38 = num38 + 1;
        } while (num38 < result);
      }
    }
  } else if (4 == ctype) {
    if (8 == depth) {
      let num22 = 0;
      if (0 < result) {
        do {
          let tmp20 = num22 << 2;
          let tmp21 = num22 << 1;
          let tmp22 = uint8Array[tmp21];
          uint8Array[tmp20] = tmp22;
          uint8Array[tmp20 + 1] = tmp22;
          uint8Array[tmp20 + 2] = tmp22;
          uint8Array[tmp20 + 3] = uint8Array[tmp21 + 1];
          num22 = num22 + 1;
        } while (num22 < result);
      }
    }
    if (16 == depth) {
      let num24 = 0;
      if (0 < result) {
        do {
          let tmp23 = num24 << 2;
          let tmp24 = uint8Array[tmp23];
          uint8Array[tmp23] = tmp24;
          uint8Array[tmp23 + 1] = tmp24;
          let sum7 = tmp23 + 2;
          uint8Array[sum7] = tmp24;
          uint8Array[tmp23 + 3] = uint8Array[sum7];
          num24 = num24 + 1;
        } while (num24 < result);
      }
    }
  } else if (0 == ctype) {
    let num = -1;
    if (depth.tabs.tRNS) {
      num = depth.tabs.tRNS;
    }
    for (let num10 = 0; num10 < arg2; num10 = num10 + 1) {
      let result9 = num10 * rounded;
      let result10 = num10 * arg1;
      let tmp8 = num10;
      if (1 == depth) {
        for (let num19 = 0; num19 < arg1; num19 = num19 + 1) {
          let result11 = 255 * (uint8Array[result9 + (num19 >>> 3)] >>> 7 - (7 & num19) & 1);
          let tmp19 = num19;
          let num20 = 255;
          if (result11 === 255 * num) {
            num20 = 0;
          }
          uint32Array[result10 + num19] = num20 << 24 | result11 << 16 | result11 << 8 | result11;
        }
      } else if (2 == depth) {
        for (let num17 = 0; num17 < arg1; num17 = num17 + 1) {
          let result12 = 85 * (uint8Array[result9 + (num17 >>> 2)] >>> 6 - ((3 & num17) << 1) & 3);
          let tmp17 = num17;
          let num18 = 255;
          if (result12 === 85 * num) {
            num18 = 0;
          }
          uint32Array[result10 + num17] = num18 << 24 | result12 << 16 | result12 << 8 | result12;
        }
      } else if (4 == depth) {
        for (let num15 = 0; num15 < arg1; num15 = num15 + 1) {
          let result13 = 17 * (uint8Array[result9 + (num15 >>> 1)] >>> 4 - ((1 & num15) << 2) & 15);
          let tmp15 = num15;
          let num16 = 255;
          if (result13 === 17 * num) {
            num16 = 0;
          }
          uint32Array[result10 + num15] = num16 << 24 | result13 << 16 | result13 << 8 | result13;
        }
      } else if (8 == depth) {
        for (let num13 = 0; num13 < arg1; num13 = num13 + 1) {
          let tmp12 = uint8Array[result9 + num13];
          let tmp13 = num13;
          let num14 = 255;
          if (tmp12 == num) {
            num14 = 0;
          }
          uint32Array[result10 + num13] = num14 << 24 | tmp12 << 16 | tmp12 << 8 | tmp12;
        }
      } else if (16 == depth) {
        for (let num12 = 0; num12 < arg1; num12 = num12 + 1) {
          let sum8 = result9 + (num12 << 1);
          let tmp10 = uint8Array[sum8];
          let tmp11 = num12;
          let num11 = 255;
          if (readUshort(uint8Array, sum8) == num) {
            num11 = 0;
          }
          uint32Array[result10 + num12] = num11 << 24 | tmp10 << 16 | tmp10 << 8 | tmp10;
        }
      }
    }
  }
  return uint8Array;
};
c2 = function _decompress(depth, buffer) {
  let height;
  let width;
  const timestamp = Date.now();
  const uint8Array = new Uint8Array((Math.ceil(arg2 * ([1, null, 3, 1, 2, null, 4][depth.ctype] * depth.depth) / 8) + 1 + depth.interlace) * arg3);
  if (depth.tabs.CgBI) {
    let tmp3Result = tmp3(buffer, uint8Array);
  } else {
    const _Uint8Array = Uint8Array;
    const uint8Array1 = new Uint8Array(buffer.buffer, 2, buffer.length - 6);
    tmp3Result = tmp3(uint8Array1, uint8Array);
  }
  const timestamp1 = Date.now();
  if (0 == depth.interlace) {
    _main(tmp3Result, depth, 0, arg2, arg3);
    let tmp36 = tmp3Result;
  } else {
    tmp36 = tmp3Result;
    if (1 == depth.interlace) {
      ({ width, height } = depth);
      const result = [1, null, 3, 1, 2, null, 4][depth.ctype] * depth.depth;
      const _Math2 = Math;
      const rounded = Math.ceil(width * result / 8);
      const _Uint8Array2 = Uint8Array;
      const uint8Array2 = new Uint8Array(height * rounded);
      const items = [0, 0, 4, 0, 2, 0, 1];
      const items1 = [0, 4, 0, 2, 0, 1, 0];
      let num9 = 0;
      let num10 = 0;
      do {
        let tmp10 = [8, 8, 8, 4, 4, 2, 2][num9];
        let tmp11 = tmp50[num9];
        let sum = items[num9];
        let tmp13 = num9;
        let num3 = 0;
        let num4 = 0;
        let tmp14 = num10;
        while (sum < height) {
          sum = sum + tmp10;
          num3 = num3 + 1;
          num4 = num3;
        }
        let sum1 = items1[num9];
        let num5 = 0;
        let num6 = 0;
        while (sum1 < width) {
          sum1 = sum1 + tmp11;
          num5 = num5 + 1;
          num6 = num5;
        }
        let _Math = Math;
        let rounded1 = Math.ceil(num6 * result / 8);
        let tmp17 = _main;
        let tmp18 = tmp3Result;
        let tmp19 = depth;
        let tmp20 = num10;
        let tmp21 = num6;
        let tmp22 = num4;
        let tmp23 = _main(tmp3Result, depth, tmp14, num6, num4);
        let sum7 = items[num9];
        let num7 = 0;
        while (sum7 < height) {
          let sum6 = items1[num9];
          let sum5 = num10 + num7 * rounded1 << 3;
          let tmp27 = sum7;
          let tmp28 = num7;
          if (sum6 < width) {
            do {
              let tmp29 = sum5;
              let tmp30 = sum6;
              if (1 == result) {
                let sum2 = sum7 * rounded + (sum6 >> 3);
                uint8Array2[sum2] = uint8Array2[sum2] | (tmp3Result[sum5 >> 3] >> 7 - (7 & sum5) & 1) << 7 - (7 & sum6);
              }
              if (2 == result) {
                let sum3 = sum7 * rounded + (sum6 >> 2);
                uint8Array2[sum3] = uint8Array2[sum3] | (tmp3Result[sum5 >> 3] >> 6 - (7 & sum5) & 3) << 6 - ((3 & sum6) << 1);
              }
              if (4 == result) {
                let sum4 = sum7 * rounded + (sum6 >> 1);
                uint8Array2[sum4] = uint8Array2[sum4] | (tmp3Result[sum5 >> 3] >> 4 - (7 & sum5) & 15) << 4 - ((1 & sum6) << 2);
              }
              if (result >= 8) {
                let num8 = 0;
                if (0 < tmp44) {
                  do {
                    uint8Array2[tmp34 + num8] = tmp3Result[(sum5 >> 3) + num8];
                    num8 = num8 + 1;
                  } while (num8 < tmp44);
                }
              }
              sum5 = sum5 + result;
              sum6 = sum6 + tmp11;
            } while (sum6 < width);
          }
          num7 = num7 + 1;
          sum7 = sum7 + tmp10;
        }
        let sum8 = num10;
        if (num6 * num4 !== 0) {
          sum8 = num10 + num4 * (1 + rounded1);
        }
        num9 = num9 + 1;
        num10 = sum8;
        tmp36 = uint8Array2;
      } while (num9 < 7);
    }
  }
  return tmp36;
};
let c3 = function _inflate(buffer, width) {
  const uint8Array = new Uint8Array(buffer.buffer, 2, buffer.length - 6);
  return dither(uint8Array, width);
};
let _main = function _filterZero(arg0, depth) {
  const result = [1, null, 3, 1, 2, null, 4][depth.ctype] * depth.depth;
  const rounded = Math.ceil(arg3 * result / 8);
  const rounded1 = Math.ceil(result / 8);
  if (arg0[arg2] > 1) {
    arg0[arg2] = [0, 0, 1][tmp4 - 2];
  }
  if (3 == arg0[arg2]) {
    let sum = rounded1;
    if (rounded1 < rounded) {
      do {
        arg0[sum + 1] = arg0[sum + 1] + (arg0[sum + 1 - rounded1] >>> 1) & 255;
        sum = sum + 1;
      } while (sum < rounded);
    }
  }
  for (let num3 = 0; num3 < arg4; num3 = num3 + 1) {
    let sum1 = arg2 + num3 * rounded;
    let sum2 = sum1 + num3 + 1;
    let tmp8 = arg0[sum2 - 1];
    let tmp9 = num3;
    if (0 == tmp8) {
      for (let num13 = 0; num13 < rounded; num13 = num13 + 1) {
        arg0[sum1 + num13] = arg0[sum2 + num13];
      }
    } else if (1 == tmp8) {
      let num11 = 0;
      let num12 = 0;
      if (0 < rounded1) {
        do {
          arg0[sum1 + num11] = arg0[sum2 + num11];
          num11 = num11 + 1;
          num12 = num11;
        } while (num11 < rounded1);
      }
      if (num12 < rounded) {
        do {
          let sum3 = sum1 + num12;
          arg0[sum3] = arg0[sum2 + num12] + arg0[sum3 - rounded1];
          num12 = num12 + 1;
        } while (num12 < rounded);
      }
    } else if (2 == tmp8) {
      for (let num10 = 0; num10 < rounded; num10 = num10 + 1) {
        let sum4 = sum1 + num10;
        arg0[sum4] = arg0[sum2 + num10] + arg0[sum4 - rounded];
      }
    } else if (3 == tmp8) {
      let num8 = 0;
      let num9 = 0;
      if (0 < rounded1) {
        do {
          let sum5 = sum1 + num8;
          arg0[sum5] = arg0[sum2 + num8] + (arg0[sum5 - rounded] >>> 1);
          num8 = num8 + 1;
          num9 = num8;
        } while (num8 < rounded1);
      }
      if (num9 < rounded) {
        do {
          let sum6 = sum1 + num9;
          arg0[sum6] = arg0[sum2 + num9] + (arg0[sum6 - rounded] + arg0[sum6 - rounded1] >>> 1);
          num9 = num9 + 1;
        } while (num9 < rounded);
      }
    } else {
      let num6 = 0;
      let num7 = 0;
      if (0 < rounded1) {
        do {
          let sum7 = sum1 + num6;
          let tmp11 = arg0[sum7 - rounded];
          let tmp12 = tmp11;
          let tmp13 = tmp12;
          let diff = tmp12 - tmp11;
          let result1 = tmp13 * tmp13;
          let result2 = diff * diff;
          let tmp17 = num6;
          if (result1 > result2) {
            let num5 = 0;
            if (result2 <= result1) {
              num5 = tmp11;
            }
            let num4 = num5;
          } else {
            num4 = 0;
          }
          arg0[sum7] = arg0[sum2 + num6] + num4;
          num6 = num6 + 1;
          num7 = num6;
        } while (num6 < rounded1);
      }
      if (num7 < rounded) {
        do {
          let sum8 = sum1 + num7;
          let tmp19 = arg0[sum8 - rounded1];
          let tmp20 = arg0[sum8 - rounded];
          let tmp21 = arg0[sum8 - rounded1 - rounded];
          let diff1 = tmp19 + tmp20 - tmp21;
          let diff2 = diff1 - tmp19;
          let diff3 = diff1 - tmp20;
          let diff4 = diff1 - tmp21;
          let tmp26 = num7;
          if (diff2 * diff2 > diff3 * diff3) {
            if (diff3 * diff3 <= diff4 * diff4) {
              tmp21 = tmp20;
            }
            tmp19 = tmp21;
          }
          arg0[sum8] = arg0[sum2 + num7] + tmp19;
          num7 = num7 + 1;
        } while (num7 < rounded);
      }
    }
  }
  return arg0;
};
let compressPNG = function _IHDR(uint8Array, sum1) {
  arg2.width = _undefined.readUint(uint8Array, sum1);
  const sum = sum1 + 4;
  arg2.height = _undefined.readUint(uint8Array, sum);
  sum1 = sum + 4;
  arg2.depth = uint8Array[sum1];
  const sum2 = sum1 + 1;
  arg2.ctype = uint8Array[sum2];
  const sum3 = sum2 + 1;
  arg2.compress = uint8Array[sum3];
  const sum4 = sum3 + 1;
  arg2.filter = uint8Array[sum4];
  arg2.interlace = uint8Array[sum4 + 1];
};
function _copyTile(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
  const bound = Math.min(arg1, arg4);
  const bound1 = Math.min(arg2, arg5);
  for (let num = 0; num < bound1; num = num + 1) {
    let tmp3 = num;
    let num2 = 0;
    if (0 < bound) {
      while (true) {
        let tmp4 = num2;
        if (arg6 >= 0) {
          if (arg7 >= 0) {
            let tmp5 = num * arg1 + num2 << 2;
            let tmp6 = (arg7 + num) * arg4 + arg6 + num2 << 2;
            if (0 == arg8) {
              arg3[tmp6] = arg0[tmp5];
              arg3[tmp6 + 1] = arg0[tmp5 + 1];
              arg3[tmp6 + 2] = arg0[tmp5 + 2];
              arg3[tmp6 + 3] = arg0[tmp5 + 3];
            } else if (1 == arg8) {
              let result = 0.00392156862745098 * arg0[tmp5 + 3];
              let sum = tmp6 + 3;
              let result1 = 0.00392156862745098 * arg3[sum];
              let sum1 = tmp6 + 1;
              let sum2 = tmp6 + 2;
              let diff = 1 - result;
              let sum3 = result + result1 * diff;
              let num3 = 0;
              let result2 = arg0[tmp5] * result;
              let result3 = arg0[tmp5 + 1] * result;
              let result4 = arg0[tmp5 + 2] * result;
              let result5 = arg3[tmp6] * result1;
              let result6 = arg3[sum1] * result1;
              let result7 = arg3[sum2] * result1;
              if (0 !== sum3) {
                num3 = 1 / sum3;
              }
              arg3[sum] = 255 * sum3;
              arg3[tmp6] = (result2 + result5 * diff) * num3;
              arg3[sum1] = (result3 + result6 * diff) * num3;
              arg3[sum2] = (result4 + result7 * diff) * num3;
            } else if (2 == arg8) {
              let tmp7 = arg0[tmp5 + 3];
              let tmp8 = arg0[tmp5];
              let tmp9 = arg0[tmp5 + 1];
              let tmp10 = arg0[tmp5 + 2];
              let sum4 = tmp6 + 3;
              let sum5 = tmp6 + 1;
              let sum6 = tmp6 + 2;
              if (tmp7 == arg3[sum4]) {
                if (tmp8 == arg3[tmp6]) {
                  if (tmp9 == arg3[sum5]) {
                    if (tmp10 == arg3[sum6]) {
                      arg3[tmp6] = 0;
                      arg3[sum5] = 0;
                      arg3[sum6] = 0;
                      arg3[sum4] = 0;
                    }
                  }
                }
              }
              arg3[tmp6] = tmp8;
              arg3[sum5] = tmp9;
              arg3[sum6] = tmp10;
              arg3[sum4] = tmp7;
            } else if (3 == arg8) {
              let tmp27 = arg0[tmp5 + 3];
              let tmp28 = arg3[tmp6 + 3];
              if (tmp27 < 220) {
                if (tmp28 > 20) {
                  let flag = false;
                  return false;
                }
              }
            }
            num2 = num2 + 1;
            if (num2 >= bound) {
              break;
            }
          }
        }
        tmp5 = (-arg7 + num) * arg1 - arg6 + num2 << 2;
        tmp6 = num * arg4 + num2 << 2;
      }
    }
  }
  return true;
}
let compress = _copyTile;
let obj = {
  nextZero(uint8Array, sum1) {
    let tmp4;
    let tmp = sum1;
    let tmp2 = sum1;
    if (0 != uint8Array[sum1]) {
      do {
        let sum = tmp + 1;
        tmp = sum;
        tmp2 = sum;
        tmp4 = uint8Array[sum];
      } while (0 != tmp4);
    }
    return tmp2;
  },
  readUshort(uint8Array, sum1) {
    return uint8Array[sum1] << 8 | uint8Array[sum1 + 1];
  },
  writeUshort(uint8Array, sum40, arg2) {
    uint8Array[sum40] = arg2 >> 8 & 255;
    uint8Array[sum40 + 1] = 255 & arg2;
  },
  readUint(uint8Array, sum1) {
    return 16777216 * uint8Array[sum1] + (uint8Array[sum1 + 1] << 16 | uint8Array[sum1 + 2] << 8 | uint8Array[sum1 + 3]);
  },
  writeUint(uint8Array, writeUintResult16, height) {
    uint8Array[writeUintResult16] = height >> 24 & 255;
    uint8Array[writeUintResult16 + 1] = height >> 16 & 255;
    uint8Array[writeUintResult16 + 2] = height >> 8 & 255;
    uint8Array[writeUintResult16 + 3] = 255 & height;
  },
  readASCII(uint8Array, sum1, diff2) {
    let num = 0;
    let str = "";
    let str2 = "";
    if (0 < diff2) {
      do {
        let _String = String;
        str = `${String.fromCharCode(uint8Array[sum1 + num])}`;
        num = num + 1;
        str2 = str;
      } while (num < diff2);
    }
    return str2;
  },
  writeASCII(uint8Array, writeUintResult16, IEND) {
    let length;
    let num = 0;
    if (0 < IEND.length) {
      do {
        let sum = writeUintResult16 + num;
        uint8Array[sum] = IEND.charCodeAt(num);
        num = num + 1;
        length = IEND.length;
      } while (num < length);
    }
  },
  readBytes(uint8Array, sum1, uint) {
    const items = [];
    for (let num = 0; num < uint; num = num + 1) {
      let arr = items.push(uint8Array[sum1 + num]);
    }
    return items;
  },
  pad(arg0) {
    let text = arg0;
    if (arg0.length < 2) {
      text = `0${arg0}`;
    }
    return text;
  },
  readUTF8(uint8Array, sum7, length) {
    let num = 0;
    let str = "";
    let str2 = "";
    if (0 < length) {
      do {
        let tmp4 = _undefined;
        let str3 = uint8Array[sum7 + num];
        str = `${"%" + tmp5(str3.toString(16))}`;
        num = num + 1;
        str2 = str;
      } while (num < length);
    }
    try {
      const _decodeURIComponent = decodeURIComponent;
      return decodeURIComponent(str2);
    } catch (err) {
      return _undefined.readASCII(tmp3, tmp2, tmp);
    }
  }
};
c0 = obj;
obj = { m: null, v: null, d: null, o: null, z: null, B: null, p: null, w: null, h: null, g: null, s: null, A: null, t: null, k: null, c: null, a: null, n: null, e: null, C: null, b: null, i: null, r: null, f: null, l: null, u: null, q: null, j: null };
const uint16Array = new Uint16Array(16);
obj[0] = uint16Array;
const uint16Array1 = new Uint16Array(16);
obj[1] = uint16Array1;
obj[2] = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
obj[3] = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999];
obj[4] = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0];
const uint16Array2 = new Uint16Array(32);
obj[5] = uint16Array2;
obj[6] = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535];
obj[7] = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0];
let uint32Array = new Uint32Array(32);
obj[8] = uint32Array;
const uint16Array3 = new Uint16Array(512);
obj[9] = uint16Array3;
obj[10] = [];
const uint16Array4 = new Uint16Array(32);
obj[11] = uint16Array4;
obj[12] = [];
const uint16Array5 = new Uint16Array(32768);
obj[13] = uint16Array5;
obj[14] = [];
obj[15] = [];
const uint16Array6 = new Uint16Array(32768);
obj[16] = uint16Array6;
obj[17] = [];
const uint16Array7 = new Uint16Array(512);
obj[18] = uint16Array7;
obj[19] = [];
const uint16Array8 = new Uint16Array(32768);
obj[20] = uint16Array8;
let uint32Array1 = new Uint32Array(286);
obj[21] = uint32Array1;
let uint32Array2 = new Uint32Array(30);
obj[22] = uint32Array2;
let uint32Array3 = new Uint32Array(19);
obj[23] = uint32Array3;
const uint32Array4 = new Uint32Array(15000);
obj[24] = uint32Array4;
const uint16Array9 = new Uint16Array(65536);
obj[25] = uint16Array9;
const uint16Array10 = new Uint16Array(32768);
obj[26] = uint16Array10;
c0 = obj;
let num = 0;
do {
  let tmp17 = (2863311530 & num) >>> 1 | (1431655765 & num) << 1;
  let tmp18 = (3435973836 & tmp17) >>> 2 | (858993459 & tmp17) << 2;
  let tmp19 = (4042322160 & tmp18) >>> 4 | (252645135 & tmp18) << 4;
  let tmp20 = (4278255360 & tmp19) >>> 8 | (16711935 & tmp19) << 8;
  obj.i[num] = (tmp20 >>> 16 | tmp20 << 16) >>> 17;
  num = num + 1;
  num2 = 0;
} while (num < 32768);
do {
  obj.B[num2] = obj.o[num2] << 3 | obj.z[num2];
  obj.h[num2] = obj.p[num2] << 4 | obj.w[num2];
  num2 = num2 + 1;
} while (num2 < 32);
const s = obj.s;
let num3 = 143;
do {
  let arr = require("module_0");
  tmp22 = num3;
  num3 = num3 - 1;
} while (0 !== tmp22);
const s1 = obj.s;
let num4 = 111;
do {
  arr = require("module_0");
  tmp24 = num4;
  num4 = num4 - 1;
} while (0 !== tmp24);
const s2 = obj.s;
let num5 = 23;
do {
  let arr1 = require("module_0");
  tmp26 = num5;
  num5 = num5 - 1;
} while (0 !== tmp26);
const s3 = obj.s;
let num6 = 7;
do {
  let arr2 = require("module_0");
  tmp28 = num6;
  num6 = num6 - 1;
} while (0 !== tmp28);
const s4 = obj.s;
let v = obj.v;
let num7 = 0;
do {
  v[num7] = 0;
  num7 = num7 + 1;
} while (num7 <= 9);
for (let num8 = 1; num8 < length; num8 = num8 + 2) {
  let tmp29 = s4[num8];
  v[tmp29] = v[tmp29] + 1;
}
let m = obj.m;
v[0] = 0;
let num9 = 1;
let num10 = 0;
do {
  let tmp30 = num10 + v[num9 - 1] << 1;
  m[num9] = tmp30;
  num9 = num9 + 1;
  num10 = tmp30;
} while (num9 <= 9);
for (let num11 = 0; num11 < length; num11 = num11 + 2) {
  let tmp31 = s4[num11 + 1];
  let tmp32 = num11;
  if (0 != tmp31) {
    s4[num11] = m[tmp31];
    m[tmp31] = m[tmp31] + 1;
  }
}
const s5 = obj.s;
for (let num12 = 0; num12 < length2; num12 = num12 + 2) {
  let sum = num12 + 1;
  let tmp36 = num12;
  if (0 != s5[sum]) {
    let diff = 9 - s5[sum];
    let sum2 = s5[num12] << diff;
    let sum1 = sum2 + (1 << diff);
    if (sum2 !== sum1) {
      do {
        tmp33[tmp34[sum2] >>> 6] = tmp37;
        sum2 = sum2 + 1;
      } while (sum2 !== sum1);
    }
  }
}
const s6 = obj.s;
let num13 = 0;
if (0 < s6.length) {
  do {
    s6[num13] = tmp41[s6[num13] << 9 - s6[num13 + 1]] >>> 6;
    num13 = num13 + 2;
    length3 = s6.length;
  } while (num13 < length3);
}
const t = obj.t;
let num14 = 31;
do {
  let arr3 = require("module_0");
  tmp43 = num14;
  num14 = num14 - 1;
} while (0 !== tmp43);
const t1 = obj.t;
let v2 = obj.v;
let num15 = 0;
do {
  v2[num15] = 0;
  num15 = num15 + 1;
} while (num15 <= 5);
for (let num16 = 1; num16 < length4; num16 = num16 + 2) {
  let tmp44 = t1[num16];
  v2[tmp44] = v2[tmp44] + 1;
}
let m2 = obj.m;
v2[0] = 0;
let num17 = 1;
let num18 = 0;
do {
  let tmp45 = num18 + v2[num17 - 1] << 1;
  m2[num17] = tmp45;
  num17 = num17 + 1;
  num18 = tmp45;
} while (num17 <= 5);
for (let num19 = 0; num19 < length4; num19 = num19 + 2) {
  let tmp46 = t1[num19 + 1];
  let tmp47 = num19;
  if (0 != tmp46) {
    t1[num19] = m2[tmp46];
    m2[tmp46] = m2[tmp46] + 1;
  }
}
const t2 = obj.t;
for (let num20 = 0; num20 < length5; num20 = num20 + 2) {
  let sum3 = num20 + 1;
  let tmp51 = num20;
  if (0 != t2[sum3]) {
    let diff1 = 5 - t2[sum3];
    let sum5 = t2[num20] << diff1;
    let sum4 = sum5 + (1 << diff1);
    if (sum5 !== sum4) {
      do {
        tmp48[tmp49[sum5] >>> 10] = tmp52;
        sum5 = sum5 + 1;
      } while (sum5 !== sum4);
    }
  }
}
const t3 = obj.t;
let num21 = 0;
if (0 < t3.length) {
  do {
    t3[num21] = tmp56[t3[num21] << 5 - t3[num21 + 1]] >>> 10;
    num21 = num21 + 2;
    length6 = t3.length;
  } while (num21 < length6);
}
let b = obj.b;
let num22 = 18;
do {
  let arr4 = require("module_0");
  tmp58 = num22;
  num22 = num22 - 1;
} while (0 !== tmp58);
let c = obj.c;
let num23 = 285;
do {
  let arr5 = require("module_0");
  tmp60 = num23;
  num23 = num23 - 1;
} while (0 !== tmp60);
let event = obj.e;
let num24 = 29;
do {
  let arr6 = require("module_0");
  tmp62 = num24;
  num24 = num24 - 1;
} while (0 !== tmp62);
let a = obj.a;
let num25 = 319;
do {
  let arr7 = require("module_0");
  tmp64 = num25;
  num25 = num25 - 1;
} while (0 !== tmp64);
let dither = function v(buffer) {
  let A;
  let arr2;
  let g;
  let k;
  let n;
  let sum22;
  let _Uint8Array = arg1;
  _Uint8Array = Uint8Array;
  if (3 == buffer[0]) {
    if (0 == buffer[1]) {
      if (!_Uint8Array) {
        _Uint8Array = new.target;
        _Uint8Array = new.target;
        _Uint8Array = new _Uint8Array(0);
      }
      return _Uint8Array;
    }
  }
  let _Uint8Array1 = _Uint8Array;
  if (null == _Uint8Array) {
    _Uint8Array1 = new _Uint8Array(buffer.length >>> 2 << 3);
  }
  let num3 = 0;
  let num4 = 0;
  let num5 = 0;
  let num6 = 0;
  do {
    let tmp7 = num3 >>> 3;
    let sum = num3 + 1;
    let tmp11 = sum >>> 3;
    let tmp12 = (buffer[tmp11] | buffer[1 + tmp11] << 8 | buffer[2 + tmp11] << 16) >>> (7 & sum) & 3;
    let sum1 = num3 + 3;
    let tmp14 = num3;
    let tmp15 = num4;
    let num7 = num5;
    let num8 = num6;
    A = tmp5;
    g = tmp6;
    let tmp16 = _Uint8Array1;
    let tmp8 = buffer[tmp7] | buffer[1 + tmp7] << 8;
    let tmp9 = buffer[2 + tmp7] << 16;
    if (0 !== tmp12) {
      let tmp38 = _Uint8Array1;
      if (tmp2) {
        let sum2 = num4 + 131072;
        let length2 = _Uint8Array1.length;
        let tmp40 = _Uint8Array1;
        if (sum2 > length2) {
          let _Uint8Array3 = Uint8Array;
          let _Math2 = Math;
          let tmp41 = new.target;
          let tmp42 = new.target;
          let uint8Array = new Uint8Array(Math.max(length2 << 1, sum2));
          let tmp43 = uint8Array;
          let result = uint8Array.set(_Uint8Array1, 0);
          tmp40 = uint8Array;
        }
        tmp38 = tmp40;
      }
      if (1 === tmp12) {
        let tmp45 = _undefined;
        ({ g, A } = _undefined);
        num7 = 31;
        num8 = 511;
      }
      let tmp46 = sum1;
      let sum18 = num4;
      let arr3 = tmp38;
      if (2 === tmp12) {
        _Uint8Array = sum1 >>> 3;
        _Uint8Array = sum1 + 5;
        _Uint8Array = _Uint8Array >>> 3;
        _Uint8Array = sum1 + 10;
        _Uint8Array = _Uint8Array >>> 3;
        let num9 = 0;
        _Uint8Array = buffer[_Uint8Array] | buffer[1 + _Uint8Array] << 8;
        _Uint8Array = buffer[_Uint8Array] | buffer[1 + _Uint8Array] << 8;
        _Uint8Array = buffer[_Uint8Array] | buffer[1 + _Uint8Array] << 8;
        do {
          let tmp48 = _undefined;
          _undefined.b[num9] = 0;
          _undefined.b[num9 + 1] = 0;
          num9 = num9 + 2;
        } while (num9 < 38);
        let sum3 = (_Uint8Array >>> (7 & _Uint8Array) & 15) + 4;
        let sum4 = sum1 + 14;
        let num10 = 0;
        let num11 = 1;
        let num12 = 1;
        if (0 < sum3) {
          do {
            let sum5 = sum4 + 3 * num10;
            let tmp52 = sum5 >>> 3;
            let tmp53 = (buffer[tmp52] | buffer[1 + tmp52] << 8) >>> (7 & sum5) & 7;
            _undefined.b[1 + (_undefined.d[num10] << 1)] = tmp53;
            let tmp55 = num10;
            let tmp56 = num11;
            let tmp54 = _undefined;
            if (num11 < tmp53) {
              tmp56 = tmp53;
            }
            num10 = num10 + 1;
            num11 = tmp56;
            tmp48 = tmp54;
            num12 = tmp56;
          } while (num10 < sum3);
        }
        let b = tmp48.b;
        let length3 = b.length;
        let v = tmp48.v;
        let num13 = 0;
        if (0 <= num12) {
          do {
            v[num13] = 0;
            num13 = num13 + 1;
          } while (num13 <= num12);
        }
        for (let num14 = 1; num14 < length3; num14 = num14 + 2) {
          let tmp57 = b[num14];
          v[tmp57] = v[tmp57] + 1;
        }
        let tmp58 = _undefined;
        let m = _undefined.m;
        v[0] = 0;
        let num15 = 1;
        let num16 = 0;
        if (1 <= num12) {
          do {
            let tmp59 = num16 + v[num15 - 1] << 1;
            m[num15] = tmp59;
            num15 = num15 + 1;
            num16 = tmp59;
          } while (num15 <= num12);
        }
        for (let num17 = 0; num17 < length3; num17 = num17 + 2) {
          let tmp60 = b[num17 + 1];
          let tmp61 = num17;
          if (0 != tmp60) {
            b[num17] = m[tmp60];
            m[tmp60] = m[tmp60] + 1;
          }
        }
        let b1 = tmp48.b;
        let length4 = b1.length;
        let tmp63 = _undefined;
        for (let num18 = 0; num18 < length4; num18 = num18 + 2) {
          let sum6 = num18 + 1;
          let tmp67 = num18;
          if (0 != b1[sum6]) {
            let diff = num12 - b1[sum6];
            let sum8 = b1[num18] << diff;
            let sum7 = sum8 + (1 << diff);
            if (sum8 !== sum7) {
              do {
                tmp62[tmp64[sum8] >>> tmp65] = tmp68;
                sum8 = sum8 + 1;
              } while (sum8 !== sum7);
            }
          }
        }
        let sum9 = (_Uint8Array >>> (7 & sum1) & 31) + 257;
        let sum10 = (_Uint8Array >>> (7 & _Uint8Array) & 31) + 1;
        let sum11 = sum4 + 3 * sum3;
        ({ k, n } = tmp48);
        let sum12 = sum9 + sum10;
        let a = tmp48.a;
        let num19 = 0;
        let tmp78 = sum11;
        let tmp79 = sum11;
        if (0 < sum12) {
          do {
            let tmp80 = tmp78 >>> 3;
            let tmp81 = tmp75[(buffer[tmp80] | buffer[1 + tmp80] << 8 | buffer[2 + tmp80] << 16) >>> (7 & tmp78) & tmp76];
            let sum13 = tmp78 + (15 & tmp81);
            let tmp83 = tmp81 >>> 4;
            let tmp84 = num19;
            if (tmp83 <= 15) {
              a[num19] = tmp83;
              sum14 = num19 + 1;
              let tmp90 = sum13;
            } else {
              if (16 === tmp83) {
                let tmp87 = sum13 >>> 3;
                let num20 = 3 + ((buffer[tmp87] | buffer[1 + tmp87] << 8) >>> (7 & sum13) & 3);
                let sum15 = sum13 + 2;
                let num21 = a[num19 - 1];
              } else if (17 === tmp83) {
                let tmp86 = sum13 >>> 3;
                num20 = 3 + ((buffer[tmp86] | buffer[1 + tmp86] << 8) >>> (7 & sum13) & 7);
                sum15 = sum13 + 3;
                num21 = 0;
              } else {
                num20 = 0;
                num21 = 0;
                sum15 = sum13;
                if (18 === tmp83) {
                  _Uint8Array = sum13 >>> 3;
                  num20 = 11 + ((buffer[_Uint8Array] | buffer[1 + _Uint8Array] << 8) >>> (7 & sum13) & 127);
                  sum15 = sum13 + 7;
                  num21 = 0;
                }
              }
              let sum16 = num19 + num20;
              let sum17 = num19;
              tmp90 = sum15;
              sum14 = num19;
              if (num19 < sum16) {
                do {
                  a[sum17] = num21;
                  sum17 = sum17 + 1;
                  tmp90 = sum15;
                  sum14 = sum17;
                } while (sum17 < sum16);
              }
            }
            num19 = sum14;
            tmp78 = tmp90;
            tmp79 = tmp90;
          } while (sum14 < sum12);
        }
        let c = tmp48.c;
        let tmp93 = c.length >>> 1;
        let num22 = 0;
        let num23 = 0;
        let num24 = 0;
        let num25 = 0;
        if (0 < sum9) {
          do {
            let tmp94 = tmp92[num22];
            let tmp95 = num22 << 1;
            c[tmp95] = 0;
            c[1 + tmp95] = tmp94;
            let tmp96 = num22;
            let tmp97 = num23;
            if (tmp94 > num23) {
              tmp97 = tmp94;
            }
            num22 = num22 + 1;
            num23 = tmp97;
            num25 = tmp97;
            num24 = num22;
          } while (num22 < sum9);
        }
        if (num24 < tmp93) {
          do {
            let tmp98 = num24 << 1;
            c[tmp98] = 0;
            c[1 + tmp98] = 0;
            num24 = num24 + 1;
          } while (num24 < tmp93);
        }
        let event = tmp48.e;
        _Uint8Array = event.length >>> 1;
        let num26 = 0;
        let num27 = 0;
        let num28 = 0;
        let num29 = 0;
        let tmp99 = 1 << num25;
        if (0 < sum10) {
          do {
            _Uint8Array = _Uint8Array[num26 + sum9];
            _Uint8Array = num26 << 1;
            event[_Uint8Array] = 0;
            event[1 + _Uint8Array] = _Uint8Array;
            _Uint8Array = num26;
            _Uint8Array = num27;
            num26 = num26 + 1;
            num27 = _Uint8Array;
            num29 = _Uint8Array;
            num28 = num26;
          } while (num26 < sum10);
        }
        if (num28 < _Uint8Array) {
          do {
            _Uint8Array = num28 << 1;
            event[_Uint8Array] = 0;
            event[1 + _Uint8Array] = 0;
            num28 = num28 + 1;
          } while (num28 < _Uint8Array);
        }
        let _undefined2 = tmp48.c;
        let length5 = _undefined2.length;
        _Uint8Array = _undefined;
        let v2 = _undefined.v;
        let num30 = 0;
        _Uint8Array = 1 << num29;
        if (0 <= num25) {
          do {
            v2[num30] = 0;
            num30 = num30 + 1;
          } while (num30 <= num25);
        }
        for (let num31 = 1; num31 < length5; num31 = num31 + 2) {
          _Uint8Array = _undefined2[num31];
          v2[_Uint8Array] = v2[_Uint8Array] + 1;
        }
        _Uint8Array = _undefined;
        let m2 = _undefined.m;
        v2[0] = 0;
        let num32 = 1;
        let num33 = 0;
        if (1 <= num25) {
          do {
            _Uint8Array = num33 + v2[num32 - 1] << 1;
            m2[num32] = _Uint8Array;
            num32 = num32 + 1;
            num33 = _Uint8Array;
          } while (num32 <= num25);
        }
        for (let num34 = 0; num34 < length5; num34 = num34 + 2) {
          _Uint8Array = _undefined2[num34 + 1];
          _Uint8Array = num34;
          if (0 != _Uint8Array) {
            _undefined2[num34] = m2[_Uint8Array];
            m2[_Uint8Array] = m2[_Uint8Array] + 1;
          }
        }
        let _undefined3 = tmp48.c;
        let length6 = _undefined3.length;
        _Uint8Array = _undefined;
        for (let num35 = 0; num35 < length6; num35 = num35 + 2) {
          _Uint8Array = num35 + 1;
          _Uint8Array = num35;
          if (0 != _undefined3[_Uint8Array]) {
            _Uint8Array = num25 - _undefined3[_Uint8Array];
            _Uint8Array = _undefined3[num35] << _Uint8Array;
            _Uint8Array = _Uint8Array + (1 << _Uint8Array);
            if (_Uint8Array != _Uint8Array) {
              do {
                k[_Uint8Array[_Uint8Array] >>> 15 - num25] = _Uint8Array;
                _Uint8Array = _Uint8Array + 1;
              } while (_Uint8Array != _Uint8Array);
            }
          }
        }
        let event1 = tmp48.e;
        let length7 = event1.length;
        _Uint8Array = _undefined;
        let v3 = _undefined.v;
        for (let num36 = 0; num36 <= num29; num36 = num36 + 1) {
          v3[num36] = 0;
        }
        for (let num37 = 1; num37 < length7; num37 = num37 + 2) {
          _Uint8Array = event1[num37];
          v3[_Uint8Array] = v3[_Uint8Array] + 1;
        }
        _Uint8Array = _undefined;
        let m3 = _undefined.m;
        v3[0] = 0;
        let num38 = 1;
        let num39 = 0;
        if (1 <= num29) {
          do {
            _Uint8Array = num39 + v3[num38 - 1] << 1;
            m3[num38] = _Uint8Array;
            num38 = num38 + 1;
            num39 = _Uint8Array;
          } while (num38 <= num29);
        }
        for (let num40 = 0; num40 < length7; num40 = num40 + 2) {
          _Uint8Array = event1[num40 + 1];
          _Uint8Array = num40;
          if (0 != _Uint8Array) {
            event1[num40] = m3[_Uint8Array];
            m3[_Uint8Array] = m3[_Uint8Array] + 1;
          }
        }
        _Uint8Array = tmp99 - 1;
        _Uint8Array = _Uint8Array - 1;
        let event2 = tmp48.e;
        let length8 = event2.length;
        _Uint8Array = _undefined;
        let num41 = 0;
        tmp46 = tmp79;
        sum18 = num4;
        num7 = _Uint8Array;
        num8 = _Uint8Array;
        A = n;
        g = k;
        arr3 = tmp38;
        if (0 < length8) {
          do {
            _Uint8Array = num41 + 1;
            _Uint8Array = num41;
            if (0 != event2[_Uint8Array]) {
              _Uint8Array = num29 - event2[_Uint8Array];
              _Uint8Array = event2[num41] << _Uint8Array;
              _Uint8Array = _Uint8Array + (1 << _Uint8Array);
              if (_Uint8Array != _Uint8Array) {
                do {
                  n[_Uint8Array[_Uint8Array] >>> 15 - num29] = _Uint8Array;
                  _Uint8Array = _Uint8Array + 1;
                } while (_Uint8Array != _Uint8Array);
              }
            }
            num41 = num41 + 2;
            tmp46 = tmp79;
            sum18 = num4;
            num7 = _Uint8Array;
            num8 = _Uint8Array;
            A = n;
            g = k;
            arr3 = tmp38;
          } while (num41 < length8);
        }
      }
      while (true) {
        _Uint8Array = tmp46 >>> 3;
        _Uint8Array = g[(buffer[_Uint8Array] | buffer[1 + _Uint8Array] << 8 | buffer[2 + _Uint8Array] << 16) >>> (7 & tmp46) & num8];
        _Uint8Array = tmp46 + (15 & _Uint8Array);
        _Uint8Array = _Uint8Array >>> 4;
        _Uint8Array = sum18;
        _Uint8Array = arr3;
        if (_Uint8Array >>> 8 === 0) {
          sum18 = sum18 + 1;
          arr3[_Uint8Array] = _Uint8Array;
          tmp46 = _Uint8Array;
          continue;
        } else {
          let tmp32 = _Uint8Array;
          sum22 = sum18;
          let tmp34 = num7;
          let tmp35 = num8;
          let tmp36 = A;
          let tmp37 = g;
          arr2 = arr3;
          if (256 === _Uint8Array) {
            break;
          } else {
            _Uint8Array = sum18 + _Uint8Array - 254;
            if (264 < _Uint8Array) {
              _Uint8Array = _undefined;
              _Uint8Array = _undefined.B[_Uint8Array - 257];
              _Uint8Array = _Uint8Array >>> 3;
              _Uint8Array = sum18 + (_Uint8Array >>> 3) + ((buffer[_Uint8Array] | buffer[1 + _Uint8Array] << 8) >>> (7 & _Uint8Array) & (1 << (7 & _Uint8Array)) - 1);
              _Uint8Array = _Uint8Array + (7 & _Uint8Array);
            }
            _Uint8Array = _Uint8Array >>> 3;
            _Uint8Array = A[(buffer[_Uint8Array] | buffer[1 + _Uint8Array] << 8 | buffer[2 + _Uint8Array] << 16) >>> (7 & _Uint8Array) & num7];
            _Uint8Array = _Uint8Array + (15 & _Uint8Array);
            _Uint8Array = _undefined;
            _Uint8Array = _undefined.h[_Uint8Array >>> 4];
            _Uint8Array = _Uint8Array >>> 3;
            _Uint8Array = (_Uint8Array >>> 4) + ((buffer[_Uint8Array] | buffer[1 + _Uint8Array] << 8 | buffer[2 + _Uint8Array] << 16) >>> (7 & _Uint8Array) & (1 << (15 & _Uint8Array)) - 1);
            _Uint8Array = arr3;
            _Uint8Array = 15 & _Uint8Array;
            if (tmp2) {
              _Uint8Array = sum18 + 131072;
              let length9 = arr3.length;
              _Uint8Array = arr3;
              if (_Uint8Array > length9) {
                let _Uint8Array4 = Uint8Array;
                let _Math3 = Math;
                _Uint8Array = new.target;
                _Uint8Array = new.target;
                let uint8Array1 = new Uint8Array(Math.max(length9 << 1, _Uint8Array));
                _Uint8Array = uint8Array1;
                _Uint8Array = uint8Array1.set(arr3, 0);
                _Uint8Array = uint8Array1;
              }
            }
            _Uint8Array = _Uint8Array + _Uint8Array;
            tmp46 = _Uint8Array;
            sum18 = _Uint8Array;
            arr3 = _Uint8Array;
            if (_Uint8Array >= _Uint8Array) {
              continue;
            } else {
              do {
                _Uint8Array = _Uint8Array + 1;
                _Uint8Array[_Uint8Array] = _Uint8Array[_Uint8Array - _Uint8Array];
                _Uint8Array = _Uint8Array + 1;
                _Uint8Array[_Uint8Array] = _Uint8Array[_Uint8Array - _Uint8Array];
                _Uint8Array = _Uint8Array + 1;
                _Uint8Array[_Uint8Array] = _Uint8Array[_Uint8Array - _Uint8Array];
                _Uint8Array = _Uint8Array + 1;
                _Uint8Array[_Uint8Array] = _Uint8Array[_Uint8Array - _Uint8Array];
                tmp46 = _Uint8Array;
                num7 = _Uint8Array;
                num8 = _Uint8Array;
                A = _Uint8Array;
                g = _Uint8Array;
                arr3 = _Uint8Array;
                sum18 = _Uint8Array;
              } while (_Uint8Array < _Uint8Array);
              continue;
            }
            continue;
          }
        }
      }
    } else {
      _Uint8Array = 7 & sum1;
      let sum19 = sum1;
      if (_Uint8Array) {
        sum19 = sum1 + (8 - _Uint8Array);
      }
      let sum20 = 4 + (sum19 >>> 3);
      let tmp19 = buffer[sum20 - 4] | buffer[sum20 - 3] << 8;
      let obj = _Uint8Array1;
      if (tmp2) {
        let sum21 = num4 + tmp19;
        let length = _Uint8Array1.length;
        let tmp21 = _Uint8Array1;
        if (sum21 > length) {
          let _Uint8Array2 = Uint8Array;
          let _Math = Math;
          let tmp22 = new.target;
          let tmp23 = new.target;
          let uint8Array2 = new Uint8Array(Math.max(length << 1, sum21));
          let tmp24 = uint8Array2;
          let result1 = uint8Array2.set(_Uint8Array1, 0);
          tmp21 = uint8Array2;
        }
        obj = tmp21;
      }
      let tmp26 = new.target;
      let tmp27 = new.target;
      let tmp28 = tmp19;
      _Uint8Array2 = new _Uint8Array(buffer.buffer, buffer.byteOffset + sum20, tmp19);
      let tmp30 = _Uint8Array2;
      let result2 = obj.set(_Uint8Array2, num4);
      tmp32 = sum20 + tmp19 << 3;
      sum22 = num4 + tmp19;
      arr2 = obj;
      tmp34 = num7;
      tmp35 = num8;
      tmp36 = A;
      tmp37 = g;
    }
    _Uint8Array = (tmp8 | tmp9) >>> (7 & num3) & 1;
    num3 = tmp32;
    num5 = tmp34;
    num6 = tmp35;
    tmp5 = tmp36;
    tmp6 = tmp37;
    num4 = sum22;
    _Uint8Array1 = arr2;
  } while (0 === _Uint8Array);
  _Uint8Array = arr2;
  if (arr2.length != sum22) {
    _Uint8Array = arr2.slice(0, sum22);
  }
  return _Uint8Array;
};
obj = {
  decode(arg0) {
    let readUint;
    let readUshort;
    const uint8Array = new Uint8Array(arg0);
    let obj = c0;
    ({ readUshort, readUint } = c0);
    const size = { tabs: {}, frames: [] };
    const uint8Array1 = new Uint8Array(uint8Array.length);
    let num = 0;
    while (uint8Array[num] == [137, 80, 78, 71, 13, 10, 26, 10][num]) {
      num = num + 1;
      if (num < 8) {
        continue;
      } else {
        let num2 = 4;
        let num3 = 2;
        let tmp7 = null;
        let num4 = 1000;
        let num5 = 24;
        let num6 = 25;
        let num7 = 12;
        let num8 = 16;
        let num9 = 22;
        let num10 = 20;
        let num11 = 100;
        let str = "tEXt";
        let num12 = 3;
        let num13 = 100000;
        let num14 = 6;
        let str2 = "IEND";
        let str3 = "bKGD";
        let str4 = "sRGB";
        let str5 = "gAMA";
        let str6 = "tRNS";
        let str7 = "hIST";
        let str8 = "PLTE";
        let str9 = "iTXt";
        let str10 = "zTXt";
        let str11 = "cHRM";
        let str12 = "pHYs";
        let str13 = "fdAT";
        let str14 = "fcTL";
        let str15 = "acTL";
        let str16 = "IDAT";
        let str17 = "CgBI";
        let str18 = "iCCP";
        let str19 = "IHDR";
        let num15 = 0;
        let num16 = 0;
        let num17 = 8;
        let num18 = 0;
        let tmp6 = uint8Array1;
        if (8 < uint8Array.length) {
          let uint = obj.readUint(uint8Array, num17);
          let sum = num17 + 4;
          let aSCII = obj.readASCII(uint8Array, sum, 4);
          let sum1 = sum + 4;
          let tmp12 = num15;
          let tmp13 = num16;
          let tmp14 = arr1;
          if ("IHDR" == aSCII) {
            let tmp61 = compressPNG;
            let tmp62 = compressPNG(uint8Array, sum1, size);
            let sum4 = num15;
            let sum3 = num16;
            let uint8Array2 = arr1;
          } else if ("iCCP" == aSCII) {
            let tmp49 = sum1;
            let tmp50 = sum1;
            if (0 != uint8Array[sum1]) {
              do {
                let sum2 = tmp49 + 1;
                tmp49 = sum2;
                tmp50 = sum2;
                tmp52 = uint8Array[sum2];
              } while (0 != tmp52);
            }
            let aSCII1 = obj.readASCII(uint8Array, sum1, tmp50 - sum1);
            let tmp54 = uint8Array[tmp50 + 1];
            let tmp56 = null;
            try {
              let tmp57 = _undefined4;
              let tmp58 = _undefined4(tmp55);
              let tmp60 = tmp58;
              size.tabs[aSCII] = tmp58;
              sum4 = num15;
              sum3 = num16;
              uint8Array2 = arr1;
            } catch (err) {
              let tmp59 = dither;
              tmp58 = dither(tmp4);
            }
          } else if ("CgBI" == aSCII) {
            size.tabs[aSCII] = uint8Array.slice(sum1, sum1 + 4);
            sum4 = num15;
            sum3 = num16;
            uint8Array2 = arr1;
          } else if ("IDAT" == aSCII) {
            for (let num24 = 0; num24 < uint; num24 = num24 + 1) {
              uint8Array1[num16 + num24] = uint8Array[sum1 + num24];
            }
            sum3 = num16 + uint;
            sum4 = num15;
            uint8Array2 = arr1;
          } else if ("acTL" == aSCII) {
            obj = { num_frames: null, num_plays: null };
            obj[0] = readUint(uint8Array, sum1);
            obj[1] = readUint(uint8Array, sum1 + 4);
            size.tabs[aSCII] = obj;
            let _Uint8Array = Uint8Array;
            let tmp47 = new.target;
            let tmp48 = new.target;
            uint8Array2 = new Uint8Array(uint8Array.length);
            sum4 = num15;
            sum3 = num16;
          } else if ("fcTL" == aSCII) {
            let num22 = num15;
            if (0 !== num15) {
              let tmp41 = size.frames[size.frames.length - 1];
              let tmp42 = _undefined3;
              let tmp43 = size;
              tmp41.data = _undefined3(size, arr1.slice(0, num15), tmp41.rect.width, tmp41.rect.height);
              num22 = 0;
            }
            obj = { x: null, y: null, width: null, height: null };
            obj[0] = readUint(uint8Array, sum1 + 12);
            obj[1] = readUint(uint8Array, sum1 + 16);
            obj[2] = readUint(uint8Array, sum1 + 4);
            obj[3] = readUint(uint8Array, sum1 + 8);
            let ushort = readUshort(uint8Array, sum1 + 22);
            let obj1 = { rect: null, delay: null, dispose: null, blend: null };
            obj1[0] = obj;
            let num23 = 100;
            let ushort1 = readUshort(uint8Array, sum1 + 20);
            if (0 != ushort) {
              num23 = ushort;
            }
            obj1[1] = 1000 * (ushort1 / num23);
            obj1[2] = uint8Array[sum1 + 24];
            obj1[3] = uint8Array[sum1 + 25];
            let frames = size.frames;
            let arr = frames.push(obj1);
            sum4 = num22;
            sum3 = num16;
            uint8Array2 = arr1;
          } else if ("fdAT" == aSCII) {
            let num21 = 0;
            if (0 < uint - 4) {
              do {
                arr1[num15 + num21] = uint8Array[sum1 + num21 + 4];
                num21 = num21 + 1;
                diff = uint - 4;
              } while (num21 < diff);
            }
            sum4 = num15 + (uint - 4);
            sum3 = num16;
            uint8Array2 = arr1;
          } else if ("pHYs" == aSCII) {
            let items = [obj.readUint(uint8Array, sum1), obj.readUint(uint8Array, sum1 + 4), uint8Array[sum1 + 8]];
            size.tabs[aSCII] = items;
            sum4 = num15;
            sum3 = num16;
            uint8Array2 = arr1;
          } else if ("cHRM" == aSCII) {
            size.tabs[aSCII] = [];
            let num20 = 0;
            do {
              let arr9 = size.tabs[aSCII];
              arr = arr9.push(obj.readUint(uint8Array, sum1 + 4 * num20));
              num20 = num20 + 1;
              sum4 = num15;
              sum3 = num16;
              uint8Array2 = arr1;
            } while (num20 < 8);
          } else {
            if ("tEXt" != aSCII) {
              if ("zTXt" != aSCII) {
                if ("iTXt" == aSCII) {
                  if (null == size.tabs[aSCII]) {
                    size.tabs[aSCII] = {};
                  }
                  let nextZeroResult = obj.nextZero(uint8Array, sum1);
                  let sum5 = nextZeroResult + 1;
                  let tmp23 = uint8Array[sum5 + 1];
                  let sum6 = sum5 + 2;
                  let aSCII2 = obj.readASCII(uint8Array, sum1, nextZeroResult - sum1);
                  let nextZeroResult1 = obj.nextZero(uint8Array, sum6);
                  let aSCII3 = obj.readASCII(uint8Array, sum6, nextZeroResult1 - sum6);
                  let sum7 = nextZeroResult1 + 1;
                  let nextZeroResult2 = obj.nextZero(uint8Array, sum7);
                  let uTF8 = obj.readUTF8(uint8Array, sum7, nextZeroResult2 - sum7);
                  let sum8 = nextZeroResult2 + 1;
                  let diff1 = uint - (sum8 - sum1);
                  if (0 == uint8Array[sum5]) {
                    let uTF81 = obj.readUTF8(uint8Array, sum8, diff1);
                  } else {
                    let tmp32 = _undefined4;
                    let arr7 = _undefined4(uint8Array.slice(sum8, sum8 + diff1));
                    uTF81 = obj.readUTF8(arr7, 0, arr7.length);
                  }
                  size.tabs[aSCII][aSCII2] = uTF81;
                  sum4 = num15;
                  sum3 = num16;
                  uint8Array2 = arr1;
                } else if ("PLTE" == aSCII) {
                  size.tabs[aSCII] = obj.readBytes(uint8Array, sum1, uint);
                  sum4 = num15;
                  sum3 = num16;
                  uint8Array2 = arr1;
                } else if ("hIST" == aSCII) {
                  let result = size.tabs.PLTE.length / 3;
                  size.tabs[aSCII] = [];
                  let num19 = 0;
                  sum4 = num15;
                  sum3 = num16;
                  uint8Array2 = arr1;
                  if (0 < result) {
                    do {
                      let arr6 = size.tabs[aSCII];
                      arr1 = arr6.push(readUshort(uint8Array, sum1 + 2 * num19));
                      num19 = num19 + 1;
                      sum4 = num15;
                      sum3 = num16;
                      uint8Array2 = arr1;
                    } while (num19 < result);
                  }
                } else if ("tRNS" == aSCII) {
                  if (3 == size.ctype) {
                    size.tabs[aSCII] = obj.readBytes(uint8Array, sum1, uint);
                    sum4 = num15;
                    sum3 = num16;
                    uint8Array2 = arr1;
                  } else if (0 == size.ctype) {
                    size.tabs[aSCII] = readUshort(uint8Array, sum1);
                    sum4 = num15;
                    sum3 = num16;
                    uint8Array2 = arr1;
                  } else {
                    sum4 = num15;
                    sum3 = num16;
                    uint8Array2 = arr1;
                    if (2 == size.ctype) {
                      let items1 = [readUshort(uint8Array, sum1), readUshort(uint8Array, sum1 + 2), readUshort(uint8Array, sum1 + 4)];
                      size.tabs[aSCII] = items1;
                      sum4 = num15;
                      sum3 = num16;
                      uint8Array2 = arr1;
                    }
                  }
                } else if ("gAMA" == aSCII) {
                  size.tabs[aSCII] = obj.readUint(uint8Array, sum1) / 100000;
                  sum4 = num15;
                  sum3 = num16;
                  uint8Array2 = arr1;
                } else if ("sRGB" == aSCII) {
                  size.tabs[aSCII] = uint8Array[sum1];
                  sum4 = num15;
                  sum3 = num16;
                  uint8Array2 = arr1;
                } else if ("bKGD" == aSCII) {
                  if (0 != size.ctype) {
                    if (4 != size.ctype) {
                      if (2 != size.ctype) {
                        if (6 != size.ctype) {
                          sum4 = num15;
                          sum3 = num16;
                          uint8Array2 = arr1;
                          if (3 == size.ctype) {
                            size.tabs[aSCII] = uint8Array[sum1];
                            sum4 = num15;
                            sum3 = num16;
                            uint8Array2 = arr1;
                          }
                        }
                      }
                      let items2 = [readUshort(uint8Array, sum1), readUshort(uint8Array, sum1 + 2), readUshort(uint8Array, sum1 + 4)];
                      size.tabs[aSCII] = items2;
                      sum4 = num15;
                      sum3 = num16;
                      uint8Array2 = arr1;
                    }
                  }
                  let items3 = [readUshort(uint8Array, sum1)];
                  size.tabs[aSCII] = items3;
                  sum4 = num15;
                  sum3 = num16;
                  uint8Array2 = arr1;
                } else {
                  sum4 = num15;
                  sum3 = num16;
                  uint8Array2 = arr1;
                  num18 = num15;
                  let arr3 = arr1;
                }
              }
            }
            if (null == size.tabs[aSCII]) {
              size.tabs[aSCII] = {};
            }
            let nextZeroResult3 = obj.nextZero(uint8Array, sum1);
            let diff2 = sum1 + uint - nextZeroResult3 - 1;
            let aSCII4 = obj.readASCII(uint8Array, sum1, nextZeroResult3 - sum1);
            if ("tEXt" == aSCII) {
              let aSCII5 = obj.readASCII(uint8Array, nextZeroResult3 + 1, diff2);
            } else {
              let tmp37 = _undefined4;
              let arr8 = _undefined4(uint8Array.slice(nextZeroResult3 + 2, nextZeroResult3 + 2 + diff2));
              aSCII5 = obj.readUTF8(arr8, 0, arr8.length);
            }
            size.tabs[aSCII][aSCII4] = aSCII5;
            sum4 = num15;
            sum3 = num16;
            uint8Array2 = arr1;
          }
          let sum9 = sum1 + uint;
          let uint1 = obj.readUint(uint8Array, sum9);
          num17 = sum9 + 4;
          num15 = sum4;
          num16 = sum3;
          arr1 = uint8Array2;
          num18 = sum4;
          arr3 = uint8Array2;
        }
        if (0 !== num18) {
          let tmp65 = size.frames[size.frames.length - 1];
          let tmp66 = _undefined3;
          let tmp67 = size;
          tmp65.data = _undefined3(size, arr3.slice(0, num18), tmp65.rect.width, tmp65.rect.height);
        }
        let tmp68 = _undefined3;
        let tmp69 = size;
        let tmp70 = uint8Array1;
        size.data = _undefined3(size, tmp6, size.width, size.height);
        let str20 = "compress";
        delete tmp[tmp2];
        let str21 = "interlace";
        delete tmp[tmp2];
        let str22 = "filter";
        delete tmp[tmp2];
        return size;
      }
    }
    throw "The input is not a PNG file!";
  },
  toRGBA8(img) {
    let height;
    let width;
    ({ width, height } = img);
    if (null == img.tabs.acTL) {
      const items = [_undefined2(img.data, width, height, img).buffer];
      return items;
    } else {
      if (null == img.frames[0].data) {
        img.frames[0].data = img.data;
      }
      const items1 = [];
      const result = width * height * 4;
      const _Uint8Array = Uint8Array;
      const uint8Array = new Uint8Array(result);
      const _Uint8Array2 = Uint8Array;
      const uint8Array1 = new Uint8Array(result);
      const _Uint8Array3 = Uint8Array;
      const uint8Array2 = new Uint8Array(result);
      for (let num5 = 0; num5 < img.frames.length; num5 = num5 + 1) {
        let tmp18 = img.frames[num5];
        let x = tmp18.rect.x;
        let y = tmp18.rect.y;
        let width2 = tmp18.rect.width;
        let height2 = tmp18.rect.height;
        let tmp19 = _undefined2;
        let tmp20 = width2;
        let tmp21 = height2;
        let tmp22 = img;
        let tmp23 = _undefined2(tmp18.data, width2, height2, img);
        let tmp24 = num5;
        if (0 !== num5) {
          let num6 = 0;
          if (0 < result) {
            do {
              uint8Array2[num6] = uint8Array[num6];
              num6 = num6 + 1;
            } while (num6 < result);
          }
        }
        if (0 == tmp18.blend) {
          let tmp35 = compress;
          let tmp36 = tmp23;
          let tmp37 = width2;
          let tmp38 = height2;
          let tmp39 = uint8Array;
          let tmp40 = width;
          let tmp41 = height;
          let tmp42 = x;
          let tmp43 = y;
          let num8 = 0;
          let tmp44 = compress(tmp23, width2, height2, tmp7, width, height, x, y, 0);
        } else if (1 == tmp18.blend) {
          let tmp25 = compress;
          let tmp26 = tmp23;
          let tmp27 = width2;
          let tmp28 = height2;
          let tmp29 = uint8Array;
          let tmp30 = width;
          let tmp31 = height;
          let tmp32 = x;
          let tmp33 = y;
          let num7 = 1;
          let tmp34 = compress(tmp23, width2, height2, tmp7, width, height, x, y, 1);
        }
        let buffer = uint8Array.buffer;
        let arr = items1.push(buffer.slice(0));
        if (0 != tmp18.dispose) {
          if (1 == tmp18.dispose) {
            let tmp46 = compress;
            let tmp47 = uint8Array1;
            let tmp48 = width2;
            let tmp49 = height2;
            let tmp50 = uint8Array;
            let tmp51 = width;
            let tmp52 = height;
            let tmp53 = x;
            let tmp54 = y;
            let num10 = 0;
            let tmp55 = compress(uint8Array1, width2, height2, tmp7, width, height, x, y, 0);
          } else if (2 == tmp18.dispose) {
            let num9 = 0;
            if (0 < result) {
              do {
                uint8Array[num9] = uint8Array2[num9];
                num9 = num9 + 1;
              } while (num9 < result);
            }
          }
        }
      }
      return items1;
    }
  },
  _paeth(arg0, arg1, arg2) {
    let tmp = arg0;
    let tmp2 = arg2;
    const diff = arg0 + arg1 - arg2;
    const diff1 = diff - arg0;
    const diff2 = diff - arg1;
    const diff3 = diff - arg2;
    if (diff1 * diff1 > diff2 * diff2) {
      if (diff2 * diff2 <= diff3 * diff3) {
        tmp2 = arg1;
      }
      tmp = tmp2;
    }
    return tmp;
  },
  _copyTile,
  _bin: obj
};
c0 = undefined;
c1 = undefined;
c2 = undefined;
c3 = undefined;
let c16;
dither = function dither(img, width, height, plte, first, first2) {
  let length2;
  let num = arg6;
  if (null == arg6) {
    num = 1;
  }
  const items = [];
  for (let num2 = 0; num2 < length; num2 = num2 + 1) {
    let tmp = plte[num2];
    let items1 = [tmp >>> 0 & 255, tmp >>> 8 & 255, tmp >>> 16 & 255, tmp >>> 24 & 255];
    let arr = items.push(items1);
  }
  for (let num3 = 0; num3 < length; num3 = num3 + 1) {
    let tmp3 = num3;
    let num4 = 0;
    let num5 = 4294967295;
    let num6 = 4294967295;
    if (0 < length) {
      do {
        let tmp4 = items[num3];
        let tmp5 = items[num4];
        let diff = tmp4[0] - tmp5[0];
        let diff1 = tmp4[1] - tmp5[1];
        let diff2 = tmp4[2] - tmp5[2];
        let diff3 = tmp4[3] - tmp5[3];
        let sum = diff * diff + diff1 * diff1 + diff2 * diff2 + diff3 * diff3;
        let tmp11 = num4 !== num3;
        let tmp12 = num4;
        let tmp13 = num5;
        if (num4 !== num3) {
          tmp11 = sum < tmp13;
        }
        if (tmp11) {
          tmp13 = sum;
        }
        num4 = num4 + 1;
        num5 = tmp13;
        num6 = tmp13;
      } while (num4 < length);
    }
    let _Math = Math;
    let result = Math.sqrt(num6) / 2;
    [][num3] = ~~result * result;
  }
  const uint32Array = new Uint32Array(first.buffer);
  const int16Array = new Int16Array(width * height * 4);
  const items2 = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
  let num7 = 0;
  if (0 < items2.length) {
    do {
      items2[num7] = 255 * ((items2[num7] + 0.5) / 16 - 0.5);
      num7 = num7 + 1;
      length2 = items2.length;
    } while (num7 < length2);
  }
  for (let num8 = 0; num8 < height; num8 = num8 + 1) {
    let tmp18 = num8;
    for (let num9 = 0; num9 < width; num9 = num9 + 1) {
      let result1 = 4 * (num8 * width + num9);
      let tmp20 = num9;
      if (2 != num) {
        let _Math2 = Math;
        let _Math3 = Math;
        let items3 = [Math.max(0, Math.min(255, img[result1] + int16Array[result1])), , , ];
        let sum1 = result1 + 1;
        let _Math4 = Math;
        let _Math5 = Math;
        items3[1] = Math.max(0, Math.min(255, img[sum1] + int16Array[sum1]));
        let sum2 = result1 + 2;
        let _Math6 = Math;
        let _Math7 = Math;
        items3[2] = Math.max(0, Math.min(255, img[sum2] + int16Array[sum2]));
        let sum3 = result1 + 3;
        let _Math8 = Math;
        let _Math9 = Math;
        items3[3] = Math.max(0, Math.min(255, img[sum3] + int16Array[sum3]));
        let items4 = items3;
      } else {
        let tmp51 = items2[tmp17 + (3 & num9)];
        let _Math10 = Math;
        let _Math11 = Math;
        items4 = [Math.max(0, Math.min(255, img[result1] + tmp51)), , , ];
        let _Math12 = Math;
        let _Math13 = Math;
        items4[1] = Math.max(0, Math.min(255, img[result1 + 1] + tmp51));
        let _Math14 = Math;
        let _Math15 = Math;
        items4[2] = Math.max(0, Math.min(255, img[result1 + 2] + tmp51));
        let _Math16 = Math;
        let _Math17 = Math;
        items4[3] = Math.max(0, Math.min(255, img[result1 + 3] + tmp51));
      }
      let num10 = 16777215;
      let num11 = 0;
      let num12 = 0;
      let num13 = 0;
      if (0 < length) {
        do {
          let tmp24 = items[num11];
          let diff4 = items4[0] - tmp24[0];
          let diff5 = items4[1] - tmp24[1];
          let diff6 = items4[2] - tmp24[2];
          let diff7 = items4[3] - tmp24[3];
          let sum4 = diff4 * diff4 + diff5 * diff5 + diff6 * diff6 + diff7 * diff7;
          let tmp30 = num10;
          let tmp31 = num11;
          let tmp32 = num12;
          if (sum4 < num10) {
            tmp30 = sum4;
            tmp32 = num11;
          }
          num11 = num11 + 1;
          num10 = tmp30;
          num12 = tmp32;
          num13 = tmp32;
        } while (num11 < length);
      }
      let tmp33 = items[num13];
      let items5 = [items4[0] - tmp33[0], items4[1] - tmp33[1], items4[2] - tmp33[2], items4[3] - tmp33[3]];
      if (1 == num) {
        if (num9 !== width - 1) {
          let sum5 = result1 + 4;
          int16Array[sum5] = int16Array[sum5] + (items5[0] * 7 >> 4);
          let sum6 = sum5 + 1;
          int16Array[sum6] = int16Array[sum6] + (items5[1] * 7 >> 4);
          let sum7 = sum5 + 2;
          int16Array[sum7] = int16Array[sum7] + (items5[2] * 7 >> 4);
          let sum8 = sum5 + 3;
          int16Array[sum8] = int16Array[sum8] + (items5[3] * 7 >> 4);
        }
        if (num8 !== height - 1) {
          if (0 !== num9) {
            let diff8 = result1 + 4 * width - 4;
            int16Array[diff8] = int16Array[diff8] + (items5[0] * 3 >> 4);
            let sum9 = diff8 + 1;
            int16Array[sum9] = int16Array[sum9] + (items5[1] * 3 >> 4);
            let sum10 = diff8 + 2;
            int16Array[sum10] = int16Array[sum10] + (items5[2] * 3 >> 4);
            let sum11 = diff8 + 3;
            int16Array[sum11] = int16Array[sum11] + (items5[3] * 3 >> 4);
          }
          let sum12 = result1 + 4 * width;
          int16Array[sum12] = int16Array[sum12] + (items5[0] * 5 >> 4);
          let sum13 = sum12 + 1;
          int16Array[sum13] = int16Array[sum13] + (items5[1] * 5 >> 4);
          let sum14 = sum12 + 2;
          int16Array[sum14] = int16Array[sum14] + (items5[2] * 5 >> 4);
          let sum15 = sum12 + 3;
          int16Array[sum15] = int16Array[sum15] + (items5[3] * 5 >> 4);
          if (num9 !== width - 1) {
            let sum16 = result1 + 4 * width + 4;
            int16Array[sum16] = int16Array[sum16] + (items5[0] >> 4);
            let sum17 = sum16 + 1;
            int16Array[sum17] = int16Array[sum17] + (items5[1] >> 4);
            let sum18 = sum16 + 2;
            int16Array[sum18] = int16Array[sum18] + (items5[2] >> 4);
            let sum19 = sum16 + 3;
            int16Array[sum19] = int16Array[sum19] + (items5[3] >> 4);
          }
        }
      }
      let tmp50 = result1 >> 2;
      first2[tmp50] = num13;
      uint32Array[tmp50] = plte[num13];
    }
  }
};
_main = function _main(tmp3Result, depth, height, arg3, arg4) {
  let writeASCII;
  let writeUint;
  let writeUshort;
  let obj = arg4;
  if (null == arg4) {
    obj = {};
  }
  const crc = _undefined4.crc;
  ({ writeUint, writeUshort, writeASCII } = c1);
  let writeUintResult16 = tmp3Result.frames.length > 1;
  let num = 0;
  if (writeUintResult16) {
    num = 20;
  }
  const sum = 33 + num;
  let sum1 = sum;
  if (null != obj.sRGB) {
    sum1 = sum + 13;
  }
  let sum2 = sum1;
  if (null != obj.pHYs) {
    sum2 = sum1 + 21;
  }
  let sum3 = sum2;
  if (null != obj.iCCP) {
    const deflateResult = globalThis.pako.deflate(obj.iCCP);
    sum3 = sum2 + (21 + deflateResult.length + 4);
  }
  let sum4 = sum3;
  let flag = false;
  if (3 == tmp3Result.ctype) {
    let num8 = 0;
    let flag2 = false;
    let flag3 = false;
    if (0 < tmp3Result.plte.length) {
      do {
        let tmp8 = num8;
        let flag4 = flag2;
        if (tmp3Result.plte[num8] >>> 24 !== 255) {
          flag4 = true;
        }
        num8 = num8 + 1;
        flag2 = flag4;
        flag3 = flag4;
      } while (num8 < length);
    }
    let num9 = 0;
    const result = 3 * length;
    if (flag3) {
      num9 = 8 + length + 4;
    }
    sum4 = sum3 + (8 + result + 4 + num9);
    flag = flag3;
  }
  let tmp10 = sum4;
  let num14 = 0;
  let tmp11 = sum4;
  if (0 < tmp3Result.frames.length) {
    do {
      let tmp12 = num14;
      let tmp13 = tmp10;
      let sum5 = tmp10;
      if (writeUintResult16) {
        sum5 = tmp10 + 38;
      }
      let sum6 = sum5 + (tmp3Result.frames[num14].cimg.length + 12);
      let sum7 = sum6;
      if (0 !== num14) {
        sum7 = sum6 + 4;
      }
      num14 = num14 + 1;
      tmp10 = sum7;
      tmp11 = sum7;
    } while (num14 < tmp3Result.frames.length);
  }
  const uint8Array = new Uint8Array(tmp11 + 12);
  let num15 = 0;
  do {
    uint8Array[num15] = [137, 80, 78, 71, 13, 10, 26, 10][num15];
    num15 = num15 + 1;
  } while (num15 < 8);
  writeUint(uint8Array, 8, 13);
  writeASCII(uint8Array, 12, "IHDR");
  writeUint(uint8Array, 16, depth);
  writeUint(uint8Array, 20, height);
  uint8Array[24] = tmp3Result.depth;
  uint8Array[25] = tmp3Result.ctype;
  uint8Array[26] = 0;
  uint8Array[27] = 0;
  uint8Array[28] = 0;
  writeUint(uint8Array, 29, crc(uint8Array, 12, 17));
  let num16 = 33;
  if (null != obj.sRGB) {
    writeUint(uint8Array, 33, 1);
    writeASCII(uint8Array, 37, "sRGB");
    uint8Array[41] = obj.sRGB;
    writeUint(uint8Array, 42, crc(uint8Array, 37, 5));
    num16 = 46;
  }
  let sum14 = num16;
  if (null != obj.iCCP) {
    const sum8 = 13 + arr.length;
    writeUint(uint8Array, num16, sum8);
    const sum9 = num16 + 4;
    writeASCII(uint8Array, sum9, "iCCP");
    const sum10 = sum9 + 4;
    writeASCII(uint8Array, sum10, "ICC profile");
    const sum11 = sum10 + 11 + 2;
    const result1 = uint8Array.set(arr, sum11);
    const sum12 = sum11 + arr.length;
    const sum13 = sum8 + 4;
    writeUint(uint8Array, sum12, crc(uint8Array, sum12 - sum13, sum13));
    sum14 = sum12 + 4;
  }
  let sum20 = sum14;
  if (null != obj.pHYs) {
    writeUint(uint8Array, sum14, 9);
    const sum15 = sum14 + 4;
    writeASCII(uint8Array, sum15, "pHYs");
    const sum16 = sum15 + 4;
    writeUint(uint8Array, sum16, obj.pHYs[0]);
    const sum17 = sum16 + 4;
    writeUint(uint8Array, sum17, obj.pHYs[1]);
    const sum18 = sum17 + 4;
    uint8Array[sum18] = obj.pHYs[2];
    const sum19 = sum18 + 1;
    writeUint(uint8Array, sum19, crc(uint8Array, sum19 - 13, 13));
    sum20 = sum19 + 4;
  }
  let sum25 = sum20;
  if (writeUintResult16) {
    writeUint(uint8Array, sum20, 8);
    const sum21 = sum20 + 4;
    writeASCII(uint8Array, sum21, "acTL");
    const sum22 = sum21 + 4;
    writeUint(uint8Array, sum22, tmp3Result.frames.length);
    let num24 = 0;
    if (null != obj.loop) {
      num24 = obj.loop;
    }
    const sum23 = sum22 + 4;
    writeUint(uint8Array, sum23, num24);
    const sum24 = sum23 + 4;
    writeUint(uint8Array, sum24, crc(uint8Array, sum24 - 12, 12));
    sum25 = sum24 + 4;
  }
  let sum32 = sum25;
  if (3 == tmp3Result.ctype) {
    writeUintResult16 = writeUint(uint8Array, sum25, 3 * length3);
    writeUintResult16 = sum25 + 4;
    writeUintResult16 = writeASCII(uint8Array, writeUintResult16, "PLTE");
    writeUintResult16 = writeUintResult16 + 4;
    for (let num25 = 0; num25 < length3; num25 = num25 + 1) {
      let tmp59 = tmp3Result.plte[num25];
      let sum26 = writeUintResult16 + 3 * num25;
      uint8Array[sum26] = 255 & tmp59;
      uint8Array[sum26 + 1] = tmp59 >>> 8 & 255;
      uint8Array[sum26 + 2] = tmp59 >>> 16 & 255;
    }
    const sum27 = writeUintResult16 + 3 * length3;
    writeUint(uint8Array, sum27, crc(uint8Array, sum27 - 3 * tmp3Result.plte.length - 4, 3 * tmp3Result.plte.length + 4));
    const sum28 = sum27 + 4;
    sum32 = sum28;
    if (flag) {
      writeUint(uint8Array, sum28, length3);
      const sum29 = sum28 + 4;
      writeASCII(uint8Array, sum29, "tRNS");
      const sum30 = sum29 + 4;
      for (let num26 = 0; num26 < length3; num26 = num26 + 1) {
        uint8Array[sum30 + num26] = tmp3Result.plte[num26] >>> 24 & 255;
      }
      const sum31 = sum30 + length3;
      writeUint(uint8Array, sum31, crc(uint8Array, sum31 - length3 - 4, length3 + 4));
      sum32 = sum31 + 4;
    }
  }
  let sum46 = sum32;
  let num27 = 0;
  let num28 = 0;
  let tmp71 = sum32;
  if (0 < tmp3Result.frames.length) {
    do {
      let tmp72 = tmp3Result.frames[num28];
      let tmp73 = num27;
      let tmp74 = num28;
      let tmp75 = sum46;
      let sum35 = num27;
      let sum45 = sum46;
      if (writeUintResult16) {
        let writeUintResult20 = writeUint(uint8Array, sum46, 26);
        let sum33 = sum46 + 4;
        let writeASCIIResult7 = writeASCII(uint8Array, sum33, "fcTL");
        let sum34 = sum33 + 4;
        sum35 = num27 + 1;
        let writeUintResult21 = writeUint(uint8Array, sum34, num27);
        let sum36 = sum34 + 4;
        let writeUintResult22 = writeUint(uint8Array, sum36, tmp72.rect.width);
        let sum37 = sum36 + 4;
        let writeUintResult23 = writeUint(uint8Array, sum37, tmp72.rect.height);
        let sum38 = sum37 + 4;
        let writeUintResult24 = writeUint(uint8Array, sum38, tmp72.rect.x);
        let sum39 = sum38 + 4;
        let writeUintResult25 = writeUint(uint8Array, sum39, tmp72.rect.y);
        let sum40 = sum39 + 4;
        let writeUshortResult = writeUshort(uint8Array, sum40, arg3[num28]);
        let sum41 = sum40 + 2;
        let writeUshortResult1 = writeUshort(uint8Array, sum41, 1000);
        let sum42 = sum41 + 2;
        uint8Array[sum42] = tmp72.dispose;
        let sum43 = sum42 + 1;
        uint8Array[sum43] = tmp72.blend;
        let sum44 = sum43 + 1;
        let writeUintResult26 = writeUint(uint8Array, sum44, crc(uint8Array, sum44 - 30, 30));
        sum45 = sum44 + 4;
      }
      let cimg = tmp72.cimg;
      let length2 = cimg.length;
      let num29 = 4;
      if (0 === num28) {
        num29 = 0;
      }
      let writeUintResult27 = writeUint(uint8Array, sum45, length2 + num29);
      let str7 = "fdAT";
      if (0 === num28) {
        str7 = "IDAT";
      }
      writeUintResult16 = sum45 + 4;
      writeUintResult16 = writeASCII(uint8Array, writeUintResult16, str7);
      writeUintResult16 = writeUintResult16 + 4;
      writeUintResult16 = sum35;
      if (0 !== num28) {
        writeUintResult16 = sum35 + 1;
        writeUintResult16 = writeUint(uint8Array, writeUintResult16, sum35);
        writeUintResult16 = writeUintResult16 + 4;
      }
      writeUintResult16 = uint8Array.set(cimg, writeUintResult16);
      writeUintResult16 = writeUintResult16 + length2;
      writeUintResult16 = writeUint(uint8Array, writeUintResult16, crc(uint8Array, writeUintResult16, writeUintResult16 - writeUintResult16));
      sum46 = writeUintResult16 + 4;
      num28 = num28 + 1;
      num27 = writeUintResult16;
      tmp71 = sum46;
    } while (num28 < tmp3Result.frames.length);
  }
  writeUintResult16 = writeUint(uint8Array, tmp71, 0);
  writeUintResult16 = tmp71 + 4;
  writeUintResult16 = writeASCII(uint8Array, writeUintResult16, "IEND");
  writeUintResult16 = writeUintResult16 + 4;
  writeUintResult16 = writeUint(uint8Array, writeUintResult16, crc(uint8Array, writeUintResult16 - 4, 4));
  return uint8Array.buffer;
};
compressPNG = function compressPNG(uint8Array, sum1, size) {
  let bpl;
  let bpp;
  let img;
  let num = 0;
  if (0 < uint8Array.frames.length) {
    while (true) {
      let tmp = uint8Array.frames[num];
      let width = tmp.rect.width;
      let height = tmp.rect.height;
      let _Uint8Array = Uint8Array;
      let tmp2 = new.target;
      let tmp3 = new.target;
      uint8Array = new Uint8Array(height * tmp.bpl + height);
      ({ img, bpp, bpl } = tmp);
      let tmp4 = num;
      if (-1 != sum1) {
        let items = [sum1];
        let items1 = items;
      } else {
        let tmp5 = height * bpl > 500000 || 1 == bpp;
        items1 = [0, 1, 2, 3, 4];
        if (tmp5) {
          items1 = [0];
        }
      }
      if (size) {
        let obj = { level: 0 };
      }
      let tmp6 = uint8Array;
      if (uint8Array.length > 10000000) {
        let _window = window;
        if (null != window.UZIP) {
          let _window2 = window;
          let pako = window.UZIP;
          let items2 = [];
          let _Date = Date;
          let timestamp = Date.now();
          for (let num2 = 0; num2 < items1.length; num2 = num2 + 1) {
            let tmp8 = num2;
            for (let num3 = 0; num3 < height; num3 = num3 + 1) {
              let tmp9 = items1[num2];
              let result = num3 * bpl;
              let sum = result + num3;
              uint8Array[sum] = tmp9;
              sum1 = sum + 1;
              let tmp13 = num3;
              if (0 == tmp9) {
                if (bpl < 500) {
                  for (let num9 = 0; num9 < bpl; num9 = num9 + 1) {
                    uint8Array[sum1 + num9] = img[result + num9];
                  }
                } else {
                  let _Uint8Array2 = Uint8Array;
                  let tmp30 = new.target;
                  let tmp31 = new.target;
                  let tmp32 = result;
                  let tmp33 = bpl;
                  let uint8Array1 = new Uint8Array(img.buffer, result, bpl);
                  let tmp35 = uint8Array1;
                  let result1 = uint8Array.set(uint8Array1, sum1);
                }
              } else if (1 == tmp9) {
                for (let num8 = 0; num8 < bpp; num8 = num8 + 1) {
                  uint8Array[sum1 + num8] = img[result + num8];
                }
                let sum2 = bpp;
                if (bpp < bpl) {
                  do {
                    uint8Array[sum1 + sum2] = img[result + sum2] - img[result + sum2 - bpp] + 256 & 255;
                    sum2 = sum2 + 1;
                  } while (sum2 < bpl);
                }
              } else if (0 === num3) {
                for (let num7 = 0; num7 < bpp; num7 = num7 + 1) {
                  uint8Array[sum1 + num7] = img[result + num7];
                }
                if (2 == tmp9) {
                  let sum3 = bpp;
                  if (bpp < bpl) {
                    do {
                      uint8Array[sum1 + sum3] = img[result + sum3];
                      sum3 = sum3 + 1;
                    } while (sum3 < bpl);
                  }
                }
                if (3 == tmp9) {
                  let sum4 = bpp;
                  if (bpp < bpl) {
                    do {
                      uint8Array[sum1 + sum4] = img[result + sum4] - (img[result + sum4 - bpp] >> 1) + 256 & 255;
                      sum4 = sum4 + 1;
                    } while (sum4 < bpl);
                  }
                }
                if (4 == tmp9) {
                  let sum6 = bpp;
                  if (bpp < bpl) {
                    do {
                      let tmp27 = _undefined3;
                      let sum5 = sum1 + sum6;
                      uint8Array[sum5] = img[result + sum6] - _undefined3(img[result + sum6 - bpp], 0, 0) + 256 & 255;
                      sum6 = sum6 + 1;
                    } while (sum6 < bpl);
                  }
                }
              } else {
                if (2 == tmp9) {
                  for (let num4 = 0; num4 < bpl; num4 = num4 + 1) {
                    let sum7 = result + num4;
                    uint8Array[sum1 + num4] = img[sum7] + 256 - img[sum7 - bpl] & 255;
                  }
                }
                if (3 == tmp9) {
                  for (let num5 = 0; num5 < bpp; num5 = num5 + 1) {
                    let sum8 = result + num5;
                    uint8Array[sum1 + num5] = img[sum8] + 256 - (img[sum8 - bpl] >> 1) & 255;
                  }
                  let sum9 = bpp;
                  if (bpp < bpl) {
                    do {
                      uint8Array[sum1 + sum9] = img[result + sum9] + 256 - (img[result + sum9 - bpl] + img[result + sum9 - bpp] >> 1) & 255;
                      sum9 = sum9 + 1;
                    } while (sum9 < bpl);
                  }
                }
                if (4 == tmp9) {
                  for (let num6 = 0; num6 < bpp; num6 = num6 + 1) {
                    let sum10 = result + num6;
                    let tmp19 = _undefined3;
                    let sum11 = img[sum10] + 256;
                    uint8Array[sum1 + num6] = sum11 - _undefined3(0, img[sum10 - bpl], 0) & 255;
                  }
                  let sum14 = bpp;
                  if (bpp < bpl) {
                    do {
                      let tmp23 = _undefined3;
                      let sum12 = sum1 + sum14;
                      let sum13 = img[result + sum14] + 256;
                      uint8Array[sum12] = sum13 - _undefined3(img[result + sum14 - bpp], img[result + sum14 - bpl], img[result + sum14 - bpp - bpl]) & 255;
                      sum14 = sum14 + 1;
                    } while (sum14 < bpl);
                  }
                }
              }
            }
            let arr = items2.push(pako.deflate(uint8Array, obj));
          }
          let num10 = 1000000000;
          let num11 = 0;
          let tmp39;
          if (0 < items2.length) {
            do {
              let length = num10;
              let tmp40 = tmp38;
              let tmp41 = num11;
              if (items2[num11].length < num10) {
                length = items2[num11].length;
                tmp40 = num11;
              }
              num11 = num11 + 1;
              num10 = length;
              tmp38 = tmp40;
              tmp39 = tmp40;
            } while (num11 < items2.length);
          }
          tmp.cimg = items2[tmp39];
          num = num + 1;
          if (num >= uint8Array.frames.length) {
            break;
          }
        }
      }
      pako = globalThis.pako;
    }
  }
};
compress = function compress(arg0, width2, height2, arg3, width, height, arg6, arg7, arg8) {
  let length2;
  let length5;
  let length6;
  let length8;
  let first = width[0];
  let num = 0;
  let num2 = 255;
  let num3 = 255;
  if (0 < arg0.length) {
    do {
      let _Uint8Array = Uint8Array;
      let tmp6 = new.target;
      let tmp7 = new.target;
      let uint8Array = new Uint8Array(arg0[num]);
      let tmp8 = uint8Array;
      let length = uint8Array.length;
      let tmp9 = num;
      let tmp10 = num2;
      let num4 = 0;
      let tmp11 = num2;
      if (0 < length) {
        do {
          tmp10 = tmp10 & uint8Array[num4 + 3];
          num4 = num4 + 4;
          tmp11 = tmp10;
        } while (num4 < length);
      }
      num = num + 1;
      num2 = tmp11;
      num3 = tmp11;
    } while (num < arg0.length);
  }
  const frames = [];
  for (let num5 = 0; num5 < arg0.length; num5 = num5 + 1) {
    let _Uint8Array2 = Uint8Array;
    let tmp13 = new.target;
    let tmp14 = new.target;
    let uint8Array1 = new Uint8Array(arg0[num5]);
    let tmp15 = uint8Array1;
    let _Uint32Array = Uint32Array;
    let tmp16 = new.target;
    let tmp17 = new.target;
    let uint32Array = new Uint32Array(uint8Array1.buffer);
    let tmp19 = uint32Array;
    let tmp20 = num5;
    let num6 = 0;
    if (first) {
      num6 = 1;
    }
    if (0 !== num5) {
      if (!tmp3) {
        if (!first) {
          if (1 !== num5) {
            let num9 = 2;
          }
          let diff = num5 - 1;
          let num10 = 0;
          let num11 = 1000000000;
          let num12 = 0;
          let tmp25 = height2;
          let tmp26 = width2;
          let num13 = 0;
          let num14 = 0;
          let num15 = 0;
          let tmp27 = height2;
          let tmp28 = width2;
          let num16 = 0;
          let num17 = 0;
          if (0 < num9) {
            do {
              let _Uint8Array3 = Uint8Array;
              let diff1 = diff - num10;
              let tmp30 = new.target;
              let uint8Array2 = new Uint8Array(arg0[diff1]);
              let _Uint32Array2 = Uint32Array;
              let tmp32 = new.target;
              let tmp33 = new.target;
              let uint32Array1 = new Uint32Array(arg0[diff1]);
              let tmp35 = uint32Array1;
              let tmp36 = num10;
              let tmp37 = num11;
              let tmp38 = num12;
              let sum2 = tmp25;
              let sum1 = tmp26;
              let tmp41 = num13;
              let tmp42 = num14;
              let num18 = 0;
              let num19 = -1;
              let num20 = -1;
              let tmp43 = height2;
              let tmp44 = width2;
              let num21 = -1;
              let num22 = -1;
              let num23 = height2;
              let num24 = width2;
              if (0 < height2) {
                do {
                  let tmp45 = num18;
                  let tmp46 = num19;
                  let tmp47 = num20;
                  let tmp48 = tmp43;
                  let tmp49 = tmp44;
                  let num25 = 0;
                  let tmp50 = num19;
                  let tmp51 = num20;
                  let tmp52 = tmp43;
                  let tmp53 = tmp44;
                  if (0 < width2) {
                    do {
                      let sum = num18 * width2 + num25;
                      let tmp55 = num25;
                      let tmp56 = tmp46;
                      let tmp57 = tmp47;
                      let tmp58 = tmp48;
                      let tmp59 = tmp49;
                      let tmp60 = tmp46;
                      let tmp61 = tmp47;
                      let tmp62 = tmp48;
                      let tmp63 = tmp49;
                      if (uint32Array[sum] != uint32Array1[sum]) {
                        let tmp64 = tmp49;
                        if (num25 < tmp49) {
                          tmp64 = num25;
                        }
                        let tmp65 = tmp47;
                        if (tmp47 < num25) {
                          tmp65 = num25;
                        }
                        let tmp66 = tmp48;
                        if (num18 < tmp48) {
                          tmp66 = num18;
                        }
                        let tmp67 = tmp46;
                        if (tmp46 < num18) {
                          tmp67 = num18;
                        }
                        tmp60 = tmp67;
                        tmp61 = tmp65;
                        tmp62 = tmp66;
                        tmp63 = tmp64;
                      }
                      num25 = num25 + 1;
                      tmp46 = tmp60;
                      tmp47 = tmp61;
                      tmp48 = tmp62;
                      tmp49 = tmp63;
                      tmp50 = tmp60;
                      tmp51 = tmp61;
                      tmp52 = tmp62;
                      tmp53 = tmp63;
                    } while (num25 < width2);
                  }
                  num18 = num18 + 1;
                  num19 = tmp50;
                  num20 = tmp51;
                  tmp43 = tmp52;
                  tmp44 = tmp53;
                  num21 = tmp50;
                  num22 = tmp51;
                  num23 = tmp52;
                  num24 = tmp53;
                } while (num18 < height2);
              }
              if (-1 === num22) {
                num21 = 0;
                num22 = 0;
                num23 = 0;
                num24 = 0;
              }
              let tmp68 = num23;
              let tmp69 = num24;
              if (tmp2) {
                let diff2 = num24;
                if (!(1 & ~num24)) {
                  diff2 = num24 - 1;
                }
                let diff3 = num23;
                if (!(1 & ~num23)) {
                  diff3 = num23 - 1;
                }
                tmp68 = diff3;
                tmp69 = diff2;
              }
              let result = (num22 - tmp69 + 1) * (num21 - tmp68 + 1);
              if (result < tmp37) {
                sum1 = num22 - tmp69 + 1;
                sum2 = num21 - tmp68 + 1;
                tmp37 = result;
                tmp38 = num10;
                tmp41 = tmp68;
                tmp42 = tmp69;
              }
              num10 = num10 + 1;
              num11 = tmp37;
              num12 = tmp38;
              tmp25 = sum2;
              tmp26 = sum1;
              num13 = tmp41;
              num14 = tmp42;
              num15 = tmp38;
              tmp27 = sum2;
              tmp28 = sum1;
              num16 = tmp41;
              num17 = tmp42;
            } while (num10 < num9);
          }
          let _Uint8Array4 = Uint8Array;
          let tmp73 = new.target;
          let tmp74 = new.target;
          let uint8Array3 = new Uint8Array(arg0[diff - num15]);
          if (1 === num15) {
            frames[diff].dispose = 2;
          }
          let tmp76 = uint8Array3;
          let _Uint8Array5 = Uint8Array;
          let tmp77 = new.target;
          let tmp78 = new.target;
          let uint8Array4 = new Uint8Array(tmp28 * tmp27 * 4);
          let tmp80 = uint8Array4;
          let tmp81 = _undefined;
          let tmp82 = uint8Array3;
          let tmp83 = width2;
          let tmp84 = height2;
          let tmp85 = uint8Array4;
          let tmp86 = tmp28;
          let tmp87 = tmp27;
          let num26 = 0;
          let tmp88 = _undefined(uint8Array3, width2, height2, uint8Array4, tmp28, tmp27, -num17, -num16, 0);
          let tmp89 = uint8Array1;
          let tmp90 = width2;
          let tmp91 = height2;
          let tmp92 = uint8Array4;
          let tmp93 = tmp28;
          let tmp94 = tmp27;
          let num27 = 3;
          let num28 = 0;
          if (_undefined(tmp15, width2, height2, uint8Array4, tmp28, tmp27, -num17, -num16, 3)) {
            num28 = 1;
          }
          if (1 === num28) {
            first = uint8Array1;
            first = width2;
            first = height2;
            first = uint8Array4;
            first = tmp28;
            first = tmp27;
            let num30 = 2;
            first = tmp81(tmp15, width2, height2, tmp80, tmp28, tmp27, -num17, -num16, 2);
            num6 = num28;
            let tmp22 = tmp27;
            let tmp23 = tmp28;
            let num7 = num16;
            let num8 = num17;
            let substr = uint8Array4;
          } else {
            let tmp95 = uint8Array1;
            let tmp96 = width2;
            let tmp97 = height2;
            let tmp98 = uint8Array4;
            let tmp99 = tmp28;
            first = tmp27;
            let num29 = 0;
            first = tmp81(tmp15, width2, height2, tmp80, tmp28, tmp27, -num17, -num16, 0);
            num6 = num28;
            tmp22 = tmp27;
            tmp23 = tmp28;
            num7 = num16;
            num8 = num17;
            substr = uint8Array4;
          }
        }
      }
      num9 = 1;
    } else {
      substr = uint8Array1.slice(0);
      tmp22 = height2;
      tmp23 = width2;
      num7 = 0;
      num8 = 0;
    }
    let obj = { rect: null, img: null, blend: null, dispose: 0 };
    obj = { x: null, y: null, width: null, height: null };
    obj[0] = num8;
    obj[1] = num7;
    obj[2] = tmp23;
    obj[3] = tmp22;
    obj[0] = obj;
    obj[1] = substr;
    obj[2] = num6;
    first = frames.push(obj);
  }
  if (first) {
    for (let num31 = 0; num31 < frames.length; num31 = num31 + 1) {
      first = frames[num31];
      if (1 != first.blend) {
        let rect = first.rect;
        first = num31 - 1;
        let rect2 = frames[first].rect;
        let _Math3 = Math;
        first = Math.min(rect.x, rect2.x);
        let _Math4 = Math;
        first = Math.min(rect.y, rect2.y);
        obj = { x: null, y: null, width: null, height: null };
        obj[0] = first;
        obj[1] = first;
        let _Math5 = Math;
        obj[2] = Math.max(rect.x + rect.width, rect2.x + rect2.width) - first;
        let _Math6 = Math;
        obj[3] = Math.max(rect.y + rect.height, rect2.y + rect2.height) - first;
        frames[first].dispose = 1;
        if (first !== 0) {
          first = _updateFrame;
          first = arg0;
          first = width2;
          first = height2;
          first = frames;
          first = obj;
          first = tmp2;
          first = _updateFrame(arg0, width2, height2, frames, first, obj, tmp2);
        }
        first = _updateFrame;
        first = arg0;
        first = width2;
        first = height2;
        first = frames;
        first = num31;
        first = obj;
        first = tmp2;
        first = _updateFrame(arg0, width2, height2, frames, first, obj, tmp2);
      }
    }
  }
  if (1 != arg0.length) {
    let num32 = 0;
    if (0 < frames.length) {
      do {
        first = frames[num32];
        first = first.rect.width * first.rect.height;
        num32 = num32 + 1;
        length2 = frames.length;
      } while (num32 < length2);
    }
  }
  const obj1 = {};
  const plte = [];
  const items2 = [];
  if (0 != arg3) {
    const items3 = [];
    let num35 = 0;
    if (0 < frames.length) {
      do {
        first = items3.push(frames[num35].img.buffer);
        num35 = num35 + 1;
        length5 = frames.length;
      } while (num35 < length5);
    }
    let num36 = 0;
    let num37 = 0;
    let num38 = 0;
    if (0 < items3.length) {
      do {
        num37 = num37 + items3[num36].byteLength;
        num36 = num36 + 1;
        num38 = num37;
        length6 = items3.length;
      } while (num36 < length6);
    }
    const _Uint8Array7 = Uint8Array;
    first = new.target;
    first = new.target;
    first = num38;
    first = new Uint8Array(num38);
    let num39 = 0;
    for (let num40 = 0; num40 < items3.length; num40 = num40 + 1) {
      let _Uint8Array8 = Uint8Array;
      first = new.target;
      first = new.target;
      let uint8Array5 = new Uint8Array(items3[num40]);
      first = uint8Array5;
      let length7 = uint8Array5.length;
      first = num39;
      first = num40;
      for (let num41 = 0; num41 < length7; num41 = num41 + 4) {
        let num42 = uint8Array5[num41];
        let num43 = uint8Array5[num41 + 1];
        let num44 = uint8Array5[num41 + 2];
        first = uint8Array5[num41 + 3];
        first = num41;
        if (0 == first) {
          num44 = 0;
          num43 = 0;
          num42 = 0;
        }
        first = num39 + num41;
        first[first] = num42;
        first[first + 1] = num43;
        first[first + 2] = num44;
        first[first + 3] = first;
      }
      num39 = num39 + length7;
    }
    first = quantize;
    first = quantize(first.buffer, arg3);
    let num45 = 0;
    if (0 < first.plte.length) {
      do {
        first = plte.push(first.plte[num45].est.rgba);
        num45 = num45 + 1;
        length8 = first.plte.length;
      } while (num45 < length8);
    }
    let num46 = 0;
    for (let num47 = 0; num47 < frames.length; num47 = num47 + 1) {
      first = frames[num47];
      let length9 = first.img.length;
      let _Uint8Array9 = Uint8Array;
      first = new.target;
      first = new.target;
      first = new Uint8Array(first.inds.buffer, num46 >> 2, length9 >> 2);
      first = items2.push(first);
      let _Uint8Array10 = Uint8Array;
      first = new.target;
      first = new.target;
      first = num46;
      first = length9;
      first = new Uint8Array(first.abuf, num46, length9);
      first = num46;
      first = num47;
      if (tmp5) {
        first = dither;
        first = plte;
        first = dither(first.img, first.rect.width, first.rect.height, plte, first, first);
      }
      let img = first.img;
      first = img.set(first);
      num46 = num46 + length9;
    }
  } else {
    first = null;
    for (let num34 = 0; num34 < frames.length; num34 = num34 + 1) {
      first = frames[num34];
      let _Uint32Array3 = Uint32Array;
      first = new.target;
      first = new.target;
      let uint32Array2 = new Uint32Array(first.img.buffer);
      first = uint32Array2;
      width = first.rect.width;
      let length3 = uint32Array2.length;
      let _Uint8Array6 = Uint8Array;
      first = new.target;
      first = new.target;
      first = length3;
      first = new Uint8Array(length3);
      first = items2.push(first);
      first = num34;
      let num33 = 0;
      if (0 < length3) {
        while (true) {
          first = uint32Array2[num33];
          first = num33;
          if (0 !== num33) {
            first = num33 - 1;
            if (first == uint32Array2[first]) {
              first[num33] = first[first];
              num33 = num33 + 1;
              if (num33 >= length3) {
                break;
              }
            }
          }
          if (num33 > width) {
            if (first == uint32Array2[num33 - width]) {
              first[num33] = first[num33 - width];
            }
          }
          first = obj1[first];
          if (null != first) {
            first[num33] = first;
          } else {
            let length4 = plte.length;
            obj1[first] = length4;
            first = plte.push(first);
            first = length4;
            if (plte.length >= 300) {
              break;
            }
          }
          break;
        }
      }
    }
  }
  first = length10 <= 256 && 0 == tmp4;
  let depth = 8;
  if (first) {
    let num49 = 1;
    if (length10 > 2) {
      let num50 = 2;
      if (length10 > 4) {
        let num52 = 8;
        if (length10 <= 16) {
          num52 = 4;
        }
        num50 = num52;
      }
      num49 = num50;
    }
    const _Math = Math;
    depth = Math.max(num49, width[3]);
  }
  let num53 = 0;
  let num54 = 6;
  let ctype = 6;
  if (0 < frames.length) {
    while (true) {
      first = frames[num53];
      let x = first.rect.x;
      let y = first.rect.y;
      width2 = first.rect.width;
      height = first.rect.height;
      let img2 = first.img;
      let _Uint32Array4 = Uint32Array;
      first = new.target;
      first = new Uint32Array(img2.buffer);
      first = 4 * width2;
      first = num53;
      first = num54;
      if (length10 <= 256) {
        if (0 == tmp4) {
          let _Math2 = Math;
          first = Math.ceil(depth * width2 / 8);
          let _Uint8Array12 = Uint8Array;
          first = new.target;
          first = new.target;
          first = new Uint8Array(first * height);
          first = items2[num53];
          let num59 = 0;
          let num56 = 1;
          let num57 = 3;
          if (0 < height) {
            do {
              first = num59 * first;
              first = num59 * width2;
              first = num59;
              if (8 == depth) {
                for (let num63 = 0; num63 < width2; num63 = num63 + 1) {
                  first[first + num63] = first[first + num63];
                }
              } else if (4 == depth) {
                for (let num62 = 0; num62 < width2; num62 = num62 + 1) {
                  first = first + (num62 >> 1);
                  first[first] = first[first] | first[first + num62] << 4 - 4 * (1 & num62);
                }
              } else if (2 == depth) {
                for (let num61 = 0; num61 < width2; num61 = num61 + 1) {
                  first = first + (num61 >> 2);
                  first[first] = first[first] | first[first + num61] << 6 - 2 * (3 & num61);
                }
              } else if (1 == depth) {
                for (let num60 = 0; num60 < width2; num60 = num60 + 1) {
                  first = first + (num60 >> 3);
                  first[first] = first[first] | first[first + num60] << 7 - (7 & num60);
                }
              }
              first = num59 + 1;
              num59 = first;
              num56 = 1;
              num57 = 3;
            } while (first < height);
          }
          first.img = first;
          first.bpl = first;
          first.bpp = num56;
          num53 = num53 + 1;
          num54 = num57;
          ctype = num57;
          if (num53 >= frames.length) {
            break;
          }
        }
      }
      num56 = 4;
      first = img2;
      num57 = num54;
      if (0 == tmp12) {
        num56 = 4;
        first = img2;
        num57 = num54;
        if (1 == frames.length) {
          let _Uint8Array11 = Uint8Array;
          first = new.target;
          first = new.target;
          first = new Uint8Array(width2 * height * 3);
          first = width2 * height;
          let num58 = 0;
          if (0 < first) {
            do {
              first = 3 * num58;
              first = 4 * num58;
              first[first] = img2[first];
              first[first + 1] = img2[first + 1];
              first[first + 2] = img2[first + 2];
              num58 = num58 + 1;
            } while (num58 < first);
          }
          first = 3 * width2;
          num56 = 3;
          num57 = 2;
        }
      }
    }
  }
  return { ctype, depth, plte, frames };
};
function _updateFrame(arg0, width2, height2, frames, first, height, width) {
  let _Uint8Array = Uint8Array;
  const uint8Array = new Uint8Array(arg0[first - 1]);
  const uint32Array = new Uint32Array(arg0[first - 1]);
  _Uint8Array = null;
  if (first + 1 < arg0.length) {
    _Uint8Array = new _Uint8Array(arg0[first + 1]);
  }
  const _Uint8Array1 = new _Uint8Array(arg0[first]);
  const uint32Array1 = new Uint32Array(_Uint8Array1.buffer);
  let num = 0;
  let num2 = -1;
  let num3 = -1;
  let tmp9 = height2;
  let tmp10 = width2;
  let num4 = -1;
  let num5 = -1;
  let num6 = height2;
  let num7 = width2;
  if (0 < height.height) {
    do {
      let tmp11 = num;
      let tmp12 = num2;
      let tmp13 = num3;
      let tmp14 = tmp9;
      let tmp15 = tmp10;
      let num8 = 0;
      let tmp16 = num2;
      let tmp17 = num3;
      let tmp18 = tmp9;
      let tmp19 = tmp10;
      if (0 < height.width) {
        do {
          let sum = height.x + num8;
          let sum1 = height.y + num;
          let sum2 = sum1 * width2 + sum;
          let tmp23 = uint32Array1[sum2];
          let tmp24 = 0 == tmp23;
          let tmp25 = num8;
          let tmp26 = tmp12;
          let tmp27 = tmp13;
          let tmp28 = tmp14;
          let tmp29 = tmp15;
          if (!tmp24) {
            let tmp30 = 0 == frames[first - 1].dispose && uint32Array[sum2] == tmp23;
            if (tmp30) {
              let tmp31 = null == _Uint8Array || 0 != _Uint8Array[4 * sum2 + 3];
              tmp30 = tmp31;
            }
            tmp24 = tmp30;
          }
          let tmp32 = tmp12;
          let tmp33 = tmp13;
          let tmp34 = tmp14;
          let tmp35 = tmp15;
          if (!tmp24) {
            let tmp36 = tmp15;
            if (sum < tmp15) {
              tmp36 = sum;
            }
            let tmp37 = tmp13;
            if (sum > tmp13) {
              tmp37 = sum;
            }
            let tmp38 = tmp14;
            if (sum1 < tmp14) {
              tmp38 = sum1;
            }
            let tmp39 = tmp12;
            if (sum1 > tmp12) {
              tmp39 = sum1;
            }
            tmp32 = tmp39;
            tmp33 = tmp37;
            tmp34 = tmp38;
            tmp35 = tmp36;
          }
          num8 = num8 + 1;
          tmp12 = tmp32;
          tmp13 = tmp33;
          tmp14 = tmp34;
          tmp15 = tmp35;
          tmp16 = tmp32;
          tmp17 = tmp33;
          tmp18 = tmp34;
          tmp19 = tmp35;
        } while (num8 < height.width);
      }
      num = num + 1;
      num2 = tmp16;
      num3 = tmp17;
      tmp9 = tmp18;
      tmp10 = tmp19;
      num4 = tmp16;
      num5 = tmp17;
      num6 = tmp18;
      num7 = tmp19;
    } while (num < height.height);
  }
  if (-1 == num5) {
    num4 = 0;
    num5 = 0;
    num6 = 0;
    num7 = 0;
  }
  let tmp40 = num6;
  let tmp41 = num7;
  if (width) {
    let diff = num7;
    if (!(1 & ~num7)) {
      diff = num7 - 1;
    }
    let diff1 = num6;
    if (!(1 & ~num6)) {
      diff1 = num6 - 1;
    }
    tmp40 = diff1;
    tmp41 = diff;
  }
  const size = { x: tmp41, y: tmp40, width: num5 - tmp41 + 1, height: num4 - tmp40 + 1 };
  frames[first].rect = size;
  frames[first].blend = 1;
  const uint8Array1 = new Uint8Array(size.width * size.height * 4);
  frames[first].img = uint8Array1;
  if (0 == frames[first - 1].dispose) {
    _undefined(uint8Array, width2, height2, tmp44.img, size.width, size.height, -size.x, -size.y, 0);
    _undefined(tmp7, width2, height2, tmp44.img, size.width, size.height, -size.x, -size.y, 2);
  } else {
    _undefined(tmp7, width2, height2, tmp44.img, size.width, size.height, -size.x, -size.y, 0);
  }
}
function quantize(arg0, arg1, arg2) {
  let arr2;
  let length3;
  let length6;
  let tmp5;
  const timestamp = Date.now();
  const uint8Array = new Uint8Array(arg0);
  const substr = uint8Array.slice(0);
  const uint32Array = new Uint32Array(substr.buffer);
  [tmp5, arr2] = getKDtree(substr, arg1);
  const uint32Array1 = new Uint32Array(length);
  const uint8Array1 = new Uint8Array(uint32Array1.buffer);
  for (let num = 0; num < length; num = num + 1) {
    uint32Array1[num] = arr2[num].est.rgba;
  }
  const uint8Array2 = new Uint8Array(length2 >> 2);
  if (arr2.length <= 60) {
    findNearest(uint8Array, uint8Array2, uint8Array1);
    let num7 = 0;
    if (0 < uint8Array2.length) {
      do {
        uint32Array[num7] = uint32Array1[uint8Array2[num7]];
        num7 = num7 + 1;
        length3 = uint8Array2.length;
      } while (num7 < length3);
    }
  } else if (uint8Array.length < 32000000) {
    for (let num6 = 0; num6 < length2; num6 = num6 + 4) {
      let tmp16 = getNearest;
      let tmp17 = tmp5;
      let tmp18 = getNearest(tmp5, 0.00392156862745098 * uint8Array[num6], 0.00392156862745098 * uint8Array[num6 + 1], 0.00392156862745098 * uint8Array[num6 + 2], 0.00392156862745098 * uint8Array[num6 + 3]);
      let tmp19 = num6 >> 2;
      uint8Array2[tmp19] = tmp18.ind;
      uint32Array[tmp19] = tmp18.est.rgba;
    }
  } else {
    for (let num2 = 0; num2 < length2; num2 = num2 + 4) {
      let tmp11 = num2;
      let rect = tmp5;
      let tmp12 = tmp5;
      if (tmp5.left) {
        do {
          let est = rect.est;
          let e = est.e;
          let tmp13 = rect;
          tmp14 = e[0] * tmp7 + e[1] * tmp8 + e[2] * tmp9 + e[3] * tmp10 - est.eMq <= 0 ? rect.left : rect.right;
          rect = tmp14;
          tmp12 = tmp14;
        } while (tmp14.left);
      }
      let tmp15 = num2 >> 2;
      uint8Array2[tmp15] = tmp12.ind;
      uint32Array[tmp15] = tmp12.est.rgba;
    }
  }
  let num8 = 1000000000;
  let num9 = 0;
  if (arg2) {
    while (true) {
      let tmp22 = uint8Array1.length >>> 2;
      let _Uint32Array = Uint32Array;
      let tmp23 = new.target;
      let num11 = 4;
      let tmp24 = new.target;
      let uint32Array2 = new Uint32Array(4 * tmp22);
      let tmp26 = uint32Array2;
      let _Uint32Array2 = Uint32Array;
      let tmp27 = new.target;
      let tmp28 = new.target;
      let tmp29 = tmp22;
      let uint32Array3 = new Uint32Array(tmp22);
      let tmp31 = uint32Array3;
      let num12 = 3;
      let tmp32 = num8;
      let tmp33 = num9;
      let num13 = 0;
      if (0 < uint8Array.length) {
        do {
          let tmp34 = uint8Array2[num13 >>> 2];
          let result = 4 * tmp34;
          uint32Array3[tmp34] = uint32Array3[tmp34] + 1;
          uint32Array2[result] = uint32Array2[result] + uint8Array[num13];
          let sum = result + 1;
          uint32Array2[sum] = uint32Array2[sum] + uint8Array[num13 + 1];
          let sum1 = result + 2;
          uint32Array2[sum1] = uint32Array2[sum1] + uint8Array[num13 + 2];
          let sum2 = result + 3;
          uint32Array2[sum2] = uint32Array2[sum2] + uint8Array[num13 + 3];
          num13 = num13 + 4;
          length4 = uint8Array.length;
        } while (num13 < length4);
      }
      let num14 = 0;
      if (0 < uint8Array1.length) {
        do {
          let _Math = Math;
          uint8Array1[num14] = Math.round(uint32Array2[num14] / uint32Array3[num14 >>> 2]);
          num14 = num14 + 1;
          length5 = uint8Array1.length;
        } while (num14 < length5);
      }
      let tmp39 = findNearest;
      let tmp40 = findNearest(uint8Array, uint8Array2, uint8Array1);
      let num15 = 0.997;
      if (0.997 < tmp40 / num8) {
        break;
      } else {
        num9 = num9 + 1;
        let num16 = 10;
        num8 = tmp40;
        if (num9 >= 10) {
          break;
        }
      }
    }
    for (let num17 = 0; num17 < length; num17 = num17 + 1) {
      arr2[num17].est.rgba = uint32Array1[num17];
    }
    let num18 = 0;
    if (0 < uint8Array2.length) {
      do {
        uint32Array[num18] = uint32Array1[uint8Array2[num18]];
        num18 = num18 + 1;
        length6 = uint8Array2.length;
      } while (num18 < length6);
    }
  } else {
    num8 = 1000000000;
    num9 = 0;
  }
  return { abuf: substr.buffer, inds: uint8Array2, plte: arr2 };
}
function findNearest(uint8Array, uint8Array2, uint8Array1) {
  const items = [];
  let num = 0;
  if (0 < uint8Array1.length >>> 2) {
    do {
      let result = 4 * num;
      let tmp7 = num;
      let num2 = 0;
      let num3 = 1000000000;
      let num4 = 1000000000;
      if (0 < tmp) {
        do {
          let tmp8 = num2;
          let tmp9 = num3;
          let tmp10 = num3;
          if (num !== num2) {
            let result1 = 4 * num2;
            let diff = tmp3 - uint8Array1[result1];
            let diff1 = tmp4 - uint8Array1[result1 + 1];
            let diff2 = tmp5 - uint8Array1[result1 + 2];
            let diff3 = tmp6 - uint8Array1[result1 + 3];
            let sum = diff * diff + diff1 * diff1 + diff2 * diff2 + diff3 * diff3;
            tmp10 = num3;
            if (sum < num3) {
              tmp10 = sum;
            }
          }
          num2 = num2 + 1;
          num3 = tmp10;
          num4 = tmp10;
        } while (num2 < tmp);
      }
      let _Math = Math;
      items[num] = 0.5 * Math.sqrt(num4);
      items[num] = items[num] * items[num];
      num = num + 1;
    } while (num < tmp);
  }
  let num5 = 0;
  let num6 = 0;
  let num7 = 0;
  if (0 < uint8Array.length) {
    do {
      let tmp17 = uint8Array[num5];
      let tmp18 = uint8Array[num5 + 1];
      let tmp19 = uint8Array[num5 + 2];
      let tmp20 = uint8Array[num5 + 3];
      let tmp21 = num5 >>> 2;
      let tmp22 = uint8Array2[tmp21];
      let result2 = 4 * tmp22;
      let diff4 = tmp17 - uint8Array1[result2];
      let diff5 = tmp18 - uint8Array1[result2 + 1];
      let diff6 = tmp19 - uint8Array1[result2 + 2];
      let diff7 = tmp20 - uint8Array1[result2 + 3];
      let sum1 = diff4 * diff4 + diff5 * diff5 + diff6 * diff6 + diff7 * diff7;
      let tmp29 = num5;
      let tmp30 = num6;
      let tmp31 = tmp22;
      let tmp32 = sum1;
      if (sum1 > items[tmp22]) {
        let num8 = 0;
        let tmp42 = sum1;
        let tmp43 = tmp22;
        tmp32 = sum1;
        tmp31 = tmp22;
        if (0 < tmp) {
          while (true) {
            let result3 = 4 * num8;
            let diff8 = tmp17 - uint8Array1[result3];
            let diff9 = tmp18 - uint8Array1[result3 + 1];
            let diff10 = tmp19 - uint8Array1[result3 + 2];
            let diff11 = tmp20 - uint8Array1[result3 + 3];
            let sum2 = diff8 * diff8 + diff9 * diff9 + diff10 * diff10 + diff11 * diff11;
            let tmp39 = num8;
            let tmp40 = tmp42;
            let tmp41 = tmp43;
            if (sum2 >= tmp42) {
              num8 = num8 + 1;
              tmp42 = tmp40;
              tmp43 = tmp41;
              tmp32 = tmp40;
              tmp31 = tmp41;
              if (num8 >= tmp) {
                break;
              }
            } else {
              tmp40 = sum2;
              tmp41 = num8;
              tmp31 = num8;
              tmp32 = sum2;
              if (sum2 < items[num8]) {
                break;
              }
            }
            break;
          }
        }
      }
      uint8Array2[tmp21] = tmp31;
      num6 = num6 + tmp32;
      num5 = num5 + 4;
      num7 = num6;
    } while (num5 < uint8Array.length);
  }
  return num7 / (uint8Array.length >>> 2);
}
function getKDtree(substr, arg1) {
  let length;
  let num = arg2;
  if (null == arg2) {
    num = 0.0001;
  }
  const uint32Array = new Uint32Array(substr.buffer);
  let obj = { i0: 0, i1: substr.length, bst: null, est: null, tdst: 0, left: null, right: null };
  obj.bst = stats(substr, obj.i0, obj.i1);
  obj.est = estats(obj.bst);
  const items = [obj];
  if (items.length < arg1) {
    while (true) {
      let num2 = 0;
      let num3 = 0;
      let num4 = 0;
      let num5 = 0;
      let num6 = 0;
      if (0 < items.length) {
        do {
          let tmp2 = num2;
          let tmp3 = num3;
          let L = num4;
          if (items[num2].est.L > num4) {
            L = items[num2].est.L;
            tmp3 = num2;
          }
          num2 = num2 + 1;
          num3 = tmp3;
          num4 = L;
          num5 = tmp3;
          num6 = L;
        } while (num2 < items.length);
      }
      if (num6 < num) {
        break;
      } else {
        let tmp26 = items[num5];
        let i0 = tmp26.i0;
        let e = tmp26.est.e;
        let eMq255 = tmp26.est.eMq255;
        let diff = tmp26.i1 - 4;
        let sum3 = i0;
        let tmp14 = i0;
        if (i0 < diff) {
          while (true) {
            let tmp4 = vecDot;
            let tmp5 = diff;
            let tmp6 = sum3;
            let tmp7 = sum3;
            if (substr[sum3] * e[0] + substr[sum3 + 1] * e[1] + substr[sum3 + 2] * e[2] + substr[sum3 + 3] * e[3] <= eMq255) {
              do {
                let sum = tmp6 + 4;
                tmp4 = vecDot;
                tmp6 = sum;
                tmp7 = sum;
                sum1 = substr[sum] * e[0] + substr[sum + 1] * e[1] + substr[sum + 2] * e[2] + substr[sum + 3] * e[3];
              } while (sum1 <= eMq255);
            }
            let tmp10 = diff;
            let tmp11 = diff;
            if (tmp4(substr, diff, e) > eMq255) {
              do {
                let diff1 = tmp10 - 4;
                tmp10 = diff1;
                tmp11 = diff1;
                sum2 = substr[diff1] * e[0] + substr[diff1 + 1] * e[1] + substr[diff1 + 2] * e[2] + substr[diff1 + 3] * e[3];
              } while (sum2 > eMq255);
            }
            tmp14 = tmp7;
            if (tmp7 >= tmp11) {
              break;
            } else {
              let tmp15 = tmp11 >> 2;
              uint32Array[tmp7 >> 2] = uint32Array[tmp15];
              uint32Array[tmp15] = uint32Array[tmp7 >> 2];
              sum3 = tmp7 + 4;
              diff = tmp11 - 4;
              tmp14 = sum3;
              if (sum3 >= diff) {
                break;
              }
            }
          }
        }
        let tmp18 = tmp14;
        let tmp19 = tmp14;
        if (substr[tmp14] * e[0] + substr[tmp14 + 1] * e[1] + substr[tmp14 + 2] * e[2] + substr[tmp14 + 3] * e[3] > eMq255) {
          do {
            let diff2 = tmp18 - 4;
            tmp18 = diff2;
            tmp19 = diff2;
            sum4 = substr[diff2] * e[0] + substr[diff2 + 1] * e[1] + substr[diff2 + 2] * e[2] + substr[diff2 + 3] * e[3];
          } while (sum4 > eMq255);
        }
        let sum5 = tmp19 + 4;
        if (tmp26.i0 < sum5) {
          if (tmp26.i1 > sum5) {
            obj = { i0: null, i1: null, bst: null, est: null, tdst: 0, left: null, right: null };
            obj[0] = tmp26.i0;
            obj[1] = sum5;
            let tmp27 = stats;
            obj.bst = stats(substr, obj.i0, obj.i1);
            let tmp28 = estats;
            obj.est = estats(obj.bst);
            obj = { i0: null, i1: null, bst: null, est: null, tdst: 0, left: null, right: null };
            obj[0] = sum5;
            obj[1] = tmp26.i1;
            let obj1 = { R: null, m: null, N: null };
            obj1[0] = [];
            obj1[1] = [];
            obj1[2] = tmp26.bst.N - obj.bst.N;
            obj.bst = obj1;
            let num7 = 0;
            do {
              obj.bst.R[num7] = tmp26.bst.R[num7] - obj.bst.R[num7];
              num7 = num7 + 1;
              let num8 = 0;
            } while (num7 < 16);
            do {
              obj.bst.m[num8] = tmp26.bst.m[num8] - obj.bst.m[num8];
              num8 = num8 + 1;
            } while (num8 < 4);
            let tmp23 = estats;
            obj.est = estats(obj.bst);
            tmp26.left = obj;
            tmp26.right = obj;
            items[num5] = obj;
            let arr = items.push(obj);
          }
          if (items.length >= arg1) {
            break;
          }
        }
        tmp26.est.L = 0;
      }
    }
  }
  const sorted = items.sort((bst, bst2) => bst2.bst.N - bst.bst.N);
  let num9 = 0;
  if (0 < items.length) {
    do {
      items[num9].ind = num9;
      num9 = num9 + 1;
      length = items.length;
    } while (num9 < length);
  }
  const items1 = [obj, items];
  return items1;
}
function getNearest(right, arg1, arg2, arg3, arg4) {
  let left;
  if (null == right.left) {
    const q = right.est.q;
    const diff = arg1 - q[0];
    const diff1 = arg2 - q[1];
    const diff2 = arg3 - q[2];
    const diff3 = arg4 - q[3];
    right.tdst = diff * diff + diff1 * diff1 + diff2 * diff2 + diff3 * diff3;
    return right;
  } else {
    const est = right.est;
    const e = est.e;
    const diff4 = e[0] * arg1 + e[1] * arg2 + e[2] * arg3 + e[3] * arg4 - est.eMq;
    ({ left: right, right: left } = right);
    if (diff4 > 0) {
      ({ right, left } = right);
    }
    const tmp7 = getNearest(right, arg1, arg2, arg3, arg4);
    if (tmp7.tdst <= diff4 * diff4) {
      return tmp7;
    } else {
      const tmpResult = tmp(left, arg1, arg2, arg3, arg4);
      let tmp14 = tmp7;
      if (tmpResult.tdst < tmp7.tdst) {
        tmp14 = tmpResult;
      }
      return tmp14;
    }
    tmp = getNearest;
  }
}
function vecDot(arg0, arg1, arg2) {
  return arg0[arg1] * arg2[0] + arg0[arg1 + 1] * arg2[1] + arg0[arg1 + 2] * arg2[2] + arg0[arg1 + 3] * arg2[3];
}
function stats(substr, i0, i1) {
  let sum = i0;
  const R = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const m = [0, 0, 0, 0];
  const N = i1 - i0 >> 2;
  if (i0 < i1) {
    do {
      let result = 0.00392156862745098 * substr[sum];
      let result1 = 0.00392156862745098 * substr[sum + 1];
      let result2 = 0.00392156862745098 * substr[sum + 2];
      let result3 = 0.00392156862745098 * substr[sum + 3];
      m[0] = m[0] + result;
      m[1] = m[1] + result1;
      m[2] = m[2] + result2;
      m[3] = m[3] + result3;
      R[0] = R[0] + result * result;
      R[1] = R[1] + result * result1;
      R[2] = R[2] + result * result2;
      R[3] = R[3] + result * result3;
      R[5] = R[5] + result1 * result1;
      R[6] = R[6] + result1 * result2;
      R[7] = R[7] + result1 * result3;
      R[10] = R[10] + result2 * result2;
      R[11] = R[11] + result2 * result3;
      R[15] = R[15] + result3 * result3;
      sum = sum + 4;
    } while (sum < i1);
  }
  R[4] = R[1];
  R[8] = R[2];
  R[9] = R[6];
  R[12] = R[3];
  R[13] = R[7];
  R[14] = R[11];
  return { R, m, N };
}
function estats(bst) {
  let N;
  let R;
  let m;
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  ({ R, m, N } = bst);
  [tmp, tmp2, tmp3, tmp4] = m;
  let num = 0;
  if (0 != N) {
    num = 1 / N;
  }
  const items = [R[0] - tmp * tmp * num, R[1] - tmp * tmp2 * num, R[2] - tmp * tmp3 * num, R[3] - tmp * tmp4 * num, R[4] - tmp2 * tmp * num, R[5] - tmp2 * tmp2 * num, R[6] - tmp2 * tmp3 * num, R[7] - tmp2 * tmp4 * num, R[8] - tmp3 * tmp * num, R[9] - tmp3 * tmp2 * num, R[10] - tmp3 * tmp3 * num, R[11] - tmp3 * tmp4 * num, R[12] - tmp4 * tmp * num, R[13] - tmp4 * tmp2 * num, R[14] - tmp4 * tmp3 * num, R[15] - tmp4 * tmp4 * num];
  let obj = c16;
  const items1 = [Math.random(), Math.random(), Math.random(), Math.random()];
  let num3 = 0;
  let tmp5 = items1;
  if (0 != N) {
    const multVecResult = obj.multVec(items, items1);
    const _Math = Math;
    const sqrtResult = Math.sqrt(obj.dot(multVecResult, multVecResult));
    let num7 = 0;
    let tmp8 = sqrtResult;
    let smlResult = obj.sml(1 / sqrtResult, multVecResult);
    const sum = num7 + 1;
    num3 = tmp8;
    tmp5 = smlResult;
    while (sum < 16) {
      let multVecResult1 = obj.multVec(items, smlResult);
      let _Math2 = Math;
      let sqrtResult1 = Math.sqrt(obj.dot(multVecResult1, multVecResult1));
      let smlResult1 = obj.sml(1 / sqrtResult1, multVecResult1);
      num7 = sum;
      tmp8 = sqrtResult1;
      smlResult = smlResult1;
      if (0 === sum) {
        continue;
      } else {
        let _Math3 = Math;
        num7 = sum;
        tmp8 = sqrtResult1;
        smlResult = smlResult1;
        num3 = tmp11;
        tmp5 = smlResult1;
        if (Math.abs(sqrtResult1 - tmp11) < 0.000000001) {
          break;
        }
      }
      continue;
    }
  }
  const items2 = [tmp * num, tmp2 * num, tmp3 * num, tmp4 * num];
  obj = { Cov: items, q: items2, e: tmp5, L: num3, eMq255: obj.dot(obj.sml(255, items2), tmp5), eMq: obj.dot(tmp5, items2), rgba: null };
  const tmp16 = Math.round(255 * items2[3]) << 24;
  const tmp17 = Math.round(255 * items2[2]) << 16;
  obj[6] = (tmp16 | tmp17 | Math.round(255 * items2[1]) << 8 | Math.round(255 * items2[0])) >>> 0;
  return obj;
}
({ _copyTile: c0, _bin: c1, _paeth: c2 } = obj);
const uint32Array5 = new Uint32Array(256);
let num26 = 0;
let num27 = 0;
let tmp66 = num26;
do {
  do {
    let tmp67 = tmp66 >>> 1;
    let tmp68 = num27;
    let tmp69 = 1 & tmp66 ? 3988292384 ^ tmp67 : tmp67;
    num27 = num27 + 1;
    tmp66 = tmp69;
  } while (num27 < 8);
  uint32Array5[num26] = tmp69;
  num26 = num26 + 1;
} while (num26 < 256);
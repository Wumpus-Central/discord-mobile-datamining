// === Module 9025: hslToRgb ===

// Module 9025 (hslToRgb)
function hslToRgb(arg0, arg1, arg2) {
  if (arg2 < 0.5) {
    let result = arg2 * (1 + arg1);
  } else {
    result = arg2 + arg1 - arg2 * arg1;
  }
  const sum = arg0 + 0.3333333333333333;
  let sum1 = sum;
  if (sum < 0) {
    sum1 = sum + 1;
  }
  let diff = sum1;
  if (1 < sum1) {
    diff = sum1 - 1;
  }
  const diff1 = 2 * arg2 - result;
  if (diff < 0.16666666666666666) {
    let sum2 = diff1 + 6 * (result - diff1) * diff;
  } else {
    sum2 = result;
    if (diff >= 0.5) {
      let sum3 = diff1;
      if (diff < 0.6666666666666666) {
        sum3 = diff1 + (result - diff1) * (0.6666666666666666 - diff) * 6;
      }
      sum2 = sum3;
    }
  }
  let sum4 = arg0;
  if (arg0 < 0) {
    sum4 = arg0 + 1;
  }
  let diff2 = sum4;
  if (1 < sum4) {
    diff2 = sum4 - 1;
  }
  if (diff2 < 0.16666666666666666) {
    let sum5 = diff1 + 6 * (result - diff1) * diff2;
  } else {
    sum5 = result;
    if (diff2 >= 0.5) {
      let sum6 = diff1;
      if (diff2 < 0.6666666666666666) {
        sum6 = diff1 + (result - diff1) * (0.6666666666666666 - diff2) * 6;
      }
      sum5 = sum6;
    }
  }
  const diff3 = arg0 - 0.3333333333333333;
  let sum7 = diff3;
  if (diff3 < 0) {
    sum7 = diff3 + 1;
  }
  let diff4 = sum7;
  if (1 < sum7) {
    diff4 = sum7 - 1;
  }
  if (diff4 < 0.16666666666666666) {
    let sum8 = diff1 + 6 * (result - diff1) * diff4;
  } else {
    sum8 = result;
    if (diff4 >= 0.5) {
      let sum9 = diff1;
      if (diff4 < 0.6666666666666666) {
        sum9 = diff1 + (result - diff1) * (0.6666666666666666 - diff4) * 6;
      }
      sum8 = sum9;
    }
  }
  const tmp17 = Math.round(255 * sum2) << 24;
  return tmp17 | Math.round(255 * sum5) << 16 | Math.round(255 * sum8) << 8;
}
function call() {
  const items = [...arguments];
  return "\\(\\s*(" + items.join(")\\s*,?\\s*(") + ")\\s*\\)";
}
function callWithSlashSeparator() {
  const items = [...arguments];
  const substr = items.slice(0, items.length - 1);
  return "\\(\\s*(" + substr.join(")\\s*,?\\s*(") + ")\\s*/\\s*(" + items[items.length - 1] + ")\\s*\\)";
}
function commaSeparatedCall() {
  const items = [...arguments];
  return "\\(\\s*(" + items.join(")\\s*,\\s*(") + ")\\s*\\)";
}

export default function normalizeColor(num) {
  if (typeof num === "number") {
    num = 0;
    let tmp72 = null;
    if (num >>> 0 === num) {
      tmp72 = null;
      if (num >= 0) {
        num = 4294967295;
        tmp72 = null;
        if (num <= 4294967295) {
          tmp72 = num;
        }
      }
    }
    return tmp72;
  } else if (typeof num !== "string") {
    return null;
  } else {
    let tmp73 = obj;
    if (undefined === obj) {
      obj = { rgb: null, rgba: null, hsl: null, hsla: null, hwb: null, hex3: null, hex4: null, hex6: null, hex8: null };
      const _RegExp = RegExp;
      const regExp = new RegExp("rgb" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+"));
      obj[0] = regExp;
      const _RegExp2 = RegExp;
      const tmp81 = commaSeparatedCall("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+");
      const _HermesInternal = HermesInternal;
      const regExp1 = new RegExp("rgba(" + tmp81 + "|" + callWithSlashSeparator("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+") + ")");
      obj[1] = regExp1;
      const _RegExp3 = RegExp;
      const regExp2 = new RegExp("hsl" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%"));
      obj[2] = regExp2;
      const _RegExp4 = RegExp;
      const tmp92 = commaSeparatedCall("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+");
      const _HermesInternal2 = HermesInternal;
      const regExp3 = new RegExp("hsla(" + tmp92 + "|" + callWithSlashSeparator("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+") + ")");
      obj[3] = regExp3;
      const _RegExp5 = RegExp;
      let regExp4 = new RegExp("hwb" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%"));
      obj[4] = regExp4;
      obj[5] = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
      obj[6] = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
      obj[7] = /^#([0-9a-fA-F]{6})$/;
      obj[8] = /^#([0-9a-fA-F]{8})$/;
      tmp73 = obj;
    }
    const hex6 = tmp73.hex6;
    regExp4 = hex6.exec(num);
    if (regExp4) {
      const _parseInt12 = parseInt;
      num = 16;
      num = 0;
      return parseInt(regExp4[1] + "ff", 16) >>> 0;
    } else {
      num = 2597139199;
      while (true) {
        let tmp2 = null;
        if (null != num2) {
          return num2;
        } else {
          let rgb = tmp73.rgb;
          num = rgb.exec(num);
          if (num) {
            let tmp63 = globalThis;
            let _parseInt9 = parseInt;
            num = 10;
            let parsed = parseInt(num[1], 10);
            num = 0;
            num = 0;
            if (parsed >= 0) {
              num = 255;
              if (parsed <= 255) {
                num = parsed;
              }
            }
            num = 24;
            let _parseInt10 = parseInt;
            let tmp65 = num << 24;
            let parsed1 = parseInt(num[2], 10);
            num = 0;
            if (parsed1 >= 0) {
              num = 255;
              if (parsed1 <= 255) {
                num = parsed1;
              }
            }
            num = 16;
            num = num[3];
            let _parseInt11 = parseInt;
            let tmp67 = num << 16;
            let parsed2 = parseInt(num, 10);
            num = 0;
            if (parsed2 >= 0) {
              num = 255;
              if (parsed2 <= 255) {
                num = parsed2;
              }
            }
            num = 8;
            num = 255;
            let tmp8 = (tmp65 | tmp67 | num << 8 | 255) >>> 0;
          } else {
            let rgba = tmp73.rgba;
            let num3 = rgba.exec(num);
            if (num3) {
              if (undefined !== num3[6]) {
                let tmp54 = globalThis;
                let _parseInt6 = parseInt;
                let num91 = 10;
                let parsed3 = parseInt(num3[6], 10);
                let num92 = 0;
                let num93 = 0;
                if (parsed3 >= 0) {
                  let num94 = 255;
                  if (parsed3 <= 255) {
                    num94 = parsed3;
                  }
                  num93 = num94;
                }
                let num95 = 24;
                let _parseInt7 = parseInt;
                let tmp56 = num93 << 24;
                let parsed4 = parseInt(num3[7], 10);
                let num96 = 0;
                if (parsed4 >= 0) {
                  let num97 = 255;
                  if (parsed4 <= 255) {
                    num97 = parsed4;
                  }
                  num96 = num97;
                }
                let num98 = 16;
                let _parseInt8 = parseInt;
                let tmp58 = num96 << 16;
                let parsed5 = parseInt(num3[8], 10);
                let num99 = 0;
                if (parsed5 >= 0) {
                  num = 255;
                  if (parsed5 <= 255) {
                    num = parsed5;
                  }
                  num99 = num;
                }
                num = 8;
                let _parseFloat14 = parseFloat;
                let tmp60 = num99 << 8;
                let parsed6 = parseFloat(num3[9]);
                num3 = 0;
                if (parsed6 >= 0) {
                  num = 1;
                  num = 255;
                  num = 255;
                  if (parsed6 <= 1) {
                    let _Math8 = Math;
                    num = Math.round(255 * parsed6);
                  }
                  num3 = num;
                }
                let tmp53 = (tmp56 | tmp58 | tmp60 | num3) >>> 0;
              } else {
                regExp4 = globalThis;
                let _parseInt13 = parseInt;
                num = 10;
                regExp4 = parseInt(num3[2], 10);
                num = 0;
                let num79 = 0;
                if (regExp4 >= 0) {
                  let num78 = 255;
                  if (regExp4 <= 255) {
                    num78 = regExp4;
                  }
                  num79 = num78;
                }
                let num80 = 24;
                let _parseInt4 = parseInt;
                let tmp47 = num79 << 24;
                let parsed7 = parseInt(num3[3], 10);
                let num81 = 0;
                if (parsed7 >= 0) {
                  let num82 = 255;
                  if (parsed7 <= 255) {
                    num82 = parsed7;
                  }
                  num81 = num82;
                }
                let num83 = 16;
                let _parseInt5 = parseInt;
                let tmp49 = num81 << 16;
                let parsed8 = parseInt(num3[4], 10);
                let num84 = 0;
                if (parsed8 >= 0) {
                  let num85 = 255;
                  if (parsed8 <= 255) {
                    num85 = parsed8;
                  }
                  num84 = num85;
                }
                let num86 = 8;
                let _parseFloat13 = parseFloat;
                let tmp51 = num84 << 8;
                let parsed9 = parseFloat(num3[5]);
                let num87 = 0;
                if (parsed9 >= 0) {
                  let num88 = 1;
                  let num89 = 255;
                  let num90 = 255;
                  if (parsed9 <= 1) {
                    let _Math7 = Math;
                    num90 = Math.round(255 * parsed9);
                  }
                  num87 = num90;
                }
                tmp53 = (tmp47 | tmp49 | tmp51 | num87) >>> 0;
              }
              let tmp62 = tmp53;
            } else {
              let hex3 = tmp73.hex3;
              let match = hex3.exec(num);
              if (match) {
                let tmp46 = globalThis;
                let _parseInt3 = parseInt;
                let num76 = 16;
                let str = "ff";
                let num77 = 0;
                tmp8 = parseInt(`${tmp3[1]}${tmp3[1]}${tmp3[2]}${tmp3[2]}${tmp3[3]}${tmp3[3]}ff`, 16) >>> 0;
              } else {
                let hex8 = tmp73.hex8;
                let match1 = hex8.exec(num);
                if (match1) {
                  let tmp45 = globalThis;
                  let _parseInt2 = parseInt;
                  let num74 = 16;
                  let num75 = 0;
                  tmp8 = parseInt(match1[1], 16) >>> 0;
                } else {
                  let hex4 = tmp73.hex4;
                  let match2 = hex4.exec(num);
                  if (match2) {
                    let tmp44 = globalThis;
                    let _parseInt = parseInt;
                    let num72 = 16;
                    let num73 = 0;
                    tmp8 = parseInt(match2[1] + match2[1] + match2[2] + match2[2] + match2[3] + match2[3] + match2[4] + match2[4], 16) >>> 0;
                  } else {
                    let hsl = tmp73.hsl;
                    let match3 = hsl.exec(num);
                    if (match3) {
                      let tmp40 = globalThis;
                      let _parseFloat10 = parseFloat;
                      let tmp39 = hslToRgb;
                      let num63 = 360;
                      let _parseFloat11 = parseFloat;
                      let result = parseFloat(match3[1]) % 360;
                      let parsed10 = parseFloat(match3[2]);
                      let num64 = 0;
                      let num65 = 0;
                      if (parsed10 >= 0) {
                        let num66 = 100;
                        let num67 = 1;
                        if (parsed10 <= 100) {
                          num67 = parsed10 / 100;
                        }
                        num65 = num67;
                      }
                      let _parseFloat12 = parseFloat;
                      let parsed11 = parseFloat(match3[3]);
                      let num68 = 0;
                      if (parsed11 >= 0) {
                        let num69 = 100;
                        let num70 = 1;
                        if (parsed11 <= 100) {
                          num70 = parsed11 / 100;
                        }
                        num68 = num70;
                      }
                      let num71 = 255;
                      tmp8 = (255 | tmp39((result + 360) % 360 / 360, num65, num68)) >>> 0;
                    } else {
                      let hsla = tmp73.hsla;
                      let num4 = hsla.exec(num);
                      if (num4) {
                        if (undefined !== num4[6]) {
                          let tmp32 = globalThis;
                          let _parseFloat6 = parseFloat;
                          let tmp31 = hslToRgb;
                          let num52 = 360;
                          let _parseFloat7 = parseFloat;
                          let result1 = parseFloat(num4[6]) % 360;
                          let parsed12 = parseFloat(num4[7]);
                          let num53 = 0;
                          let num54 = 0;
                          if (parsed12 >= 0) {
                            let num55 = 100;
                            let num56 = 1;
                            if (parsed12 <= 100) {
                              num56 = parsed12 / 100;
                            }
                            num54 = num56;
                          }
                          let _parseFloat8 = parseFloat;
                          let parsed13 = parseFloat(num4[8]);
                          let num57 = 0;
                          if (parsed13 >= 0) {
                            let num58 = 100;
                            let num59 = 1;
                            if (parsed13 <= 100) {
                              num59 = parsed13 / 100;
                            }
                            num57 = num59;
                          }
                          let _parseFloat9 = parseFloat;
                          let tmp31Result = tmp31((result1 + 360) % 360 / 360, num54, num57);
                          let parsed14 = parseFloat(num4[9]);
                          num4 = 0;
                          if (parsed14 >= 0) {
                            let num60 = 1;
                            let num61 = 255;
                            let num62 = 255;
                            if (parsed14 <= 1) {
                              let _Math6 = Math;
                              num62 = Math.round(255 * parsed14);
                            }
                            num4 = num62;
                          }
                          let tmp30 = (tmp31Result | num4) >>> 0;
                        } else {
                          regExp4 = globalThis;
                          let _parseFloat15 = parseFloat;
                          regExp4 = hslToRgb;
                          num = 360;
                          let _parseFloat16 = parseFloat;
                          regExp4 = parseFloat(num4[2]) % 360;
                          regExp4 = parseFloat(num4[3]);
                          num = 0;
                          let num44 = 0;
                          if (regExp4 >= 0) {
                            let num42 = 100;
                            let num43 = 1;
                            if (regExp4 <= 100) {
                              num43 = regExp4 / 100;
                            }
                            num44 = num43;
                          }
                          let _parseFloat4 = parseFloat;
                          let parsed15 = parseFloat(num4[4]);
                          let num45 = 0;
                          if (parsed15 >= 0) {
                            let num46 = 100;
                            let num47 = 1;
                            if (parsed15 <= 100) {
                              num47 = parsed15 / 100;
                            }
                            num45 = num47;
                          }
                          let _parseFloat5 = parseFloat;
                          let regExp4Result = regExp4((regExp4 + 360) % 360 / 360, num44, num45);
                          let parsed16 = parseFloat(num4[5]);
                          let num48 = 0;
                          if (parsed16 >= 0) {
                            let num49 = 1;
                            let num50 = 255;
                            let num51 = 255;
                            if (parsed16 <= 1) {
                              let _Math5 = Math;
                              num51 = Math.round(255 * parsed16);
                            }
                            num48 = num51;
                          }
                          tmp30 = (regExp4Result | num48) >>> 0;
                        }
                        let tmp38 = tmp30;
                      } else {
                        let hwb = tmp73.hwb;
                        let match4 = hwb.exec(num);
                        tmp8 = null;
                        if (match4) {
                          let roundResult = globalThis;
                          let _parseFloat = parseFloat;
                          let num5 = 360;
                          let _parseFloat2 = parseFloat;
                          let result2 = parseFloat(match4[1]) % 360;
                          let parsed17 = parseFloat(match4[2]);
                          let num6 = 0;
                          let num7 = 0;
                          if (parsed17 >= 0) {
                            let num8 = 100;
                            let num9 = 1;
                            if (parsed17 <= 100) {
                              num9 = parsed17 / 100;
                            }
                            num7 = num9;
                          }
                          let _parseFloat3 = parseFloat;
                          let parsed18 = parseFloat(match4[3]);
                          let num10 = 0;
                          if (parsed18 >= 0) {
                            let num11 = 100;
                            let num12 = 1;
                            if (parsed18 <= 100) {
                              num12 = parsed18 / 100;
                            }
                            num10 = num12;
                          }
                          let sum = num7 + num10;
                          let num13 = 1;
                          if (1 <= sum) {
                            let _Math4 = roundResult.Math;
                            let num37 = 255;
                            roundResult = _Math4.round(255 * num7 / sum);
                            let num38 = 24;
                            num7 = roundResult << 24;
                            let num39 = 16;
                            let num40 = 8;
                            sum = roundResult << 8;
                            let tmp25 = num7 | roundResult << 16 | sum;
                          } else {
                            regExp4 = (result2 + 360) % 360 / 360;
                            num = 0.3333333333333333;
                            regExp4 = regExp4 + 0.3333333333333333;
                            let sum1 = regExp4;
                            if (regExp4 < 0) {
                              sum1 = regExp4 + 1;
                            }
                            let diff = sum1;
                            if (1 < sum1) {
                              diff = sum1 - 1;
                            }
                            let num14 = 0.16666666666666666;
                            if (diff < 0.16666666666666666) {
                              let num20 = 6;
                              let num16 = 6 * diff;
                            } else {
                              let num15 = 0.5;
                              num16 = 1;
                              if (diff >= 0.5) {
                                let num17 = 0.6666666666666666;
                                let num18 = 0;
                                if (diff < 0.6666666666666666) {
                                  let num19 = 6;
                                  num18 = (0.6666666666666666 - diff) * 6;
                                }
                                num16 = num18;
                              }
                            }
                            let sum2 = regExp4;
                            if (regExp4 < 0) {
                              sum2 = regExp4 + 1;
                            }
                            let diff1 = sum2;
                            if (1 < sum2) {
                              diff1 = sum2 - 1;
                            }
                            if (diff1 < 0.16666666666666666) {
                              let num26 = 6;
                              let num22 = 6 * diff1;
                            } else {
                              let num21 = 0.5;
                              num22 = 1;
                              if (diff1 >= 0.5) {
                                let num23 = 0.6666666666666666;
                                let num24 = 0;
                                if (diff1 < 0.6666666666666666) {
                                  let num25 = 6;
                                  num24 = (0.6666666666666666 - diff1) * 6;
                                }
                                num22 = num24;
                              }
                            }
                            let diff2 = regExp4 - 0.3333333333333333;
                            let sum3 = diff2;
                            if (diff2 < 0) {
                              sum3 = diff2 + 1;
                            }
                            let diff3 = sum3;
                            if (1 < sum3) {
                              diff3 = sum3 - 1;
                            }
                            if (diff3 < 0.16666666666666666) {
                              let num32 = 6;
                              let num28 = 6 * diff3;
                            } else {
                              let num27 = 0.5;
                              num28 = 1;
                              if (diff3 >= 0.5) {
                                let num29 = 0.6666666666666666;
                                let num30 = 0;
                                if (diff3 < 0.6666666666666666) {
                                  let num31 = 6;
                                  num30 = (0.6666666666666666 - diff3) * 6;
                                }
                                num28 = num30;
                              }
                            }
                            let diff4 = 1 - num7 - num10;
                            let _Math = Math;
                            let num33 = 255;
                            let sum4 = num22 * diff4 + num7;
                            let num34 = 24;
                            let _Math2 = Math;
                            let tmp23 = Math.round(255 * (num16 * diff4 + num7)) << 24;
                            let num35 = 16;
                            let _Math3 = Math;
                            let tmp24 = Math.round(255 * sum4) << 16;
                            let num36 = 8;
                            tmp25 = tmp23 | tmp24 | Math.round(255 * (num28 * diff4 + num7)) << 8;
                          }
                          let num41 = 255;
                          let tmp26 = (255 | tmp25) >>> 0;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          let tmp69 = tmp8;
        }
      }
    }
  }
};
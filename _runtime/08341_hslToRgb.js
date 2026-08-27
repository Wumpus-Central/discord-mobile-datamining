// === Module 8341: hslToRgb ===

// Module 8341 (hslToRgb)
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
    let tmp74 = null;
    if (num >>> 0 === num) {
      tmp74 = null;
      if (num >= 0) {
        num = 4294967295;
        tmp74 = null;
        if (num <= 4294967295) {
          tmp74 = num;
        }
      }
    }
    return tmp74;
  } else if (typeof num !== "string") {
    return null;
  } else {
    let tmp75 = obj;
    if (undefined === obj) {
      obj = { rgb: null, rgba: null, hsl: null, hsla: null, hwb: null, hex3: null, hex4: null, hex6: null, hex8: null };
      const _RegExp = RegExp;
      const regExp = new RegExp("rgb" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+"));
      obj[0] = regExp;
      const _RegExp2 = RegExp;
      const tmp83 = commaSeparatedCall("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+");
      const _HermesInternal = HermesInternal;
      const regExp1 = new RegExp("rgba(" + tmp83 + "|" + callWithSlashSeparator("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+") + ")");
      obj[1] = regExp1;
      const _RegExp3 = RegExp;
      const regExp2 = new RegExp("hsl" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%"));
      obj[2] = regExp2;
      const _RegExp4 = RegExp;
      const tmp94 = commaSeparatedCall("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+");
      const _HermesInternal2 = HermesInternal;
      const regExp3 = new RegExp("hsla(" + tmp94 + "|" + callWithSlashSeparator("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+") + ")");
      obj[3] = regExp3;
      const _RegExp5 = RegExp;
      let regExp4 = new.target;
      regExp4 = new.target;
      regExp4 = new RegExp("hwb" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%"));
      obj[4] = regExp4;
      obj[5] = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
      obj[6] = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
      obj[7] = /^#([0-9a-fA-F]{6})$/;
      obj[8] = /^#([0-9a-fA-F]{8})$/;
      tmp75 = obj;
    }
    const hex6 = tmp75.hex6;
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
          let rgb = tmp75.rgb;
          num = rgb.exec(num);
          if (num) {
            let tmp65 = globalThis;
            let _parseInt9 = parseInt;
            let num98 = 10;
            let parsed = parseInt(num[1], 10);
            let num99 = 0;
            num = 0;
            if (parsed >= 0) {
              num = 255;
              if (parsed <= 255) {
                num = parsed;
              }
            }
            num = 24;
            let _parseInt10 = parseInt;
            let tmp67 = num << 24;
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
            let tmp69 = num << 16;
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
            let tmp8 = (tmp67 | tmp69 | num << 8 | 255) >>> 0;
          } else {
            let rgba = tmp75.rgba;
            let num3 = rgba.exec(num);
            if (num3) {
              if (undefined !== num3[6]) {
                let tmp56 = globalThis;
                let _parseInt6 = parseInt;
                let num84 = 10;
                let parsed3 = parseInt(num3[6], 10);
                let num85 = 0;
                let num86 = 0;
                if (parsed3 >= 0) {
                  let num87 = 255;
                  if (parsed3 <= 255) {
                    num87 = parsed3;
                  }
                  num86 = num87;
                }
                let num88 = 24;
                let _parseInt7 = parseInt;
                let tmp58 = num86 << 24;
                let parsed4 = parseInt(num3[7], 10);
                let num89 = 0;
                if (parsed4 >= 0) {
                  let num90 = 255;
                  if (parsed4 <= 255) {
                    num90 = parsed4;
                  }
                  num89 = num90;
                }
                let num91 = 16;
                let _parseInt8 = parseInt;
                let tmp60 = num89 << 16;
                let parsed5 = parseInt(num3[8], 10);
                let num92 = 0;
                if (parsed5 >= 0) {
                  let num93 = 255;
                  if (parsed5 <= 255) {
                    num93 = parsed5;
                  }
                  num92 = num93;
                }
                let num94 = 8;
                let _parseFloat14 = parseFloat;
                let tmp62 = num92 << 8;
                let parsed6 = parseFloat(num3[9]);
                num3 = 0;
                if (parsed6 >= 0) {
                  let num95 = 1;
                  let num96 = 255;
                  let num97 = 255;
                  if (parsed6 <= 1) {
                    let _Math6 = Math;
                    num97 = Math.round(255 * parsed6);
                  }
                  num3 = num97;
                }
                let tmp55 = (tmp58 | tmp60 | tmp62 | num3) >>> 0;
              } else {
                regExp4 = globalThis;
                let _parseInt13 = parseInt;
                num = 10;
                regExp4 = parseInt(num3[2], 10);
                num = 0;
                let num72 = 0;
                if (regExp4 >= 0) {
                  let num71 = 255;
                  if (regExp4 <= 255) {
                    num71 = regExp4;
                  }
                  num72 = num71;
                }
                let num73 = 24;
                let _parseInt4 = parseInt;
                let tmp49 = num72 << 24;
                let parsed7 = parseInt(num3[3], 10);
                let num74 = 0;
                if (parsed7 >= 0) {
                  let num75 = 255;
                  if (parsed7 <= 255) {
                    num75 = parsed7;
                  }
                  num74 = num75;
                }
                let num76 = 16;
                let _parseInt5 = parseInt;
                let tmp51 = num74 << 16;
                let parsed8 = parseInt(num3[4], 10);
                let num77 = 0;
                if (parsed8 >= 0) {
                  let num78 = 255;
                  if (parsed8 <= 255) {
                    num78 = parsed8;
                  }
                  num77 = num78;
                }
                let num79 = 8;
                let _parseFloat13 = parseFloat;
                let tmp53 = num77 << 8;
                let parsed9 = parseFloat(num3[5]);
                let num80 = 0;
                if (parsed9 >= 0) {
                  let num81 = 1;
                  let num82 = 255;
                  let num83 = 255;
                  if (parsed9 <= 1) {
                    let _Math5 = Math;
                    num83 = Math.round(255 * parsed9);
                  }
                  num80 = num83;
                }
                tmp55 = (tmp49 | tmp51 | tmp53 | num80) >>> 0;
              }
              let tmp64 = tmp55;
            } else {
              let hex3 = tmp75.hex3;
              let match = hex3.exec(num);
              if (match) {
                let tmp48 = globalThis;
                let _parseInt3 = parseInt;
                let num69 = 16;
                let str = "ff";
                let num70 = 0;
                tmp8 = parseInt(`${tmp3[1]}${tmp3[1]}${tmp3[2]}${tmp3[2]}${tmp3[3]}${tmp3[3]}ff`, 16) >>> 0;
              } else {
                let hex8 = tmp75.hex8;
                let match1 = hex8.exec(num);
                if (match1) {
                  let tmp47 = globalThis;
                  let _parseInt2 = parseInt;
                  let num67 = 16;
                  let num68 = 0;
                  tmp8 = parseInt(match1[1], 16) >>> 0;
                } else {
                  let hex4 = tmp75.hex4;
                  let match2 = hex4.exec(num);
                  if (match2) {
                    let tmp46 = globalThis;
                    let _parseInt = parseInt;
                    let num65 = 16;
                    let num66 = 0;
                    tmp8 = parseInt(match2[1] + match2[1] + match2[2] + match2[2] + match2[3] + match2[3] + match2[4] + match2[4], 16) >>> 0;
                  } else {
                    let hsl = tmp75.hsl;
                    let match3 = hsl.exec(num);
                    if (match3) {
                      let tmp42 = globalThis;
                      let _parseFloat10 = parseFloat;
                      let tmp41 = hslToRgb;
                      let num56 = 360;
                      let _parseFloat11 = parseFloat;
                      let result = parseFloat(match3[1]) % 360;
                      let parsed10 = parseFloat(match3[2]);
                      let num57 = 0;
                      let num58 = 0;
                      if (parsed10 >= 0) {
                        let num59 = 100;
                        let num60 = 1;
                        if (parsed10 <= 100) {
                          num60 = parsed10 / 100;
                        }
                        num58 = num60;
                      }
                      let _parseFloat12 = parseFloat;
                      let parsed11 = parseFloat(match3[3]);
                      let num61 = 0;
                      if (parsed11 >= 0) {
                        let num62 = 100;
                        let num63 = 1;
                        if (parsed11 <= 100) {
                          num63 = parsed11 / 100;
                        }
                        num61 = num63;
                      }
                      let num64 = 255;
                      tmp8 = (255 | tmp41((result + 360) % 360 / 360, num58, num61)) >>> 0;
                    } else {
                      let hsla = tmp75.hsla;
                      let num4 = hsla.exec(num);
                      if (num4) {
                        if (undefined !== num4[6]) {
                          let tmp34 = globalThis;
                          let _parseFloat6 = parseFloat;
                          let tmp33 = hslToRgb;
                          let num45 = 360;
                          let _parseFloat7 = parseFloat;
                          let result1 = parseFloat(num4[6]) % 360;
                          let parsed12 = parseFloat(num4[7]);
                          let num46 = 0;
                          let num47 = 0;
                          if (parsed12 >= 0) {
                            let num48 = 100;
                            let num49 = 1;
                            if (parsed12 <= 100) {
                              num49 = parsed12 / 100;
                            }
                            num47 = num49;
                          }
                          let _parseFloat8 = parseFloat;
                          let parsed13 = parseFloat(num4[8]);
                          let num50 = 0;
                          if (parsed13 >= 0) {
                            let num51 = 100;
                            let num52 = 1;
                            if (parsed13 <= 100) {
                              num52 = parsed13 / 100;
                            }
                            num50 = num52;
                          }
                          let _parseFloat9 = parseFloat;
                          let tmp33Result = tmp33((result1 + 360) % 360 / 360, num47, num50);
                          let parsed14 = parseFloat(num4[9]);
                          num4 = 0;
                          if (parsed14 >= 0) {
                            let num53 = 1;
                            let num54 = 255;
                            let num55 = 255;
                            if (parsed14 <= 1) {
                              let _Math4 = Math;
                              num55 = Math.round(255 * parsed14);
                            }
                            num4 = num55;
                          }
                          let tmp32 = (tmp33Result | num4) >>> 0;
                        } else {
                          regExp4 = globalThis;
                          let _parseFloat15 = parseFloat;
                          regExp4 = hslToRgb;
                          num = 360;
                          let _parseFloat16 = parseFloat;
                          regExp4 = parseFloat(num4[2]) % 360;
                          regExp4 = parseFloat(num4[3]);
                          num = 0;
                          let num37 = 0;
                          if (regExp4 >= 0) {
                            let num35 = 100;
                            let num36 = 1;
                            if (regExp4 <= 100) {
                              num36 = regExp4 / 100;
                            }
                            num37 = num36;
                          }
                          let _parseFloat4 = parseFloat;
                          let parsed15 = parseFloat(num4[4]);
                          let num38 = 0;
                          if (parsed15 >= 0) {
                            let num39 = 100;
                            let num40 = 1;
                            if (parsed15 <= 100) {
                              num40 = parsed15 / 100;
                            }
                            num38 = num40;
                          }
                          let _parseFloat5 = parseFloat;
                          let regExp4Result = regExp4((regExp4 + 360) % 360 / 360, num37, num38);
                          let parsed16 = parseFloat(num4[5]);
                          let num41 = 0;
                          if (parsed16 >= 0) {
                            let num42 = 1;
                            let num43 = 255;
                            let num44 = 255;
                            if (parsed16 <= 1) {
                              let _Math3 = Math;
                              num44 = Math.round(255 * parsed16);
                            }
                            num41 = num44;
                          }
                          tmp32 = (regExp4Result | num41) >>> 0;
                        }
                        let tmp40 = tmp32;
                      } else {
                        let hwb = tmp75.hwb;
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
                            let _Math2 = roundResult.Math;
                            let num30 = 255;
                            roundResult = _Math2.round(255 * num7 / sum);
                            let num31 = 24;
                            num7 = roundResult << 24;
                            let num32 = 16;
                            let num33 = 8;
                            sum = roundResult << 8;
                            while (true) {
                              let num34 = 255;
                              let tmp28 = (255 | tmp27) >>> 0;
                              continue;
                            }
                          } else {
                            regExp4 = (result2 + 360) % 360 / 360;
                            num = 0.3333333333333333;
                            regExp4 = regExp4 + 0.3333333333333333;
                            let sum1 = regExp4;
                            if (regExp4 < 0) {
                              sum1 = regExp4 + num13;
                            }
                            let diff = sum1;
                            if (num13 < sum1) {
                              diff = sum1 - num13;
                            }
                            let num14 = 0.16666666666666666;
                            if (diff < 0.16666666666666666) {
                              let num19 = 6;
                              let result3 = 6 * diff;
                            } else {
                              let num15 = 0.5;
                              result3 = num13;
                              if (diff >= 0.5) {
                                let num16 = 0.6666666666666666;
                                let num17 = 0;
                                if (diff < 0.6666666666666666) {
                                  let num18 = 6;
                                  num17 = num13 * (0.6666666666666666 - diff) * 6;
                                }
                                result3 = num17;
                              }
                            }
                            let sum2 = regExp4;
                            if (regExp4 < 0) {
                              sum2 = regExp4 + num13;
                            }
                            let diff1 = sum2;
                            if (num13 < sum2) {
                              diff1 = sum2 - num13;
                            }
                            if (diff1 < 0.16666666666666666) {
                              let num24 = 6;
                              let result4 = 6 * diff1;
                            } else {
                              let num20 = 0.5;
                              result4 = num13;
                              if (diff1 >= 0.5) {
                                let num21 = 0.6666666666666666;
                                let num22 = 0;
                                if (diff1 < 0.6666666666666666) {
                                  let num23 = 6;
                                  num22 = num13 * (0.6666666666666666 - diff1) * 6;
                                }
                                result4 = num22;
                              }
                            }
                            let diff2 = regExp4 - 0.3333333333333333;
                            let sum3 = diff2;
                            if (diff2 < 0) {
                              sum3 = diff2 + num13;
                            }
                            let diff3 = sum3;
                            if (num13 < sum3) {
                              diff3 = sum3 - num13;
                            }
                            if (diff3 < 0.16666666666666666) {
                              let num29 = 6;
                              let result5 = 6 * diff3;
                            } else {
                              let num25 = 0.5;
                              let tmp23 = num13;
                              if (diff3 >= 0.5) {
                                let num26 = 0.6666666666666666;
                                let num27 = 0;
                                if (diff3 < 0.6666666666666666) {
                                  let num28 = 6;
                                  num27 = num13 * (0.6666666666666666 - diff3) * 6;
                                }
                                let tmp24 = num27;
                              }
                            }
                            num13 = num13 - num7 - num10;
                            result4 = result4 * num13 + num7;
                            let _Math = Math;
                            num10 = 255;
                            result3 = 255 * (result3 * num13 + num7);
                            let rounded = Math.round(result3);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          let tmp71 = tmp8;
        }
      }
    }
  }
};
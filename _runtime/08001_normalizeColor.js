// === Module 8001: normalizeColor ===

// Module 8001 (normalizeColor)
let obj;

function hslToRgb(arg0, arg1, arg2) {
  let result;
  let sum2;
  let sum5;
  let sum8;
  if (arg2 < 0.5) {
    result = arg2 * (1 + arg1);
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
    sum2 = diff1 + 6 * (result - diff1) * diff;
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
    sum5 = diff1 + 6 * (result - diff1) * diff2;
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
    sum8 = diff1 + 6 * (result - diff1) * diff4;
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
  const tmp18 = Math.round(255 * sum5) << 16;
  return tmp17 | tmp18 | Math.round(255 * sum8) << 8;
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
  let regExp;
  let regExp1;
  let regExp2;
  let regExp3;
  let regExp4;
  if (typeof num === "number") {
    let tmp72 = null;
    if (num >>> 0 === num) {
      tmp72 = null;
      if (num >= 0) {
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
      obj = { rgb: regExp, rgba: regExp1, hsl: regExp2, hsla: regExp3, hwb: regExp4, hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex6: /^#([0-9a-fA-F]{6})$/, hex8: /^#([0-9a-fA-F]{8})$/ };
      const _RegExp = RegExp;
      const self = this;
      const self2 = this;
      regExp = new RegExp("rgb" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+"));
      const _RegExp2 = RegExp;
      const _HermesInternal = HermesInternal;
      const self3 = this;
      const self4 = this;
      const tmp79 = commaSeparatedCall("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+");
      regExp1 = new RegExp("rgba(" + tmp79 + "|" + callWithSlashSeparator("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+") + ")");
      const _RegExp3 = RegExp;
      const self5 = this;
      const self6 = this;
      regExp2 = new RegExp("hsl" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%"));
      const _RegExp4 = RegExp;
      const _HermesInternal2 = HermesInternal;
      const self7 = this;
      const self8 = this;
      const tmp86 = commaSeparatedCall("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+");
      regExp3 = new RegExp("hsla(" + tmp86 + "|" + callWithSlashSeparator("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+") + ")");
      const _RegExp5 = RegExp;
      const self9 = this;
      const self10 = this;
      regExp4 = new RegExp("hwb" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%"));
      tmp73 = obj;
    }
    const hex6 = tmp73.hex6;
    const match = hex6.exec(num);
    if (match) {
      const _parseInt12 = parseInt;
      return parseInt(match[1] + "ff", 16) >>> 0;
    } else {
      let tmp2 = 2597139199;
      switch (num) {
        case "transparent":
        {
          tmp2 = 0;
          if (null == tmp2) {
            let tmp11;
            const rgb = tmp73.rgb;
            const match1 = rgb.exec(num);
            if (match1) {
              const _parseInt9 = parseInt;
              const parsed = parseInt(match1[1], 10);
              let num105 = 0;
              if (parsed >= 0) {
                let num106 = 255;
                if (parsed <= 255) {
                  num106 = parsed;
                }
                num105 = num106;
              }
              const _parseInt10 = parseInt;
              const tmp66 = num105 << 24;
              const parsed1 = parseInt(match1[2], 10);
              let num108 = 0;
              if (parsed1 >= 0) {
                let num109 = 255;
                if (parsed1 <= 255) {
                  num109 = parsed1;
                }
                num108 = num109;
              }
              const _parseInt11 = parseInt;
              const tmp68 = num108 << 16;
              const parsed2 = parseInt(match1[3], 10);
              let num111 = 0;
              if (parsed2 >= 0) {
                let num112 = 255;
                if (parsed2 <= 255) {
                  num112 = parsed2;
                }
                num111 = num112;
              }
              tmp11 = (tmp66 | tmp68 | num111 << 8 | 255) >>> 0;
            } else {
              const rgba = tmp73.rgba;
              const match2 = rgba.exec(num);
              if (match2) {
                let tmp55;
                if (undefined !== match2[6]) {
                  const _parseInt6 = parseInt;
                  const parsed3 = parseInt(match2[6], 10);
                  let num90 = 0;
                  if (parsed3 >= 0) {
                    let num91 = 255;
                    if (parsed3 <= 255) {
                      num91 = parsed3;
                    }
                    num90 = num91;
                  }
                  const _parseInt7 = parseInt;
                  const tmp58 = num90 << 24;
                  const parsed4 = parseInt(match2[7], 10);
                  let num93 = 0;
                  if (parsed4 >= 0) {
                    let num94 = 255;
                    if (parsed4 <= 255) {
                      num94 = parsed4;
                    }
                    num93 = num94;
                  }
                  const _parseInt8 = parseInt;
                  const tmp60 = num93 << 16;
                  const parsed5 = parseInt(match2[8], 10);
                  let num96 = 0;
                  if (parsed5 >= 0) {
                    let num97 = 255;
                    if (parsed5 <= 255) {
                      num97 = parsed5;
                    }
                    num96 = num97;
                  }
                  const _parseFloat14 = parseFloat;
                  const tmp62 = num96 << 8;
                  const parsed6 = parseFloat(match2[9]);
                  let num99 = 0;
                  if (parsed6 >= 0) {
                    let num102 = 255;
                    if (parsed6 <= 1) {
                      const _Math8 = Math;
                      num102 = Math.round(255 * parsed6);
                    }
                    num99 = num102;
                  }
                  tmp55 = (tmp58 | tmp60 | tmp62 | num99) >>> 0;
                } else {
                  const _parseInt13 = parseInt;
                  const parsed7 = parseInt(match2[2], 10);
                  let num76 = 0;
                  if (parsed7 >= 0) {
                    let num75 = 255;
                    if (parsed7 <= 255) {
                      num75 = parsed7;
                    }
                    num76 = num75;
                  }
                  const _parseInt4 = parseInt;
                  const tmp49 = num76 << 24;
                  const parsed8 = parseInt(match2[3], 10);
                  let num78 = 0;
                  if (parsed8 >= 0) {
                    let num79 = 255;
                    if (parsed8 <= 255) {
                      num79 = parsed8;
                    }
                    num78 = num79;
                  }
                  const _parseInt5 = parseInt;
                  const tmp51 = num78 << 16;
                  const parsed9 = parseInt(match2[4], 10);
                  let num81 = 0;
                  if (parsed9 >= 0) {
                    let num82 = 255;
                    if (parsed9 <= 255) {
                      num82 = parsed9;
                    }
                    num81 = num82;
                  }
                  const _parseFloat13 = parseFloat;
                  const tmp53 = num81 << 8;
                  const parsed10 = parseFloat(match2[5]);
                  let num84 = 0;
                  if (parsed10 >= 0) {
                    let num87 = 255;
                    if (parsed10 <= 1) {
                      const _Math7 = Math;
                      num87 = Math.round(255 * parsed10);
                    }
                    num84 = num87;
                  }
                  tmp55 = (tmp49 | tmp51 | tmp53 | num84) >>> 0;
                }
                tmp11 = tmp55;
              } else {
                const hex3 = tmp73.hex3;
                const match3 = hex3.exec(num);
                if (match3) {
                  const _parseInt3 = parseInt;
                  tmp11 = parseInt(match3[1] + match3[1] + match3[2] + match3[2] + match3[3] + match3[3] + "ff", 16) >>> 0;
                } else {
                  const hex8 = tmp73.hex8;
                  const match4 = hex8.exec(num);
                  if (match4) {
                    const _parseInt2 = parseInt;
                    tmp11 = parseInt(match4[1], 16) >>> 0;
                  } else {
                    const hex4 = tmp73.hex4;
                    const match5 = hex4.exec(num);
                    if (match5) {
                      const _parseInt = parseInt;
                      tmp11 = parseInt(match5[1] + match5[1] + match5[2] + match5[2] + match5[3] + match5[3] + match5[4] + match5[4], 16) >>> 0;
                    } else {
                      const hsl = tmp73.hsl;
                      const match6 = hsl.exec(num);
                      if (match6) {
                        const _parseFloat10 = parseFloat;
                        const _parseFloat11 = parseFloat;
                        const result = parseFloat(match6[1]) % 360;
                        const parsed11 = parseFloat(match6[2]);
                        let num62 = 0;
                        if (parsed11 >= 0) {
                          let num64 = 1;
                          if (parsed11 <= 100) {
                            num64 = parsed11 / 100;
                          }
                          num62 = num64;
                        }
                        const _parseFloat12 = parseFloat;
                        const parsed12 = parseFloat(match6[3]);
                        let num65 = 0;
                        if (parsed12 >= 0) {
                          let num67 = 1;
                          if (parsed12 <= 100) {
                            num67 = parsed12 / 100;
                          }
                          num65 = num67;
                        }
                        tmp11 = (255 | hslToRgb((result + 360) % 360 / 360, num62, num65)) >>> 0;
                      } else {
                        const hsla = tmp73.hsla;
                        const match7 = hsla.exec(num);
                        if (match7) {
                          let tmp33;
                          if (undefined !== match7[6]) {
                            const _parseFloat6 = parseFloat;
                            const _parseFloat7 = parseFloat;
                            const result1 = parseFloat(match7[6]) % 360;
                            const parsed13 = parseFloat(match7[7]);
                            let num50 = 0;
                            if (parsed13 >= 0) {
                              let num52 = 1;
                              if (parsed13 <= 100) {
                                num52 = parsed13 / 100;
                              }
                              num50 = num52;
                            }
                            const _parseFloat8 = parseFloat;
                            const parsed14 = parseFloat(match7[8]);
                            let num53 = 0;
                            if (parsed14 >= 0) {
                              let num55 = 1;
                              if (parsed14 <= 100) {
                                num55 = parsed14 / 100;
                              }
                              num53 = num55;
                            }
                            const _parseFloat9 = parseFloat;
                            const tmp34Result = hslToRgb((result1 + 360) % 360 / 360, num50, num53);
                            const parsed15 = parseFloat(match7[9]);
                            let num56 = 0;
                            if (parsed15 >= 0) {
                              let num59 = 255;
                              if (parsed15 <= 1) {
                                const _Math6 = Math;
                                num59 = Math.round(255 * parsed15);
                              }
                              num56 = num59;
                            }
                            tmp33 = (tmp34Result | num56) >>> 0;
                          } else {
                            const _parseFloat15 = parseFloat;
                            const _parseFloat16 = parseFloat;
                            const result2 = parseFloat(match7[2]) % 360;
                            const parsed16 = parseFloat(match7[3]);
                            let num40 = 0;
                            if (parsed16 >= 0) {
                              let num39 = 1;
                              if (parsed16 <= 100) {
                                num39 = parsed16 / 100;
                              }
                              num40 = num39;
                            }
                            const _parseFloat4 = parseFloat;
                            const parsed17 = parseFloat(match7[4]);
                            let num41 = 0;
                            if (parsed17 >= 0) {
                              let num43 = 1;
                              if (parsed17 <= 100) {
                                num43 = parsed17 / 100;
                              }
                              num41 = num43;
                            }
                            const _parseFloat5 = parseFloat;
                            const tmp95Result = hslToRgb((result2 + 360) % 360 / 360, num40, num41);
                            const parsed18 = parseFloat(match7[5]);
                            let num44 = 0;
                            if (parsed18 >= 0) {
                              let num47 = 255;
                              if (parsed18 <= 1) {
                                const _Math5 = Math;
                                num47 = Math.round(255 * parsed18);
                              }
                              num44 = num47;
                            }
                            tmp33 = (tmp95Result | num44) >>> 0;
                          }
                          tmp11 = tmp33;
                        } else {
                          const hwb = tmp73.hwb;
                          const match8 = hwb.exec(num);
                          tmp11 = null;
                          if (match8) {
                            let tmp28;
                            const _parseFloat = parseFloat;
                            const _parseFloat2 = parseFloat;
                            const result3 = parseFloat(match8[1]) % 360;
                            const parsed19 = parseFloat(match8[2]);
                            let num3 = 0;
                            if (parsed19 >= 0) {
                              let num5 = 1;
                              if (parsed19 <= 100) {
                                num5 = parsed19 / 100;
                              }
                              num3 = num5;
                            }
                            const _parseFloat3 = parseFloat;
                            const parsed20 = parseFloat(match8[3]);
                            let num6 = 0;
                            if (parsed20 >= 0) {
                              let num8 = 1;
                              if (parsed20 <= 100) {
                                num8 = parsed20 / 100;
                              }
                              num6 = num8;
                            }
                            const sum = num3 + num6;
                            if (1 <= sum) {
                              const _Math4 = Math;
                              const rounded = Math.round(255 * num3 / sum);
                              tmp28 = rounded << 24 | rounded << 16 | rounded << 8;
                            } else {
                              let num12;
                              let num18;
                              let num24;
                              const result4 = (result3 + 360) % 360 / 360;
                              const sum1 = result4 + 0.3333333333333333;
                              let sum2 = sum1;
                              if (sum1 < 0) {
                                sum2 = sum1 + 1;
                              }
                              let diff = sum2;
                              if (1 < sum2) {
                                diff = sum2 - 1;
                              }
                              if (diff < 0.16666666666666666) {
                                num12 = 6 * diff;
                              } else {
                                num12 = 1;
                                if (diff >= 0.5) {
                                  let num14 = 0;
                                  if (diff < 0.6666666666666666) {
                                    num14 = (0.6666666666666666 - diff) * 6;
                                  }
                                  num12 = num14;
                                }
                              }
                              let sum3 = result4;
                              if (result4 < 0) {
                                sum3 = result4 + 1;
                              }
                              let diff1 = sum3;
                              if (1 < sum3) {
                                diff1 = sum3 - 1;
                              }
                              if (diff1 < 0.16666666666666666) {
                                num18 = 6 * diff1;
                              } else {
                                num18 = 1;
                                if (diff1 >= 0.5) {
                                  let num20 = 0;
                                  if (diff1 < 0.6666666666666666) {
                                    num20 = (0.6666666666666666 - diff1) * 6;
                                  }
                                  num18 = num20;
                                }
                              }
                              const diff2 = result4 - 0.3333333333333333;
                              let sum4 = diff2;
                              if (diff2 < 0) {
                                sum4 = diff2 + 1;
                              }
                              let diff3 = sum4;
                              if (1 < sum4) {
                                diff3 = sum4 - 1;
                              }
                              if (diff3 < 0.16666666666666666) {
                                num24 = 6 * diff3;
                              } else {
                                num24 = 1;
                                if (diff3 >= 0.5) {
                                  let num26 = 0;
                                  if (diff3 < 0.6666666666666666) {
                                    num26 = (0.6666666666666666 - diff3) * 6;
                                  }
                                  num24 = num26;
                                }
                              }
                              const diff4 = 1 - num3 - num6;
                              const _Math = Math;
                              const sum5 = num18 * diff4 + num3;
                              const _Math2 = Math;
                              const _Math3 = Math;
                              const tmp26 = Math.round(255 * (num12 * diff4 + num3)) << 24;
                              const tmp27 = Math.round(255 * sum5) << 16;
                              tmp28 = tmp26 | tmp27 | Math.round(255 * (num24 * diff4 + num3)) << 8;
                            }
                            tmp11 = (255 | tmp28) >>> 0;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            tmp2 = tmp11;
          }
          return tmp2;
        }
        case "aliceblue":
        {
          tmp2 = 4042850303;
          break;
        }
        case "antiquewhite":
        {
          tmp2 = 4209760255;
          break;
        }
        case "aqua":
        {
          tmp2 = 16777215;
          break;
        }
        case "cyan":
        {
          tmp2 = 16777215;
          break;
        }
        case "aquamarine":
        {
          tmp2 = 2147472639;
          break;
        }
        case "azure":
        {
          tmp2 = 4043309055;
          break;
        }
        case "beige":
        {
          tmp2 = 4126530815;
          break;
        }
        case "bisque":
        {
          tmp2 = 4293182719;
          break;
        }
        case "black":
        {
          tmp2 = 255;
          break;
        }
        case "blanchedalmond":
        {
          tmp2 = 4293643775;
          break;
        }
        case "blue":
        {
          tmp2 = 65535;
          break;
        }
        case "blueviolet":
        {
          tmp2 = 2318131967;
          break;
        }
        case "brown":
        {
          tmp2 = 2771004159;
          break;
        }
        case "burlywood":
        {
          tmp2 = 3736635391;
          break;
        }
        case "burntsienna":
        {
          tmp2 = 3934150143;
          break;
        }
        case "cadetblue":
        {
          tmp2 = 1604231423;
          break;
        }
        case "chartreuse":
        {
          tmp2 = 2147418367;
          break;
        }
        case "chocolate":
        {
          tmp2 = 3530104575;
          break;
        }
        case "coral":
        {
          tmp2 = 4286533887;
          break;
        }
        case "cornflowerblue":
        {
          tmp2 = 1687547391;
          break;
        }
        case "cornsilk":
        {
          tmp2 = 4294499583;
          break;
        }
        case "crimson":
        {
          tmp2 = 3692313855;
          break;
        }
        case "darkblue":
        {
          tmp2 = 35839;
          break;
        }
        case "darkcyan":
        {
          tmp2 = 9145343;
          break;
        }
        case "darkgoldenrod":
        {
          tmp2 = 3095792639;
          break;
        }
        case "darkgray":
        {
          tmp2 = 2846468607;
          break;
        }
        case "darkgrey":
        {
          tmp2 = 2846468607;
          break;
        }
        case "darkgreen":
        {
          tmp2 = 6553855;
          break;
        }
        case "darkkhaki":
        {
          tmp2 = 3182914559;
          break;
        }
        case "darkmagenta":
        {
          tmp2 = 2332068863;
          break;
        }
        case "darkolivegreen":
        {
          tmp2 = 1433087999;
          break;
        }
        case "darkorange":
        {
          tmp2 = 4287365375;
          break;
        }
        case "darkorchid":
        {
          tmp2 = 2570243327;
          break;
        }
        case "darkred":
        {
          tmp2 = 2332033279;
          break;
        }
        case "darksalmon":
        {
          tmp2 = 3918953215;
          break;
        }
        case "darkseagreen":
        {
          tmp2 = 2411499519;
          break;
        }
        case "darkslateblue":
        {
          tmp2 = 1211993087;
          break;
        }
        case "darkslategray":
        {
          tmp2 = 793726975;
          break;
        }
        case "darkslategrey":
        {
          tmp2 = 793726975;
          break;
        }
        case "darkturquoise":
        {
          tmp2 = 13554175;
          break;
        }
        case "darkviolet":
        {
          tmp2 = 2483082239;
          break;
        }
        case "deeppink":
        {
          tmp2 = 4279538687;
          break;
        }
        case "deepskyblue":
        {
          tmp2 = 12582911;
          break;
        }
        case "dimgray":
        {
          tmp2 = 1768516095;
          break;
        }
        case "dimgrey":
        {
          tmp2 = 1768516095;
          break;
        }
        case "dodgerblue":
        {
          tmp2 = 512819199;
          break;
        }
        case "firebrick":
        {
          tmp2 = 2988581631;
          break;
        }
        case "floralwhite":
        {
          tmp2 = 4294635775;
          break;
        }
        case "forestgreen":
        {
          tmp2 = 579543807;
          break;
        }
        case "fuchsia":
        {
          tmp2 = 4278255615;
          break;
        }
        case "magenta":
        {
          tmp2 = 4278255615;
          break;
        }
        case "gainsboro":
        {
          tmp2 = 3705462015;
          break;
        }
        case "ghostwhite":
        {
          tmp2 = 4177068031;
          break;
        }
        case "gold":
        {
          tmp2 = 4292280575;
          break;
        }
        case "goldenrod":
        {
          tmp2 = 3668254975;
          break;
        }
        case "gray":
        {
          tmp2 = 2155905279;
          break;
        }
        case "grey":
        {
          tmp2 = 2155905279;
          break;
        }
        case "green":
        {
          tmp2 = 8388863;
          break;
        }
        case "greenyellow":
        {
          tmp2 = 2919182335;
          break;
        }
        case "honeydew":
        {
          tmp2 = 4043305215;
          break;
        }
        case "hotpink":
        {
          tmp2 = 4285117695;
          break;
        }
        case "indianred":
        {
          tmp2 = 3445382399;
          break;
        }
        case "indigo":
        {
          tmp2 = 1258324735;
          break;
        }
        case "ivory":
        {
          tmp2 = 4294963455;
          break;
        }
        case "khaki":
        {
          tmp2 = 4041641215;
          break;
        }
        case "lavender":
        {
          tmp2 = 3873897215;
          break;
        }
        case "lavenderblush":
        {
          tmp2 = 4293981695;
          break;
        }
        case "lawngreen":
        {
          tmp2 = 2096890111;
          break;
        }
        case "lemonchiffon":
        {
          tmp2 = 4294626815;
          break;
        }
        case "lightblue":
        {
          tmp2 = 2916673279;
          break;
        }
        case "lightcoral":
        {
          tmp2 = 4034953471;
          break;
        }
        case "lightcyan":
        {
          tmp2 = 3774873599;
          break;
        }
        case "lightgoldenrodyellow":
        {
          tmp2 = 4210742015;
          break;
        }
        case "lightgray":
        {
          tmp2 = 3553874943;
          break;
        }
        case "lightgrey":
        {
          tmp2 = 3553874943;
          break;
        }
        case "lightgreen":
        {
          tmp2 = 2431553791;
          break;
        }
        case "lightpink":
        {
          tmp2 = 4290167295;
          break;
        }
        case "lightsalmon":
        {
          tmp2 = 4288707327;
          break;
        }
        case "lightseagreen":
        {
          tmp2 = 548580095;
          break;
        }
        case "lightskyblue":
        {
          tmp2 = 2278488831;
          break;
        }
        case "lightslategray":
        {
          tmp2 = 2005441023;
          break;
        }
        case "lightslategrey":
        {
          tmp2 = 2005441023;
          break;
        }
        case "lightsteelblue":
        {
          tmp2 = 2965692159;
          break;
        }
        case "lightyellow":
        {
          tmp2 = 4294959359;
          break;
        }
        case "lime":
        {
          tmp2 = 16711935;
          break;
        }
        case "limegreen":
        {
          tmp2 = 852308735;
          break;
        }
        case "linen":
        {
          tmp2 = 4210091775;
          break;
        }
        case "maroon":
        {
          tmp2 = 2147483903;
          break;
        }
        case "mediumaquamarine":
        {
          tmp2 = 1724754687;
          break;
        }
        case "mediumblue":
        {
          tmp2 = 52735;
          break;
        }
        case "mediumorchid":
        {
          tmp2 = 3126187007;
          break;
        }
        case "mediumpurple":
        {
          tmp2 = 2473647103;
          break;
        }
        case "mediumseagreen":
        {
          tmp2 = 1018393087;
          break;
        }
        case "mediumslateblue":
        {
          tmp2 = 2070474495;
          break;
        }
        case "mediumspringgreen":
        {
          tmp2 = 16423679;
          break;
        }
        case "mediumturquoise":
        {
          tmp2 = 1221709055;
          break;
        }
        case "mediumvioletred":
        {
          tmp2 = 3340076543;
          break;
        }
        case "midnightblue":
        {
          tmp2 = 421097727;
          break;
        }
        case "mintcream":
        {
          tmp2 = 4127193855;
          break;
        }
        case "mistyrose":
        {
          tmp2 = 4293190143;
          break;
        }
        case "moccasin":
        {
          tmp2 = 4293178879;
          break;
        }
        case "navajowhite":
        {
          tmp2 = 4292783615;
          break;
        }
        case "navy":
        {
          tmp2 = 33023;
          break;
        }
        case "oldlace":
        {
          tmp2 = 4260751103;
          break;
        }
        case "olive":
        {
          tmp2 = 2155872511;
          break;
        }
        case "olivedrab":
        {
          tmp2 = 1804477439;
          break;
        }
        case "orange":
        {
          tmp2 = 4289003775;
          break;
        }
        case "orangered":
        {
          tmp2 = 4282712319;
          break;
        }
        case "orchid":
        {
          tmp2 = 3664828159;
          break;
        }
        case "palegoldenrod":
        {
          tmp2 = 4008225535;
          break;
        }
        case "palegreen":
        {
          tmp2 = 2566625535;
          break;
        }
        case "paleturquoise":
        {
          tmp2 = 2951671551;
          break;
        }
        case "palevioletred":
        {
          tmp2 = 3681588223;
          break;
        }
        case "papayawhip":
        {
          tmp2 = 4293907967;
          break;
        }
        case "peachpuff":
        {
          tmp2 = 4292524543;
          break;
        }
        case "peru":
        {
          tmp2 = 3448061951;
          break;
        }
        case "pink":
        {
          tmp2 = 4290825215;
          break;
        }
        case "plum":
        {
          tmp2 = 3718307327;
          break;
        }
        case "powderblue":
        {
          tmp2 = 2967529215;
          break;
        }
        case "purple":
        {
          tmp2 = 2147516671;
          break;
        }
        case "rebeccapurple":
        {
          tmp2 = 1714657791;
          break;
        }
        case "red":
        {
          tmp2 = 4278190335;
          break;
        }
        case "rosybrown":
        {
          tmp2 = 3163525119;
          break;
        }
        case "royalblue":
        {
          tmp2 = 1097458175;
          break;
        }
        case "saddlebrown":
        {
          tmp2 = 2336560127;
          break;
        }
        case "salmon":
        {
          tmp2 = 4202722047;
          break;
        }
        case "sandybrown":
        {
          tmp2 = 4104413439;
          break;
        }
        case "seagreen":
        {
          tmp2 = 780883967;
          break;
        }
        case "seashell":
        {
          tmp2 = 4294307583;
          break;
        }
        case "sienna":
        {
          tmp2 = 2689740287;
          break;
        }
        case "silver":
        {
          tmp2 = 3233857791;
          break;
        }
        case "skyblue":
        {
          tmp2 = 2278484991;
          break;
        }
        case "slateblue":
        {
          tmp2 = 1784335871;
          break;
        }
        case "slategray":
        {
          tmp2 = 1887473919;
          break;
        }
        case "slategrey":
        {
          tmp2 = 1887473919;
          break;
        }
        case "snow":
        {
          tmp2 = 4294638335;
          break;
        }
        case "springgreen":
        {
          tmp2 = 16744447;
          break;
        }
        case "steelblue":
        {
          tmp2 = 1182971135;
          break;
        }
        case "tan":
        {
          tmp2 = 3535047935;
          break;
        }
        case "teal":
        {
          tmp2 = 8421631;
          break;
        }
        case "thistle":
        {
          tmp2 = 3636451583;
          break;
        }
        case "tomato":
        {
          tmp2 = 4284696575;
          break;
        }
        case "turquoise":
        {
          tmp2 = 1088475391;
          break;
        }
        case "violet":
        {
          tmp2 = 4001558271;
          break;
        }
        case "wheat":
        {
          tmp2 = 4125012991;
          break;
        }
        case "white":
        {
          tmp2 = 4294967295;
          break;
        }
        case "whitesmoke":
        {
          tmp2 = 4126537215;
          break;
        }
        case "yellow":
        {
          tmp2 = 4294902015;
          break;
        }
        case "yellowgreen":
        {
          break;
        }
        default:
        {
          tmp2 = null;
          break;
        }
      }
    }
  }
};
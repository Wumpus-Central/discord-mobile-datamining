// _runtime/metro/08315__.js
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
  return tmp17 | (Math.round(255 * sum5) << 16) | (Math.round(255 * sum8) << 8);
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
    let tmp73 = null;
    if (num >>> 0 === num) {
      tmp73 = null;
      if (num >= 0) {
        tmp73 = null;
        if (num <= 4294967295) {
          tmp73 = num;
        }
      }
    }
    return tmp73;
  } else if (typeof num !== "string") {
    return null;
  } else {
    let tmp74 = obj;
    if (undefined === obj) {
      obj = { rgb: null, rgba: null, hsl: null, hsla: null, hwb: null, hex3: null, hex4: null, hex6: null, hex8: null };
      const _RegExp = RegExp;
      const regExp = new RegExp("rgb" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+"));
      obj.rgb = regExp;
      const _RegExp2 = RegExp;
      const tmp82 = commaSeparatedCall(
        "[-+]?\\d*\\.?\\d+",
        "[-+]?\\d*\\.?\\d+",
        "[-+]?\\d*\\.?\\d+",
        "[-+]?\\d*\\.?\\d+",
      );
      const _HermesInternal = HermesInternal;
      const regExp1 = new RegExp(
        "rgba(" +
          tmp82 +
          "|" +
          callWithSlashSeparator("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+") +
          ")",
      );
      obj.rgba = regExp1;
      const _RegExp3 = RegExp;
      const regExp2 = new RegExp("hsl" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%"));
      obj.hsl = regExp2;
      const _RegExp4 = RegExp;
      const tmp93 = commaSeparatedCall(
        "[-+]?\\d*\\.?\\d+",
        "[-+]?\\d*\\.?\\d+%",
        "[-+]?\\d*\\.?\\d+%",
        "[-+]?\\d*\\.?\\d+",
      );
      const _HermesInternal2 = HermesInternal;
      const regExp3 = new RegExp(
        "hsla(" +
          tmp93 +
          "|" +
          callWithSlashSeparator("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+") +
          ")",
      );
      obj.hsla = regExp3;
      const _RegExp5 = RegExp;
      const regExp4 = new RegExp("hwb" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%"));
      obj.hwb = regExp4;
      obj.hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
      obj.hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
      obj.hex6 = /^#([0-9a-fA-F]{6})$/;
      obj.hex8 = /^#([0-9a-fA-F]{8})$/;
      tmp74 = obj;
    }
    const hex6 = tmp74.hex6;
    const match = hex6.exec(num);
    if (match) {
      const _parseInt12 = parseInt;
      return parseInt(match[1] + "ff", 16) >>> 0;
    } else {
      let tmp2 = 2597139199;
      switch (num) {
        case "transparent":
          tmp2 = 0;
          if (null != tmp2) {
            return tmp2;
          } else {
            const rgb = tmp74.rgb;
            let num111 = rgb.exec(num);
            if (num111) {
              const _parseInt9 = parseInt;
              const parsed = parseInt(num111[1], 10);
              let num105 = 0;
              if (parsed >= 0) {
                let num106 = 255;
                if (parsed <= 255) {
                  num106 = parsed;
                }
                num105 = num106;
              }
              const _parseInt10 = parseInt;
              const parsed1 = parseInt(num111[2], 10);
              let num108 = 0;
              if (parsed1 >= 0) {
                let num109 = 255;
                if (parsed1 <= 255) {
                  num109 = parsed1;
                }
                num108 = num109;
              }
              num111 = num111[3];
              const _parseInt11 = parseInt;
              const parsed2 = parseInt(num111, 10);
              let num112 = 0;
              if (parsed2 >= 0) {
                num111 = 255;
                if (parsed2 <= 255) {
                  num111 = parsed2;
                }
                num112 = num111;
              }
              let tmp9 = ((num105 << 24) | (num108 << 16) | (num112 << 8) | 255) >>> 0;
              const tmp66 = num105 << 24;
              const tmp68 = num108 << 16;
            } else {
              const rgba = tmp74.rgba;
              num = rgba.exec(num);
              if (num) {
                if (undefined !== num[6]) {
                  const _parseInt6 = parseInt;
                  const parsed3 = parseInt(num[6], 10);
                  let num91 = 0;
                  if (parsed3 >= 0) {
                    let num92 = 255;
                    if (parsed3 <= 255) {
                      num92 = parsed3;
                    }
                    num91 = num92;
                  }
                  const _parseInt7 = parseInt;
                  const parsed4 = parseInt(num[7], 10);
                  let num94 = 0;
                  if (parsed4 >= 0) {
                    let num95 = 255;
                    if (parsed4 <= 255) {
                      num95 = parsed4;
                    }
                    num94 = num95;
                  }
                  const _parseInt8 = parseInt;
                  const parsed5 = parseInt(num[8], 10);
                  let num97 = 0;
                  if (parsed5 >= 0) {
                    let num98 = 255;
                    if (parsed5 <= 255) {
                      num98 = parsed5;
                    }
                    num97 = num98;
                  }
                  const _parseFloat14 = parseFloat;
                  const parsed6 = parseFloat(num[9]);
                  num = 0;
                  if (parsed6 >= 0) {
                    let num102 = 255;
                    if (parsed6 <= 1) {
                      const _Math8 = Math;
                      num102 = Math.round(255 * parsed6);
                    }
                    num = num102;
                  }
                  let tmp54 = ((num91 << 24) | (num94 << 16) | (num97 << 8) | num) >>> 0;
                  const tmp57 = num91 << 24;
                  const tmp59 = num94 << 16;
                  const tmp61 = num97 << 8;
                } else {
                  const _parseInt13 = parseInt;
                  const parsed7 = parseInt(num[2], 10);
                  let num77 = 0;
                  if (parsed7 >= 0) {
                    let num76 = 255;
                    if (parsed7 <= 255) {
                      num76 = parsed7;
                    }
                    num77 = num76;
                  }
                  const _parseInt4 = parseInt;
                  const parsed8 = parseInt(num[3], 10);
                  let num79 = 0;
                  if (parsed8 >= 0) {
                    let num80 = 255;
                    if (parsed8 <= 255) {
                      num80 = parsed8;
                    }
                    num79 = num80;
                  }
                  const _parseInt5 = parseInt;
                  const parsed9 = parseInt(num[4], 10);
                  let num82 = 0;
                  if (parsed9 >= 0) {
                    let num83 = 255;
                    if (parsed9 <= 255) {
                      num83 = parsed9;
                    }
                    num82 = num83;
                  }
                  const _parseFloat13 = parseFloat;
                  const parsed10 = parseFloat(num[5]);
                  let num85 = 0;
                  if (parsed10 >= 0) {
                    let num88 = 255;
                    if (parsed10 <= 1) {
                      const _Math7 = Math;
                      num88 = Math.round(255 * parsed10);
                    }
                    num85 = num88;
                  }
                  tmp54 = ((num77 << 24) | (num79 << 16) | (num82 << 8) | num85) >>> 0;
                  const tmp48 = num77 << 24;
                  const tmp50 = num79 << 16;
                  const tmp52 = num82 << 8;
                }
              } else {
                const hex3 = tmp74.hex3;
                const match1 = hex3.exec(num);
                if (match1) {
                  const _parseInt3 = parseInt;
                  tmp9 =
                    parseInt(match1[1] + match1[1] + match1[2] + match1[2] + match1[3] + match1[3] + "ff", 16) >>> 0;
                } else {
                  const hex8 = tmp74.hex8;
                  const match2 = hex8.exec(num);
                  if (match2) {
                    const _parseInt2 = parseInt;
                    tmp9 = parseInt(match2[1], 16) >>> 0;
                  } else {
                    const hex4 = tmp74.hex4;
                    const match3 = hex4.exec(num);
                    if (match3) {
                      const _parseInt = parseInt;
                      tmp9 =
                        parseInt(
                          match3[1] + match3[1] + match3[2] + match3[2] + match3[3] + match3[3] + match3[4] + match3[4],
                          16,
                        ) >>> 0;
                    } else {
                      const hsl = tmp74.hsl;
                      const match4 = hsl.exec(num);
                      if (match4) {
                        const _parseFloat10 = parseFloat;
                        const _parseFloat11 = parseFloat;
                        const result = parseFloat(match4[1]) % 360;
                        const parsed11 = parseFloat(match4[2]);
                        let num63 = 0;
                        if (parsed11 >= 0) {
                          let num65 = 1;
                          if (parsed11 <= 100) {
                            num65 = parsed11 / 100;
                          }
                          num63 = num65;
                        }
                        const _parseFloat12 = parseFloat;
                        const parsed12 = parseFloat(match4[3]);
                        let num66 = 0;
                        if (parsed12 >= 0) {
                          let num68 = 1;
                          if (parsed12 <= 100) {
                            num68 = parsed12 / 100;
                          }
                          num66 = num68;
                        }
                        tmp9 = (255 | hslToRgb(((result + 360) % 360) / 360, num63, num66)) >>> 0;
                      } else {
                        const hsla = tmp74.hsla;
                        let num2 = hsla.exec(num);
                        if (num2) {
                          if (undefined !== num2[6]) {
                            const _parseFloat6 = parseFloat;
                            const _parseFloat7 = parseFloat;
                            const result1 = parseFloat(num2[6]) % 360;
                            const parsed13 = parseFloat(num2[7]);
                            let num52 = 0;
                            if (parsed13 >= 0) {
                              let num54 = 1;
                              if (parsed13 <= 100) {
                                num54 = parsed13 / 100;
                              }
                              num52 = num54;
                            }
                            const _parseFloat8 = parseFloat;
                            const parsed14 = parseFloat(num2[8]);
                            let num55 = 0;
                            if (parsed14 >= 0) {
                              let num57 = 1;
                              if (parsed14 <= 100) {
                                num57 = parsed14 / 100;
                              }
                              num55 = num57;
                            }
                            const _parseFloat9 = parseFloat;
                            const parsed15 = parseFloat(num2[9]);
                            num2 = 0;
                            if (parsed15 >= 0) {
                              let num60 = 255;
                              if (parsed15 <= 1) {
                                const _Math6 = Math;
                                num60 = Math.round(255 * parsed15);
                              }
                              num2 = num60;
                            }
                            let tmp31 = (hslToRgb(((result1 + 360) % 360) / 360, num52, num55) | num2) >>> 0;
                            const tmp32Result = hslToRgb(((result1 + 360) % 360) / 360, num52, num55);
                          } else {
                            const _parseFloat15 = parseFloat;
                            const _parseFloat16 = parseFloat;
                            const result2 = parseFloat(num2[2]) % 360;
                            const parsed16 = parseFloat(num2[3]);
                            let num42 = 0;
                            if (parsed16 >= 0) {
                              let num41 = 1;
                              if (parsed16 <= 100) {
                                num41 = parsed16 / 100;
                              }
                              num42 = num41;
                            }
                            const _parseFloat4 = parseFloat;
                            const parsed17 = parseFloat(num2[4]);
                            let num43 = 0;
                            if (parsed17 >= 0) {
                              let num45 = 1;
                              if (parsed17 <= 100) {
                                num45 = parsed17 / 100;
                              }
                              num43 = num45;
                            }
                            const _parseFloat5 = parseFloat;
                            const parsed18 = parseFloat(num2[5]);
                            let num46 = 0;
                            if (parsed18 >= 0) {
                              let num49 = 255;
                              if (parsed18 <= 1) {
                                const _Math5 = Math;
                                num49 = Math.round(255 * parsed18);
                              }
                              num46 = num49;
                            }
                            tmp31 = (hslToRgb(((result2 + 360) % 360) / 360, num42, num43) | num46) >>> 0;
                            const tmp105Result = hslToRgb(((result2 + 360) % 360) / 360, num42, num43);
                          }
                        } else {
                          const hwb = tmp74.hwb;
                          const match5 = hwb.exec(num);
                          if (match5) {
                            let roundResult = globalThis;
                            const _parseFloat = parseFloat;
                            const _parseFloat2 = parseFloat;
                            const result3 = parseFloat(match5[1]) % 360;
                            const parsed19 = parseFloat(match5[2]);
                            let num5 = 0;
                            if (parsed19 >= 0) {
                              let num7 = 1;
                              if (parsed19 <= 100) {
                                num7 = parsed19 / 100;
                              }
                              num5 = num7;
                            }
                            const _parseFloat3 = parseFloat;
                            const parsed20 = parseFloat(match5[3]);
                            let num8 = 0;
                            if (parsed20 >= 0) {
                              let num10 = 1;
                              if (parsed20 <= 100) {
                                num10 = parsed20 / 100;
                              }
                              num8 = num10;
                            }
                            let sum = num5 + num8;
                            if (1 <= sum) {
                              const _Math4 = roundResult.Math;
                              roundResult = _Math4.round((255 * num5) / sum);
                              num5 = roundResult << 24;
                              sum = roundResult << 8;
                              let tmp26 = num5 | (roundResult << 16) | sum;
                            } else {
                              const result4 = ((result3 + 360) % 360) / 360;
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
                                let num14 = 6 * diff;
                              } else {
                                num14 = 1;
                                if (diff >= 0.5) {
                                  let num16 = 0;
                                  if (diff < 0.6666666666666666) {
                                    num16 = (0.6666666666666666 - diff) * 6;
                                  }
                                  num14 = num16;
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
                                let num20 = 6 * diff1;
                              } else {
                                num20 = 1;
                                if (diff1 >= 0.5) {
                                  let num22 = 0;
                                  if (diff1 < 0.6666666666666666) {
                                    num22 = (0.6666666666666666 - diff1) * 6;
                                  }
                                  num20 = num22;
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
                                let num26 = 6 * diff3;
                              } else {
                                num26 = 1;
                                if (diff3 >= 0.5) {
                                  let num28 = 0;
                                  if (diff3 < 0.6666666666666666) {
                                    num28 = (0.6666666666666666 - diff3) * 6;
                                  }
                                  num26 = num28;
                                }
                              }
                              const diff4 = 1 - num5 - num8;
                              const _Math = Math;
                              const sum5 = num20 * diff4 + num5;
                              const _Math2 = Math;
                              const _Math3 = Math;
                              const tmp24 = Math.round(255 * (num14 * diff4 + num5)) << 24;
                              tmp26 =
                                tmp24 |
                                (Math.round(255 * sum5) << 16) |
                                (Math.round(255 * (num26 * diff4 + num5)) << 8);
                              const tmp25 = Math.round(255 * sum5) << 16;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          break;
        case "aliceblue":
          tmp2 = 4042850303;
          break;
        case "antiquewhite":
          tmp2 = 4209760255;
          break;
        case "aqua":
          tmp2 = 16777215;
          break;
        case "cyan":
          tmp2 = 16777215;
          break;
        case "aquamarine":
          tmp2 = 2147472639;
          break;
        case "azure":
          tmp2 = 4043309055;
          break;
        case "beige":
          tmp2 = 4126530815;
          break;
        case "bisque":
          tmp2 = 4293182719;
          break;
        case "black":
          tmp2 = 255;
          break;
        case "blanchedalmond":
          tmp2 = 4293643775;
          break;
        case "blue":
          tmp2 = 65535;
          break;
        case "blueviolet":
          tmp2 = 2318131967;
          break;
        case "brown":
          tmp2 = 2771004159;
          break;
        case "burlywood":
          tmp2 = 3736635391;
          break;
        case "burntsienna":
          tmp2 = 3934150143;
          break;
        case "cadetblue":
          tmp2 = 1604231423;
          break;
        case "chartreuse":
          tmp2 = 2147418367;
          break;
        case "chocolate":
          tmp2 = 3530104575;
          break;
        case "coral":
          tmp2 = 4286533887;
          break;
        case "cornflowerblue":
          tmp2 = 1687547391;
          break;
        case "cornsilk":
          tmp2 = 4294499583;
          break;
        case "crimson":
          tmp2 = 3692313855;
          break;
        case "darkblue":
          tmp2 = 35839;
          break;
        case "darkcyan":
          tmp2 = 9145343;
          break;
        case "darkgoldenrod":
          tmp2 = 3095792639;
          break;
        case "darkgray":
          tmp2 = 2846468607;
          break;
        case "darkgrey":
          tmp2 = 2846468607;
          break;
        case "darkgreen":
          tmp2 = 6553855;
          break;
        case "darkkhaki":
          tmp2 = 3182914559;
          break;
        case "darkmagenta":
          tmp2 = 2332068863;
          break;
        case "darkolivegreen":
          tmp2 = 1433087999;
          break;
        case "darkorange":
          tmp2 = 4287365375;
          break;
        case "darkorchid":
          tmp2 = 2570243327;
          break;
        case "darkred":
          tmp2 = 2332033279;
          break;
        case "darksalmon":
          tmp2 = 3918953215;
          break;
        case "darkseagreen":
          tmp2 = 2411499519;
          break;
        case "darkslateblue":
          tmp2 = 1211993087;
          break;
        case "darkslategray":
          tmp2 = 793726975;
          break;
        case "darkslategrey":
          tmp2 = 793726975;
          break;
        case "darkturquoise":
          tmp2 = 13554175;
          break;
        case "darkviolet":
          tmp2 = 2483082239;
          break;
        case "deeppink":
          tmp2 = 4279538687;
          break;
        case "deepskyblue":
          tmp2 = 12582911;
          break;
        case "dimgray":
          tmp2 = 1768516095;
          break;
        case "dimgrey":
          tmp2 = 1768516095;
          break;
        case "dodgerblue":
          tmp2 = 512819199;
          break;
        case "firebrick":
          tmp2 = 2988581631;
          break;
        case "floralwhite":
          tmp2 = 4294635775;
          break;
        case "forestgreen":
          tmp2 = 579543807;
          break;
        case "fuchsia":
          tmp2 = 4278255615;
          break;
        case "magenta":
          tmp2 = 4278255615;
          break;
        case "gainsboro":
          tmp2 = 3705462015;
          break;
        case "ghostwhite":
          tmp2 = 4177068031;
          break;
        case "gold":
          tmp2 = 4292280575;
          break;
        case "goldenrod":
          tmp2 = 3668254975;
          break;
        case "gray":
          tmp2 = 2155905279;
          break;
        case "grey":
          tmp2 = 2155905279;
          break;
        case "green":
          tmp2 = 8388863;
          break;
        case "greenyellow":
          tmp2 = 2919182335;
          break;
        case "honeydew":
          tmp2 = 4043305215;
          break;
        case "hotpink":
          tmp2 = 4285117695;
          break;
        case "indianred":
          tmp2 = 3445382399;
          break;
        case "indigo":
          tmp2 = 1258324735;
          break;
        case "ivory":
          tmp2 = 4294963455;
          break;
        case "khaki":
          tmp2 = 4041641215;
          break;
        case "lavender":
          tmp2 = 3873897215;
          break;
        case "lavenderblush":
          tmp2 = 4293981695;
          break;
        case "lawngreen":
          tmp2 = 2096890111;
          break;
        case "lemonchiffon":
          tmp2 = 4294626815;
          break;
        case "lightblue":
          tmp2 = 2916673279;
          break;
        case "lightcoral":
          tmp2 = 4034953471;
          break;
        case "lightcyan":
          tmp2 = 3774873599;
          break;
        case "lightgoldenrodyellow":
          tmp2 = 4210742015;
          break;
        case "lightgray":
          tmp2 = 3553874943;
          break;
        case "lightgrey":
          tmp2 = 3553874943;
          break;
        case "lightgreen":
          tmp2 = 2431553791;
          break;
        case "lightpink":
          tmp2 = 4290167295;
          break;
        case "lightsalmon":
          tmp2 = 4288707327;
          break;
        case "lightseagreen":
          tmp2 = 548580095;
          break;
        case "lightskyblue":
          tmp2 = 2278488831;
          break;
        case "lightslategray":
          tmp2 = 2005441023;
          break;
        case "lightslategrey":
          tmp2 = 2005441023;
          break;
        case "lightsteelblue":
          tmp2 = 2965692159;
          break;
        case "lightyellow":
          tmp2 = 4294959359;
          break;
        case "lime":
          tmp2 = 16711935;
          break;
        case "limegreen":
          tmp2 = 852308735;
          break;
        case "linen":
          tmp2 = 4210091775;
          break;
        case "maroon":
          tmp2 = 2147483903;
          break;
        case "mediumaquamarine":
          tmp2 = 1724754687;
          break;
        case "mediumblue":
          tmp2 = 52735;
          break;
        case "mediumorchid":
          tmp2 = 3126187007;
          break;
        case "mediumpurple":
          tmp2 = 2473647103;
          break;
        case "mediumseagreen":
          tmp2 = 1018393087;
          break;
        case "mediumslateblue":
          tmp2 = 2070474495;
          break;
        case "mediumspringgreen":
          tmp2 = 16423679;
          break;
        case "mediumturquoise":
          tmp2 = 1221709055;
          break;
        case "mediumvioletred":
          tmp2 = 3340076543;
          break;
        case "midnightblue":
          tmp2 = 421097727;
          break;
        case "mintcream":
          tmp2 = 4127193855;
          break;
        case "mistyrose":
          tmp2 = 4293190143;
          break;
        case "moccasin":
          tmp2 = 4293178879;
          break;
        case "navajowhite":
          tmp2 = 4292783615;
          break;
        case "navy":
          tmp2 = 33023;
          break;
        case "oldlace":
          tmp2 = 4260751103;
          break;
        case "olive":
          tmp2 = 2155872511;
          break;
        case "olivedrab":
          tmp2 = 1804477439;
          break;
        case "orange":
          tmp2 = 4289003775;
          break;
        case "orangered":
          tmp2 = 4282712319;
          break;
        case "orchid":
          tmp2 = 3664828159;
          break;
        case "palegoldenrod":
          tmp2 = 4008225535;
          break;
        case "palegreen":
          tmp2 = 2566625535;
          break;
        case "paleturquoise":
          tmp2 = 2951671551;
          break;
        case "palevioletred":
          tmp2 = 3681588223;
          break;
        case "papayawhip":
          tmp2 = 4293907967;
          break;
        case "peachpuff":
          tmp2 = 4292524543;
          break;
        case "peru":
          tmp2 = 3448061951;
          break;
        case "pink":
          tmp2 = 4290825215;
          break;
        case "plum":
          tmp2 = 3718307327;
          break;
        case "powderblue":
          tmp2 = 2967529215;
          break;
        case "purple":
          tmp2 = 2147516671;
          break;
        case "rebeccapurple":
          tmp2 = 1714657791;
          break;
        case "red":
          tmp2 = 4278190335;
          break;
        case "rosybrown":
          tmp2 = 3163525119;
          break;
        case "royalblue":
          tmp2 = 1097458175;
          break;
        case "saddlebrown":
          tmp2 = 2336560127;
          break;
        case "salmon":
          tmp2 = 4202722047;
          break;
        case "sandybrown":
          tmp2 = 4104413439;
          break;
        case "seagreen":
          tmp2 = 780883967;
          break;
        case "seashell":
          tmp2 = 4294307583;
          break;
        case "sienna":
          tmp2 = 2689740287;
          break;
        case "silver":
          tmp2 = 3233857791;
          break;
        case "skyblue":
          tmp2 = 2278484991;
          break;
        case "slateblue":
          tmp2 = 1784335871;
          break;
        case "slategray":
          tmp2 = 1887473919;
          break;
        case "slategrey":
          tmp2 = 1887473919;
          break;
        case "snow":
          tmp2 = 4294638335;
          break;
        case "springgreen":
          tmp2 = 16744447;
          break;
        case "steelblue":
          tmp2 = 1182971135;
          break;
        case "tan":
          tmp2 = 3535047935;
          break;
        case "teal":
          tmp2 = 8421631;
          break;
        case "thistle":
          tmp2 = 3636451583;
          break;
        case "tomato":
          tmp2 = 4284696575;
          break;
        case "turquoise":
          tmp2 = 1088475391;
          break;
        case "violet":
          tmp2 = 4001558271;
          break;
        case "wheat":
          tmp2 = 4125012991;
          break;
        case "white":
          tmp2 = 4294967295;
          break;
        case "whitesmoke":
          tmp2 = 4126537215;
          break;
        case "yellow":
          tmp2 = 4294902015;
          break;
        case "yellowgreen":
          break;
        default:
          tmp2 = null;
      }
    }
  }
}

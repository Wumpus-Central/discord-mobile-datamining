// === Module 7063: ? ===

// Module 7063
let _tc_id;

let regExp;
let regExp1;
let regExp2;
let regExp3;
let regExp4;
let regExp5;
let regExp6;
let round;
let min2;
let max2;
let random;
let color;
let hexNames;
let obj2;
class tinycolor {
  constructor(toHslResult, arg1) {
    let b;
    let g;
    let str3;
    let str4;
    let str5;
    let str6;
    const tmp = arg1 || {};
    if ((toHslResult || "") instanceof tinycolor) {
      return toHslResult || "";
    } else {
      const self = this;
      if (this instanceof tinycolor) {
        let obj = str;
        if (typeof toHslResult || "" === "string") {
          let tmp5;
          let flag;
          let flag2;
          const str17 = (toHslResult || "").replace(re1, "");
          const str18 = str17.replace(re2, "");
          const formatted = str18.toLowerCase();
          if (color[formatted]) {
            tmp5 = color[formatted];
            flag = true;
          } else {
            flag = false;
            tmp5 = formatted;
            if ("transparent" == formatted) {
              flag2 = { r: 0, g: 0, b: 0, a: 0, format: "name" };
            }
            obj = flag2;
          }
          const rgb = obj2.rgb;
          const match = rgb.exec(tmp5);
          if (match) {
            obj2 = { r: match[1], g: match[2], b: match[3] };
            flag2 = obj2;
          } else {
            const rgba = tmp6.rgba;
            const match1 = rgba.exec(tmp5);
            if (match1) {
              flag2 = { r: match1[1], g: match1[2], b: match1[3], a: match1[4] };
              const obj3 = { r: match1[1], g: match1[2], b: match1[3], a: match1[4] };
            } else {
              const hsl = tmp6.hsl;
              const match2 = hsl.exec(tmp5);
              if (match2) {
                flag2 = { h: match2[1], s: match2[2], l: match2[3] };
                const obj4 = { h: match2[1], s: match2[2], l: match2[3] };
              } else {
                const hsla = tmp6.hsla;
                const match3 = hsla.exec(tmp5);
                if (match3) {
                  flag2 = { h: match3[1], s: match3[2], l: match3[3], a: match3[4] };
                  const obj5 = { h: match3[1], s: match3[2], l: match3[3], a: match3[4] };
                } else {
                  const hsv = tmp6.hsv;
                  const match4 = hsv.exec(tmp5);
                  if (match4) {
                    flag2 = { h: match4[1], s: match4[2], v: match4[3] };
                    const obj6 = { h: match4[1], s: match4[2], v: match4[3] };
                  } else {
                    const hsva = tmp6.hsva;
                    const match5 = hsva.exec(tmp5);
                    if (match5) {
                      flag2 = { h: match5[1], s: match5[2], v: match5[3], a: match5[4] };
                      const obj7 = { h: match5[1], s: match5[2], v: match5[3], a: match5[4] };
                    } else {
                      const hex8 = tmp6.hex8;
                      const match6 = hex8.exec(tmp5);
                      if (match6) {
                        const _parseInt11 = parseInt;
                        const _parseInt12 = parseInt;
                        const _parseInt13 = parseInt;
                        const _parseInt14 = parseInt;
                        const obj8 = { r: parseInt(match6[1], 16), g: parseInt(match6[2], 16), b: parseInt(match6[3], 16), a: parseInt(match6[4], 16) / 255, format: str6 };
                        str6 = "hex8";
                        if (flag) {
                          str6 = "name";
                        }
                        flag2 = obj8;
                      } else {
                        const hex6 = tmp6.hex6;
                        const match7 = hex6.exec(tmp5);
                        if (match7) {
                          const _parseInt8 = parseInt;
                          const _parseInt9 = parseInt;
                          const _parseInt10 = parseInt;
                          const obj9 = { r: parseInt(match7[1], 16), g: parseInt(match7[2], 16), b: parseInt(match7[3], 16), format: str5 };
                          str5 = "hex";
                          if (flag) {
                            str5 = "name";
                          }
                          flag2 = obj9;
                        } else {
                          const hex4 = tmp6.hex4;
                          const match8 = hex4.exec(tmp5);
                          if (match8) {
                            const _parseInt4 = parseInt;
                            const _parseInt5 = parseInt;
                            const _parseInt6 = parseInt;
                            const _parseInt7 = parseInt;
                            const obj10 = { r: parseInt("" + match8[1] + match8[1], 16), g: parseInt("" + match8[2] + match8[2], 16), b: parseInt("" + match8[3] + match8[3], 16), a: parseInt("" + match8[4] + match8[4], 16) / 255, format: str4 };
                            str4 = "hex8";
                            if (flag) {
                              str4 = "name";
                            }
                            flag2 = obj10;
                          } else {
                            const hex3 = tmp6.hex3;
                            const match9 = hex3.exec(tmp5);
                            flag2 = false;
                            if (match9) {
                              const _parseInt = parseInt;
                              const _parseInt2 = parseInt;
                              const _parseInt3 = parseInt;
                              const obj11 = { r: parseInt("" + match9[1] + match9[1], 16), g: parseInt("" + match9[2] + match9[2], 16), b: parseInt("" + match9[3] + match9[3], 16), format: str3 };
                              str3 = "hex";
                              if (flag) {
                                str3 = "name";
                              }
                              flag2 = obj11;
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
        }
        let obj12 = { r: 0, g: 0, b: 0 };
        let flag3 = false;
        let flag4 = false;
        let num8 = 1;
        let tmp22 = obj12;
        if (typeof obj === "object") {
          let str7;
          let flag5;
          const CSS_UNIT9 = obj2.CSS_UNIT;
          if (CSS_UNIT9.exec(obj.r)) {
            const CSS_UNIT = tmp76.CSS_UNIT;
            if (CSS_UNIT.exec(obj.g)) {
              const CSS_UNIT2 = tmp76.CSS_UNIT;
              if (CSS_UNIT2.exec(obj.b)) {
                const obj13 = { r: 255 * bound01(obj.r, 255), g: 255 * bound01(g, 255), b: 255 * bound01(b, 255) };
                ({ g, b } = obj);
                const _String = String;
                let str13 = "rgb";
                const str12 = String(obj.r);
                if ("%" === str12.substr(-1)) {
                  str13 = "prgb";
                }
                flag5 = true;
                str7 = str13;
                obj12 = obj13;
              }
              let num35 = 1;
              if (obj.hasOwnProperty("a")) {
                num35 = obj.a;
              }
              num8 = num35;
              flag3 = str7;
              flag4 = flag5;
              tmp22 = obj12;
            }
          }
          const CSS_UNIT3 = tmp76.CSS_UNIT;
          if (CSS_UNIT3.exec(obj.h)) {
            const CSS_UNIT4 = tmp76.CSS_UNIT;
            if (CSS_UNIT4.exec(obj.s)) {
              const CSS_UNIT5 = tmp76.CSS_UNIT;
              if (CSS_UNIT5.exec(obj.v)) {
                const s2 = obj.s;
                let text = s2;
                if (s2 <= 1) {
                  text = `${100 * s2}%`;
                }
                const v = obj.v;
                let text1 = v;
                if (v <= 1) {
                  text1 = `${100 * v}%`;
                }
                const result = 6 * bound01(obj.h, 360);
                const tmp53 = bound01(text, 100);
                const tmp54 = bound01(text1, 100);
                const floorResult = Math.floor(result);
                const diff = result - floorResult;
                const result1 = tmp54 * (1 - tmp53);
                const result2 = tmp54 * (1 - diff * tmp53);
                const result3 = tmp54 * (1 - (1 - diff) * tmp53);
                const result4 = floorResult % 6;
                const items = [tmp54, result2, result1, result1, result3, tmp54];
                const items1 = [result3, tmp54, tmp54, result2, result1, result1];
                const items2 = [result1, result1, result3, tmp54, tmp54, result2];
                str7 = "hsv";
                flag5 = true;
                obj12 = { r: 255 * items[result4], g: 255 * items1[result4], b: 255 * items2[result4] };
                const obj14 = { r: 255 * items[result4], g: 255 * items1[result4], b: 255 * items2[result4] };
              }
            }
          }
          const CSS_UNIT6 = tmp76.CSS_UNIT;
          let match10 = CSS_UNIT6.exec(obj.h);
          if (match10) {
            const CSS_UNIT7 = tmp76.CSS_UNIT;
            match10 = CSS_UNIT7.exec(obj.s);
          }
          if (match10) {
            const CSS_UNIT8 = tmp76.CSS_UNIT;
            match10 = CSS_UNIT8.exec(obj.l);
          }
          str7 = false;
          flag5 = false;
          if (match10) {
            const s = obj.s;
            let text2 = s;
            if (s <= 1) {
              text2 = `${100 * s}%`;
            }
            const l = obj.l;
            let text3 = l;
            if (l <= 1) {
              text3 = `${100 * l}%`;
            }
            const tmp27 = bound01(obj.h, 360);
            const tmp28 = bound01(text2, 100);
            const tmp29 = bound01(text3, 100);
            let tmp30 = tmp29;
            let tmp31 = tmp29;
            let tmp32 = tmp29;
            if (0 !== tmp28) {
              let result5;
              let sum2;
              let sum5;
              let sum8;
              if (tmp29 < 0.5) {
                result5 = tmp29 * (1 + tmp28);
              } else {
                result5 = tmp29 + tmp28 - tmp29 * tmp28;
              }
              const diff1 = 2 * tmp29 - result5;
              const sum = tmp27 + 0.3333333333333333;
              let sum1 = sum;
              if (sum < 0) {
                sum1 = sum + 1;
              }
              let diff2 = sum1;
              if (1 < sum1) {
                diff2 = sum1 - 1;
              }
              if (diff2 < 0.16666666666666666) {
                sum2 = diff1 + 6 * (result5 - diff1) * diff2;
              } else {
                sum2 = result5;
                if (diff2 >= 0.5) {
                  let sum3 = diff1;
                  if (diff2 < 0.6666666666666666) {
                    sum3 = diff1 + (result5 - diff1) * (0.6666666666666666 - diff2) * 6;
                  }
                  sum2 = sum3;
                }
              }
              let sum4 = tmp27;
              if (tmp27 < 0) {
                sum4 = tmp27 + 1;
              }
              let diff3 = sum4;
              if (sum4 > 1) {
                diff3 = sum4 - 1;
              }
              if (diff3 < 0.16666666666666666) {
                sum5 = diff1 + 6 * (result5 - diff1) * diff3;
              } else {
                sum5 = result5;
                if (diff3 >= 0.5) {
                  let sum6 = diff1;
                  if (diff3 < 0.6666666666666666) {
                    sum6 = diff1 + (result5 - diff1) * (0.6666666666666666 - diff3) * 6;
                  }
                  sum5 = sum6;
                }
              }
              const diff4 = tmp27 - 0.3333333333333333;
              let sum7 = diff4;
              if (diff4 < 0) {
                sum7 = diff4 + 1;
              }
              let diff5 = sum7;
              if (1 < sum7) {
                diff5 = sum7 - 1;
              }
              if (diff5 < 0.16666666666666666) {
                sum8 = diff1 + 6 * (result5 - diff1) * diff5;
              } else {
                sum8 = result5;
                if (diff5 >= 0.5) {
                  let sum9 = diff1;
                  if (diff5 < 0.6666666666666666) {
                    sum9 = diff1 + (result5 - diff1) * (0.6666666666666666 - diff5) * 6;
                  }
                  sum8 = sum9;
                }
              }
              tmp30 = sum8;
              tmp31 = sum5;
              tmp32 = sum2;
            }
            str7 = "hsl";
            flag5 = true;
            obj12 = { r: 255 * tmp32, g: 255 * tmp31, b: 255 * tmp30 };
            const obj15 = { r: 255 * tmp32, g: 255 * tmp31, b: 255 * tmp30 };
          }
        }
        const _parseFloat = parseFloat;
        let num36 = parseFloat(num8);
        const _isNaN = isNaN;
        const isNaNResult = isNaN(num36) || num36 < 0 || num36 > 1;
        if (isNaNResult) {
          num36 = 1;
        }
        const tmp66 = obj.format || flag3;
        self._originalInput = toHslResult || "";
        self._r = min2(255, max2(tmp22.r, 0));
        const tmp69 = min2(255, max2(tmp22.r, 0));
        self._g = min2(255, max2(tmp22.g, 0));
        min2(255, max2(tmp22.g, 0));
        self._b = min2(255, max2(tmp22.b, 0));
        self._a = num36;
        self._roundA = round(100 * self._a) / 100;
        self._format = tmp.format || tmp66;
        self._gradientType = tmp.gradientType;
        if (self._r < 1) {
          self._r = round(self._r);
        }
        if (self._g < 1) {
          self._g = round(self._g);
        }
        if (self._b < 1) {
          self._b = round(self._b);
        }
        self._ok = flag4;
        _tc_id = _tc_id + 1;
        self._tc_id = _tc_id;
      } else {
        const tmp2Result = tinycolor(toHslResult || "", tmp);
        return tmp2Result;
      }
    }
  }
  static fromRatio(toHslResult, arg1) {
    let tmp2 = toHslResult;
    if (typeof toHslResult === "object") {
      const obj = {};
      tmp2 = obj;
      const keys = Object.keys();
      if (keys !== undefined) {
        tmp2 = obj;
        while (keys[tmp] !== undefined) {
          if (!toHslResult.hasOwnProperty(tmp3)) {
            continue;
          } else {
            let text;
            if ("a" === tmp3) {
              text = toHslResult[tmp3];
            } else {
              let tmp4 = toHslResult[tmp3];
              text = tmp4;
              if (tmp4 <= 1) {
                text = `${100 * tmp4}%`;
              }
            }
            obj[tmp3] = text;
            continue;
          }
          continue;
        }
      }
    }
    return tinycolor(tmp2, arg1);
  }
  static equals(toHslResult, toHslResult2) {
    let tmp = !toHslResult;
    if (toHslResult) {
      tmp = !toHslResult;
    }
    let tmp2 = !tmp;
    if (tmp2) {
      const obj = tinycolor(toHslResult);
      const toRgbStringResult = obj.toRgbString();
      obj2 = tinycolor(toHslResult);
      tmp2 = toRgbStringResult == obj2.toRgbString();
    }
    return tmp2;
  }
  static random() {
    const obj = { r: random(), g: random(), b: random() };
    return tinycolor.fromRatio(obj);
  }
  static mix(toHslResult, toHslResult2, arg2) {
    let num = arg2;
    let num2 = 0;
    if (0 !== arg2) {
      if (!num) {
        num = 50;
      }
      num2 = num;
    }
    const obj = tinycolor(toHslResult);
    const toRgbResult = obj.toRgb();
    obj2 = tinycolor(toHslResult);
    const toRgbResult1 = obj2.toRgb();
    const result = num2 / 100;
    const obj3 = { r: (toRgbResult1.r - toRgbResult.r) * result + toRgbResult.r, g: (toRgbResult1.g - toRgbResult.g) * result + toRgbResult.g, b: (toRgbResult1.b - toRgbResult.b) * result + toRgbResult.b, a: (toRgbResult1.a - toRgbResult.a) * result + toRgbResult.a };
    return tinycolor(obj3);
  }
  static readability(toHslResult, toHslResult2) {
    const obj = tinycolor(toHslResult);
    obj2 = tinycolor(toHslResult);
    const max = Math.max;
    const luminance = obj.getLuminance();
    const sum = max(luminance, obj2.getLuminance()) + 0.05;
    const min = Math.min;
    const luminance1 = obj.getLuminance();
    return sum / (min(luminance1, obj2.getLuminance()) + 0.05);
  }
  static isReadable(arg0, arg1, arg2) {
    let obj = arg2;
    const readabilityResult = tinycolor.readability(arg0, arg1);
    if (!arg2) {
      obj = { level: "AA", size: "small" };
    }
    const str = obj.level || "AA";
    let str2 = str.toUpperCase();
    const str3 = obj.size || "small";
    let str4 = str3.toLowerCase();
    const tmp2 = "AA" !== str2 && "AAA" !== str2;
    if (tmp2) {
      str2 = "AA";
    }
    const tmp3 = "small" !== str4 && "large" !== str4;
    if (tmp3) {
      str4 = "small";
    }
    const sum = str2 + str4;
    if ("AAsmall" !== sum) {
      let flag;
      if ("AAAlarge" !== sum) {
        if ("AAlarge" === sum) {
          flag = readabilityResult >= 3;
        } else {
          flag = false;
          if ("AAAsmall" === sum) {
            flag = readabilityResult >= 7;
          }
        }
      }
      return flag;
    }
    flag = readabilityResult >= 4.5;
  }
  static mostReadable(arg0, arg1, arg2) {
    let includeFallbackColors;
    let level;
    const tmp = arg2 || {};
    let tmp2 = null;
    let num = 0;
    let num2 = 0;
    let tmp3 = null;
    ({ includeFallbackColors, level, size } = tmp);
    if (0 < arg1.length) {
      do {
        let readabilityResult = tinycolor.readability(arg0, arg1[num]);
        let tmp7 = num2;
        let tmp4Result = tmp2;
        if (readabilityResult > num2) {
          tmp4Result = tinycolor(arg1[num]);
          tmp7 = readabilityResult;
        }
        num = num + 1;
        num2 = tmp7;
        tmp2 = tmp4Result;
        tmp3 = tmp4Result;
      } while (num < arg1.length);
    }
    let mostReadableResult = tmp3;
    if (!tinycolor.isReadable(arg0, tmp3, { level, size })) {
      mostReadableResult = tmp3;
      if (includeFallbackColors) {
        tmp.includeFallbackColors = false;
        mostReadableResult = tinycolor.mostReadable(arg0, ["#fff", "#000"], tmp);
      }
    }
    return mostReadableResult;
  }
}
function rgbToHsl(_r, _r2, _r3) {
  const tmp = bound01(_r, 255);
  const tmp2 = bound01(_r, 255);
  const tmp3 = bound01(_r, 255);
  const tmp4 = max2(tmp, tmp2, tmp3);
  const tmp5 = min2(tmp, tmp2, tmp3);
  const l = (tmp4 + tmp5) / 2;
  let s = 0;
  let h = 0;
  if (tmp4 != tmp5) {
    let result1;
    let sum;
    const diff = tmp4 - tmp5;
    if (0.5 < l) {
      result1 = diff / (2 - tmp4 - tmp5);
    } else {
      result1 = diff / (tmp4 + tmp5);
    }
    if (tmp === tmp4) {
      let num5 = 0;
      const result2 = (tmp2 - tmp3) / diff;
      if (tmp2 < tmp3) {
        num5 = 6;
      }
      sum = result2 + num5;
    } else if (tmp2 === tmp4) {
      sum = (tmp3 - tmp) / diff + 2;
    } else if (tmp3 === tmp4) {
      sum = (tmp - tmp2) / diff + 4;
    }
    h = sum / 6;
    s = result1;
  }
  return { h, s, l };
}
function rgbToHex(arg0, arg1, arg2, arg3) {
  let str13;
  let str14;
  let text;
  let text1;
  let text2;
  const str = round(arg0);
  const str1 = str.toString(16);
  if (1 == str1.length) {
    text = `0${arr}`;
  } else {
    text = `${arr}`;
  }
  const items = [text, , ];
  const str3 = round(arg1);
  const str16 = str3.toString(16);
  if (1 == str16.length) {
    text1 = `0${arr3}`;
  } else {
    text1 = `${arr3}`;
  }
  items[1] = text1;
  const str5 = round(arg2);
  const str17 = str5.toString(16);
  if (1 == str17.length) {
    text2 = `0${arr4}`;
  } else {
    text2 = `${arr4}`;
  }
  items[2] = text2;
  if (arg3) {
    const str7 = items[0];
    const str8 = items[0];
    const charAtResult = str7.charAt(0);
    if (charAtResult == str8.charAt(1)) {
      const str10 = items[1];
      const str9 = items[1];
      const charAtResult1 = str9.charAt(0);
      if (charAtResult1 == str10.charAt(1)) {
        let sum1;
        const str11 = items[2];
        const str12 = items[2];
        const charAtResult2 = str11.charAt(0);
        if (charAtResult2 == str12.charAt(1)) {
          [str13, str14] = items;
          const charAtResult3 = str13.charAt(0);
          const str15 = items[2];
          const sum = charAtResult3 + str14.charAt(0);
          sum1 = sum + str15.charAt(0);
        }
        return sum1;
      }
    }
  }
  sum1 = items.join("");
}
function rgbaToArgbHex(_r, _g, _b, _a) {
  let text;
  let text1;
  let text2;
  let text3;
  const str = Math.round(255 * parseFloat(_a));
  const str1 = str.toString(16);
  if (1 == str1.length) {
    text = `0${arr}`;
  } else {
    text = `${arr}`;
  }
  const items = [text, , , ];
  const str3 = round(_r);
  const str9 = str3.toString(16);
  if (1 == str9.length) {
    text1 = `0${arr3}`;
  } else {
    text1 = `${arr3}`;
  }
  items[1] = text1;
  const str5 = round(_g);
  const str10 = str5.toString(16);
  if (1 == str10.length) {
    text2 = `0${arr4}`;
  } else {
    text2 = `${arr4}`;
  }
  items[2] = text2;
  const str7 = round(_b);
  const str11 = str7.toString(16);
  if (1 == str11.length) {
    text3 = `0${arr5}`;
  } else {
    text3 = `${arr5}`;
  }
  items[3] = text3;
  return items.join("");
}
function desaturate(toHslResult, arg1) {
  let num = arg1;
  let num2 = 0;
  if (0 !== arg1) {
    if (!num) {
      num = 10;
    }
    num2 = num;
  }
  const obj = tinycolor(toHslResult);
  toHslResult = obj.toHsl();
  toHslResult.s = toHslResult.s - num2 / 100;
  toHslResult.s = min2(1, max2(0, toHslResult.s));
  return tinycolor(toHslResult);
}
function saturate(toHslResult, arg1) {
  let num = arg1;
  let num2 = 0;
  if (0 !== arg1) {
    if (!num) {
      num = 10;
    }
    num2 = num;
  }
  const obj = tinycolor(toHslResult);
  toHslResult = obj.toHsl();
  toHslResult.s = toHslResult.s + num2 / 100;
  toHslResult.s = min2(1, max2(0, toHslResult.s));
  return tinycolor(toHslResult);
}
function greyscale(toHslResult) {
  const obj = tinycolor(toHslResult);
  return obj.desaturate(100);
}
function lighten(toHslResult, arg1) {
  let num = arg1;
  let num2 = 0;
  if (0 !== arg1) {
    if (!num) {
      num = 10;
    }
    num2 = num;
  }
  const obj = tinycolor(toHslResult);
  toHslResult = obj.toHsl();
  toHslResult.l = toHslResult.l + num2 / 100;
  toHslResult.l = min2(1, max2(0, toHslResult.l));
  return tinycolor(toHslResult);
}
function brighten(toHslResult, arg1) {
  let num = arg1;
  let num2 = 0;
  if (0 !== arg1) {
    if (!num) {
      num = 10;
    }
    num2 = num;
  }
  const obj = tinycolor(toHslResult);
  const toRgbResult = obj.toRgb();
  toRgbResult.r = max2(0, min2(255, toRgbResult.r - round(-num2 / 100 * 255)));
  toRgbResult.g = max2(0, min2(255, toRgbResult.g - round(-num2 / 100 * 255)));
  toRgbResult.b = max2(0, min2(255, toRgbResult.b - round(-num2 / 100 * 255)));
  return tinycolor(toRgbResult);
}
function darken(toHslResult, arg1) {
  let num = arg1;
  let num2 = 0;
  if (0 !== arg1) {
    if (!num) {
      num = 10;
    }
    num2 = num;
  }
  const obj = tinycolor(toHslResult);
  toHslResult = obj.toHsl();
  toHslResult.l = toHslResult.l - num2 / 100;
  toHslResult.l = min2(1, max2(0, toHslResult.l));
  return tinycolor(toHslResult);
}
function spin(toHslResult, arg1) {
  const obj = tinycolor(toHslResult);
  toHslResult = obj.toHsl();
  const result = (toHslResult.h + arg1) % 360;
  let sum = result;
  if (result < 0) {
    sum = 360 + result;
  }
  toHslResult.h = sum;
  return tinycolor(toHslResult);
}
function complement(toHslResult) {
  const obj = tinycolor(toHslResult);
  toHslResult = obj.toHsl();
  toHslResult.h = (toHslResult.h + 180) % 360;
  return tinycolor(toHslResult);
}
function triad(toHslResult) {
  const obj = tinycolor(toHslResult);
  toHslResult = obj.toHsl();
  const h = toHslResult.h;
  const items = [tinycolor(toHslResult), , ];
  obj2 = { h: (h + 120) % 360, s: toHslResult.s, l: toHslResult.l };
  items[1] = tinycolor(obj2);
  const obj3 = { h: (h + 240) % 360, s: toHslResult.s, l: toHslResult.l };
  items[2] = tinycolor(obj3);
  return items;
}
function tetrad(toHslResult) {
  const obj = tinycolor(toHslResult);
  toHslResult = obj.toHsl();
  const h = toHslResult.h;
  const items = [tinycolor(toHslResult), , , ];
  obj2 = { h: (h + 90) % 360, s: toHslResult.s, l: toHslResult.l };
  items[1] = tinycolor(obj2);
  const obj3 = { h: (h + 180) % 360, s: toHslResult.s, l: toHslResult.l };
  items[2] = tinycolor(obj3);
  const obj4 = { h: (h + 270) % 360, s: toHslResult.s, l: toHslResult.l };
  items[3] = tinycolor(obj4);
  return items;
}
function splitcomplement(toHslResult) {
  const obj = tinycolor(toHslResult);
  toHslResult = obj.toHsl();
  const h = toHslResult.h;
  const items = [tinycolor(toHslResult), , ];
  obj2 = { h: (h + 72) % 360, s: toHslResult.s, l: toHslResult.l };
  items[1] = tinycolor(obj2);
  const obj3 = { h: (h + 216) % 360, s: toHslResult.s, l: toHslResult.l };
  items[2] = tinycolor(obj3);
  return items;
}
function analogous(toHslResult, arg1, arg2) {
  const tmp2 = arg2 || 30;
  const obj = tinycolor(toHslResult);
  toHslResult = obj.toHsl();
  const result = 360 / tmp2;
  const items = [tinycolor(toHslResult)];
  toHslResult.h = (toHslResult.h - (result * (arg1 || 6) >> 1) + 720) % 360;
  let diff = tmp - 1;
  while (diff) {
    toHslResult.h = (toHslResult.h + result) % 360;
    let arr = items.push(tinycolor(toHslResult));
    diff = diff - 1;
  }
  return items;
}
function monochromatic(toHslResult, arg1) {
  let tmp10;
  const tmp = arg1 || 6;
  const obj = tinycolor(toHslResult);
  let v = obj.toHsv().v;
  const items = [];
  let diff = tmp6 - 1;
  obj.toHsv();
  if (+tmp) {
    do {
      obj2 = { h: tmp3, s: tmp4, v };
      let arr = items.push(tinycolor(obj2));
      v = (v + tmp5) % 1;
      tmp10 = +diff;
      diff = tmp10 - 1;
    } while (tmp10);
  }
  return items;
}
function bound01(_r, arg1) {
  let tmp = typeof _r === "string";
  if (typeof _r === "string") {
    tmp = -1 != _r.indexOf(".");
  }
  if (tmp) {
    const _parseFloat = parseFloat;
    tmp = 1 === parseFloat(_r);
  }
  let str = _r;
  if (tmp) {
    str = "100%";
  }
  let tmp3 = typeof str === "string";
  if (typeof str === "string") {
    tmp3 = -1 != str.indexOf("%");
  }
  const tmp4 = min2(arg1, max2(0, parseFloat(str)));
  let result = tmp4;
  if (tmp3) {
    const _parseInt = parseInt;
    result = parseInt(tmp4 * arg1, 10) / 100;
  }
  let num4 = 1;
  if (Math.abs(result - arg1) >= 0.000001) {
    const _parseFloat2 = parseFloat;
    const result1 = result % arg1;
    num4 = result1 / parseFloat(arg1);
  }
  return num4;
}
const re1 = /^\s+/;
const re2 = /\s+$/;
const _false = 0;
round = Math.round;
min2 = Math.min;
max2 = Math.max;
random = Math.random;
tinycolor.prototype = {
  isDark() {
    return this.getBrightness() < 128;
  },
  isLight() {
    return !this.isDark();
  },
  isValid() {
    return this._ok;
  },
  getOriginalInput() {
    return this._originalInput;
  },
  getFormat() {
    return this._format;
  },
  getAlpha() {
    return this._a;
  },
  getBrightness() {
    const toRgbResult = this.toRgb();
    return (299 * toRgbResult.r + 587 * toRgbResult.g + 114 * toRgbResult.b) / 1000;
  },
  getLuminance() {
    let result3;
    let result5;
    let result7;
    const toRgbResult = this.toRgb();
    const result = toRgbResult.r / 255;
    const result1 = toRgbResult.g / 255;
    const result2 = toRgbResult.b / 255;
    if (result <= 0.03928) {
      result3 = result / 12.92;
    } else {
      result3 = Math.pow((result + 0.055) / 1.055, 2.4);
    }
    const result4 = 0.2126 * result3;
    if (result1 <= 0.03928) {
      result5 = result1 / 12.92;
    } else {
      result5 = Math.pow((result1 + 0.055) / 1.055, 2.4);
    }
    const result6 = 0.7152 * result5;
    if (result2 <= 0.03928) {
      result7 = result2 / 12.92;
    } else {
      result7 = Math.pow((result2 + 0.055) / 1.055, 2.4);
    }
    return result4 + result6 + 0.0722 * result7;
  },
  setAlpha(_a) {
    const parsed = parseFloat(_a);
    let num3 = parsed;
    const isNaNResult = isNaN(parsed) || parsed < 0 || parsed > 1;
    if (isNaNResult) {
      num3 = 1;
    }
    this._a = num3;
    this._roundA = round(100 * this._a) / 100;
    return this;
  },
  toHsv() {
    let _b;
    let _g;
    ({ _g, _b } = this);
    const tmp = bound01(this._r, 255);
    const tmp2 = bound01(_g, 255);
    const tmp3 = bound01(_b, 255);
    const tmp4 = max2(tmp, tmp2, tmp3);
    const tmp5 = min2(tmp, tmp2, tmp3);
    const diff = tmp4 - tmp5;
    let num = 0;
    if (0 !== tmp4) {
      num = diff / tmp4;
    }
    let num2 = 0;
    if (tmp4 != tmp5) {
      let sum;
      if (tmp === tmp4) {
        let num5 = 0;
        const result = (tmp2 - tmp3) / diff;
        if (tmp2 < tmp3) {
          num5 = 6;
        }
        sum = result + num5;
      } else if (tmp2 === tmp4) {
        sum = (tmp3 - tmp) / diff + 2;
      } else if (tmp3 === tmp4) {
        sum = (tmp - tmp2) / diff + 4;
      }
      num2 = sum / 6;
    }
    return { h: 360 * num2, s: num, v: tmp4, a: this._a };
  },
  toHsvString() {
    let _b;
    let _g;
    let text;
    const self = this;
    ({ _g, _b } = this);
    const tmp = bound01(this._r, 255);
    const tmp2 = bound01(_g, 255);
    const tmp3 = bound01(_b, 255);
    const tmp4 = max2(tmp, tmp2, tmp3);
    const tmp5 = min2(tmp, tmp2, tmp3);
    const diff = tmp4 - tmp5;
    let num = 0;
    if (0 !== tmp4) {
      num = diff / tmp4;
    }
    let num2 = 0;
    if (tmp4 != tmp5) {
      let sum;
      if (tmp === tmp4) {
        let num5 = 0;
        const result = (tmp2 - tmp3) / diff;
        if (tmp2 < tmp3) {
          num5 = 6;
        }
        sum = result + num5;
      } else if (tmp2 === tmp4) {
        sum = (tmp3 - tmp) / diff + 2;
      } else if (tmp3 === tmp4) {
        sum = (tmp - tmp2) / diff + 4;
      }
      num2 = sum / 6;
    }
    const tmp9 = round(360 * num2);
    const tmp10 = round(100 * num);
    const tmp11 = round(100 * tmp4);
    if (1 == self._a) {
      text = `${"hsv(" + tmp9 + ", " + tmp10 + "%, " + tmp11}%)`;
    } else {
      text = `${"hsva(" + tmp9 + ", " + tmp10 + "%, " + tmp11 + "%, " + self._roundA})`;
    }
    return text;
  },
  toHsl() {
    const tmp = rgbToHsl(this._r, this._g, this._b);
    return { h: 360 * tmp.h, s: tmp.s, l: tmp.l, a: this._a };
  },
  toHslString() {
    let text;
    const tmp = rgbToHsl(this._r, this._g, this._b);
    const tmp2 = round(360 * tmp.h);
    const tmp3 = round(100 * tmp.s);
    const tmp4 = round(100 * tmp.l);
    if (1 == this._a) {
      text = `${"hsl(" + tmp2 + ", " + tmp3 + "%, " + tmp4}%)`;
    } else {
      text = `${"hsla(" + tmp2 + ", " + tmp3 + "%, " + tmp4 + "%, " + this._roundA})`;
    }
    return text;
  },
  toHex(arg0) {
    return rgbToHex(this._r, this._g, this._b, arg0);
  },
  toHexString(arg0) {
    return "#" + this.toHex(arg0);
  },
  toHex8(arg0) {
    let _a;
    let _b;
    let _g;
    let str17;
    let str18;
    let text;
    let text1;
    let text2;
    let text3;
    ({ _g, _b, _a } = this);
    const str = round(this._r);
    const str1 = str.toString(16);
    if (1 == str1.length) {
      text = `0${arr}`;
    } else {
      text = `${arr}`;
    }
    const items = [text, , , ];
    const str3 = round(_g);
    const str21 = str3.toString(16);
    if (1 == str21.length) {
      text1 = `0${arr3}`;
    } else {
      text1 = `${arr3}`;
    }
    items[1] = text1;
    const str5 = round(_b);
    const str22 = str5.toString(16);
    if (1 == str22.length) {
      text2 = `0${arr4}`;
    } else {
      text2 = `${arr4}`;
    }
    items[2] = text2;
    const str7 = Math.round(255 * parseFloat(_a));
    const str23 = str7.toString(16);
    if (1 == str23.length) {
      text3 = `0${arr5}`;
    } else {
      text3 = `${arr5}`;
    }
    items[3] = text3;
    if (arg0) {
      const str10 = items[0];
      const str9 = items[0];
      const charAtResult = str9.charAt(0);
      if (charAtResult == str10.charAt(1)) {
        const str11 = items[1];
        const str12 = items[1];
        const charAtResult1 = str11.charAt(0);
        if (charAtResult1 == str12.charAt(1)) {
          const str13 = items[2];
          const str14 = items[2];
          const charAtResult2 = str13.charAt(0);
          if (charAtResult2 == str14.charAt(1)) {
            let sum2;
            const str15 = items[3];
            const str16 = items[3];
            const charAtResult3 = str15.charAt(0);
            if (charAtResult3 == str16.charAt(1)) {
              [str17, str18] = items;
              const charAtResult4 = str17.charAt(0);
              const str19 = items[2];
              const sum = charAtResult4 + str18.charAt(0);
              const str20 = items[3];
              const sum1 = sum + str19.charAt(0);
              sum2 = sum1 + str20.charAt(0);
            }
            return sum2;
          }
        }
      }
    }
    sum2 = items.join("");
  },
  toHex8String(arg0) {
    return "#" + this.toHex8(arg0);
  },
  toRgb() {
    const obj = { r: round(this._r), g: round(this._g), b: round(this._b), a: this._a };
    return obj;
  },
  toRgbString() {
    let text2;
    const self = this;
    if (1 == this._a) {
      const text = `rgb(${round(self._r)}`;
      const text1 = `${`rgb(${round(self._r)}`}, ${round(self._g)}`;
      text2 = `${tmp7 + ", " + round(self._b)})`;
    } else {
      const text3 = `rgba(${round(self._r)}`;
      const text4 = `${`rgba(${round(self._r)}`}, ${round(self._g)}`;
      text2 = `${tmp3 + ", " + round(self._b) + ", " + self._roundA})`;
    }
    return text2;
  },
  toPercentageRgb() {
    const obj = { r: `${round(100 * bound01(this._r, 255))}%`, g: `${round(100 * bound01(this._g, 255))}%`, b: `${round(100 * bound01(this._b, 255))}%`, a: this._a };
    return obj;
  },
  toPercentageRgbString() {
    let text2;
    const self = this;
    if (1 == this._a) {
      const text = `rgb(${round(100 * bound01(self._r, 255))}`;
      const text1 = `${`rgb(${round(100 * bound01(self._r, 255))}`}%, ${round(100 * bound01(self._g, 255))}`;
      text2 = `${tmp4 + "%, " + round(100 * bound01(self._b, 255))}%)`;
    } else {
      const text3 = `rgba(${round(100 * bound01(self._r, 255))}`;
      const text4 = `${`rgba(${round(100 * bound01(self._r, 255))}`}%, ${round(100 * bound01(self._g, 255))}`;
      text2 = `${tmp9 + "%, " + round(100 * bound01(self._b, 255)) + "%, " + self._roundA})`;
    }
    return text2;
  },
  toName() {
    const self = this;
    let str = "transparent";
    if (0 !== this._a) {
      let tmp = self._a >= 1;
      if (tmp) {
        tmp = obj[rgbToHex(undefined, self._r, self._g, self._b, true)] || false;
        obj[rgbToHex(undefined, self._r, self._g, self._b, true)] || false;
      }
      str = tmp;
    }
    return str;
  },
  toFilter(toHslResult) {
    const text = `#${rgbaToArgbHex(this._r, this._g, this._b, this._a)}`;
    let str = "";
    if (this._gradientType) {
      str = "GradientType = 1, ";
    }
    let text1 = text;
    if (toHslResult) {
      const tmp5 = tinycolor(toHslResult);
      text1 = `#${tmp(tmp5._r, tmp5._g, tmp5._b, tmp5._a)}`;
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + str + "startColorstr=" + text + ",endColorstr=" + text1 + ")";
  },
  toString(arg0) {
    const self = this;
    const _format = arg0 || self._format;
    const tmp2 = self._a < 1 && self._a >= 0;
    if (!arg0) {
      let toNameResult;
      if (tmp2) {
        if ("name" === _format) {
          if (0 === self._a) {
            toNameResult = self.toName();
          }
        }
        toNameResult = self.toRgbString();
      }
      return toNameResult;
    }
    let flag = false;
    if ("rgb" === _format) {
      flag = self.toRgbString();
    }
    if ("prgb" === _format) {
      flag = self.toPercentageRgbString();
    }
    const tmp4 = "hex" !== _format && "hex6" !== _format;
    if (!tmp4) {
      flag = self.toHexString();
    }
    if ("hex3" === _format) {
      flag = self.toHexString(true);
    }
    if ("hex4" === _format) {
      flag = self.toHex8String(true);
    }
    if ("hex8" === _format) {
      flag = self.toHex8String();
    }
    if ("name" === _format) {
      flag = self.toName();
    }
    if ("hsl" === _format) {
      flag = self.toHslString();
    }
    if ("hsv" === _format) {
      flag = self.toHsvString();
    }
    if (!flag) {
      flag = self.toHexString();
    }
    toNameResult = flag;
  },
  clone() {
    return tinycolor(this.toString());
  },
  _applyModification(brighten, arg1) {
    const self = this;
    const items = [this];
    const slice = [].slice;
    const applyResult = brighten.apply(null, items.concat(slice.call(arg1)));
    ({ _r: self._r, _g: self._g, _b: self._b } = applyResult);
    self.setAlpha(applyResult._a);
    return self;
  },
  lighten() {
    return this._applyModification(lighten, arguments);
  },
  brighten() {
    return this._applyModification(brighten, arguments);
  },
  darken() {
    return this._applyModification(darken, arguments);
  },
  desaturate() {
    return this._applyModification(desaturate, arguments);
  },
  saturate() {
    return this._applyModification(saturate, arguments);
  },
  greyscale() {
    return this._applyModification(greyscale, arguments);
  },
  spin() {
    return this._applyModification(spin, arguments);
  },
  _applyCombination(analogous, arg1) {
    const items = [this];
    const slice = [].slice;
    return analogous.apply(null, items.concat(slice.call(arg1)));
  },
  analogous() {
    return this._applyCombination(analogous, arguments);
  },
  complement() {
    return this._applyCombination(complement, arguments);
  },
  monochromatic() {
    return this._applyCombination(monochromatic, arguments);
  },
  splitcomplement() {
    return this._applyCombination(splitcomplement, arguments);
  },
  triad() {
    return this._applyCombination(triad, arguments);
  },
  tetrad() {
    return this._applyCombination(tetrad, arguments);
  }
};
color = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "0ff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "00f", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", burntsienna: "ea7e5d", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "0ff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "f0f", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "663399", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" };
tinycolor.names = color;
hexNames = {};
for (const key10080 in color) {
  if (!color.hasOwnProperty(key10080)) {
    continue;
  } else {
    hexNames[color[key10080]] = key10080;
    continue;
  }
  continue;
}
tinycolor.hexNames = hexNames;
obj2 = { CSS_UNIT: regExp, rgb: regExp1, rgba: regExp2, hsl: regExp3, hsla: regExp4, hsv: regExp5, hsva: regExp6, hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/ };
regExp = new RegExp("(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)");
regExp1 = new RegExp("rgb[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?");
regExp2 = new RegExp("rgba[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?");
regExp3 = new RegExp("hsl[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?");
regExp4 = new RegExp("hsla[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?");
regExp5 = new RegExp("hsv[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?");
regExp6 = new RegExp("hsva[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?");
if (undefined !== module) {
  if (module.exports) {
    module.exports = tinycolor;
  }
}
if (typeof globalThis.define === "function") {
  const define2 = globalThis.define;
  if (globalThis.define.amd) {
    globalThis.define(() => tinycolor);
  }
}
window.tinycolor = tinycolor;
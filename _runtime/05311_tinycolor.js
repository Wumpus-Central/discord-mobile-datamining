// _runtime/05311_tinycolor.js
let round;
let min;
let max;
let random;
let obj;
obj = undefined;
obj = undefined;
class tinycolor {
  constructor(arg0, arg1) {
    obj = require;
    if (!require) {
      obj = {};
    }
    str = global;
    if (!global) {
      str = "";
    }
    tmp = tinycolor;
    if (str instanceof tinycolor) {
      return str;
    } else {
      self = this;
      if (this instanceof tmp) {
        tmp4 = str;
        if (typeof str !== "string") {
          obj = { r: 0, g: 0, b: 0 };
          num7 = 1;
          flag3 = false;
          flag4 = false;
          num8 = 1;
          tmp23 = obj;
          if (typeof str === "object") {
            tmp79 = tetrad;
            CSS_UNIT9 = tetrad.CSS_UNIT;
            if (CSS_UNIT9.exec(str.r)) {
              CSS_UNIT = tmp79.CSS_UNIT;
              if (CSS_UNIT.exec(str.g)) {
                CSS_UNIT2 = tmp79.CSS_UNIT;
                if (CSS_UNIT2.exec(str.b)) {
                  obj1 = { r: null, g: null, b: null };
                  tmp66 = bound01;
                  num33 = 255;
                  ({ g, b } = str);
                  obj1[0] = 255 * bound01(str.r, 255);
                  obj1[1] = 255 * bound01(g, 255);
                  obj1[2] = 255 * bound01(b, 255);
                  tmp67 = globalThis;
                  _String = String;
                  str12 = String(str.r);
                  num34 = -1;
                  str13 = "rgb";
                  str14 = "%";
                  if ("%" === require("module_4294967295")) {
                    str13 = "prgb";
                  }
                  flag5 = true;
                  str7 = str13;
                  obj = obj1;
                }
                str15 = "a";
                num35 = 1;
                if (str.hasOwnProperty("a")) {
                  num35 = str.a;
                }
                num8 = num35;
                flag3 = str7;
                flag4 = flag5;
                tmp23 = obj;
              }
            }
            CSS_UNIT3 = tmp79.CSS_UNIT;
            if (CSS_UNIT3.exec(str.h)) {
              CSS_UNIT4 = tmp79.CSS_UNIT;
              if (CSS_UNIT4.exec(str.s)) {
                CSS_UNIT5 = tmp79.CSS_UNIT;
                if (CSS_UNIT5.exec(str.v)) {
                  s2 = str.s;
                  text = s2;
                  if (s2 <= 1) {
                    num27 = 100;
                    str10 = "%";
                    text = `${100 * s2}%`;
                  }
                  v = str.v;
                  text1 = v;
                  if (v <= 1) {
                    num28 = 100;
                    str11 = "%";
                    text1 = `${100 * v}%`;
                  }
                  tmp55 = bound01;
                  num29 = 360;
                  num30 = 6;
                  result = 6 * bound01(str.h, 360);
                  num31 = 100;
                  tmp57 = bound01(text, 100);
                  tmp58 = bound01(text1, 100);
                  tmp59 = Math;
                  floorResult = Math.floor(result);
                  diff = result - floorResult;
                  result1 = tmp58 * (1 - tmp57);
                  result2 = tmp58 * (1 - diff * tmp57);
                  result3 = tmp58 * (1 - (1 - diff) * tmp57);
                  result4 = floorResult % 6;
                  items = [, , , , , ];
                  items[0] = tmp58;
                  items[1] = result2;
                  items[2] = result1;
                  items[3] = result1;
                  items[4] = result3;
                  items[5] = tmp58;
                  items1 = [, , , , , ];
                  items1[0] = result3;
                  items1[1] = tmp58;
                  items1[2] = tmp58;
                  items1[3] = result2;
                  items1[4] = result1;
                  items1[5] = result1;
                  items2 = [, , , , , ];
                  items2[0] = result1;
                  items2[1] = result1;
                  items2[2] = result3;
                  items2[3] = tmp58;
                  items2[4] = tmp58;
                  items2[5] = result2;
                  obj2 = { r: null, g: null, b: null };
                  num32 = 255;
                  obj2[0] = 255 * items[result4];
                  obj2[1] = 255 * items1[result4];
                  obj2[2] = 255 * items2[result4];
                  str7 = "hsv";
                  flag5 = true;
                  obj = obj2;
                }
              }
            }
            CSS_UNIT6 = tmp79.CSS_UNIT;
            tmp24 = CSS_UNIT6.exec(str.h);
            if (tmp24) {
              CSS_UNIT7 = tmp79.CSS_UNIT;
              tmp24 = CSS_UNIT7.exec(str.s);
            }
            if (tmp24) {
              CSS_UNIT8 = tmp79.CSS_UNIT;
              tmp24 = CSS_UNIT8.exec(str.l);
            }
            str7 = false;
            flag5 = false;
            if (tmp24) {
              s = str.s;
              text2 = s;
              if (s <= 1) {
                num9 = 100;
                str8 = "%";
                text2 = `${100 * s}%`;
              }
              l = str.l;
              text3 = l;
              if (l <= 1) {
                num10 = 100;
                str9 = "%";
                text3 = `${100 * l}%`;
              }
              tmp27 = bound01;
              num11 = 360;
              tmp28 = bound01(str.h, 360);
              num12 = 100;
              tmp29 = bound01(text2, 100);
              tmp30 = bound01(text3, 100);
              num13 = 0;
              tmp33 = tmp30;
              if (0 === tmp29) {
                obj3 = { r: null, g: null, b: null };
                num26 = 255;
                obj3[0] = 255 * tmp32;
                obj3[1] = 255 * tmp31;
                obj3[2] = 255 * tmp30;
                str7 = "hsl";
                flag5 = true;
                obj = obj3;
              } else {
                num41 = 0.5;
                if (tmp30 < 0.5) {
                  result5 = tmp30 * (1 + tmp29);
                } else {
                  result5 = tmp30 + tmp29 - tmp30 * tmp29;
                }
                num14 = 2;
                diff1 = 2 * tmp30 - result5;
                num15 = 0.3333333333333333;
                sum = tmp28 + 0.3333333333333333;
                sum1 = sum;
                if (sum < 0) {
                  sum1 = sum + 1;
                }
                diff2 = sum1;
                if (1 < sum1) {
                  diff2 = sum1 - 1;
                }
                num16 = 0.16666666666666666;
                if (diff2 < 0.16666666666666666) {
                  num19 = 6;
                  sum2 = diff1 + 6 * (result5 - diff1) * diff2;
                } else {
                  sum2 = result5;
                  if (diff2 >= 0.5) {
                    num17 = 0.6666666666666666;
                    sum3 = diff1;
                    if (diff2 < 0.6666666666666666) {
                      num18 = 6;
                      sum3 = diff1 + (result5 - diff1) * (0.6666666666666666 - diff2) * 6;
                    }
                    sum2 = sum3;
                  }
                }
                sum4 = tmp28;
                if (tmp28 < 0) {
                  sum4 = tmp28 + 1;
                }
                diff3 = sum4;
                if (sum4 > 1) {
                  diff3 = sum4 - 1;
                }
                if (diff3 < 0.16666666666666666) {
                  num22 = 6;
                  sum5 = diff1 + 6 * (result5 - diff1) * diff3;
                } else {
                  sum5 = result5;
                  if (diff3 >= 0.5) {
                    num20 = 0.6666666666666666;
                    sum6 = diff1;
                    if (diff3 < 0.6666666666666666) {
                      num21 = 6;
                      sum6 = diff1 + (result5 - diff1) * (0.6666666666666666 - diff3) * 6;
                    }
                    sum5 = sum6;
                  }
                }
                diff4 = tmp28 - 0.3333333333333333;
                sum7 = diff4;
                if (diff4 < 0) {
                  sum7 = diff4 + 1;
                }
                diff5 = sum7;
                if (1 < sum7) {
                  diff5 = sum7 - 1;
                }
                if (diff5 < 0.16666666666666666) {
                  num25 = 6;
                  sum8 = diff1 + 6 * (result5 - diff1) * diff5;
                } else {
                  sum8 = result5;
                  if (diff5 >= 0.5) {
                    num23 = 0.6666666666666666;
                    sum9 = diff1;
                    if (diff5 < 0.6666666666666666) {
                      num24 = 6;
                      sum9 = diff1 + (result5 - diff1) * (0.6666666666666666 - diff5) * 6;
                    }
                    sum8 = sum9;
                  }
                }
                tmp50 = sum8;
                tmp51 = sum5;
                tmp52 = sum2;
              }
            }
          }
          tmp68 = globalThis;
          _parseFloat = parseFloat;
          num36 = parseFloat(num8);
          _isNaN = isNaN;
          isNaNResult = isNaN(num36);
          if (!isNaNResult) {
            num37 = 0;
            isNaNResult = num36 < 0;
          }
          if (!isNaNResult) {
            isNaNResult = num36 > 1;
          }
          if (isNaNResult) {
            num36 = 1;
          }
          tmp70 = str.format || flag3;
          tmp71 = min;
          tmp72 = max;
          num38 = 0;
          num39 = 255;
          tmp73 = require("module_255");
          tmp74 = require("module_255");
          self._originalInput = str;
          self._r = tmp73;
          self._g = tmp74;
          self._b = require("module_255");
          self._a = num36;
          tmp75 = round;
          num40 = 100;
          self._roundA = round(100 * self._a) / 100;
          self._format = obj.format || tmp70;
          self._gradientType = obj.gradientType;
          if (self._r < 1) {
            self._r = tmp75(self._r);
          }
          if (self._g < 1) {
            self._g = tmp75(self._g);
          }
          if (self._b < 1) {
            self._b = tmp75(self._b);
          }
          self._ok = flag4;
          tmp76 = c3;
          c3 = c3 + 1;
          self._tc_id = c3;
          return;
        } else {
          tmp77 = closure_1;
          str16 = "";
          str17 = str.replace(closure_1, "");
          tmp78 = closure_2;
          str18 = str17.replace(closure_2, "");
          formatted = str18.toLowerCase();
          obj4 = c25;
          if (c25[formatted]) {
            tmp5 = obj4[formatted];
            flag = true;
          } else {
            str2 = "transparent";
            flag = false;
            tmp5 = formatted;
            if ("transparent" == formatted) {
              flag2 = { r: 0, g: 0, b: 0, a: 0, format: "name" };
            }
            tmp22 = flag2;
          }
          tmp6 = tetrad;
          rgb = tetrad.rgb;
          formatted = rgb.exec(tmp5);
          tmp8 = tmp5;
          if (formatted) {
            obj4 = { r: null, g: null, b: null };
            obj4[0] = formatted[1];
            obj4[1] = formatted[2];
            formatted = formatted[3];
            obj4[2] = formatted;
            flag2 = obj4;
          } else {
            rgba = tmp6.rgba;
            match = rgba.exec(tmp5);
            if (match) {
              obj4 = { r: null, g: null, b: null, a: null };
              obj4[0] = match[1];
              obj4[1] = match[2];
              obj4[2] = match[3];
              obj4[3] = match[4];
              flag2 = obj4;
            } else {
              hsl = tmp6.hsl;
              match1 = hsl.exec(tmp5);
              if (match1) {
                obj4 = { h: null, s: null, l: null };
                obj4[0] = match1[1];
                obj4[1] = match1[2];
                obj4[2] = match1[3];
                flag2 = obj4;
              } else {
                hsla = tmp6.hsla;
                match2 = hsla.exec(tmp5);
                if (match2) {
                  obj4 = { h: null, s: null, l: null, a: null };
                  obj4[0] = match2[1];
                  obj4[1] = match2[2];
                  obj4[2] = match2[3];
                  obj4[3] = match2[4];
                  flag2 = obj4;
                } else {
                  hsv = tmp6.hsv;
                  match3 = hsv.exec(tmp5);
                  if (match3) {
                    obj4 = { h: null, s: null, v: null };
                    obj4[0] = match3[1];
                    obj4[1] = match3[2];
                    obj4[2] = match3[3];
                    flag2 = obj4;
                  } else {
                    hsva = tmp6.hsva;
                    match4 = hsva.exec(tmp5);
                    if (match4) {
                      obj4 = { h: null, s: null, v: null, a: null };
                      obj4[0] = match4[1];
                      obj4[1] = match4[2];
                      obj4[2] = match4[3];
                      obj4[3] = match4[4];
                      flag2 = obj4;
                    } else {
                      hex8 = tmp6.hex8;
                      match5 = hex8.exec(tmp5);
                      if (match5) {
                        obj4 = { r: null, g: null, b: null, a: null, format: null };
                        tmp21 = globalThis;
                        _parseInt11 = parseInt;
                        num5 = 16;
                        obj4[0] = parseInt(match5[1], 16);
                        _parseInt12 = parseInt;
                        obj4[1] = parseInt(match5[2], 16);
                        _parseInt13 = parseInt;
                        obj4[2] = parseInt(match5[3], 16);
                        _parseInt14 = parseInt;
                        num6 = 255;
                        obj4[3] = parseInt(match5[4], 16) / 255;
                        str6 = "hex8";
                        if (flag) {
                          str6 = "name";
                        }
                        obj4[4] = str6;
                        flag2 = obj4;
                      } else {
                        hex6 = tmp6.hex6;
                        match6 = hex6.exec(tmp5);
                        if (match6) {
                          obj4 = { r: null, g: null, b: null, format: null };
                          tmp20 = globalThis;
                          _parseInt8 = parseInt;
                          num4 = 16;
                          obj4[0] = parseInt(match6[1], 16);
                          _parseInt9 = parseInt;
                          obj4[1] = parseInt(match6[2], 16);
                          _parseInt10 = parseInt;
                          obj4[2] = parseInt(match6[3], 16);
                          str5 = "hex";
                          if (flag) {
                            str5 = "name";
                          }
                          obj4[3] = str5;
                          flag2 = obj4;
                        } else {
                          hex4 = tmp6.hex4;
                          match7 = hex4.exec(tmp5);
                          if (match7) {
                            obj4 = { r: null, g: null, b: null, a: null, format: null };
                            tmp19 = globalThis;
                            _parseInt4 = parseInt;
                            num2 = 16;
                            obj4[0] = parseInt("" + match7[1] + match7[1], 16);
                            _parseInt5 = parseInt;
                            obj4[1] = parseInt("" + match7[2] + match7[2], 16);
                            _parseInt6 = parseInt;
                            obj4[2] = parseInt("" + match7[3] + match7[3], 16);
                            _parseInt7 = parseInt;
                            num3 = 255;
                            obj4[3] = parseInt("" + match7[4] + match7[4], 16) / 255;
                            str4 = "hex8";
                            if (flag) {
                              str4 = "name";
                            }
                            obj4[4] = str4;
                            flag2 = obj4;
                          } else {
                            hex3 = tmp6.hex3;
                            obj4 = hex3.exec;
                            obj2Result = obj4(tmp5);
                            flag2 = false;
                            if (obj2Result) {
                              obj4 = { r: null, g: null, b: null, format: null };
                              tmp18 = globalThis;
                              _parseInt = parseInt;
                              num = 16;
                              obj4[0] = parseInt("" + obj2Result[1] + obj2Result[1], 16);
                              _parseInt2 = parseInt;
                              obj4[1] = parseInt("" + obj2Result[2] + obj2Result[2], 16);
                              _parseInt3 = parseInt;
                              obj4[2] = parseInt("" + obj2Result[3] + obj2Result[3], 16);
                              str3 = "hex";
                              if (flag) {
                                str3 = "name";
                              }
                              obj4[3] = str3;
                              flag2 = obj4;
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
      } else {
        tmpResult = tmp(str, obj);
        tmp3 = tmpResult;
        return tmpResult;
      }
    }
    return;
  }
  static fromRatio(arg0, arg1) {
    tmp2 = global;
    if (typeof global === "object") {
      obj = {};
      tmp6 = global;
      num = 100;
      str = "%";
      num2 = 1;
      str2 = "a";
      tmp2 = obj;
      keys = Object.keys();
      if (keys !== undefined) {
        tmp2 = obj;
        tmp3 = keys[tmp];
        while (tmp3 !== undefined) {
          tmp8 = tmp3;
          if (!global.hasOwnProperty(tmp3)) {
            continue;
          } else {
            if ("a" === tmp3) {
              text = global[tmp3];
            } else {
              tmp4 = global[tmp3];
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
    return tinycolor(tmp2, require);
  }
  static equals(arg0, arg1) {
    tmp = !global;
    if (global) {
      tmp = !require;
    }
    tmp2 = !tmp;
    if (!tmp) {
      tmp3 = tinycolor;
      obj = tinycolor(global);
      toRgbStringResult = obj.toRgbString();
      obj2 = tinycolor(require);
      tmp2 = toRgbStringResult == obj2.toRgbString();
    }
    return tmp2;
  }
  static random() {
    obj = { r: random(), g: random(), b: random() };
    return tinycolor.fromRatio(obj);
  }
  static mix(arg0, arg1, arg2) {
    num = importDefault;
    num2 = 0;
    if (0 !== importDefault) {
      if (!num) {
        num = 50;
      }
      num2 = num;
    }
    obj = tinycolor(global);
    toRgbResult = obj.toRgb();
    obj2 = tinycolor(require);
    toRgbResult1 = obj2.toRgb();
    result = num2 / 100;
    obj = { r: (toRgbResult1.r - toRgbResult.r) * result + toRgbResult.r, g: (toRgbResult1.g - toRgbResult.g) * result + toRgbResult.g, b: (toRgbResult1.b - toRgbResult.b) * result + toRgbResult.b, a: (toRgbResult1.a - toRgbResult.a) * result + toRgbResult.a };
    return tinycolor(obj);
  }
  static readability(arg0, arg1) {
    obj = tinycolor(global);
    obj2 = tinycolor(require);
    luminance = obj.getLuminance();
    sum = Math.max(luminance, obj2.getLuminance()) + 0.05;
    luminance1 = obj.getLuminance();
    return sum / (Math.min(luminance1, obj2.getLuminance()) + 0.05);
  }
  static isReadable(arg0, arg1, arg2) {
    obj = importDefault;
    readabilityResult = tinycolor.readability(global, require);
    if (!importDefault) {
      obj = { level: "AA", size: "small" };
    }
    str = obj.level || "AA";
    str2 = str.toUpperCase();
    str3 = obj.size || "small";
    str4 = str3.toLowerCase();
    tmp2 = "AA" !== str2;
    if (tmp2) {
      str5 = "AAA";
      tmp2 = "AAA" !== str2;
    }
    if (tmp2) {
      str2 = "AA";
    }
    tmp3 = "small" !== str4;
    if (tmp3) {
      str6 = "large";
      tmp3 = "large" !== str4;
    }
    if (tmp3) {
      str4 = "small";
    }
    sum = str2 + str4;
    if ("AAsmall" !== sum) {
      str7 = "AAAlarge";
      if ("AAAlarge" !== sum) {
        str8 = "AAlarge";
        if ("AAlarge" === sum) {
          num2 = 3;
          flag = readabilityResult >= 3;
        } else {
          str9 = "AAAsmall";
          flag = false;
          if ("AAAsmall" === sum) {
            num = 7;
            flag = readabilityResult >= 7;
          }
        }
      }
      return flag;
    }
    flag = readabilityResult >= 4.5;
    return;
  }
  static mostReadable(arg0, arg1, arg2) {
    obj = importDefault;
    if (!importDefault) {
      obj = {};
    }
    tmp = null;
    num = 0;
    num2 = 0;
    tmp2 = null;
    ({ includeFallbackColors, level, size } = obj);
    if (0 < require.length) {
      do {
        tmp3 = tinycolor;
        readabilityResult = tinycolor.readability(global, require[num]);
        tmp5 = num;
        tmp6 = num2;
        tmp3Result = tmp;
        if (readabilityResult > num2) {
          tmp3Result = tmp3(require[num]);
          tmp6 = readabilityResult;
        }
        num = num + 1;
        num2 = tmp6;
        tmp = tmp3Result;
        tmp2 = tmp3Result;
      } while (num < require.length);
    }
    obj2 = tinycolor;
    mostReadableResult = tmp2;
    if (!tinycolor.isReadable(global, tmp2, { level, size })) {
      mostReadableResult = tmp2;
      if (includeFallbackColors) {
        flag = false;
        obj.includeFallbackColors = false;
        mostReadableResult = obj2.mostReadable(global, ["#fff", "#000"], obj);
      }
    }
    return mostReadableResult;
  }
}
function rgbToHsl(_r, _r, _r) {
  let result2 = bound01(_r, 255);
  const tmp2 = bound01(_r, 255);
  const tmp3 = bound01(_r, 255);
  const tmp4 = max(result2, tmp2, tmp3);
  const tmp5 = min(result2, tmp2, tmp3);
  const result = (tmp4 + tmp5) / 2;
  if (tmp4 == tmp5) {
    const obj = { h: null, s: null, l: null };
    obj[0] = 0;
    obj[1] = 0;
    obj[2] = result;
    return obj;
  } else {
    const diff = tmp4 - tmp5;
    if (0.5 < result) {
      let result1 = diff / (2 - tmp4 - tmp5);
    } else {
      result1 = diff / (tmp4 + tmp5);
    }
    if (result2 === tmp4) {
      result2 = (tmp2 - tmp3) / diff;
      let num3 = 0;
      if (tmp2 < tmp3) {
        num3 = 6;
      }
      let sum = result2 + num3;
      const result3 = sum / 6;
    } else if (tmp2 !== tmp4) {
      if (tmp3 === tmp4) {
        sum = (result2 - tmp2) / diff + 4;
      }
    }
    result2 = (tmp3 - result2) / diff;
    sum = result2 + 2;
  }
}
function rgbToHex(arg0, arg1, arg2, arg3) {
  let str13;
  let str14;
  let str = round(arg0);
  str = str.toString(16);
  if (1 == str.length) {
    let str2 = "0";
    let text = `0${arr}`;
  } else {
    text = `${arr}`;
  }
  const items = [text, , ];
  const str3 = round(arg1);
  if (1 == str1.length) {
    let text1 = `0${arr3}`;
  } else {
    text1 = `${arr3}`;
  }
  items[1] = text1;
  str1 = round(arg1).toString(16);
  str2 = round(arg2).toString(16);
  if (1 == str2.length) {
    let text2 = `0${arr4}`;
  } else {
    text2 = `${arr4}`;
  }
  items[2] = text2;
  if (arg3) {
    if (charAtResult == str8.charAt(1)) {
      if (charAtResult1 == str10.charAt(1)) {
        if (charAtResult2 == str12.charAt(1)) {
          [str13, str14] = items;
          const sum = str13.charAt(0) + str14.charAt(0);
          let sum1 = sum + items[2].charAt(0);
          const charAtResult3 = str13.charAt(0);
          const str15 = items[2];
        }
        return sum1;
      }
      charAtResult1 = items[1].charAt(0);
      str10 = items[1];
      const str9 = items[1];
    }
    charAtResult = items[0].charAt(0);
    const str7 = items[0];
    str8 = items[0];
  }
  sum1 = items.join("");
}
function rgbaToArgbHex(_r, _g, _b, _a) {
  let str = Math.round(255 * parseFloat(_a));
  str = str.toString(16);
  if (1 == str.length) {
    let str2 = "0";
    let text = `0${arr}`;
  } else {
    text = `${arr}`;
  }
  const items = [text, , , ];
  let str3 = round(_r);
  if (1 == str1.length) {
    let text1 = `0${arr3}`;
  } else {
    text1 = `${arr3}`;
  }
  items[1] = text1;
  str1 = str3.toString(16);
  str2 = round(_g).toString(16);
  if (1 == str2.length) {
    let text2 = `0${arr4}`;
  } else {
    text2 = `${arr4}`;
  }
  items[2] = text2;
  const str5 = round(_g);
  str3 = round(_b).toString(16);
  if (1 == str3.length) {
    let text3 = `0${arr5}`;
  } else {
    text3 = `${arr5}`;
  }
  items[3] = text3;
  return items.join("");
}
function desaturate(toHslResult) {
  let num = arg1;
  let num2 = 0;
  if (0 !== arg1) {
    if (!num) {
      num = 10;
    }
    num2 = num;
  }
  toHslResult = tinycolor(toHslResult).toHsl();
  toHslResult.s = toHslResult.s - num2 / 100;
  toHslResult.s = min(1, max(0, toHslResult.s));
  return tinycolor(toHslResult);
}
function saturate(toHslResult) {
  let num = arg1;
  let num2 = 0;
  if (0 !== arg1) {
    if (!num) {
      num = 10;
    }
    num2 = num;
  }
  toHslResult = tinycolor(toHslResult).toHsl();
  toHslResult.s = toHslResult.s + num2 / 100;
  toHslResult.s = min(1, max(0, toHslResult.s));
  return tinycolor(toHslResult);
}
function greyscale(toHslResult) {
  return tinycolor(toHslResult).desaturate(100);
}
function lighten(toHslResult) {
  let num = arg1;
  let num2 = 0;
  if (0 !== arg1) {
    if (!num) {
      num = 10;
    }
    num2 = num;
  }
  toHslResult = tinycolor(toHslResult).toHsl();
  toHslResult.l = toHslResult.l + num2 / 100;
  toHslResult.l = min(1, max(0, toHslResult.l));
  return tinycolor(toHslResult);
}
function brighten(toHslResult) {
  let num = arg1;
  let num2 = 0;
  if (0 !== arg1) {
    if (!num) {
      num = 10;
    }
    num2 = num;
  }
  const toRgbResult = tinycolor(toHslResult).toRgb();
  toRgbResult.r = max(0, min(255, toRgbResult.r - round(-num2 / 100 * 255)));
  toRgbResult.g = max(0, min(255, toRgbResult.g - round(-num2 / 100 * 255)));
  toRgbResult.b = max(0, min(255, toRgbResult.b - round(-num2 / 100 * 255)));
  return tinycolor(toRgbResult);
}
function darken(toHslResult) {
  let num = arg1;
  let num2 = 0;
  if (0 !== arg1) {
    if (!num) {
      num = 10;
    }
    num2 = num;
  }
  toHslResult = tinycolor(toHslResult).toHsl();
  toHslResult.l = toHslResult.l - num2 / 100;
  toHslResult.l = min(1, max(0, toHslResult.l));
  return tinycolor(toHslResult);
}
function spin(toHslResult) {
  toHslResult = tinycolor(toHslResult).toHsl();
  const result = (toHslResult.h + arg1) % 360;
  let sum = result;
  if (result < 0) {
    sum = 360 + result;
  }
  toHslResult.h = sum;
  return tinycolor(toHslResult);
}
function complement(toHslResult) {
  toHslResult = tinycolor(toHslResult).toHsl();
  toHslResult.h = (toHslResult.h + 180) % 360;
  return tinycolor(toHslResult);
}
function triad(toHslResult) {
  let obj = tinycolor(toHslResult);
  toHslResult = obj.toHsl();
  const h = toHslResult.h;
  const items = [tinycolor(toHslResult), , ];
  obj = { h: (h + 120) % 360, s: toHslResult.s, l: toHslResult.l };
  items[1] = tinycolor(obj);
  obj = { h: (h + 240) % 360, s: toHslResult.s, l: toHslResult.l };
  items[2] = tinycolor(obj);
  return items;
}
function tetrad(toHslResult) {
  let obj = tinycolor(toHslResult);
  toHslResult = obj.toHsl();
  const h = toHslResult.h;
  const items = [tinycolor(toHslResult), , , ];
  obj = { h: (h + 90) % 360, s: toHslResult.s, l: toHslResult.l };
  items[1] = tinycolor(obj);
  obj = { h: (h + 180) % 360, s: toHslResult.s, l: toHslResult.l };
  items[2] = tinycolor(obj);
  items[3] = tinycolor({ h: (h + 270) % 360, s: toHslResult.s, l: toHslResult.l });
  return items;
}
function splitcomplement(toHslResult) {
  let obj = tinycolor(toHslResult);
  toHslResult = obj.toHsl();
  const h = toHslResult.h;
  const items = [tinycolor(toHslResult), , ];
  obj = { h: (h + 72) % 360, s: toHslResult.s, l: toHslResult.l };
  items[1] = tinycolor(obj);
  obj = { h: (h + 216) % 360, s: toHslResult.s, l: toHslResult.l };
  items[2] = tinycolor(obj);
  return items;
}
function analogous(toHslResult) {
  let num = arg1;
  if (!arg1) {
    num = 6;
  }
  let num2 = arg2;
  if (!arg2) {
    num2 = 30;
  }
  toHslResult = tinycolor(toHslResult).toHsl();
  const result = 360 / num2;
  const items = [tinycolor(toHslResult)];
  toHslResult.h = (toHslResult.h - (result * num >> 1) + 720) % 360;
  let diff = num - 1;
  while (diff) {
    toHslResult.h = (toHslResult.h + result) % 360;
    let tmp4 = tinycolor;
    let arr = items.push(tinycolor(toHslResult));
    diff = diff - 1;
  }
  return items;
}
function monochromatic(toHslResult) {
  let tmp9;
  let num = arg1;
  if (!arg1) {
    num = 6;
  }
  let obj = tinycolor(toHslResult);
  let v = obj.toHsv().v;
  const items = [];
  let diff = tmp5 - 1;
  if (+num) {
    do {
      let tmp7 = tinycolor;
      obj = { h: null, s: null, v: null };
      obj[0] = tmp2;
      obj[1] = tmp3;
      obj[2] = v;
      let arr = items.push(tinycolor(obj));
      v = (v + tmp4) % 1;
      tmp9 = +diff;
      diff = tmp9 - 1;
    } while (tmp9);
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
  const tmp4 = min(arg1, max(0, parseFloat(str)));
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
let c3 = 0;
round = Math.round;
min = Math.min;
max = Math.max;
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
    const toRgbResult = this.toRgb();
    const result = toRgbResult.r / 255;
    const result1 = toRgbResult.g / 255;
    const result2 = toRgbResult.b / 255;
    if (result <= 0.03928) {
      let result3 = result / 12.92;
    } else {
      result3 = Math.pow((result + 0.055) / 1.055, 2.4);
    }
    const result4 = 0.2126 * result3;
    if (result1 <= 0.03928) {
      let result5 = result1 / 12.92;
    } else {
      result5 = Math.pow((result1 + 0.055) / 1.055, 2.4);
    }
    const result6 = 0.7152 * result5;
    if (result2 <= 0.03928) {
      let result7 = result2 / 12.92;
    } else {
      result7 = Math.pow((result2 + 0.055) / 1.055, 2.4);
    }
    return result4 + result6 + 0.0722 * result7;
  },
  setAlpha(_a) {
    const parsed = parseFloat(_a);
    let isNaNResult = isNaN(parsed);
    if (!isNaNResult) {
      isNaNResult = parsed < 0;
    }
    if (!isNaNResult) {
      isNaNResult = parsed > 1;
    }
    let num3 = parsed;
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
    let result = bound01(this._r, 255);
    const tmp2 = bound01(_g, 255);
    const tmp3 = bound01(_b, 255);
    const tmp4 = max(result, tmp2, tmp3);
    const tmp5 = min(result, tmp2, tmp3);
    const diff = tmp4 - tmp5;
    let num = 0;
    if (0 !== tmp4) {
      num = diff / tmp4;
    }
    if (tmp4 == tmp5) {
      const obj = { h: null, s: null, v: null, a: null };
      obj[0] = 0;
      obj[1] = num;
      obj[2] = tmp4;
      obj[3] = this._a;
      return obj;
    } else {
      if (result === tmp4) {
        result = (tmp2 - tmp3) / diff;
        let num4 = 0;
        if (tmp2 < tmp3) {
          num4 = 6;
        }
        let sum = result + num4;
        const result1 = sum / 6;
      } else if (tmp2 !== tmp4) {
        if (tmp3 === tmp4) {
          sum = (result - tmp2) / diff + 4;
        }
      }
      result = (tmp3 - result) / diff;
      sum = result + 2;
    }
  },
  toHsvString() {
    let _b;
    let _g;
    const self = this;
    ({ _g, _b } = this);
    let result = bound01(this._r, 255);
    const tmp2 = bound01(_g, 255);
    const tmp3 = bound01(_b, 255);
    const tmp4 = max(result, tmp2, tmp3);
    const tmp5 = min(result, tmp2, tmp3);
    const diff = tmp4 - tmp5;
    let num = 0;
    if (0 !== tmp4) {
      num = diff / tmp4;
    }
    if (tmp4 == tmp5) {
      const tmp10 = round(0);
      const tmp11 = round(100 * num);
      const tmp12 = round(100 * tmp4);
      if (1 == self._a) {
        let text = `${"hsv(" + tmp10 + ", " + tmp11 + "%, " + tmp12}%)`;
      } else {
        text = `${"hsva(" + tmp10 + ", " + tmp11 + "%, " + tmp12 + "%, " + self._roundA})`;
      }
      return text;
    } else {
      if (result === tmp4) {
        result = (tmp2 - tmp3) / diff;
        let num4 = 0;
        if (tmp2 < tmp3) {
          num4 = 6;
        }
        let sum = result + num4;
        const result1 = sum / 6;
      } else if (tmp2 !== tmp4) {
        if (tmp3 === tmp4) {
          sum = (result - tmp2) / diff + 4;
        }
      }
      result = (tmp3 - result) / diff;
      sum = result + 2;
    }
  },
  toHsl() {
    const tmp = rgbToHsl(this._r, this._g, this._b);
    return { h: 360 * tmp.h, s: tmp.s, l: tmp.l, a: this._a };
  },
  toHslString() {
    const tmp = rgbToHsl(this._r, this._g, this._b);
    const tmp2 = round(360 * tmp.h);
    const tmp3 = round(100 * tmp.s);
    const tmp4 = round(100 * tmp.l);
    if (1 == this._a) {
      let text = `${"hsl(" + tmp2 + ", " + tmp3 + "%, " + tmp4}%)`;
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
    ({ _g, _b, _a } = this);
    let str = round(this._r);
    str = str.toString(16);
    if (1 == str.length) {
      let str2 = "0";
      let text = `0${arr}`;
    } else {
      text = `${arr}`;
    }
    const items = [text, , , ];
    let str3 = tmp(_g);
    if (1 == str1.length) {
      let text1 = `0${arr3}`;
    } else {
      text1 = `${arr3}`;
    }
    items[1] = text1;
    str1 = str3.toString(16);
    str2 = round(_b).toString(16);
    if (1 == str2.length) {
      let text2 = `0${arr4}`;
    } else {
      text2 = `${arr4}`;
    }
    items[2] = text2;
    const str5 = round(_b);
    str3 = Math.round(255 * parseFloat(_a)).toString(16);
    if (1 == str3.length) {
      let text3 = `0${arr5}`;
    } else {
      text3 = `${arr5}`;
    }
    items[3] = text3;
    if (arg0) {
      if (charAtResult == str10.charAt(1)) {
        if (charAtResult1 == str12.charAt(1)) {
          if (charAtResult2 == str14.charAt(1)) {
            if (charAtResult3 == str16.charAt(1)) {
              [str17, str18] = items;
              const sum = str17.charAt(0) + str18.charAt(0);
              const sum1 = sum + items[2].charAt(0);
              let sum2 = sum1 + items[3].charAt(0);
              const charAtResult4 = str17.charAt(0);
              const str19 = items[2];
              const str20 = items[3];
            }
            return sum2;
          }
          charAtResult2 = items[2].charAt(0);
          const str13 = items[2];
          str14 = items[2];
        }
        charAtResult1 = items[1].charAt(0);
        const str11 = items[1];
        str12 = items[1];
      }
      charAtResult = items[0].charAt(0);
      str10 = items[0];
      const str9 = items[0];
    }
    sum2 = items.join("");
  },
  toHex8String(arg0) {
    return "#" + this.toHex8(arg0);
  },
  toRgb(arg0) {
    return { r: round(this._r), g: round(this._g), b: round(this._b), a: this._a };
  },
  toRgbString() {
    const self = this;
    if (1 == this._a) {
      const text = `rgb(${round(self._r)}`;
      const text1 = `${`rgb(${round(self._r)}`}, ${round(self._g)}`;
      let text2 = `${tmp7 + ", " + round(self._b)})`;
    } else {
      const text3 = `rgba(${round(self._r)}`;
      const text4 = `${`rgba(${round(self._r)}`}, ${round(self._g)}`;
      text2 = `${tmp3 + ", " + round(self._b) + ", " + self._roundA})`;
    }
    return text2;
  },
  toPercentageRgb() {
    return { r: `${round(100 * bound01(this._r, 255))}%`, g: `${round(100 * bound01(this._g, 255))}%`, b: `${round(100 * bound01(this._b, 255))}%`, a: this._a };
  },
  toPercentageRgbString() {
    const self = this;
    if (1 == this._a) {
      const text = `rgb(${round(100 * bound01(self._r, 255))}`;
      const text1 = `${`rgb(${round(100 * bound01(self._r, 255))}`}%, ${round(100 * bound01(self._g, 255))}`;
      let text2 = `${tmp4 + "%, " + round(100 * bound01(self._b, 255))}%)`;
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
        const tmp4 = obj[rgbToHex(undefined, self._r, self._g, self._b, true)] || false;
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
    let _format = arg0;
    if (!arg0) {
      _format = self._format;
    }
    let tmp2 = self._a < 1;
    if (tmp2) {
      tmp2 = self._a >= 0;
    }
    if (tmp) {
      if (tmp2) {
        if ("name" === _format) {
          if (0 === self._a) {
            let toNameResult = self.toName();
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
    let tmp4 = "hex" !== _format;
    if (tmp4) {
      tmp4 = "hex6" !== _format;
    }
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
    const call = slice.call;
    const applyResult = brighten.apply(null, items.concat(typeof call === "unknown" ? slice() : call(arg1)));
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
    const call = slice.call;
    return analogous.apply(null, items.concat(typeof call === "unknown" ? slice() : call(arg1)));
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
obj = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "0ff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "00f", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", burntsienna: "ea7e5d", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "0ff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "f0f", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "663399", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" };
tinycolor.names = obj;
obj = {};
for (const key10080 in obj) {
  let tmp9 = key10080;
  if (!obj.hasOwnProperty(key10080)) {
    continue;
  } else {
    obj[obj[key10080]] = key10080;
    continue;
  }
  continue;
}
tinycolor.hexNames = obj;
obj = { CSS_UNIT: null, rgb: null, rgba: null, hsl: null, hsla: null, hsv: null, hsva: null, hex3: null, hex6: null, hex4: null, hex8: null };
const regExp = new RegExp("(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)");
obj[0] = regExp;
const regExp1 = new RegExp("rgb[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?");
obj[1] = regExp1;
const regExp2 = new RegExp("rgba[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?");
obj[2] = regExp2;
const regExp3 = new RegExp("hsl[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?");
obj[3] = regExp3;
const regExp4 = new RegExp("hsla[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?");
obj[4] = regExp4;
const regExp5 = new RegExp("hsv[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?");
obj[5] = regExp5;
const regExp6 = new RegExp("hsva[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?");
obj[6] = regExp6;
obj[7] = /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
obj[8] = /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/;
obj[9] = /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
obj[10] = /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/;
if (undefined !== module) {
  if (module.exports) {
    module.exports = tinycolor;
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(() => tinycolor);
  }
}
window.tinycolor = tinycolor;
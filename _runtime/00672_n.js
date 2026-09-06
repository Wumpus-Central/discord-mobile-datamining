// === Module 672: n ===

// Module 672 (n)
let fn = function n() {
  let length;
  let length2;
  let obj = {};
  let f107605 = obj;
  let items = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"];
  let num = 0;
  if (0 < items.length) {
    do {
      let str = items[num];
      let text = `[object ${str}`;
      obj[`[object ${str}` + "]"] = str.toLowerCase();
      num = num + 1;
      length = items.length;
    } while (num < length);
  }
  function type$p(arg0) {

  }
  function clip_rgb(applyResult1) {
    applyResult1._clipped = false;
    applyResult1._unclipped = applyResult1.slice(0);
    let num = 0;
    do {
      let tmp = num;
      if (num < 3) {
        let tmp2 = applyResult1[num] < 0 || applyResult1[num] > 255;
        if (tmp2) {
          applyResult1._clipped = true;
        }
        let num4 = applyResult1[num];
        let num5 = 0;
        if (num4 >= 0) {
          if (num4 > 255) {
            num4 = 255;
          }
          num5 = num4;
        }
        applyResult1[num] = num5;
      } else if (3 === num) {
        let num2 = applyResult1[num];
        let num3 = 0;
        if (num2 >= 0) {
          if (num2 > 1) {
            num2 = 1;
          }
          num3 = num2;
        }
        applyResult1[num] = num3;
      }
      num = num + 1;
    } while (num <= 3);
    return applyResult1;
  }
  function unpack(arg0, arg1) {
    closure_0 = arg0;
    let tmp = arg1;
    if (undefined === arg1) {
      tmp = null;
    }
    if (arg0.length >= 3) {
      const _Array = Array;
      const call2 = slice.call;
      typeof call2 === "unknown" ? slice() : call2(arg0);
    } else {
      const first = arg0[0];
      if (typeof type$p !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const _Object = Object;
      const call = toString.call;
      if ("object" == tmp4) {
        if (tmp) {
          const parts = tmp.split("");
          const found = parts.filter((arg0) => undefined !== dependencyMap[0][arg0]);
          let mapped = found.map((arg0) => dependencyMap[0][arg0]);
        }
        return mapped;
      }
      mapped = arg0[0];
      const tmp2 = closure_0;
      tmp4 = closure_0[typeof call === "unknown" ? toString(first) : call(toString, first)] || "object";
    }
  }
  function last(arg0) {

  }
  let result = 2 * PI;
  obj = { format: {}, autodetect: [] };
  class Color {
    constructor() {
      items = [];
      tmp = +arguments.length;
      diff = tmp - 1;
      if (tmp) {
        do {
          items[diff] = arguments[diff];
          tmp3 = +diff;
          diff = tmp3 - 1;
        } while (tmp3);
      }
      first = items[0];
      if (typeof type$p !== "function") {
        str4 = "Trying to call a non-function";
        throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      tmp5 = f107605;
      toString = Object.prototype.toString;
      call = toString.call;
      tmp6 = tmp5[typeof call === "unknown" ? toString(first) : call(toString, first)] || "object";
      self = this;
      if ("object" === tmp6) {
        if (items[0].constructor) {
          if (items[0].constructor === self.constructor) {
            return items[0];
          }
        }
      }
      if (typeof last !== "function") {
        str5 = "Trying to call a non-function";
        throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
      }
      tmp7 = null;
      if (items.length >= 2) {
        num = 1;
        diff1 = items.length - 1;
        tmp9 = type$p;
        tmp10 = items[diff1];
        if (typeof type$p !== "function") {
          str6 = "Trying to call a non-function";
          throwTypeErrorResult2 = HermesBuiltin.throwTypeError();
        }
        _Object = Object;
        toString2 = Object.prototype.toString;
        call2 = toString2.call;
        tmp11 = tmp5[typeof call2 === "unknown" ? toString2(tmp10) : call2(toString2, tmp10)] || "object";
        str = "string";
        formatted = null;
        if ("string" == tmp11) {
          str2 = items[diff1];
          formatted = str2.toLowerCase();
        }
        tmp7 = formatted;
      }
      flag = false;
      tmp13 = tmp7;
      if (!tmp7) {
        tmp14 = closure_6;
        if (!closure_6.sorted) {
          autodetect = tmp14.autodetect;
          tmp14.autodetect = autodetect.sort((p, p2) => p2.p - p.p);
          flag2 = true;
          tmp14.sorted = true;
        }
        autodetect = tmp14.autodetect;
        num2 = 0;
        num3 = 1;
        flag = true;
        tmp13 = tmp7;
        if (0 < autodetect.length) {
          tmp15 = autodetect[num2];
          test = tmp15.test;
          applyResult = test.apply(tmp15, items);
          tmp17 = num2;
          flag = true;
          tmp13 = applyResult;
          while (!applyResult) {
            sum = num2 + 1;
            num2 = sum;
            flag = true;
            tmp13 = applyResult;
            if (sum >= autodetect.length) {
              break;
            }
          }
        }
      }
      if (closure_6.format[tmp13]) {
        obj = closure_6.format[tmp13];
        substr = items;
        if (!flag) {
          num4 = -1;
          num5 = 0;
          substr = items.slice(0, -1);
        }
        applyResult1 = obj.apply(null, substr);
        tmp25 = clip_rgb;
        num6 = 0;
        tmp26 = clip_rgb(applyResult1);
        self._rgb = applyResult1;
        num7 = 3;
        if (3 === self._rgb.length) {
          _rgb = self._rgb;
          num8 = 1;
          arr = _rgb.push(1);
        }
        return;
      } else {
        _Error = Error;
        str3 = "unknown format: ";
        tmp19 = new.target;
        tmp20 = new.target;
        error = new Error("unknown format: " + items);
        tmp22 = error;
        throw error;
      }
    }
    toString() {
      self = this;
      hex = this.hex;
      if (typeof type$p !== "function") {
        str4 = "Trying to call a non-function";
        throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      toString = Object.prototype.toString;
      call = toString.call;
      tmp = f107605;
      tmp2 = tmp[typeof call === "unknown" ? toString(hex) : call(toString, hex)] || "object";
      if ("function" == tmp2) {
        hexResult = self.hex();
      } else {
        _rgb = self._rgb;
        str = ",";
        str2 = "[";
        str3 = "]";
        hexResult = `${"[" + _rgb.join(",")}]`;
      }
      return hexResult;
    }
    cmyk() {
      return rgb2cmyk_1(this._rgb);
    }
    css(arg0) {
      return rgb2css_1(this._rgb, arg0);
    }
    gl() {
      _rgb = this._rgb;
      items = [, , , ];
      items[0] = _rgb[0] / 255;
      items[1] = _rgb[1] / 255;
      items[2] = _rgb[2] / 255;
      items[3] = _rgb[3];
      return items;
    }
    hcg() {
      return rgb2hcg_1(this._rgb);
    }
    hex(arg0) {
      return rgb2hex_1(this._rgb, arg0);
    }
    hsi() {
      return rgb2hsi_1(this._rgb);
    }
    hsl() {
      return rgb2hsl_1(this._rgb);
    }
    hsv() {
      return rgb2hsv$1(this._rgb);
    }
    lab() {
      return rgb2lab_1(this._rgb);
    }
    lch() {
      return rgb2lch_1(this._rgb);
    }
    hcl() {
      obj = rgb2lch_1(this._rgb);
      return obj.reverse();
    }
    name() {
      tmp = rgb2hex_1(this._rgb, "rgb");
      keys = Object.keys(closure_121);
      num = 0;
      if (0 < keys.length) {
        str = keys[num];
        tmp2 = closure_121;
        tmp3 = num;
        while (closure_121[str] !== tmp) {
          num = num + 1;
        }
        return str.toLowerCase();
      }
      return tmp;
    }
    num() {
      return rgb2num_1(this._rgb);
    }
    rgb(arg0) {
      flag = arg0;
      if (undefined === arg0) {
        flag = true;
      }
      self = this;
      if (false === flag) {
        _rgb = self._rgb;
        num3 = 3;
        num4 = 0;
        substr = _rgb.slice(0, 3);
      } else {
        _rgb1 = self._rgb;
        num = 3;
        num2 = 0;
        substr1 = _rgb1.slice(0, 3);
        tmp = round;
        substr = substr1.map(round);
      }
      return substr;
    }
    rgba(arg0) {
      c0 = arg0;
      if (undefined === arg0) {
        flag = true;
        c0 = true;
      }
      _rgb = this._rgb;
      substr = _rgb.slice(0, 4);
      return substr.map((arg0, arg1) => {
        let tmp = arg0;
        if (arg1 < 3) {
          let tmp3 = arg0;
          if (false !== c0) {
            tmp3 = closure_1_132(arg0);
          }
          tmp = tmp3;
        }
        return tmp;
      });
    }
    oklab() {
      return rgb2oklab_1(this._rgb);
    }
    oklch() {
      return rgb2oklch_1(this._rgb);
    }
    alpha(arg0, arg1) {
      flag = arg1;
      if (undefined === arg1) {
        flag = false;
      }
      self = this;
      if (undefined !== arg0) {
        tmp = type$p;
        if (typeof type$p !== "function") {
          str3 = "Trying to call a non-function";
          throwTypeErrorResult = HermesBuiltin.throwTypeError();
        }
        tmp3 = globalThis;
        _Object = Object;
        toString = Object.prototype.toString;
        call = toString.call;
        tmp2 = f107605;
        tmp4 = tmp2[typeof call === "unknown" ? toString(arg0) : call(toString, arg0)] || "object";
        str = "number";
        if ("number" === tmp4) {
          if (flag) {
            num = 3;
            self._rgb[3] = arg0;
            tmp7 = self;
          } else {
            tmp5 = Color;
            items = [, , , ];
            items[0] = self._rgb[0];
            items[1] = self._rgb[1];
            items[2] = self._rgb[2];
            items[3] = arg0;
            tmp6 = new.target;
            str2 = "rgb";
            tmp7 = Color(items, "rgb");
          }
          tmp8 = tmp7;
        }
      }
      return self._rgb[3];
    }
    clipped() {
      tmp = this._rgb._clipped || false;
      return tmp;
    }
    darken(arg0) {
      num = arg0;
      if (undefined === arg0) {
        num = 1;
      }
      labResult = this.lab();
      labResult[0] = labResult[0] - closure_163.Kn * num;
      obj = Color(labResult, "lab");
      return obj.alpha(this.alpha(), true);
    }
    brighten(arg0) {
      num = arg0;
      if (undefined === arg0) {
        num = 1;
      }
      return this.darken(-num);
    }
    get(arg0) {
      parts = arg0.split(".");
      [arr, tmp2] = parts;
      tmp3 = this[arr]();
      if (tmp2) {
        num = 2;
        num2 = 0;
        index = arr.indexOf(tmp2);
        str = "ok";
        if ("ok" === arr.substr(0, 2)) {
          num2 = 2;
        }
        diff = index - num2;
        num3 = -1;
        if (-1 < diff) {
          return tmp3[diff];
        } else {
          tmp6 = globalThis;
          _Error = Error;
          str2 = "unknown channel ";
          str3 = " in mode ";
          tmp7 = new.target;
          tmp8 = new.target;
          error = new Error("unknown channel " + tmp2 + " in mode " + arr);
          tmp10 = error;
          throw error;
        }
      } else {
        return tmp3;
      }
    }
    luminance(arg0) {
      self = this;
      closure_0 = arg0;
      if (undefined !== arg0) {
        tmp = type$p;
        if (typeof type$p !== "function") {
          str6 = "Trying to call a non-function";
          throwTypeErrorResult = HermesBuiltin.throwTypeError();
        }
        tmp3 = globalThis;
        _Object = Object;
        toString = Object.prototype.toString;
        call = toString.call;
        tmp2 = closure_0;
        tmp4 = tmp2[typeof call === "unknown" ? toString(arg0) : call(toString, arg0)] || "object";
        str = "number";
        if ("number" === tmp4) {
          num = 0;
          if (0 === arg0) {
            tmp39 = Color;
            items = [0, 0, 0];
            items[3] = self._rgb[3];
            tmp40 = new.target;
            str5 = "rgb";
            tmp41 = Color(items, "rgb");
            tmp42 = tmp41;
            return tmp41;
          } else {
            num4 = 1;
            if (1 === arg0) {
              tmp35 = Color;
              items1 = [255, 255, 255];
              items1[3] = self._rgb[3];
              tmp36 = new.target;
              str4 = "rgb";
              tmp37 = Color(items1, "rgb");
              tmp38 = tmp37;
              return tmp37;
            } else {
              num5 = 20;
              closure_1 = 20;
              test = function test(interpolateResult, interpolateResult2) {
                interpolateResult = interpolateResult.interpolate(interpolateResult2, 0.5, "rgb");
                const luminanceResult = interpolateResult.luminance();
                let tmp3 = interpolateResult;
                if (Math.abs(closure_0 - luminanceResult) >= 0.0000001) {
                  closure_1 = tmp5 - 1;
                  tmp3 = interpolateResult;
                  if (+closure_1) {
                    if (luminanceResult > closure_0) {
                      let tmp7 = test(interpolateResult, interpolateResult);
                    } else {
                      tmp7 = test(interpolateResult, interpolateResult2);
                    }
                  }
                }
                return tmp3;
              };
              if (self.luminance() > arg0) {
                tmp18 = new.target;
                tmp17 = Color;
                obj2 = Color([0, 0, 0]);
                tmp19 = obj2;
                str3 = "rgb";
                num2 = 0.5;
                interpolateResult = obj2.interpolate(self, 0.5, "rgb");
                luminanceResult = interpolateResult.luminance();
                _Math3 = Math;
                num3 = 0.0000001;
                tmp21 = interpolateResult;
                if (Math.abs(arg0 - luminanceResult) >= 0.0000001) {
                  tmp51 = closure_1;
                  tmp52 = +closure_1;
                  closure_1 = tmp52 - 1;
                  tmp21 = interpolateResult;
                  if (tmp52) {
                    if (luminanceResult > arg0) {
                      interpolateResult1 = obj2.interpolate(interpolateResult, 0.5, `rgb`);
                      str3 = interpolateResult1.luminance();
                      _Math5 = tmp3.Math;
                      tmp3 = interpolateResult1;
                      if (_Math5.abs(arg0 - str3) >= 0.0000001) {
                        tmp27 = closure_1;
                        tmp28 = +closure_1;
                        closure_1 = tmp28 - 1;
                        tmp3 = interpolateResult1;
                        if (tmp28) {
                          tmp29 = str3 > arg0 ? test(obj2, interpolateResult1) : test(interpolateResult1, interpolateResult);
                        }
                      }
                      tmp23 = tmp3;
                    } else {
                      interpolateResult2 = interpolateResult.interpolate(self, 0.5, str3);
                      luminanceResult1 = interpolateResult2.luminance();
                      _Math4 = Math;
                      tmp23 = interpolateResult2;
                      if (Math.abs(arg0 - luminanceResult1) >= 0.0000001) {
                        tmp24 = closure_1;
                        tmp25 = +closure_1;
                        closure_1 = tmp25 - 1;
                        tmp23 = interpolateResult2;
                        if (tmp25) {
                          tmp26 = luminanceResult1 > arg0 ? test(interpolateResult, interpolateResult2) : test(interpolateResult2, self);
                        }
                      }
                    }
                    tmp30 = tmp23;
                  }
                }
                obj6 = tmp21;
                tmp16 = tmp17;
              } else {
                tmp45 = new.target;
                tmp44 = Color;
                tmp46 = Color([255, 255, 255]);
                tmp47 = tmp46;
                str2 = "rgb";
                num6 = 0.5;
                interpolateResult3 = self.interpolate(tmp46, 0.5, "rgb");
                luminanceResult2 = interpolateResult3.luminance();
                _Math6 = Math;
                num7 = 0.0000001;
                obj6 = interpolateResult3;
                if (Math.abs(arg0 - luminanceResult2) >= 0.0000001) {
                  tmp49 = closure_1;
                  tmp50 = +closure_1;
                  closure_1 = tmp50 - 1;
                  obj6 = interpolateResult3;
                  if (tmp50) {
                    if (luminanceResult2 > arg0) {
                      str2 = self.interpolate(interpolateResult3, 0.5, `rgb`);
                      luminanceResult3 = str2.luminance();
                      _Math2 = Math;
                      tmp11 = str2;
                      if (Math.abs(arg0 - luminanceResult3) >= 0.0000001) {
                        tmp12 = closure_1;
                        tmp13 = +closure_1;
                        closure_1 = tmp13 - 1;
                        tmp11 = str2;
                        if (tmp13) {
                          tmp14 = luminanceResult3 > arg0 ? test(self, str2) : test(str2, interpolateResult3);
                        }
                      }
                      tmp6 = tmp11;
                    } else {
                      interpolateResult4 = interpolateResult3.interpolate(tmp46, 0.5, str2);
                      luminanceResult4 = interpolateResult4.luminance();
                      _Math = Math;
                      tmp6 = interpolateResult4;
                      if (Math.abs(arg0 - luminanceResult4) >= 0.0000001) {
                        tmp7 = closure_1;
                        tmp8 = +closure_1;
                        closure_1 = tmp8 - 1;
                        tmp6 = interpolateResult4;
                        if (tmp8) {
                          tmp9 = luminanceResult4 > arg0 ? test(interpolateResult3, interpolateResult4) : test(interpolateResult4, tmp46);
                        }
                      }
                    }
                    tmp15 = tmp6;
                  }
                }
                tmp16 = tmp44;
              }
              rgbResult = obj6.rgb();
              items2 = [];
              items2[0] = self._rgb[3];
              tmp31 = new.target;
              tmp32 = new.target;
              tmp16 = new tmp16(rgbResult.concat(items2));
              tmp34 = tmp16;
              return tmp16;
            }
          }
        }
      }
      _rgb = self._rgb;
      return rgb2luminance.apply(undefined, _rgb.slice(0, 3));
    }
    premultiply(arg0) {
      flag = arg0;
      if (undefined === arg0) {
        flag = false;
      }
      self = this;
      _rgb = this._rgb;
      tmp = _rgb[3];
      if (flag) {
        items = [, , , ];
        items[0] = _rgb[0] * tmp;
        items[1] = _rgb[1] * tmp;
        items[2] = _rgb[2] * tmp;
        items[3] = tmp;
        self._rgb = items;
        tmp4 = self;
      } else {
        tmp2 = Color;
        items1 = [, , , ];
        items1[0] = _rgb[0] * tmp;
        items1[1] = _rgb[1] * tmp;
        items1[2] = _rgb[2] * tmp;
        items1[3] = tmp;
        tmp3 = new.target;
        str = "rgb";
        tmp4 = Color(items1, "rgb");
      }
      return tmp4;
    }
    saturate(arg0) {
      num = arg0;
      if (undefined === arg0) {
        num = 1;
      }
      self = this;
      lchResult = this.lch();
      lchResult[1] = lchResult[1] + closure_175.Kn * num;
      if (lchResult[1] < 0) {
        lchResult[1] = 0;
      }
      obj = Color(lchResult, "lch");
      return obj.alpha(self.alpha(), true);
    }
    desaturate(arg0) {
      num = arg0;
      if (undefined === arg0) {
        num = 1;
      }
      return this.saturate(-num);
    }
    set(arg0, arg1, arg2) {
      flag = arg2;
      if (undefined === arg2) {
        flag = false;
      }
      self = this;
      parts = arg0.split(".");
      [arr, tmp2] = parts;
      tmp3 = this[arr]();
      if (tmp2) {
        num = 2;
        num2 = 0;
        index = arr.indexOf(tmp2);
        str = "ok";
        num3 = 0;
        if ("ok" === arr.substr(0, 2)) {
          num3 = 2;
        }
        diff = index - num3;
        num4 = -1;
        if (-1 < diff) {
          tmp11 = type$p;
          if (typeof type$p !== "function") {
            str11 = "Trying to call a non-function";
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          tmp12 = arg1;
          tmp13 = f107605;
          tmp14 = globalThis;
          _Object = Object;
          toString = Object.prototype.toString;
          call = toString.call;
          tmp15 = tmp13[typeof call === "unknown" ? toString(arg1) : call(toString, arg1)] || "object";
          str4 = "string";
          if ("string" == tmp15) {
            charAtResult = arg1.charAt(0);
            str7 = "+";
            if ("+" !== charAtResult) {
              str8 = "-";
              if ("-" !== charAtResult) {
                str9 = "*";
                if ("*" === charAtResult) {
                  num6 = 1;
                  tmp3[diff] = tmp3[diff] * +arg1.substr(1);
                } else {
                  str10 = "/";
                  if ("/" === charAtResult) {
                    num5 = 1;
                    tmp3[diff] = tmp3[diff] / +arg1.substr(1);
                  } else {
                    tmp3[diff] = +arg1;
                  }
                }
              }
            }
            tmp3[diff] = tmp3[diff] + +arg1;
          } else {
            if (typeof tmp11 !== "function") {
              str12 = "Trying to call a non-function";
              throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
            }
            _Object2 = Object;
            toString2 = Object.prototype.toString;
            call2 = toString2.call;
            tmp16 = tmp13[typeof call2 === "unknown" ? toString2(arg1) : call2(toString2, arg1)] || "object";
            str5 = "number";
            if ("number" !== tmp16) {
              _Error2 = Error;
              tmp17 = new.target;
              str6 = "unsupported value for Color.set";
              tmp18 = new.target;
              error = new Error("unsupported value for Color.set");
              tmp20 = error;
              throw error;
            } else {
              tmp3[diff] = arg1;
            }
          }
          tmp22 = Color;
          tmp23 = new.target;
          tmp24 = Color(tmp3, arr);
          tmp25 = tmp24;
          tmp26 = tmp24;
          if (flag) {
            self._rgb = tmp24._rgb;
            tmp26 = self;
          }
          return tmp26;
        } else {
          tmp6 = globalThis;
          _Error = Error;
          str2 = "unknown channel ";
          str3 = " in mode ";
          tmp7 = new.target;
          tmp8 = new.target;
          error1 = new Error("unknown channel " + tmp2 + " in mode " + arr);
          tmp10 = error1;
          throw error1;
        }
      } else {
        return tmp3;
      }
    }
  }
  function chroma$k(arg0) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [null];
    return new bind.apply(chroma$k.Color, items1.concat(items))();
  }
  chroma$k.Color = Color;
  chroma$k.version = "2.4.2";
  function rgb2cmyk_1(_rgb) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    let num = 0;
    const tmp4 = unpack(items, "rgb");
    result = tmp4[0] / 255;
    result1 = tmp4[1] / 255;
    result2 = tmp4[2] / 255;
    const diff1 = 1 - max(result, max(result1, result2));
    if (diff1 < 1) {
      num = 1 / (1 - diff1);
    }
    const items1 = [(1 - result - diff1) * num, (1 - result1 - diff1) * num, (1 - result2 - diff1) * num, diff1];
    return items1;
  }
  chroma$k.cmyk = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [null];
    return new bind.apply(Color, items1.concat(items, ["cmyk"]))();
  };
  obj.format.cmyk = function cmyk2rgb_1() {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const arr2 = unpack(items, "cmyk");
    [tmp4, tmp5, tmp6, tmp7] = arr2;
    let num = 1;
    if (arr2.length > 4) {
      num = arr2[4];
    }
    if (1 === tmp7) {
      const items1 = [0, 0, 0, num];
      let items2 = items1;
    } else {
      let num2 = 0;
      if (tmp4 < 1) {
        num2 = 255 * (1 - tmp4) * (1 - tmp7);
      }
      items2 = [num2, , , ];
      let num4 = 0;
      if (tmp5 < 1) {
        num4 = 255 * (1 - tmp5) * (1 - tmp7);
      }
      items2[1] = num4;
      let num6 = 0;
      if (tmp6 < 1) {
        num6 = 255 * (1 - tmp6) * (1 - tmp7);
      }
      items2[2] = num6;
      items2[3] = num;
    }
    return items2;
  };
  let autodetect = obj.autodetect;
  obj = {
    p: 2,
    test() {
      let tmp3;
      const items = [];
      const tmp = +arguments.length;
      let diff = tmp - 1;
      if (tmp) {
        do {
          items[diff] = arguments[diff];
          tmp3 = +diff;
          diff = tmp3 - 1;
        } while (tmp3);
      }
      const arr2 = unpack(items, "cmyk");
      if (typeof type$p !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const call = toString.call;
      if ("array" === tmp5) {
        if (4 === arr2.length) {
          return "cmyk";
        }
      }
    }
  };
  function limit$2(arg0, arg1, arg2) {

  }
  let result1 = PI / 3;
  let result2 = PI / 180;
  let result3 = 180 / PI;
  autodetect.push(obj);
  function rnd(arg0) {

  }
  function rgb2hsl_1(_rgb) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const arr2 = unpack(items, "rgba");
    result = arr2[0] / 255;
    result1 = arr2[1] / 255;
    result2 = arr2[2] / 255;
    const bound = Math.min(result, result1, result2);
    const bound1 = Math.max(result, result1, result2);
    result3 = (bound1 + bound) / 2;
    if (bound1 === bound) {
      const _Number = Number;
      let _NaN = Number.NaN;
      let num2 = 0;
    } else if (result3 < 0.5) {
      num2 = (bound1 - bound) / (bound1 + bound);
    } else {
      num2 = (bound1 - bound) / (2 - bound1 - bound);
    }
    if (result == bound1) {
      _NaN = (result1 - result2) / (bound1 - bound);
    } else if (result1 == bound1) {
      _NaN = 2 + (result2 - result) / (bound1 - bound);
    } else if (result2 == bound1) {
      _NaN = 4 + (result - result1) / (bound1 - bound);
    }
    const result4 = _NaN * 60;
    let sum = result4;
    if (result4 < 0) {
      sum = result4 + 360;
    }
    if (arr2.length > 3) {
      if (undefined !== arr2[3]) {
        const items1 = [sum, num2, result3, arr2[3]];
        let items2 = items1;
      }
      return items2;
    }
    items2 = [sum, num2, result3];
  }
  function hsl2css_1(arg0, arg1) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const arr2 = unpack(items, "hsla");
    if (typeof last !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let str = null;
    if (items.length >= 2) {
      const diff1 = items.length - 1;
      if (typeof type$p !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const _Object = Object;
      const call = toString.call;
      let formatted = null;
      if ("string" == tmp9) {
        formatted = items[diff1].toLowerCase();
        const str3 = items[diff1];
      }
      str = formatted;
      const tmp7 = f107605;
      tmp9 = f107605[typeof call === "unknown" ? toString(items[diff1]) : call(toString, items[diff1])] || "object";
    }
    if (!str) {
      str = "lsa";
    }
    if (typeof rnd !== "function") {
      HermesBuiltin.throwTypeError();
    }
    arr2[0] = Math.round(100 * (arr2[0] || 0)) / 100;
    result = 100 * arr2[1];
    if (typeof rnd !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let num2 = 1;
    arr2[1] = `${Math.round(100 * tmp13) / 100}%`;
    result1 = 100 * arr2[2];
    if (typeof rnd !== "function") {
      HermesBuiltin.throwTypeError();
    }
    arr2[2] = `${Math.round(100 * tmp14) / 100}%`;
    if ("hsla" === str) {
      if (arr2.length > 3) {
        num2 = arr2[3];
      }
      arr2[3] = num2;
      str = "hsla";
    } else {
      arr2.length = 3;
    }
    return `${str}(` + arr2.join(",") + ")";
  }
  round = Math.round;
  function hsl2rgb_1(substr4) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const arr2 = unpack(items, "hsl");
    let items4 = arr2[1];
    if (0 === items4) {
      result = 255 * tmp5;
      while (true) {
        let num11 = 3;
        if (arr2.length > 3) {
          let items1 = [tmp11, tmp10, result, arr2[3]];
          let items2 = items1;
        } else {
          items2 = [tmp11, tmp10, result, ];
          let num12 = 1;
          items2[3] = 1;
        }
        return items2;
      }
    } else {
      const items3 = [0, 0, 0];
      if (tmp5 < 0.5) {
        result1 = tmp5 * (1 + items4);
      } else {
        result1 = tmp5 + items4 - tmp5 * items4;
      }
      items4 = [0, 0, 0];
      const diff1 = 2 * tmp5 - result1;
      result2 = tmp4 / 360;
      items4[0] = result2 + 0.3333333333333333;
      items4[1] = result2;
      items4[2] = result2 - 0.3333333333333333;
    }
  }
  const re28 = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/;
  const re29 = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/;
  const re30 = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
  const re31 = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
  const re32 = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
  const re33 = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
  round = Math.round;
  function css2rgb$1(str) {
    const str2 = str.toLowerCase().trim();
    if (!obj.format.named) {
      const match = str2.match(closure_28);
      if (match) {
        const substr = match.slice(1, 4);
        let num28 = 0;
        do {
          substr[num28] = +substr[num28];
          num28 = num28 + 1;
        } while (num28 < 3);
        substr[3] = 1;
        return substr;
      } else {
        const match1 = str2.match(closure_29);
        if (match1) {
          const substr1 = match1.slice(1, 5);
          let num24 = 0;
          do {
            substr1[num24] = +substr1[num24];
            num24 = num24 + 1;
          } while (num24 < 4);
          return substr1;
        } else {
          const match2 = str2.match(closure_30);
          if (match2) {
            const substr2 = match2.slice(1, 4);
            let num20 = 0;
            do {
              let tmp17 = round;
              substr2[num20] = round(2.55 * substr2[num20]);
              num20 = num20 + 1;
            } while (num20 < 3);
            substr2[3] = 1;
            return substr2;
          } else {
            const match3 = str2.match(closure_31);
            if (match3) {
              const substr3 = match3.slice(1, 5);
              let num15 = 0;
              do {
                let tmp15 = round;
                substr3[num15] = round(2.55 * substr3[num15]);
                num15 = num15 + 1;
              } while (num15 < 3);
              substr3[3] = +substr3[3];
              return substr3;
            } else {
              const match4 = str2.match(closure_32);
              if (match4) {
                const substr4 = match4.slice(1, 4);
                substr4[1] = substr4[1] * 0.01;
                substr4[2] = substr4[2] * 0.01;
                const tmp13 = hsl2rgb_1(substr4);
                tmp13[3] = 1;
                return tmp13;
              } else {
                const match5 = str2.match(closure_33);
                if (match5) {
                  const substr5 = match5.slice(1, 4);
                  substr5[1] = substr5[1] * 0.01;
                  substr5[2] = substr5[2] * 0.01;
                  const tmp10 = hsl2rgb_1(substr5);
                  tmp10[3] = +match5[4];
                  return tmp10;
                }
              }
            }
          }
        }
      }
    } else {
      try {
        const format = tmp.format;
        return format.named(str2);
      } catch (err) {
      }
    }
  }
  css2rgb$1.test = (arg0) => {
    let isMatch = regex.test(arg0);
    if (!isMatch) {
      isMatch = regex2.test(arg0);
    }
    if (!isMatch) {
      isMatch = regex3.test(arg0);
    }
    if (!isMatch) {
      isMatch = regex4.test(arg0);
    }
    if (!isMatch) {
      isMatch = regex5.test(arg0);
    }
    if (!isMatch) {
      isMatch = regex6.test(arg0);
    }
    return isMatch;
  };
  function rgb2css_1(_rgb, arg1) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const arr2 = unpack(items, "rgba");
    if (typeof last !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let str = null;
    if (items.length >= 2) {
      const diff1 = items.length - 1;
      if (typeof type$p !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const _Object = Object;
      const call = toString.call;
      let formatted = null;
      if ("string" == tmp9) {
        formatted = items[diff1].toLowerCase();
        const str3 = items[diff1];
      }
      str = formatted;
      const tmp7 = f107605;
      tmp9 = f107605[typeof call === "unknown" ? toString(items[diff1]) : call(toString, items[diff1])] || "object";
    }
    if (!str) {
      str = "rgb";
    }
    if ("hsl" == str.substr(0, 3)) {
      let text1 = hsl2css_1(rgb2hsl_1(arr2), str);
    } else {
      arr2[0] = round(arr2[0]);
      let num2 = 1;
      arr2[1] = round(arr2[1]);
      arr2[2] = round(arr2[2]);
      let tmp12 = "rgba" === str;
      if (!tmp12) {
        tmp12 = arr2.length > 3 && arr2[3] < num2;
        const tmp11 = arr2.length > 3 && arr2[3] < num2;
      }
      let str4 = str;
      if (tmp12) {
        if (arr2.length > 3) {
          num2 = arr2[3];
        }
        arr2[3] = num2;
        str4 = "rgba";
      }
      let num3 = 4;
      const text = `${str4}(`;
      if ("rgb" === str4) {
        num3 = 3;
      }
      const substr = arr2.slice(0, num3);
      text1 = `${tmp13 + obj.join(",")})`;
    }
    return text1;
  }
  chroma$k.css = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [null];
    return new bind.apply(Color, items1.concat(items, ["css"]))();
  };
  obj.format.css = css2rgb$1;
  const autodetect1 = obj.autodetect;
  autodetect1.push({
    p: 5,
    test(arg0) {
      let tmp3;
      const items = [];
      const diff = arguments.length - 1;
      let diff1 = diff - 1;
      if (0 < diff) {
        do {
          items[diff1] = arguments[diff1 + 1];
          tmp3 = diff1;
          diff1 = diff1 - 1;
        } while (0 < tmp3);
      }
      if (!items.length) {
        if (typeof type$p !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const _Object = Object;
        const call = toString.call;
        if ("string" === tmp8) {
          if (css2rgb$1.test(arg0)) {
            return "css";
          }
        }
        const tmp6 = f107605;
        tmp8 = f107605[typeof call === "unknown" ? toString(arg0) : call(toString, arg0)] || "object";
      }
    }
  });
  obj.format.gl = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const tmp4 = unpack(items, "rgba");
    tmp4[0] = tmp4[0] * 255;
    tmp4[1] = tmp4[1] * 255;
    tmp4[2] = tmp4[2] * 255;
    return tmp4;
  };
  chroma$k.gl = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [null];
    return new bind.apply(Color, items1.concat(items, ["gl"]))();
  };
  function rgb2hcg_1(_rgb) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    [tmp5, tmp6, tmp7] = unpack(items, "rgb");
    const bound = Math.min(tmp5, tmp6, tmp7);
    const bound1 = Math.max(tmp5, tmp6, tmp7);
    const diff1 = bound1 - bound;
    result = 100 * diff1;
    result1 = bound / (255 - diff1);
    if (0 === diff1) {
      const _Number = Number;
      let _NaN = Number.NaN;
    } else {
      result2 = undefined;
      if (tmp5 === bound1) {
        result2 = (tmp6 - tmp7) / diff1;
      }
      if (tmp6 === bound1) {
        result2 = 2 + (tmp7 - tmp5) / diff1;
      }
      if (tmp7 === bound1) {
        result2 = 4 + (tmp5 - tmp6) / diff1;
      }
      result3 = result2 * 60;
      _NaN = result3;
      if (result3 < 0) {
        _NaN = result3 + 360;
      }
    }
    const items1 = [_NaN, result / 255, result1 * 100];
    return items1;
  }
  chroma$k.hcg = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [null];
    return new bind.apply(Color, items1.concat(items, ["hcg"]))();
  };
  obj.format.hcg = function hcg2rgb_1() {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const arr2 = unpack(items, "hcg");
    [num, tmp4] = arr2;
    result = arr2[2] * 255;
    result1 = 255 * tmp4;
    if (0 !== tmp4) {
      let diff1 = num;
      if (num > 360) {
        diff1 = num - 360;
      }
      let sum = diff1;
      if (diff1 < 0) {
        sum = diff1 + 360;
      }
      result2 = sum / 60;
      const tmp14 = floor(result2);
      const diff2 = result2 - tmp14;
      result3 = result * (1 - tmp4);
      const sum1 = result3 + result1 * diff2;
      const sum2 = result3 + result1;
      if (0 === tmp14) {
        const items1 = [sum2, sum1, result3];
        [tmp9, tmp8, tmp7] = items1;
      } else {
        const sum3 = result3 + result1 * (1 - diff2);
        if (1 === tmp14) {
          const items2 = [sum3, sum2, result3];
          [tmp9, tmp8, tmp7] = items2;
        } else if (2 === tmp14) {
          const items3 = [result3, sum2, sum1];
          [tmp9, tmp8, tmp7] = items3;
        } else if (3 === tmp14) {
          const items4 = [result3, sum3, sum2];
          [tmp9, tmp8, tmp7] = items4;
        } else if (4 === tmp14) {
          const items5 = [sum1, result3, sum2];
          [tmp9, tmp8, tmp7] = items5;
        } else if (5 === tmp14) {
          const items6 = [sum2, result3, sum3];
          [tmp9, tmp8, tmp7] = items6;
        }
      }
    }
    const items7 = [result, result, result, ];
    let num6 = 1;
    if (arr2.length > 3) {
      num6 = arr2[3];
    }
    items7[3] = num6;
    return items7;
  };
  const autodetect2 = obj.autodetect;
  autodetect2.push({
    p: 1,
    test() {
      let tmp3;
      const items = [];
      const tmp = +arguments.length;
      let diff = tmp - 1;
      if (tmp) {
        do {
          items[diff] = arguments[diff];
          tmp3 = +diff;
          diff = tmp3 - 1;
        } while (tmp3);
      }
      const arr2 = unpack(items, "hcg");
      if (typeof type$p !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const call = toString.call;
      if ("array" === tmp5) {
        if (3 === arr2.length) {
          return "hcg";
        }
      }
    }
  });
  round = Math.round;
  function rgb2hex_1(_rgb, rgb) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const tmp4 = unpack(items, "rgba");
    let num = tmp4[3];
    [tmp5, tmp6, tmp7] = tmp4;
    if (typeof last !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let str = null;
    if (items.length >= 2) {
      const diff1 = items.length - 1;
      if (typeof type$p !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const _Object = Object;
      const call = toString.call;
      let formatted = null;
      if ("string" == tmp13) {
        formatted = items[diff1].toLowerCase();
        const str3 = items[diff1];
      }
      str = formatted;
      const tmp11 = f107605;
      tmp13 = f107605[typeof call === "unknown" ? toString(items[diff1]) : call(toString, items[diff1])] || "object";
    }
    if (!str) {
      str = "auto";
    }
    if (undefined === num) {
      num = 1;
    }
    if ("auto" === str) {
      let str4 = "rgb";
      if (num < 1) {
        str4 = "rgba";
      }
      str = str4;
    }
    const tmp15 = round(tmp5) << 16;
    const str5 = tmp15 | round(tmp6) << 8 | round(tmp7);
    const text = `000000${str5.toString(16)}`;
    const substr = `000000${str5.toString(16)}`.substr(`000000${str5.toString(16)}`.length - 6);
    const str6 = round(255 * num);
    const text1 = `0${str6.toString(16)}`;
    const substr1 = `0${str6.toString(16)}`.substr(`0${str6.toString(16)}`.length - 2);
    const formatted1 = str.toLowerCase();
    if ("rgba" === formatted1) {
      return "#" + substr + substr1;
    } else if ("argb" === formatted1) {
      return "#" + substr1 + substr;
    } else {
      return "#" + substr;
    }
    const tmp16 = round(tmp6) << 8;
  }
  const re51 = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  const re52 = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
  function hex2rgb_1(str) {
    if (str.match(closure_51)) {
      let tmp12 = 4 !== str.length;
      if (tmp12) {
        tmp12 = 7 !== str.length;
      }
      let substr = str;
      if (!tmp12) {
        substr = str.substr(1);
      }
      let sum = substr;
      if (3 === substr.length) {
        const parts = substr.split("");
        sum = parts[0] + parts[0] + parts[1] + parts[1] + parts[2] + parts[2];
      }
      const _parseInt2 = parseInt;
      const parsed = parseInt(sum, 16);
      const items = [parsed >> 16, parsed >> 8 & 255, 255 & parsed, 1];
      return items;
    } else if (str.match(closure_52)) {
      let tmp7 = 5 !== str.length;
      if (tmp7) {
        tmp7 = 9 !== str.length;
      }
      let substr1 = str;
      if (!tmp7) {
        substr1 = str.substr(1);
      }
      let sum1 = substr1;
      if (4 === substr1.length) {
        const parts1 = substr1.split("");
        sum1 = parts1[0] + parts1[0] + parts1[1] + parts1[1] + parts1[2] + parts1[2] + parts1[3] + parts1[3];
      }
      const _parseInt = parseInt;
      const parsed1 = parseInt(sum1, 16);
      const items1 = [parsed1 >> 24 & 255, parsed1 >> 16 & 255, parsed1 >> 8 & 255, ];
      const _Math = Math;
      items1[3] = Math.round((255 & parsed1) / 255 * 100) / 100;
      return items1;
    } else {
      const _Error = Error;
      error = new Error("unknown hex color: " + str);
      throw error;
    }
  }
  chroma$k.hex = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [null];
    return new bind.apply(Color, items1.concat(items, ["hex"]))();
  };
  obj.format.hex = hex2rgb_1;
  const autodetect3 = obj.autodetect;
  autodetect3.push({
    p: 4,
    test(arg0) {
      let tmp3;
      const items = [];
      const diff = arguments.length - 1;
      let diff1 = diff - 1;
      if (0 < diff) {
        do {
          items[diff1] = arguments[diff1 + 1];
          tmp3 = diff1;
          diff1 = diff1 - 1;
        } while (0 < tmp3);
      }
      if (!items.length) {
        if (typeof type$p !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const _Object = Object;
        const call = toString.call;
        if ("string" === tmp8) {
          const items1 = [3, 4, 5, 6, 7, 8, 9];
          if (items1.indexOf(arg0.length) >= 0) {
            return "hex";
          }
        }
        const tmp6 = f107605;
        tmp8 = f107605[typeof call === "unknown" ? toString(arg0) : call(toString, arg0)] || "object";
      }
    }
  });
  function rgb2hsi_1(_rgb) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const tmp4 = unpack(items, "rgb");
    result = tmp4[0] / 255;
    result1 = tmp4[1] / 255;
    result2 = tmp4[2] / 255;
    result3 = (result + result1 + result2) / 3;
    let num = 0;
    if (0 < result3) {
      num = 1 - min(result, result1, result2) / result3;
    }
    let num3 = NaN;
    if (0 !== num) {
      const diff1 = result - result1;
      const diff2 = result - result2;
      const tmp13 = acos((diff1 + diff2) / 2 / sqrt(diff1 * diff1 + diff2 * (result1 - result2)));
      let diff3 = tmp13;
      if (result1 < result2) {
        diff3 = closure_57 - tmp13;
      }
      num3 = diff3 / closure_57;
    }
    const items1 = [360 * num3, num, result3];
    return items1;
  }
  chroma$k.hsi = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [null];
    return new bind.apply(Color, items1.concat(items, ["hsi"]))();
  };
  obj.format.hsi = function hsi2rgb_1() {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const arr2 = unpack(items, "hsi");
    [num, num2, tmp4] = arr2;
    let diff1 = num;
    if (num > 360) {
      diff1 = num - 360;
    }
    let sum = diff1;
    if (diff1 < 0) {
      sum = diff1 + 360;
    }
    result = sum / 360;
    if (result < 0.3333333333333333) {
      result1 = (1 - num2) / 3;
      result2 = closure_63 * result;
      result3 = num2 * cos(result2);
      const result4 = (1 + result3 / cos(result1 - result2)) / 3;
      let diff2 = 1 - (result1 + result4);
      let diff3 = result1;
      let diff4 = result4;
    } else if (result < 0.6666666666666666) {
      const result5 = (1 - num2) / 3;
      const result6 = closure_63 * (result - 0.3333333333333333);
      const result7 = num2 * cos(result6);
      const result8 = (1 + result7 / cos(result1 - result6)) / 3;
      diff3 = 1 - (result5 + result8);
      diff2 = result8;
      diff4 = result5;
    } else {
      diff2 = (1 - num2) / 3;
      const result9 = closure_63 * (result - 0.6666666666666666);
      const result10 = num2 * cos(result9);
      diff3 = (1 + result10 / cos(result1 - result9)) / 3;
      diff4 = 1 - (diff2 + diff3);
    }
    const result11 = tmp4 * diff4;
    if (typeof limit$2 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let num9 = result11 * 3;
    let num10 = 0;
    if (num9 >= 0) {
      if (1 < num9) {
        num9 = 1;
      }
      num10 = num9;
    }
    const items1 = [255 * num10, , , ];
    const result12 = tmp4 * diff2;
    if (typeof limit$2 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let num12 = result12 * 3;
    let num13 = 0;
    if (num12 >= 0) {
      if (1 < num12) {
        num12 = 1;
      }
      num13 = num12;
    }
    items1[1] = 255 * num13;
    const result13 = tmp4 * diff3;
    if (typeof limit$2 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let num15 = result13 * 3;
    let num16 = 0;
    if (num15 >= 0) {
      if (1 < num15) {
        num15 = 1;
      }
      num16 = num15;
    }
    items1[2] = 255 * num16;
    let num18 = 1;
    if (arr2.length > 3) {
      num18 = arr2[3];
    }
    items1[3] = num18;
    return items1;
  };
  const autodetect4 = obj.autodetect;
  autodetect4.push({
    p: 2,
    test() {
      let tmp3;
      const items = [];
      const tmp = +arguments.length;
      let diff = tmp - 1;
      if (tmp) {
        do {
          items[diff] = arguments[diff];
          tmp3 = +diff;
          diff = tmp3 - 1;
        } while (tmp3);
      }
      const arr2 = unpack(items, "hsi");
      if (typeof type$p !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const call = toString.call;
      if ("array" === tmp5) {
        if (3 === arr2.length) {
          return "hsi";
        }
      }
    }
  });
  chroma$k.hsl = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [null];
    return new bind.apply(Color, items1.concat(items, ["hsl"]))();
  };
  obj.format.hsl = hsl2rgb_1;
  const autodetect5 = obj.autodetect;
  autodetect5.push({
    p: 2,
    test() {
      let tmp3;
      const items = [];
      const tmp = +arguments.length;
      let diff = tmp - 1;
      if (tmp) {
        do {
          items[diff] = arguments[diff];
          tmp3 = +diff;
          diff = tmp3 - 1;
        } while (tmp3);
      }
      const arr2 = unpack(items, "hsl");
      if (typeof type$p !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const call = toString.call;
      if ("array" === tmp5) {
        if (3 === arr2.length) {
          return "hsl";
        }
      }
    }
  });
  min = Math.min;
  max = Math.max;
  floor = Math.floor;
  function rgb2hsv$1(_rgb) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    [tmp5, tmp6, tmp7] = unpack(items, "rgb");
    const tmp4 = unpack(items, "rgb");
    const tmp9 = max(tmp5, tmp6, tmp7);
    const diff1 = tmp9 - min(tmp5, tmp6, tmp7);
    result = tmp9 / 255;
    if (0 === tmp9) {
      const _Number = Number;
      let _NaN = Number.NaN;
      let num4 = 0;
    } else {
      result1 = diff1 / tmp9;
      result2 = undefined;
      if (tmp5 === tmp9) {
        result2 = (tmp6 - tmp7) / diff1;
      }
      if (tmp6 === tmp9) {
        result2 = 2 + (tmp7 - tmp5) / diff1;
      }
      if (tmp7 === tmp9) {
        result2 = 4 + (tmp5 - tmp6) / diff1;
      }
      result3 = result2 * 60;
      num4 = result1;
      _NaN = result3;
      if (result3 < 0) {
        _NaN = result3 + 360;
        num4 = result1;
      }
    }
    const items1 = [_NaN, num4, result];
    return items1;
  }
  chroma$k.hsv = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [null];
    return new bind.apply(Color, items1.concat(items, ["hsv"]))();
  };
  obj.format.hsv = function hsv2rgb_1() {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const arr2 = unpack(items, "hsv");
    [num, tmp4] = arr2;
    result = arr2[2] * 255;
    if (0 !== tmp4) {
      let diff1 = num;
      if (num > 360) {
        diff1 = num - 360;
      }
      let sum = diff1;
      if (diff1 < 0) {
        sum = diff1 + 360;
      }
      result1 = sum / 60;
      const tmp13 = floor(result1);
      const diff2 = result1 - tmp13;
      result2 = result * (1 - tmp4);
      result3 = result * (1 - tmp4 * (1 - diff2));
      if (0 === tmp13) {
        const items1 = [result, result3, result2];
        [tmp8, tmp7, tmp6] = items1;
      } else {
        const result4 = result * (1 - tmp15);
        if (1 === tmp13) {
          const items2 = [result4, result, result2];
          [tmp8, tmp7, tmp6] = items2;
        } else if (2 === tmp13) {
          const items3 = [result2, result, result3];
          [tmp8, tmp7, tmp6] = items3;
        } else if (3 === tmp13) {
          const items4 = [result2, result4, result];
          [tmp8, tmp7, tmp6] = items4;
        } else if (4 === tmp13) {
          const items5 = [result3, result2, result];
          [tmp8, tmp7, tmp6] = items5;
        } else if (5 === tmp13) {
          const items6 = [result, result2, result4];
          [tmp8, tmp7, tmp6] = items6;
        }
      }
    }
    const items7 = [result, result, result, ];
    let num6 = 1;
    if (arr2.length > 3) {
      num6 = arr2[3];
    }
    items7[3] = num6;
    return items7;
  };
  const autodetect6 = obj.autodetect;
  autodetect6.push({
    p: 2,
    test() {
      let tmp3;
      const items = [];
      const tmp = +arguments.length;
      let diff = tmp - 1;
      if (tmp) {
        do {
          items[diff] = arguments[diff];
          tmp3 = +diff;
          diff = tmp3 - 1;
        } while (tmp3);
      }
      const arr2 = unpack(items, "hsv");
      if (typeof type$p !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const call = toString.call;
      if ("array" === tmp5) {
        if (3 === arr2.length) {
          return "hsv";
        }
      }
    }
  });
  const obj7 = { Kn: 18, Xn: 0.95047, Yn: 1, Zn: 1.08883, t0: 0.137931034, t1: 0.206896552, t2: 0.12841855, t3: 0.008856452 };
  function rgb_xyz(arg0) {

  }
  function xyz_lab(arg0) {

  }
  function rgb2xyz(arg0, arg1, arg2) {

  }
  function rgb2lab_1(_rgb, arg1, arg2) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    [tmp5, tmp6, tmp7] = unpack(items, "rgb");
    if (typeof rgb2xyz !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (typeof rgb_xyz !== "function") {
      HermesBuiltin.throwTypeError();
    }
    result = tmp5 / 255;
    if (result <= 0.04045) {
      result1 = result / 12.92;
    } else {
      result1 = pow((result + 0.055) / 1.055, 2.4);
    }
    if (typeof rgb_xyz !== "function") {
      HermesBuiltin.throwTypeError();
    }
    result2 = tmp6 / 255;
    if (result2 <= 0.04045) {
      result3 = result2 / 12.92;
    } else {
      result3 = pow((result2 + 0.055) / 1.055, 2.4);
    }
    if (typeof rgb_xyz !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const result4 = tmp7 / 255;
    if (result4 <= 0.04045) {
      let result5 = result4 / 12.92;
    } else {
      result5 = pow((result4 + 0.055) / 1.055, 2.4);
    }
    const result6 = (0.4124564 * result1 + 0.3575761 * result3 + 0.1804375 * result5) / obj7.Xn;
    if (typeof xyz_lab !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (result6 > obj7.t3) {
      let sum = pow(result6, 0.3333333333333333);
    } else {
      sum = result6 / tmp19.t2 + tmp19.t0;
    }
    const items1 = [sum, , ];
    const result7 = (0.2126729 * result1 + 0.7151522 * result3 + 0.072175 * result5) / tmp19.Yn;
    if (typeof xyz_lab !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (result7 > obj7.t3) {
      let sum1 = pow(result7, 0.3333333333333333);
    } else {
      sum1 = result7 / tmp19.t2 + tmp19.t0;
    }
    items1[1] = sum1;
    const result8 = (0.0193339 * result1 + 0.119192 * result3 + 0.9503041 * result5) / tmp19.Zn;
    if (typeof xyz_lab !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (result8 > obj7.t3) {
      let sum2 = pow(result8, 0.3333333333333333);
    } else {
      sum2 = result8 / tmp19.t2 + tmp19.t0;
    }
    items1[2] = sum2;
    const diff1 = 116 * tmp29 - 16;
    let num16 = 0;
    if (diff1 >= 0) {
      num16 = diff1;
    }
    const items2 = [num16, 500 * (items1[0] - items1[1]), 200 * (items1[1] - items1[2])];
    return items2;
  }
  pow = Math.pow;
  function xyz_rgb(arg0) {

  }
  function lab_xyz(arg0) {

  }
  function lab2rgb_1(arg0, arg1, arg2) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const arr2 = unpack(items, "lab");
    result = (arr2[0] + 16) / 116;
    let sum = result;
    if (!isNaN(arr2[1])) {
      sum = result + tmp4 / 500;
    }
    let diff1 = result;
    if (!isNaN(arr2[2])) {
      diff1 = result - tmp5 / 200;
    }
    if (typeof lab_xyz !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (result > obj7.t1) {
      result1 = result * result * result;
    } else {
      result1 = tmp9.t2 * (result - tmp9.t0);
    }
    result2 = obj7.Yn * result1;
    if (typeof lab_xyz !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (sum > obj7.t1) {
      result3 = sum * sum * sum;
    } else {
      result3 = tmp9.t2 * (sum - tmp9.t0);
    }
    const result4 = tmp9.Xn * result3;
    if (typeof lab_xyz !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (diff1 > obj7.t1) {
      let result5 = diff1 * diff1 * diff1;
    } else {
      result5 = tmp9.t2 * (diff1 - tmp9.t0);
    }
    const result6 = tmp9.Zn * result5;
    if (typeof xyz_rgb !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const diff2 = 3.2404542 * result4 - 1.5371385 * result2 - 0.4985314 * result6;
    if (diff2 <= 0.00304) {
      let result7 = 12.92 * diff2;
    } else {
      result7 = 1.055 * pow(diff2, 0.4166666666666667) - 0.055;
    }
    const items1 = [255 * result7, , , ];
    if (typeof xyz_rgb !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const sum1 = -0.969266 * result4 + 1.8760108 * result2 + 0.041556 * result6;
    if (sum1 <= 0.00304) {
      let result8 = 12.92 * sum1;
    } else {
      result8 = 1.055 * pow(sum1, 0.4166666666666667) - 0.055;
    }
    items1[1] = 255 * result8;
    if (typeof xyz_rgb !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const sum2 = 0.0556434 * result4 - 0.2040259 * result2 + 1.0572252 * result6;
    if (sum2 <= 0.00304) {
      let result9 = 12.92 * sum2;
    } else {
      result9 = 1.055 * pow(sum2, 0.4166666666666667) - 0.055;
    }
    items1[2] = 255 * result9;
    let num15 = 1;
    if (arr2.length > 3) {
      num15 = arr2[3];
    }
    items1[3] = num15;
    return items1;
  }
  chroma$k.lab = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [null];
    return new bind.apply(Color, items1.concat(items, ["lab"]))();
  };
  obj.format.lab = lab2rgb_1;
  const autodetect7 = obj.autodetect;
  autodetect7.push({
    p: 2,
    test() {
      let tmp3;
      const items = [];
      const tmp = +arguments.length;
      let diff = tmp - 1;
      if (tmp) {
        do {
          items[diff] = arguments[diff];
          tmp3 = +diff;
          diff = tmp3 - 1;
        } while (tmp3);
      }
      const arr2 = unpack(items, "lab");
      if (typeof type$p !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const call = toString.call;
      if ("array" === tmp5) {
        if (3 === arr2.length) {
          return "lab";
        }
      }
    }
  });
  sqrt = Math.sqrt;
  round = Math.round;
  function lab2lch_1(arg0, arg1, arg2) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const tmp4 = unpack(items, "lab");
    const tmp7 = sqrt(tmp4[1] * tmp4[1] + tmp4[2] * tmp4[2]);
    let _NaN = (atan2(tmp6, tmp5) * result3 + 360) % 360;
    if (0 === round(10000 * tmp7)) {
      const _Number = Number;
      _NaN = Number.NaN;
    }
    const items1 = [tmp4[0], tmp7, _NaN];
    return items1;
  }
  cos = Math.cos;
  function lch2lab_1(arg0, arg1, arg2) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const tmp4 = unpack(items, "lch");
    let num = tmp4[2];
    if (isNaN(num)) {
      num = 0;
    }
    const items1 = [tmp4[0], , ];
    result = num * result2;
    items1[1] = cos(result) * tmp4[1];
    items1[2] = sin(result) * tmp4[1];
    return items1;
  }
  function lch2rgb_1() {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const arr2 = unpack(items, "lch");
    const tmp4 = lch2lab_1(arr2[0], arr2[1], arr2[2]);
    const items1 = [, , , ];
    [arr3[0], arr3[1], arr3[2]] = lab2rgb_1(tmp4[0], tmp4[1], tmp4[2]);
    let num = 1;
    if (arr2.length > 3) {
      num = arr2[3];
    }
    items1[3] = num;
    return items1;
  }
  function rgb2lch_1(_rgb) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const tmp4 = unpack(items, "rgb");
    const tmp5 = rgb2lab_1(tmp4[0], tmp4[1], tmp4[2]);
    return lab2lch_1(tmp5[0], tmp5[1], tmp5[2]);
  }
  chroma$k.lch = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [null];
    return new bind.apply(Color, items1.concat(items, ["lch"]))();
  };
  chroma$k.hcl = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [null];
    return new bind.apply(Color, items1.concat(items, ["hcl"]))();
  };
  obj.format.lch = lch2rgb_1;
  obj.format.hcl = function hcl2rgb_1() {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    return lch2rgb_1.apply(undefined, unpack(items, "hcl").reverse());
  };
  let items1 = ["lch", "hcl"];
  let item = items1.forEach((arg0) => {
    closure_0 = arg0;
    const autodetect = obj.autodetect;
    obj = {
      p: 2,
      test() {
        let tmp3;
        const items = [];
        const tmp = +arguments.length;
        let diff = tmp - 1;
        if (tmp) {
          do {
            items[diff] = arguments[diff];
            tmp3 = +diff;
            diff = tmp3 - 1;
          } while (tmp3);
        }
        const arr2 = closure_1_115(items, closure_0);
        if (typeof closure_1_116 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const call = toString.call;
        if ("array" === tmp6) {
          if (3 === arr2.length) {
            return closure_0;
          }
        }
      }
    };
    return autodetect.push(obj);
  });
  const obj9 = { aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#00ffff", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000000", blanchedalmond: "#ffebcd", blue: "#0000ff", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", cornflower: "#6495ed", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", fuchsia: "#ff00ff", gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520", gray: "#808080", green: "#008000", greenyellow: "#adff2f", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c", indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", laserlemon: "#ffff54", lavender: "#e6e6fa", lavenderblush: "#fff0f5", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrod: "#fafad2", lightgoldenrodyellow: "#fafad2", lightgray: "#d3d3d3", lightgreen: "#90ee90", lightgrey: "#d3d3d3", lightpink: "#ffb6c1", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#00ff00", limegreen: "#32cd32", linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000", maroon2: "#7f0000", maroon3: "#b03060", mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370db", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#db7093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", purple2: "#7f007f", purple3: "#a020f0", rebeccapurple: "#663399", red: "#ff0000", rosybrown: "#bc8f8f", royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57", seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090", slategrey: "#708090", snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00", yellowgreen: "#9acd32" };
  obj.format.named = (str) => {
    const formatted = str.toLowerCase();
    if (obj9[formatted]) {
      return hex2rgb_1(tmp2[formatted]);
    } else {
      const _Error = Error;
      error = new Error("unknown color name: " + formatted);
      throw error;
    }
  };
  const autodetect8 = obj.autodetect;
  autodetect8.push({
    p: 5,
    test(arg0) {
      let tmp3;
      const items = [];
      const diff = arguments.length - 1;
      let diff1 = diff - 1;
      if (0 < diff) {
        do {
          items[diff1] = arguments[diff1 + 1];
          tmp3 = diff1;
          diff1 = diff1 - 1;
        } while (0 < tmp3);
      }
      if (!items.length) {
        if (typeof type$p !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const _Object = Object;
        const call = toString.call;
        if ("string" === tmp8) {
          if (obj9[arg0.toLowerCase(arg0)]) {
            return "named";
          }
        }
        const tmp6 = f107605;
        tmp8 = f107605[typeof call === "unknown" ? toString(arg0) : call(toString, arg0)] || "object";
      }
    }
  });
  function rgb2num_1(_rgb) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const tmp4 = unpack(items, "rgb");
    return (tmp4[0] << 16) + (tmp4[1] << 8) + tmp4[2];
  }
  chroma$k.num = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [null];
    return new bind.apply(Color, items1.concat(items, ["num"]))();
  };
  obj.format.num = function num2rgb_1(arg0) {
    if (typeof type$p !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const call = toString.call;
    if ("number" == tmp2) {
      if (arg0 >= 0) {
        if (arg0 <= 16777215) {
          const items = [arg0 >> 16, arg0 >> 8 & 255, 255 & arg0, 1];
          return items;
        }
      }
    }
    error = new Error("unknown num color: " + arg0);
    throw error;
  };
  const autodetect9 = obj.autodetect;
  autodetect9.push({
    p: 5,
    test() {
      let tmp3;
      const items = [];
      const tmp = +arguments.length;
      let diff = tmp - 1;
      if (tmp) {
        do {
          items[diff] = arguments[diff];
          tmp3 = +diff;
          diff = tmp3 - 1;
        } while (tmp3);
      }
      if (1 === items.length) {
        const first = items[0];
        if (typeof type$p !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const _Object = Object;
        const call = toString.call;
        if ("number" === tmp8) {
          if (items[0] >= 0) {
            if (items[0] <= 16777215) {
              return "num";
            }
          }
        }
        const tmp6 = f107605;
        tmp8 = f107605[typeof call === "unknown" ? toString(first) : call(toString, first)] || "object";
      }
    }
  });
  round = Math.round;
  chroma$k.rgb = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [null];
    return new bind.apply(Color, items1.concat(items, ["rgb"]))();
  };
  obj.format.rgb = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const tmp4 = unpack(items, "rgba");
    if (undefined === tmp4[3]) {
      tmp4[3] = 1;
    }
    return tmp4;
  };
  const autodetect10 = obj.autodetect;
  autodetect10.push({
    p: 3,
    test() {
      let tmp3;
      const items = [];
      const tmp = +arguments.length;
      let diff = tmp - 1;
      if (tmp) {
        do {
          items[diff] = arguments[diff];
          tmp3 = +diff;
          diff = tmp3 - 1;
        } while (tmp3);
      }
      const arr2 = unpack(items, "rgba");
      if (typeof type$p !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const call = toString.call;
      if ("array" === tmp6) {
        if (3 !== arr2.length) {
          if (4 === arr2.length) {
            if (typeof type$p !== "function") {
              HermesBuiltin.throwTypeError();
            }
            const _Object = Object;
            const call2 = toString2.call;
            const tmp8 = tmp5[typeof call2 === "unknown" ? toString2(arr2[3]) : call2(toString2, arr2[3])] || "object";
          }
        }
        return "rgb";
      }
    }
  });
  function temperature2rgb_1(arg0) {
    result = arg0 / 100;
    if (result < 66) {
      let num2 = 0;
      if (result >= 6) {
        const diff = result - 2;
        num2 = -155.25485562709179 - 0.44596950469579133 * diff + 104.49216199393888 * log(diff);
      }
      let num8 = 0;
      if (result >= 20) {
        const diff1 = result - 10;
        num8 = 0.8274096064007395 * diff1 - 254.76935184120902 + 115.67994401066147 * log(diff1);
      }
      let num13 = 255;
      let num14 = num8;
      let diff4 = num2;
    } else {
      const diff2 = result - 55;
      num13 = 351.97690566805693 + 0.114206453784165 * diff2 - 40.25366309332127 * log(diff2);
      const diff3 = result - 50;
      diff4 = 325.4494125711974 + 0.07943456536662342 * diff3 - 28.0852963507957 * log(diff3);
      num14 = 255;
    }
    const items = [num13, diff4, num14, 1];
    return items;
  }
  round = Math.round;
  function rgb2temperature_1(_rgb) {
    let tmp20;
    let tmp3;
    let tmp8;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    unpack(items, "rgb");
    let num = 40000;
    let num2 = 1000;
    do {
      let tmp7 = temperature2rgb_1;
      tmp8 = num;
      let tmp9 = num2;
      if (typeof temperature2rgb_1 !== "function") {
        let str = "Trying to call a non-function";
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      result = 0.5 * (tmp8 + num2);
      result1 = result / 100;
      if (result1 < 66) {
        let num5 = 0;
        if (result1 >= 6) {
          let diff1 = result1 - 2;
          let tmp17 = log;
          num5 = -155.25485562709179 - 0.44596950469579133 * diff1 + 104.49216199393888 * log(diff1);
        }
        let num6 = 0;
        if (result1 >= 20) {
          let diff2 = result1 - 10;
          let tmp19 = log;
          num6 = 0.8274096064007395 * diff2 - 254.76935184120902 + 115.67994401066147 * log(diff2);
        }
        let num4 = num6;
        let diff5 = num5;
        let num3 = 255;
      } else {
        let diff3 = result1 - 55;
        let tmp13 = log;
        num3 = 351.97690566805693 + 0.114206453784165 * diff3 - 40.25366309332127 * log(diff3);
        let diff4 = result1 - 50;
        diff5 = 325.4494125711974 + 0.07943456536662342 * diff4 - 28.0852963507957 * log(diff4);
        num4 = 255;
      }
      let items1 = [num3, diff5, num4, 1];
      tmp20 = result;
      if (items1[2] / items1[0] >= tmp6 / tmp5) {
        tmp8 = result;
        tmp20 = num2;
      }
      num = tmp8;
      num2 = tmp20;
    } while (0.4 < tmp8 - tmp20);
    return round(result);
  }
  let fn = function() {
    return rgb2temperature_1(this._rgb);
  };
  Color.prototype.temperature = fn;
  Color.prototype.kelvin = fn;
  Color.prototype.temp = fn;
  const fn2 = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [null];
    return new bind.apply(Color, items1.concat(items, ["temp"]))();
  };
  chroma$k.temperature = fn2;
  chroma$k.kelvin = fn2;
  chroma$k.temp = fn2;
  obj.format.temperature = temperature2rgb_1;
  obj.format.kelvin = temperature2rgb_1;
  obj.format.temp = temperature2rgb_1;
  pow = Math.pow;
  function rgb2oklab_1(_rgb, arg1, arg2) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const tmp4 = unpack(items, "rgb");
    result = tmp4[0] / 255;
    const absolute = Math.abs(result);
    if (absolute < 0.04045) {
      result1 = result / 12.92;
    } else {
      result1 = (sign(result) || 1) * pow((absolute + 0.055) / 1.055, 2.4);
      const tmp8 = sign(result) || 1;
    }
    const items1 = [result1, , ];
    result2 = tmp4[1] / 255;
    const absolute1 = Math.abs(result2);
    if (absolute1 < 0.04045) {
      result3 = result2 / 12.92;
    } else {
      result3 = (sign(result2) || 1) * pow((absolute1 + 0.055) / 1.055, 2.4);
      const tmp14 = sign(result2) || 1;
    }
    items1[1] = result3;
    const result4 = tmp4[2] / 255;
    const absolute2 = Math.abs(result4);
    if (absolute2 < 0.04045) {
      let result5 = result4 / 12.92;
    } else {
      result5 = (sign(result4) || 1) * pow((absolute2 + 0.055) / 1.055, 2.4);
      const tmp20 = sign(result4) || 1;
    }
    items1[2] = result5;
    [tmp23, tmp24, tmp25] = items1;
    const tmp26 = cbrt(0.4122214708 * tmp23 + 0.5363325363 * tmp24 + 0.0514459929 * tmp25);
    const tmp27 = cbrt(0.2119034982 * tmp23 + 0.6806995451 * tmp24 + 0.1073969566 * tmp25);
    const tmp28 = cbrt(0.0883024619 * tmp23 + 0.2817188376 * tmp24 + 0.6299787005 * tmp25);
    const items2 = [0.2104542553 * tmp26 + 0.793617785 * tmp27 - 0.0040720468 * tmp28, 1.9779984951 * tmp26 - 2.428592205 * tmp27 + 0.4505937099 * tmp28, 0.0259040371 * tmp26 + 0.7827717662 * tmp27 - 0.808675766 * tmp28];
    return items2;
  }
  pow = Math.pow;
  sign = Math.sign;
  function oklab2rgb_1(arg0, arg1, arg2) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const arr2 = unpack(items, "lab");
    [tmp4, tmp5, tmp6] = arr2;
    const tmp8 = pow(tmp4 + 0.3963377774 * tmp5 + 0.2158037573 * tmp6, 3);
    const tmp9 = pow(tmp4 - 0.1055613458 * tmp5 - 0.0638541728 * tmp6, 3);
    const tmp10 = pow(tmp4 - 0.0894841775 * tmp5 - 1.291485548 * tmp6, 3);
    const sum = 4.0767416621 * tmp8 - 3.3077115913 * tmp9 + 0.2309699292 * tmp10;
    const absolute = Math.abs(sum);
    if (absolute > 0.0031308) {
      result = (sign(sum) || 1) * (1.055 * tmp7(absolute, 0.4166666666666667) - 0.055);
      const tmp15 = sign(sum) || 1;
    } else {
      result = 12.92 * sum;
    }
    const items1 = [255 * result, , , ];
    const diff1 = -1.2684380046 * tmp8 + 2.6097574011 * tmp9 - 0.3413193965 * tmp10;
    const absolute1 = Math.abs(diff1);
    if (absolute1 > 0.0031308) {
      result1 = (sign(diff1) || 1) * (1.055 * tmp7(absolute1, 0.4166666666666667) - 0.055);
      const tmp20 = sign(diff1) || 1;
    } else {
      result1 = 12.92 * diff1;
    }
    items1[1] = 255 * result1;
    const sum1 = -0.0041960863 * tmp8 - 0.7034186147 * tmp9 + 1.707614701 * tmp10;
    const absolute2 = Math.abs(sum1);
    if (absolute2 > 0.0031308) {
      result2 = (sign(sum1) || 1) * (1.055 * tmp7(absolute2, 0.4166666666666667) - 0.055);
      const tmp25 = sign(sum1) || 1;
    } else {
      result2 = 12.92 * sum1;
    }
    items1[2] = 255 * result2;
    let num13 = 1;
    if (arr2.length > 3) {
      num13 = arr2[3];
    }
    items1[3] = num13;
    return items1;
  }
  chroma$k.oklab = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [null];
    return new bind.apply(Color, items1.concat(items, ["oklab"]))();
  };
  obj.format.oklab = oklab2rgb_1;
  const autodetect11 = obj.autodetect;
  autodetect11.push({
    p: 3,
    test() {
      let tmp3;
      const items = [];
      const tmp = +arguments.length;
      let diff = tmp - 1;
      if (tmp) {
        do {
          items[diff] = arguments[diff];
          tmp3 = +diff;
          diff = tmp3 - 1;
        } while (tmp3);
      }
      const arr2 = unpack(items, "oklab");
      if (typeof type$p !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const call = toString.call;
      if ("array" === tmp5) {
        if (3 === arr2.length) {
          return "oklab";
        }
      }
    }
  });
  function rgb2oklch_1(_rgb) {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const tmp4 = unpack(items, "rgb");
    const tmp5 = rgb2oklab_1(tmp4[0], tmp4[1], tmp4[2]);
    return lab2lch_1(tmp5[0], tmp5[1], tmp5[2]);
  }
  chroma$k.oklch = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const items1 = [null];
    return new bind.apply(Color, items1.concat(items, ["oklch"]))();
  };
  obj.format.oklch = function oklch2rgb_1() {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    const arr2 = unpack(items, "lch");
    const tmp4 = lch2lab_1(arr2[0], arr2[1], arr2[2]);
    const items1 = [, , , ];
    [arr3[0], arr3[1], arr3[2]] = oklab2rgb_1(tmp4[0], tmp4[1], tmp4[2]);
    let num = 1;
    if (arr2.length > 3) {
      num = arr2[3];
    }
    items1[3] = num;
    return items1;
  };
  const autodetect12 = obj.autodetect;
  autodetect12.push({
    p: 3,
    test() {
      let tmp3;
      const items = [];
      const tmp = +arguments.length;
      let diff = tmp - 1;
      if (tmp) {
        do {
          items[diff] = arguments[diff];
          tmp3 = +diff;
          diff = tmp3 - 1;
        } while (tmp3);
      }
      const arr2 = unpack(items, "oklch");
      if (typeof type$p !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const call = toString.call;
      if ("array" === tmp5) {
        if (3 === arr2.length) {
          return "oklch";
        }
      }
    }
  });
  Color.prototype.darker = Color.prototype.darken;
  Color.prototype.brighter = Color.prototype.brighten;
  pow = Math.pow;
  function rgb2luminance(arg0, arg1, arg2) {
    if (typeof luminance_x !== "function") {
      HermesBuiltin.throwTypeError();
    }
    result = arg0 / 255;
    if (result <= 0.03928) {
      result1 = result / 12.92;
    } else {
      result1 = pow((result + 0.055) / 1.055, 2.4);
    }
    result2 = 0.2126 * result1;
    if (typeof luminance_x !== "function") {
      HermesBuiltin.throwTypeError();
    }
    result3 = arg1 / 255;
    if (result3 <= 0.03928) {
      let result4 = result3 / 12.92;
    } else {
      result4 = pow((result3 + 0.055) / 1.055, 2.4);
    }
    const result5 = 0.7152 * result4;
    if (typeof luminance_x !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const result6 = arg2 / 255;
    if (result6 <= 0.03928) {
      let result7 = result6 / 12.92;
    } else {
      result7 = pow((result6 + 0.055) / 1.055, 2.4);
    }
    return result2 + result5 + 0.0722 * result7;
  }
  function luminance_x(arg0) {

  }
  const obj15 = {};
  function mix$1(arg0, arg1, arg2) {
    let tmp3;
    let num = arg2;
    if (undefined === arg2) {
      num = 0.5;
    }
    const items = [];
    const diff = arguments.length - 3;
    let diff1 = diff - 1;
    if (0 < diff) {
      do {
        items[diff1] = arguments[diff1 + 3];
        tmp3 = diff1;
        diff1 = diff1 - 1;
      } while (0 < tmp3);
    }
    let first = items[0] || "lrgb";
    if (!tmp6) {
      const _Object = Object;
      first = Object.keys(tmp5)[0];
    }
    if (obj15[first]) {
      if (typeof type$p !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const _Object2 = Object;
      const call = toString.call;
      obj = arg0;
      if ("object" !== tmp17) {
        obj = Color(arg0);
      }
      if (typeof tmp13 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const _Object3 = Object;
      const call2 = toString2.call;
      tmp13 = type$p;
      tmp17 = f107605[typeof call === "unknown" ? toString(arg0) : call(toString, arg0)] || "object";
      let obj2 = arg1;
      if ("object" !== tmp21) {
        obj2 = Color(arg1);
      }
      tmp21 = f107605[typeof call2 === "unknown" ? toString2(arg1) : call2(toString2, arg1)] || "object";
      const obj3 = tmp5[first](obj, obj2, num);
      const alphaResult = obj.alpha();
      return obj3.alpha(alphaResult + num * (obj2.alpha() - obj.alpha()));
    } else {
      const _Error = Error;
      error = new Error("interpolation mode " + first + " is not defined");
      throw error;
    }
    tmp6 = obj15[first] || items.length;
  }
  const fn3 = function(arg0, arg1) {
    let tmp3;
    let num = arg1;
    if (undefined === arg1) {
      num = 0.5;
    }
    const items = [];
    const diff = arguments.length - 2;
    let diff1 = diff - 1;
    if (0 < diff) {
      do {
        items[diff1] = arguments[diff1 + 2];
        tmp3 = diff1;
        diff1 = diff1 - 1;
      } while (0 < tmp3);
    }
    const items1 = [this, arg0, num];
    return mix$1.apply(undefined, items1.concat(items));
  };
  Color.prototype.interpolate = fn3;
  Color.prototype.mix = fn3;
  obj15.rgb = (_rgb, _rgb2) => {
    _rgb = _rgb._rgb;
    _rgb2 = _rgb2._rgb;
    return Color(_rgb[0] + arg2 * (_rgb2[0] - _rgb[0]), _rgb[1] + arg2 * (_rgb2[1] - _rgb[1]), _rgb[2] + arg2 * (_rgb2[2] - _rgb[2]), "rgb");
  };
  sqrt = Math.sqrt;
  pow = Math.pow;
  obj15.lrgb = (_rgb, _rgb2) => {
    _rgb = _rgb._rgb;
    [tmp, tmp2, tmp3] = _rgb2._rgb;
    result = pow(_rgb[0], 2) * (1 - arg2);
    result1 = pow(_rgb[1], 2) * (1 - arg2);
    const tmp5 = sqrt(result + pow(tmp, 2) * arg2);
    result2 = pow(_rgb[2], 2) * (1 - arg2);
    const tmp7 = sqrt(result1 + pow(tmp2, 2) * arg2);
    return Color(tmp5, sqrt(result1 + pow(tmp2, 2) * arg2), sqrt(result2 + pow(tmp3, 2) * arg2), "rgb");
  };
  obj15.lab = (lab, lab2) => {
    const labResult = lab.lab();
    const labResult1 = lab2.lab();
    return Color(labResult[0] + arg2 * (labResult1[0] - labResult[0]), labResult[1] + arg2 * (labResult1[1] - labResult[1]), labResult[2] + arg2 * (labResult1[2] - labResult[2]), "lab");
  };
  function _hsx(hsl, hsl2, arg2, hcg) {
    if ("hsl" === hcg) {
      let hslResult = hsl.hsl();
      let hslResult1 = hsl2.hsl();
      let str4 = hcg;
    } else if ("hsv" === hcg) {
      hslResult = hsl.hsv();
      hslResult1 = hsl2.hsv();
      str4 = hcg;
    } else if ("hcg" === hcg) {
      hslResult = hsl.hcg();
      hslResult1 = hsl2.hcg();
      str4 = hcg;
    } else if ("hsi" === hcg) {
      hslResult = hsl.hsi();
      hslResult1 = hsl2.hsi();
      str4 = hcg;
    } else {
      if ("lch" !== hcg) {
        if ("hcl" !== hcg) {
          str4 = hcg;
          if ("oklch" === hcg) {
            hslResult = hsl.oklch().reverse();
            const oklchResult = hsl.oklch();
            hslResult1 = hsl2.oklch().reverse();
            str4 = hcg;
            const oklchResult1 = hsl2.oklch();
          }
        }
      }
      hslResult = hsl.hcl();
      hslResult1 = hsl2.hcl();
      str4 = "hcl";
    }
    let tmp3 = "h" !== str4.substr(0, 1);
    if (tmp3) {
      tmp3 = "oklch" !== str4;
    }
    if (!tmp3) {
      [tmp9, tmp7, tmp5] = hslResult;
      [tmp8, tmp6, tmp4] = hslResult1;
    }
    if (!isNaN(undefined)) {
      const _isNaN = isNaN;
      if (!isNaN(tmp8)) {
        if (tmp8 > tmp9) {
          if (tmp8 - tmp9 > 180) {
            let diff = tmp8 - (tmp9 + 360);
          }
          let _NaN = tmp9 + arg2 * diff;
        }
        if (tmp8 < tmp9) {
          if (tmp9 - tmp8 > 180) {
            diff = tmp8 + 360 - tmp9;
          }
        }
        diff = tmp8 - tmp9;
      }
      if (undefined === sum) {
        sum = tmp7 + arg2 * (tmp6 - tmp7);
      }
      const sum1 = tmp5 + arg2 * (tmp4 - tmp5);
      if ("oklch" === str4) {
        const items = [sum1, sum, _NaN];
        let items1 = items;
      } else {
        items1 = [_NaN, sum, sum1];
      }
      const tmp15Result = Color(items1, str4);
      return tmp15Result;
    }
    if (isNaN(undefined)) {
      const _isNaN2 = isNaN;
      if (isNaN(tmp8)) {
        const _Number = Number;
        _NaN = Number.NaN;
      } else {
        let tmp13 = 1 != tmp5 && 0 != tmp5;
        if (!tmp13) {
          tmp13 = "hsv" === str4;
        }
        _NaN = tmp8;
        if (!tmp13) {
          _NaN = tmp8;
          sum = tmp6;
        }
      }
    } else {
      let tmp12 = 1 != tmp4 && 0 != tmp4;
      if (!tmp12) {
        tmp12 = "hsv" === str4;
      }
      _NaN = tmp9;
      if (!tmp12) {
        _NaN = tmp9;
        sum = tmp7;
      }
    }
  }
  function lch(hsl, hsl2) {
    return _hsx(hsl, hsl2, arg2, "lch");
  }
  obj15.lch = lch;
  obj15.hcl = lch;
  obj15.num = (num, num2) => {
    const numResult = num.num();
    return Color(numResult + arg2 * (num2.num() - numResult), "num");
  };
  obj15.hcg = (hsl, hsl2) => _hsx(hsl, hsl2, arg2, "hcg");
  obj15.hsi = (hsl, hsl2) => _hsx(hsl, hsl2, arg2, "hsi");
  obj15.hsl = (hsl, hsl2) => _hsx(hsl, hsl2, arg2, "hsl");
  obj15.hsv = (hsl, hsl2) => _hsx(hsl, hsl2, arg2, "hsv");
  obj15.oklab = (oklab, oklab2) => {
    const oklabResult = oklab.oklab();
    const oklabResult1 = oklab2.oklab();
    return Color(oklabResult[0] + arg2 * (oklabResult1[0] - oklabResult[0]), oklabResult[1] + arg2 * (oklabResult1[1] - oklabResult[1]), oklabResult[2] + arg2 * (oklabResult1[2] - oklabResult[2]), "oklab");
  };
  obj15.oklch = (hsl, hsl2) => _hsx(hsl, hsl2, arg2, "oklch");
  pow = Math.pow;
  sqrt = Math.sqrt;
  PI = Math.PI;
  cos = Math.cos;
  sin = Math.sin;
  atan2 = Math.atan2;
  function _average_lrgb(arg0, arg1) {

  }
  pow = Math.pow;
  function scale$2(items) {
    closure_0 = items;
    const rgb = "rgb";
    closure_2 = chroma$k("#ccc");
    c3 = 0;
    closure_4 = [0, 1];
    closure_5 = [];
    closure_6 = [0, 0];
    c7 = false;
    closure_8 = [];
    c9 = false;
    c10 = 0;
    c11 = 1;
    c12 = false;
    closure_13 = {};
    c14 = true;
    c15 = 1;
    function setColors(closure_0) {
      let length;
      let length2;
      items = closure_0;
      if (!closure_0) {
        items = ["#fff", "#000"];
      }
      let brewer = items;
      if (items) {
        if (typeof closure_1_202 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const _Object = Object;
        const call = toString.call;
        brewer = "string" === (closure_0[typeof call === "unknown" ? toString(items) : call(toString, items)] || "object");
        const tmp2 = closure_0;
        const tmp4 = closure_0[typeof call === "unknown" ? toString(items) : call(toString, items)] || "object";
      }
      if (brewer) {
        brewer = closure_1_201.brewer;
      }
      if (brewer) {
        brewer = closure_1_201.brewer[items.toLowerCase(items)];
      }
      let arr2 = items;
      if (brewer) {
        arr2 = closure_1_201.brewer[items.toLowerCase(items)];
      }
      if (typeof closure_1_202 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const call2 = toString2.call;
      let tmp10 = arr2;
      if ("array" === tmp9) {
        let arr4 = arr2;
        if (1 === arr2.length) {
          const items1 = [arr2[0], arr2[0]];
          arr4 = items1;
        }
        let substr = arr4.slice(0);
        let num2 = 0;
        if (0 < substr.length) {
          do {
            let tmp11 = closure_1_201;
            substr[num2] = closure_1_201(substr[num2]);
            num2 = num2 + 1;
            length = substr.length;
          } while (num2 < length);
        }
        arr.length = 0;
        let num3 = 0;
        tmp10 = substr;
        if (0 < substr.length) {
          do {
            let tmp13 = arr;
            arr = arr.push(num3 / (substr.length - 1));
            num3 = num3 + 1;
            tmp10 = substr;
            length2 = substr.length;
          } while (num3 < length2);
        }
      }
      if (typeof resetCache !== "function") {
        HermesBuiltin.throwTypeError();
      }
      closure_13 = {};
      substr = tmp10;
      return tmp10;
    }
    function tMapLightness(arg0) {
      return arg0;
    }
    function tMapDomain(arg0) {
      return arg0;
    }
    function getColor(arg0) {
      let flag = arg1;
      if (null == arg1) {
        flag = false;
      }
      if (!isNaN(arg0)) {
        if (null !== arg0) {
          result = arg0;
          if (!flag) {
            if (c7) {
              if (c7.length > 2) {
                let num4 = 0;
                if (null != c7) {
                  const diff = c7.length - 1;
                  let num6 = 0;
                  if (0 < diff) {
                    let num7 = 0;
                    num6 = 0;
                    if (arg0 >= c7[0]) {
                      const sum = num7 + 1;
                      num6 = sum;
                      while (sum < diff) {
                        let tmp10 = c7;
                        num7 = sum;
                        num6 = sum;
                        if (arg0 < c7[sum]) {
                          break;
                        }
                      }
                    }
                  }
                  num4 = num6 - 1;
                }
                result = num4 / (c7.length - 2);
              }
            }
            let num2 = 1;
            if (c11 !== c10) {
              num2 = (arg0 - c10) / (c11 - c10);
            }
            result = num2;
          }
          const tmp13 = tMapDomain(result);
          let tmp14 = tmp13;
          if (!flag) {
            tmp14 = tMapLightness(tmp13);
          }
          let tmp17 = tmp14;
          if (1 !== c15) {
            tmp17 = closure_1_203(tmp14, tmp16);
          }
          const _Math = Math;
          const _Math2 = Math;
          const bound = Math.min(1, Math.max(0, dependencyMap2[0] + tmp17 * (1 - dependencyMap2[0] - dependencyMap2[1])));
          const _Math3 = Math;
          const rounded = Math.floor(10000 * bound);
          if (c14) {
            if (dependencyMap3[rounded]) {
              let tmp51 = dependencyMap3[rounded];
            }
            return tmp51;
          }
          if (typeof closure_1_202 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const _Object = Object;
          const call = toString.call;
          if ("array" === tmp29) {
            let num11 = 0;
            if (0 < arr.length) {
              while (bound > arr[num11]) {
                if (bound >= tmp35) {
                  let tmp37 = arr;
                  if (num11 === arr.length - 1) {
                    let tmp48 = arr2;
                    let interpolateResult = arr2[num11];
                  }
                }
                if (bound > tmp35) {
                  let tmp38 = arr;
                  let sum1 = num11 + 1;
                  if (bound < arr[sum1]) {
                    let tmp42 = arr;
                    let tmp43 = closure_1_201;
                    let tmp44 = arr2;
                    let tmp45 = arr2;
                    let tmp46 = rgb;
                    let tmp47 = closure_1_201;
                    interpolateResult = closure_1_201.interpolate(arr2[num11], arr2[sum1], (bound - tmp35) / (arr[sum1] - tmp35), rgb);
                  }
                }
                let sum2 = num11 + 1;
                let tmp41 = arr;
                num11 = sum2;
              }
              interpolateResult = arr2[num11];
            }
          } else {
            if (typeof tmp26 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            const _Object2 = Object;
            const call2 = toString2.call;
            if ("function" === tmp31) {
              interpolateResult = arr2(bound);
            }
            tmp31 = tmp28[typeof call2 === "unknown" ? toString2(arr2) : call2(toString2, arr2)] || "object";
          }
          tmp51 = interpolateResult;
          if (c14) {
            dependencyMap3[rounded] = interpolateResult;
            tmp51 = interpolateResult;
          }
          tmp26 = closure_1_202;
          tmp29 = closure_0[typeof call === "unknown" ? toString(arr2) : call(toString, arr2)] || "object";
        }
      }
      return closure_2;
    }
    function resetCache() {

    }
    setColors(closure_0);
    let fn = function f(arg0) {
      const tmp = closure_1_201(getColor(arg0));
      let tmp2 = tmp;
      if (c9) {
        tmp2 = tmp;
        if (tmp[c9]) {
          tmp2 = tmp[c9]();
        }
      }
      return tmp2;
    };
    fn.classes = (arg0) => {
      if (null != arg0) {
        if (typeof closure_1_202 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const _Object = Object;
        const call = toString.call;
        if ("array" === tmp5) {
          closure_7 = arg0;
          items = [arg0[0], arg0[arg0.length - 1]];
        } else {
          const analyzeResult = closure_1_201.analyze(items);
          if (0 === arg0) {
            const items1 = [, ];
            ({ min: arr[0], max: arr[1] } = analyzeResult);
            let limitsResult = items1;
          } else {
            limitsResult = obj.limits(analyzeResult, "e", arg0);
          }
          closure_7 = limitsResult;
          obj = closure_1_201;
        }
        return fn;
      } else {
        return closure_7;
      }
    };
    fn.domain = (arr) => {
      let length2;
      closure_0 = arr;
      if (arguments.length) {
        closure_10 = arr[0];
        closure_11 = arr[arr.length - 1];
        arr = [];
        if (arr.length === arr2.length) {
          if (closure_10 !== closure_11) {
            const _Array = Array;
            arr = Array.from(arr);
            let num4 = 0;
            if (0 < arr.length) {
              do {
                let tmp8 = arr;
                let tmp9 = closure_10;
                let tmp10 = closure_11;
                let tmp11 = closure_10;
                arr = arr.push((arr[num4] - closure_10) / (closure_11 - closure_10));
                num4 = num4 + 1;
                length2 = arr.length;
              } while (num4 < length2);
            }
          }
          items = [closure_10, closure_11];
          return fn;
        }
        for (let num2 = 0; num2 < length; num2 = num2 + 1) {
          let tmp5 = arr;
          arr = arr.push(num2 / (length - 1));
        }
        if (arr.length > 2) {
          closure_1 = arr.map((arg0, arg1) => arg1 / (arr.length - 1));
          const mapped = arr.map((arg0) => (arg0 - closure_10) / (closure_11 - closure_10));
          if (!mapped.every((arg0, arg1) => dependencyMap[arg1] === arg0)) {
            tMapDomain = function tMapDomain(arg0) {
              let tmp4;
              if (arg0 > 0) {
                if (arg0 < 1) {
                  let tmp = mapped;
                  let num2 = 0;
                  let num3 = 0;
                  if (arg0 >= mapped[1]) {
                    do {
                      let sum = num2 + 1;
                      let tmp3 = mapped;
                      num2 = sum;
                      num3 = sum;
                      tmp = mapped;
                      tmp4 = mapped[sum + 1];
                    } while (arg0 >= tmp4);
                  }
                  const sum1 = num3 + 1;
                  return dependencyMap[num3] + (arg0 - tmp[num3]) / (tmp[sum1] - tmp[num3]) * (dependencyMap[sum1] - dependencyMap[num3]);
                }
              }
              return arg0;
            };
          }
        }
      } else {
        return items;
      }
    };
    fn.mode = (arg0) => {
      if (arguments.length) {
        closure_1 = arg0;
        if (typeof resetCache !== "function") {
          HermesBuiltin.throwTypeError();
        }
        closure_13 = {};
        let tmp = fn;
      } else {
        tmp = closure_1;
      }
      return tmp;
    };
    fn.range = (closure_0) => {
      setColors(closure_0);
      return fn;
    };
    fn.out = (arg0) => {
      closure_9 = arg0;
      return fn;
    };
    fn.spread = (arg0) => {
      if (arguments.length) {
        closure_3 = arg0;
        let tmp = fn;
      } else {
        tmp = closure_3;
      }
      return tmp;
    };
    fn.correctLightness = (arg0) => {
      let flag = arg0;
      if (null == arg0) {
        flag = true;
      }
      if (typeof resetCache !== "function") {
        HermesBuiltin.throwTypeError();
      }
      closure_13 = {};
      if (flag) {
        fn = (arg0) => {
          const first = callback(0, true).lab()[0];
          obj = callback(0, true);
          const first1 = callback(1, true).lab()[0];
          const obj2 = callback(1, true);
          const tmp3 = first > first1;
          const sum = first + (first1 - first) * arg0;
          const diff = callback(arg0, true).lab()[0] - sum;
          let num = 19;
          let num2 = 1;
          let num3 = 0;
          let tmp6 = diff;
          let tmp7 = arg0;
          let tmp8 = arg0;
          if (Math.abs(diff) > 0.01) {
            while (true) {
              let tmp10 = num2;
              let tmp11 = num3;
              let tmp12 = tmp6;
              let tmp13 = tmp7;
              result = tmp6;
              let tmp9 = num;
              if (tmp3) {
                result = tmp6 * -1;
              }
              if (result < 0) {
                let sum1 = tmp7 + 0.5 * (num2 - tmp7);
                let tmp16 = num2;
                tmp11 = tmp7;
              } else {
                sum1 = tmp7 + 0.5 * (tmp11 - tmp7);
                tmp16 = tmp7;
              }
              let tmp17 = callback;
              let obj4 = callback(sum1, true);
              let diff1 = obj4.lab()[0] - sum;
              let _Math = Math;
              tmp8 = sum1;
              if (Math.abs(diff1) <= 0.01) {
                break;
              } else {
                num = num - 1;
                num2 = tmp16;
                num3 = tmp11;
                tmp6 = diff1;
                tmp7 = sum1;
                tmp8 = sum1;
                if (0 >= tmp9) {
                  break;
                }
              }
            }
          }
          return tmp8;
        };
      } else {
        fn = (arg0) => arg0;
      }
      return fn;
    };
    fn.padding = (arg0) => {
      if (null != arg0) {
        if (typeof closure_1_202 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const _Object = Object;
        const call = toString.call;
        let tmp6 = arg0;
        if ("number" === tmp5) {
          items = [arg0, arg0];
          tmp6 = items;
        }
        items = tmp6;
        let tmp = fn;
        const tmp3 = closure_0;
        tmp5 = closure_0[typeof call === "unknown" ? toString(arg0) : call(toString, arg0)] || "object";
      } else {
        tmp = items;
      }
      return tmp;
    };
    fn.colors = (arg0, arg1) => {
      let diff;
      let tmp14;
      closure_0 = arg0;
      let str = arg1;
      let hex = arg1;
      if (arguments.length < 2) {
        hex = "hex";
        str = "hex";
      }
      if (0 === arguments.length) {
        let substr = arr2.slice(0);
      } else if (1 === arg0) {
        if (typeof fn !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const tmp18 = closure_1_201(getColor(0.5));
        let tmp19 = tmp18;
        if (c9) {
          tmp19 = tmp18;
          if (tmp18[c9]) {
            tmp19 = tmp18[c9]();
          }
        }
        items = [tmp19];
        substr = items;
      } else if (arg0 > 1) {
        const first = dependencyMap[0];
        closure_3 = dependencyMap[1] - first;
        const items1 = [];
        let num3 = 0;
        if (0 < arg0 ? 0 < arg0 : 0 > arg0) {
          do {
            let arr = items1.push(num3);
            let tmp13 = num3;
            tmp14 = tmp11 ? num3 + 1 : num3 - 1;
            num3 = tmp14;
          } while (tmp11 ? tmp14 < arg0 : tmp14 > arg0);
        }
        substr = items1.map((arg0) => {
          const sum = first + arg0 / (closure_0 - 1) * closure_3;
          if (typeof closure_1_21 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp2 = closure_1_201(closure_1_19(sum));
          let tmp3 = tmp2;
          if (closure_1_9) {
            tmp3 = tmp2;
            if (tmp2[closure_1_9]) {
              tmp3 = tmp2[closure_1_9]();
            }
          }
          return tmp3;
        });
      } else {
        closure_0 = [];
        if (c7) {
          if (c7.length > 2) {
            const items2 = [];
            let num2 = 1;
            arr = items2;
            if (1 <= c7.length ? 1 < c7.length : 1 > c7.length) {
              do {
                let tmp3 = c7;
                diff = num2 - 1;
                let tmp5 = c7;
                arr = items2.push(0.5 * (c7[diff] + c7[num2]));
                let tmp7 = num2;
                if (tmp2) {
                  diff = num2 + 1;
                }
                num2 = diff;
                arr = items2;
              } while (tmp2 ? diff < length : diff > length);
            }
          }
          substr = arr.map((arg0) => {
            if (typeof closure_21 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            const tmp = closure_1_201(callback(arg0));
            let tmp2 = tmp;
            if (closure_9) {
              tmp2 = tmp;
              if (tmp[closure_9]) {
                tmp2 = tmp[closure_9]();
              }
            }
            return tmp2;
          });
        }
        arr = dependencyMap;
      }
      let mapped = substr;
      if (closure_1_201[str]) {
        mapped = substr.map((arg0) => arg0[hex]());
      }
      return mapped;
    };
    fn.cache = (arg0) => {
      if (null != arg0) {
        closure_14 = arg0;
        let tmp = fn;
      } else {
        tmp = closure_14;
      }
      return tmp;
    };
    fn.gamma = (arg0) => {
      if (null != arg0) {
        closure_15 = arg0;
        let tmp = fn;
      } else {
        tmp = closure_15;
      }
      return tmp;
    };
    fn.nodata = (arg0) => {
      if (null != arg0) {
        closure_2 = closure_1_201(arg0);
        let tmp = fn;
      } else {
        tmp = closure_2;
      }
      return tmp;
    };
    return fn;
  }
  function blend(arg0, arg1, arg2) {
    if (blend[arg2]) {
      return tmp[arg2](arg0, arg1);
    } else {
      const _Error = Error;
      error = new Error("unknown blend mode " + arg2);
      throw error;
    }
    tmp = blend;
  }
  f107605 = (arg0, arg1) => {
    const items = [f107605(arg0[0], arg1[0]), f107605(arg0[1], arg1[1]), f107605(arg0[2], arg1[2])];
    return items;
  };
  blend.normal = (arg0, arg1) => {
    obj = chroma$k(arg1);
    const rgbResult = chroma$k(arg1).rgb();
    return chroma$k.rgb(f107605(rgbResult, chroma$k(arg0).rgb()));
  };
  f107605 = (arg0, arg1) => {
    const items = [f107605(arg0[0], arg1[0]), f107605(arg0[1], arg1[1]), f107605(arg0[2], arg1[2])];
    return items;
  };
  blend.multiply = (arg0, arg1) => {
    obj = chroma$k(arg1);
    const rgbResult = chroma$k(arg1).rgb();
    return chroma$k.rgb(f107605(rgbResult, chroma$k(arg0).rgb()));
  };
  f107605 = (arg0, arg1) => {
    const items = [f107605(arg0[0], arg1[0]), f107605(arg0[1], arg1[1]), f107605(arg0[2], arg1[2])];
    return items;
  };
  blend.screen = (arg0, arg1) => {
    obj = chroma$k(arg1);
    const rgbResult = chroma$k(arg1).rgb();
    return chroma$k.rgb(f107605(rgbResult, chroma$k(arg0).rgb()));
  };
  f107605 = (arg0, arg1) => {
    const items = [f107605(arg0[0], arg1[0]), f107605(arg0[1], arg1[1]), f107605(arg0[2], arg1[2])];
    return items;
  };
  blend.overlay = (arg0, arg1) => {
    obj = chroma$k(arg1);
    const rgbResult = chroma$k(arg1).rgb();
    return chroma$k.rgb(f107605(rgbResult, chroma$k(arg0).rgb()));
  };
  f107605 = (arg0, arg1) => {
    const items = [f107605(arg0[0], arg1[0]), f107605(arg0[1], arg1[1]), f107605(arg0[2], arg1[2])];
    return items;
  };
  blend.darken = (arg0, arg1) => {
    obj = chroma$k(arg1);
    const rgbResult = chroma$k(arg1).rgb();
    return chroma$k.rgb(f107605(rgbResult, chroma$k(arg0).rgb()));
  };
  f107605 = (arg0, arg1) => {
    const items = [f107605(arg0[0], arg1[0]), f107605(arg0[1], arg1[1]), f107605(arg0[2], arg1[2])];
    return items;
  };
  blend.lighten = (arg0, arg1) => {
    obj = chroma$k(arg1);
    const rgbResult = chroma$k(arg1).rgb();
    return chroma$k.rgb(f107605(rgbResult, chroma$k(arg0).rgb()));
  };
  f107605 = (arg0, arg1) => {
    const items = [f107605(arg0[0], arg1[0]), f107605(arg0[1], arg1[1]), f107605(arg0[2], arg1[2])];
    return items;
  };
  blend.dodge = (arg0, arg1) => {
    obj = chroma$k(arg1);
    const rgbResult = chroma$k(arg1).rgb();
    return chroma$k.rgb(f107605(rgbResult, chroma$k(arg0).rgb()));
  };
  f107605 = (arg0, arg1) => {
    const items = [f107605(arg0[0], arg1[0]), f107605(arg0[1], arg1[1]), f107605(arg0[2], arg1[2])];
    return items;
  };
  blend.burn = (arg0, arg1) => {
    obj = chroma$k(arg1);
    const rgbResult = chroma$k(arg1).rgb();
    return chroma$k.rgb(f107605(rgbResult, chroma$k(arg0).rgb()));
  };
  pow = Math.pow;
  sin = Math.sin;
  cos = Math.cos;
  floor = Math.floor;
  log = Math.log;
  pow = Math.pow;
  floor = Math.floor;
  function analyze(arg0, arg1) {
    c0 = arg1;
    if (undefined === arg1) {
      c0 = null;
    }
    obj = { min: Number.MAX_VALUE, max: -1 * Number.MAX_VALUE, sum: 0, values: [], count: 0 };
    if (typeof type$p !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let call = toString.call;
    let values = arg0;
    if ("object" === tmp3) {
      let _Object = Object;
      values = Object.values(arg0);
    }
    const item = values.forEach((arg0) => {
      let tmp2 = c0;
      if (c0) {
        if (typeof closure_1_218 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const _Object = Object;
        const call = toString.call;
        tmp2 = "object" === (c0[typeof call === "unknown" ? toString(arg0) : call(toString, arg0)] || "object");
        const tmp4 = c0;
        const tmp6 = c0[typeof call === "unknown" ? toString(arg0) : call(toString, arg0)] || "object";
      }
      let tmp7 = arg0;
      if (tmp2) {
        tmp7 = arg0[tmp];
      }
      let isNaNResult = null == tmp7;
      if (!isNaNResult) {
        const _isNaN = isNaN;
        isNaNResult = isNaN(tmp7);
      }
      if (!isNaNResult) {
        const values = obj.values;
        values.push(tmp7);
        obj.sum = obj.sum + tmp7;
        if (tmp7 < obj.min) {
          tmp10.min = tmp7;
        }
        if (tmp7 > obj.max) {
          tmp10.max = tmp7;
        }
        obj.count = obj.count + 1;
      }
    });
    const items = [, ];
    ({ min: arr2[0], max: arr2[1] } = obj);
    obj.domain = items;
    obj.limits = (arg0, arg1) => closure_1_224(obj, arg0, arg1);
    return obj;
  }
  function limits(analyzeResult, arg1, arg2) {
    let flag;
    let str = arg1;
    if (undefined === arg1) {
      str = "equal";
    }
    let num = arg2;
    if (undefined === arg2) {
      num = 7;
    }
    if (typeof type$p !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const call = toString.call;
    let tmp3 = analyzeResult;
    if ("array" == tmp2) {
      tmp3 = analyze(analyzeResult);
    }
    ({ min, max, values } = tmp3);
    const sorted = values.sort((arg0, arg1) => arg0 - arg1);
    if (1 === num) {
      const items = [min, max];
      return items;
    } else {
      const items1 = [];
      if ("c" === str.substr(0, 1)) {
        items1.push(min);
        items1.push(max);
      }
      if ("e" === str.substr(0, 1)) {
        items1.push(min);
        for (let num20 = 1; num20 < num; num20 = num20 + 1) {
          let arr2 = items1.push(min + num20 / num * (max - min));
        }
        items1.push(max);
      } else if ("l" === str.substr(0, 1)) {
        if (min <= 0) {
          const _Error = Error;
          error = new Error("Logarithmic scales are only possible for values > 0");
          throw error;
        } else {
          const _Math = Math;
          result = Math.LOG10E * log(min);
          const _Math2 = Math;
          result1 = Math.LOG10E * log(max);
          items1.push(min);
          for (let num19 = 1; num19 < num; num19 = num19 + 1) {
            let tmp47 = pow;
            let arr5 = items1.push(pow(10, result + num19 / num * (result1 - result)));
          }
          items1.push(max);
        }
      } else if ("q" === str.substr(0, 1)) {
        items1.push(min);
        for (let num18 = 1; num18 < num; num18 = num18 + 1) {
          result2 = (sorted.length - 1) * num18 / num;
          let tmp40 = floor;
          let tmp41 = floor(result2);
          let tmp42 = num18;
          if (tmp41 === result2) {
            let arr8 = items1.push(sorted[tmp41]);
          } else {
            let diff = result2 - tmp41;
            let arr9 = items1.push(sorted[tmp41] * (1 - diff) + sorted[tmp41 + 1] * diff);
          }
        }
        items1.push(max);
      } else if ("k" === str.substr(0, 1)) {
        const _Array2 = Array;
        let array = new Array(length);
        const _Array3 = Array;
        array = new Array(num);
        let items2 = [];
        items2.push(min);
        for (let num2 = 1; num2 < num; num2 = num2 + 1) {
          let arr12 = items2.push(min + num2 / num * (max - min));
        }
        items2.push(max);
        let num4 = 0;
        do {
          let tmp10 = items2;
          let tmp11 = num4;
          for (let num5 = 0; num5 < num; num5 = num5 + 1) {
            array[num5] = 0;
          }
          for (let num6 = 0; num6 < length; num6 = num6 + 1) {
            let _Number = Number;
            let tmp13 = num6;
            let num7 = 0;
            if (0 < num) {
              do {
                let tmp15 = abs;
                let tmp16 = abs(items2[num7] - tmp12);
                let tmp17 = num7;
                let tmp18 = tmp14;
                let tmp19 = MAX_VALUE;
                if (tmp16 < MAX_VALUE) {
                  tmp18 = num7;
                  tmp19 = tmp16;
                }
                array[tmp18] = array[tmp18] + 1;
                array[num6] = tmp18;
                num7 = num7 + 1;
                tmp14 = tmp18;
                MAX_VALUE = tmp19;
              } while (num7 < num);
            }
          }
          let _Array = Array;
          let tmp20 = new.target;
          let tmp21 = new.target;
          let tmp22 = num;
          let array1 = new Array(num);
          let tmp24 = array1;
          for (let num8 = 0; num8 < num; num8 = num8 + 1) {
            array1[num8] = null;
          }
          for (let num9 = 0; num9 < length; num9 = num9 + 1) {
            let tmp25 = array[num9];
            let tmp26 = num9;
            if (null === array1[tmp25]) {
              array1[tmp25] = sorted[num9];
            } else {
              array1[tmp25] = array1[tmp25] + sorted[num9];
            }
          }
          for (let num10 = 0; num10 < num; num10 = num10 + 1) {
            array1[num10] = array1[num10] * (1 / array[num10]);
          }
          let num11 = 0;
          flag = false;
          if (0 < num) {
            let tmp27 = num11;
            flag = true;
            while (array1[num11] === items2[num11]) {
              let sum = num11 + 1;
              num11 = sum;
              flag = false;
              if (sum >= num) {
                break;
              }
            }
          }
          let sum1 = num4 + 1;
          if (200 < sum1) {
            flag = false;
          }
          items2 = array1;
          num4 = sum1;
        } while (flag);
        obj = {};
        for (let num12 = 0; num12 < num; num12 = num12 + 1) {
          obj[num12] = [];
        }
        for (let num13 = 0; num13 < length; num13 = num13 + 1) {
          arr2 = obj[array[num13]];
          let arr14 = arr2.push(sorted[num13]);
        }
        const items3 = [];
        for (let num14 = 0; num14 < num; num14 = num14 + 1) {
          let arr15 = items3.push(obj[num14][0]);
          let arr16 = items3.push(obj[num14][obj[num14].length - 1]);
        }
        const sorted1 = items3.sort((arg0, arg1) => arg0 - arg1);
        items1.push(sorted1[0]);
        for (let num17 = 1; num17 < sorted1.length; num17 = num17 + 2) {
          let tmp34 = sorted1[num17];
          let _isNaN = isNaN;
          let isNaNResult = isNaN(tmp34);
          let tmp36 = num17;
          if (!isNaNResult) {
            isNaNResult = -1 !== items1.indexOf(tmp34);
          }
          if (!isNaNResult) {
            let arr18 = items1.push(tmp34);
          }
        }
      }
      return items1;
    }
    const tmp = f107605;
    tmp2 = f107605[typeof call === "unknown" ? toString(analyzeResult) : call(toString, analyzeResult)] || "object";
  }
  sqrt = Math.sqrt;
  pow = Math.pow;
  min = Math.min;
  max = Math.max;
  atan2 = Math.atan2;
  abs = Math.abs;
  cos = Math.cos;
  sin = Math.sin;
  PI = Math.PI;
  const obj17 = { OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"], PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"], BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"], Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"], BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"], YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"], YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"], Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"], RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"], Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"], YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"], Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"], GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"], Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"], YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"], PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"], Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"], PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"], Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"], Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"], RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"], RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"], PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"], PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"], RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"], BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"], RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"], PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"], Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"], Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"], Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"], Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"], Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"], Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"], Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"], Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"] };
  let keys = Object.keys(obj17);
  let num2 = 0;
  if (0 < keys.length) {
    do {
      let str2 = keys[num2];
      obj17[str2.toLowerCase()] = obj17[str2];
      num2 = num2 + 1;
      length2 = keys.length;
    } while (num2 < length2);
  }
  chroma$k.average = (arr) => {
    let length2;
    let str = arg1;
    let lrgb = arg1;
    let tmp = arg2;
    let mapped = arg2;
    if (undefined === arg1) {
      lrgb = "lrgb";
      str = "lrgb";
    }
    if (undefined === tmp) {
      mapped = null;
      tmp = null;
    }
    if (!tmp) {
      const _Array = Array;
      const _Array2 = Array;
      const array = new Array(length);
      arr = Array.from(array);
      mapped = arr.map(() => 1);
      tmp = mapped;
    }
    closure_2 = length / tmp.reduce((arg0, arg1) => arg0 + arg1);
    const item = tmp.forEach((arg0, arg1) => {
      mapped[arg1] = mapped[arg1] * closure_2;
    });
    const mapped1 = arr.map((arg0) => callback(arg0));
    if ("lrgb" === str) {
      if (typeof _average_lrgb !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const items = [0, 0, 0, 0];
      let num12 = 0;
      if (0 < mapped1.length) {
        do {
          result = tmp[num12] / tmp34;
          let _rgb = mapped1[num12]._rgb;
          let tmp36 = pow;
          items[0] = items[0] + pow(_rgb[0], 2) * result;
          items[1] = items[1] + pow(_rgb[1], 2) * result;
          items[2] = items[2] + pow(_rgb[2], 2) * result;
          items[3] = items[3] + _rgb[3] * result;
          num12 = num12 + 1;
          length2 = mapped1.length;
        } while (num12 < length2);
      }
      items[0] = sqrt(items[0]);
      items[1] = sqrt(items[1]);
      items[2] = sqrt(items[2]);
      if (items[3] > 0.9999999) {
        items[3] = 1;
      }
      clip_rgb(items);
      const tmp42 = Color(items);
      return tmp42;
    } else {
      arr = mapped1.shift();
      let value = arr.get(str);
      last = value;
      const items1 = [];
      closure_5 = 0;
      closure_6 = 0;
      let num7 = 1;
      for (let num3 = 0; num3 < value.length; num3 = num3 + num7) {
        let num = value[num3];
        let tmp11 = num3;
        if (!num) {
          num = 0;
        }
        value[num3] = num * tmp[0];
        let _isNaN = isNaN;
        let num2 = 0;
        if (!isNaN(value[num3])) {
          num2 = tmp[0];
        }
        arr = items1.push(num2);
        if ("h" === str.charAt(num3)) {
          let _isNaN2 = isNaN;
          if (!isNaN(value[num3])) {
            let tmp13 = PI;
            result1 = value[num3] / 180 * PI;
            let tmp15 = closure_5;
            let tmp16 = cos;
            closure_5 = closure_5 + cos(result1) * tmp[0];
            let tmp17 = closure_6;
            let tmp18 = sin;
            closure_6 = closure_6 + sin(result1) * tmp[0];
          }
        }
      }
      closure_7 = arr.alpha() * tmp[0];
      const item1 = mapped1.forEach((get) => {
        value = get.get(lrgb);
        closure_7 = closure_7 + get.alpha() * mapped[arg1 + 1];
        let num = 0;
        if (0 < value.length) {
          do {
            let _isNaN = isNaN;
            let tmp2 = num;
            if (!isNaN(value[num])) {
              let tmp3 = items1;
              let tmp4 = mapped;
              items1[num] = items1[num] + mapped[arg1 + 1];
              let tmp5 = lrgb;
              if ("h" === lrgb.charAt(num)) {
                let tmp7 = closure_1_196;
                result = value[num] / 180 * closure_1_196;
                let tmp9 = closure_5;
                let tmp10 = closure_1_197;
                closure_5 = closure_5 + closure_1_197(result) * tmp4[arg1 + 1];
                let tmp11 = closure_6;
                let tmp12 = closure_1_198;
                closure_6 = closure_6 + closure_1_198(result) * tmp4[arg1 + 1];
              } else {
                let tmp6 = value;
                value[num] = value[num] + value[num] * tmp4[arg1 + 1];
              }
            }
            num = num + 1;
            let tmp13 = value;
          } while (num < value.length);
        }
      });
      for (let num5 = 0; num5 < value.length; num5 = num5 + num7) {
        let tmp20 = num5;
        if ("h" === str.charAt(num5)) {
          let tmp21 = atan2;
          let tmp22 = closure_6;
          let tmp23 = closure_5;
          let tmp24 = PI;
          result2 = atan2(closure_6 / items1[num5], closure_5 / items1[num5]) / PI * 180;
          let tmp26 = result2;
          if (result2 < 0) {
            do {
              result2 = result2 + 360;
              tmp26 = result2;
            } while (result2 < 0);
          }
          let diff = tmp26;
          let tmp28 = tmp26;
          if (360 <= tmp26) {
            do {
              diff = diff - 360;
              tmp28 = diff;
            } while (360 <= diff);
          }
          value[num5] = tmp28;
        } else {
          value[num5] = value[num5] / items1[num5];
        }
      }
      closure_7 = closure_7 / length;
      obj = Color(value, str);
      if (closure_7 <= 0.99999) {
        num7 = closure_7;
      }
      return obj.alpha(num7, true);
    }
  };
  chroma$k.bezier = (arr) => {
    const mapped = arr.map((arg0) => callback(arg0));
    if (2 === mapped.length) {
      const mapped1 = mapped.map((lab) => lab.lab());
      [fn, type$p] = mapped1;
      fn = function a(arg0) {
        closure_0 = arg0;
        const items = [0, 1, 2];
        return closure_1_204(items.map((arg0) => dependencyMap[arg0] + dependencyMap * (closure_1_1[arg0] - dependencyMap[arg0])), "lab");
      };
    } else if (3 === mapped.length) {
      const mapped2 = mapped.map((lab) => lab.lab());
      [fn, type$p, type$p] = mapped2;
      fn = function a(arg0) {
        closure_0 = arg0;
        const items = [0, 1, 2];
        return closure_1_204(items.map((arg0) => (1 - table) * (1 - table) * table[arg0] + 2 * (1 - table) * table * closure_1_1[arg0] + table * table * closure_1_2[arg0]), "lab");
      };
    } else if (4 === mapped.length) {
      const mapped3 = mapped.map((lab) => lab.lab());
      [fn, type$p, type$p, last] = mapped3;
      fn = function a(arg0) {
        closure_0 = arg0;
        const items = [0, 1, 2];
        return closure_1_204(items.map((arg0) => (1 - table) * (1 - table) * (1 - table) * table[arg0] + 3 * (1 - table) * (1 - table) * table * closure_1_1[arg0] + 3 * (1 - table) * table * table * closure_1_2[arg0] + table * table * table * closure_1_3[arg0]), "lab");
      };
    } else if (mapped.length >= 5) {
      closure_4 = mapped.map((lab) => lab.lab());
      const diff = mapped.length - 1;
      let items = [1, 1];
      let num2 = 1;
      let tmp7 = items;
      if (1 < diff) {
        do {
          let items1 = [1];
          let tmp8 = num2;
          let tmp9 = items;
          for (let num3 = 1; num3 <= items.length; num3 = num3 + 1) {
            let num4 = items[num3];
            let tmp10 = num3;
            if (!num4) {
              num4 = 0;
            }
            items1[num3] = num4 + items[num3 - 1];
          }
          num2 = num2 + 1;
          items = items1;
          tmp7 = items1;
        } while (num2 < diff);
      }
      items1 = tmp7;
      fn = function a(arg0) {
        closure_0 = arg0;
        closure_1 = 1 - arg0;
        const items = [0, 1, 2];
        return closure_1_204(items.map((arg0) => {
          closure_0 = arg0;
          return closure_1_4.reduce((arg0, arg1, exponent) => {
            result = closure_2_5[exponent] * Math.pow(closure_1_1, closure_2_6 - exponent);
            return arg0 + result * Math.pow(closure_0, exponent) * arg1[closure_0];
          }, 0);
        }), "lab");
      };
    } else {
      const _RangeError = RangeError;
      const rangeError = new RangeError("No point in running bezier with only one color.");
      throw rangeError;
    }
    fn.scale = () => closure_1_205(fn);
    return fn;
  };
  chroma$k.blend = blend;
  chroma$k.cubehelix = (arg0, arg1, arg2, arg3, arg4) => {
    c0 = arg0;
    c1 = arg1;
    c2 = arg2;
    c3 = arg3;
    let tmp = arg4;
    let items1 = arg4;
    if (undefined === arg0) {
      c0 = 300;
    }
    if (undefined === arg1) {
      c1 = -1.5;
    }
    if (undefined === arg2) {
      c2 = 1;
    }
    if (undefined === arg3) {
      c3 = 1;
    }
    if (undefined === tmp) {
      let items = [0, 1];
      items1 = items;
      tmp = items;
    }
    c6 = 0;
    if (typeof type$p !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let call = toString.call;
    if ("array" === tmp3) {
      c5 = items1[1] - items1[0];
    } else {
      c5 = 0;
      items1 = [, ];
      items1[0] = items1;
      items1[1] = items1;
    }
    const fn = function f(arg0) {
      const sum = (c0 + 120) / 360 + c1 * arg0;
      const tmp3 = closure_1_211(items1[0] + c5 * arg0, c3);
      if (0 !== c6) {
        let sum1 = dependencyMap[0] + arg0 * c6;
      } else {
        sum1 = dependencyMap;
      }
      result = closure_1_210 * sum;
      result1 = sum1 * tmp3 * (1 - tmp3) / 2;
      const tmp9 = closure_1_213(result);
      const tmp10 = closure_1_212(result);
      const items = [255 * (tmp3 + result1 * (-0.14861 * tmp9 + 1.78277 * tmp10)), 255 * (tmp3 + result1 * (-0.29227 * tmp9 - 0.90649 * tmp10)), 255 * (tmp3 + result1 * (1.97294 * tmp9)), 1];
      closure_1_209(items);
      return closure_1_214(items);
    };
    fn.start = (arg0) => {
      if (null == arg0) {
        let tmp = closure_0;
      } else {
        closure_0 = arg0;
        tmp = fn;
      }
      return tmp;
    };
    fn.rotations = (arg0) => {
      if (null == arg0) {
        let tmp = closure_1;
      } else {
        closure_1 = arg0;
        tmp = fn;
      }
      return tmp;
    };
    fn.gamma = (arg0) => {
      if (null == arg0) {
        let tmp = closure_3;
      } else {
        closure_3 = arg0;
        tmp = fn;
      }
      return tmp;
    };
    fn.hue = (arg0) => {
      if (null == arg0) {
        let tmp8 = dependencyMap;
      } else {
        dependencyMap = arg0;
        if (typeof closure_1_208 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const _Object = Object;
        const call = toString.call;
        if ("array" === tmp3) {
          const diff = dependencyMap[1] - dependencyMap[0];
          c6 = diff;
          if (0 == diff) {
            dependencyMap = dependencyMap[1];
          }
        } else {
          c6 = 0;
        }
        tmp8 = fn;
        const tmp = c0;
        tmp3 = c0[typeof call === "unknown" ? toString(arg0) : call(toString, arg0)] || "object";
      }
      return tmp8;
    };
    fn.lightness = (arg0) => {
      if (null == arg0) {
        let tmp4 = items;
      } else {
        if (typeof closure_1_208 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const _Object = Object;
        const call = toString.call;
        if ("array" === tmp3) {
          items = arg0;
          c5 = arg0[1] - arg0[0];
        } else {
          items = [arg0, arg0];
          c5 = 0;
        }
        tmp4 = fn;
        const tmp = c0;
        tmp3 = c0[typeof call === "unknown" ? toString(arg0) : call(toString, arg0)] || "object";
      }
      return tmp4;
    };
    fn.scale = () => closure_1_214.scale(fn);
    fn.hue(c2);
    return fn;
  };
  chroma$k.interpolate = mix$1;
  chroma$k.mix = mix$1;
  chroma$k.random = () => {
    let text;
    let num = 0;
    do {
      let charAt = "0123456789abcdef".charAt;
      let tmp2 = floor;
      let tmp3 = random;
      text = `#${"0123456789abcdef".charAt(floor(16 * random()))}`;
      num = num + 1;
      let tmp = text;
    } while (num < 6);
    return Color(text, "hex");
  };
  chroma$k.scale = scale$2;
  chroma$k.analyze = analyze;
  chroma$k.contrast = (arg0, arg1) => {
    obj = Color(arg0);
    const luminanceResult = obj.luminance();
    const luminanceResult1 = Color(arg1).luminance();
    if (luminanceResult > luminanceResult1) {
      result = (luminanceResult + 0.05) / (luminanceResult1 + 0.05);
    } else {
      result = (luminanceResult1 + 0.05) / (luminanceResult + 0.05);
    }
    return result;
  };
  chroma$k.deltaE = (arg0, arg1, arg2, arg3, arg4) => {
    let num = arg2;
    if (undefined === arg2) {
      num = 1;
    }
    let num2 = arg3;
    if (undefined === arg3) {
      num2 = 1;
    }
    let num3 = arg4;
    if (undefined === arg4) {
      num3 = 1;
    }
    obj = Color(arg0);
    let arr = Array.from(obj.lab());
    [tmp2, tmp3, tmp4] = arr;
    arr = Array.from(Color(arg1).lab());
    [tmp6, tmp7, tmp8] = arr;
    result = (tmp2 + tmp6) / 2;
    const obj2 = Color(arg1);
    const tmp12 = pow(tmp3, 2);
    const tmp13 = sqrt(pow(tmp3, 2) + pow(tmp4, 2));
    result1 = (tmp13 + sqrt(pow(tmp7, 2) + pow(tmp8, 2))) / 2;
    const tmp14 = pow(tmp7, 2);
    const tmp16 = pow(result1, 7);
    const sum = 1 + 0.5 * (1 - sqrt(tmp16 / (pow(result1, 7) + pow(25, 7))));
    result2 = tmp3 * sum;
    result3 = tmp7 * sum;
    const tmp17 = pow(result1, 7);
    const tmp22 = sqrt(pow(result2, 2) + pow(tmp4, 2));
    const tmp21 = pow(result2, 2);
    const tmp24 = sqrt(pow(result3, 2) + pow(tmp8, 2));
    const result4 = (tmp22 + tmp24) / 2;
    const result5 = 360 * atan2(tmp4, result2) / (2 * PI);
    let sum1 = result5;
    const result6 = 360 * atan2(tmp8, result3);
    const result7 = 2 * PI;
    if (0 > result5) {
      sum1 = result5 + 360;
    }
    const result8 = result6 / result7;
    let sum2 = result8;
    if (0 > result8) {
      sum2 = result8 + 360;
    }
    if (abs(sum1 - sum2) > 180) {
      let result9 = (sum1 + sum2 + 360) / 2;
    } else {
      result9 = (sum1 + sum2) / 2;
    }
    const result10 = 0.17 * cos(2 * tmp26 * (result9 - 30) / 360);
    const result11 = 0.24 * cos(2 * tmp26 * (2 * result9) / 360);
    const result12 = 0.32 * cos(2 * tmp26 * (3 * result9 + 6) / 360);
    const diff = sum2 - sum1;
    const result13 = 0.2 * cos(2 * tmp26 * (4 * result9 - 63) / 360);
    if (abs(diff) <= 180) {
      const diff1 = 1 - result10 + result11 + result12 - result13;
      const result14 = 2 * tmp10(tmp22 * tmp24);
      const result15 = result14 * sin(2 * tmp26 * diff / 360 / 2);
      const diff2 = tmp24 - tmp22;
      const diff3 = result - 50;
      const diff4 = tmp6 - tmp2;
      const result16 = 0.015 * tmp11(diff3, 2);
      const sum3 = 1 + 0.045 * result4;
      const sum4 = 1 + 0.015 * result4 * diff1;
      const result17 = result16 / tmp10(20 + tmp11(diff3, 2));
      const result18 = 30 * exp(-tmp11((result9 - 275) / 25, 2));
      let tmp11Result = tmp11(result4, 7);
      tmp11Result = tmp11(result4, 7);
      const result19 = -2 * tmp10(tmp11Result / (tmp11Result + tmp11(25, 7)));
      const result20 = result19 * sin(2 * (2 * tmp26 * result18 / 360));
      const sum5 = tmp11(diff4 / (num * (1 + result17)), 2) + tmp11(diff2 / (num2 * sum3), 2);
      return max(0, min(100, tmp10(sum5 + tmp11(result15 / (num3 * sum4), 2) + result20 * (diff2 / (num2 * sum3)) * (result15 / (num3 * sum4)))));
    }
  };
  chroma$k.distance = (arg0, arg1, arg2) => {
    let str = arg2;
    if (undefined === arg2) {
      str = "lab";
    }
    obj = Color(arg0);
    let value = obj.get(str);
    let num = 0;
    let num2 = 0;
    value = Color(arg1).get(str);
    const keys = Object.keys();
    if (keys !== undefined) {
      num2 = num;
      while (keys[tmp] !== undefined) {
        let tmp10 = tmp6;
        let tmp7 = value[tmp6] || 0;
        let tmp8 = value[tmp6] || 0;
        let diff = tmp7 - tmp8;
        num = num + diff * diff;
        continue;
      }
    }
    return Math.sqrt(num2);
  };
  chroma$k.limits = limits;
  chroma$k.valid = () => {
    let tmp3;
    const items = [];
    const tmp = +arguments.length;
    let diff = tmp - 1;
    if (tmp) {
      do {
        items[diff] = arguments[diff];
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    try {
      const _Function = Function;
      const items1 = [null];
      new bind.apply(Color, items1.concat(items))();
      return true;
    } catch (err) {
      return false;
    }
  };
  chroma$k.scales = {
    cool() {
      const items = [chroma$k.hsl(180, 1, 0.9), chroma$k.hsl(250, 0.7, 0.4)];
      return scale$2(items);
    },
    hot() {
      return scale$2(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
    }
  };
  chroma$k.colors = obj9;
  chroma$k.brewer = obj17;
  return chroma$k;
};
if (typeof exports === "object") {
  if (undefined !== module) {
    module.exports = fn();
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(fn);
  }
}
let self = this;
if (typeof globalThis !== "undefined") {
  self = globalThis;
}
self.chroma = fn();
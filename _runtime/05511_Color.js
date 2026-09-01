// _runtime/05511_Color.js
import keys2 from "05512_keys.js";
import hasOwnProperty from "05516_hasOwnProperty.js";
import closure_2 from "metro/00032__slicedToArray.js";

class Color {
  constructor(arg0, arg1) {
    self = this;
    str = require;
    tmp = Color;
    if (this instanceof Color) {
      tmp4 = str;
      if (str) {
        tmp5 = closure_3;
        tmp4 = str in closure_3;
      }
      if (tmp4) {
        str = null;
      }
      if (str) {
        tmp6 = closure_0;
        tmp7 = closure_1;
        if (!(str in require("keys"))) {
          tmp8 = globalThis;
          _Error = Error;
          str2 = "Unknown model: ";
          tmp9 = new.target;
          tmp10 = new.target;
          error = new Error("Unknown model: " + str);
          tmp12 = error;
          throw error;
        }
      }
      tmp13 = null;
      if (null == global) {
        str7 = "rgb";
        self.model = "rgb";
        self.color = [0, 0, 0];
        num13 = 1;
        self.valpha = 1;
      } else if (global instanceof tmp) {
        self.model = global.model;
        items = [];
        num12 = 0;
        tmp36 = items;
        arraySpreadResult = HermesBuiltin.arraySpread(global.color, 0);
        self.color = items;
        self.valpha = global.valpha;
      } else if (typeof global === "string") {
        tmp29 = closure_0;
        tmp30 = closure_1;
        obj2 = require("hasOwnProperty");
        iter = obj2.get(global);
        if (null === iter) {
          tmp31 = globalThis;
          _Error3 = Error;
          str6 = "Unable to parse color from string: ";
          tmp32 = new.target;
          tmp33 = new.target;
          error1 = new Error("Unable to parse color from string: " + global);
          tmp35 = error1;
          throw error1;
        } else {
          self.model = iter.model;
          channels2 = require("keys")[self.model].channels;
          value = iter.value;
          num10 = 0;
          self.color = require("../discord_app/index.native.tsx");
          num11 = 1;
          if (typeof iter.value[channels2] === "number") {
            num11 = iter.value[channels2];
          }
          self.valpha = num11;
        }
      } else {
        num18 = 0;
        if (global.length > 0) {
          if (!str) {
            str = "rgb";
          }
          self.model = str;
          tmp24 = closure_0;
          tmp25 = closure_1;
          channels = require("keys")[self.model].channels;
          tmp26 = globalThis;
          _Array = Array;
          slice = Array.prototype.slice;
          call = slice.call;
          tmp27 = typeof call === "unknown" ? require("../discord_app/index.native.tsx") : call(global, 0, channels);
          num8 = 1;
          for (let num9 = 0; num9 < channels; num9 = num9 + num8) {
            tmp28 = num9;
            if (typeof tmp27[num9] !== "number") {
              tmp27[num9] = 0;
            }
          }
          self.color = tmp27;
          if (typeof global[channels] === "number") {
            num8 = global[channels];
          }
          self.valpha = num8;
        } else if (typeof global === "number") {
          str5 = "rgb";
          self.model = "rgb";
          num4 = 16;
          items1 = [, , ];
          num5 = 255;
          items1[0] = global >> 16 & 255;
          num6 = 8;
          items1[1] = global >> 8 & 255;
          items1[2] = 255 & global;
          self.color = items1;
          num7 = 1;
          self.valpha = 1;
        } else {
          num19 = 1;
          self.valpha = 1;
          tmp46 = globalThis;
          _Object3 = Object;
          keys = Object.keys(global);
          str8 = "alpha";
          if ("alpha" in global) {
            spliceResult = keys.splice(keys.indexOf("alpha"), 1);
            num = 0;
            if (typeof global.alpha === "number") {
              num = global.alpha;
            }
            self.valpha = num;
          }
          sorted = keys.sort();
          str3 = "";
          joined = sorted.join("");
          if (joined in closure_4) {
            self.model = closure_4[joined];
            tmp20 = closure_0;
            tmp21 = closure_1;
            labels = require("keys")[self.model].labels;
            items2 = [];
            num2 = 0;
            if (0 < labels.length) {
              do {
                arr = items2.push(global[labels[num2]]);
                num2 = num2 + 1;
                length = labels.length;
              } while (num2 < length);
            }
            num3 = 0;
            if (0 < undefined) {
              do {
                tmp23 = num3;
                if (typeof items2[num3] !== "number") {
                  items2[num3] = 0;
                }
                num3 = num3 + 1;
              } while (num3 < undefined);
            }
            self.color = items2;
          } else {
            _Error2 = Error;
            _JSON = JSON;
            str4 = "Unable to parse color from object: ";
            tmp16 = new.target;
            tmp17 = new.target;
            error2 = new Error("Unable to parse color from object: " + JSON.stringify(global));
            tmp19 = error2;
            throw error2;
          }
        }
      }
      tmp38 = closure_5;
      if (closure_5[self.model]) {
        tmp39 = closure_0;
        tmp40 = closure_1;
        channels3 = require("keys")[self.model].channels;
        num14 = 0;
        num15 = 1;
        if (0 < channels3) {
          do {
            tmp41 = closure_5;
            tmp42 = closure_5[self.model][num14];
            tmp43 = num14;
            if (tmp42) {
              self.color[num14] = tmp42(self.color[num14]);
            }
            num14 = num14 + 1;
          } while (num14 < channels3);
        }
      }
      tmp44 = globalThis;
      _Math = Math;
      _Math2 = Math;
      num16 = 1;
      num17 = 0;
      self.valpha = require("../discord_app/index.native.tsx");
      _Object = Object;
      if (Object.freeze) {
        _Object2 = Object;
        frozen = Object.freeze(self);
      }
      return;
    } else {
      tmpResult = tmp(global, str);
      tmp3 = tmpResult;
      return tmpResult;
    }
  }
}
let closure_3 = ["keyword", "gray", "hex"];
let obj = {};
let keys = Object.keys(keys2);
let iter = keys[Symbol.iterator]();
const nextResult = iter.next();
while (iter !== undefined) {
  let items = [];
  let tmp3 = items;
  let num = 0;
  let arraySpreadResult = HermesBuiltin.arraySpread(keys2[nextResult].labels, 0);
  class Color {
    constructor(arg0, arg1) {
      self = this;
      str = require;
      tmp = Color;
      if (this instanceof Color) {
        tmp4 = str;
        if (str) {
          tmp5 = closure_3;
          tmp4 = str in closure_3;
        }
        if (tmp4) {
          str = null;
        }
        if (str) {
          tmp6 = closure_0;
          tmp7 = closure_1;
          if (!(str in require("keys"))) {
            tmp8 = globalThis;
            _Error = Error;
            str2 = "Unknown model: ";
            tmp9 = new.target;
            tmp10 = new.target;
            error = new Error("Unknown model: " + str);
            tmp12 = error;
            throw error;
          }
        }
        tmp13 = null;
        if (null == global) {
          str7 = "rgb";
          self.model = "rgb";
          self.color = [0, 0, 0];
          num13 = 1;
          self.valpha = 1;
        } else if (global instanceof tmp) {
          self.model = global.model;
          items = [];
          num12 = 0;
          tmp36 = items;
          arraySpreadResult = HermesBuiltin.arraySpread(global.color, 0);
          self.color = items;
          self.valpha = global.valpha;
        } else if (typeof global === "string") {
          tmp29 = closure_0;
          tmp30 = closure_1;
          obj2 = require("hasOwnProperty");
          iter = obj2.get(global);
          if (null === iter) {
            tmp31 = globalThis;
            _Error3 = Error;
            str6 = "Unable to parse color from string: ";
            tmp32 = new.target;
            tmp33 = new.target;
            error1 = new Error("Unable to parse color from string: " + global);
            tmp35 = error1;
            throw error1;
          } else {
            self.model = iter.model;
            channels2 = require("keys")[self.model].channels;
            value = iter.value;
            num10 = 0;
            self.color = require("../discord_app/index.native.tsx");
            num11 = 1;
            if (typeof iter.value[channels2] === "number") {
              num11 = iter.value[channels2];
            }
            self.valpha = num11;
          }
        } else {
          num18 = 0;
          if (global.length > 0) {
            if (!str) {
              str = "rgb";
            }
            self.model = str;
            tmp24 = closure_0;
            tmp25 = closure_1;
            channels = require("keys")[self.model].channels;
            tmp26 = globalThis;
            _Array = Array;
            slice = Array.prototype.slice;
            call = slice.call;
            tmp27 = typeof call === "unknown" ? require("../discord_app/index.native.tsx") : call(global, 0, channels);
            num8 = 1;
            for (let num9 = 0; num9 < channels; num9 = num9 + num8) {
              tmp28 = num9;
              if (typeof tmp27[num9] !== "number") {
                tmp27[num9] = 0;
              }
            }
            self.color = tmp27;
            if (typeof global[channels] === "number") {
              num8 = global[channels];
            }
            self.valpha = num8;
          } else if (typeof global === "number") {
            str5 = "rgb";
            self.model = "rgb";
            num4 = 16;
            items1 = [, , ];
            num5 = 255;
            items1[0] = global >> 16 & 255;
            num6 = 8;
            items1[1] = global >> 8 & 255;
            items1[2] = 255 & global;
            self.color = items1;
            num7 = 1;
            self.valpha = 1;
          } else {
            num19 = 1;
            self.valpha = 1;
            tmp46 = globalThis;
            _Object3 = Object;
            keys = Object.keys(global);
            str8 = "alpha";
            if ("alpha" in global) {
              spliceResult = keys.splice(keys.indexOf("alpha"), 1);
              num = 0;
              if (typeof global.alpha === "number") {
                num = global.alpha;
              }
              self.valpha = num;
            }
            sorted = keys.sort();
            str3 = "";
            joined = sorted.join("");
            if (joined in closure_4) {
              self.model = closure_4[joined];
              tmp20 = closure_0;
              tmp21 = closure_1;
              labels = require("keys")[self.model].labels;
              items2 = [];
              num2 = 0;
              if (0 < labels.length) {
                do {
                  arr = items2.push(global[labels[num2]]);
                  num2 = num2 + 1;
                  length = labels.length;
                } while (num2 < length);
              }
              num3 = 0;
              if (0 < undefined) {
                do {
                  tmp23 = num3;
                  if (typeof items2[num3] !== "number") {
                    items2[num3] = 0;
                  }
                  num3 = num3 + 1;
                } while (num3 < undefined);
              }
              self.color = items2;
            } else {
              _Error2 = Error;
              _JSON = JSON;
              str4 = "Unable to parse color from object: ";
              tmp16 = new.target;
              tmp17 = new.target;
              error2 = new Error("Unable to parse color from object: " + JSON.stringify(global));
              tmp19 = error2;
              throw error2;
            }
          }
        }
        tmp38 = closure_5;
        if (closure_5[self.model]) {
          tmp39 = closure_0;
          tmp40 = closure_1;
          channels3 = require("keys")[self.model].channels;
          num14 = 0;
          num15 = 1;
          if (0 < channels3) {
            do {
              tmp41 = closure_5;
              tmp42 = closure_5[self.model][num14];
              tmp43 = num14;
              if (tmp42) {
                self.color[num14] = tmp42(self.color[num14]);
              }
              num14 = num14 + 1;
            } while (num14 < channels3);
          }
        }
        tmp44 = globalThis;
        _Math = Math;
        _Math2 = Math;
        num16 = 1;
        num17 = 0;
        self.valpha = require("../discord_app/index.native.tsx");
        _Object = Object;
        if (Object.freeze) {
          _Object2 = Object;
          frozen = Object.freeze(self);
        }
        return;
      } else {
        tmpResult = tmp(global, str);
        tmp3 = tmpResult;
        return tmpResult;
      }
    }
  }
  obj[obj2.join("")] = nextResult;
  continue;
}
function getset(cmyk, arg1, arg2) {
  closure_0 = cmyk;
  closure_1 = arg1;
  closure_2 = arg2;
  let tmp = cmyk;
  if (!Array.isArray(cmyk)) {
    const items = [cmyk];
    tmp = items;
  }
  closure_0 = tmp;
  for (const item10014 of tmp) {
    let tmp4 = dependencyMap[item10014];
    if (!tmp4) {
      let tmp5 = item10014;
      let items1 = [];
      tmp3[tmp2] = items1;
      tmp4 = items1;
    }
    tmp4[arg1] = arg2;
    continue;
  }
  closure_0 = tmp[0];
  return function(arg0) {
    const self = this;
    if (undefined !== arg0) {
      let tmp5 = arg0;
      if (callback) {
        tmp5 = callback(arg0);
      }
      const tmp7 = self[closure_0]();
      tmp7.color[closure_1] = tmp5;
      let tmp4 = tmp7;
    } else {
      const tmp3 = self[closure_0]().color[closure_1];
      tmp4 = tmp3;
      if (callback) {
        tmp4 = callback(tmp3);
      }
    }
    return tmp4;
  };
}
function maxfn(arg0) {
  closure_0 = arg0;
  return (arg0) => Math.max(0, Math.min(closure_0, arg0));
}
let closure_5 = {};
obj = {
  toString() {
    return this.string();
  },
  toJSON() {
    return this[this.model]();
  },
  string(num) {
    const self = this;
    let self2 = this;
    if (!(this.model in hasOwnProperty.to)) {
      self2 = self.rgb();
    }
    num = 1;
    const roundResult = self2.round(num);
    if (1 === roundResult.valpha) {
      let color = roundResult.color;
    } else {
      color = [];
      color[HermesBuiltin.arraySpread(roundResult.color, 0)] = self.valpha;
    }
    const to = hasOwnProperty.to;
    return to[roundResult.model](color);
  },
  percentString(num) {
    num = 1;
    const roundResult = this.rgb().round(num);
    if (1 === roundResult.valpha) {
      let color = roundResult.color;
    } else {
      const items = [];
      items[HermesBuiltin.arraySpread(roundResult.color, 0)] = this.valpha;
      color = items;
    }
    const rgb = hasOwnProperty.to.rgb;
    return rgb.percent(color);
  },
  array() {
    const self = this;
    if (1 === this.valpha) {
      const items = [];
      HermesBuiltin.arraySpread(self.color, 0);
      let items1 = items;
    } else {
      items1 = [];
      items1[HermesBuiltin.arraySpread(self.color, 0)] = self.valpha;
    }
    return items1;
  },
  object() {
    const self = this;
    obj = {};
    const channels = keys2[this.model].channels;
    for (let num = 0; num < channels; num = num + 1) {
      obj[keys2[this.model].labels[num]] = self.color[num];
    }
    if (1 !== self.valpha) {
      obj.alpha = self.valpha;
    }
    return obj;
  },
  unitArray() {
    const color = this.rgb().color;
    color[0] = color[0] / 255;
    color[1] = color[1] / 255;
    color[2] = color[2] / 255;
    if (1 !== this.valpha) {
      color.push(this.valpha);
    }
    return color;
  },
  unitObject() {
    const objectResult = this.rgb().object();
    objectResult.r = objectResult.r / 255;
    objectResult.g = objectResult.g / 255;
    objectResult.b = objectResult.b / 255;
    if (1 !== this.valpha) {
      objectResult.alpha = this.valpha;
    }
    return objectResult;
  },
  round(arg0) {
    let num = arg0;
    if (!arg0) {
      num = 0;
    }
    const color = this.color;
    closure_0 = Math.max(num, 0);
    const items = [];
    ({ valpha: arr2[HermesBuiltin.arraySpread(arr2, arr.map(arr, (toFixed) => Number(toFixed.toFixed(closure_0))), 0)], model } = this);
    return Color(items, model);
  },
  alpha(alphaResult, arg1) {
    const self = this;
    if (undefined !== alphaResult) {
      const items = [];
      const _Math = Math;
      const _Math2 = Math;
      items[HermesBuiltin.arraySpread(self.color, 0)] = Math.max(0, Math.min(1, alphaResult));
      let valpha = Color(items, self.model);
      const arraySpreadResult = HermesBuiltin.arraySpread(self.color, 0);
    } else {
      valpha = self.valpha;
    }
    return valpha;
  },
  red: getset("rgb", 0, require("00255_get_hairlineWidth.js")),
  green: getset("rgb", 1, require("00255_get_hairlineWidth.js")),
  blue: getset("rgb", 2, require("00255_get_hairlineWidth.js")),
  hue: getset(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (arg0) => (arg0 % 360 + 360) % 360),
  saturationl: getset("hsl", 1, require("00100_getConstants.js")),
  lightness: getset("hsl", 2, require("00100_getConstants.js")),
  saturationv: getset("hsv", 1, require("00100_getConstants.js")),
  value: getset("hsv", 2, require("00100_getConstants.js")),
  chroma: getset("hcg", 1, require("00100_getConstants.js")),
  gray: getset("hcg", 2, require("00100_getConstants.js")),
  white: getset("hwb", 1, require("00100_getConstants.js")),
  wblack: getset("hwb", 2, require("00100_getConstants.js")),
  cyan: getset("cmyk", 0, require("00100_getConstants.js")),
  magenta: getset("cmyk", 1, require("00100_getConstants.js")),
  yellow: getset("cmyk", 2, require("00100_getConstants.js")),
  black: getset("cmyk", 3, require("00100_getConstants.js")),
  x: getset("xyz", 0, maxfn(95.047)),
  y: getset("xyz", 1, require("00100_getConstants.js")),
  z: getset("xyz", 2, maxfn(108.833)),
  l: getset("lab", 0, require("00100_getConstants.js")),
  a: getset("lab", 1),
  b: getset("lab", 2),
  keyword(color) {
    if (undefined !== color) {
      let keywordResult = Color(color);
    } else {
      const self = this;
      keywordResult = keys2[this.model].keyword(this.color);
      obj = keys2[this.model];
    }
    return keywordResult;
  },
  hex(arg0) {
    if (undefined !== arg0) {
      let hexResult = Color(arg0);
    } else {
      const self = this;
      const to = hasOwnProperty.to;
      hexResult = to.hex(this.rgb().round().color);
      const rgbResult = this.rgb();
    }
    return hexResult;
  },
  hexa(arg0) {
    if (undefined !== arg0) {
      const tmp5 = Color(arg0);
      return tmp5;
    } else {
      const self = this;
      const _Math = Math;
      const rgbResult = this.rgb();
      const str2 = Math.round(255 * this.valpha);
      const formatted = Math.round(255 * this.valpha).toString(16).toUpperCase();
      let text = formatted;
      if (1 === formatted.length) {
        text = `0${arr}`;
      }
      const to = hasOwnProperty.to;
      return to.hex(rgbResult.round().color) + text;
    }
  },
  rgbNumber() {
    const color = this.rgb().color;
    return (255 & color[0]) << 16 | (255 & color[1]) << 8 | 255 & color[2];
  },
  luminosity() {
    const color = this.rgb().color;
    const items = [];
    const entries = color.entries();
    while (tmp2 !== undefined) {
      let tmp4 = callback;
      let tmp5 = callback(tmp3, 2);
      let result = tmp5[1] / 255;
      let tmp7 = result;
      if (result <= 0.04045) {
        let tmp10 = result;
        let result1 = tmp7 / 12.92;
      } else {
        let tmp8 = result;
        let num = 2.4;
        result1 = ((tmp7 + 0.055) / 1.055) ** 2.4;
      }
      items[tmp5[0]] = result1;
      continue;
    }
    return 0.2126 * items[0] + 0.7152 * items[1] + 0.0722 * items[2];
  },
  contrast(luminosity) {
    const luminosityResult = this.luminosity();
    const luminosityResult1 = luminosity.luminosity();
    if (luminosityResult > luminosityResult1) {
      let result = (luminosityResult + 0.05) / (luminosityResult1 + 0.05);
    } else {
      result = (luminosityResult1 + 0.05) / (luminosityResult + 0.05);
    }
    return result;
  },
  level(arg0) {
    const contrastResult = this.contrast(arg0);
    let str = "AAA";
    if (contrastResult < 7) {
      let str2 = "";
      if (contrastResult >= 4.5) {
        str2 = "AA";
      }
      str = str2;
    }
    return str;
  },
  isDark() {
    const color = this.rgb().color;
    return (2126 * color[0] + 7152 * color[1] + 722 * color[2]) / 10000 < 128;
  },
  isLight() {
    return !this.isDark();
  },
  negate() {
    const rgbResult = this.rgb();
    let num = 0;
    do {
      rgbResult.color[num] = 255 - rgbResult.color[num];
      num = num + 1;
    } while (num < 3);
    return rgbResult;
  },
  lighten(arg0) {
    const hslResult = this.hsl();
    const color = hslResult.color;
    color[2] = color[2] + hslResult.color[2] * arg0;
    return hslResult;
  },
  darken(arg0) {
    const hslResult = this.hsl();
    const color = hslResult.color;
    color[2] = color[2] - hslResult.color[2] * arg0;
    return hslResult;
  },
  saturate(arg0) {
    const hslResult = this.hsl();
    const color = hslResult.color;
    color[1] = color[1] + hslResult.color[1] * arg0;
    return hslResult;
  },
  desaturate(arg0) {
    const hslResult = this.hsl();
    const color = hslResult.color;
    color[1] = color[1] - hslResult.color[1] * arg0;
    return hslResult;
  },
  whiten(arg0) {
    const hwbResult = this.hwb();
    const color = hwbResult.color;
    color[1] = color[1] + hwbResult.color[1] * arg0;
    return hwbResult;
  },
  blacken(arg0) {
    const hwbResult = this.hwb();
    const color = hwbResult.color;
    color[2] = color[2] + hwbResult.color[2] * arg0;
    return hwbResult;
  },
  grayscale() {
    const color = this.rgb().color;
    const sum = 0.3 * color[0] + 0.59 * color[1] + 0.11 * color[2];
    return Color.rgb(sum, sum, sum);
  },
  fade(arg0) {
    return this.alpha(this.valpha - this.valpha * arg0);
  },
  opaquer(arg0) {
    return this.alpha(this.valpha + this.valpha * arg0);
  },
  rotate(arg0) {
    const hslResult = this.hsl();
    const result = (hslResult.color[0] + arg0) % 360;
    let sum = result;
    if (result < 0) {
      sum = 360 + result;
    }
    hslResult.color[0] = sum;
    return hslResult;
  },
  mix(gradientSecondaryBackground, hexResult, arg2, rgb) {
    if (gradientSecondaryBackground) {
      if (gradientSecondaryBackground.rgb) {
        const self = this;
        const rgbResult = gradientSecondaryBackground.rgb();
        const rgbResult1 = this.rgb();
        let num = 0.5;
        if (undefined !== hexResult) {
          num = hexResult;
        }
        const diff = 2 * num - 1;
        const diff1 = rgbResult.alpha() - rgbResult1.alpha();
        let result = diff;
        if (diff * diff1 !== -1) {
          result = (diff + diff1) / (1 + diff * diff1);
        }
        const result1 = (result + 1) / 2;
        const diff2 = 1 - result1;
        const result2 = result1 * rgbResult.red();
        const result3 = diff2 * rgbResult1.red();
        const result4 = result1 * rgbResult.green();
        const result5 = diff2 * rgbResult1.green();
        const result6 = result1 * rgbResult.blue();
        const result7 = diff2 * rgbResult1.blue();
        const result8 = rgbResult.alpha() * num;
        return Color.rgb(result2 + result3, result4 + result5, result6 + result7, result8 + rgbResult1.alpha() * (1 - num));
      }
    }
    error = new Error("Argument to \"mix\" was not a Color instance, but rather an instance of " + typeof gradientSecondaryBackground);
    throw error;
  }
};
Color.prototype = obj;
function _loop(item10136) {
  const _require = item10136;
  if (closure_3.includes(item10136)) {
    return 1;
  } else {
    channels = _require(channels[1])[item10136].channels;
    Color.prototype[item10136] = function() {
      const self = this;
      const items = [...arguments];
      if (this.model === item10136) {
        let tmp8Result = closure_1_6(self);
      } else if (items.length > 0) {
        tmp8Result = closure_1_6(items, tmp);
      } else {
        const rawResult = item10136(channels[1])[self.model][tmp].raw(self.color);
        const _Array = Array;
        let tmp2 = rawResult;
        if (!Array.isArray(rawResult)) {
          const items1 = [rawResult];
          tmp2 = items1;
        }
        const items2 = [];
        items2[HermesBuiltin.arraySpread(tmp2, 0)] = self.valpha;
        tmp8Result = closure_1_6(items2, tmp);
        obj = item10136(channels[1])[self.model][tmp];
        const tmp8 = closure_1_6;
      }
      return tmp8Result;
    };
    Color[item10136] = () => {
      const items = [...arguments];
      let first = items[0];
      if (typeof first === "number") {
        let num = 0;
        first = items;
        if (0 < channels) {
          do {
            let tmp2 = num;
            if (typeof items[num] !== "number") {
              items[num] = 0;
            }
            num = num + 1;
            first = items;
          } while (num < tmp4);
        }
      }
      return closure_1_6(first, closure_0);
    };
  }
}
keys = Object.keys(keys2);
for (const item10136 of keys1) {
  let _loopResult = _loop(item10136);
  continue;
}

export default Color;
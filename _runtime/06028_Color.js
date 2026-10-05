// === Module 6028: Color ===

// Module 6028 (Color)
import keys12 from "keys1" /* 6029 */;
import _mod6033 from "module_6033" /* 6033 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

const require = globalThis.__r;
let _require;

let obj2;
class Color {
  constructor(model, arg1) {
    let length;
    const self = this;
    let str = arg1;
    if (this instanceof Color) {
      const tmp5 = str && str in closure_3;
      if (tmp5) {
        str = null;
      }
      if (str) {
        if (!(str in keys12)) {
          const _Error = Error;
          const self2 = this;
          const self3 = this;
          const error = new Error("Unknown model: " + str);
          throw error;
        }
      }
      if (null == model) {
        self.model = "rgb";
        self.color = [0, 0, 0];
        self.valpha = 1;
      } else if (model instanceof Color) {
        self.model = model.model;
        const items = [];
        HermesBuiltin.arraySpread(items, model.color, 0);
        self.color = items;
        self.valpha = model.valpha;
      } else if (typeof model === "string") {
        const obj2 = _mod6033;
        const iter = obj2.get(model);
        if (null === iter) {
          const _Error3 = Error;
          const self6 = this;
          const self7 = this;
          const error1 = new Error("Unable to parse color from string: " + model);
          throw error1;
        } else {
          self.model = iter.model;
          const channels2 = keys12[self.model].channels;
          const value = iter.value;
          self.color = value.slice(0, channels2);
          let num11 = 1;
          if (typeof iter.value[channels2] === "number") {
            num11 = iter.value[channels2];
          }
          self.valpha = num11;
        }
      } else if (model.length > 0) {
        let num9;
        if (!str) {
          str = "rgb";
        }
        self.model = str;
        const channels = keys12[self.model].channels;
        const _Array = Array;
        const callResult = slice.call(model, 0, channels);
        let num8 = 1;
        for (let num9 = 0; num9 < channels; num9 = num9 + num8) {
          if (typeof callResult[num9] !== "number") {
            callResult[num9] = 0;
          }
        }
        self.color = callResult;
        if (typeof model[channels] === "number") {
          num8 = model[channels];
        }
        self.valpha = num8;
      } else if (typeof model === "number") {
        self.model = "rgb";
        const items1 = [model >> 16 & 255, model >> 8 & 255, 255 & model];
        self.color = items1;
        self.valpha = 1;
      } else {
        self.valpha = 1;
        const _Object3 = Object;
        const keys = Object.keys(model);
        if ("alpha" in model) {
          keys.splice(keys.indexOf("alpha"), 1);
          let num = 0;
          if (typeof model.alpha === "number") {
            num = model.alpha;
          }
          self.valpha = num;
        }
        const sorted = keys.sort();
        const joined = sorted.join("");
        if (joined in obj) {
          self.model = obj[joined];
          const labels = keys12[self.model].labels;
          const items2 = [];
          let num2 = 0;
          if (0 < labels.length) {
            do {
              let arr = items2.push(model[labels[num2]]);
              num2 = num2 + 1;
              length = labels.length;
            } while (num2 < length);
          }
          let num3 = 0;
          if (0 < undefined) {
            do {
              if (typeof items2[num3] !== "number") {
                items2[num3] = 0;
              }
              num3 = num3 + 1;
            } while (num3 < undefined);
          }
          self.color = items2;
        } else {
          const _Error2 = Error;
          const _JSON = JSON;
          const self4 = this;
          const self5 = this;
          const error2 = new Error("Unable to parse color from object: " + JSON.stringify(model));
          throw error2;
        }
      }
      if (closure_5[self.model]) {
        let num14;
        const channels3 = keys12[self.model].channels;
        for (let num14 = 0; num14 < channels3; num14 = num14 + 1) {
          let tmp37 = closure_5[self.model][num14];
          if (tmp37) {
            self.color[num14] = tmp37(self.color[num14]);
          }
        }
      }
      const _Math = Math;
      const _Math2 = Math;
      self.valpha = Math.max(0, Math.min(1, self.valpha));
      const _Object = Object;
      if (Object.freeze) {
        const _Object2 = Object;
        const frozen = Object.freeze(self);
      }
    } else {
      const tmp2Result = Color(model, str);
      return tmp2Result;
    }
  }
}
let closure_3 = ["keyword", "gray", "hex"];
let obj = {};
let keys1 = Object.keys(keys12);
let iter = keys1[Symbol.iterator]();
const nextResult = iter.next();
while (iter !== undefined) {
  let items = [];
  let tmp4 = items;
  let num = 0;
  let arraySpreadResult = HermesBuiltin.arraySpread(items, keys12[nextResult].labels, 0);
  class Color {
    constructor(model, arg1) {
      let length;
      const self = this;
      let str = arg1;
      if (this instanceof Color) {
        const tmp5 = str && str in closure_3;
        if (tmp5) {
          str = null;
        }
        if (str) {
          if (!(str in keys12)) {
            const _Error = Error;
            const self2 = this;
            const self3 = this;
            const error = new Error("Unknown model: " + str);
            throw error;
          }
        }
        if (null == model) {
          self.model = "rgb";
          self.color = [0, 0, 0];
          self.valpha = 1;
        } else if (model instanceof Color) {
          self.model = model.model;
          const items = [];
          HermesBuiltin.arraySpread(items, model.color, 0);
          self.color = items;
          self.valpha = model.valpha;
        } else if (typeof model === "string") {
          const obj2 = _mod6033;
          const iter = obj2.get(model);
          if (null === iter) {
            const _Error3 = Error;
            const self6 = this;
            const self7 = this;
            const error1 = new Error("Unable to parse color from string: " + model);
            throw error1;
          } else {
            self.model = iter.model;
            const channels2 = keys12[self.model].channels;
            const value = iter.value;
            self.color = value.slice(0, channels2);
            let num11 = 1;
            if (typeof iter.value[channels2] === "number") {
              num11 = iter.value[channels2];
            }
            self.valpha = num11;
          }
        } else if (model.length > 0) {
          let num9;
          if (!str) {
            str = "rgb";
          }
          self.model = str;
          const channels = keys12[self.model].channels;
          const _Array = Array;
          const callResult = slice.call(model, 0, channels);
          let num8 = 1;
          for (let num9 = 0; num9 < channels; num9 = num9 + num8) {
            if (typeof callResult[num9] !== "number") {
              callResult[num9] = 0;
            }
          }
          self.color = callResult;
          if (typeof model[channels] === "number") {
            num8 = model[channels];
          }
          self.valpha = num8;
        } else if (typeof model === "number") {
          self.model = "rgb";
          const items1 = [model >> 16 & 255, model >> 8 & 255, 255 & model];
          self.color = items1;
          self.valpha = 1;
        } else {
          self.valpha = 1;
          const _Object3 = Object;
          const keys = Object.keys(model);
          if ("alpha" in model) {
            keys.splice(keys.indexOf("alpha"), 1);
            let num = 0;
            if (typeof model.alpha === "number") {
              num = model.alpha;
            }
            self.valpha = num;
          }
          const sorted = keys.sort();
          const joined = sorted.join("");
          if (joined in obj) {
            self.model = obj[joined];
            const labels = keys12[self.model].labels;
            const items2 = [];
            let num2 = 0;
            if (0 < labels.length) {
              do {
                let arr = items2.push(model[labels[num2]]);
                num2 = num2 + 1;
                length = labels.length;
              } while (num2 < length);
            }
            let num3 = 0;
            if (0 < undefined) {
              do {
                if (typeof items2[num3] !== "number") {
                  items2[num3] = 0;
                }
                num3 = num3 + 1;
              } while (num3 < undefined);
            }
            self.color = items2;
          } else {
            const _Error2 = Error;
            const _JSON = JSON;
            const self4 = this;
            const self5 = this;
            const error2 = new Error("Unable to parse color from object: " + JSON.stringify(model));
            throw error2;
          }
        }
        if (closure_5[self.model]) {
          let num14;
          const channels3 = keys12[self.model].channels;
          for (let num14 = 0; num14 < channels3; num14 = num14 + 1) {
            let tmp37 = closure_5[self.model][num14];
            if (tmp37) {
              self.color[num14] = tmp37(self.color[num14]);
            }
          }
        }
        const _Math = Math;
        const _Math2 = Math;
        self.valpha = Math.max(0, Math.min(1, self.valpha));
        const _Object = Object;
        if (Object.freeze) {
          const _Object2 = Object;
          const frozen = Object.freeze(self);
        }
      } else {
        const tmp2Result = Color(model, str);
        return tmp2Result;
      }
    }
  }
  obj[obj2.join("")] = nextResult;
  continue;
}
function getset(cmyk, arg1, arg2) {
  let closure_0 = cmyk;
  let closure_1 = arg1;
  let closure_2 = arg2;
  let tmp = cmyk;
  if (!Array.isArray(cmyk)) {
    const items = [cmyk];
    tmp = items;
  }
  closure_0 = tmp;
  for (const item10014 of tmp) {
    let tmp4 = closure_5[item10014];
    if (!tmp4) {
      let items1 = [];
      tmp3[tmp2] = items1;
      tmp4 = items1;
    }
    tmp4[arg1] = arg2;
    continue;
  }
  closure_0 = tmp[0];
  return function(arg0) {
    let tmp4;
    const self = this;
    if (undefined !== arg0) {
      let tmp5 = arg0;
      if (closure_2) {
        tmp5 = closure_2(arg0);
      }
      const tmp7 = self[closure_0]();
      tmp7.color[closure_1] = tmp5;
      tmp4 = tmp7;
    } else {
      const tmp3 = self[closure_0]().color[closure_1];
      tmp4 = tmp3;
      if (closure_2) {
        tmp4 = closure_2(tmp3);
      }
    }
    return tmp4;
  };
}
function maxfn(arg0) {
  let closure_0 = arg0;
  return (arg0) => Math.max(0, Math.min(closure_0, arg0));
}
const hasOwnProperty = {};
const point = {
  toString() {
    return this.string();
  },
  toJSON() {
    return this[this.model]();
  },
  string(num) {
    let color;
    const self = this;
    let self2 = this;
    if (!(this.model in _mod6033.to)) {
      self2 = self.rgb();
    }
    const round = self2.round;
    const roundResult = round(1);
    if (1 === roundResult.valpha) {
      color = roundResult.color;
    } else {
      color = [];
      color[HermesBuiltin.arraySpread(color, roundResult.color, 0)] = self.valpha;
    }
    const to = _mod6033.to;
    return to[roundResult.model](color);
  },
  percentString(num) {
    let color;
    const round = this.rgb().round;
    this.rgb();
    const roundResult = round(1);
    if (1 === roundResult.valpha) {
      color = roundResult.color;
    } else {
      const items = [];
      items[HermesBuiltin.arraySpread(items, roundResult.color, 0)] = this.valpha;
      color = items;
    }
    const rgb = _mod6033.to.rgb;
    return rgb.percent(color);
  },
  array() {
    let items1;
    const self = this;
    if (1 === this.valpha) {
      const items = [];
      HermesBuiltin.arraySpread(items, self.color, 0);
      items1 = items;
    } else {
      items1 = [];
      items1[HermesBuiltin.arraySpread(items1, self.color, 0)] = self.valpha;
    }
    return items1;
  },
  object() {
    let num;
    const self = this;
    obj = {};
    const channels = keys12[this.model].channels;
    for (let num = 0; num < channels; num = num + 1) {
      obj[keys12[this.model].labels[num]] = self.color[num];
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
    const rgbResult = this.rgb();
    const objectResult = rgbResult.object();
    objectResult.r = objectResult.r / 255;
    objectResult.g = objectResult.g / 255;
    objectResult.b = objectResult.b / 255;
    if (1 !== this.valpha) {
      objectResult.alpha = this.valpha;
    }
    return objectResult;
  },
  round(arg0) {
    let model;
    let num = arg0;
    const _Math = Math;
    if (!arg0) {
      num = 0;
    }
    const color = this.color;
    let closure_0 = max(num, 0);
    const items = [];
    ({ valpha: arr2[HermesBuiltin.arraySpread(tmp, arr2, arr.map(arr, (toFixed) => Number(toFixed.toFixed(closure_0))), 0)], model } = this);
    const tmp2 = Color(items, model);
    return tmp2;
  },
  alpha(alphaResult) {
    let valpha;
    const self = this;
    if (undefined !== alphaResult) {
      const items = [];
      const _Math = Math;
      const _Math2 = Math;
      const arraySpreadResult = HermesBuiltin.arraySpread(items, self.color, 0);
      items[arraySpreadResult] = Math.max(0, Math.min(1, alphaResult));
      valpha = Color(items, self.model);
    } else {
      valpha = self.valpha;
    }
    return valpha;
  },
  red: getset("rgb", 0, maxfn(255)),
  green: getset("rgb", 1, maxfn(255)),
  blue: getset("rgb", 2, maxfn(255)),
  hue: getset(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (arg0) => (arg0 % 360 + 360) % 360),
  saturationl: getset("hsl", 1, maxfn(100)),
  lightness: getset("hsl", 2, maxfn(100)),
  saturationv: getset("hsv", 1, maxfn(100)),
  value: getset("hsv", 2, maxfn(100)),
  chroma: getset("hcg", 1, maxfn(100)),
  gray: getset("hcg", 2, maxfn(100)),
  white: getset("hwb", 1, maxfn(100)),
  wblack: getset("hwb", 2, maxfn(100)),
  cyan: getset("cmyk", 0, maxfn(100)),
  magenta: getset("cmyk", 1, maxfn(100)),
  yellow: getset("cmyk", 2, maxfn(100)),
  black: getset("cmyk", 3, maxfn(100)),
  x: getset("xyz", 0, maxfn(95.047)),
  y: getset("xyz", 1, maxfn(100)),
  z: getset("xyz", 2, maxfn(108.833)),
  l: getset("lab", 0, maxfn(100)),
  a: getset("lab", 1),
  b: getset("lab", 2),
  keyword(color) {
    let keywordResult;
    if (undefined !== color) {
      keywordResult = Color(color);
    } else {
      const self = this;
      obj = keys12[this.model];
      keywordResult = obj.keyword(this.color);
    }
    return keywordResult;
  },
  hex(arg0) {
    let hexResult;
    if (undefined !== arg0) {
      hexResult = Color(arg0);
    } else {
      const self = this;
      const to = _mod6033.to;
      const hex = to.hex;
      const rgbResult = this.rgb();
      hexResult = hex(rgbResult.round().color);
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
      const color = rgbResult.round().color;
      const str2 = Math.round(255 * this.valpha);
      const str3 = str2.toString(16);
      const formatted = str3.toUpperCase();
      let text = formatted;
      if (1 === formatted.length) {
        text = `0${arr}`;
      }
      const to = _mod6033.to;
      return to.hex(color) + text;
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
    const tmp2 = entries[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let result1;
      let tmp5 = _slicedToArray(tmp3, 2);
      let result = tmp5[1] / 255;
      let tmp8 = result;
      let first = tmp5[0];
      if (result <= 0.04045) {
        result1 = tmp8 / 12.92;
      } else {
        result1 = ((tmp8 + 0.055) / 1.055) ** 2.4;
      }
      items[first] = result1;
      continue;
    }
    return 0.2126 * items[0] + 0.7152 * items[1] + 0.0722 * items[2];
  },
  contrast(luminosity) {
    let result;
    const luminosityResult = this.luminosity();
    const luminosityResult1 = luminosity.luminosity();
    if (luminosityResult > luminosityResult1) {
      result = (luminosityResult + 0.05) / (luminosityResult1 + 0.05);
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
  fade(assetUrl) {
    return this.alpha(this.valpha - this.valpha * assetUrl);
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
  mix(cResult, BLACK) {
    const tmp = cResult;
    if (tmp) {
      if (cResult.rgb) {
        const self = this;
        const color = cResult.rgb();
        const color2 = this.rgb();
        let num = 0.5;
        if (undefined !== BLACK) {
          num = BLACK;
        }
        const diff = 2 * num - 1;
        const alphaResult = color.alpha();
        const diff1 = alphaResult - color2.alpha();
        let result = diff;
        if (diff * diff1 !== -1) {
          result = (diff + diff1) / (1 + diff * diff1);
        }
        const result1 = (result + 1) / 2;
        const diff2 = 1 - result1;
        const rgb = Color.rgb;
        const result2 = result1 * color.red();
        const result3 = diff2 * color2.red();
        const result4 = result1 * color.green();
        const result5 = diff2 * color2.green();
        const result6 = result1 * color.blue();
        const result7 = diff2 * color2.blue();
        const result8 = color.alpha() * num;
        return rgb(result2 + result3, result4 + result5, result6 + result7, result8 + color2.alpha() * (1 - num));
      }
    }
    const error = new Error("Argument to \"mix\" was not a Color instance, but rather an instance of " + typeof cResult);
    throw error;
  }
};
Color.prototype = point;
function _loop(item10136) {
  let channels;
  _require = item10136;
  if (closure_3.includes(item10136)) {
    let num = 1;
    return 1;
  } else {
    let tmp2 = channels;
    channels = require("keys1")[item10136].channels;
    Color.prototype[item10136] = function() {
      let tmp9Result;
      const self = this;
      const items = [...arguments];
      if (this.model === item10136) {
        tmp9Result = Color(self);
      } else if (items.length > 0) {
        tmp9Result = Color(items, item10136);
      } else {
        obj = keys12[self.model][item10136];
        const rawResult = obj.raw(self.color);
        const _Array = Array;
        let tmp3 = rawResult;
        if (!Array.isArray(rawResult)) {
          const items1 = [rawResult];
          tmp3 = items1;
        }
        const items2 = [];
        items2[HermesBuiltin.arraySpread(items2, tmp3, 0)] = self.valpha;
        tmp9Result = Color(items2, item10136);
      }
      return tmp9Result;
    };
    Color[item10136] = () => {
      const items = [...arguments];
      let first = items[0];
      if (typeof first === "number") {
        let num = 0;
        first = items;
        if (0 < channels) {
          do {
            if (typeof items[num] !== "number") {
              items[num] = 0;
            }
            num = num + 1;
            first = items;
          } while (num < tmp4);
        }
      }
      const tmp3 = Color(first, item10136);
      return tmp3;
    };
  }
}
keys1 = Object.keys(keys12);
for (const item10136 of keys1) {
  let _loopResult = _loop(item10136);
  continue;
}

export default Color;
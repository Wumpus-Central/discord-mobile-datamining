// discord_app/utils/Color.tsx
import _slicedToArray from "../../_runtime/metro/00032__.js";

function hslToRgb(alpha) {
  const hue = alpha.hue;
  const result = alpha.lightness / 255;
  const result1 = alpha.saturation / 255;
  const result2 = (1 - Math.abs(2 * result - 1)) * result1;
  const result3 = result2 * (1 - Math.abs(((hue / 60) % 2) - 1));
  closure_0 = result - result2 / 2;
  if (hue < 60) {
    const items = [result2, result3, 0];
    let items5 = items;
  } else if (hue < 120) {
    const items1 = [result3, result2, 0];
    items5 = items1;
  } else if (hue < 180) {
    const items2 = [0, result2, result3];
    items5 = items2;
  } else if (hue < 240) {
    const items3 = [0, result3, result2];
    items5 = items3;
  } else if (hue < 300) {
    const items4 = [result3, 0, result2];
    items5 = items4;
  } else {
    items5 = [result2, 0, result3];
  }
  const mapped = items5.map((item) => Math.round(255 * (item + closure_0)));
  const color = { red: mapped[0], green: mapped[1], blue: mapped[2], alpha: alpha.alpha };
  return color;
}
const re2 = /^#[0-9a-f]{3,8}$/i;
const re3 = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
let Color;
class Color {
  constructor(arg0, arg1, arg2, arg3) {
    obj = Object.create(new.target.prototype);
    obj.red = global;
    obj.green = fn;
    obj.blue = importDefault;
    obj.alpha = importAll;
    return obj;
  }
}
const prototype = Color.prototype;
prototype["toHexString"] = function toHexString() {
  const self = this;
  let str = Math.round(this.red);
  str = str.toString(16);
  let str2 = Math.round(this.green);
  const str1 = str2.toString(16);
  str2 = Math.round(this.blue).toString(16);
  let text = str;
  if (this.red <= 15.5) {
    text = `0${tmp}`;
  }
  let text2 = str1;
  const text1 = `#${tmp4}`;
  if (self.green <= 15.5) {
    text2 = `0${tmp2}`;
  }
  let text3 = str2;
  const sum = text1 + text2;
  if (self.blue <= 15.5) {
    text3 = `0${tmp3}`;
  }
  return sum + text3;
};
Color["parseString"] = function parseString(str) {
  const self = this;
  if (null != str.match(re3)) {
    let parseColorFnStringResult = self.parseColorFnString(str);
  } else if (null != str.match(re2)) {
    parseColorFnStringResult = self.parseHexString(str);
  }
  return parseColorFnStringResult;
};
Color["parseRgbString"] = function parseRgbString(arg0) {
  if ("transparent" === arg0) {
    if (typeof Color === "function") {
      const obj = Object.create(Color.prototype);
      obj.red = 0;
      obj.green = 0;
      obj.blue = 0;
      obj.alpha = 0;
      let parseColorFnStringResult = obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    const self = this;
    parseColorFnStringResult = this.parseColorFnString(arg0);
  }
  return parseColorFnStringResult;
};
Color["parseHexString"] = function parseHexString(str) {
  if (null != str.match(re2)) {
    const items = [6, 8];
    if (!items.includes(str.length)) {
      const replaced = str.replace("#", "");
      let str3 = replaced;
      if (replaced.length < 6) {
        [tmp3, tmp4, tmp5, tmp6] = _slicedToArray(replaced, 4);
        const sum = tmp3 + tmp3 + tmp4 + tmp4 + tmp5 + tmp5;
        str3 = sum;
        if (null != tmp6) {
          str3 = sum + (tmp6 + tmp6);
        }
        const tmp2 = _slicedToArray(replaced, 4);
      }
      const match = str3.match(/.{1,2}/g);
      if (null != match) {
        const _parseInt2 = parseInt;
        const _parseInt3 = parseInt;
        const parsed = parseInt(match[0], 16);
        const _parseInt4 = parseInt;
        const parsed1 = parseInt(match[1], 16);
        let num4 = 1;
        const parsed2 = parseInt(match[2], 16);
        if (null != match[3]) {
          const _parseInt = parseInt;
          num4 = parseInt(match[3], 16) / 255;
        }
        if (typeof Color === "function") {
          const obj = Object.create(Color.prototype);
          obj.red = parsed;
          obj.green = parsed1;
          obj.blue = parsed2;
          obj.alpha = num4;
          return obj;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
  }
};
Color["parseColorFnString"] = function parseColorFnString(str) {
  let match = str.match(re3);
  if (match == null) {
    match = [];
  }
  const tmp = _slicedToArray(match, 3);
  if (null != tmp[1]) {
    if (null != str2) {
      const parts = str2.split(/\s*[,/\s]\s*/);
      const mapped = parts.map((item) => item.replace(",", "").trim());
      const found = mapped.filter((item) => "" !== item);
      const mapped1 = found.map((item, index) => {
        if (obj.test(item)) {
          if (3 === index) {
            const _parseFloat5 = parseFloat;
            let result = parseFloat(item) / 100;
          } else {
            const _parseFloat4 = parseFloat;
            result = (255 * parseFloat(item)) / 100;
          }
        } else {
          if ("h" !== str[index]) {
            const _parseFloat = parseFloat;
            let parsed = parseFloat(item);
          } else {
            if (obj2.test(item)) {
              const _parseFloat3 = parseFloat;
              parsed = 360 * parseFloat(item);
            } else {
              if (obj3.test(item)) {
                const _parseFloat2 = parseFloat;
                parsed = 57.3 * parseFloat(item);
              }
              obj3 = /rad$/;
            }
            obj2 = /turn$/;
          }
          return parsed;
        }
      });
      if ("hsl" === str.substr(0, 3)) {
        let obj = { hue: null, saturation: null, lightness: null, alpha: null };
        [obj.hue, obj.saturation, obj.lightness, obj.alpha] = mapped1;
        hslToRgb(obj);
        if (typeof Color === "function") {
          obj = Object.create(Color.prototype);
          obj.red = tmp11;
          obj.green = tmp12;
          obj.blue = tmp13;
          obj.alpha = tmp14;
          return obj;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        let num2 = 1;
        [tmp4, tmp5, tmp6] = mapped1;
        if (typeof mapped1[3] === "number") {
          num2 = mapped1[3];
        }
        if (typeof Color === "function") {
          obj = Object.create(Color.prototype);
          obj.red = tmp4;
          obj.green = tmp5;
          obj.blue = tmp6;
          obj.alpha = num2;
          return obj;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
  }
};
prototype["toHSL"] = function toHSL() {
  const alpha = this.alpha;
  const result = this.red / 255;
  const result1 = this.green / 255;
  const result2 = this.blue / 255;
  const bound = Math.max(result, result1, result2);
  const bound1 = Math.min(result, result1, result2);
  const diff = bound - bound1;
  const result3 = (bound + bound1) / 2;
  let num = 0;
  if (diff > 0) {
    const _Math = Math;
    num = diff / (1 - Math.abs(2 * result3 - 1));
  }
  if (0 === diff) {
    let obj = { hue: 0, saturation: num, lightness: result3, alpha };
  } else {
    if (result === bound) {
      let num3 = ((result1 - result2) / diff) % 6;
    } else if (result1 === bound) {
      num3 = (result2 - result) / diff + 2;
    } else {
      num3 = 0;
      if (result2 === bound) {
        num3 = (result1 - result2) / diff + 4;
      }
    }
    obj = { hue: 60 * num3, saturation: num, lightness: result3, alpha };
  }
  return obj;
};
prototype["getRelativeLuminance"] = function getRelativeLuminance() {
  const result = this.red / 255;
  const result1 = this.green / 255;
  const result2 = this.blue / 255;
  if (result <= 0.03928) {
    let result3 = result / 12.92;
  } else {
    const _Math = Math;
    result3 = Math.pow((result + 0.055) / 1.055, 2.4);
  }
  const result4 = 0.2126 * result3;
  if (result1 <= 0.03928) {
    let result5 = result1 / 12.92;
  } else {
    const _Math2 = Math;
    result5 = Math.pow((result1 + 0.055) / 1.055, 2.4);
  }
  const result6 = 0.7152 * result5;
  if (result2 <= 0.03928) {
    let result7 = result2 / 12.92;
  } else {
    const _Math3 = Math;
    result7 = Math.pow((result2 + 0.055) / 1.055, 2.4);
  }
  return result4 + result6 + 0.0722 * result7;
};
const size = fn(2);
let result = size.fileFinishedImporting("utils/Color.tsx");

export default Color;
export { hslToRgb };

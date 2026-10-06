// === Module 4734: utils/Color ===

// Module 4734 (utils/Color)
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

function hslToRgb(hue) {
  let items5;
  hue = hue.hue;
  const result = hue.lightness / 255;
  const alpha = hue.alpha;
  const result1 = hue.saturation / 255;
  const result2 = (1 - Math.abs(2 * result - 1)) * result1;
  const result3 = result2 * (1 - Math.abs(hue / 60 % 2 - 1));
  let closure_0 = result - result2 / 2;
  if (hue < 60) {
    const items = [result2, result3, 0];
    items5 = items;
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
  const color = { red: mapped[0], green: mapped[1], blue: mapped[2], alpha };
  return color;
}
const re2 = /^#[0-9a-f]{3,8}$/i;
const re3 = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
class Color {
  constructor(red, green, blue, alpha) {
    const obj = Object.create(new.target.prototype);
    obj.red = red;
    obj.green = green;
    obj.blue = blue;
    obj.alpha = alpha;
    return obj;
  }
  toHexString() {
    const self = this;
    const str = Math.round(this.red);
    const str1 = str.toString(16);
    const str2 = Math.round(this.green);
    const str7 = str2.toString(16);
    let text = str1;
    const str3 = Math.round(this.blue);
    const str8 = str3.toString(16);
    if (this.red <= 15.5) {
      text = `0${tmp}`;
    }
    let text2 = str7;
    const text1 = `#${tmp4}`;
    if (self.green <= 15.5) {
      text2 = `0${tmp2}`;
    }
    let text3 = str8;
    const sum = text1 + text2;
    if (self.blue <= 15.5) {
      text3 = `0${tmp3}`;
    }
    return sum + text3;
  }
  static parseString(str) {
    let parseColorFnStringResult;
    const self = this;
    if (null != str.match(re3)) {
      parseColorFnStringResult = self.parseColorFnString(str);
    } else if (null != str.match(re2)) {
      parseColorFnStringResult = self.parseHexString(str);
    }
    return parseColorFnStringResult;
  }
  static parseRgbString(arg0) {
    let parseColorFnStringResult;
    if ("transparent" === arg0) {
      const self2 = this;
      if (typeof Color === "function") {
        const obj = Object.create(Color.prototype);
        obj.red = 0;
        obj.green = 0;
        obj.blue = 0;
        obj.alpha = 0;
        parseColorFnStringResult = obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      const self = this;
      parseColorFnStringResult = this.parseColorFnString(arg0);
    }
    return parseColorFnStringResult;
  }
  static parseHexString(str) {
    let tmp3;
    let tmp4;
    let tmp5;
    let tmp6;
    if (null != str.match(re2)) {
      const items = [6, 8];
      if (!items.includes(str.length)) {
        const replaced = str.replace("#", "");
        let str3 = replaced;
        if (replaced.length < 6) {
          [tmp3, tmp4, tmp5, tmp6] = replaced;
          const sum = tmp3 + tmp3 + tmp4 + tmp4 + tmp5 + tmp5;
          str3 = sum;
          _slicedToArray(replaced, 4);
          if (null != tmp6) {
            str3 = sum + (tmp6 + tmp6);
          }
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
          const self = this;
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
  }
  static parseColorFnString(str) {
    let tmp4;
    let tmp5;
    let tmp6;
    let match = str.match(re3);
    if (match == null) {
      match = [];
    }
    let tmp = _slicedToArray(match, 3);
    str = tmp[1];
    if (null != str) {
      if (null != tmp[2]) {
        const parts = str2.split(/\s*[,/\s]\s*/);
        const mapped = parts.map((item) => {
          const str = item.replace(",", "");
          return str.trim();
        });
        const found = mapped.filter((item) => "" !== item);
        const mapped1 = found.map((item, index) => {
          let parsed;
          const obj = /%$/;
          const tmp = str;
          if (obj.test(item)) {
            let result;
            if (3 === index) {
              const _parseFloat5 = parseFloat;
              result = parseFloat(item) / 100;
            } else {
              const _parseFloat4 = parseFloat;
              result = 255 * parseFloat(item) / 100;
            }
            parsed = result;
          } else if ("h" !== tmp[index]) {
            const _parseFloat = parseFloat;
            parsed = parseFloat(item);
          } else {
            const obj2 = /turn$/;
            if (obj2.test(item)) {
              const _parseFloat3 = parseFloat;
              parsed = 360 * parseFloat(item);
            } else {
              const obj3 = /rad$/;
              if (obj3.test(item)) {
                const _parseFloat2 = parseFloat;
                parsed = 57.3 * parseFloat(item);
              }
            }
          }
          return parsed;
        });
        if ("hsl" === str.substr(0, 3)) {
          let obj = { hue: null, saturation: null, lightness: null, alpha: null };
          [obj.hue, obj.saturation, obj.lightness, obj.alpha] = mapped1;
          hslToRgb(obj);
          const self2 = this;
          if (typeof Color === "function") {
            let obj3 = Object.create(Color.prototype);
            obj3.red = tmp10;
            obj3.green = tmp11;
            obj3.blue = tmp12;
            obj3.alpha = tmp13;
            return obj3;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          let num2 = 1;
          [tmp4, tmp5, tmp6] = mapped1;
          if (typeof mapped1[3] === "number") {
            num2 = mapped1[3];
          }
          const self = this;
          if (typeof Color === "function") {
            const obj4 = Object.create(Color.prototype);
            obj4.red = tmp4;
            obj4.green = tmp5;
            obj4.blue = tmp6;
            obj4.alpha = num2;
            return obj4;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
    }
  }
  toHSL() {
    let obj;
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
      obj = { hue: 0, saturation: num, lightness: result3, alpha };
      const obj2 = { hue: 0, saturation: num, lightness: result3, alpha };
    } else {
      let num3;
      if (result === bound) {
        num3 = (result1 - result2) / diff % 6;
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
  }
  getRelativeLuminance() {
    let result3;
    let result5;
    let result7;
    const result = this.red / 255;
    const result1 = this.green / 255;
    const result2 = this.blue / 255;
    if (result <= 0.03928) {
      result3 = result / 12.92;
    } else {
      const _Math = Math;
      result3 = Math.pow((result + 0.055) / 1.055, 2.4);
    }
    const result4 = 0.2126 * result3;
    if (result1 <= 0.03928) {
      result5 = result1 / 12.92;
    } else {
      const _Math2 = Math;
      result5 = Math.pow((result1 + 0.055) / 1.055, 2.4);
    }
    const result6 = 0.7152 * result5;
    if (result2 <= 0.03928) {
      result7 = result2 / 12.92;
    } else {
      const _Math3 = Math;
      result7 = Math.pow((result2 + 0.055) / 1.055, 2.4);
    }
    return result4 + result6 + 0.0722 * result7;
  }
}
const prototype = Color.prototype;
let result = size.fileFinishedImporting("utils/Color.tsx");

export default Color;
export { hslToRgb };
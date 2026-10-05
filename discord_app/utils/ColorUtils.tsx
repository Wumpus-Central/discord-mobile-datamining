// discord_app/utils/ColorUtils.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import _modDef683 from "../../_runtime/metro/00683__.js";
import intl2 from "../intl/index.native.tsx";
import utils_ColorDefault from "Color.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import size from "../../_runtime/metro/00002__.js";

function hexToRgba(PRIMARY_760) {
  obj = _modDef683(PRIMARY_760);
  const tmp = _slicedToArray(obj.rgba(), 4);
  return { r: tmp[0], g: tmp[1], b: tmp[2], a: tmp[3] };
}
function rgbToHslObject(items, items2, items3) {
  let result5;
  let result6;
  const result = items / 255;
  const result1 = items2 / 255;
  const result2 = items3 / 255;
  const bound = Math.min(result, result1, result2);
  const bound1 = Math.max(result, result1, result2);
  const diff = bound1 - bound;
  let num = 0;
  if (0 !== diff) {
    let result3;
    if (bound1 === result) {
      result3 = ((result1 - result2) / diff) % 6;
    } else if (bound1 === result1) {
      result3 = (result2 - result) / diff + 2;
    } else {
      result3 = (result - result1) / diff + 4;
    }
    num = result3;
  }
  const rounded = Math.round(60 * num);
  let sum = rounded;
  if (rounded < 0) {
    sum = rounded + 360;
  }
  const result4 = (bound1 + bound) / 2;
  let num6 = 0;
  obj = { h: sum, s: +result5.toFixed(1), l: +result6.toFixed(1) };
  if (0 !== diff) {
    const _Math = Math;
    num6 = diff / (1 - Math.abs(2 * result4 - 1));
  }
  result5 = 100 * num6;
  result6 = 100 * result4;
  return obj;
}
function hslToHex(sum2, sum, sum1) {
  const result = sum1 / 100;
  const result1 = (sum * Math.min(result, 1 - result)) / 100;
  const result2 = (sum2 / 30) % 12;
  const result3 = (8 + sum2 / 30) % 12;
  const str = Math.round(255 * (result - result1 * Math.max(Math.min(result2 - 3, 9 - result2, 1), -1)));
  const str1 = str.toString(16);
  const padStartResult = str1.padStart(2, "0");
  const result4 = (4 + sum2 / 30) % 12;
  const str2 = Math.round(255 * (result - result1 * Math.max(Math.min(result3 - 3, 9 - result3, 1), -1)));
  const str4 = str2.toString(16);
  const padStartResult1 = str4.padStart(2, "0");
  const str3 = Math.round(255 * (result - result1 * Math.max(Math.min(result4 - 3, 9 - result4, 1), -1)));
  const str5 = str3.toString(16);
  return "#" + padStartResult + padStartResult1 + str5.padStart(2, "0");
}
function hex2rgb2hsv(combined) {
  obj = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  const match = obj.exec(combined);
  if (null == match) {
    return null;
  } else {
    const _parseInt = parseInt;
    const result = parseInt(match[1], 16) / 255;
    const _parseInt2 = parseInt;
    const result1 = parseInt(match[2], 16) / 255;
    const _parseInt3 = parseInt;
    const result2 = parseInt(match[3], 16) / 255;
    const _Math4 = Math;
    const bound = Math.max(result, result1, result2);
    const _Math5 = Math;
    const diff = bound - Math.min(result, result1, result2);
    let num5 = 0;
    let num6 = 0;
    if (0 !== diff) {
      let num;
      const result3 = diff / bound;
      const sum = (bound - result1) / 6 / diff + 0.5;
      const sum1 = (bound - result2) / 6 / diff + 0.5;
      if (result === bound) {
        num = sum1 - sum;
      } else {
        const sum2 = tmp10 + 0.5;
        if (result1 === bound) {
          num = 0.3333333333333333 + sum2 - sum1;
        } else {
          num = 0;
          if (result2 === bound) {
            num = 0.6666666666666666 + sum - sum2;
          }
        }
      }
      if (num < 0) {
        num6 = num + 1;
        num5 = result3;
      } else {
        num5 = result3;
        num6 = num;
        if (1 < num) {
          num6 = num - 1;
          num5 = result3;
        }
      }
    }
    const _Math = Math;
    const _Math2 = Math;
    const _Math3 = Math;
    const obj2 = {
      h: Math.round(360 * num6),
      s: Math.round(100 * (100 * num5)) / 100,
      v: Math.round(100 * (100 * bound)) / 100,
    };
    return obj2;
  }
}
function rawRgbToHsl(red, blue, blue2) {
  const result = red / 255;
  const result1 = blue / 255;
  const result2 = blue2 / 255;
  const bound = Math.max(result, result1, result2);
  const bound1 = Math.min(result, result1, result2);
  const result3 = (bound + bound1) / 2;
  let num = 0;
  let num2 = 0;
  if (bound !== bound1) {
    let result4;
    let sum;
    const diff = bound - bound1;
    if (0.5 < result3) {
      result4 = diff / (2 - bound - bound1);
    } else {
      result4 = diff / (bound + bound1);
    }
    if (result === bound) {
      let num4 = 0;
      const result5 = (result1 - result2) / diff;
      if (result1 < result2) {
        num4 = 6;
      }
      sum = result5 + num4;
    } else if (result1 === bound) {
      sum = (result2 - result) / diff + 2;
    } else if (result2 === bound) {
      sum = (result - result1) / diff + 4;
    }
    num = result4;
    num2 = 0;
    if (null != sum) {
      num2 = sum / 6;
      num = result4;
    }
  }
  return { hue: 360 * num2, saturation: num, lightness: result3, alpha: 1 };
}
function rawHslToRgb(hue, saturation, lightness) {
  const result = hue / 360;
  let tmp2 = lightness;
  let tmp3 = lightness;
  let tmp4 = lightness;
  if (0 !== saturation) {
    let result1;
    let sum2;
    let sum5;
    let sum8;
    if (lightness < 0.5) {
      result1 = lightness * (1 + saturation);
    } else {
      result1 = lightness + saturation - lightness * saturation;
    }
    const diff = 2 * lightness - result1;
    const sum = result + 0.3333333333333333;
    let sum1 = sum;
    if (sum < 0) {
      sum1 = sum + 1;
    }
    let diff1 = sum1;
    if (1 < sum1) {
      diff1 = sum1 - 1;
    }
    if (diff1 < 0.16666666666666666) {
      sum2 = diff + 6 * (result1 - diff) * diff1;
    } else {
      sum2 = result1;
      if (diff1 >= 0.5) {
        let sum3 = diff;
        if (diff1 < 0.6666666666666666) {
          sum3 = diff + (result1 - diff) * (0.6666666666666666 - diff1) * 6;
        }
        sum2 = sum3;
      }
    }
    let sum4 = result;
    if (result < 0) {
      sum4 = result + 1;
    }
    let diff2 = sum4;
    if (1 < sum4) {
      diff2 = sum4 - 1;
    }
    if (diff2 < 0.16666666666666666) {
      sum5 = diff + 6 * (result1 - diff) * diff2;
    } else {
      sum5 = result1;
      if (diff2 >= 0.5) {
        let sum6 = diff;
        if (diff2 < 0.6666666666666666) {
          sum6 = diff + (result1 - diff) * (0.6666666666666666 - diff2) * 6;
        }
        sum5 = sum6;
      }
    }
    const diff3 = result - 0.3333333333333333;
    let sum7 = diff3;
    if (diff3 < 0) {
      sum7 = diff3 + 1;
    }
    let diff4 = sum7;
    if (1 < sum7) {
      diff4 = sum7 - 1;
    }
    if (diff4 < 0.16666666666666666) {
      sum8 = diff + 6 * (result1 - diff) * diff4;
    } else {
      sum8 = result1;
      if (diff4 >= 0.5) {
        let sum9 = diff;
        if (diff4 < 0.6666666666666666) {
          sum9 = diff + (result1 - diff) * (0.6666666666666666 - diff4) * 6;
        }
        sum8 = sum9;
      }
    }
    tmp2 = sum8;
    tmp3 = sum5;
    tmp4 = sum2;
  }
  const tmp21 = utils_ColorDefault;
  const rounded = Math.round(255 * tmp4);
  const rounded1 = Math.round(255 * tmp3);
  const tmp212 = new tmp21(rounded, rounded1, Math.round(255 * tmp2), 1);
  return tmp212;
}
function sortColors(hsv, hsv2) {
  hsv = hsv.hsv;
  hsv2 = hsv2.hsv;
  return hsv2.s + hsv2.v - (hsv.s + hsv.v);
}
function hexWithOpacity(color, overlayOpacity) {
  if (7 === color.length) {
    const str14 = (255 * overlayOpacity) | 0;
    const str1 = str14.toString(16);
    const str16 = str1.padStart(2, "0");
    return color + str16.toUpperCase();
  } else {
    let substr = color;
    if ("#" === color.charAt(0)) {
      substr = color.slice(1);
    }
    if (3 === substr.length) {
      const charAtResult = substr.charAt(0);
      const charAtResult1 = substr.charAt(1);
      const charAtResult2 = substr.charAt(2);
      const sum = charAtResult + charAtResult;
      const sum1 = charAtResult1 + charAtResult1;
      const sum2 = charAtResult2 + charAtResult2;
      const str11 = (255 * overlayOpacity) | 0;
      const str18 = str11.toString(16);
      const str13 = str18.padStart(2, "0");
      return "#" + sum + sum1 + sum2 + str13.toUpperCase();
    } else if (4 === substr.length) {
      const charAtResult3 = substr.charAt(0);
      const charAtResult4 = substr.charAt(1);
      const charAtResult5 = substr.charAt(2);
      const charAtResult6 = substr.charAt(3);
      const _parseInt2 = parseInt;
      const sum3 = charAtResult3 + charAtResult3;
      const sum4 = charAtResult4 + charAtResult4;
      const sum5 = charAtResult5 + charAtResult5;
      const str8 = (255 * ((parseInt(charAtResult6 + charAtResult6, 16) / 255) * overlayOpacity)) | 0;
      const str19 = str8.toString(16);
      const str10 = str19.padStart(2, "0");
      return "#" + sum3 + sum4 + sum5 + str10.toUpperCase();
    } else if (6 === substr.length) {
      const text = `#${arr}`;
      const str5 = (255 * overlayOpacity) | 0;
      const str20 = str5.toString(16);
      const str7 = str20.padStart(2, "0");
      return `#${arr}` + str7.toUpperCase();
    } else if (8 === substr.length) {
      const _parseInt = parseInt;
      const text1 = `#${arr.slice(0, 6)}`;
      const str2 = ((parseInt(substr.slice(6), 16) / 255) * overlayOpacity * 255) | 0;
      const str21 = str2.toString(16);
      const str4 = str21.padStart(2, "0");
      return `#${arr.slice(0, 6)}` + str4.toUpperCase();
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Invalid hex color format");
      throw error;
    }
  }
}
hexWithOpacity.__closure = {};
hexWithOpacity.__workletHash = 1677228068105;
hexWithOpacity.__initData = {
  code: "function hexWithOpacity_ColorUtilsTsx1(color,value){if(color.length===7){const alpha=value*255|0;return color+alpha.toString(16).padStart(2,'0').toUpperCase();}const hex=color.charAt(0)==='#'?color.slice(1):color;let r;let g;let b;let a;switch(hex.length){case 3:r=hex.charAt(0);g=hex.charAt(1);b=hex.charAt(2);r+=r;g+=g;b+=b;a=(value*255|0).toString(16).padStart(2,'0').toUpperCase();return'#'+r+g+b+a;case 4:r=hex.charAt(0);g=hex.charAt(1);b=hex.charAt(2);a=hex.charAt(3);r+=r;g+=g;b+=b;a+=a;const alpha4=parseInt(a,16)/255*value;const alpha4Hex=(alpha4*255|0).toString(16).padStart(2,'0').toUpperCase();return'#'+r+g+b+alpha4Hex;case 6:const alpha6=(value*255|0).toString(16).padStart(2,'0').toUpperCase();return'#'+hex+alpha6;case 8:const baseColor='#'+hex.slice(0,6);const existingAlpha=parseInt(hex.slice(6),16)/255;const alpha8=(existingAlpha*value*255|0).toString(16).padStart(2,'0').toUpperCase();return baseColor+alpha8;default:throw new Error('Invalid hex color format');}}",
};
function hexToRgbaString(tmpResult13, opacity) {
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp = opacity;
  obj = _modDef683(tmpResult13);
  const tmp2 = _slicedToArray(obj.rgba(), 4);
  [tmp3, tmp4, tmp5] = tmp2;
  if (opacity == null) {
    tmp = tmp2[3];
  }
  return "rgba(" + tmp3 + ", " + tmp4 + ", " + tmp5 + ", " + tmp + ")";
}
hexToRgbaString.__closure = { hexToRgba };
hexToRgbaString.__workletHash = 8956046161224;
hexToRgbaString.__initData = {
  code: 'function hexToRgbaString_ColorUtilsTsx2(hex,opacity){const{hexToRgba}=this.__closure;const{r:r,g:g,b:b,a:a}=hexToRgba(hex);return"rgba("+r+", "+g+", "+b+", "+(opacity!==null&&opacity!==void 0?opacity:a)+")";}',
};
let obj = {
  "#5865f2": () => {
    const intl = intl2.intl;
    return intl.string(intl2.t["Cn/LJ4"]);
  },
};
let obj2 = {
  "#1abc9c": () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.fBawRj);
  },
  "#2ecc71": () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.hvv3QR);
  },
  "#3498db": () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.JwX6Jd);
  },
  "#9b59b6": () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.H3xljj);
  },
  "#e91e63": () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.X9izyR);
  },
  "#11806a": () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.Kw7K2z);
  },
  "#1f8b4c": () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.z5AZKW);
  },
  "#206694": () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.JqBqKz);
  },
  "#71368a": () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.edPgnK);
  },
  "#ad1457": () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.ti7gsS);
  },
  "#f1c40f": () => {
    const intl = intl2.intl;
    return intl.string(intl2.t["H9jz+S"]);
  },
  "#e67e22": () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.UmsfHL);
  },
  "#e74c3c": () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.GoDlAC);
  },
  "#95a5a6": () => {
    const intl = intl2.intl;
    return intl.string(intl2.t["9GpDYK"]);
  },
  "#607d8b": () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.lwrNQG);
  },
  "#c27c0e": () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.Lf10GG);
  },
  "#a84300": () => {
    const intl = intl2.intl;
    return intl.string(intl2.t["H+AjY7"]);
  },
  "#992d22": () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.XTkdex);
  },
  "#979c9f": () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.Ve0Lip);
  },
  "#546e7a": () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.BwbOAO);
  },
  "#99aab5": () => {
    const intl = intl2.intl;
    return intl.string(intl2.t["/po5rJ"]);
  },
};
const merged = Object.assign(obj2);
let result = size.fileFinishedImporting("utils/ColorUtils.tsx");

export { hexWithOpacity };
export const hexToRgb = function hexToRgb(PRIMARY_800) {
  obj = _modDef683(PRIMARY_800);
  const tmp = _slicedToArray(obj.rgb(), 3);
  return { r: tmp[0], g: tmp[1], b: tmp[2] };
};
export const hexToRgbArray = function hexToRgbArray(arg0) {
  obj = _modDef683(arg0);
  const items = [, ,];
  [arr[0], arr[1], arr[2]] = obj.rgb();
  _slicedToArray(obj.rgb(), 3);
  return items;
};
export { hexToRgba };
export { hexToRgbaString };
export const hexOpacityToRgba = function hexOpacityToRgba(backgroundColor, dividerOpacity) {
  obj = _modDef683(backgroundColor);
  const tmp = _slicedToArray(obj.rgb(), 3);
  return "rgba(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ", " + dividerOpacity + ")";
};
export { rgbToHslObject };
export const hslToString = function hslToString(arg0, arg1, arg2) {
  return "hsl(" + arg0 + ", " + arg1 + "%, " + arg2 + "%)";
};
export const rgbToHsl = function rgbToHsl(items, items2, items3) {
  const tmp = rgbToHslObject(items, items2, items3);
  return "hsl(" + tmp.h + ", " + tmp.s + "%, " + tmp.l + "%)";
};
export const rgbToHex = function rgbToHex(hsvToRgbWorkletResult, hsvToRgbWorkletResult2, hsvToRgbWorkletResult3) {
  const str = 16777216 + (hsvToRgbWorkletResult << 16) + (hsvToRgbWorkletResult2 << 8) + hsvToRgbWorkletResult3;
  const str1 = str.toString(16);
  return "#" + str1.slice(1);
};
export const rgbaToHex = function rgbaToHex(arg0, arg1, arg2, arg3) {
  const str = 256 + arg0;
  str.toString(16);
  const str2 = 256 + arg1;
  const text = `#${arr.slice(1)}`;
  str2.toString(16);
  const str3 = 256 + arg2;
  const text1 = `#${arr.slice(1)}${arr2.slice(1)}`;
  str3.toString(16);
  const str4 = 256 + arg3;
  const text2 = `#${arr.slice(1)}${arr2.slice(1)}${arr3.slice(1)}`;
  const str7 = str4.toString(16);
  return `#${arr.slice(1)}${arr2.slice(1)}${arr3.slice(1)}` + str7.slice(1);
};
export { hslToHex };
export const hexToColorName = function hexToColorName(tmp2Result4, arg1) {
  let tmpResult;
  if (null == obj[tmp2Result4]) {
    let str4;
    const tmp3 = arg1;
    if (tmp3) {
      const intl = intl2.intl;
      const obj2 = { color: tmp2Result4 };
      str4 = intl.formatToPlainString(intl2.t["7BFCRR"], obj2);
    } else {
      const self = this;
      const self2 = this;
      obj = new LoggerDefault("ColorUtils");
      const _HermesInternal = HermesInternal;
      obj.warn("Role color " + tmp2Result4 + " has not been localized!");
      str4 = "undefined";
    }
    tmpResult = str4;
  } else {
    tmpResult = tmp();
  }
  return tmpResult;
};
export const mixColors = function mixColors(mixColorOverride, red) {
  const alpha = mixColorOverride.alpha;
  const sum = (1 - alpha) * red.red + alpha * mixColorOverride.red;
  const sum1 = (1 - alpha) * red.green + alpha * mixColorOverride.green;
  const sum2 = (1 - alpha) * red.blue + alpha * mixColorOverride.blue;
  const sum3 = mixColorOverride.alpha + red.alpha * (1 - mixColorOverride.alpha);
  const tmp5 = new utils_ColorDefault(sum, sum1, sum2, sum3);
  return tmp5;
};
export { hex2rgb2hsv };
export const getComplimentaryPaletteForColor = function getComplimentaryPaletteForColor(items, arg1) {
  let h;
  let l;
  let s;
  let num = arg1;
  if (arg1 === undefined) {
    num = 3;
  }
  ({ h, s, l } = rgbToHslObject(items[0], items[1], items[2]));
  let sum = s;
  rgbToHslObject(items[0], items[1], items[2]);
  if (s < 30) {
    sum = s + 30;
  }
  let diff = l;
  if (l > 80) {
    diff = l - 40;
  }
  let sum1 = diff;
  if (diff < 20) {
    sum1 = diff + 15;
  }
  items = [];
  if (items.length < num) {
    do {
      let diff1 = h - 360 / (num + 1);
      let sum2 = diff1;
      if (diff1 < 0) {
        sum2 = diff1 + 360;
      }
      let tmp8 = hslToHex(sum2, sum, sum1);
      obj = _modDef683(tmp8);
      let tmp12 = _slicedToArray(obj.rgb(), 3);
      let items1 = [, ,];
      [arr2[0], arr2[1], arr2[2]] = tmp12;
      let arr = items.push(items1);
      h = sum2;
    } while (items.length < num);
  }
  return items;
};
export { rawRgbToHsl };
export const getColorLightnessAdjusted = function getColorLightnessAdjusted(color, arg1, arg2) {
  let num;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const tmp = rawRgbToHsl(color.red, color.green, color.blue);
  const lightness = tmp.lightness;
  if (flag) {
    let num3 = 0.9;
    if (lightness + arg1 <= 1) {
      num3 = tmp.lightness + arg1;
    }
    num = num3;
  } else {
    num = 0.1;
    if (lightness - arg1 >= 0) {
      num = tmp.lightness - arg1;
    }
  }
  tmp.lightness = num;
  return rawHslToRgb(tmp.hue, tmp.saturation, tmp.lightness);
};
export const getAccessibleForegroundColor = function getAccessibleForegroundColor(saturationFactor) {
  let background;
  let foreground;
  let ratio;
  ({ foreground, background, ratio } = saturationFactor);
  if (ratio === undefined) {
    ratio = 5;
  }
  let num = saturationFactor.saturationFactor;
  if (num === undefined) {
    num = 1;
  }
  let result1 = background;
  let result = foreground;
  if (num < 1) {
    result = foreground.set("hsl.s", foreground.get("hsl.s") * num);
    result1 = background.set("hsl.s", background.get("hsl.s") * num);
  }
  let obj3 = result;
  let num2 = 0;
  let obj4 = result;
  const tmp2 = result1.luminance() <= 0.5;
  const obj2 = _modDef683;
  if (obj2.contrast(result, result1) < ratio) {
    while (true) {
      let result2;
      let value = obj3.get("hsl.l");
      if (tmp2) {
        obj4 = obj3;
        if (value >= 0.95) {
          break;
        } else {
          result2 = obj3.set("hsl.l", value + 0.05);
          let sum = num2 + 1;
          obj4 = result2;
          if (sum >= 10) {
            break;
          } else {
            num2 = sum;
            obj3 = result2;
            obj4 = result2;
            if (tmp10 >= ratio) {
              break;
            }
          }
        }
      } else {
        obj4 = obj3;
        if (value <= 0.05) {
          break;
        } else {
          result2 = obj3.set("hsl.l", value - 0.05);
        }
      }
      break;
    }
  }
  return obj4.alpha(1);
};
export const findColorByHsv = function findColorByHsv(colors) {
  const substr = colors.slice(0, 3);
  const mapped = substr.map((hex) => {
    let obj2;
    obj = { hex, hsv: obj2 };
    obj2 = hex2rgb2hsv(hex);
    if (obj2 == null) {
      obj2 = { h: 0, s: 0, v: 0 };
    }
    return obj;
  });
  return mapped.sort(sortColors)[0].hex;
};
export const getSaturatedColorHex = function getSaturatedColorHex(arg0) {
  let colorRGB;
  let saturationFactor;
  ({ colorRGB, saturationFactor } = arg0);
  if (saturationFactor === undefined) {
    saturationFactor = 1;
  }
  if (null == colorRGB) {
    return colorRGB;
  } else {
    const value = colorRGB.get("rgb.r");
    const value2 = colorRGB.get("rgb.g");
    const tmp4 = rawRgbToHsl(value, value2, colorRGB.get("rgb.b"));
    obj = rawHslToRgb(tmp4.hue, tmp4.saturation * saturationFactor, tmp4.lightness);
    return obj.toHexString();
  }
};
export const interpolateColor = function interpolateColor(str, str2, arg2) {
  const parsed = parseInt(str.substring(1, 3), 16);
  const parsed1 = parseInt(str.substring(3, 5), 16);
  const parsed2 = parseInt(str.substring(5, 7), 16);
  const parsed3 = parseInt(str2.substring(1, 3), 16);
  const parsed4 = parseInt(str2.substring(3, 5), 16);
  const parsed5 = parseInt(str2.substring(5, 7), 16);
  str = Math.round(parsed + (parsed3 - parsed) * arg2);
  const str1 = str.toString(16);
  const padStartResult = str1.padStart(2, "0");
  str2 = Math.round(parsed1 + (parsed4 - parsed1) * arg2);
  const str4 = str2.toString(16);
  const padStartResult1 = str4.padStart(2, "0");
  const str3 = Math.round(parsed2 + (parsed5 - parsed2) * arg2);
  const str5 = str3.toString(16);
  return "#" + padStartResult + padStartResult1 + str5.padStart(2, "0");
};

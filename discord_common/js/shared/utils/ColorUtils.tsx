// === Module 1103: utils/ColorUtils ===

// Module 1103 (utils/ColorUtils)
import _modDef683 from "module_683" /* 683 */;
import size from "module_2" /* 2 */;

const f83081 = (item) => {
  let result1;
  const result = item / 255;
  if (result <= 0.03928) {
    result1 = result / 12.92;
  } else {
    const _Math = Math;
    result1 = Math.pow((result + 0.055) / 1.055, 2.4);
  }
  return result1;
};
function int2hslRaw(initialColor) {
  let num6;
  const result = (initialColor >> 16 & 255) / 255;
  const result1 = (initialColor >> 8 & 255) / 255;
  const result2 = (255 & initialColor) / 255;
  const bound = Math.min(result, result1, result2);
  const bound1 = Math.max(result, result1, result2);
  const diff = bound1 - bound;
  let num = 0;
  if (0 !== diff) {
    let result3;
    if (bound1 === result) {
      result3 = (result1 - result2) / diff % 6;
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
  const obj = { h: sum, s: +num6.toFixed(3), l: +result4.toFixed(3) };
  num6 = 0;
  if (0 !== diff) {
    const _Math = Math;
    num6 = diff / (1 - Math.abs(2 * result4 - 1));
  }
  return obj;
}
const re2 = /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d*)?)\))?/;
let result = size.fileFinishedImporting("../discord_common/js/shared/utils/ColorUtils.tsx");

export const hex2int = function hex2int(c8) {
  const obj = _modDef683(c8);
  return obj.num();
};
export const int2hex = function int2hex(color) {
  let combined3;
  if (color <= 16777215) {
    const str7 = color >> 16 & 255;
    const str1 = str7.toString(16);
    let combined = str1;
    if (1 === str1.length) {
      const _HermesInternal5 = HermesInternal;
      combined = "0" + str1;
    }
    const str9 = color >> 8 & 255;
    const str15 = str9.toString(16);
    let combined1 = str15;
    if (1 === str15.length) {
      const _HermesInternal6 = HermesInternal;
      combined1 = "0" + str15;
    }
    const str11 = 255 & color;
    const str16 = str11.toString(16);
    let combined2 = str16;
    if (1 === str16.length) {
      const _HermesInternal7 = HermesInternal;
      combined2 = "0" + str16;
    }
    const _HermesInternal8 = HermesInternal;
    combined3 = "#" + combined + combined1 + combined2;
  } else {
    const str14 = color >> 24 & 255;
    const str17 = str14.toString(16);
    let combined4 = str17;
    if (1 === str17.length) {
      const _HermesInternal = HermesInternal;
      combined4 = "0" + str17;
    }
    const str2 = color >> 16 & 255;
    const str18 = str2.toString(16);
    let combined5 = str18;
    if (1 === str18.length) {
      const _HermesInternal2 = HermesInternal;
      combined5 = "0" + str18;
    }
    const str4 = color >> 8 & 255;
    const str19 = str4.toString(16);
    let combined6 = str19;
    if (1 === str19.length) {
      const _HermesInternal3 = HermesInternal;
      combined6 = "0" + str19;
    }
    const _HermesInternal4 = HermesInternal;
    combined3 = "#" + combined4 + combined5 + combined6;
  }
  return combined3;
};
export { int2hslRaw };
export const int2hslValues = function int2hslValues(initialColor) {
  let combined;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  const tmp2 = int2hslRaw(initialColor);
  const h = tmp2.h;
  const result = 100 * tmp2.s;
  const l = tmp2.l;
  const tmp3 = +result.toFixed(1);
  const result1 = 100 * l;
  const tmp4 = +result1.toFixed(1);
  if (flag) {
    const _HermesInternal3 = HermesInternal;
    combined = "" + h + " calc(var(--saturation-factor, 1) * " + tmp3 + "%) " + tmp4 + "%";
  } else if (null != tmp) {
    const _HermesInternal2 = HermesInternal;
    combined = "" + h + " " + tmp * tmp3 + "% " + tmp4 + "%";
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + h + " " + tmp3 + "% " + tmp4 + "%";
  }
  return combined;
};
export const int2hsl = function int2hsl(accent_color, arg1) {
  let combined;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  let num = arg3;
  if (arg3 === undefined) {
    num = 1;
  }
  const tmp2 = int2hslRaw(accent_color);
  const h = tmp2.h;
  const result = 100 * tmp2.s;
  const l = tmp2.l;
  const tmp3 = +result.toFixed(1);
  const result1 = 100 * l;
  const tmp4 = +result1.toFixed(1);
  if (flag) {
    const _HermesInternal3 = HermesInternal;
    combined = "hsla(" + h + ", calc(var(--saturation-factor, 1) * " + tmp3 + "%), " + tmp4 + "%, " + num + ")";
  } else if (null != tmp) {
    const _HermesInternal2 = HermesInternal;
    combined = "hsla(" + h + ", " + tmp * tmp3 + "%, " + tmp4 + "%, " + num + ")";
  } else {
    const _HermesInternal = HermesInternal;
    combined = "hsla(" + h + ", " + tmp3 + "%, " + tmp4 + "%, " + num + ")";
  }
  return combined;
};
export const hex2rgb = function hex2rgb(gradientValue) {
  let alphaResult;
  if (alphaResult === undefined) {
    alphaResult = null;
  }
  const obj = _modDef683;
  if (obj.valid(gradientValue)) {
    const obj2 = _modDef683(gradientValue);
    const alpha = obj2.alpha;
    if (alphaResult == null) {
      alphaResult = obj2.alpha();
    }
    const alphaResult1 = alpha(alphaResult);
    return alphaResult1.css();
  } else {
    return null;
  }
};
export const int2rgba = function int2rgba(ColorUtils, arg1) {
  let result = arg1;
  if (null == arg1) {
    result = (ColorUtils >> 24 & 255) / 255;
  }
  return "rgba(" + ColorUtils >> 16 & 255 + ", " + ColorUtils >> 8 & 255 + ", " + 255 & ColorUtils + ", " + result + ")";
};
export const rgb2int = function rgb2int(dominantColorFromImage) {
  let color;
  const match = dominantColorFromImage.match(re2);
  if (null != match) {
    const color1 = { red: parseInt(match[1]), green: parseInt(match[2]), blue: parseInt(match[3]) };
    const _parseInt = parseInt;
    const _parseInt2 = parseInt;
    const _parseInt3 = parseInt;
    color = color1;
  } else {
    color = { red: 0, green: 0, blue: 0 };
  }
  return (color.red << 16) + (color.green << 8) + color.blue;
};
export const int2hsv = function int2hsv(color) {
  const result = (color >> 16 & 255) / 255;
  const result1 = (color >> 8 & 255) / 255;
  const result2 = (255 & color) / 255;
  const v = Math.max(result, result1, result2);
  const bound1 = Math.min(result, result1, result2);
  const diff = v - bound1;
  let s = 0;
  if (0 !== v) {
    s = diff / v;
  }
  let h = 0;
  if (v !== bound1) {
    let sum;
    if (result === v) {
      let num5 = 0;
      const result3 = (result1 - result2) / diff;
      if (result1 < result2) {
        num5 = 6;
      }
      sum = result3 + num5;
    } else if (result1 === v) {
      sum = (result2 - result) / diff + 2;
    } else {
      sum = v;
      if (result2 === v) {
        sum = (result - result1) / diff + 4;
      }
    }
    h = sum * 60;
  }
  return { h, s, v };
};
export const getDarkness = function getDarkness(hex2intResult) {
  return 1 - (0.299 * (hex2intResult >> 16 & 255) + 0.587 * (hex2intResult >> 8 & 255) + 0.114 * (255 & hex2intResult)) / 255;
};
export const isValidHex = function isValidHex(variantValue) {
  const obj = _modDef683;
  return obj.valid(variantValue);
};
export const int2rgbArray = function int2rgbArray(modalV2BackgroundColor) {
  const items = [modalV2BackgroundColor >> 16 & 255, modalV2BackgroundColor >> 8 & 255, 255 & modalV2BackgroundColor];
  return items;
};
export const getLuminance = function getLuminance(arg0, arg1, arg2) {
  const items = [arg0, arg1, arg2];
  const mapped = items.map(f83081);
  return 0.2126 * mapped[0] + 0.7152 * mapped[1] + 0.0722 * mapped[2];
};
export const getContrast = function getContrast(hex2intResult, hex2intResult1) {
  const items = [hex2intResult >> 16 & 255, hex2intResult >> 8 & 255, 255 & hex2intResult];
  const items1 = [hex2intResult1 >> 16 & 255, hex2intResult1 >> 8 & 255, 255 & hex2intResult1];
  const items2 = [, , ];
  [arr3[0], arr3[1], arr3[2]] = items;
  const mapped = items2.map(f83081);
  const sum = 0.2126 * mapped[0] + 0.7152 * mapped[1] + 0.0722 * mapped[2];
  const items3 = [, , ];
  [arr4[0], arr4[1], arr4[2]] = items1;
  const mapped1 = items3.map(f83081);
  const sum1 = 0.2126 * mapped1[0] + 0.7152 * mapped1[1] + 0.0722 * mapped1[2];
  const sum2 = Math.max(sum, sum1) + 0.05;
  return sum2 / (Math.min(sum, sum1) + 0.05);
};
export const hsv2int = function hsv2int(value, value2, sharedValue2) {
  let num5;
  let num6;
  let num7;
  const result = 6 * (value / 360);
  const rounded = Math.floor(result);
  const diff = result - rounded;
  const result1 = sharedValue2 * (1 - value2);
  const result2 = sharedValue2 * (1 - diff * value2);
  const result3 = sharedValue2 * (1 - (1 - diff) * value2);
  const result4 = rounded % 6;
  if (0 === result4) {
    num5 = result1;
    num6 = result3;
    num7 = sharedValue2;
  } else if (1 === result4) {
    num5 = result1;
    num6 = sharedValue2;
    num7 = result2;
  } else if (2 === result4) {
    num5 = result3;
    num6 = sharedValue2;
    num7 = result1;
  } else if (3 === result4) {
    num5 = sharedValue2;
    num6 = result2;
    num7 = result1;
  } else if (4 === result4) {
    num5 = sharedValue2;
    num6 = result1;
    num7 = result3;
  } else {
    num5 = 0;
    num6 = 0;
    num7 = 0;
    if (5 === result4) {
      num5 = result2;
      num6 = result1;
      num7 = sharedValue2;
    }
  }
  const tmp8 = Math.round(255 * num7) << 16;
  const tmp9 = Math.round(255 * num6) << 8;
  return tmp8 + tmp9 + Math.round(255 * num5);
};
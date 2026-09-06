// === Module 1091: utils/ColorUtils ===

// Module 1091 (utils/ColorUtils)
import _modDef672 from "module_672" /* 672 */;
import size from "module_2" /* 2 */;

function int2hslRaw(initialColor) {
  const result = (initialColor >> 16 & 255) / 255;
  let result1 = (initialColor >> 8 & 255) / 255;
  let num = (255 & initialColor) / 255;
  const bound = Math.min(result, result1, num);
  const bound1 = Math.max(result, result1, num);
  const diff = bound1 - bound;
  if (0 === diff) {
    const _Math = Math;
    const rounded = Math.round(0);
    let sum = rounded;
    if (rounded < 0) {
      sum = rounded + 360;
    }
    const result2 = (bound1 + bound) / 2;
    const obj = { h: sum, s: null, l: null };
    let num7 = 0;
    if (!tmp6) {
      const _Math2 = Math;
      num7 = diff / (1 - Math.abs(2 * result2 - 1));
    }
    obj.s = +num7.toFixed(3);
    obj.l = +result2.toFixed(3);
    return obj;
  } else if (bound1 === result) {
    result1 = (result1 - num) / diff;
    num = 6;
    let result3 = result1 % 6;
  } else if (bound1 === result1) {
    result3 = (num - result) / diff + 2;
  } else {
    result3 = (result - result1) / diff + 4;
  }
}
const re2 = /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d*)?)\))?/;
let result = size.fileFinishedImporting("../discord_common/js/shared/utils/ColorUtils.tsx");

export const hex2int = function hex2int(c8) {
  return _modDef672(c8).num();
};
export const int2hex = function int2hex(color) {
  if (color <= 16777215) {
    let str = color >> 16 & 255.toString(16);
    let combined = str;
    if (1 === str.length) {
      const _HermesInternal5 = HermesInternal;
      combined = "0" + str;
    }
    const str1 = color >> 8 & 255.toString(16);
    let combined1 = str1;
    if (1 === str1.length) {
      const _HermesInternal6 = HermesInternal;
      combined1 = "0" + str1;
    }
    let str2 = 255 & color.toString(16);
    let combined2 = str2;
    if (1 === str2.length) {
      const _HermesInternal7 = HermesInternal;
      combined2 = "0" + str2;
    }
    const _HermesInternal8 = HermesInternal;
    let combined3 = "#" + combined + combined1 + combined2;
    const str11 = 255 & color;
    const str7 = color >> 16 & 255;
    const str9 = color >> 8 & 255;
  } else {
    let str3 = color >> 24 & 255.toString(16);
    let combined4 = str3;
    if (1 === str3.length) {
      const _HermesInternal = HermesInternal;
      str = "0";
      combined4 = "0" + str3;
    }
    str2 = color >> 16 & 255;
    let str4 = str2.toString(16);
    let combined5 = str4;
    if (1 === str4.length) {
      const _HermesInternal2 = HermesInternal;
      str3 = "0";
      combined5 = "0" + str4;
    }
    str4 = color >> 8 & 255;
    let str5 = str4.toString(16);
    let combined6 = str5;
    if (1 === str5.length) {
      const _HermesInternal3 = HermesInternal;
      str5 = "0";
      combined6 = "0" + str5;
    }
    const _HermesInternal4 = HermesInternal;
    combined3 = "#" + combined4 + combined5 + combined6;
    const str14 = color >> 24 & 255;
  }
  return combined3;
};
export { int2hslRaw };
export const int2hslValues = function int2hslValues(initialColor) {
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
  const tmp3 = +result.toFixed(1);
  const result1 = 100 * tmp2.l;
  const tmp4 = +result1.toFixed(1);
  if (flag) {
    const _HermesInternal3 = HermesInternal;
    let combined = "" + h + " calc(var(--saturation-factor, 1) * " + tmp3 + "%) " + tmp4 + "%";
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
  const tmp3 = +result.toFixed(1);
  const result1 = 100 * tmp2.l;
  const tmp4 = +result1.toFixed(1);
  if (flag) {
    const _HermesInternal3 = HermesInternal;
    let combined = "hsla(" + h + ", calc(var(--saturation-factor, 1) * " + tmp3 + "%), " + tmp4 + "%, " + num + ")";
  } else if (null != tmp) {
    const _HermesInternal2 = HermesInternal;
    combined = "hsla(" + h + ", " + tmp * tmp3 + "%, " + tmp4 + "%, " + num + ")";
  } else {
    const _HermesInternal = HermesInternal;
    combined = "hsla(" + h + ", " + tmp3 + "%, " + tmp4 + "%, " + num + ")";
  }
  return combined;
};
export const hex2rgb = function hex2rgb(PRIMARY_200) {
  if (alphaResult === undefined) {
    alphaResult = null;
  }
  if (obj.valid(PRIMARY_200)) {
    const obj2 = _modDef672(PRIMARY_200);
    if (alphaResult == null) {
      alphaResult = obj2.alpha();
    }
    return obj2.alpha(alphaResult).css();
  } else {
    return null;
  }
  obj = _modDef672;
};
export const int2rgba = function int2rgba(ColorUtils, arg1) {
  let result = arg1;
  if (null == arg1) {
    result = (ColorUtils >> 24 & 255) / 255;
  }
  return "rgba(" + ColorUtils >> 16 & 255 + ", " + ColorUtils >> 8 & 255 + ", " + 255 & ColorUtils + ", " + result + ")";
};
export const rgb2int = function rgb2int(tmp2Result1) {
  const match = tmp2Result1.match(re2);
  if (null != match) {
    let color = { red: null, green: null, blue: null };
    const _parseInt = parseInt;
    color.red = parseInt(match[1]);
    const _parseInt2 = parseInt;
    color.green = parseInt(match[2]);
    const _parseInt3 = parseInt;
    color.blue = parseInt(match[3]);
  } else {
    color = { red: 0, green: 0, blue: 0 };
  }
  return (color.red << 16) + (color.green << 8) + color.blue;
};
export const int2hsv = function int2hsv(color) {
  let num = (color >> 16 & 255) / 255;
  const result = (color >> 8 & 255) / 255;
  const result1 = (255 & color) / 255;
  const bound = Math.max(num, result, result1);
  const bound1 = Math.min(num, result, result1);
  const diff = bound - bound1;
  let num2 = 0;
  if (0 !== bound) {
    num2 = diff / bound;
  }
  if (bound === bound1) {
    const obj = { h: 0, s: num2, v: bound };
    return obj;
  } else {
    if (num === bound) {
      let num5 = 0;
      const result2 = (result - result1) / diff;
      if (result < result1) {
        num5 = 6;
      }
      let sum = result2 + num5;
      num = 60;
      const result3 = sum * 60;
    } else if (result !== bound) {
      sum = bound;
      if (result1 === bound) {
        sum = (num - result) / diff + 4;
      }
    }
    sum = (result1 - num) / diff + 2;
  }
};
export const getDarkness = function getDarkness(hex2intResult) {
  return 1 - (0.299 * (hex2intResult >> 16 & 255) + 0.587 * (hex2intResult >> 8 & 255) + 0.114 * (255 & hex2intResult)) / 255;
};
export const isValidHex = function isValidHex(variantValue) {
  return _modDef672.valid(variantValue);
};
export const int2rgbArray = function int2rgbArray(modalV2BackgroundColor) {
  const items = [modalV2BackgroundColor >> 16 & 255, modalV2BackgroundColor >> 8 & 255, 255 & modalV2BackgroundColor];
  return items;
};
export const getLuminance = function getLuminance(arg0, arg1, arg2) {
  const items = [arg0, arg1, arg2];
  const mapped = items.map((item) => {
    const result = item / 255;
    if (result <= 0.03928) {
      let result1 = result / 12.92;
    } else {
      const _Math = Math;
      result1 = Math.pow((result + 0.055) / 1.055, 2.4);
    }
    return result1;
  });
  return 0.2126 * mapped[0] + 0.7152 * mapped[1] + 0.0722 * mapped[2];
};
export const getContrast = function getContrast(hex2intResult, hex2intResult1) {
  const items = [hex2intResult >> 16 & 255, hex2intResult >> 8 & 255, 255 & hex2intResult];
  const items1 = [hex2intResult1 >> 16 & 255, hex2intResult1 >> 8 & 255, 255 & hex2intResult1];
  const items2 = [, , ];
  [arr3[0], arr3[1], arr3[2]] = items;
  const mapped = items2.map((item) => {
    const result = item / 255;
    if (result <= 0.03928) {
      let result1 = result / 12.92;
    } else {
      const _Math = Math;
      result1 = Math.pow((result + 0.055) / 1.055, 2.4);
    }
    return result1;
  });
  const sum = 0.2126 * mapped[0] + 0.7152 * mapped[1] + 0.0722 * mapped[2];
  const items3 = [, , ];
  [arr4[0], arr4[1], arr4[2]] = items1;
  const mapped1 = items3.map((item) => {
    const result = item / 255;
    if (result <= 0.03928) {
      let result1 = result / 12.92;
    } else {
      const _Math = Math;
      result1 = Math.pow((result + 0.055) / 1.055, 2.4);
    }
    return result1;
  });
  const sum1 = 0.2126 * mapped1[0] + 0.7152 * mapped1[1] + 0.0722 * mapped1[2];
  const sum2 = Math.max(sum, sum1) + 0.05;
  return sum2 / (Math.min(sum, sum1) + 0.05);
};
export const hsv2int = function hsv2int(value, value2, sharedValue2) {
  const result = 6 * (value / 360);
  const rounded = Math.floor(result);
  const diff = result - rounded;
  const result1 = sharedValue2 * (1 - value2);
  const result2 = sharedValue2 * (1 - diff * value2);
  const result3 = sharedValue2 * (1 - (1 - diff) * value2);
  const result4 = rounded % 6;
  if (0 === result4) {
    let num5 = result1;
    let num6 = result3;
    let num7 = sharedValue2;
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
  return tmp8 + (Math.round(255 * num6) << 8) + Math.round(255 * num5);
};
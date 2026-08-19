// === Module 6330: keys ===

// Module 6330 (keys)
import keys2 from "keys" /* 6331 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

let obj = {};
let keys = Object.keys(keys2);
for (const item10016 of keys) {
  obj[require("keys")[item10016]] = item10016;
  continue;
}
obj = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } };
const keys1 = Object.keys(obj);
let iter = keys1[Symbol.iterator]();
let nextResult = iter.next();
while (iter !== undefined) {
  let tmp7 = nextResult;
  if ("channels" in obj[nextResult]) {
    if ("labels" in obj[tmp7]) {
      if (obj[tmp7].labels.length !== obj[tmp7].channels) {
        let _Error3 = Error;
        let error = new Error("channel and label counts mismatch: " + tmp7);
        throw error;
      } else {
        ({ channels, labels } = obj[tmp7]);
        delete tmp3[tmp2];
        delete tmp3[tmp];
        let _Object = Object;
        obj = { value: null };
        obj[0] = channels;
        let definePropertyResult = Object.defineProperty(obj[tmp7], "channels", obj);
        let _Object2 = Object;
        let obj1 = { value: null };
        obj1[0] = labels;
        let definePropertyResult1 = Object.defineProperty(obj[tmp7], "labels", obj1);
        continue;
      }
    } else {
      let _Error2 = Error;
      let error1 = new Error("missing channel labels property: " + tmp7);
      throw error1;
    }
  } else {
    let _Error = Error;
    let error2 = new Error("missing channels property: " + tmp7);
    throw error2;
  }
}
obj.rgb.hsl = (arg0) => {
  const result = arg0[0] / 255;
  const result1 = arg0[1] / 255;
  const result2 = arg0[2] / 255;
  const bound = Math.min(result, result1, result2);
  let bound1 = Math.max(result, result1, result2);
  const diff = bound1 - bound;
  let num = 0;
  if (bound1 !== bound) {
    if (result === bound1) {
      num = (result1 - result2) / diff;
    } else if (result1 === bound1) {
      num = 2 + (result2 - result) / diff;
    } else if (result2 === bound1) {
      num = 4 + (result - result1) / diff;
    }
  }
  const bound2 = Math.min(60 * num, 360);
  let sum = bound2;
  if (bound2 < 0) {
    sum = bound2 + 360;
  }
  const result3 = (bound + bound1) / 2;
  const items = [sum, , ];
  if (bound1 === bound) {
    items[1] = 0;
    items[2] = 100 * result3;
    return items;
  } else if (result3 <= 0.5) {
    bound1 = bound1 + bound;
    let result4 = diff / bound1;
  } else {
    result4 = diff / (2 - bound1 - bound);
  }
};
obj.rgb.hsv = (arg0) => {
  const result = arg0[0] / 255;
  const result1 = arg0[1] / 255;
  const result2 = arg0[2] / 255;
  const bound = Math.max(result, result1, result2);
  const diff = bound - Math.min(result, result1, result2);
  let num = 0;
  let num2 = 0;
  if (0 !== diff) {
    const result3 = diff / bound;
    const sum = (bound - result1) / 6 / diff + 0.5;
    const sum1 = (bound - result2) / 6 / diff + 0.5;
    if (result === bound) {
      let diff1 = sum1 - sum;
    } else {
      const sum2 = tmp9 + 0.5;
      if (result1 === bound) {
        diff1 = 0.3333333333333333 + sum2 - sum1;
      } else if (result2 === bound) {
        diff1 = 0.6666666666666666 + sum - sum2;
      }
    }
    if (diff1 < 0) {
      num2 = diff1 + 1;
      num = result3;
    } else {
      num = result3;
      num2 = diff1;
      if (diff1 > 1) {
        num2 = diff1 - 1;
        num = result3;
      }
    }
  }
  const items = [360 * num2, 100 * num, 100 * bound];
  return items;
};
obj.rgb.hwb = (arg0) => {
  [tmp, tmp2, tmp3] = arg0;
  const rgb = obj.rgb;
  const items = [rgb.hsl(arg0)[0], 100 * (0.00392156862745098 * Math.min(tmp, Math.min(tmp2, tmp3))), 100 * (1 - 0.00392156862745098 * Math.max(tmp, Math.max(tmp2, tmp3)))];
  return items;
};
obj.rgb.cmyk = (arg0) => {
  const diff = 1 - arg0[0] / 255;
  const diff1 = 1 - arg0[1] / 255;
  const diff2 = 1 - arg0[2] / 255;
  const bound = Math.min(diff, diff1, diff2);
  const items = [100 * ((diff - bound) / (1 - bound) || 0), 100 * ((diff1 - bound) / (1 - bound) || 0), 100 * ((diff2 - bound) / (1 - bound) || 0), 100 * bound];
  return items;
};
obj.rgb.keyword = (arg0) => {
  let tmp;
  if (obj[arg0]) {
    return tmp2;
  } else {
    let num = Infinity;
    const _Object = Object;
    const keys = Object.keys(keys2);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp14 = keys2[nextResult];
      let sum = (arg0[0] - tmp14[0]) ** 2 + (arg0[1] - tmp14[1]) ** 2 + (arg0[2] - tmp14[2]) ** 2;
      if (sum < num) {
        num = sum;
        tmp = nextResult;
      }
      continue;
    }
    return tmp;
  }
};
obj.keyword.rgb = (arg0) => keys2[arg0];
obj.rgb.xyz = (arg0) => {
  const result = arg0[0] / 255;
  const result1 = arg0[1] / 255;
  const result2 = arg0[2] / 255;
  if (0.04045 < result) {
    let result3 = ((result + 0.055) / 1.055) ** 2.4;
  } else {
    result3 = result / 12.92;
  }
  if (0.04045 < result1) {
    let result4 = ((result1 + 0.055) / 1.055) ** 2.4;
  } else {
    result4 = result1 / 12.92;
  }
  if (0.04045 < result2) {
    let result5 = ((result2 + 0.055) / 1.055) ** 2.4;
  } else {
    result5 = result2 / 12.92;
  }
  const items = [100 * (0.4124 * result3 + 0.3576 * result4 + 0.1805 * result5), 100 * (0.2126 * result3 + 0.7152 * result4 + 0.0722 * result5), 100 * (0.0193 * result3 + 0.1192 * result4 + 0.9505 * result5)];
  return items;
};
obj.rgb.lab = (arg0) => {
  const rgb = obj.rgb;
  const xyzResult = rgb.xyz(arg0);
  const result = xyzResult[1] / 100;
  if (0.008856 < result) {
    let sum = result ** 0.3333333333333333;
  } else {
    sum = 7.787 * result + 0.13793103448275862;
  }
  const items = [116 * sum - 16, , ];
  const result1 = xyzResult[0] / 95.047;
  if (0.008856 < result1) {
    let sum1 = result1 ** 0.3333333333333333;
  } else {
    sum1 = 7.787 * result1 + 0.13793103448275862;
  }
  items[1] = 500 * (sum1 - sum);
  const result2 = xyzResult[2] / 108.883;
  if (0.008856 < result2) {
    let sum2 = result2 ** 0.3333333333333333;
  } else {
    sum2 = 7.787 * result2 + 0.13793103448275862;
  }
  items[2] = 200 * (sum - sum2);
  return items;
};
obj.hsl.rgb = (arg0) => {
  let num = arg0[1] / 100;
  const result = arg0[2] / 100;
  if (0 === num) {
    const result1 = 255 * result;
    const items = [result1, result1, result1];
    return items;
  } else {
    if (result < 0.5) {
      let result2 = result * (1 + num);
    } else {
      result2 = result + num - result * num;
    }
    const items1 = [0, 0, 0];
    const result3 = 6 * (result2 - (2 * result - result2));
    num = 0.3333333333333333;
  }
};
obj.hsl.hsv = (arg0) => {
  const result = arg0[1] / 100;
  const result1 = arg0[2] / 100;
  const bound = Math.max(result1, 0.01);
  const result2 = result1 * 2;
  let diff = result2;
  if (result2 > 1) {
    diff = 2 - result2;
  }
  let diff1 = bound;
  if (bound > 1) {
    diff1 = 2 - bound;
  }
  const result3 = result * diff;
  const result4 = result * diff1;
  const items = [arg0[0], , ];
  if (0 === result2) {
    let result5 = 2 * result4 / (bound + result4);
  } else {
    result5 = 2 * result3 / (result2 + result3);
  }
  items[1] = 100 * result5;
  items[2] = 100 * ((result2 + result3) / 2);
  return items;
};
obj.hsv.rgb = (arg0) => {
  const result = arg0[0] / 60;
  const result1 = arg0[1] / 100;
  const result2 = arg0[2] / 100;
  const result3 = Math.floor(result) % 6;
  const diff = result - Math.floor(result);
  const result4 = 255 * result2;
  const result5 = result4 * (1 - result1);
  const result6 = result4 * (1 - result1 * (1 - diff));
  const result7 = result2 * 255;
  if (0 === result3) {
    const items = [result7, result6, result5];
    return items;
  } else {
    const result8 = result4 * (1 - result1 * diff);
    if (1 === result3) {
      const items1 = [result8, result7, result5];
      return items1;
    } else if (2 === result3) {
      const items2 = [result5, result7, result6];
      return items2;
    } else if (3 === result3) {
      const items3 = [result5, result8, result7];
      return items3;
    } else if (4 === result3) {
      const items4 = [result6, result5, result7];
      return items4;
    } else if (5 === result3) {
      const items5 = [result7, result5, result8];
      return items5;
    }
  }
};
obj.hsv.hsl = (arg0) => {
  const result = arg0[1] / 100;
  const result1 = arg0[2] / 100;
  const bound = Math.max(result1, 0.01);
  const diff = 2 - result;
  const result2 = diff * bound;
  const items = [arg0[0], , ];
  let diff1 = result2;
  const result3 = result * bound;
  if (result2 > 1) {
    diff1 = 2 - result2;
  }
  items[1] = 100 * (result3 / diff1 || 0);
  items[2] = 100 * (diff * result1 / 2);
  return items;
};
obj.hwb.rgb = (arg0) => {
  const result = arg0[1] / 100;
  const result1 = arg0[2] / 100;
  const sum = result + result1;
  let result4 = result1;
  let result3 = result;
  const result2 = arg0[0] / 360;
  if (1 < sum) {
    result3 = result / sum;
    result4 = result1 / sum;
  }
  const result5 = 6 * result2;
  const rounded = Math.floor(result5);
  const diff = result5 - rounded;
  let diff1 = diff;
  if (1 & rounded) {
    diff1 = 1 - diff;
  }
  const diff2 = 1 - result4;
  const sum1 = result3 + diff1 * (diff2 - result3);
  let tmp13 = result3;
  let tmp14 = sum1;
  let tmp15 = diff2;
  if (6 !== rounded) {
    tmp13 = result3;
    tmp14 = sum1;
    tmp15 = diff2;
    if (0 !== rounded) {
      if (1 === rounded) {
        tmp13 = result3;
        tmp14 = diff2;
        tmp15 = sum1;
      } else if (2 === rounded) {
        tmp13 = sum1;
        tmp14 = diff2;
        tmp15 = result3;
      } else if (3 === rounded) {
        tmp13 = diff2;
        tmp14 = sum1;
        tmp15 = result3;
      } else if (4 === rounded) {
        tmp13 = diff2;
        tmp14 = result3;
        tmp15 = sum1;
      } else {
        tmp13 = result3;
        tmp14 = sum1;
        tmp15 = diff2;
        if (5 === rounded) {
          tmp13 = sum1;
          tmp14 = result3;
          tmp15 = diff2;
        }
      }
    }
  }
  const items = [255 * tmp15, 255 * tmp14, 255 * tmp13];
  return items;
};
obj.cmyk.rgb = (arg0) => {
  const result = arg0[3] / 100;
  const diff = 1 - result;
  const result1 = arg0[1] / 100;
  const result2 = arg0[2] / 100;
  const items = [255 * (1 - Math.min(1, arg0[0] / 100 * diff + result)), 255 * (1 - Math.min(1, result1 * diff + result)), 255 * (1 - Math.min(1, result2 * diff + result))];
  return items;
};
obj.xyz.rgb = (arg0) => {
  const result = arg0[0] / 100;
  const result1 = arg0[1] / 100;
  const result2 = arg0[2] / 100;
  const sum = 3.2406 * result + -1.5372 * result1 + -0.4986 * result2;
  if (0.0031308 < sum) {
    let diff = 1.055 * sum ** 0.4166666666666667 - 0.055;
  } else {
    diff = 12.92 * sum;
  }
  const sum1 = -0.9689 * result + 1.8758 * result1 + 0.0415 * result2;
  if (0.0031308 < sum1) {
    let diff1 = 1.055 * sum1 ** 0.4166666666666667 - 0.055;
  } else {
    diff1 = 12.92 * sum1;
  }
  const sum2 = 0.0557 * result + -0.204 * result1 + 1.057 * result2;
  if (0.0031308 < sum2) {
    let diff2 = 1.055 * sum2 ** 0.4166666666666667 - 0.055;
  } else {
    diff2 = 12.92 * sum2;
  }
  const items = [255 * Math.min(Math.max(0, diff), 1), 255 * Math.min(Math.max(0, diff1), 1), 255 * Math.min(Math.max(0, diff2), 1)];
  return items;
};
obj.xyz.lab = (arg0) => {
  const result = arg0[1] / 100;
  if (0.008856 < result) {
    let sum = result ** 0.3333333333333333;
  } else {
    sum = 7.787 * result + 0.13793103448275862;
  }
  const items = [116 * sum - 16, , ];
  const result1 = arg0[0] / 95.047;
  if (0.008856 < result1) {
    let sum1 = result1 ** 0.3333333333333333;
  } else {
    sum1 = 7.787 * result1 + 0.13793103448275862;
  }
  items[1] = 500 * (sum1 - sum);
  const result2 = arg0[2] / 108.883;
  if (0.008856 < result2) {
    let sum2 = result2 ** 0.3333333333333333;
  } else {
    sum2 = 7.787 * result2 + 0.13793103448275862;
  }
  items[2] = 200 * (sum - sum2);
  return items;
};
obj.lab.xyz = (arg0) => {
  const result = (arg0[0] + 16) / 116;
  let result1 = result ** 3;
  const sum = arg0[1] / 500 + result;
  let result2 = sum ** 3;
  const diff = result - arg0[2] / 200;
  let result3 = diff ** 3;
  if (0.008856 >= result1) {
    result1 = (result - 0.13793103448275862) / 7.787;
  }
  if (0.008856 >= result2) {
    result2 = (sum - 0.13793103448275862) / 7.787;
  }
  if (0.008856 >= result3) {
    result3 = (diff - 0.13793103448275862) / 7.787;
  }
  const items = [result2 * 95.047, result1 * 100, result3 * 108.883];
  return items;
};
obj.lab.lch = (result2) => {
  const result = 360 * Math.atan2(tmp2, tmp) / 2 / Math.PI;
  let sum = result;
  if (result < 0) {
    sum = result + 360;
  }
  const items = [result2[0], Math.sqrt(result2[1] * result2[1] + result2[2] * result2[2]), sum];
  return items;
};
obj.lch.lab = (arg0) => {
  const result = arg0[2] / 360 * 2 * Math.PI;
  const items = [arg0[0], arg0[1] * Math.cos(result), arg0[1] * Math.sin(result)];
  return items;
};
obj.rgb.ansi16 = (arg0) => {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  [tmp3, tmp4, tmp5] = _slicedToArray(arg0, 3);
  if (null === tmp) {
    const rgb = obj.rgb;
    tmp = rgb.hsv(arg0)[2];
  }
  const rounded = Math.round(tmp / 50);
  if (0 === rounded) {
    return 30;
  } else {
    const _Math = Math;
    const _Math2 = Math;
    const _Math3 = Math;
    const tmp8 = Math.round(tmp5 / 255) << 2;
    const sum = 30 + (tmp8 | Math.round(tmp4 / 255) << 1 | Math.round(tmp3 / 255));
    let sum1 = sum;
    if (2 === rounded) {
      sum1 = sum + 60;
    }
    return sum1;
  }
  const tmp2 = _slicedToArray(arg0, 3);
};
obj.hsv.ansi16 = (arg0) => {
  ({ rgb, hsv } = obj);
  return rgb.ansi16(hsv.rgb(arg0), arg0[2]);
};
obj.rgb.ansi256 = (arg0) => {
  [tmp, tmp2, tmp3] = arg0;
  if (tmp === tmp2) {
    if (tmp2 === tmp3) {
      let num2 = 16;
      if (tmp >= 8) {
        let num4 = 231;
        if (tmp <= 248) {
          const _Math = Math;
          num4 = Math.round((tmp - 8) / 247 * 24) + 232;
        }
        num2 = num4;
      }
      let sum = num2;
    }
    return sum;
  }
  const result = 36 * Math.round(tmp / 255 * 5);
  const result1 = 6 * Math.round(tmp2 / 255 * 5);
  sum = 16 + result + result1 + Math.round(tmp3 / 255 * 5);
};
obj.ansi16.rgb = (arg0) => {
  const result = arg0 % 10;
  if (0 !== result) {
    if (7 !== result) {
      const result1 = 0.5 * (1 + ~~arg0 > 50);
      const items = [(1 & result) * result1 * 255, (result >> 1 & 1) * result1 * 255, (result >> 2 & 1) * result1 * 255];
      return items;
    }
  }
  let sum = result;
  if (arg0 > 50) {
    sum = result + 3.5;
  }
  const result2 = sum / 10.5 * 255;
  const items1 = [result2, result2, result2];
  return items1;
};
obj.ansi256.rgb = (arg0) => {
  if (arg0 >= 232) {
    const sum = 10 * (arg0 - 232) + 8;
    const items = [sum, sum, sum];
    return items;
  } else {
    const diff = arg0 - 16;
    const _Math = Math;
    const items1 = [Math.floor(diff / 36) / 5 * 255, , ];
    const _Math2 = Math;
    const result = diff % 36;
    items1[1] = Math.floor(result / 6) / 5 * 255;
    items1[2] = result % 6 / 5 * 255;
    return items1;
  }
};
obj.rgb.hex = (arg0) => {
  const tmp = 255 & Math.round(arg0[0]);
  const tmp2 = 255 & Math.round(arg0[1]);
  const str = (tmp << 16) + ((255 & Math.round(arg0[1])) << 8) + (255 & Math.round(arg0[2]));
  const formatted = (tmp << 16) + ((255 & Math.round(arg0[1])) << 8) + (255 & Math.round(arg0[2])).toString(16).toUpperCase();
  return "000000".substring(formatted.length) + formatted;
};
obj.hex.rgb = (arg0) => {
  const match = arg0.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (match) {
    let joined = str2;
    if (3 === match[0].length) {
      const parts = str2.split("");
      const mapped = parts.map((item, index) => item + item);
      joined = mapped.join("");
    }
    const _parseInt = parseInt;
    const parsed = parseInt(joined, 16);
    const items = [parsed >> 16 & 255, parsed >> 8 & 255, 255 & parsed];
    return items;
  } else {
    return [0, 0, 0];
  }
  const str = arg0.toString(16);
};
obj.rgb.hcg = (arg0) => {
  const result = arg0[0] / 255;
  let result1 = arg0[1] / 255;
  let num = arg0[2] / 255;
  const bound = Math.max(Math.max(result, result1), num);
  const bound1 = Math.min(Math.min(result, result1), num);
  const diff = bound - bound1;
  if (diff <= 0) {
    const items = [0, 100 * diff, ];
    let num8 = 0;
    if (diff < 1) {
      num8 = bound1 / (1 - diff);
    }
    items[2] = 100 * num8;
    return items;
  } else if (bound === result) {
    result1 = (result1 - num) / diff;
    num = 6;
    let result2 = result1 % 6;
  } else if (bound === result1) {
    result2 = 2 + (num - result) / diff;
  } else {
    result2 = 4 + (result - result1) / diff;
  }
};
obj.hsl.hcg = (arg0) => {
  const result = arg0[1] / 100;
  const result1 = arg0[2] / 100;
  if (result1 < 0.5) {
    let result2 = 2 * result * result1;
  } else {
    result2 = 2 * result * (1 - result1);
  }
  let num4 = 0;
  if (result2 < 1) {
    num4 = (result1 - 0.5 * result2) / (1 - result2);
  }
  const items = [arg0[0], 100 * result2, 100 * num4];
  return items;
};
obj.hsv.hcg = (arg0) => {
  const result = arg0[2] / 100;
  const result1 = arg0[1] / 100 * result;
  let num = 0;
  if (result1 < 1) {
    num = (result - result1) / (1 - result1);
  }
  const items = [arg0[0], 100 * result1, 100 * num];
  return items;
};
obj.hcg.rgb = (arg0) => {
  const result = arg0[1] / 100;
  const result1 = arg0[2] / 100;
  if (0 === result) {
    const result2 = 255 * result1;
    const items = [result2, result2, result2];
    return items;
  } else {
    const result3 = tmp % 1 * 6;
    const _Math = Math;
    const rounded = Math.floor(result3);
    const items1 = [0, 0, 0];
    const result4 = result3 % 1;
    if (0 === rounded) {
      items1[0] = 1;
      items1[1] = result4;
      items1[2] = 0;
    } else {
      const diff = 1 - result4;
      if (1 === rounded) {
        items1[0] = diff;
        items1[1] = 1;
        items1[2] = 0;
      } else if (2 === rounded) {
        items1[0] = 0;
        items1[1] = 1;
        items1[2] = result4;
      } else if (3 === rounded) {
        items1[0] = 0;
        items1[1] = diff;
        items1[2] = 1;
      } else if (4 === rounded) {
        items1[0] = result4;
        items1[1] = 0;
        items1[2] = 1;
      } else {
        items1[0] = 1;
        items1[1] = 0;
        items1[2] = diff;
      }
    }
    const result5 = (1 - result) * result1;
    const items2 = [255 * (result * items1[0] + result5), 255 * (result * items1[1] + result5), 255 * (result * items1[2] + result5)];
    return items2;
  }
};
obj.hcg.hsv = (arg0) => {
  const result = arg0[1] / 100;
  const sum = result + arg0[2] / 100 * (1 - result);
  let num = 0;
  if (0 < sum) {
    num = result / sum;
  }
  const items = [arg0[0], 100 * num, 100 * sum];
  return items;
};
obj.hcg.hsl = (arg0) => {
  const result = arg0[1] / 100;
  const sum = arg0[2] / 100 * (1 - result) + 0.5 * result;
  if (0 < sum) {
    if (sum < 0.5) {
      let num = result / (2 * sum);
    }
    const items = [arg0[0], 100 * num, 100 * sum];
    return items;
  }
  let tmp3 = sum >= 0.5;
  if (0.5 <= sum) {
    tmp3 = sum < 1;
  }
  num = 0;
  if (tmp3) {
    num = result / (2 * (1 - sum));
  }
};
obj.hcg.hwb = (arg0) => {
  const result = arg0[1] / 100;
  const sum = result + arg0[2] / 100 * (1 - result);
  const items = [arg0[0], 100 * (sum - result), 100 * (1 - sum)];
  return items;
};
obj.hwb.hcg = (arg0) => {
  const diff = 1 - arg0[2] / 100;
  const diff1 = diff - arg0[1] / 100;
  let num = 0;
  if (diff1 < 1) {
    num = (diff - diff1) / (1 - diff1);
  }
  const items = [arg0[0], 100 * diff1, 100 * num];
  return items;
};
obj.apple.rgb = (arg0) => {
  const items = [arg0[0] / 65535 * 255, arg0[1] / 65535 * 255, arg0[2] / 65535 * 255];
  return items;
};
obj.rgb.apple = (arg0) => {
  const items = [arg0[0] / 255 * 65535, arg0[1] / 255 * 65535, arg0[2] / 255 * 65535];
  return items;
};
obj.gray.rgb = (arg0) => {
  const items = [arg0[0] / 100 * 255, arg0[0] / 100 * 255, arg0[0] / 100 * 255];
  return items;
};
obj.gray.hsl = (arg0) => {
  const items = [0, 0, arg0[0]];
  return items;
};
obj.gray.hsv = obj.gray.hsl;
obj.gray.hwb = (arg0) => {
  const items = [0, 100, arg0[0]];
  return items;
};
obj.gray.cmyk = (arg0) => {
  const items = [0, 0, 0, arg0[0]];
  return items;
};
obj.gray.lab = (arg0) => {
  const items = [arg0[0], 0, 0];
  return items;
};
obj.gray.hex = (arg0) => {
  const tmp = 255 & Math.round(arg0[0] / 100 * 255);
  const formatted = (tmp << 16) + (tmp << 8) + tmp.toString(16).toUpperCase();
  return "000000".substring(formatted.length) + formatted;
};
obj.rgb.gray = (arg0) => {
  const items = [(arg0[0] + arg0[1] + arg0[2]) / 3 / 255 * 100];
  return items;
};

export default obj;
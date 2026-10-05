// _runtime/metro/06033__.js
import _mod6031 from "06031__.js";
import swizzle from "../06034_swizzle.js";

const obj2 = Object.create(null);
for (const key10013 in _mod6031) {
  if (!hasOwnProperty.call(_mod6031, key10013)) {
    continue;
  } else {
    obj2[_mod6031[key10013]] = key10013;
    continue;
  }
  continue;
}
exports = {
  to: {},
  get: (str) => {
    let hslResult;
    let obj;
    let str3;
    str = str.substring(0, 3);
    const formatted = str.toLowerCase();
    if ("hsl" === formatted) {
      const get3 = obj.get;
      hslResult = get3.hsl(str);
      str3 = "hsl";
    } else if ("hwb" === formatted) {
      const get2 = obj.get;
      hslResult = get2.hwb(str);
      str3 = "hwb";
    } else {
      const get = obj.get;
      hslResult = get.rgb(str);
      str3 = "rgb";
    }
    let tmp6 = null;
    if (hslResult) {
      obj = { model: str3, value: hslResult };
      tmp6 = obj;
    }
    return tmp6;
  },
};
exports.get.rgb = (str) => {
  let sum;
  let sum1;
  const tmp = str;
  if (tmp) {
    let num7;
    const items = [0, 0, 0, 1];
    const match = str.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i);
    if (match) {
      let num19 = 0;
      const arr2 = match[1];
      do {
        let result = 2 * num19;
        let _parseInt4 = parseInt;
        items[num19] = parseInt(arr2.slice(result, result + 2), 16);
        num19 = num19 + 1;
      } while (num19 < 3);
      num7 = 0;
      if (match[2]) {
        const _parseInt5 = parseInt;
        items[3] = parseInt(match[2], 16) / 255;
        num7 = 0;
      }
    } else {
      const match1 = str.match(/^#([a-f0-9]{3,4})$/i);
      if (match1) {
        let num13 = 0;
        do {
          let _parseInt2 = parseInt;
          items[num13] = parseInt(tmp21[num13] + tmp21[num13], 16);
          num13 = num13 + 1;
        } while (num13 < 3);
        num7 = 0;
        if (match1[1][3]) {
          const _parseInt3 = parseInt;
          items[3] = parseInt(match1[1][3] + match1[1][3], 16) / 255;
          num7 = 0;
        }
      } else {
        const match2 = str.match(
          /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,
        );
        let num4 = 0;
        if (match2) {
          do {
            let _parseInt = parseInt;
            sum = num4 + 1;
            items[num4] = parseInt(match2[sum], 0);
            num4 = sum;
          } while (sum < 3);
          num7 = 0;
          if (match2[4]) {
            const _parseFloat3 = parseFloat;
            const tmp19 = match2[5];
            const parsed = parseFloat(match2[4]);
            if (tmp19) {
              items[3] = 0.01 * parsed;
              num7 = 0;
            } else {
              items[3] = parsed;
              num7 = 0;
            }
          }
        } else {
          const match3 = str.match(
            /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,
          );
          let num6 = 0;
          if (match3) {
            do {
              let _Math = Math;
              let _parseFloat = parseFloat;
              sum1 = num6 + 1;
              items[num6] = Math.round(2.55 * parseFloat(match3[sum1]));
              num6 = sum1;
            } while (sum1 < 3);
            num7 = 0;
            if (match3[4]) {
              const _parseFloat2 = parseFloat;
              const tmp16 = match3[5];
              const parsed1 = parseFloat(match3[4]);
              if (tmp16) {
                items[3] = 0.01 * parsed1;
                num7 = 0;
              } else {
                items[3] = parsed1;
                num7 = 0;
              }
            }
          } else {
            const match4 = str.match(/^(\w+)$/);
            let tmp9 = null;
            if (match4) {
              let items1;
              if ("transparent" === match4[1]) {
                items1 = [0, 0, 0, 0];
              } else {
                items1 = null;
                if (hasOwnProperty.call(_mod6031, match4[1])) {
                  const tmp14 = _mod6031[match4[1]];
                  tmp14[3] = 1;
                  items1 = tmp14;
                }
              }
              tmp9 = items1;
            }
            return tmp9;
          }
        }
      }
    }
    do {
      let tmp27 = globalThis;
      let _Math2 = Math;
      let _Math3 = Math;
      items[num7] = Math.min(Math.max(0, items[num7]), 255);
      num7 = num7 + 1;
    } while (num7 < 3);
    const _Math4 = Math;
    const _Math5 = Math;
    items[3] = Math.min(Math.max(0, items[3]), 1);
    return items;
  } else {
    return null;
  }
};
exports.get.hsl = (str) => {
  const tmp = str;
  if (tmp) {
    const match = str.match(
      /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,
    );
    if (match) {
      const _parseFloat = parseFloat;
      const parsed = parseFloat(match[4]);
      const _parseFloat2 = parseFloat;
      const items = [((parseFloat(match[1]) % 360) + 360) % 360, , ,];
      const _parseFloat3 = parseFloat;
      const _Math = Math;
      const _Math2 = Math;
      items[1] = Math.min(Math.max(0, parseFloat(match[2])), 100);
      const _parseFloat4 = parseFloat;
      const _Math3 = Math;
      const _Math4 = Math;
      items[2] = Math.min(Math.max(0, parseFloat(match[3])), 100);
      const _isNaN = isNaN;
      let num5 = 1;
      if (!isNaN(parsed)) {
        num5 = parsed;
      }
      const _Math5 = Math;
      const _Math6 = Math;
      items[3] = Math.min(Math.max(0, num5), 1);
      return items;
    } else {
      return null;
    }
  } else {
    return null;
  }
};
exports.get.hwb = (str) => {
  const tmp = str;
  if (tmp) {
    const match = str.match(
      /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,
    );
    if (match) {
      const _parseFloat = parseFloat;
      const parsed = parseFloat(match[4]);
      const _parseFloat2 = parseFloat;
      const items = [((parseFloat(match[1]) % 360) + 360) % 360, , ,];
      const _parseFloat3 = parseFloat;
      const _Math = Math;
      const _Math2 = Math;
      items[1] = Math.min(Math.max(0, parseFloat(match[2])), 100);
      const _parseFloat4 = parseFloat;
      const _Math3 = Math;
      const _Math4 = Math;
      items[2] = Math.min(Math.max(0, parseFloat(match[3])), 100);
      const _isNaN = isNaN;
      let num5 = 1;
      if (!isNaN(parsed)) {
        num5 = parsed;
      }
      const _Math5 = Math;
      const _Math6 = Math;
      items[3] = Math.min(Math.max(0, num5), 1);
      return items;
    } else {
      return null;
    }
  } else {
    return null;
  }
};
exports.to.hex = function () {
  const tmp = swizzle(arguments);
  const str = Math.round(tmp[0]);
  const str2 = str.toString(16);
  const formatted = str2.toUpperCase();
  let text = formatted;
  if (formatted.length < 2) {
    text = `0${arr}`;
  }
  const text1 = `#${tmp2}`;
  const str4 = Math.round(tmp[1]);
  const str5 = str4.toString(16);
  const formatted1 = str5.toUpperCase();
  let text2 = formatted1;
  if (formatted1.length < 2) {
    text2 = `0${arr2}`;
  }
  const sum = text1 + text2;
  const str7 = Math.round(tmp[2]);
  const str8 = str7.toString(16);
  const formatted2 = str8.toUpperCase();
  let text3 = formatted2;
  if (formatted2.length < 2) {
    text3 = `0${arr3}`;
  }
  let str10 = "";
  const sum1 = sum + text3;
  if (tmp[3] < 1) {
    const _Math = Math;
    const _Math2 = Math;
    const str11 = Math.round(Math.round(255 * tmp[3]));
    const str12 = str11.toString(16);
    const formatted3 = str12.toUpperCase();
    let text4 = formatted3;
    if (formatted3.length < 2) {
      text4 = `0${arr4}`;
    }
    str10 = text4;
  }
  return sum1 + str10;
};
exports.to.rgb = function () {
  const arr = swizzle(arguments);
  if (arr.length >= 4) {
    let text2;
    if (1 !== arr[3]) {
      const _Math = Math;
      const _Math2 = Math;
      const text = `rgba(${Math.round(arr[0])}`;
      const _Math3 = Math;
      const text1 = `${`rgba(${Math.round(arr[0])}`}, ${Math.round(arr[1])}`;
      text2 = `${tmp3 + ", " + Math.round(arr[2]) + ", " + arr[3]})`;
    }
    return text2;
  }
  const text3 = `rgb(${Math.round(arr[0])}`;
  const text4 = `${`rgb(${Math.round(arr[0])}`}, ${Math.round(arr[1])}`;
  text2 = `${tmp6 + ", " + Math.round(arr[2])})`;
};
exports.to.rgb.percent = function () {
  const arr = swizzle(arguments);
  const rounded = Math.round((arr[0] / 255) * 100);
  const rounded1 = Math.round((arr[1] / 255) * 100);
  const rounded2 = Math.round((arr[2] / 255) * 100);
  if (arr.length >= 4) {
    let text;
    if (1 !== arr[3]) {
      text = `${"rgba(" + tmp + "%, " + tmp2 + "%, " + tmp3 + "%, " + arr[3]})`;
    }
    return text;
  }
  text = `${"rgb(" + tmp + "%, " + tmp2 + "%, " + tmp3}%)`;
};
exports.to.hsl = function () {
  const arr = swizzle(arguments);
  if (arr.length >= 4) {
    let text;
    if (1 !== arr[3]) {
      text = `${"hsla(" + arr[0] + ", " + arr[1] + "%, " + arr[2] + "%, " + arr[3]})`;
    }
    return text;
  }
  text = `${"hsl(" + arr[0] + ", " + arr[1] + "%, " + arr[2]}%)`;
};
exports.to.hwb = function () {
  const arr = swizzle(arguments);
  let str = "";
  const tmp = arr.length >= 4 && 1 !== arr[3];
  if (tmp) {
    str = `, ${arr[3]}`;
  }
  return "hwb(" + arr[0] + ", " + arr[1] + "%, " + arr[2] + "%" + str + ")";
};
exports.to.keyword = (arg0) => obj2[arg0.slice(arg0, 0, 3)];

export default exports;

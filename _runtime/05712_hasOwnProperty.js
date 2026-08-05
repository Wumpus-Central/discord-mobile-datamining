// _runtime/05712_hasOwnProperty.js
let obj = Object.create(null);
for (const key10013 in require("keys")) {
  let tmp3 = key10013;
  let call = hasOwnProperty.call;
  let tmp4 = require("keys");
  if (typeof call === "unknown") {
    let hasOwnPropertyResult = hasOwnProperty(key10013);
  } else {
    hasOwnPropertyResult = call(tmp4, key10013);
  }
  if (!hasOwnPropertyResult) {
    continue;
  } else {
    obj[require("keys")[key10013]] = key10013;
    continue;
  }
  continue;
}
obj = { to: {}, get: {} };
obj.get = (str) => {
  const formatted = str.substring(0, 3).toLowerCase();
  if ("hsl" === formatted) {
    const get3 = obj.get;
    let hslResult = get3.hsl(str);
    let str3 = "hsl";
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
    obj = { model: null, value: null };
    obj[0] = str3;
    obj[1] = hslResult;
    tmp6 = obj;
  }
  return tmp6;
};
obj.get.rgb = (str) => {
  let sum;
  let sum1;
  if (str) {
    const items = [0, 0, 0, 1];
    const match = str.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i);
    if (match) {
      let num19 = 0;
      do {
        let result = 2 * num19;
        let _parseInt4 = parseInt;
        items[num19] = parseInt(arr2.slice(result, result + 2), 16);
        num19 = num19 + 1;
      } while (num19 < 3);
      let num7 = 0;
      if (match[2]) {
        const _parseInt5 = parseInt;
        items[3] = parseInt(tmp24, 16) / 255;
        num7 = 0;
      }
      arr2 = match[1];
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
          items[3] = parseInt(tmp22 + tmp22, 16) / 255;
          num7 = 0;
        }
      } else {
        const match2 = str.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/);
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
            const parsed = parseFloat(match2[4]);
            if (match2[5]) {
              items[3] = 0.01 * parsed;
              num7 = 0;
            } else {
              items[3] = parsed;
              num7 = 0;
            }
          }
        } else {
          const match3 = str.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/);
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
              const parsed1 = parseFloat(match3[4]);
              if (match3[5]) {
                items[3] = 0.01 * parsed1;
                num7 = 0;
              } else {
                items[3] = parsed1;
                num7 = 0;
              }
            }
          } else {
            const match4 = str.match(/^(\w+)$/);
            if (!match4) {
              return null;
            } else if ("transparent" === match4[1]) {
              let items1 = [0, 0, 0, 0];
            } else {
              const call = hasOwnProperty.call;
              items1 = null;
              if (typeof call === "unknown" ? tmp9(match4[1]) : call(tmp12, match4[1])) {
                const tmp15 = tmp10(5710)[match4[1]];
                tmp15[3] = 1;
                items1 = tmp15;
              }
              tmp10 = require;
              tmp12 = require("05710_keys.js") /* keys */;
              tmp9 = hasOwnProperty;
            }
          }
        }
      }
    }
    do {
      let tmp27 = globalThis;
      let _Math2 = Math;
      let _Math3 = Math;
      let num21 = 0;
      let num22 = 255;
      items[num7] = Math.min(Math.max(0, items[num7]), 255);
      let num23 = 1;
      num7 = num7 + 1;
      let num24 = 3;
    } while (num7 < 3);
    const _Math4 = Math;
    const _Math5 = Math;
    items[3] = Math.min(Math.max(0, items[3]), 1);
    return items;
  } else {
    return null;
  }
};
obj.get.hsl = (str) => {
  if (str) {
    const match = str.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
    if (match) {
      const _parseFloat = parseFloat;
      const parsed = parseFloat(match[4]);
      const _parseFloat2 = parseFloat;
      const items = [(parseFloat(match[1]) % 360 + 360) % 360, , , ];
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
obj.get.hwb = (str) => {
  if (str) {
    const match = str.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
    if (match) {
      const _parseFloat = parseFloat;
      const parsed = parseFloat(match[4]);
      const _parseFloat2 = parseFloat;
      const items = [(parseFloat(match[1]) % 360 + 360) % 360, , , ];
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
obj.to.hex = () => {
  const tmp = require("05713_swizzle.js") /* swizzle */(arguments);
  const str = Math.round(tmp[0]);
  const formatted = Math.round(tmp[0]).toString(16).toUpperCase();
  let text = formatted;
  if (formatted.length < 2) {
    text = `0${arr}`;
  }
  const text1 = `#${tmp2}`;
  const str2 = Math.round(tmp[0]).toString(16);
  const str4 = Math.round(tmp[1]);
  const formatted1 = Math.round(tmp[1]).toString(16).toUpperCase();
  let text2 = formatted1;
  if (formatted1.length < 2) {
    text2 = `0${arr2}`;
  }
  const sum = text1 + text2;
  const str5 = Math.round(tmp[1]).toString(16);
  const str7 = Math.round(tmp[2]);
  const formatted2 = Math.round(tmp[2]).toString(16).toUpperCase();
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
    const formatted3 = Math.round(Math.round(255 * tmp[3])).toString(16).toUpperCase();
    let text4 = formatted3;
    if (formatted3.length < 2) {
      text4 = `0${arr4}`;
    }
    str10 = text4;
    const str12 = Math.round(Math.round(255 * tmp[3])).toString(16);
  }
  return sum1 + str10;
};
obj.to.rgb = () => {
  const arr = require("05713_swizzle.js") /* swizzle */(arguments);
  if (arr.length >= 4) {
    if (1 !== arr[3]) {
      const _Math = Math;
      const _Math2 = Math;
      const text = `rgba(${Math.round(arr[0])}`;
      const _Math3 = Math;
      const text1 = `${`rgba(${Math.round(arr[0])}`}, ${Math.round(arr[1])}`;
      let text2 = `${tmp3 + ", " + Math.round(arr[2]) + ", " + arr[3]})`;
    }
    return text2;
  }
  const text3 = `rgb(${Math.round(arr[0])}`;
  const text4 = `${`rgb(${Math.round(arr[0])}`}, ${Math.round(arr[1])}`;
  text2 = `${tmp6 + ", " + Math.round(arr[2])})`;
};
obj.to.rgb.percent = () => {
  const arr = require("05713_swizzle.js") /* swizzle */(arguments);
  const rounded = Math.round(arr[0] / 255 * 100);
  const rounded1 = Math.round(arr[1] / 255 * 100);
  const rounded2 = Math.round(arr[2] / 255 * 100);
  if (arr.length >= 4) {
    if (1 !== arr[3]) {
      let text = `${"rgba(" + tmp + "%, " + tmp2 + "%, " + tmp3 + "%, " + arr[3]})`;
    }
    return text;
  }
  text = `${"rgb(" + tmp + "%, " + tmp2 + "%, " + tmp3}%)`;
};
obj.to.hsl = () => {
  const arr = require("05713_swizzle.js") /* swizzle */(arguments);
  if (arr.length >= 4) {
    if (1 !== arr[3]) {
      let text = `${"hsla(" + arr[0] + ", " + arr[1] + "%, " + arr[2] + "%, " + arr[3]})`;
    }
    return text;
  }
  text = `${"hsl(" + arr[0] + ", " + arr[1] + "%, " + arr[2]}%)`;
};
obj.to.hwb = () => {
  const arr = require("05713_swizzle.js") /* swizzle */(arguments);
  let tmp = arr.length >= 4;
  if (tmp) {
    tmp = 1 !== arr[3];
  }
  let str = "";
  if (tmp) {
    str = `, ${arr[3]}`;
  }
  return "hwb(" + arr[0] + ", " + arr[1] + "%, " + arr[2] + "%" + str + ")";
};
obj.to.keyword = (arg0) => obj[arg0.slice(arg0, 0, 3)];

export default obj;
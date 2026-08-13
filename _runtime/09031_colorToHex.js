// _runtime/09031_colorToHex.js
import _slicedToArray from "_slicedToArray";


export const colorToHex = function colorToHex(arr) {
  let tmp30;
  let tmp31;
  let tmp32;
  if (undefined === arr) {
    return arr;
  } else if ("none" === arr) {
    return arr;
  } else if (arr.includes("rgb")) {
    const match = arr.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    if (match) {
      const substr = match.slice(1);
      let str8 = "";
      if (3 === substr.length) {
        const _parseInt4 = parseInt;
        parseInt(substr[0], 10).toString(16);
        const _parseInt5 = parseInt;
        const text = `#${obj5.padStart(2, "0")}`;
        const str17 = parseInt(substr[0], 10);
        parseInt(substr[1], 10).toString(16);
        const _parseInt6 = parseInt;
        const text1 = `#${obj5.padStart(2, "0")}${obj6.padStart(2, "0")}`;
        const str20 = parseInt(substr[1], 10);
        parseInt(substr[2], 10).toString(16);
        str8 = `#${obj5.padStart(2, "0")}${obj6.padStart(2, "0")}${obj7.padStart(2, "0")}`;
        const str21 = parseInt(substr[2], 10);
      }
      return str8;
    } else {
      const _Error4 = Error;
      throw Error("Invalid color: " + arr);
    }
  } else if (arr.includes("hsl")) {
    const match1 = arr.match(/^hsla*\((\d{1,3})\s*[, ]\s*(\d{1,3})%\s*[, ]\s*(\d{1,3})%.*\)/i);
    if (null === match1) {
      const _Error3 = Error;
      throw Error("Invalid color: " + arr);
    } else {
      const items = [match1[1] / 360, match1[2] / 100, match1[3] / 100];
      let str11 = "";
      let str5 = "";
      if (3 === items.length) {
        [tmp30, tmp31, tmp32] = callback(items, 3);
        if (0 === tmp31) {
          const _Math = Math;
          const items1 = [Math.round(255 * tmp34), , ];
          const _Math2 = Math;
          items1[1] = Math.round(255 * tmp33);
          const _Math3 = Math;
          items1[2] = Math.round(255 * tmp32);
          if (3 === items1.length) {
            const _parseInt = parseInt;
            parseInt(items1[0], 10).toString(16);
            const _parseInt2 = parseInt;
            const text2 = `#${obj2.padStart(2, "0")}`;
            const str12 = parseInt(items1[0], 10);
            parseInt(items1[1], 10).toString(16);
            const _parseInt3 = parseInt;
            const text3 = `#${obj2.padStart(2, "0")}${obj3.padStart(2, "0")}`;
            const str15 = parseInt(items1[1], 10);
            str5 = parseInt(items1[2], 10).toString(16);
            str11 = `#${obj2.padStart(2, "0")}${obj3.padStart(2, "0")}${obj4.padStart(2, "0")}`;
            const str16 = parseInt(items1[2], 10);
          }
          str5 = str11;
        } else {
          if (tmp32 < 0.5) {
            let result = tmp32 * (1 + tmp31);
          } else {
            result = tmp32 + tmp31 - tmp32 * tmp31;
          }
          const diff = 2 * tmp32 - result;
          const sum = tmp30 + 0.3333333333333333;
          let sum1 = sum;
          if (sum < 0) {
            sum1 = sum + 1;
          }
          let diff1 = sum1;
          if (sum1 > 1) {
            diff1 = sum1 - 1;
          }
          if (diff1 < 0.16666666666666666) {
            let sum2 = diff + 6 * (result - diff) * diff1;
          } else {
            sum2 = result;
            if (diff1 >= 0.5) {
              let sum3 = diff;
              if (diff1 < 0.6666666666666666) {
                sum3 = diff + (result - diff) * (0.6666666666666666 - diff1) * 6;
              }
              sum2 = sum3;
            }
          }
          let sum4 = tmp30;
          if (tmp30 < 0) {
            sum4 = tmp30 + 1;
          }
          let diff2 = sum4;
          if (sum4 > 1) {
            diff2 = sum4 - 1;
          }
          if (diff2 < 0.16666666666666666) {
            let sum5 = diff + 6 * (result - diff) * diff2;
          } else {
            sum5 = result;
            if (diff2 >= 0.5) {
              let sum6 = diff;
              if (diff2 < 0.6666666666666666) {
                sum6 = diff + (result - diff) * (0.6666666666666666 - diff2) * 6;
              }
              sum5 = sum6;
            }
          }
          const diff3 = tmp30 - 0.3333333333333333;
          let sum7 = diff3;
          if (diff3 < 0) {
            sum7 = diff3 + 1;
          }
          let diff4 = sum7;
          if (1 < sum7) {
            diff4 = sum7 - 1;
          }
          if (diff4 < 0.16666666666666666) {
            let sum8 = diff + 6 * (result - diff) * diff4;
          } else {
            sum8 = result;
            if (diff4 >= 0.5) {
              let sum9 = diff;
              if (diff4 < 0.6666666666666666) {
                sum9 = diff + (result - diff) * (0.6666666666666666 - diff4) * 6;
              }
              sum8 = sum9;
            }
          }
        }
        const tmp29 = callback(items, 3);
      }
      return str5;
    }
  } else {
    if (arr.includes("#")) {
      if (obj.test(arr)) {
        if (4 === arr.length) {
          return "#" + arr[1] + arr[1] + arr[2] + arr[2] + arr[3] + arr[3];
        } else if (7 === arr.length) {
          return arr;
        }
      } else {
        const _Error = Error;
        throw Error("Invalid color: " + arr);
      }
      obj = /^#([0-9A-Fa-f]{3}){1,2}$/i;
    }
    const tmp2 = { aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#00ffff", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000000", blanchedalmond: "#ffebcd", blue: "#0000ff", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", darkgreen: "#006400", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", fuchsia: "#ff00ff", gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520", gray: "#808080", green: "#008000", greenyellow: "#adff2f", honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c", indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", lavender: "#e6e6fa", lavenderblush: "#fff0f5", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrodyellow: "#fafad2", lightgrey: "#d3d3d3", lightgreen: "#90ee90", lightpink: "#ffb6c1", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#778899", lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#00ff00", limegreen: "#32cd32", linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000", mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370d8", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#d87093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", rebeccapurple: "#663399", red: "#ff0000", rosybrown: "#bc8f8f", royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57", seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090", snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00", yellowgreen: "#9acd32" }[arr.toLowerCase(arr)];
    if (tmp2) {
      return tmp2;
    } else {
      const _Error2 = Error;
      throw Error("Invalid color: " + arr);
    }
  }
};
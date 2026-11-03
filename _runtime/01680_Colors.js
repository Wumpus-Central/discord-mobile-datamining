// === Module 1680: Colors ===

// Module 1680 (Colors)
import _slicedToArray_mod from "module_32" /* 32 */;

function call() {
  items = [...arguments];
  return "\\(\\s*(" + items.join(")\\s*,?\\s*(") + ")\\s*\\)";
}
function callWithSlashSeparator() {
  items = [...arguments];
  const substr = items.slice(0, items.length - 1);
  return "\\(\\s*(" + substr.join(")\\s*,?\\s*(") + ")\\s*/\\s*(" + items[items.length - 1] + ")\\s*\\)";
}
function commaSeparatedCall() {
  items = [...arguments];
  return "\\(\\s*(" + items.join(")\\s*,\\s*(") + ")\\s*\\)";
}
let _slicedToArray = _slicedToArray_mod;
const obj = { rgb: null, rgba: null, hsl: null, hsla: null, hwb: null, hex3: null, hex4: null, hex6: null, hex8: null };
const regExp = new RegExp("rgb" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+"));
obj.rgb = regExp;
const regExp1 = new RegExp("rgba(" + commaSeparatedCall("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+") + "|" + callWithSlashSeparator("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+") + ")");
obj.rgba = regExp1;
const regExp2 = new RegExp("hsl" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%"));
obj.hsl = regExp2;
const commaSeparatedCallResult = commaSeparatedCall("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+");
const regExp3 = new RegExp("hsla(" + commaSeparatedCall("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+") + "|" + callWithSlashSeparator("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+") + ")");
obj.hsla = regExp3;
const regExp4 = new RegExp("hwb" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%"));
obj.hwb = regExp4;
obj.hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
obj.hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
obj.hex6 = /^#([0-9a-fA-F]{6})$/;
obj.hex8 = /^#([0-9a-fA-F]{8})$/;
let items = [{ code: "(function hue2rgb_Pnpm_ColorsTs1(p,q,t){if(t<0){t+=1;}if(t>1){t-=1;}if(t<1/6){return p+(q-p)*6*t;}if(t<1/2){return q;}if(t<2/3){return p+(q-p)*(2/3-t)*6;}return p;})" }];
[tmp9] = items;
function hue2rgb(arg0, arg1, arg2) {
  let sum = arg2;
  if (arg2 < 0) {
    sum = arg2 + 1;
  }
  let diff = sum;
  if (sum > 1) {
    diff = sum - 1;
  }
  if (diff < 0.16666666666666666) {
    let sum1 = arg0 + 6 * (arg1 - arg0) * diff;
  } else {
    sum1 = arg1;
    if (diff >= 0.5) {
      let sum2 = arg0;
      if (diff < 0.6666666666666666) {
        sum2 = arg0 + (arg1 - arg0) * (0.6666666666666666 - diff) * 6;
      }
      sum1 = sum2;
    }
  }
  return sum1;
}
hue2rgb.__workletHash = 16254463607644;
hue2rgb.__initData = tmp9;
const items1 = [{ code: "(function hslToRgb_Pnpm_ColorsTs2(h,s,l){let[hue2rgb]=this.__closure;const q=l<0.5?l*(1+s):l+s-l*s;const p=2*l-q;const r=hue2rgb(p,q,h+1/3);const g=hue2rgb(p,q,h);const b=hue2rgb(p,q,h-1/3);return Math.round(r*255)<<24|Math.round(g*255)<<16|Math.round(b*255)<<8;})" }, hue2rgb];
let closure_129_0;
[tmp10, tmp11] = items1;
function hslToRgb(arg0, arg1, arg2) {
  if (arg2 < 0.5) {
    let result = arg2 * (1 + arg1);
  } else {
    result = arg2 + arg1 - arg2 * arg1;
  }
  const diff = 2 * arg2 - result;
  const tmp3 = _slicedToArray(diff, result, arg0 + 0.3333333333333333);
  const tmp4 = _slicedToArray(diff, result, arg0);
  const tmp5 = _slicedToArray(diff, result, arg0 - 0.3333333333333333);
  const tmp6 = Math.round(255 * tmp3) << 24;
  return tmp6 | Math.round(255 * tmp4) << 16 | Math.round(255 * tmp5) << 8;
}
const items2 = [tmp11];
hslToRgb.__closure = items2;
hslToRgb.__workletHash = 1377722639110;
hslToRgb.__initData = tmp10;
const items3 = [{ code: "(function hwbToRgb_Pnpm_ColorsTs3(h,w,b){let[hue2rgb]=this.__closure;if(w+b>=1){const gray=Math.round(w*255/(w+b));return gray<<24|gray<<16|gray<<8;}const red=hue2rgb(0,1,h+1/3)*(1-w-b)+w;const green=hue2rgb(0,1,h)*(1-w-b)+w;const blue=hue2rgb(0,1,h-1/3)*(1-w-b)+w;return Math.round(red*255)<<24|Math.round(green*255)<<16|Math.round(blue*255)<<8;})" }, hue2rgb];
let closure_130_0;
[tmp12, tmp13] = items3;
function hwbToRgb(arg0, arg1, arg2) {
  if (arg1 + arg2 >= 1) {
    const _Math = Math;
    const rounded = Math.round(255 * arg1 / (arg1 + arg2));
    return rounded << 24 | rounded << 16 | rounded << 8;
  } else {
    const sum = _slicedToArray(0, 1, arg0 + 0.3333333333333333) * (1 - arg1 - arg2) + arg1;
    const sum1 = _slicedToArray(0, 1, arg0) * (1 - arg1 - arg2) + arg1;
    const _Math2 = Math;
    const sum2 = _slicedToArray(0, 1, arg0 - 0.3333333333333333) * (1 - arg1 - arg2) + arg1;
    const _Math3 = Math;
    const _Math4 = Math;
    const tmp9 = Math.round(255 * sum) << 24;
    return tmp9 | Math.round(255 * sum1) << 16 | Math.round(255 * sum2) << 8;
  }
}
const items4 = [tmp13];
hwbToRgb.__closure = items4;
hwbToRgb.__workletHash = 9149145136428;
hwbToRgb.__initData = tmp12;
const items5 = [{ code: "(function parse255_Pnpm_ColorsTs4(str){const int=Number.parseInt(str,10);if(int<0){return 0;}if(int>255){return 255;}return int;})" }];
[tmp14] = items5;
function parse255(match) {
  const parsed = Number.parseInt(match, 10);
  let num = 0;
  if (parsed >= 0) {
    let num2 = 255;
    if (parsed <= 255) {
      num2 = parsed;
    }
    num = num2;
  }
  return num;
}
parse255.__workletHash = 8070531630349;
parse255.__initData = tmp14;
const items6 = [{ code: "(function parse360_Pnpm_ColorsTs5(str){const int=Number.parseFloat(str);return(int%360+360)%360/360;})" }];
[tmp15] = items6;
function parse360(arg0) {
  return (Number.parseFloat(arg0) % 360 + 360) % 360 / 360;
}
parse360.__workletHash = 13350151787138;
parse360.__initData = tmp15;
const items7 = [{ code: "(function parse1_Pnpm_ColorsTs6(str){const num=Number.parseFloat(str);if(num<0){return 0;}if(num>1){return 255;}return Math.round(num*255);})" }];
[tmp16] = items7;
function parse1(arg0) {
  const parsed = Number.parseFloat(arg0);
  let num = 0;
  if (parsed >= 0) {
    let num4 = 255;
    if (parsed <= 1) {
      const _Math = Math;
      num4 = Math.round(255 * parsed);
    }
    num = num4;
  }
  return num;
}
parse1.__workletHash = 14960225290180;
parse1.__initData = tmp16;
const items8 = [{ code: "(function parsePercentage_Pnpm_ColorsTs7(str){const int=Number.parseFloat(str);if(int<0){return 0;}if(int>100){return 1;}return int/100;})" }];
[tmp17] = items8;
function parsePercentage(arg0) {
  const parsed = Number.parseFloat(arg0);
  let num = 0;
  if (parsed >= 0) {
    let num3 = 1;
    if (parsed <= 100) {
      num3 = parsed / 100;
    }
    num = num3;
  }
  return num;
}
parsePercentage.__workletHash = 5602847076180;
parsePercentage.__initData = tmp17;
const items9 = [{ code: "(function clampRGBA_Pnpm_ColorsTs8(RGBA){for(let i=0;i<4;i++){RGBA[i]=Math.max(0,Math.min(RGBA[i],1));}})" }];
[tmp18] = items9;
function clampRGBA(arg0) {
  let num = 0;
  do {
    let _Math = Math;
    let _Math2 = Math;
    arg0[num] = Math.max(0, Math.min(arg0[num], 1));
    num = num + 1;
  } while (num < 4);
}
clampRGBA.__workletHash = 14713718353334;
clampRGBA.__initData = tmp18;
const items10 = [{ code: "(function normalizeColor_Pnpm_ColorsTs9(color){let[MATCHERS,names,parse255,parse1,hslToRgb,parse360,parsePercentage,hwbToRgb]=this.__closure;if(typeof color==='number'){if(color>>>0===color&&color>=0&&color<=0xffffffff){return color;}return null;}if(typeof color!=='string'){return null;}let match;if(match=MATCHERS.hex6.exec(color)){return Number.parseInt(match[1]+'ff',16)>>>0;}if(Object.prototype.hasOwnProperty.call(names,color)){return names[color];}if(match=MATCHERS.rgb.exec(color)){return((parse255(match[1])<<24|parse255(match[2])<<16|parse255(match[3])<<8|0x000000ff)>>>0);}if(match=MATCHERS.rgba.exec(color)){if(match[6]!==undefined){return(parse255(match[6])<<24|parse255(match[7])<<16|parse255(match[8])<<8|parse1(match[9]))>>>0;}return(parse255(match[2])<<24|parse255(match[3])<<16|parse255(match[4])<<8|parse1(match[5]))>>>0;}if(match=MATCHERS.hex3.exec(color)){return Number.parseInt(match[1]+match[1]+match[2]+match[2]+match[3]+match[3]+'ff',16)>>>0;}if(match=MATCHERS.hex8.exec(color)){return Number.parseInt(match[1],16)>>>0;}if(match=MATCHERS.hex4.exec(color)){return Number.parseInt(match[1]+match[1]+match[2]+match[2]+match[3]+match[3]+match[4]+match[4],16)>>>0;}if(match=MATCHERS.hsl.exec(color)){return(hslToRgb(parse360(match[1]),parsePercentage(match[2]),parsePercentage(match[3]))|0x000000ff)>>>0;}if(match=MATCHERS.hsla.exec(color)){if(match[6]!==undefined){return(hslToRgb(parse360(match[6]),parsePercentage(match[7]),parsePercentage(match[8]))|parse1(match[9]))>>>0;}return(hslToRgb(parse360(match[2]),parsePercentage(match[3]),parsePercentage(match[4]))|parse1(match[5]))>>>0;}if(match=MATCHERS.hwb.exec(color)){return(hwbToRgb(parse360(match[1]),parsePercentage(match[2]),parsePercentage(match[3]))|0x000000ff)>>>0;}return null;})" }, obj, { transparent: 0, aliceblue: 4042850303, antiquewhite: 4209760255, aqua: 16777215, aquamarine: 2147472639, azure: 4043309055, beige: 4126530815, bisque: 4293182719, black: 255, blanchedalmond: 4293643775, blue: 65535, blueviolet: 2318131967, brown: 2771004159, burlywood: 3736635391, burntsienna: 3934150143, cadetblue: 1604231423, chartreuse: 2147418367, chocolate: 3530104575, coral: 4286533887, cornflowerblue: 1687547391, cornsilk: 4294499583, crimson: 3692313855, cyan: 16777215, darkblue: 35839, darkcyan: 9145343, darkgoldenrod: 3095792639, darkgray: 2846468607, darkgreen: 6553855, darkgrey: 2846468607, darkkhaki: 3182914559, darkmagenta: 2332068863, darkolivegreen: 1433087999, darkorange: 4287365375, darkorchid: 2570243327, darkred: 2332033279, darksalmon: 3918953215, darkseagreen: 2411499519, darkslateblue: 1211993087, darkslategray: 793726975, darkslategrey: 793726975, darkturquoise: 13554175, darkviolet: 2483082239, deeppink: 4279538687, deepskyblue: 12582911, dimgray: 1768516095, dimgrey: 1768516095, dodgerblue: 512819199, firebrick: 2988581631, floralwhite: 4294635775, forestgreen: 579543807, fuchsia: 4278255615, gainsboro: 3705462015, ghostwhite: 4177068031, gold: 4292280575, goldenrod: 3668254975, gray: 2155905279, green: 8388863, greenyellow: 2919182335, grey: 2155905279, honeydew: 4043305215, hotpink: 4285117695, indianred: 3445382399, indigo: 1258324735, ivory: 4294963455, khaki: 4041641215, lavender: 3873897215, lavenderblush: 4293981695, lawngreen: 2096890111, lemonchiffon: 4294626815, lightblue: 2916673279, lightcoral: 4034953471, lightcyan: 3774873599, lightgoldenrodyellow: 4210742015, lightgray: 3553874943, lightgreen: 2431553791, lightgrey: 3553874943, lightpink: 4290167295, lightsalmon: 4288707327, lightseagreen: 548580095, lightskyblue: 2278488831, lightslategray: 2005441023, lightslategrey: 2005441023, lightsteelblue: 2965692159, lightyellow: 4294959359, lime: 16711935, limegreen: 852308735, linen: 4210091775, magenta: 4278255615, maroon: 2147483903, mediumaquamarine: 1724754687, mediumblue: 52735, mediumorchid: 3126187007, mediumpurple: 2473647103, mediumseagreen: 1018393087, mediumslateblue: 2070474495, mediumspringgreen: 16423679, mediumturquoise: 1221709055, mediumvioletred: 3340076543, midnightblue: 421097727, mintcream: 4127193855, mistyrose: 4293190143, moccasin: 4293178879, navajowhite: 4292783615, navy: 33023, oldlace: 4260751103, olive: 2155872511, olivedrab: 1804477439, orange: 4289003775, orangered: 4282712319, orchid: 3664828159, palegoldenrod: 4008225535, palegreen: 2566625535, paleturquoise: 2951671551, palevioletred: 3681588223, papayawhip: 4293907967, peachpuff: 4292524543, peru: 3448061951, pink: 4290825215, plum: 3718307327, powderblue: 2967529215, purple: 2147516671, rebeccapurple: 1714657791, red: 4278190335, rosybrown: 3163525119, royalblue: 1097458175, saddlebrown: 2336560127, salmon: 4202722047, sandybrown: 4104413439, seagreen: 780883967, seashell: 4294307583, sienna: 2689740287, silver: 3233857791, skyblue: 2278484991, slateblue: 1784335871, slategray: 1887473919, slategrey: 1887473919, snow: 4294638335, springgreen: 16744447, steelblue: 1182971135, tan: 3535047935, teal: 8421631, thistle: 3636451583, tomato: 4284696575, turquoise: 1088475391, violet: 4001558271, wheat: 4125012991, white: 4294967295, whitesmoke: 4126537215, yellow: 4294902015, yellowgreen: 2597139199 }, parse255, parse1, hslToRgb, parse360, parsePercentage, hwbToRgb];
let closure_131_0;
let closure_131_1;
let closure_131_2;
let closure_131_3;
let closure_131_4;
let closure_131_5;
let closure_131_6;
let closure_131_7;
[tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27] = items10;
function normalizeColor(key10009) {
  if (typeof key10009 === "number") {
    let tmp54 = null;
    if (key10009 >>> 0 === key10009) {
      tmp54 = null;
      if (key10009 >= 0) {
        tmp54 = null;
        if (key10009 <= 4294967295) {
          tmp54 = key10009;
        }
      }
    }
    let tmp55 = tmp54;
  } else {
    tmp55 = null;
    if (typeof key10009 === "string") {
      const hex6 = _slicedToArray.hex6;
      let match = hex6.exec(key10009);
      let _parseInt = globalThis;
      if (match) {
        const _Number4 = _parseInt.Number;
        _parseInt = _Number4.parseInt;
        match = _parseInt(`${tmp52[1]}ff`, 16);
        let tmp10 = match >>> 0;
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown" ? hasOwnProperty(key10009) : call(c1, key10009)) {
        } else {
          const rgb = _slicedToArray.rgb;
          const match1 = rgb.exec(key10009);
          if (match1) {
            const tmp50 = React2(match1[1]) << 24;
            tmp10 = (tmp50 | React2(match1[2]) << 16 | React2(match1[3]) << 8 | 255) >>> 0;
            const tmp51 = React2(match1[2]) << 16;
          } else {
            const rgba = _slicedToArray.rgba;
            let match2 = rgba.exec(key10009);
            if (match2) {
              if (undefined !== match2[6]) {
                const tmp44 = React2(match2[6]) << 24;
                const tmp45 = React2(match2[7]) << 16;
                match2 = React3(match2[9]);
                let tmp42 = (tmp44 | tmp45 | React2(match2[8]) << 8 | match2) >>> 0;
                const tmp46 = React2(match2[8]) << 8;
              } else {
                const tmp38 = React2(match2[2]) << 24;
                const tmp39 = React2(match2[3]) << 16;
                tmp42 = (tmp38 | tmp39 | React2(match2[4]) << 8 | React3(match2[5])) >>> 0;
                const tmp40 = React2(match2[4]) << 8;
              }
            } else {
              const hex3 = _slicedToArray.hex3;
              const match3 = hex3.exec(key10009);
              if (match3) {
                const _Number3 = Number;
                tmp10 = Number.parseInt(`${tmp4[1]}${tmp4[1]}${tmp4[2]}${tmp4[2]}${tmp4[3]}${tmp4[3]}ff`, 16) >>> 0;
              } else {
                const hex8 = _slicedToArray.hex8;
                const match4 = hex8.exec(key10009);
                if (match4) {
                  const _Number2 = Number;
                  tmp10 = Number.parseInt(match4[1], 16) >>> 0;
                } else {
                  const hex4 = _slicedToArray.hex4;
                  const match5 = hex4.exec(key10009);
                  if (match5) {
                    const _Number = Number;
                    tmp10 = Number.parseInt(match5[1] + match5[1] + match5[2] + match5[2] + match5[3] + match5[3] + match5[4] + match5[4], 16) >>> 0;
                  } else {
                    const hsl = _slicedToArray.hsl;
                    const match6 = hsl.exec(key10009);
                    if (match6) {
                      const tmp34 = closure_1_5(match6[1]);
                      tmp10 = (255 | React4(tmp34, timestampProducer(match6[2]), timestampProducer(match6[3]))) >>> 0;
                      const tmp36 = timestampProducer(match6[2]);
                    } else {
                      const hsla = _slicedToArray.hsla;
                      let match7 = hsla.exec(key10009);
                      if (match7) {
                        if (undefined !== match7[6]) {
                          const tmp26 = closure_1_5(match7[6]);
                          const tmp28 = timestampProducer(match7[7]);
                          match7 = React4(tmp26, timestampProducer(match7[7]), timestampProducer(match7[8])) | React3(match7[9]);
                          let tmp23 = match7 >>> 0;
                          const tmp29 = React4(tmp26, timestampProducer(match7[7]), timestampProducer(match7[8]));
                        } else {
                          const tmp18 = closure_1_5(match7[2]);
                          const tmp20 = timestampProducer(match7[3]);
                          tmp23 = (React4(tmp18, timestampProducer(match7[3]), timestampProducer(match7[4])) | React3(match7[5])) >>> 0;
                          const tmp21 = React4(tmp18, timestampProducer(match7[3]), timestampProducer(match7[4]));
                        }
                      } else {
                        const hwb = _slicedToArray.hwb;
                        const match8 = hwb.exec(key10009);
                        if (match8) {
                          const tmp13 = closure_1_5(match8[1]);
                          tmp10 = (255 | React5(tmp13, timestampProducer(match8[2]), timestampProducer(match8[3]))) >>> 0;
                          const tmp15 = timestampProducer(match8[2]);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return tmp55;
}
const items11 = [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27];
normalizeColor.__closure = items11;
normalizeColor.__workletHash = 5494639720821;
normalizeColor.__initData = tmp19;
const items12 = [{ code: "(function pnpm_ColorsTs10(c){return(c>>24&255)/255;})" }];
[tmp28] = items12;
function pnpm_ColorsTs10(first1) {
  return (first1 >> 24 & 255) / 255;
}
pnpm_ColorsTs10.__workletHash = 11505816745320;
pnpm_ColorsTs10.__initData = tmp28;
const items13 = [{ code: "(function pnpm_ColorsTs11(c){return c>>16&255;})" }];
[tmp29] = items13;
function pnpm_ColorsTs11(arg0) {
  return arg0 >> 16 & 255;
}
pnpm_ColorsTs11.__workletHash = 8372982820660;
pnpm_ColorsTs11.__initData = tmp29;
const items14 = [{ code: "(function pnpm_ColorsTs12(c){return c>>8&255;})" }];
[tmp30] = items14;
function pnpm_ColorsTs12(arg0) {
  return arg0 >> 8 & 255;
}
pnpm_ColorsTs12.__workletHash = 5136009384232;
pnpm_ColorsTs12.__initData = tmp30;
const items15 = [{ code: "(function pnpm_ColorsTs13(c){return c&255;})" }];
[tmp31] = items15;
function pnpm_ColorsTs13(arg0) {
  return 255 & arg0;
}
pnpm_ColorsTs13.__workletHash = 6309177147793;
pnpm_ColorsTs13.__initData = tmp31;
const items16 = [{ code: "(function pnpm_ColorsTs14(r,g,b,alpha=1){const safeAlpha=Math.round(alpha*1000)/1000;return\"rgba(\"+r+\", \"+g+\", \"+b+\", \"+safeAlpha+\")\";})" }];
[tmp32] = items16;
function pnpm_ColorsTs14(arg0, arg1, arg2) {
  let num = arg3;
  if (arg3 === undefined) {
    num = 1;
  }
  return "rgba(" + arg0 + ", " + arg1 + ", " + arg2 + ", " + Math.round(1000 * num) / 1000 + ")";
}
pnpm_ColorsTs14.__workletHash = 11240051737826;
pnpm_ColorsTs14.__initData = tmp32;
const items17 = [{ code: "(function RGBtoHSV_Pnpm_ColorsTs15(r,g,b){const max=Math.max(r,g,b);const min=Math.min(r,g,b);const d=max-min;const s=max===0?0:d/max;const v=max/255;let h=0;switch(max){case min:break;case r:h=g-b+d*(g<b?6:0);h/=6*d;break;case g:h=b-r+d*2;h/=6*d;break;case b:h=r-g+d*4;h/=6*d;break;}return{h:h,s:s,v:v};})" }];
[tmp33] = items17;
class RGBtoHSV {
  constructor(arg0, arg1, arg2) {
    bound = Math.max(global, arg1, importDefault);
    bound1 = Math.min(global, arg1, importDefault);
    diff = bound - bound1;
    s = 0;
    if (0 !== bound) {
      s = diff / bound;
    }
    h = 0;
    result = bound / 255;
    if (bound1 !== bound) {
      if (global === bound) {
        num7 = 0;
        diff1 = arg1 - importDefault;
        if (arg1 < importDefault) {
          num7 = 6;
        }
        num8 = 6;
        h = (diff1 + diff * num7) / (6 * diff);
      } else if (arg1 === bound) {
        num5 = 2;
        num6 = 6;
        h = (importDefault - global + 2 * diff) / (6 * diff);
      } else {
        h = 0;
        if (importDefault === bound) {
          num3 = 4;
          num4 = 6;
          h = (global - arg1 + 4 * diff) / (6 * diff);
        }
      }
    }
    return { h, s, v: result };
  }
}
RGBtoHSV.__workletHash = 11005480239680;
RGBtoHSV.__initData = tmp33;
const items18 = [{ code: "(function HSVtoRGB_Pnpm_ColorsTs16(h,s,v){let r,g,b;const i=Math.floor(h*6);const f=h*6-i;const p=v*(1-s);const q=v*(1-f*s);const t=v*(1-(1-f)*s);switch(i%6){case 0:[r,g,b]=[v,t,p];break;case 1:[r,g,b]=[q,v,p];break;case 2:[r,g,b]=[p,v,t];break;case 3:[r,g,b]=[p,q,v];break;case 4:[r,g,b]=[t,p,v];break;case 5:[r,g,b]=[v,p,q];break;}return{r:Math.round(r*255),g:Math.round(g*255),b:Math.round(b*255)};})" }];
[tmp34] = items18;
class HSVtoRGB {
  constructor(arg0, arg1, arg2) {
    rounded = Math.floor(6 * global);
    diff = 6 * global - rounded;
    result = importDefault * (1 - arg1);
    result1 = importDefault * (1 - diff * arg1);
    result2 = importDefault * (1 - (1 - diff) * arg1);
    result3 = rounded % 6;
    if (0 === result3) {
      tmp7 = result;
      tmp8 = result2;
      tmp9 = importDefault;
    } else if (1 === result3) {
      tmp7 = result;
      tmp8 = importDefault;
      tmp9 = result1;
    } else {
      num = 2;
      if (2 === result3) {
        tmp7 = result2;
        tmp8 = importDefault;
        tmp9 = result;
      } else {
        num2 = 3;
        if (3 === result3) {
          tmp7 = importDefault;
          tmp8 = result1;
          tmp9 = result;
        } else {
          num3 = 4;
          if (4 === result3) {
            tmp7 = importDefault;
            tmp8 = result;
            tmp9 = result2;
          } else {
            num4 = 5;
            if (5 === result3) {
              tmp7 = result1;
              tmp8 = result;
              tmp9 = importDefault;
            }
          }
        }
      }
    }
    obj = { r: Math.round(255 * tmp9), g: Math.round(255 * tmp8), b: Math.round(255 * tmp7) };
    return obj;
  }
}
HSVtoRGB.__workletHash = 13782310861829;
HSVtoRGB.__initData = tmp34;
const items19 = [{ code: "(function pnpm_ColorsTs17(h,s,v,a){let[HSVtoRGB,rgbaColor]=this.__closure;const{r:r,g:g,b:b}=HSVtoRGB(h,s,v);return rgbaColor(r,g,b,a);})" }, HSVtoRGB, pnpm_ColorsTs14];
let closure_132_0;
let closure_132_1;
[tmp35, tmp36, tmp37] = items19;
function pnpm_ColorsTs17(arg0, arg1, arg2, arg3) {
  const tmp = _slicedToArray(arg0, arg1, arg2);
  return _undefined(tmp.r, tmp.g, tmp.b, arg3);
}
const items20 = [tmp36, tmp37];
pnpm_ColorsTs17.__closure = items20;
pnpm_ColorsTs17.__workletHash = 5585125910433;
pnpm_ColorsTs17.__initData = tmp35;
const items21 = [{ code: "(function processColorInitially_Pnpm_ColorsTs18(color){let[normalizeColor]=this.__closure;if(color===null||color===undefined){return null;}let colorNumber;if(typeof color==='number'){colorNumber=color;}else{const normalizedColor=normalizeColor(color);if(typeof normalizedColor!=='number'){return normalizedColor;}colorNumber=normalizedColor;}return(colorNumber<<24|colorNumber>>>8)>>>0;})" }, normalizeColor];
let closure_133_0;
[tmp38, tmp39] = items21;
function processColorInitially(num) {
  if (null == num) {
    return null;
  } else {
    let tmp = num;
    if (typeof num !== "number") {
      const tmp3 = _slicedToArray(num);
      tmp = tmp3;
      if (typeof tmp3 !== "number") {
        return tmp3;
      }
    }
    return (tmp << 24 | tmp >>> 8) >>> 0;
  }
}
const items22 = [tmp39];
processColorInitially.__closure = items22;
processColorInitially.__workletHash = 16584286598390;
processColorInitially.__initData = tmp38;
const items23 = [{ code: "(function isColor_Pnpm_ColorsTs19(value){let[processColorInitially]=this.__closure;if(typeof value!=='string'){return false;}const processedColor=processColorInitially(value);return processedColor!==undefined&&processedColor!==null;})" }, processColorInitially];
let closure_134_0;
[tmp40, tmp41] = items23;
function isColor(str) {
  if (typeof str !== "string") {
    return false;
  } else {
    return null != _slicedToArray(str);
  }
}
const items24 = [tmp41];
isColor.__closure = items24;
isColor.__workletHash = 3251291322125;
isColor.__initData = tmp40;
const items25 = [{ code: "(function convertToRGBA_Pnpm_ColorsTs20(color){let[processColorInitially]=this.__closure;const processedColor=processColorInitially(color);const a=(processedColor>>>24)/255;const r=(processedColor<<8>>>24)/255;const g=(processedColor<<16>>>24)/255;const b=(processedColor<<24>>>24)/255;return[r,g,b,a];})" }, processColorInitially];
let closure_135_0;
[tmp42, tmp43] = items25;
function convertToRGBA(arg0) {
  const tmp = _slicedToArray(arg0);
  items = [(tmp << 8 >>> 24) / 255, (tmp << 16 >>> 24) / 255, (tmp << 24 >>> 24) / 255, (tmp >>> 24) / 255];
  return items;
}
const items26 = [tmp43];
convertToRGBA.__closure = items26;
convertToRGBA.__workletHash = 15622154885026;
convertToRGBA.__initData = tmp42;
const items27 = [{ code: "(function rgbaArrayToRGBAColor_Pnpm_ColorsTs21(RGBA){const alpha=RGBA[3]<0.001?0:RGBA[3];return\"rgba(\"+Math.round(RGBA[0]*255)+\", \"+Math.round(RGBA[1]*255)+\", \"+Math.round(RGBA[2]*255)+\", \"+alpha+\")\";})" }];
[tmp44] = items27;
function rgbaArrayToRGBAColor(arg0) {
  let num = 0;
  if (arg0[3] >= 0.001) {
    num = arg0[3];
  }
  const rounded = Math.round(255 * arg0[0]);
  const rounded1 = Math.round(255 * arg0[1]);
  return "rgba(" + rounded + ", " + rounded1 + ", " + Math.round(255 * arg0[2]) + ", " + num + ")";
}
rgbaArrayToRGBAColor.__workletHash = 1034819553610;
rgbaArrayToRGBAColor.__initData = tmp44;
const items28 = [{ code: "(function toLinearSpace_Pnpm_ColorsTs22(RGBA,gamma=2.2){const res=[];for(let i=0;i<3;++i){res.push(Math.pow(RGBA[i],gamma));}res.push(RGBA[3]);return res;})" }];
[tmp45] = items28;
function toLinearSpace(arg0) {
  let num = diff;
  if (diff === undefined) {
    num = 2.2;
  }
  items = [];
  let num2 = 0;
  do {
    let _Math = Math;
    let arr = items.push(Math.pow(arg0[num2], num));
    num2 = num2 + 1;
  } while (num2 < 3);
  items.push(arg0[3]);
  return items;
}
toLinearSpace.__workletHash = 8436632991389;
toLinearSpace.__initData = tmp45;
const items29 = [{ code: "(function toGammaSpace_Pnpm_ColorsTs23(RGBA,gamma=2.2){const res=[];for(let i=0;i<3;++i){res.push(Math.pow(RGBA[i],1/gamma));}res.push(RGBA[3]);return res;})" }];
[tmp46] = items29;
function toGammaSpace(arg0) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 2.2;
  }
  items = [];
  let num2 = 0;
  do {
    let _Math = Math;
    let arr = items.push(Math.pow(arg0[num2], 1 / num));
    num2 = num2 + 1;
  } while (num2 < 3);
  items.push(arg0[3]);
  return items;
}
toGammaSpace.__workletHash = 13620249357912;
toGammaSpace.__initData = tmp46;
const items30 = [{ code: "(function toLinearChannel_Pnpm_ColorsTs24(c){return c<=0.04045?c/12.92:Math.pow((c+0.055)/1.055,2.4);})" }];
[tmp47] = items30;
function toLinearChannel(arg0) {
  if (arg0 <= 0.04045) {
    let result = arg0 / 12.92;
  } else {
    const _Math = Math;
    result = Math.pow((arg0 + 0.055) / 1.055, 2.4);
  }
  return result;
}
toLinearChannel.__workletHash = 17287289703658;
toLinearChannel.__initData = tmp47;
const items31 = [{ code: "(function contrastColor_Pnpm_ColorsTs25(color){let[convertToRGBA,toLinearChannel]=this.__closure;const[r,g,b]=convertToRGBA(color);const luminance=0.2126*toLinearChannel(r)+0.7152*toLinearChannel(g)+0.0722*toLinearChannel(b);return 1.05*0.05>=(luminance+0.05)**2?'white':'black';})" }, convertToRGBA, toLinearChannel];
_slicedToArray = undefined;
let c1;
[tmp48, tmp49, tmp50] = items31;
function contrastColor(arg0) {
  const tmp = _slicedToArray(_slicedToArray(arg0), 3);
  const result = 0.2126 * _undefined(tmp[0]);
  const result1 = 0.7152 * _undefined(tmp[1]);
  let str = "black";
  if ((result + result1 + 0.0722 * _undefined(tmp[2]) + 0.05) ** 2 <= 0.052500000000000005) {
    str = "white";
  }
  return str;
}
const items32 = [tmp49, tmp50];
contrastColor.__closure = items32;
contrastColor.__workletHash = 12194788978229;
contrastColor.__initData = tmp48;

export { clampRGBA };
export const ColorProperties = ["backgroundColor", "borderBottomColor", "borderColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderStartColor", "borderEndColor", "borderBlockColor", "borderBlockEndColor", "borderBlockStartColor", "color", "outlineColor", "placeholderTextColor", "shadowColor", "textDecorationColor", "tintColor", "textShadowColor", "overlayColor", "fill", "floodColor", "lightingColor", "stopColor", "stroke"];
export { normalizeColor };
export const opacity = pnpm_ColorsTs10;
export const red = pnpm_ColorsTs11;
export const green = pnpm_ColorsTs12;
export const blue = pnpm_ColorsTs13;
export const rgbaColor = pnpm_ColorsTs14;
export { RGBtoHSV };
export const hsvToColor = pnpm_ColorsTs17;
export { processColorInitially };
export { isColor };
export { convertToRGBA };
export { rgbaArrayToRGBAColor };
export { toLinearSpace };
export { toGammaSpace };
export { contrastColor };
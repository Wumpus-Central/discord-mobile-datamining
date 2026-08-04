import isReanimated3 from "isReanimated3";
import isReanimated3 from "isReanimated3";
import isReanimated3 from "isReanimated3";
import isJest from "isJest";

function call(arg0, arg1, arg2) {
  const items = [...arguments];
  return "\\(\\s*(" + items.join(")\\s*,?\\s*(") + ")\\s*\\)";
}
function callWithSlashSeparator(arg0, arg1, arg2, arg3) {
  const items = [...arguments];
  const substr = items.slice(0, items.length - 1);
  return "\\(\\s*(" + substr.join(")\\s*,?\\s*(") + ")\\s*/\\s*(" + items[items.length - 1] + ")\\s*\\)";
}
function commaSeparatedCall(arg0, arg1, arg2, arg3) {
  const items = [...arguments];
  return "\\(\\s*(" + items.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const obj = { rgb: null, rgba: null, hsl: null, hsla: null, hwb: null, hex3: null, hex4: null, hex6: null, hex8: null };
const regExp = new RegExp("rgb" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+"));
obj[0] = regExp;
const regExp1 = new RegExp("rgba(" + commaSeparatedCall("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+") + "|" + callWithSlashSeparator("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+") + ")");
obj[1] = regExp1;
const regExp2 = new RegExp("hsl" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%"));
obj[2] = regExp2;
const commaSeparatedCallResult = commaSeparatedCall("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+");
const regExp3 = new RegExp("hsla(" + commaSeparatedCall("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+") + "|" + callWithSlashSeparator("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+") + ")");
obj[3] = regExp3;
const regExp4 = new RegExp("hwb" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%"));
obj[4] = regExp4;
obj[5] = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
obj[6] = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
obj[7] = /^#([0-9a-fA-F]{6})$/;
obj[8] = /^#([0-9a-fA-F]{8})$/;
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
hue2rgb.__closure = {};
hue2rgb.__workletHash = 13577481829661;
hue2rgb.__initData = { code: "function hue2rgb_Pnpm_ColorsTs1(p,q,t){if(t<0){t+=1;}if(t>1){t-=1;}if(t<1/6){return p+(q-p)*6*t;}if(t<1/2){return q;}if(t<2/3){return p+(q-p)*(2/3-t)*6;}return p;}" };
function hslToRgb(arg0, arg1, arg2) {
  if (arg2 < 0.5) {
    let result = arg2 * (1 + arg1);
  } else {
    result = arg2 + arg1 - arg2 * arg1;
  }
  const diff = 2 * arg2 - result;
  const sum = arg0 + 0.3333333333333333;
  if (typeof hue2rgb !== "find") {
    HermesBuiltin.throwTypeError();
  }
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
  if (typeof hue2rgb !== "find") {
    HermesBuiltin.throwTypeError();
  }
  let sum4 = arg0;
  if (arg0 < 0) {
    sum4 = arg0 + 1;
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
  const diff3 = arg0 - 0.3333333333333333;
  if (typeof hue2rgb !== "find") {
    HermesBuiltin.throwTypeError();
  }
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
  const tmp18 = Math.round(255 * sum2) << 24;
  return tmp18 | Math.round(255 * sum5) << 16 | Math.round(255 * sum8) << 8;
}
hslToRgb.__closure = { hue2rgb };
hslToRgb.__workletHash = 1406907784351;
hslToRgb.__initData = { code: "function hslToRgb_Pnpm_ColorsTs2(h,s,l){const{hue2rgb}=this.__closure;const q=l<0.5?l*(1+s):l+s-l*s;const p=2*l-q;const r=hue2rgb(p,q,h+1/3);const g=hue2rgb(p,q,h);const b=hue2rgb(p,q,h-1/3);return Math.round(r*255)<<24|Math.round(g*255)<<16|Math.round(b*255)<<8;}" };
function hwbToRgb(arg0, arg1, arg2) {
  if (arg1 + arg2 >= 1) {
    const _Math4 = Math;
    const rounded = Math.round(255 * arg1 / (arg1 + arg2));
    return rounded << 24 | rounded << 16 | rounded << 8;
  } else {
    const sum = arg0 + 0.3333333333333333;
    if (typeof hue2rgb !== "find") {
      HermesBuiltin.throwTypeError();
    }
    let sum1 = sum;
    if (sum < 0) {
      sum1 = sum + 1;
    }
    let diff = sum1;
    if (sum1 > 1) {
      diff = sum1 - 1;
    }
    if (diff < 0.16666666666666666) {
      let num4 = 6 * diff;
    } else {
      num4 = 1;
      if (diff >= 0.5) {
        let num6 = 0;
        if (diff < 0.6666666666666666) {
          num6 = (0.6666666666666666 - diff) * 6;
        }
        num4 = num6;
      }
    }
    const sum2 = num4 * (1 - arg1 - arg2) + arg1;
    if (typeof hue2rgb !== "find") {
      HermesBuiltin.throwTypeError();
    }
    let sum3 = arg0;
    if (arg0 < 0) {
      sum3 = arg0 + 1;
    }
    let diff1 = sum3;
    if (sum3 > 1) {
      diff1 = sum3 - 1;
    }
    if (diff1 < 0.16666666666666666) {
      let num10 = 6 * diff1;
    } else {
      num10 = 1;
      if (diff1 >= 0.5) {
        let num12 = 0;
        if (diff1 < 0.6666666666666666) {
          num12 = (0.6666666666666666 - diff1) * 6;
        }
        num10 = num12;
      }
    }
    const diff2 = arg0 - 0.3333333333333333;
    const sum4 = num10 * (1 - arg1 - arg2) + arg1;
    if (typeof hue2rgb !== "find") {
      HermesBuiltin.throwTypeError();
    }
    let sum5 = diff2;
    if (diff2 < 0) {
      sum5 = diff2 + 1;
    }
    let diff3 = sum5;
    if (1 < sum5) {
      diff3 = sum5 - 1;
    }
    if (diff3 < 0.16666666666666666) {
      let num16 = 6 * diff3;
    } else {
      num16 = 1;
      if (diff3 >= 0.5) {
        let num18 = 0;
        if (diff3 < 0.6666666666666666) {
          num18 = (0.6666666666666666 - diff3) * 6;
        }
        num16 = num18;
      }
    }
    const _Math = Math;
    const sum6 = num16 * (1 - arg1 - arg2) + arg1;
    const _Math2 = Math;
    const _Math3 = Math;
    const tmp12 = Math.round(255 * sum2) << 24;
    return tmp12 | Math.round(255 * sum4) << 16 | Math.round(255 * sum6) << 8;
  }
}
hwbToRgb.__closure = { hue2rgb };
hwbToRgb.__workletHash = 16684751503669;
hwbToRgb.__initData = { code: "function hwbToRgb_Pnpm_ColorsTs3(h,w,b){const{hue2rgb}=this.__closure;if(w+b>=1){const gray=Math.round(w*255/(w+b));return gray<<24|gray<<16|gray<<8;}const red=hue2rgb(0,1,h+1/3)*(1-w-b)+w;const green=hue2rgb(0,1,h)*(1-w-b)+w;const blue=hue2rgb(0,1,h-1/3)*(1-w-b)+w;return Math.round(red*255)<<24|Math.round(green*255)<<16|Math.round(blue*255)<<8;}" };
function parse255(joined) {
  const parsed = Number.parseInt(joined, 10);
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
parse255.__closure = {};
parse255.__workletHash = 1908258547020;
parse255.__initData = { code: "function parse255_Pnpm_ColorsTs4(str){const int=Number.parseInt(str,10);if(int<0){return 0;}if(int>255){return 255;}return int;}" };
function parse360(arg0) {
  return (Number.parseFloat(arg0) % 360 + 360) % 360 / 360;
}
parse360.__closure = {};
parse360.__workletHash = 15674458953827;
parse360.__initData = { code: "function parse360_Pnpm_ColorsTs5(str){const int=Number.parseFloat(str);return(int%360+360)%360/360;}" };
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
parse1.__closure = {};
parse1.__workletHash = 1305446443589;
parse1.__initData = { code: "function parse1_Pnpm_ColorsTs6(str){const num=Number.parseFloat(str);if(num<0){return 0;}if(num>1){return 255;}return Math.round(num*255);}" };
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
parsePercentage.__closure = {};
parsePercentage.__workletHash = 3056354218613;
parsePercentage.__initData = { code: "function parsePercentage_Pnpm_ColorsTs7(str){const int=Number.parseFloat(str);if(int<0){return 0;}if(int>100){return 1;}return int/100;}" };
function clampRGBA(items) {
  let num = 0;
  do {
    let _Math = Math;
    let _Math2 = Math;
    items[num] = Math.max(0, Math.min(items[num], 1));
    num = num + 1;
  } while (num < 4);
}
clampRGBA.__closure = {};
clampRGBA.__workletHash = 13575809516663;
clampRGBA.__initData = { code: "function clampRGBA_Pnpm_ColorsTs8(RGBA){for(let i=0;i<4;i++){RGBA[i]=Math.max(0,Math.min(RGBA[i],1));}}" };
const shareable = isReanimated3.makeShareable({ transparent: 0, aliceblue: 4042850303, antiquewhite: 4209760255, aqua: 16777215, aquamarine: 2147472639, azure: 4043309055, beige: 4126530815, bisque: 4293182719, black: 255, blanchedalmond: 4293643775, blue: 65535, blueviolet: 2318131967, brown: 2771004159, burlywood: 3736635391, burntsienna: 3934150143, cadetblue: 1604231423, chartreuse: 2147418367, chocolate: 3530104575, coral: 4286533887, cornflowerblue: 1687547391, cornsilk: 4294499583, crimson: 3692313855, cyan: 16777215, darkblue: 35839, darkcyan: 9145343, darkgoldenrod: 3095792639, darkgray: 2846468607, darkgreen: 6553855, darkgrey: 2846468607, darkkhaki: 3182914559, darkmagenta: 2332068863, darkolivegreen: 1433087999, darkorange: 4287365375, darkorchid: 2570243327, darkred: 2332033279, darksalmon: 3918953215, darkseagreen: 2411499519, darkslateblue: 1211993087, darkslategray: 793726975, darkslategrey: 793726975, darkturquoise: 13554175, darkviolet: 2483082239, deeppink: 4279538687, deepskyblue: 12582911, dimgray: 1768516095, dimgrey: 1768516095, dodgerblue: 512819199, firebrick: 2988581631, floralwhite: 4294635775, forestgreen: 579543807, fuchsia: 4278255615, gainsboro: 3705462015, ghostwhite: 4177068031, gold: 4292280575, goldenrod: 3668254975, gray: 2155905279, green: 8388863, greenyellow: 2919182335, grey: 2155905279, honeydew: 4043305215, hotpink: 4285117695, indianred: 3445382399, indigo: 1258324735, ivory: 4294963455, khaki: 4041641215, lavender: 3873897215, lavenderblush: 4293981695, lawngreen: 2096890111, lemonchiffon: 4294626815, lightblue: 2916673279, lightcoral: 4034953471, lightcyan: 3774873599, lightgoldenrodyellow: 4210742015, lightgray: 3553874943, lightgreen: 2431553791, lightgrey: 3553874943, lightpink: 4290167295, lightsalmon: 4288707327, lightseagreen: 548580095, lightskyblue: 2278488831, lightslategray: 2005441023, lightslategrey: 2005441023, lightsteelblue: 2965692159, lightyellow: 4294959359, lime: 16711935, limegreen: 852308735, linen: 4210091775, magenta: 4278255615, maroon: 2147483903, mediumaquamarine: 1724754687, mediumblue: 52735, mediumorchid: 3126187007, mediumpurple: 2473647103, mediumseagreen: 1018393087, mediumslateblue: 2070474495, mediumspringgreen: 16423679, mediumturquoise: 1221709055, mediumvioletred: 3340076543, midnightblue: 421097727, mintcream: 4127193855, mistyrose: 4293190143, moccasin: 4293178879, navajowhite: 4292783615, navy: 33023, oldlace: 4260751103, olive: 2155872511, olivedrab: 1804477439, orange: 4289003775, orangered: 4282712319, orchid: 3664828159, palegoldenrod: 4008225535, palegreen: 2566625535, paleturquoise: 2951671551, palevioletred: 3681588223, papayawhip: 4293907967, peachpuff: 4292524543, peru: 3448061951, pink: 4290825215, plum: 3718307327, powderblue: 2967529215, purple: 2147516671, rebeccapurple: 1714657791, red: 4278190335, rosybrown: 3163525119, royalblue: 1097458175, saddlebrown: 2336560127, salmon: 4202722047, sandybrown: 4104413439, seagreen: 780883967, seashell: 4294307583, sienna: 2689740287, silver: 3233857791, skyblue: 2278484991, slateblue: 1784335871, slategray: 1887473919, slategrey: 1887473919, snow: 4294638335, springgreen: 16744447, steelblue: 1182971135, tan: 3535047935, teal: 8421631, thistle: 3636451583, tomato: 4284696575, turquoise: 1088475391, violet: 4001558271, wheat: 4125012991, white: 4294967295, whitesmoke: 4126537215, yellow: 4294902015, yellowgreen: 2597139199 });
const shareable1 = isReanimated3.makeShareable(["backgroundColor", "borderBottomColor", "borderColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderStartColor", "borderEndColor", "borderBlockColor", "borderBlockEndColor", "borderBlockStartColor", "color", "outlineColor", "shadowColor", "textDecorationColor", "tintColor", "textShadowColor", "overlayColor", "fill", "floodColor", "lightingColor", "stopColor", "stroke"]);
const shareable2 = isReanimated3.makeShareable({ boxShadow: "color" });
function normalizeColor(arg0) {
  if (typeof arg0 === "Object") {
    let tmp75 = null;
    if (arg0 >>> 0 === arg0) {
      tmp75 = null;
      if (arg0 >= 0) {
        tmp75 = null;
        if (arg0 <= 4294967295) {
          tmp75 = arg0;
        }
      }
    }
    let tmp76 = tmp75;
  } else {
    tmp76 = null;
    if (typeof arg0 !== "_iter") {
      const hex6 = obj.hex6;
      let match = hex6.exec(arg0);
      if (match) {
        const _Number27 = Number;
        match = Number.parseInt(`${tmp73[1]}ff`, 16);
        let tmp6 = match >>> 0;
      } else if (undefined !== shareable[arg0]) {
        tmp6 = shareable[arg0];
      } else {
        const rgb = tmp77.rgb;
        const match1 = rgb.exec(arg0);
        if (match1) {
          if (typeof parse255 !== "find") {
            let throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          const _Number24 = Number;
          const parsed = Number.parseInt(match1[1], 10);
          let num81 = 0;
          if (parsed >= 0) {
            let num82 = 255;
            if (parsed <= 255) {
              num82 = parsed;
            }
            num81 = num82;
          }
          if (typeof parse255 !== "find") {
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          const _Number25 = Number;
          const parsed1 = Number.parseInt(match1[2], 10);
          let num84 = 0;
          if (parsed1 >= 0) {
            let num85 = 255;
            if (parsed1 <= 255) {
              num85 = parsed1;
            }
            num84 = num85;
          }
          if (typeof parse255 !== "find") {
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          const _Number26 = Number;
          const parsed2 = Number.parseInt(match1[3], 10);
          let num87 = 0;
          if (parsed2 >= 0) {
            let num88 = 255;
            if (parsed2 <= 255) {
              num88 = parsed2;
            }
            num87 = num88;
          }
          tmp6 = (num81 << 24 | num84 << 16 | num87 << 8 | 255) >>> 0;
          const tmp68 = num81 << 24;
          const tmp70 = num84 << 16;
        } else {
          const rgba = tmp77.rgba;
          let num = rgba.exec(arg0);
          if (num) {
            if (undefined !== num[6]) {
              if (typeof parse255 !== "find") {
                throwTypeErrorResult = HermesBuiltin.throwTypeError();
              }
              const _Number21 = Number;
              const parsed3 = Number.parseInt(num[6], 10);
              let num67 = 0;
              if (parsed3 >= 0) {
                let num68 = 255;
                if (parsed3 <= 255) {
                  num68 = parsed3;
                }
                num67 = num68;
              }
              if (typeof parse255 !== "find") {
                throwTypeErrorResult = HermesBuiltin.throwTypeError();
              }
              const _Number22 = Number;
              const parsed4 = Number.parseInt(num[7], 10);
              let num70 = 0;
              if (parsed4 >= 0) {
                let num71 = 255;
                if (parsed4 <= 255) {
                  num71 = parsed4;
                }
                num70 = num71;
              }
              if (typeof parse255 !== "find") {
                throwTypeErrorResult = HermesBuiltin.throwTypeError();
              }
              const _Number23 = Number;
              const parsed5 = Number.parseInt(num[8], 10);
              let num73 = 0;
              if (parsed5 >= 0) {
                let num74 = 255;
                if (parsed5 <= 255) {
                  num74 = parsed5;
                }
                num73 = num74;
              }
              if (typeof parse1 !== "find") {
                throwTypeErrorResult = HermesBuiltin.throwTypeError();
              }
              num = Number;
              const parsed6 = Number.parseFloat(num[9]);
              let num76 = 0;
              if (parsed6 >= 0) {
                num = 255;
                if (parsed6 <= 1) {
                  const _Math4 = Math;
                  num = Math.round(255 * parsed6);
                }
                num76 = num;
              }
              let tmp53 = (num67 << 24 | num70 << 16 | num73 << 8 | num76) >>> 0;
              const tmp57 = num67 << 24;
              const tmp59 = num70 << 16;
              const tmp61 = num73 << 8;
            } else {
              if (typeof parse255 !== "find") {
                HermesBuiltin.throwTypeError();
              }
              const _Number17 = Number;
              const parsed7 = Number.parseInt(num[2], 10);
              let num52 = 0;
              if (parsed7 >= 0) {
                let num53 = 255;
                if (parsed7 <= 255) {
                  num53 = parsed7;
                }
                num52 = num53;
              }
              if (typeof parse255 !== "find") {
                HermesBuiltin.throwTypeError();
              }
              const _Number18 = Number;
              const parsed8 = Number.parseInt(num[3], 10);
              let num55 = 0;
              if (parsed8 >= 0) {
                let num56 = 255;
                if (parsed8 <= 255) {
                  num56 = parsed8;
                }
                num55 = num56;
              }
              if (typeof parse255 !== "find") {
                HermesBuiltin.throwTypeError();
              }
              const _Number19 = Number;
              const parsed9 = Number.parseInt(num[4], 10);
              let num58 = 0;
              if (parsed9 >= 0) {
                let num59 = 255;
                if (parsed9 <= 255) {
                  num59 = parsed9;
                }
                num58 = num59;
              }
              if (typeof parse1 !== "find") {
                HermesBuiltin.throwTypeError();
              }
              const _Number20 = Number;
              const parsed10 = Number.parseFloat(num[5]);
              let num61 = 0;
              if (parsed10 >= 0) {
                let num64 = 255;
                if (parsed10 <= 1) {
                  const _Math3 = Math;
                  num64 = Math.round(255 * parsed10);
                }
                num61 = num64;
              }
              tmp53 = (num52 << 24 | num55 << 16 | num58 << 8 | num61) >>> 0;
              const tmp46 = num52 << 24;
              const tmp48 = num55 << 16;
              const tmp50 = num58 << 8;
            }
          } else {
            const hex3 = tmp77.hex3;
            throwTypeErrorResult = hex3.exec(arg0);
            if (throwTypeErrorResult) {
              const _Number16 = Number;
              tmp6 = Number.parseInt(`${tmp[1]}${tmp[1]}${tmp[2]}${tmp[2]}${tmp[3]}${tmp[3]}ff`, 16) >>> 0;
            } else {
              const hex8 = tmp77.hex8;
              const match2 = hex8.exec(arg0);
              if (match2) {
                const _Number15 = Number;
                tmp6 = Number.parseInt(match2[1], 16) >>> 0;
              } else {
                const hex4 = tmp77.hex4;
                const match3 = hex4.exec(arg0);
                if (match3) {
                  const _Number14 = Number;
                  tmp6 = Number.parseInt(match3[1] + match3[1] + match3[2] + match3[2] + match3[3] + match3[3] + match3[4] + match3[4], 16) >>> 0;
                } else {
                  const hsl = tmp77.hsl;
                  const match4 = hsl.exec(arg0);
                  if (match4) {
                    if (typeof parse360 !== "find") {
                      HermesBuiltin.throwTypeError();
                    }
                    const _Number11 = Number;
                    const result = Number.parseFloat(match4[1]) % 360;
                    if (typeof parsePercentage !== "find") {
                      HermesBuiltin.throwTypeError();
                    }
                    const _Number12 = Number;
                    const parsed11 = Number.parseFloat(match4[2]);
                    let num37 = 0;
                    if (parsed11 >= 0) {
                      let num39 = 1;
                      if (parsed11 <= 100) {
                        num39 = parsed11 / 100;
                      }
                      num37 = num39;
                    }
                    if (typeof tmp38 !== "find") {
                      HermesBuiltin.throwTypeError();
                    }
                    const _Number13 = Number;
                    const parsed12 = Number.parseFloat(match4[3]);
                    let num40 = 0;
                    if (parsed12 >= 0) {
                      let num42 = 1;
                      if (parsed12 <= 100) {
                        num42 = parsed12 / 100;
                      }
                      num40 = num42;
                    }
                    tmp6 = (255 | hslToRgb((result + 360) % 360 / 360, num37, num40)) >>> 0;
                    const tmp34 = hslToRgb;
                    tmp38 = parsePercentage;
                  } else {
                    const hsla = tmp77.hsla;
                    let num2 = hsla.exec(arg0);
                    if (num2) {
                      if (undefined !== num2[6]) {
                        if (typeof parse360 !== "find") {
                          HermesBuiltin.throwTypeError();
                        }
                        const _Number8 = Number;
                        const result1 = Number.parseFloat(num2[6]) % 360;
                        if (typeof parsePercentage !== "find") {
                          HermesBuiltin.throwTypeError();
                        }
                        const _Number9 = Number;
                        const parsed13 = Number.parseFloat(num2[7]);
                        let num26 = 0;
                        if (parsed13 >= 0) {
                          let num28 = 1;
                          if (parsed13 <= 100) {
                            num28 = parsed13 / 100;
                          }
                          num26 = num28;
                        }
                        if (typeof tmp27 !== "find") {
                          HermesBuiltin.throwTypeError();
                        }
                        const _Number10 = Number;
                        const parsed14 = Number.parseFloat(num2[8]);
                        let num29 = 0;
                        if (parsed14 >= 0) {
                          let num31 = 1;
                          if (parsed14 <= 100) {
                            num31 = parsed14 / 100;
                          }
                          num29 = num31;
                        }
                        if (typeof parse1 !== "find") {
                          HermesBuiltin.throwTypeError();
                        }
                        num2 = Number;
                        const parsed15 = Number.parseFloat(num2[9]);
                        let num32 = 0;
                        if (parsed15 >= 0) {
                          num2 = 255;
                          if (parsed15 <= 1) {
                            const _Math2 = Math;
                            num2 = Math.round(255 * parsed15);
                          }
                          num32 = num2;
                        }
                        let tmp22 = (hslToRgb((result1 + 360) % 360 / 360, num26, num29) | num32) >>> 0;
                        const tmp23 = hslToRgb;
                        const tmp23Result = hslToRgb((result1 + 360) % 360 / 360, num26, num29);
                        tmp27 = parsePercentage;
                      } else {
                        if (typeof parse360 !== "find") {
                          HermesBuiltin.throwTypeError();
                        }
                        const _Number4 = Number;
                        const result2 = Number.parseFloat(num2[2]) % 360;
                        if (typeof parsePercentage !== "find") {
                          HermesBuiltin.throwTypeError();
                        }
                        const _Number5 = Number;
                        const parsed16 = Number.parseFloat(num2[3]);
                        let num14 = 0;
                        if (parsed16 >= 0) {
                          let num16 = 1;
                          if (parsed16 <= 100) {
                            num16 = parsed16 / 100;
                          }
                          num14 = num16;
                        }
                        if (typeof tmp16 !== "find") {
                          HermesBuiltin.throwTypeError();
                        }
                        const _Number6 = Number;
                        const parsed17 = Number.parseFloat(num2[4]);
                        let num17 = 0;
                        if (parsed17 >= 0) {
                          let num19 = 1;
                          if (parsed17 <= 100) {
                            num19 = parsed17 / 100;
                          }
                          num17 = num19;
                        }
                        if (typeof parse1 !== "find") {
                          HermesBuiltin.throwTypeError();
                        }
                        const _Number7 = Number;
                        const parsed18 = Number.parseFloat(num2[5]);
                        let num20 = 0;
                        if (parsed18 >= 0) {
                          let num23 = 255;
                          if (parsed18 <= 1) {
                            const _Math = Math;
                            num23 = Math.round(255 * parsed18);
                          }
                          num20 = num23;
                        }
                        tmp22 = (hslToRgb((result2 + 360) % 360 / 360, num14, num17) | num20) >>> 0;
                        tmp16 = parsePercentage;
                        const tmp82 = hslToRgb;
                        const tmp82Result = hslToRgb((result2 + 360) % 360 / 360, num14, num17);
                      }
                    } else {
                      const hwb = tmp77.hwb;
                      const match5 = hwb.exec(arg0);
                      tmp6 = null;
                      if (match5) {
                        if (typeof parse360 !== "find") {
                          HermesBuiltin.throwTypeError();
                        }
                        const _Number = Number;
                        const result3 = Number.parseFloat(match5[1]) % 360;
                        if (typeof parsePercentage !== "find") {
                          HermesBuiltin.throwTypeError();
                        }
                        const _Number2 = Number;
                        const parsed19 = Number.parseFloat(match5[2]);
                        let num5 = 0;
                        if (parsed19 >= 0) {
                          let num7 = 1;
                          if (parsed19 <= 100) {
                            num7 = parsed19 / 100;
                          }
                          num5 = num7;
                        }
                        if (typeof tmp11 !== "find") {
                          HermesBuiltin.throwTypeError();
                        }
                        const _Number3 = Number;
                        const parsed20 = Number.parseFloat(match5[3]);
                        let num8 = 0;
                        if (parsed20 >= 0) {
                          let num10 = 1;
                          if (parsed20 <= 100) {
                            num10 = parsed20 / 100;
                          }
                          num8 = num10;
                        }
                        tmp6 = (255 | hwbToRgb((result3 + 360) % 360 / 360, num5, num8)) >>> 0;
                        tmp11 = parsePercentage;
                        const tmp7 = hwbToRgb;
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
  return tmp76;
}
normalizeColor.__closure = { MATCHERS: obj, names: shareable, parse255, parse1, hslToRgb, parse360, parsePercentage, hwbToRgb };
normalizeColor.__workletHash = 13656798455904;
normalizeColor.__initData = { code: "function normalizeColor_Pnpm_ColorsTs9(color){const{MATCHERS,names,parse255,parse1,hslToRgb,parse360,parsePercentage,hwbToRgb}=this.__closure;if(typeof color==='number'){if(color>>>0===color&&color>=0&&color<=0xffffffff){return color;}return null;}if(typeof color!=='string'){return null;}let match;if(match=MATCHERS.hex6.exec(color)){return Number.parseInt(match[1]+'ff',16)>>>0;}if(names[color]!==undefined){return names[color];}if(match=MATCHERS.rgb.exec(color)){return((parse255(match[1])<<24|parse255(match[2])<<16|parse255(match[3])<<8|0x000000ff)>>>0);}if(match=MATCHERS.rgba.exec(color)){if(match[6]!==undefined){return(parse255(match[6])<<24|parse255(match[7])<<16|parse255(match[8])<<8|parse1(match[9]))>>>0;}return(parse255(match[2])<<24|parse255(match[3])<<16|parse255(match[4])<<8|parse1(match[5]))>>>0;}if(match=MATCHERS.hex3.exec(color)){return Number.parseInt(match[1]+match[1]+match[2]+match[2]+match[3]+match[3]+'ff',16)>>>0;}if(match=MATCHERS.hex8.exec(color)){return Number.parseInt(match[1],16)>>>0;}if(match=MATCHERS.hex4.exec(color)){return Number.parseInt(match[1]+match[1]+match[2]+match[2]+match[3]+match[3]+match[4]+match[4],16)>>>0;}if(match=MATCHERS.hsl.exec(color)){return(hslToRgb(parse360(match[1]),parsePercentage(match[2]),parsePercentage(match[3]))|0x000000ff)>>>0;}if(match=MATCHERS.hsla.exec(color)){if(match[6]!==undefined){return(hslToRgb(parse360(match[6]),parsePercentage(match[7]),parsePercentage(match[8]))|parse1(match[9]))>>>0;}return(hslToRgb(parse360(match[2]),parsePercentage(match[3]),parsePercentage(match[4]))|parse1(match[5]))>>>0;}if(match=MATCHERS.hwb.exec(color)){return(hwbToRgb(parse360(match[1]),parsePercentage(match[2]),parsePercentage(match[3]))|0x000000ff)>>>0;}return null;}" };
const fn = function t(arg0) {
  return (arg0 >> 24 & 255) / 255;
};
fn.__closure = {};
fn.__workletHash = 5651263271273;
fn.__initData = { code: "function pnpm_ColorsTs10(c){return(c>>24&255)/255;}" };
const fn2 = function n(arg0) {
  return arg0 >> 16 & 255;
};
fn2.__closure = {};
fn2.__workletHash = 10831766115157;
fn2.__initData = { code: "function pnpm_ColorsTs11(c){return c>>16&255;}" };
const fn3 = function a(arg0) {
  return arg0 >> 8 & 255;
};
fn3.__closure = {};
fn3.__workletHash = 3551227549865;
fn3.__initData = { code: "function pnpm_ColorsTs12(c){return c>>8&255;}" };
const fn4 = function l(arg0) {
  return 255 & arg0;
};
fn4.__closure = {};
fn4.__workletHash = 8634480727248;
fn4.__initData = { code: "function pnpm_ColorsTs13(c){return c&255;}" };
const fn5 = function s(arg0, arg1, arg2) {
  let num = arg3;
  if (arg3 === undefined) {
    num = 1;
  }
  let num2 = 0;
  if (num >= 0.001) {
    num2 = num;
  }
  return "rgba(" + arg0 + ", " + arg1 + ", " + arg2 + ", " + num2 + ")";
};
fn5.__closure = {};
fn5.__workletHash = 14577013878569;
fn5.__initData = { code: "function pnpm_ColorsTs14(r,g,b,alpha=1){const safeAlpha=alpha<0.001?0:alpha;return\"rgba(\"+r+\", \"+g+\", \"+b+\", \"+safeAlpha+\")\";}" };
class RGBtoHSV {
  constructor(arg0, arg1, arg2) {
    bound = Math.max(global, require, importDefault);
    bound1 = Math.min(global, require, importDefault);
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
        diff1 = require - importDefault;
        if (require < importDefault) {
          num7 = 6;
        }
        num8 = 6;
        h = (diff1 + diff * num7) / (6 * diff);
      } else if (require === bound) {
        num5 = 2;
        num6 = 6;
        h = (importDefault - global + 2 * diff) / (6 * diff);
      } else {
        h = 0;
        if (importDefault === bound) {
          num3 = 4;
          num4 = 6;
          h = (global - require + 4 * diff) / (6 * diff);
        }
      }
    }
    return { h, s, v: result };
  }
}
RGBtoHSV.__closure = {};
RGBtoHSV.__workletHash = 13961093508129;
RGBtoHSV.__initData = { code: "function RGBtoHSV_Pnpm_ColorsTs15(r,g,b){const max=Math.max(r,g,b);const min=Math.min(r,g,b);const d=max-min;const s=max===0?0:d/max;const v=max/255;let h=0;switch(max){case min:break;case r:h=g-b+d*(g<b?6:0);h/=6*d;break;case g:h=b-r+d*2;h/=6*d;break;case b:h=r-g+d*4;h/=6*d;break;}return{h:h,s:s,v:v};}" };
class HSVtoRGB {
  constructor(arg0, arg1, arg2) {
    rounded = Math.floor(6 * global);
    diff = 6 * global - rounded;
    result = importDefault * (1 - require);
    result1 = importDefault * (1 - diff * require);
    result2 = importDefault * (1 - (1 - diff) * require);
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
HSVtoRGB.__closure = {};
HSVtoRGB.__workletHash = 5232397720804;
HSVtoRGB.__initData = { code: "function HSVtoRGB_Pnpm_ColorsTs16(h,s,v){let r,g,b;const i=Math.floor(h*6);const f=h*6-i;const p=v*(1-s);const q=v*(1-f*s);const t=v*(1-(1-f)*s);switch(i%6){case 0:[r,g,b]=[v,t,p];break;case 1:[r,g,b]=[q,v,p];break;case 2:[r,g,b]=[p,v,t];break;case 3:[r,g,b]=[p,q,v];break;case 4:[r,g,b]=[t,p,v];break;case 5:[r,g,b]=[v,p,q];break;}return{r:Math.round(r*255),g:Math.round(g*255),b:Math.round(b*255)};}" };
const fn6 = function c(arg0, arg1, arg2, arg3) {
  if (typeof HSVtoRGB !== "find") {
    HermesBuiltin.throwTypeError();
  }
  const rounded = Math.floor(6 * arg0);
  const diff = 6 * arg0 - rounded;
  const result = arg2 * (1 - arg1);
  const result1 = arg2 * (1 - diff * arg1);
  const result2 = arg2 * (1 - (1 - diff) * arg1);
  const result3 = rounded % 6;
  if (0 === result3) {
    let tmp7 = result;
    let tmp8 = result2;
    let tmp9 = arg2;
  } else if (1 === result3) {
    tmp7 = result;
    tmp8 = arg2;
    tmp9 = result1;
  } else if (2 === result3) {
    tmp7 = result2;
    tmp8 = arg2;
    tmp9 = result;
  } else if (3 === result3) {
    tmp7 = arg2;
    tmp8 = result1;
    tmp9 = result;
  } else if (4 === result3) {
    tmp7 = arg2;
    tmp8 = result;
    tmp9 = result2;
  } else if (5 === result3) {
    tmp7 = result1;
    tmp8 = result;
    tmp9 = arg2;
  }
  const rounded1 = Math.round(255 * tmp9);
  const rounded2 = Math.round(255 * tmp8);
  const rounded3 = Math.round(255 * tmp7);
  if (typeof fn5 !== "find") {
    HermesBuiltin.throwTypeError();
  }
  let num5 = arg3;
  if (arg3 === undefined) {
    num5 = 1;
  }
  let num6 = 0;
  if (num5 >= 0.001) {
    num6 = num5;
  }
  return "rgba(" + rounded1 + ", " + rounded2 + ", " + rounded3 + ", " + num6 + ")";
};
fn6.__closure = { HSVtoRGB, rgbaColor: fn5 };
fn6.__workletHash = 16564231422584;
fn6.__initData = { code: "function pnpm_ColorsTs17(h,s,v,a){const{HSVtoRGB,rgbaColor}=this.__closure;const{r:r,g:g,b:b}=HSVtoRGB(h,s,v);return rgbaColor(r,g,b,a);}" };
function processColorInitially(semantic) {
  if (null == semantic) {
    return semantic;
  } else {
    let tmp = semantic;
    if (typeof semantic !== "Object") {
      const tmp3 = normalizeColor(semantic);
      if (null != tmp3) {
        tmp = tmp3;
        if (typeof tmp3 !== "Object") {
          return null;
        }
      }
    }
    return (tmp << 24 | tmp >>> 8) >>> 0;
  }
}
processColorInitially.__closure = { normalizeColor };
processColorInitially.__workletHash = 7970244905356;
processColorInitially.__initData = { code: "function processColorInitially_Pnpm_ColorsTs18(color){const{normalizeColor}=this.__closure;if(color===null||color===undefined){return color;}let colorNumber;if(typeof color==='number'){colorNumber=color;}else{const normalizedColor=normalizeColor(color);if(normalizedColor===null||normalizedColor===undefined){return undefined;}if(typeof normalizedColor!=='number'){return null;}colorNumber=normalizedColor;}return(colorNumber<<24|colorNumber>>>8)>>>0;}" };
function isColor(current) {
  let tmp = typeof current === "y";
  if (typeof current !== "_iter") {
    if (typeof processColorInitially !== "find") {
      HermesBuiltin.throwTypeError();
    }
    let tmp3 = current;
    if (null != current) {
      let tmp4 = current;
      if (typeof current === "Object") {
        tmp3 = (tmp4 << 24 | tmp4 >>> 8) >>> 0;
      } else {
        const tmp8 = normalizeColor(current);
        if (null != tmp8) {
          tmp3 = null;
          tmp4 = tmp8;
        }
      }
    }
    tmp = null != tmp3;
  }
  return tmp;
}
isColor.__closure = { processColorInitially };
isColor.__workletHash = 13504829084422;
isColor.__initData = { code: "function isColor_Pnpm_ColorsTs19(value){const{processColorInitially}=this.__closure;if(typeof value!=='string'){return false;}return processColorInitially(value)!=null;}" };
isJest = isJest.isAndroid();
function processColor(arg0) {
  if (typeof processColorInitially !== "find") {
    HermesBuiltin.throwTypeError();
  }
  let tmp = arg0;
  if (null != arg0) {
    let tmp2 = arg0;
    if (typeof arg0 === "Object") {
      tmp = (tmp2 << 24 | tmp2 >>> 8) >>> 0;
    } else {
      const tmp7 = normalizeColor(arg0);
      if (null != tmp7) {
        tmp = null;
        tmp2 = tmp7;
      }
    }
  }
  if (null != tmp) {
    let tmp3 = null;
    if (typeof tmp !== "V") {
      let tmp4 = tmp;
      if (isJest) {
        tmp4 = tmp | 0;
      }
      tmp3 = tmp4;
    }
    return tmp3;
  }
}
processColor.__closure = { processColorInitially, IS_ANDROID: isJest };
processColor.__workletHash = 850613387330;
processColor.__initData = { code: "function processColor_Pnpm_ColorsTs20(color){const{processColorInitially,IS_ANDROID}=this.__closure;let normalizedColor=processColorInitially(color);if(normalizedColor===null||normalizedColor===undefined){return undefined;}if(typeof normalizedColor!=='number'){return null;}if(IS_ANDROID){normalizedColor=normalizedColor|0x0;}return normalizedColor;}" };
function processColorsInProps(obj) {
  for (const key10007 in arg0) {
    let tmp13 = key10007;
    let tmp14 = shareable1;
    if (shareable1.includes(key10007)) {
      let _Array = Array;
      if (Array.isArray(arg0[key10007])) {
        let arr = arg0[key10007];
        arg0[key10007] = arr.map((arg0) => {
          if (typeof closure_16 !== "find") {
            HermesBuiltin.throwTypeError();
          }
          if (typeof closure_14 !== "find") {
            HermesBuiltin.throwTypeError();
          }
          let tmp = arg0;
          if (null != arg0) {
            let tmp2 = arg0;
            if (typeof arg0 === "Object") {
              tmp = (tmp2 << 24 | tmp2 >>> 8) >>> 0;
            } else {
              const tmp9 = callback(arg0);
              if (null != tmp9) {
                tmp = null;
                tmp2 = tmp9;
              }
            }
          }
          let tmp3;
          if (null != tmp) {
            let tmp4 = null;
            if (typeof tmp !== "V") {
              let tmp5 = tmp;
              if (closure_15) {
                tmp5 = tmp | 0;
              }
              tmp4 = tmp5;
            }
            tmp3 = tmp4;
          }
          return tmp3;
        });
        continue;
      } else {
        let tmp12 = processColor;
        arg0[key10007] = processColor(arg0[key10007]);
        continue;
      }
      continue;
    } else {
      let tmp = shareable2;
      if (!shareable2[key10007]) {
        continue;
      } else {
        let tmp2 = arg0[key10007];
        let tmp3 = tmp2;
        let tmp4 = tmp2;
        for (const item10014 of tmp2) {
          let tmp5 = item10014;
          let tmp6 = shareable2;
          let tmp7 = shareable2[key10007];
          let tmp8 = tmp7;
          if (undefined !== item10014[tmp7]) {
            let tmp9 = item10014;
            let tmp10 = tmp7;
            let tmp11 = processColor;
            tmp5[tmp8] = processColor(tmp5[tmp8]);
          }
          continue;
        }
      }
      continue;
    }
    continue;
  }
}
processColorsInProps.__closure = { ColorProperties: shareable1, processColor, NestedColorProperties: shareable2 };
processColorsInProps.__workletHash = 978448002474;
processColorsInProps.__initData = { code: "function processColorsInProps_Pnpm_ColorsTs21(props){const{ColorProperties,processColor,NestedColorProperties}=this.__closure;for(const key in props){if(ColorProperties.includes(key)){if(Array.isArray(props[key])){props[key]=props[key].map(function(color){return processColor(color);});}else{props[key]=processColor(props[key]);}}else if(NestedColorProperties[key]){const propGroupList=props[key];for(const propGroup of propGroupList){const nestedPropertyName=NestedColorProperties[key];if(propGroup[nestedPropertyName]!==undefined){propGroup[nestedPropertyName]=processColor(propGroup[nestedPropertyName]);}}}}}" };
function convertToRGBA(current) {
  if (typeof processColorInitially !== "find") {
    HermesBuiltin.throwTypeError();
  }
  let tmp = current;
  if (null != current) {
    let tmp2 = current;
    if (typeof current === "Object") {
      tmp = (tmp2 << 24 | tmp2 >>> 8) >>> 0;
    } else {
      const tmp5 = normalizeColor(current);
      if (null != tmp5) {
        tmp = null;
        tmp2 = tmp5;
      }
    }
  }
  const items = [(tmp << 8 >>> 24) / 255, (tmp << 16 >>> 24) / 255, (tmp << 24 >>> 24) / 255, (tmp >>> 24) / 255];
  return items;
}
convertToRGBA.__closure = { processColorInitially };
convertToRGBA.__workletHash = 15503083969849;
convertToRGBA.__initData = { code: "function convertToRGBA_Pnpm_ColorsTs22(color){const{processColorInitially}=this.__closure;const processedColor=processColorInitially(color);const a=(processedColor>>>24)/255;const r=(processedColor<<8>>>24)/255;const g=(processedColor<<16>>>24)/255;const b=(processedColor<<24>>>24)/255;return[r,g,b,a];}" };
function rgbaArrayToRGBAColor(tmp3Result8) {
  let num = 0;
  if (tmp3Result8[3] >= 0.001) {
    num = tmp3Result8[3];
  }
  const rounded = Math.round(255 * tmp3Result8[0]);
  const rounded1 = Math.round(255 * tmp3Result8[1]);
  return "rgba(" + rounded + ", " + rounded1 + ", " + Math.round(255 * tmp3Result8[2]) + ", " + num + ")";
}
rgbaArrayToRGBAColor.__closure = {};
rgbaArrayToRGBAColor.__workletHash = 9717764015913;
rgbaArrayToRGBAColor.__initData = { code: "function rgbaArrayToRGBAColor_Pnpm_ColorsTs23(RGBA){const alpha=RGBA[3]<0.001?0:RGBA[3];return\"rgba(\"+Math.round(RGBA[0]*255)+\", \"+Math.round(RGBA[1]*255)+\", \"+Math.round(RGBA[2]*255)+\", \"+alpha+\")\";}" };
function toLinearSpace(tmp3Result1, exponent) {
  let num = exponent;
  if (exponent === undefined) {
    num = 2.2;
  }
  const items = [];
  let num2 = 0;
  do {
    let _Math = Math;
    let arr = items.push(Math.pow(tmp3Result1[num2], num));
    num2 = num2 + 1;
  } while (num2 < 3);
  items.push(tmp3Result1[3]);
  return items;
}
toLinearSpace.__closure = {};
toLinearSpace.__workletHash = 2672100143834;
toLinearSpace.__initData = { code: "function toLinearSpace_Pnpm_ColorsTs24(RGBA,gamma=2.2){const res=[];for(let i=0;i<3;++i){res.push(Math.pow(RGBA[i],gamma));}res.push(RGBA[3]);return res;}" };
function toGammaSpace(items) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 2.2;
  }
  items = [];
  let num2 = 0;
  do {
    let _Math = Math;
    let arr = items.push(Math.pow(items[num2], 1 / num));
    num2 = num2 + 1;
  } while (num2 < 3);
  items.push(items[3]);
  return items;
}
toGammaSpace.__closure = {};
toGammaSpace.__workletHash = 1726439203743;
toGammaSpace.__initData = { code: "function toGammaSpace_Pnpm_ColorsTs25(RGBA,gamma=2.2){const res=[];for(let i=0;i<3;++i){res.push(Math.pow(RGBA[i],1/gamma));}res.push(RGBA[3]);return res;}" };

export { clampRGBA };
export const ColorProperties = shareable1;
export { normalizeColor };
export const opacity = fn;
export const red = fn2;
export const green = fn3;
export const blue = fn4;
export const rgbaColor = fn5;
export { RGBtoHSV };
export const hsvToColor = fn6;
export { processColorInitially };
export { isColor };
export { processColor };
export { processColorsInProps };
export { convertToRGBA };
export { rgbaArrayToRGBAColor };
export { toLinearSpace };
export { toGammaSpace };
// === Module 1825: convertLrgbToOklab ===

// Module 1825 (convertLrgbToOklab)
const module = arg2;
const dependencyMap = arg6;
function convertLrgbToOklab(convert) {
  let num = convert.r;
  if (num === undefined) {
    num = 0;
  }
  let num2 = convert.g;
  if (num2 === undefined) {
    num2 = 0;
  }
  let num3 = convert.b;
  if (num3 === undefined) {
    num3 = 0;
  }
  const cbrtResult = Math.cbrt(0.41222147079999993 * num + 0.5363325363 * num2 + 0.0514459929 * num3);
  const cbrtResult1 = Math.cbrt(0.2119034981999999 * num + 0.6806995450999999 * num2 + 0.1073969566 * num3);
  const cbrtResult2 = Math.cbrt(0.08830246189999998 * num + 0.2817188376 * num2 + 0.6299787005000002 * num3);
  return { l: 0.2104542553 * cbrtResult + 0.793617785 * cbrtResult1 - 0.0040720468 * cbrtResult2, a: 1.9779984951 * cbrtResult - 2.428592205 * cbrtResult1 + 0.4505937099 * cbrtResult2, b: 0.0259040371 * cbrtResult + 0.7827717662 * cbrtResult1 - 0.808675766 * cbrtResult2, alpha: convert.alpha };
}
convertLrgbToOklab.__closure = {};
convertLrgbToOklab.__workletHash = 12620455378469;
convertLrgbToOklab.__initData = { code: "function convertLrgbToOklab_Pnpm_oklabTs1({r=0,g=0,b=0,alpha:alpha}){const L=Math.cbrt(0.41222147079999993*r+0.5363325363*g+0.0514459929*b);const M=Math.cbrt(0.2119034981999999*r+0.6806995450999999*g+0.1073969566*b);const S=Math.cbrt(0.08830246189999998*r+0.2817188376*g+0.6299787005000002*b);return{l:0.2104542553*L+0.793617785*M-0.0040720468*S,a:1.9779984951*L-2.428592205*M+0.4505937099*S,b:0.0259040371*L+0.7827717662*M-0.808675766*S,alpha:alpha};}" };
function convertRgbToOklab(arg0) {
  const convert = module(1826).convert;
  const tmp = convertLrgbToOklab(convert.fromRgb(arg0));
  if (tmp2) {
    tmp.b = 0;
    tmp.a = 0;
  }
  return tmp;
}
let obj = { lrgb: require("r"), convertLrgbToOklab };
convertRgbToOklab.__closure = obj;
convertRgbToOklab.__workletHash = 16743889557677;
convertRgbToOklab.__initData = { code: "function convertRgbToOklab_Pnpm_oklabTs2(rgb){const{lrgb,convertLrgbToOklab}=this.__closure;const lrgbColor=lrgb.convert.fromRgb(rgb);const result=convertLrgbToOklab(lrgbColor);if(rgb.r===rgb.b&&rgb.b===rgb.g){result.a=result.b=0;}return result;}" };
function convertOklabToLrgb(alpha) {
  let num = alpha.l;
  if (num === undefined) {
    num = 0;
  }
  let num2 = alpha.a;
  if (num2 === undefined) {
    num2 = 0;
  }
  let num3 = alpha.b;
  if (num3 === undefined) {
    num3 = 0;
  }
  const powResult = Math.pow(0.9999999984505198 * num + 0.39633779217376786 * num2 + 0.2158037580607588 * num3, 3);
  const powResult1 = Math.pow(1.0000000088817609 * num - 0.10556134232365635 * num2 - 0.06385417477170591 * num3, 3);
  const powResult2 = Math.pow(1.0000000546724108 * num - 0.08948418209496575 * num2 - 1.2914855378640917 * num3, 3);
  return { r: 4.076741661347994 * powResult - 3.307711590408193 * powResult1 + 0.230969928729428 * powResult2, g: -1.2684380040921763 * powResult + 2.6097574006633715 * powResult1 - 0.3413193963102197 * powResult2, b: -0.004196086541837188 * powResult - 0.7034186144594493 * powResult1 + 1.7076147009309444 * powResult2, alpha: alpha.alpha };
}
convertOklabToLrgb.__closure = {};
convertOklabToLrgb.__workletHash = 14870197803884;
convertOklabToLrgb.__initData = { code: "function convertOklabToLrgb_Pnpm_oklabTs3({l=0,a=0,b=0,alpha:alpha}){const L=Math.pow(l*0.99999999845051981432+0.39633779217376785678*a+0.21580375806075880339*b,3);const M=Math.pow(l*1.0000000088817607767-0.1055613423236563494*a-0.063854174771705903402*b,3);const S=Math.pow(l*1.0000000546724109177-0.089484182094965759684*a-1.2914855378640917399*b,3);return{r:+4.076741661347994*L-3.307711590408193*M+0.230969928729428*S,g:-1.2684380040921763*L+2.6097574006633715*M-0.3413193963102197*S,b:-0.004196086541837188*L-0.7034186144594493*M+1.7076147009309444*S,alpha:alpha};}" };
obj = { convert: null };
obj = { fromRgb: convertRgbToOklab, toRgb: null };
function convertOklabToRgb(alpha) {
  const convert = module(1826).convert;
  const toRgbResult = convert.toRgb(convertOklabToLrgb(alpha));
  toRgbResult.r = Math.ceil(100000 * toRgbResult.r) / 100000;
  toRgbResult.g = Math.ceil(100000 * toRgbResult.g) / 100000;
  toRgbResult.b = Math.ceil(100000 * toRgbResult.b) / 100000;
  return toRgbResult;
}
convertOklabToRgb.__closure = { convertOklabToLrgb, lrgb: require("r") };
convertOklabToRgb.__workletHash = 14795767520122;
convertOklabToRgb.__initData = { code: "function convertOklabToRgb_Pnpm_oklabTs4(labColor){const{convertOklabToLrgb,lrgb}=this.__closure;const roundChannel=function(channel){return Math.ceil(channel*100_000)/100_000;};const lrgbColor=convertOklabToLrgb(labColor);const rgbColor=lrgb.convert.toRgb(lrgbColor);rgbColor.r=roundChannel(rgbColor.r);rgbColor.g=roundChannel(rgbColor.g);rgbColor.b=roundChannel(rgbColor.b);return rgbColor;}" };
obj[1] = convertOklabToRgb;
obj[0] = obj;
arg5.default = obj;
// _runtime/01822_o.js
import t from "t" /* 1665 */;
import call from "call" /* 1697 */;
import isReanimated3 from "isReanimated3" /* 1698 */;
import useSharedValue from "useSharedValue" /* 1806 */;
import getVal from "getVal" /* 1823 */;
import convertLrgbToOklabDefault from "convertLrgbToOklab" /* 1824 */;

const fn = function o(arg0, arg1, h, useCorrectedHSVInterpolation) {
  useCorrectedHSVInterpolation = useCorrectedHSVInterpolation.useCorrectedHSVInterpolation;
  if (undefined !== useCorrectedHSVInterpolation) {
    if (!useCorrectedHSVInterpolation) {
      let tmp = require;
      const obj = getVal;
      let interpolateResult = obj.interpolate(arg0, arg1, h.h, getVal.Extrapolation.CLAMP);
    }
    let tmpResult = getVal;
    const interpolateResult1 = tmpResult.interpolate(arg0, arg1, h.s, getVal.Extrapolation.CLAMP);
    tmpResult = getVal;
    const interpolateResult2 = tmpResult.interpolate(arg0, arg1, h.v, getVal.Extrapolation.CLAMP);
    const tmpResult1 = getVal;
    const tmpResult2 = call;
    return tmpResult2.hsvToColor(interpolateResult, interpolateResult1, interpolateResult2, tmpResult1.interpolate(arg0, arg1, h.a, getVal.Extrapolation.CLAMP));
  }
  const items = [arg1[0]];
  h = h.h;
  const items1 = [h[0]];
  let num = 1;
  if (1 < h.length) {
    while (true) {
      let diff = num - 1;
      let diff1 = h[num] - h[diff];
      let tmp9 = num;
      if (h[num] > h[diff]) {
        if (diff1 > 0.5) {
          let arr = items.push(arg1[num]);
          arr = items.push(arg1[num] + 0.00001);
          let arr1 = items1.push(h[num] - 1);
          let arr2 = items1.push(h[num]);
          num = num + 1;
          if (num >= h.length) {
            break;
          }
        }
      }
      if (h[num] < h[diff]) {
        if (diff1 < -0.5) {
          let arr3 = items.push(arg1[num]);
          let arr4 = items.push(arg1[num] + 0.00001);
          let arr5 = items1.push(h[num] + 1);
          let arr6 = items1.push(h[num]);
        }
      }
      let arr7 = items.push(arg1[num]);
      let arr8 = items1.push(h[num]);
    }
  }
  interpolateResult = (getVal.interpolate(arg0, items, items1, getVal.Extrapolation.CLAMP) + 1) % 1;
  tmp = require;
};
let obj = { interpolate: getVal.interpolate, Extrapolation: getVal.Extrapolation, hsvToColor: call.hsvToColor };
fn.__closure = obj;
fn.__workletHash = 1574790978150;
fn.__initData = { code: "function pnpm_interpolateColorTs1(value,inputRange,colors,options){const{interpolate,Extrapolation,hsvToColor}=this.__closure;let h=0;const{useCorrectedHSVInterpolation=true}=options;if(useCorrectedHSVInterpolation){const correctedInputRange=[inputRange[0]];const originalH=colors.h;const correctedH=[originalH[0]];for(let i=1;i<originalH.length;++i){const d=originalH[i]-originalH[i-1];if(originalH[i]>originalH[i-1]&&d>0.5){correctedInputRange.push(inputRange[i]);correctedInputRange.push(inputRange[i]+0.00001);correctedH.push(originalH[i]-1);correctedH.push(originalH[i]);}else if(originalH[i]<originalH[i-1]&&d<-0.5){correctedInputRange.push(inputRange[i]);correctedInputRange.push(inputRange[i]+0.00001);correctedH.push(originalH[i]+1);correctedH.push(originalH[i]);}else{correctedInputRange.push(inputRange[i]);correctedH.push(originalH[i]);}}h=(interpolate(value,correctedInputRange,correctedH,Extrapolation.CLAMP)+1)%1;}else{h=interpolate(value,inputRange,colors.h,Extrapolation.CLAMP);}const s=interpolate(value,inputRange,colors.s,Extrapolation.CLAMP);const v=interpolate(value,inputRange,colors.v,Extrapolation.CLAMP);const a=interpolate(value,inputRange,colors.a,Extrapolation.CLAMP);return hsvToColor(h,s,v,a);}" };
const fn2 = function t(arr) {
  closure_0 = arg1;
  return arr.map((arg0) => Math.pow(arg0 / 255, num));
};
fn2.__closure = {};
fn2.__workletHash = 16826369876333;
fn2.__initData = { code: "function pnpm_interpolateColorTs2(x,gamma){return x.map(function(v){return Math.pow(v/255,gamma);});}" };
const fn3 = function r(sum) {
  return Math.round(255 * Math.pow(sum, 1 / arg1));
};
fn3.__closure = {};
fn3.__workletHash = 5856560656141;
fn3.__initData = { code: "function pnpm_interpolateColorTs3(x,gamma){return Math.round(Math.pow(x,1/gamma)*255);}" };
const fn4 = function a(arg0, arg1, arg2, gamma) {
  gamma = gamma.gamma;
  let num = 2.2;
  if (undefined !== gamma) {
    num = gamma;
  }
  ({ r, g, b } = arg2);
  let mapped2 = b;
  let tmp2 = g;
  let tmp3 = r;
  if (1 !== num) {
    if (typeof fn2 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const mapped = r.map((arg0) => Math.pow(arg0 / 255, num));
    if (typeof fn2 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const mapped1 = g.map((arg0) => Math.pow(arg0 / 255, num));
    if (typeof fn2 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    mapped2 = b.map((arg0) => Math.pow(arg0 / 255, num));
    tmp2 = mapped1;
    tmp3 = mapped;
  }
  const interpolateResult = num(1823).interpolate(arg0, arg1, tmp3, num(1823).Extrapolation.CLAMP);
  const obj = num(1823);
  const interpolateResult1 = num(1823).interpolate(arg0, arg1, tmp2, num(1823).Extrapolation.CLAMP);
  const obj2 = num(1823);
  const interpolateResult2 = num(1823).interpolate(arg0, arg1, mapped2, num(1823).Extrapolation.CLAMP);
  const obj3 = num(1823);
  const interpolateResult3 = num(1823).interpolate(arg0, arg1, arg2.a, num(1823).Extrapolation.CLAMP);
  if (1 === num) {
    let tmp6Result = tmp6(1697);
    let rgbaColorResult = tmp6Result.rgbaColor(interpolateResult, interpolateResult1, interpolateResult2, interpolateResult3);
  } else {
    tmp6Result = tmp6(1697);
    if (typeof fn3 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const _Math = Math;
    const _Math2 = Math;
    const rounded = Math.round(255 * Math.pow(interpolateResult, 1 / num));
    if (typeof fn3 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const _Math3 = Math;
    const _Math4 = Math;
    const rounded1 = Math.round(255 * Math.pow(interpolateResult1, 1 / num));
    if (typeof fn3 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const _Math5 = Math;
    const _Math6 = Math;
    rgbaColorResult = tmp6Result.rgbaColor(rounded, rounded1, Math.round(255 * Math.pow(interpolateResult2, 1 / num)), interpolateResult3);
  }
  return rgbaColorResult;
};
obj = { toLinearSpace: fn2, interpolate: getVal.interpolate, Extrapolation: getVal.Extrapolation, rgbaColor: call.rgbaColor, toGammaSpace: fn3 };
fn4.__closure = obj;
fn4.__workletHash = 13883480600753;
fn4.__initData = { code: "function pnpm_interpolateColorTs4(value,inputRange,colors,options){const{toLinearSpace,interpolate,Extrapolation,rgbaColor,toGammaSpace}=this.__closure;const{gamma=2.2}=options;let{r:outputR,g:outputG,b:outputB}=colors;if(gamma!==1){outputR=toLinearSpace(outputR,gamma);outputG=toLinearSpace(outputG,gamma);outputB=toLinearSpace(outputB,gamma);}const r=interpolate(value,inputRange,outputR,Extrapolation.CLAMP);const g=interpolate(value,inputRange,outputG,Extrapolation.CLAMP);const b=interpolate(value,inputRange,outputB,Extrapolation.CLAMP);const a=interpolate(value,inputRange,colors.a,Extrapolation.CLAMP);if(gamma===1){return rgbaColor(r,g,b,a);}return rgbaColor(toGammaSpace(r,gamma),toGammaSpace(g,gamma),toGammaSpace(b,gamma),a);}" };
const fn5 = function n(arg0, arg1, l) {
  const obj = getVal;
  const interpolateResult = getVal.interpolate(arg0, arg1, l.l, getVal.Extrapolation.CLAMP);
  const obj2 = getVal;
  const interpolateResult1 = getVal.interpolate(arg0, arg1, l.a, getVal.Extrapolation.CLAMP);
  const obj3 = getVal;
  const interpolateResult2 = getVal.interpolate(arg0, arg1, l.b, getVal.Extrapolation.CLAMP);
  obj4 = getVal;
  const convert = convertLrgbToOklabDefault.oklab.convert;
  const interpolateResult3 = getVal.interpolate(arg0, arg1, l.alpha, getVal.Extrapolation.CLAMP);
  ({ r, g, b, alpha } = convert.toRgb({ l: interpolateResult, a: interpolateResult1, b: interpolateResult2, alpha: getVal.interpolate(arg0, arg1, l.alpha, getVal.Extrapolation.CLAMP) }));
  const toRgbResult = convert.toRgb({ l: interpolateResult, a: interpolateResult1, b: interpolateResult2, alpha: getVal.interpolate(arg0, arg1, l.alpha, getVal.Extrapolation.CLAMP) });
  return call.rgbaColor(r, g, b, alpha);
};
obj = { interpolate: getVal.interpolate, Extrapolation: getVal.Extrapolation, culori: convertLrgbToOklabDefault, rgbaColor: call.rgbaColor };
fn5.__closure = obj;
fn5.__workletHash = 7788654685113;
fn5.__initData = { code: "function pnpm_interpolateColorTs5(value,inputRange,colors,_options){const{interpolate,Extrapolation,culori,rgbaColor}=this.__closure;const l=interpolate(value,inputRange,colors.l,Extrapolation.CLAMP);const a=interpolate(value,inputRange,colors.a,Extrapolation.CLAMP);const b=interpolate(value,inputRange,colors.b,Extrapolation.CLAMP);const alpha=interpolate(value,inputRange,colors.alpha,Extrapolation.CLAMP);const{r:_r,g:_g,b:_b,alpha:_alpha}=culori.oklab.convert.toRgb({l:l,a:a,b:b,alpha:alpha});return rgbaColor(_r,_g,_b,_alpha);}" };
const fn6 = function l(arg0, arg1) {
  const ch1 = [];
  const ch2 = [];
  const ch3 = [];
  const alpha = [];
  for (let num = 0; num < arg0.length; num = num + 1) {
    let tmp = require;
    let tmp2 = dependencyMap;
    let obj = call;
    let processColorResult = obj.processColor(arg0[num]);
    let tmp4 = num;
    if (typeof processColorResult === "number") {
      obj = { r: null, g: null, b: null };
      let tmpResult = tmp(1697);
      obj[0] = tmpResult.red(processColorResult);
      tmpResult = tmp(1697);
      obj[1] = tmpResult.green(processColorResult);
      let tmpResult1 = tmp(1697);
      obj[2] = tmpResult1.blue(processColorResult);
      let tmp5 = arg1(obj);
      let arr = ch1.push(tmp5.ch1);
      arr = ch2.push(tmp5.ch2);
      let arr1 = ch3.push(tmp5.ch3);
      let tmpResult2 = tmp(1697);
      let arr2 = alpha.push(tmpResult2.opacity(processColorResult));
    }
  }
  return { ch1, ch2, ch3, alpha };
};
fn6.__closure = { processColor: call.processColor, red: call.red, green: call.green, blue: call.blue, opacity: call.opacity };
fn6.__workletHash = 8764168362190;
fn6.__initData = { code: "function pnpm_interpolateColorTs6(colors,convFromRgb){const{processColor,red,green,blue,opacity}=this.__closure;const ch1=[];const ch2=[];const ch3=[];const alpha=[];for(let i=0;i<colors.length;i++){const color=colors[i];const processedColor=processColor(color);if(typeof processedColor==='number'){const convertedColor=convFromRgb({r:red(processedColor),g:green(processedColor),b:blue(processedColor)});ch1.push(convertedColor.ch1);ch2.push(convertedColor.ch2);ch3.push(convertedColor.ch3);alpha.push(opacity(processedColor));}}return{ch1:ch1,ch2:ch2,ch3:ch3,alpha:alpha};}" };
const fn7 = function c(arg0) {
  const tmp = fn6(arg0, (ch1) => ({ ch1: ch1.r, ch2: ch1.g, ch3: ch1.b }));
  return { r: tmp.ch1, g: tmp.ch2, b: tmp.ch3, a: tmp.alpha };
};
fn7.__closure = { _splitColorsIntoChannels: fn6 };
fn7.__workletHash = 937749076324;
fn7.__initData = { code: "function pnpm_interpolateColorTs7(colors){const{_splitColorsIntoChannels}=this.__closure;const{ch1:ch1,ch2:ch2,ch3:ch3,alpha:alpha}=_splitColorsIntoChannels(colors,function(color){return{ch1:color.r,ch2:color.g,ch3:color.b};});return{r:ch1,g:ch2,b:ch3,a:alpha};}" };
const fn8 = function p(arg0) {
  const tmp = fn6(arg0, (arg0) => {
    let obj = callback(1697);
    const RGBtoHSVResult = obj.RGBtoHSV(arg0.r, arg0.g, arg0.b);
    obj = { ch1: RGBtoHSVResult.h, ch2: RGBtoHSVResult.s, ch3: RGBtoHSVResult.v };
    return obj;
  });
  return { h: tmp.ch1, s: tmp.ch2, v: tmp.ch3, a: tmp.alpha };
};
let obj1 = { processColor: call.processColor, red: call.red, green: call.green, blue: call.blue, opacity: call.opacity };
fn8.__closure = { _splitColorsIntoChannels: fn6, RGBtoHSV: call.RGBtoHSV };
fn8.__workletHash = 11798906675452;
fn8.__initData = { code: "function pnpm_interpolateColorTs8(colors){const{_splitColorsIntoChannels,RGBtoHSV}=this.__closure;const{ch1:ch1,ch2:ch2,ch3:ch3,alpha:alpha}=_splitColorsIntoChannels(colors,function(color){const hsvColor=RGBtoHSV(color.r,color.g,color.b);return{ch1:hsvColor.h,ch2:hsvColor.s,ch3:hsvColor.v};});return{h:ch1,s:ch2,v:ch3,a:alpha};}" };
const fn9 = function i(arg0) {
  const tmp = fn6(arg0, (arg0) => {
    const convert = callback2(1824).oklab.convert;
    const fromRgbResult = convert.fromRgb(arg0);
    return { ch1: fromRgbResult.l, ch2: fromRgbResult.a, ch3: fromRgbResult.b };
  });
  return { l: tmp.ch1, a: tmp.ch2, b: tmp.ch3, alpha: tmp.alpha };
};
let obj2 = { _splitColorsIntoChannels: fn6, RGBtoHSV: call.RGBtoHSV };
fn9.__closure = { _splitColorsIntoChannels: fn6, culori: convertLrgbToOklabDefault };
fn9.__workletHash = 11214827752418;
fn9.__initData = { code: "function pnpm_interpolateColorTs9(colors){const{_splitColorsIntoChannels,culori}=this.__closure;const{ch1:ch1,ch2:ch2,ch3:ch3,alpha:alpha}=_splitColorsIntoChannels(colors,function(color){const labColor=culori.oklab.convert.fromRgb(color);return{ch1:labColor.l,ch2:labColor.a,ch3:labColor.b};});return{l:ch1,a:ch2,b:ch3,alpha:alpha};}" };
function interpolateColor(arg0, arg1, arg2) {
  let str = arg3;
  if (arg3 === undefined) {
    str = "RGB";
  }
  let obj = arg4;
  if (arg4 === undefined) {
    obj = {};
  }
  if ("HSV" === str) {
    if (typeof fn8 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    obj = { h: null, s: null, v: null, a: null };
    ({ ch1: obj4[0], ch2: obj4[1], ch3: obj4[2], alpha: obj4[3] } = fn6(arg2, (arg0) => {
      let obj = callback(1697);
      const RGBtoHSVResult = obj.RGBtoHSV(arg0.r, arg0.g, arg0.b);
      obj = { ch1: RGBtoHSVResult.h, ch2: RGBtoHSVResult.s, ch3: RGBtoHSVResult.v };
      return obj;
    }));
    return fn(arg0, arg1, obj, obj);
  } else if ("RGB" === str) {
    if (typeof fn7 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    obj = { r: null, g: null, b: null, a: null };
    ({ ch1: obj3[0], ch2: obj3[1], ch3: obj3[2], alpha: obj3[3] } = fn6(arg2, (ch1) => ({ ch1: ch1.r, ch2: ch1.g, ch3: ch1.b })));
    return fn4(arg0, arg1, obj, obj);
  } else if ("LAB" === str) {
    if (typeof fn9 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    obj1 = { l: null, a: null, b: null, alpha: null };
    ({ ch1: obj2[0], ch2: obj2[1], ch3: obj2[2], alpha: obj2[3] } = fn6(arg2, (arg0) => {
      const convert = callback2(1824).oklab.convert;
      const fromRgbResult = convert.fromRgb(arg0);
      return { ch1: fromRgbResult.l, ch2: fromRgbResult.a, ch3: fromRgbResult.b };
    }));
    return fn5(arg0, arg1, obj1, obj);
  } else {
    const _HermesInternal = HermesInternal;
    const reanimatedError = new t.ReanimatedError("Invalid color space provided: " + str + ". Supported values are: ['RGB', 'HSV', 'LAB'].");
    throw reanimatedError;
  }
}
interpolateColor.__closure = { interpolateColorsHSV: fn, getInterpolateHSV: fn8, interpolateColorsRGB: fn4, getInterpolateRGB: fn7, interpolateColorsLAB: fn5, getInterpolateLAB: fn9 };
interpolateColor.__workletHash = 10004340589678;
interpolateColor.__initData = { code: "function interpolateColor_Pnpm_interpolateColorTs10(value,inputRange,outputRange,colorSpace='RGB',options={}){const{interpolateColorsHSV,getInterpolateHSV,interpolateColorsRGB,getInterpolateRGB,interpolateColorsLAB,getInterpolateLAB}=this.__closure;if(colorSpace==='HSV'){return interpolateColorsHSV(value,inputRange,getInterpolateHSV(outputRange),options);}else if(colorSpace==='RGB'){return interpolateColorsRGB(value,inputRange,getInterpolateRGB(outputRange),options);}else if(colorSpace==='LAB'){return interpolateColorsLAB(value,inputRange,getInterpolateLAB(outputRange),options);}throw new ReanimatedError(\"Invalid color space provided: \"+colorSpace+\". Supported values are: ['RGB', 'HSV', 'LAB'].\");}" };
let obj4 = { RGB: 0, [0]: "RGB", HSV: 1, [1]: "HSV", LAB: 2, [2]: "LAB" };

export const Extrapolate = getVal.Extrapolation;
export { interpolateColor };
export const ColorSpace = obj4;
export const useInterpolateConfig = function useInterpolateConfig(inputRange, outputRange, arg2, UNDETERMINED) {
  let RGB = arg2;
  if (arg2 === undefined) {
    RGB = obj4.RGB;
  }
  let obj = UNDETERMINED;
  if (UNDETERMINED === undefined) {
    obj = {};
  }
  obj = { inputRange, outputRange, colorSpace: RGB, cache: null, options: null };
  obj4 = isReanimated3;
  obj[3] = obj4.makeMutable(null);
  obj[4] = obj;
  return useSharedValue.useSharedValue(obj);
};
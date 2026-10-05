// === Module 1811: Extrapolate ===

// Module 1811 (Extrapolate)
import ReanimatedError from "ReanimatedError" /* 1654 */;
import clampRGBA from "clampRGBA" /* 1686 */;
import startMapper from "startMapper" /* 1687 */;
import _mod1795 from "module_1795" /* 1795 */;
import Extrapolation from "Extrapolation" /* 1812 */;
import _modDef1813 from "module_1813" /* 1813 */;

const f85092 = (ch1) => ({ ch1: ch1.r, ch2: ch1.g, ch3: ch1.b });
const f85093 = (arg0) => {
  const obj = clampRGBA;
  const RGBtoHSVResult = obj.RGBtoHSV(arg0.r, arg0.g, arg0.b);
  return { ch1: RGBtoHSVResult.h, ch2: RGBtoHSVResult.s, ch3: RGBtoHSVResult.v };
};
const f85094 = (arg0) => {
  const convert = _modDef1813.oklab.convert;
  const fromRgbResult = convert.fromRgb(arg0);
  return { ch1: fromRgbResult.l, ch2: fromRgbResult.a, ch3: fromRgbResult.b };
};
const interpolateColorsHSV = function o(arg0, items, h, useCorrectedHSVInterpolation) {
  useCorrectedHSVInterpolation = useCorrectedHSVInterpolation.useCorrectedHSVInterpolation;
  if (undefined !== useCorrectedHSVInterpolation) {
    let interpolateResult;
    if (!useCorrectedHSVInterpolation) {
      const obj = Extrapolation;
      interpolateResult = obj.interpolate(arg0, items, h.h, Extrapolation.Extrapolation.CLAMP);
    }
    const tmpResult = Extrapolation;
    const interpolateResult1 = tmpResult.interpolate(arg0, items, h.s, Extrapolation.Extrapolation.CLAMP);
    const tmpResult4 = Extrapolation;
    const interpolateResult2 = tmpResult4.interpolate(arg0, items, h.v, Extrapolation.Extrapolation.CLAMP);
    const tmpResult5 = Extrapolation;
    const interpolateResult3 = tmpResult5.interpolate(arg0, items, h.a, Extrapolation.Extrapolation.CLAMP);
    const tmpResult6 = clampRGBA;
    return tmpResult6.hsvToColor(interpolateResult, interpolateResult1, interpolateResult2, interpolateResult3);
  }
  items = [];
  items[0] = items[0];
  h = h.h;
  const items1 = [h[0]];
  let num = 1;
  if (1 < h.length) {
    while (true) {
      let diff = num - 1;
      let diff1 = h[num] - h[diff];
      if (h[num] > h[diff]) {
        if (diff1 > 0.5) {
          let arr = items.push(items[num]);
          let arr2 = items.push(items[num] + 0.00001);
          let arr3 = items1.push(h[num] - 1);
          let arr13 = items1.push(h[num]);
          num = num + 1;
          if (num >= h.length) {
            break;
          }
        }
      }
      if (h[num] < h[diff]) {
        if (diff1 < -0.5) {
          let arr14 = items.push(items[num]);
          let arr15 = items.push(items[num] + 0.00001);
          let arr16 = items1.push(h[num] + 1);
          let arr17 = items1.push(h[num]);
        }
      }
      let arr18 = items.push(items[num]);
      let arr19 = items1.push(h[num]);
    }
  }
  const obj2 = Extrapolation;
  interpolateResult = (obj2.interpolate(arg0, items, items1, Extrapolation.Extrapolation.CLAMP) + 1) % 1;
};
let obj = { interpolate: Extrapolation.interpolate, Extrapolation: Extrapolation.Extrapolation, hsvToColor: clampRGBA.hsvToColor };
interpolateColorsHSV.__closure = obj;
interpolateColorsHSV.__workletHash = 1574790978150;
interpolateColorsHSV.__initData = { code: "function pnpm_interpolateColorTs1(value,inputRange,colors,options){const{interpolate,Extrapolation,hsvToColor}=this.__closure;let h=0;const{useCorrectedHSVInterpolation=true}=options;if(useCorrectedHSVInterpolation){const correctedInputRange=[inputRange[0]];const originalH=colors.h;const correctedH=[originalH[0]];for(let i=1;i<originalH.length;++i){const d=originalH[i]-originalH[i-1];if(originalH[i]>originalH[i-1]&&d>0.5){correctedInputRange.push(inputRange[i]);correctedInputRange.push(inputRange[i]+0.00001);correctedH.push(originalH[i]-1);correctedH.push(originalH[i]);}else if(originalH[i]<originalH[i-1]&&d<-0.5){correctedInputRange.push(inputRange[i]);correctedInputRange.push(inputRange[i]+0.00001);correctedH.push(originalH[i]+1);correctedH.push(originalH[i]);}else{correctedInputRange.push(inputRange[i]);correctedH.push(originalH[i]);}}h=(interpolate(value,correctedInputRange,correctedH,Extrapolation.CLAMP)+1)%1;}else{h=interpolate(value,inputRange,colors.h,Extrapolation.CLAMP);}const s=interpolate(value,inputRange,colors.s,Extrapolation.CLAMP);const v=interpolate(value,inputRange,colors.v,Extrapolation.CLAMP);const a=interpolate(value,inputRange,colors.a,Extrapolation.CLAMP);return hsvToColor(h,s,v,a);}" };
const fn2 = function t(arr, arg1) {
  let closure_0 = arg1;
  return arr.map((item) => Math.pow(item / 255, num));
};
fn2.__closure = {};
fn2.__workletHash = 16826369876333;
fn2.__initData = { code: "function pnpm_interpolateColorTs2(x,gamma){return x.map(function(v){return Math.pow(v/255,gamma);});}" };
const fn3 = function r(sum, arg1) {
  return Math.round(255 * Math.pow(sum, 1 / arg1));
};
fn3.__closure = {};
fn3.__workletHash = 5856560656141;
fn3.__initData = { code: "function pnpm_interpolateColorTs3(x,gamma){return Math.round(Math.pow(x,1/gamma)*255);}" };
const fn4 = function a(arg0, items, arg2, gamma) {
  let b;
  let g;
  let r;
  let rgbaColorResult;
  gamma = gamma.gamma;
  let num = 2.2;
  if (undefined !== gamma) {
    num = gamma;
  }
  ({ r, g, b } = arg2);
  let mapped = b;
  let tmp2 = g;
  let tmp3 = r;
  if (1 !== num) {
    if (typeof fn2 === "function") {
      if (typeof fn2 === "function") {
        if (typeof fn2 === "function") {
          mapped = b.map((item) => Math.pow(item / 255, num));
          tmp2 = tmp5;
          tmp3 = tmp4;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  const obj = Extrapolation;
  const interpolateResult = obj.interpolate(arg0, items, tmp3, Extrapolation.Extrapolation.CLAMP);
  const obj2 = Extrapolation;
  const interpolateResult1 = obj2.interpolate(arg0, items, tmp2, Extrapolation.Extrapolation.CLAMP);
  const obj3 = Extrapolation;
  const interpolateResult2 = obj3.interpolate(arg0, items, mapped, Extrapolation.Extrapolation.CLAMP);
  const obj4 = Extrapolation;
  const interpolateResult3 = obj4.interpolate(arg0, items, arg2.a, Extrapolation.Extrapolation.CLAMP);
  if (1 === num) {
    const tmp6Result = clampRGBA;
    rgbaColorResult = tmp6Result.rgbaColor(interpolateResult, interpolateResult1, interpolateResult2, interpolateResult3);
  } else {
    clampRGBA;
    if (typeof fn3 === "function") {
      const _Math = Math;
      const _Math2 = Math;
      const rounded = Math.round(255 * Math.pow(interpolateResult, 1 / num));
      if (typeof fn3 === "function") {
        const _Math3 = Math;
        const _Math4 = Math;
        const rounded1 = Math.round(255 * Math.pow(interpolateResult1, 1 / num));
        if (typeof fn3 === "function") {
          const _Math5 = Math;
          const _Math6 = Math;
          rgbaColorResult = tmp27(rounded, rounded1, Math.round(255 * Math.pow(interpolateResult2, 1 / num)), interpolateResult3);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return rgbaColorResult;
};
let obj2 = { toLinearSpace: fn2, interpolate: Extrapolation.interpolate, Extrapolation: Extrapolation.Extrapolation, rgbaColor: clampRGBA.rgbaColor, toGammaSpace: fn3 };
fn4.__closure = obj2;
fn4.__workletHash = 13883480600753;
fn4.__initData = { code: "function pnpm_interpolateColorTs4(value,inputRange,colors,options){const{toLinearSpace,interpolate,Extrapolation,rgbaColor,toGammaSpace}=this.__closure;const{gamma=2.2}=options;let{r:outputR,g:outputG,b:outputB}=colors;if(gamma!==1){outputR=toLinearSpace(outputR,gamma);outputG=toLinearSpace(outputG,gamma);outputB=toLinearSpace(outputB,gamma);}const r=interpolate(value,inputRange,outputR,Extrapolation.CLAMP);const g=interpolate(value,inputRange,outputG,Extrapolation.CLAMP);const b=interpolate(value,inputRange,outputB,Extrapolation.CLAMP);const a=interpolate(value,inputRange,colors.a,Extrapolation.CLAMP);if(gamma===1){return rgbaColor(r,g,b,a);}return rgbaColor(toGammaSpace(r,gamma),toGammaSpace(g,gamma),toGammaSpace(b,gamma),a);}" };
const fn5 = function n(arg0, items, l, arg3) {
  let alpha;
  let b;
  let g;
  let r;
  const obj = Extrapolation;
  const interpolateResult = obj.interpolate(arg0, items, l.l, Extrapolation.Extrapolation.CLAMP);
  const obj2 = Extrapolation;
  const interpolateResult1 = obj2.interpolate(arg0, items, l.a, Extrapolation.Extrapolation.CLAMP);
  const obj3 = Extrapolation;
  const interpolateResult2 = obj3.interpolate(arg0, items, l.b, Extrapolation.Extrapolation.CLAMP);
  const obj4 = Extrapolation;
  const interpolateResult3 = obj4.interpolate(arg0, items, l.alpha, Extrapolation.Extrapolation.CLAMP);
  const convert = _modDef1813.oklab.convert;
  ({ r, g, b, alpha } = convert.toRgb({ l: interpolateResult, a: interpolateResult1, b: interpolateResult2, alpha: interpolateResult3 }));
  convert.toRgb({ l: interpolateResult, a: interpolateResult1, b: interpolateResult2, alpha: interpolateResult3 });
  const obj5 = clampRGBA;
  return obj5.rgbaColor(r, g, b, alpha);
};
let obj3 = { interpolate: Extrapolation.interpolate, Extrapolation: Extrapolation.Extrapolation, culori: _modDef1813, rgbaColor: clampRGBA.rgbaColor };
fn5.__closure = obj3;
fn5.__workletHash = 7788654685113;
fn5.__initData = { code: "function pnpm_interpolateColorTs5(value,inputRange,colors,_options){const{interpolate,Extrapolation,culori,rgbaColor}=this.__closure;const l=interpolate(value,inputRange,colors.l,Extrapolation.CLAMP);const a=interpolate(value,inputRange,colors.a,Extrapolation.CLAMP);const b=interpolate(value,inputRange,colors.b,Extrapolation.CLAMP);const alpha=interpolate(value,inputRange,colors.alpha,Extrapolation.CLAMP);const{r:_r,g:_g,b:_b,alpha:_alpha}=culori.oklab.convert.toRgb({l:l,a:a,b:b,alpha:alpha});return rgbaColor(_r,_g,_b,_alpha);}" };
const fn6 = function l(arg0, fn) {
  let num;
  let tmp2Result;
  let tmp2Result4;
  let tmp2Result5;
  const ch1 = [];
  const ch2 = [];
  const ch3 = [];
  const alpha = [];
  for (let num = 0; num < arg0.length; num = num + 1) {
    let tmp = arg0[num];
    let obj = clampRGBA;
    let processColorResult = obj.processColor(tmp);
    if (typeof processColorResult === "number") {
      let obj2 = { r: tmp2Result.red(processColorResult), g: tmp2Result4.green(processColorResult), b: tmp2Result5.blue(processColorResult) };
      tmp2Result = clampRGBA;
      tmp2Result4 = clampRGBA;
      tmp2Result5 = clampRGBA;
      let tmp6 = fn(obj2);
      let arr = ch1.push(tmp6.ch1);
      let arr2 = ch2.push(tmp6.ch2);
      let arr3 = ch3.push(tmp6.ch3);
      let push = alpha.push;
      let tmp2Result6 = clampRGBA;
      let arr4 = push(tmp2Result6.opacity(processColorResult));
    }
  }
  return { ch1, ch2, ch3, alpha };
};
const color = { processColor: clampRGBA.processColor, red: clampRGBA.red, green: clampRGBA.green, blue: clampRGBA.blue, opacity: clampRGBA.opacity };
fn6.__closure = color;
fn6.__workletHash = 8764168362190;
fn6.__initData = { code: "function pnpm_interpolateColorTs6(colors,convFromRgb){const{processColor,red,green,blue,opacity}=this.__closure;const ch1=[];const ch2=[];const ch3=[];const alpha=[];for(let i=0;i<colors.length;i++){const color=colors[i];const processedColor=processColor(color);if(typeof processedColor==='number'){const convertedColor=convFromRgb({r:red(processedColor),g:green(processedColor),b:blue(processedColor)});ch1.push(convertedColor.ch1);ch2.push(convertedColor.ch2);ch3.push(convertedColor.ch3);alpha.push(opacity(processedColor));}}return{ch1:ch1,ch2:ch2,ch3:ch3,alpha:alpha};}" };
const fn7 = function c(arg0) {
  const tmp = fn6(arg0, f85092);
  return { r: tmp.ch1, g: tmp.ch2, b: tmp.ch3, a: tmp.alpha };
};
fn7.__closure = { _splitColorsIntoChannels: fn6 };
fn7.__workletHash = 937749076324;
fn7.__initData = { code: "function pnpm_interpolateColorTs7(colors){const{_splitColorsIntoChannels}=this.__closure;const{ch1:ch1,ch2:ch2,ch3:ch3,alpha:alpha}=_splitColorsIntoChannels(colors,function(color){return{ch1:color.r,ch2:color.g,ch3:color.b};});return{r:ch1,g:ch2,b:ch3,a:alpha};}" };
const fn8 = function p(arg0) {
  const tmp = fn6(arg0, f85093);
  return { h: tmp.ch1, s: tmp.ch2, v: tmp.ch3, a: tmp.alpha };
};
let obj4 = { _splitColorsIntoChannels: fn6, RGBtoHSV: clampRGBA.RGBtoHSV };
fn8.__closure = obj4;
fn8.__workletHash = 11798906675452;
fn8.__initData = { code: "function pnpm_interpolateColorTs8(colors){const{_splitColorsIntoChannels,RGBtoHSV}=this.__closure;const{ch1:ch1,ch2:ch2,ch3:ch3,alpha:alpha}=_splitColorsIntoChannels(colors,function(color){const hsvColor=RGBtoHSV(color.r,color.g,color.b);return{ch1:hsvColor.h,ch2:hsvColor.s,ch3:hsvColor.v};});return{h:ch1,s:ch2,v:ch3,a:alpha};}" };
const fn9 = function i(arg0) {
  const tmp = fn6(arg0, f85094);
  return { l: tmp.ch1, a: tmp.ch2, b: tmp.ch3, alpha: tmp.alpha };
};
let obj5 = { _splitColorsIntoChannels: fn6, culori: _modDef1813 };
fn9.__closure = obj5;
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
    if (typeof fn8 === "function") {
      const obj7 = { h: null, s: null, v: null, a: null };
      ({ ch1: obj4.h, ch2: obj4.s, ch3: obj4.v, alpha: obj4.a } = fn6(arg2, f85093));
      fn6(arg2, f85093);
      return tmp22(arg0, arg1, obj7, obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else if ("RGB" === str) {
    if (typeof fn7 === "function") {
      const obj8 = { r: null, g: null, b: null, a: null };
      ({ ch1: obj3.r, ch2: obj3.g, ch3: obj3.b, alpha: obj3.a } = fn6(arg2, f85092));
      fn6(arg2, f85092);
      return tmp14(arg0, arg1, obj8, obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else if ("LAB" === str) {
    if (typeof fn9 === "function") {
      const obj9 = { l: null, a: null, b: null, alpha: null };
      ({ ch1: obj2.l, ch2: obj2.a, ch3: obj2.b, alpha: obj2.alpha } = fn6(arg2, f85094));
      fn6(arg2, f85094);
      return tmp6(arg0, arg1, obj9, obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const reanimatedError = new ReanimatedError.ReanimatedError("Invalid color space provided: " + str + ". Supported values are: ['RGB', 'HSV', 'LAB'].");
    throw reanimatedError;
  }
}
interpolateColor.__closure = { interpolateColorsHSV, getInterpolateHSV: fn8, interpolateColorsRGB: fn4, getInterpolateRGB: fn7, interpolateColorsLAB: fn5, getInterpolateLAB: fn9 };
interpolateColor.__workletHash = 10004340589678;
interpolateColor.__initData = { code: "function interpolateColor_Pnpm_interpolateColorTs10(value,inputRange,outputRange,colorSpace='RGB',options={}){const{interpolateColorsHSV,getInterpolateHSV,interpolateColorsRGB,getInterpolateRGB,interpolateColorsLAB,getInterpolateLAB}=this.__closure;if(colorSpace==='HSV'){return interpolateColorsHSV(value,inputRange,getInterpolateHSV(outputRange),options);}else if(colorSpace==='RGB'){return interpolateColorsRGB(value,inputRange,getInterpolateRGB(outputRange),options);}else if(colorSpace==='LAB'){return interpolateColorsLAB(value,inputRange,getInterpolateLAB(outputRange),options);}throw new ReanimatedError(\"Invalid color space provided: \"+colorSpace+\". Supported values are: ['RGB', 'HSV', 'LAB'].\");}" };
const obj6 = { RGB: 0, [0]: "RGB", HSV: 1, [1]: "HSV", LAB: 2, [2]: "LAB" };

export const Extrapolate = Extrapolation.Extrapolation;
export { interpolateColor };
export const ColorSpace = obj6;
export const useInterpolateConfig = function useInterpolateConfig(inputRange, outputRange) {
  let obj3;
  let RGB = arg2;
  if (arg2 === undefined) {
    RGB = obj6.RGB;
  }
  let obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  const obj2 = { inputRange, outputRange, colorSpace: RGB, cache: obj3.makeMutable(null), options: obj };
  const useSharedValue = _mod1795.useSharedValue;
  _mod1795;
  obj3 = startMapper;
  return useSharedValue(obj2);
};
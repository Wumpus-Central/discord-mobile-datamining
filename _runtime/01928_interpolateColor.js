// === Module 1928: interpolateColor ===

// Module 1928 (interpolateColor)
import convertLrgbToOklabDefault from "convertLrgbToOklab" /* 1930 */;
import "module_32";

let items = [{ code: "(function pnpm_interpolateColorTs1(value,inputRange,colors,options){let[interpolate,Extrapolation,hsvToColor]=this.__closure;let h=0;const{useCorrectedHSVInterpolation=true}=options;if(useCorrectedHSVInterpolation){const correctedInputRange=[inputRange[0]];const originalH=colors.h;const correctedH=[originalH[0]];for(let i=1;i<originalH.length;++i){const d=originalH[i]-originalH[i-1];if(originalH[i]>originalH[i-1]&&d>0.5){correctedInputRange.push(inputRange[i]);correctedInputRange.push(inputRange[i]+0.00001);correctedH.push(originalH[i]-1);correctedH.push(originalH[i]);}else if(originalH[i]<originalH[i-1]&&d<-0.5){correctedInputRange.push(inputRange[i]);correctedInputRange.push(inputRange[i]+0.00001);correctedH.push(originalH[i]+1);correctedH.push(originalH[i]);}else{correctedInputRange.push(inputRange[i]);correctedH.push(originalH[i]);}}h=(interpolate(value,correctedInputRange,correctedH,Extrapolation.CLAMP)+1)%1;}else{h=interpolate(value,inputRange,colors.h,Extrapolation.CLAMP);}const s=interpolate(value,inputRange,colors.s,Extrapolation.CLAMP);const v=interpolate(value,inputRange,colors.v,Extrapolation.CLAMP);const a=interpolate(value,inputRange,colors.a,Extrapolation.CLAMP);return hsvToColor(h,s,v,a);})" }, fn(1929).interpolate, fn(1929).Extrapolation, fn(1683).hsvToColor];
let closure_129_0;
let closure_129_1;
let closure_129_2;
[tmp2, tmp3, tmp4, tmp5] = items;
function pnpm_interpolateColorTs1(arg0, arg1, h, useCorrectedHSVInterpolation) {
  useCorrectedHSVInterpolation = useCorrectedHSVInterpolation.useCorrectedHSVInterpolation;
  if (undefined !== useCorrectedHSVInterpolation) {
    if (!useCorrectedHSVInterpolation) {
      let tmp2 = _undefined;
      let result = _slicedToArray(arg0, arg1, h.h, _undefined.CLAMP);
      let tmp6 = _slicedToArray;
    }
    const tmp6Result = tmp6(arg0, arg1, h.s, tmp2.CLAMP);
    const tmp6Result2 = tmp6(arg0, arg1, h.v, tmp2.CLAMP);
    return _undefined2(result, tmp6Result, tmp6Result2, tmp6(arg0, arg1, h.a, tmp2.CLAMP));
  }
  items = [arg1[0]];
  h = h.h;
  const items1 = [h[0]];
  let num = 1;
  if (1 < h.length) {
    while (true) {
      let diff = num - 1;
      let diff1 = h[num] - h[diff];
      if (h[num] > h[diff]) {
        if (diff1 > 0.5) {
          let arr = items.push(arg1[num]);
          let arr2 = items.push(arg1[num] + 0.00001);
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
          let arr14 = items.push(arg1[num]);
          let arr15 = items.push(arg1[num] + 0.00001);
          let arr16 = items1.push(h[num] + 1);
          let arr17 = items1.push(h[num]);
        }
      }
      let arr18 = items.push(arg1[num]);
      let arr19 = items1.push(h[num]);
    }
  }
  result = (_slicedToArray(arg0, items, items1, _undefined.CLAMP) + 1) % 1;
  tmp2 = _undefined;
  tmp6 = _slicedToArray;
}
let items1 = [tmp3, tmp4, tmp5];
pnpm_interpolateColorTs1.__closure = items1;
pnpm_interpolateColorTs1.__workletHash = 1153403873279;
pnpm_interpolateColorTs1.__initData = tmp2;
let items2 = [{ code: "(function pnpm_interpolateColorTs2(x,gamma){return x.map(function(v){return Math.pow(v/255,gamma);});})" }];
[tmp6] = items2;
function pnpm_interpolateColorTs2(arr, arg1) {
  closure_0 = arg1;
  return arr.map((item) => Math.pow(item / 255, closure_0));
}
pnpm_interpolateColorTs2.__workletHash = 2423489958508;
pnpm_interpolateColorTs2.__initData = tmp6;
const items3 = [{ code: "(function pnpm_interpolateColorTs3(x,gamma){return Math.round(Math.pow(x,1/gamma)*255);})" }];
[tmp7] = items3;
function pnpm_interpolateColorTs3(sum, arg1) {
  return Math.round(255 * Math.pow(sum, 1 / arg1));
}
pnpm_interpolateColorTs3.__workletHash = 6994848284684;
pnpm_interpolateColorTs3.__initData = tmp7;
const items4 = [{ code: "(function pnpm_interpolateColorTs4(value,inputRange,colors,options){let[toLinearSpace,interpolate,Extrapolation,rgbaColor,toGammaSpace]=this.__closure;const{gamma=2.2}=options;let{r:outputR,g:outputG,b:outputB}=colors;if(gamma!==1){outputR=toLinearSpace(outputR,gamma);outputG=toLinearSpace(outputG,gamma);outputB=toLinearSpace(outputB,gamma);}const r=interpolate(value,inputRange,outputR,Extrapolation.CLAMP);const g=interpolate(value,inputRange,outputG,Extrapolation.CLAMP);const b=interpolate(value,inputRange,outputB,Extrapolation.CLAMP);const a=interpolate(value,inputRange,colors.a,Extrapolation.CLAMP);if(gamma===1){return rgbaColor(r,g,b,a);}return rgbaColor(toGammaSpace(r,gamma),toGammaSpace(g,gamma),toGammaSpace(b,gamma),a);})" }, pnpm_interpolateColorTs2, fn(1929).interpolate, fn(1929).Extrapolation, fn(1683).rgbaColor, pnpm_interpolateColorTs3];
let closure_130_0;
let closure_130_1;
let closure_130_2;
let closure_130_3;
let closure_130_4;
[tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items4;
function pnpm_interpolateColorTs4(arg0, arg1, arg2, gamma) {
  gamma = gamma.gamma;
  let num = 2.2;
  if (undefined !== gamma) {
    num = gamma;
  }
  ({ r, g, b } = arg2);
  let tmp = b;
  let tmp2 = g;
  let tmp3 = r;
  if (1 !== num) {
    tmp3 = _slicedToArray(r, num);
    tmp2 = _slicedToArray(g, num);
    tmp = _slicedToArray(b, num);
  }
  const tmp5 = _undefined(arg0, arg1, tmp3, _undefined2.CLAMP);
  const tmp6 = _undefined(arg0, arg1, tmp2, _undefined2.CLAMP);
  const tmp7 = _undefined(arg0, arg1, tmp, _undefined2.CLAMP);
  const tmp8 = _undefined(arg0, arg1, arg2.a, _undefined2.CLAMP);
  if (1 === num) {
    let tmp16 = _undefined3(tmp5, tmp6, tmp7, tmp8);
  } else {
    const tmp11 = _undefined4(tmp5, num);
    const tmp12 = _undefined4(tmp6, num);
    tmp16 = _undefined3(tmp11, tmp12, _undefined4(tmp7, num), tmp8);
  }
  return tmp16;
}
const items5 = [tmp9, tmp10, tmp11, tmp12, tmp13];
pnpm_interpolateColorTs4.__closure = items5;
pnpm_interpolateColorTs4.__workletHash = 6202101295528;
pnpm_interpolateColorTs4.__initData = tmp8;
const items6 = [{ code: "(function pnpm_interpolateColorTs5(value,inputRange,colors,_options){let[interpolate,Extrapolation,culori,rgbaColor]=this.__closure;const l=interpolate(value,inputRange,colors.l,Extrapolation.CLAMP);const a=interpolate(value,inputRange,colors.a,Extrapolation.CLAMP);const b=interpolate(value,inputRange,colors.b,Extrapolation.CLAMP);const alpha=interpolate(value,inputRange,colors.alpha,Extrapolation.CLAMP);const{r:_r,g:_g,b:_b,alpha:_alpha}=culori.oklab.convert.toRgb({l:l,a:a,b:b,alpha:alpha});return rgbaColor(_r,_g,_b,_alpha);})" }, fn(1929).interpolate, fn(1929).Extrapolation, convertLrgbToOklabDefault, fn(1683).rgbaColor];
let closure_131_0;
let closure_131_1;
let closure_131_2;
let closure_131_3;
[tmp14, tmp15, tmp16, tmp17, tmp18] = items6;
function pnpm_interpolateColorTs5(arg0, arg1, l, arg3) {
  const tmp = _slicedToArray(arg0, arg1, l.l, _undefined.CLAMP);
  const tmp2 = _slicedToArray(arg0, arg1, l.a, _undefined.CLAMP);
  const convert = _undefined2.oklab.convert;
  const tmp3 = _slicedToArray(arg0, arg1, l.b, _undefined.CLAMP);
  const toRgbResult = convert.toRgb({ l: tmp, a: tmp2, b: _slicedToArray(arg0, arg1, l.b, _undefined.CLAMP), alpha: _slicedToArray(arg0, arg1, l.alpha, _undefined.CLAMP) });
  return _undefined3(toRgbResult.r, toRgbResult.g, toRgbResult.b, toRgbResult.alpha);
}
const items7 = [tmp15, tmp16, tmp17, tmp18];
pnpm_interpolateColorTs5.__closure = items7;
pnpm_interpolateColorTs5.__workletHash = 15661320741184;
pnpm_interpolateColorTs5.__initData = tmp14;
const items8 = [{ code: "(function pnpm_interpolateColorTs6(processedColors,convFromRgb){let[red,green,blue,opacity]=this.__closure;const ch1=[];const ch2=[];const ch3=[];const alpha=[];for(const processedColor of processedColors){const convertedColor=convFromRgb({r:red(processedColor),g:green(processedColor),b:blue(processedColor)});ch1.push(convertedColor.ch1);ch2.push(convertedColor.ch2);ch3.push(convertedColor.ch3);alpha.push(opacity(processedColor));}return{ch1:ch1,ch2:ch2,ch3:ch3,alpha:alpha};})" }, fn(1683).red, fn(1683).green, fn(1683).blue, fn(1683).opacity];
let closure_132_0;
let closure_132_1;
let closure_132_2;
let closure_132_3;
[tmp19, tmp20, tmp21, tmp22, tmp23] = items8;
function pnpm_interpolateColorTs6(arg0, fn) {
  const ch1 = [];
  const ch2 = [];
  const ch3 = [];
  const alpha = [];
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let obj = { r: _slicedToArray(nextResult), g: _undefined(nextResult), b: _undefined2(nextResult) };
    let tmp5 = fn(obj);
    let arr = ch1.push(tmp5.ch1);
    let arr2 = ch2.push(tmp5.ch2);
    let arr3 = ch3.push(tmp5.ch3);
    let arr4 = alpha.push(_undefined3(nextResult));
    continue;
  }
  return { ch1, ch2, ch3, alpha };
}
const items9 = [tmp20, tmp21, tmp22, tmp23];
pnpm_interpolateColorTs6.__closure = items9;
pnpm_interpolateColorTs6.__workletHash = 8600454044240;
pnpm_interpolateColorTs6.__initData = tmp19;
const items10 = [{ code: "(function pnpm_interpolateColorTs7(processedColors){let[_splitColorsIntoChannels]=this.__closure;const{ch1:ch1,ch2:ch2,ch3:ch3,alpha:alpha}=_splitColorsIntoChannels(processedColors,function(color){return{ch1:color.r,ch2:color.g,ch3:color.b};});return{r:ch1,g:ch2,b:ch3,a:alpha};})" }, pnpm_interpolateColorTs6];
let closure_133_0;
[tmp24, tmp25] = items10;
function pnpm_interpolateColorTs7(arg0) {
  const tmp = _slicedToArray(arg0, (ch1) => ({ ch1: ch1.r, ch2: ch1.g, ch3: ch1.b }));
  return { r: tmp.ch1, g: tmp.ch2, b: tmp.ch3, a: tmp.alpha };
}
const items11 = [tmp25];
pnpm_interpolateColorTs7.__closure = items11;
pnpm_interpolateColorTs7.__workletHash = 12146608615261;
pnpm_interpolateColorTs7.__initData = tmp24;
const items12 = [{ code: "(function pnpm_interpolateColorTs8(processedColors){let[_splitColorsIntoChannels,RGBtoHSV]=this.__closure;const{ch1:ch1,ch2:ch2,ch3:ch3,alpha:alpha}=_splitColorsIntoChannels(processedColors,function(color){const hsvColor=RGBtoHSV(color.r,color.g,color.b);return{ch1:hsvColor.h,ch2:hsvColor.s,ch3:hsvColor.v};});return{h:ch1,s:ch2,v:ch3,a:alpha};})" }, pnpm_interpolateColorTs6, fn(1683).RGBtoHSV];
let closure_134_0;
let closure_134_1;
[tmp26, tmp27, tmp28] = items12;
function pnpm_interpolateColorTs8(arg0) {
  let tmp = _slicedToArray(arg0, (arg0) => {
    const tmp = _undefined(arg0.r, arg0.g, arg0.b);
    return { ch1: tmp.h, ch2: tmp.s, ch3: tmp.v };
  });
  return { h: tmp.ch1, s: tmp.ch2, v: tmp.ch3, a: tmp.alpha };
}
const items13 = [tmp27, tmp28];
pnpm_interpolateColorTs8.__closure = items13;
pnpm_interpolateColorTs8.__workletHash = 572495119813;
pnpm_interpolateColorTs8.__initData = tmp26;
const items14 = [{ code: "(function pnpm_interpolateColorTs9(processedColors){let[_splitColorsIntoChannels,culori]=this.__closure;const{ch1:ch1,ch2:ch2,ch3:ch3,alpha:alpha}=_splitColorsIntoChannels(processedColors,function(color){const labColor=culori.oklab.convert.fromRgb(color);return{ch1:labColor.l,ch2:labColor.a,ch3:labColor.b};});return{l:ch1,a:ch2,b:ch3,alpha:alpha};})" }, pnpm_interpolateColorTs6, convertLrgbToOklabDefault];
let closure_135_0;
let closure_135_1;
[tmp29, tmp30, tmp31] = items14;
function pnpm_interpolateColorTs9(arg0) {
  const tmp = _slicedToArray(arg0, (arg0) => {
    const convert = oklab.oklab.convert;
    const fromRgbResult = convert.fromRgb(arg0);
    return { ch1: fromRgbResult.l, ch2: fromRgbResult.a, ch3: fromRgbResult.b };
  });
  return { l: tmp.ch1, a: tmp.ch2, b: tmp.ch3, alpha: tmp.alpha };
}
const items15 = [tmp30, tmp31];
pnpm_interpolateColorTs9.__closure = items15;
pnpm_interpolateColorTs9.__workletHash = 6103883922043;
pnpm_interpolateColorTs9.__initData = tmp29;
const items16 = [{ code: "(function processColorRanges_Pnpm_interpolateColorTs10(inputRange,outputRange){let[processColor,TRANSPARENCY_MASK]=this.__closure;const processedInputRange=[];const processedOutputRange=[];let isPrevTransparent=false;for(let i=0;i<inputRange.length;i++){const color=outputRange[i];const processedColor=processColor(color);const isTransparent=color==='transparent';if(!isTransparent){if(isPrevTransparent){processedInputRange.push(inputRange[i-1]);processedOutputRange.push(processedColor&TRANSPARENCY_MASK);}processedInputRange.push(inputRange[i]);processedOutputRange.push(processedColor);}else if(!isPrevTransparent){if(isTransparent&&i>0){const lastProcessedColor=processedOutputRange[processedOutputRange.length-1];processedInputRange.push(inputRange[i]);processedOutputRange.push(lastProcessedColor&TRANSPARENCY_MASK);}}else if(i===inputRange.length-1&&!processedOutputRange.length){const lastindex=inputRange.length-1;processedInputRange.push(inputRange[0],inputRange[lastindex]);processedOutputRange.push(0,0);}isPrevTransparent=isTransparent;}return[processedInputRange,processedOutputRange];})" }, fn(1668).processColor, 16777215];
let closure_136_0;
let closure_136_1;
[tmp32, tmp33, tmp34] = items16;
function processColorRanges(arg0, arg1) {
  items = [];
  const items1 = [];
  let num = 0;
  let flag = false;
  if (0 < arg0.length) {
    do {
      let tmp = arg1[num];
      let tmp3 = _slicedToArray(tmp);
      let tmp4 = "transparent" === tmp;
      if (tmp4) {
        if (flag) {
          if (num === arg0.length - 1) {
            if (!items1.length) {
              let arr = items.push(arg0[0], arg0[arg0.length - 1]);
              let arr2 = items1.push(0, 0);
            }
          }
        } else if (tmp4) {
          if (0 < num) {
            let arr3 = items.push(arg0[num]);
            let arr11 = items1.push(items1[items1.length - 1] & c1);
          }
        }
      } else {
        if (flag) {
          let arr12 = items.push(arg0[num - 1]);
          let arr13 = items1.push(tmp3 & c1);
        }
        let arr14 = items.push(arg0[num]);
        let arr15 = items1.push(tmp3);
      }
      num = num + 1;
      flag = tmp4;
    } while (num < arg0.length);
  }
  const items2 = [items, items1];
  return items2;
}
const items17 = [tmp33, tmp34];
processColorRanges.__closure = items17;
processColorRanges.__workletHash = 3625362273837;
processColorRanges.__initData = tmp32;
const items18 = [{ code: "(function interpolateColor_Pnpm_interpolateColorTs11(value,inputRange,outputRange,colorSpace='RGB',options={}){let[processColorRanges,interpolateColorsHSV,getInterpolateHSV,interpolateColorsRGB,getInterpolateRGB,interpolateColorsLAB,getInterpolateLAB]=this.__closure;const[processedInputRange,processedOutputRange]=processColorRanges(inputRange,outputRange);if(colorSpace==='HSV'){return interpolateColorsHSV(value,processedInputRange,getInterpolateHSV(processedOutputRange),options);}else if(colorSpace==='RGB'){return interpolateColorsRGB(value,processedInputRange,getInterpolateRGB(processedOutputRange),options);}else if(colorSpace==='LAB'){return interpolateColorsLAB(value,processedInputRange,getInterpolateLAB(processedOutputRange),options);}throw new Error(\"[Reanimated] Invalid color space provided: \"+colorSpace+\". Supported values are: ['RGB', 'HSV', 'LAB'].\");})" }, processColorRanges, pnpm_interpolateColorTs1, pnpm_interpolateColorTs8, pnpm_interpolateColorTs4, pnpm_interpolateColorTs7, pnpm_interpolateColorTs5, pnpm_interpolateColorTs9];
let _slicedToArray;
let c1;
let c2;
let c3;
let c4;
let c5;
let c6;
[tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42] = items18;
function interpolateColor(arg0, arg1, arg2) {
  let str = arg3;
  if (arg3 === undefined) {
    str = "RGB";
  }
  let obj = arg4;
  if (arg4 === undefined) {
    obj = {};
  }
  [tmp2, tmp3] = _slicedToArray(arg1, arg2);
  if ("HSV" === str) {
    return _undefined(arg0, tmp2, _undefined2(tmp3), obj);
  } else if ("RGB" === str) {
    return _undefined3(arg0, tmp2, _undefined4(tmp3), obj);
  } else if ("LAB" === str) {
    return _undefined5(arg0, tmp2, _undefined6(tmp3), obj);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[Reanimated] Invalid color space provided: " + str + ". Supported values are: ['RGB', 'HSV', 'LAB'].");
    throw error;
  }
  const tmp = _slicedToArray(_slicedToArray(arg1, arg2), 2);
}
const items19 = [tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42];
interpolateColor.__closure = items19;
interpolateColor.__workletHash = 9257625282200;
interpolateColor.__initData = tmp35;

export const Extrapolate = fn(1929).Extrapolation;
export { interpolateColor };
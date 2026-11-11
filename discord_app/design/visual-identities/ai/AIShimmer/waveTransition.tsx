// === Module 13669: waveTransition ===

// Module 13669 (waveTransition)
import "module_32";

function shiftChar(str, arg1) {
  const charCodeAtResult = str.charCodeAt(0);
  if (charCodeAtResult >= closure_4) {
    if (charCodeAtResult <= 90) {
      const _String3 = String;
      let fromCharCodeResult = String.fromCharCode(closure_4 + (charCodeAtResult - closure_4 + arg1) % 26);
    }
    return fromCharCodeResult;
  }
  if (charCodeAtResult >= closure_5) {
    if (charCodeAtResult <= 122) {
      const _String2 = String;
      fromCharCodeResult = String.fromCharCode(closure_5 + (charCodeAtResult - closure_5 + arg1) % 26);
    }
  }
  fromCharCodeResult = str;
  if (charCodeAtResult >= closure_6) {
    fromCharCodeResult = str;
    if (charCodeAtResult <= 57) {
      const _String = String;
      fromCharCodeResult = String.fromCharCode(closure_6 + (charCodeAtResult - closure_6 + arg1) % 10);
    }
  }
}
const items = [{ offset: 0, span: 0.66, ease: 1.6 }, { offset: 0.08, span: 0.78, ease: 1.6 }, { offset: 0.08, span: 0.9, ease: 7.5 }, { offset: 0.08, span: 0.92, ease: 9 }];
const items1 = [{ code: "(function bezierAxis_waveTransitionTsx1(progress,controlPoint1,controlPoint2){const remaining=1-progress;return 3*remaining*remaining*progress*controlPoint1+3*remaining*progress*progress*controlPoint2+progress*progress*progress;})" }];
[tmp2] = items1;
function bezierAxis(arg0, arg1, arg2) {
  const diff = 1 - arg0;
  const result = 3 * diff;
  return result * diff * arg0 * arg1 + result * arg0 * arg0 * arg2 + arg0 * arg0 * arg0;
}
bezierAxis.__workletHash = 15877266054614;
bezierAxis.__initData = tmp2;
const items2 = [{ code: "(function easeTail_waveTransitionTsx2(progress){let[TIME_CURVE,bezierAxis]=this.__closure;if(progress<=0)return 0;if(progress>=1)return 1;const[x1,y1,x2,y2]=TIME_CURVE;let low=0;let high=1;for(let iteration=0;iteration<20;iteration++){const midpoint=(low+high)/2;if(bezierAxis(midpoint,x1,x2)<progress){low=midpoint;}else{high=midpoint;}}return bezierAxis((low+high)/2,y1,y2);})" }, [0.5, 0.5, 0.45, 0.9], bezierAxis];
let _slicedToArray;
let c1;
[tmp3, tmp4, tmp5] = items2;
function easeTail(arg0) {
  let tmp5;
  let tmp6;
  if (arg0 <= 0) {
    return 0;
  } else if (arg0 >= 1) {
    return 1;
  } else {
    const tmp9 = _slicedToArray(_slicedToArray, 4);
    let num = 0;
    let num2 = 1;
    let num3 = 0;
    do {
      let result = (num3 + num2) / 2;
      tmp5 = num3;
      tmp6 = result;
      if (_undefined(result, tmp10, tmp11) < arg0) {
        tmp6 = num2;
        tmp5 = result;
      }
      num = num + 1;
      num2 = tmp6;
      num3 = tmp5;
    } while (num < 20);
    return _undefined((tmp5 + tmp6) / 2, tmp9[1], tmp9[3]);
  }
}
const items3 = [tmp4, tmp5];
easeTail.__closure = items3;
easeTail.__workletHash = 16150703563713;
easeTail.__initData = tmp3;
let c3 = "789ABC";
let closure_4 = "A".charCodeAt(0);
let closure_5 = "a".charCodeAt(0);
let closure_6 = "0".charCodeAt(0);
const items4 = [{ code: "(function waveFrontAt_waveTransitionTsx3(edgeIndex,progress){let[WAVE_SCHEDULE]=this.__closure;const{offset:offset,span:span,ease:ease}=WAVE_SCHEDULE[edgeIndex];const edgeProgress=(progress-offset)/span;if(edgeProgress<=0)return 0;if(edgeProgress>=1)return 1;return edgeProgress**ease;})" }, items];
let closure_129_0;
[tmp6, tmp7] = items4;
function waveFrontAt(arg0, arg1) {
  const ease = tmp.ease;
  const result = (arg1 - tmp.offset) / tmp.span;
  let num = 0;
  if (result > 0) {
    let num2 = 1;
    if (result < 1) {
      num2 = result ** ease;
    }
    num = num2;
  }
  return num;
}
const items5 = [tmp7];
waveFrontAt.__closure = items5;
waveFrontAt.__workletHash = 13583994726522;
waveFrontAt.__initData = tmp6;
const items6 = [{ code: "(function glyphLayerOpacityAt_waveTransitionTsx4(progress){let[waveFrontAt,GLYPH_BAND_END_EDGE_INDEX,GLYPH_BAND_START_EDGE_INDEX,GLYPH_FADE_IN_WIDTH,GLYPH_FADE_OUT_WIDTH]=this.__closure;const bandEnd=waveFrontAt(GLYPH_BAND_END_EDGE_INDEX,progress);const bandWidth=bandEnd-waveFrontAt(GLYPH_BAND_START_EDGE_INDEX,progress);if(bandWidth<=0)return 0;const opening=bandEnd<1;const fadeDistance=opening?GLYPH_FADE_IN_WIDTH:GLYPH_FADE_OUT_WIDTH;const opacityProgress=Math.min(1,bandWidth/fadeDistance);return opacityProgress*opacityProgress*(3-2*opacityProgress);})" }, waveFrontAt, 1, 2, 0.15, 0.5];
let closure_130_0;
let closure_130_1;
let closure_130_2;
let closure_130_3;
let closure_130_4;
[tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items6;
function glyphLayerOpacityAt(arg0) {
  const tmp = _slicedToArray(c1, arg0);
  const diff = tmp - _slicedToArray(easeTail, arg0);
  if (diff <= 0) {
    return 0;
  } else {
    const _Math = Math;
    const bound = Math.min(1, diff / (tmp < 1 ? c3 : closure_4));
    return bound * bound * (3 - 2 * bound);
  }
}
const items7 = [tmp9, tmp10, tmp11, tmp12, tmp13];
glyphLayerOpacityAt.__closure = items7;
glyphLayerOpacityAt.__workletHash = 4261116665264;
glyphLayerOpacityAt.__initData = tmp8;
const items8 = [{ code: "(function bandEndAt_waveTransitionTsx5(progress){let[waveFrontAt,GLYPH_BAND_END_EDGE_INDEX]=this.__closure;return waveFrontAt(GLYPH_BAND_END_EDGE_INDEX,progress);})" }, waveFrontAt, 1];
let closure_131_0;
let closure_131_1;
[tmp14, tmp15, tmp16] = items8;
function bandEndAt(arg0) {
  return _slicedToArray(c1, arg0);
}
const items9 = [tmp15, tmp16];
bandEndAt.__closure = items9;
bandEndAt.__workletHash = 1100427923899;
bandEndAt.__initData = tmp14;
const items10 = [{ code: "(function bandStartAt_waveTransitionTsx6(progress){let[waveFrontAt,GLYPH_BAND_START_EDGE_INDEX]=this.__closure;return waveFrontAt(GLYPH_BAND_START_EDGE_INDEX,progress);})" }, waveFrontAt, 2];
let closure_132_0;
let closure_132_1;
[tmp17, tmp18, tmp19] = items10;
function bandStartAt(arg0) {
  return _slicedToArray(c1, arg0);
}
const items11 = [tmp18, tmp19];
bandStartAt.__closure = items11;
bandStartAt.__workletHash = 16157365904055;
bandStartAt.__initData = tmp17;
const items12 = [{ code: "(function bandEdgesAt_waveTransitionTsx7(progress,width,extraTravel){let[easeTail,waveFrontAt,WAVE_SCHEDULE,bandStartAt,bandEndAt]=this.__closure;const easedProgress=easeTail(progress);const travelDistance=width+2*extraTravel;return{incomingTextEnd:waveFrontAt(WAVE_SCHEDULE.length-1,easedProgress)*travelDistance-extraTravel,bandStart:bandStartAt(easedProgress)*travelDistance-extraTravel,bandEnd:bandEndAt(easedProgress)*travelDistance-extraTravel,outgoingTextStart:waveFrontAt(0,easedProgress)*travelDistance-extraTravel};})" }, easeTail, waveFrontAt, items, bandStartAt, bandEndAt];
let closure_133_0;
let closure_133_1;
let closure_133_2;
let closure_133_3;
let closure_133_4;
[tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items12;
function bandEdgesAt(arg0, arg1, arg2) {
  const tmp = _slicedToArray(arg0);
  const sum = arg1 + 2 * arg2;
  return { incomingTextEnd: _undefined(easeTail.length - 1, tmp) * sum - arg2, bandStart: v789ABC(tmp) * sum - arg2, bandEnd: closure_4(tmp) * sum - arg2, outgoingTextStart: _undefined(0, tmp) * sum - arg2 };
}
const items13 = [tmp21, tmp22, tmp23, tmp24, tmp25];
bandEdgesAt.__closure = items13;
bandEdgesAt.__workletHash = 7012522582496;
bandEdgesAt.__initData = tmp20;
const items14 = [{ code: "(function bandGlyphsAt_waveTransitionTsx8(progress,slotCount,glyphChoices,extraTravel){let[bandEdgesAt,GLYPH_RAMP,RAMP_SLOTS]=this.__closure;if(slotCount<=0||glyphChoices.length===0)return'';const{bandStart:bandStart,bandEnd:bandEnd}=bandEdgesAt(progress,slotCount,extraTravel);const outsideGlyph=GLYPH_RAMP.charAt(0);let glyphs='';for(let slot=0;slot<slotCount;slot++){const darkestGlyph=glyphChoices.charAt(slot%glyphChoices.length);const slotCenter=slot+0.5;if(slotCenter>=bandEnd||slotCenter<bandStart){glyphs+=outsideGlyph;continue;}const distanceFromEdge=Math.min(slotCenter-bandStart,bandEnd-slotCenter);const densityIndex=Math.max(0,Math.min(Math.floor(distanceFromEdge/RAMP_SLOTS*GLYPH_RAMP.length),GLYPH_RAMP.length));glyphs+=densityIndex<GLYPH_RAMP.length?GLYPH_RAMP.charAt(densityIndex):darkestGlyph;}return glyphs;})" }, bandEdgesAt, "123456", 4];
let closure_134_0;
let closure_134_1;
let closure_134_2;
[tmp26, tmp27, tmp28, tmp29] = items14;
function bandGlyphsAt(arg0, arg1, str, arg3) {
  if (arg1 > 0) {
    if (0 !== str.length) {
      ({ bandStart, bandEnd } = _slicedToArray(arg0, arg1, arg3));
      str = "";
      let num = 0;
      let str2 = "";
      if (0 < arg1) {
        while (true) {
          let charAtResult = str.charAt(num % str.length);
          let sum = num + 0.5;
          if (sum < bandEnd) {
            if (sum >= bandStart) {
              let _Math = Math;
              let _Math2 = Math;
              let _Math3 = Math;
              let _Math4 = Math;
              let bound = Math.max(0, Math.min(Math.floor(Math.min(sum - bandStart, bandEnd - sum) / easeTail * _undefined.length), _undefined.length));
              if (bound < _undefined.length) {
                charAtResult = _undefined.charAt(bound);
              }
              let sum1 = str + charAtResult;
            }
            num = num + 1;
            str = sum1;
            str2 = sum1;
            if (num >= arg1) {
              break;
            }
          }
          sum1 = str + tmp12;
        }
      }
      return str2;
    }
  }
  return "";
}
const items15 = [tmp27, tmp28, tmp29];
bandGlyphsAt.__closure = items15;
bandGlyphsAt.__workletHash = 9167158967271;
bandGlyphsAt.__initData = tmp26;
function waveArrivalTime(arg0, arg1) {
  let num = 0;
  let num2 = 1;
  let num3 = 0;
  if (arg1 <= 0) {
    return 0;
  } else {
    let tmp5 = num3;
    while (typeof easeTail === "function") {
      let result = (tmp5 + num2) / 2;
      let num4 = 0;
      if (result > 0) {
        num4 = 1;
        if (1 > result) {
          let tmp9 = _slicedToArray(_slicedToArray, 4);
          let num5 = 0;
          let num6 = 1;
          let num7 = 0;
          do {
            let result1 = (num7 + num6) / 2;
            let tmp16 = num7;
            let tmp17 = result1;
            if (_undefined(result1, tmp10, tmp11) < result) {
              tmp17 = num6;
              tmp16 = result1;
            }
            num5 = num5 + 1;
            num6 = tmp17;
            num7 = tmp16;
          } while (num5 < 20);
          num4 = _undefined((tmp16 + tmp17) / 2, tmp9[1], tmp9[3]);
        }
      }
      if (typeof tmp === "function") {
        let tmp19 = closure_136_0[arg0];
        let ease = tmp19.ease;
        let result2 = (num4 - tmp19.offset) / tmp19.span;
        let num8 = 0;
        if (result2 > 0) {
          let num9 = 1;
          if (result2 < 1) {
            num9 = result2 ** ease;
          }
          num8 = num9;
        }
        let tmp23 = result;
        if (num8 < arg1) {
          tmp23 = num2;
          tmp5 = result;
        }
        num = num + 1;
        num2 = tmp23;
        num3 = tmp5;
        if (num < 24) {
          continue;
        } else {
          return (tmp5 + tmp23) / 2;
        }
      } else {
        let str2 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    throw new TypeError("Trying to call a non-function");
  }
}
const size = fn(2);
let result = size.fileFinishedImporting("design/visual-identities/ai/AIShimmer/waveTransition.tsx");

export const STATE_ORIGINAL = 0;
export const STATE_SHIFTED_FROM = 1;
export const STATE_GLYPH = 2;
export const STATE_SHIFTED_TO = 3;
export const STATE_SETTLED = 4;
export { easeTail };
export { waveArrivalTime };
export function bandArrivalTime(arg0) {
  let num = 0;
  let num2 = 1;
  let num3 = 0;
  let num4 = 0;
  if (arg0 > 0) {
    let tmp5 = num3;
    while (typeof easeTail === "function") {
      let result = (tmp5 + num2) / 2;
      let num5 = 0;
      if (result > 0) {
        num5 = 1;
        if (1 > result) {
          let tmp9 = _slicedToArray(_slicedToArray, 4);
          let num6 = 0;
          let num7 = 1;
          let num8 = 0;
          do {
            let result1 = (num8 + num7) / 2;
            let tmp16 = num8;
            let tmp17 = result1;
            if (_undefined(result1, tmp10, tmp11) < result) {
              tmp17 = num7;
              tmp16 = result1;
            }
            num6 = num6 + 1;
            num7 = tmp17;
            num8 = tmp16;
          } while (num6 < 20);
          num5 = _undefined((tmp16 + tmp17) / 2, tmp9[1], tmp9[3]);
        }
      }
      if (typeof tmp === "function") {
        let tmp19 = closure_136_0[1];
        let ease = tmp19.ease;
        let result2 = (num5 - tmp19.offset) / tmp19.span;
        let num9 = 0;
        if (result2 > 0) {
          let num10 = 1;
          if (result2 < 1) {
            num10 = result2 ** ease;
          }
          num9 = num10;
        }
        let tmp23 = result;
        if (num9 < arg0) {
          tmp23 = num2;
          tmp5 = result;
        }
        num = num + 1;
        num2 = tmp23;
        num3 = tmp5;
        if (num < 24) {
          continue;
        } else {
          num4 = (tmp5 + tmp23) / 2;
        }
      } else {
        let str2 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    throw new TypeError("Trying to call a non-function");
  }
  return num4;
}
export function bandDepartureTime(arg0) {
  let num = 0;
  let num2 = 1;
  let num3 = 0;
  let num4 = 0;
  if (arg0 > 0) {
    let tmp5 = num3;
    while (typeof easeTail === "function") {
      let result = (tmp5 + num2) / 2;
      let num5 = 0;
      if (result > 0) {
        num5 = 1;
        if (1 > result) {
          let tmp9 = _slicedToArray(_slicedToArray, 4);
          let num6 = 0;
          let num7 = 1;
          let num8 = 0;
          do {
            let result1 = (num8 + num7) / 2;
            let tmp16 = num8;
            let tmp17 = result1;
            if (_undefined(result1, tmp10, tmp11) < result) {
              tmp17 = num7;
              tmp16 = result1;
            }
            num6 = num6 + 1;
            num7 = tmp17;
            num8 = tmp16;
          } while (num6 < 20);
          num5 = _undefined((tmp16 + tmp17) / 2, tmp9[1], tmp9[3]);
        }
      }
      if (typeof tmp === "function") {
        let tmp19 = closure_136_0[2];
        let ease = tmp19.ease;
        let result2 = (num5 - tmp19.offset) / tmp19.span;
        let num9 = 0;
        if (result2 > 0) {
          let num10 = 1;
          if (result2 < 1) {
            num10 = result2 ** ease;
          }
          num9 = num10;
        }
        let tmp23 = result;
        if (num9 < arg0) {
          tmp23 = num2;
          tmp5 = result;
        }
        num = num + 1;
        num2 = tmp23;
        num3 = tmp5;
        if (num < 24) {
          continue;
        } else {
          num4 = (tmp5 + tmp23) / 2;
        }
      } else {
        let str2 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    throw new TypeError("Trying to call a non-function");
  }
  return num4;
}
export const CHAR_SHIFT = 6;
export const SHIFTED_OPACITY = 0.55;
export const GLYPH_RAMP = "123456";
export const GLYPH_PEAK = "789ABC";
export const GLYPH_FONT_SCALE = 0.76;
export const DEFAULT_PASS_DURATION = 880;
export const REDUCED_MOTION_FADE_MS = 220;
export const REDUCED_MOTION_PASS_MS = 440;
export { shiftChar };
export { waveFrontAt };
export function cellStateAt(arg0, arg1, arg2) {
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < _undefined.length) {
    let sum = num2;
    while (typeof waveFrontAt === "function") {
      let tmp5 = closure_136_0[num];
      let ease = tmp5.ease;
      let result = (arg1 - tmp5.offset) / tmp5.span;
      let num4 = 0;
      if (result > 0) {
        let num5 = 1;
        if (result < 1) {
          num5 = result ** ease;
        }
        num4 = num5;
      }
      if (num4 * arg2 > arg0 + 0.5) {
        sum = num + 1;
      }
      num = num + 1;
      num2 = sum;
      num3 = sum;
    }
    throw new TypeError("Trying to call a non-function");
  }
  return num3;
}
export function isResolvedState(arg0) {
  return arg0 >= 3;
}
export function charForState(arg0, arg1, arg2, arg3) {
  if (0 === arg3) {
    let str4 = arg0[arg2];
    if (str4 == null) {
      str4 = "";
    }
    return str4;
  } else {
    if (1 !== arg3) {
      if (2 !== arg3) {
        if (3 === arg3) {
          let str2 = arg1[arg2];
          if (str2 == null) {
            str2 = "";
          }
          const charCodeAtResult = str2.charCodeAt(0);
          if (charCodeAtResult >= closure_4) {
            if (charCodeAtResult <= 90) {
              const _String3 = String;
              let fromCharCodeResult = String.fromCharCode(closure_4 + (charCodeAtResult - closure_4 + 6) % 26);
            }
            return fromCharCodeResult;
          }
          if (charCodeAtResult >= closure_5) {
            if (charCodeAtResult <= 122) {
              const _String2 = String;
              fromCharCodeResult = String.fromCharCode(closure_5 + (charCodeAtResult - closure_5 + 6) % 26);
            }
          }
          fromCharCodeResult = str2;
          if (charCodeAtResult >= closure_6) {
            fromCharCodeResult = str2;
            if (charCodeAtResult <= 57) {
              const _String = String;
              fromCharCodeResult = String.fromCharCode(closure_6 + (charCodeAtResult - closure_6 + 6) % 10);
            }
          }
        } else {
          let str = arg1[arg2];
          if (str == null) {
            str = "";
          }
          return str;
        }
      }
    }
    let str3 = arg0[arg2];
    if (str3 == null) {
      str3 = "";
    }
    const charCodeAtResult1 = str3.charCodeAt(0);
    if (charCodeAtResult1 >= closure_4) {
      if (charCodeAtResult1 <= 90) {
        const _String6 = String;
        let fromCharCodeResult1 = String.fromCharCode(closure_4 + (charCodeAtResult1 - closure_4 + 6) % 26);
      }
      return fromCharCodeResult1;
    }
    if (charCodeAtResult1 >= closure_5) {
      if (charCodeAtResult1 <= 122) {
        const _String5 = String;
        fromCharCodeResult1 = String.fromCharCode(closure_5 + (charCodeAtResult1 - closure_5 + 6) % 26);
      }
    }
    fromCharCodeResult1 = str3;
    if (charCodeAtResult1 >= closure_6) {
      fromCharCodeResult1 = str3;
      if (charCodeAtResult1 <= 57) {
        const _String4 = String;
        fromCharCodeResult1 = String.fromCharCode(closure_6 + (charCodeAtResult1 - closure_6 + 6) % 10);
      }
    }
  }
}
export function dirtyRangeAt(arg0, arg1) {
  let num = 1;
  if (typeof waveFrontAt === "function") {
    const ease = tmp9.ease;
    const result = (arg0 - tmp9.offset) / tmp9.span;
    let num3 = 0;
    if (result > 0) {
      let tmp11 = num;
      if (result < num) {
        tmp11 = result ** ease;
      }
      num3 = tmp11;
    }
    const obj = { start: tmp2(0, tmp4(num3 * arg1)), end: null };
    if (typeof tmp5 === "function") {
      const first = closure_129_0[0];
      const ease2 = first.ease;
      const result1 = (arg0 - first.offset) / first.span;
      let num4 = 0;
      if (result1 > 0) {
        if (result1 < num) {
          num = result1 ** ease2;
        }
        num4 = num;
      }
      obj.end = tmp16(arg1, tmp18(num4 * arg1));
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
export { glyphLayerOpacityAt };
export { bandEndAt };
export { bandStartAt };
export function glyphRampIndexAt(arg0, arg1, arg2) {
  if (typeof bandEndAt === "function") {
    const result = closure_137_0(closure_137_1, arg1) * arg2;
    if (typeof bandStartAt === "function") {
      const result1 = closure_138_0(closure_138_1, arg1) * arg2;
      const sum = arg0 + 0.5;
      if (sum < result) {
        if (sum >= result1) {
          const _Math = Math;
          const _Math2 = Math;
          const _Math3 = Math;
          const _Math4 = Math;
          return Math.max(0, Math.min(Math.floor(Math.min(sum - result1, result - sum) / 4 * 6), 6));
        }
      }
      return -1;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
export { bandEdgesAt };
export function shiftedLineFor(slotA) {
  let str = "";
  while (tmp !== undefined) {
    str = `${shiftChar(tmp2, 6)}`;
    continue;
  }
  return str;
}
export { bandGlyphsAt };
export function slotCountFor(arg0, arg1, arg2) {
  let num = arg3;
  if (arg3 === undefined) {
    num = 0;
  }
  if (0 !== arg0) {
    if (0 !== arg1) {
      const _Math = Math;
      const _Math2 = Math;
      let bound = Math.max(1, Math.ceil((arg0 + num) / arg1));
    }
    return bound;
  }
  bound = Math.max(1, arg2);
}
export function pickSlotFaces(arg0, fn) {
  const array = new Array(arg0);
  for (let num = 0; num < arg0; num = num + 1) {
    array[num] = v789ABC.charAt(6 * fn() | 0);
  }
  return array;
}
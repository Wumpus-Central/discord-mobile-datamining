// discord_app/design/visual-identities/ai/AIShimmer/waveTransition.tsx
import size from "../../../../../_runtime/metro/00002__.js";

function shiftChar(str, arg1) {
  const charCodeAtResult = str.charCodeAt(0);
  if (charCodeAtResult >= closure_6) {
    if (charCodeAtResult <= 90) {
      const _String3 = String;
      let fromCharCodeResult = String.fromCharCode(closure_6 + ((charCodeAtResult - closure_6 + arg1) % 26));
    }
    return fromCharCodeResult;
  }
  if (charCodeAtResult >= closure_7) {
    if (charCodeAtResult <= 122) {
      const _String2 = String;
      fromCharCodeResult = String.fromCharCode(closure_7 + ((charCodeAtResult - closure_7 + arg1) % 26));
    }
  }
  fromCharCodeResult = str;
  if (charCodeAtResult >= closure_8) {
    fromCharCodeResult = str;
    if (charCodeAtResult <= 57) {
      const _String = String;
      fromCharCodeResult = String.fromCharCode(closure_8 + ((charCodeAtResult - closure_8 + arg1) % 10));
    }
  }
}
const items = [
  { offset: 0, span: 0.66, ease: 1.6 },
  { offset: 0.08, span: 0.78, ease: 1.6 },
  { offset: 0.08, span: 0.9, ease: 7.5 },
  { offset: 0.08, span: 0.92, ease: 9 },
];
const items1 = [0.5, 0.5, 0.45, 0.9];
function bezierAxis(arg0, arg1, arg2) {
  const diff = 1 - arg0;
  const result = 3 * diff;
  return result * diff * arg0 * arg1 + result * arg0 * arg0 * arg2 + arg0 * arg0 * arg0;
}
bezierAxis.__closure = {};
bezierAxis.__workletHash = 15821918391351;
bezierAxis.__initData = {
  code: "function bezierAxis_waveTransitionTsx1(progress,controlPoint1,controlPoint2){const remaining=1-progress;return 3*remaining*remaining*progress*controlPoint1+3*remaining*progress*progress*controlPoint2+progress*progress*progress;}",
};
function easeTail(diff) {
  if (diff <= 0) {
    return 0;
  } else if (diff >= 1) {
    return 1;
  } else {
    let num = 0;
    let num2 = 1;
    let num3 = 0;
    let tmp4 = num3;
    while (typeof bezierAxis === "function") {
      let result = (tmp4 + num2) / 2;
      diff = 1 - result;
      let result1 = 3 * diff;
      let tmp8 = result;
      if (result1 * diff * result * tmp13 + result1 * result * result * tmp15 + result * result * result < diff) {
        tmp8 = num2;
        tmp4 = result;
      }
      num = num + 1;
      num2 = tmp8;
      num3 = tmp4;
      if (num < 20) {
        continue;
      } else if (typeof tmp === "function") {
        let result2 = (tmp4 + tmp8) / 2;
        let diff1 = 1 - result2;
        let result3 = 3 * diff1;
        return result3 * diff1 * result2 * tmp14 + result3 * result2 * result2 * tmp16 + result2 * result2 * result2;
      } else {
        let str2 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    throw new TypeError("Trying to call a non-function");
  }
}
easeTail.__closure = { TIME_CURVE: items1, bezierAxis };
easeTail.__workletHash = 16708913568056;
easeTail.__initData = {
  code: "function easeTail_waveTransitionTsx2(progress){const{TIME_CURVE,bezierAxis}=this.__closure;if(progress<=0)return 0;if(progress>=1)return 1;const[x1,y1,x2,y2]=TIME_CURVE;let low=0;let high=1;for(let iteration=0;iteration<20;iteration++){const midpoint=(low+high)/2;if(bezierAxis(midpoint,x1,x2)<progress){low=midpoint;}else{high=midpoint;}}return bezierAxis((low+high)/2,y1,y2);}",
};
let c4 = "123456";
let c5 = "789ABC";
let closure_6 = "A".charCodeAt(0);
let closure_7 = "a".charCodeAt(0);
let closure_8 = "0".charCodeAt(0);
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
waveFrontAt.__closure = { WAVE_SCHEDULE: items };
waveFrontAt.__workletHash = 10864523756867;
waveFrontAt.__initData = {
  code: "function waveFrontAt_waveTransitionTsx3(edgeIndex,progress){const{WAVE_SCHEDULE}=this.__closure;const{offset:offset,span:span,ease:ease}=WAVE_SCHEDULE[edgeIndex];const edgeProgress=(progress-offset)/span;if(edgeProgress<=0)return 0;if(edgeProgress>=1)return 1;return edgeProgress**ease;}",
};
function glyphLayerOpacityAt(arg0) {
  if (typeof waveFrontAt === "function") {
    const ease = tmp4.ease;
    const result = (arg0 - tmp4.offset) / tmp4.span;
    let num2 = 0;
    if (result > 0) {
      let num3 = 1;
      if (result < 1) {
        num3 = result ** ease;
      }
      num2 = num3;
    }
    if (typeof tmp === "function") {
      const ease2 = tmp8.ease;
      const result1 = (arg0 - tmp8.offset) / tmp8.span;
      let num4 = 0;
      if (result1 > 0) {
        let num5 = 1;
        if (result1 < 1) {
          num5 = result1 ** ease2;
        }
        num4 = num5;
      }
      const diff = num2 - num4;
      if (diff <= 0) {
        return 0;
      } else {
        let num6 = 0.5;
        if (num2 < 1) {
          num6 = 0.15;
        }
        const _Math = Math;
        const bound = Math.min(1, diff / num6);
        return bound * bound * (3 - 2 * bound);
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
glyphLayerOpacityAt.__closure = {
  waveFrontAt,
  GLYPH_BAND_END_EDGE_INDEX: 1,
  GLYPH_BAND_START_EDGE_INDEX: 2,
  GLYPH_FADE_IN_WIDTH: 0.15,
  GLYPH_FADE_OUT_WIDTH: 0.5,
};
glyphLayerOpacityAt.__workletHash = 10135623648073;
glyphLayerOpacityAt.__initData = {
  code: "function glyphLayerOpacityAt_waveTransitionTsx4(progress){const{waveFrontAt,GLYPH_BAND_END_EDGE_INDEX,GLYPH_BAND_START_EDGE_INDEX,GLYPH_FADE_IN_WIDTH,GLYPH_FADE_OUT_WIDTH}=this.__closure;const bandEnd=waveFrontAt(GLYPH_BAND_END_EDGE_INDEX,progress);const bandWidth=bandEnd-waveFrontAt(GLYPH_BAND_START_EDGE_INDEX,progress);if(bandWidth<=0)return 0;const opening=bandEnd<1;const fadeDistance=opening?GLYPH_FADE_IN_WIDTH:GLYPH_FADE_OUT_WIDTH;const opacityProgress=Math.min(1,bandWidth/fadeDistance);return opacityProgress*opacityProgress*(3-2*opacityProgress);}",
};
function bandEndAt(arg0) {
  if (typeof waveFrontAt === "function") {
    const ease = tmp3.ease;
    const result = (arg0 - tmp3.offset) / tmp3.span;
    let num = 0;
    if (result > 0) {
      let num2 = 1;
      if (result < 1) {
        num2 = result ** ease;
      }
      num = num2;
    }
    return num;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
bandEndAt.__closure = { waveFrontAt, GLYPH_BAND_END_EDGE_INDEX: 1 };
bandEndAt.__workletHash = 1336985328258;
bandEndAt.__initData = {
  code: "function bandEndAt_waveTransitionTsx5(progress){const{waveFrontAt,GLYPH_BAND_END_EDGE_INDEX}=this.__closure;return waveFrontAt(GLYPH_BAND_END_EDGE_INDEX,progress);}",
};
function bandStartAt(arg0) {
  if (typeof waveFrontAt === "function") {
    const ease = tmp3.ease;
    const result = (arg0 - tmp3.offset) / tmp3.span;
    let num = 0;
    if (result > 0) {
      let num2 = 1;
      if (result < 1) {
        num2 = result ** ease;
      }
      num = num2;
    }
    return num;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
bandStartAt.__closure = { waveFrontAt, GLYPH_BAND_START_EDGE_INDEX: 2 };
bandStartAt.__workletHash = 2931057367950;
bandStartAt.__initData = {
  code: "function bandStartAt_waveTransitionTsx6(progress){const{waveFrontAt,GLYPH_BAND_START_EDGE_INDEX}=this.__closure;return waveFrontAt(GLYPH_BAND_START_EDGE_INDEX,progress);}",
};
function bandEdgesAt(diff, animationWidth, overshoot) {
  const tmp = easeTail(diff);
  const sum = animationWidth + 2 * overshoot;
  let num = 1;
  if (typeof waveFrontAt === "function") {
    const ease = tmp5.ease;
    const result = (tmp - tmp5.offset) / tmp5.span;
    let num3 = 0;
    if (result > 0) {
      let tmp7 = num;
      if (num > result) {
        tmp7 = result ** ease;
      }
      num3 = tmp7;
    }
    const obj = { incomingTextEnd: num3 * sum - overshoot, bandStart: null, bandEnd: null, outgoingTextStart: null };
    if (typeof bandStartAt === "function") {
      if (typeof waveFrontAt === "function") {
        const ease2 = tmp11.ease;
        const result1 = (tmp - tmp11.offset) / tmp11.span;
        let num4 = 0;
        if (result1 > 0) {
          let tmp13 = num;
          if (num > result1) {
            tmp13 = result1 ** ease2;
          }
          num4 = tmp13;
        }
        obj.bandStart = num4 * sum - overshoot;
        if (typeof bandEndAt === "function") {
          if (typeof waveFrontAt === "function") {
            const ease3 = tmp17.ease;
            const result2 = (tmp - tmp17.offset) / tmp17.span;
            let num5 = 0;
            if (result2 > 0) {
              let tmp19 = num;
              if (num > result2) {
                tmp19 = result2 ** ease3;
              }
              num5 = tmp19;
            }
            obj.bandEnd = num5 * sum - overshoot;
            if (typeof waveFrontAt === "function") {
              const first = items[0];
              const ease4 = first.ease;
              const result3 = (tmp - first.offset) / first.span;
              let num6 = 0;
              if (result3 > 0) {
                if (num > result3) {
                  num = result3 ** ease4;
                }
                num6 = num;
              }
              obj.outgoingTextStart = num6 * sum - overshoot;
              return obj;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
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
bandEdgesAt.__closure = { easeTail, waveFrontAt, WAVE_SCHEDULE: items, bandStartAt, bandEndAt };
bandEdgesAt.__workletHash = 10777339350425;
bandEdgesAt.__initData = {
  code: "function bandEdgesAt_waveTransitionTsx7(progress,width,extraTravel){const{easeTail,waveFrontAt,WAVE_SCHEDULE,bandStartAt,bandEndAt}=this.__closure;const easedProgress=easeTail(progress);const travelDistance=width+2*extraTravel;return{incomingTextEnd:waveFrontAt(WAVE_SCHEDULE.length-1,easedProgress)*travelDistance-extraTravel,bandStart:bandStartAt(easedProgress)*travelDistance-extraTravel,bandEnd:bandEndAt(easedProgress)*travelDistance-extraTravel,outgoingTextStart:waveFrontAt(0,easedProgress)*travelDistance-extraTravel};}",
};
function bandGlyphsAt(result, slotCount, glyphChoices, overshootInSlots) {
  if (slotCount > 0) {
    if (0 !== glyphChoices.length) {
      ({ bandStart, bandEnd } = bandEdgesAt(result, slotCount, overshootInSlots));
      let str = "";
      let num = 0;
      let str2 = "";
      if (0 < slotCount) {
        while (true) {
          let charAtResult = glyphChoices.charAt(num % glyphChoices.length);
          let sum = num + 0.5;
          if (sum < bandEnd) {
            if (sum >= bandStart) {
              let _Math = Math;
              let _Math2 = Math;
              let _Math3 = Math;
              let _Math4 = Math;
              let bound = Math.max(0, Math.min(Math.floor((Math.min(sum - bandStart, bandEnd - sum) / 4) * 6), 6));
              if (bound < 6) {
                charAtResult = v123456.charAt(bound);
              }
              let sum1 = str + charAtResult;
            }
            num = num + 1;
            str = sum1;
            str2 = sum1;
            if (num >= slotCount) {
              break;
            }
          }
          sum1 = str + tmp14;
        }
      }
      return str2;
    }
  }
  return "";
}
bandGlyphsAt.__closure = { bandEdgesAt, GLYPH_RAMP: "123456", RAMP_SLOTS: 4 };
bandGlyphsAt.__workletHash = 15659427124414;
bandGlyphsAt.__initData = {
  code: "function bandGlyphsAt_waveTransitionTsx8(progress,slotCount,glyphChoices,extraTravel){const{bandEdgesAt,GLYPH_RAMP,RAMP_SLOTS}=this.__closure;if(slotCount<=0||glyphChoices.length===0)return'';const{bandStart:bandStart,bandEnd:bandEnd}=bandEdgesAt(progress,slotCount,extraTravel);const outsideGlyph=GLYPH_RAMP.charAt(0);let glyphs='';for(let slot=0;slot<slotCount;slot++){const darkestGlyph=glyphChoices.charAt(slot%glyphChoices.length);const slotCenter=slot+0.5;if(slotCenter>=bandEnd||slotCenter<bandStart){glyphs+=outsideGlyph;continue;}const distanceFromEdge=Math.min(slotCenter-bandStart,bandEnd-slotCenter);const densityIndex=Math.max(0,Math.min(Math.floor(distanceFromEdge/RAMP_SLOTS*GLYPH_RAMP.length),GLYPH_RAMP.length));glyphs+=densityIndex<GLYPH_RAMP.length?GLYPH_RAMP.charAt(densityIndex):darkestGlyph;}return glyphs;}",
};
let result = size.fileFinishedImporting("design/visual-identities/ai/AIShimmer/waveTransition.tsx");

export const STATE_ORIGINAL = 0;
export const STATE_SHIFTED_FROM = 1;
export const STATE_GLYPH = 2;
export const STATE_SHIFTED_TO = 3;
export const STATE_SETTLED = 4;
export { easeTail };
export const waveArrivalTime = function waveArrivalTime(arg0, arg1) {
  let num = 0;
  let num2 = 1;
  let num3 = 0;
  if (arg1 <= 0) {
    return 0;
  } else {
    const result = (num3 + num2) / 2;
    let tmp7 = num3;
    while (typeof waveFrontAt === "function") {
      let tmp9 = items[arg0];
      let ease = tmp9.ease;
      let result1 = (tmp4 - tmp9.offset) / tmp9.span;
      let num4 = 0;
      if (result1 > 0) {
        let num5 = 1;
        if (1 > result1) {
          num5 = result1 ** ease;
        }
        num4 = num5;
      }
      let tmp13 = result;
      if (num4 < arg1) {
        tmp13 = num2;
        tmp7 = result;
      }
      num = num + 1;
      num2 = tmp13;
      num3 = tmp7;
      if (num < 24) {
        continue;
      } else {
        return (tmp7 + tmp13) / 2;
      }
    }
    throw new TypeError("Trying to call a non-function");
  }
};
export const bandArrivalTime = function bandArrivalTime(arg0) {
  let num = 0;
  let num2 = 1;
  let num3 = 0;
  let num4 = 0;
  if (arg0 > 0) {
    const result = (num3 + num2) / 2;
    let tmp7 = num3;
    while (typeof waveFrontAt === "function") {
      let tmp9 = items[1];
      let ease = tmp9.ease;
      let result1 = (tmp4 - tmp9.offset) / tmp9.span;
      let num5 = 0;
      if (result1 > 0) {
        let num6 = 1;
        if (1 > result1) {
          num6 = result1 ** ease;
        }
        num5 = num6;
      }
      let tmp13 = result;
      if (num5 < arg0) {
        tmp13 = num2;
        tmp7 = result;
      }
      num = num + 1;
      num2 = tmp13;
      num3 = tmp7;
      if (num < 24) {
        continue;
      } else {
        num4 = (tmp7 + tmp13) / 2;
      }
    }
    throw new TypeError("Trying to call a non-function");
  }
  return num4;
};
export const bandDepartureTime = function bandDepartureTime(arg0) {
  let num = 0;
  let num2 = 1;
  let num3 = 0;
  let num4 = 0;
  if (arg0 > 0) {
    const result = (num3 + num2) / 2;
    let tmp7 = num3;
    while (typeof waveFrontAt === "function") {
      let tmp9 = items[2];
      let ease = tmp9.ease;
      let result1 = (tmp4 - tmp9.offset) / tmp9.span;
      let num5 = 0;
      if (result1 > 0) {
        let num6 = 1;
        if (1 > result1) {
          num6 = result1 ** ease;
        }
        num5 = num6;
      }
      let tmp13 = result;
      if (num5 < arg0) {
        tmp13 = num2;
        tmp7 = result;
      }
      num = num + 1;
      num2 = tmp13;
      num3 = tmp7;
      if (num < 24) {
        continue;
      } else {
        num4 = (tmp7 + tmp13) / 2;
      }
    }
    throw new TypeError("Trying to call a non-function");
  }
  return num4;
};
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
export const cellStateAt = function cellStateAt(arg0, arg1, arg2) {
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < items.length) {
    let sum = num2;
    while (typeof waveFrontAt === "function") {
      let tmp4 = items[num];
      let ease = tmp4.ease;
      let result = (arg1 - tmp4.offset) / tmp4.span;
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
};
export const isResolvedState = function isResolvedState(arg0) {
  return arg0 >= 3;
};
export const charForState = function charForState(arg0, arg1, arg2, arg3) {
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
          if (charCodeAtResult >= closure_6) {
            if (charCodeAtResult <= 90) {
              const _String3 = String;
              let fromCharCodeResult = String.fromCharCode(closure_6 + ((charCodeAtResult - closure_6 + 6) % 26));
            }
            return fromCharCodeResult;
          }
          if (charCodeAtResult >= closure_7) {
            if (charCodeAtResult <= 122) {
              const _String2 = String;
              fromCharCodeResult = String.fromCharCode(closure_7 + ((charCodeAtResult - closure_7 + 6) % 26));
            }
          }
          fromCharCodeResult = str2;
          if (charCodeAtResult >= closure_8) {
            fromCharCodeResult = str2;
            if (charCodeAtResult <= 57) {
              const _String = String;
              fromCharCodeResult = String.fromCharCode(closure_8 + ((charCodeAtResult - closure_8 + 6) % 10));
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
    if (charCodeAtResult1 >= closure_6) {
      if (charCodeAtResult1 <= 90) {
        const _String6 = String;
        let fromCharCodeResult1 = String.fromCharCode(closure_6 + ((charCodeAtResult1 - closure_6 + 6) % 26));
      }
      return fromCharCodeResult1;
    }
    if (charCodeAtResult1 >= closure_7) {
      if (charCodeAtResult1 <= 122) {
        const _String5 = String;
        fromCharCodeResult1 = String.fromCharCode(closure_7 + ((charCodeAtResult1 - closure_7 + 6) % 26));
      }
    }
    fromCharCodeResult1 = str3;
    if (charCodeAtResult1 >= closure_8) {
      fromCharCodeResult1 = str3;
      if (charCodeAtResult1 <= 57) {
        const _String4 = String;
        fromCharCodeResult1 = String.fromCharCode(closure_8 + ((charCodeAtResult1 - closure_8 + 6) % 10));
      }
    }
  }
};
export const dirtyRangeAt = function dirtyRangeAt(arg0, arg1) {
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
      const first = items[0];
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
};
export { glyphLayerOpacityAt };
export { bandEndAt };
export { bandStartAt };
export const glyphRampIndexAt = function glyphRampIndexAt(arg0, arg1, arg2) {
  if (typeof bandEndAt === "function") {
    if (typeof waveFrontAt === "function") {
      const ease = tmp4.ease;
      const result = (arg1 - tmp4.offset) / tmp4.span;
      let num2 = 0;
      if (result > 0) {
        let num3 = 1;
        if (result < 1) {
          num3 = result ** ease;
        }
        num2 = num3;
      }
      const result1 = num2 * arg2;
      if (typeof bandStartAt === "function") {
        if (typeof tmp === "function") {
          const ease2 = tmp11.ease;
          const result2 = (arg1 - tmp11.offset) / tmp11.span;
          let num4 = 0;
          if (result2 > 0) {
            let num5 = 1;
            if (result2 < 1) {
              num5 = result2 ** ease2;
            }
            num4 = num5;
          }
          const result3 = num4 * arg2;
          const sum = arg0 + 0.5;
          if (sum < result1) {
            if (sum >= result3) {
              const _Math = Math;
              const _Math2 = Math;
              const _Math3 = Math;
              const _Math4 = Math;
              return Math.max(0, Math.min(Math.floor((Math.min(sum - result3, result1 - sum) / 4) * 6), 6));
            }
          }
          return -1;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export { bandEdgesAt };
export const shiftedLineFor = function shiftedLineFor(slotA) {
  let str = "";
  while (tmp !== undefined) {
    str = `${shiftChar(tmp2, 6)}`;
    continue;
  }
  return str;
};
export { bandGlyphsAt };
export const slotCountFor = function slotCountFor(arg0, arg1, arg2) {
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
};
export const pickSlotFaces = function pickSlotFaces(arg0, fn) {
  const array = new Array(arg0);
  for (let num = 0; num < arg0; num = num + 1) {
    array[num] = v789ABC.charAt((6 * fn()) | 0);
  }
  return array;
};

// === Module 16742: ConjureDither ===

// Module 16742 (ConjureDither)
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4612 */;
import inlineStyles from "inlineStyles" /* 8136 */;
import _mod16743 from "module_16743" /* 16743 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let set, set2, width;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let items = [0, Math.PI];
let c9 = 9000;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((width) => {
  let band;
  let combined3;
  let items1;
  let items2;
  let items3;
  let state;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp22;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const tmp = combined3;
  let obj = combined3(width[4]);
  const cResult = obj.c(77);
  ({ band, state } = width);
  width = width.width;
  const height = width.height;
  const fill = width.fill;
  const fillOpacity = width.fillOpacity;
  const tmp4 = combined3(width[5]).LEVELS[band];
  let closure_6 = tmp4;
  const bound = Math.max(0.02, tmp4 - combined3(width[5]).FADE_HALF);
  if (cResult[0] === band) {
    if (cResult[1] === fill) {
      if (cResult[2] === fillOpacity) {
        if (cResult[3] === height) {
          if (cResult[4] === tmp4) {
            if (cResult[5] === bound) {
              if (cResult[6] === state) {
                if (cResult[7] === width) {
                  tmp6 = cResult[8];
                  tmp7 = cResult[9];
                  tmp8 = cResult[10];
                  tmp9 = cResult[11];
                  tmp10 = cResult[12];
                  combined3 = cResult[13];
                  tmp12 = cResult[14];
                  tmp13 = cResult[15];
                  tmp14 = cResult[16];
                  tmp15 = cResult[17];
                  tmp16 = cResult[18];
                  tmp17 = cResult[19];
                }
                if (cResult[30] === tmp6) {
                  let tmp31;
                  let tmp34;
                  if (cResult[31] === tmp12) {
                    tmp31 = cResult[32];
                  }
                  const _Symbol = Symbol;
                  if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp36 = closure_6(tmp(width[6]).Stop, { offset: 1, stopColor: "#fff", stopOpacity: 0 });
                    cResult[33] = tmp36;
                    tmp34 = tmp36;
                  } else {
                    tmp34 = cResult[33];
                  }
                  if (cResult[34] === tmp7) {
                    if (cResult[35] === tmp13) {
                      let tmp37;
                      if (cResult[36] === tmp31) {
                        tmp37 = cResult[37];
                      }
                      if (cResult[38] === tmp11) {
                        if (cResult[39] === tmp4) {
                          let tmp40;
                          if (cResult[40] === bound) {
                            tmp40 = cResult[41];
                          }
                          const _HermesInternal2 = HermesInternal;
                          const combined = "iso-" + tmp11;
                          if (cResult[42] === tmp10) {
                            if (cResult[43] === height) {
                              if (cResult[44] === tmp11) {
                                let tmp43;
                                if (cResult[45] === width) {
                                  tmp43 = cResult[46];
                                }
                                if (cResult[47] === height) {
                                  if (cResult[48] === tmp11) {
                                    if (cResult[49] === bound) {
                                      if (cResult[50] === state) {
                                        let tmp46;
                                        if (cResult[51] === width) {
                                          tmp46 = cResult[52];
                                        }
                                        if (cResult[53] === height) {
                                          if (cResult[54] === combined) {
                                            if (cResult[55] === tmp43) {
                                              if (cResult[56] === tmp46) {
                                                let tmp48;
                                                if (cResult[57] === width) {
                                                  tmp48 = cResult[58];
                                                }
                                                if (cResult[59] === tmp8) {
                                                  if (cResult[60] === tmp40) {
                                                    if (cResult[61] === tmp48) {
                                                      if (cResult[62] === tmp14) {
                                                        let tmp51;
                                                        if (cResult[63] === tmp37) {
                                                          tmp51 = cResult[64];
                                                        }
                                                        const _HermesInternal4 = HermesInternal;
                                                        const combined1 = "url(#cells-" + tmp11 + ")";
                                                        const _HermesInternal5 = HermesInternal;
                                                        const combined2 = "url(#iso-" + tmp11 + ")";
                                                        if (cResult[65] === height) {
                                                          if (cResult[66] === combined1) {
                                                            if (cResult[67] === combined2) {
                                                              let tmp56;
                                                              if (cResult[68] === width) {
                                                                tmp56 = cResult[69];
                                                              }
                                                              if (cResult[70] === tmp9) {
                                                                if (cResult[71] === tmp51) {
                                                                  if (cResult[72] === tmp56) {
                                                                    if (cResult[73] === tmp15) {
                                                                      if (cResult[74] === tmp16) {
                                                                        let tmp59;
                                                                        if (cResult[75] === tmp17) {
                                                                          tmp59 = cResult[76];
                                                                        }
                                                                        return tmp59;
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              size = { width: tmp15, height: tmp16, style: tmp17, children: items };
                                                              items = [tmp51, tmp56];
                                                              const tmp61 = bound(tmp9, size);
                                                              cResult[70] = tmp9;
                                                              cResult[71] = tmp51;
                                                              cResult[72] = tmp56;
                                                              cResult[73] = tmp15;
                                                              cResult[74] = tmp16;
                                                              cResult[75] = tmp17;
                                                              cResult[76] = tmp61;
                                                              tmp59 = tmp61;
                                                            }
                                                          }
                                                        }
                                                        const size1 = { x: 0, y: 0, width, height, fill: combined1, mask: combined2 };
                                                        const tmp58 = closure_6(tmp(width[6]).Rect, size1);
                                                        cResult[65] = height;
                                                        cResult[66] = combined1;
                                                        cResult[67] = combined2;
                                                        cResult[68] = width;
                                                        cResult[69] = tmp58;
                                                        tmp56 = tmp58;
                                                      }
                                                    }
                                                  }
                                                }
                                                let obj2 = { children: items1 };
                                                items1 = [tmp14, tmp37, tmp40, tmp48];
                                                const tmp53 = bound(tmp8, obj2);
                                                cResult[59] = tmp8;
                                                cResult[60] = tmp40;
                                                cResult[61] = tmp48;
                                                cResult[62] = tmp14;
                                                cResult[63] = tmp37;
                                                cResult[64] = tmp53;
                                                tmp51 = tmp53;
                                              }
                                            }
                                          }
                                        }
                                        const size2 = { id: combined, x: 0, y: 0, width, height, maskUnits: "userSpaceOnUse", children: items2 };
                                        items2 = [tmp43, tmp46];
                                        const tmp50 = bound(tmp(width[6]).Mask, size2);
                                        cResult[53] = height;
                                        cResult[54] = combined;
                                        cResult[55] = tmp43;
                                        cResult[56] = tmp46;
                                        cResult[57] = width;
                                        cResult[58] = tmp50;
                                        tmp48 = tmp50;
                                      }
                                    }
                                  }
                                }
                                const BLOBS = tmp(tmp2[5]).BLOBS;
                                const mapped = BLOBS.map((peak, index) => {
                                  let ax;
                                  let ay;
                                  let x0;
                                  let y0;
                                  const obj = _mod16743;
                                  const blobReachResult = obj.blobReach(peak.peak, peak.radius, bound);
                                  if (blobReachResult <= 0) {
                                    return null;
                                  } else {
                                    const _Math = Math;
                                    ({ x0, ax } = peak);
                                    const _Math2 = Math;
                                    const sum = x0 + ax * Math.sin(tmp8 + peak.px);
                                    ({ y0, ay } = peak);
                                    const sum1 = y0 + ay * Math.sin(tmp8 + peak.py);
                                    const _HermesInternal = HermesInternal;
                                    const obj2 = { cx: sum * width, cy: sum1 * height, rx: blobReachResult * width, ry: blobReachResult * height, fill: "url(#blob-" + combined3 + "-" + index + ")" };
                                    const Ellipse = inlineStyles.Ellipse;
                                    return metroRequire(Ellipse, obj2, index);
                                  }
                                });
                                cResult[47] = height;
                                cResult[48] = tmp11;
                                cResult[49] = bound;
                                cResult[50] = state;
                                cResult[51] = width;
                                cResult[52] = mapped;
                                tmp46 = mapped;
                              }
                            }
                          }
                          let tmp44 = null;
                          if (tmp10 > 0) {
                            let obj3 = { cx: width / 2, cy: height, rx: tmp10 / tmp(width[5]).BELL_H_FACTOR * width, ry: tmp10 / tmp(width[5]).BELL_V_SQUASH * height, fill: "url(#bell-" + tmp11 + ")" };
                            let Ellipse = tmp(tmp2[6]).Ellipse;
                            const _HermesInternal3 = HermesInternal;
                            tmp44 = closure_6(Ellipse, obj3);
                          }
                          cResult[42] = tmp10;
                          cResult[43] = height;
                          cResult[44] = tmp11;
                          cResult[45] = width;
                          cResult[46] = tmp44;
                          tmp43 = tmp44;
                        }
                      }
                      const BLOBS1 = tmp(tmp2[5]).BLOBS;
                      const mapped1 = BLOBS1.map((peak, index) => {
                        let blobReachResult;
                        let isoStop;
                        let obj4;
                        let radius;
                        const obj = { id: "blob-" + combined3 + "-" + index, children: items };
                        const RadialGradient = inlineStyles.RadialGradient;
                        const obj2 = { offset: isoStop(blobReachResult, obj4.blobReach(peak.peak, peak.radius, bound)), stopColor: "#fff", stopOpacity: 1 };
                        const Stop = inlineStyles.Stop;
                        isoStop = _mod16743.isoStop;
                        _mod16743;
                        ({ peak, radius } = peak);
                        const obj3 = _mod16743;
                        blobReachResult = obj3.blobReach(peak, radius, metroRequire + _mod16743.FADE_HALF);
                        obj4 = _mod16743;
                        items = [metroRequire(Stop, obj2), metroRequire(inlineStyles.Stop, { offset: 1, stopColor: "#fff", stopOpacity: 0 })];
                        return metroImportDefault(RadialGradient, obj, index);
                      });
                      cResult[38] = tmp11;
                      cResult[39] = tmp4;
                      cResult[40] = bound;
                      cResult[41] = mapped1;
                      tmp40 = mapped1;
                    }
                  }
                  let obj4 = { id: tmp13, children: items3 };
                  items3 = [tmp31, tmp34];
                  const tmp39 = bound(tmp7, obj4);
                  cResult[34] = tmp7;
                  cResult[35] = tmp13;
                  cResult[36] = tmp31;
                  cResult[37] = tmp39;
                  tmp37 = tmp39;
                }
                const obj5 = { offset: tmp12, stopColor: "#fff", stopOpacity: 1 };
                const tmp33 = closure_6(tmp6, obj5);
                cResult[30] = tmp6;
                cResult[31] = tmp12;
                cResult[32] = tmp33;
                tmp31 = tmp33;
              }
            }
          }
        }
      }
    }
  }
  const tmpResult = tmp(width[5]);
  const bellReachResult = tmpResult.bellReach(bound);
  combined3 = "" + band + "-" + state;
  const tmp20 = state(width[6]);
  const absoluteFill = fill.absoluteFill;
  const Defs = tmp(tmp2[6]).Defs;
  const combined4 = "cells-" + combined3;
  const arr = tmp(width[5]).TILES[band];
  if (cResult[20] === fill) {
    if (cResult[21] === fillOpacity) {
      if (cResult[22] === arr) {
        tmp22 = cResult[23];
      }
      if (cResult[27] === combined4) {
        let tmp25;
        if (cResult[28] === tmp22) {
          tmp25 = cResult[29];
        }
        let RadialGradient = tmp(tmp2[6]).RadialGradient;
        let _HermesInternal = HermesInternal;
        const combined5 = "bell-" + combined3;
        let Stop = tmp(tmp2[6]).Stop;
        let isoStop = tmp(width[5]).isoStop;
        tmp(width[5]);
        const tmpResult4 = tmp(width[5]);
        const isoStopResult = isoStop(tmpResult4.bellReach(tmp4 + tmp(width[5]).FADE_HALF), bellReachResult);
        cResult[0] = band;
        cResult[1] = fill;
        cResult[2] = fillOpacity;
        cResult[3] = height;
        cResult[4] = tmp4;
        cResult[5] = bound;
        cResult[6] = state;
        cResult[7] = width;
        cResult[8] = Stop;
        cResult[9] = RadialGradient;
        cResult[10] = Defs;
        cResult[11] = tmp20;
        cResult[12] = bellReachResult;
        cResult[13] = combined3;
        cResult[14] = isoStopResult;
        cResult[15] = combined5;
        cResult[16] = tmp25;
        class H {
          constructor(arg0) {
            size = { x: arg0.x, y: arg0.y, width: _mod16743.CELL, height: _mod16743.CELL, rx: _mod16743.CORNER, fill, fillOpacity };
            const Rect = inlineStyles.Rect;
            return metroRequire(Rect, size, "" + arg0.x + "-" + arg0.y);
          }
        }
        cResult[17] = width;
        cResult[18] = height;
        cResult[19] = absoluteFill;
        tmp14 = tmp25;
        tmp17 = absoluteFill;
        tmp16 = height;
        tmp15 = width;
        tmp13 = combined5;
        tmp12 = isoStopResult;
        tmp10 = bellReachResult;
        tmp9 = tmp20;
        tmp8 = Defs;
        tmp7 = RadialGradient;
        tmp6 = Stop;
      }
      const size3 = { id: combined4, patternUnits: "userSpaceOnUse", width: tmp(width[5]).TILE, height: tmp(width[5]).TILE, children: tmp22 };
      const Pattern = tmp(tmp2[6]).Pattern;
      const tmp27 = closure_6(Pattern, size3);
      cResult[27] = combined4;
      cResult[28] = tmp22;
      cResult[29] = tmp27;
      tmp25 = tmp27;
    }
  }
  if (cResult[24] === fill) {
    let tmp23;
    if (cResult[25] === fillOpacity) {
      tmp23 = cResult[26];
    }
    const mapped2 = arr.map(tmp23);
    cResult[20] = fill;
    cResult[21] = fillOpacity;
    cResult[22] = arr;
    cResult[23] = mapped2;
    tmp22 = mapped2;
  }
  class H {
    constructor(arg0) {
      size = { x: arg0.x, y: arg0.y, width: _mod16743.CELL, height: _mod16743.CELL, rx: _mod16743.CORNER, fill, fillOpacity };
      const Rect = inlineStyles.Rect;
      return metroRequire(Rect, size, "" + arg0.x + "-" + arg0.y);
    }
  }
  cResult[24] = fill;
  cResult[25] = fillOpacity;
  cResult[26] = H;
  tmp23 = H;
}) : ((width) => {
  let arr;
  let band;
  let closure_4;
  let fill;
  let isoStop;
  let items1;
  let items2;
  let items3;
  let obj6;
  let state;
  ({ band, state } = width);
  width = width.width;
  const height = width.height;
  ({ fill: react, fillOpacity: closure_4 } = width);
  const tmp = state;
  const tmp3 = state(height[5]).LEVELS[band];
  let closure_5 = tmp3;
  const bound = Math.max(0.02, tmp3 - state(height[5]).FADE_HALF);
  let obj = state(height[5]);
  const bellReachResult = obj.bellReach(bound);
  const combined = "" + band + "-" + state;
  size = { width, height, style: fillOpacity.absoluteFill, children: items3 };
  const tmp8 = width(height[6]);
  const Defs = state(height[6]).Defs;
  const size1 = {
    id: "cells-" + combined,
    patternUnits: "userSpaceOnUse",
    width: state(height[5]).TILE,
    height: state(height[5]).TILE,
    children: arr.map((item) => {
      size = { x: item.x, y: item.y, width: _mod16743.CELL, height: _mod16743.CELL, rx: _mod16743.CORNER, fill: react, fillOpacity };
      const Rect = inlineStyles.Rect;
      return metroRequire(Rect, size, "" + item.x + "-" + item.y);
    })
  };
  const Pattern = state(height[6]).Pattern;
  arr = state(height[5]).TILES[band];
  items = [bound(Pattern, size1), , , ];
  let obj2 = { id: "bell-" + combined, children: items1 };
  let RadialGradient = state(height[6]).RadialGradient;
  let obj3 = { offset: isoStop(obj6.bellReach(tmp3 + state(height[5]).FADE_HALF), bellReachResult), stopColor: "#fff", stopOpacity: 1 };
  let Stop = state(height[6]).Stop;
  isoStop = state(height[5]).isoStop;
  state(height[5]);
  obj6 = state(height[5]);
  items1 = [bound(Stop, obj3), bound(state(height[6]).Stop, { offset: 1, stopColor: "#fff", stopOpacity: 0 })];
  items[1] = combined(RadialGradient, obj2);
  const BLOBS = state(height[5]).BLOBS;
  items[2] = BLOBS.map((peak, index) => {
    let blobReachResult;
    let isoStop;
    let obj4;
    let radius;
    const obj = { id: "blob-" + combined + "-" + index, children: items };
    const RadialGradient = inlineStyles.RadialGradient;
    const obj2 = { offset: isoStop(blobReachResult, obj4.blobReach(peak.peak, peak.radius, bound)), stopColor: "#fff", stopOpacity: 1 };
    const Stop = inlineStyles.Stop;
    isoStop = _mod16743.isoStop;
    _mod16743;
    ({ peak, radius } = peak);
    const obj3 = _mod16743;
    blobReachResult = obj3.blobReach(peak, radius, closure_5 + _mod16743.FADE_HALF);
    obj4 = _mod16743;
    items = [metroRequire(Stop, obj2), metroRequire(inlineStyles.Stop, { offset: 1, stopColor: "#fff", stopOpacity: 0 })];
    return metroImportDefault(RadialGradient, obj, index);
  });
  const size2 = { id: "iso-" + combined, x: 0, y: 0, width, height, maskUnits: "userSpaceOnUse", children: items2 };
  const Mask = state(height[6]).Mask;
  let tmp9Result = null;
  if (bellReachResult > 0) {
    let obj4 = { cx: width / 2, cy: height, rx: bellReachResult / tmp(height[5]).BELL_H_FACTOR * width, ry: bellReachResult / tmp(height[5]).BELL_V_SQUASH * height, fill: "url(#bell-" + combined + ")" };
    let Ellipse = tmp(tmp2[6]).Ellipse;
    let _HermesInternal = HermesInternal;
    tmp9Result = tmp9(Ellipse, obj4);
  }
  items2 = [tmp9Result, ];
  const obj5 = { children: items };
  const BLOBS1 = tmp(tmp2[5]).BLOBS;
  items2[1] = BLOBS1.map((peak, index) => {
    let ax;
    let ay;
    let x0;
    let y0;
    const obj = _mod16743;
    const blobReachResult = obj.blobReach(peak.peak, peak.radius, bound);
    if (blobReachResult <= 0) {
      return null;
    } else {
      const _Math = Math;
      ({ x0, ax } = peak);
      const _Math2 = Math;
      const sum = x0 + ax * Math.sin(tmp8 + peak.px);
      ({ y0, ay } = peak);
      const sum1 = y0 + ay * Math.sin(tmp8 + peak.py);
      const _HermesInternal = HermesInternal;
      const obj2 = { cx: sum * width, cy: sum1 * height, rx: blobReachResult * width, ry: blobReachResult * height, fill: "url(#blob-" + combined + "-" + index + ")" };
      const Ellipse = inlineStyles.Ellipse;
      return metroRequire(Ellipse, obj2, index);
    }
  });
  items[3] = combined(Mask, size2);
  items3 = [combined(Defs, obj5), ];
  const size3 = { x: 0, y: 0, width, height, fill: "url(#cells-" + combined + ")", mask: "url(#iso-" + combined + ")" };
  let Rect = tmp(tmp2[6]).Rect;
  items3[1] = bound(Rect, size3);
  return combined(tmp8, size);
});
const __initData = { code: "function ConjureDitherAndroidTsx1(frame){const{STATE_LERP_MS,speed,targetSpeed,phase,CYCLE_MS}=this.__closure;var _frame$timeSincePrevi;const dtMs=Math.min(64,(_frame$timeSincePrevi=frame.timeSincePreviousFrame)!==null&&_frame$timeSincePrevi!==void 0?_frame$timeSincePrevi:16);const lerp=1-Math.exp(-dtMs/STATE_LERP_MS);speed.set(speed.get()+(targetSpeed.get()-speed.get())*lerp);phase.set(phase.get()+dtMs/CYCLE_MS*2*Math.PI*speed.get());}" };
const __initData2 = { code: "function ConjureDitherAndroidTsx2(){const{phase}=this.__closure;return{opacity:(1+Math.cos(phase.get()))/2};}" };
const __initData3 = { code: "function ConjureDitherAndroidTsx3(){const{phase}=this.__closure;return{opacity:(1-Math.cos(phase.get()))/2};}" };
const __initData4 = { code: "function ConjureDitherAndroidTsx4(frame){const{STATE_LERP_MS,speed,targetSpeed,phase,CYCLE_MS}=this.__closure;var _frame$timeSincePrevi;const dtMs=Math.min(64,(_frame$timeSincePrevi=frame.timeSincePreviousFrame)!==null&&_frame$timeSincePrevi!==void 0?_frame$timeSincePrevi:16);const lerp=1-Math.exp(-dtMs/STATE_LERP_MS);speed.set(speed.get()+(targetSpeed.get()-speed.get())*lerp);phase.set(phase.get()+dtMs/CYCLE_MS*2*Math.PI*speed.get());}" };
const __initData5 = { code: "function ConjureDitherAndroidTsx5(){const{phase}=this.__closure;return{opacity:(1+Math.cos(phase.get()))/2};}" };
const __initData6 = { code: "function ConjureDitherAndroidTsx6(){const{phase}=this.__closure;return{opacity:(1-Math.cos(phase.get()))/2};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((width) => {
  let animatedStyle1;
  let thinking;
  let obj = width(thinking[4]);
  const cResult = obj.c(13);
  width = width.width;
  const height = width.height;
  thinking = width.thinking;
  const fill = width.fill;
  const fillOpacity = width.fillOpacity;
  const obj2 = width(thinking[7]);
  const sharedValue = obj2.useSharedValue(0);
  let num = 1;
  const useSharedValue = width(thinking[7]).useSharedValue;
  width(thinking[7]);
  if (thinking) {
    num = 3;
  }
  const sharedValue1 = useSharedValue(num);
  let num2 = 1;
  const useSharedValue2 = width(thinking[7]).useSharedValue;
  width(thinking[7]);
  if (thinking) {
    num2 = 3;
  }
  const sharedValue2 = useSharedValue2(num2);
  if (cResult[0] === sharedValue2) {
    let tmp9;
    let tmp10;
    if (cResult[1] === thinking) {
      tmp9 = cResult[2];
      tmp10 = cResult[3];
    }
    const effect = fill.useEffect(tmp9, tmp10);
    const fn2 = function y(timeSincePreviousFrame) {
      let num = timeSincePreviousFrame.timeSincePreviousFrame;
      const _Math = Math;
      if (num == null) {
        num = 16;
      }
      const minResult = min(64, num);
      const diff = 1 - Math.exp(-minResult / 80);
      set = sharedValue1.set;
      const value = sharedValue1.get();
      const value3 = sharedValue2.get();
      const result = set(value + (value3 - sharedValue1.get()) * diff);
      set2 = sharedValue.set;
      const value4 = sharedValue.get();
      const result1 = minResult / c9 * 2 * Math.PI;
      set2(value4 + result1 * sharedValue1.get());
    };
    const obj3 = { STATE_LERP_MS: 80, speed: sharedValue1, targetSpeed: sharedValue2, phase: sharedValue, CYCLE_MS: animatedStyle1 };
    fn2.__closure = obj3;
    fn2.__workletHash = 11384723541155;
    fn2.__initData = __initData;
    const tmpResult4 = width(thinking[7]);
    tmpResult4.useFrameCallback(fn2);
    const tmpResult5 = width(thinking[7]);
    class R {
      constructor() {
        const obj = { opacity: (1 + Math.cos(sharedValue.get())) / 2 };
        return obj;
      }
    }
    const obj4 = { phase: sharedValue };
    R.__closure = obj4;
    R.__workletHash = 5313469085775;
    R.__initData = __initData2;
    const animatedStyle = tmpResult5.useAnimatedStyle(R);
    const tmpResult6 = width(thinking[7]);
    class T {
      constructor() {
        const obj = { opacity: (1 - Math.cos(sharedValue.get())) / 2 };
        return obj;
      }
    }
    const obj5 = { phase: sharedValue };
    T.__closure = obj5;
    T.__workletHash = 8854151976840;
    T.__initData = __initData3;
    animatedStyle1 = tmpResult6.useAnimatedStyle(T);
    let tmp20 = null;
    if (width > 0) {
      if (cResult[4] === fill) {
        if (cResult[5] === fillOpacity) {
          if (cResult[6] === animatedStyle) {
            if (cResult[7] === height) {
              if (cResult[8] === animatedStyle1) {
                let tmp21;
                let tmp23;
                if (cResult[9] === width) {
                  tmp21 = cResult[10];
                }
                if (cResult[11] !== tmp21) {
                  const obj6 = { style: fillOpacity.absoluteFill, pointerEvents: "none", children: tmp21 };
                  const tmp27 = sharedValue1(sharedValue, obj6);
                  cResult[11] = tmp21;
                  cResult[12] = tmp27;
                  tmp23 = tmp27;
                } else {
                  tmp23 = cResult[12];
                }
                tmp20 = tmp23;
              }
            }
          }
        }
      }
      const LEVELS = tmp(tmp2[5]).LEVELS;
      const mapped = LEVELS.map((item, index) => {
        const band = index;
        return animatedStyle.map((item, state) => {
          items = [React3.absoluteFill, ];
          items[1] = 0 === state ? animatedStyle : animatedStyle1;
          const obj = { style: items, renderToHardwareTextureAndroid: true, children: metroRequire(closure_10, size) };
          size = { band, state, width, height, fill, fillOpacity };
          const View = ReanimatedRexportDefault.View;
          return metroRequire(View, obj, "" + band + "-" + state);
        });
      });
      cResult[4] = fill;
      cResult[5] = fillOpacity;
      cResult[6] = animatedStyle;
      cResult[7] = height;
      cResult[8] = animatedStyle1;
      cResult[9] = width;
      cResult[10] = mapped;
      tmp21 = mapped;
    }
    return tmp20;
  }
  const fn = function n() {
    let num = 1;
    set = sharedValue2.set;
    if (thinking) {
      num = 3;
    }
    const result = set(num);
  };
  items = [sharedValue2, thinking];
  cResult[0] = sharedValue2;
  cResult[1] = thinking;
  cResult[2] = fn;
  cResult[3] = items;
  tmp10 = items;
  tmp9 = fn;
}) : ((width) => {
  let LEVELS;
  let closure_4;
  let closure_9;
  let fill;
  let height;
  let thinking;
  width = width.width;
  ({ height: importDefault, thinking } = width);
  ({ fill: react, fillOpacity: closure_4 } = width);
  let sharedValue1;
  let sharedValue2;
  let closure_8;
  CYCLE_MS = undefined;
  let obj = width(thinking[7]);
  const sharedValue = obj.useSharedValue(0);
  let num = 1;
  let num2 = 1;
  const useSharedValue = width(thinking[7]).useSharedValue;
  width(thinking[7]);
  if (thinking) {
    num2 = 3;
  }
  sharedValue1 = useSharedValue(num2);
  const useSharedValue2 = width(thinking[7]).useSharedValue;
  width(thinking[7]);
  if (thinking) {
    num = 3;
  }
  sharedValue2 = useSharedValue2(num);
  items = [sharedValue2, thinking];
  const effect = react.useEffect(() => {
    let num = 1;
    set = sharedValue2.set;
    if (thinking) {
      num = 3;
    }
    const result = set(num);
  }, items);
  const fn = function m(timeSincePreviousFrame) {
    let num = timeSincePreviousFrame.timeSincePreviousFrame;
    const _Math = Math;
    if (num == null) {
      num = 16;
    }
    const minResult = min(64, num);
    const diff = 1 - Math.exp(-minResult / 80);
    set = sharedValue1.set;
    const value = sharedValue1.get();
    const value3 = sharedValue2.get();
    const result = set(value + (value3 - sharedValue1.get()) * diff);
    set2 = sharedValue.set;
    const value4 = sharedValue.get();
    const result1 = minResult / c9 * 2 * Math.PI;
    set2(value4 + result1 * sharedValue1.get());
  };
  const obj2 = { STATE_LERP_MS: 80, speed: sharedValue1, targetSpeed: sharedValue2, phase: sharedValue, CYCLE_MS };
  fn.__closure = obj2;
  fn.__workletHash = 14576448457510;
  fn.__initData = __initData4;
  const tmpResult4 = width(thinking[7]);
  tmpResult4.useFrameCallback(fn);
  const tmpResult5 = width(thinking[7]);
  class C {
    constructor() {
      const obj = { opacity: (1 + Math.cos(sharedValue.get())) / 2 };
      return obj;
    }
  }
  C.__closure = { phase: sharedValue };
  C.__workletHash = 4089400415816;
  C.__initData = __initData5;
  closure_8 = tmpResult5.useAnimatedStyle(C);
  const fn2 = function $() {
    const obj = { opacity: (1 - Math.cos(sharedValue.get())) / 2 };
    return obj;
  };
  fn2.__closure = { phase: sharedValue };
  fn2.__workletHash = 5774562121997;
  fn2.__initData = __initData6;
  const tmpResult6 = width(thinking[7]);
  CYCLE_MS = tmpResult6.useAnimatedStyle(fn2);
  let tmp10 = null;
  if (width > 0) {
    const obj3 = {
      style: fillOpacity.absoluteFill,
      pointerEvents: "none",
      children: LEVELS.map((item, index) => {
          const band = index;
          return closure_8.map((item, state) => {
            items = [React3.absoluteFill, ];
            items[1] = 0 === state ? closure_8 : closure_9;
            const obj = { style: items, renderToHardwareTextureAndroid: true, children: metroRequire(closure_10, size) };
            size = { band, state, width, height: importDefault, fill: react, fillOpacity };
            const View = ReanimatedRexportDefault.View;
            return metroRequire(View, obj, "" + band + "-" + state);
          });
        })
    };
    LEVELS = tmp(thinking[5]).LEVELS;
    tmp10 = sharedValue1(sharedValue, obj3);
  }
  return tmp10;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/glow/native/ConjureDither.android.tsx");

export default tmp4;
// discord_app/modules/conjure/glow/native/ConjureDither.android.tsx
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import inlineStyles from "../../../../../_runtime/07550_inlineStyles.js";
import _mod17039 from "../../../../../_runtime/metro/17039__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let items = [0, Math.PI];
let c9 = 9000;
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BandPicture(width) {
      const cResult = combined3(width[4]).c(77);
      ({ band, state } = width);
      width = width.width;
      const height = width.height;
      const fill = width.fill;
      const fillOpacity = width.fillOpacity;
      const tmp4 = combined3(width[5]).LEVELS[band];
      closure_6 = tmp4;
      const bound = Math.max(0.02, tmp4 - combined3(width[5]).FADE_HALF);
      if (cResult[0] === band) {
        if (cResult[1] === fill) {
          if (cResult[2] === fillOpacity) {
            if (cResult[3] === height) {
              if (cResult[4] === tmp4) {
                if (cResult[5] === bound) {
                  if (cResult[6] === state) {
                    if (cResult[7] === width) {
                      combined3 = tmp11;
                      if (cResult[30] === cResult[8]) {
                        if (cResult[31] === tmp12) {
                          let tmp41 = cResult[32];
                        }
                        const _Symbol = Symbol;
                        if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                          const tmp46 = closure_6(tmp(tmp2[6]).Stop, { offset: 1, stopColor: "#fff", stopOpacity: 0 });
                          cResult[33] = tmp46;
                          let tmp44 = tmp46;
                        } else {
                          tmp44 = cResult[33];
                        }
                        if (cResult[34] === tmp7) {
                          if (cResult[35] === tmp13) {
                            if (cResult[36] === tmp41) {
                              let tmp47 = cResult[37];
                            }
                            if (cResult[38] === tmp11) {
                              if (cResult[39] === tmp4) {
                                if (cResult[40] === bound) {
                                  let tmp50 = cResult[41];
                                }
                                const _HermesInternal2 = HermesInternal;
                                const combined = "iso-" + tmp11;
                                if (cResult[42] === tmp10) {
                                  if (cResult[43] === height) {
                                    if (cResult[44] === tmp11) {
                                      if (cResult[45] === width) {
                                        let tmp53 = cResult[46];
                                      }
                                      if (cResult[47] === height) {
                                        if (cResult[48] === tmp11) {
                                          if (cResult[49] === bound) {
                                            if (cResult[50] === state) {
                                              if (cResult[51] === width) {
                                                let tmp56 = cResult[52];
                                              }
                                              if (cResult[53] === height) {
                                                if (cResult[54] === combined) {
                                                  if (cResult[55] === tmp53) {
                                                    if (cResult[56] === tmp56) {
                                                      if (cResult[57] === width) {
                                                        let tmp58 = cResult[58];
                                                      }
                                                      if (cResult[59] === tmp8) {
                                                        if (cResult[60] === tmp50) {
                                                          if (cResult[61] === tmp58) {
                                                            if (cResult[62] === tmp14) {
                                                              if (cResult[63] === tmp47) {
                                                                let tmp61 = cResult[64];
                                                              }
                                                              const _HermesInternal4 = HermesInternal;
                                                              const combined1 = "url(#cells-" + tmp11 + ")";
                                                              const _HermesInternal5 = HermesInternal;
                                                              const combined2 = "url(#iso-" + tmp11 + ")";
                                                              if (cResult[65] === height) {
                                                                if (cResult[66] === combined1) {
                                                                  if (cResult[67] === combined2) {
                                                                    if (cResult[68] === width) {
                                                                      let tmp66 = cResult[69];
                                                                    }
                                                                    if (cResult[70] === tmp9) {
                                                                      if (cResult[71] === tmp61) {
                                                                        if (cResult[72] === tmp66) {
                                                                          if (cResult[73] === tmp15) {
                                                                            if (cResult[74] === tmp16) {
                                                                              if (cResult[75] === tmp17) {
                                                                                let tmp69 = cResult[76];
                                                                              }
                                                                              return tmp69;
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                    let size = {
                                                                      width: tmp15,
                                                                      height: tmp16,
                                                                      style: tmp17,
                                                                      children: null,
                                                                    };
                                                                    items = [tmp61, tmp66];
                                                                    size.children = items;
                                                                    const tmp71 = bound(tmp9, size);
                                                                    cResult[70] = tmp9;
                                                                    cResult[71] = tmp61;
                                                                    cResult[72] = tmp66;
                                                                    cResult[73] = tmp15;
                                                                    cResult[74] = tmp16;
                                                                    cResult[75] = tmp17;
                                                                    cResult[76] = tmp71;
                                                                    tmp69 = tmp71;
                                                                  }
                                                                }
                                                              }
                                                              const size1 = {
                                                                x: 0,
                                                                y: 0,
                                                                width,
                                                                height,
                                                                fill: combined1,
                                                                mask: combined2,
                                                              };
                                                              const tmp68 = closure_6(tmp(tmp2[6]).Rect, size1);
                                                              cResult[65] = height;
                                                              cResult[66] = combined1;
                                                              cResult[67] = combined2;
                                                              cResult[68] = width;
                                                              cResult[69] = tmp68;
                                                              tmp66 = tmp68;
                                                            }
                                                          }
                                                        }
                                                      }
                                                      let obj2 = { children: null };
                                                      const items1 = [tmp14, tmp47, tmp50, tmp58];
                                                      obj2.children = items1;
                                                      const tmp63 = bound(tmp8, obj2);
                                                      cResult[59] = tmp8;
                                                      cResult[60] = tmp50;
                                                      cResult[61] = tmp58;
                                                      cResult[62] = tmp14;
                                                      cResult[63] = tmp47;
                                                      cResult[64] = tmp63;
                                                      tmp61 = tmp63;
                                                    }
                                                  }
                                                }
                                              }
                                              const size2 = {
                                                id: combined,
                                                x: 0,
                                                y: 0,
                                                width,
                                                height,
                                                maskUnits: "userSpaceOnUse",
                                                children: null,
                                              };
                                              const items2 = [tmp53, tmp56];
                                              size2.children = items2;
                                              const tmp60 = bound(tmp(tmp2[6]).Mask, size2);
                                              cResult[53] = height;
                                              cResult[54] = combined;
                                              cResult[55] = tmp53;
                                              cResult[56] = tmp56;
                                              cResult[57] = width;
                                              cResult[58] = tmp60;
                                              tmp58 = tmp60;
                                            }
                                          }
                                        }
                                      }
                                      const BLOBS = tmp(tmp2[5]).BLOBS;
                                      const mapped = BLOBS.map((peak, index) => {
                                        const blobReachResult = _mod17039.blobReach(peak.peak, peak.radius, bound);
                                        if (blobReachResult <= 0) {
                                          return null;
                                        } else {
                                          const _Math = Math;
                                          ({ x0, ax } = peak);
                                          const _Math2 = Math;
                                          const sum = x0 + ax * Math.sin(tmp8 + peak.px);
                                          ({ y0, ay } = peak);
                                          const sum1 = y0 + ay * Math.sin(tmp8 + peak.py);
                                          const obj2 = {
                                            cx: sum * width,
                                            cy: sum1 * height,
                                            rx: blobReachResult * width,
                                            ry: blobReachResult * height,
                                            fill: null,
                                          };
                                          const _HermesInternal = HermesInternal;
                                          obj2.fill = "url(#blob-" + combined3 + "-" + index + ")";
                                          return timestampProducer(inlineStyles.Ellipse, obj2, index);
                                        }
                                      });
                                      cResult[47] = height;
                                      cResult[48] = tmp11;
                                      cResult[49] = bound;
                                      cResult[50] = state;
                                      cResult[51] = width;
                                      cResult[52] = mapped;
                                      tmp56 = mapped;
                                    }
                                  }
                                }
                                let tmp54 = null;
                                if (tmp10 > 0) {
                                  let obj3 = {
                                    cx: width / 2,
                                    cy: height,
                                    rx: (tmp10 / tmp(tmp2[5]).BELL_H_FACTOR) * width,
                                    ry: (tmp10 / tmp(tmp2[5]).BELL_V_SQUASH) * height,
                                    fill: null,
                                  };
                                  const _HermesInternal3 = HermesInternal;
                                  obj3.fill = "url(#bell-" + tmp11 + ")";
                                  tmp54 = closure_6(tmp(tmp2[6]).Ellipse, obj3);
                                }
                                cResult[42] = tmp10;
                                cResult[43] = height;
                                cResult[44] = tmp11;
                                cResult[45] = width;
                                cResult[46] = tmp54;
                                tmp53 = tmp54;
                              }
                            }
                            const BLOBS1 = tmp(tmp2[5]).BLOBS;
                            const mapped1 = BLOBS1.map((peak, index) => {
                              const obj = { id: "blob-" + combined3 + "-" + index, children: null };
                              const obj2 = { offset: null, stopColor: "#fff", stopOpacity: 1 };
                              const obj3 = _mod17039;
                              ({ peak, radius } = peak);
                              const blobReachResult = _mod17039.blobReach(
                                peak,
                                radius,
                                closure_6 + _mod17039.FADE_HALF,
                              );
                              obj2.offset = obj3.isoStop(
                                blobReachResult,
                                _mod17039.blobReach(peak.peak, peak.radius, bound),
                              );
                              items = [
                                timestampProducer(inlineStyles.Stop, obj2),
                                timestampProducer(inlineStyles.Stop, { offset: 1, stopColor: "#fff", stopOpacity: 0 }),
                              ];
                              obj.children = items;
                              return React5(inlineStyles.RadialGradient, obj, index);
                            });
                            cResult[38] = tmp11;
                            cResult[39] = tmp4;
                            cResult[40] = bound;
                            cResult[41] = mapped1;
                            tmp50 = mapped1;
                          }
                        }
                        let obj4 = { id: tmp13, children: null };
                        const items3 = [tmp41, tmp44];
                        obj4.children = items3;
                        const tmp49 = bound(tmp7, obj4);
                        cResult[34] = tmp7;
                        cResult[35] = tmp13;
                        cResult[36] = tmp41;
                        cResult[37] = tmp49;
                        tmp47 = tmp49;
                      }
                      const obj5 = { offset: cResult[14], stopColor: "#fff", stopOpacity: 1 };
                      const tmp43 = closure_6(cResult[8], obj5);
                      cResult[30] = cResult[8];
                      cResult[31] = cResult[14];
                      cResult[32] = tmp43;
                      tmp41 = tmp43;
                    }
                  }
                }
              }
            }
          }
        }
      }
      let obj = combined3(width[4]);
      const bellReachResult = combined3(width[5]).bellReach(bound);
      combined3 = "" + band + "-" + state;
      const tmp20 = state(width[6]);
      const absoluteFill = fill.absoluteFill;
      const Defs = tmp(tmp2[6]).Defs;
      let combined4 = "cells-" + combined3;
      const arr = combined3(width[5]).TILES[band];
      if (cResult[20] === fill) {
        if (cResult[21] === fillOpacity) {
          if (cResult[22] === arr) {
            let RadialGradient = cResult[23];
            if (cResult[27] === combined4) {
              if (cResult[28] === RadialGradient) {
                let tmp25 = cResult[29];
              }
              RadialGradient = tmp(tmp2[6]).RadialGradient;
              let _HermesInternal = HermesInternal;
              const combined5 = "bell-" + combined3;
              const Stop = tmp(tmp2[6]).Stop;
              const tmpResult3 = tmp(tmp2[5]);
              combined4 = tmpResult3.isoStop(tmp(tmp2[5]).bellReach(tmp4 + tmp(tmp2[5]).FADE_HALF), bellReachResult);
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
              cResult[14] = combined4;
              cResult[15] = combined5;
              cResult[16] = tmp25;
              class H {
                constructor(arg0) {
                  size = {
                    x: width.x,
                    y: width.y,
                    width: closure_0(closure_2[5]).CELL,
                    height: closure_0(closure_2[5]).CELL,
                    rx: closure_0(closure_2[5]).CORNER,
                    fill,
                    fillOpacity,
                  };
                  return jsx(closure_0(closure_2[6]).Rect, size, "" + width.x + "-" + width.y);
                }
              }
              cResult[17] = width;
              cResult[18] = height;
              cResult[19] = absoluteFill;
              const tmpResult4 = tmp(tmp2[5]);
            }
            const size3 = {
              id: combined4,
              patternUnits: "userSpaceOnUse",
              width: tmp(tmp2[5]).TILE,
              height: tmp(tmp2[5]).TILE,
              children: RadialGradient,
            };
            const tmp27 = closure_6(tmp(tmp2[6]).Pattern, size3);
            cResult[27] = combined4;
            cResult[28] = RadialGradient;
            cResult[29] = tmp27;
            tmp25 = tmp27;
          }
        }
      }
      if (cResult[24] === fill) {
        if (cResult[25] === fillOpacity) {
          let tmp22 = cResult[26];
        }
        const mapped2 = arr.map(tmp22);
        cResult[20] = fill;
        cResult[21] = fillOpacity;
        cResult[22] = arr;
        cResult[23] = mapped2;
      }
      class H {
        constructor(arg0) {
          size = {
            x: width.x,
            y: width.y,
            width: closure_0(closure_2[5]).CELL,
            height: closure_0(closure_2[5]).CELL,
            rx: closure_0(closure_2[5]).CORNER,
            fill,
            fillOpacity,
          };
          return jsx(closure_0(closure_2[6]).Rect, size, "" + width.x + "-" + width.y);
        }
      }
      cResult[24] = fill;
      cResult[25] = fillOpacity;
      cResult[26] = H;
      tmp22 = H;
    }
  : function BandPicture(width) {
      ({ band, state } = width);
      width = width.width;
      const height = width.height;
      ({ fill: noop, fillOpacity: closure_4 } = width);
      const tmp3 = state(height[5]).LEVELS[band];
      closure_5 = tmp3;
      const bound = Math.max(0.02, tmp3 - state(height[5]).FADE_HALF);
      const bellReachResult = state(height[5]).bellReach(bound);
      const combined = "" + band + "-" + state;
      let size = { width, height, style: fillOpacity.absoluteFill, children: null };
      let obj = state(height[5]);
      const size1 = {
        id: "cells-" + combined,
        patternUnits: "userSpaceOnUse",
        width: state(height[5]).TILE,
        height: state(height[5]).TILE,
        children: null,
      };
      const tmp8 = width(height[6]);
      size1.children = state(height[5]).TILES[band].map((item) => {
        const size = {
          x: item.x,
          y: item.y,
          width: _mod17039.CELL,
          height: _mod17039.CELL,
          rx: _mod17039.CORNER,
          fill,
          fillOpacity,
        };
        return timestampProducer(inlineStyles.Rect, size, "" + item.x + "-" + item.y);
      });
      items = [bound(state(height[6]).Pattern, size1), , ,];
      let obj2 = { id: "bell-" + combined, children: null };
      let obj3 = { offset: null, stopColor: "#fff", stopOpacity: 1 };
      const arr = state(height[5]).TILES[band];
      const obj6 = state(height[5]);
      obj3.offset = obj6.isoStop(state(height[5]).bellReach(tmp3 + state(height[5]).FADE_HALF), bellReachResult);
      const items1 = [
        bound(state(height[6]).Stop, obj3),
        bound(state(height[6]).Stop, { offset: 1, stopColor: "#fff", stopOpacity: 0 }),
      ];
      obj2.children = items1;
      items[1] = combined(state(height[6]).RadialGradient, obj2);
      const BLOBS = state(height[5]).BLOBS;
      items[2] = BLOBS.map((peak, index) => {
        const obj = { id: "blob-" + combined + "-" + index, children: null };
        const obj2 = { offset: null, stopColor: "#fff", stopOpacity: 1 };
        const obj3 = _mod17039;
        ({ peak, radius } = peak);
        const blobReachResult = _mod17039.blobReach(peak, radius, closure_5 + _mod17039.FADE_HALF);
        obj2.offset = obj3.isoStop(blobReachResult, _mod17039.blobReach(peak.peak, peak.radius, bound));
        items = [
          timestampProducer(inlineStyles.Stop, obj2),
          timestampProducer(inlineStyles.Stop, { offset: 1, stopColor: "#fff", stopOpacity: 0 }),
        ];
        obj.children = items;
        return React5(inlineStyles.RadialGradient, obj, index);
      });
      const size2 = { id: "iso-" + combined, x: 0, y: 0, width, height, maskUnits: "userSpaceOnUse", children: null };
      let tmp9Result = null;
      if (bellReachResult > 0) {
        let obj4 = {
          cx: width / 2,
          cy: height,
          rx: (bellReachResult / tmp(tmp2[5]).BELL_H_FACTOR) * width,
          ry: (bellReachResult / tmp(tmp2[5]).BELL_V_SQUASH) * height,
          fill: null,
        };
        let _HermesInternal = HermesInternal;
        obj4.fill = "url(#bell-" + combined + ")";
        tmp9Result = tmp9(tmp(tmp2[6]).Ellipse, obj4);
      }
      const obj5 = { children: null };
      const items2 = [tmp9Result];
      const BLOBS1 = tmp(tmp2[5]).BLOBS;
      items2[1] = BLOBS1.map((peak, index) => {
        const blobReachResult = _mod17039.blobReach(peak.peak, peak.radius, bound);
        if (blobReachResult <= 0) {
          return null;
        } else {
          const _Math = Math;
          ({ x0, ax } = peak);
          const _Math2 = Math;
          const sum = x0 + ax * Math.sin(tmp8 + peak.px);
          ({ y0, ay } = peak);
          const sum1 = y0 + ay * Math.sin(tmp8 + peak.py);
          const obj2 = {
            cx: sum * width,
            cy: sum1 * height,
            rx: blobReachResult * width,
            ry: blobReachResult * height,
            fill: null,
          };
          const _HermesInternal = HermesInternal;
          obj2.fill = "url(#blob-" + combined + "-" + index + ")";
          return timestampProducer(inlineStyles.Ellipse, obj2, index);
        }
      });
      size2.children = items2;
      items[3] = combined(state(height[6]).Mask, size2);
      obj5.children = items;
      const items3 = [combined(state(height[6]).Defs, obj5)];
      const size3 = {
        x: 0,
        y: 0,
        width,
        height,
        fill: "url(#cells-" + combined + ")",
        mask: "url(#iso-" + combined + ")",
      };
      items3[1] = bound(state(height[6]).Rect, size3);
      size.children = items3;
      return combined(tmp8, size);
    };
const __initData = {
  code: "function ConjureDitherAndroidTsx1(frame){const{STATE_LERP_MS,speed,targetSpeed,phase,CYCLE_MS}=this.__closure;var _frame$timeSincePrevi;const dtMs=Math.min(64,(_frame$timeSincePrevi=frame.timeSincePreviousFrame)!==null&&_frame$timeSincePrevi!==void 0?_frame$timeSincePrevi:16);const lerp=1-Math.exp(-dtMs/STATE_LERP_MS);speed.set(speed.get()+(targetSpeed.get()-speed.get())*lerp);phase.set(phase.get()+dtMs/CYCLE_MS*2*Math.PI*speed.get());}",
};
const __initData2 = {
  code: "function ConjureDitherAndroidTsx2(){const{phase}=this.__closure;return{opacity:(1+Math.cos(phase.get()))/2};}",
};
const __initData3 = {
  code: "function ConjureDitherAndroidTsx3(){const{phase}=this.__closure;return{opacity:(1-Math.cos(phase.get()))/2};}",
};
const __initData4 = {
  code: "function ConjureDitherAndroidTsx4(frame){const{STATE_LERP_MS,speed,targetSpeed,phase,CYCLE_MS}=this.__closure;var _frame$timeSincePrevi;const dtMs=Math.min(64,(_frame$timeSincePrevi=frame.timeSincePreviousFrame)!==null&&_frame$timeSincePrevi!==void 0?_frame$timeSincePrevi:16);const lerp=1-Math.exp(-dtMs/STATE_LERP_MS);speed.set(speed.get()+(targetSpeed.get()-speed.get())*lerp);phase.set(phase.get()+dtMs/CYCLE_MS*2*Math.PI*speed.get());}",
};
const __initData5 = {
  code: "function ConjureDitherAndroidTsx5(){const{phase}=this.__closure;return{opacity:(1+Math.cos(phase.get()))/2};}",
};
const __initData6 = {
  code: "function ConjureDitherAndroidTsx6(){const{phase}=this.__closure;return{opacity:(1-Math.cos(phase.get()))/2};}",
};
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/glow/native/ConjureDither.android.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureDither(width) {
      const cResult = width(thinking[4]).c(13);
      width = width.width;
      const height = width.height;
      thinking = width.thinking;
      const fill = width.fill;
      const fillOpacity = width.fillOpacity;
      let obj = width(thinking[4]);
      const sharedValue = width(thinking[7]).useSharedValue(0);
      const obj2 = width(thinking[7]);
      let num = 1;
      if (thinking) {
        num = 3;
      }
      const sharedValue1 = width(thinking[7]).useSharedValue(num);
      const obj3 = width(thinking[7]);
      let num2 = 1;
      if (thinking) {
        num2 = 3;
      }
      const sharedValue2 = width(thinking[7]).useSharedValue(num2);
      if (cResult[0] === sharedValue2) {
        if (cResult[1] === thinking) {
          let tmp7 = cResult[2];
          let tmp8 = cResult[3];
        }
        const effect = fill.useEffect(tmp7, tmp8);
        const fn2 = function y(timeSincePreviousFrame) {
          let num = timeSincePreviousFrame.timeSincePreviousFrame;
          if (num == null) {
            num = 16;
          }
          const bound = Math.min(64, num);
          const diff = 1 - Math.exp(-bound / 80);
          value = sharedValue1.get();
          value3 = sharedValue2.get();
          const result = sharedValue1.set(value + (value3 - sharedValue1.get()) * diff);
          const value4 = sharedValue.get();
          const result1 = (bound / c9) * 2 * Math.PI;
          const result2 = sharedValue.set(value4 + result1 * sharedValue1.get());
        };
        const obj4 = {
          STATE_LERP_MS: 80,
          speed: sharedValue1,
          targetSpeed: sharedValue2,
          phase: sharedValue,
          CYCLE_MS: animatedStyle1,
        };
        fn2.__closure = obj4;
        fn2.__workletHash = 11384723541155;
        fn2.__initData = __initData;
        tmp(tmp2[7]).useFrameCallback(fn2);
        const tmpResult4 = tmp(tmp2[7]);
        class R {
          constructor() {
            obj = { opacity: (1 + Math.cos(closure_5.get())) / 2 };
            return obj;
          }
        }
        const obj5 = { phase: sharedValue };
        R.__closure = obj5;
        R.__workletHash = 5313469085775;
        R.__initData = __initData2;
        const animatedStyle = tmp(tmp2[7]).useAnimatedStyle(R);
        const tmpResult5 = tmp(tmp2[7]);
        class T {
          constructor() {
            obj = { opacity: (1 - Math.cos(closure_5.get())) / 2 };
            return obj;
          }
        }
        const obj6 = { phase: sharedValue };
        T.__closure = obj6;
        T.__workletHash = 8854151976840;
        T.__initData = __initData3;
        animatedStyle1 = tmp(tmp2[7]).useAnimatedStyle(T);
        if (width <= 0) {
          return null;
        } else {
          if (cResult[4] === fill) {
            if (cResult[5] === fillOpacity) {
              if (cResult[6] === animatedStyle) {
                if (cResult[7] === height) {
                  if (cResult[8] === animatedStyle1) {
                    if (cResult[9] === width) {
                      let tmp19 = cResult[10];
                    }
                    if (cResult[11] !== tmp19) {
                      const obj7 = { style: fillOpacity.absoluteFill, pointerEvents: "none", children: tmp19 };
                      const tmp25 = sharedValue1(sharedValue, obj7);
                      cResult[11] = tmp19;
                      cResult[12] = tmp25;
                    }
                  }
                }
              }
            }
          }
          const LEVELS = tmp(tmp2[5]).LEVELS;
          const mapped = LEVELS.map((item, index) => {
            const band = index;
            return animatedStyle.map((item, state) => {
              items = [React4.absoluteFill];
              const obj = { style: items, renderToHardwareTextureAndroid: true, children: null };
              items[1] = 0 === state ? animatedStyle : animatedStyle1;
              const size = { band, state, width, height, fill, fillOpacity };
              obj.children = timestampProducer(closure_10, size);
              return timestampProducer(ReanimatedRexportDefault.View, obj, "" + band + "-" + state);
            });
          });
          cResult[4] = fill;
          cResult[5] = fillOpacity;
          cResult[6] = animatedStyle;
          cResult[7] = height;
          cResult[8] = animatedStyle1;
          cResult[9] = width;
          cResult[10] = mapped;
          tmp19 = mapped;
        }
        const tmpResult6 = tmp(tmp2[7]);
      }
      const fn = function n() {
        let num = 1;
        if (thinking) {
          num = 3;
        }
        const result = sharedValue2.set(num);
      };
      items = [sharedValue2, thinking];
      cResult[0] = sharedValue2;
      cResult[1] = thinking;
      cResult[2] = fn;
      cResult[3] = items;
      tmp8 = items;
      tmp7 = fn;
      const tmpResult = width(thinking[7]);
    }
  : function ConjureDither(width) {
      width = width.width;
      ({ height: importDefault, thinking } = width);
      ({ fill: noop, fillOpacity: closure_4 } = width);
      let sharedValue1;
      let sharedValue2;
      closure_8 = undefined;
      CYCLE_MS = undefined;
      const sharedValue = width(thinking[7]).useSharedValue(0);
      let obj = width(thinking[7]);
      let num = 1;
      let num2 = 1;
      if (thinking) {
        num2 = 3;
      }
      sharedValue1 = width(thinking[7]).useSharedValue(num2);
      const obj2 = width(thinking[7]);
      if (thinking) {
        num = 3;
      }
      sharedValue2 = width(thinking[7]).useSharedValue(num);
      items = [sharedValue2, thinking];
      const effect = noop.useEffect(() => {
        let num = 1;
        if (thinking) {
          num = 3;
        }
        const result = sharedValue2.set(num);
      }, items);
      const tmpResult = width(thinking[7]);
      const fn = function m(timeSincePreviousFrame) {
        let num = timeSincePreviousFrame.timeSincePreviousFrame;
        if (num == null) {
          num = 16;
        }
        const bound = Math.min(64, num);
        const diff = 1 - Math.exp(-bound / 80);
        value = sharedValue1.get();
        value3 = sharedValue2.get();
        const result = sharedValue1.set(value + (value3 - sharedValue1.get()) * diff);
        const value4 = sharedValue.get();
        const result1 = (bound / c9) * 2 * Math.PI;
        const result2 = sharedValue.set(value4 + result1 * sharedValue1.get());
      };
      fn.__closure = {
        STATE_LERP_MS: 80,
        speed: sharedValue1,
        targetSpeed: sharedValue2,
        phase: sharedValue,
        CYCLE_MS,
      };
      fn.__workletHash = 14576448457510;
      fn.__initData = __initData4;
      width(thinking[7]).useFrameCallback(fn);
      const obj3 = { STATE_LERP_MS: 80, speed: sharedValue1, targetSpeed: sharedValue2, phase: sharedValue, CYCLE_MS };
      const tmpResult4 = width(thinking[7]);
      class C {
        constructor() {
          obj = { opacity: (1 + Math.cos(closure_5.get())) / 2 };
          return obj;
        }
      }
      C.__closure = { phase: sharedValue };
      C.__workletHash = 4089400415816;
      C.__initData = __initData5;
      closure_8 = width(thinking[7]).useAnimatedStyle(C);
      const tmpResult5 = width(thinking[7]);
      const fn2 = function $() {
        return { opacity: (1 - Math.cos(sharedValue.get())) / 2 };
      };
      fn2.__closure = { phase: sharedValue };
      fn2.__workletHash = 5774562121997;
      fn2.__initData = __initData6;
      CYCLE_MS = width(thinking[7]).useAnimatedStyle(fn2);
      let tmp8 = null;
      if (width > 0) {
        const obj4 = { style: fillOpacity.absoluteFill, pointerEvents: "none", children: null };
        const LEVELS = tmp(thinking[5]).LEVELS;
        obj4.children = LEVELS.map((item, index) => {
          const band = index;
          return closure_8.map((item, state) => {
            items = [React4.absoluteFill];
            const obj = { style: items, renderToHardwareTextureAndroid: true, children: null };
            items[1] = 0 === state ? closure_8 : closure_9;
            const size = { band, state, width, height, fill, fillOpacity };
            obj.children = timestampProducer(closure_10, size);
            return timestampProducer(ReanimatedRexportDefault.View, obj, "" + band + "-" + state);
          });
        });
        tmp8 = sharedValue1(sharedValue, obj4);
      }
      return tmp8;
    };

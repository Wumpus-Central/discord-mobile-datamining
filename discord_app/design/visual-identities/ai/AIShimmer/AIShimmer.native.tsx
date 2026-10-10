// discord_app/design/visual-identities/ai/AIShimmer/AIShimmer.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../components/Text/native/Text.tsx";
import AIShimmerTypes from "AIShimmerTypes.tsx";
import waveTransition2 from "waveTransition.tsx";
import createWaveTransition from "createWaveTransition.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
let closure_3 = ["variant", "delay", "initialDelay", "duration"];
get_ActivityIndicator = fn(17);
({ PixelRatio: closure_7, View: closure_8 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
let c12 = 30;
const createStyles = fn(5092);
let closure_13 = createStyles.createStyles((height, height2) => {
  const obj = {
    container: { alignSelf: "flex-start", height },
    sizer: { opacity: 0 },
    layer: { position: "absolute", top: 0, left: 0, height },
    glyphLayer: null,
    window: { position: "absolute", top: 0, left: 0, height, overflow: "hidden" },
  };
  const rect = { position: "absolute", top: (height - height2) / 2, left: 0, height: height2 };
  obj.glyphLayer = rect;
  return obj;
});
fn(558);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AIShimmerInner(arg0) {
      const cResult = sharedValue(first[7]).c(48);
      ({
        text,
        variant,
        color,
        glyphColor,
        delay,
        initialDelay,
        duration,
        onComplete,
        onStart,
        trailingWidth,
        style,
        ref,
      } = arg0);
      const reducedMotion = bound.useContext(sharedValue(first[9]).AccessibilityPreferencesContext).reducedMotion;
      const fontScale = closure_7.getFontScale();
      const tmp5 = sharedValue(first[10]).TextStyleSheet[variant];
      const result = tmp5.fontSize * fontScale;
      const result1 = result * sharedValue(first[11]).GLYPH_FONT_SCALE;
      const tmp8 = closure_13(tmp5.lineHeight * fontScale, result1);
      const obj = sharedValue(first[7]);
      let tmp = sharedValue;
      const tmp2 = first;
      sharedValue = sharedValue(first[12]).useSharedValue(0);
      const obj3 = sharedValue(first[12]);
      const sharedValue1 = sharedValue(first[12]).useSharedValue(1);
      [first, onPass] = bound.useState(null);
      const obj4 = sharedValue(first[12]);
      [tmp14, _slicedToArray] = bound.useState(0);
      _objectWithoutProperties = bound.useRef(null);
      let num = trailingWidth;
      if (trailingWidth == null) {
        num = 0;
      }
      const sum = tmp14 + num;
      bound = Math.max(1, Math.ceil(sum / result1));
      closure_7 = obj2.useRef(bound);
      if (cResult[0] === sharedValue) {
        if (cResult[1] === sharedValue1) {
          let tmp17 = cResult[2];
        }
        if (cResult[3] === delay) {
          if (cResult[4] === duration) {
            if (cResult[5] === initialDelay) {
              if (cResult[6] === onComplete) {
                if (cResult[7] === onStart) {
                  if (cResult[8] === reducedMotion.enabled) {
                    if (cResult[9] === ref) {
                      if (cResult[10] === tmp17) {
                        if (cResult[11] === text) {
                          if (cResult[12] === trailingWidth) {
                            let tmp18 = cResult[13];
                          }
                          if (cResult[14] !== bound) {
                            class Z {
                              constructor() {
                                closure_7.current = closure_6;
                                current = closure_5.current;
                                if (current != null) {
                                  refreshBandResult = current.refreshBand();
                                }
                                return;
                              }
                            }
                            const items = [bound];
                            cResult[14] = bound;
                            cResult[15] = Z;
                            cResult[16] = items;
                            let tmp20 = items;
                          } else {
                            class Z {
                              constructor() {
                                closure_7.current = closure_6;
                                current = closure_5.current;
                                if (current != null) {
                                  refreshBandResult = current.refreshBand();
                                }
                                return;
                              }
                            }
                            tmp20 = cResult[16];
                          }
                          const effect = obj2.useEffect(Z, tmp20);
                          if (cResult[17] !== first) {
                            class Z {
                              constructor() {
                                closure_7.current = closure_6;
                                current = closure_5.current;
                                if (current != null) {
                                  refreshBandResult = current.refreshBand();
                                }
                                return;
                              }
                            }
                            const items1 = [first];
                            cResult[17] = first;
                            cResult[18] = tmp24;
                            cResult[19] = items1;
                            let tmp23 = items1;
                          } else {
                            class Z {
                              constructor() {
                                closure_7.current = closure_6;
                                current = closure_5.current;
                                if (current != null) {
                                  refreshBandResult = current.refreshBand();
                                }
                                return;
                              }
                            }
                            tmp23 = cResult[19];
                          }
                          const effect1 = obj2.useEffect(tmp24, tmp23);
                          const _Symbol = Symbol;
                          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                            class Z {
                              constructor() {
                                closure_7.current = closure_6;
                                current = closure_5.current;
                                if (current != null) {
                                  refreshBandResult = current.refreshBand();
                                }
                                return;
                              }
                            }
                            cResult[20] = tmp27;
                          } else {
                            class Z {
                              constructor() {
                                closure_7.current = closure_6;
                                current = closure_5.current;
                                if (current != null) {
                                  refreshBandResult = current.refreshBand();
                                }
                                return;
                              }
                            }
                          }
                          const result2 = 0.5 * result1;
                          const result3 = 2 * sum;
                          current = tmp(tmp2[14]).useAIShimmerCycle(tmp18).current;
                          if (null == first) {
                            class Z {
                              constructor() {
                                closure_7.current = closure_6;
                                current = closure_5.current;
                                if (current != null) {
                                  refreshBandResult = current.refreshBand();
                                }
                                return;
                              }
                            }
                            const items2 = [tmp8.container, style];
                            cResult[21] = style;
                            cResult[22] = tmp8.container;
                            cResult[23] = items2;
                          } else {
                            class Z {
                              constructor() {
                                closure_7.current = closure_6;
                                current = closure_5.current;
                                if (current != null) {
                                  refreshBandResult = current.refreshBand();
                                }
                                return;
                              }
                            }
                          }
                          const tmpResult = tmp(tmp2[14]);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const obj5 = {
          text,
          delay,
          initialDelay,
          duration,
          reducedMotion: reducedMotion.enabled,
          trailingWidth,
          onComplete,
          onStart,
          ref,
          createController: tmp17,
        };
        cResult[3] = delay;
        cResult[4] = duration;
        cResult[5] = initialDelay;
        cResult[6] = onComplete;
        cResult[7] = onStart;
        cResult[8] = reducedMotion.enabled;
        cResult[9] = ref;
        cResult[10] = tmp17;
        cResult[11] = text;
        cResult[12] = trailingWidth;
        cResult[13] = obj5;
        tmp18 = obj5;
      }
      const fn = function o(arg0) {
        const obj2 = {};
        const merged = Object.assign(arg0);
        obj2.animationProgress = sharedValue;
        obj2.crossFadeOpacity = sharedValue1;
        obj2.glyphCount = function glyphCount() {
          return ref.current;
        };
        obj2.onPass = onPass;
        const waveTransition = createWaveTransition.createWaveTransition(obj2);
        closure_5.current = waveTransition;
        return waveTransition;
      };
      cResult[0] = sharedValue;
      cResult[1] = sharedValue1;
      cResult[2] = fn;
      tmp17 = fn;
      const tmp13 = _slicedToArray(bound.useState(0), 2);
    }
  : function AIShimmerInner(arg0) {
      ({ variant, color, glyphColor, trailingWidth } = arg0);
      let sharedValue;
      pass = undefined;
      onPass = undefined;
      _slicedToArray = undefined;
      let bound;
      closure_7 = undefined;
      ({ text, delay, initialDelay, duration, onComplete, onStart, style, ref } = arg0);
      const fontScale = closure_7.getFontScale();
      const tmp4 = sharedValue(pass[10]).TextStyleSheet[variant];
      const result = tmp4.fontSize * fontScale;
      const result1 = result * sharedValue(pass[11]).GLYPH_FONT_SCALE;
      const tmp7 = closure_13(tmp4.lineHeight * fontScale, result1);
      sharedValue = sharedValue(pass[12]).useSharedValue(0);
      let obj2 = sharedValue(pass[12]);
      const sharedValue1 = sharedValue(pass[12]).useSharedValue(1);
      [pass, onPass] = bound.useState(null);
      const obj3 = sharedValue(pass[12]);
      [tmp13, c4] = bound.useState(0);
      ref = bound.useRef(null);
      let num = trailingWidth;
      if (trailingWidth == null) {
        num = 0;
      }
      const sum = tmp13 + num;
      bound = Math.max(1, Math.ceil(sum / result1));
      closure_7 = obj.useRef(bound);
      const tmp12 = _slicedToArray(bound.useState(0), 2);
      const tmpResult = sharedValue(pass[14]);
      current = tmpResult.useAIShimmerCycle({
        text,
        delay,
        initialDelay,
        duration,
        reducedMotion: bound.useContext(sharedValue(pass[9]).AccessibilityPreferencesContext).reducedMotion.enabled,
        trailingWidth,
        onComplete,
        onStart,
        ref,
        createController(arg0) {
          const obj2 = {};
          const merged = Object.assign(arg0);
          obj2.animationProgress = sharedValue;
          obj2.crossFadeOpacity = sharedValue1;
          obj2.glyphCount = function glyphCount() {
            return ref.current;
          };
          obj2.onPass = onPass;
          const waveTransition = createWaveTransition.createWaveTransition(obj2);
          closure_5.current = waveTransition;
          return waveTransition;
        },
      }).current;
      const items = [bound];
      const effect = obj.useEffect(() => {
        closure_7.current = bound;
        current = ref.current;
        if (current != null) {
          current.refreshBand();
        }
      }, items);
      const items1 = [pass];
      const effect1 = obj.useEffect(() => {
        if (null != first) {
          current = ref.current;
          if (current != null) {
            current.startQueuedPass(tmp.id);
          }
        }
      }, items1);
      if (null == pass) {
        const obj5 = {
          style: null,
          onLayout: null,
          accessible: true,
          accessibilityRole: "text",
          accessibilityLabel: null,
          children: null,
        };
        const items2 = [tmp7.container, style];
        obj5.style = items2;
        obj5.onLayout = tmp18;
        obj5.accessibilityLabel = current;
        const obj6 = { variant, color, lineClamp: 1, ellipsizeMode: "clip", style: tmp7.sizer, children: current };
        const items3 = [closure_9(tmp(tmp2[10]).Text, obj6)];
        if (null != pass) {
          if (sum > 0) {
            const obj7 = {
              pass,
              animationProgress: sharedValue,
              crossFadeOpacity: sharedValue1,
              glyphCount: bound,
              glyphFontSize: result1,
              variant,
              color,
              glyphColor: null,
              styles: null,
              animationWidth: null,
              clippingWindowWidth: null,
              overshoot: null,
            };
            if (glyphColor == null) {
              glyphColor = color;
            }
            obj7.glyphColor = glyphColor;
            obj7.styles = tmp7;
            obj7.animationWidth = sum;
            obj7.clippingWindowWidth = 2 * sum;
            obj7.overshoot = 0.5 * result1;
            let tmp22Result = closure_9(closure_15, obj7);
          }
          items3[1] = tmp22Result;
          obj5.children = items3;
          return closure_10(closure_8, obj5);
        }
        const obj8 = { variant, color, lineClamp: 1, ellipsizeMode: "clip", style: tmp7.layer, children: current };
        tmp22Result = closure_9(tmp(tmp2[10]).Text, obj8);
      }
      const obj4 = {
        text,
        delay,
        initialDelay,
        duration,
        reducedMotion: bound.useContext(sharedValue(pass[9]).AccessibilityPreferencesContext).reducedMotion.enabled,
        trailingWidth,
        onComplete,
        onStart,
        ref,
        createController(arg0) {
          const obj2 = {};
          const merged = Object.assign(arg0);
          obj2.animationProgress = sharedValue;
          obj2.crossFadeOpacity = sharedValue1;
          obj2.glyphCount = function glyphCount() {
            return ref.current;
          };
          obj2.onPass = onPass;
          const waveTransition = createWaveTransition.createWaveTransition(obj2);
          closure_5.current = waveTransition;
          return waveTransition;
        },
      };
    };
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ShimmerLayers(arg0) {
      const cResult = c.c(82);
      ({
        pass,
        animationProgress,
        crossFadeOpacity,
        glyphCount,
        glyphFontSize,
        variant,
        color,
        glyphColor,
        styles,
        animationWidth,
        clippingWindowWidth,
        overshoot,
      } = arg0);
      if (cResult[0] === animationWidth) {
        if (cResult[1] === clippingWindowWidth) {
          if (cResult[2] === overshoot) {
            let tmp4 = cResult[3];
          }
          if (cResult[4] === animationProgress) {
            if (cResult[5] === tmp4) {
              let tmp5 = cResult[6];
            }
            const tmp10 = closure_34(tmp5);
            if (cResult[7] === animationProgress) {
              if (cResult[8] === tmp4) {
                let tmp11 = cResult[9];
              }
              const tmp9Result = closure_34(tmp11);
              if (cResult[10] === animationProgress) {
                if (cResult[11] === crossFadeOpacity) {
                  if (cResult[12] === tmp4) {
                    let tmp16 = cResult[13];
                  }
                  const tmp21 = closure_45(tmp16);
                  if (cResult[14] !== pass.slotA) {
                    const shiftedLineForResult = waveTransition2.shiftedLineFor(pass.slotA);
                    cResult[14] = pass.slotA;
                    cResult[15] = shiftedLineForResult;
                    let tmp22 = shiftedLineForResult;
                    const tmpResult = waveTransition2;
                  } else {
                    tmp22 = cResult[15];
                  }
                  if (cResult[16] !== pass.slotB) {
                    const shiftedLineForResult1 = waveTransition2.shiftedLineFor(pass.slotB);
                    cResult[16] = pass.slotB;
                    cResult[17] = shiftedLineForResult1;
                    let tmp24 = shiftedLineForResult1;
                    const tmpResult2 = waveTransition2;
                  } else {
                    tmp24 = cResult[17];
                  }
                  if (cResult[18] !== animationWidth) {
                    const obj2 = { width: animationWidth };
                    cResult[18] = animationWidth;
                    cResult[19] = obj2;
                    let tmp26 = obj2;
                  } else {
                    tmp26 = cResult[19];
                  }
                  if (cResult[20] === tmp21.crossFade) {
                    if (cResult[21] === styles.layer) {
                      if (cResult[22] === tmp26) {
                        let tmp27 = cResult[23];
                      }
                      if (cResult[24] === animationWidth) {
                        if (cResult[25] === clippingWindowWidth) {
                          if (cResult[26] === color) {
                            if (cResult[27] === pass.slotA) {
                              if (cResult[28] === tmp22) {
                                if (cResult[29] === tmp10) {
                                  if (cResult[30] === styles) {
                                    if (cResult[31] === variant) {
                                      let tmp28 = cResult[32];
                                    }
                                    if (cResult[33] === animationWidth) {
                                      if (cResult[34] === clippingWindowWidth) {
                                        if (cResult[35] === color) {
                                          if (cResult[36] === pass.slotB) {
                                            if (cResult[37] === tmp24) {
                                              if (cResult[38] === tmp9Result) {
                                                if (cResult[39] === styles) {
                                                  if (cResult[40] === variant) {
                                                    let tmp32 = cResult[41];
                                                  }
                                                  if (cResult[42] !== clippingWindowWidth) {
                                                    const obj3 = { width: clippingWindowWidth };
                                                    cResult[42] = clippingWindowWidth;
                                                    cResult[43] = obj3;
                                                    let tmp36 = obj3;
                                                  } else {
                                                    tmp36 = cResult[43];
                                                  }
                                                  if (cResult[44] === tmp21.outerWindow) {
                                                    if (cResult[45] === styles.window) {
                                                      if (cResult[46] === tmp36) {
                                                        let tmp37 = cResult[47];
                                                      }
                                                      if (cResult[48] !== clippingWindowWidth) {
                                                        const obj4 = { width: clippingWindowWidth };
                                                        cResult[48] = clippingWindowWidth;
                                                        cResult[49] = obj4;
                                                        let tmp38 = obj4;
                                                      } else {
                                                        tmp38 = cResult[49];
                                                      }
                                                      if (cResult[50] === tmp21.innerWindow) {
                                                        if (cResult[51] === styles.window) {
                                                          if (cResult[52] === tmp38) {
                                                            let tmp39 = cResult[53];
                                                          }
                                                          const result = glyphCount * glyphFontSize;
                                                          if (cResult[54] !== result) {
                                                            const obj5 = { width: result };
                                                            cResult[54] = result;
                                                            cResult[55] = obj5;
                                                            let tmp41 = obj5;
                                                          } else {
                                                            tmp41 = cResult[55];
                                                          }
                                                          if (cResult[56] === tmp21.text) {
                                                            if (cResult[57] === styles.layer) {
                                                              if (cResult[58] === tmp41) {
                                                                let tmp42 = cResult[59];
                                                              }
                                                              const result1 = overshoot / glyphFontSize;
                                                              if (cResult[60] === animationProgress) {
                                                                if (cResult[61] === glyphColor) {
                                                                  if (cResult[62] === glyphCount) {
                                                                    if (cResult[63] === glyphFontSize) {
                                                                      if (cResult[64] === pass.band) {
                                                                        if (cResult[65] === styles.glyphLayer) {
                                                                          if (cResult[66] === result1) {
                                                                            let tmp44 = cResult[67];
                                                                          }
                                                                          if (cResult[68] === tmp42) {
                                                                            if (cResult[69] === tmp44) {
                                                                              let tmp48 = cResult[70];
                                                                            }
                                                                            if (cResult[71] === tmp39) {
                                                                              if (cResult[72] === tmp48) {
                                                                                let tmp52 = cResult[73];
                                                                              }
                                                                              if (cResult[74] === tmp37) {
                                                                                if (cResult[75] === tmp52) {
                                                                                  let tmp56 = cResult[76];
                                                                                }
                                                                                if (cResult[77] === tmp32) {
                                                                                  if (cResult[78] === tmp56) {
                                                                                    if (cResult[79] === tmp27) {
                                                                                      if (cResult[80] === tmp28) {
                                                                                        let tmp60 = cResult[81];
                                                                                      }
                                                                                      return tmp60;
                                                                                    }
                                                                                  }
                                                                                }
                                                                                const obj6 = {
                                                                                  style: tmp27,
                                                                                  pointerEvents: "none",
                                                                                  accessibilityElementsHidden: true,
                                                                                  importantForAccessibility:
                                                                                    "no-hide-descendants",
                                                                                  children: null,
                                                                                };
                                                                                const items = [tmp28, tmp32, tmp56];
                                                                                obj6.children = items;
                                                                                const tmp63 = collapsed(
                                                                                  ReanimatedRexportDefault.View,
                                                                                  obj6,
                                                                                );
                                                                                cResult[77] = tmp32;
                                                                                cResult[78] = tmp56;
                                                                                cResult[79] = tmp27;
                                                                                cResult[80] = tmp28;
                                                                                cResult[81] = tmp63;
                                                                                tmp60 = tmp63;
                                                                              }
                                                                              const obj7 = {
                                                                                style: tmp37,
                                                                                children: tmp52,
                                                                              };
                                                                              const tmp59 = options(
                                                                                ReanimatedRexportDefault.View,
                                                                                obj7,
                                                                              );
                                                                              cResult[74] = tmp37;
                                                                              cResult[75] = tmp52;
                                                                              cResult[76] = tmp59;
                                                                              tmp56 = tmp59;
                                                                            }
                                                                            const obj8 = {
                                                                              style: tmp39,
                                                                              children: tmp48,
                                                                            };
                                                                            const tmp55 = options(
                                                                              ReanimatedRexportDefault.View,
                                                                              obj8,
                                                                            );
                                                                            cResult[71] = tmp39;
                                                                            cResult[72] = tmp48;
                                                                            cResult[73] = tmp55;
                                                                            tmp52 = tmp55;
                                                                          }
                                                                          const obj9 = {
                                                                            style: tmp42,
                                                                            children: tmp44,
                                                                          };
                                                                          const tmp51 = options(
                                                                            ReanimatedRexportDefault.View,
                                                                            obj9,
                                                                          );
                                                                          cResult[68] = tmp42;
                                                                          cResult[69] = tmp44;
                                                                          cResult[70] = tmp51;
                                                                          tmp48 = tmp51;
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              const obj10 = {
                                                                animationProgress,
                                                                slotCount: glyphCount,
                                                                overshootInSlots: result1,
                                                                glyphChoices: pass.band,
                                                                fontSize: glyphFontSize,
                                                                color: glyphColor,
                                                                style: styles.glyphLayer,
                                                              };
                                                              const tmp47 = options(closure_21, obj10);
                                                              cResult[60] = animationProgress;
                                                              cResult[61] = glyphColor;
                                                              cResult[62] = glyphCount;
                                                              cResult[63] = glyphFontSize;
                                                              cResult[64] = pass.band;
                                                              cResult[65] = styles.glyphLayer;
                                                              cResult[66] = result1;
                                                              cResult[67] = tmp47;
                                                              tmp44 = tmp47;
                                                            }
                                                          }
                                                          const items1 = [styles.layer, tmp41, tmp21.text];
                                                          cResult[56] = tmp21.text;
                                                          cResult[57] = styles.layer;
                                                          cResult[58] = tmp41;
                                                          cResult[59] = items1;
                                                          tmp42 = items1;
                                                        }
                                                      }
                                                      const items2 = [styles.window, tmp38, tmp21.innerWindow];
                                                      cResult[50] = tmp21.innerWindow;
                                                      cResult[51] = styles.window;
                                                      cResult[52] = tmp38;
                                                      cResult[53] = items2;
                                                      tmp39 = items2;
                                                    }
                                                  }
                                                  const items3 = [styles.window, tmp36, tmp21.outerWindow];
                                                  cResult[44] = tmp21.outerWindow;
                                                  cResult[45] = styles.window;
                                                  cResult[46] = tmp36;
                                                  cResult[47] = items3;
                                                  tmp37 = items3;
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    const obj11 = {
                                      text: pass.slotB,
                                      shiftedText: tmp24,
                                      variant,
                                      color,
                                      animationWidth,
                                      clippingWindowWidth,
                                      animatedStyles: tmp9Result,
                                      styles,
                                    };
                                    const tmp35 = options(closure_16, obj11);
                                    cResult[33] = animationWidth;
                                    cResult[34] = clippingWindowWidth;
                                    cResult[35] = color;
                                    cResult[36] = pass.slotB;
                                    cResult[37] = tmp24;
                                    cResult[38] = tmp9Result;
                                    cResult[39] = styles;
                                    cResult[40] = variant;
                                    cResult[41] = tmp35;
                                    tmp32 = tmp35;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      const obj12 = {
                        text: pass.slotA,
                        shiftedText: tmp22,
                        variant,
                        color,
                        animationWidth,
                        clippingWindowWidth,
                        animatedStyles: tmp10,
                        styles,
                      };
                      const tmp31 = options(closure_16, obj12);
                      cResult[24] = animationWidth;
                      cResult[25] = clippingWindowWidth;
                      cResult[26] = color;
                      cResult[27] = pass.slotA;
                      cResult[28] = tmp22;
                      cResult[29] = tmp10;
                      cResult[30] = styles;
                      cResult[31] = variant;
                      cResult[32] = tmp31;
                      tmp28 = tmp31;
                    }
                  }
                  const items4 = [styles.layer, tmp26, tmp21.crossFade];
                  cResult[20] = tmp21.crossFade;
                  cResult[21] = styles.layer;
                  cResult[22] = tmp26;
                  cResult[23] = items4;
                  tmp27 = items4;
                }
              }
              const obj13 = { animationProgress, crossFadeOpacity };
              const merged = Object.assign(tmp4);
              cResult[10] = animationProgress;
              cResult[11] = crossFadeOpacity;
              cResult[12] = tmp4;
              cResult[13] = obj13;
              tmp16 = obj13;
            }
            const obj14 = { animationProgress, slot: "B" };
            const merged1 = Object.assign(tmp4);
            cResult[7] = animationProgress;
            cResult[8] = tmp4;
            cResult[9] = obj14;
            tmp11 = obj14;
          }
          const obj15 = { animationProgress, slot: "A" };
          const merged2 = Object.assign(tmp4);
          cResult[4] = animationProgress;
          cResult[5] = tmp4;
          cResult[6] = obj15;
          tmp5 = obj15;
        }
      }
      const obj16 = { animationWidth, clippingWindowWidth, overshoot };
      cResult[0] = animationWidth;
      cResult[1] = clippingWindowWidth;
      cResult[2] = overshoot;
      cResult[3] = obj16;
      tmp4 = obj16;
    }
  : function ShimmerLayers(pass) {
      pass = pass.pass;
      ({
        animationProgress,
        glyphCount,
        glyphFontSize,
        variant,
        color,
        styles,
        animationWidth,
        clippingWindowWidth,
        overshoot,
      } = pass);
      const obj = { animationWidth, clippingWindowWidth, overshoot };
      ({ crossFadeOpacity, glyphColor } = pass);
      const merged = Object.assign(obj);
      const merged1 = Object.assign(obj);
      const obj2 = { animationProgress, slot: "A" };
      const obj3 = { animationProgress, slot: "B" };
      const obj4 = { animationProgress, crossFadeOpacity };
      const tmp2 = closure_34({ animationProgress, slot: "A" });
      const merged2 = Object.assign(obj);
      const tmp6 = closure_45(obj4);
      const items = [pass.slotA];
      const items1 = [pass.slotB];
      const memo = noop.useMemo(() => waveTransition2.shiftedLineFor(pass.slotA), items);
      const memo1 = noop.useMemo(() => waveTransition2.shiftedLineFor(pass.slotB), items1);
      const obj5 = {
        style: null,
        pointerEvents: "none",
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: null,
      };
      const items2 = [styles.layer, { width: animationWidth }, tmp6.crossFade];
      obj5.style = items2;
      const items3 = [
        closure_9(closure_16, {
          text: pass.slotA,
          shiftedText: memo,
          variant,
          color,
          animationWidth,
          clippingWindowWidth,
          animatedStyles: tmp2,
          styles,
        }),
        ,
      ];
      const obj6 = {
        text: pass.slotA,
        shiftedText: memo,
        variant,
        color,
        animationWidth,
        clippingWindowWidth,
        animatedStyles: tmp2,
        styles,
      };
      const tmp4 = closure_34({ animationProgress, slot: "B" });
      items3[1] = closure_9(closure_16, {
        text: pass.slotB,
        shiftedText: memo1,
        variant,
        color,
        animationWidth,
        clippingWindowWidth,
        animatedStyles: closure_34({ animationProgress, slot: "B" }),
        styles,
      });
      const obj8 = { style: null, children: null };
      const items4 = [styles.window, { width: clippingWindowWidth }, tmp6.outerWindow];
      obj8.style = items4;
      const obj9 = { style: null, children: null };
      const items5 = [styles.window, { width: clippingWindowWidth }, tmp6.innerWindow];
      obj9.style = items5;
      const obj10 = {
        style: null,
        children: closure_9(closure_21, {
          animationProgress,
          slotCount: glyphCount,
          overshootInSlots: overshoot / glyphFontSize,
          glyphChoices: pass.band,
          fontSize: glyphFontSize,
          color: glyphColor,
          style: styles.glyphLayer,
        }),
      };
      const items6 = [styles.layer, { width: glyphCount * glyphFontSize }, tmp6.text];
      obj10.style = items6;
      obj9.children = closure_9(ReanimatedRexportDefault.View, obj10);
      obj8.children = closure_9(ReanimatedRexportDefault.View, obj9);
      items3[2] = closure_9(ReanimatedRexportDefault.View, obj8);
      obj5.children = items3;
      return closure_10(ReanimatedRexportDefault.View, obj5);
    };
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ShimmerTextSlot(arg0) {
      const cResult = c.c(56);
      ({ text, shiftedText, variant, color, animationWidth, clippingWindowWidth, animatedStyles, styles } = arg0);
      if (cResult[0] !== clippingWindowWidth) {
        const obj2 = { width: clippingWindowWidth };
        cResult[0] = clippingWindowWidth;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === animatedStyles.plainWindow) {
        if (cResult[3] === styles.window) {
          if (cResult[4] === tmp4) {
            let tmp5 = cResult[5];
          }
          if (cResult[6] !== animationWidth) {
            const obj3 = { width: animationWidth };
            cResult[6] = animationWidth;
            cResult[7] = obj3;
            let tmp6 = obj3;
          } else {
            tmp6 = cResult[7];
          }
          if (cResult[8] === animatedStyles.plainText) {
            if (cResult[9] === styles.layer) {
              if (cResult[10] === tmp6) {
                let tmp7 = cResult[11];
              }
              if (cResult[12] === color) {
                if (cResult[13] === text) {
                  if (cResult[14] === variant) {
                    let tmp8 = cResult[15];
                  }
                  if (cResult[16] === tmp7) {
                    if (cResult[17] === tmp8) {
                      let tmp11 = cResult[18];
                    }
                    if (cResult[19] === tmp5) {
                      if (cResult[20] === tmp11) {
                        let tmp15 = cResult[21];
                      }
                      if (cResult[22] !== clippingWindowWidth) {
                        const obj4 = { width: clippingWindowWidth };
                        cResult[22] = clippingWindowWidth;
                        cResult[23] = obj4;
                        let tmp19 = obj4;
                      } else {
                        tmp19 = cResult[23];
                      }
                      if (cResult[24] === animatedStyles.shiftedOuterWindow) {
                        if (cResult[25] === styles.window) {
                          if (cResult[26] === tmp19) {
                            let tmp20 = cResult[27];
                          }
                          if (cResult[28] !== clippingWindowWidth) {
                            const obj5 = { width: clippingWindowWidth };
                            cResult[28] = clippingWindowWidth;
                            cResult[29] = obj5;
                            let tmp21 = obj5;
                          } else {
                            tmp21 = cResult[29];
                          }
                          if (cResult[30] === animatedStyles.shiftedInnerWindow) {
                            if (cResult[31] === styles.window) {
                              if (cResult[32] === tmp21) {
                                let tmp22 = cResult[33];
                              }
                              if (cResult[34] !== animationWidth) {
                                const obj6 = { width: animationWidth };
                                cResult[34] = animationWidth;
                                cResult[35] = obj6;
                                let tmp23 = obj6;
                              } else {
                                tmp23 = cResult[35];
                              }
                              if (cResult[36] === animatedStyles.shiftedText) {
                                if (cResult[37] === styles.layer) {
                                  if (cResult[38] === tmp23) {
                                    let tmp24 = cResult[39];
                                  }
                                  if (cResult[40] === color) {
                                    if (cResult[41] === shiftedText) {
                                      if (cResult[42] === variant) {
                                        let tmp25 = cResult[43];
                                      }
                                      if (cResult[44] === tmp24) {
                                        if (cResult[45] === tmp25) {
                                          let tmp28 = cResult[46];
                                        }
                                        if (cResult[47] === tmp22) {
                                          if (cResult[48] === tmp28) {
                                            let tmp32 = cResult[49];
                                          }
                                          if (cResult[50] === tmp32) {
                                            if (cResult[51] === tmp20) {
                                              let tmp36 = cResult[52];
                                            }
                                            if (cResult[53] === tmp36) {
                                              if (cResult[54] === tmp15) {
                                                let tmp40 = cResult[55];
                                              }
                                              return tmp40;
                                            }
                                            const obj7 = { children: null };
                                            const items = [tmp15, tmp36];
                                            obj7.children = items;
                                            const tmp43 = collapsed(closure_1_11, obj7);
                                            cResult[53] = tmp36;
                                            cResult[54] = tmp15;
                                            cResult[55] = tmp43;
                                            tmp40 = tmp43;
                                          }
                                          const obj8 = { style: tmp20, children: tmp32 };
                                          const tmp39 = options(ReanimatedRexportDefault.View, obj8);
                                          cResult[50] = tmp32;
                                          cResult[51] = tmp20;
                                          cResult[52] = tmp39;
                                          tmp36 = tmp39;
                                        }
                                        const obj9 = { style: tmp22, children: tmp28 };
                                        const tmp35 = options(ReanimatedRexportDefault.View, obj9);
                                        cResult[47] = tmp22;
                                        cResult[48] = tmp28;
                                        cResult[49] = tmp35;
                                        tmp32 = tmp35;
                                      }
                                      const obj10 = { style: tmp24, children: tmp25 };
                                      const tmp31 = options(ReanimatedRexportDefault.View, obj10);
                                      cResult[44] = tmp24;
                                      cResult[45] = tmp25;
                                      cResult[46] = tmp31;
                                      tmp28 = tmp31;
                                    }
                                  }
                                  const obj11 = {
                                    variant,
                                    color,
                                    lineClamp: 1,
                                    ellipsizeMode: "clip",
                                    children: shiftedText,
                                  };
                                  const tmp27 = options(Text_Text.Text, obj11);
                                  cResult[40] = color;
                                  cResult[41] = shiftedText;
                                  cResult[42] = variant;
                                  cResult[43] = tmp27;
                                  tmp25 = tmp27;
                                }
                              }
                              const items1 = [styles.layer, tmp23, animatedStyles.shiftedText];
                              cResult[36] = animatedStyles.shiftedText;
                              cResult[37] = styles.layer;
                              cResult[38] = tmp23;
                              cResult[39] = items1;
                              tmp24 = items1;
                            }
                          }
                          const items2 = [styles.window, tmp21, animatedStyles.shiftedInnerWindow];
                          cResult[30] = animatedStyles.shiftedInnerWindow;
                          cResult[31] = styles.window;
                          cResult[32] = tmp21;
                          cResult[33] = items2;
                          tmp22 = items2;
                        }
                      }
                      const items3 = [styles.window, tmp19, animatedStyles.shiftedOuterWindow];
                      cResult[24] = animatedStyles.shiftedOuterWindow;
                      cResult[25] = styles.window;
                      cResult[26] = tmp19;
                      cResult[27] = items3;
                      tmp20 = items3;
                    }
                    const obj12 = { style: tmp5, children: tmp11 };
                    const tmp18 = options(ReanimatedRexportDefault.View, obj12);
                    cResult[19] = tmp5;
                    cResult[20] = tmp11;
                    cResult[21] = tmp18;
                    tmp15 = tmp18;
                  }
                  const obj13 = { style: tmp7, children: tmp8 };
                  const tmp14 = options(ReanimatedRexportDefault.View, obj13);
                  cResult[16] = tmp7;
                  cResult[17] = tmp8;
                  cResult[18] = tmp14;
                  tmp11 = tmp14;
                }
              }
              const obj14 = { variant, color, lineClamp: 1, ellipsizeMode: "clip", children: text };
              const tmp10 = options(Text_Text.Text, obj14);
              cResult[12] = color;
              cResult[13] = text;
              cResult[14] = variant;
              cResult[15] = tmp10;
              tmp8 = tmp10;
            }
          }
          const items4 = [styles.layer, tmp6, animatedStyles.plainText];
          cResult[8] = animatedStyles.plainText;
          cResult[9] = styles.layer;
          cResult[10] = tmp6;
          cResult[11] = items4;
          tmp7 = items4;
        }
      }
      const items5 = [styles.window, tmp4, animatedStyles.plainWindow];
      cResult[2] = animatedStyles.plainWindow;
      cResult[3] = styles.window;
      cResult[4] = tmp4;
      cResult[5] = items5;
      tmp5 = items5;
    }
  : function ShimmerTextSlot(arg0) {
      ({ variant, color, animationWidth, clippingWindowWidth, animatedStyles, styles } = arg0);
      const obj = { children: null };
      ({ text, shiftedText } = arg0);
      const obj2 = { style: null, children: null };
      const items = [styles.window, { width: clippingWindowWidth }, animatedStyles.plainWindow];
      obj2.style = items;
      const obj3 = {
        style: null,
        children: options(Text_Text.Text, { variant, color, lineClamp: 1, ellipsizeMode: "clip", children: text }),
      };
      const items1 = [styles.layer, { width: animationWidth }, animatedStyles.plainText];
      obj3.style = items1;
      obj2.children = options(ReanimatedRexportDefault.View, obj3);
      const items2 = [options(ReanimatedRexportDefault.View, obj2)];
      const obj4 = { style: null, children: null };
      const items3 = [styles.window, { width: clippingWindowWidth }, animatedStyles.shiftedOuterWindow];
      obj4.style = items3;
      const obj5 = { style: null, children: null };
      const items4 = [styles.window, { width: clippingWindowWidth }, animatedStyles.shiftedInnerWindow];
      obj5.style = items4;
      const obj6 = {
        style: null,
        children: options(Text_Text.Text, {
          variant,
          color,
          lineClamp: 1,
          ellipsizeMode: "clip",
          children: shiftedText,
        }),
      };
      const items5 = [styles.layer, { width: animationWidth }, animatedStyles.shiftedText];
      obj6.style = items5;
      obj5.children = options(ReanimatedRexportDefault.View, obj6);
      obj4.children = options(ReanimatedRexportDefault.View, obj5);
      items2[1] = options(ReanimatedRexportDefault.View, obj4);
      obj.children = items2;
      return collapsed(closure_1_11, obj);
    };
const __initData = {
  code: "function AIShimmerNativeTsx1(){const{animationProgress,BAND_UPDATES_PER_PASS,bandGlyphsAt,slotCount,glyphChoices,overshootInSlots}=this.__closure;const totalProgress=animationProgress.get();const passProgress=totalProgress-Math.floor(totalProgress);const updateStep=Math.floor(passProgress*BAND_UPDATES_PER_PASS)/BAND_UPDATES_PER_PASS;return bandGlyphsAt(updateStep,slotCount,glyphChoices,overshootInSlots);}",
};
const __initData2 = {
  code: "function AIShimmerNativeTsx2(next,previous){const{runOnJS,setGlyphs}=this.__closure;if(next===previous){return;}runOnJS(setGlyphs)(next);}",
};
const __initData3 = {
  code: "function AIShimmerNativeTsx3(){const{animationProgress,BAND_UPDATES_PER_PASS,bandGlyphsAt,slotCount,glyphChoices,overshootInSlots}=this.__closure;const totalProgress=animationProgress.get();const passProgress=totalProgress-Math.floor(totalProgress);const updateStep=Math.floor(passProgress*BAND_UPDATES_PER_PASS)/BAND_UPDATES_PER_PASS;return bandGlyphsAt(updateStep,slotCount,glyphChoices,overshootInSlots);}",
};
const __initData4 = {
  code: "function AIShimmerNativeTsx4(next,previous){const{runOnJS,setGlyphs}=this.__closure;if(next===previous)return;runOnJS(setGlyphs)(next);}",
};
ReactCompilerGating = fn(558);
let closure_21 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function GlyphBand(animationProgress) {
        const cResult = animationProgress(overshootInSlots[7]).c(5);
        animationProgress = animationProgress.animationProgress;
        const slotCount = animationProgress.slotCount;
        overshootInSlots = animationProgress.overshootInSlots;
        const glyphChoices = animationProgress.glyphChoices;
        ({ fontSize, color, style } = animationProgress);
        let obj = animationProgress(overshootInSlots[7]);
        const tmp = animationProgress;
        const tmp2 = overshootInSlots;
        [tmp5, tmp6] = noop.useState(glyphChoices);
        _slicedToArray = tmp6;
        const tmp4 = _slicedToArray(noop.useState(glyphChoices), 2);
        const fn = function l() {
          value = animationProgress.get();
          const result = Math.floor((value - Math.floor(value)) * c12) / c12;
          return waveTransition2.bandGlyphsAt(result, slotCount, glyphChoices, overshootInSlots);
        };
        const obj2 = animationProgress(overshootInSlots[12]);
        fn.__closure = {
          animationProgress,
          BAND_UPDATES_PER_PASS,
          bandGlyphsAt: animationProgress(overshootInSlots[11]).bandGlyphsAt,
          slotCount,
          glyphChoices,
          overshootInSlots,
        };
        fn.__workletHash = 7805477121955;
        fn.__initData = __initData;
        const fn2 = function o(arg0, arg1) {
          if (arg0 !== arg1) {
            ReanimatedRexport.runOnJS(closure_4)(arg0);
          }
        };
        const obj3 = {
          animationProgress,
          BAND_UPDATES_PER_PASS,
          bandGlyphsAt: animationProgress(overshootInSlots[11]).bandGlyphsAt,
          slotCount,
          glyphChoices,
          overshootInSlots,
        };
        fn2.__closure = { runOnJS: animationProgress(overshootInSlots[12]).runOnJS, setGlyphs: tmp6 };
        fn2.__workletHash = 1974315463271;
        fn2.__initData = __initData2;
        const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
        if (cResult[0] === color) {
          if (cResult[1] === fontSize) {
            if (cResult[2] === tmp5) {
              if (cResult[3] === style) {
                let tmp8 = cResult[4];
              }
              return tmp8;
            }
          }
        }
        const tmp9 = closure_9(tmp(tmp2[15]).AIGlyphText, {
          size: fontSize,
          color,
          allowFontScaling: false,
          numberOfLines: 1,
          ellipsizeMode: "clip",
          style,
          children: tmp5,
        });
        cResult[0] = color;
        cResult[1] = fontSize;
        cResult[2] = tmp5;
        cResult[3] = style;
        cResult[4] = tmp9;
        tmp8 = tmp9;
      }
    : function GlyphBand(animationProgress) {
        animationProgress = animationProgress.animationProgress;
        const slotCount = animationProgress.slotCount;
        const overshootInSlots = animationProgress.overshootInSlots;
        const glyphChoices = animationProgress.glyphChoices;
        _slicedToArray = undefined;
        ({ fontSize, color, style } = animationProgress);
        const children = _slicedToArray(noop.useState(glyphChoices), 2);
        _slicedToArray = tmp2;
        const fn = function f() {
          value = animationProgress.get();
          const result = Math.floor((value - Math.floor(value)) * c12) / c12;
          return waveTransition2.bandGlyphsAt(result, slotCount, glyphChoices, overshootInSlots);
        };
        let obj = animationProgress(overshootInSlots[12]);
        fn.__closure = {
          animationProgress,
          BAND_UPDATES_PER_PASS,
          bandGlyphsAt: animationProgress(overshootInSlots[11]).bandGlyphsAt,
          slotCount,
          glyphChoices,
          overshootInSlots,
        };
        fn.__workletHash = 4090385139937;
        fn.__initData = __initData3;
        class S {
          constructor(arg0, arg1) {
            if (animationProgress !== arg1) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[12]);
              tmp3 = closure_4;
              tmp4 = obj.runOnJS(closure_4)(animationProgress);
            }
            return;
          }
        }
        const obj2 = {
          animationProgress,
          BAND_UPDATES_PER_PASS,
          bandGlyphsAt: animationProgress(overshootInSlots[11]).bandGlyphsAt,
          slotCount,
          glyphChoices,
          overshootInSlots,
        };
        S.__closure = { runOnJS: animationProgress(overshootInSlots[12]).runOnJS, setGlyphs: children[1] };
        S.__workletHash = 8422043105991;
        S.__initData = __initData4;
        const animatedReaction = obj.useAnimatedReaction(fn, S);
        return closure_9(animationProgress(overshootInSlots[15]).AIGlyphText, {
          size,
          color,
          allowFontScaling: false,
          numberOfLines: 1,
          ellipsizeMode: "clip",
          style,
          children: children[0],
        });
      },
);
const __initData5 = {
  code: "function AIShimmerNativeTsx5(){const{animationProgress,bandEdgesAt,animationWidth,overshoot,incomingSlotForPass,slot}=this.__closure;const totalProgress=animationProgress.get();const passIndex=Math.floor(totalProgress);const passProgress=totalProgress-passIndex;return{...bandEdgesAt(passProgress,animationWidth,overshoot),isIncoming:incomingSlotForPass(passIndex)===slot};}",
};
const __initData6 = {
  code: "function AIShimmerNativeTsx6(){const{slotState,clippingWindowWidth}=this.__closure;const{incomingTextEnd:incomingTextEnd,outgoingTextStart:outgoingTextStart,isIncoming:isIncoming}=slotState.get();return{transform:[{translateX:isIncoming?incomingTextEnd-clippingWindowWidth:outgoingTextStart}]};}",
};
const __initData7 = {
  code: "function AIShimmerNativeTsx7(){const{slotState,clippingWindowWidth}=this.__closure;const{incomingTextEnd:incomingTextEnd_0,outgoingTextStart:outgoingTextStart_0,isIncoming:isIncoming_0}=slotState.get();return{transform:[{translateX:isIncoming_0?clippingWindowWidth-incomingTextEnd_0:-outgoingTextStart_0}]};}",
};
const __initData8 = {
  code: "function AIShimmerNativeTsx8(){const{slotState,SHIFTED_OPACITY}=this.__closure;const{bandStart:bandStart,bandEnd:bandEnd,isIncoming:isIncoming_1}=slotState.get();return{opacity:SHIFTED_OPACITY,transform:[{translateX:isIncoming_1?bandStart:bandEnd}]};}",
};
const __initData9 = {
  code: "function AIShimmerNativeTsx9(){const{slotState,clippingWindowWidth}=this.__closure;const{incomingTextEnd:incomingTextEnd_1,bandStart:bandStart_0,bandEnd:bandEnd_0,outgoingTextStart:outgoingTextStart_1,isIncoming:isIncoming_2}=slotState.get();const shiftedWidth=isIncoming_2?incomingTextEnd_1-bandStart_0:outgoingTextStart_1-bandEnd_0;return{transform:[{translateX:shiftedWidth-clippingWindowWidth}]};}",
};
const __initData10 = {
  code: "function AIShimmerNativeTsx10(){const{slotState,clippingWindowWidth}=this.__closure;const{incomingTextEnd:incomingTextEnd_2,outgoingTextStart:outgoingTextStart_2,isIncoming:isIncoming_3}=slotState.get();return{transform:[{translateX:clippingWindowWidth-(isIncoming_3?incomingTextEnd_2:outgoingTextStart_2)}]};}",
};
const __initData11 = {
  code: "function AIShimmerNativeTsx11(){const{animationProgress,bandEdgesAt,animationWidth,overshoot,incomingSlotForPass,slot}=this.__closure;const totalProgress=animationProgress.get();const passIndex=Math.floor(totalProgress);const passProgress=totalProgress-passIndex;return{...bandEdgesAt(passProgress,animationWidth,overshoot),isIncoming:incomingSlotForPass(passIndex)===slot};}",
};
const __initData12 = {
  code: "function AIShimmerNativeTsx12(){const{slotState,clippingWindowWidth}=this.__closure;const{incomingTextEnd:incomingTextEnd,outgoingTextStart:outgoingTextStart,isIncoming:isIncoming}=slotState.get();return{transform:[{translateX:isIncoming?incomingTextEnd-clippingWindowWidth:outgoingTextStart}]};}",
};
const __initData13 = {
  code: "function AIShimmerNativeTsx13(){const{slotState,clippingWindowWidth}=this.__closure;const{incomingTextEnd:incomingTextEnd_0,outgoingTextStart:outgoingTextStart_0,isIncoming:isIncoming_0}=slotState.get();return{transform:[{translateX:isIncoming_0?clippingWindowWidth-incomingTextEnd_0:-outgoingTextStart_0}]};}",
};
const __initData14 = {
  code: "function AIShimmerNativeTsx14(){const{slotState,SHIFTED_OPACITY}=this.__closure;const{bandStart:bandStart,bandEnd:bandEnd,isIncoming:isIncoming_1}=slotState.get();return{opacity:SHIFTED_OPACITY,transform:[{translateX:isIncoming_1?bandStart:bandEnd}]};}",
};
const __initData15 = {
  code: "function AIShimmerNativeTsx15(){const{slotState,clippingWindowWidth}=this.__closure;const{incomingTextEnd:incomingTextEnd_1,bandStart:bandStart_0,bandEnd:bandEnd_0,outgoingTextStart:outgoingTextStart_1,isIncoming:isIncoming_2}=slotState.get();const shiftedWidth=isIncoming_2?incomingTextEnd_1-bandStart_0:outgoingTextStart_1-bandEnd_0;return{transform:[{translateX:shiftedWidth-clippingWindowWidth}]};}",
};
const __initData16 = {
  code: "function AIShimmerNativeTsx16(){const{slotState,clippingWindowWidth}=this.__closure;const{incomingTextEnd:incomingTextEnd_2,outgoingTextStart:outgoingTextStart_2,isIncoming:isIncoming_3}=slotState.get();return{transform:[{translateX:clippingWindowWidth-(isIncoming_3?incomingTextEnd_2:outgoingTextStart_2)}]};}",
};
ReactCompilerGating = fn(558);
let closure_34 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAnimatedSlotStyles(animationProgress) {
      const cResult = animationProgress(animationWidth[7]).c(6);
      animationProgress = animationProgress.animationProgress;
      const slot = animationProgress.slot;
      animationWidth = animationProgress.animationWidth;
      const clippingWindowWidth = animationProgress.clippingWindowWidth;
      const overshoot = animationProgress.overshoot;
      let obj = animationProgress(animationWidth[7]);
      const fn = function n() {
        value = animationProgress.get();
        const rounded = Math.floor(value);
        const obj = {};
        const merged = Object.assign(waveTransition2.bandEdgesAt(value - rounded, animationWidth, overshoot));
        obj.isIncoming = createWaveTransition.incomingSlotForPass(rounded) === slot;
        return obj;
      };
      let obj2 = animationProgress(animationWidth[12]);
      fn.__closure = {
        animationProgress,
        bandEdgesAt: animationProgress(animationWidth[11]).bandEdgesAt,
        animationWidth,
        overshoot,
        incomingSlotForPass: animationProgress(animationWidth[13]).incomingSlotForPass,
        slot,
      };
      fn.__workletHash = 13646328099482;
      fn.__initData = __initData5;
      const derivedValue = obj2.useDerivedValue(fn);
      const obj3 = {
        animationProgress,
        bandEdgesAt: animationProgress(animationWidth[11]).bandEdgesAt,
        animationWidth,
        overshoot,
        incomingSlotForPass: animationProgress(animationWidth[13]).incomingSlotForPass,
        slot,
      };
      const fn2 = function o() {
        value = derivedValue.get();
        let outgoingTextStart = value.outgoingTextStart;
        if (value.isIncoming) {
          outgoingTextStart = tmp2 - clippingWindowWidth;
        }
        const obj = { transform: null };
        const items = [{ translateX: outgoingTextStart }];
        obj.transform = items;
        return obj;
      };
      fn2.__closure = { slotState: derivedValue, clippingWindowWidth };
      fn2.__workletHash = 12725373372495;
      fn2.__initData = __initData6;
      const animatedStyle = animationProgress(animationWidth[12]).useAnimatedStyle(fn2);
      const obj4 = animationProgress(animationWidth[12]);
      const fn3 = function s() {
        value = derivedValue.get();
        if (value.isIncoming) {
          let diff = clippingWindowWidth - tmp2;
        } else {
          diff = -tmp3;
        }
        const obj = { transform: null };
        const items = [{ translateX: diff }];
        obj.transform = items;
        return obj;
      };
      fn3.__closure = { slotState: derivedValue, clippingWindowWidth };
      fn3.__workletHash = 1233030944035;
      fn3.__initData = __initData7;
      const animatedStyle1 = animationProgress(animationWidth[12]).useAnimatedStyle(fn3);
      const obj5 = animationProgress(animationWidth[12]);
      const fn4 = function l() {
        value = derivedValue.get();
        let bandEnd = value.bandEnd;
        const obj = { opacity: waveTransition2.SHIFTED_OPACITY, transform: null };
        ({ bandStart, isIncoming } = value);
        if (isIncoming) {
          bandEnd = bandStart;
        }
        const items = [{ translateX: bandEnd }];
        obj.transform = items;
        return obj;
      };
      const obj6 = animationProgress(animationWidth[12]);
      fn4.__closure = {
        slotState: derivedValue,
        SHIFTED_OPACITY: animationProgress(animationWidth[11]).SHIFTED_OPACITY,
      };
      fn4.__workletHash = 14240837258339;
      fn4.__initData = __initData8;
      const animatedStyle2 = obj6.useAnimatedStyle(fn4);
      const obj7 = { slotState: derivedValue, SHIFTED_OPACITY: animationProgress(animationWidth[11]).SHIFTED_OPACITY };
      const fn5 = function c() {
        value = derivedValue.get();
        const obj = { transform: null };
        const items = [
          {
            translateX:
              (value.isIncoming ? value.incomingTextEnd - value.bandStart : value.outgoingTextStart - value.bandEnd) -
              clippingWindowWidth,
          },
        ];
        obj.transform = items;
        return obj;
      };
      fn5.__closure = { slotState: derivedValue, clippingWindowWidth };
      fn5.__workletHash = 5330943394540;
      fn5.__initData = __initData9;
      const animatedStyle3 = animationProgress(animationWidth[12]).useAnimatedStyle(fn5);
      const obj8 = animationProgress(animationWidth[12]);
      const fn6 = function h() {
        value = derivedValue.get();
        let incomingTextEnd = value.outgoingTextStart;
        if (value.isIncoming) {
          incomingTextEnd = value.incomingTextEnd;
        }
        const obj = { transform: null };
        const items = [{ translateX: clippingWindowWidth - incomingTextEnd }];
        obj.transform = items;
        return obj;
      };
      fn6.__closure = { slotState: derivedValue, clippingWindowWidth };
      fn6.__workletHash = 737122197817;
      fn6.__initData = __initData10;
      const animatedStyle4 = animationProgress(animationWidth[12]).useAnimatedStyle(fn6);
      if (cResult[0] === animatedStyle1) {
        if (cResult[1] === animatedStyle) {
          if (cResult[2] === animatedStyle3) {
            if (cResult[3] === animatedStyle2) {
              if (cResult[4] === animatedStyle4) {
                let tmp8 = cResult[5];
              }
              return tmp8;
            }
          }
        }
      }
      const obj10 = {
        plainWindow: animatedStyle,
        plainText: animatedStyle1,
        shiftedOuterWindow: animatedStyle2,
        shiftedInnerWindow: animatedStyle3,
        shiftedText: animatedStyle4,
      };
      cResult[0] = animatedStyle1;
      cResult[1] = animatedStyle;
      cResult[2] = animatedStyle3;
      cResult[3] = animatedStyle2;
      cResult[4] = animatedStyle4;
      cResult[5] = obj10;
      tmp8 = obj10;
    }
  : function useAnimatedSlotStyles(animationProgress) {
      animationProgress = animationProgress.animationProgress;
      const slot = animationProgress.slot;
      const animationWidth = animationProgress.animationWidth;
      const clippingWindowWidth = animationProgress.clippingWindowWidth;
      const overshoot = animationProgress.overshoot;
      const fn = function c() {
        value = animationProgress.get();
        const rounded = Math.floor(value);
        const obj = {};
        const merged = Object.assign(waveTransition2.bandEdgesAt(value - rounded, animationWidth, overshoot));
        obj.isIncoming = createWaveTransition.incomingSlotForPass(rounded) === slot;
        return obj;
      };
      let obj = animationProgress(animationWidth[12]);
      fn.__closure = {
        animationProgress,
        bandEdgesAt: animationProgress(animationWidth[11]).bandEdgesAt,
        animationWidth,
        overshoot,
        incomingSlotForPass: animationProgress(animationWidth[13]).incomingSlotForPass,
        slot,
      };
      fn.__workletHash = 14646211224559;
      fn.__initData = __initData11;
      const derivedValue = obj.useDerivedValue(fn);
      const obj3 = {
        plainWindow: null,
        plainText: null,
        shiftedOuterWindow: null,
        shiftedInnerWindow: null,
        shiftedText: null,
      };
      let obj2 = {
        animationProgress,
        bandEdgesAt: animationProgress(animationWidth[11]).bandEdgesAt,
        animationWidth,
        overshoot,
        incomingSlotForPass: animationProgress(animationWidth[13]).incomingSlotForPass,
        slot,
      };
      const fn2 = function h() {
        value = derivedValue.get();
        let outgoingTextStart = value.outgoingTextStart;
        if (value.isIncoming) {
          outgoingTextStart = tmp2 - clippingWindowWidth;
        }
        const obj = { transform: null };
        const items = [{ translateX: outgoingTextStart }];
        obj.transform = items;
        return obj;
      };
      fn2.__closure = { slotState: derivedValue, clippingWindowWidth };
      fn2.__workletHash = 2119000174682;
      fn2.__initData = __initData12;
      obj3.plainWindow = animationProgress(animationWidth[12]).useAnimatedStyle(fn2);
      const obj4 = animationProgress(animationWidth[12]);
      const fn3 = function u() {
        value = derivedValue.get();
        if (value.isIncoming) {
          let diff = clippingWindowWidth - tmp2;
        } else {
          diff = -tmp3;
        }
        const obj = { transform: null };
        const items = [{ translateX: diff }];
        obj.transform = items;
        return obj;
      };
      fn3.__closure = { slotState: derivedValue, clippingWindowWidth };
      fn3.__workletHash = 15525899343350;
      fn3.__initData = __initData13;
      obj3.plainText = animationProgress(animationWidth[12]).useAnimatedStyle(fn3);
      const obj5 = animationProgress(animationWidth[12]);
      const fn4 = function _() {
        value = derivedValue.get();
        let bandEnd = value.bandEnd;
        const obj = { opacity: waveTransition2.SHIFTED_OPACITY, transform: null };
        ({ bandStart, isIncoming } = value);
        if (isIncoming) {
          bandEnd = bandStart;
        }
        const items = [{ translateX: bandEnd }];
        obj.transform = items;
        return obj;
      };
      const obj6 = animationProgress(animationWidth[12]);
      fn4.__closure = {
        slotState: derivedValue,
        SHIFTED_OPACITY: animationProgress(animationWidth[11]).SHIFTED_OPACITY,
      };
      fn4.__workletHash = 3649202647358;
      fn4.__initData = __initData14;
      obj3.shiftedOuterWindow = obj6.useAnimatedStyle(fn4);
      const obj7 = { slotState: derivedValue, SHIFTED_OPACITY: animationProgress(animationWidth[11]).SHIFTED_OPACITY };
      const fn5 = function p() {
        value = derivedValue.get();
        const obj = { transform: null };
        const items = [
          {
            translateX:
              (value.isIncoming ? value.incomingTextEnd - value.bandStart : value.outgoingTextStart - value.bandEnd) -
              clippingWindowWidth,
          },
        ];
        obj.transform = items;
        return obj;
      };
      fn5.__closure = { slotState: derivedValue, clippingWindowWidth };
      fn5.__workletHash = 15678502586321;
      fn5.__initData = __initData15;
      obj3.shiftedInnerWindow = animationProgress(animationWidth[12]).useAnimatedStyle(fn5);
      const obj8 = animationProgress(animationWidth[12]);
      class S {
        constructor() {
          value = closure_5.get();
          incomingTextEnd = value.outgoingTextStart;
          tmp2 = clippingWindowWidth;
          if (value.isIncoming) {
            incomingTextEnd = value.incomingTextEnd;
          }
          obj = { transform: null };
          obj1 = { translateX: tmp2 - incomingTextEnd };
          items = [];
          items[0] = obj1;
          obj.transform = items;
          return obj;
        }
      }
      S.__closure = { slotState: derivedValue, clippingWindowWidth };
      S.__workletHash = 10676531803199;
      S.__initData = __initData16;
      obj3.shiftedText = animationProgress(animationWidth[12]).useAnimatedStyle(S);
      return obj3;
    };
const __initData17 = {
  code: "function AIShimmerNativeTsx17(){const{animationProgress,bandEdgesAt,animationWidth,overshoot,glyphLayerOpacityAt,easeTail}=this.__closure;const totalProgress=animationProgress.get();const passProgress=totalProgress-Math.floor(totalProgress);const{bandStart:bandStart,bandEnd:bandEnd}=bandEdgesAt(passProgress,animationWidth,overshoot);return{bandStart:bandStart,bandEnd:bandEnd,opacity:glyphLayerOpacityAt(easeTail(passProgress))};}",
};
const __initData18 = {
  code: "function AIShimmerNativeTsx18(){const{crossFadeOpacity}=this.__closure;return{opacity:crossFadeOpacity.get()};}",
};
const __initData19 = {
  code: "function AIShimmerNativeTsx19(){const{bandState}=this.__closure;const{bandStart:bandStart_0,opacity:opacity}=bandState.get();return{opacity:opacity,transform:[{translateX:bandStart_0}]};}",
};
const __initData20 = {
  code: "function AIShimmerNativeTsx20(){const{bandState,clippingWindowWidth}=this.__closure;const{bandStart:bandStart_1,bandEnd:bandEnd_0}=bandState.get();return{transform:[{translateX:bandEnd_0-bandStart_1-clippingWindowWidth}]};}",
};
const __initData21 = {
  code: "function AIShimmerNativeTsx21(){const{bandState,clippingWindowWidth}=this.__closure;const{bandEnd:bandEnd_1}=bandState.get();return{transform:[{translateX:clippingWindowWidth-bandEnd_1}]};}",
};
const __initData22 = {
  code: "function AIShimmerNativeTsx22(){const{animationProgress,bandEdgesAt,animationWidth,overshoot,glyphLayerOpacityAt,easeTail}=this.__closure;const totalProgress=animationProgress.get();const passProgress=totalProgress-Math.floor(totalProgress);const{bandStart:bandStart,bandEnd:bandEnd}=bandEdgesAt(passProgress,animationWidth,overshoot);return{bandStart:bandStart,bandEnd:bandEnd,opacity:glyphLayerOpacityAt(easeTail(passProgress))};}",
};
const __initData23 = {
  code: "function AIShimmerNativeTsx23(){const{crossFadeOpacity}=this.__closure;return{opacity:crossFadeOpacity.get()};}",
};
const __initData24 = {
  code: "function AIShimmerNativeTsx24(){const{bandState}=this.__closure;const{bandStart:bandStart_0,opacity:opacity}=bandState.get();return{opacity:opacity,transform:[{translateX:bandStart_0}]};}",
};
const __initData25 = {
  code: "function AIShimmerNativeTsx25(){const{bandState,clippingWindowWidth}=this.__closure;const{bandStart:bandStart_1,bandEnd:bandEnd_0}=bandState.get();return{transform:[{translateX:bandEnd_0-bandStart_1-clippingWindowWidth}]};}",
};
const __initData26 = {
  code: "function AIShimmerNativeTsx26(){const{bandState,clippingWindowWidth}=this.__closure;const{bandEnd:bandEnd_1}=bandState.get();return{transform:[{translateX:clippingWindowWidth-bandEnd_1}]};}",
};
ReactCompilerGating = fn(558);
let closure_45 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAnimatedBandStyles(animationProgress) {
      const cResult = animationProgress(animationWidth[7]).c(5);
      animationProgress = animationProgress.animationProgress;
      const crossFadeOpacity = animationProgress.crossFadeOpacity;
      animationWidth = animationProgress.animationWidth;
      const clippingWindowWidth = animationProgress.clippingWindowWidth;
      const overshoot = animationProgress.overshoot;
      let obj = animationProgress(animationWidth[7]);
      const fn = function n() {
        value = animationProgress.get();
        const diff = value - Math.floor(value);
        const bandEdgesAtResult = waveTransition2.bandEdgesAt(diff, animationWidth, overshoot);
        const obj2 = { bandStart: bandEdgesAtResult.bandStart, bandEnd: bandEdgesAtResult.bandEnd, opacity: null };
        const obj3 = waveTransition2;
        obj2.opacity = obj3.glyphLayerOpacityAt(waveTransition2.easeTail(diff));
        return obj2;
      };
      let obj2 = animationProgress(animationWidth[12]);
      fn.__closure = {
        animationProgress,
        bandEdgesAt: animationProgress(animationWidth[11]).bandEdgesAt,
        animationWidth,
        overshoot,
        glyphLayerOpacityAt: animationProgress(animationWidth[11]).glyphLayerOpacityAt,
        easeTail: animationProgress(animationWidth[11]).easeTail,
      };
      fn.__workletHash = 3313129804635;
      fn.__initData = __initData17;
      const derivedValue = obj2.useDerivedValue(fn);
      let obj3 = {
        animationProgress,
        bandEdgesAt: animationProgress(animationWidth[11]).bandEdgesAt,
        animationWidth,
        overshoot,
        glyphLayerOpacityAt: animationProgress(animationWidth[11]).glyphLayerOpacityAt,
        easeTail: animationProgress(animationWidth[11]).easeTail,
      };
      const fn2 = function o() {
        return { opacity: crossFadeOpacity.get() };
      };
      fn2.__closure = { crossFadeOpacity };
      fn2.__workletHash = 4111670252489;
      fn2.__initData = __initData18;
      const animatedStyle = animationProgress(animationWidth[12]).useAnimatedStyle(fn2);
      const obj4 = animationProgress(animationWidth[12]);
      const fn3 = function s() {
        value = derivedValue.get();
        const obj = { opacity: value.opacity, transform: null };
        const items = [{ translateX: value.bandStart }];
        obj.transform = items;
        return obj;
      };
      fn3.__closure = { bandState: derivedValue };
      fn3.__workletHash = 16687078196879;
      fn3.__initData = __initData19;
      const animatedStyle1 = animationProgress(animationWidth[12]).useAnimatedStyle(fn3);
      const obj5 = animationProgress(animationWidth[12]);
      const fn4 = function l() {
        value = derivedValue.get();
        const obj = { transform: null };
        const items = [{ translateX: value.bandEnd - value.bandStart - clippingWindowWidth }];
        obj.transform = items;
        return obj;
      };
      fn4.__closure = { bandState: derivedValue, clippingWindowWidth };
      fn4.__workletHash = 7837326385465;
      fn4.__initData = __initData20;
      const animatedStyle2 = animationProgress(animationWidth[12]).useAnimatedStyle(fn4);
      const obj6 = animationProgress(animationWidth[12]);
      const fn5 = function c() {
        const obj = { transform: null };
        const items = [{ translateX: clippingWindowWidth - derivedValue.get().bandEnd }];
        obj.transform = items;
        return obj;
      };
      fn5.__closure = { bandState: derivedValue, clippingWindowWidth };
      fn5.__workletHash = 5170598517994;
      fn5.__initData = __initData21;
      const animatedStyle3 = animationProgress(animationWidth[12]).useAnimatedStyle(fn5);
      if (cResult[0] === animatedStyle) {
        if (cResult[1] === animatedStyle2) {
          if (cResult[2] === animatedStyle1) {
            if (cResult[3] === animatedStyle3) {
              let tmp7 = cResult[4];
            }
            return tmp7;
          }
        }
      }
      const obj8 = {
        crossFade: animatedStyle,
        outerWindow: animatedStyle1,
        innerWindow: animatedStyle2,
        text: animatedStyle3,
      };
      cResult[0] = animatedStyle;
      cResult[1] = animatedStyle2;
      cResult[2] = animatedStyle1;
      cResult[3] = animatedStyle3;
      cResult[4] = obj8;
      tmp7 = obj8;
    }
  : function useAnimatedBandStyles(animationProgress) {
      animationProgress = animationProgress.animationProgress;
      const crossFadeOpacity = animationProgress.crossFadeOpacity;
      const animationWidth = animationProgress.animationWidth;
      const clippingWindowWidth = animationProgress.clippingWindowWidth;
      const overshoot = animationProgress.overshoot;
      const fn = function c() {
        value = animationProgress.get();
        const diff = value - Math.floor(value);
        const bandEdgesAtResult = waveTransition2.bandEdgesAt(diff, animationWidth, overshoot);
        const obj2 = { bandStart: bandEdgesAtResult.bandStart, bandEnd: bandEdgesAtResult.bandEnd, opacity: null };
        const obj3 = waveTransition2;
        obj2.opacity = obj3.glyphLayerOpacityAt(waveTransition2.easeTail(diff));
        return obj2;
      };
      let obj = animationProgress(animationWidth[12]);
      fn.__closure = {
        animationProgress,
        bandEdgesAt: animationProgress(animationWidth[11]).bandEdgesAt,
        animationWidth,
        overshoot,
        glyphLayerOpacityAt: animationProgress(animationWidth[11]).glyphLayerOpacityAt,
        easeTail: animationProgress(animationWidth[11]).easeTail,
      };
      fn.__workletHash = 16926305543357;
      fn.__initData = __initData22;
      const derivedValue = obj.useDerivedValue(fn);
      let obj3 = { crossFade: null, outerWindow: null, innerWindow: null, text: null };
      let obj2 = {
        animationProgress,
        bandEdgesAt: animationProgress(animationWidth[11]).bandEdgesAt,
        animationWidth,
        overshoot,
        glyphLayerOpacityAt: animationProgress(animationWidth[11]).glyphLayerOpacityAt,
        easeTail: animationProgress(animationWidth[11]).easeTail,
      };
      const fn2 = function h() {
        return { opacity: crossFadeOpacity.get() };
      };
      fn2.__closure = { crossFadeOpacity };
      fn2.__workletHash = 15181269062433;
      fn2.__initData = __initData23;
      obj3.crossFade = animationProgress(animationWidth[12]).useAnimatedStyle(fn2);
      const obj4 = animationProgress(animationWidth[12]);
      const fn3 = function u() {
        value = derivedValue.get();
        const obj = { opacity: value.opacity, transform: null };
        const items = [{ translateX: value.bandStart }];
        obj.transform = items;
        return obj;
      };
      fn3.__closure = { bandState: derivedValue };
      fn3.__workletHash = 10080649154529;
      fn3.__initData = __initData24;
      obj3.outerWindow = animationProgress(animationWidth[12]).useAnimatedStyle(fn3);
      const obj5 = animationProgress(animationWidth[12]);
      const fn4 = function _() {
        value = derivedValue.get();
        const obj = { transform: null };
        const items = [{ translateX: value.bandEnd - value.bandStart - clippingWindowWidth }];
        obj.transform = items;
        return obj;
      };
      fn4.__closure = { bandState: derivedValue, clippingWindowWidth };
      fn4.__workletHash = 17147401722620;
      fn4.__initData = __initData25;
      obj3.innerWindow = animationProgress(animationWidth[12]).useAnimatedStyle(fn4);
      const obj6 = animationProgress(animationWidth[12]);
      const fn5 = function p() {
        const obj = { transform: null };
        const items = [{ translateX: clippingWindowWidth - derivedValue.get().bandEnd }];
        obj.transform = items;
        return obj;
      };
      fn5.__closure = { bandState: derivedValue, clippingWindowWidth };
      fn5.__workletHash = 6557338274221;
      fn5.__initData = __initData26;
      obj3.text = animationProgress(animationWidth[12]).useAnimatedStyle(fn5);
      return obj3;
    };
const size = fn(2);
let result = size.fileFinishedImporting("design/visual-identities/ai/AIShimmer/AIShimmer.native.tsx");

export const AIShimmer = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function AIShimmer(arg0) {
        const cResult = c.c(12);
        if (cResult[0] !== arg0) {
          ({ variant, delay, initialDelay, duration } = arg0);
          const tmp9 = _objectWithoutProperties(arg0, closure_3);
          cResult[0] = arg0;
          cResult[1] = tmp9;
          cResult[2] = variant;
          cResult[3] = delay;
          cResult[4] = initialDelay;
          cResult[5] = duration;
          let AI_TEXT_EFFECT_DEFAULT_DURATION = duration;
          let tmp6 = initialDelay;
          let AI_TEXT_EFFECT_DEFAULT_DELAY = delay;
          let tmp5 = variant;
          let tmp4 = tmp9;
        } else {
          tmp4 = cResult[1];
          tmp5 = cResult[2];
          AI_TEXT_EFFECT_DEFAULT_DELAY = cResult[3];
          tmp6 = cResult[4];
          AI_TEXT_EFFECT_DEFAULT_DURATION = cResult[5];
        }
        let str = "text-md/normal";
        if (undefined !== tmp5) {
          str = tmp5;
        }
        if (undefined === AI_TEXT_EFFECT_DEFAULT_DELAY) {
          AI_TEXT_EFFECT_DEFAULT_DELAY = AIShimmerTypes.AI_TEXT_EFFECT_DEFAULT_DELAY;
        }
        let num7 = 0;
        if (undefined !== tmp6) {
          num7 = tmp6;
        }
        if (undefined === AI_TEXT_EFFECT_DEFAULT_DURATION) {
          AI_TEXT_EFFECT_DEFAULT_DURATION = AIShimmerTypes.AI_TEXT_EFFECT_DEFAULT_DURATION;
        }
        if (cResult[6] === AI_TEXT_EFFECT_DEFAULT_DELAY) {
          if (cResult[7] === AI_TEXT_EFFECT_DEFAULT_DURATION) {
            if (cResult[8] === num7) {
              if (cResult[9] === tmp4) {
                if (cResult[10] === str) {
                  let tmp10 = cResult[11];
                }
                return tmp10;
              }
            }
          }
        }
        const merged = Object.assign(tmp4);
        const tmp12 = options(
          closure_14,
          {
            variant: str,
            delay: AI_TEXT_EFFECT_DEFAULT_DELAY,
            initialDelay: num7,
            duration: AI_TEXT_EFFECT_DEFAULT_DURATION,
          },
          str,
        );
        cResult[6] = AI_TEXT_EFFECT_DEFAULT_DELAY;
        cResult[7] = AI_TEXT_EFFECT_DEFAULT_DURATION;
        cResult[8] = num7;
        cResult[9] = tmp4;
        cResult[10] = str;
        cResult[11] = tmp12;
        tmp10 = tmp12;
        const obj2 = {
          variant: str,
          delay: AI_TEXT_EFFECT_DEFAULT_DELAY,
          initialDelay: num7,
          duration: AI_TEXT_EFFECT_DEFAULT_DURATION,
        };
      }
    : function AIShimmer(variant) {
        let str = variant.variant;
        if (str === undefined) {
          str = "text-md/normal";
        }
        let AI_TEXT_EFFECT_DEFAULT_DELAY = variant.delay;
        if (AI_TEXT_EFFECT_DEFAULT_DELAY === undefined) {
          AI_TEXT_EFFECT_DEFAULT_DELAY = AIShimmerTypes.AI_TEXT_EFFECT_DEFAULT_DELAY;
        }
        let num = variant.initialDelay;
        if (num === undefined) {
          num = 0;
        }
        let AI_TEXT_EFFECT_DEFAULT_DURATION = variant.duration;
        if (AI_TEXT_EFFECT_DEFAULT_DURATION === undefined) {
          AI_TEXT_EFFECT_DEFAULT_DURATION = AIShimmerTypes.AI_TEXT_EFFECT_DEFAULT_DURATION;
        }
        const merged = Object.assign(
          Object.assign(variant, Object.assign({ variant: 0, delay: 0, initialDelay: 0, duration: 0 })),
        );
        return options(
          closure_14,
          {
            variant: str,
            delay: AI_TEXT_EFFECT_DEFAULT_DELAY,
            initialDelay: num,
            duration: AI_TEXT_EFFECT_DEFAULT_DURATION,
          },
          str,
        );
      },
);

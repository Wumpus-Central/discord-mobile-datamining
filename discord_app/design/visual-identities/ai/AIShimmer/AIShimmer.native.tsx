// === Module 14231: AIShimmer ===

// Module 14231 (AIShimmer)
import react2 from "react" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import Text_Text from "Text/Text" /* 4892 */;
import AIShimmerTypes from "AIShimmerTypes" /* 14232 */;
import waveTransition2 from "waveTransition" /* 14233 */;
import createWaveTransition2 from "createWaveTransition" /* 14234 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _objectWithoutProperties_mod from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let current;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
let closure_3 = ["variant", "delay", "initialDelay", "duration"];
let _slicedToArray = _slicedToArray_mod;
let _objectWithoutProperties = _objectWithoutProperties_mod;
({ PixelRatio: metroImportDefault, View: metroImportAll } = react_native);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let c12 = 30;
let closure_13 = createStyles.createStyles((height, height2) => {
  let rect;
  const obj = { container: { alignSelf: "flex-start", height }, sizer: { opacity: 0 }, layer: { position: "absolute", top: 0, left: 0, height }, glyphLayer: rect, window: { position: "absolute", top: 0, left: 0, height, overflow: "hidden" } };
  rect = { position: "absolute", top: (height - height2) / 2, left: 0, height: height2 };
  return obj;
});
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let AI_TEXT_EFFECT_DEFAULT_DELAY;
  let AI_TEXT_EFFECT_DEFAULT_DURATION;
  let delay;
  let duration;
  let initialDelay;
  let tmp4;
  let tmp5;
  let tmp6;
  let variant;
  const obj = react2;
  const cResult = obj.c(12);
  if (cResult[0] !== arg0) {
    ({ variant, delay, initialDelay, duration } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = tmp9;
    cResult[2] = variant;
    cResult[3] = delay;
    cResult[4] = initialDelay;
    cResult[5] = duration;
    AI_TEXT_EFFECT_DEFAULT_DURATION = duration;
    tmp6 = initialDelay;
    AI_TEXT_EFFECT_DEFAULT_DELAY = delay;
    tmp5 = variant;
    tmp4 = tmp9;
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
          let tmp10;
          if (cResult[10] === str) {
            tmp10 = cResult[11];
          }
          return tmp10;
        }
      }
    }
  }
  const obj2 = { variant: str, delay: AI_TEXT_EFFECT_DEFAULT_DELAY, initialDelay: num7, duration: AI_TEXT_EFFECT_DEFAULT_DURATION };
  const merged = Object.assign(tmp4);
  const tmp12 = React4(closure_14, obj2, str);
  cResult[6] = AI_TEXT_EFFECT_DEFAULT_DELAY;
  cResult[7] = AI_TEXT_EFFECT_DEFAULT_DURATION;
  cResult[8] = num7;
  cResult[9] = tmp4;
  cResult[10] = str;
  cResult[11] = tmp12;
  tmp10 = tmp12;
}) : ((variant) => {
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
  const obj = { variant: str, delay: AI_TEXT_EFFECT_DEFAULT_DELAY, initialDelay: num, duration: AI_TEXT_EFFECT_DEFAULT_DURATION };
  const merged = Object.assign(Object.assign(variant, Object.assign({ variant: 0, delay: 0, initialDelay: 0, duration: 0 })));
  return React4(closure_14, obj, str);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let bound;
  let color;
  let delay;
  let duration;
  let first;
  let glyphColor;
  let initialDelay;
  let onComplete;
  let onPass;
  let onStart;
  let ref;
  let sharedValue;
  let style;
  let text;
  let tmp14;
  let trailingWidth;
  let variant;
  let tmp = sharedValue;
  let obj = sharedValue(first[7]);
  const cResult = obj.c(48);
  ({ text, variant, color, glyphColor, delay, initialDelay, duration, onComplete, onStart, trailingWidth, style, ref } = arg0);
  const reducedMotion = bound.useContext(sharedValue(first[9]).AccessibilityPreferencesContext).reducedMotion;
  const fontScale = closure_7.getFontScale();
  const tmp5 = sharedValue(first[10]).TextStyleSheet[variant];
  const lineHeight = tmp5.lineHeight;
  const result = tmp5.fontSize * fontScale;
  const result1 = result * sharedValue(first[11]).GLYPH_FONT_SCALE;
  const tmp8 = closure_13(lineHeight * fontScale, result1);
  const obj3 = sharedValue(first[12]);
  sharedValue = obj3.useSharedValue(0);
  const obj4 = sharedValue(first[12]);
  const sharedValue1 = obj4.useSharedValue(1);
  [first, onPass] = bound.useState(null);
  const tmp13 = _slicedToArray(bound.useState(0), 2);
  [tmp14, _slicedToArray] = tmp13;
  _objectWithoutProperties = bound.useRef(null);
  let num = trailingWidth;
  if (trailingWidth == null) {
    num = 0;
  }
  const sum = tmp14 + num;
  bound = Math.max(1, Math.ceil(sum / result1));
  closure_7 = obj2.useRef(bound);
  if (cResult[0] === sharedValue) {
    let tmp17;
    if (cResult[1] === sharedValue1) {
      tmp17 = cResult[2];
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
                      let tmp18;
                      let tmp20;
                      let tmp23;
                      if (cResult[12] === trailingWidth) {
                        tmp18 = cResult[13];
                      }
                      const tmpResult = tmp(first[14]);
                      current = tmpResult.useAIShimmerCycle(tmp18).current;
                      if (cResult[14] !== bound) {
                        class Z {
                          constructor() {
                            closure_7.current = bound;
                            current = ref.current;
                            if (current != null) {
                              current.refreshBand();
                            }
                          }
                        }
                        const items = [bound];
                        cResult[14] = bound;
                        cResult[15] = Z;
                        cResult[16] = items;
                        tmp20 = items;
                      } else {
                        class Z {
                          constructor() {
                            closure_7.current = bound;
                            current = ref.current;
                            if (current != null) {
                              current.refreshBand();
                            }
                          }
                        }
                        tmp20 = cResult[16];
                      }
                      const effect = obj2.useEffect(Z, tmp20);
                      if (cResult[17] !== first) {
                        class Z {
                          constructor() {
                            closure_7.current = bound;
                            current = ref.current;
                            if (current != null) {
                              current.refreshBand();
                            }
                          }
                        }
                        const items1 = [first];
                        cResult[17] = first;
                        cResult[18] = tmp24;
                        cResult[19] = items1;
                        tmp23 = items1;
                      } else {
                        class Z {
                          constructor() {
                            closure_7.current = bound;
                            current = ref.current;
                            if (current != null) {
                              current.refreshBand();
                            }
                          }
                        }
                        tmp23 = cResult[19];
                      }
                      const effect1 = obj2.useEffect(tmp24, tmp23);
                      const _Symbol = Symbol;
                      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                        class Z {
                          constructor() {
                            closure_7.current = bound;
                            current = ref.current;
                            if (current != null) {
                              current.refreshBand();
                            }
                          }
                        }
                        cResult[20] = tmp27;
                      } else {
                        class Z {
                          constructor() {
                            closure_7.current = bound;
                            current = ref.current;
                            if (current != null) {
                              current.refreshBand();
                            }
                          }
                        }
                      }
                      const result2 = 0.5 * result1;
                      const result3 = 2 * sum;
                      if (null != first) {
                        class Z {
                          constructor() {
                            closure_7.current = bound;
                            current = ref.current;
                            if (current != null) {
                              current.refreshBand();
                            }
                          }
                        }
                      }
                      if (cResult[21] === style) {
                        class Z {
                          constructor() {
                            closure_7.current = bound;
                            current = ref.current;
                            if (current != null) {
                              current.refreshBand();
                            }
                          }
                        }
                        if (cResult[24] === color) {
                          class Z {
                            constructor() {
                              closure_7.current = bound;
                              current = ref.current;
                              if (current != null) {
                                current.refreshBand();
                              }
                            }
                          }
                        }
                        const obj5 = { variant, color, lineClamp: 1, ellipsizeMode: "clip", style: tmp8.sizer, children: current };
                        cResult[24] = color;
                        cResult[25] = current;
                        cResult[26] = tmp8.sizer;
                        cResult[27] = variant;
                        cResult[28] = closure_9(tmp(first[10]).Text, obj5);
                        const tmp34 = closure_9(tmp(first[10]).Text, obj5);
                      }
                      const items2 = [tmp8.container, style];
                      cResult[21] = style;
                      cResult[22] = tmp8.container;
                      cResult[23] = items2;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    const obj6 = { text, delay, initialDelay, duration, reducedMotion: reducedMotion.enabled, trailingWidth, onComplete, onStart, ref, createController: tmp17 };
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
    cResult[13] = obj6;
    tmp18 = obj6;
  }
  const fn = function o(arg0) {
    const obj = {
      animationProgress: sharedValue,
      crossFadeOpacity: sharedValue1,
      glyphCount() {
        return ref.current;
      },
      onPass
    };
    const createWaveTransition = createWaveTransition2.createWaveTransition;
    createWaveTransition2;
    const merged = Object.assign(arg0);
    const waveTransition = createWaveTransition(obj);
    ref.current = waveTransition;
    return waveTransition;
  };
  cResult[0] = sharedValue;
  cResult[1] = sharedValue1;
  cResult[2] = fn;
  tmp17 = fn;
}) : ((arg0) => {
  let _undefined;
  let c4;
  let color;
  let delay;
  let duration;
  let glyphColor;
  let initialDelay;
  let items2;
  let onComplete;
  let onPass;
  let onStart;
  let pass;
  let ref;
  let style;
  let text;
  let tmp13;
  let trailingWidth;
  let variant;
  ({ variant, color, glyphColor, trailingWidth } = arg0);
  let sharedValue;
  pass = undefined;
  onPass = undefined;
  _slicedToArray = undefined;
  let bound;
  let closure_7;
  let obj = bound;
  let tmp = sharedValue;
  ({ text, delay, initialDelay, duration, onComplete, onStart, style, ref } = arg0);
  const reducedMotion = bound.useContext(sharedValue(pass[9]).AccessibilityPreferencesContext).reducedMotion;
  const fontScale = closure_7.getFontScale();
  const tmp4 = sharedValue(pass[10]).TextStyleSheet[variant];
  const lineHeight = tmp4.lineHeight;
  const result = tmp4.fontSize * fontScale;
  const result1 = result * sharedValue(pass[11]).GLYPH_FONT_SCALE;
  const tmp7 = closure_13(lineHeight * fontScale, result1);
  const obj2 = sharedValue(pass[12]);
  sharedValue = obj2.useSharedValue(0);
  const obj3 = sharedValue(pass[12]);
  const sharedValue1 = obj3.useSharedValue(1);
  [pass, onPass] = bound.useState(null);
  [tmp13, c4] = bound.useState(0);
  _slicedToArray(bound.useState(0), 2);
  ref = bound.useRef(null);
  let num = trailingWidth;
  if (trailingWidth == null) {
    num = 0;
  }
  const sum = tmp13 + num;
  bound = Math.max(1, Math.ceil(sum / result1));
  closure_7 = obj.useRef(bound);
  const obj4 = {
    text,
    delay,
    initialDelay,
    duration,
    reducedMotion: reducedMotion.enabled,
    trailingWidth,
    onComplete,
    onStart,
    ref,
    createController(arg0) {
      const obj = {
        animationProgress: sharedValue,
        crossFadeOpacity: sharedValue1,
        glyphCount() {
          return ref.current;
        },
        onPass
      };
      const createWaveTransition = createWaveTransition2.createWaveTransition;
      createWaveTransition2;
      const merged = Object.assign(arg0);
      const waveTransition = createWaveTransition(obj);
      ref.current = waveTransition;
      return waveTransition;
    }
  };
  const tmpResult = tmp(pass[14]);
  current = tmpResult.useAIShimmerCycle(obj4).current;
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
  let tmp19 = current;
  const callback = obj.useCallback((nativeEvent) => {
    const width = nativeEvent.nativeEvent.layout.width;
    let tmp = _undefined((arg0) => {
      let tmp = width;
      if (Math.abs(arg0 - width) < 0.5) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  if (null != pass) {
    tmp19 = pass.slotA.length >= pass.slotB.length ? pass.slotA : pass.slotB;
  }
  const obj5 = { style: items2, onLayout: callback, accessible: true, accessibilityRole: "text", accessibilityLabel: current, children: null };
  items2 = [tmp7.container, style];
  const items3 = [, ];
  const obj6 = { variant, color, lineClamp: 1, ellipsizeMode: "clip", style: tmp7.sizer, children: tmp19 };
  items3[0] = closure_9(tmp(pass[10]).Text, obj6);
  if (null != pass) {
    let tmp22Result;
    if (sum > 0) {
      const obj7 = { pass, animationProgress: sharedValue, crossFadeOpacity: sharedValue1, glyphCount: bound, glyphFontSize: result1, variant, color, glyphColor, styles: tmp7, animationWidth: sum, clippingWindowWidth: 2 * sum, overshoot: 0.5 * result1 };
      if (glyphColor == null) {
        glyphColor = color;
      }
      tmp22Result = closure_9(closure_15, obj7);
    }
    items3[1] = tmp22Result;
    obj5.children = items3;
    return closure_10(closure_8, obj5);
  }
  const obj8 = { variant, color, lineClamp: 1, ellipsizeMode: "clip", style: tmp7.layer, children: current };
  tmp22Result = closure_9(tmp(tmp2[10]).Text, obj8);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let animationProgress;
  let animationWidth;
  let clippingWindowWidth;
  let color;
  let crossFadeOpacity;
  let glyphColor;
  let glyphCount;
  let glyphFontSize;
  let items;
  let overshoot;
  let pass;
  let styles;
  let variant;
  const obj = react2;
  const cResult = obj.c(82);
  ({ pass, animationProgress, crossFadeOpacity, glyphCount, glyphFontSize, variant, color, glyphColor, styles, animationWidth, clippingWindowWidth, overshoot } = arg0);
  if (cResult[0] === animationWidth) {
    if (cResult[1] === clippingWindowWidth) {
      let tmp4;
      if (cResult[2] === overshoot) {
        tmp4 = cResult[3];
      }
      if (cResult[4] === animationProgress) {
        let tmp5;
        if (cResult[5] === tmp4) {
          tmp5 = cResult[6];
        }
        const tmp10 = closure_34(tmp5);
        if (cResult[7] === animationProgress) {
          let tmp11;
          if (cResult[8] === tmp4) {
            tmp11 = cResult[9];
          }
          const tmp9Result = closure_34(tmp11);
          if (cResult[10] === animationProgress) {
            if (cResult[11] === crossFadeOpacity) {
              let tmp16;
              let tmp22;
              let tmp24;
              let tmp26;
              if (cResult[12] === tmp4) {
                tmp16 = cResult[13];
              }
              const tmp21 = closure_45(tmp16);
              if (cResult[14] !== pass.slotA) {
                const tmpResult = waveTransition2;
                const shiftedLineForResult = tmpResult.shiftedLineFor(pass.slotA);
                cResult[14] = pass.slotA;
                cResult[15] = shiftedLineForResult;
                tmp22 = shiftedLineForResult;
              } else {
                tmp22 = cResult[15];
              }
              if (cResult[16] !== pass.slotB) {
                const tmpResult2 = waveTransition2;
                const shiftedLineForResult1 = tmpResult2.shiftedLineFor(pass.slotB);
                cResult[16] = pass.slotB;
                cResult[17] = shiftedLineForResult1;
                tmp24 = shiftedLineForResult1;
              } else {
                tmp24 = cResult[17];
              }
              if (cResult[18] !== animationWidth) {
                const obj2 = { width: animationWidth };
                cResult[18] = animationWidth;
                cResult[19] = obj2;
                tmp26 = obj2;
              } else {
                tmp26 = cResult[19];
              }
              if (cResult[20] === tmp21.crossFade) {
                if (cResult[21] === styles.layer) {
                  let tmp27;
                  if (cResult[22] === tmp26) {
                    tmp27 = cResult[23];
                  }
                  if (cResult[24] === animationWidth) {
                    if (cResult[25] === clippingWindowWidth) {
                      if (cResult[26] === color) {
                        if (cResult[27] === pass.slotA) {
                          if (cResult[28] === tmp22) {
                            if (cResult[29] === tmp10) {
                              if (cResult[30] === styles) {
                                let tmp28;
                                if (cResult[31] === variant) {
                                  tmp28 = cResult[32];
                                }
                                if (cResult[33] === animationWidth) {
                                  if (cResult[34] === clippingWindowWidth) {
                                    if (cResult[35] === color) {
                                      if (cResult[36] === pass.slotB) {
                                        if (cResult[37] === tmp24) {
                                          if (cResult[38] === tmp9Result) {
                                            if (cResult[39] === styles) {
                                              let tmp32;
                                              let tmp36;
                                              if (cResult[40] === variant) {
                                                tmp32 = cResult[41];
                                              }
                                              if (cResult[42] !== clippingWindowWidth) {
                                                const obj3 = { width: clippingWindowWidth };
                                                cResult[42] = clippingWindowWidth;
                                                cResult[43] = obj3;
                                                tmp36 = obj3;
                                              } else {
                                                tmp36 = cResult[43];
                                              }
                                              if (cResult[44] === tmp21.outerWindow) {
                                                if (cResult[45] === styles.window) {
                                                  let tmp37;
                                                  let tmp38;
                                                  if (cResult[46] === tmp36) {
                                                    tmp37 = cResult[47];
                                                  }
                                                  if (cResult[48] !== clippingWindowWidth) {
                                                    const obj4 = { width: clippingWindowWidth };
                                                    cResult[48] = clippingWindowWidth;
                                                    cResult[49] = obj4;
                                                    tmp38 = obj4;
                                                  } else {
                                                    tmp38 = cResult[49];
                                                  }
                                                  if (cResult[50] === tmp21.innerWindow) {
                                                    if (cResult[51] === styles.window) {
                                                      let tmp39;
                                                      let tmp41;
                                                      if (cResult[52] === tmp38) {
                                                        tmp39 = cResult[53];
                                                      }
                                                      const result = glyphCount * glyphFontSize;
                                                      if (cResult[54] !== result) {
                                                        const obj5 = { width: result };
                                                        cResult[54] = result;
                                                        cResult[55] = obj5;
                                                        tmp41 = obj5;
                                                      } else {
                                                        tmp41 = cResult[55];
                                                      }
                                                      if (cResult[56] === tmp21.text) {
                                                        if (cResult[57] === styles.layer) {
                                                          let tmp42;
                                                          if (cResult[58] === tmp41) {
                                                            tmp42 = cResult[59];
                                                          }
                                                          const result1 = overshoot / glyphFontSize;
                                                          if (cResult[60] === animationProgress) {
                                                            if (cResult[61] === glyphColor) {
                                                              if (cResult[62] === glyphCount) {
                                                                if (cResult[63] === glyphFontSize) {
                                                                  if (cResult[64] === pass.band) {
                                                                    if (cResult[65] === styles.glyphLayer) {
                                                                      let tmp44;
                                                                      if (cResult[66] === result1) {
                                                                        tmp44 = cResult[67];
                                                                      }
                                                                      if (cResult[68] === tmp42) {
                                                                        let tmp48;
                                                                        if (cResult[69] === tmp44) {
                                                                          tmp48 = cResult[70];
                                                                        }
                                                                        if (cResult[71] === tmp39) {
                                                                          let tmp52;
                                                                          if (cResult[72] === tmp48) {
                                                                            tmp52 = cResult[73];
                                                                          }
                                                                          if (cResult[74] === tmp37) {
                                                                            let tmp56;
                                                                            if (cResult[75] === tmp52) {
                                                                              tmp56 = cResult[76];
                                                                            }
                                                                            if (cResult[77] === tmp32) {
                                                                              if (cResult[78] === tmp56) {
                                                                                if (cResult[79] === tmp27) {
                                                                                  let tmp60;
                                                                                  if (cResult[80] === tmp28) {
                                                                                    tmp60 = cResult[81];
                                                                                  }
                                                                                  return tmp60;
                                                                                }
                                                                              }
                                                                            }
                                                                            const obj6 = { style: tmp27, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items };
                                                                            items = [tmp28, tmp32, tmp56];
                                                                            const tmp63 = authStore(ReanimatedRexportDefault.View, obj6);
                                                                            cResult[77] = tmp32;
                                                                            cResult[78] = tmp56;
                                                                            cResult[79] = tmp27;
                                                                            cResult[80] = tmp28;
                                                                            cResult[81] = tmp63;
                                                                            tmp60 = tmp63;
                                                                          }
                                                                          const obj7 = { style: tmp37, children: tmp52 };
                                                                          const tmp59 = React4(ReanimatedRexportDefault.View, obj7);
                                                                          cResult[74] = tmp37;
                                                                          cResult[75] = tmp52;
                                                                          cResult[76] = tmp59;
                                                                          tmp56 = tmp59;
                                                                        }
                                                                        const obj8 = { style: tmp39, children: tmp48 };
                                                                        const tmp55 = React4(ReanimatedRexportDefault.View, obj8);
                                                                        cResult[71] = tmp39;
                                                                        cResult[72] = tmp48;
                                                                        cResult[73] = tmp55;
                                                                        tmp52 = tmp55;
                                                                      }
                                                                      const obj9 = { style: tmp42, children: tmp44 };
                                                                      const tmp51 = React4(ReanimatedRexportDefault.View, obj9);
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
                                                          const obj10 = { animationProgress, slotCount: glyphCount, overshootInSlots: result1, glyphChoices: pass.band, fontSize: glyphFontSize, color: glyphColor, style: styles.glyphLayer };
                                                          const tmp47 = React4(closure_21, obj10);
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
                                const obj11 = { text: pass.slotB, shiftedText: tmp24, variant, color, animationWidth, clippingWindowWidth, animatedStyles: tmp9Result, styles };
                                const tmp35 = React4(closure_16, obj11);
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
                  const obj12 = { text: pass.slotA, shiftedText: tmp22, variant, color, animationWidth, clippingWindowWidth, animatedStyles: tmp10, styles };
                  const tmp31 = React4(closure_16, obj12);
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
}) : ((pass) => {
  let View3;
  let View4;
  let animationProgress;
  let animationWidth;
  let clippingWindowWidth;
  let color;
  let crossFadeOpacity;
  let glyphColor;
  let glyphCount;
  let glyphFontSize;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj10;
  let obj11;
  let obj9;
  let overshoot;
  let styles;
  let variant;
  pass = pass.pass;
  ({ animationProgress, glyphCount, glyphFontSize, variant, color, styles, animationWidth, clippingWindowWidth, overshoot } = pass);
  let obj = { animationWidth, clippingWindowWidth, overshoot };
  const obj2 = { animationProgress, slot: "A" };
  ({ crossFadeOpacity, glyphColor } = pass);
  const merged = Object.assign(obj);
  const obj3 = { animationProgress, slot: "B" };
  const tmp2 = closure_34(obj2);
  const merged1 = Object.assign(obj);
  const obj4 = { animationProgress, crossFadeOpacity };
  const tmp4 = closure_34(obj3);
  const merged2 = Object.assign(obj);
  const tmp6 = closure_45(obj4);
  const items = [pass.slotA];
  const items1 = [pass.slotB];
  const memo = react.useMemo(() => {
    const obj = waveTransition2;
    return obj.shiftedLineFor(pass.slotA);
  }, items);
  const memo1 = react.useMemo(() => {
    const obj = waveTransition2;
    return obj.shiftedLineFor(pass.slotB);
  }, items1);
  const obj5 = { style: items2, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items3 };
  items2 = [styles.layer, { width: animationWidth }, tmp6.crossFade];
  const obj6 = { text: pass.slotA, shiftedText: memo, variant, color, animationWidth, clippingWindowWidth, animatedStyles: tmp2, styles };
  const View = ReanimatedRexportDefault.View;
  items3 = [closure_9(closure_16, obj6), , ];
  const obj7 = { text: pass.slotB, shiftedText: memo1, variant, color, animationWidth, clippingWindowWidth, animatedStyles: tmp4, styles };
  items3[1] = closure_9(closure_16, obj7);
  const obj8 = { style: items4, children: closure_9(View3, obj9) };
  items4 = [styles.window, { width: clippingWindowWidth }, tmp6.outerWindow];
  const View2 = ReanimatedRexportDefault.View;
  obj9 = { style: items5, children: closure_9(View4, obj10) };
  items5 = [styles.window, { width: clippingWindowWidth }, tmp6.innerWindow];
  View3 = ReanimatedRexportDefault.View;
  obj10 = { style: items6, children: closure_9(closure_21, obj11) };
  items6 = [styles.layer, { width: glyphCount * glyphFontSize }, tmp6.text];
  obj11 = { animationProgress, slotCount: glyphCount, overshootInSlots: overshoot / glyphFontSize, glyphChoices: pass.band, fontSize: glyphFontSize, color: glyphColor, style: styles.glyphLayer };
  View4 = ReanimatedRexportDefault.View;
  items3[2] = closure_9(View2, obj8);
  return closure_10(View, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let animatedStyles;
  let animationWidth;
  let clippingWindowWidth;
  let color;
  let items;
  let shiftedText;
  let styles;
  let text;
  let tmp4;
  let variant;
  const obj = react2;
  const cResult = obj.c(56);
  ({ text, shiftedText, variant, color, animationWidth, clippingWindowWidth, animatedStyles, styles } = arg0);
  if (cResult[0] !== clippingWindowWidth) {
    const obj2 = { width: clippingWindowWidth };
    cResult[0] = clippingWindowWidth;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === animatedStyles.plainWindow) {
    if (cResult[3] === styles.window) {
      let tmp5;
      let tmp6;
      if (cResult[4] === tmp4) {
        tmp5 = cResult[5];
      }
      if (cResult[6] !== animationWidth) {
        const obj3 = { width: animationWidth };
        cResult[6] = animationWidth;
        cResult[7] = obj3;
        tmp6 = obj3;
      } else {
        tmp6 = cResult[7];
      }
      if (cResult[8] === animatedStyles.plainText) {
        if (cResult[9] === styles.layer) {
          let tmp7;
          if (cResult[10] === tmp6) {
            tmp7 = cResult[11];
          }
          if (cResult[12] === color) {
            if (cResult[13] === text) {
              let tmp8;
              if (cResult[14] === variant) {
                tmp8 = cResult[15];
              }
              if (cResult[16] === tmp7) {
                let tmp11;
                if (cResult[17] === tmp8) {
                  tmp11 = cResult[18];
                }
                if (cResult[19] === tmp5) {
                  let tmp15;
                  let tmp19;
                  if (cResult[20] === tmp11) {
                    tmp15 = cResult[21];
                  }
                  if (cResult[22] !== clippingWindowWidth) {
                    const obj4 = { width: clippingWindowWidth };
                    cResult[22] = clippingWindowWidth;
                    cResult[23] = obj4;
                    tmp19 = obj4;
                  } else {
                    tmp19 = cResult[23];
                  }
                  if (cResult[24] === animatedStyles.shiftedOuterWindow) {
                    if (cResult[25] === styles.window) {
                      let tmp20;
                      let tmp21;
                      if (cResult[26] === tmp19) {
                        tmp20 = cResult[27];
                      }
                      if (cResult[28] !== clippingWindowWidth) {
                        const obj5 = { width: clippingWindowWidth };
                        cResult[28] = clippingWindowWidth;
                        cResult[29] = obj5;
                        tmp21 = obj5;
                      } else {
                        tmp21 = cResult[29];
                      }
                      if (cResult[30] === animatedStyles.shiftedInnerWindow) {
                        if (cResult[31] === styles.window) {
                          let tmp22;
                          let tmp23;
                          if (cResult[32] === tmp21) {
                            tmp22 = cResult[33];
                          }
                          if (cResult[34] !== animationWidth) {
                            const obj6 = { width: animationWidth };
                            cResult[34] = animationWidth;
                            cResult[35] = obj6;
                            tmp23 = obj6;
                          } else {
                            tmp23 = cResult[35];
                          }
                          if (cResult[36] === animatedStyles.shiftedText) {
                            if (cResult[37] === styles.layer) {
                              let tmp24;
                              if (cResult[38] === tmp23) {
                                tmp24 = cResult[39];
                              }
                              if (cResult[40] === color) {
                                if (cResult[41] === shiftedText) {
                                  let tmp25;
                                  if (cResult[42] === variant) {
                                    tmp25 = cResult[43];
                                  }
                                  if (cResult[44] === tmp24) {
                                    let tmp28;
                                    if (cResult[45] === tmp25) {
                                      tmp28 = cResult[46];
                                    }
                                    if (cResult[47] === tmp22) {
                                      let tmp32;
                                      if (cResult[48] === tmp28) {
                                        tmp32 = cResult[49];
                                      }
                                      if (cResult[50] === tmp32) {
                                        let tmp36;
                                        if (cResult[51] === tmp20) {
                                          tmp36 = cResult[52];
                                        }
                                        if (cResult[53] === tmp36) {
                                          let tmp40;
                                          if (cResult[54] === tmp15) {
                                            tmp40 = cResult[55];
                                          }
                                          return tmp40;
                                        }
                                        const obj7 = { children: items };
                                        items = [tmp15, tmp36];
                                        const tmp43 = authStore(unpackModuleId, obj7);
                                        cResult[53] = tmp36;
                                        cResult[54] = tmp15;
                                        cResult[55] = tmp43;
                                        tmp40 = tmp43;
                                      }
                                      const obj8 = { style: tmp20, children: tmp32 };
                                      const tmp39 = React4(ReanimatedRexportDefault.View, obj8);
                                      cResult[50] = tmp32;
                                      cResult[51] = tmp20;
                                      cResult[52] = tmp39;
                                      tmp36 = tmp39;
                                    }
                                    const obj9 = { style: tmp22, children: tmp28 };
                                    const tmp35 = React4(ReanimatedRexportDefault.View, obj9);
                                    cResult[47] = tmp22;
                                    cResult[48] = tmp28;
                                    cResult[49] = tmp35;
                                    tmp32 = tmp35;
                                  }
                                  const obj10 = { style: tmp24, children: tmp25 };
                                  const tmp31 = React4(ReanimatedRexportDefault.View, obj10);
                                  cResult[44] = tmp24;
                                  cResult[45] = tmp25;
                                  cResult[46] = tmp31;
                                  tmp28 = tmp31;
                                }
                              }
                              const obj11 = { variant, color, lineClamp: 1, ellipsizeMode: "clip", children: shiftedText };
                              const tmp27 = React4(Text_Text.Text, obj11);
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
                const tmp18 = React4(ReanimatedRexportDefault.View, obj12);
                cResult[19] = tmp5;
                cResult[20] = tmp11;
                cResult[21] = tmp18;
                tmp15 = tmp18;
              }
              const obj13 = { style: tmp7, children: tmp8 };
              const tmp14 = React4(ReanimatedRexportDefault.View, obj13);
              cResult[16] = tmp7;
              cResult[17] = tmp8;
              cResult[18] = tmp14;
              tmp11 = tmp14;
            }
          }
          const obj14 = { variant, color, lineClamp: 1, ellipsizeMode: "clip", children: text };
          const tmp10 = React4(Text_Text.Text, obj14);
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
}) : ((arg0) => {
  let View2;
  let View4;
  let View5;
  let animatedStyles;
  let animationWidth;
  let clippingWindowWidth;
  let color;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj3;
  let obj5;
  let obj6;
  let shiftedText;
  let styles;
  let text;
  let variant;
  ({ variant, color, animationWidth, clippingWindowWidth, animatedStyles, styles } = arg0);
  const obj = { children: items2 };
  ({ text, shiftedText } = arg0);
  const obj2 = { style: items, children: React4(View2, obj3) };
  items = [styles.window, { width: clippingWindowWidth }, animatedStyles.plainWindow];
  const View = ReanimatedRexportDefault.View;
  obj3 = { style: items1, children: React4(Text_Text.Text, { variant, color, lineClamp: 1, ellipsizeMode: "clip", children: text }) };
  items1 = [styles.layer, { width: animationWidth }, animatedStyles.plainText];
  View2 = ReanimatedRexportDefault.View;
  items2 = [React4(View, obj2), ];
  const obj4 = { style: items3, children: React4(View4, obj5) };
  items3 = [styles.window, { width: clippingWindowWidth }, animatedStyles.shiftedOuterWindow];
  const View3 = ReanimatedRexportDefault.View;
  obj5 = { style: items4, children: React4(View5, obj6) };
  items4 = [styles.window, { width: clippingWindowWidth }, animatedStyles.shiftedInnerWindow];
  View4 = ReanimatedRexportDefault.View;
  obj6 = { style: items5, children: React4(Text_Text.Text, { variant, color, lineClamp: 1, ellipsizeMode: "clip", children: shiftedText }) };
  items5 = [styles.layer, { width: animationWidth }, animatedStyles.shiftedText];
  View5 = ReanimatedRexportDefault.View;
  items2[1] = React4(View3, obj4);
  return authStore(unpackModuleId, obj);
});
const __initData = { code: "function AIShimmerNativeTsx1(){const{animationProgress,BAND_UPDATES_PER_PASS,bandGlyphsAt,slotCount,glyphChoices,overshootInSlots}=this.__closure;const totalProgress=animationProgress.get();const passProgress=totalProgress-Math.floor(totalProgress);const updateStep=Math.floor(passProgress*BAND_UPDATES_PER_PASS)/BAND_UPDATES_PER_PASS;return bandGlyphsAt(updateStep,slotCount,glyphChoices,overshootInSlots);}" };
const __initData2 = { code: "function AIShimmerNativeTsx2(next,previous){const{runOnJS,setGlyphs}=this.__closure;if(next===previous){return;}runOnJS(setGlyphs)(next);}" };
const __initData3 = { code: "function AIShimmerNativeTsx3(){const{animationProgress,BAND_UPDATES_PER_PASS,bandGlyphsAt,slotCount,glyphChoices,overshootInSlots}=this.__closure;const totalProgress=animationProgress.get();const passProgress=totalProgress-Math.floor(totalProgress);const updateStep=Math.floor(passProgress*BAND_UPDATES_PER_PASS)/BAND_UPDATES_PER_PASS;return bandGlyphsAt(updateStep,slotCount,glyphChoices,overshootInSlots);}" };
const __initData4 = { code: "function AIShimmerNativeTsx4(next,previous){const{runOnJS,setGlyphs}=this.__closure;if(next===previous)return;runOnJS(setGlyphs)(next);}" };
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = memo2(ReactCompilerGating.isReactCompilerEnabled() ? ((animationProgress) => {
  let closure_4;
  let color;
  let fontSize;
  let overshootInSlots;
  let style;
  let tmp5;
  let tmp6;
  let obj = animationProgress(overshootInSlots[7]);
  const cResult = obj.c(5);
  const tmp = animationProgress;
  animationProgress = animationProgress.animationProgress;
  const slotCount = animationProgress.slotCount;
  const tmp2 = overshootInSlots;
  overshootInSlots = animationProgress.overshootInSlots;
  const glyphChoices = animationProgress.glyphChoices;
  ({ fontSize, color, style } = animationProgress);
  [tmp5, tmp6] = _slicedToArray(react.useState(glyphChoices), 2);
  const tmp4 = _slicedToArray(react.useState(glyphChoices), 2);
  _slicedToArray = tmp6;
  const fn = function l() {
    const value = animationProgress.get();
    const result = Math.floor((value - Math.floor(value)) * c12) / c12;
    const obj = waveTransition2;
    return obj.bandGlyphsAt(result, slotCount, glyphChoices, overshootInSlots);
  };
  const useAnimatedReaction = animationProgress(overshootInSlots[12]).useAnimatedReaction;
  const tmp7 = animationProgress(overshootInSlots[12]);
  fn.__closure = { animationProgress, BAND_UPDATES_PER_PASS, bandGlyphsAt: animationProgress(overshootInSlots[11]).bandGlyphsAt, slotCount, glyphChoices, overshootInSlots };
  fn.__workletHash = 7805477121955;
  fn.__initData = __initData;
  const fn2 = function o(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(_slicedToArray)(arg0);
    }
  };
  ({ animationProgress, BAND_UPDATES_PER_PASS, bandGlyphsAt: animationProgress(overshootInSlots[11]).bandGlyphsAt, slotCount, glyphChoices, overshootInSlots });
  fn2.__closure = { runOnJS: animationProgress(overshootInSlots[12]).runOnJS, setGlyphs: tmp6 };
  fn2.__workletHash = 1974315463271;
  fn2.__initData = __initData2;
  ({ runOnJS: animationProgress(overshootInSlots[12]).runOnJS, setGlyphs: tmp6 });
  const animatedReaction = useAnimatedReaction(fn, fn2);
  if (cResult[0] === color) {
    if (cResult[1] === fontSize) {
      if (cResult[2] === tmp5) {
        let tmp9;
        if (cResult[3] === style) {
          tmp9 = cResult[4];
        }
        return tmp9;
      }
    }
  }
  const tmp10 = closure_9(tmp(tmp2[15]).AIGlyphText, { size: fontSize, color, allowFontScaling: false, numberOfLines: 1, ellipsizeMode: "clip", style, children: tmp5 });
  cResult[0] = color;
  cResult[1] = fontSize;
  cResult[2] = tmp5;
  cResult[3] = style;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : ((animationProgress) => {
  let closure_4;
  let color;
  let fontSize;
  let style;
  animationProgress = animationProgress.animationProgress;
  const slotCount = animationProgress.slotCount;
  const overshootInSlots = animationProgress.overshootInSlots;
  const glyphChoices = animationProgress.glyphChoices;
  _slicedToArray = undefined;
  ({ fontSize, color, style } = animationProgress);
  const tmp = _slicedToArray(react.useState(glyphChoices), 2);
  _slicedToArray = tmp3;
  const children = tmp[0];
  const fn = function f() {
    const value = animationProgress.get();
    const result = Math.floor((value - Math.floor(value)) * c12) / c12;
    const obj = waveTransition2;
    return obj.bandGlyphsAt(result, slotCount, glyphChoices, overshootInSlots);
  };
  const tmp4 = animationProgress(overshootInSlots[12]);
  let obj = { animationProgress, BAND_UPDATES_PER_PASS, bandGlyphsAt: animationProgress(overshootInSlots[11]).bandGlyphsAt, slotCount, glyphChoices, overshootInSlots };
  const useAnimatedReaction = tmp4.useAnimatedReaction;
  fn.__closure = obj;
  fn.__workletHash = 4090385139937;
  fn.__initData = __initData3;
  class S {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(closure_4)(arg0);
      }
    }
  }
  S.__closure = { runOnJS: animationProgress(overshootInSlots[12]).runOnJS, setGlyphs: tmp[1] };
  S.__workletHash = 8422043105991;
  S.__initData = __initData4;
  ({ runOnJS: animationProgress(overshootInSlots[12]).runOnJS, setGlyphs: tmp[1] });
  const animatedReaction = useAnimatedReaction(fn, S);
  return closure_9(animationProgress(overshootInSlots[15]).AIGlyphText, { size, color, allowFontScaling: false, numberOfLines: 1, ellipsizeMode: "clip", style, children });
}));
const __initData5 = { code: "function AIShimmerNativeTsx5(){const{animationProgress,bandEdgesAt,animationWidth,overshoot,incomingSlotForPass,slot}=this.__closure;const totalProgress=animationProgress.get();const passIndex=Math.floor(totalProgress);const passProgress=totalProgress-passIndex;return{...bandEdgesAt(passProgress,animationWidth,overshoot),isIncoming:incomingSlotForPass(passIndex)===slot};}" };
const __initData6 = { code: "function AIShimmerNativeTsx6(){const{slotState,clippingWindowWidth}=this.__closure;const{incomingTextEnd:incomingTextEnd,outgoingTextStart:outgoingTextStart,isIncoming:isIncoming}=slotState.get();return{transform:[{translateX:isIncoming?incomingTextEnd-clippingWindowWidth:outgoingTextStart}]};}" };
const __initData7 = { code: "function AIShimmerNativeTsx7(){const{slotState,clippingWindowWidth}=this.__closure;const{incomingTextEnd:incomingTextEnd_0,outgoingTextStart:outgoingTextStart_0,isIncoming:isIncoming_0}=slotState.get();return{transform:[{translateX:isIncoming_0?clippingWindowWidth-incomingTextEnd_0:-outgoingTextStart_0}]};}" };
const __initData8 = { code: "function AIShimmerNativeTsx8(){const{slotState,SHIFTED_OPACITY}=this.__closure;const{bandStart:bandStart,bandEnd:bandEnd,isIncoming:isIncoming_1}=slotState.get();return{opacity:SHIFTED_OPACITY,transform:[{translateX:isIncoming_1?bandStart:bandEnd}]};}" };
const __initData9 = { code: "function AIShimmerNativeTsx9(){const{slotState,clippingWindowWidth}=this.__closure;const{incomingTextEnd:incomingTextEnd_1,bandStart:bandStart_0,bandEnd:bandEnd_0,outgoingTextStart:outgoingTextStart_1,isIncoming:isIncoming_2}=slotState.get();const shiftedWidth=isIncoming_2?incomingTextEnd_1-bandStart_0:outgoingTextStart_1-bandEnd_0;return{transform:[{translateX:shiftedWidth-clippingWindowWidth}]};}" };
const __initData10 = { code: "function AIShimmerNativeTsx10(){const{slotState,clippingWindowWidth}=this.__closure;const{incomingTextEnd:incomingTextEnd_2,outgoingTextStart:outgoingTextStart_2,isIncoming:isIncoming_3}=slotState.get();return{transform:[{translateX:clippingWindowWidth-(isIncoming_3?incomingTextEnd_2:outgoingTextStart_2)}]};}" };
const __initData11 = { code: "function AIShimmerNativeTsx11(){const{animationProgress,bandEdgesAt,animationWidth,overshoot,incomingSlotForPass,slot}=this.__closure;const totalProgress=animationProgress.get();const passIndex=Math.floor(totalProgress);const passProgress=totalProgress-passIndex;return{...bandEdgesAt(passProgress,animationWidth,overshoot),isIncoming:incomingSlotForPass(passIndex)===slot};}" };
const __initData12 = { code: "function AIShimmerNativeTsx12(){const{slotState,clippingWindowWidth}=this.__closure;const{incomingTextEnd:incomingTextEnd,outgoingTextStart:outgoingTextStart,isIncoming:isIncoming}=slotState.get();return{transform:[{translateX:isIncoming?incomingTextEnd-clippingWindowWidth:outgoingTextStart}]};}" };
const __initData13 = { code: "function AIShimmerNativeTsx13(){const{slotState,clippingWindowWidth}=this.__closure;const{incomingTextEnd:incomingTextEnd_0,outgoingTextStart:outgoingTextStart_0,isIncoming:isIncoming_0}=slotState.get();return{transform:[{translateX:isIncoming_0?clippingWindowWidth-incomingTextEnd_0:-outgoingTextStart_0}]};}" };
const __initData14 = { code: "function AIShimmerNativeTsx14(){const{slotState,SHIFTED_OPACITY}=this.__closure;const{bandStart:bandStart,bandEnd:bandEnd,isIncoming:isIncoming_1}=slotState.get();return{opacity:SHIFTED_OPACITY,transform:[{translateX:isIncoming_1?bandStart:bandEnd}]};}" };
const __initData15 = { code: "function AIShimmerNativeTsx15(){const{slotState,clippingWindowWidth}=this.__closure;const{incomingTextEnd:incomingTextEnd_1,bandStart:bandStart_0,bandEnd:bandEnd_0,outgoingTextStart:outgoingTextStart_1,isIncoming:isIncoming_2}=slotState.get();const shiftedWidth=isIncoming_2?incomingTextEnd_1-bandStart_0:outgoingTextStart_1-bandEnd_0;return{transform:[{translateX:shiftedWidth-clippingWindowWidth}]};}" };
const __initData16 = { code: "function AIShimmerNativeTsx16(){const{slotState,clippingWindowWidth}=this.__closure;const{incomingTextEnd:incomingTextEnd_2,outgoingTextStart:outgoingTextStart_2,isIncoming:isIncoming_3}=slotState.get();return{transform:[{translateX:clippingWindowWidth-(isIncoming_3?incomingTextEnd_2:outgoingTextStart_2)}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_34 = ReactCompilerGating.isReactCompilerEnabled() ? ((animationProgress) => {
  let animationWidth;
  let obj = animationProgress(animationWidth[7]);
  const cResult = obj.c(6);
  animationProgress = animationProgress.animationProgress;
  const slot = animationProgress.slot;
  animationWidth = animationProgress.animationWidth;
  const clippingWindowWidth = animationProgress.clippingWindowWidth;
  const overshoot = animationProgress.overshoot;
  let obj2 = animationProgress(animationWidth[12]);
  const fn = function n() {
    let obj3;
    const value = animationProgress.get();
    const rounded = Math.floor(value);
    const obj = { isIncoming: obj3.incomingSlotForPass(rounded) === slot };
    const obj2 = waveTransition2;
    const merged = Object.assign(obj2.bandEdgesAt(value - rounded, animationWidth, overshoot));
    obj3 = createWaveTransition2;
    return obj;
  };
  let obj3 = { animationProgress, bandEdgesAt: animationProgress(animationWidth[11]).bandEdgesAt, animationWidth, overshoot, incomingSlotForPass: animationProgress(animationWidth[13]).incomingSlotForPass, slot };
  fn.__closure = obj3;
  fn.__workletHash = 13646328099482;
  fn.__initData = __initData5;
  const derivedValue = obj2.useDerivedValue(fn);
  const fn2 = function o() {
    let items;
    const value = derivedValue.get();
    let outgoingTextStart = value.outgoingTextStart;
    if (value.isIncoming) {
      outgoingTextStart = tmp2 - clippingWindowWidth;
    }
    const obj = { transform: items };
    items = [{ translateX: outgoingTextStart }];
    return obj;
  };
  fn2.__closure = { slotState: derivedValue, clippingWindowWidth };
  fn2.__workletHash = 12725373372495;
  fn2.__initData = __initData6;
  const obj4 = animationProgress(animationWidth[12]);
  const animatedStyle = obj4.useAnimatedStyle(fn2);
  const fn3 = function s() {
    let diff;
    let items;
    const value = derivedValue.get();
    if (value.isIncoming) {
      diff = clippingWindowWidth - tmp2;
    } else {
      diff = -tmp3;
    }
    const obj = { transform: items };
    items = [{ translateX: diff }];
    return obj;
  };
  fn3.__closure = { slotState: derivedValue, clippingWindowWidth };
  fn3.__workletHash = 1233030944035;
  fn3.__initData = __initData7;
  const obj5 = animationProgress(animationWidth[12]);
  const animatedStyle1 = obj5.useAnimatedStyle(fn3);
  const fn4 = function l() {
    let bandStart;
    let isIncoming;
    let items;
    const value = derivedValue.get();
    let bandEnd = value.bandEnd;
    ({ bandStart, isIncoming } = value);
    const obj = { opacity: waveTransition2.SHIFTED_OPACITY, transform: items };
    if (isIncoming) {
      bandEnd = bandStart;
    }
    items = [{ translateX: bandEnd }];
    return obj;
  };
  const obj6 = animationProgress(animationWidth[12]);
  fn4.__closure = { slotState: derivedValue, SHIFTED_OPACITY: animationProgress(animationWidth[11]).SHIFTED_OPACITY };
  fn4.__workletHash = 14240837258339;
  fn4.__initData = __initData8;
  ({ slotState: derivedValue, SHIFTED_OPACITY: animationProgress(animationWidth[11]).SHIFTED_OPACITY });
  const animatedStyle2 = obj6.useAnimatedStyle(fn4);
  const fn5 = function c() {
    let items;
    const value = derivedValue.get();
    const obj = { transform: items };
    items = [];
    const obj2 = { translateX: (value.isIncoming ? value.incomingTextEnd - value.bandStart : value.outgoingTextStart - value.bandEnd) - clippingWindowWidth };
    items[0] = obj2;
    return obj;
  };
  fn5.__closure = { slotState: derivedValue, clippingWindowWidth };
  fn5.__workletHash = 5330943394540;
  fn5.__initData = __initData9;
  const obj8 = animationProgress(animationWidth[12]);
  const animatedStyle3 = obj8.useAnimatedStyle(fn5);
  const fn6 = function h() {
    let items;
    const value = derivedValue.get();
    let incomingTextEnd = value.outgoingTextStart;
    if (value.isIncoming) {
      incomingTextEnd = value.incomingTextEnd;
    }
    const obj = { transform: items };
    items = [];
    const obj2 = { translateX: clippingWindowWidth - incomingTextEnd };
    items[0] = obj2;
    return obj;
  };
  fn6.__closure = { slotState: derivedValue, clippingWindowWidth };
  fn6.__workletHash = 737122197817;
  fn6.__initData = __initData10;
  const obj9 = animationProgress(animationWidth[12]);
  const animatedStyle4 = obj9.useAnimatedStyle(fn6);
  if (cResult[0] === animatedStyle1) {
    if (cResult[1] === animatedStyle) {
      if (cResult[2] === animatedStyle3) {
        if (cResult[3] === animatedStyle2) {
          let tmp8;
          if (cResult[4] === animatedStyle4) {
            tmp8 = cResult[5];
          }
          return tmp8;
        }
      }
    }
  }
  const obj10 = { plainWindow: animatedStyle, plainText: animatedStyle1, shiftedOuterWindow: animatedStyle2, shiftedInnerWindow: animatedStyle3, shiftedText: animatedStyle4 };
  cResult[0] = animatedStyle1;
  cResult[1] = animatedStyle;
  cResult[2] = animatedStyle3;
  cResult[3] = animatedStyle2;
  cResult[4] = animatedStyle4;
  cResult[5] = obj10;
  tmp8 = obj10;
}) : ((animationProgress) => {
  let fn2;
  let fn3;
  let fn4;
  let fn5;
  let obj4;
  let obj5;
  let obj6;
  let obj8;
  let obj9;
  animationProgress = animationProgress.animationProgress;
  const slot = animationProgress.slot;
  const animationWidth = animationProgress.animationWidth;
  const clippingWindowWidth = animationProgress.clippingWindowWidth;
  const overshoot = animationProgress.overshoot;
  let obj = animationProgress(animationWidth[12]);
  const fn = function c() {
    let obj3;
    const value = animationProgress.get();
    const rounded = Math.floor(value);
    const obj = { isIncoming: obj3.incomingSlotForPass(rounded) === slot };
    const obj2 = waveTransition2;
    const merged = Object.assign(obj2.bandEdgesAt(value - rounded, animationWidth, overshoot));
    obj3 = createWaveTransition2;
    return obj;
  };
  let obj2 = { animationProgress, bandEdgesAt: animationProgress(animationWidth[11]).bandEdgesAt, animationWidth, overshoot, incomingSlotForPass: animationProgress(animationWidth[13]).incomingSlotForPass, slot };
  fn.__closure = obj2;
  fn.__workletHash = 14646211224559;
  fn.__initData = __initData11;
  const derivedValue = obj.useDerivedValue(fn);
  let obj3 = { plainWindow: obj4.useAnimatedStyle(fn2), plainText: obj5.useAnimatedStyle(fn3), shiftedOuterWindow: obj6.useAnimatedStyle(fn4), shiftedInnerWindow: obj8.useAnimatedStyle(fn5), shiftedText: obj9.useAnimatedStyle(S) };
  fn2 = function h() {
    let items;
    const value = derivedValue.get();
    let outgoingTextStart = value.outgoingTextStart;
    if (value.isIncoming) {
      outgoingTextStart = tmp2 - clippingWindowWidth;
    }
    const obj = { transform: items };
    items = [{ translateX: outgoingTextStart }];
    return obj;
  };
  fn2.__closure = { slotState: derivedValue, clippingWindowWidth };
  fn2.__workletHash = 2119000174682;
  fn2.__initData = __initData12;
  fn3 = function u() {
    let diff;
    let items;
    const value = derivedValue.get();
    if (value.isIncoming) {
      diff = clippingWindowWidth - tmp2;
    } else {
      diff = -tmp3;
    }
    const obj = { transform: items };
    items = [{ translateX: diff }];
    return obj;
  };
  fn3.__closure = { slotState: derivedValue, clippingWindowWidth };
  fn3.__workletHash = 15525899343350;
  fn3.__initData = __initData13;
  obj4 = animationProgress(animationWidth[12]);
  fn4 = function _() {
    let bandStart;
    let isIncoming;
    let items;
    const value = derivedValue.get();
    let bandEnd = value.bandEnd;
    ({ bandStart, isIncoming } = value);
    const obj = { opacity: waveTransition2.SHIFTED_OPACITY, transform: items };
    if (isIncoming) {
      bandEnd = bandStart;
    }
    items = [{ translateX: bandEnd }];
    return obj;
  };
  obj5 = animationProgress(animationWidth[12]);
  obj6 = animationProgress(animationWidth[12]);
  fn4.__closure = { slotState: derivedValue, SHIFTED_OPACITY: animationProgress(animationWidth[11]).SHIFTED_OPACITY };
  fn4.__workletHash = 3649202647358;
  fn4.__initData = __initData14;
  ({ slotState: derivedValue, SHIFTED_OPACITY: animationProgress(animationWidth[11]).SHIFTED_OPACITY });
  fn5 = function p() {
    let items;
    const value = derivedValue.get();
    const obj = { transform: items };
    items = [];
    const obj2 = { translateX: (value.isIncoming ? value.incomingTextEnd - value.bandStart : value.outgoingTextStart - value.bandEnd) - clippingWindowWidth };
    items[0] = obj2;
    return obj;
  };
  fn5.__closure = { slotState: derivedValue, clippingWindowWidth };
  fn5.__workletHash = 15678502586321;
  fn5.__initData = __initData15;
  obj8 = animationProgress(animationWidth[12]);
  obj9 = animationProgress(animationWidth[12]);
  class S {
    constructor() {
      let items;
      const value = derivedValue.get();
      let incomingTextEnd = value.outgoingTextStart;
      if (value.isIncoming) {
        incomingTextEnd = value.incomingTextEnd;
      }
      const obj = { transform: items };
      items = [];
      const obj2 = { translateX: clippingWindowWidth - incomingTextEnd };
      items[0] = obj2;
      return obj;
    }
  }
  S.__closure = { slotState: derivedValue, clippingWindowWidth };
  S.__workletHash = 10676531803199;
  S.__initData = __initData16;
  return obj3;
});
const __initData17 = { code: "function AIShimmerNativeTsx17(){const{animationProgress,bandEdgesAt,animationWidth,overshoot,glyphLayerOpacityAt,easeTail}=this.__closure;const totalProgress=animationProgress.get();const passProgress=totalProgress-Math.floor(totalProgress);const{bandStart:bandStart,bandEnd:bandEnd}=bandEdgesAt(passProgress,animationWidth,overshoot);return{bandStart:bandStart,bandEnd:bandEnd,opacity:glyphLayerOpacityAt(easeTail(passProgress))};}" };
const __initData18 = { code: "function AIShimmerNativeTsx18(){const{crossFadeOpacity}=this.__closure;return{opacity:crossFadeOpacity.get()};}" };
const __initData19 = { code: "function AIShimmerNativeTsx19(){const{bandState}=this.__closure;const{bandStart:bandStart_0,opacity:opacity}=bandState.get();return{opacity:opacity,transform:[{translateX:bandStart_0}]};}" };
const __initData20 = { code: "function AIShimmerNativeTsx20(){const{bandState,clippingWindowWidth}=this.__closure;const{bandStart:bandStart_1,bandEnd:bandEnd_0}=bandState.get();return{transform:[{translateX:bandEnd_0-bandStart_1-clippingWindowWidth}]};}" };
const __initData21 = { code: "function AIShimmerNativeTsx21(){const{bandState,clippingWindowWidth}=this.__closure;const{bandEnd:bandEnd_1}=bandState.get();return{transform:[{translateX:clippingWindowWidth-bandEnd_1}]};}" };
const __initData22 = { code: "function AIShimmerNativeTsx22(){const{animationProgress,bandEdgesAt,animationWidth,overshoot,glyphLayerOpacityAt,easeTail}=this.__closure;const totalProgress=animationProgress.get();const passProgress=totalProgress-Math.floor(totalProgress);const{bandStart:bandStart,bandEnd:bandEnd}=bandEdgesAt(passProgress,animationWidth,overshoot);return{bandStart:bandStart,bandEnd:bandEnd,opacity:glyphLayerOpacityAt(easeTail(passProgress))};}" };
const __initData23 = { code: "function AIShimmerNativeTsx23(){const{crossFadeOpacity}=this.__closure;return{opacity:crossFadeOpacity.get()};}" };
const __initData24 = { code: "function AIShimmerNativeTsx24(){const{bandState}=this.__closure;const{bandStart:bandStart_0,opacity:opacity}=bandState.get();return{opacity:opacity,transform:[{translateX:bandStart_0}]};}" };
const __initData25 = { code: "function AIShimmerNativeTsx25(){const{bandState,clippingWindowWidth}=this.__closure;const{bandStart:bandStart_1,bandEnd:bandEnd_0}=bandState.get();return{transform:[{translateX:bandEnd_0-bandStart_1-clippingWindowWidth}]};}" };
const __initData26 = { code: "function AIShimmerNativeTsx26(){const{bandState,clippingWindowWidth}=this.__closure;const{bandEnd:bandEnd_1}=bandState.get();return{transform:[{translateX:clippingWindowWidth-bandEnd_1}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_45 = ReactCompilerGating.isReactCompilerEnabled() ? ((animationProgress) => {
  let animationWidth;
  let obj = animationProgress(animationWidth[7]);
  const cResult = obj.c(5);
  animationProgress = animationProgress.animationProgress;
  const crossFadeOpacity = animationProgress.crossFadeOpacity;
  animationWidth = animationProgress.animationWidth;
  const clippingWindowWidth = animationProgress.clippingWindowWidth;
  const overshoot = animationProgress.overshoot;
  let obj2 = animationProgress(animationWidth[12]);
  const fn = function n() {
    let glyphLayerOpacityAt;
    let obj3;
    const value = animationProgress.get();
    const diff = value - Math.floor(value);
    const obj = waveTransition2;
    const bandEdgesAtResult = obj.bandEdgesAt(diff, animationWidth, overshoot);
    const obj2 = { bandStart: bandEdgesAtResult.bandStart, bandEnd: bandEdgesAtResult.bandEnd, opacity: glyphLayerOpacityAt(obj3.easeTail(diff)) };
    glyphLayerOpacityAt = waveTransition2.glyphLayerOpacityAt;
    waveTransition2;
    obj3 = waveTransition2;
    return obj2;
  };
  let obj3 = { animationProgress, bandEdgesAt: animationProgress(animationWidth[11]).bandEdgesAt, animationWidth, overshoot, glyphLayerOpacityAt: animationProgress(animationWidth[11]).glyphLayerOpacityAt, easeTail: animationProgress(animationWidth[11]).easeTail };
  fn.__closure = obj3;
  fn.__workletHash = 3313129804635;
  fn.__initData = __initData17;
  const derivedValue = obj2.useDerivedValue(fn);
  const fn2 = function o() {
    const obj = { opacity: crossFadeOpacity.get() };
    return obj;
  };
  fn2.__closure = { crossFadeOpacity };
  fn2.__workletHash = 4111670252489;
  fn2.__initData = __initData18;
  const obj4 = animationProgress(animationWidth[12]);
  const animatedStyle = obj4.useAnimatedStyle(fn2);
  const fn3 = function s() {
    let items;
    const value = derivedValue.get();
    const obj = { opacity: value.opacity, transform: items };
    items = [];
    const obj2 = { translateX: value.bandStart };
    items[0] = obj2;
    return obj;
  };
  fn3.__closure = { bandState: derivedValue };
  fn3.__workletHash = 16687078196879;
  fn3.__initData = __initData19;
  const obj5 = animationProgress(animationWidth[12]);
  const animatedStyle1 = obj5.useAnimatedStyle(fn3);
  const fn4 = function l() {
    let items;
    const value = derivedValue.get();
    const obj = { transform: items };
    items = [];
    const obj2 = { translateX: value.bandEnd - value.bandStart - clippingWindowWidth };
    items[0] = obj2;
    return obj;
  };
  fn4.__closure = { bandState: derivedValue, clippingWindowWidth };
  fn4.__workletHash = 7837326385465;
  fn4.__initData = __initData20;
  const obj6 = animationProgress(animationWidth[12]);
  const animatedStyle2 = obj6.useAnimatedStyle(fn4);
  const fn5 = function c() {
    let items;
    const obj = { transform: items };
    items = [{ translateX: clippingWindowWidth - derivedValue.get().bandEnd }];
    ({ translateX: clippingWindowWidth - derivedValue.get().bandEnd });
    return obj;
  };
  fn5.__closure = { bandState: derivedValue, clippingWindowWidth };
  fn5.__workletHash = 5170598517994;
  fn5.__initData = __initData21;
  const obj7 = animationProgress(animationWidth[12]);
  const animatedStyle3 = obj7.useAnimatedStyle(fn5);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === animatedStyle2) {
      if (cResult[2] === animatedStyle1) {
        let tmp7;
        if (cResult[3] === animatedStyle3) {
          tmp7 = cResult[4];
        }
        return tmp7;
      }
    }
  }
  const obj8 = { crossFade: animatedStyle, outerWindow: animatedStyle1, innerWindow: animatedStyle2, text: animatedStyle3 };
  cResult[0] = animatedStyle;
  cResult[1] = animatedStyle2;
  cResult[2] = animatedStyle1;
  cResult[3] = animatedStyle3;
  cResult[4] = obj8;
  tmp7 = obj8;
}) : ((animationProgress) => {
  let fn2;
  let fn3;
  let fn4;
  let fn5;
  let obj4;
  let obj5;
  let obj6;
  let obj7;
  animationProgress = animationProgress.animationProgress;
  const crossFadeOpacity = animationProgress.crossFadeOpacity;
  const animationWidth = animationProgress.animationWidth;
  const clippingWindowWidth = animationProgress.clippingWindowWidth;
  const overshoot = animationProgress.overshoot;
  let obj = animationProgress(animationWidth[12]);
  const fn = function c() {
    let glyphLayerOpacityAt;
    let obj3;
    const value = animationProgress.get();
    const diff = value - Math.floor(value);
    const obj = waveTransition2;
    const bandEdgesAtResult = obj.bandEdgesAt(diff, animationWidth, overshoot);
    const obj2 = { bandStart: bandEdgesAtResult.bandStart, bandEnd: bandEdgesAtResult.bandEnd, opacity: glyphLayerOpacityAt(obj3.easeTail(diff)) };
    glyphLayerOpacityAt = waveTransition2.glyphLayerOpacityAt;
    waveTransition2;
    obj3 = waveTransition2;
    return obj2;
  };
  let obj2 = { animationProgress, bandEdgesAt: animationProgress(animationWidth[11]).bandEdgesAt, animationWidth, overshoot, glyphLayerOpacityAt: animationProgress(animationWidth[11]).glyphLayerOpacityAt, easeTail: animationProgress(animationWidth[11]).easeTail };
  fn.__closure = obj2;
  fn.__workletHash = 16926305543357;
  fn.__initData = __initData22;
  const derivedValue = obj.useDerivedValue(fn);
  let obj3 = { crossFade: obj4.useAnimatedStyle(fn2), outerWindow: obj5.useAnimatedStyle(fn3), innerWindow: obj6.useAnimatedStyle(fn4), text: obj7.useAnimatedStyle(fn5) };
  fn2 = function h() {
    const obj = { opacity: crossFadeOpacity.get() };
    return obj;
  };
  fn2.__closure = { crossFadeOpacity };
  fn2.__workletHash = 15181269062433;
  fn2.__initData = __initData23;
  fn3 = function u() {
    let items;
    const value = derivedValue.get();
    const obj = { opacity: value.opacity, transform: items };
    items = [];
    const obj2 = { translateX: value.bandStart };
    items[0] = obj2;
    return obj;
  };
  fn3.__closure = { bandState: derivedValue };
  fn3.__workletHash = 10080649154529;
  fn3.__initData = __initData24;
  obj4 = animationProgress(animationWidth[12]);
  fn4 = function _() {
    let items;
    const value = derivedValue.get();
    const obj = { transform: items };
    items = [];
    const obj2 = { translateX: value.bandEnd - value.bandStart - clippingWindowWidth };
    items[0] = obj2;
    return obj;
  };
  fn4.__closure = { bandState: derivedValue, clippingWindowWidth };
  fn4.__workletHash = 17147401722620;
  fn4.__initData = __initData25;
  obj5 = animationProgress(animationWidth[12]);
  fn5 = function p() {
    let items;
    const obj = { transform: items };
    items = [{ translateX: clippingWindowWidth - derivedValue.get().bandEnd }];
    ({ translateX: clippingWindowWidth - derivedValue.get().bandEnd });
    return obj;
  };
  fn5.__closure = { bandState: derivedValue, clippingWindowWidth };
  fn5.__workletHash = 6557338274221;
  fn5.__initData = __initData26;
  obj6 = animationProgress(animationWidth[12]);
  obj7 = animationProgress(animationWidth[12]);
  return obj3;
});
let result = size.fileFinishedImporting("design/visual-identities/ai/AIShimmer/AIShimmer.native.tsx");

export const AIShimmer = memoResult;
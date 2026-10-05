// === Module 14209: AILoader ===

// Module 14209 (AILoader)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import AIGlyphText from "AIGlyphText" /* 14211 */;
import react from "react" /* 19 */;
import AILoaderConstants from "AILoaderConstants" /* 14210 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, set;

let AI_LOADER_REST_FRACTION;
let AI_LOADER_STEP_FRACTION;
let c10;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let View = react_native.View;
({ AI_LOADER_CYCLE_MS: hasOwnProperty, AI_LOADER_GAP_EM: metroRequire, AI_LOADER_GLYPHS: metroImportDefault, AI_LOADER_REDUCED_MOTION_CYCLE_MS: metroImportAll, AI_LOADER_REST_FRACTION } = AILoaderConstants);
({ AI_LOADER_SLOT_COUNT: c10, AI_LOADER_SLOT_STAGGER_MS: unpackModuleId, AI_LOADER_STEP_FRACTION } = AILoaderConstants);
const AI_LOADER_TRACK_STEPS = AILoaderConstants.AI_LOADER_TRACK_STEPS;
const jsx = Fragment.jsx;
function trackStepAt(arg0) {
  if (arg0 < AI_LOADER_REST_FRACTION) {
    return AI_LOADER_TRACK_STEPS[0];
  } else {
    const _Math = Math;
    const _Math2 = Math;
    return AI_LOADER_TRACK_STEPS[Math.min(Math, Math.floor(Math, (arg0 - tmp) / AI_LOADER_STEP_FRACTION) + 1, AI_LOADER_TRACK_STEPS.length - 1)];
  }
}
trackStepAt.__closure = { AI_LOADER_REST_FRACTION, AI_LOADER_TRACK_STEPS, AI_LOADER_STEP_FRACTION };
trackStepAt.__workletHash = 2403964493846;
trackStepAt.__initData = { code: "function trackStepAt_AILoaderNativeTsx1(progress){const{AI_LOADER_REST_FRACTION,AI_LOADER_TRACK_STEPS,AI_LOADER_STEP_FRACTION}=this.__closure;if(progress<AI_LOADER_REST_FRACTION)return AI_LOADER_TRACK_STEPS[0];const step=Math.floor((progress-AI_LOADER_REST_FRACTION)/AI_LOADER_STEP_FRACTION)+1;return AI_LOADER_TRACK_STEPS[Math.min(step,AI_LOADER_TRACK_STEPS.length-1)];}" };
let closure_16 = createStyles.createStyles((width) => {
  const obj = { loader: obj2, slot: { width, height: width, overflow: "hidden" }, glyph: { height: width } };
  return obj;
});
const __initData = { code: "function AILoaderNativeTsx2(){const{trackStepAt,progress,size}=this.__closure;return{transform:[{translateY:-trackStepAt(progress.get())*size}]};}" };
const __initData2 = { code: "function AILoaderNativeTsx3(){const{trackStepAt,progress,size}=this.__closure;return{transform:[{translateY:-trackStepAt(progress.get())*size}]};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((index) => {
  let color;
  const tmp2 = color;
  let obj = index(color[6]);
  const cResult = obj.c(16);
  const tmp = index;
  index = index.index;
  size = index.size;
  color = index.color;
  const cycle = index.cycle;
  const stagger = index.stagger;
  const tmp4 = closure_16(size);
  const glyph = tmp4;
  let obj2 = index(color[7]);
  const sharedValue = obj2.useSharedValue(0);
  if (cResult[0] === cycle) {
    if (cResult[1] === index) {
      if (cResult[2] === sharedValue) {
        let tmp6;
        let tmp7;
        if (cResult[3] === stagger) {
          tmp6 = cResult[4];
          tmp7 = cResult[5];
        }
        const effect = cycle.useEffect(tmp6, tmp7);
        const tmpResult = tmp(tmp2[7]);
        class O {
          constructor() {
            let items;
            const value = sharedValue.get();
            if (typeof trackStepAt === "function") {
              let first;
              if (value < AI_LOADER_REST_FRACTION) {
                first = AI_LOADER_TRACK_STEPS[0];
              } else {
                const _Math = Math;
                const _Math2 = Math;
                first = AI_LOADER_TRACK_STEPS[Math.min(Math, Math.floor(Math, (value - tmp2) / AI_LOADER_STEP_FRACTION) + 1, AI_LOADER_TRACK_STEPS.length - 1)];
              }
              const obj = { transform: items };
              items = [{ translateY: -first * size }];
              return obj;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
        const obj3 = { trackStepAt, progress: sharedValue, size };
        O.__closure = obj3;
        O.__workletHash = 16632594382704;
        O.__initData = __initData;
        const animatedStyle = tmpResult.useAnimatedStyle(O);
        if (cResult[6] === color) {
          if (cResult[7] === size) {
            let tmp14;
            if (cResult[8] === tmp4.glyph) {
              tmp14 = cResult[9];
            }
            if (cResult[10] === tmp14) {
              let tmp17;
              if (cResult[11] === animatedStyle) {
                tmp17 = cResult[12];
              }
              if (cResult[13] === tmp4.slot) {
                let tmp22;
                if (cResult[14] === tmp17) {
                  tmp22 = cResult[15];
                }
                return tmp22;
              }
              class O {
                constructor() {
                  let items;
                  const value = sharedValue.get();
                  if (typeof trackStepAt === "function") {
                    let first;
                    if (value < AI_LOADER_REST_FRACTION) {
                      first = AI_LOADER_TRACK_STEPS[0];
                    } else {
                      const _Math = Math;
                      const _Math2 = Math;
                      first = AI_LOADER_TRACK_STEPS[Math.min(Math, Math.floor(Math, (value - tmp2) / AI_LOADER_STEP_FRACTION) + 1, AI_LOADER_TRACK_STEPS.length - 1)];
                    }
                    const obj = { transform: items };
                    items = [{ translateY: -first * size }];
                    return obj;
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              }
              tmp25[0] = tmp13;
              tmp25[1] = tmp17;
              const tmp26 = <stagger {...tmp25} />;
              cResult[13] = tmp4.slot;
              cResult[14] = tmp17;
              cResult[15] = tmp26;
              tmp22 = tmp26;
            }
            class O {
              constructor() {
                let items;
                const value = sharedValue.get();
                if (typeof trackStepAt === "function") {
                  let first;
                  if (value < AI_LOADER_REST_FRACTION) {
                    first = AI_LOADER_TRACK_STEPS[0];
                  } else {
                    const _Math = Math;
                    const _Math2 = Math;
                    first = AI_LOADER_TRACK_STEPS[Math.min(Math, Math.floor(Math, (value - tmp2) / AI_LOADER_STEP_FRACTION) + 1, AI_LOADER_TRACK_STEPS.length - 1)];
                  }
                  const obj = { transform: items };
                  items = [{ translateY: -first * size }];
                  return obj;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
            }
            tmp20[0] = animatedStyle;
            tmp20[1] = tmp14;
            const tmp21 = jsx(size(tmp2[7]).View, tmp20);
            cResult[10] = tmp14;
            cResult[11] = animatedStyle;
            cResult[12] = tmp21;
            tmp17 = tmp21;
          }
        }
        const mapped = closure_7.map((children) => jsx(AIGlyphText.AIGlyphText, { size, color, allowFontScaling: false, style: glyph.glyph, children }, children));
        cResult[6] = color;
        cResult[7] = size;
        cResult[8] = tmp4.glyph;
        cResult[9] = mapped;
        tmp14 = mapped;
      }
    }
  }
  const fn = function n() {
    const result = sharedValue.set(0);
    set = sharedValue.set;
    const withDelay = ReanimatedRexport.withDelay;
    const result1 = index * stagger;
    ReanimatedRexport;
    const withRepeat = ReanimatedRexport.withRepeat;
    ReanimatedRexport;
    let obj = timing;
    const obj2 = { duration: cycle, easing: ReanimatedRexport.Easing.linear };
    const result2 = set(withDelay(result1, withRepeat(obj.withTiming(1, obj2, "animate-always"), -1)));
    return () => {
      const obj = index(color[7]);
      return obj.cancelAnimation(sharedValue);
    };
  };
  let items = [cycle, index, sharedValue, stagger];
  cResult[0] = cycle;
  cResult[1] = index;
  cResult[2] = sharedValue;
  cResult[3] = stagger;
  cResult[4] = fn;
  cResult[5] = items;
  tmp7 = items;
  tmp6 = fn;
}) : ((index) => {
  let color;
  let cycle;
  index = index.index;
  size = index.size;
  ({ color: dependencyMap, cycle } = index);
  const stagger = index.stagger;
  const tmp = closure_16(size);
  const glyph = tmp;
  let obj = index(4612);
  const sharedValue = obj.useSharedValue(0);
  let items = [cycle, index, sharedValue, stagger];
  const effect = cycle.useEffect(() => {
    const result = sharedValue.set(0);
    set = sharedValue.set;
    const withDelay = ReanimatedRexport.withDelay;
    const result1 = index * stagger;
    ReanimatedRexport;
    const withRepeat = ReanimatedRexport.withRepeat;
    ReanimatedRexport;
    let obj = timing;
    const obj2 = { duration: cycle, easing: ReanimatedRexport.Easing.linear };
    const result2 = set(withDelay(result1, withRepeat(obj.withTiming(1, obj2, "animate-always"), -1)));
    return () => {
      const obj = index(dependencyMap[7]);
      return obj.cancelAnimation(sharedValue);
    };
  }, items);
  let obj2 = index(4612);
  class R {
    constructor() {
      let items;
      const value = sharedValue.get();
      if (typeof trackStepAt === "function") {
        let first;
        if (value < AI_LOADER_REST_FRACTION) {
          first = AI_LOADER_TRACK_STEPS[0];
        } else {
          const _Math = Math;
          const _Math2 = Math;
          first = AI_LOADER_TRACK_STEPS[Math.min(Math, Math.floor(Math, (value - tmp2) / AI_LOADER_STEP_FRACTION) + 1, AI_LOADER_TRACK_STEPS.length - 1)];
        }
        const obj = { transform: items };
        items = [{ translateY: -first * size }];
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  const obj3 = { trackStepAt, progress: sharedValue, size };
  R.__closure = obj3;
  R.__workletHash = 6102802507505;
  R.__initData = __initData2;
  const animatedStyle = obj2.useAnimatedStyle(R);
  ({ style: animatedStyle, children: closure_7.map((children) => jsx(AIGlyphText.AIGlyphText, { size, color: dependencyMap, allowFontScaling: false, style: glyph.glyph, children }, children)) });
  View = size(4612).View;
  return <stagger style={tmp.slot}>{null}</stagger>;
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityLabel;
  let color;
  let cycle;
  let num;
  let num2;
  let style;
  const obj = num(576);
  const cResult = obj.c(16);
  ({ size, color, accessibilityLabel, style } = arg0);
  const tmp = num;
  num = 16;
  if (undefined !== size) {
    num = size;
  }
  let str = "text-default";
  if (undefined !== color) {
    str = color;
  }
  const tmp4 = closure_16(num);
  const reducedMotion = num2.useContext(tmp(4589).AccessibilityPreferencesContext).reducedMotion;
  const tmp5 = reducedMotion.enabled ? closure_8 : closure_5;
  dependencyMap = tmp5;
  num2 = 0;
  if (!reducedMotion.enabled) {
    num2 = closure_11;
  }
  if (cResult[0] === style) {
    let tmp7;
    if (cResult[1] === tmp4.loader) {
      tmp7 = cResult[2];
    }
    let str3 = "no-hide-descendants";
    if (null != accessibilityLabel) {
      str3 = "yes";
    }
    if (cResult[3] === str) {
      if (cResult[4] === tmp5) {
        if (cResult[5] === num) {
          let tmp8;
          if (cResult[6] === num2) {
            tmp8 = cResult[7];
          }
          if (cResult[8] === accessibilityLabel) {
            if (cResult[9] === null != accessibilityLabel) {
              if (cResult[10] === tmp7) {
                if (cResult[11] === str2) {
                  if (cResult[12] === null == accessibilityLabel) {
                    if (cResult[13] === str3) {
                      let tmp13;
                      if (cResult[14] === tmp8) {
                        tmp13 = cResult[15];
                      }
                      return tmp13;
                    }
                  }
                }
              }
            }
          }
          const tmp16 = <View style={tmp7} accessible={null != accessibilityLabel} accessibilityRole={str2} accessibilityLabel={accessibilityLabel} accessibilityElementsHidden={null == accessibilityLabel} importantForAccessibility={str3}>{tmp8}</View>;
          cResult[8] = accessibilityLabel;
          cResult[9] = null != accessibilityLabel;
          cResult[10] = tmp7;
          cResult[11] = str2;
          cResult[12] = null == accessibilityLabel;
          cResult[13] = str3;
          cResult[14] = tmp8;
          cResult[15] = tmp16;
          tmp13 = tmp16;
        }
      }
    }
    const _Array = Array;
    const obj3 = { length: closure_10 };
    const arr = Array.from(obj3, (arg0, index) => <closure_19 key={index} index={index} size={num} color={str} cycle={cycle} stagger={num2} />);
    cResult[3] = str;
    cResult[4] = tmp5;
    cResult[5] = num;
    cResult[6] = num2;
    cResult[7] = arr;
    tmp8 = arr;
  }
  const items = [tmp4.loader, style];
  cResult[0] = style;
  cResult[1] = tmp4.loader;
  cResult[2] = items;
  tmp7 = items;
}) : ((size) => {
  let cycle;
  let num = size.size;
  if (num === undefined) {
    num = 16;
  }
  let str = size.color;
  if (str === undefined) {
    str = "text-default";
  }
  const accessibilityLabel = size.accessibilityLabel;
  let num2;
  const style = size.style;
  const tmp = closure_16(num);
  const reducedMotion = num2.useContext(num(4589).AccessibilityPreferencesContext).reducedMotion;
  dependencyMap = reducedMotion.enabled ? closure_8 : closure_5;
  num2 = 0;
  if (!reducedMotion.enabled) {
    num2 = closure_11;
  }
  const items = [tmp.loader, style];
  let str2;
  if (null != accessibilityLabel) {
    str2 = "image";
  }
  let str3 = "no-hide-descendants";
  if (null != accessibilityLabel) {
    str3 = "yes";
  }
  const obj2 = { length: closure_10 };
  return <View style={items} accessible={tmp2} accessibilityRole={str2} accessibilityLabel={accessibilityLabel} accessibilityElementsHidden={null == accessibilityLabel} importantForAccessibility={str3}>{Array.from(obj2, (arg0, index) => <closure_19 key={index} index={index} size={num} color={str} cycle={cycle} stagger={num2} />)}</View>;
}));
let size = size_mod;
let result = size.fileFinishedImporting("design/visual-identities/ai/AILoader/AILoader.native.tsx");

export const AILoader = memoResult;
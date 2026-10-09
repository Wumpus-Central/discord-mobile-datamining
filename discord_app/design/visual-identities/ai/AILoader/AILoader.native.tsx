// discord_app/design/visual-identities/ai/AILoader/AILoader.native.tsx
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import timing from "../../../animation/reanimated/timing/timing.tsx";
import AIGlyphText from "../AIGlyphText.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const AILoaderConstants = fn(14149);
({
  AI_LOADER_CYCLE_MS: hasOwnProperty,
  AI_LOADER_GAP_EM: metroRequire,
  AI_LOADER_GLYPHS: closure_7,
  AI_LOADER_REDUCED_MOTION_CYCLE_MS: closure_8,
  AI_LOADER_REST_FRACTION,
} = AILoaderConstants);
({ AI_LOADER_SLOT_COUNT: c10, AI_LOADER_SLOT_STAGGER_MS: closure_11, AI_LOADER_STEP_FRACTION } = AILoaderConstants);
const AI_LOADER_TRACK_STEPS = AILoaderConstants.AI_LOADER_TRACK_STEPS;
const jsx = fn(21).jsx;
function trackStepAt(arg0) {
  if (arg0 < AI_LOADER_REST_FRACTION) {
    return AI_LOADER_TRACK_STEPS[0];
  } else {
    const _Math = Math;
    const _Math2 = Math;
    return AI_LOADER_TRACK_STEPS[
      Math.min(Math, Math.floor(Math, (arg0 - tmp) / AI_LOADER_STEP_FRACTION) + 1, AI_LOADER_TRACK_STEPS.length - 1)
    ];
  }
}
trackStepAt.__closure = { AI_LOADER_REST_FRACTION, AI_LOADER_TRACK_STEPS, AI_LOADER_STEP_FRACTION };
trackStepAt.__workletHash = 2403964493846;
trackStepAt.__initData = {
  code: "function trackStepAt_AILoaderNativeTsx1(progress){const{AI_LOADER_REST_FRACTION,AI_LOADER_TRACK_STEPS,AI_LOADER_STEP_FRACTION}=this.__closure;if(progress<AI_LOADER_REST_FRACTION)return AI_LOADER_TRACK_STEPS[0];const step=Math.floor((progress-AI_LOADER_REST_FRACTION)/AI_LOADER_STEP_FRACTION)+1;return AI_LOADER_TRACK_STEPS[Math.min(step,AI_LOADER_TRACK_STEPS.length-1)];}",
};
const createStyles = fn(5091);
let closure_16 = createStyles.createStyles((width) => {
  const obj = {
    loader: { flexDirection: "row", gap: width * timestampProducer },
    slot: { width, height: width, overflow: "hidden" },
    glyph: { height: width },
  };
  return obj;
});
const __initData = {
  code: "function AILoaderNativeTsx2(){const{trackStepAt,progress,size}=this.__closure;return{transform:[{translateY:-trackStepAt(progress.get())*size}]};}",
};
const __initData2 = {
  code: "function AILoaderNativeTsx3(){const{trackStepAt,progress,size}=this.__closure;return{transform:[{translateY:-trackStepAt(progress.get())*size}]};}",
};
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function Slot(index) {
      const cResult = index(color[6]).c(16);
      index = index.index;
      const size = index.size;
      color = index.color;
      const cycle = index.cycle;
      const stagger = index.stagger;
      const tmp4 = closure_16(size);
      const glyph = tmp4;
      let obj = index(color[6]);
      const tmp = index;
      const sharedValue = index(color[7]).useSharedValue(0);
      if (cResult[0] === cycle) {
        if (cResult[1] === index) {
          if (cResult[2] === sharedValue) {
            if (cResult[3] === stagger) {
              let tmp6 = cResult[4];
              let tmp7 = cResult[5];
            }
            const effect = cycle.useEffect(tmp6, tmp7);
            class O {
              constructor() {
                value = closure_6.get();
                if (typeof trackStepAt === "function") {
                  if (value < AI_LOADER_REST_FRACTION) {
                    tmp7 = AI_LOADER_TRACK_STEPS;
                    first = AI_LOADER_TRACK_STEPS[0];
                  } else {
                    tmp3 = globalThis;
                    _Math = Math;
                    tmp4 = AI_LOADER_STEP_FRACTION;
                    num = 1;
                    tmp5 = AI_LOADER_TRACK_STEPS;
                    _Math2 = Math;
                    first =
                      AI_LOADER_TRACK_STEPS[
                        Math.min(
                          Math,
                          Math.floor(Math, (value - tmp2) / AI_LOADER_STEP_FRACTION) + 1,
                          AI_LOADER_TRACK_STEPS.length - 1,
                        )
                      ];
                  }
                  obj = { transform: null };
                  obj1 = { translateY: null };
                  tmp8 = size;
                  obj1.translateY = -first * size;
                  items = [];
                  items[0] = obj1;
                  obj.transform = items;
                  return obj;
                } else {
                  str = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              }
            }
            let obj3 = { trackStepAt, progress: sharedValue, size };
            O.__closure = obj3;
            O.__workletHash = 16632594382704;
            O.__initData = __initData;
            const animatedStyle = tmp(tmp2[7]).useAnimatedStyle(O);
            if (cResult[6] === color) {
              if (cResult[7] === size) {
                if (cResult[8] === tmp4.glyph) {
                  let tmp14 = cResult[9];
                }
                if (cResult[10] === tmp14) {
                  if (cResult[11] === animatedStyle) {
                    let tmp17 = cResult[12];
                  }
                  if (cResult[13] === tmp4.slot) {
                    if (cResult[14] === tmp17) {
                      let tmp22 = cResult[15];
                    }
                    return tmp22;
                  }
                  class O {
                    constructor() {
                      value = closure_6.get();
                      if (typeof trackStepAt === "function") {
                        if (value < AI_LOADER_REST_FRACTION) {
                          tmp7 = AI_LOADER_TRACK_STEPS;
                          first = AI_LOADER_TRACK_STEPS[0];
                        } else {
                          tmp3 = globalThis;
                          _Math = Math;
                          tmp4 = AI_LOADER_STEP_FRACTION;
                          num = 1;
                          tmp5 = AI_LOADER_TRACK_STEPS;
                          _Math2 = Math;
                          first =
                            AI_LOADER_TRACK_STEPS[
                              Math.min(
                                Math,
                                Math.floor(Math, (value - tmp2) / AI_LOADER_STEP_FRACTION) + 1,
                                AI_LOADER_TRACK_STEPS.length - 1,
                              )
                            ];
                        }
                        obj = { transform: null };
                        obj1 = { translateY: null };
                        tmp8 = size;
                        obj1.translateY = -first * size;
                        items = [];
                        items[0] = obj1;
                        obj.transform = items;
                        return obj;
                      } else {
                        str = "Trying to call a non-function";
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
                    value = closure_6.get();
                    if (typeof trackStepAt === "function") {
                      if (value < AI_LOADER_REST_FRACTION) {
                        tmp7 = AI_LOADER_TRACK_STEPS;
                        first = AI_LOADER_TRACK_STEPS[0];
                      } else {
                        tmp3 = globalThis;
                        _Math = Math;
                        tmp4 = AI_LOADER_STEP_FRACTION;
                        num = 1;
                        tmp5 = AI_LOADER_TRACK_STEPS;
                        _Math2 = Math;
                        first =
                          AI_LOADER_TRACK_STEPS[
                            Math.min(
                              Math,
                              Math.floor(Math, (value - tmp2) / AI_LOADER_STEP_FRACTION) + 1,
                              AI_LOADER_TRACK_STEPS.length - 1,
                            )
                          ];
                      }
                      obj = { transform: null };
                      obj1 = { translateY: null };
                      tmp8 = size;
                      obj1.translateY = -first * size;
                      items = [];
                      items[0] = obj1;
                      obj.transform = items;
                      return obj;
                    } else {
                      str = "Trying to call a non-function";
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
            const mapped = closure_7.map((children) =>
              jsx(
                AIGlyphText.AIGlyphText,
                { size, color, allowFontScaling: false, style: glyph.glyph, children },
                children,
              ),
            );
            cResult[6] = color;
            cResult[7] = size;
            cResult[8] = tmp4.glyph;
            cResult[9] = mapped;
            tmp14 = mapped;
            const tmpResult = tmp(tmp2[7]);
          }
        }
      }
      const fn = function n() {
        const result = sharedValue.set(0);
        const result1 = index * stagger;
        const obj = ReanimatedRexport;
        const obj2 = ReanimatedRexport;
        const obj3 = timing;
        const result2 = sharedValue.set(
          obj.withDelay(
            result1,
            obj2.withRepeat(
              obj3.withTiming(1, { duration: cycle, easing: ReanimatedRexport.Easing.linear }, "animate-always"),
              -1,
            ),
          ),
        );
        return () => index(color[7]).cancelAnimation(sharedValue);
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
      let obj2 = index(color[7]);
    }
  : function Slot(index) {
      index = index.index;
      const size = index.size;
      ({ color: dependencyMap, cycle } = index);
      const stagger = index.stagger;
      const tmp = closure_16(size);
      const glyph = tmp;
      const sharedValue = index(4811).useSharedValue(0);
      let items = [cycle, index, sharedValue, stagger];
      const effect = cycle.useEffect(() => {
        const result = sharedValue.set(0);
        const result1 = index * stagger;
        const obj = ReanimatedRexport;
        const obj2 = ReanimatedRexport;
        const obj3 = timing;
        const result2 = sharedValue.set(
          obj.withDelay(
            result1,
            obj2.withRepeat(
              obj3.withTiming(1, { duration: cycle, easing: ReanimatedRexport.Easing.linear }, "animate-always"),
              -1,
            ),
          ),
        );
        return () => index(color[7]).cancelAnimation(sharedValue);
      }, items);
      let obj = index(4811);
      class R {
        constructor() {
          value = closure_6.get();
          if (typeof trackStepAt === "function") {
            if (value < AI_LOADER_REST_FRACTION) {
              tmp7 = AI_LOADER_TRACK_STEPS;
              first = AI_LOADER_TRACK_STEPS[0];
            } else {
              tmp3 = globalThis;
              _Math = Math;
              tmp4 = AI_LOADER_STEP_FRACTION;
              num = 1;
              tmp5 = AI_LOADER_TRACK_STEPS;
              _Math2 = Math;
              first =
                AI_LOADER_TRACK_STEPS[
                  Math.min(
                    Math,
                    Math.floor(Math, (value - tmp2) / AI_LOADER_STEP_FRACTION) + 1,
                    AI_LOADER_TRACK_STEPS.length - 1,
                  )
                ];
            }
            obj = { transform: null };
            obj1 = { translateY: null };
            tmp8 = size;
            obj1.translateY = -first * size;
            items = [];
            items[0] = obj1;
            obj.transform = items;
            return obj;
          } else {
            str = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
      R.__closure = { trackStepAt, progress: sharedValue, size };
      R.__workletHash = 6102802507505;
      R.__initData = __initData2;
      const obj4 = { style: tmp.slot, children: null };
      const animatedStyle = index(4811).useAnimatedStyle(R);
      let obj2 = index(4811);
      let obj3 = { trackStepAt, progress: sharedValue, size };
      obj4.children = jsx(size(4811).View, {
        style: animatedStyle,
        children: closure_7.map((children) =>
          jsx(
            AIGlyphText.AIGlyphText,
            { size, color, allowFontScaling: false, style: glyph.glyph, children },
            children,
          ),
        ),
      });
      return <stagger style={tmp.slot}>{null}</stagger>;
    };
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("design/visual-identities/ai/AILoader/AILoader.native.tsx");

export const AILoader = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function AILoader(arg0) {
        const cResult = num(576).c(16);
        ({ size, color, accessibilityLabel, style } = arg0);
        num = 16;
        if (undefined !== size) {
          num = size;
        }
        let str = "text-default";
        if (undefined !== color) {
          str = color;
        }
        const tmp4 = closure_16(num);
        const reducedMotion = num2.useContext(num(4788).AccessibilityPreferencesContext).reducedMotion;
        const tmp5 = reducedMotion.enabled ? closure_8 : closure_5;
        dependencyMap = tmp5;
        num2 = 0;
        if (!reducedMotion.enabled) {
          num2 = closure_11;
        }
        if (cResult[0] === style) {
          if (cResult[1] === tmp4.loader) {
            let tmp7 = cResult[2];
          }
          let str3 = "no-hide-descendants";
          if (tmp6) {
            str3 = "yes";
          }
          if (cResult[3] === str) {
            if (cResult[4] === tmp5) {
              if (cResult[5] === num) {
                if (cResult[6] === num2) {
                  let tmp8 = cResult[7];
                }
                if (cResult[8] === accessibilityLabel) {
                  if (cResult[9] === tmp6) {
                    if (cResult[10] === tmp7) {
                      if (cResult[11] === str2) {
                        if (cResult[12] === tmp12) {
                          if (cResult[13] === str3) {
                            if (cResult[14] === tmp8) {
                              let tmp13 = cResult[15];
                            }
                            return tmp13;
                          }
                        }
                      }
                    }
                  }
                }
                const obj2 = {
                  style: tmp7,
                  accessible: tmp6,
                  accessibilityRole: str2,
                  accessibilityLabel,
                  accessibilityElementsHidden: !tmp6,
                  importantForAccessibility: str3,
                  children: tmp8,
                };
                const tmp16 = (
                  <View
                    style={tmp7}
                    accessible={tmp6}
                    accessibilityRole={str2}
                    accessibilityLabel={accessibilityLabel}
                    accessibilityElementsHidden={!tmp6}
                    importantForAccessibility={str3}
                  >
                    {tmp8}
                  </View>
                );
                cResult[8] = accessibilityLabel;
                cResult[9] = tmp6;
                cResult[10] = tmp7;
                cResult[11] = str2;
                cResult[12] = !tmp6;
                cResult[13] = str3;
                cResult[14] = tmp8;
                cResult[15] = tmp16;
                tmp13 = tmp16;
              }
            }
          }
          const _Array = Array;
          const obj3 = { length: closure_10 };
          const arr = Array.from(obj3, (arg0, index) => (
            <closure_19 key={index} index={index} size={num} color={str} cycle={cycle} stagger={num2} />
          ));
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
        const obj = num(576);
      }
    : function AILoader(size) {
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
        const reducedMotion = num2.useContext(num(4788).AccessibilityPreferencesContext).reducedMotion;
        dependencyMap = reducedMotion.enabled ? closure_8 : closure_5;
        num2 = 0;
        if (!reducedMotion.enabled) {
          num2 = closure_11;
        }
        const obj = {
          style: null,
          accessible: null != accessibilityLabel,
          accessibilityRole: null,
          accessibilityLabel: null,
          accessibilityElementsHidden: null,
          importantForAccessibility: null,
          children: null,
        };
        const items = [closure_16(num).loader, size.style];
        obj.style = items;
        let str2;
        if (null != accessibilityLabel) {
          str2 = "image";
        }
        obj.accessibilityRole = str2;
        obj.accessibilityLabel = accessibilityLabel;
        obj.accessibilityElementsHidden = null == accessibilityLabel;
        let str3 = "no-hide-descendants";
        if (null != accessibilityLabel) {
          str3 = "yes";
        }
        obj.importantForAccessibility = str3;
        obj.children = Array.from({ length: closure_10 }, (arg0, index) => (
          <closure_19 key={index} index={index} size={num} color={str} cycle={cycle} stagger={num2} />
        ));
        return (
          <View
            style={null}
            accessible={null != accessibilityLabel}
            accessibilityRole={null}
            accessibilityLabel={null}
            accessibilityElementsHidden={null}
            importantForAccessibility={null}
          >
            {null}
          </View>
        );
      },
);

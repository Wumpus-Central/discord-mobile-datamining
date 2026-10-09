// discord_app/modules/quests/native/BountiesModal/BountiesModalTimer.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport2 from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const ReanimatedRexport = ReanimatedRexport2;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let c7 = "#2ECC71";
let result = (fn(5381).SMALL_BUTTON_HEIGHT - 4) / 2;
let closure_9 = 2 * Math.PI * result;
const Easing = fn(4811).Easing;
const easing = Easing.bezier(0.15, 0.21, 0.58, 1);
const Easing2 = fn(4811).Easing;
const easing2 = Easing2.bezier(0.61, 0, 0.58, 1);
const Easing3 = fn(4811).Easing;
const easing3 = Easing3.bezier(0.42, 0, 0.58, 1);
let closure_13 = ReanimatedRexport.createAnimatedComponent(fn(7559).Circle);
const createStyles = fn(5091);
let obj = {
  progress: null,
  ring: null,
  trackPath: null,
  countdownText: null,
  checkmarkLayer: null,
  checkmarkBackground: null,
  checkmarkIcon: null,
};
let size = {
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.round,
  width: fn(5381).SMALL_BUTTON_HEIGHT,
  height: fn(5381).SMALL_BUTTON_HEIGHT,
};
obj.progress = size;
let obj3 = { position: "absolute", transform: null };
let items = [{ rotate: "-90deg" }];
obj3.transform = items;
obj.ring = obj3;
obj.trackPath = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
let obj5 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, lineHeight: null };
const PlatformUtils = fn(1382);
let num;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
obj5.lineHeight = num;
obj.countdownText = obj5;
obj.checkmarkLayer = { position: "absolute", inset: 6, alignItems: "center", justifyContent: "center" };
const size1 = { width: 20, height: 20, backgroundColor: "#2ECC71", borderRadius: nativeDefault.radii.round };
obj.checkmarkBackground = size1;
obj.checkmarkIcon = { width: 20, height: 20 };
let closure_14 = createStyles.createStyles(obj);
const __initData = {
  code: "function BountiesModalTimerTsx1(){const{PROGRESS_CIRCUMFERENCE,animatedProgress}=this.__closure;return{strokeDashoffset:PROGRESS_CIRCUMFERENCE-PROGRESS_CIRCUMFERENCE*animatedProgress.get()};}",
};
const __initData2 = {
  code: "function BountiesModalTimerTsx2(){const{checkmarkBackgroundScale}=this.__closure;return{transform:[{scale:checkmarkBackgroundScale.get()}]};}",
};
const __initData3 = {
  code: "function BountiesModalTimerTsx3(){const{checkmarkScale}=this.__closure;return{transform:[{scale:checkmarkScale.get()}]};}",
};
const __initData4 = {
  code: "function BountiesModalTimerTsx4(){const{PROGRESS_CIRCUMFERENCE,animatedProgress}=this.__closure;return{strokeDashoffset:PROGRESS_CIRCUMFERENCE-PROGRESS_CIRCUMFERENCE*animatedProgress.get()};}",
};
const __initData5 = {
  code: "function BountiesModalTimerTsx5(){const{checkmarkBackgroundScale}=this.__closure;return{transform:[{scale:checkmarkBackgroundScale.get()}]};}",
};
const __initData6 = {
  code: "function BountiesModalTimerTsx6(){const{checkmarkScale}=this.__closure;return{transform:[{scale:checkmarkScale.get()}]};}",
};
const ReactCompilerGating = fn(558);
let obj4 = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
size = fn(2);
let result1 = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalTimer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function BountiesModalTimer(arg0) {
      const cResult = num2(sharedValue[10]).c(49);
      ({ isCompleted, totalSeconds, remainingSeconds } = arg0);
      const tmp4 = closure_14();
      let tmp5 = isCompleted;
      if (!isCompleted) {
        tmp5 = remainingSeconds <= 0;
      }
      importDefault = tmp5;
      num2 = 1;
      const bound = Math.max(1, Math.ceil(remainingSeconds));
      if (cResult[0] === isCompleted) {
        if (cResult[1] === remainingSeconds) {
          if (cResult[2] === totalSeconds) {
            num2 = tmp7;
            sharedValue = tmp(tmp2[4]).useSharedValue(tmp7);
            const tmpResult = tmp(tmp2[4]);
            const sharedValue1 = tmp(tmp2[4]).useSharedValue(0);
            const tmpResult5 = tmp(tmp2[4]);
            const sharedValue2 = tmp(tmp2[4]).useSharedValue(0);
            if (cResult[4] === sharedValue) {
              if (cResult[5] === tmp7) {
                let tmp13 = cResult[6];
              }
              if (cResult[7] === sharedValue) {
                if (cResult[8] === tmp7) {
                  let tmp14 = cResult[9];
                }
                const effect = sharedValue1.useEffect(tmp13, tmp14);
                const ref = sharedValue1.useRef(false);
                if (cResult[10] === sharedValue1) {
                  if (cResult[11] === sharedValue2) {
                    if (cResult[12] === tmp5) {
                      let tmp16 = cResult[13];
                      let tmp17 = cResult[14];
                    }
                    const effect1 = obj5.useEffect(tmp16, tmp17);
                    const fn = function p() {
                      return { strokeDashoffset: closure_9 - closure_9 * sharedValue.get() };
                    };
                    let obj2 = { PROGRESS_CIRCUMFERENCE, animatedProgress: null };
                    class G {
                      constructor() {
                        closure_5.current = true;
                        tmp = closure_3;
                        withDelay = closure_3.set;
                        if (closure_1) {
                          if (closure_5.current) {
                            tmp9 = closure_0;
                            tmp10 = closure_2;
                            obj = closure_0(closure_2[4]);
                            obj2 = closure_0(closure_2[11]);
                            obj1 = { duration: 267, easing: null };
                            tmp11 = closure_10;
                            obj1.easing = closure_10;
                            num3 = 1.65;
                            withTimingResult = obj2.withTiming(1.65, obj1);
                            obj4 = closure_0(closure_2[11]);
                            obj11 = { duration: 233, easing: null };
                            tmp13 = closure_11;
                            obj11.easing = closure_11;
                            num4 = 1;
                            withDelayResult = withDelay(obj.withSequence(withTimingResult, obj4.withTiming(1, obj11)));
                            tmp15 = closure_4;
                            tmp = closure_0(closure_2[4]);
                            withDelay = tmp.withDelay;
                            obj6 = closure_0(closure_2[4]);
                            obj7 = closure_0(closure_2[11]);
                            obj12 = { duration: 167, easing: null };
                            tmp16 = closure_12;
                            obj12.easing = closure_12;
                            num5 = 1.25;
                            withTimingResult1 = obj7.withTiming(1.25, obj12);
                            obj9 = closure_0(closure_2[11]);
                            obj13 = { duration: 333, easing: null };
                            obj13.easing = closure_12;
                            num6 = 167;
                            result = closure_4.set(
                              withDelay(167, obj6.withSequence(withTimingResult1, obj9.withTiming(1, obj13))),
                            );
                          } else {
                            num2 = 1;
                            withDelayResult1 = withDelay(1);
                            tmp6 = closure_4;
                            result1 = closure_4.set(1);
                          }
                          tmp19 = tmp8;
                        } else {
                          num = 0;
                          withDelayResult2 = withDelay(0);
                          tmp3 = closure_4;
                          result2 = closure_4.set(0);
                          return;
                        }
                        return;
                      }
                    }
                    fn.__closure = obj2;
                    fn.__workletHash = 12964700773124;
                    fn.__initData = __initData;
                    const animatedProps = tmp(tmp2[4]).useAnimatedProps(fn);
                    class I {
                      constructor() {
                        obj = closure_0(closure_2[11]);
                        result = closure_2.set(obj.withTiming(closure_0, { duration: 500 }, "animate-always"));
                        return;
                      }
                    }
                    const fn2 = function b() {
                      const obj = { transform: null };
                      const items = [{ scale: sharedValue1.get() }];
                      obj.transform = items;
                      return obj;
                    };
                    let obj3 = { checkmarkBackgroundScale: sharedValue1 };
                    fn2.__closure = obj3;
                    fn2.__workletHash = 10834015407160;
                    fn2.__initData = __initData2;
                    const animatedStyle = obj8.useAnimatedStyle(fn2);
                    const tmpResult7 = tmp(tmp2[4]);
                    class F {
                      constructor() {
                        obj = { transform: null };
                        obj1 = { scale: closure_4.get() };
                        items = [];
                        items[0] = obj1;
                        obj.transform = items;
                        return obj;
                      }
                    }
                    let obj4 = { checkmarkScale: sharedValue2 };
                    F.__closure = obj4;
                    F.__workletHash = 7510845920441;
                    F.__initData = __initData3;
                    const animatedStyle1 = tmp(tmp2[4]).useAnimatedStyle(F);
                    if (cResult[15] !== tmp4.trackPath.color) {
                      let obj6 = {
                        cx: tmp(tmp2[3]).SMALL_BUTTON_HEIGHT / 2,
                        cy: tmp(tmp2[3]).SMALL_BUTTON_HEIGHT / 2,
                        r: null,
                        fill: "none",
                        stroke: null,
                        strokeWidth: 4,
                      };
                      class G {
                        constructor() {
                          closure_5.current = true;
                          tmp = closure_3;
                          withDelay = closure_3.set;
                          if (closure_1) {
                            if (closure_5.current) {
                              tmp9 = closure_0;
                              tmp10 = closure_2;
                              obj = closure_0(closure_2[4]);
                              obj2 = closure_0(closure_2[11]);
                              obj1 = { duration: 267, easing: null };
                              tmp11 = closure_10;
                              obj1.easing = closure_10;
                              num3 = 1.65;
                              withTimingResult = obj2.withTiming(1.65, obj1);
                              obj4 = closure_0(closure_2[11]);
                              obj11 = { duration: 233, easing: null };
                              tmp13 = closure_11;
                              obj11.easing = closure_11;
                              num4 = 1;
                              withDelayResult = withDelay(
                                obj.withSequence(withTimingResult, obj4.withTiming(1, obj11)),
                              );
                              tmp15 = closure_4;
                              tmp = closure_0(closure_2[4]);
                              withDelay = tmp.withDelay;
                              obj6 = closure_0(closure_2[4]);
                              obj7 = closure_0(closure_2[11]);
                              obj12 = { duration: 167, easing: null };
                              tmp16 = closure_12;
                              obj12.easing = closure_12;
                              num5 = 1.25;
                              withTimingResult1 = obj7.withTiming(1.25, obj12);
                              obj9 = closure_0(closure_2[11]);
                              obj13 = { duration: 333, easing: null };
                              obj13.easing = closure_12;
                              num6 = 167;
                              result = closure_4.set(
                                withDelay(167, obj6.withSequence(withTimingResult1, obj9.withTiming(1, obj13))),
                              );
                            } else {
                              num2 = 1;
                              withDelayResult1 = withDelay(1);
                              tmp6 = closure_4;
                              result1 = closure_4.set(1);
                            }
                            tmp19 = tmp8;
                          } else {
                            num = 0;
                            withDelayResult2 = withDelay(0);
                            tmp3 = closure_4;
                            result2 = closure_4.set(0);
                            return;
                          }
                          return;
                        }
                      }
                      obj6.r = r;
                      obj6.stroke = tmp4.trackPath.color;
                      cResult[15] = tmp4.trackPath.color;
                      cResult[16] = ref(tmp(tmp2[5]).Circle, obj6);
                      class I {
                        constructor() {
                          obj = closure_0(closure_2[11]);
                          result = closure_2.set(obj.withTiming(closure_0, { duration: 500 }, "animate-always"));
                          return;
                        }
                      }
                      const tmp28 = ref(tmp(tmp2[5]).Circle, obj6);
                    }
                    if (cResult[17] !== animatedProps) {
                      let obj7 = {
                        cx: tmp(tmp2[3]).SMALL_BUTTON_HEIGHT / 2,
                        cy: tmp(tmp2[3]).SMALL_BUTTON_HEIGHT / 2,
                        r: null,
                        fill: "none",
                        stroke: null,
                        strokeWidth: 4,
                        strokeDasharray: null,
                        strokeLinecap: "round",
                        animatedProps: null,
                      };
                      class G {
                        constructor() {
                          closure_5.current = true;
                          tmp = closure_3;
                          withDelay = closure_3.set;
                          if (closure_1) {
                            if (closure_5.current) {
                              tmp9 = closure_0;
                              tmp10 = closure_2;
                              obj = closure_0(closure_2[4]);
                              obj2 = closure_0(closure_2[11]);
                              obj1 = { duration: 267, easing: null };
                              tmp11 = closure_10;
                              obj1.easing = closure_10;
                              num3 = 1.65;
                              withTimingResult = obj2.withTiming(1.65, obj1);
                              obj4 = closure_0(closure_2[11]);
                              obj11 = { duration: 233, easing: null };
                              tmp13 = closure_11;
                              obj11.easing = closure_11;
                              num4 = 1;
                              withDelayResult = withDelay(
                                obj.withSequence(withTimingResult, obj4.withTiming(1, obj11)),
                              );
                              tmp15 = closure_4;
                              tmp = closure_0(closure_2[4]);
                              withDelay = tmp.withDelay;
                              obj6 = closure_0(closure_2[4]);
                              obj7 = closure_0(closure_2[11]);
                              obj12 = { duration: 167, easing: null };
                              tmp16 = closure_12;
                              obj12.easing = closure_12;
                              num5 = 1.25;
                              withTimingResult1 = obj7.withTiming(1.25, obj12);
                              obj9 = closure_0(closure_2[11]);
                              obj13 = { duration: 333, easing: null };
                              obj13.easing = closure_12;
                              num6 = 167;
                              result = closure_4.set(
                                withDelay(167, obj6.withSequence(withTimingResult1, obj9.withTiming(1, obj13))),
                              );
                            } else {
                              num2 = 1;
                              withDelayResult1 = withDelay(1);
                              tmp6 = closure_4;
                              result1 = closure_4.set(1);
                            }
                            tmp19 = tmp8;
                          } else {
                            num = 0;
                            withDelayResult2 = withDelay(0);
                            tmp3 = closure_4;
                            result2 = closure_4.set(0);
                            return;
                          }
                          return;
                        }
                      }
                      obj7.r = r;
                      obj7.stroke = stroke;
                      obj7.strokeDasharray = PROGRESS_CIRCUMFERENCE;
                      obj7.animatedProps = animatedProps;
                      const tmp33 = ref(closure_13, obj7);
                      class I {
                        constructor() {
                          obj = closure_0(closure_2[11]);
                          result = closure_2.set(obj.withTiming(closure_0, { duration: 500 }, "animate-always"));
                          return;
                        }
                      }
                      cResult[18] = tmp33;
                      let tmp29 = tmp33;
                    } else {
                      tmp29 = cResult[18];
                    }
                    if (cResult[19] === tmp4.ring) {
                      if (cResult[20] === tmp26) {
                        if (cResult[21] === tmp29) {
                          let tmp34 = cResult[22];
                        }
                        if (cResult[23] === tmp5) {
                          if (cResult[24] === bound) {
                            if (cResult[25] === tmp4.countdownText) {
                              let tmp39 = cResult[26];
                            }
                            if (cResult[27] === animatedStyle) {
                              if (cResult[28] === tmp4.checkmarkLayer) {
                                let tmp42 = cResult[29];
                              }
                              if (cResult[30] !== tmp4.checkmarkBackground) {
                                let obj9 = { style: tmp4.checkmarkBackground };
                                const tmp46 = ref(sharedValue2, obj9);
                                class G {
                                  constructor() {
                                    closure_5.current = true;
                                    tmp = closure_3;
                                    withDelay = closure_3.set;
                                    if (closure_1) {
                                      if (closure_5.current) {
                                        tmp9 = closure_0;
                                        tmp10 = closure_2;
                                        obj = closure_0(closure_2[4]);
                                        obj2 = closure_0(closure_2[11]);
                                        obj1 = { duration: 267, easing: null };
                                        tmp11 = closure_10;
                                        obj1.easing = closure_10;
                                        num3 = 1.65;
                                        withTimingResult = obj2.withTiming(1.65, obj1);
                                        obj4 = closure_0(closure_2[11]);
                                        obj11 = { duration: 233, easing: null };
                                        tmp13 = closure_11;
                                        obj11.easing = closure_11;
                                        num4 = 1;
                                        withDelayResult = withDelay(
                                          obj.withSequence(withTimingResult, obj4.withTiming(1, obj11)),
                                        );
                                        tmp15 = closure_4;
                                        tmp = closure_0(closure_2[4]);
                                        withDelay = tmp.withDelay;
                                        obj6 = closure_0(closure_2[4]);
                                        obj7 = closure_0(closure_2[11]);
                                        obj12 = { duration: 167, easing: null };
                                        tmp16 = closure_12;
                                        obj12.easing = closure_12;
                                        num5 = 1.25;
                                        withTimingResult1 = obj7.withTiming(1.25, obj12);
                                        obj9 = closure_0(closure_2[11]);
                                        obj13 = { duration: 333, easing: null };
                                        obj13.easing = closure_12;
                                        num6 = 167;
                                        result = closure_4.set(
                                          withDelay(
                                            167,
                                            obj6.withSequence(withTimingResult1, obj9.withTiming(1, obj13)),
                                          ),
                                        );
                                      } else {
                                        num2 = 1;
                                        withDelayResult1 = withDelay(1);
                                        tmp6 = closure_4;
                                        result1 = closure_4.set(1);
                                      }
                                      tmp19 = tmp8;
                                    } else {
                                      num = 0;
                                      withDelayResult2 = withDelay(0);
                                      tmp3 = closure_4;
                                      result2 = closure_4.set(0);
                                      return;
                                    }
                                    return;
                                  }
                                }
                                cResult[31] = tmp46;
                                let tmp43 = tmp46;
                              } else {
                                tmp43 = cResult[31];
                              }
                              if (cResult[32] === tmp43) {
                                if (cResult[33] === tmp42) {
                                  let tmp47 = cResult[34];
                                }
                                if (cResult[35] === animatedStyle1) {
                                  if (cResult[36] === tmp4.checkmarkLayer) {
                                    let tmp51 = cResult[37];
                                  }
                                  if (cResult[38] !== tmp4.checkmarkIcon) {
                                    let obj10 = { size: "custom", color: null, style: null };
                                    const CheckmarkSmallBoldIcon = tmp(tmp2[13]).CheckmarkSmallBoldIcon;
                                    obj10.color = require("native").colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT;
                                    obj10.style = tmp4.checkmarkIcon;
                                    class G {
                                      constructor() {
                                        closure_5.current = true;
                                        tmp = closure_3;
                                        withDelay = closure_3.set;
                                        if (closure_1) {
                                          if (closure_5.current) {
                                            tmp9 = closure_0;
                                            tmp10 = closure_2;
                                            obj = closure_0(closure_2[4]);
                                            obj2 = closure_0(closure_2[11]);
                                            obj1 = { duration: 267, easing: null };
                                            tmp11 = closure_10;
                                            obj1.easing = closure_10;
                                            num3 = 1.65;
                                            withTimingResult = obj2.withTiming(1.65, obj1);
                                            obj4 = closure_0(closure_2[11]);
                                            obj11 = { duration: 233, easing: null };
                                            tmp13 = closure_11;
                                            obj11.easing = closure_11;
                                            num4 = 1;
                                            withDelayResult = withDelay(
                                              obj.withSequence(withTimingResult, obj4.withTiming(1, obj11)),
                                            );
                                            tmp15 = closure_4;
                                            tmp = closure_0(closure_2[4]);
                                            withDelay = tmp.withDelay;
                                            obj6 = closure_0(closure_2[4]);
                                            obj7 = closure_0(closure_2[11]);
                                            obj12 = { duration: 167, easing: null };
                                            tmp16 = closure_12;
                                            obj12.easing = closure_12;
                                            num5 = 1.25;
                                            withTimingResult1 = obj7.withTiming(1.25, obj12);
                                            obj9 = closure_0(closure_2[11]);
                                            obj13 = { duration: 333, easing: null };
                                            obj13.easing = closure_12;
                                            num6 = 167;
                                            result = closure_4.set(
                                              withDelay(
                                                167,
                                                obj6.withSequence(withTimingResult1, obj9.withTiming(1, obj13)),
                                              ),
                                            );
                                          } else {
                                            num2 = 1;
                                            withDelayResult1 = withDelay(1);
                                            tmp6 = closure_4;
                                            result1 = closure_4.set(1);
                                          }
                                          tmp19 = tmp8;
                                        } else {
                                          num = 0;
                                          withDelayResult2 = withDelay(0);
                                          tmp3 = closure_4;
                                          result2 = closure_4.set(0);
                                          return;
                                        }
                                        return;
                                      }
                                    }
                                    cResult[38] = tmp4.checkmarkIcon;
                                    cResult[39] = tmp55;
                                    let tmp52 = tmp55;
                                  } else {
                                    tmp52 = cResult[39];
                                  }
                                  if (cResult[40] === tmp51) {
                                    if (cResult[41] === tmp52) {
                                      let tmp56 = cResult[42];
                                    }
                                    if (cResult[43] === tmp4.progress) {
                                      if (cResult[44] === tmp47) {
                                        if (cResult[45] === tmp56) {
                                          if (cResult[46] === tmp34) {
                                            if (cResult[47] === tmp39) {
                                              const tmp60 = cResult[48];
                                            }
                                            return tmp60;
                                          }
                                        }
                                      }
                                    }
                                    const obj11 = { style: tmp4.progress, children: null };
                                    class G {
                                      constructor() {
                                        closure_5.current = true;
                                        tmp = closure_3;
                                        withDelay = closure_3.set;
                                        if (closure_1) {
                                          if (closure_5.current) {
                                            tmp9 = closure_0;
                                            tmp10 = closure_2;
                                            obj = closure_0(closure_2[4]);
                                            obj2 = closure_0(closure_2[11]);
                                            obj1 = { duration: 267, easing: null };
                                            tmp11 = closure_10;
                                            obj1.easing = closure_10;
                                            num3 = 1.65;
                                            withTimingResult = obj2.withTiming(1.65, obj1);
                                            obj4 = closure_0(closure_2[11]);
                                            obj11 = { duration: 233, easing: null };
                                            tmp13 = closure_11;
                                            obj11.easing = closure_11;
                                            num4 = 1;
                                            withDelayResult = withDelay(
                                              obj.withSequence(withTimingResult, obj4.withTiming(1, obj11)),
                                            );
                                            tmp15 = closure_4;
                                            tmp = closure_0(closure_2[4]);
                                            withDelay = tmp.withDelay;
                                            obj6 = closure_0(closure_2[4]);
                                            obj7 = closure_0(closure_2[11]);
                                            obj12 = { duration: 167, easing: null };
                                            tmp16 = closure_12;
                                            obj12.easing = closure_12;
                                            num5 = 1.25;
                                            withTimingResult1 = obj7.withTiming(1.25, obj12);
                                            obj9 = closure_0(closure_2[11]);
                                            obj13 = { duration: 333, easing: null };
                                            obj13.easing = closure_12;
                                            num6 = 167;
                                            result = closure_4.set(
                                              withDelay(
                                                167,
                                                obj6.withSequence(withTimingResult1, obj9.withTiming(1, obj13)),
                                              ),
                                            );
                                          } else {
                                            num2 = 1;
                                            withDelayResult1 = withDelay(1);
                                            tmp6 = closure_4;
                                            result1 = closure_4.set(1);
                                          }
                                          tmp19 = tmp8;
                                        } else {
                                          num = 0;
                                          withDelayResult2 = withDelay(0);
                                          tmp3 = closure_4;
                                          result2 = closure_4.set(0);
                                          return;
                                        }
                                        return;
                                      }
                                    }
                                    tmp63[0] = tmp34;
                                    tmp63[1] = tmp39;
                                    tmp63[2] = tmp47;
                                    tmp63[3] = tmp56;
                                    obj11.children = tmp63;
                                    class I {
                                      constructor() {
                                        obj = closure_0(closure_2[11]);
                                        result = closure_2.set(
                                          obj.withTiming(closure_0, { duration: 500 }, "animate-always"),
                                        );
                                        return;
                                      }
                                    }
                                    cResult[44] = tmp47;
                                    cResult[45] = tmp56;
                                    cResult[46] = tmp34;
                                    cResult[47] = tmp39;
                                    cResult[48] = closure_6(sharedValue2, obj11);
                                    class F {
                                      constructor() {
                                        obj = { transform: null };
                                        obj1 = { scale: closure_4.get() };
                                        items = [];
                                        items[0] = obj1;
                                        obj.transform = items;
                                        return obj;
                                      }
                                    }
                                    const tmp64 = closure_6(sharedValue2, obj11);
                                  }
                                  const obj12 = { style: null, children: null };
                                  class G {
                                    constructor() {
                                      closure_5.current = true;
                                      tmp = closure_3;
                                      withDelay = closure_3.set;
                                      if (closure_1) {
                                        if (closure_5.current) {
                                          tmp9 = closure_0;
                                          tmp10 = closure_2;
                                          obj = closure_0(closure_2[4]);
                                          obj2 = closure_0(closure_2[11]);
                                          obj1 = { duration: 267, easing: null };
                                          tmp11 = closure_10;
                                          obj1.easing = closure_10;
                                          num3 = 1.65;
                                          withTimingResult = obj2.withTiming(1.65, obj1);
                                          obj4 = closure_0(closure_2[11]);
                                          obj11 = { duration: 233, easing: null };
                                          tmp13 = closure_11;
                                          obj11.easing = closure_11;
                                          num4 = 1;
                                          withDelayResult = withDelay(
                                            obj.withSequence(withTimingResult, obj4.withTiming(1, obj11)),
                                          );
                                          tmp15 = closure_4;
                                          tmp = closure_0(closure_2[4]);
                                          withDelay = tmp.withDelay;
                                          obj6 = closure_0(closure_2[4]);
                                          obj7 = closure_0(closure_2[11]);
                                          obj12 = { duration: 167, easing: null };
                                          tmp16 = closure_12;
                                          obj12.easing = closure_12;
                                          num5 = 1.25;
                                          withTimingResult1 = obj7.withTiming(1.25, obj12);
                                          obj9 = closure_0(closure_2[11]);
                                          obj13 = { duration: 333, easing: null };
                                          obj13.easing = closure_12;
                                          num6 = 167;
                                          result = closure_4.set(
                                            withDelay(
                                              167,
                                              obj6.withSequence(withTimingResult1, obj9.withTiming(1, obj13)),
                                            ),
                                          );
                                        } else {
                                          num2 = 1;
                                          withDelayResult1 = withDelay(1);
                                          tmp6 = closure_4;
                                          result1 = closure_4.set(1);
                                        }
                                        tmp19 = tmp8;
                                      } else {
                                        num = 0;
                                        withDelayResult2 = withDelay(0);
                                        tmp3 = closure_4;
                                        result2 = closure_4.set(0);
                                        return;
                                      }
                                      return;
                                    }
                                  }
                                  obj12.children = tmp52;
                                  cResult[40] = tmp51;
                                  cResult[41] = tmp52;
                                  class I {
                                    constructor() {
                                      obj = closure_0(closure_2[11]);
                                      result = closure_2.set(
                                        obj.withTiming(closure_0, { duration: 500 }, "animate-always"),
                                      );
                                      return;
                                    }
                                  }
                                  tmp56 = ref(require("ReanimatedRexport").View, obj12);
                                  const tmp59 = ref(require("ReanimatedRexport").View, obj12);
                                }
                                let items = [tmp4.checkmarkLayer, animatedStyle1];
                                class G {
                                  constructor() {
                                    closure_5.current = true;
                                    tmp = closure_3;
                                    withDelay = closure_3.set;
                                    if (closure_1) {
                                      if (closure_5.current) {
                                        tmp9 = closure_0;
                                        tmp10 = closure_2;
                                        obj = closure_0(closure_2[4]);
                                        obj2 = closure_0(closure_2[11]);
                                        obj1 = { duration: 267, easing: null };
                                        tmp11 = closure_10;
                                        obj1.easing = closure_10;
                                        num3 = 1.65;
                                        withTimingResult = obj2.withTiming(1.65, obj1);
                                        obj4 = closure_0(closure_2[11]);
                                        obj11 = { duration: 233, easing: null };
                                        tmp13 = closure_11;
                                        obj11.easing = closure_11;
                                        num4 = 1;
                                        withDelayResult = withDelay(
                                          obj.withSequence(withTimingResult, obj4.withTiming(1, obj11)),
                                        );
                                        tmp15 = closure_4;
                                        tmp = closure_0(closure_2[4]);
                                        withDelay = tmp.withDelay;
                                        obj6 = closure_0(closure_2[4]);
                                        obj7 = closure_0(closure_2[11]);
                                        obj12 = { duration: 167, easing: null };
                                        tmp16 = closure_12;
                                        obj12.easing = closure_12;
                                        num5 = 1.25;
                                        withTimingResult1 = obj7.withTiming(1.25, obj12);
                                        obj9 = closure_0(closure_2[11]);
                                        obj13 = { duration: 333, easing: null };
                                        obj13.easing = closure_12;
                                        num6 = 167;
                                        result = closure_4.set(
                                          withDelay(
                                            167,
                                            obj6.withSequence(withTimingResult1, obj9.withTiming(1, obj13)),
                                          ),
                                        );
                                      } else {
                                        num2 = 1;
                                        withDelayResult1 = withDelay(1);
                                        tmp6 = closure_4;
                                        result1 = closure_4.set(1);
                                      }
                                      tmp19 = tmp8;
                                    } else {
                                      num = 0;
                                      withDelayResult2 = withDelay(0);
                                      tmp3 = closure_4;
                                      result2 = closure_4.set(0);
                                      return;
                                    }
                                    return;
                                  }
                                }
                                cResult[36] = tmp4.checkmarkLayer;
                                cResult[37] = items;
                                tmp51 = items;
                              }
                              const obj13 = { style: null, children: null };
                              class G {
                                constructor() {
                                  closure_5.current = true;
                                  tmp = closure_3;
                                  withDelay = closure_3.set;
                                  if (closure_1) {
                                    if (closure_5.current) {
                                      tmp9 = closure_0;
                                      tmp10 = closure_2;
                                      obj = closure_0(closure_2[4]);
                                      obj2 = closure_0(closure_2[11]);
                                      obj1 = { duration: 267, easing: null };
                                      tmp11 = closure_10;
                                      obj1.easing = closure_10;
                                      num3 = 1.65;
                                      withTimingResult = obj2.withTiming(1.65, obj1);
                                      obj4 = closure_0(closure_2[11]);
                                      obj11 = { duration: 233, easing: null };
                                      tmp13 = closure_11;
                                      obj11.easing = closure_11;
                                      num4 = 1;
                                      withDelayResult = withDelay(
                                        obj.withSequence(withTimingResult, obj4.withTiming(1, obj11)),
                                      );
                                      tmp15 = closure_4;
                                      tmp = closure_0(closure_2[4]);
                                      withDelay = tmp.withDelay;
                                      obj6 = closure_0(closure_2[4]);
                                      obj7 = closure_0(closure_2[11]);
                                      obj12 = { duration: 167, easing: null };
                                      tmp16 = closure_12;
                                      obj12.easing = closure_12;
                                      num5 = 1.25;
                                      withTimingResult1 = obj7.withTiming(1.25, obj12);
                                      obj9 = closure_0(closure_2[11]);
                                      obj13 = { duration: 333, easing: null };
                                      obj13.easing = closure_12;
                                      num6 = 167;
                                      result = closure_4.set(
                                        withDelay(167, obj6.withSequence(withTimingResult1, obj9.withTiming(1, obj13))),
                                      );
                                    } else {
                                      num2 = 1;
                                      withDelayResult1 = withDelay(1);
                                      tmp6 = closure_4;
                                      result1 = closure_4.set(1);
                                    }
                                    tmp19 = tmp8;
                                  } else {
                                    num = 0;
                                    withDelayResult2 = withDelay(0);
                                    tmp3 = closure_4;
                                    result2 = closure_4.set(0);
                                    return;
                                  }
                                  return;
                                }
                              }
                              obj13.children = tmp43;
                              cResult[32] = tmp43;
                              cResult[33] = tmp42;
                              class I {
                                constructor() {
                                  obj = closure_0(closure_2[11]);
                                  result = closure_2.set(
                                    obj.withTiming(closure_0, { duration: 500 }, "animate-always"),
                                  );
                                  return;
                                }
                              }
                              tmp47 = ref(require("ReanimatedRexport").View, obj13);
                              const tmp50 = ref(require("ReanimatedRexport").View, obj13);
                            }
                            const items1 = [tmp4.checkmarkLayer, animatedStyle];
                            class G {
                              constructor() {
                                closure_5.current = true;
                                tmp = closure_3;
                                withDelay = closure_3.set;
                                if (closure_1) {
                                  if (closure_5.current) {
                                    tmp9 = closure_0;
                                    tmp10 = closure_2;
                                    obj = closure_0(closure_2[4]);
                                    obj2 = closure_0(closure_2[11]);
                                    obj1 = { duration: 267, easing: null };
                                    tmp11 = closure_10;
                                    obj1.easing = closure_10;
                                    num3 = 1.65;
                                    withTimingResult = obj2.withTiming(1.65, obj1);
                                    obj4 = closure_0(closure_2[11]);
                                    obj11 = { duration: 233, easing: null };
                                    tmp13 = closure_11;
                                    obj11.easing = closure_11;
                                    num4 = 1;
                                    withDelayResult = withDelay(
                                      obj.withSequence(withTimingResult, obj4.withTiming(1, obj11)),
                                    );
                                    tmp15 = closure_4;
                                    tmp = closure_0(closure_2[4]);
                                    withDelay = tmp.withDelay;
                                    obj6 = closure_0(closure_2[4]);
                                    obj7 = closure_0(closure_2[11]);
                                    obj12 = { duration: 167, easing: null };
                                    tmp16 = closure_12;
                                    obj12.easing = closure_12;
                                    num5 = 1.25;
                                    withTimingResult1 = obj7.withTiming(1.25, obj12);
                                    obj9 = closure_0(closure_2[11]);
                                    obj13 = { duration: 333, easing: null };
                                    obj13.easing = closure_12;
                                    num6 = 167;
                                    result = closure_4.set(
                                      withDelay(167, obj6.withSequence(withTimingResult1, obj9.withTiming(1, obj13))),
                                    );
                                  } else {
                                    num2 = 1;
                                    withDelayResult1 = withDelay(1);
                                    tmp6 = closure_4;
                                    result1 = closure_4.set(1);
                                  }
                                  tmp19 = tmp8;
                                } else {
                                  num = 0;
                                  withDelayResult2 = withDelay(0);
                                  tmp3 = closure_4;
                                  result2 = closure_4.set(0);
                                  return;
                                }
                                return;
                              }
                            }
                            cResult[28] = tmp4.checkmarkLayer;
                            cResult[29] = items1;
                            tmp42 = items1;
                          }
                        }
                        let tmp40 = !tmp5;
                        if (!tmp5) {
                          const obj14 = {
                            variant: "text-sm/semibold",
                            style: tmp4.countdownText,
                            maxFontSizeMultiplier: 1,
                            children: bound,
                          };
                          tmp40 = ref(tmp(tmp2[12]).Text, obj14);
                        }
                        cResult[23] = tmp5;
                        class G {
                          constructor() {
                            closure_5.current = true;
                            tmp = closure_3;
                            withDelay = closure_3.set;
                            if (closure_1) {
                              if (closure_5.current) {
                                tmp9 = closure_0;
                                tmp10 = closure_2;
                                obj = closure_0(closure_2[4]);
                                obj2 = closure_0(closure_2[11]);
                                obj1 = { duration: 267, easing: null };
                                tmp11 = closure_10;
                                obj1.easing = closure_10;
                                num3 = 1.65;
                                withTimingResult = obj2.withTiming(1.65, obj1);
                                obj4 = closure_0(closure_2[11]);
                                obj11 = { duration: 233, easing: null };
                                tmp13 = closure_11;
                                obj11.easing = closure_11;
                                num4 = 1;
                                withDelayResult = withDelay(
                                  obj.withSequence(withTimingResult, obj4.withTiming(1, obj11)),
                                );
                                tmp15 = closure_4;
                                tmp = closure_0(closure_2[4]);
                                withDelay = tmp.withDelay;
                                obj6 = closure_0(closure_2[4]);
                                obj7 = closure_0(closure_2[11]);
                                obj12 = { duration: 167, easing: null };
                                tmp16 = closure_12;
                                obj12.easing = closure_12;
                                num5 = 1.25;
                                withTimingResult1 = obj7.withTiming(1.25, obj12);
                                obj9 = closure_0(closure_2[11]);
                                obj13 = { duration: 333, easing: null };
                                obj13.easing = closure_12;
                                num6 = 167;
                                result = closure_4.set(
                                  withDelay(167, obj6.withSequence(withTimingResult1, obj9.withTiming(1, obj13))),
                                );
                              } else {
                                num2 = 1;
                                withDelayResult1 = withDelay(1);
                                tmp6 = closure_4;
                                result1 = closure_4.set(1);
                              }
                              tmp19 = tmp8;
                            } else {
                              num = 0;
                              withDelayResult2 = withDelay(0);
                              tmp3 = closure_4;
                              result2 = closure_4.set(0);
                              return;
                            }
                            return;
                          }
                        }
                        cResult[24] = bound;
                        cResult[25] = tmp4.countdownText;
                        cResult[26] = tmp40;
                        tmp39 = tmp40;
                      }
                    }
                    const size = { height: null, width: null, style: null, children: null };
                    const tmpResult8 = tmp(tmp2[4]);
                    size.height = tmp(tmp2[3]).SMALL_BUTTON_HEIGHT;
                    size.width = tmp(tmp2[3]).SMALL_BUTTON_HEIGHT;
                    size.style = tmp4.ring;
                    const items2 = [tmp26, tmp29];
                    size.children = items2;
                    const tmp38 = closure_6(require("inlineStyles"), size);
                    cResult[19] = tmp4.ring;
                    cResult[20] = tmp26;
                    cResult[21] = tmp29;
                    cResult[22] = tmp38;
                    tmp34 = tmp38;
                    const tmp37 = require("inlineStyles");
                  }
                }
                class G {
                  constructor() {
                    closure_5.current = true;
                    tmp = closure_3;
                    withDelay = closure_3.set;
                    if (closure_1) {
                      if (closure_5.current) {
                        tmp9 = closure_0;
                        tmp10 = closure_2;
                        obj = closure_0(closure_2[4]);
                        obj2 = closure_0(closure_2[11]);
                        obj1 = { duration: 267, easing: null };
                        tmp11 = closure_10;
                        obj1.easing = closure_10;
                        num3 = 1.65;
                        withTimingResult = obj2.withTiming(1.65, obj1);
                        obj4 = closure_0(closure_2[11]);
                        obj11 = { duration: 233, easing: null };
                        tmp13 = closure_11;
                        obj11.easing = closure_11;
                        num4 = 1;
                        withDelayResult = withDelay(obj.withSequence(withTimingResult, obj4.withTiming(1, obj11)));
                        tmp15 = closure_4;
                        tmp = closure_0(closure_2[4]);
                        withDelay = tmp.withDelay;
                        obj6 = closure_0(closure_2[4]);
                        obj7 = closure_0(closure_2[11]);
                        obj12 = { duration: 167, easing: null };
                        tmp16 = closure_12;
                        obj12.easing = closure_12;
                        num5 = 1.25;
                        withTimingResult1 = obj7.withTiming(1.25, obj12);
                        obj9 = closure_0(closure_2[11]);
                        obj13 = { duration: 333, easing: null };
                        obj13.easing = closure_12;
                        num6 = 167;
                        result = closure_4.set(
                          withDelay(167, obj6.withSequence(withTimingResult1, obj9.withTiming(1, obj13))),
                        );
                      } else {
                        num2 = 1;
                        withDelayResult1 = withDelay(1);
                        tmp6 = closure_4;
                        result1 = closure_4.set(1);
                      }
                      tmp19 = tmp8;
                    } else {
                      num = 0;
                      withDelayResult2 = withDelay(0);
                      tmp3 = closure_4;
                      result2 = closure_4.set(0);
                      return;
                    }
                    return;
                  }
                }
                const items3 = [tmp5, sharedValue1, sharedValue2];
                cResult[10] = sharedValue1;
                class I {
                  constructor() {
                    obj = closure_0(closure_2[11]);
                    result = closure_2.set(obj.withTiming(closure_0, { duration: 500 }, "animate-always"));
                    return;
                  }
                }
                cResult[12] = tmp5;
                cResult[13] = G;
                cResult[14] = items3;
                tmp17 = items3;
                tmp16 = G;
                obj5 = sharedValue1;
              }
              const items4 = [sharedValue, tmp7];
              cResult[8] = tmp7;
              cResult[9] = items4;
              tmp14 = items4;
            }
            class I {
              constructor() {
                obj = closure_0(closure_2[11]);
                result = closure_2.set(obj.withTiming(closure_0, { duration: 500 }, "animate-always"));
                return;
              }
            }
            cResult[4] = sharedValue;
            cResult[5] = cResult[3];
            cResult[6] = I;
            tmp13 = I;
            const tmpResult6 = tmp(tmp2[4]);
          }
        }
      }
      num2 = 0;
      if (isCompleted) {
        let num3 = num2;
      } else {
        num3 = 0;
        if (totalSeconds > 0) {
          const diff = num2 - remainingSeconds / totalSeconds;
          num2 = diff;
          num3 = diff;
        }
      }
      cResult[num2] = remainingSeconds;
      cResult[2] = totalSeconds;
      num2 = 3;
      cResult[3] = num3;
      let obj = num2(sharedValue[10]);
    }
  : function BountiesModalTimer(arg0) {
      ({ isCompleted, totalSeconds, remainingSeconds } = arg0);
      _require = undefined;
      importDefault = undefined;
      let sharedValue;
      let sharedValue1;
      let sharedValue2;
      let ref;
      let tmp = closure_14();
      let tmp2 = isCompleted;
      if (!isCompleted) {
        tmp2 = remainingSeconds <= 0;
      }
      _require = tmp2;
      importDefault = 0;
      const bound = Math.max(1, Math.ceil(remainingSeconds));
      if (isCompleted) {
        importDefault = 1;
        let num2 = 1;
      } else {
        num2 = 0;
        if (totalSeconds > 0) {
          const diff = 1 - remainingSeconds / totalSeconds;
          importDefault = diff;
          num2 = diff;
        }
      }
      sharedValue = require("ReanimatedRexport").useSharedValue(num2);
      let obj = require("ReanimatedRexport");
      sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
      let obj2 = require("ReanimatedRexport");
      sharedValue2 = require("ReanimatedRexport").useSharedValue(0);
      let items = [sharedValue, num2];
      const effect = sharedValue1.useEffect(() => {
        const result = sharedValue.set(timing.withTiming(c1, { duration: 500 }, "animate-always"));
      }, items);
      ref = sharedValue1.useRef(false);
      const items1 = [tmp2, sharedValue1, sharedValue2];
      const effect1 = sharedValue1.useEffect(() => {
        ref.current = true;
        let tmp = sharedValue1;
        let withDelay = sharedValue1.set;
        if (closure_0) {
          if (ref.current) {
            const obj = ReanimatedRexport2;
            const obj3 = { duration: 267, easing };
            const withTimingResult = timing.withTiming(1.65, obj3);
            const obj5 = { duration: 233, easing: easing2 };
            withDelay(obj.withSequence(withTimingResult, timing.withTiming(1, obj5)));
            tmp = ReanimatedRexport2;
            withDelay = tmp.withDelay;
            const obj6 = ReanimatedRexport2;
            const obj8 = { duration: 167, easing: easing3 };
            const withTimingResult1 = timing.withTiming(1.25, obj8);
            const obj10 = { duration: 333, easing: easing3 };
            const result = sharedValue2.set(
              withDelay(167, obj6.withSequence(withTimingResult1, timing.withTiming(1, obj10))),
            );
          } else {
            withDelay(1);
            const result1 = sharedValue2.set(1);
          }
        } else {
          withDelay(0);
          const result2 = sharedValue2.set(0);
        }
      }, items1);
      let obj3 = require("ReanimatedRexport");
      const fn = function x() {
        return { strokeDashoffset: closure_9 - closure_9 * sharedValue.get() };
      };
      fn.__closure = { PROGRESS_CIRCUMFERENCE: strokeDasharray, animatedProgress: sharedValue };
      fn.__workletHash = 6710265460161;
      fn.__initData = __initData4;
      const animatedProps = require("ReanimatedRexport").useAnimatedProps(fn);
      let obj4 = require("ReanimatedRexport");
      let obj5 = { PROGRESS_CIRCUMFERENCE: strokeDasharray, animatedProgress: sharedValue };
      class U {
        constructor() {
          obj = { transform: null };
          obj1 = { scale: closure_3.get() };
          items = [];
          items[0] = obj1;
          obj.transform = items;
          return obj;
        }
      }
      U.__closure = { checkmarkBackgroundScale: sharedValue1 };
      U.__workletHash = 11453823104255;
      U.__initData = __initData5;
      const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(U);
      let obj6 = require("ReanimatedRexport");
      class P {
        constructor() {
          obj = { transform: null };
          obj1 = { scale: closure_4.get() };
          items = [];
          items[0] = obj1;
          obj.transform = items;
          return obj;
        }
      }
      P.__closure = { checkmarkScale: sharedValue2 };
      P.__workletHash = 14689280780412;
      P.__initData = __initData6;
      let obj8 = { style: tmp.progress, children: null };
      const animatedStyle1 = require("ReanimatedRexport").useAnimatedStyle(P);
      const size = { height: null, width: null, style: null, children: null };
      let obj7 = require("ReanimatedRexport");
      size.height = require("ButtonConstants").SMALL_BUTTON_HEIGHT;
      size.width = require("ButtonConstants").SMALL_BUTTON_HEIGHT;
      size.style = tmp.ring;
      const tmp18 = require("inlineStyles");
      const items2 = [
        ref(require("inlineStyles").Circle, {
          cx: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2,
          cy: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2,
          r,
          fill: "none",
          stroke: tmp.trackPath.color,
          strokeWidth: 4,
        }),
      ];
      let obj9 = {
        cx: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2,
        cy: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2,
        r,
        fill: "none",
        stroke: tmp.trackPath.color,
        strokeWidth: 4,
      };
      items2[1] = ref(closure_13, {
        cx: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2,
        cy: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2,
        r,
        fill: "none",
        stroke,
        strokeWidth: 4,
        strokeDasharray,
        strokeLinecap: "round",
        animatedProps,
      });
      size.children = items2;
      const items3 = [closure_6(tmp18, size), , ,];
      let tmp19Result = !tmp2;
      if (!tmp2) {
        const obj11 = {
          variant: "text-sm/semibold",
          style: tmp.countdownText,
          maxFontSizeMultiplier: 1,
          children: bound,
        };
        tmp19Result = tmp19(tmp5(tmp6[12]).Text, obj11);
      }
      items3[1] = tmp19Result;
      const obj12 = { style: null, children: ref(sharedValue2, { style: tmp.checkmarkBackground }) };
      const items4 = [tmp.checkmarkLayer, animatedStyle];
      obj12.style = items4;
      items3[2] = ref(require("ReanimatedRexport").View, obj12);
      const obj14 = { style: null, children: null };
      const items5 = [tmp.checkmarkLayer, animatedStyle1];
      obj14.style = items5;
      let obj10 = {
        cx: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2,
        cy: require("ButtonConstants").SMALL_BUTTON_HEIGHT / 2,
        r,
        fill: "none",
        stroke,
        strokeWidth: 4,
        strokeDasharray,
        strokeLinecap: "round",
        animatedProps,
      };
      const obj13 = { style: tmp.checkmarkBackground };
      obj14.children = ref(require("CheckmarkSmallBoldIcon").CheckmarkSmallBoldIcon, {
        size: "custom",
        color: require("native").colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT,
        style: tmp.checkmarkIcon,
      });
      items3[3] = ref(require("ReanimatedRexport").View, obj14);
      obj8.children = items3;
      return closure_6(sharedValue2, obj8);
    };

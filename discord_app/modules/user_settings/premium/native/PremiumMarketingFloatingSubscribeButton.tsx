// === Module 13320: PremiumMarketingFloatingSubscribeButton ===

// Module 13320 (PremiumMarketingFloatingSubscribeButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import Constants from "Constants" /* 1085 */;
import timing from "timing" /* 4897 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let View = react_native.View;
const VerticalGradient = Constants.VerticalGradient;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = 150;
let obj = { container: { position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 1 }, gradient: { position: "absolute", left: 0, right: 0, bottom: 0, top: -64 }, buttonContainer: obj2 };
obj2 = { marginLeft: "auto", marginRight: "auto", width: "100%", paddingHorizontal: 12, paddingTop: nativeDefault.space.PX_12 };
let closure_10 = createStyles.createStyles(obj);
const __initData = { code: "function PremiumMarketingFloatingSubscribeButtonTsx1(){const{withTiming,isVisible,useReducedMotion,FADE_DURATION_MS,ENTER_TRANSLATE_PX}=this.__closure;return{opacity:withTiming(isVisible.get()?1:0,{duration:useReducedMotion?0:FADE_DURATION_MS}),transform:[{translateY:withTiming(isVisible.get()?0:ENTER_TRANSLATE_PX,{duration:useReducedMotion?0:FADE_DURATION_MS})}]};}" };
const __initData2 = { code: "function PremiumMarketingFloatingSubscribeButtonTsx2(){const{isVisible}=this.__closure;return{pointerEvents:isVisible.get()?\"box-none\":\"none\",accessibilityElementsHidden:!isVisible.get(),importantForAccessibility:isVisible.get()?\"auto\":\"no-hide-descendants\"};}" };
const __initData3 = { code: "function PremiumMarketingFloatingSubscribeButtonTsx3(){const{withTiming,isVisible,useReducedMotion,FADE_DURATION_MS,ENTER_TRANSLATE_PX}=this.__closure;return{opacity:withTiming(isVisible.get()?1:0,{duration:useReducedMotion?0:FADE_DURATION_MS}),transform:[{translateY:withTiming(isVisible.get()?0:ENTER_TRANSLATE_PX,{duration:useReducedMotion?0:FADE_DURATION_MS})}]};}" };
const __initData4 = { code: "function PremiumMarketingFloatingSubscribeButtonTsx4(){const{isVisible}=this.__closure;return{pointerEvents:isVisible.get()?'box-none':'none',accessibilityElementsHidden:!isVisible.get(),importantForAccessibility:isVisible.get()?'auto':'no-hide-descendants'};}" };
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((backgroundColor) => {
  let buttonText;
  let isVisible;
  let items2;
  let openPayment;
  let stateFromStores;
  let style;
  let tmp12;
  let tmp6;
  let tmp7;
  let useReducedMotion;
  const obj = isVisible(576);
  const cResult = obj.c(31);
  ({ style, isVisible } = backgroundColor);
  backgroundColor = backgroundColor.backgroundColor;
  const tmp4 = closure_10();
  const bottom = stateFromStores(1618)().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    const fn = function h() {
      return useReducedMotion.useReducedMotion;
    };
    let num = 0;
    cResult[0] = items;
    let num2 = 1;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = isVisible(504);
  stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  const tmp5Result = stateFromStores(13318);
  ({ openPayment, buttonText } = tmp5Result(stateFromStores(6688).PREMIUM_MARKETING_FLOATING_CTA));
  tmp5Result(stateFromStores(6688).PREMIUM_MARKETING_FLOATING_CTA);
  if (cResult[2] !== backgroundColor) {
    const obj3 = tmp5(683)(backgroundColor);
    let num3 = 0;
    const alphaResult = obj3.alpha(0);
    const hexResult = alphaResult.hex();
    let num4 = 2;
    cResult[2] = backgroundColor;
    cResult[3] = hexResult;
    tmp12 = hexResult;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === backgroundColor) {
    let tmp14;
    if (cResult[5] === tmp12) {
      tmp14 = cResult[6];
    }
    const tmpResult3 = isVisible(4618);
    class F {
      constructor() {
        let items;
        const withTiming = timing.withTiming;
        let num = 0;
        timing;
        if (isVisible.get()) {
          num = 1;
        }
        let num2 = 0;
        if (!stateFromStores) {
          num2 = c9;
        }
        const obj2 = { opacity: withTiming(num, { duration: num2 }), transform: items };
        const withTiming2 = timing.withTiming;
        let num3 = 12;
        timing;
        if (isVisible.get()) {
          num3 = 0;
        }
        let num4 = 0;
        if (!stateFromStores) {
          num4 = c9;
        }
        items = [{ translateY: withTiming2(num3, { duration: num4 }) }];
        ({ translateY: withTiming2(num3, { duration: num4 }) });
        return obj2;
      }
    }
    let obj2 = { withTiming: isVisible(4897).withTiming, isVisible, useReducedMotion: stateFromStores, FADE_DURATION_MS, ENTER_TRANSLATE_PX: 12 };
    const useAnimatedStyle = tmpResult3.useAnimatedStyle;
    F.__closure = obj2;
    F.__workletHash = 4035217753570;
    F.__initData = __initData;
    const animatedStyle = useAnimatedStyle(F);
    const fn2 = function x() {
      let str2;
      let str = "none";
      if (isVisible.get()) {
        str = "box-none";
      }
      const obj2 = { pointerEvents: str, accessibilityElementsHidden: !isVisible.get(), importantForAccessibility: str2 };
      str2 = "no-hide-descendants";
      if (isVisible.get()) {
        str2 = "auto";
      }
      return obj2;
    };
    const obj4 = { isVisible };
    fn2.__closure = obj4;
    fn2.__workletHash = 3205490118921;
    fn2.__initData = __initData2;
    const tmpResult4 = isVisible(4618);
    const animatedProps = tmpResult4.useAnimatedProps(fn2);
    if (cResult[7] === animatedStyle) {
      let tmp21;
      let tmp23;
      if (cResult[8] === tmp4.container) {
        tmp21 = cResult[9];
      }
      const _Symbol = Symbol;
      class F {
        constructor() {
          let items;
          const withTiming = timing.withTiming;
          let num = 0;
          timing;
          if (isVisible.get()) {
            num = 1;
          }
          let num2 = 0;
          if (!stateFromStores) {
            num2 = c9;
          }
          const obj2 = { opacity: withTiming(num, { duration: num2 }), transform: items };
          const withTiming2 = timing.withTiming;
          let num3 = 12;
          timing;
          if (isVisible.get()) {
            num3 = 0;
          }
          let num4 = 0;
          if (!stateFromStores) {
            num4 = c9;
          }
          items = [{ translateY: withTiming2(num3, { duration: num4 }) }];
          ({ translateY: withTiming2(num3, { duration: num4 }) });
          return obj2;
        }
      }
      if (tmp22 === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [0, 0.75, 1];
        class F {
          constructor() {
            let items;
            const withTiming = timing.withTiming;
            let num = 0;
            timing;
            if (isVisible.get()) {
              num = 1;
            }
            let num2 = 0;
            if (!stateFromStores) {
              num2 = c9;
            }
            const obj2 = { opacity: withTiming(num, { duration: num2 }), transform: items };
            const withTiming2 = timing.withTiming;
            let num3 = 12;
            timing;
            if (isVisible.get()) {
              num3 = 0;
            }
            let num4 = 0;
            if (!stateFromStores) {
              num4 = c9;
            }
            items = [{ translateY: withTiming2(num3, { duration: num4 }) }];
            ({ translateY: withTiming2(num3, { duration: num4 }) });
            return obj2;
          }
        }
        tmp23 = items1;
      } else {
        tmp23 = cResult[10];
      }
      if (cResult[11] === tmp14) {
        let tmp24;
        let tmp30;
        if (cResult[12] === tmp4.gradient) {
          tmp24 = cResult[13];
        }
        const _Math = Math;
        class F {
          constructor() {
            let items;
            const withTiming = timing.withTiming;
            let num = 0;
            timing;
            if (isVisible.get()) {
              num = 1;
            }
            let num2 = 0;
            if (!stateFromStores) {
              num2 = c9;
            }
            const obj2 = { opacity: withTiming(num, { duration: num2 }), transform: items };
            const withTiming2 = timing.withTiming;
            let num3 = 12;
            timing;
            if (isVisible.get()) {
              num3 = 0;
            }
            let num4 = 0;
            if (!stateFromStores) {
              num4 = c9;
            }
            items = [{ translateY: withTiming2(num3, { duration: num4 }) }];
            ({ translateY: withTiming2(num3, { duration: num4 }) });
            return obj2;
          }
        }
        const bound = Math.max(bottom, tmp5(587).space.PX_16);
        if (cResult[14] !== bound) {
          const obj5 = { paddingBottom: bound };
          class F {
            constructor() {
              let items;
              const withTiming = timing.withTiming;
              let num = 0;
              timing;
              if (isVisible.get()) {
                num = 1;
              }
              let num2 = 0;
              if (!stateFromStores) {
                num2 = c9;
              }
              const obj2 = { opacity: withTiming(num, { duration: num2 }), transform: items };
              const withTiming2 = timing.withTiming;
              let num3 = 12;
              timing;
              if (isVisible.get()) {
                num3 = 0;
              }
              let num4 = 0;
              if (!stateFromStores) {
                num4 = c9;
              }
              items = [{ translateY: withTiming2(num3, { duration: num4 }) }];
              ({ translateY: withTiming2(num3, { duration: num4 }) });
              return obj2;
            }
          }
          cResult[14] = bound;
          cResult[15] = obj5;
          tmp30 = obj5;
        } else {
          tmp30 = cResult[15];
        }
        if (cResult[16] === style) {
          if (cResult[17] === tmp4.buttonContainer) {
            let tmp31;
            if (cResult[18] === tmp30) {
              tmp31 = cResult[19];
            }
            if (cResult[20] === buttonText) {
              let tmp32;
              if (cResult[21] === openPayment) {
                tmp32 = cResult[22];
              }
              if (cResult[23] === tmp31) {
                let tmp34;
                if (cResult[24] === tmp32) {
                  tmp34 = cResult[25];
                }
                if (cResult[26] === animatedProps) {
                  if (cResult[27] === tmp34) {
                    if (cResult[28] === tmp21) {
                      let tmp37;
                      if (cResult[29] === tmp24) {
                        tmp37 = cResult[30];
                      }
                      return tmp37;
                    }
                  }
                }
                class F {
                  constructor() {
                    let items;
                    const withTiming = timing.withTiming;
                    let num = 0;
                    timing;
                    if (isVisible.get()) {
                      num = 1;
                    }
                    let num2 = 0;
                    if (!stateFromStores) {
                      num2 = c9;
                    }
                    const obj2 = { opacity: withTiming(num, { duration: num2 }), transform: items };
                    const withTiming2 = timing.withTiming;
                    let num3 = 12;
                    timing;
                    if (isVisible.get()) {
                      num3 = 0;
                    }
                    let num4 = 0;
                    if (!stateFromStores) {
                      num4 = c9;
                    }
                    items = [{ translateY: withTiming2(num3, { duration: num4 }) }];
                    ({ translateY: withTiming2(num3, { duration: num4 }) });
                    return obj2;
                  }
                }
                const obj6 = { animatedProps, style: tmp21, children: items2 };
                items2 = [tmp24, tmp34];
                const tmp38 = closure_8(stateFromStores(4618).View, obj6);
                cResult[26] = animatedProps;
                cResult[27] = tmp34;
                cResult[28] = tmp21;
                cResult[29] = tmp24;
                cResult[30] = tmp38;
                tmp37 = tmp38;
              }
              class F {
                constructor() {
                  let items;
                  const withTiming = timing.withTiming;
                  let num = 0;
                  timing;
                  if (isVisible.get()) {
                    num = 1;
                  }
                  let num2 = 0;
                  if (!stateFromStores) {
                    num2 = c9;
                  }
                  const obj2 = { opacity: withTiming(num, { duration: num2 }), transform: items };
                  const withTiming2 = timing.withTiming;
                  let num3 = 12;
                  timing;
                  if (isVisible.get()) {
                    num3 = 0;
                  }
                  let num4 = 0;
                  if (!stateFromStores) {
                    num4 = c9;
                  }
                  items = [{ translateY: withTiming2(num3, { duration: num4 }) }];
                  ({ translateY: withTiming2(num3, { duration: num4 }) });
                  return obj2;
                }
              }
              const obj7 = { style: tmp31, children: tmp32 };
              const tmp36 = closure_7(View, obj7);
              cResult[23] = tmp31;
              cResult[24] = tmp32;
              cResult[25] = tmp36;
              tmp34 = tmp36;
            }
            class F {
              constructor() {
                let items;
                const withTiming = timing.withTiming;
                let num = 0;
                timing;
                if (isVisible.get()) {
                  num = 1;
                }
                let num2 = 0;
                if (!stateFromStores) {
                  num2 = c9;
                }
                const obj2 = { opacity: withTiming(num, { duration: num2 }), transform: items };
                const withTiming2 = timing.withTiming;
                let num3 = 12;
                timing;
                if (isVisible.get()) {
                  num3 = 0;
                }
                let num4 = 0;
                if (!stateFromStores) {
                  num4 = c9;
                }
                items = [{ translateY: withTiming2(num3, { duration: num4 }) }];
                ({ translateY: withTiming2(num3, { duration: num4 }) });
                return obj2;
              }
            }
            const obj9 = { onPress: openPayment, text: buttonText };
            const tmp33 = closure_7(stateFromStores(9661), obj9);
            cResult[20] = buttonText;
            cResult[21] = openPayment;
            cResult[22] = tmp33;
            tmp32 = tmp33;
          }
        }
        const items3 = [tmp28, tmp30, style];
        cResult[16] = style;
        cResult[17] = tmp4.buttonContainer;
        cResult[18] = tmp30;
        cResult[19] = items3;
        tmp31 = items3;
      }
      const obj10 = { pointerEvents: "none", style: tmp4.gradient, colors: tmp14, locations: tmp23, start: null, end: null };
      ({ START: obj8.start, END: obj8.end } = VerticalGradient);
      const tmp27 = closure_7(stateFromStores(5612), obj10);
      cResult[11] = tmp14;
      cResult[12] = tmp4.gradient;
      cResult[13] = tmp27;
      tmp24 = tmp27;
    }
    const items4 = [tmp4.container, animatedStyle];
    cResult[7] = animatedStyle;
    cResult[8] = tmp4.container;
    cResult[9] = items4;
    tmp21 = items4;
  }
  const items5 = [tmp12, backgroundColor, backgroundColor];
  cResult[4] = backgroundColor;
  cResult[5] = tmp12;
  cResult[6] = items5;
  tmp14 = items5;
}) : ((isVisible) => {
  let buttonText;
  let items2;
  let items3;
  let items4;
  let openPayment;
  let useReducedMotion;
  isVisible = isVisible.isVisible;
  const backgroundColor = isVisible.backgroundColor;
  let stateFromStores;
  const style = isVisible.style;
  const tmp = closure_10();
  const bottom = backgroundColor(stateFromStores[9])().bottom;
  let obj = isVisible(stateFromStores[10]);
  let items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp3 = backgroundColor(stateFromStores[11]);
  const items1 = [backgroundColor];
  ({ openPayment, buttonText } = tmp3(backgroundColor(stateFromStores[12]).PREMIUM_MARKETING_FLOATING_CTA));
  tmp3(backgroundColor(stateFromStores[12]).PREMIUM_MARKETING_FLOATING_CTA);
  const memo = react.useMemo(() => {
    const items = [, , ];
    const obj = _modDef683(backgroundColor);
    const alphaResult = obj.alpha(0);
    items[0] = alphaResult.hex();
    items[1] = backgroundColor;
    items[2] = backgroundColor;
    return items;
  }, items1);
  let obj2 = isVisible(stateFromStores[14]);
  class R {
    constructor() {
      let items;
      const withTiming = timing.withTiming;
      let num = 0;
      timing;
      if (isVisible.get()) {
        num = 1;
      }
      let num2 = 0;
      if (!stateFromStores) {
        num2 = c9;
      }
      const obj2 = { opacity: withTiming(num, { duration: num2 }), transform: items };
      const withTiming2 = timing.withTiming;
      let num3 = 12;
      timing;
      if (isVisible.get()) {
        num3 = 0;
      }
      let num4 = 0;
      if (!stateFromStores) {
        num4 = c9;
      }
      items = [{ translateY: withTiming2(num3, { duration: num4 }) }];
      ({ translateY: withTiming2(num3, { duration: num4 }) });
      return obj2;
    }
  }
  const obj3 = { withTiming: isVisible(stateFromStores[15]).withTiming, isVisible, useReducedMotion: stateFromStores, FADE_DURATION_MS, ENTER_TRANSLATE_PX: 12 };
  R.__closure = obj3;
  R.__workletHash = 1724809739168;
  R.__initData = __initData3;
  const animatedStyle = obj2.useAnimatedStyle(R);
  const fn = function p() {
    let str2;
    let str = "none";
    if (isVisible.get()) {
      str = "box-none";
    }
    const obj2 = { pointerEvents: str, accessibilityElementsHidden: !isVisible.get(), importantForAccessibility: str2 };
    str2 = "no-hide-descendants";
    if (isVisible.get()) {
      str2 = "auto";
    }
    return obj2;
  };
  fn.__closure = { isVisible };
  fn.__workletHash = 16629588252591;
  fn.__initData = __initData4;
  const obj4 = isVisible(stateFromStores[14]);
  const animatedProps = obj4.useAnimatedProps(fn);
  const obj5 = { animatedProps, style: items2, children: items3 };
  items2 = [tmp.container, animatedStyle];
  View = backgroundColor(stateFromStores[14]).View;
  items3 = [, ];
  const obj6 = { pointerEvents: "none", style: tmp.gradient, colors: memo, locations: [0, 0.75, 1], start: VerticalGradient.START, end: VerticalGradient.END };
  items3[0] = closure_7(backgroundColor(stateFromStores[16]), obj6);
  const obj7 = { style: items4, children: closure_7(backgroundColor(stateFromStores[17]), { onPress: openPayment, text: buttonText }) };
  items4 = [tmp.buttonContainer, { paddingBottom: Math.max(bottom, backgroundColor(stateFromStores[6]).space.PX_16) }, style];
  ({ paddingBottom: Math.max(bottom, backgroundColor(stateFromStores[6]).space.PX_16) });
  items3[1] = closure_7(View, obj7);
  return closure_8(View, obj5);
});
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumMarketingFloatingSubscribeButton.tsx");

export default tmp3;
// discord_app/modules/user_settings/premium/native/PremiumMarketingFloatingSubscribeButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../_runtime/metro/00683__.js";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
const View = fn(17).View;
const VerticalGradient = fn(1085).VerticalGradient;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = 150;
const createStyles = fn(4896);
let obj2 = {
  container: { position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 1 },
  gradient: { position: "absolute", left: 0, right: 0, bottom: 0, top: -64 },
  buttonContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    paddingHorizontal: 12,
    paddingTop: nativeDefault.space.PX_12,
  },
};
let closure_10 = createStyles.createStyles(obj2);
const __initData = {
  code: "function PremiumMarketingFloatingSubscribeButtonTsx1(){const{withTiming,isVisible,useReducedMotion,FADE_DURATION_MS,ENTER_TRANSLATE_PX}=this.__closure;return{opacity:withTiming(isVisible.get()?1:0,{duration:useReducedMotion?0:FADE_DURATION_MS}),transform:[{translateY:withTiming(isVisible.get()?0:ENTER_TRANSLATE_PX,{duration:useReducedMotion?0:FADE_DURATION_MS})}]};}",
};
const __initData2 = {
  code: 'function PremiumMarketingFloatingSubscribeButtonTsx2(){const{isVisible}=this.__closure;return{pointerEvents:isVisible.get()?"box-none":"none",accessibilityElementsHidden:!isVisible.get(),importantForAccessibility:isVisible.get()?"auto":"no-hide-descendants"};}',
};
const __initData3 = {
  code: "function PremiumMarketingFloatingSubscribeButtonTsx3(){const{withTiming,isVisible,useReducedMotion,FADE_DURATION_MS,ENTER_TRANSLATE_PX}=this.__closure;return{opacity:withTiming(isVisible.get()?1:0,{duration:useReducedMotion?0:FADE_DURATION_MS}),transform:[{translateY:withTiming(isVisible.get()?0:ENTER_TRANSLATE_PX,{duration:useReducedMotion?0:FADE_DURATION_MS})}]};}",
};
const __initData4 = {
  code: "function PremiumMarketingFloatingSubscribeButtonTsx4(){const{isVisible}=this.__closure;return{pointerEvents:isVisible.get()?'box-none':'none',accessibilityElementsHidden:!isVisible.get(),importantForAccessibility:isVisible.get()?'auto':'no-hide-descendants'};}",
};
const ReactCompilerGating = fn(558);
let obj3 = {
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
  paddingHorizontal: 12,
  paddingTop: nativeDefault.space.PX_12,
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/premium/native/PremiumMarketingFloatingSubscribeButton.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (backgroundColor) => {
      const cResult = isVisible(576).c(31);
      ({ style, isVisible } = backgroundColor);
      backgroundColor = backgroundColor.backgroundColor;
      const tmp4 = closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [AccessibilityStore];
        const fn = function h() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      let obj = isVisible(576);
      const stateFromStores = isVisible(504).useStateFromStores(tmp6, tmp7);
      let tmpResult = isVisible(504);
      const tmp5Result = stateFromStores(13318);
      ({ openPayment, buttonText } = stateFromStores(13318)(stateFromStores(6688).PREMIUM_MARKETING_FLOATING_CTA));
      if (cResult[2] !== backgroundColor) {
        let obj3 = tmp5(683)(backgroundColor);
        const hexResult = tmp5(683)(backgroundColor).alpha(0).hex();
        cResult[2] = backgroundColor;
        cResult[3] = hexResult;
        let tmp12 = hexResult;
        const alphaResult = tmp5(683)(backgroundColor).alpha(0);
      } else {
        tmp12 = cResult[3];
      }
      if (cResult[4] === backgroundColor) {
        if (cResult[5] === tmp12) {
          let tmp14 = cResult[6];
        }
        class F {
          constructor() {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[15]);
            obj2 = isVisible;
            num = 0;
            if (isVisible.get()) {
              num = 1;
            }
            num2 = 0;
            tmp3 = closure_1;
            if (!closure_1) {
              num2 = c9;
            }
            obj1 = { opacity: obj.withTiming(num, { duration: num2 }), transform: null };
            tmpResult = tmp(tmp2[15]);
            num3 = 12;
            if (obj2.get()) {
              num3 = 0;
            }
            num4 = 0;
            if (!tmp3) {
              num4 = c9;
            }
            obj6 = { translateY: tmpResult.withTiming(num3, { duration: num4 }) };
            items = [];
            items[0] = obj6;
            obj1.transform = items;
            return obj1;
          }
        }
        let obj2 = {
          withTiming: isVisible(4897).withTiming,
          isVisible,
          useReducedMotion: stateFromStores,
          FADE_DURATION_MS,
          ENTER_TRANSLATE_PX: 12,
        };
        F.__closure = obj2;
        F.__workletHash = 4035217753570;
        F.__initData = __initData;
        const animatedStyle = isVisible(4618).useAnimatedStyle(F);
        const tmpResult3 = isVisible(4618);
        const fn2 = function x() {
          let str = "none";
          if (isVisible.get()) {
            str = "box-none";
          }
          const obj2 = {
            pointerEvents: str,
            accessibilityElementsHidden: !isVisible.get(),
            importantForAccessibility: null,
          };
          let str2 = "no-hide-descendants";
          if (isVisible.get()) {
            str2 = "auto";
          }
          obj2.importantForAccessibility = str2;
          return obj2;
        };
        const obj4 = { isVisible };
        fn2.__closure = obj4;
        fn2.__workletHash = 3205490118921;
        fn2.__initData = __initData2;
        const animatedProps = isVisible(4618).useAnimatedProps(fn2);
        if (cResult[7] === animatedStyle) {
          if (cResult[8] === tmp4.container) {
            let tmp20 = cResult[9];
          }
          const _Symbol = Symbol;
          class F {
            constructor() {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[15]);
              obj2 = isVisible;
              num = 0;
              if (isVisible.get()) {
                num = 1;
              }
              num2 = 0;
              tmp3 = closure_1;
              if (!closure_1) {
                num2 = c9;
              }
              obj1 = { opacity: obj.withTiming(num, { duration: num2 }), transform: null };
              tmpResult = tmp(tmp2[15]);
              num3 = 12;
              if (obj2.get()) {
                num3 = 0;
              }
              num4 = 0;
              if (!tmp3) {
                num4 = c9;
              }
              obj6 = { translateY: tmpResult.withTiming(num3, { duration: num4 }) };
              items = [];
              items[0] = obj6;
              obj1.transform = items;
              return obj1;
            }
          }
          if (tmp21 === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [0, 0.75, 1];
            class F {
              constructor() {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[15]);
                obj2 = isVisible;
                num = 0;
                if (isVisible.get()) {
                  num = 1;
                }
                num2 = 0;
                tmp3 = closure_1;
                if (!closure_1) {
                  num2 = c9;
                }
                obj1 = { opacity: obj.withTiming(num, { duration: num2 }), transform: null };
                tmpResult = tmp(tmp2[15]);
                num3 = 12;
                if (obj2.get()) {
                  num3 = 0;
                }
                num4 = 0;
                if (!tmp3) {
                  num4 = c9;
                }
                obj6 = { translateY: tmpResult.withTiming(num3, { duration: num4 }) };
                items = [];
                items[0] = obj6;
                obj1.transform = items;
                return obj1;
              }
            }
            let tmp22 = items1;
          } else {
            tmp22 = cResult[10];
          }
          if (cResult[11] === tmp14) {
            if (cResult[12] === tmp4.gradient) {
              let tmp23 = cResult[13];
            }
            const _Math = Math;
            class F {
              constructor() {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[15]);
                obj2 = isVisible;
                num = 0;
                if (isVisible.get()) {
                  num = 1;
                }
                num2 = 0;
                tmp3 = closure_1;
                if (!closure_1) {
                  num2 = c9;
                }
                obj1 = { opacity: obj.withTiming(num, { duration: num2 }), transform: null };
                tmpResult = tmp(tmp2[15]);
                num3 = 12;
                if (obj2.get()) {
                  num3 = 0;
                }
                num4 = 0;
                if (!tmp3) {
                  num4 = c9;
                }
                obj6 = { translateY: tmpResult.withTiming(num3, { duration: num4 }) };
                items = [];
                items[0] = obj6;
                obj1.transform = items;
                return obj1;
              }
            }
            const bound = Math.max(stateFromStores(1618)().bottom, tmp5(587).space.PX_16);
            if (cResult[14] !== bound) {
              const obj5 = { paddingBottom: bound };
              class F {
                constructor() {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj = closure_0(closure_2[15]);
                  obj2 = isVisible;
                  num = 0;
                  if (isVisible.get()) {
                    num = 1;
                  }
                  num2 = 0;
                  tmp3 = closure_1;
                  if (!closure_1) {
                    num2 = c9;
                  }
                  obj1 = { opacity: obj.withTiming(num, { duration: num2 }), transform: null };
                  tmpResult = tmp(tmp2[15]);
                  num3 = 12;
                  if (obj2.get()) {
                    num3 = 0;
                  }
                  num4 = 0;
                  if (!tmp3) {
                    num4 = c9;
                  }
                  obj6 = { translateY: tmpResult.withTiming(num3, { duration: num4 }) };
                  items = [];
                  items[0] = obj6;
                  obj1.transform = items;
                  return obj1;
                }
              }
              cResult[14] = bound;
              cResult[15] = obj5;
              let tmp29 = obj5;
            } else {
              tmp29 = cResult[15];
            }
            if (cResult[16] === style) {
              if (cResult[17] === tmp4.buttonContainer) {
                if (cResult[18] === tmp29) {
                  let tmp30 = cResult[19];
                }
                if (cResult[20] === buttonText) {
                  if (cResult[21] === openPayment) {
                    let tmp31 = cResult[22];
                  }
                  if (cResult[23] === tmp30) {
                    if (cResult[24] === tmp31) {
                      let tmp33 = cResult[25];
                    }
                    if (cResult[26] === animatedProps) {
                      if (cResult[27] === tmp33) {
                        if (cResult[28] === tmp20) {
                          if (cResult[29] === tmp23) {
                            let tmp36 = cResult[30];
                          }
                          return tmp36;
                        }
                      }
                    }
                    class F {
                      constructor() {
                        tmp = closure_0;
                        tmp2 = closure_2;
                        obj = closure_0(closure_2[15]);
                        obj2 = isVisible;
                        num = 0;
                        if (isVisible.get()) {
                          num = 1;
                        }
                        num2 = 0;
                        tmp3 = closure_1;
                        if (!closure_1) {
                          num2 = c9;
                        }
                        obj1 = { opacity: obj.withTiming(num, { duration: num2 }), transform: null };
                        tmpResult = tmp(tmp2[15]);
                        num3 = 12;
                        if (obj2.get()) {
                          num3 = 0;
                        }
                        num4 = 0;
                        if (!tmp3) {
                          num4 = c9;
                        }
                        obj6 = { translateY: tmpResult.withTiming(num3, { duration: num4 }) };
                        items = [];
                        items[0] = obj6;
                        obj1.transform = items;
                        return obj1;
                      }
                    }
                    const obj6 = { animatedProps, style: tmp20, children: null };
                    const items2 = [tmp23, tmp33];
                    obj6.children = items2;
                    const tmp37 = closure_8(tmp5(4618).View, obj6);
                    cResult[26] = animatedProps;
                    cResult[27] = tmp33;
                    cResult[28] = tmp20;
                    cResult[29] = tmp23;
                    cResult[30] = tmp37;
                    tmp36 = tmp37;
                  }
                  class F {
                    constructor() {
                      tmp = closure_0;
                      tmp2 = closure_2;
                      obj = closure_0(closure_2[15]);
                      obj2 = isVisible;
                      num = 0;
                      if (isVisible.get()) {
                        num = 1;
                      }
                      num2 = 0;
                      tmp3 = closure_1;
                      if (!closure_1) {
                        num2 = c9;
                      }
                      obj1 = { opacity: obj.withTiming(num, { duration: num2 }), transform: null };
                      tmpResult = tmp(tmp2[15]);
                      num3 = 12;
                      if (obj2.get()) {
                        num3 = 0;
                      }
                      num4 = 0;
                      if (!tmp3) {
                        num4 = c9;
                      }
                      obj6 = { translateY: tmpResult.withTiming(num3, { duration: num4 }) };
                      items = [];
                      items[0] = obj6;
                      obj1.transform = items;
                      return obj1;
                    }
                  }
                  const obj7 = { style: tmp30, children: tmp31 };
                  const tmp35 = closure_7(View, obj7);
                  cResult[23] = tmp30;
                  cResult[24] = tmp31;
                  cResult[25] = tmp35;
                  tmp33 = tmp35;
                }
                class F {
                  constructor() {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj = closure_0(closure_2[15]);
                    obj2 = isVisible;
                    num = 0;
                    if (isVisible.get()) {
                      num = 1;
                    }
                    num2 = 0;
                    tmp3 = closure_1;
                    if (!closure_1) {
                      num2 = c9;
                    }
                    obj1 = { opacity: obj.withTiming(num, { duration: num2 }), transform: null };
                    tmpResult = tmp(tmp2[15]);
                    num3 = 12;
                    if (obj2.get()) {
                      num3 = 0;
                    }
                    num4 = 0;
                    if (!tmp3) {
                      num4 = c9;
                    }
                    obj6 = { translateY: tmpResult.withTiming(num3, { duration: num4 }) };
                    items = [];
                    items[0] = obj6;
                    obj1.transform = items;
                    return obj1;
                  }
                }
                const obj8 = { onPress: openPayment, text: buttonText };
                const tmp32 = closure_7(tmp5(9661), obj8);
                cResult[20] = buttonText;
                cResult[21] = openPayment;
                cResult[22] = tmp32;
                tmp31 = tmp32;
              }
            }
            const items3 = [tmp27, tmp29, style];
            cResult[16] = style;
            cResult[17] = tmp4.buttonContainer;
            cResult[18] = tmp29;
            cResult[19] = items3;
            tmp30 = items3;
          }
          const obj10 = {
            pointerEvents: "none",
            style: tmp4.gradient,
            colors: tmp14,
            locations: tmp22,
            start: null,
            end: null,
          };
          ({ START: obj9.start, END: obj9.end } = VerticalGradient);
          const tmp26 = closure_7(tmp5(5612), obj10);
          cResult[11] = tmp14;
          cResult[12] = tmp4.gradient;
          cResult[13] = tmp26;
          tmp23 = tmp26;
        }
        const items4 = [tmp4.container, animatedStyle];
        cResult[7] = animatedStyle;
        cResult[8] = tmp4.container;
        cResult[9] = items4;
        tmp20 = items4;
        const tmpResult4 = isVisible(4618);
      }
      const items5 = [tmp12, backgroundColor, backgroundColor];
      cResult[4] = backgroundColor;
      cResult[5] = tmp12;
      cResult[6] = items5;
      tmp14 = items5;
      const tmp5ResultResult = stateFromStores(13318)(stateFromStores(6688).PREMIUM_MARKETING_FLOATING_CTA);
    }
  : (isVisible) => {
      isVisible = isVisible.isVisible;
      const backgroundColor = isVisible.backgroundColor;
      let stateFromStores;
      const tmp = closure_10();
      let items = [AccessibilityStore];
      stateFromStores = isVisible(stateFromStores[10]).useStateFromStores(
        items,
        () => useReducedMotion.useReducedMotion,
      );
      let obj = isVisible(stateFromStores[10]);
      const tmp3 = backgroundColor(stateFromStores[11]);
      const items1 = [backgroundColor];
      ({ openPayment, buttonText } = backgroundColor(stateFromStores[11])(
        backgroundColor(stateFromStores[12]).PREMIUM_MARKETING_FLOATING_CTA,
      ));
      const memo = noop.useMemo(() => {
        const obj = _modDef683(backgroundColor);
        const items = [_modDef683(backgroundColor).alpha(0).hex(), backgroundColor, backgroundColor];
        return items;
      }, items1);
      const tmp3Result = backgroundColor(stateFromStores[11])(
        backgroundColor(stateFromStores[12]).PREMIUM_MARKETING_FLOATING_CTA,
      );
      class R {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[15]);
          obj2 = isVisible;
          num = 0;
          if (isVisible.get()) {
            num = 1;
          }
          num2 = 0;
          tmp3 = closure_2;
          if (!closure_2) {
            num2 = c9;
          }
          obj1 = { opacity: obj.withTiming(num, { duration: num2 }), transform: null };
          tmpResult = tmp(tmp2[15]);
          num3 = 12;
          if (obj2.get()) {
            num3 = 0;
          }
          num4 = 0;
          if (!tmp3) {
            num4 = c9;
          }
          obj6 = { translateY: tmpResult.withTiming(num3, { duration: num4 }) };
          items = [];
          items[0] = obj6;
          obj1.transform = items;
          return obj1;
        }
      }
      let obj2 = isVisible(stateFromStores[14]);
      R.__closure = {
        withTiming: isVisible(stateFromStores[15]).withTiming,
        isVisible,
        useReducedMotion: stateFromStores,
        FADE_DURATION_MS,
        ENTER_TRANSLATE_PX: 12,
      };
      R.__workletHash = 1724809739168;
      R.__initData = __initData3;
      const animatedStyle = obj2.useAnimatedStyle(R);
      let obj3 = {
        withTiming: isVisible(stateFromStores[15]).withTiming,
        isVisible,
        useReducedMotion: stateFromStores,
        FADE_DURATION_MS,
        ENTER_TRANSLATE_PX: 12,
      };
      const fn = function p() {
        let str = "none";
        if (isVisible.get()) {
          str = "box-none";
        }
        const obj2 = {
          pointerEvents: str,
          accessibilityElementsHidden: !isVisible.get(),
          importantForAccessibility: null,
        };
        let str2 = "no-hide-descendants";
        if (isVisible.get()) {
          str2 = "auto";
        }
        obj2.importantForAccessibility = str2;
        return obj2;
      };
      fn.__closure = { isVisible };
      fn.__workletHash = 16629588252591;
      fn.__initData = __initData4;
      const animatedProps = isVisible(stateFromStores[14]).useAnimatedProps(fn);
      const obj5 = { animatedProps, style: null, children: null };
      const items2 = [tmp.container, animatedStyle];
      obj5.style = items2;
      const items3 = [
        closure_7(backgroundColor(stateFromStores[16]), {
          pointerEvents: "none",
          style: tmp.gradient,
          colors: memo,
          locations: [0, 0.75, 1],
          start: VerticalGradient.START,
          end: VerticalGradient.END,
        }),
      ];
      const obj7 = { style: null, children: null };
      const items4 = [tmp.buttonContainer, ,];
      const obj4 = isVisible(stateFromStores[14]);
      const obj6 = {
        pointerEvents: "none",
        style: tmp.gradient,
        colors: memo,
        locations: [0, 0.75, 1],
        start: VerticalGradient.START,
        end: VerticalGradient.END,
      };
      items4[1] = {
        paddingBottom: Math.max(
          backgroundColor(stateFromStores[9])().bottom,
          backgroundColor(stateFromStores[6]).space.PX_16,
        ),
      };
      items4[2] = isVisible.style;
      obj7.style = items4;
      obj7.children = closure_7(backgroundColor(stateFromStores[17]), { onPress: openPayment, text: buttonText });
      items3[1] = closure_7(View, obj7);
      obj5.children = items3;
      return closure_8(backgroundColor(stateFromStores[14]).View, obj5);
    };

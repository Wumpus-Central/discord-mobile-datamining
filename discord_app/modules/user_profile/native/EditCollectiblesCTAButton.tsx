// discord_app/modules/user_profile/native/EditCollectiblesCTAButton.tsx
import util from "../../../intl/index.native.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import CollectiblesActionCreators from "../../collectibles/CollectiblesActionCreators.tsx";
import EditCollectiblesActionCreators from "EditCollectiblesActionCreators.tsx";
import openProductDetailsActionSheet from "../../collectibles/native/openProductDetailsActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
let closure_5 = fn(1087).CollectiblesMobileShopScreen;
let closure_6 = fn(1627).MEDIA_PICKER_SEND_BUTTON_SPRING;
const jsx = fn(21).jsx;
let c8 = 0.9;
const createStyles = fn(5092);
let closure_9 = createStyles.createStyles({
  buttonRowContainer: {
    flexGrow: 0,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 12,
    height: 48,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    marginLeft: 24,
    marginRight: 24,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
});
const __initData = {
  code: "function EditCollectiblesCTAButtonTsx1(){const{shouldShowButton,APPLY_BUTTON_BOUNCE_DISTANCE,APPLY_BUTTON_SCALE_TRANSITION,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetTranslateY=shouldShowButton.get()?0:APPLY_BUTTON_BOUNCE_DISTANCE;const targetScale=shouldShowButton.get()?1:APPLY_BUTTON_SCALE_TRANSITION;return{transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}]};}",
};
const __initData2 = {
  code: 'function EditCollectiblesCTAButtonTsx2(){const{shouldShowButton}=this.__closure;return{pointerEvents:shouldShowButton.get()?"box-none":"none"};}',
};
const __initData3 = {
  code: "function EditCollectiblesCTAButtonTsx3(){const{shouldShowButton,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=shouldShowButton.get()?1:0;return{opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,{...MEDIA_PICKER_SEND_BUTTON_SPRING,overshootClamping:true})};}",
};
const __initData4 = {
  code: "function EditCollectiblesCTAButtonTsx4(){const{shouldShowButton,APPLY_BUTTON_BOUNCE_DISTANCE,APPLY_BUTTON_SCALE_TRANSITION,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetTranslateY=shouldShowButton.get()?0:APPLY_BUTTON_BOUNCE_DISTANCE;const targetScale=shouldShowButton.get()?1:APPLY_BUTTON_SCALE_TRANSITION;return{transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}]};}",
};
const __initData5 = {
  code: "function EditCollectiblesCTAButtonTsx5(){const{shouldShowButton}=this.__closure;return{pointerEvents:shouldShowButton.get()?'box-none':'none'};}",
};
const __initData6 = {
  code: "function EditCollectiblesCTAButtonTsx6(){const{shouldShowButton,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=shouldShowButton.get()?1:0;return{opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,{...MEDIA_PICKER_SEND_BUTTON_SPRING,overshootClamping:true})};}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesCTAButton.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function EditCollectiblesCTAButton(selectedSkuId) {
        const cResult = currentSkuId(onApply[7]).c(47);
        ({ user, currentSkuId } = selectedSkuId);
        selectedSkuId = selectedSkuId.selectedSkuId;
        ({ isTryItOut, onApply } = selectedSkuId);
        const analyticsLocations = selectedSkuId.analyticsLocations;
        const analyticsSource = selectedSkuId.analyticsSource;
        const tmp4 = isShopStandalonePdpMobileEnabled();
        const bottom = selectedSkuId(onApply[8])().bottom;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [analyticsSource];
          class P {
            constructor() {
              return analyticsSource.useReducedMotion;
            }
          }
          cResult[0] = items;
          cResult[1] = P;
          tmp6 = items;
        } else {
          [tmp6, tmp7] = cResult;
        }
        let obj = currentSkuId(onApply[7]);
        const stateFromStores = currentSkuId(onApply[9]).useStateFromStores(tmp6, P);
        const tmpResult = currentSkuId(onApply[9]);
        ({ product, purchase } = selectedSkuId(onApply[10])(selectedSkuId));
        const tmp10 = selectedSkuId(onApply[10])(selectedSkuId);
        const sharedValue = currentSkuId(onApply[11]).useSharedValue(false);
        if (cResult[2] === currentSkuId) {
          if (cResult[3] === selectedSkuId) {
            if (cResult[4] === sharedValue) {
              let tmp12 = cResult[5];
              let tmp13 = cResult[6];
            }
            const effect = analyticsLocations.useEffect(tmp12, tmp13);
            class P {
              constructor() {
                return analyticsSource.useReducedMotion;
              }
            }
            const fn = function x() {
              let num = 60;
              if (sharedValue.get()) {
                num = 0;
              }
              let num2 = 1;
              if (!sharedValue.get()) {
                num2 = c8;
              }
              let withSpringResult = num;
              if (!stateFromStores) {
                withSpringResult = spring.withSpring(num, closure_6);
              }
              const transform = [{ translateY: withSpringResult }];
              let withSpringResult1 = num2;
              if (!stateFromStores) {
                withSpringResult1 = spring.withSpring(num2, closure_6);
              }
              transform[1] = { scale: withSpringResult1 };
              return { transform };
            };
            let obj2 = {
              shouldShowButton: sharedValue,
              APPLY_BUTTON_BOUNCE_DISTANCE: 60,
              APPLY_BUTTON_SCALE_TRANSITION,
              reducedMotion: stateFromStores,
              withSpring: currentSkuId(onApply[12]).withSpring,
              MEDIA_PICKER_SEND_BUTTON_SPRING: sharedValue,
            };
            fn.__closure = obj2;
            fn.__workletHash = 15594859424201;
            fn.__initData = __initData;
            const animatedStyle = obj4.useAnimatedStyle(fn);
            class Y {
              constructor() {
                pointerEvents = "none";
                if (closure_6.get()) {
                  pointerEvents = "box-none";
                }
                return { pointerEvents };
              }
            }
            let obj3 = { shouldShowButton: sharedValue };
            Y.__closure = obj3;
            Y.__workletHash = 9374262739789;
            Y.__initData = __initData2;
            const animatedProps = currentSkuId(onApply[11]).useAnimatedProps(Y);
            const tmpResult8 = currentSkuId(onApply[11]);
            const fn2 = function k() {
              let num = 0;
              if (sharedValue.get()) {
                num = 1;
              }
              let opacity = num;
              if (!stateFromStores) {
                const obj2 = {};
                const merged = Object.assign(closure_6);
                obj2.overshootClamping = true;
                opacity = spring.withSpring(num, obj2);
              }
              return { opacity };
            };
            let obj5 = {
              shouldShowButton: sharedValue,
              reducedMotion: stateFromStores,
              withSpring: currentSkuId(onApply[12]).withSpring,
              MEDIA_PICKER_SEND_BUTTON_SPRING: sharedValue,
            };
            fn2.__closure = obj5;
            class O {
              constructor() {
                result = closure_6.set(selectedSkuId !== currentSkuId);
                return;
              }
            }
            fn2.__workletHash = 13351061137085;
            fn2.__initData = __initData3;
            const animatedStyle1 = currentSkuId(onApply[11]).useAnimatedStyle(fn2);
            if (cResult[7] !== user) {
              const canUseCollectiblesResult = tmp5(onApply[13]).canUseCollectibles(user);
              class P {
                constructor() {
                  return analyticsSource.useReducedMotion;
                }
              }
              cResult[8] = canUseCollectiblesResult;
              let tmp24 = canUseCollectiblesResult;
              const tmp5Result = tmp5(onApply[13]);
            } else {
              tmp24 = cResult[8];
            }
            if (cResult[9] === product) {
              if (cResult[10] === purchase) {
                let tmp26 = cResult[11];
              }
              if (cResult[12] === tmp24) {
                let tmp31 = null == selectedSkuId;
                class P {
                  constructor() {
                    return analyticsSource.useReducedMotion;
                  }
                }
                if (!tmp31) {
                  let tmp32 = tmp26;
                  if (tmp26) {
                    tmp32 = isTryItOut;
                  }
                  tmp31 = tmp32;
                }
                isTryItOut = tmp31;
                if (tmp26) {
                  tmp26 = !tmp24;
                }
                if (tmp26) {
                  tmp26 = !isTryItOut;
                }
                APPLY_BUTTON_SCALE_TRANSITION = tmp26;
                isShopStandalonePdpMobileEnabled = currentSkuId(onApply[15]).useIsShopStandalonePdpMobileEnabled(
                  "edit_collectibles_cta_button",
                );
                if (tmp31) {
                  const _Symbol2 = Symbol;
                  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl3 = currentSkuId(onApply[16]).intl;
                    const stringResult = intl3.string(currentSkuId(onApply[16]).t.Jh8fJz);
                    class P {
                      constructor() {
                        return analyticsSource.useReducedMotion;
                      }
                    }
                    cResult[15] = stringResult;
                  }
                  class P {
                    constructor() {
                      return analyticsSource.useReducedMotion;
                    }
                  }
                } else {
                  if (tmp26) {
                    if (cResult[16] !== user) {
                      const tmp5Result2 = tmp5(onApply[13]);
                      const intl2 = currentSkuId(onApply[16]).intl;
                      class P {
                        constructor() {
                          return analyticsSource.useReducedMotion;
                        }
                      }
                      let KXLX7l = currentSkuId(onApply[16]).t;
                      if (isPremiumResult) {
                        KXLX7l = KXLX7l.KXLX7l;
                        let tmp37Result = tmp37(KXLX7l);
                      } else {
                        tmp37Result = tmp37(KXLX7l.mr4K7D);
                      }
                      cResult[16] = user;
                      cResult[17] = tmp37Result;
                      isPremiumResult = tmp5(onApply[13]).isPremium(user);
                    } else {
                      let tmp34 = cResult[17];
                    }
                  } else {
                    const _Symbol = Symbol;
                    if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl = currentSkuId(onApply[16]).intl;
                      const stringResult1 = intl.string(currentSkuId(onApply[16]).t.fYfGgK);
                      class P {
                        constructor() {
                          return analyticsSource.useReducedMotion;
                        }
                      }
                      cResult[18] = stringResult1;
                      tmp34 = stringResult1;
                    } else {
                      tmp34 = cResult[18];
                    }
                  }
                  if (cResult[19] === analyticsLocations) {
                    if (cResult[20] === analyticsSource) {
                      if (cResult[21] === tmp31) {
                        if (cResult[22] === isShopStandalonePdpMobileEnabled) {
                          if (cResult[23] === tmp26) {
                            if (cResult[24] === onApply) {
                              if (cResult[25] === selectedSkuId) {
                                let tmp42 = cResult[26];
                              }
                              if (cResult[27] === animatedStyle1) {
                                if (cResult[30] !== bottom) {
                                  let obj6 = { marginBottom: bottom };
                                  class P {
                                    constructor() {
                                      return analyticsSource.useReducedMotion;
                                    }
                                  }
                                  cResult[31] = obj6;
                                  let tmp44 = obj6;
                                } else {
                                  tmp44 = cResult[31];
                                }
                                if (cResult[32] === animatedStyle) {
                                  if (cResult[33] === tmp4.buttonRowContainer) {
                                    let str2 = "primary";
                                    if (tmp26) {
                                      str2 = "active";
                                    }
                                    class P {
                                      constructor() {
                                        return analyticsSource.useReducedMotion;
                                      }
                                    }
                                    let obj7 = { variant: str2, onPress: tmp42, size: "md", text: tmp34, grow: true };
                                    const tmp49 = isTryItOut(currentSkuId(onApply[22]).Button, obj7);
                                    cResult[36] = tmp34;
                                    cResult[37] = tmp42;
                                    cResult[38] = str2;
                                    cResult[39] = tmp49;
                                  }
                                }
                                class P {
                                  constructor() {
                                    return analyticsSource.useReducedMotion;
                                  }
                                }
                                tmp46[0] = tmp4.buttonRowContainer;
                                tmp46[1] = animatedStyle;
                                tmp46[2] = tmp44;
                                cResult[32] = animatedStyle;
                                cResult[33] = tmp4.buttonRowContainer;
                                cResult[34] = tmp44;
                                cResult[35] = tmp46;
                              }
                              const items1 = [,];
                              class P {
                                constructor() {
                                  return analyticsSource.useReducedMotion;
                                }
                              }
                              items1[1] = animatedStyle1;
                              cResult[27] = animatedStyle1;
                              cResult[28] = tmp4.buttonContainer;
                              cResult[29] = items1;
                            }
                          }
                        }
                      }
                    }
                  }
                  function et() {
                    if (isTryItOut) {
                      const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
                      onApply();
                    } else if (closure_8) {
                      const result1 = EditCollectiblesActionCreators.navigateToNitroManagement();
                    } else {
                      if (isShopStandalonePdpMobileEnabled) {
                        if (null != selectedSkuId) {
                          const obj2 = {
                            skuId: tmp3,
                            analyticsLocations,
                            stageCollectibleChangeForEditProfile: onApply,
                          };
                          const result2 = openProductDetailsActionSheet.openProductDetailsActionSheetForSku(
                            obj2,
                            "stack",
                          );
                        }
                      }
                      const obj4 = {
                        analyticsLocations,
                        analyticsSource,
                        initialProductSkuId: selectedSkuId,
                        screen: stateFromStores.SHOP_ALL,
                      };
                      const result3 = CollectiblesActionCreators.openCollectiblesShopMobile(obj4);
                    }
                    ActionSheetActionCreatorsDefault.hideActionSheet();
                  }
                  class P {
                    constructor() {
                      return analyticsSource.useReducedMotion;
                    }
                  }
                  cResult[19] = analyticsLocations;
                  cResult[20] = analyticsSource;
                  cResult[21] = tmp31;
                  cResult[22] = isShopStandalonePdpMobileEnabled;
                  cResult[23] = tmp26;
                  cResult[24] = onApply;
                  cResult[25] = selectedSkuId;
                  cResult[26] = et;
                  tmp42 = et;
                }
                const tmpResult10 = currentSkuId(onApply[15]);
              }
              class P {
                constructor() {
                  return analyticsSource.useReducedMotion;
                }
              }
              cResult[12] = tmp24;
              cResult[13] = purchase;
              cResult[14] = !tmp24;
            }
            const tmpResult9 = currentSkuId(onApply[11]);
            let result = currentSkuId(onApply[14]).isPremiumCollectiblesProduct(product);
            if (!result) {
              result = currentSkuId(onApply[14]).isPremiumCollectiblesPurchase(purchase);
              const tmpResult12 = currentSkuId(onApply[14]);
            }
            cResult[9] = product;
            cResult[10] = purchase;
            cResult[11] = result;
            tmp26 = result;
            const tmpResult11 = currentSkuId(onApply[14]);
          }
        }
        class O {
          constructor() {
            result = closure_6.set(selectedSkuId !== currentSkuId);
            return;
          }
        }
        const items2 = [selectedSkuId, currentSkuId, sharedValue];
        cResult[2] = currentSkuId;
        cResult[3] = selectedSkuId;
        cResult[4] = sharedValue;
        cResult[5] = O;
        cResult[6] = items2;
        tmp13 = items2;
        tmp12 = O;
        const tmpResult7 = currentSkuId(onApply[11]);
      }
    : function EditCollectiblesCTAButton(user) {
        user = user.user;
        const currentSkuId = user.currentSkuId;
        const selectedSkuId = user.selectedSkuId;
        ({ isTryItOut, onApply } = user);
        const analyticsLocations = user.analyticsLocations;
        const analyticsSource = user.analyticsSource;
        isTryItOut = undefined;
        c9 = undefined;
        let isShopStandalonePdpMobileEnabled;
        const tmp = c9();
        const items = [analyticsLocations];
        const stateFromStores = user(selectedSkuId[9]).useStateFromStores(
          items,
          () => analyticsLocations.useReducedMotion,
        );
        let obj = user(selectedSkuId[9]);
        ({ purchase, product } = currentSkuId(selectedSkuId[10])(selectedSkuId));
        const tmp6 = currentSkuId(selectedSkuId[10])(selectedSkuId);
        const sharedValue = user(selectedSkuId[11]).useSharedValue(false);
        const items1 = [selectedSkuId, currentSkuId, sharedValue];
        const effect = onApply.useEffect(() => {
          const result = sharedValue.set(selectedSkuId !== currentSkuId);
        }, items1);
        let obj2 = user(selectedSkuId[11]);
        class M {
          constructor() {
            obj = closure_7;
            num = 60;
            if (closure_7.get()) {
              num = 0;
            }
            num2 = 1;
            if (!obj.get()) {
              num2 = c8;
            }
            withSpringResult = num;
            tmp = closure_6;
            if (!closure_6) {
              tmp3 = closure_0;
              tmp4 = closure_2;
              obj2 = closure_0(closure_2[12]);
              tmp5 = closure_6;
              withSpringResult = obj2.withSpring(num, closure_6);
            }
            items = [,];
            items[0] = { translateY: withSpringResult };
            withSpringResult1 = num2;
            if (!tmp) {
              tmp7 = closure_0;
              tmp8 = closure_2;
              obj3 = closure_0(closure_2[12]);
              tmp9 = closure_6;
              withSpringResult1 = obj3.withSpring(num2, closure_6);
            }
            items[1] = { scale: withSpringResult1 };
            return { transform: items };
          }
        }
        let obj4 = user(selectedSkuId[11]);
        M.__closure = {
          shouldShowButton: sharedValue,
          APPLY_BUTTON_BOUNCE_DISTANCE: 60,
          APPLY_BUTTON_SCALE_TRANSITION: isTryItOut,
          reducedMotion: stateFromStores,
          withSpring: user(selectedSkuId[12]).withSpring,
          MEDIA_PICKER_SEND_BUTTON_SPRING: stateFromStores,
        };
        M.__workletHash = 4576122937516;
        M.__initData = __initData4;
        const animatedStyle = obj4.useAnimatedStyle(M);
        let obj5 = {
          shouldShowButton: sharedValue,
          APPLY_BUTTON_BOUNCE_DISTANCE: 60,
          APPLY_BUTTON_SCALE_TRANSITION: isTryItOut,
          reducedMotion: stateFromStores,
          withSpring: user(selectedSkuId[12]).withSpring,
          MEDIA_PICKER_SEND_BUTTON_SPRING: stateFromStores,
        };
        class R {
          constructor() {
            pointerEvents = "none";
            if (closure_7.get()) {
              pointerEvents = "box-none";
            }
            return { pointerEvents };
          }
        }
        R.__closure = { shouldShowButton: sharedValue };
        R.__workletHash = 8246199558634;
        R.__initData = __initData5;
        const animatedProps = user(selectedSkuId[11]).useAnimatedProps(R);
        let obj6 = user(selectedSkuId[11]);
        const fn = function y() {
          let num = 0;
          if (sharedValue.get()) {
            num = 1;
          }
          let opacity = num;
          if (!stateFromStores) {
            const obj2 = {};
            const merged = Object.assign(closure_6);
            obj2.overshootClamping = true;
            opacity = spring.withSpring(num, obj2);
          }
          return { opacity };
        };
        let obj7 = user(selectedSkuId[11]);
        fn.__closure = {
          shouldShowButton: sharedValue,
          reducedMotion: stateFromStores,
          withSpring: user(selectedSkuId[12]).withSpring,
          MEDIA_PICKER_SEND_BUTTON_SPRING: stateFromStores,
        };
        fn.__workletHash = 15978550903192;
        fn.__initData = __initData6;
        const animatedStyle1 = obj7.useAnimatedStyle(fn);
        const obj8 = {
          shouldShowButton: sharedValue,
          reducedMotion: stateFromStores,
          withSpring: user(selectedSkuId[12]).withSpring,
          MEDIA_PICKER_SEND_BUTTON_SPRING: stateFromStores,
        };
        const canUseCollectiblesResult = currentSkuId(selectedSkuId[13]).canUseCollectibles(user);
        const obj9 = currentSkuId(selectedSkuId[13]);
        let result = user(selectedSkuId[14]).isPremiumCollectiblesProduct(product);
        if (!result) {
          result = tmp4(tmp3[14]).isPremiumCollectiblesPurchase(purchase);
          const tmp4Result = tmp4(tmp3[14]);
        }
        let result1 = !canUseCollectiblesResult;
        if (!canUseCollectiblesResult) {
          result1 = tmp4(tmp3[14]).isPremiumCollectiblesPurchase(purchase);
          const tmp4Result3 = tmp4(tmp3[14]);
        }
        let tmp15 = null == selectedSkuId;
        if (!tmp15) {
          tmp15 = null != purchase && !result1;
          const tmp16 = null != purchase && !result1;
        }
        if (!tmp15) {
          let tmp17 = result;
          if (result) {
            tmp17 = isTryItOut;
          }
          tmp15 = tmp17;
        }
        isTryItOut = tmp15;
        if (result) {
          result = !canUseCollectiblesResult;
        }
        if (result) {
          result = !isTryItOut;
        }
        c9 = result;
        const obj10 = user(selectedSkuId[14]);
        isShopStandalonePdpMobileEnabled = user(selectedSkuId[15]).useIsShopStandalonePdpMobileEnabled(
          "edit_collectibles_cta_button",
        );
        const items2 = [tmp15, result, user];
        const items3 = [
          tmp15,
          onApply,
          result,
          isShopStandalonePdpMobileEnabled,
          analyticsLocations,
          analyticsSource,
          selectedSkuId,
        ];
        const memo = obj3.useMemo(() => {
          if (isTryItOut) {
            const intl3 = util.intl;
            let stringResult = intl3.string(util.t.Jh8fJz);
          } else if (c9) {
            const intl2 = util.intl;
            const string = intl2.string;
            let KXLX7l = util.t;
            if (isPremiumResult) {
              KXLX7l = KXLX7l.KXLX7l;
              let stringResult1 = string(KXLX7l);
            } else {
              stringResult1 = string(KXLX7l.mr4K7D);
            }
            isPremiumResult = PremiumUtilsDefault.isPremium(user);
          } else {
            const intl = util.intl;
            stringResult = intl.string(util.t.fYfGgK);
          }
          return stringResult;
        }, items2);
        const callback = obj3.useCallback(() => {
          if (isTryItOut) {
            const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
            onApply();
          } else if (c9) {
            const result1 = EditCollectiblesActionCreators.navigateToNitroManagement();
          } else {
            if (isShopStandalonePdpMobileEnabled) {
              if (null != selectedSkuId) {
                const obj2 = { skuId: tmp3, analyticsLocations, stageCollectibleChangeForEditProfile: onApply };
                const result2 = openProductDetailsActionSheet.openProductDetailsActionSheetForSku(obj2, "stack");
              }
            }
            const obj4 = {
              analyticsLocations,
              analyticsSource,
              initialProductSkuId: selectedSkuId,
              screen: analyticsSource.SHOP_ALL,
            };
            const result3 = CollectiblesActionCreators.openCollectiblesShopMobile(obj4);
          }
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }, items3);
        const obj11 = { style: null, animatedProps, children: null };
        const items4 = [tmp.buttonContainer, animatedStyle1];
        obj11.style = items4;
        const obj12 = { style: null, pointerEvents: "box-none", children: null };
        const items5 = [
          tmp.buttonRowContainer,
          animatedStyle,
          { marginBottom: currentSkuId(selectedSkuId[8])().bottom },
        ];
        obj12.style = items5;
        let str = "primary";
        if (result) {
          str = "active";
        }
        obj12.children = sharedValue(user(selectedSkuId[22]).Button, {
          variant: str,
          onPress: callback,
          size: "md",
          text: memo,
          grow: true,
        });
        obj11.children = sharedValue(currentSkuId(selectedSkuId[11]).View, obj12);
        return sharedValue(currentSkuId(selectedSkuId[11]).View, obj11);
      },
);

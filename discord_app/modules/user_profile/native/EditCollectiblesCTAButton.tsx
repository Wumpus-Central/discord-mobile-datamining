// === Module 7843: EditCollectiblesCTAButton ===

// Module 7843 (EditCollectiblesCTAButton)
import Fragment from "Fragment" /* 21 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import intl4 from "intl" /* 1126 */;
import MediaKeyboardConstants from "MediaKeyboardConstants" /* 1614 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4528 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import HapticUtils from "HapticUtils" /* 4855 */;
import spring from "spring" /* 5597 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7052 */;
import EditCollectiblesActionCreators from "EditCollectiblesActionCreators" /* 7846 */;
import openProductDetailsActionSheet from "openProductDetailsActionSheet" /* 7847 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_5 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
let closure_6 = MediaKeyboardConstants.MEDIA_PICKER_SEND_BUTTON_SPRING;
let jsx = Fragment.jsx;
let c8 = 0.9;
let closure_9 = createStyles.createStyles({ buttonRowContainer: { flexGrow: 0, flexDirection: "row", justifyContent: "flex-end", paddingHorizontal: 12, height: 48 }, buttonContainer: { position: "absolute", bottom: 0, left: 0, right: 0, marginLeft: 24, marginRight: 24, flexDirection: "column", justifyContent: "flex-end" } });
const __initData = { code: "function EditCollectiblesCTAButtonTsx1(){const{shouldShowButton,APPLY_BUTTON_BOUNCE_DISTANCE,APPLY_BUTTON_SCALE_TRANSITION,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetTranslateY=shouldShowButton.get()?0:APPLY_BUTTON_BOUNCE_DISTANCE;const targetScale=shouldShowButton.get()?1:APPLY_BUTTON_SCALE_TRANSITION;return{transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}]};}" };
const __initData2 = { code: "function EditCollectiblesCTAButtonTsx2(){const{shouldShowButton}=this.__closure;return{pointerEvents:shouldShowButton.get()?\"box-none\":\"none\"};}" };
const __initData3 = { code: "function EditCollectiblesCTAButtonTsx3(){const{shouldShowButton,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=shouldShowButton.get()?1:0;return{opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,{...MEDIA_PICKER_SEND_BUTTON_SPRING,overshootClamping:true})};}" };
const __initData4 = { code: "function EditCollectiblesCTAButtonTsx4(){const{shouldShowButton,APPLY_BUTTON_BOUNCE_DISTANCE,APPLY_BUTTON_SCALE_TRANSITION,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetTranslateY=shouldShowButton.get()?0:APPLY_BUTTON_BOUNCE_DISTANCE;const targetScale=shouldShowButton.get()?1:APPLY_BUTTON_SCALE_TRANSITION;return{transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}]};}" };
const __initData5 = { code: "function EditCollectiblesCTAButtonTsx5(){const{shouldShowButton}=this.__closure;return{pointerEvents:shouldShowButton.get()?'box-none':'none'};}" };
const __initData6 = { code: "function EditCollectiblesCTAButtonTsx6(){const{shouldShowButton,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=shouldShowButton.get()?1:0;return{opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,{...MEDIA_PICKER_SEND_BUTTON_SPRING,overshootClamping:true})};}" };
let memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((selectedSkuId) => {
  let closure_7;
  let closure_8;
  let currentSkuId;
  let isShopStandalonePdpMobileEnabled;
  let isTryItOut;
  let onApply;
  let product;
  let purchase;
  let tmp6;
  let tmp7;
  let user;
  let obj = currentSkuId(onApply[7]);
  const cResult = obj.c(47);
  ({ user, currentSkuId } = selectedSkuId);
  selectedSkuId = selectedSkuId.selectedSkuId;
  ({ isTryItOut, onApply } = selectedSkuId);
  const analyticsLocations = selectedSkuId.analyticsLocations;
  const analyticsSource = selectedSkuId.analyticsSource;
  const tmp4 = isShopStandalonePdpMobileEnabled();
  const bottom = selectedSkuId(onApply[8])().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [analyticsSource];
    class E {
      constructor() {
        return analyticsSource.useReducedMotion;
      }
    }
    let num = 0;
    cResult[0] = items;
    let num2 = 1;
    cResult[1] = E;
    tmp6 = items;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = currentSkuId(onApply[9]);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, E);
  ({ product, purchase } = selectedSkuId(onApply[10])(selectedSkuId));
  selectedSkuId(onApply[10])(selectedSkuId);
  const tmpResult7 = currentSkuId(onApply[11]);
  const sharedValue = tmpResult7.useSharedValue(false);
  if (cResult[2] === currentSkuId) {
    if (cResult[3] === selectedSkuId) {
      let tmp12;
      let tmp13;
      let tmp26;
      if (cResult[4] === sharedValue) {
        tmp12 = cResult[5];
        tmp13 = cResult[6];
      }
      const effect = analyticsLocations.useEffect(tmp12, tmp13);
      class E {
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
          const obj2 = spring;
          withSpringResult = obj2.withSpring(num, closure_6);
        }
        const transform = [{ translateY: withSpringResult }, ];
        let withSpringResult1 = num2;
        if (!stateFromStores) {
          const obj3 = spring;
          withSpringResult1 = obj3.withSpring(num2, closure_6);
        }
        transform[1] = { scale: withSpringResult1 };
        return { transform };
      };
      let obj2 = { shouldShowButton: sharedValue, APPLY_BUTTON_BOUNCE_DISTANCE: 60, APPLY_BUTTON_SCALE_TRANSITION, reducedMotion: stateFromStores, withSpring: currentSkuId(onApply[12]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING: sharedValue };
      const useAnimatedStyle = tmp16.useAnimatedStyle;
      fn.__closure = obj2;
      fn.__workletHash = 15594859424201;
      fn.__initData = __initData;
      const animatedStyle = useAnimatedStyle(fn);
      const tmpResult8 = currentSkuId(onApply[11]);
      class Y {
        constructor() {
          let pointerEvents = "none";
          if (sharedValue.get()) {
            pointerEvents = "box-none";
          }
          return { pointerEvents };
        }
      }
      let obj3 = { shouldShowButton: sharedValue };
      Y.__closure = obj3;
      Y.__workletHash = 9374262739789;
      Y.__initData = __initData2;
      const animatedProps = tmpResult8.useAnimatedProps(Y);
      const fn2 = function k() {
        let num = 0;
        if (sharedValue.get()) {
          num = 1;
        }
        let opacity = num;
        if (!stateFromStores) {
          const obj = { overshootClamping: true };
          const withSpring = spring.withSpring;
          spring;
          const merged = Object.assign(closure_6);
          opacity = withSpring(num, obj);
        }
        return { opacity };
      };
      let obj4 = { shouldShowButton: sharedValue, reducedMotion: stateFromStores, withSpring: currentSkuId(onApply[12]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING: sharedValue };
      const useAnimatedStyle2 = currentSkuId(onApply[11]).useAnimatedStyle;
      currentSkuId(onApply[11]);
      fn2.__closure = obj4;
      class O {
        constructor() {
          const result = sharedValue.set(selectedSkuId !== currentSkuId);
        }
      }
      fn2.__workletHash = 13351061137085;
      fn2.__initData = __initData3;
      const animatedStyle2 = useAnimatedStyle2(fn2);
      if (cResult[7] !== user) {
        const tmp5Result = selectedSkuId(onApply[13]);
        const canUseCollectiblesResult = tmp5Result.canUseCollectibles(user);
        class E {
          constructor() {
            return analyticsSource.useReducedMotion;
          }
        }
        cResult[8] = canUseCollectiblesResult;
        tmp26 = canUseCollectiblesResult;
      } else {
        tmp26 = cResult[8];
      }
      if (cResult[9] === product) {
        let tmp28;
        if (cResult[10] === purchase) {
          tmp28 = cResult[11];
        }
        if (cResult[12] === tmp26) {
          let tmp36;
          let tmp33 = null == selectedSkuId;
          class E {
            constructor() {
              return analyticsSource.useReducedMotion;
            }
          }
          if (!tmp33) {
            tmp33 = tmp28 && isTryItOut;
          }
          jsx = tmp33;
          if (tmp28) {
            tmp28 = !tmp26;
          }
          if (tmp28) {
            tmp28 = !isTryItOut;
          }
          APPLY_BUTTON_SCALE_TRANSITION = tmp28;
          const tmpResult10 = currentSkuId(onApply[15]);
          isShopStandalonePdpMobileEnabled = tmpResult10.useIsShopStandalonePdpMobileEnabled("edit_collectibles_cta_button");
          if (tmp33) {
            const _Symbol2 = Symbol;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = currentSkuId(onApply[16]).intl;
              const stringResult = intl3.string(currentSkuId(onApply[16]).t.Jh8fJz);
              class E {
                constructor() {
                  return analyticsSource.useReducedMotion;
                }
              }
              cResult[15] = stringResult;
            }
            class E {
              constructor() {
                return analyticsSource.useReducedMotion;
              }
            }
          } else if (tmp28) {
            let tmp38;
            if (cResult[16] !== user) {
              let tmp40Result;
              const tmp5Result2 = selectedSkuId(onApply[13]);
              const isPremiumResult = tmp5Result2.isPremium(user);
              const intl2 = currentSkuId(onApply[16]).intl;
              class E {
                constructor() {
                  return analyticsSource.useReducedMotion;
                }
              }
              const t = currentSkuId(onApply[16]).t;
              if (isPremiumResult) {
                tmp40Result = tmp40(t.KXLX7l);
              } else {
                tmp40Result = tmp40(t.mr4K7D);
              }
              cResult[16] = user;
              cResult[17] = tmp40Result;
              tmp38 = tmp40Result;
            } else {
              tmp38 = cResult[17];
            }
            tmp36 = tmp38;
          } else {
            const _Symbol = Symbol;
            if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = currentSkuId(onApply[16]).intl;
              const stringResult1 = intl.string(currentSkuId(onApply[16]).t.fYfGgK);
              class E {
                constructor() {
                  return analyticsSource.useReducedMotion;
                }
              }
              cResult[18] = stringResult1;
              tmp36 = stringResult1;
            } else {
              tmp36 = cResult[18];
            }
          }
          if (cResult[19] === analyticsLocations) {
            if (cResult[20] === analyticsSource) {
              if (cResult[21] === tmp33) {
                if (cResult[22] === isShopStandalonePdpMobileEnabled) {
                  if (cResult[23] === tmp28) {
                    if (cResult[24] === onApply) {
                      let tmp44;
                      if (cResult[25] === selectedSkuId) {
                        tmp44 = cResult[26];
                      }
                      if (cResult[27] === animatedStyle2) {
                        let tmp46;
                        if (cResult[30] !== bottom) {
                          let obj5 = { marginBottom: bottom };
                          class E {
                            constructor() {
                              return analyticsSource.useReducedMotion;
                            }
                          }
                          cResult[31] = obj5;
                          tmp46 = obj5;
                        } else {
                          tmp46 = cResult[31];
                        }
                        if (cResult[32] === animatedStyle) {
                          if (cResult[33] === tmp4.buttonRowContainer) {
                            let str2 = "primary";
                            if (tmp28) {
                              str2 = "active";
                            }
                            class E {
                              constructor() {
                                return analyticsSource.useReducedMotion;
                              }
                            }
                            cResult[36] = tmp36;
                            cResult[37] = tmp44;
                            cResult[38] = str2;
                            cResult[39] = jsx(currentSkuId(onApply[22]).Button, { variant: str2, onPress: tmp44, size: "md", text: tmp36, grow: true });
                            const tmp51 = jsx(currentSkuId(onApply[22]).Button, { variant: str2, onPress: tmp44, size: "md", text: tmp36, grow: true });
                          }
                        }
                        class E {
                          constructor() {
                            return analyticsSource.useReducedMotion;
                          }
                        }
                        tmp48[0] = tmp4.buttonRowContainer;
                        tmp48[1] = animatedStyle;
                        tmp48[2] = tmp46;
                        cResult[32] = animatedStyle;
                        cResult[33] = tmp4.buttonRowContainer;
                        cResult[34] = tmp46;
                        cResult[35] = tmp48;
                      }
                      const items1 = [, ];
                      class E {
                        constructor() {
                          return analyticsSource.useReducedMotion;
                        }
                      }
                      items1[1] = animatedStyle2;
                      cResult[27] = animatedStyle2;
                      cResult[28] = tmp4.buttonContainer;
                      cResult[29] = items1;
                    }
                  }
                }
              }
            }
          }
          function et() {
            if (closure_7) {
              const obj6 = HapticUtils;
              const result = obj6.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
              onApply();
            } else if (closure_8) {
              const obj5 = EditCollectiblesActionCreators;
              const result1 = obj5.navigateToNitroManagement();
            } else {
              if (isShopStandalonePdpMobileEnabled) {
                if (null != selectedSkuId) {
                  const obj2 = { skuId: tmp4, analyticsLocations, stageCollectibleChangeForEditProfile: onApply };
                  const obj3 = openProductDetailsActionSheet;
                  const result2 = obj3.openProductDetailsActionSheetForSku(obj2, "stack");
                }
              }
              const obj4 = { analyticsLocations, analyticsSource, initialProductSkuId: selectedSkuId, screen: stateFromStores.SHOP_ALL };
              const obj = CollectiblesActionCreators;
              const result3 = obj.openCollectiblesShopMobile(obj4);
            }
            const obj7 = ActionSheetActionCreatorsDefault;
            obj7.hideActionSheet();
          }
          cResult[19] = analyticsLocations;
          cResult[20] = analyticsSource;
          class Y {
            constructor() {
              let pointerEvents = "none";
              if (sharedValue.get()) {
                pointerEvents = "box-none";
              }
              return { pointerEvents };
            }
          }
          cResult[22] = isShopStandalonePdpMobileEnabled;
          cResult[23] = tmp28;
          cResult[24] = onApply;
          cResult[25] = selectedSkuId;
          cResult[26] = et;
          tmp44 = et;
        }
        class E {
          constructor() {
            return analyticsSource.useReducedMotion;
          }
        }
        cResult[12] = tmp26;
        cResult[13] = purchase;
        cResult[14] = !tmp26;
      }
      const tmpResult11 = currentSkuId(onApply[14]);
      let result = tmpResult11.isPremiumCollectiblesProduct(product);
      if (!result) {
        const tmpResult12 = currentSkuId(onApply[14]);
        result = tmpResult12.isPremiumCollectiblesPurchase(purchase);
      }
      cResult[9] = product;
      cResult[10] = purchase;
      cResult[11] = result;
      tmp28 = result;
    }
  }
  class O {
    constructor() {
      const result = sharedValue.set(selectedSkuId !== currentSkuId);
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
}) : ((user) => {
  let Button;
  let View2;
  let closure_8;
  let isTryItOut;
  let items4;
  let items5;
  let obj12;
  let onApply;
  let product;
  let purchase;
  let str;
  user = user.user;
  const currentSkuId = user.currentSkuId;
  const selectedSkuId = user.selectedSkuId;
  ({ isTryItOut, onApply } = user);
  const analyticsLocations = user.analyticsLocations;
  const analyticsSource = user.analyticsSource;
  APPLY_BUTTON_SCALE_TRANSITION = undefined;
  let c9;
  let isShopStandalonePdpMobileEnabled;
  const tmp = c9();
  const tmp4 = user;
  const bottom = currentSkuId(selectedSkuId[8])().bottom;
  let obj = user(selectedSkuId[9]);
  const items = [analyticsLocations];
  const stateFromStores = obj.useStateFromStores(items, () => analyticsLocations.useReducedMotion);
  ({ purchase, product } = currentSkuId(selectedSkuId[10])(selectedSkuId));
  const tmp6 = currentSkuId(selectedSkuId[10])(selectedSkuId);
  let obj2 = user(selectedSkuId[11]);
  const sharedValue = obj2.useSharedValue(false);
  let obj3 = onApply;
  const items1 = [selectedSkuId, currentSkuId, sharedValue];
  const effect = onApply.useEffect(() => {
    const result = sharedValue.set(selectedSkuId !== currentSkuId);
  }, items1);
  let obj4 = user(selectedSkuId[11]);
  class M {
    constructor() {
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
        const obj2 = spring;
        withSpringResult = obj2.withSpring(num, closure_6);
      }
      const transform = [{ translateY: withSpringResult }, ];
      let withSpringResult1 = num2;
      if (!stateFromStores) {
        const obj3 = spring;
        withSpringResult1 = obj3.withSpring(num2, closure_6);
      }
      transform[1] = { scale: withSpringResult1 };
      return { transform };
    }
  }
  let obj5 = { shouldShowButton: sharedValue, APPLY_BUTTON_BOUNCE_DISTANCE: 60, APPLY_BUTTON_SCALE_TRANSITION, reducedMotion: stateFromStores, withSpring: user(selectedSkuId[12]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING: stateFromStores };
  M.__closure = obj5;
  M.__workletHash = 4576122937516;
  M.__initData = __initData4;
  const animatedStyle = obj4.useAnimatedStyle(M);
  let obj6 = user(selectedSkuId[11]);
  class R {
    constructor() {
      let pointerEvents = "none";
      if (sharedValue.get()) {
        pointerEvents = "box-none";
      }
      return { pointerEvents };
    }
  }
  R.__closure = { shouldShowButton: sharedValue };
  R.__workletHash = 8246199558634;
  R.__initData = __initData5;
  const animatedProps = obj6.useAnimatedProps(R);
  let obj7 = user(selectedSkuId[11]);
  const fn = function y() {
    let num = 0;
    if (sharedValue.get()) {
      num = 1;
    }
    let opacity = num;
    if (!stateFromStores) {
      const obj = { overshootClamping: true };
      const withSpring = spring.withSpring;
      spring;
      const merged = Object.assign(closure_6);
      opacity = withSpring(num, obj);
    }
    return { opacity };
  };
  fn.__closure = { shouldShowButton: sharedValue, reducedMotion: stateFromStores, withSpring: user(selectedSkuId[12]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING: stateFromStores };
  fn.__workletHash = 15978550903192;
  fn.__initData = __initData6;
  ({ shouldShowButton: sharedValue, reducedMotion: stateFromStores, withSpring: user(selectedSkuId[12]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING: stateFromStores });
  const animatedStyle1 = obj7.useAnimatedStyle(fn);
  const obj9 = currentSkuId(selectedSkuId[13]);
  const canUseCollectiblesResult = obj9.canUseCollectibles(user);
  const obj10 = user(selectedSkuId[14]);
  let result = obj10.isPremiumCollectiblesProduct(product);
  if (!result) {
    const tmp4Result = tmp4(selectedSkuId[14]);
    result = tmp4Result.isPremiumCollectiblesPurchase(purchase);
  }
  let result1 = !canUseCollectiblesResult;
  if (result1) {
    const tmp4Result3 = tmp4(selectedSkuId[14]);
    result1 = tmp4Result3.isPremiumCollectiblesPurchase(purchase);
  }
  let tmp15 = null == selectedSkuId;
  if (!tmp15) {
    tmp15 = null != purchase && !result1;
  }
  if (!tmp15) {
    tmp15 = result && isTryItOut;
  }
  APPLY_BUTTON_SCALE_TRANSITION = tmp15;
  if (result) {
    result = !canUseCollectiblesResult;
  }
  if (result) {
    result = !isTryItOut;
  }
  c9 = result;
  const tmp4Result4 = tmp4(selectedSkuId[15]);
  isShopStandalonePdpMobileEnabled = tmp4Result4.useIsShopStandalonePdpMobileEnabled("edit_collectibles_cta_button");
  const items2 = [tmp15, result, user];
  const items3 = [tmp15, onApply, result, isShopStandalonePdpMobileEnabled, analyticsLocations, analyticsSource, selectedSkuId];
  const memo = obj3.useMemo(() => {
    let stringResult;
    if (closure_8) {
      const intl3 = intl4.intl;
      stringResult = intl3.string(intl4.t.Jh8fJz);
    } else if (c9) {
      let stringResult1;
      const obj = PremiumUtilsDefault;
      const isPremiumResult = obj.isPremium(user);
      const intl2 = intl4.intl;
      const string = intl2.string;
      const t = intl4.t;
      if (isPremiumResult) {
        stringResult1 = string(t.KXLX7l);
      } else {
        stringResult1 = string(t.mr4K7D);
      }
      stringResult = stringResult1;
    } else {
      const intl = intl4.intl;
      stringResult = intl.string(intl4.t.fYfGgK);
    }
    return stringResult;
  }, items2);
  const callback = obj3.useCallback(() => {
    if (closure_8) {
      const obj6 = HapticUtils;
      const result = obj6.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      onApply();
    } else if (c9) {
      const obj5 = EditCollectiblesActionCreators;
      const result1 = obj5.navigateToNitroManagement();
    } else {
      if (isShopStandalonePdpMobileEnabled) {
        if (null != selectedSkuId) {
          const obj2 = { skuId: tmp4, analyticsLocations, stageCollectibleChangeForEditProfile: onApply };
          const obj3 = openProductDetailsActionSheet;
          const result2 = obj3.openProductDetailsActionSheetForSku(obj2, "stack");
        }
      }
      const obj4 = { analyticsLocations, analyticsSource, initialProductSkuId: selectedSkuId, screen: analyticsSource.SHOP_ALL };
      const obj = CollectiblesActionCreators;
      const result3 = obj.openCollectiblesShopMobile(obj4);
    }
    const obj7 = ActionSheetActionCreatorsDefault;
    obj7.hideActionSheet();
  }, items3);
  const obj11 = { style: items4, animatedProps, children: sharedValue(View2, obj12) };
  items4 = [tmp.buttonContainer, animatedStyle1];
  const View = tmp2(tmp3[11]).View;
  obj12 = { style: items5, pointerEvents: "box-none", children: sharedValue(Button, { variant: str, onPress: callback, size: "md", text: memo, grow: true }) };
  items5 = [tmp.buttonRowContainer, animatedStyle, { marginBottom: bottom }];
  View2 = tmp2(tmp3[11]).View;
  str = "primary";
  Button = tmp4(tmp3[22]).Button;
  if (result) {
    str = "active";
  }
  return sharedValue(View, obj11);
}));
let result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesCTAButton.tsx");

export default memoResult;
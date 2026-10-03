// discord_app/modules/premium/native/gifting/PremiumGiftModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef2589 from "../../gifting/GiftingBadge.messages.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import useInitialValueDefault from "../../../../hooks/useInitialValue.tsx";
import useAnalyticsLocationsDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import PremiumAnalyticsUtils from "../PremiumAnalyticsUtils.tsx";
import PremiumGiftPlanSelectDefault from "PremiumGiftPlanSelect.tsx";
import GiftBadgePostPurchaseDefault from "GiftBadgePostPurchase.tsx";
import GiftingSKUSelectScreenDefault from "../../gifting/native/views/promotions/GiftingSKUSelectScreen.tsx";
import PremiumGiftCustomizationDefault from "PremiumGiftCustomization.tsx";
import PremiumGiftSuccessDefault from "PremiumGiftSuccess.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const PremiumGiftScreens = {
  PLAN_SELECT: "PremiumGiftPlanSelect",
  REWARD_SELECT: "GiftingSKUSelect",
  CUSTOMIZATION: "PremiumGiftCustomization",
  SUCCESS: "PremiumGiftSuccess",
  GIFTING_BADGE: "GiftingBadgePostPurchase",
};
let obj2 = {
  [PLAN_SELECT]: fn(10394).PaymentFlowStep.SKU_SELECT,
  [REWARD_SELECT]: fn(10394).PaymentFlowStep.REWARD_SKU_SELECT,
  [CUSTOMIZATION]: fn(10394).PaymentFlowStep.PLAN_SELECT,
  [SUCCESS]: fn(10394).PaymentFlowStep.CONFIRM,
  [GIFTING_BADGE]: fn(10394).PaymentFlowStep.CONFIRM,
};
({ PLAN_SELECT, REWARD_SELECT, CUSTOMIZATION, SUCCESS, GIFTING_BADGE } = PremiumGiftScreens);
const createStyles = fn(4890);
let obj4 = { header: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" } };
let closure_9 = createStyles.createStyles(obj4);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, pop, arg2) => {
      _require = arg2;
      const cResult = require("c").c(40);
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [UserStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg2) {
        class S {
          constructor() {
            user = null;
            if (null != closure_0) {
              tmp3 = closure_5;
              user = closure_5.getUser(tmp);
            }
            return user;
          }
        }
        cResult[1] = arg2;
        cResult[2] = S;
      } else {
        class S {
          constructor() {
            user = null;
            if (null != closure_0) {
              tmp3 = closure_5;
              user = closure_5.getUser(tmp);
            }
            return user;
          }
        }
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, S);
      const tmpResult = require("initialize");
      const fetchWishlistAndProfileInfoForUser =
        require("useWishlistHooks").useFetchWishlistAndProfileInfoForUser(arg2);
      ({ wishlist, userProfile, wishlistId, error } = fetchWishlistAndProfileInfoForUser);
      if (cResult[3] !== stateFromStores) {
        class S {
          constructor() {
            user = null;
            if (null != closure_0) {
              tmp3 = closure_5;
              user = closure_5.getUser(tmp);
            }
            return user;
          }
        }
        tmp11[1] = stateFromStores;
        cResult[3] = stateFromStores;
        cResult[4] = tmp11;
      } else {
        class S {
          constructor() {
            user = null;
            if (null != closure_0) {
              tmp3 = closure_5;
              user = closure_5.getUser(tmp);
            }
            return user;
          }
        }
      }
      const tmpResult4 = require("useWishlistHooks");
      let header = require("useWishlistHooks").useShouldShowWishlistInDMGifting(tmp11);
      let tmp12 = null != arg2 && !header && null == error;
      if (tmp12) {
        class S {
          constructor() {
            user = null;
            if (null != closure_0) {
              tmp3 = closure_5;
              user = closure_5.getUser(tmp);
            }
            return user;
          }
        }
        if (!tmp14) {
          class S {
            constructor() {
              user = null;
              if (null != closure_0) {
                tmp3 = closure_5;
                user = closure_5.getUser(tmp);
              }
              return user;
            }
          }
        }
        tmp12 = tmp14;
      }
      importDefault = tmp12;
      if (cResult[5] === tmp12) {
        class S {
          constructor() {
            user = null;
            if (null != closure_0) {
              tmp3 = closure_5;
              user = closure_5.getUser(tmp);
            }
            return user;
          }
        }
      }
      if (header) {
        class S {
          constructor() {
            user = null;
            if (null != closure_0) {
              tmp3 = closure_5;
              user = closure_5.getUser(tmp);
            }
            return user;
          }
        }
        const intl = tmp(1126).intl;
        tmp16[0] = intl.string(tmp(1126).t["JCFN/y"]);
        tmp16[1] = tmp(6010).getHeaderCloseButton(pop);
        tmp16[2] = tmp4.header;
        tmp16[3] = function render() {
          return jsx(isLoadingWishlist(10395), { shouldUseDMWishlistGiftingDesign: true, isLoadingWishlist: false });
        };
        const tmpResult6 = tmp(6010);
      } else {
        class S {
          constructor() {
            user = null;
            if (null != closure_0) {
              tmp3 = closure_5;
              user = closure_5.getUser(tmp);
            }
            return user;
          }
        }
        tmp16[2] = function render() {
          return jsx(PremiumGiftPlanSelectDefault, { shouldUseDMWishlistGiftingDesign: false, isLoadingWishlist });
        };
      }
      cResult[5] = tmp12;
      cResult[6] = pop;
      cResult[7] = header;
      header = tmp4.header;
      cResult[8] = header;
      cResult[9] = tmp16;
      const tmpResult5 = require("useWishlistHooks");
    }
  : (arg0, pop, arg2) => {
      _require = arg2;
      const tmp = closure_9();
      const obj = require("initialize");
      let items = [shouldShowWishlistInDMGifting];
      const stateFromStores = obj.useStateFromStores(items, () => {
        let user = null;
        if (null != closure_0) {
          user = UserStore.getUser(tmp);
        }
        return user;
      });
      const fetchWishlistAndProfileInfoForUser =
        require("useWishlistHooks").useFetchWishlistAndProfileInfoForUser(arg2);
      ({
        wishlist: importDefault,
        userProfile: dependencyMap,
        wishlistId: _slicedToArray,
        error: noop,
      } = fetchWishlistAndProfileInfoForUser);
      obj2 = require("useWishlistHooks");
      shouldShowWishlistInDMGifting = require("useWishlistHooks").useShouldShowWishlistInDMGifting({
        isGift: true,
        giftRecipient: stateFromStores,
        isSocialLayerStorefrontEnabled: false,
      });
      if (shouldShowWishlistInDMGifting) {
        const obj4 = { title: null, headerLeft: null, headerStyle: null, render: null };
        const intl = tmp2(1126).intl;
        obj4.title = intl.string(tmp2(1126).t["JCFN/y"]);
        obj4.headerLeft = tmp2(6010).getHeaderCloseButton(pop);
        obj4.headerStyle = tmp.header;
        obj4.render = function render() {
          return jsx(PremiumGiftPlanSelectDefault, {
            shouldUseDMWishlistGiftingDesign: true,
            isLoadingWishlist: false,
          });
        };
        let obj5 = obj4;
        const tmp2Result = tmp2(6010);
      } else {
        obj5 = {
          title: "",
          headerShown: false,
          render() {
            let isLoadingWishlist = null != closure_0;
            if (isLoadingWishlist) {
              isLoadingWishlist = !shouldShowWishlistInDMGifting;
            }
            if (isLoadingWishlist) {
              isLoadingWishlist = null == noop;
            }
            if (isLoadingWishlist) {
              let tmp7 = null == dependencyMap;
              if (!tmp7) {
                let tmp9 = null != _slicedToArray;
                if (tmp9) {
                  tmp9 = null == closure_1_1;
                }
                tmp7 = tmp9;
              }
              isLoadingWishlist = tmp7;
            }
            return jsx(PremiumGiftPlanSelectDefault, { shouldUseDMWishlistGiftingDesign: false, isLoadingWishlist });
          },
        };
      }
      const obj6 = {};
      obj6[obj.PLAN_SELECT] = obj5;
      const obj7 = {
        title: "",
        headerTitle() {},
        headerLeft: null,
        headerStyle: null,
        render: null,
      };
      if (arg0 === obj.REWARD_SELECT) {
        let headerCloseButton = tmp2(6010).getHeaderCloseButton(pop);
        const tmp2Result7 = tmp2(6010);
      } else {
        headerCloseButton = tmp2(6010).getHeaderBackButton();
        const tmp2Result8 = tmp2(6010);
      }
      obj7.headerLeft = headerCloseButton;
      obj7.headerStyle = tmp.header;
      obj7.render = function render(arg0) {
        ({ defaultHighlightedReward, allRewards, claimableRewards, onSelect } = arg0);
        return jsx(GiftingSKUSelectScreenDefault, { defaultHighlightedReward, allRewards, claimableRewards, onSelect });
      };
      obj6[obj.REWARD_SELECT] = obj7;
      if (arg0 === obj.CUSTOMIZATION) {
        let headerCloseButton1 = tmp2(6010).getHeaderCloseButton(pop);
        const tmp2Result9 = tmp2(6010);
      } else {
        headerCloseButton1 = tmp2(6010).getHeaderBackButton();
        const tmp2Result10 = tmp2(6010);
      }
      obj6[obj.CUSTOMIZATION] = {
        title: "",
        headerLeft: headerCloseButton1,
        headerStyle: tmp.header,
        render() {
          return jsx(PremiumGiftCustomizationDefault, {});
        },
      };
      const obj8 = { title: "", headerLeft: null, headerStyle: null, render: null };
      const obj3 = require("useWishlistHooks");
      obj8.headerLeft = require("NavigatorHeader").getHeaderCloseButton(pop);
      obj8.headerStyle = tmp.header;
      obj8.render = function render() {
        return jsx(PremiumGiftSuccessDefault, {});
      };
      obj6[obj.SUCCESS] = obj8;
      const obj9 = { title: null, headerLeft: null, headerTransparent: true, headerStyle: null, render: null };
      const intl2 = tmp2(1126).intl;
      obj9.title = intl2.string(_modDef2589.roVAey);
      const tmp2Result11 = require("NavigatorHeader");
      obj9.headerLeft = require("NavigatorHeader").getHeaderCloseButton(pop);
      obj9.headerStyle = { backgroundColor: "transparent", shadowColor: "transparent" };
      obj9.render = function render(currentProgress) {
        return jsx(GiftBadgePostPurchaseDefault, {
          currentProgress: currentProgress.currentProgress,
          onSendGift() {
            obj2 = { analyticsLocations: null };
            const items = [closure_1_1(6681).GIFTING_BADGE_POST_PURCHASE];
            obj2.analyticsLocations = items;
            closure_1_0(10392).openGiftModal(obj2);
          },
        });
      };
      obj6[obj.GIFTING_BADGE] = obj9;
      return obj6;
    };
ReactCompilerGating = fn(558);
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = onDismiss(576).c(26);
      ({
        recipientUserId,
        premiumType,
        planInterval,
        analyticsLocation,
        analyticsLocations,
        initialRoute,
        order,
        onDismiss,
      } = arg0);
      const analyticsLocations2 = useAnalyticsLocationsDefault(analyticsLocations).analyticsLocations;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function u() {
          return onDismiss(dependencyMap[22]).v4();
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      const tmp6 = useInitialValueDefault(first);
      if (cResult[1] === tmp6) {
        if (cResult[2] === analyticsLocation) {
          if (cResult[3] === analyticsLocations) {
            let tmp7 = cResult[4];
          }
          if (initialRoute != null) {
            if (cResult[5] !== onDismiss) {
              class P {
                constructor() {
                  arr = closure_1(closure_2[24]);
                  arr1 = arr.pop();
                  if (onDismiss != null) {
                    tmp2 = onDismiss();
                  }
                  return;
                }
              }
              cResult[5] = onDismiss;
              cResult[6] = P;
            } else {
              class P {
                constructor() {
                  arr = closure_1(closure_2[24]);
                  arr1 = arr.pop();
                  if (onDismiss != null) {
                    tmp2 = onDismiss();
                  }
                  return;
                }
              }
            }
            const tmp14 = closure_10(initialRoute, P, recipientUserId);
            [tmp19, tmp20] = noop.useState(obj2[initialRoute]);
            importDefault = tmp20;
            const tmp18 = _slicedToArray(noop.useState(obj2[initialRoute]), 2);
            if (tmpResult.isPremiumGiftingSupported()) {
              class P {
                constructor() {
                  arr = closure_1(closure_2[24]);
                  arr1 = arr.pop();
                  if (onDismiss != null) {
                    tmp2 = onDismiss();
                  }
                  return;
                }
              }
              if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
                class P {
                  constructor() {
                    arr = closure_1(closure_2[24]);
                    arr1 = arr.pop();
                    if (onDismiss != null) {
                      tmp2 = onDismiss();
                    }
                    return;
                  }
                }
                cResult[8] = tmp25;
              } else {
                class P {
                  constructor() {
                    arr = closure_1(closure_2[24]);
                    arr1 = arr.pop();
                    if (onDismiss != null) {
                      tmp2 = onDismiss();
                    }
                    return;
                  }
                }
              }
              if (cResult[9] === initialRoute) {
                class P {
                  constructor() {
                    arr = closure_1(closure_2[24]);
                    arr1 = arr.pop();
                    if (onDismiss != null) {
                      tmp2 = onDismiss();
                    }
                    return;
                  }
                }
                if (cResult[12] === tmp19) {
                  class P {
                    constructor() {
                      arr = closure_1(closure_2[24]);
                      arr1 = arr.pop();
                      if (onDismiss != null) {
                        tmp2 = onDismiss();
                      }
                      return;
                    }
                  }
                  if (cResult[15] === tmp7) {
                    class P {
                      constructor() {
                        arr = closure_1(closure_2[24]);
                        arr1 = arr.pop();
                        if (onDismiss != null) {
                          tmp2 = onDismiss();
                        }
                        return;
                      }
                    }
                  }
                  obj2 = {
                    basePurchaseAnalytics: tmp7,
                    recipientUserId,
                    onClose: P,
                    setCurrentAnalyticsStep: tmp20,
                    premiumType,
                    planInterval,
                    initialOrder: order,
                    children: tmp29,
                  };
                  const tmp34 = jsx(onDismiss(10430).NativeGiftContextProvider, {
                    basePurchaseAnalytics: tmp7,
                    recipientUserId,
                    onClose: P,
                    setCurrentAnalyticsStep: tmp20,
                    premiumType,
                    planInterval,
                    initialOrder: order,
                    children: tmp29,
                  });
                  cResult[15] = tmp7;
                  cResult[16] = P;
                  cResult[17] = order;
                  cResult[18] = planInterval;
                  cResult[19] = premiumType;
                  cResult[20] = recipientUserId;
                  cResult[21] = tmp29;
                  cResult[22] = tmp34;
                }
                const obj3 = { currentStep: tmp19, children: tmp26 };
                const tmp31 = jsx(tmp4(11018), { currentStep: tmp19, children: tmp26 });
                cResult[12] = tmp19;
                cResult[13] = tmp26;
                cResult[14] = tmp31;
              }
              const obj4 = { initialRouteName: initialRoute, screens: tmp14, onStateChange: tmp25 };
              const tmp28 = jsx(onDismiss(6496).Navigator, {
                initialRouteName: initialRoute,
                screens: tmp14,
                onStateChange: tmp25,
              });
              cResult[9] = initialRoute;
              cResult[10] = tmp14;
              cResult[11] = tmp28;
            } else {
              class P {
                constructor() {
                  arr = closure_1(closure_2[24]);
                  arr1 = arr.pop();
                  if (onDismiss != null) {
                    tmp2 = onDismiss();
                  }
                  return;
                }
              }
              if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
                class P {
                  constructor() {
                    arr = closure_1(closure_2[24]);
                    arr1 = arr.pop();
                    if (onDismiss != null) {
                      tmp2 = onDismiss();
                    }
                    return;
                  }
                }
                const obj5 = { title: null };
                const intl = onDismiss(1126).intl;
                obj5.title = intl.string(onDismiss(1126).t["JCFN/y"]);
                const tmp23 = jsx(tmp4(10554), { title: null });
                cResult[7] = tmp23;
                const tmp21 = tmp23;
                const tmp4Result = tmp4(10554);
              } else {
                class P {
                  constructor() {
                    arr = closure_1(closure_2[24]);
                    arr1 = arr.pop();
                    if (onDismiss != null) {
                      tmp2 = onDismiss();
                    }
                    return;
                  }
                }
              }
              return tmp21;
            }
            tmpResult = onDismiss(4541);
          } else {
            class P {
              constructor() {
                arr = closure_1(closure_2[24]);
                arr1 = arr.pop();
                if (onDismiss != null) {
                  tmp2 = onDismiss();
                }
                return;
              }
            }
          }
        }
      }
      const obj = onDismiss(576);
      const basePurchaseFlowAnalyticsFields = onDismiss(10394).getBasePurchaseFlowAnalyticsFields({
        isGift: true,
        analyticsLoadId: tmp6,
        analyticsLocation,
        analyticsLocations,
      });
      cResult[1] = tmp6;
      cResult[2] = analyticsLocation;
      cResult[3] = analyticsLocations;
      cResult[4] = basePurchaseFlowAnalyticsFields;
      tmp7 = basePurchaseFlowAnalyticsFields;
      const tmpResult2 = onDismiss(10394);
    }
  : (analyticsLocations) => {
      ({ recipientUserId, premiumType, analyticsLocation } = analyticsLocations);
      analyticsLocations = analyticsLocations.analyticsLocations;
      ({ initialRoute, onDismiss } = analyticsLocations);
      closure_4 = undefined;
      ({ planInterval, order } = analyticsLocations);
      const tmp3 = analyticsLocations(onDismiss[23])(() => analyticsLocation(onDismiss[22]).v4());
      _slicedToArray = tmp3;
      const items = [tmp3, analyticsLocation, analyticsLocations];
      if (initialRoute != null) {
        const items1 = [onDismiss];
        const callback = obj.useCallback(() => {
          ModalActionCreatorsDefault.pop();
          if (onDismiss != null) {
            onDismiss();
          }
        }, items1);
        const tmp13 = _slicedToArray(obj.useState(obj2[initialRoute]), 2);
        closure_4 = tmp14;
        obj2 = analyticsLocation(onDismiss[25]);
        if (obj2.isPremiumGiftingSupported()) {
          const obj3 = {
            value: analyticsLocations(onDismiss[21])(analyticsLocations).analyticsLocations,
            children: null,
          };
          const obj4 = {
            basePurchaseAnalytics: tmp4,
            recipientUserId,
            onClose: callback,
            setCurrentAnalyticsStep: tmp14,
            premiumType,
            planInterval,
            initialOrder: order,
            children: null,
          };
          const obj5 = { currentStep: tmp13[0], children: null };
          const obj6 = {
            initialRouteName: initialRoute,
            screens: tmp10,
            onStateChange(arg0) {
              if (null != arg0) {
                closure_4(obj2[arg0.routes[arg0.index].name]);
              }
            },
          };
          obj5.children = jsx(analyticsLocation(onDismiss[27]).Navigator, {
            initialRouteName: initialRoute,
            screens: tmp10,
            onStateChange(arg0) {
              if (null != arg0) {
                closure_4(obj2[arg0.routes[arg0.index].name]);
              }
            },
          });
          obj4.children = jsx(tmp(onDismiss[28]), { currentStep: tmp13[0], children: null });
          obj3.children = jsx(analyticsLocation(onDismiss[29]).NativeGiftContextProvider, {
            basePurchaseAnalytics: tmp4,
            recipientUserId,
            onClose: callback,
            setCurrentAnalyticsStep: tmp14,
            premiumType,
            planInterval,
            initialOrder: order,
            children: null,
          });
          let tmp16Result = jsx(analyticsLocation(onDismiss[21]).AnalyticsLocationProvider, {
            value: analyticsLocations(onDismiss[21])(analyticsLocations).analyticsLocations,
            children: null,
          });
          const tmpResult = tmp(onDismiss[28]);
        } else {
          const obj7 = { title: null };
          const intl = analyticsLocation(onDismiss[11]).intl;
          obj7.title = intl.string(analyticsLocation(onDismiss[11]).t["JCFN/y"]);
          tmp16Result = jsx(tmp(onDismiss[26]), { title: null });
          const tmpResult2 = tmp(onDismiss[26]);
        }
        return tmp16Result;
      } else if (null != premiumType) {
        let PLAN_SELECT = obj.CUSTOMIZATION;
      } else {
        PLAN_SELECT = obj.PLAN_SELECT;
      }
    };
export { PremiumGiftScreens };

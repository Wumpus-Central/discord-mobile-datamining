// discord_app/modules/premium/native/gifting/PremiumGiftModal.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef2589 from "../../gifting/GiftingBadge.messages.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import useInitialValueDefault from "../../../../hooks/useInitialValue.tsx";
import useAnalyticsLocationsDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import PremiumAnalyticsUtils from "../PremiumAnalyticsUtils.tsx";
import PremiumGiftPlanSelectDefault from "PremiumGiftPlanSelect.tsx";
import UnsupportedFeatureModalDefault from "../../../billing/native/UnsupportedFeatureModal.tsx";
import GiftBadgePostPurchaseDefault from "GiftBadgePostPurchase.tsx";
import GiftingSKUSelectScreenDefault from "../../gifting/native/views/promotions/GiftingSKUSelectScreen.tsx";
import PremiumGiftCustomizationDefault from "PremiumGiftCustomization.tsx";
import PremiumGiftSuccessDefault from "PremiumGiftSuccess.tsx";
import PremiumGiftAnalyticsDefault from "PremiumGiftAnalytics.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import UserStore from "../../../../stores/UserStore.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault;

let CUSTOMIZATION;
let GIFTING_BADGE;
let PLAN_SELECT;
let REWARD_SELECT;
let SUCCESS;
let obj4;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const jsx = Fragment.jsx;
const PremiumGiftScreens = {
  PLAN_SELECT: "PremiumGiftPlanSelect",
  REWARD_SELECT: "GiftingSKUSelect",
  CUSTOMIZATION: "PremiumGiftCustomization",
  SUCCESS: "PremiumGiftSuccess",
  GIFTING_BADGE: "GiftingBadgePostPurchase",
};
let obj2 = {
  [PLAN_SELECT]: PremiumAnalyticsUtils.PaymentFlowStep.SKU_SELECT,
  [REWARD_SELECT]: PremiumAnalyticsUtils.PaymentFlowStep.REWARD_SKU_SELECT,
  [CUSTOMIZATION]: PremiumAnalyticsUtils.PaymentFlowStep.PLAN_SELECT,
  [SUCCESS]: PremiumAnalyticsUtils.PaymentFlowStep.CONFIRM,
  [GIFTING_BADGE]: PremiumAnalyticsUtils.PaymentFlowStep.CONFIRM,
};
({ PLAN_SELECT, REWARD_SELECT, CUSTOMIZATION, SUCCESS, GIFTING_BADGE } = PremiumGiftScreens);
let obj3 = { header: obj4 };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
let closure_9 = createStyles.createStyles(obj3);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, pop, arg2) => {
      let closure_0;
      let error;
      let first;
      let isLoadingWishlist;
      let userProfile;
      let wishlist;
      let wishlistId;
      _require = arg2;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(40);
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [UserStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg2) {
        class S {
          constructor() {
            let user = null;
            if (null != closure_0) {
              user = UserStore.getUser(tmp);
            }
            return user;
          }
        }
        cResult[1] = arg2;
        cResult[2] = S;
      } else {
        class S {
          constructor() {
            let user = null;
            if (null != closure_0) {
              user = UserStore.getUser(tmp);
            }
            return user;
          }
        }
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, S);
      const tmpResult4 = tmp(8430);
      const fetchWishlistAndProfileInfoForUser = tmpResult4.useFetchWishlistAndProfileInfoForUser(arg2);
      ({ wishlist, userProfile, wishlistId, error } = fetchWishlistAndProfileInfoForUser);
      if (cResult[3] !== stateFromStores) {
        class S {
          constructor() {
            let user = null;
            if (null != closure_0) {
              user = UserStore.getUser(tmp);
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
            let user = null;
            if (null != closure_0) {
              user = UserStore.getUser(tmp);
            }
            return user;
          }
        }
      }
      const tmpResult5 = tmp(8430);
      const shouldShowWishlistInDMGifting = tmpResult5.useShouldShowWishlistInDMGifting(tmp11);
      let tmp13 = null != arg2 && !shouldShowWishlistInDMGifting && null == error;
      if (tmp13) {
        class S {
          constructor() {
            let user = null;
            if (null != closure_0) {
              user = UserStore.getUser(tmp);
            }
            return user;
          }
        }
        if (!tmp15) {
          class S {
            constructor() {
              let user = null;
              if (null != closure_0) {
                user = UserStore.getUser(tmp);
              }
              return user;
            }
          }
        }
        tmp13 = tmp15;
      }
      importDefault = tmp13;
      if (cResult[5] === tmp13) {
        class S {
          constructor() {
            let user = null;
            if (null != closure_0) {
              user = UserStore.getUser(tmp);
            }
            return user;
          }
        }
      }
      if (shouldShowWishlistInDMGifting) {
        class S {
          constructor() {
            let user = null;
            if (null != closure_0) {
              user = UserStore.getUser(tmp);
            }
            return user;
          }
        }
        const intl = tmp(1126).intl;
        tmp17[0] = intl.string(tmp(1126).t["JCFN/y"]);
        const tmpResult6 = tmp(6010);
        tmp17[1] = tmpResult6.getHeaderCloseButton(pop);
        tmp17[2] = tmp4.header;
        tmp17[3] = function render() {
          return jsx(PremiumGiftPlanSelectDefault, {
            shouldUseDMWishlistGiftingDesign: true,
            isLoadingWishlist: false,
          });
        };
      } else {
        class S {
          constructor() {
            let user = null;
            if (null != closure_0) {
              user = UserStore.getUser(tmp);
            }
            return user;
          }
        }
        tmp17[2] = function render() {
          return jsx(PremiumGiftPlanSelectDefault, {
            shouldUseDMWishlistGiftingDesign: false,
            isLoadingWishlist: importDefault,
          });
        };
      }
      cResult[5] = tmp13;
      cResult[6] = pop;
      cResult[7] = shouldShowWishlistInDMGifting;
      cResult[8] = tmp4.header;
      cResult[9] = tmp17;
    }
  : (arg0, pop, arg2) => {
      let closure_0;
      let headerCloseButton;
      let headerCloseButton1;
      let intl;
      let intl2;
      let obj5;
      let shouldShowWishlistInDMGifting;
      let tmp2Result;
      let tmp2Result11;
      let tmp2Result12;
      _require = arg2;
      const tmp = closure_9();
      const tmp2 = _require;
      let obj = require("get initialized");
      let items = [shouldShowWishlistInDMGifting];
      const stateFromStores = obj.useStateFromStores(items, () => {
        let user = null;
        if (null != closure_0) {
          user = UserStore.getUser(tmp);
        }
        return user;
      });
      obj2 = require("useWishlistHooks");
      const fetchWishlistAndProfileInfoForUser = obj2.useFetchWishlistAndProfileInfoForUser(arg2);
      ({
        wishlist: importDefault,
        userProfile: dependencyMap,
        wishlistId: _slicedToArray,
        error: react,
      } = fetchWishlistAndProfileInfoForUser);
      const obj3 = require("useWishlistHooks");
      shouldShowWishlistInDMGifting = obj3.useShouldShowWishlistInDMGifting({
        isGift: true,
        giftRecipient: stateFromStores,
        isSocialLayerStorefrontEnabled: false,
      });
      let tmp7 = obj;
      const PLAN_SELECT = obj.PLAN_SELECT;
      if (shouldShowWishlistInDMGifting) {
        const obj4 = {
          title: intl.string(tmp2(1126).t["JCFN/y"]),
          headerLeft: tmp2Result.getHeaderCloseButton(pop),
          headerStyle: tmp.header,
          render() {
            return jsx(PremiumGiftPlanSelectDefault, {
              shouldUseDMWishlistGiftingDesign: true,
              isLoadingWishlist: false,
            });
          },
        };
        intl = tmp2(1126).intl;
        obj5 = obj4;
        tmp2Result = tmp2(6010);
      } else {
        obj5 = {
          title: "",
          headerShown: false,
          render() {
            let isLoadingWishlist = null != closure_0;
            PremiumGiftPlanSelectDefault;
            if (isLoadingWishlist) {
              isLoadingWishlist = !shouldShowWishlistInDMGifting;
            }
            if (isLoadingWishlist) {
              isLoadingWishlist = null == react;
            }
            if (isLoadingWishlist) {
              let tmp7 = null == dependencyMap;
              if (!tmp7) {
                tmp7 = null != _slicedToArray && null == importDefault;
                const tmp9 = null != _slicedToArray && null == importDefault;
              }
              isLoadingWishlist = tmp7;
            }
            return <tmp2 shouldUseDMWishlistGiftingDesign={false} isLoadingWishlist={isLoadingWishlist} />;
          },
        };
      }
      const obj6 = {};
      obj6[PLAN_SELECT] = obj5;
      const REWARD_SELECT = tmp7.REWARD_SELECT;
      const obj7 = {
        title: "",
        headerTitle() {},
        headerLeft: headerCloseButton,
        headerStyle: tmp.header,
        render(arg0) {
          let allRewards;
          let claimableRewards;
          let defaultHighlightedReward;
          let onSelect;
          ({ defaultHighlightedReward, allRewards, claimableRewards, onSelect } = arg0);
          return jsx(GiftingSKUSelectScreenDefault, {
            defaultHighlightedReward,
            allRewards,
            claimableRewards,
            onSelect,
          });
        },
      };
      if (arg0 === tmp7.REWARD_SELECT) {
        const tmp2Result7 = tmp2(6010);
        headerCloseButton = tmp2Result7.getHeaderCloseButton(pop);
      } else {
        const tmp2Result8 = tmp2(6010);
        headerCloseButton = tmp2Result8.getHeaderBackButton();
      }
      obj6[REWARD_SELECT] = obj7;
      const CUSTOMIZATION = tmp7.CUSTOMIZATION;
      if (arg0 === tmp7.CUSTOMIZATION) {
        const tmp2Result9 = tmp2(6010);
        headerCloseButton1 = tmp2Result9.getHeaderCloseButton(pop);
      } else {
        const tmp2Result10 = tmp2(6010);
        headerCloseButton1 = tmp2Result10.getHeaderBackButton();
      }
      obj6[CUSTOMIZATION] = {
        title: "",
        headerLeft: headerCloseButton1,
        headerStyle: tmp.header,
        render() {
          return jsx(PremiumGiftCustomizationDefault, {});
        },
      };
      const SUCCESS = tmp7.SUCCESS;
      const obj8 = {
        title: "",
        headerLeft: tmp2Result11.getHeaderCloseButton(pop),
        headerStyle: tmp.header,
        render() {
          return jsx(PremiumGiftSuccessDefault, {});
        },
      };
      obj6[SUCCESS] = obj8;
      tmp2Result11 = tmp2(6010);
      const GIFTING_BADGE = tmp7.GIFTING_BADGE;
      const obj9 = {
        title: intl2.string(_modDef2589.roVAey),
        headerLeft: tmp2Result12.getHeaderCloseButton(pop),
        headerTransparent: true,
        headerStyle: { backgroundColor: "transparent", shadowColor: "transparent" },
        render(currentProgress) {
          return jsx(GiftBadgePostPurchaseDefault, {
            currentProgress: currentProgress.currentProgress,
            onSendGift() {
              let items;
              const obj = { analyticsLocations: items };
              const openGiftModal = closure_1_0(closure_1_2[19]).openGiftModal;
              items = [];
              closure_1_0(closure_1_2[19]);
              items[0] = closure_1_1(closure_1_2[20]).GIFTING_BADGE_POST_PURCHASE;
              openGiftModal(obj);
            },
          });
        },
      };
      intl2 = tmp2(1126).intl;
      obj6[GIFTING_BADGE] = obj9;
      tmp2Result12 = tmp2(6010);
      return obj6;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let analyticsLocation;
      let analyticsLocations;
      let closure_1;
      let first;
      let initialRoute;
      let onDismiss;
      let order;
      let planInterval;
      let premiumType;
      let recipientUserId;
      let tmp19;
      let tmp20;
      let obj = onDismiss(576);
      const cResult = obj.c(26);
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
          const obj = onDismiss(dependencyMap[22]);
          return obj.v4();
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      const tmp6 = useInitialValueDefault(first);
      if (cResult[1] === tmp6) {
        if (cResult[2] === analyticsLocation) {
          let tmp7;
          let tmp21;
          if (cResult[3] === analyticsLocations) {
            tmp7 = cResult[4];
          }
          if (initialRoute == null) {
            let PLAN_SELECT;
            if (null != premiumType) {
              PLAN_SELECT = obj.CUSTOMIZATION;
            } else {
              PLAN_SELECT = obj.PLAN_SELECT;
            }
            initialRoute = PLAN_SELECT;
          }
          if (cResult[5] !== onDismiss) {
            class P {
              constructor() {
                const arr = ModalActionCreatorsDefault;
                arr.pop();
                if (onDismiss != null) {
                  onDismiss();
                }
              }
            }
            cResult[5] = onDismiss;
            cResult[6] = P;
          } else {
            class P {
              constructor() {
                const arr = ModalActionCreatorsDefault;
                arr.pop();
                if (onDismiss != null) {
                  onDismiss();
                }
              }
            }
          }
          const tmp14 = closure_10(initialRoute, P, recipientUserId);
          [tmp19, tmp20] = react.useState(obj2[initialRoute]);
          importDefault = tmp20;
          _slicedToArray(react.useState(obj2[initialRoute]), 2);
          const tmpResult = onDismiss(4541);
          if (tmpResult.isPremiumGiftingSupported()) {
            class P {
              constructor() {
                const arr = ModalActionCreatorsDefault;
                arr.pop();
                if (onDismiss != null) {
                  onDismiss();
                }
              }
            }
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              class P {
                constructor() {
                  const arr = ModalActionCreatorsDefault;
                  arr.pop();
                  if (onDismiss != null) {
                    onDismiss();
                  }
                }
              }
              cResult[8] = tmp25;
            } else {
              class P {
                constructor() {
                  const arr = ModalActionCreatorsDefault;
                  arr.pop();
                  if (onDismiss != null) {
                    onDismiss();
                  }
                }
              }
            }
            if (cResult[9] === initialRoute) {
              class P {
                constructor() {
                  const arr = ModalActionCreatorsDefault;
                  arr.pop();
                  if (onDismiss != null) {
                    onDismiss();
                  }
                }
              }
              if (cResult[12] === tmp19) {
                class P {
                  constructor() {
                    const arr = ModalActionCreatorsDefault;
                    arr.pop();
                    if (onDismiss != null) {
                      onDismiss();
                    }
                  }
                }
                if (cResult[15] === tmp7) {
                  class P {
                    constructor() {
                      const arr = ModalActionCreatorsDefault;
                      arr.pop();
                      if (onDismiss != null) {
                        onDismiss();
                      }
                    }
                  }
                }
                cResult[15] = tmp7;
                cResult[16] = P;
                cResult[17] = order;
                cResult[18] = planInterval;
                cResult[19] = premiumType;
                cResult[20] = recipientUserId;
                cResult[21] = tmp29;
                cResult[22] = jsx(onDismiss(10430).NativeGiftContextProvider, {
                  basePurchaseAnalytics: tmp7,
                  recipientUserId,
                  onClose: P,
                  setCurrentAnalyticsStep: tmp20,
                  premiumType,
                  planInterval,
                  initialOrder: order,
                  children: tmp29,
                });
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
              }
              cResult[12] = tmp19;
              cResult[13] = tmp26;
              cResult[14] = jsx(PremiumGiftAnalyticsDefault, { currentStep: tmp19, children: tmp26 });
              const tmp31 = jsx(PremiumGiftAnalyticsDefault, { currentStep: tmp19, children: tmp26 });
            }
            cResult[9] = initialRoute;
            cResult[10] = tmp14;
            cResult[11] = jsx(onDismiss(6496).Navigator, {
              initialRouteName: initialRoute,
              screens: tmp14,
              onStateChange: tmp25,
            });
            const tmp28 = jsx(onDismiss(6496).Navigator, {
              initialRouteName: initialRoute,
              screens: tmp14,
              onStateChange: tmp25,
            });
          } else {
            class P {
              constructor() {
                const arr = ModalActionCreatorsDefault;
                arr.pop();
                if (onDismiss != null) {
                  onDismiss();
                }
              }
            }
            if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
              class P {
                constructor() {
                  const arr = ModalActionCreatorsDefault;
                  arr.pop();
                  if (onDismiss != null) {
                    onDismiss();
                  }
                }
              }
              UnsupportedFeatureModalDefault;
              const intl = onDismiss(1126).intl;
              const tmp23 = <tmp4Result title={intl.string(onDismiss(1126).t["JCFN/y"])} />;
              cResult[7] = tmp23;
              tmp21 = tmp23;
            } else {
              class P {
                constructor() {
                  const arr = ModalActionCreatorsDefault;
                  arr.pop();
                  if (onDismiss != null) {
                    onDismiss();
                  }
                }
              }
            }
          }
          return tmp21;
        }
      }
      const tmpResult2 = onDismiss(10394);
      const basePurchaseFlowAnalyticsFields = tmpResult2.getBasePurchaseFlowAnalyticsFields({
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
    }
  : (analyticsLocations) => {
      let analyticsLoadId;
      let analyticsLocation;
      let closure_4;
      let initialRoute;
      let onDismiss;
      let order;
      let planInterval;
      let premiumType;
      let recipientUserId;
      let tmp13Result;
      ({ recipientUserId, premiumType, analyticsLocation } = analyticsLocations);
      analyticsLocations = analyticsLocations.analyticsLocations;
      ({ initialRoute, onDismiss } = analyticsLocations);
      react = undefined;
      ({ planInterval, order } = analyticsLocations);
      const analyticsLocations2 = analyticsLocations(onDismiss[21])(analyticsLocations).analyticsLocations;
      const tmp3 = analyticsLocations(onDismiss[23])(() => {
        const obj = analyticsLocation(onDismiss[22]);
        return obj.v4();
      });
      _slicedToArray = tmp3;
      let obj = react;
      const items = [tmp3, analyticsLocation, analyticsLocations];
      const memo = react.useMemo(() => {
        const obj = PremiumAnalyticsUtils;
        obj2 = { isGift: true, analyticsLoadId, analyticsLocation, analyticsLocations };
        return obj.getBasePurchaseFlowAnalyticsFields(obj2);
      }, items);
      if (initialRoute == null) {
        let PLAN_SELECT;
        if (null != premiumType) {
          PLAN_SELECT = obj.CUSTOMIZATION;
        } else {
          PLAN_SELECT = obj.PLAN_SELECT;
        }
        initialRoute = PLAN_SELECT;
      }
      const items1 = [onDismiss];
      const callback = obj.useCallback(() => {
        const arr = ModalActionCreatorsDefault;
        arr.pop();
        if (onDismiss != null) {
          onDismiss();
        }
      }, items1);
      const tmp8 = closure_10(initialRoute, callback, recipientUserId);
      const tmp9 = _slicedToArray(obj.useState(obj2[initialRoute]), 2);
      react = tmp11;
      const first = tmp9[0];
      obj2 = analyticsLocation(onDismiss[25]);
      if (obj2.isPremiumGiftingSupported()) {
        const AnalyticsLocationProvider = analyticsLocation(onDismiss[21]).AnalyticsLocationProvider;
        const NativeGiftContextProvider = analyticsLocation(onDismiss[29]).NativeGiftContextProvider;
        analyticsLocations(onDismiss[28]);
        tmp13Result = <AnalyticsLocationProvider value={analyticsLocations2}>{null}</AnalyticsLocationProvider>;
      } else {
        analyticsLocations(onDismiss[26]);
        const intl = analyticsLocation(onDismiss[11]).intl;
        tmp13Result = <tmpResult2 title={intl.string(analyticsLocation(onDismiss[11]).t["JCFN/y"])} />;
      }
      return tmp13Result;
    };
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftModal.tsx");

export default tmp2;
export { PremiumGiftScreens };

// === Module 10905: PremiumGiftModal ===

// Module 10905 (PremiumGiftModal)
import nativeDefault from "native" /* 576 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4925 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10906 */;
import PremiumGiftPlanSelectDefault from "PremiumGiftPlanSelect" /* 10907 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const jsx = fn(21).jsx;
const PremiumGiftScreens = { PLAN_SELECT: "PremiumGiftPlanSelect", REWARD_SELECT: "GiftingSKUSelect", CUSTOMIZATION: "PremiumGiftCustomization", SUCCESS: "PremiumGiftSuccess", GIFTING_BADGE: "GiftingBadgePostPurchase" };
let obj2 = { [PLAN_SELECT]: fn(10906).PaymentFlowStep.SKU_SELECT, [REWARD_SELECT]: fn(10906).PaymentFlowStep.REWARD_SKU_SELECT, [CUSTOMIZATION]: fn(10906).PaymentFlowStep.PLAN_SELECT, [SUCCESS]: fn(10906).PaymentFlowStep.CONFIRM, [GIFTING_BADGE]: fn(10906).PaymentFlowStep.CONFIRM };
({ PLAN_SELECT, REWARD_SELECT, CUSTOMIZATION, SUCCESS, GIFTING_BADGE } = PremiumGiftScreens);
const createStyles = fn(4722);
let obj4 = { header: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" } };
let closure_9 = createStyles.createStyles(obj4);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftModal.tsx");

export default function PremiumGiftModal(analyticsLocations) {
  ({ recipientUserId, premiumType, analyticsLocation } = analyticsLocations);
  analyticsLocations = analyticsLocations.analyticsLocations;
  ({ initialRoute, onDismiss } = analyticsLocations);
  closure_4 = undefined;
  ({ planInterval, order } = analyticsLocations);
  const tmp3 = analyticsLocations(onDismiss[20])(() => analyticsLocation(onDismiss[21]).v4());
  _slicedToArray = tmp3;
  let items = [tmp3, analyticsLocation, analyticsLocations];
  if (initialRoute != null) {
    const items1 = [onDismiss];
    const callback = obj.useCallback(() => {
      ModalActionCreatorsDefault.pop();
      if (onDismiss != null) {
        onDismiss();
      }
    }, items1);
    closure_129_0 = recipientUserId;
    closure_129_1 = undefined;
    closure_129_2 = undefined;
    closure_129_3 = undefined;
    closure_129_4 = undefined;
    const tmp10 = closure_9();
    obj2 = analyticsLocation(onDismiss[7]);
    const items2 = [UserStore];
    const stateFromStores = obj2.useStateFromStores(items2, () => {
      let user = null;
      if (null != analyticsLocation) {
        user = UserStore.getUser(tmp);
      }
      return user;
    });
    const fetchWishlistAndProfileInfoForUser = analyticsLocation(onDismiss[8]).useFetchWishlistAndProfileInfoForUser(recipientUserId);
    ({ wishlist: closure_129_1, userProfile: closure_129_2, wishlistId: closure_129_3, error: closure_129_4 } = fetchWishlistAndProfileInfoForUser);
    const obj3 = analyticsLocation(onDismiss[8]);
    const obj5 = { isGift: true, giftRecipient: stateFromStores, isSocialLayerStorefrontEnabled: false };
    const shouldShowWishlistInDMGifting = analyticsLocation(onDismiss[8]).useShouldShowWishlistInDMGifting(obj5);
    closure_129_5 = shouldShowWishlistInDMGifting;
    if (shouldShowWishlistInDMGifting) {
      const obj6 = { title: null, headerLeft: null, headerStyle: null, render: null };
      const intl = analyticsLocation(onDismiss[9]).intl;
      obj6.title = intl.string(analyticsLocation(onDismiss[9]).t["JCFN/y"]);
      obj6.headerLeft = analyticsLocation(onDismiss[10]).getHeaderCloseButton(callback);
      obj6.headerStyle = tmp10.header;
      obj6.render = function render() {
        return jsx(analyticsLocations(onDismiss[11]), { shouldUseDMWishlistGiftingDesign: true, isLoadingWishlist: false });
      };
      let obj7 = obj6;
      const tmp11Result = analyticsLocation(onDismiss[10]);
    } else {
      obj7 = {
        title: "",
        headerShown: false,
        render() {
              let isLoadingWishlist = null != analyticsLocation;
              if (isLoadingWishlist) {
                isLoadingWishlist = !UserStore;
              }
              if (isLoadingWishlist) {
                isLoadingWishlist = null == closure_4;
              }
              if (isLoadingWishlist) {
                let tmp7 = null == onDismiss;
                if (!tmp7) {
                  let tmp9 = null != closure_3;
                  if (tmp9) {
                    tmp9 = null == analyticsLocations;
                  }
                  tmp7 = tmp9;
                }
                isLoadingWishlist = tmp7;
              }
              return jsx(PremiumGiftPlanSelectDefault, { shouldUseDMWishlistGiftingDesign: false, isLoadingWishlist });
            }
      };
    }
    const obj8 = {};
    obj8[obj.PLAN_SELECT] = obj7;
    if (initialRoute === obj.REWARD_SELECT) {
      let headerCloseButton = analyticsLocation(onDismiss[10]).getHeaderCloseButton(callback);
      const tmp11Result8 = analyticsLocation(onDismiss[10]);
    } else {
      headerCloseButton = analyticsLocation(onDismiss[10]).getHeaderBackButton();
      const tmp11Result9 = analyticsLocation(onDismiss[10]);
    }
    const obj9 = {
      title: "",
      headerLeft: headerCloseButton,
      headerStyle: tmp10.header,
      render(arg0) {
          ({ defaultHighlightedReward, allRewards, claimableRewards, onSelect } = arg0);
          return jsx(analyticsLocations(onDismiss[12]), { defaultHighlightedReward, allRewards, claimableRewards, onSelect });
        }
    };
    obj8[obj.REWARD_SELECT] = obj9;
    if (initialRoute === obj.CUSTOMIZATION) {
      let headerCloseButton1 = analyticsLocation(onDismiss[10]).getHeaderCloseButton(callback);
      const tmp11Result10 = analyticsLocation(onDismiss[10]);
    } else {
      headerCloseButton1 = analyticsLocation(onDismiss[10]).getHeaderBackButton();
      const tmp11Result11 = analyticsLocation(onDismiss[10]);
    }
    const obj10 = {
      title: "",
      headerLeft: headerCloseButton1,
      headerStyle: tmp10.header,
      render() {
          return jsx(analyticsLocations(onDismiss[13]), {});
        }
    };
    obj8[obj.CUSTOMIZATION] = obj10;
    const obj11 = { title: "", headerLeft: null, headerStyle: null, render: null };
    const obj4 = analyticsLocation(onDismiss[8]);
    obj11.headerLeft = analyticsLocation(onDismiss[10]).getHeaderCloseButton(callback);
    obj11.headerStyle = tmp10.header;
    obj11.render = function render() {
      return jsx(analyticsLocations(onDismiss[14]), {});
    };
    obj8[obj.SUCCESS] = obj11;
    const obj12 = { title: null, headerLeft: null, headerTransparent: true, headerStyle: null, render: null };
    const intl2 = analyticsLocation(onDismiss[9]).intl;
    obj12.title = intl2.string(tmp(onDismiss[15]).roVAey);
    const tmp11Result12 = analyticsLocation(onDismiss[10]);
    obj12.headerLeft = analyticsLocation(onDismiss[10]).getHeaderCloseButton(callback);
    obj12.headerStyle = { backgroundColor: "transparent", shadowColor: "transparent" };
    obj12.render = function render(currentProgress) {
      return jsx(analyticsLocations(onDismiss[16]), {
        currentProgress: currentProgress.currentProgress,
        onSendGift() {
          obj2 = { analyticsLocations: null };
          const items = [analyticsLocations(7378).GIFTING_BADGE_POST_PURCHASE];
          obj2.analyticsLocations = items;
          analyticsLocation(10904).openGiftModal(obj2);
        }
      });
    };
    obj8[obj.GIFTING_BADGE] = obj12;
    const tmp21 = _slicedToArray(obj.useState(obj2[initialRoute]), 2);
    closure_4 = tmp22;
    const tmp11Result13 = analyticsLocation(onDismiss[10]);
    if (tmp11Result14.isPremiumGiftingSupported()) {
      const obj13 = { value: analyticsLocations(onDismiss[19])(analyticsLocations).analyticsLocations, children: null };
      const obj14 = { basePurchaseAnalytics: tmp4, recipientUserId, onClose: callback, setCurrentAnalyticsStep: tmp22, premiumType, planInterval, initialOrder: order, children: null };
      const obj15 = { currentStep: tmp21[0], children: null };
      const obj16 = {
        initialRouteName: initialRoute,
        screens: obj8,
        onStateChange(arg0) {
              if (null != arg0) {
                closure_4(obj2[arg0.routes[arg0.index].name]);
              }
            }
      };
      obj15.children = jsx(analyticsLocation(onDismiss[27]).Navigator, {
        initialRouteName: initialRoute,
        screens: obj8,
        onStateChange(arg0) {
              if (null != arg0) {
                closure_4(obj2[arg0.routes[arg0.index].name]);
              }
            }
      });
      obj14.children = jsx(tmp(onDismiss[26]), { currentStep: tmp21[0], children: null });
      obj13.children = jsx(analyticsLocation(onDismiss[25]).NativeGiftContextProvider, { basePurchaseAnalytics: tmp4, recipientUserId, onClose: callback, setCurrentAnalyticsStep: tmp22, premiumType, planInterval, initialOrder: order, children: null });
      let tmp23Result = jsx(analyticsLocation(onDismiss[19]).AnalyticsLocationProvider, { value: analyticsLocations(onDismiss[19])(analyticsLocations).analyticsLocations, children: null });
      const tmpResult = tmp(onDismiss[26]);
    } else {
      const obj17 = { title: null };
      const intl3 = analyticsLocation(onDismiss[9]).intl;
      obj17.title = intl3.string(analyticsLocation(onDismiss[9]).t["JCFN/y"]);
      tmp23Result = jsx(tmp(onDismiss[24]), { title: null });
      const tmpResult2 = tmp(onDismiss[24]);
    }
    return tmp23Result;
  } else if (null != premiumType) {
    let PLAN_SELECT = obj.CUSTOMIZATION;
  } else {
    PLAN_SELECT = obj.PLAN_SELECT;
  }
};
export { PremiumGiftScreens };
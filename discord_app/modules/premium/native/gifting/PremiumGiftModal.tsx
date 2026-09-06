// === Module 10662: PremiumGiftModal ===

// Module 10662 (PremiumGiftModal)
import nativeDefault from "native" /* 576 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10663 */;
import PremiumGiftPlanSelectDefault from "PremiumGiftPlanSelect" /* 10664 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const jsx = fn(21).jsx;
let obj = { PLAN_SELECT: "PremiumGiftPlanSelect", REWARD_SELECT: "GiftingSKUSelect", CUSTOMIZATION: "PremiumGiftCustomization", SUCCESS: "PremiumGiftSuccess", GIFTING_BADGE: "GiftingBadgePostPurchase" };
obj = { [PLAN_SELECT]: fn(10663).PaymentFlowStep.SKU_SELECT, [REWARD_SELECT]: fn(10663).PaymentFlowStep.REWARD_SKU_SELECT, [CUSTOMIZATION]: fn(10663).PaymentFlowStep.PLAN_SELECT, [SUCCESS]: fn(10663).PaymentFlowStep.CONFIRM, [GIFTING_BADGE]: fn(10663).PaymentFlowStep.CONFIRM };
({ PLAN_SELECT, REWARD_SELECT, CUSTOMIZATION, SUCCESS, GIFTING_BADGE } = obj);
const createStyles = fn(4560);
obj = { header: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" } };
let closure_9 = createStyles.createStyles(obj);
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
  obj = closure_4;
  let items = [tmp3, analyticsLocation, analyticsLocations];
  if (initialRoute != null) {
    const items1 = [onDismiss];
    const callback = obj.useCallback(() => {
      let arr = ModalActionCreatorsDefault;
      arr = arr.pop();
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
    let obj1 = analyticsLocation(tmp2[7]);
    const items2 = [UserStore];
    const stateFromStores = obj1.useStateFromStores(items2, () => {
      let user = null;
      if (null != analyticsLocation) {
        user = UserStore.getUser(tmp);
      }
      return user;
    });
    let obj2 = analyticsLocation(tmp2[8]);
    const fetchWishlistAndProfileInfoForUser = obj2.useFetchWishlistAndProfileInfoForUser(recipientUserId);
    ({ wishlist: closure_129_1, userProfile: closure_129_2, wishlistId: closure_129_3, error: closure_129_4 } = fetchWishlistAndProfileInfoForUser);
    let obj3 = analyticsLocation(tmp2[8]);
    obj = { isGift: true, giftRecipient: stateFromStores, isSocialLayerStorefrontEnabled: false };
    const shouldShowWishlistInDMGifting = obj3.useShouldShowWishlistInDMGifting(obj);
    closure_129_5 = shouldShowWishlistInDMGifting;
    if (shouldShowWishlistInDMGifting) {
      obj = { title: null, headerLeft: null, headerStyle: null, render: null };
      const intl = tmp11(tmp2[9]).intl;
      obj.title = intl.string(tmp11(tmp2[9]).t["JCFN/y"]);
      let tmp11Result = tmp11(tmp2[10]);
      obj.headerLeft = tmp11Result.getHeaderCloseButton(callback);
      obj.headerStyle = tmp10.header;
      obj.render = function render() {
        return jsx(analyticsLocations(onDismiss[11]), { shouldUseDMWishlistGiftingDesign: true, isLoadingWishlist: false });
      };
      obj1 = obj;
    } else {
      obj1 = {
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
    obj2 = {};
    obj2[obj.PLAN_SELECT] = obj1;
    if (initialRoute === obj.REWARD_SELECT) {
      tmp11Result = tmp11(tmp2[10]);
      let headerCloseButton = tmp11Result.getHeaderCloseButton(callback);
    } else {
      headerCloseButton = tmp11(tmp2[10]).getHeaderBackButton();
      const tmp11Result1 = tmp11(tmp2[10]);
    }
    obj3 = {
      title: "",
      headerLeft: headerCloseButton,
      headerStyle: tmp10.header,
      render(arg0) {
          ({ defaultHighlightedReward, allRewards, claimableRewards, onSelect } = arg0);
          return jsx(analyticsLocations(onDismiss[12]), { defaultHighlightedReward, allRewards, claimableRewards, onSelect });
        }
    };
    obj2[obj.REWARD_SELECT] = obj3;
    if (initialRoute === obj.CUSTOMIZATION) {
      let headerCloseButton1 = tmp11(tmp2[10]).getHeaderCloseButton(callback);
      const tmp11Result2 = tmp11(tmp2[10]);
    } else {
      headerCloseButton1 = tmp11(tmp2[10]).getHeaderBackButton();
      const tmp11Result3 = tmp11(tmp2[10]);
    }
    const obj4 = {
      title: "",
      headerLeft: headerCloseButton1,
      headerStyle: tmp10.header,
      render() {
          return jsx(analyticsLocations(onDismiss[13]), {});
        }
    };
    obj2[obj.CUSTOMIZATION] = obj4;
    const obj5 = {
      title: "",
      headerLeft: analyticsLocation(tmp2[10]).getHeaderCloseButton(callback),
      headerStyle: tmp10.header,
      render() {
          return jsx(analyticsLocations(onDismiss[14]), {});
        }
    };
    obj2[obj.SUCCESS] = obj5;
    const obj6 = { title: null, headerLeft: null, headerTransparent: true, headerStyle: null, render: null };
    const intl2 = tmp11(tmp2[9]).intl;
    obj6.title = intl2.string(tmp(tmp2[15]).roVAey);
    const tmp11Result4 = analyticsLocation(tmp2[10]);
    obj6.headerLeft = analyticsLocation(tmp2[10]).getHeaderCloseButton(callback);
    obj6.headerStyle = { backgroundColor: "transparent", shadowColor: "transparent" };
    obj6.render = function render(currentProgress) {
      return jsx(analyticsLocations(onDismiss[16]), {
        currentProgress: currentProgress.currentProgress,
        onSendGift() {
          analyticsLocation(10661);
          obj = { analyticsLocations: null };
          const items = [analyticsLocations(7182).GIFTING_BADGE_POST_PURCHASE];
          obj.analyticsLocations = items;
          obj.openGiftModal(obj);
        }
      });
    };
    obj2[obj.GIFTING_BADGE] = obj6;
    const tmp21 = _slicedToArray(obj.useState(obj[initialRoute]), 2);
    closure_4 = tmp22;
    const tmp11Result5 = analyticsLocation(tmp2[10]);
    if (tmp11Result6.isPremiumGiftingSupported()) {
      const obj7 = { value: analyticsLocations(onDismiss[19])(analyticsLocations).analyticsLocations, children: null };
      const obj8 = { basePurchaseAnalytics: tmp4, recipientUserId, onClose: callback, setCurrentAnalyticsStep: tmp22, premiumType, planInterval, initialOrder: order, children: null };
      const obj9 = { currentStep: tmp21[0], children: null };
      let tmpResult = tmp(tmp2[26]);
      const obj10 = {
        initialRouteName: initialRoute,
        screens: obj2,
        onStateChange(arg0) {
              if (null != arg0) {
                closure_4(obj[arg0.routes[arg0.index].name]);
              }
            }
      };
      obj9.children = tmp23(tmp11(tmp2[27]).Navigator, obj10);
      obj8.children = tmp23(tmpResult, obj9);
      obj7.children = tmp23(tmp11(tmp2[25]).NativeGiftContextProvider, obj8);
      let tmp23Result = tmp23(tmp11(tmp2[19]).AnalyticsLocationProvider, obj7);
    } else {
      const obj11 = { title: null };
      tmpResult = tmp(tmp2[24]);
      const intl3 = tmp11(tmp2[9]).intl;
      obj11.title = intl3.string(tmp11(tmp2[9]).t["JCFN/y"]);
      tmp23Result = tmp23(tmpResult, obj11);
    }
    return tmp23Result;
  } else if (null != premiumType) {
    let PLAN_SELECT = obj.CUSTOMIZATION;
  } else {
    PLAN_SELECT = obj.PLAN_SELECT;
  }
};
export const PremiumGiftScreens = obj;
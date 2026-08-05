import { useInitialValue } from "../../../../hooks/useInitialValue.tsx";
import { context } from "../../../app_analytics/useAnalyticsLocations.tsx";
// discord_app/modules/premium/native/gifting/PremiumGiftModal.tsx
import _slicedToArray from "_slicedToArray";
import context from "context";
import mergeGuildAvatar from "mergeGuildAvatar";
import { jsx } from "v1";
import createCacheKey from "createCacheKey";

let CUSTOMIZATION;
let GIFTING_BADGE;
let PLAN_SELECT;
let REWARD_SELECT;
let SUCCESS;
const require = arg1;
let obj = { PLAN_SELECT: "PremiumGiftPlanSelect", REWARD_SELECT: "GiftingSKUSelect", CUSTOMIZATION: "PremiumGiftCustomization", SUCCESS: "PremiumGiftSuccess", GIFTING_BADGE: "GiftingBadgePostPurchase" };
obj = { [PLAN_SELECT]: require("PaymentFlowStep").PaymentFlowStep.SKU_SELECT, [REWARD_SELECT]: require("PaymentFlowStep").PaymentFlowStep.REWARD_SKU_SELECT, [CUSTOMIZATION]: require("PaymentFlowStep").PaymentFlowStep.PLAN_SELECT, [SUCCESS]: require("PaymentFlowStep").PaymentFlowStep.CONFIRM, [GIFTING_BADGE]: require("PaymentFlowStep").PaymentFlowStep.CONFIRM };
({ PLAN_SELECT, REWARD_SELECT, CUSTOMIZATION, SUCCESS, GIFTING_BADGE } = obj);
obj = { header: null };
obj[0] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
let closure_9 = createCacheKey.createStyles(obj);
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftModal.tsx");

export default function PremiumGiftModal(analyticsLocations) {
  let analyticsLocation;
  let c1;
  let c2;
  let c3;
  let c4;
  let initialRoute;
  let onDismiss;
  let order;
  let planInterval;
  let premiumType;
  let recipientUserId;
  ({ recipientUserId, premiumType, analyticsLocation } = analyticsLocations);
  recipientUserId = analyticsLocation;
  analyticsLocations = analyticsLocations.analyticsLocations;
  let importDefault = analyticsLocations;
  ({ initialRoute, onDismiss } = analyticsLocations);
  let dependencyMap = onDismiss;
  let callback;
  c4 = undefined;
  ({ planInterval, order } = analyticsLocations);
  const tmp3 = useInitialValue(() => recipientUserId(_undefined2[21]).v4());
  callback = tmp3;
  let obj = c4;
  let items = [tmp3, analyticsLocation, analyticsLocations];
  if (initialRoute != null) {
    const items1 = [onDismiss];
    callback = obj.useCallback(() => {
      let arr = _undefined(_undefined2[22]);
      arr = arr.pop();
      if (_undefined2 != null) {
        _undefined2();
      }
    }, items1);
    importDefault = undefined;
    dependencyMap = undefined;
    callback = undefined;
    c4 = undefined;
    let shouldShowWishlistInDMGifting;
    const tmp10 = callback2();
    let obj1 = recipientUserId(589);
    const items2 = [shouldShowWishlistInDMGifting];
    const stateFromStores = obj1.useStateFromStores(items2, () => {
      let user = null;
      if (null != recipientUserId) {
        user = shouldShowWishlistInDMGifting.getUser(tmp);
      }
      return user;
    });
    let obj2 = recipientUserId(9274);
    const fetchWishlistAndProfileInfoForUser = obj2.useFetchWishlistAndProfileInfoForUser(recipientUserId);
    ({ wishlist: c1, userProfile: c2, wishlistId: c3, error: c4 } = fetchWishlistAndProfileInfoForUser);
    let obj3 = recipientUserId(9274);
    obj = { isGift: true, giftRecipient: null, isSocialLayerStorefrontEnabled: false };
    obj[1] = stateFromStores;
    shouldShowWishlistInDMGifting = obj3.useShouldShowWishlistInDMGifting(obj);
    if (shouldShowWishlistInDMGifting) {
      obj = { title: null, headerLeft: null, headerStyle: null, render: null };
      const intl = tmp11(1236).intl;
      obj[0] = intl.string(tmp11(1236).t["JCFN/y"]);
      let tmp11Result = tmp11(5238);
      obj[1] = tmp11Result.getHeaderCloseButton(callback);
      obj[2] = tmp10.header;
      obj[3] = function render() {
        return callback(_undefined(_undefined2[11]), { shouldUseDMWishlistGiftingDesign: true, isLoadingWishlist: false });
      };
      obj1 = obj;
    } else {
      obj1 = { title: "", headerShown: false, render: null };
      obj1[2] = function render() {
        let isLoadingWishlist = null != recipientUserId;
        if (isLoadingWishlist) {
          isLoadingWishlist = !shouldShowWishlistInDMGifting;
        }
        if (isLoadingWishlist) {
          isLoadingWishlist = null == c4;
        }
        if (isLoadingWishlist) {
          let tmp7 = null == _undefined2;
          if (!tmp7) {
            let tmp9 = null != c3;
            if (tmp9) {
              tmp9 = null == _undefined;
            }
            tmp7 = tmp9;
          }
          isLoadingWishlist = tmp7;
        }
        return outer1_6(_undefined(_undefined2[11]), { shouldUseDMWishlistGiftingDesign: false, isLoadingWishlist });
      };
    }
    obj2 = {};
    obj2[obj.PLAN_SELECT] = obj1;
    if (initialRoute === obj.REWARD_SELECT) {
      tmp11Result = tmp11(5238);
      let headerCloseButton = tmp11Result.getHeaderCloseButton(callback);
    } else {
      headerCloseButton = tmp11(5238).getHeaderBackButton();
      const tmp11Result1 = tmp11(5238);
    }
    obj3 = { title: "", headerLeft: null, headerStyle: null, render: null };
    obj3[1] = headerCloseButton;
    obj3[2] = tmp10.header;
    obj3[3] = function render(arg0) {
      let allRewards;
      let claimableRewards;
      let defaultHighlightedReward;
      let onSelect;
      ({ defaultHighlightedReward, allRewards, claimableRewards, onSelect } = arg0);
      return callback(_undefined(_undefined2[12]), { defaultHighlightedReward, allRewards, claimableRewards, onSelect });
    };
    obj2[obj.REWARD_SELECT] = obj3;
    if (initialRoute === obj.CUSTOMIZATION) {
      let headerCloseButton1 = tmp11(5238).getHeaderCloseButton(callback);
      const tmp11Result2 = tmp11(5238);
    } else {
      headerCloseButton1 = tmp11(5238).getHeaderBackButton();
      const tmp11Result3 = tmp11(5238);
    }
    const obj4 = { title: "", headerLeft: null, headerStyle: null, render: null };
    obj4[1] = headerCloseButton1;
    obj4[2] = tmp10.header;
    obj4[3] = function render() {
      return callback(_undefined(_undefined2[13]), {});
    };
    obj2[obj.CUSTOMIZATION] = obj4;
    const obj5 = { title: "", headerLeft: null, headerStyle: null, render: null };
    obj5[1] = recipientUserId(5238).getHeaderCloseButton(callback);
    obj5[2] = tmp10.header;
    obj5[3] = function render() {
      return callback(_undefined(_undefined2[14]), {});
    };
    obj2[obj.SUCCESS] = obj5;
    const obj6 = { title: null, headerLeft: null, headerTransparent: true, headerStyle: null, render: null };
    const intl2 = tmp11(1236).intl;
    obj6[0] = intl2.string(tmp(2381).roVAey);
    const tmp11Result4 = recipientUserId(5238);
    obj6[1] = recipientUserId(5238).getHeaderCloseButton(callback);
    obj6[3] = { backgroundColor: "transparent", shadowColor: "transparent" };
    obj6[4] = function render(currentProgress) {
      return callback(_undefined(_undefined2[16]), {
        currentProgress: currentProgress.currentProgress,
        onSendGift(arg0) {
          let obj = callback(9949);
          obj = { analyticsLocations: null };
          const items = [callback2(5630).GIFTING_BADGE_POST_PURCHASE];
          obj[0] = items;
          obj.openGiftModal(obj);
        }
      });
    };
    obj2[obj.GIFTING_BADGE] = obj6;
    const tmp21 = callback(obj.useState(obj[initialRoute]), 2);
    c4 = tmp22;
    const tmp11Result5 = recipientUserId(5238);
    if (tmp11Result6.isPremiumGiftingSupported()) {
      const obj7 = { value: null, children: null };
      obj7[0] = context(analyticsLocations).analyticsLocations;
      const obj8 = { basePurchaseAnalytics: null, recipientUserId: null, onClose: null, setCurrentAnalyticsStep: null, premiumType: null, planInterval: null, initialOrder: null, children: null };
      obj8[0] = tmp4;
      obj8[1] = recipientUserId;
      obj8[2] = callback;
      obj8[3] = tmp22;
      obj8[4] = premiumType;
      obj8[5] = planInterval;
      obj8[6] = order;
      const obj9 = { currentStep: null, children: null };
      obj9[0] = tmp21[0];
      let tmpResult = tmp(10078);
      const obj10 = { initialRouteName: null, screens: null, onStateChange: null };
      obj10[0] = initialRoute;
      obj10[1] = obj2;
      obj10[2] = function onStateChange(arg0) {
        if (null != arg0) {
          _undefined3(outer1_8[arg0.routes[arg0.index].name]);
        }
      };
      obj9[1] = tmp23(tmp11(5665).Navigator, obj10);
      obj8[7] = tmp23(tmpResult, obj9);
      obj7[1] = tmp23(tmp11(9529).NativeGiftContextProvider, obj8);
      let tmp23Result = tmp23(tmp11(5610).AnalyticsLocationProvider, obj7);
    } else {
      const obj11 = { title: null };
      tmpResult = tmp(9497);
      const intl3 = tmp11(1236).intl;
      obj11[0] = intl3.string(tmp11(1236).t["JCFN/y"]);
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
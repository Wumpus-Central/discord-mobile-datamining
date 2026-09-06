// === Module 16934: PremiumDiscountOfferActionSheet ===

// Module 16934 (PremiumDiscountOfferActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 7422 */;
import UserOfferActionCreators from "UserOfferActionCreators" /* 8062 */;
import openPremiumModalDefault from "openPremiumModal" /* 9392 */;
import noop from "module_19" /* 19 */;

require = fn;
const PremiumConstants = fn(1373);
({ PremiumTypes: closure_4, SubscriptionPlanInfo: hasOwnProperty } = PremiumConstants);
const Constants = fn(1074);
({ AnalyticEvents: metroRequire, AnalyticsObjectTypes, AnalyticsPages, AnalyticsSections } = Constants);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
let closure_9 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_PREMIUM, objectType: AnalyticsObjectTypes.BUY };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/discounts/PremiumDiscountOfferActionSheet.tsx");

export default function _default(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const userDiscountOffer = markAsDismissed.userDiscountOffer;
  let analyticsLocations;
  let memo;
  analyticsLocations = userDiscountOffer(analyticsLocations[5])(userDiscountOffer(analyticsLocations[6]).PREMIUM_DISCOUNT_OFFER_ACTION_SHEET).analyticsLocations;
  const items = [userDiscountOffer];
  memo = memo.useMemo(() => {
    let first;
    if (userDiscountOffer != null) {
      const discount = userDiscountOffer.discount;
      if (discount != null) {
        const planIds = discount.planIds;
        if (planIds != null) {
          first = planIds[0];
        }
      }
    }
    let tmp2 = null;
    if (null != first) {
      tmp2 = hasOwnProperty[first];
    }
    let premiumType;
    if (tmp2 != null) {
      premiumType = tmp2.premiumType;
    }
    if (premiumType == null) {
      premiumType = TIER_2.TIER_2;
    }
    return premiumType;
  }, items);
  const effect = memo.useEffect(() => {
    if (null != userDiscountOffer) {
      const obj = { location: analyticsLocations, discount_offer_id: userDiscountOffer.id };
      obj.track(constants.PREMIUM_DISCOUNT_OFFER_ACTION_SHEET_VIEWED, obj);
      UserOfferActionCreators.acknowledgeUserOffer(undefined, userDiscountOffer);
    }
  }, []);
  const items1 = [userDiscountOffer, markAsDismissed];
  const effect1 = memo.useEffect(() => {
    if (null == userDiscountOffer) {
      markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
    }
  }, items1);
  const items2 = [analyticsLocations, markAsDismissed, userDiscountOffer];
  const items3 = [analyticsLocations, markAsDismissed, userDiscountOffer, memo];
  const callback = memo.useCallback(() => {
    const obj = { location: analyticsLocations, discount_offer_id: null };
    let id;
    if (userDiscountOffer != null) {
      id = userDiscountOffer.id;
    }
    obj.discount_offer_id = id;
    obj.track(constants.PREMIUM_DISCOUNT_OFFER_ACTION_SHEET_DISMISSED, obj);
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items2);
  let tmp10Result = null;
  if (null != userDiscountOffer) {
    let obj = { startExpanded: true, onDismiss: callback, children: null };
    obj = { discountOffer: userDiscountOffer, onConfirm: tmp8 };
    obj.children = jsx(userDiscountOffer(tmp2[12]), { discountOffer: userDiscountOffer, onConfirm: tmp8 });
    let id;
    if (userDiscountOffer != null) {
      id = userDiscountOffer.id;
    }
    tmp10Result = jsx(markAsDismissed(tmp2[11]).BottomSheet, { discountOffer: userDiscountOffer, onConfirm: tmp8 }, id);
  }
  return tmp10Result;
};
// === Module 17113: PremiumDiscountOfferActionSheet ===

// Module 17113 (PremiumDiscountOfferActionSheet)
import Fragment from "Fragment" /* 21 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 6928 */;
import UserOfferActionCreators from "UserOfferActionCreators" /* 7733 */;
import openPremiumModalDefault from "openPremiumModal" /* 8914 */;
import react from "react" /* 19 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let AnalyticsObjectTypes;
let AnalyticsPages;
let AnalyticsSections;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ PremiumTypes: closure_4, SubscriptionPlanInfo: hasOwnProperty } = PremiumConstants);
({ AnalyticEvents: metroRequire, AnalyticsObjectTypes, AnalyticsPages, AnalyticsSections } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_9 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_PREMIUM, objectType: AnalyticsObjectTypes.BUY };
const result = size.fileFinishedImporting("modules/premium/native/discounts/PremiumDiscountOfferActionSheet.tsx");

export default function _default(markAsDismissed) {
  let analyticsLocation;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const userDiscountOffer = markAsDismissed.userDiscountOffer;
  let analyticsLocations;
  let memo;
  let tmp2 = analyticsLocations;
  const tmp3 = userDiscountOffer(analyticsLocations[5]);
  analyticsLocations = tmp3(userDiscountOffer(analyticsLocations[6]).PREMIUM_DISCOUNT_OFFER_ACTION_SHEET).analyticsLocations;
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
      const obj2 = { location: analyticsLocations, discount_offer_id: userDiscountOffer.id };
      const obj = AnalyticsUtilsDefault;
      obj.track(metroRequire.PREMIUM_DISCOUNT_OFFER_ACTION_SHEET_VIEWED, obj2);
      const obj3 = UserOfferActionCreators;
      obj3.acknowledgeUserOffer(undefined, userDiscountOffer);
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
    let id;
    const obj = { location: analyticsLocations, discount_offer_id: id };
    id = undefined;
    const track = AnalyticsUtilsDefault.track;
    const PREMIUM_DISCOUNT_OFFER_ACTION_SHEET_DISMISSED = metroRequire.PREMIUM_DISCOUNT_OFFER_ACTION_SHEET_DISMISSED;
    AnalyticsUtilsDefault;
    if (userDiscountOffer != null) {
      id = userDiscountOffer.id;
    }
    track(PREMIUM_DISCOUNT_OFFER_ACTION_SHEET_DISMISSED, obj);
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items2);
  let tmp10Result = null;
  if (null != userDiscountOffer) {
    BottomSheet = markAsDismissed(tmp2[11]).BottomSheet;
    let obj2 = { discountOffer: userDiscountOffer, onConfirm: tmp8 };
    let id;
    if (userDiscountOffer != null) {
      id = userDiscountOffer.id;
    }
    tmp10Result = <BottomSheet key={id} startExpanded onDismiss={callback}>{null}</BottomSheet>;
  }
  return tmp10Result;
};
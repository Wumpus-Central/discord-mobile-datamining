// discord_app/modules/premium/native/discounts/PremiumDiscountOfferActionSheet.tsx
import noop from "noop";
import GuildFeatures from "GuildFeatures";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";

let AnalyticsObjectTypes;
let AnalyticsPages;
let AnalyticsSections;
let c4;
let c5;
let closure_6;
const require = arg1;
({ PremiumTypes: c4, SubscriptionPlanInfo: c5 } = GuildFeatures);
({ AnalyticEvents: closure_6, AnalyticsObjectTypes, AnalyticsPages, AnalyticsSections } = ME);
let closure_9 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_PREMIUM, objectType: AnalyticsObjectTypes.BUY };
const result = require("ME").fileFinishedImporting("modules/premium/native/discounts/PremiumDiscountOfferActionSheet.tsx");

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
      tmp2 = outer1_5[first];
    }
    let premiumType;
    if (tmp2 != null) {
      premiumType = tmp2.premiumType;
    }
    if (premiumType == null) {
      premiumType = outer1_4.TIER_2;
    }
    return premiumType;
  }, items);
  const effect = memo.useEffect(() => {
    if (null != userDiscountOffer) {
      let obj = userDiscountOffer(analyticsLocations[7]);
      obj = { location: null, discount_offer_id: null };
      obj[0] = analyticsLocations;
      obj[1] = tmp.id;
      obj.track(outer1_6.PREMIUM_DISCOUNT_OFFER_ACTION_SHEET_VIEWED, obj);
      markAsDismissed(analyticsLocations[8]).acknowledgeUserOffer(undefined, tmp);
      const obj3 = markAsDismissed(analyticsLocations[8]);
    }
  }, []);
  const items1 = [userDiscountOffer, markAsDismissed];
  const effect1 = memo.useEffect(() => {
    if (null == userDiscountOffer) {
      markAsDismissed(outer1_7.AUTO_DISMISS);
    }
  }, items1);
  const items2 = [analyticsLocations, markAsDismissed, userDiscountOffer];
  const items3 = [analyticsLocations, markAsDismissed, userDiscountOffer, memo];
  const callback = memo.useCallback(() => {
    let obj = userDiscountOffer(analyticsLocations[7]);
    obj = { location: analyticsLocations, discount_offer_id: null };
    let id;
    if (userDiscountOffer != null) {
      id = userDiscountOffer.id;
    }
    obj[1] = id;
    obj.track(outer1_6.PREMIUM_DISCOUNT_OFFER_ACTION_SHEET_DISMISSED, obj);
    markAsDismissed(outer1_7.USER_DISMISS);
  }, items2);
  let tmp10Result = null;
  if (null != userDiscountOffer) {
    let obj = { startExpanded: true, onDismiss: null, children: null };
    obj[1] = callback;
    obj = { discountOffer: null, onConfirm: null };
    obj[0] = userDiscountOffer;
    obj[1] = tmp8;
    obj[2] = jsx(userDiscountOffer(tmp2[12]), { discountOffer: null, onConfirm: null });
    let id;
    if (userDiscountOffer != null) {
      id = userDiscountOffer.id;
    }
    tmp10Result = jsx(markAsDismissed(tmp2[11]).BottomSheet, { discountOffer: null, onConfirm: null }, id);
    const tmp10 = jsx;
  }
  return tmp10Result;
};
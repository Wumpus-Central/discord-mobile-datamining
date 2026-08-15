// discord_app/modules/premium/hooks/usePremiumDiscountOffer.android.tsx
import updateProduct from "updateProduct";
import GuildFeatures from "GuildFeatures";
import { useDiscountOffer } from "useDiscountOffer.tsx";

let c4;
let c5;
const require = arg1;
({ PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID: c4, PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID: c5 } = GuildFeatures);
const result = require("useDiscountOffer").fileFinishedImporting("modules/premium/hooks/usePremiumDiscountOffer.android.tsx");

export const usePremiumDiscountOffer = function usePremiumDiscountOffer() {
  const items = [updateProduct];
  offerIds = offerIds(647).useStateFromStoresObject(items, () => ({ isFetchingProducts: updateProduct.isFetchingProducts(), offerIds: updateProduct.getOfferIds() })).offerIds;
  const obj = offerIds(647);
  const tmp = offerIds;
  const tmp3 = importDefault;
  let values = Object.values(offerIds(5322).DiscountIdToProductOfferId[closure_4]);
  let tmp5 = null;
  if (0 !== values.length) {
    let tmp6 = null;
    if (values.every((arg0) => offerIds.has(arg0))) {
      tmp6 = tmp4;
    }
    tmp5 = tmp6;
  }
  tmp4 = useDiscountOffer(closure_4);
  values = Object.values(tmp(5322).DiscountIdToProductOfferId[closure_5]);
  let tmp8 = null;
  if (0 !== values.length) {
    let tmp9 = null;
    if (values.every((arg0) => offerIds.has(arg0))) {
      tmp9 = tmp7;
    }
    tmp8 = tmp9;
  }
  if (tmp5 == null) {
    tmp5 = tmp8;
  }
  return tmp5;
};
export function usePremiumGroupDiscountOffer() {
  return null;
}
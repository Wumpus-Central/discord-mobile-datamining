// discord_app/modules/premium/hooks/usePremiumDiscountOffer.android.tsx
import useDiscountOfferDefault from "useDiscountOffer.tsx";
import closure_3 from "../../../stores/native/IAPStore.android.tsx";
import GuildFeatures from "../PremiumConstants.tsx";

const require = arg1;
({
  PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID: c4,
  PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID: c5,
} = GuildFeatures);
const result = require("set").fileFinishedImporting("modules/premium/hooks/usePremiumDiscountOffer.android.tsx");

export const usePremiumDiscountOffer = function usePremiumDiscountOffer() {
  const items = [closure_3];
  offerIds = offerIds(563).useStateFromStoresObject(items, () => ({
    isFetchingProducts: closure_3.isFetchingProducts(),
    offerIds: closure_3.getOfferIds(),
  })).offerIds;
  const obj = offerIds(563);
  const tmp = offerIds;
  const tmp3 = importDefault;
  let values = Object.values(offerIds(7240).DiscountIdToProductOfferId[closure_4]);
  let tmp5 = null;
  if (0 !== values.length) {
    let tmp6 = null;
    if (values.every((arg0) => offerIds.has(arg0))) {
      tmp6 = tmp4;
    }
    tmp5 = tmp6;
  }
  tmp4 = useDiscountOfferDefault(closure_4);
  values = Object.values(tmp(7240).DiscountIdToProductOfferId[closure_5]);
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

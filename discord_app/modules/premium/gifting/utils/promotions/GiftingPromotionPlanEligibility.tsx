// discord_app/modules/premium/gifting/utils/promotions/GiftingPromotionPlanEligibility.tsx
import PremiumConstants from "../../../PremiumConstants.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const SubscriptionPlans = PremiumConstants.SubscriptionPlans;
const result = size.fileFinishedImporting(
  "modules/premium/gifting/utils/promotions/GiftingPromotionPlanEligibility.tsx",
);

export function isPlanEligibleForGiftingPromotion(id) {
  items = [, ,];
  ({ PREMIUM_YEAR_TIER_2: arr[0], PREMIUM_MONTH_TIER_2: arr[1], PREMIUM_3_MONTH_TIER_2: arr[2] } = SubscriptionPlans);
  return items.includes(id);
}

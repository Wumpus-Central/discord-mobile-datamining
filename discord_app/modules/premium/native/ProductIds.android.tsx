// === Module 6034: SubscriptionPlans ===

// Module 6034 (SubscriptionPlans)
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import isMetaQuest from "isMetaQuest" /* 1625 */;

({ PremiumTypes, SubscriptionIntervalTypes, SubscriptionPlans } = GuildFeatures);
({ PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID, PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID, PREMIUM_TIER_2_REFERRAL_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID, PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID } = GuildFeatures);
const frozen = Object.freeze({ PREMIUM_GIFT_MONTH_TIER_0: "premium_month_tier_0.2", PREMIUM_GIFT_YEAR_TIER_0: "premium_year_tier_0", PREMIUM_GIFT_MONTH_TIER_1: "premium_month_tier_1", PREMIUM_GIFT_YEAR_TIER_1: "premium_year_tier_1", PREMIUM_GIFT_MONTH_TIER_2: "premium_month_tier_2", PREMIUM_GIFT_YEAR_TIER_2: "premium_year_tier_2", PREMIUM_TIER_2_MONTHLY: "premium_tier_2_monthly", PREMIUM_TIER_2_YEARLY: "premium_tier_2_yearly", PREMIUM_TIER_1_MONTHLY: "premium_tier_1_monthly", PREMIUM_TIER_1_YEARLY: "premium_tier_1_yearly", PREMIUM_TIER_0_MONTHLY: "premium_tier_0_month", PREMIUM_TIER_0_YEARLY: "premium_tier_0_yearly", PREMIUM_TIER_2_PREMIUM_GUILD_1_MONTHLY: "premium_tier_2_premium_guild_1_monthly", PREMIUM_TIER_2_PREMIUM_GUILD_1_YEARLY: "premium_tier_2_premium_guild_1_yearly", PREMIUM_TIER_2_PREMIUM_GUILD_2_MONTHLY: "premium_tier_2_premium_guild_2_monthly", PREMIUM_TIER_2_PREMIUM_GUILD_2_YEARLY: "premium_tier_2_premium_guild_2_yearly", PREMIUM_TIER_2_PREMIUM_GUILD_3_MONTHLY: "premium_tier_2_premium_guild_3_monthly", PREMIUM_TIER_2_PREMIUM_GUILD_3_YEARLY: "premium_tier_2_premium_guild_3_yearly", PREMIUM_TIER_2_PREMIUM_GUILD_5_MONTHLY: "premium_tier_2_premium_guild_5_monthly", PREMIUM_TIER_2_PREMIUM_GUILD_5_YEARLY: "premium_tier_2_premium_guild_5_yearly", PREMIUM_TIER_2_PREMIUM_GUILD_10_MONTHLY: "premium_tier_2_premium_guild_10_monthly", PREMIUM_TIER_2_PREMIUM_GUILD_13_MONTHLY: "premium_tier_2_premium_guild_13_monthly", PREMIUM_TIER_2_PREMIUM_GUILD_28_MONTHLY: "premium_tier_2_premium_guild_28_monthly", PREMIUM_TIER_1_PREMIUM_GUILD_1_MONTHLY: "premium_tier_1_premium_guild_1_monthly", PREMIUM_TIER_1_PREMIUM_GUILD_1_YEARLY: "premium_tier_1_premium_guild_1_yearly", PREMIUM_GUILD_1_MONTHLY: "premium_guild_1_monthly", PREMIUM_GUILD_2_MONTHLY: "premium_guild_2_monthly" });
const items = [, , , , , ];
({ PREMIUM_GIFT_MONTH_TIER_0: arr[0], PREMIUM_GIFT_YEAR_TIER_0: arr[1], PREMIUM_GIFT_MONTH_TIER_1: arr[2], PREMIUM_GIFT_YEAR_TIER_1: arr[3], PREMIUM_GIFT_MONTH_TIER_2: arr[4], PREMIUM_GIFT_YEAR_TIER_2: arr[5] } = frozen);
const PREMIUM_TIER_2_MONTHLY = frozen.PREMIUM_TIER_2_MONTHLY;
if (isMetaQuest.isMetaQuest()) {
  const items1 = [PREMIUM_TIER_2_MONTHLY, , , ];
  ({ PREMIUM_TIER_2_YEARLY: arr3[1], PREMIUM_TIER_0_MONTHLY: arr3[2], PREMIUM_TIER_0_YEARLY: arr3[3] } = frozen);
  let items2 = items1;
} else {
  items2 = [PREMIUM_TIER_2_MONTHLY, , , , , , , , , , , , , , , , , , , , ];
  ({ PREMIUM_TIER_2_YEARLY: arr2[1], PREMIUM_TIER_1_MONTHLY: arr2[2], PREMIUM_TIER_1_YEARLY: arr2[3], PREMIUM_TIER_0_MONTHLY: arr2[4], PREMIUM_TIER_0_YEARLY: arr2[5], PREMIUM_TIER_2_PREMIUM_GUILD_1_MONTHLY: arr2[6], PREMIUM_TIER_2_PREMIUM_GUILD_1_YEARLY: arr2[7], PREMIUM_TIER_2_PREMIUM_GUILD_2_MONTHLY: arr2[8], PREMIUM_TIER_2_PREMIUM_GUILD_2_YEARLY: arr2[9], PREMIUM_TIER_2_PREMIUM_GUILD_3_MONTHLY: arr2[10], PREMIUM_TIER_2_PREMIUM_GUILD_3_YEARLY: arr2[11], PREMIUM_TIER_2_PREMIUM_GUILD_5_MONTHLY: arr2[12], PREMIUM_TIER_2_PREMIUM_GUILD_5_YEARLY: arr2[13], PREMIUM_TIER_2_PREMIUM_GUILD_10_MONTHLY: arr2[14], PREMIUM_TIER_2_PREMIUM_GUILD_13_MONTHLY: arr2[15], PREMIUM_TIER_2_PREMIUM_GUILD_28_MONTHLY: arr2[16], PREMIUM_TIER_1_PREMIUM_GUILD_1_MONTHLY: arr2[17], PREMIUM_TIER_1_PREMIUM_GUILD_1_YEARLY: arr2[18], PREMIUM_GUILD_1_MONTHLY: arr2[19], PREMIUM_GUILD_2_MONTHLY: arr2[20] } = frozen);
}
let obj = { [SubscriptionPlans.PREMIUM_MONTH_TIER_0]: frozen.PREMIUM_TIER_0_MONTHLY, [SubscriptionPlans.PREMIUM_MONTH_TIER_1]: frozen.PREMIUM_TIER_1_MONTHLY, [SubscriptionPlans.PREMIUM_MONTH_TIER_2]: frozen.PREMIUM_TIER_2_MONTHLY, [SubscriptionPlans.PREMIUM_MONTH_GUILD]: frozen.PREMIUM_GUILD_1_MONTHLY, [SubscriptionPlans.PREMIUM_YEAR_TIER_0]: frozen.PREMIUM_TIER_0_YEARLY, [SubscriptionPlans.PREMIUM_YEAR_TIER_1]: frozen.PREMIUM_TIER_1_YEARLY, [SubscriptionPlans.PREMIUM_YEAR_TIER_2]: frozen.PREMIUM_TIER_2_YEARLY };
obj = { productId: frozen.PREMIUM_TIER_2_MONTHLY, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 0, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2, additionalPlans: [] };
const items3 = [{ quantity: 1, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
const items4 = [{ quantity: 1, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD }];
const items5 = [{ quantity: 2, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
const items6 = [{ quantity: 2, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD }];
const items7 = [{ quantity: 3, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
const items8 = [{ quantity: 3, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD }];
const items9 = [{ quantity: 5, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
const items10 = [{ quantity: 5, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD }];
const items11 = [{ quantity: 10, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
const items12 = [{ quantity: 13, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
const items13 = [{ quantity: 28, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
const items14 = [{ quantity: 1, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
const items15 = [{ quantity: 1, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD }];
const items16 = [{ quantity: 1, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
const items17 = [{ quantity: 2, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
const frozen1 = Object.freeze(obj);
const result = set.fileFinishedImporting("modules/premium/native/ProductIds.android.tsx");

export const ProductIds = frozen;
export const GenericProductIds = [];
export const IAPProductIds = items;
export const SubscriptionProductIds = items2;
export const BasePlanIdToProductId = frozen1;
export const AppStorePremiumProductIdsToPremiumBundledItems = { [frozen.PREMIUM_TIER_2_MONTHLY]: obj, [frozen.PREMIUM_TIER_2_YEARLY]: { productId: frozen.PREMIUM_TIER_2_YEARLY, interval: SubscriptionIntervalTypes.YEAR, numPremiumGuild: 0, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2, additionalPlans: [] }, [frozen.PREMIUM_TIER_1_MONTHLY]: { productId: frozen.PREMIUM_TIER_1_MONTHLY, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 0, premiumTier: PremiumTypes.TIER_1, basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_1, additionalPlans: [] }, [frozen.PREMIUM_TIER_1_YEARLY]: { productId: frozen.PREMIUM_TIER_1_YEARLY, interval: SubscriptionIntervalTypes.YEAR, numPremiumGuild: 0, premiumTier: PremiumTypes.TIER_1, basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_1, additionalPlans: [] }, [frozen.PREMIUM_TIER_0_MONTHLY]: { productId: frozen.PREMIUM_TIER_0_MONTHLY, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 0, premiumTier: PremiumTypes.TIER_0, basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_0, additionalPlans: [] }, [frozen.PREMIUM_TIER_0_YEARLY]: { productId: frozen.PREMIUM_TIER_0_YEARLY, interval: SubscriptionIntervalTypes.YEAR, numPremiumGuild: 0, premiumTier: PremiumTypes.TIER_0, basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_0, additionalPlans: [] }, [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_1_MONTHLY]: { productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_1_MONTHLY, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 1, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2, additionalPlans: items3 }, [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_1_YEARLY]: { productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_1_YEARLY, interval: SubscriptionIntervalTypes.YEAR, numPremiumGuild: 1, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2, additionalPlans: items4 }, [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_2_MONTHLY]: { productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_2_MONTHLY, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 2, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2, additionalPlans: items5 }, [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_2_YEARLY]: { productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_2_YEARLY, interval: SubscriptionIntervalTypes.YEAR, numPremiumGuild: 2, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2, additionalPlans: items6 }, [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_3_MONTHLY]: { productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_3_MONTHLY, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 3, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2, additionalPlans: items7 }, [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_3_YEARLY]: { productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_3_YEARLY, interval: SubscriptionIntervalTypes.YEAR, numPremiumGuild: 3, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2, additionalPlans: items8 }, [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_5_MONTHLY]: { productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_5_MONTHLY, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 5, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2, additionalPlans: items9 }, [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_5_YEARLY]: { productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_5_YEARLY, interval: SubscriptionIntervalTypes.YEAR, numPremiumGuild: 5, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2, additionalPlans: items10 }, [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_10_MONTHLY]: { productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_10_MONTHLY, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 10, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2, additionalPlans: items11 }, [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_13_MONTHLY]: { productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_13_MONTHLY, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 13, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2, additionalPlans: items12 }, [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_28_MONTHLY]: { productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_28_MONTHLY, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 28, premiumTier: PremiumTypes.TIER_2, basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2, additionalPlans: items13 }, [frozen.PREMIUM_TIER_1_PREMIUM_GUILD_1_MONTHLY]: { productId: frozen.PREMIUM_TIER_1_PREMIUM_GUILD_1_MONTHLY, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 1, premiumTier: PremiumTypes.TIER_1, basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_1, additionalPlans: items14 }, [frozen.PREMIUM_TIER_1_PREMIUM_GUILD_1_YEARLY]: { productId: frozen.PREMIUM_TIER_1_PREMIUM_GUILD_1_YEARLY, interval: SubscriptionIntervalTypes.YEAR, numPremiumGuild: 1, premiumTier: PremiumTypes.TIER_1, basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_1, additionalPlans: items15 }, [frozen.PREMIUM_GUILD_1_MONTHLY]: { productId: frozen.PREMIUM_GUILD_1_MONTHLY, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 1, premiumTier: null, basePlanId: SubscriptionPlans.NONE_MONTH, additionalPlans: items16 }, [frozen.PREMIUM_GUILD_2_MONTHLY]: { productId: frozen.PREMIUM_GUILD_2_MONTHLY, interval: SubscriptionIntervalTypes.MONTH, numPremiumGuild: 2, premiumTier: null, basePlanId: SubscriptionPlans.NONE_MONTH, additionalPlans: items17 } };
export const TrialIdToProductOfferId = { [PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID]: { [frozen.PREMIUM_TIER_2_MONTHLY]: "premium-tier-2-monthly-likelihood", [frozen.PREMIUM_TIER_2_YEARLY]: "premium-tier-2-yearly-likelihood" }, [PREMIUM_TIER_2_REACTIVATION_TRIAL_ID]: { [frozen.PREMIUM_TIER_2_MONTHLY]: "premium-tier-2-monthly-reactivation", [frozen.PREMIUM_TIER_2_YEARLY]: "premium-tier-2-yearly-reactivation" }, [PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID]: { [frozen.PREMIUM_TIER_0_MONTHLY]: "premium-tier-0-monthly-likelihood", [frozen.PREMIUM_TIER_0_YEARLY]: "premium-tier-0-yearly-likelihood" }, [PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID]: { [frozen.PREMIUM_TIER_2_MONTHLY]: "premium-tier-2-monthly-q4-drop", [frozen.PREMIUM_TIER_2_YEARLY]: "premium-tier-2-yearly-q4-drop" }, [PREMIUM_TIER_2_REFERRAL_TRIAL_ID]: { [frozen.PREMIUM_TIER_2_MONTHLY]: "premium-tier-2-monthly-referral-trial", [frozen.PREMIUM_TIER_2_YEARLY]: "premium-tier-2-yearly-referral-trial" }, [PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID]: { [frozen.PREMIUM_TIER_2_MONTHLY]: "premium-tier-2-monthly-hfu-two-week-trial", [frozen.PREMIUM_TIER_2_YEARLY]: "premium-tier-2-yearly-hfu-two-week-trial" } };
export const DiscountIdToProductOfferId = { [PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID]: { [frozen.PREMIUM_TIER_2_MONTHLY]: "premium-tier-2-monthly-likelihood-discount" }, [PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID]: { [frozen.PREMIUM_TIER_2_MONTHLY]: "premium-tier-2-monthly-reengagement-discount" } };
export const BOGO_OFFER_ID = "premium-tier-2-monthly-bogo";
export const getProductIdForGift = function getProductIdForGift(arg0) {
  if (SubscriptionPlans.PREMIUM_MONTH_TIER_0 === arg0) {
    return frozen.PREMIUM_GIFT_MONTH_TIER_0;
  } else if (tmp.PREMIUM_YEAR_TIER_0 === arg0) {
    return frozen.PREMIUM_GIFT_YEAR_TIER_0;
  } else if (tmp.PREMIUM_MONTH_TIER_1 === arg0) {
    return frozen.PREMIUM_GIFT_MONTH_TIER_1;
  } else if (tmp.PREMIUM_YEAR_TIER_1 === arg0) {
    return frozen.PREMIUM_GIFT_YEAR_TIER_1;
  } else if (tmp.PREMIUM_MONTH_TIER_2 === arg0) {
    return frozen.PREMIUM_GIFT_MONTH_TIER_2;
  } else if (tmp.PREMIUM_YEAR_TIER_2 === arg0) {
    return frozen.PREMIUM_GIFT_YEAR_TIER_2;
  } else {
    const _Error = Error;
    error = new Error("Tried to get Product for Plan not configured for IAP!");
    throw error;
  }
};
export const getPlanIdForGift = function getPlanIdForGift(arg0) {
  if (frozen.PREMIUM_GIFT_MONTH_TIER_0 === arg0) {
    return SubscriptionPlans.PREMIUM_MONTH_TIER_0;
  } else if (tmp.PREMIUM_GIFT_YEAR_TIER_0 === arg0) {
    return SubscriptionPlans.PREMIUM_YEAR_TIER_0;
  } else if (tmp.PREMIUM_GIFT_MONTH_TIER_1 === arg0) {
    return SubscriptionPlans.PREMIUM_MONTH_TIER_1;
  } else if (tmp.PREMIUM_GIFT_YEAR_TIER_1 === arg0) {
    return SubscriptionPlans.PREMIUM_YEAR_TIER_1;
  } else if (tmp.PREMIUM_GIFT_MONTH_TIER_2 === arg0) {
    return SubscriptionPlans.PREMIUM_MONTH_TIER_2;
  } else if (tmp.PREMIUM_GIFT_YEAR_TIER_2 === arg0) {
    return SubscriptionPlans.PREMIUM_YEAR_TIER_2;
  } else {
    const _Error = Error;
    error = new Error("Tried to get Plan for Product not configured for IAP!");
    throw error;
  }
};
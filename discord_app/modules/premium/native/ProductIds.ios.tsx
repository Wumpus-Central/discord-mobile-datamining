// discord_app/modules/premium/native/ProductIds.ios.tsx
import AppleProductIds from "../../../../discord_common/js/shared/shared-constants/AppleProductIds.tsx";
import PremiumConstants from "../PremiumConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ PremiumTypes, SubscriptionIntervalTypes, SubscriptionPlans } = PremiumConstants);
let obj = {
  PREMIUM_MONTH_TIER_1: "premium_month_tier_1.1",
  PREMIUM_YEAR_TIER_1: "premium_year_tier_1.1",
  PREMIUM_MONTH_TIER_2: "premium_month_tier_2.1",
  PREMIUM_YEAR_TIER_2: "premium_year_tier_2.1",
  PREMIUM_GIFT_MONTH_TIER_0: "premium_month_tier_0",
  PREMIUM_GIFT_YEAR_TIER_0: "premium_year_tier_0",
  PREMIUM_GIFT_MONTH_TIER_1: "premium_month_tier_1.2",
  PREMIUM_GIFT_YEAR_TIER_1: "premium_year_tier_1.2",
  PREMIUM_GIFT_MONTH_TIER_2: "premium_month_tier_2.2",
  PREMIUM_GIFT_YEAR_TIER_2: "premium_year_tier_2.2",
  PREMIUM_TIER_2_MONTHLY: "premium_tier_2_monthly",
  PREMIUM_TIER_2_YEARLY: "premium_tier_2_yearly",
  PREMIUM_TIER_1_MONTHLY: "premium_tier_1_monthly",
  PREMIUM_TIER_1_YEARLY: "premium_tier_1_yearly",
  PREMIUM_TIER_0_MONTHLY: "premium_tier_0_monthly",
  PREMIUM_TIER_0_YEARLY: "premium_tier_0_yearly",
  PREMIUM_TIER_2_PREMIUM_GUILD_1_MONTHLY: "premium_tier_2_premium_guild_1_monthly",
  PREMIUM_TIER_2_PREMIUM_GUILD_1_YEARLY: "premium_tier_2_premium_guild_1_yearly",
  PREMIUM_TIER_2_PREMIUM_GUILD_2_MONTHLY: "premium_tier_2_premium_guild_2_monthly",
  PREMIUM_TIER_2_PREMIUM_GUILD_2_YEARLY: "premium_tier_2_premium_guild_2_yearly",
  PREMIUM_TIER_2_PREMIUM_GUILD_3_MONTHLY: "premium_tier_2_premium_guild_3_monthly",
  PREMIUM_TIER_2_PREMIUM_GUILD_3_YEARLY: "premium_tier_2_premium_guild_3_yearly",
  PREMIUM_TIER_2_PREMIUM_GUILD_5_MONTHLY: "premium_tier_2_premium_guild_5_monthly",
  PREMIUM_TIER_2_PREMIUM_GUILD_5_YEARLY: "premium_tier_2_premium_guild_5_yearly",
  PREMIUM_TIER_2_PREMIUM_GUILD_10_MONTHLY: "premium_tier_2_premium_guild_10_monthly",
  PREMIUM_TIER_2_PREMIUM_GUILD_10_YEARLY: "premium_tier_2_premium_guild_10_yearly",
  PREMIUM_TIER_2_PREMIUM_GUILD_13_MONTHLY: "premium_tier_2_premium_guild_13_monthly",
  PREMIUM_TIER_2_PREMIUM_GUILD_13_YEARLY: "premium_tier_2_premium_guild_13_yearly",
  PREMIUM_TIER_2_PREMIUM_GUILD_28_MONTHLY: "premium_tier_2_premium_guild_28_monthly",
  PREMIUM_TIER_2_PREMIUM_GUILD_28_YEARLY: "premium_tier_2_premium_guild_28_yearly",
  PREMIUM_TIER_1_PREMIUM_GUILD_1_MONTHLY: "premium_tier_1_premium_guild_1_monthly",
  PREMIUM_TIER_1_PREMIUM_GUILD_1_YEARLY: "premium_tier_1_premium_guild_1_yearly",
  PREMIUM_GUILD_1_MONTHLY: "premium_guild_1_monthly",
  PREMIUM_GUILD_2_MONTHLY: "premium_guild_2_monthly",
  STICKER_PACK_199: "sticker_pack_199",
  STICKER_PACK_299: "sticker_pack_299",
  GENERIC_SUBSCRIPTION: AppleProductIds.AppleProductIds.GENERIC_SUBSCRIPTION,
  GENERIC_CONSUMABLE: AppleProductIds.AppleProductIds.GENERIC_CONSUMABLE,
};
({
  PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID,
  PREMIUM_TIER_2_REACTIVATION_TRIAL_ID,
  PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID,
  PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID,
  PREMIUM_TIER_2_REFERRAL_TRIAL_ID,
  PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID,
  PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID,
  PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID,
} = PremiumConstants);
const frozen = Object.freeze(obj);
const items = [
  AppleProductIds.AppleProductIds.GENERIC_SUBSCRIPTION,
  AppleProductIds.AppleProductIds.GENERIC_CONSUMABLE,
];
obj = {
  [SubscriptionPlans.PREMIUM_MONTH_TIER_0]: frozen.PREMIUM_TIER_0_MONTHLY,
  [SubscriptionPlans.PREMIUM_MONTH_TIER_1]: frozen.PREMIUM_TIER_1_MONTHLY,
  [SubscriptionPlans.PREMIUM_MONTH_TIER_2]: frozen.PREMIUM_TIER_2_MONTHLY,
  [SubscriptionPlans.PREMIUM_MONTH_GUILD]: frozen.PREMIUM_GUILD_1_MONTHLY,
  [SubscriptionPlans.PREMIUM_YEAR_TIER_0]: frozen.PREMIUM_TIER_0_YEARLY,
  [SubscriptionPlans.PREMIUM_YEAR_TIER_1]: frozen.PREMIUM_TIER_1_YEARLY,
  [SubscriptionPlans.PREMIUM_YEAR_TIER_2]: frozen.PREMIUM_TIER_2_YEARLY,
};
obj = {
  productId: frozen.PREMIUM_MONTH_TIER_1,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 0,
  premiumTier: PremiumTypes.TIER_1,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_1,
  additionalPlans: [],
  isDeprecated: true,
};
const obj10 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_1_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 1,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2,
  additionalPlans: null,
};
const items1 = [{ quantity: 1, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
obj10.additionalPlans = items1;
const obj12 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_1_YEARLY,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 1,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2,
  additionalPlans: null,
};
const items2 = [{ quantity: 1, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD }];
obj12.additionalPlans = items2;
const obj14 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_2_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 2,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2,
  additionalPlans: null,
};
const items3 = [{ quantity: 2, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
obj14.additionalPlans = items3;
const obj16 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_2_YEARLY,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 2,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2,
  additionalPlans: null,
};
const items4 = [{ quantity: 2, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD }];
obj16.additionalPlans = items4;
const obj18 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_3_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 3,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2,
  additionalPlans: null,
};
const items5 = [{ quantity: 3, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
obj18.additionalPlans = items5;
const obj20 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_3_YEARLY,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 3,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2,
  additionalPlans: null,
};
const items6 = [{ quantity: 3, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD }];
obj20.additionalPlans = items6;
const obj22 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_5_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 5,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2,
  additionalPlans: null,
};
const items7 = [{ quantity: 5, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
obj22.additionalPlans = items7;
const obj24 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_5_YEARLY,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 5,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2,
  additionalPlans: null,
};
const items8 = [{ quantity: 5, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD }];
obj24.additionalPlans = items8;
const obj26 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_10_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 10,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2,
  additionalPlans: null,
};
const items9 = [{ quantity: 10, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
obj26.additionalPlans = items9;
const obj28 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_10_YEARLY,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 10,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2,
  additionalPlans: null,
};
const items10 = [{ quantity: 10, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD }];
obj28.additionalPlans = items10;
const obj30 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_13_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 13,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2,
  additionalPlans: null,
};
const items11 = [{ quantity: 13, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
obj30.additionalPlans = items11;
const obj32 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_13_YEARLY,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 13,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2,
  additionalPlans: null,
};
const items12 = [{ quantity: 13, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD }];
obj32.additionalPlans = items12;
const obj34 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_28_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 28,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2,
  additionalPlans: null,
};
const items13 = [{ quantity: 28, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
obj34.additionalPlans = items13;
const obj36 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_28_YEARLY,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 28,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2,
  additionalPlans: null,
};
const items14 = [{ quantity: 28, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD }];
obj36.additionalPlans = items14;
const obj38 = {
  productId: frozen.PREMIUM_TIER_1_PREMIUM_GUILD_1_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 1,
  premiumTier: PremiumTypes.TIER_1,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_1,
  additionalPlans: null,
};
const items15 = [{ quantity: 1, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
obj38.additionalPlans = items15;
const obj40 = {
  productId: frozen.PREMIUM_TIER_1_PREMIUM_GUILD_1_YEARLY,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 1,
  premiumTier: PremiumTypes.TIER_1,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_1,
  additionalPlans: null,
};
const items16 = [{ quantity: 1, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD }];
obj40.additionalPlans = items16;
const obj42 = {
  productId: frozen.PREMIUM_GUILD_1_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 1,
  premiumTier: null,
  basePlanId: SubscriptionPlans.NONE_MONTH,
  additionalPlans: null,
};
const items17 = [{ quantity: 1, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
obj42.additionalPlans = items17;
const obj44 = {
  productId: frozen.PREMIUM_GUILD_2_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 2,
  premiumTier: null,
  basePlanId: SubscriptionPlans.NONE_MONTH,
  additionalPlans: null,
};
const items18 = [{ quantity: 2, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD }];
obj44.additionalPlans = items18;
const frozen1 = Object.freeze(obj);
const result = size.fileFinishedImporting("modules/premium/native/ProductIds.ios.tsx");

export const ProductIds = frozen;
export const GenericProductIds = items;
export const BasePlanIdToProductId = frozen1;
export const IAPProductIds = [];
export const SubscriptionProductIds = [];
export const AppStorePremiumProductIdsToPremiumBundledItems = {
  [frozen.PREMIUM_MONTH_TIER_1]: obj,
  [frozen.PREMIUM_YEAR_TIER_1]: {
    productId: frozen.PREMIUM_YEAR_TIER_1,
    interval: SubscriptionIntervalTypes.YEAR,
    numPremiumGuild: 0,
    premiumTier: PremiumTypes.TIER_1,
    basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_1,
    additionalPlans: [],
    isDeprecated: true,
  },
  [frozen.PREMIUM_MONTH_TIER_2]: {
    productId: frozen.PREMIUM_MONTH_TIER_2,
    interval: SubscriptionIntervalTypes.MONTH,
    numPremiumGuild: 0,
    premiumTier: PremiumTypes.TIER_2,
    basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2,
    additionalPlans: [],
    isDeprecated: true,
  },
  [frozen.PREMIUM_YEAR_TIER_2]: {
    productId: frozen.PREMIUM_YEAR_TIER_2,
    interval: SubscriptionIntervalTypes.YEAR,
    numPremiumGuild: 0,
    premiumTier: PremiumTypes.TIER_2,
    basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2,
    additionalPlans: [],
    isDeprecated: true,
  },
  [frozen.PREMIUM_TIER_2_MONTHLY]: {
    productId: frozen.PREMIUM_TIER_2_MONTHLY,
    interval: SubscriptionIntervalTypes.MONTH,
    numPremiumGuild: 0,
    premiumTier: PremiumTypes.TIER_2,
    basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2,
    additionalPlans: [],
  },
  [frozen.PREMIUM_TIER_2_YEARLY]: {
    productId: frozen.PREMIUM_TIER_2_YEARLY,
    interval: SubscriptionIntervalTypes.YEAR,
    numPremiumGuild: 0,
    premiumTier: PremiumTypes.TIER_2,
    basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2,
    additionalPlans: [],
  },
  [frozen.PREMIUM_TIER_1_MONTHLY]: {
    productId: frozen.PREMIUM_TIER_1_MONTHLY,
    interval: SubscriptionIntervalTypes.MONTH,
    numPremiumGuild: 0,
    premiumTier: PremiumTypes.TIER_1,
    basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_1,
    additionalPlans: [],
  },
  [frozen.PREMIUM_TIER_1_YEARLY]: {
    productId: frozen.PREMIUM_TIER_1_YEARLY,
    interval: SubscriptionIntervalTypes.YEAR,
    numPremiumGuild: 0,
    premiumTier: PremiumTypes.TIER_1,
    basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_1,
    additionalPlans: [],
  },
  [frozen.PREMIUM_TIER_0_MONTHLY]: {
    productId: frozen.PREMIUM_TIER_0_MONTHLY,
    interval: SubscriptionIntervalTypes.MONTH,
    numPremiumGuild: 0,
    premiumTier: PremiumTypes.TIER_0,
    basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_0,
    additionalPlans: [],
  },
  [frozen.PREMIUM_TIER_0_YEARLY]: {
    productId: frozen.PREMIUM_TIER_0_YEARLY,
    interval: SubscriptionIntervalTypes.YEAR,
    numPremiumGuild: 0,
    premiumTier: PremiumTypes.TIER_0,
    basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_0,
    additionalPlans: [],
  },
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_1_MONTHLY]: obj10,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_1_YEARLY]: obj12,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_2_MONTHLY]: obj14,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_2_YEARLY]: obj16,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_3_MONTHLY]: obj18,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_3_YEARLY]: obj20,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_5_MONTHLY]: obj22,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_5_YEARLY]: obj24,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_10_MONTHLY]: obj26,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_10_YEARLY]: obj28,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_13_MONTHLY]: obj30,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_13_YEARLY]: obj32,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_28_MONTHLY]: obj34,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_28_YEARLY]: obj36,
  [frozen.PREMIUM_TIER_1_PREMIUM_GUILD_1_MONTHLY]: obj38,
  [frozen.PREMIUM_TIER_1_PREMIUM_GUILD_1_YEARLY]: obj40,
  [frozen.PREMIUM_GUILD_1_MONTHLY]: obj42,
  [frozen.PREMIUM_GUILD_2_MONTHLY]: obj44,
};
export const TrialIdToProductOfferId = {
  [PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID]: {
    [frozen.PREMIUM_TIER_2_MONTHLY]: "premium_tier_2_monthly_likelihood",
    [frozen.PREMIUM_TIER_2_YEARLY]: "premium_tier_2_yearly_likelihood",
  },
  [PREMIUM_TIER_2_REACTIVATION_TRIAL_ID]: {
    [frozen.PREMIUM_TIER_2_MONTHLY]: "premium_tier_2_monthly_reactivation",
    [frozen.PREMIUM_TIER_2_YEARLY]: "premium_tier_2_yearly_reactivation",
  },
  [PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID]: {
    [frozen.PREMIUM_TIER_0_MONTHLY]: "premium_tier_0_monthly_likelihood",
    [frozen.PREMIUM_TIER_0_YEARLY]: "premium_tier_0_yearly_likelihood",
  },
  [PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID]: {
    [frozen.PREMIUM_TIER_2_MONTHLY]: "premium_tier_2_monthly_q4_drop",
    [frozen.PREMIUM_TIER_2_YEARLY]: "premium_tier_2_yearly_q4_drop",
  },
  [PREMIUM_TIER_2_REFERRAL_TRIAL_ID]: {
    [frozen.PREMIUM_TIER_2_MONTHLY]: "premium_tier_2_monthly_referral_trial",
    [frozen.PREMIUM_TIER_2_YEARLY]: "premium_tier_2_yearly_referral_trial",
  },
  [PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID]: {
    [frozen.PREMIUM_TIER_2_MONTHLY]: "premium_tier_2_monthly_hfu_two_week_trial",
    [frozen.PREMIUM_TIER_2_YEARLY]: "premium_tier_2_yearly_hfu_two_week_trial",
  },
};
export const DiscountIdToProductOfferId = {
  [PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID]: {
    [frozen.PREMIUM_TIER_2_MONTHLY]: "premium-tier-2-monthly-likelihood-discount",
  },
  [PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID]: {
    [frozen.PREMIUM_TIER_2_MONTHLY]: "premium-tier-2-monthly-reengagement-discount",
  },
};
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
    const error = new Error("Tried to get Product for Plan not configured for IAP!");
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
    const error = new Error("Tried to get Plan for Product not configured for IAP!");
    throw error;
  }
};

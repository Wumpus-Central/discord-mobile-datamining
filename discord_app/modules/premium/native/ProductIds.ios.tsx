// discord_app/modules/premium/native/ProductIds.ios.tsx
import AppleProductIds from "../../../../discord_common/js/shared/shared-constants/AppleProductIds.tsx";
import PremiumConstants from "../PremiumConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID;
let PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID;
let PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
let PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID;
let PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
let PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
let PremiumTypes;
let SubscriptionIntervalTypes;
let SubscriptionPlans;
let items1;
let items10;
let items11;
let items12;
let items13;
let items14;
let items15;
let items16;
let items17;
let items18;
let items2;
let items3;
let items4;
let items5;
let items6;
let items7;
let items8;
let items9;
({ PremiumTypes, SubscriptionIntervalTypes, SubscriptionPlans } = PremiumConstants);
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
const obj = {
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
const frozen = Object.freeze(obj);
const items = [
  AppleProductIds.AppleProductIds.GENERIC_SUBSCRIPTION,
  AppleProductIds.AppleProductIds.GENERIC_CONSUMABLE,
];
const obj13 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_1_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 1,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2,
  additionalPlans: items1,
};
items1 = [];
const obj10 = {
  productId: frozen.PREMIUM_TIER_1_YEARLY,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 0,
  premiumTier: PremiumTypes.TIER_1,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_1,
  additionalPlans: [],
};
const obj11 = {
  productId: frozen.PREMIUM_TIER_0_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 0,
  premiumTier: PremiumTypes.TIER_0,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_0,
  additionalPlans: [],
};
const obj12 = {
  productId: frozen.PREMIUM_TIER_0_YEARLY,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 0,
  premiumTier: PremiumTypes.TIER_0,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_0,
  additionalPlans: [],
};
const obj14 = { quantity: 1, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD };
const obj2 = {
  [SubscriptionPlans.PREMIUM_MONTH_TIER_0]: frozen.PREMIUM_TIER_0_MONTHLY,
  [SubscriptionPlans.PREMIUM_MONTH_TIER_1]: frozen.PREMIUM_TIER_1_MONTHLY,
  [SubscriptionPlans.PREMIUM_MONTH_TIER_2]: frozen.PREMIUM_TIER_2_MONTHLY,
  [SubscriptionPlans.PREMIUM_MONTH_GUILD]: frozen.PREMIUM_GUILD_1_MONTHLY,
  [SubscriptionPlans.PREMIUM_YEAR_TIER_0]: frozen.PREMIUM_TIER_0_YEARLY,
  [SubscriptionPlans.PREMIUM_YEAR_TIER_1]: frozen.PREMIUM_TIER_1_YEARLY,
  [SubscriptionPlans.PREMIUM_YEAR_TIER_2]: frozen.PREMIUM_TIER_2_YEARLY,
};
const obj3 = {
  productId: frozen.PREMIUM_MONTH_TIER_1,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 0,
  premiumTier: PremiumTypes.TIER_1,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_1,
  additionalPlans: [],
  isDeprecated: true,
};
const obj4 = {
  productId: frozen.PREMIUM_YEAR_TIER_1,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 0,
  premiumTier: PremiumTypes.TIER_1,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_1,
  additionalPlans: [],
  isDeprecated: true,
};
const obj5 = {
  productId: frozen.PREMIUM_MONTH_TIER_2,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 0,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2,
  additionalPlans: [],
  isDeprecated: true,
};
const obj6 = {
  productId: frozen.PREMIUM_YEAR_TIER_2,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 0,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2,
  additionalPlans: [],
  isDeprecated: true,
};
const obj7 = {
  productId: frozen.PREMIUM_TIER_2_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 0,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2,
  additionalPlans: [],
};
const obj8 = {
  productId: frozen.PREMIUM_TIER_2_YEARLY,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 0,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2,
  additionalPlans: [],
};
const obj9 = {
  productId: frozen.PREMIUM_TIER_1_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 0,
  premiumTier: PremiumTypes.TIER_1,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_1,
  additionalPlans: [],
};
items1[0] = obj14;
const obj15 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_1_YEARLY,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 1,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2,
  additionalPlans: items2,
};
items2 = [];
const obj16 = { quantity: 1, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD };
items2[0] = obj16;
const obj17 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_2_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 2,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2,
  additionalPlans: items3,
};
items3 = [];
const obj18 = { quantity: 2, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD };
items3[0] = obj18;
const obj19 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_2_YEARLY,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 2,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2,
  additionalPlans: items4,
};
items4 = [];
const obj20 = { quantity: 2, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD };
items4[0] = obj20;
const obj21 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_3_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 3,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2,
  additionalPlans: items5,
};
items5 = [];
const obj22 = { quantity: 3, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD };
items5[0] = obj22;
const obj23 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_3_YEARLY,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 3,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2,
  additionalPlans: items6,
};
items6 = [];
const obj24 = { quantity: 3, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD };
items6[0] = obj24;
const obj25 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_5_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 5,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2,
  additionalPlans: items7,
};
items7 = [];
const obj26 = { quantity: 5, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD };
items7[0] = obj26;
const obj27 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_5_YEARLY,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 5,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2,
  additionalPlans: items8,
};
items8 = [];
const obj28 = { quantity: 5, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD };
items8[0] = obj28;
const obj29 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_10_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 10,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2,
  additionalPlans: items9,
};
items9 = [];
const obj30 = { quantity: 10, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD };
items9[0] = obj30;
const obj31 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_10_YEARLY,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 10,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2,
  additionalPlans: items10,
};
items10 = [];
const obj32 = { quantity: 10, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD };
items10[0] = obj32;
const obj33 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_13_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 13,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2,
  additionalPlans: items11,
};
items11 = [];
const obj34 = { quantity: 13, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD };
items11[0] = obj34;
const obj35 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_13_YEARLY,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 13,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2,
  additionalPlans: items12,
};
items12 = [];
const obj36 = { quantity: 13, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD };
items12[0] = obj36;
const obj37 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_28_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 28,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2,
  additionalPlans: items13,
};
items13 = [];
const obj38 = { quantity: 28, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD };
items13[0] = obj38;
const obj39 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_28_YEARLY,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 28,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2,
  additionalPlans: items14,
};
items14 = [];
const obj40 = { quantity: 28, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD };
items14[0] = obj40;
const obj41 = {
  productId: frozen.PREMIUM_TIER_1_PREMIUM_GUILD_1_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 1,
  premiumTier: PremiumTypes.TIER_1,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_1,
  additionalPlans: items15,
};
items15 = [];
const obj42 = { quantity: 1, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD };
items15[0] = obj42;
const obj43 = {
  productId: frozen.PREMIUM_TIER_1_PREMIUM_GUILD_1_YEARLY,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 1,
  premiumTier: PremiumTypes.TIER_1,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_1,
  additionalPlans: items16,
};
items16 = [];
const obj44 = { quantity: 1, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD };
items16[0] = obj44;
const obj45 = {
  productId: frozen.PREMIUM_GUILD_1_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 1,
  premiumTier: null,
  basePlanId: SubscriptionPlans.NONE_MONTH,
  additionalPlans: items17,
};
items17 = [];
const obj46 = { quantity: 1, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD };
items17[0] = obj46;
const obj47 = {
  productId: frozen.PREMIUM_GUILD_2_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 2,
  premiumTier: null,
  basePlanId: SubscriptionPlans.NONE_MONTH,
  additionalPlans: items18,
};
items18 = [];
const obj48 = { quantity: 2, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD };
items18[0] = obj48;
const frozen1 = Object.freeze(obj2);
const result = size.fileFinishedImporting("modules/premium/native/ProductIds.ios.tsx");

export const ProductIds = frozen;
export const GenericProductIds = items;
export const BasePlanIdToProductId = frozen1;
export const IAPProductIds = [];
export const SubscriptionProductIds = [];
export const AppStorePremiumProductIdsToPremiumBundledItems = {
  [frozen.PREMIUM_MONTH_TIER_1]: obj3,
  [frozen.PREMIUM_YEAR_TIER_1]: obj4,
  [frozen.PREMIUM_MONTH_TIER_2]: obj5,
  [frozen.PREMIUM_YEAR_TIER_2]: obj6,
  [frozen.PREMIUM_TIER_2_MONTHLY]: obj7,
  [frozen.PREMIUM_TIER_2_YEARLY]: obj8,
  [frozen.PREMIUM_TIER_1_MONTHLY]: obj9,
  [frozen.PREMIUM_TIER_1_YEARLY]: obj10,
  [frozen.PREMIUM_TIER_0_MONTHLY]: obj11,
  [frozen.PREMIUM_TIER_0_YEARLY]: obj12,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_1_MONTHLY]: obj13,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_1_YEARLY]: obj15,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_2_MONTHLY]: obj17,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_2_YEARLY]: obj19,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_3_MONTHLY]: obj21,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_3_YEARLY]: obj23,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_5_MONTHLY]: obj25,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_5_YEARLY]: obj27,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_10_MONTHLY]: obj29,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_10_YEARLY]: obj31,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_13_MONTHLY]: obj33,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_13_YEARLY]: obj35,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_28_MONTHLY]: obj37,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_28_YEARLY]: obj39,
  [frozen.PREMIUM_TIER_1_PREMIUM_GUILD_1_MONTHLY]: obj41,
  [frozen.PREMIUM_TIER_1_PREMIUM_GUILD_1_YEARLY]: obj43,
  [frozen.PREMIUM_GUILD_1_MONTHLY]: obj45,
  [frozen.PREMIUM_GUILD_2_MONTHLY]: obj47,
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
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_0 === arg0) {
    return frozen.PREMIUM_GIFT_YEAR_TIER_0;
  } else if (SubscriptionPlans.PREMIUM_MONTH_TIER_1 === arg0) {
    return frozen.PREMIUM_GIFT_MONTH_TIER_1;
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_1 === arg0) {
    return frozen.PREMIUM_GIFT_YEAR_TIER_1;
  } else if (SubscriptionPlans.PREMIUM_MONTH_TIER_2 === arg0) {
    return frozen.PREMIUM_GIFT_MONTH_TIER_2;
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_2 === arg0) {
    return frozen.PREMIUM_GIFT_YEAR_TIER_2;
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Tried to get Product for Plan not configured for IAP!");
    throw error;
  }
};
export const getPlanIdForGift = function getPlanIdForGift(arg0) {
  if (frozen.PREMIUM_GIFT_MONTH_TIER_0 === arg0) {
    return SubscriptionPlans.PREMIUM_MONTH_TIER_0;
  } else if (frozen.PREMIUM_GIFT_YEAR_TIER_0 === arg0) {
    return SubscriptionPlans.PREMIUM_YEAR_TIER_0;
  } else if (frozen.PREMIUM_GIFT_MONTH_TIER_1 === arg0) {
    return SubscriptionPlans.PREMIUM_MONTH_TIER_1;
  } else if (frozen.PREMIUM_GIFT_YEAR_TIER_1 === arg0) {
    return SubscriptionPlans.PREMIUM_YEAR_TIER_1;
  } else if (frozen.PREMIUM_GIFT_MONTH_TIER_2 === arg0) {
    return SubscriptionPlans.PREMIUM_MONTH_TIER_2;
  } else if (frozen.PREMIUM_GIFT_YEAR_TIER_2 === arg0) {
    return SubscriptionPlans.PREMIUM_YEAR_TIER_2;
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Tried to get Plan for Product not configured for IAP!");
    throw error;
  }
};

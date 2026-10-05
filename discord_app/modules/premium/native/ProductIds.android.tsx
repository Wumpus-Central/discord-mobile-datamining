// discord_app/modules/premium/native/ProductIds.android.tsx
import PremiumConstants from "../PremiumConstants.tsx";
import MetaQuestUtils from "../../device/MetaQuestUtils.android.tsx";
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
let items10;
let items11;
let items12;
let items13;
let items14;
let items15;
let items16;
let items17;
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
  PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID,
  PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID,
  PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID,
} = PremiumConstants);
const frozen = Object.freeze({
  PREMIUM_GIFT_MONTH_TIER_0: "premium_month_tier_0.2",
  PREMIUM_GIFT_YEAR_TIER_0: "premium_year_tier_0",
  PREMIUM_GIFT_MONTH_TIER_1: "premium_month_tier_1",
  PREMIUM_GIFT_YEAR_TIER_1: "premium_year_tier_1",
  PREMIUM_GIFT_MONTH_TIER_2: "premium_month_tier_2",
  PREMIUM_GIFT_YEAR_TIER_2: "premium_year_tier_2",
  PREMIUM_TIER_2_MONTHLY: "premium_tier_2_monthly",
  PREMIUM_TIER_2_YEARLY: "premium_tier_2_yearly",
  PREMIUM_TIER_1_MONTHLY: "premium_tier_1_monthly",
  PREMIUM_TIER_1_YEARLY: "premium_tier_1_yearly",
  PREMIUM_TIER_0_MONTHLY: "premium_tier_0_month",
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
  PREMIUM_TIER_2_PREMIUM_GUILD_13_MONTHLY: "premium_tier_2_premium_guild_13_monthly",
  PREMIUM_TIER_2_PREMIUM_GUILD_28_MONTHLY: "premium_tier_2_premium_guild_28_monthly",
  PREMIUM_TIER_1_PREMIUM_GUILD_1_MONTHLY: "premium_tier_1_premium_guild_1_monthly",
  PREMIUM_TIER_1_PREMIUM_GUILD_1_YEARLY: "premium_tier_1_premium_guild_1_yearly",
  PREMIUM_GUILD_1_MONTHLY: "premium_guild_1_monthly",
  PREMIUM_GUILD_2_MONTHLY: "premium_guild_2_monthly",
});
const items = [, , , , ,];
({
  PREMIUM_GIFT_MONTH_TIER_0: arr[0],
  PREMIUM_GIFT_YEAR_TIER_0: arr[1],
  PREMIUM_GIFT_MONTH_TIER_1: arr[2],
  PREMIUM_GIFT_YEAR_TIER_1: arr[3],
  PREMIUM_GIFT_MONTH_TIER_2: arr[4],
  PREMIUM_GIFT_YEAR_TIER_2: arr[5],
} = frozen);
const PREMIUM_TIER_2_MONTHLY = frozen.PREMIUM_TIER_2_MONTHLY;
if (MetaQuestUtils.isMetaQuest()) {
  const items1 = [PREMIUM_TIER_2_MONTHLY, , ,];
  ({ PREMIUM_TIER_2_YEARLY: arr3[1], PREMIUM_TIER_0_MONTHLY: arr3[2], PREMIUM_TIER_0_YEARLY: arr3[3] } = frozen);
  items2 = items1;
} else {
  items2 = [PREMIUM_TIER_2_MONTHLY, , , , , , , , , , , , , , , , , , , ,];
  ({
    PREMIUM_TIER_2_YEARLY: arr2[1],
    PREMIUM_TIER_1_MONTHLY: arr2[2],
    PREMIUM_TIER_1_YEARLY: arr2[3],
    PREMIUM_TIER_0_MONTHLY: arr2[4],
    PREMIUM_TIER_0_YEARLY: arr2[5],
    PREMIUM_TIER_2_PREMIUM_GUILD_1_MONTHLY: arr2[6],
    PREMIUM_TIER_2_PREMIUM_GUILD_1_YEARLY: arr2[7],
    PREMIUM_TIER_2_PREMIUM_GUILD_2_MONTHLY: arr2[8],
    PREMIUM_TIER_2_PREMIUM_GUILD_2_YEARLY: arr2[9],
    PREMIUM_TIER_2_PREMIUM_GUILD_3_MONTHLY: arr2[10],
    PREMIUM_TIER_2_PREMIUM_GUILD_3_YEARLY: arr2[11],
    PREMIUM_TIER_2_PREMIUM_GUILD_5_MONTHLY: arr2[12],
    PREMIUM_TIER_2_PREMIUM_GUILD_5_YEARLY: arr2[13],
    PREMIUM_TIER_2_PREMIUM_GUILD_10_MONTHLY: arr2[14],
    PREMIUM_TIER_2_PREMIUM_GUILD_13_MONTHLY: arr2[15],
    PREMIUM_TIER_2_PREMIUM_GUILD_28_MONTHLY: arr2[16],
    PREMIUM_TIER_1_PREMIUM_GUILD_1_MONTHLY: arr2[17],
    PREMIUM_TIER_1_PREMIUM_GUILD_1_YEARLY: arr2[18],
    PREMIUM_GUILD_1_MONTHLY: arr2[19],
    PREMIUM_GUILD_2_MONTHLY: arr2[20],
  } = frozen);
}
const obj8 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_1_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 1,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2,
  additionalPlans: items3,
};
items3 = [];
const obj = {
  [SubscriptionPlans.PREMIUM_MONTH_TIER_0]: frozen.PREMIUM_TIER_0_MONTHLY,
  [SubscriptionPlans.PREMIUM_MONTH_TIER_1]: frozen.PREMIUM_TIER_1_MONTHLY,
  [SubscriptionPlans.PREMIUM_MONTH_TIER_2]: frozen.PREMIUM_TIER_2_MONTHLY,
  [SubscriptionPlans.PREMIUM_MONTH_GUILD]: frozen.PREMIUM_GUILD_1_MONTHLY,
  [SubscriptionPlans.PREMIUM_YEAR_TIER_0]: frozen.PREMIUM_TIER_0_YEARLY,
  [SubscriptionPlans.PREMIUM_YEAR_TIER_1]: frozen.PREMIUM_TIER_1_YEARLY,
  [SubscriptionPlans.PREMIUM_YEAR_TIER_2]: frozen.PREMIUM_TIER_2_YEARLY,
};
const obj2 = {
  productId: frozen.PREMIUM_TIER_2_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 0,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2,
  additionalPlans: [],
};
const obj3 = {
  productId: frozen.PREMIUM_TIER_2_YEARLY,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 0,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2,
  additionalPlans: [],
};
const obj4 = {
  productId: frozen.PREMIUM_TIER_1_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 0,
  premiumTier: PremiumTypes.TIER_1,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_1,
  additionalPlans: [],
};
const obj5 = {
  productId: frozen.PREMIUM_TIER_1_YEARLY,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 0,
  premiumTier: PremiumTypes.TIER_1,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_1,
  additionalPlans: [],
};
const obj6 = {
  productId: frozen.PREMIUM_TIER_0_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 0,
  premiumTier: PremiumTypes.TIER_0,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_0,
  additionalPlans: [],
};
const obj7 = {
  productId: frozen.PREMIUM_TIER_0_YEARLY,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 0,
  premiumTier: PremiumTypes.TIER_0,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_0,
  additionalPlans: [],
};
const obj9 = { quantity: 1, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD };
items3[0] = obj9;
const obj10 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_1_YEARLY,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 1,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2,
  additionalPlans: items4,
};
items4 = [];
const obj11 = { quantity: 1, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD };
items4[0] = obj11;
const obj12 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_2_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 2,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2,
  additionalPlans: items5,
};
items5 = [];
const obj13 = { quantity: 2, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD };
items5[0] = obj13;
const obj14 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_2_YEARLY,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 2,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2,
  additionalPlans: items6,
};
items6 = [];
const obj15 = { quantity: 2, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD };
items6[0] = obj15;
const obj16 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_3_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 3,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2,
  additionalPlans: items7,
};
items7 = [];
const obj17 = { quantity: 3, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD };
items7[0] = obj17;
const obj18 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_3_YEARLY,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 3,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2,
  additionalPlans: items8,
};
items8 = [];
const obj19 = { quantity: 3, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD };
items8[0] = obj19;
const obj20 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_5_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 5,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2,
  additionalPlans: items9,
};
items9 = [];
const obj21 = { quantity: 5, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD };
items9[0] = obj21;
const obj22 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_5_YEARLY,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 5,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_2,
  additionalPlans: items10,
};
items10 = [];
const obj23 = { quantity: 5, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD };
items10[0] = obj23;
const obj24 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_10_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 10,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2,
  additionalPlans: items11,
};
items11 = [];
const obj25 = { quantity: 10, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD };
items11[0] = obj25;
const obj26 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_13_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 13,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2,
  additionalPlans: items12,
};
items12 = [];
const obj27 = { quantity: 13, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD };
items12[0] = obj27;
const obj28 = {
  productId: frozen.PREMIUM_TIER_2_PREMIUM_GUILD_28_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 28,
  premiumTier: PremiumTypes.TIER_2,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_2,
  additionalPlans: items13,
};
items13 = [];
const obj29 = { quantity: 28, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD };
items13[0] = obj29;
const obj30 = {
  productId: frozen.PREMIUM_TIER_1_PREMIUM_GUILD_1_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 1,
  premiumTier: PremiumTypes.TIER_1,
  basePlanId: SubscriptionPlans.PREMIUM_MONTH_TIER_1,
  additionalPlans: items14,
};
items14 = [];
const obj31 = { quantity: 1, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD };
items14[0] = obj31;
const obj32 = {
  productId: frozen.PREMIUM_TIER_1_PREMIUM_GUILD_1_YEARLY,
  interval: SubscriptionIntervalTypes.YEAR,
  numPremiumGuild: 1,
  premiumTier: PremiumTypes.TIER_1,
  basePlanId: SubscriptionPlans.PREMIUM_YEAR_TIER_1,
  additionalPlans: items15,
};
items15 = [];
const obj33 = { quantity: 1, planId: SubscriptionPlans.PREMIUM_YEAR_GUILD };
items15[0] = obj33;
const obj34 = {
  productId: frozen.PREMIUM_GUILD_1_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 1,
  premiumTier: null,
  basePlanId: SubscriptionPlans.NONE_MONTH,
  additionalPlans: items16,
};
items16 = [];
const obj35 = { quantity: 1, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD };
items16[0] = obj35;
const obj36 = {
  productId: frozen.PREMIUM_GUILD_2_MONTHLY,
  interval: SubscriptionIntervalTypes.MONTH,
  numPremiumGuild: 2,
  premiumTier: null,
  basePlanId: SubscriptionPlans.NONE_MONTH,
  additionalPlans: items17,
};
items17 = [];
const obj37 = { quantity: 2, planId: SubscriptionPlans.PREMIUM_MONTH_GUILD };
items17[0] = obj37;
const frozen1 = Object.freeze(obj);
const result = size.fileFinishedImporting("modules/premium/native/ProductIds.android.tsx");

export const ProductIds = frozen;
export const GenericProductIds = [];
export const IAPProductIds = items;
export const SubscriptionProductIds = items2;
export const BasePlanIdToProductId = frozen1;
export const AppStorePremiumProductIdsToPremiumBundledItems = {
  [frozen.PREMIUM_TIER_2_MONTHLY]: obj2,
  [frozen.PREMIUM_TIER_2_YEARLY]: obj3,
  [frozen.PREMIUM_TIER_1_MONTHLY]: obj4,
  [frozen.PREMIUM_TIER_1_YEARLY]: obj5,
  [frozen.PREMIUM_TIER_0_MONTHLY]: obj6,
  [frozen.PREMIUM_TIER_0_YEARLY]: obj7,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_1_MONTHLY]: obj8,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_1_YEARLY]: obj10,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_2_MONTHLY]: obj12,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_2_YEARLY]: obj14,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_3_MONTHLY]: obj16,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_3_YEARLY]: obj18,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_5_MONTHLY]: obj20,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_5_YEARLY]: obj22,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_10_MONTHLY]: obj24,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_13_MONTHLY]: obj26,
  [frozen.PREMIUM_TIER_2_PREMIUM_GUILD_28_MONTHLY]: obj28,
  [frozen.PREMIUM_TIER_1_PREMIUM_GUILD_1_MONTHLY]: obj30,
  [frozen.PREMIUM_TIER_1_PREMIUM_GUILD_1_YEARLY]: obj32,
  [frozen.PREMIUM_GUILD_1_MONTHLY]: obj34,
  [frozen.PREMIUM_GUILD_2_MONTHLY]: obj36,
};
export const TrialIdToProductOfferId = {
  [PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID]: {
    [frozen.PREMIUM_TIER_2_MONTHLY]: "premium-tier-2-monthly-likelihood",
    [frozen.PREMIUM_TIER_2_YEARLY]: "premium-tier-2-yearly-likelihood",
  },
  [PREMIUM_TIER_2_REACTIVATION_TRIAL_ID]: {
    [frozen.PREMIUM_TIER_2_MONTHLY]: "premium-tier-2-monthly-reactivation",
    [frozen.PREMIUM_TIER_2_YEARLY]: "premium-tier-2-yearly-reactivation",
  },
  [PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID]: {
    [frozen.PREMIUM_TIER_0_MONTHLY]: "premium-tier-0-monthly-likelihood",
    [frozen.PREMIUM_TIER_0_YEARLY]: "premium-tier-0-yearly-likelihood",
  },
  [PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID]: {
    [frozen.PREMIUM_TIER_2_MONTHLY]: "premium-tier-2-monthly-q4-drop",
    [frozen.PREMIUM_TIER_2_YEARLY]: "premium-tier-2-yearly-q4-drop",
  },
  [PREMIUM_TIER_2_REFERRAL_TRIAL_ID]: {
    [frozen.PREMIUM_TIER_2_MONTHLY]: "premium-tier-2-monthly-referral-trial",
    [frozen.PREMIUM_TIER_2_YEARLY]: "premium-tier-2-yearly-referral-trial",
  },
  [PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID]: {
    [frozen.PREMIUM_TIER_2_MONTHLY]: "premium-tier-2-monthly-hfu-two-week-trial",
    [frozen.PREMIUM_TIER_2_YEARLY]: "premium-tier-2-yearly-hfu-two-week-trial",
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
export const getProductIdForGift = function getProductIdForGift(planIdForPremiumType) {
  if (SubscriptionPlans.PREMIUM_MONTH_TIER_0 === planIdForPremiumType) {
    return frozen.PREMIUM_GIFT_MONTH_TIER_0;
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_0 === planIdForPremiumType) {
    return frozen.PREMIUM_GIFT_YEAR_TIER_0;
  } else if (SubscriptionPlans.PREMIUM_MONTH_TIER_1 === planIdForPremiumType) {
    return frozen.PREMIUM_GIFT_MONTH_TIER_1;
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_1 === planIdForPremiumType) {
    return frozen.PREMIUM_GIFT_YEAR_TIER_1;
  } else if (SubscriptionPlans.PREMIUM_MONTH_TIER_2 === planIdForPremiumType) {
    return frozen.PREMIUM_GIFT_MONTH_TIER_2;
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_2 === planIdForPremiumType) {
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

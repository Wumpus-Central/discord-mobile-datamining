// === Module 1077: set ===

// Module 1077 (set)
import set from "set" /* 2 */;

const obj = { ALL: null, ACTIVE_FRACTIONAL_PREMIUM_SKUS: null };
let set = new Set(["1271583180566036480", "1298745361602449479", "1333912750274904064"]);
obj[0] = set;
obj[1] = new Set(["1271583180566036480", "1298745361602449479", "1333912750274904064"]);
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/FractionalPremiumSKUs.tsx");

export const FractionalPremiumSKUs = { PREMIUM_TIER_2_1_HOUR: "1271583180566036480", PREMIUM_TIER_2_1_DAY: "1298745361602449479", PREMIUM_TIER_2_3_DAY: "1333912750274904064" };
export const FractionalPremiumSKUsSets = obj;
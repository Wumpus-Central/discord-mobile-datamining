// === Module 1976: PremiumTypeUtils ===

// Module 1976 (PremiumTypeUtils)
import PremiumConstants from "PremiumConstants" /* 1379 */;
import size from "module_2" /* 2 */;

function isPremiumAtLeast(premiumType, TIER_2) {
  let tmp = null == TIER_2;
  if (!tmp) {
    tmp = null != premiumType && PremiumTypeOrder[premiumType] >= PremiumTypeOrder[TIER_2];
    const tmp3 = null != premiumType && PremiumTypeOrder[premiumType] >= PremiumTypeOrder[TIER_2];
  }
  return tmp;
}
function isPremium(premiumType, TIER_2) {
  let tmp = null != premiumType && null != premiumType.premiumType;
  if (tmp) {
    premiumType = premiumType.premiumType;
    let tmp3 = null == TIER_2;
    if (!tmp3) {
      tmp3 = null != premiumType && PremiumTypeOrder[premiumType] >= PremiumTypeOrder[TIER_2];
      const tmp4 = null != premiumType && PremiumTypeOrder[premiumType] >= PremiumTypeOrder[TIER_2];
    }
    tmp = tmp3;
  }
  return tmp;
}
function isPremiumExactly(stateFromStores, TIER_2) {
  return null != stateFromStores && stateFromStores.premiumType === TIER_2;
}
const PremiumTypeOrder = PremiumConstants.PremiumTypeOrder;
const result = size.fileFinishedImporting("utils/PremiumTypeUtils.tsx");

export default { isPremiumAtLeast, isPremium, isPremiumExactly };
export { isPremiumAtLeast };
export const isPremiumAtMost = function isPremiumAtMost(premiumType, TIER_1) {
  return null == premiumType || PremiumTypeOrder[premiumType] <= PremiumTypeOrder[TIER_1];
};
export { isPremium };
export { isPremiumExactly };
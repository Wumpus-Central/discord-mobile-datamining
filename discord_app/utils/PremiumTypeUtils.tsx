// discord_app/utils/PremiumTypeUtils.tsx
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;

function isPremiumAtLeast(premiumType, TIER_2) {
  let tmp = null == TIER_2;
  if (!tmp) {
    let tmp3 = null != premiumType;
    if (tmp3) {
      tmp3 = PremiumTypeOrder[premiumType] >= PremiumTypeOrder[TIER_2];
    }
    tmp = tmp3;
  }
  return tmp;
}
function isPremium(premiumType) {
  let tmp = null != premiumType && null != premiumType.premiumType;
  if (tmp) {
    premiumType = premiumType.premiumType;
    let tmp3 = null == arg1;
    if (!tmp3) {
      let tmp4 = null != premiumType;
      if (tmp4) {
        tmp4 = PremiumTypeOrder[premiumType] >= PremiumTypeOrder[arg1];
      }
      tmp3 = tmp4;
    }
    tmp = tmp3;
  }
  return tmp;
}
function isPremiumExactly(currentUser, TIER_2) {
  let tmp = null != currentUser;
  if (tmp) {
    tmp = currentUser.premiumType === TIER_2;
  }
  return tmp;
}
const PremiumTypeOrder = GuildFeatures.PremiumTypeOrder;
const result = set.fileFinishedImporting("utils/PremiumTypeUtils.tsx");

export default { isPremiumAtLeast, isPremium, isPremiumExactly };
export { isPremiumAtLeast };
export const isPremiumAtMost = function isPremiumAtMost(premiumType, TIER_1) {
  let tmp = null == premiumType;
  if (!tmp) {
    tmp = PremiumTypeOrder[premiumType] <= PremiumTypeOrder[TIER_1];
  }
  return tmp;
};
export { isPremium };
export { isPremiumExactly };
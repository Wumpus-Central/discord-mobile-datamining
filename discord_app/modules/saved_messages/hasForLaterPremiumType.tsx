// === Module 7611: hasForLaterPremiumType ===

// Module 7611 (hasForLaterPremiumType)
import initialize from "initialize" /* 586 */;
import isPremiumAtLeast from "isPremiumAtLeast" /* 1945 */;
import closure_2 from "mergeGuildAvatar" /* 1921 */;
import { PremiumTypes } from "GuildFeatures" /* 1923 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/saved_messages/hasForLaterPremiumType.tsx");

export default function hasForLaterPremiumType() {
  currentUser = currentUser.getCurrentUser();
  return isPremiumAtLeast.isPremium(currentUser, PremiumTypes.TIER_2);
};
export const useHasForLaterPremiumType = function useHasForLaterPremiumType() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => callback(table[2]).isPremium(currentUser.getCurrentUser(), TIER_2.TIER_2));
};
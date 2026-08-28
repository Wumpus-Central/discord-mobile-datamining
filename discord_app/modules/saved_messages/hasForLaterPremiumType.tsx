// === Module 7547: hasForLaterPremiumType ===

// Module 7547 (hasForLaterPremiumType)
import initialize from "initialize" /* 589 */;
import isPremiumAtLeast from "isPremiumAtLeast" /* 1947 */;
import closure_2 from "mergeGuildAvatar" /* 1923 */;
import { PremiumTypes } from "GuildFeatures" /* 1925 */;

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
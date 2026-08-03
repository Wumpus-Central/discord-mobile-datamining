// === Module 9569: hasForLaterPremiumType ===

// Module 9569 (hasForLaterPremiumType)
import mergeGuildAvatar from "mergeGuildAvatar";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
const result = require("isPremiumAtLeast").fileFinishedImporting("modules/saved_messages/hasForLaterPremiumType.tsx");

export default function hasForLaterPremiumType() {
  currentUser = currentUser.getCurrentUser();
  return require(1897) /* isPremiumAtLeast */.isPremium(currentUser, PremiumTypes.TIER_2);
};
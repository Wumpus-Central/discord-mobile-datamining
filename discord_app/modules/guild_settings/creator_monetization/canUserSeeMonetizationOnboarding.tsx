// === Module 6071: canUserSeeMonetizationOnboarding ===

// Module 6071 (canUserSeeMonetizationOnboarding)
import isRestrictedFromShowingGuildPurchaseEntryPoints from "isRestrictedFromShowingGuildPurchaseEntryPoints" /* 4083 */;
import computeGuildRoleSubscriptionSettingsVisibility from "computeGuildRoleSubscriptionSettingsVisibility" /* 6072 */;
import set from "set" /* 6073 */;
import closure_2 from "mergeGuildAvatar" /* 1923 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_settings/creator_monetization/canUserSeeMonetizationOnboarding.tsx");

export const canUserSeeMonetizationOnboarding = function canUserSeeMonetizationOnboarding(closure_2) {
  currentUser = currentUser.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let obj = computeGuildRoleSubscriptionSettingsVisibility;
  obj = { guild: closure_2, isOwner: closure_2.ownerId === id, canManageGuildRoleSubscriptions: computeGuildRoleSubscriptionSettingsVisibility.canManageGuildRoleSubscriptions(closure_2), isUserInCreatorMonetizationEligibleCountry: null, shouldRestrictUpdatingRoleSubscriptionSettings: null };
  const obj3 = computeGuildRoleSubscriptionSettingsVisibility;
  obj[3] = set.isUserInCreatorMonetizationEligibleCountry();
  const obj4 = set;
  obj[4] = isRestrictedFromShowingGuildPurchaseEntryPoints.shouldRestrictUpdatingCreatorMonetizationSettings(closure_2.id);
  return obj.canSeeGuildRoleSubscriptionSettings(obj);
};
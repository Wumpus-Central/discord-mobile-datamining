// === Module 7225: canUserSeeMonetizationOnboarding ===

// Module 7225 (canUserSeeMonetizationOnboarding)
import isRestrictedFromShowingGuildPurchaseEntryPoints from "isRestrictedFromShowingGuildPurchaseEntryPoints" /* 4014 */;
import computeGuildRoleSubscriptionSettingsVisibility from "computeGuildRoleSubscriptionSettingsVisibility" /* 7226 */;
import set from "set" /* 7227 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_settings/creator_monetization/canUserSeeMonetizationOnboarding.tsx");

export const canUserSeeMonetizationOnboarding = function canUserSeeMonetizationOnboarding(closure_2) {
  currentUser = currentUser.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const obj = { guild: closure_2, isOwner: closure_2.ownerId === id, canManageGuildRoleSubscriptions: computeGuildRoleSubscriptionSettingsVisibility.canManageGuildRoleSubscriptions(closure_2), isUserInCreatorMonetizationEligibleCountry: null, shouldRestrictUpdatingRoleSubscriptionSettings: null };
  obj[3] = set.isUserInCreatorMonetizationEligibleCountry();
  obj[4] = isRestrictedFromShowingGuildPurchaseEntryPoints.shouldRestrictUpdatingCreatorMonetizationSettings(closure_2.id);
  return obj.canSeeGuildRoleSubscriptionSettings(obj);
};
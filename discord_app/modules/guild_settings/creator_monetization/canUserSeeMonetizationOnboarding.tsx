// discord_app/modules/guild_settings/creator_monetization/canUserSeeMonetizationOnboarding.tsx
import isRestrictedFromShowingGuildPurchaseEntryPoints from "isRestrictedFromShowingGuildPurchaseEntryPoints" /* 4014 */;
import computeGuildRoleSubscriptionSettingsVisibility from "computeGuildRoleSubscriptionSettingsVisibility" /* 7226 */;
import set from "set" /* 7227 */;
import closure_2 from "mergeGuildAvatar" /* 1922 */;

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
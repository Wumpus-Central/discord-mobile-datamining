// === Module 7373: canUserSeeMonetizationOnboarding ===

// Module 7373 (canUserSeeMonetizationOnboarding)
import CreatorMonetizationRestrictionsUtils from "CreatorMonetizationRestrictionsUtils" /* 4271 */;
import GuildRoleSubscriptionSettingUtils from "GuildRoleSubscriptionSettingUtils" /* 7374 */;
import CreatorMonetizationEligibilityExperimentUtils from "CreatorMonetizationEligibilityExperimentUtils" /* 7375 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/creator_monetization/canUserSeeMonetizationOnboarding.tsx");

export const canUserSeeMonetizationOnboarding = function canUserSeeMonetizationOnboarding(guild) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const obj2 = { guild, isOwner: guild.ownerId === id, canManageGuildRoleSubscriptions: null, isUserInCreatorMonetizationEligibleCountry: null, shouldRestrictUpdatingRoleSubscriptionSettings: null };
  const obj = GuildRoleSubscriptionSettingUtils;
  obj2.canManageGuildRoleSubscriptions = GuildRoleSubscriptionSettingUtils.canManageGuildRoleSubscriptions(guild);
  obj2.isUserInCreatorMonetizationEligibleCountry = CreatorMonetizationEligibilityExperimentUtils.isUserInCreatorMonetizationEligibleCountry();
  obj2.shouldRestrictUpdatingRoleSubscriptionSettings = CreatorMonetizationRestrictionsUtils.shouldRestrictUpdatingCreatorMonetizationSettings(guild.id);
  return obj.canSeeGuildRoleSubscriptionSettings(obj2);
};
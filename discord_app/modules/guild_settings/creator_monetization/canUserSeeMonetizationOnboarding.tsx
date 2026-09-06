// === Module 7259: canUserSeeMonetizationOnboarding ===

// Module 7259 (canUserSeeMonetizationOnboarding)
import CreatorMonetizationRestrictionsUtils from "CreatorMonetizationRestrictionsUtils" /* 4192 */;
import GuildRoleSubscriptionSettingUtils from "GuildRoleSubscriptionSettingUtils" /* 7260 */;
import CreatorMonetizationEligibilityExperimentUtils from "CreatorMonetizationEligibilityExperimentUtils" /* 7261 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/creator_monetization/canUserSeeMonetizationOnboarding.tsx");

export const canUserSeeMonetizationOnboarding = function canUserSeeMonetizationOnboarding(guild) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const obj = { guild, isOwner: guild.ownerId === id, canManageGuildRoleSubscriptions: GuildRoleSubscriptionSettingUtils.canManageGuildRoleSubscriptions(guild), isUserInCreatorMonetizationEligibleCountry: null, shouldRestrictUpdatingRoleSubscriptionSettings: null };
  obj.isUserInCreatorMonetizationEligibleCountry = CreatorMonetizationEligibilityExperimentUtils.isUserInCreatorMonetizationEligibleCountry();
  obj.shouldRestrictUpdatingRoleSubscriptionSettings = CreatorMonetizationRestrictionsUtils.shouldRestrictUpdatingCreatorMonetizationSettings(guild.id);
  return obj.canSeeGuildRoleSubscriptionSettings(obj);
};
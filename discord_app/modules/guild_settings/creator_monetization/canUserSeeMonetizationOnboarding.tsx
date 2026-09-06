// discord_app/modules/guild_settings/creator_monetization/canUserSeeMonetizationOnboarding.tsx
import CreatorMonetizationRestrictionsUtils from "../../creator_monetization_review/CreatorMonetizationRestrictionsUtils.tsx";
import GuildRoleSubscriptionSettingUtils from "../../guild_role_subscriptions/feature_gating/GuildRoleSubscriptionSettingUtils.tsx";
import CreatorMonetizationEligibilityExperimentUtils from "../../creator_monetization_eligibility/CreatorMonetizationEligibilityExperimentUtils.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_settings/creator_monetization/canUserSeeMonetizationOnboarding.tsx",
);

export const canUserSeeMonetizationOnboarding = function canUserSeeMonetizationOnboarding(guild) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const obj = {
    guild,
    isOwner: guild.ownerId === id,
    canManageGuildRoleSubscriptions: GuildRoleSubscriptionSettingUtils.canManageGuildRoleSubscriptions(guild),
    isUserInCreatorMonetizationEligibleCountry: null,
    shouldRestrictUpdatingRoleSubscriptionSettings: null,
  };
  obj.isUserInCreatorMonetizationEligibleCountry =
    CreatorMonetizationEligibilityExperimentUtils.isUserInCreatorMonetizationEligibleCountry();
  obj.shouldRestrictUpdatingRoleSubscriptionSettings =
    CreatorMonetizationRestrictionsUtils.shouldRestrictUpdatingCreatorMonetizationSettings(guild.id);
  return obj.canSeeGuildRoleSubscriptionSettings(obj);
};

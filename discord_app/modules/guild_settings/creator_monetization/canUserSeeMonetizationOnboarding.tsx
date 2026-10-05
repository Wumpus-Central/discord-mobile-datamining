// discord_app/modules/guild_settings/creator_monetization/canUserSeeMonetizationOnboarding.tsx
import CreatorMonetizationRestrictionsUtils from "../../creator_monetization_review/CreatorMonetizationRestrictionsUtils.tsx";
import GuildRoleSubscriptionSettingUtils from "../../guild_role_subscriptions/feature_gating/GuildRoleSubscriptionSettingUtils.tsx";
import CreatorMonetizationEligibilityExperimentUtils from "../../creator_monetization_eligibility/CreatorMonetizationEligibilityExperimentUtils.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/guild_settings/creator_monetization/canUserSeeMonetizationOnboarding.tsx",
);

export const canUserSeeMonetizationOnboarding = function canUserSeeMonetizationOnboarding(guild) {
  let obj2;
  let obj3;
  let obj4;
  const ownerId = guild.ownerId;
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const obj = {
    guild,
    isOwner: ownerId === id,
    canManageGuildRoleSubscriptions: obj2.canManageGuildRoleSubscriptions(guild),
    isUserInCreatorMonetizationEligibleCountry: obj3.isUserInCreatorMonetizationEligibleCountry(),
    shouldRestrictUpdatingRoleSubscriptionSettings: obj4.shouldRestrictUpdatingCreatorMonetizationSettings(guild.id),
  };
  const canSeeGuildRoleSubscriptionSettings = GuildRoleSubscriptionSettingUtils.canSeeGuildRoleSubscriptionSettings;
  GuildRoleSubscriptionSettingUtils;
  obj2 = GuildRoleSubscriptionSettingUtils;
  obj3 = CreatorMonetizationEligibilityExperimentUtils;
  obj4 = CreatorMonetizationRestrictionsUtils;
  return canSeeGuildRoleSubscriptionSettings(obj);
};

// discord_app/modules/guild_settings/creator_monetization/canUserSeeMonetizationOnboarding.tsx
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_settings/creator_monetization/canUserSeeMonetizationOnboarding.tsx");

export const canUserSeeMonetizationOnboarding = function canUserSeeMonetizationOnboarding(mergeGuildAvatar) {
  currentUser = currentUser.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let obj = require("../../guild_role_subscriptions/feature_gating/GuildRoleSubscriptionSettingUtils.tsx") /* computeGuildRoleSubscriptionSettingsVisibility */;
  obj = { guild: mergeGuildAvatar, isOwner: mergeGuildAvatar.ownerId === id, canManageGuildRoleSubscriptions: null, isUserInCreatorMonetizationEligibleCountry: null, shouldRestrictUpdatingRoleSubscriptionSettings: null };
  obj[2] = require("../../guild_role_subscriptions/feature_gating/GuildRoleSubscriptionSettingUtils.tsx") /* computeGuildRoleSubscriptionSettingsVisibility */.canManageGuildRoleSubscriptions(mergeGuildAvatar);
  const obj3 = require("../../guild_role_subscriptions/feature_gating/GuildRoleSubscriptionSettingUtils.tsx") /* computeGuildRoleSubscriptionSettingsVisibility */;
  obj[3] = require("../../creator_monetization_eligibility/CreatorMonetizationEligibilityExperimentUtils.tsx") /* set */.isUserInCreatorMonetizationEligibleCountry();
  const obj4 = require("../../creator_monetization_eligibility/CreatorMonetizationEligibilityExperimentUtils.tsx") /* set */;
  obj[4] = require("../../creator_monetization_review/CreatorMonetizationRestrictionsUtils.tsx") /* isRestrictedFromShowingGuildPurchaseEntryPoints */.shouldRestrictUpdatingCreatorMonetizationSettings(mergeGuildAvatar.id);
  return obj.canSeeGuildRoleSubscriptionSettings(obj);
};
// discord_app/modules/guild_settings/creator_monetization/canUserSeeMonetizationOnboarding.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { set } from "../../creator_monetization_eligibility/CreatorMonetizationEligibilityExperimentUtils.tsx";
import { isRestrictedFromShowingGuildPurchaseEntryPoints } from "../../creator_monetization_review/CreatorMonetizationRestrictionsUtils.tsx";
import { computeGuildRoleSubscriptionSettingsVisibility } from "../../guild_role_subscriptions/feature_gating/GuildRoleSubscriptionSettingUtils.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_settings/creator_monetization/canUserSeeMonetizationOnboarding.tsx");

export const canUserSeeMonetizationOnboarding = function canUserSeeMonetizationOnboarding(mergeGuildAvatar) {
  currentUser = currentUser.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let obj = computeGuildRoleSubscriptionSettingsVisibility;
  obj = { guild: mergeGuildAvatar, isOwner: mergeGuildAvatar.ownerId === id, canManageGuildRoleSubscriptions: null, isUserInCreatorMonetizationEligibleCountry: null, shouldRestrictUpdatingRoleSubscriptionSettings: null };
  obj[2] = computeGuildRoleSubscriptionSettingsVisibility.canManageGuildRoleSubscriptions(mergeGuildAvatar);
  const obj3 = computeGuildRoleSubscriptionSettingsVisibility;
  obj[3] = set.isUserInCreatorMonetizationEligibleCountry();
  const obj4 = set;
  obj[4] = isRestrictedFromShowingGuildPurchaseEntryPoints.shouldRestrictUpdatingCreatorMonetizationSettings(mergeGuildAvatar.id);
  return obj.canSeeGuildRoleSubscriptionSettings(obj);
};
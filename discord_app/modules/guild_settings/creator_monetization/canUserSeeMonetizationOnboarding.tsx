// discord_app/modules/guild_settings/creator_monetization/canUserSeeMonetizationOnboarding.tsx
import isRestrictedFromShowingGuildPurchaseEntryPoints from "../../creator_monetization_review/CreatorMonetizationRestrictionsUtils.tsx";
import computeGuildRoleSubscriptionSettingsVisibility from "../../guild_role_subscriptions/feature_gating/GuildRoleSubscriptionSettingUtils.tsx";
import set from "../../creator_monetization_eligibility/CreatorMonetizationEligibilityExperimentUtils.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";

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
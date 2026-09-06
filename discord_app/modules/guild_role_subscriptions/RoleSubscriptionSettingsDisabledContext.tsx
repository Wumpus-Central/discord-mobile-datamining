// discord_app/modules/guild_role_subscriptions/RoleSubscriptionSettingsDisabledContext.tsx
import CreatorMonetizationSettingsDisabledContext from "../creator_monetization/CreatorMonetizationSettingsDisabledContext.tsx";
import size from "../../../_runtime/metro/00002__.js";

const CreatorMonetizationSettingsDisabledContextDefault = CreatorMonetizationSettingsDisabledContext;

const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/RoleSubscriptionSettingsDisabledContext.tsx",
);

export default CreatorMonetizationSettingsDisabledContextDefault;
export const useRoleSubscriptionSettingsDisabled =
  CreatorMonetizationSettingsDisabledContext.useCreatorMonetizationSettingsDisabled;
export const RoleSubscriptionSettingsDisabledContextProvider =
  CreatorMonetizationSettingsDisabledContext.CreatorMonetizationSettingsDisabledContextProvider;

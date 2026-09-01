// discord_app/modules/guild_role_subscriptions/RoleSubscriptionSettingsDisabledContext.tsx
import set from "../../../_runtime/00002_set.js";
import context from "../creator_monetization/CreatorMonetizationSettingsDisabledContext.tsx";
import contextDefault from "../creator_monetization/CreatorMonetizationSettingsDisabledContext.tsx";

const result = set.fileFinishedImporting(
  "modules/guild_role_subscriptions/RoleSubscriptionSettingsDisabledContext.tsx",
);

export default contextDefault;
export const useRoleSubscriptionSettingsDisabled = context.useCreatorMonetizationSettingsDisabled;
export const RoleSubscriptionSettingsDisabledContextProvider =
  context.CreatorMonetizationSettingsDisabledContextProvider;

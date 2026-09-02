// discord_app/modules/guild_role_subscriptions/native/GuildRoleSettingsActionCreators.tsx
import _modDef9750 from "../../guild_settings/GuildSettingsActionCreators.tsx";
import closure_2 from "RoleTierEditStore.tsx";
import { GuildSettingsSections } from "../../../Constants.tsx";

const result = require("set").fileFinishedImporting(
  "modules/guild_role_subscriptions/native/GuildRoleSettingsActionCreators.tsx",
);

export const pushTierEditScene = function pushTierEditScene(arr, arg1) {
  closure_2.resetImperatively();
  arr.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT, arg1);
  _modDef9750.setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT);
};
export const pushTierTemplateSelectionScene = function pushTierTemplateSelectionScene(arr, arg1) {
  arr.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION, arg1);
  _modDef9750.setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION);
};

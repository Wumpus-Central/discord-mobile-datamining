// discord_app/modules/guild_role_subscriptions/native/GuildRoleSettingsActionCreators.tsx
import Constants from "../../../Constants.tsx";
import GuildSettingsActionCreatorsDefault from "../../guild_settings/GuildSettingsActionCreators.tsx";
import RoleTierEditStore from "RoleTierEditStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const GuildSettingsSections = Constants.GuildSettingsSections;
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/GuildRoleSettingsActionCreators.tsx",
);

export const pushTierEditScene = function pushTierEditScene(navigation, arg1) {
  RoleTierEditStore.resetImperatively();
  navigation.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT, arg1);
  const obj = GuildSettingsActionCreatorsDefault;
  obj.setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT);
};
export const pushTierTemplateSelectionScene = function pushTierTemplateSelectionScene(navigation, arg1) {
  navigation.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION, arg1);
  const obj = GuildSettingsActionCreatorsDefault;
  obj.setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION);
};

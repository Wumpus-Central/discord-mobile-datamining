// discord_app/modules/guild_role_subscriptions/native/GuildRoleSettingsActionCreators.tsx
import GuildSettingsActionCreatorsDefault from "../../guild_settings/GuildSettingsActionCreators.tsx";
import RoleTierEditStore from "RoleTierEditStore.tsx";

const GuildSettingsSections = fn(1074).GuildSettingsSections;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/GuildRoleSettingsActionCreators.tsx",
);

export const pushTierEditScene = function pushTierEditScene(navigation, arg1) {
  RoleTierEditStore.resetImperatively();
  navigation.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT, arg1);
  GuildSettingsActionCreatorsDefault.setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT);
};
export const pushTierTemplateSelectionScene = function pushTierTemplateSelectionScene(navigation, arg1) {
  navigation.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION, arg1);
  GuildSettingsActionCreatorsDefault.setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION);
};

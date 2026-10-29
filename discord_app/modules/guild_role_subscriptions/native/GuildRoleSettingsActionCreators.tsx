// === Module 19829: GuildRoleSettingsActionCreators ===

// Module 19829 (GuildRoleSettingsActionCreators)
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9042 */;
import RoleTierEditStore from "RoleTierEditStore" /* 19822 */;

const GuildSettingsSections = fn(1084).GuildSettingsSections;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/GuildRoleSettingsActionCreators.tsx");

export function pushTierEditScene(navigation, arg1) {
  RoleTierEditStore.resetImperatively();
  navigation.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT, arg1);
  GuildSettingsActionCreatorsDefault.setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT);
}
export function pushTierTemplateSelectionScene(navigation, arg1) {
  navigation.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION, arg1);
  GuildSettingsActionCreatorsDefault.setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION);
}
// discord_app/modules/guild_role_subscriptions/native/GuildRoleSettingsActionCreators.tsx
import _modDef8874 from "../../guild_settings/GuildSettingsActionCreators.tsx";
import usePriceTiers from "RoleTierEditStore.tsx";
import { GuildSettingsSections } from "../../../Constants.tsx";

const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/GuildRoleSettingsActionCreators.tsx");

export const pushTierEditScene = function pushTierEditScene(closure_1_1, arg1) {
  closure_2.resetImperatively();
  dependencyMap.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT, arg1);
  _modDef8874.setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT);
};
export const pushTierTemplateSelectionScene = function pushTierTemplateSelectionScene(navigation, arg1) {
  navigation.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION, arg1);
  _modDef8874.setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION);
};
// === Module 16959: pushTierEditScene ===

// Module 16959 (pushTierEditScene)
import _modDef8874 from "module_8874" /* 8874 */;
import usePriceTiers from "usePriceTiers" /* 16950 */;
import { GuildSettingsSections } from "ME" /* 676 */;

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
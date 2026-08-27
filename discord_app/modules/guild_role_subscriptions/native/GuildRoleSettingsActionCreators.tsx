// === Module 17235: pushTierEditScene ===

// Module 17235 (pushTierEditScene)
import _modDef9649 from "module_9649" /* 9649 */;
import closure_2 from "usePriceTiers" /* 17226 */;
import { GuildSettingsSections } from "ME" /* 676 */;

const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/GuildRoleSettingsActionCreators.tsx");

export const pushTierEditScene = function pushTierEditScene(arr, arg1) {
  closure_2.resetImperatively();
  arr.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT, arg1);
  _modDef9649.setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT);
};
export const pushTierTemplateSelectionScene = function pushTierTemplateSelectionScene(arr, arg1) {
  arr.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION, arg1);
  _modDef9649.setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION);
};
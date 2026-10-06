// === Module 9288: getDefaultGuildSettingsSection ===

// Module 9288 (getDefaultGuildSettingsSection)
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const GuildSettingsSections = Constants.GuildSettingsSections;
const result = size.fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export const getDefaultGuildSettingsSection = function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
};
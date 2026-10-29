// === Module 9047: getDefaultGuildSettingsSection ===

// Module 9047 (getDefaultGuildSettingsSection)
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

const GuildSettingsSections = Constants.GuildSettingsSections;
const result = size.fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
}
// === Module 9070: getDefaultGuildSettingsSection ===

// Module 9070 (getDefaultGuildSettingsSection)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;

const GuildSettingsSections = ME.GuildSettingsSections;
const result = set.fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export const getDefaultGuildSettingsSection = function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
};
// === Module 9760: getDefaultGuildSettingsSection ===

// Module 9760 (getDefaultGuildSettingsSection)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;

const GuildSettingsSections = ME.GuildSettingsSections;
const result = set.fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export const getDefaultGuildSettingsSection = function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
};
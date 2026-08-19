// === Module 8880: getDefaultGuildSettingsSection ===

// Module 8880 (getDefaultGuildSettingsSection)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;

const GuildSettingsSections = ME.GuildSettingsSections;
const result = obj132.fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export const getDefaultGuildSettingsSection = function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
};
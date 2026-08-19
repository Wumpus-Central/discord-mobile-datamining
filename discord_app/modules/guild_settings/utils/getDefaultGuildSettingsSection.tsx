// discord_app/modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ME from "../../../Constants.tsx";

const GuildSettingsSections = ME.GuildSettingsSections;
const result = obj132.fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export const getDefaultGuildSettingsSection = function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
};
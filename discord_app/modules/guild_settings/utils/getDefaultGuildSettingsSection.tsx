// discord_app/modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";

const GuildSettingsSections = ME.GuildSettingsSections;
const result = set.fileFinishedImporting("modules/guild_settings/utils/getDefaultGuildSettingsSection.tsx");

export const getDefaultGuildSettingsSection = function getDefaultGuildSettingsSection() {
  return GuildSettingsSections.PROFILE;
};

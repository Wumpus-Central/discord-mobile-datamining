// discord_app/modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import resolveSavedActiveGuildTheme from "../../../guild_themes/GuildThemeResolver.tsx";
import experiment from "../experiments/ServerThemeExperiment.tsx";

const result = obj132.fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  const serverThemeEnabled = experiment.useServerThemeEnabled(guildId, GuildThemeNuxTrigger);
  return null != resolveSavedActiveGuildTheme.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
// discord_app/modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx
import set from "../../../../../_runtime/00002_set.js";
import resolveSavedActiveGuildTheme from "../../../guild_themes/GuildThemeResolver.tsx";
import experiment from "../experiments/ServerThemeExperiment.tsx";

const result = set.fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  const serverThemeEnabled = experiment.useServerThemeEnabled(guildId, GuildThemeNuxTrigger);
  const obj = experiment;
  const tmp = require;
  const tmp3 = guildId;
  return null != resolveSavedActiveGuildTheme.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
}

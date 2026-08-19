// === Module 13371: useIsServerThemeAvailableForGuild ===

// Module 13371 (useIsServerThemeAvailableForGuild)
import obj132 from "obj132" /* 2 */;
import resolveSavedActiveGuildTheme from "resolveSavedActiveGuildTheme" /* 4256 */;
import experiment from "experiment" /* 4304 */;

const result = obj132.fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  const serverThemeEnabled = experiment.useServerThemeEnabled(guildId, GuildThemeNuxTrigger);
  return null != resolveSavedActiveGuildTheme.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
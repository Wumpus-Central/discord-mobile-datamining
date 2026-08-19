// === Module 13371: useIsServerThemeAvailableForGuild ===

// Module 13371 (useIsServerThemeAvailableForGuild)
import set from "set" /* 2 */;
import resolveSavedActiveGuildTheme from "resolveSavedActiveGuildTheme" /* 4256 */;
import experiment from "experiment" /* 4304 */;

const result = set.fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  const serverThemeEnabled = experiment.useServerThemeEnabled(guildId, GuildThemeNuxTrigger);
  const obj = experiment;
  const tmp = require;
  const tmp3 = guildId;
  return null != resolveSavedActiveGuildTheme.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
// === Module 13564: useIsServerThemeAvailableForGuild ===

// Module 13564 (useIsServerThemeAvailableForGuild)
import set from "set" /* 2 */;
import resolveSavedActiveGuildTheme from "resolveSavedActiveGuildTheme" /* 4326 */;
import experiment from "experiment" /* 4374 */;

const result = set.fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  const serverThemeEnabled = experiment.useServerThemeEnabled(guildId, GuildThemeNuxTrigger);
  const obj = experiment;
  const tmp = require;
  const tmp3 = guildId;
  return null != resolveSavedActiveGuildTheme.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
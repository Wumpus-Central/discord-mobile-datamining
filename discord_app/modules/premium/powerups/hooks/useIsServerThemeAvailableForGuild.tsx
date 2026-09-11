// === Module 13964: useIsServerThemeAvailableForGuild ===

// Module 13964 (useIsServerThemeAvailableForGuild)
import GuildThemeResolver from "GuildThemeResolver" /* 4491 */;
import ServerThemeExperiment from "ServerThemeExperiment" /* 4535 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  const serverThemeEnabled = ServerThemeExperiment.useServerThemeEnabled(guildId, GuildThemeNuxTrigger);
  return null != GuildThemeResolver.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
// === Module 16037: useIsServerThemeAvailableForGuild ===

// Module 16037 (useIsServerThemeAvailableForGuild)
import GuildThemeResolver from "GuildThemeResolver" /* 5341 */;
import ServerThemeExperiment from "ServerThemeExperiment" /* 5351 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  const serverThemeEnabled = ServerThemeExperiment.useServerThemeEnabled(guildId, GuildThemeNuxTrigger);
  return null != GuildThemeResolver.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
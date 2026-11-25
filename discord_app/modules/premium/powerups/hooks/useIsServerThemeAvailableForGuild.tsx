// === Module 15269: useIsServerThemeAvailableForGuild ===

// Module 15269 (useIsServerThemeAvailableForGuild)
import GuildThemeResolver from "GuildThemeResolver" /* 5215 */;
import ServerThemeExperiment from "ServerThemeExperiment" /* 13432 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  const serverThemeEnabled = ServerThemeExperiment.useServerThemeEnabled(guildId, GuildThemeNuxTrigger);
  return null != GuildThemeResolver.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
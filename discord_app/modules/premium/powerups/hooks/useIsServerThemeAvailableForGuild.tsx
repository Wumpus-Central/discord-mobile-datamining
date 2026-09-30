// === Module 13652: useIsServerThemeAvailableForGuild ===

// Module 13652 (useIsServerThemeAvailableForGuild)
import GuildThemeResolver from "GuildThemeResolver" /* 4749 */;
import ServerThemeExperiment from "ServerThemeExperiment" /* 4791 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  const serverThemeEnabled = ServerThemeExperiment.useServerThemeEnabled(guildId, GuildThemeNuxTrigger);
  return null != GuildThemeResolver.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
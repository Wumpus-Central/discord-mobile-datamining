// discord_app/modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx
import GuildThemeResolver from "../../../guild_themes/GuildThemeResolver.tsx";
import ServerThemeExperiment from "../experiments/ServerThemeExperiment.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  const serverThemeEnabled = ServerThemeExperiment.useServerThemeEnabled(guildId, GuildThemeNuxTrigger);
  return null != GuildThemeResolver.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
}

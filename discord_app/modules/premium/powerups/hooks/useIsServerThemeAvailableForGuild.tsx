const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  const serverThemeEnabled = require(4215) /* experiment */.useServerThemeEnabled(guildId, GuildThemeNuxTrigger);
  const obj = require(4215) /* experiment */;
  const tmp = require;
  const tmp3 = guildId;
  return null != require(4167) /* resolveSavedActiveGuildTheme */.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
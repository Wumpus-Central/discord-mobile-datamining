// discord_app/modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useIsServerThemeAvailableForGuild.tsx");

export default function useIsServerThemeAvailableForGuild(guildId, GuildThemeNuxTrigger) {
  const serverThemeEnabled = require("../experiments/ServerThemeExperiment.tsx") /* experiment */.useServerThemeEnabled(guildId, GuildThemeNuxTrigger);
  const obj = require("../experiments/ServerThemeExperiment.tsx") /* experiment */;
  const tmp = require;
  const tmp3 = guildId;
  return null != require("../../../guild_themes/GuildThemeResolver.tsx") /* resolveSavedActiveGuildTheme */.useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger);
};
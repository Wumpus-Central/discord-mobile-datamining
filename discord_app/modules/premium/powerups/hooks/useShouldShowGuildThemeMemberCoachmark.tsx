// discord_app/modules/premium/powerups/hooks/useShouldShowGuildThemeMemberCoachmark.tsx
import GuildPowerupsConstants from "../constants/GuildPowerupsConstants.tsx";
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount.tsx";
import ServerThemeUserExperiment from "../experiments/ServerThemeUserExperiment.tsx";
import ServerThemeExperiment from "../experiments/ServerThemeExperiment.tsx";
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission.tsx";
import useIsGuildThemePerkEnabledDefault from "useIsGuildThemePerkEnabled.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_3 = GuildPowerupsConstants.GUILD_THEME_POWERUP_BOOST_PRICE;
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useShouldShowGuildThemeMemberCoachmark.tsx");

export default function useShouldShowGuildThemeMemberCoachmark(guildId) {
  const tmp = useHasAllocateBoostPermissionDefault(guildId);
  let serverThemeEnabled = ServerThemeExperiment.useServerThemeEnabled(
    guildId,
    "useShouldShowGuildThemeMemberCoachmark",
  );
  const serverThemeUserEnabled = ServerThemeUserExperiment.useServerThemeUserEnabled(
    "useShouldShowGuildThemeMemberCoachmark",
  );
  const tmp4 = useIsGuildThemePerkEnabledDefault(guildId);
  const isLoading = useGuildPowerupsBoostCountDefault(guildId).isLoading;
  let tmp7 = !isLoading;
  if (!isLoading) {
    if (serverThemeEnabled) {
      serverThemeEnabled = serverThemeUserEnabled;
    }
    if (serverThemeEnabled) {
      serverThemeEnabled = tmp6 < closure_3;
    }
    if (serverThemeEnabled) {
      serverThemeEnabled = !tmp4;
    }
    if (serverThemeEnabled) {
      serverThemeEnabled = false === tmp;
    }
    tmp7 = serverThemeEnabled;
  }
  return tmp7;
}

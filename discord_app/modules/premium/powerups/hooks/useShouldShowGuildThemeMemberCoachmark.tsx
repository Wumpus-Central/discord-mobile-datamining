// discord_app/modules/premium/powerups/hooks/useShouldShowGuildThemeMemberCoachmark.tsx
import GuildPowerupsConstants from "../constants/GuildPowerupsConstants.tsx";
import ServerThemeUserExperiment from "../experiments/ServerThemeUserExperiment.tsx";
import ServerThemeExperiment from "../experiments/ServerThemeExperiment.tsx";
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount.tsx";
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission.tsx";
import useIsGuildThemePerkEnabledDefault from "useIsGuildThemePerkEnabled.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_3 = GuildPowerupsConstants.GUILD_THEME_POWERUP_BOOST_PRICE;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const tmp = useHasAllocateBoostPermissionDefault(arg0);
      const obj = ServerThemeExperiment;
      let serverThemeEnabled = obj.useServerThemeEnabled(arg0, "useShouldShowGuildThemeMemberCoachmark");
      const obj2 = ServerThemeUserExperiment;
      const serverThemeUserEnabled = obj2.useServerThemeUserEnabled("useShouldShowGuildThemeMemberCoachmark");
      const obj3 = ServerThemeExperiment;
      const serverThemeRollbackEnabled = obj3.useServerThemeRollbackEnabled(
        arg0,
        "useShouldShowGuildThemeMemberCoachmark",
      );
      const tmp5 = useIsGuildThemePerkEnabledDefault(arg0);
      let tmp8 = !useGuildPowerupsBoostCountDefault(arg0).isLoading;
      useGuildPowerupsBoostCountDefault(arg0);
      if (tmp8) {
        if (serverThemeEnabled) {
          serverThemeEnabled = serverThemeUserEnabled;
        }
        if (serverThemeEnabled) {
          serverThemeEnabled = !serverThemeRollbackEnabled;
        }
        if (serverThemeEnabled) {
          serverThemeEnabled = tmp7 < closure_3;
        }
        if (serverThemeEnabled) {
          serverThemeEnabled = !tmp5;
        }
        if (serverThemeEnabled) {
          serverThemeEnabled = false === tmp;
        }
        tmp8 = serverThemeEnabled;
      }
      return tmp8;
    }
  : (arg0) => {
      const tmp = useHasAllocateBoostPermissionDefault(arg0);
      const obj = ServerThemeExperiment;
      let serverThemeEnabled = obj.useServerThemeEnabled(arg0, "useShouldShowGuildThemeMemberCoachmark");
      const obj2 = ServerThemeUserExperiment;
      const serverThemeUserEnabled = obj2.useServerThemeUserEnabled("useShouldShowGuildThemeMemberCoachmark");
      const obj3 = ServerThemeExperiment;
      const serverThemeRollbackEnabled = obj3.useServerThemeRollbackEnabled(
        arg0,
        "useShouldShowGuildThemeMemberCoachmark",
      );
      const tmp5 = useIsGuildThemePerkEnabledDefault(arg0);
      let tmp8 = !useGuildPowerupsBoostCountDefault(arg0).isLoading;
      useGuildPowerupsBoostCountDefault(arg0);
      if (tmp8) {
        if (serverThemeEnabled) {
          serverThemeEnabled = serverThemeUserEnabled;
        }
        if (serverThemeEnabled) {
          serverThemeEnabled = !serverThemeRollbackEnabled;
        }
        if (serverThemeEnabled) {
          serverThemeEnabled = tmp7 < closure_3;
        }
        if (serverThemeEnabled) {
          serverThemeEnabled = !tmp5;
        }
        if (serverThemeEnabled) {
          serverThemeEnabled = false === tmp;
        }
        tmp8 = serverThemeEnabled;
      }
      return tmp8;
    };
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useShouldShowGuildThemeMemberCoachmark.tsx");

export default tmp2;

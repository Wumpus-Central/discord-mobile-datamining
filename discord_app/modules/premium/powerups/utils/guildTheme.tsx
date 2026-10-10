// discord_app/modules/premium/powerups/utils/guildTheme.tsx
import usePowerupActiveStatusDefault from "../hooks/usePowerupActiveStatus.tsx";
import GuildPowerupsStore from "../GuildPowerupsStore.tsx";

const require = globalThis.__r;

const require = fn;
const PowerupActiveStatusType = fn(5008).PowerupActiveStatusType;
const ReactCompilerGating = fn(558);
function shouldShowGuildThemeRollback(arg0, storeRemovalDate, arg2) {
  let tmp = arg0;
  if (arg0) {
    tmp = null != storeRemovalDate;
  }
  if (tmp) {
    tmp = null != storeRemovalDate.storeRemovalDate;
  }
  if (tmp) {
    tmp = arg2 === PowerupActiveStatusType.POWERUP_ACTIVATED;
  }
  return tmp;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/utils/guildTheme.tsx");

export { shouldShowGuildThemeRollback };
export const useShouldShowGuildThemeRollback = ReactCompilerGating.isReactCompilerEnabled()
  ? function useShouldShowGuildThemeRollback(arg0, arg1) {
      _require = arg0;
      const cResult = require("c").c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildPowerupsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function h() {
          return GuildPowerupsStore.getStateForGuild(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
      let tmp8;
      if (stateFromStores != null) {
        tmp8 = stateFromStores.allPowerups[tmp(undefined, 5011).GUILD_POWERUP_GUILD_THEME_SKU_ID];
      }
      const tmp9 = usePowerupActiveStatusDefault(arg0, tmp8);
      const tmpResult = require("initialize");
      const serverThemeRollbackEnabled = require("ServerThemeExperiment").useServerThemeRollbackEnabled(arg0, arg1);
      if (cResult[3] === tmp9.type) {
        if (cResult[4] === tmp8) {
          if (cResult[5] === serverThemeRollbackEnabled) {
            let tmp11 = cResult[6];
          }
          return tmp11;
        }
      }
      let tmp12 = serverThemeRollbackEnabled;
      if (serverThemeRollbackEnabled) {
        tmp12 = null != tmp8;
      }
      if (tmp12) {
        tmp12 = null != tmp8.storeRemovalDate;
      }
      if (tmp12) {
        tmp12 = tmp9.type === PowerupActiveStatusType.POWERUP_ACTIVATED;
      }
      cResult[3] = tmp9.type;
      cResult[4] = tmp8;
      cResult[5] = serverThemeRollbackEnabled;
      cResult[6] = tmp12;
      tmp11 = tmp12;
      const tmpResult2 = require("ServerThemeExperiment");
    }
  : function useShouldShowGuildThemeRollback(arg0, arg1) {
      _require = arg0;
      const items = [GuildPowerupsStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        GuildPowerupsStore.getStateForGuild(closure_0),
      );
      let tmp4;
      if (stateFromStores != null) {
        tmp4 = stateFromStores.allPowerups[tmp(undefined, 5011).GUILD_POWERUP_GUILD_THEME_SKU_ID];
      }
      const obj = require("initialize");
      const tmp5 = usePowerupActiveStatusDefault(arg0, tmp4);
      let serverThemeRollbackEnabled = require("ServerThemeExperiment").useServerThemeRollbackEnabled(arg0, arg1);
      if (serverThemeRollbackEnabled) {
        serverThemeRollbackEnabled = null != tmp4;
      }
      if (serverThemeRollbackEnabled) {
        serverThemeRollbackEnabled = null != tmp4.storeRemovalDate;
      }
      if (serverThemeRollbackEnabled) {
        serverThemeRollbackEnabled = tmp5.type === PowerupActiveStatusType.POWERUP_ACTIVATED;
      }
      return serverThemeRollbackEnabled;
    };

// === Module 12757: guildTheme ===

// Module 12757 (guildTheme)
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 12758 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4645 */;

const require = globalThis.__r;

const require = fn;
const PowerupActiveStatusType = fn(4646).PowerupActiveStatusType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/utils/guildTheme.tsx");

export const shouldShowGuildThemeRollback = function shouldShowGuildThemeRollback(arg0, storeRemovalDate, arg2) {
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
};
export const useShouldShowGuildThemeRollback = function useShouldShowGuildThemeRollback(guildId, useGuildPowerupNewPerkMarketingVersion) {
  _require = guildId;
  const items = [GuildPowerupsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  let tmp4;
  if (stateFromStores != null) {
    tmp4 = stateFromStores.allPowerups[tmp(undefined, 4649).GUILD_POWERUP_GUILD_THEME_SKU_ID];
  }
  const obj = require("initialize");
  const tmp5 = usePowerupActiveStatusDefault(guildId, tmp4);
  let serverThemeRollbackEnabled = require("ServerThemeExperiment").useServerThemeRollbackEnabled(guildId, useGuildPowerupNewPerkMarketingVersion);
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
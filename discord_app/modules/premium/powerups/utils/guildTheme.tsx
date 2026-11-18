// === Module 13318: guildTheme ===

// Module 13318 (guildTheme)
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 13319 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 8243 */;

const require = globalThis.__r;

const require = fn;
const PowerupActiveStatusType = fn(8244).PowerupActiveStatusType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/utils/guildTheme.tsx");

export function shouldShowGuildThemeRollback(arg0, storeRemovalDate, arg2) {
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
export function useShouldShowGuildThemeRollback(guildId, useMarketablePowerupPerks) {
  _require = guildId;
  items = [GuildPowerupsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  let tmp4;
  if (stateFromStores != null) {
    tmp4 = stateFromStores.allPowerups[tmp(undefined, 7912).GUILD_POWERUP_GUILD_THEME_SKU_ID];
  }
  const obj = require("initialize");
  const tmp5 = usePowerupActiveStatusDefault(guildId, tmp4);
  let serverThemeRollbackEnabled = require("ServerThemeExperiment").useServerThemeRollbackEnabled(guildId, useMarketablePowerupPerks);
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
}
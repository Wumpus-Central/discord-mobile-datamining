// === Module 13402: useMarketablePowerupPerks ===

// Module 13402 (useMarketablePowerupPerks)
import Powerups from "Powerups" /* 4777 */;
import useGameServerPerkDefault from "useGameServerPerk" /* 12250 */;
import noop from "module_19" /* 19 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4773 */;

const require = globalThis.__r;

require = fn;
const GuildPowerupsConstants = fn(4774);
const GuildPowerupType = GuildPowerupsConstants.GuildPowerupType;
let items = [...Array.from(tmp2.GUILD_TAG_BADGE_PACKS_WAVE_ONE_SKU_ID_SET), ...Array.from(tmp2.GUILD_TAG_BADGE_PACKS_WAVE_TWO_SKU_ID_SET), fn(4777).VANITY_URL_POWERUP_SKU_ID];
let set = new Set(items);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useMarketablePowerupPerks.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildPowerupsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const stateForGuild = GuildPowerupsStore.getStateForGuild(closure_0);
      let tmp2;
      if (stateForGuild != null) {
        const powerupCatalog = stateForGuild.powerupCatalog;
        if (powerupCatalog != null) {
          tmp2 = powerupCatalog[GuildPowerupType.PERK];
        }
      }
      return tmp2;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  const tmp8 = useGameServerPerkDefault(arg0);
  const tmpResult = require("initialize");
  const serverThemeRollbackEnabled = require("ServerThemeExperiment").useServerThemeRollbackEnabled(arg0, "useMarketablePowerupPerks");
  if (cResult[3] !== serverThemeRollbackEnabled) {
    const _Set = Set;
    set = new Set(set);
    if (serverThemeRollbackEnabled) {
      set.add(tmp(4777).GUILD_POWERUP_GUILD_THEME_SKU_ID);
    }
    cResult[3] = serverThemeRollbackEnabled;
    cResult[4] = set;
    let tmp10 = set;
  } else {
    tmp10 = cResult[4];
  }
  importDefault = tmp10;
  if (cResult[5] !== stateFromStores) {
    let items1 = stateFromStores;
    if (stateFromStores == null) {
      items1 = [];
    }
    cResult[5] = stateFromStores;
    cResult[6] = items1;
    let tmp16 = items1;
  } else {
    tmp16 = cResult[6];
  }
  if (cResult[7] === tmp8) {
    if (cResult[8] === tmp16) {
      let arr3 = cResult[9];
    }
    if (cResult[10] === arr3) {
      if (cResult[11] === tmp10) {
        let tmp19 = cResult[12];
      }
      return tmp19;
    }
    const found = arr3.filter((skuId) => !set.has(skuId.skuId));
    cResult[10] = arr3;
    cResult[11] = tmp10;
    cResult[12] = found;
    tmp19 = found;
  }
  const items2 = [...tmp16];
  if (null != tmp8) {
    items2.push(tmp8);
  }
  cResult[7] = tmp8;
  cResult[8] = tmp16;
  cResult[9] = items2;
  arr3 = items2;
  const tmpResult2 = require("ServerThemeExperiment");
}) : ((arg0) => {
  _require = arg0;
  let items = [memo];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const stateForGuild = GuildPowerupsStore.getStateForGuild(closure_0);
    let tmp2;
    if (stateForGuild != null) {
      const powerupCatalog = stateForGuild.powerupCatalog;
      if (powerupCatalog != null) {
        tmp2 = powerupCatalog[GuildPowerupType.PERK];
      }
    }
    return tmp2;
  });
  let tmp2 = stateFromStores(12250)(arg0);
  dependencyMap = tmp2;
  const obj = require("initialize");
  const serverThemeRollbackEnabled = require("ServerThemeExperiment").useServerThemeRollbackEnabled(arg0, "useMarketablePowerupPerks");
  let items1 = [serverThemeRollbackEnabled];
  memo = serverThemeRollbackEnabled.useMemo(() => {
    set = new Set(set);
    if (serverThemeRollbackEnabled) {
      set.add(Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID);
    }
    return set;
  }, items1);
  const items2 = [stateFromStores, tmp2, memo];
  return serverThemeRollbackEnabled.useMemo(() => {
    let items = stateFromStores;
    if (stateFromStores == null) {
      items = [];
    }
    const items1 = [...items];
    if (null != closure_2) {
      items1.push(tmp);
    }
    return items1.filter((skuId) => !set.has(skuId.skuId));
  }, items2);
});
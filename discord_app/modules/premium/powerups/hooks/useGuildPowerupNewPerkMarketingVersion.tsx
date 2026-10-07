// === Module 12177: useGuildPowerupNewPerkMarketingVersion ===

// Module 12177 (useGuildPowerupNewPerkMarketingVersion)
import Powerups from "Powerups" /* 4777 */;
import GuildSettingsServerTagUtils from "GuildSettingsServerTagUtils" /* 9285 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4515 */;

const require = globalThis.__r;

require = fn;
const GuildPowerupsConstants = fn(4774);
({ GuildPowerupNewPerkMarketingVersion: hasOwnProperty, NEW_PERK_MARKETING_VERSION_TO_POWERUP_SKU_ID_SET: metroRequire } = GuildPowerupsConstants);
const Constants = fn(1085);
({ GuildFeatures: closure_7, Permissions: closure_8 } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupNewPerkMarketingVersion.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(6);
  const obj = require("c");
  const gameServerEnabled = require("GameServerExperiment").useGameServerEnabled(arg0, "useGuildPowerupNewPerkMarketingVersion");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class U {
      constructor() {
        guild = closure_3.getGuild(closure_0);
        hasItem = undefined;
        if (guild != null) {
          features = guild.features;
          tmp3 = GuildFeatures;
          hasItem = features.has(GuildFeatures.GAME_SERVERS);
        }
        return hasItem;
      }
    }
    cResult[1] = arg0;
    cResult[2] = U;
  } else {
    class U {
      constructor() {
        guild = closure_3.getGuild(closure_0);
        hasItem = undefined;
        if (guild != null) {
          features = guild.features;
          tmp3 = GuildFeatures;
          hasItem = features.has(GuildFeatures.GAME_SERVERS);
        }
        return hasItem;
      }
    }
  }
  const obj2 = require("GameServerExperiment");
  const stateFromStores = require("initialize").useStateFromStores(first, U);
  const tmpResult = require("initialize");
  const serverThemeEnabled = require("ServerThemeExperiment").useServerThemeEnabled(arg0, "useGuildPowerupNewPerkMarketingVersion");
  const tmpResult5 = require("ServerThemeExperiment");
  const serverThemeUserEnabled = require("ServerThemeUserExperiment").useServerThemeUserEnabled("useGuildPowerupNewPerkMarketingVersion");
  const tmpResult6 = require("ServerThemeUserExperiment");
  const serverThemeRollbackEnabled = require("ServerThemeExperiment").useServerThemeRollbackEnabled(arg0, "useGuildPowerupNewPerkMarketingVersion");
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor() {
        guild = closure_3.getGuild(closure_0);
        hasItem = undefined;
        if (guild != null) {
          features = guild.features;
          tmp3 = GuildFeatures;
          hasItem = features.has(GuildFeatures.GAME_SERVERS);
        }
        return hasItem;
      }
    }
    const items1 = [PermissionStore, GuildStore];
    cResult[3] = items1;
    const tmp12 = items1;
  } else {
    class U {
      constructor() {
        guild = closure_3.getGuild(closure_0);
        hasItem = undefined;
        if (guild != null) {
          features = guild.features;
          tmp3 = GuildFeatures;
          hasItem = features.has(GuildFeatures.GAME_SERVERS);
        }
        return hasItem;
      }
    }
  }
  if (cResult[4] !== arg0) {
    class U {
      constructor() {
        guild = closure_3.getGuild(closure_0);
        hasItem = undefined;
        if (guild != null) {
          features = guild.features;
          tmp3 = GuildFeatures;
          hasItem = features.has(GuildFeatures.GAME_SERVERS);
        }
        return hasItem;
      }
    }
    cResult[4] = arg0;
    cResult[5] = tmp15;
  } else {
    class U {
      constructor() {
        guild = closure_3.getGuild(closure_0);
        hasItem = undefined;
        if (guild != null) {
          features = guild.features;
          tmp3 = GuildFeatures;
          hasItem = features.has(GuildFeatures.GAME_SERVERS);
        }
        return hasItem;
      }
    }
  }
  const tmpResult7 = require("ServerThemeExperiment");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp12, tmp15);
  if (arg1 != null) {
    class U {
      constructor() {
        guild = closure_3.getGuild(closure_0);
        hasItem = undefined;
        if (guild != null) {
          features = guild.features;
          tmp3 = GuildFeatures;
          hasItem = features.has(GuildFeatures.GAME_SERVERS);
        }
        return hasItem;
      }
    }
    if (tmp18 != null) {
      class U {
        constructor() {
          guild = closure_3.getGuild(closure_0);
          hasItem = undefined;
          if (guild != null) {
            features = guild.features;
            tmp3 = GuildFeatures;
            hasItem = features.has(GuildFeatures.GAME_SERVERS);
          }
          return hasItem;
        }
      }
    }
  }
  if (arg1 != null) {
    class U {
      constructor() {
        guild = closure_3.getGuild(closure_0);
        hasItem = undefined;
        if (guild != null) {
          features = guild.features;
          tmp3 = GuildFeatures;
          hasItem = features.has(GuildFeatures.GAME_SERVERS);
        }
        return hasItem;
      }
    }
    if (tmp20 != null) {
      class U {
        constructor() {
          guild = closure_3.getGuild(closure_0);
          hasItem = undefined;
          if (guild != null) {
            features = guild.features;
            tmp3 = GuildFeatures;
            hasItem = features.has(GuildFeatures.GAME_SERVERS);
          }
          return hasItem;
        }
      }
    }
  }
  if (tmp19) {
    class U {
      constructor() {
        guild = closure_3.getGuild(closure_0);
        hasItem = undefined;
        if (guild != null) {
          features = guild.features;
          tmp3 = GuildFeatures;
          hasItem = features.has(GuildFeatures.GAME_SERVERS);
        }
        return hasItem;
      }
    }
  }
  if (arg1 != null) {
    class U {
      constructor() {
        guild = closure_3.getGuild(closure_0);
        hasItem = undefined;
        if (guild != null) {
          features = guild.features;
          tmp3 = GuildFeatures;
          hasItem = features.has(GuildFeatures.GAME_SERVERS);
        }
        return hasItem;
      }
    }
    if (tmp22 != null) {
      class U {
        constructor() {
          guild = closure_3.getGuild(closure_0);
          hasItem = undefined;
          if (guild != null) {
            features = guild.features;
            tmp3 = GuildFeatures;
            hasItem = features.has(GuildFeatures.GAME_SERVERS);
          }
          return hasItem;
        }
      }
    }
  }
  if (arg1 != null) {
    class U {
      constructor() {
        guild = closure_3.getGuild(closure_0);
        hasItem = undefined;
        if (guild != null) {
          features = guild.features;
          tmp3 = GuildFeatures;
          hasItem = features.has(GuildFeatures.GAME_SERVERS);
        }
        return hasItem;
      }
    }
    if (tmp23 != null) {
      class U {
        constructor() {
          guild = closure_3.getGuild(closure_0);
          hasItem = undefined;
          if (guild != null) {
            features = guild.features;
            tmp3 = GuildFeatures;
            hasItem = features.has(GuildFeatures.GAME_SERVERS);
          }
          return hasItem;
        }
      }
    }
  }
  if (serverThemeEnabled) {
    class U {
      constructor() {
        guild = closure_3.getGuild(closure_0);
        hasItem = undefined;
        if (guild != null) {
          features = guild.features;
          tmp3 = GuildFeatures;
          hasItem = features.has(GuildFeatures.GAME_SERVERS);
        }
        return hasItem;
      }
    }
  }
  if (arg1 != null) {
    class U {
      constructor() {
        guild = closure_3.getGuild(closure_0);
        hasItem = undefined;
        if (guild != null) {
          features = guild.features;
          tmp3 = GuildFeatures;
          hasItem = features.has(GuildFeatures.GAME_SERVERS);
        }
        return hasItem;
      }
    }
    if (tmp25 != null) {
      class U {
        constructor() {
          guild = closure_3.getGuild(closure_0);
          hasItem = undefined;
          if (guild != null) {
            features = guild.features;
            tmp3 = GuildFeatures;
            hasItem = features.has(GuildFeatures.GAME_SERVERS);
          }
          return hasItem;
        }
      }
    }
  }
  if (arg1 != null) {
    class U {
      constructor() {
        guild = closure_3.getGuild(closure_0);
        hasItem = undefined;
        if (guild != null) {
          features = guild.features;
          tmp3 = GuildFeatures;
          hasItem = features.has(GuildFeatures.GAME_SERVERS);
        }
        return hasItem;
      }
    }
    if (tmp27 != null) {
      class U {
        constructor() {
          guild = closure_3.getGuild(closure_0);
          hasItem = undefined;
          if (guild != null) {
            features = guild.features;
            tmp3 = GuildFeatures;
            hasItem = features.has(GuildFeatures.GAME_SERVERS);
          }
          return hasItem;
        }
      }
    }
  }
  if (tmp26) {
    class U {
      constructor() {
        guild = closure_3.getGuild(closure_0);
        hasItem = undefined;
        if (guild != null) {
          features = guild.features;
          tmp3 = GuildFeatures;
          hasItem = features.has(GuildFeatures.GAME_SERVERS);
        }
        return hasItem;
      }
    }
  }
  tmp19 = null != undefined;
  tmp26 = null != undefined;
  const tmpResult8 = require("initialize");
  if (arr.some((item) => {
    let tmp;
    if (closure_1 != null) {
      const unlockedPowerups = closure_1.unlockedPowerups;
      if (unlockedPowerups != null) {
        tmp = unlockedPowerups[item];
      }
    }
    return null != tmp;
  })) {
    class U {
      constructor() {
        guild = closure_3.getGuild(closure_0);
        hasItem = undefined;
        if (guild != null) {
          features = guild.features;
          tmp3 = GuildFeatures;
          hasItem = features.has(GuildFeatures.GAME_SERVERS);
        }
        return hasItem;
      }
    }
    const _Array = Array;
    if (!arr2.some((item) => {
      let tmp;
      if (closure_1 != null) {
        const unlockedPowerups = closure_1.unlockedPowerups;
        if (unlockedPowerups != null) {
          tmp = unlockedPowerups[item];
        }
      }
      return null != tmp;
    })) {
      class U {
        constructor() {
          guild = closure_3.getGuild(closure_0);
          hasItem = undefined;
          if (guild != null) {
            features = guild.features;
            tmp3 = GuildFeatures;
            hasItem = features.has(GuildFeatures.GAME_SERVERS);
          }
          return hasItem;
        }
      }
    }
    arr2 = Array.from(dependencyMap2[constants.GUILD_TAG_BADGE_PACKS_WAVE_ONE]);
  } else {
    class U {
      constructor() {
        guild = closure_3.getGuild(closure_0);
        hasItem = undefined;
        if (guild != null) {
          features = guild.features;
          tmp3 = GuildFeatures;
          hasItem = features.has(GuildFeatures.GAME_SERVERS);
        }
        return hasItem;
      }
    }
  }
  arr = Array.from(dependencyMap2[constants.GUILD_TAG_BADGE_PACKS_WAVE_TWO]);
}) : ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const gameServerEnabled = require("GameServerExperiment").useGameServerEnabled(arg0, "useGuildPowerupNewPerkMarketingVersion");
  let obj = require("GameServerExperiment");
  let tmp = _require;
  const items = [stateFromStores];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    guild = GuildStore.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants.GAME_SERVERS);
    }
    return hasItem;
  });
  const obj2 = require("initialize");
  const tmp4 = stateFromStores;
  let serverThemeEnabled = require("ServerThemeExperiment").useServerThemeEnabled(arg0, "useGuildPowerupNewPerkMarketingVersion");
  const obj3 = require("ServerThemeExperiment");
  const serverThemeUserEnabled = require("ServerThemeUserExperiment").useServerThemeUserEnabled("useGuildPowerupNewPerkMarketingVersion");
  const obj4 = require("ServerThemeUserExperiment");
  const serverThemeRollbackEnabled = require("ServerThemeExperiment").useServerThemeRollbackEnabled(arg0, "useGuildPowerupNewPerkMarketingVersion");
  if (serverThemeEnabled) {
    serverThemeEnabled = serverThemeUserEnabled;
  }
  if (serverThemeEnabled) {
    serverThemeEnabled = !serverThemeRollbackEnabled;
  }
  const obj5 = require("ServerThemeExperiment");
  const items1 = [serverThemeEnabled, tmp4];
  const stateFromStores1 = tmp(504).useStateFromStores(items1, () => PermissionStore.can(constants2.MANAGE_GUILD, GuildStore.getGuild(closure_0)));
  const items2 = [arg1, gameServerEnabled, stateFromStores, serverThemeEnabled, arg0, stateFromStores1];
  return gameServerEnabled.useMemo(() => {
    let tmp2;
    if (closure_1 != null) {
      const allPowerups = closure_1.allPowerups;
      if (allPowerups != null) {
        tmp2 = allPowerups[Powerups.GUILD_POWERUP_TAG_SKU_ID];
      }
    }
    if (closure_1 != null) {
      let unlockedPowerups = closure_1.unlockedPowerups;
      if (unlockedPowerups != null) {
        const tmp6 = unlockedPowerups[Powerups.GUILD_POWERUP_TAG_SKU_ID];
      }
    }
    if (tmp5) {
      if (null == tmp6) {
        if (stateFromStores1) {
          if (obj.canUseMobileServerTagSettings(closure_0)) {
            return hasOwnProperty.GUILD_TAG;
          }
          obj = GuildSettingsServerTagUtils;
        }
      }
    }
    let tmp14;
    if (closure_1 != null) {
      const allPowerups2 = closure_1.allPowerups;
      if (allPowerups2 != null) {
        tmp14 = allPowerups2[Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID];
      }
    }
    if (closure_1 != null) {
      const unlockedPowerups2 = closure_1.unlockedPowerups;
      if (unlockedPowerups2 != null) {
        const tmp18 = unlockedPowerups2[Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID];
      }
    }
    if (serverThemeEnabled) {
      if (tmp17) {
        if (null == tmp18) {
          return hasOwnProperty.GUILD_THEME;
        }
      }
    }
    let tmp22;
    if (closure_1 != null) {
      const allPowerups3 = closure_1.allPowerups;
      if (allPowerups3 != null) {
        tmp22 = allPowerups3[Powerups.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
      }
    }
    if (closure_1 != null) {
      const unlockedPowerups3 = closure_1.unlockedPowerups;
      if (unlockedPowerups3 != null) {
        const tmp26 = unlockedPowerups3[Powerups.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
      }
    }
    if (tmp25) {
      if (null == tmp26) {
        return hasOwnProperty.FILE_UPLOAD_250_MB;
      }
    }
    let someResult = globalThis;
    if (!arr.some((item) => {
      let tmp;
      if (closure_1_1 != null) {
        const unlockedPowerups = closure_1_1.unlockedPowerups;
        if (unlockedPowerups != null) {
          tmp = unlockedPowerups[item];
        }
      }
      return null != tmp;
    })) {
      const GUILD_TAG_BADGE_PACKS_WAVE_TWO = hasOwnProperty.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
    }
    if (gameServerEnabled) {
      if (!stateFromStores) {
        let GAME_SERVER_HOSTING = hasOwnProperty.GAME_SERVER_HOSTING;
      }
    }
    const _Array = someResult.Array;
    arr = Array.from(dependencyMap2[hasOwnProperty.GUILD_TAG_BADGE_PACKS_WAVE_TWO]);
    tmp17 = null != tmp14;
    tmp25 = null != tmp22;
    tmp5 = null != tmp2;
    someResult = _Array.from(dependencyMap2[hasOwnProperty.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some((item) => {
      let tmp;
      if (closure_1_1 != null) {
        const unlockedPowerups = closure_1_1.unlockedPowerups;
        if (unlockedPowerups != null) {
          tmp = unlockedPowerups[item];
        }
      }
      return null != tmp;
    });
    let num = 0;
    if (!someResult) {
      num = hasOwnProperty.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
    }
    GAME_SERVER_HOSTING = num;
    const fromResult = _Array.from(dependencyMap2[hasOwnProperty.GUILD_TAG_BADGE_PACKS_WAVE_ONE]);
  }, items2);
});
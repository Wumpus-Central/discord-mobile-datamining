// === Module 12503: useGuildPowerupNewPerkMarketingVersion ===

// Module 12503 (useGuildPowerupNewPerkMarketingVersion)
import Powerups from "Powerups" /* 4453 */;
import GuildSettingsServerTagUtils from "GuildSettingsServerTagUtils" /* 9067 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;

require = fn;
const GuildPowerupsConstants = fn(4450);
({ GuildPowerupNewPerkMarketingVersion: hasOwnProperty, NEW_PERK_MARKETING_VERSION_TO_POWERUP_SKU_ID_SET: metroRequire } = GuildPowerupsConstants);
const Constants = fn(1074);
({ GuildFeatures: closure_7, Permissions: closure_8 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupNewPerkMarketingVersion.tsx");

export default function useGuildPowerupNewPerkMarketingVersion(guildId, arg1) {
  _require = guildId;
  dependencyMap = arg1;
  const gameServerEnabled = require("GameServerExperiment").useGameServerEnabled(guildId, "useGuildPowerupNewPerkMarketingVersion");
  let obj = require("GameServerExperiment");
  let tmp = _require;
  const items = [stateFromStores];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants.GAME_SERVERS);
    }
    return hasItem;
  });
  const obj2 = require("initialize");
  const tmp4 = stateFromStores;
  let serverThemeEnabled = require("ServerThemeExperiment").useServerThemeEnabled(guildId, "useGuildPowerupNewPerkMarketingVersion");
  const obj3 = require("ServerThemeExperiment");
  if (serverThemeEnabled) {
    serverThemeEnabled = obj4.useServerThemeUserEnabled("useGuildPowerupNewPerkMarketingVersion");
  }
  obj4 = require("ServerThemeUserExperiment");
  const items1 = [serverThemeEnabled, tmp4];
  const stateFromStores1 = tmp(504).useStateFromStores(items1, () => PermissionStore.can(constants2.MANAGE_GUILD, GuildStore.getGuild(closure_0)));
  const items2 = [arg1, gameServerEnabled, stateFromStores, serverThemeEnabled, guildId, stateFromStores1];
  return gameServerEnabled.useMemo(() => {
    let tmp2;
    if (closure_1 != null) {
      const allPowerups = tmp.allPowerups;
      if (allPowerups != null) {
        tmp2 = allPowerups[Powerups.GUILD_POWERUP_TAG_SKU_ID];
      }
    }
    if (closure_1 != null) {
      let unlockedPowerups = tmp.unlockedPowerups;
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
      const allPowerups2 = tmp.allPowerups;
      if (allPowerups2 != null) {
        tmp14 = allPowerups2[Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID];
      }
    }
    if (closure_1 != null) {
      const unlockedPowerups2 = tmp.unlockedPowerups;
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
      const allPowerups3 = tmp.allPowerups;
      if (allPowerups3 != null) {
        tmp22 = allPowerups3[Powerups.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
      }
    }
    if (closure_1 != null) {
      const unlockedPowerups3 = tmp.unlockedPowerups;
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
    arr = Array.from(timestampProducer[hasOwnProperty.GUILD_TAG_BADGE_PACKS_WAVE_TWO]);
    tmp17 = null != tmp14;
    tmp25 = null != tmp22;
    tmp5 = null != tmp2;
    someResult = _Array.from(timestampProducer[hasOwnProperty.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some((item) => {
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
  }, items2);
};
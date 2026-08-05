// discord_app/modules/premium/powerups/hooks/useGuildPowerupNewPerkMarketingVersion.tsx
import noop from "noop";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import BoostedGuildTiers from "BoostedGuildTiers";
import ME from "ME";

let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ GuildPowerupNewPerkMarketingVersion: c5, NEW_PERK_MARKETING_VERSION_TO_POWERUP_SKU_ID_SET: closure_6 } = BoostedGuildTiers);
({ GuildFeatures: error, Permissions: metroImportAll } = ME);
const result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupNewPerkMarketingVersion.tsx");

export default function useGuildPowerupNewPerkMarketingVersion(guildId) {
  const _require = guildId;
  const dependencyMap = arg1;
  const gameServerEnabled = _require("../../../game_server/GameServerExperiment.tsx").useGameServerEnabled(guildId, "useGuildPowerupNewPerkMarketingVersion");
  let obj = _require("../../../game_server/GameServerExperiment.tsx");
  let tmp = _require;
  const items = [stateFromStores];
  stateFromStores = _require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const guild = stateFromStores.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(outer1_7.GAME_SERVERS);
    }
    return hasItem;
  });
  const obj2 = _require("../../../../../discord_common/js/packages/flux/index.tsx");
  const tmp4 = stateFromStores;
  let serverThemeEnabled = _require("../experiments/ServerThemeExperiment.tsx").useServerThemeEnabled(guildId, "useGuildPowerupNewPerkMarketingVersion");
  const obj3 = _require("../experiments/ServerThemeExperiment.tsx");
  if (serverThemeEnabled) {
    serverThemeEnabled = obj4.useServerThemeUserEnabled("useGuildPowerupNewPerkMarketingVersion");
  }
  obj4 = _require("../experiments/ServerThemeUserExperiment.tsx");
  const items1 = [serverThemeEnabled, tmp4];
  const stateFromStores1 = tmp(589).useStateFromStores(items1, () => serverThemeEnabled.can(outer1_8.MANAGE_GUILD, stateFromStores.getGuild(closure_0)));
  const items2 = [arg1, gameServerEnabled, stateFromStores, serverThemeEnabled, guildId, stateFromStores1];
  return gameServerEnabled.useMemo(() => {
    let tmp2;
    if (dependencyMap != null) {
      const allPowerups = tmp.allPowerups;
      if (allPowerups != null) {
        tmp2 = allPowerups[guildId(undefined, 4176).GUILD_POWERUP_TAG_SKU_ID];
      }
    }
    if (dependencyMap != null) {
      let unlockedPowerups = tmp.unlockedPowerups;
      if (unlockedPowerups != null) {
        const tmp6 = unlockedPowerups[guildId(undefined, 4176).GUILD_POWERUP_TAG_SKU_ID];
      }
    }
    if (tmp5) {
      if (null == tmp6) {
        if (stateFromStores1) {
          if (obj.canUseMobileServerTagSettings(guildId)) {
            return stateFromStores1.GUILD_TAG;
          }
          obj = guildId(8946);
        }
      }
    }
    let tmp14;
    if (dependencyMap != null) {
      const allPowerups2 = tmp.allPowerups;
      if (allPowerups2 != null) {
        tmp14 = allPowerups2[guildId(undefined, 4176).GUILD_POWERUP_GUILD_THEME_SKU_ID];
      }
    }
    if (dependencyMap != null) {
      const unlockedPowerups2 = tmp.unlockedPowerups;
      if (unlockedPowerups2 != null) {
        const tmp18 = unlockedPowerups2[guildId(undefined, 4176).GUILD_POWERUP_GUILD_THEME_SKU_ID];
      }
    }
    if (serverThemeEnabled) {
      if (tmp17) {
        if (null == tmp18) {
          return stateFromStores1.GUILD_THEME;
        }
      }
    }
    let tmp22;
    if (dependencyMap != null) {
      const allPowerups3 = tmp.allPowerups;
      if (allPowerups3 != null) {
        tmp22 = allPowerups3[guildId(undefined, 4176).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
      }
    }
    if (dependencyMap != null) {
      const unlockedPowerups3 = tmp.unlockedPowerups;
      if (unlockedPowerups3 != null) {
        const tmp26 = unlockedPowerups3[guildId(undefined, 4176).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
      }
    }
    if (tmp25) {
      if (null == tmp26) {
        return stateFromStores1.FILE_UPLOAD_250_MB;
      }
    }
    let someResult = globalThis;
    if (!arr.some((arg0) => {
      let tmp;
      if (closure_1 != null) {
        const unlockedPowerups = closure_1.unlockedPowerups;
        if (unlockedPowerups != null) {
          tmp = unlockedPowerups[arg0];
        }
      }
      return null != tmp;
    })) {
      const GUILD_TAG_BADGE_PACKS_WAVE_TWO = stateFromStores1.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
    }
    if (gameServerEnabled) {
      if (!stateFromStores) {
        let GAME_SERVER_HOSTING = stateFromStores1.GAME_SERVER_HOSTING;
      }
    }
    const _Array = someResult.Array;
    arr = Array.from(outer1_6[stateFromStores1.GUILD_TAG_BADGE_PACKS_WAVE_TWO]);
    tmp17 = null != tmp14;
    tmp25 = null != tmp22;
    const tmp31 = outer1_6;
    tmp5 = null != tmp2;
    someResult = _Array.from(outer1_6[stateFromStores1.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some((arg0) => {
      let tmp;
      if (closure_1 != null) {
        const unlockedPowerups = closure_1.unlockedPowerups;
        if (unlockedPowerups != null) {
          tmp = unlockedPowerups[arg0];
        }
      }
      return null != tmp;
    });
    let num = 0;
    if (!someResult) {
      num = stateFromStores1.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
    }
    GAME_SERVER_HOSTING = num;
  }, items2);
};
// discord_app/modules/premium/powerups/hooks/useGuildPowerupNewPerkMarketingVersion.tsx
import closure_2 from "../../../../../_runtime/00019_noop.js";
import closure_3 from "../../../../stores/GuildStore.tsx";
import closure_4 from "../../../../stores/PermissionStore.tsx";
import BoostedGuildTiers from "../constants/GuildPowerupsConstants.tsx";
import ME from "../../../../Constants.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { experiment } from "../../../game_server/GameServerExperiment.tsx";
import { experiment } from "../experiments/ServerThemeExperiment.tsx";
import { apexExperiment } from "../experiments/ServerThemeUserExperiment.tsx";

const require = arg1;
({ GuildPowerupNewPerkMarketingVersion: c5, NEW_PERK_MARKETING_VERSION_TO_POWERUP_SKU_ID_SET: closure_6 } = BoostedGuildTiers);
({ GuildFeatures: error, Permissions: closure_8 } = ME);
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupNewPerkMarketingVersion.tsx");

export default function useGuildPowerupNewPerkMarketingVersion(guildId) {
  const _require = guildId;
  dependencyMap = arg1;
  const gameServerEnabled = require("../../../game_server/GameServerExperiment.tsx").useGameServerEnabled(guildId, "useGuildPowerupNewPerkMarketingVersion");
  let obj = experiment;
  let tmp = _require;
  const items = [stateFromStores];
  stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const guild = stateFromStores.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(closure_1_7.GAME_SERVERS);
    }
    return hasItem;
  });
  const obj2 = initialize;
  const tmp4 = stateFromStores;
  let serverThemeEnabled = require("../experiments/ServerThemeExperiment.tsx").useServerThemeEnabled(guildId, "useGuildPowerupNewPerkMarketingVersion");
  const obj3 = experiment;
  if (serverThemeEnabled) {
    serverThemeEnabled = obj4.useServerThemeUserEnabled("useGuildPowerupNewPerkMarketingVersion");
  }
  obj4 = apexExperiment;
  const items1 = [serverThemeEnabled, tmp4];
  const stateFromStores1 = tmp(589).useStateFromStores(items1, () => serverThemeEnabled.can(closure_1_8.MANAGE_GUILD, stateFromStores.getGuild(closure_0)));
  const items2 = [arg1, gameServerEnabled, stateFromStores, serverThemeEnabled, guildId, stateFromStores1];
  return gameServerEnabled.useMemo(() => {
    let tmp2;
    if (dependencyMap != null) {
      const allPowerups = tmp.allPowerups;
      if (allPowerups != null) {
        tmp2 = allPowerups[guildId(undefined, 4269).GUILD_POWERUP_TAG_SKU_ID];
      }
    }
    if (dependencyMap != null) {
      let unlockedPowerups = tmp.unlockedPowerups;
      if (unlockedPowerups != null) {
        const tmp6 = unlockedPowerups[guildId(undefined, 4269).GUILD_POWERUP_TAG_SKU_ID];
      }
    }
    if (tmp5) {
      if (null == tmp6) {
        if (stateFromStores1) {
          if (obj.canUseMobileServerTagSettings(guildId)) {
            return stateFromStores1.GUILD_TAG;
          }
          obj = guildId(8914);
        }
      }
    }
    let tmp14;
    if (dependencyMap != null) {
      const allPowerups2 = tmp.allPowerups;
      if (allPowerups2 != null) {
        tmp14 = allPowerups2[guildId(undefined, 4269).GUILD_POWERUP_GUILD_THEME_SKU_ID];
      }
    }
    if (dependencyMap != null) {
      const unlockedPowerups2 = tmp.unlockedPowerups;
      if (unlockedPowerups2 != null) {
        const tmp18 = unlockedPowerups2[guildId(undefined, 4269).GUILD_POWERUP_GUILD_THEME_SKU_ID];
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
        tmp22 = allPowerups3[guildId(undefined, 4269).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
      }
    }
    if (dependencyMap != null) {
      const unlockedPowerups3 = tmp.unlockedPowerups;
      if (unlockedPowerups3 != null) {
        const tmp26 = unlockedPowerups3[guildId(undefined, 4269).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
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
    arr = Array.from(closure_1_6[stateFromStores1.GUILD_TAG_BADGE_PACKS_WAVE_TWO]);
    tmp17 = null != tmp14;
    tmp25 = null != tmp22;
    const tmp31 = closure_1_6;
    tmp5 = null != tmp2;
    someResult = _Array.from(closure_1_6[stateFromStores1.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some((arg0) => {
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
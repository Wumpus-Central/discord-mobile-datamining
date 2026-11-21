// discord_app/modules/premium/powerups/hooks/useGuildPowerupNewPerkMarketingVersion.tsx
import GuildSettingsServerTagUtils from "../../../guild_settings/GuildSettingsServerTagUtils.tsx";
import Powerups from "../../../../../discord_common/js/shared/shared-constants/Powerups.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";

const require = globalThis.__r;

require = fn;
const GuildPowerupsConstants = fn(8332);
({ GuildPowerupNewPerkMarketingVersion: hasOwnProperty, NEW_PERK_MARKETING_VERSION_TO_POWERUP_SKU_ID_SET: closure_6 } =
  GuildPowerupsConstants);
const Constants = fn(1071);
({ GuildFeatures: metroImportDefault, Permissions: closure_8 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupNewPerkMarketingVersion.tsx");

export default function useGuildPowerupNewPerkMarketingVersion(guildId, stateFromStores) {
  _require = guildId;
  dependencyMap = stateFromStores;
  const gameServerEnabled = require("GameServerExperiment").useGameServerEnabled(
    guildId,
    "useGuildPowerupNewPerkMarketingVersion",
  );
  let obj = require("GameServerExperiment");
  items = [stateFromStores];
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
  const items1 = [stateFromStores1, stateFromStores];
  stateFromStores1 = require("initialize").useStateFromStores(items1, () =>
    PermissionStore.can(constants2.MANAGE_GUILD, GuildStore.getGuild(closure_0)),
  );
  const items2 = [stateFromStores, gameServerEnabled, stateFromStores, guildId, stateFromStores1];
  return gameServerEnabled.useMemo(() => {
    let tmp2;
    if (stateFromStores != null) {
      const allPowerups = stateFromStores.allPowerups;
      if (allPowerups != null) {
        tmp2 = allPowerups[Powerups.GUILD_POWERUP_TAG_SKU_ID];
      }
    }
    if (stateFromStores != null) {
      let unlockedPowerups = stateFromStores.unlockedPowerups;
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
    if (stateFromStores != null) {
      const allPowerups2 = stateFromStores.allPowerups;
      if (allPowerups2 != null) {
        tmp14 = allPowerups2[Powerups.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
      }
    }
    if (stateFromStores != null) {
      const unlockedPowerups2 = stateFromStores.unlockedPowerups;
      if (unlockedPowerups2 != null) {
        const tmp18 = unlockedPowerups2[Powerups.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
      }
    }
    if (tmp17) {
      if (null == tmp18) {
        return hasOwnProperty.FILE_UPLOAD_250_MB;
      }
    }
    let someResult = globalThis;
    if (
      !arr.some((item) => {
        let tmp;
        if (stateFromStores != null) {
          const unlockedPowerups = stateFromStores.unlockedPowerups;
          if (unlockedPowerups != null) {
            tmp = unlockedPowerups[item];
          }
        }
        return null != tmp;
      })
    ) {
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
    tmp5 = null != tmp2;
    someResult = _Array.from(timestampProducer[hasOwnProperty.GUILD_TAG_BADGE_PACKS_WAVE_ONE]).some((item) => {
      let tmp;
      if (stateFromStores != null) {
        const unlockedPowerups = stateFromStores.unlockedPowerups;
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
    const fromResult = _Array.from(timestampProducer[hasOwnProperty.GUILD_TAG_BADGE_PACKS_WAVE_ONE]);
  }, items2);
}

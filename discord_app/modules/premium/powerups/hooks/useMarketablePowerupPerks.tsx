// discord_app/modules/premium/powerups/hooks/useMarketablePowerupPerks.tsx
import Powerups from "../../../../../discord_common/js/shared/shared-constants/Powerups.tsx";
import useGameServerPerkDefault from "../../../game_server/hooks/useGameServerPerk.tsx";
import react from "../../../../../_runtime/00019_react.js";
import GuildPowerupsStore from "../GuildPowerupsStore.tsx";
import GuildPowerupsConstants from "../constants/GuildPowerupsConstants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

const GuildPowerupType = GuildPowerupsConstants.GuildPowerupType;
const GUILD_TAG_BADGE_PACKS_WAVE_TWO_SKU_ID_SET = GuildPowerupsConstants.GUILD_TAG_BADGE_PACKS_WAVE_TWO_SKU_ID_SET;
let items = [
  ...Array.from(_module.GUILD_TAG_BADGE_PACKS_WAVE_ONE_SKU_ID_SET),
  ...Array.from(GUILD_TAG_BADGE_PACKS_WAVE_TWO_SKU_ID_SET),
  Powerups.VANITY_URL_POWERUP_SKU_ID,
];
let set = new Set(items);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (arg0) {
      let closure_0;
      let first;
      let tmp10;
      let tmp14;
      let tmp6;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(13);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildPowerupsStore];
        cResult[0] = items;
        first = items;
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
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      const tmp8 = useGameServerPerkDefault(arg0);
      const tmpResult2 = require("ServerThemeExperiment");
      const serverThemeRollbackEnabled = tmpResult2.useServerThemeRollbackEnabled(arg0, "useMarketablePowerupPerks");
      if (cResult[3] !== serverThemeRollbackEnabled) {
        const _Set = Set;
        const self2 = this;
        const self = this;
        set = new Set(set);
        if (serverThemeRollbackEnabled) {
          set.add(require("Powerups").GUILD_POWERUP_GUILD_THEME_SKU_ID);
        }
        cResult[3] = serverThemeRollbackEnabled;
        cResult[4] = set;
        tmp10 = set;
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
        tmp14 = items1;
      } else {
        tmp14 = cResult[6];
      }
      if (cResult[7] === tmp8) {
        let arr3;
        if (cResult[8] === tmp14) {
          arr3 = cResult[9];
        }
        if (cResult[10] === arr3) {
          let tmp17;
          if (cResult[11] === tmp10) {
            tmp17 = cResult[12];
          }
          return tmp17;
        }
        const found = arr3.filter((skuId) => !set.has(skuId.skuId));
        cResult[10] = arr3;
        cResult[11] = tmp10;
        cResult[12] = found;
        tmp17 = found;
      }
      const items2 = [...tmp14];
      if (null != tmp8) {
        items2.push(tmp8);
      }
      cResult[7] = tmp8;
      cResult[8] = tmp14;
      cResult[9] = items2;
      arr3 = items2;
    }
  : (arg0) => {
      let closure_0;
      let closure_2;
      let memo;
      _require = arg0;
      let items = [memo];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => {
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
      let tmp2 = stateFromStores(12235)(arg0);
      dependencyMap = tmp2;
      const obj2 = require("ServerThemeExperiment");
      const serverThemeRollbackEnabled = obj2.useServerThemeRollbackEnabled(arg0, "useMarketablePowerupPerks");
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
    };
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useMarketablePowerupPerks.tsx");

export default tmp4;

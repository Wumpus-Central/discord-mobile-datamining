// discord_app/modules/premium/powerups/hooks/useIsGuildThemePerkEnabled.tsx
import Constants from "../../../../Constants.tsx";
import Powerups from "../../../../../discord_common/js/shared/shared-constants/Powerups.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import GuildPowerupsStore from "../GuildPowerupsStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const GuildFeatures = Constants.GuildFeatures;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp7;
      let tmp8;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(4);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore, GuildPowerupsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function n() {
          let tmp2 = null != closure_0;
          if (tmp2) {
            const guild = GuildStore.getGuild(closure_0);
            let hasItem;
            if (guild != null) {
              const features = guild.features;
              hasItem = features.has(GuildFeatures.GUILD_THEME);
            }
            let tmp7 = true === hasItem;
            if (!tmp7) {
              const stateForGuild = GuildPowerupsStore.getStateForGuild(closure_0);
              let tmp10;
              if (stateForGuild != null) {
                const unlockedPowerups = stateForGuild.unlockedPowerups;
                if (unlockedPowerups != null) {
                  tmp10 = unlockedPowerups[Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID];
                }
              }
              tmp7 = null != tmp10;
            }
            tmp2 = tmp7;
          }
          return tmp2;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp7, tmp8);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [GuildStore, GuildPowerupsStore];
      const items1 = [arg0];
      const obj = require("get initialized");
      return obj.useStateFromStores(
        items,
        () => {
          let tmp2 = null != closure_0;
          if (tmp2) {
            const guild = GuildStore.getGuild(closure_0);
            let hasItem;
            if (guild != null) {
              const features = guild.features;
              hasItem = features.has(GuildFeatures.GUILD_THEME);
            }
            let tmp7 = true === hasItem;
            if (!tmp7) {
              const stateForGuild = GuildPowerupsStore.getStateForGuild(closure_0);
              let tmp10;
              if (stateForGuild != null) {
                const unlockedPowerups = stateForGuild.unlockedPowerups;
                if (unlockedPowerups != null) {
                  tmp10 = unlockedPowerups[Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID];
                }
              }
              tmp7 = null != tmp10;
            }
            tmp2 = tmp7;
          }
          return tmp2;
        },
        items1,
      );
    };
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useIsGuildThemePerkEnabled.tsx");

export default tmp2;

// discord_app/modules/premium/powerups/hooks/useHasEnhancedRoleColors.tsx
import Constants from "../../../../Constants.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const GuildFeatures = Constants.GuildFeatures;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          const guild = GuildStore.getGuild(closure_0);
          let hasItem = null != guild;
          if (hasItem) {
            const features = guild.features;
            hasItem = features.has(GuildFeatures.ENHANCED_ROLE_COLORS);
          }
          return hasItem;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [GuildStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => {
        const guild = GuildStore.getGuild(closure_0);
        let hasItem = null != guild;
        if (hasItem) {
          const features = guild.features;
          hasItem = features.has(GuildFeatures.ENHANCED_ROLE_COLORS);
        }
        return hasItem;
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          const guild = GuildStore.getGuild(closure_0);
          let hasItem = null != guild;
          if (hasItem) {
            const features = guild.features;
            hasItem = features.has(GuildFeatures.ENHANCED_ROLE_COLORS);
          }
          return hasItem;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [GuildStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => {
        const guild = GuildStore.getGuild(closure_0);
        let hasItem = null != guild;
        if (hasItem) {
          const features = guild.features;
          hasItem = features.has(GuildFeatures.ENHANCED_ROLE_COLORS);
        }
        return hasItem;
      });
    };
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useHasEnhancedRoleColors.tsx");

export default tmp2;
export const getHasEnhancedRoleColors = function getHasEnhancedRoleColors(guildId1) {
  if (null == guildId1) {
    return false;
  } else {
    const guild = GuildStore.getGuild(guildId1);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.ENHANCED_ROLE_COLORS);
    }
    return hasItem;
  }
};
export const useHasEnhancedRoleColorsForRole = tmp3;
export const getHasEnhancedRoleColorsForRole = function getHasEnhancedRoleColorsForRole(id) {
  const guild = GuildStore.getGuild(id);
  let hasItem = null != guild;
  if (hasItem) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.ENHANCED_ROLE_COLORS);
  }
  return hasItem;
};

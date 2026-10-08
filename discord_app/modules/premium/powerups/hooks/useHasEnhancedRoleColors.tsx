// === Module 5404: useHasEnhancedRoleColors ===

// Module 5404 (useHasEnhancedRoleColors)
import GuildStore from "GuildStore" /* 2086 */;

const require = globalThis.__r;

const require = fn;
const GuildFeatures = fn(1085).GuildFeatures;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasEnhancedRoleColors(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      guild = GuildStore.getGuild(closure_0);
      let hasItem = null != guild;
      if (hasItem) {
        const features = guild.features;
        hasItem = features.has(GuildFeatures.ENHANCED_ROLE_COLORS);
      }
      return hasItem;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : (function useHasEnhancedRoleColors(arg0) {
  _require = arg0;
  const items = [GuildStore];
  return require("initialize").useStateFromStores(items, () => {
    guild = GuildStore.getGuild(closure_0);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.ENHANCED_ROLE_COLORS);
    }
    return hasItem;
  });
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useHasEnhancedRoleColors.tsx");

export default tmp2;
export const getHasEnhancedRoleColors = function getHasEnhancedRoleColors(guildId1) {
  if (null == guildId1) {
    return false;
  } else {
    guild = GuildStore.getGuild(guildId1);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.ENHANCED_ROLE_COLORS);
    }
    return hasItem;
  }
};
export const useHasEnhancedRoleColorsForRole = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasEnhancedRoleColorsForRole(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      guild = GuildStore.getGuild(closure_0);
      let hasItem = null != guild;
      if (hasItem) {
        const features = guild.features;
        hasItem = features.has(GuildFeatures.ENHANCED_ROLE_COLORS);
      }
      return hasItem;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : (function useHasEnhancedRoleColorsForRole(arg0) {
  _require = arg0;
  const items = [GuildStore];
  return require("initialize").useStateFromStores(items, () => {
    guild = GuildStore.getGuild(closure_0);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.ENHANCED_ROLE_COLORS);
    }
    return hasItem;
  });
});
export const getHasEnhancedRoleColorsForRole = function getHasEnhancedRoleColorsForRole(id) {
  guild = GuildStore.getGuild(id);
  let hasItem = null != guild;
  if (hasItem) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.ENHANCED_ROLE_COLORS);
  }
  return hasItem;
};
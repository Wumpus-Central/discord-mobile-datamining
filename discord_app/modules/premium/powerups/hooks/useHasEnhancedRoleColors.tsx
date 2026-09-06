// === Module 5004: useHasEnhancedRoleColors ===

// Module 5004 (useHasEnhancedRoleColors)
import GuildStore from "GuildStore" /* 1979 */;

const require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useHasEnhancedRoleColors.tsx");

export default function useHasEnhancedRoleColors(arg0) {
  _require = arg0;
  const items = [GuildStore];
  return require("initialize").useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.ENHANCED_ROLE_COLORS);
    }
    return hasItem;
  });
};
export const getHasEnhancedRoleColors = function getHasEnhancedRoleColors(guildId) {
  if (null == guildId) {
    return false;
  } else {
    const guild = GuildStore.getGuild(guildId);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.ENHANCED_ROLE_COLORS);
    }
    return hasItem;
  }
};
export const useHasEnhancedRoleColorsForRole = function useHasEnhancedRoleColorsForRole(guildId) {
  _require = guildId;
  const items = [GuildStore];
  return require("initialize").useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.ENHANCED_ROLE_COLORS);
    }
    return hasItem;
  });
};
export const getHasEnhancedRoleColorsForRole = function getHasEnhancedRoleColorsForRole(id) {
  const guild = GuildStore.getGuild(id);
  let hasItem = null != guild;
  if (hasItem) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.ENHANCED_ROLE_COLORS);
  }
  return hasItem;
};
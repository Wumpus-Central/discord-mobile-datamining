// discord_app/modules/premium/powerups/hooks/useHasEnhancedRoleColors.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { GuildFeatures } from "ME";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/powerups/hooks/useHasEnhancedRoleColors.tsx");

export default function useHasEnhancedRoleColors(arg0) {
  const _require = arg0;
  const items = [createGuildRecordFromRust];
  return _initialize.useStateFromStores(items, () => {
    const guild = outer1_2.getGuild(closure_0);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(outer1_3.ENHANCED_ROLE_COLORS);
    }
    return hasItem;
  });
};
export const getHasEnhancedRoleColors = function getHasEnhancedRoleColors(guildId, id) {
  if (null == guildId) {
    return false;
  } else {
    const guild = store.getGuild(guildId);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.ENHANCED_ROLE_COLORS);
    }
    return hasItem;
  }
};
export const useHasEnhancedRoleColorsForRole = function useHasEnhancedRoleColorsForRole(guildId, role) {
  const _require = guildId;
  const items = [createGuildRecordFromRust];
  return _initialize.useStateFromStores(items, () => {
    const guild = outer1_2.getGuild(closure_0);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(outer1_3.ENHANCED_ROLE_COLORS);
    }
    return hasItem;
  });
};
export const getHasEnhancedRoleColorsForRole = function getHasEnhancedRoleColorsForRole(id, role) {
  const guild = store.getGuild(id);
  let hasItem = null != guild;
  if (hasItem) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.ENHANCED_ROLE_COLORS);
  }
  return hasItem;
};
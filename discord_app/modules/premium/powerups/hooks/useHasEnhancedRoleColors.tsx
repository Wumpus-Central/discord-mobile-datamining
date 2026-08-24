// discord_app/modules/premium/powerups/hooks/useHasEnhancedRoleColors.tsx
import closure_2 from "../../../../stores/GuildStore.tsx";
import { GuildFeatures } from "../../../../Constants.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useHasEnhancedRoleColors.tsx");

export default function useHasEnhancedRoleColors(arg0) {
  const _require = arg0;
  const items = [closure_2];
  return _initialize.useStateFromStores(items, () => {
    const guild = closure_1_2.getGuild(closure_0);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(closure_1_3.ENHANCED_ROLE_COLORS);
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
  const items = [closure_2];
  return _initialize.useStateFromStores(items, () => {
    const guild = closure_1_2.getGuild(closure_0);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(closure_1_3.ENHANCED_ROLE_COLORS);
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
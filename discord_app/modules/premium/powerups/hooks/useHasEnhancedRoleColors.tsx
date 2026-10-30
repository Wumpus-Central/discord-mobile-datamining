// discord_app/modules/premium/powerups/hooks/useHasEnhancedRoleColors.tsx
import GuildStore from "../../../../stores/GuildStore.tsx";

const require = globalThis.__r;

const require = fn;
const GuildFeatures = fn(1072).GuildFeatures;
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
}
export function getHasEnhancedRoleColors(guildId1) {
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
}
export function useHasEnhancedRoleColorsForRole(guildId) {
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
}
export function getHasEnhancedRoleColorsForRole(id) {
  const guild = GuildStore.getGuild(id);
  let hasItem = null != guild;
  if (hasItem) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.ENHANCED_ROLE_COLORS);
  }
  return hasItem;
}

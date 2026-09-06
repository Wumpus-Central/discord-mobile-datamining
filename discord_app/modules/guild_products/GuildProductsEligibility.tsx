// === Module 7258: GuildProductsEligibility ===

// Module 7258 (GuildProductsEligibility)
import GuildStore from "GuildStore" /* 1979 */;

const require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_products/GuildProductsEligibility.tsx");

export const useGuildEligibleForGuildProducts = function useGuildEligibleForGuildProducts(id) {
  _require = id;
  const items = [GuildStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(items, () => {
    if (null == closure_0) {
      return false;
    } else {
      const guild = GuildStore.getGuild(tmp);
      let tmp4 = null != guild;
      if (tmp4) {
        const features = guild.features;
        let hasItem = features.has(GuildFeatures.COMMUNITY);
        if (!hasItem) {
          const features2 = guild.features;
          hasItem = features2.has(GuildFeatures.GUILD_PRODUCTS);
        }
        tmp4 = hasItem;
      }
      return tmp4;
    }
  }, items1);
};
export const isGuildEligibleForGuildProducts = function isGuildEligibleForGuildProducts(id) {
  if (null == id) {
    return false;
  } else {
    const guild = GuildStore.getGuild(id);
    let tmp3 = null != guild;
    if (tmp3) {
      const features = guild.features;
      let hasItem = features.has(GuildFeatures.COMMUNITY);
      if (!hasItem) {
        const features2 = guild.features;
        hasItem = features2.has(GuildFeatures.GUILD_PRODUCTS);
      }
      tmp3 = hasItem;
    }
    return tmp3;
  }
};
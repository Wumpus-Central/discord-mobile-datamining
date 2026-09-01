// === Module 6105: useGuildEligibleForGuildProducts ===

// Module 6105 (useGuildEligibleForGuildProducts)
import closure_2 from "createGuildRecordFromRust" /* 1909 */;
import { GuildFeatures } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_products/GuildProductsEligibility.tsx");

export const useGuildEligibleForGuildProducts = function useGuildEligibleForGuildProducts(id) {
  const _require = id;
  const items = [closure_2];
  const items1 = [id];
  return _require(589).useStateFromStores(items, () => {
    if (null == closure_0) {
      return false;
    } else {
      const guild = closure_1_2.getGuild(tmp);
      let tmp4 = null != guild;
      if (tmp4) {
        const features = guild.features;
        let hasItem = features.has(closure_1_3.COMMUNITY);
        if (!hasItem) {
          const features2 = guild.features;
          hasItem = features2.has(tmp5.GUILD_PRODUCTS);
        }
        tmp4 = hasItem;
        tmp5 = closure_1_3;
      }
      return tmp4;
    }
  }, items1);
};
export const isGuildEligibleForGuildProducts = function isGuildEligibleForGuildProducts(id) {
  if (null == id) {
    return false;
  } else {
    guild = guild.getGuild(id);
    let tmp3 = null != guild;
    if (tmp3) {
      const features = guild.features;
      let hasItem = features.has(GuildFeatures.COMMUNITY);
      if (!hasItem) {
        const features2 = guild.features;
        hasItem = features2.has(tmp4.GUILD_PRODUCTS);
      }
      tmp3 = hasItem;
      tmp4 = GuildFeatures;
    }
    return tmp3;
  }
};
// discord_app/modules/guild_products/GuildProductsEligibility.tsx
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import { GuildFeatures } from "../../Constants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_products/GuildProductsEligibility.tsx");

export const useGuildEligibleForGuildProducts = function useGuildEligibleForGuildProducts(id) {
  const _require = id;
  const items = [closure_2];
  const items1 = [id];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    if (null == closure_0) {
      return false;
    } else {
      const guild = closure_1_2.getGuild(tmp);
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
    guild = guild.getGuild(id);
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
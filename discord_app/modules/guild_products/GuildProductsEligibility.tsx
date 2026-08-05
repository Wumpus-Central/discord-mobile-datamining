import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
// discord_app/modules/guild_products/GuildProductsEligibility.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { GuildFeatures } from "ME";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/guild_products/GuildProductsEligibility.tsx");

export const useGuildEligibleForGuildProducts = function useGuildEligibleForGuildProducts(id) {
  const _require = id;
  const items = [createGuildRecordFromRust];
  const items1 = [id];
  return _initialize.useStateFromStores(items, () => {
    if (null == closure_0) {
      return false;
    } else {
      const guild = outer1_2.getGuild(tmp);
      let tmp4 = null != guild;
      if (tmp4) {
        const features = guild.features;
        let hasItem = features.has(outer1_3.COMMUNITY);
        if (!hasItem) {
          const features2 = guild.features;
          hasItem = features2.has(tmp5.GUILD_PRODUCTS);
        }
        tmp4 = hasItem;
        tmp5 = outer1_3;
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
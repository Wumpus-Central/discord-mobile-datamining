// discord_app/modules/guild_products/GuildProductsEligibility.tsx
import GuildStore from "../../stores/GuildStore.tsx";

const require = globalThis.__r;

const require = fn;
const GuildFeatures = fn(1085).GuildFeatures;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_products/GuildProductsEligibility.tsx");

export const useGuildEligibleForGuildProducts = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function n() {
          if (null == closure_0) {
            return false;
          } else {
            guild = GuildStore.getGuild(tmp);
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
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const obj = require("c");
      return require("initialize").useStateFromStores(first, tmp6, tmp7);
    }
  : (arg0) => {
      _require = arg0;
      const items = [GuildStore];
      const items1 = [arg0];
      return require("initialize").useStateFromStores(
        items,
        () => {
          if (null == closure_0) {
            return false;
          } else {
            guild = GuildStore.getGuild(tmp);
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
        },
        items1,
      );
    };
export const isGuildEligibleForGuildProducts = function isGuildEligibleForGuildProducts(id) {
  if (null == id) {
    return false;
  } else {
    guild = GuildStore.getGuild(id);
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

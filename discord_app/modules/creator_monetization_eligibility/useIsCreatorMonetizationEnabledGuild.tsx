// === Module 6953: useIsCreatorMonetizationEnabledGuild ===

// Module 6953 (useIsCreatorMonetizationEnabledGuild)
import GuildStore from "GuildStore" /* 2087 */;

const require = globalThis.__r;

const require = fn;
const GuildFeatures = fn(1085).GuildFeatures;
const ReactCompilerGating = fn(558);
function isCreatorMonetizationEnabledGuild(guild) {
  const features = guild.features;
  const hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_DISABLED);
  let tmp3 = !hasItem;
  if (!hasItem) {
    const features2 = guild.features;
    let hasItem1 = features2.has(GuildFeatures.CREATOR_MONETIZABLE);
    if (!hasItem1) {
      const features3 = guild.features;
      hasItem1 = features3.has(GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
    }
    tmp3 = hasItem1;
  }
  return tmp3;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/useIsCreatorMonetizationEnabledGuild.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useIsCreatorMonetizationEnabledGuild(arg0) {
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
    const fn = function u() {
      guild = GuildStore.getGuild(closure_0);
      let tmp2 = null != guild;
      if (tmp2) {
        const features = guild.features;
        const hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_DISABLED);
        let tmp5 = !hasItem;
        if (!hasItem) {
          const features2 = guild.features;
          let hasItem1 = features2.has(GuildFeatures.CREATOR_MONETIZABLE);
          if (!hasItem1) {
            const features3 = guild.features;
            hasItem1 = features3.has(GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
          }
          tmp5 = hasItem1;
        }
        tmp2 = tmp5;
      }
      return tmp2;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : (function useIsCreatorMonetizationEnabledGuild(arg0) {
  _require = arg0;
  const items = [GuildStore];
  return require("initialize").useStateFromStores(items, () => {
    guild = GuildStore.getGuild(closure_0);
    let tmp2 = null != guild;
    if (tmp2) {
      const features = guild.features;
      const hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_DISABLED);
      let tmp5 = !hasItem;
      if (!hasItem) {
        const features2 = guild.features;
        let hasItem1 = features2.has(GuildFeatures.CREATOR_MONETIZABLE);
        if (!hasItem1) {
          const features3 = guild.features;
          hasItem1 = features3.has(GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
        }
        tmp5 = hasItem1;
      }
      tmp2 = tmp5;
    }
    return tmp2;
  });
});
export { isCreatorMonetizationEnabledGuild };
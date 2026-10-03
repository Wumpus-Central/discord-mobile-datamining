// === Module 16986: useGuildEligibleForStageChannels ===

// Module 16986 (useGuildEligibleForStageChannels)
import GuildStore from "GuildStore" /* 2074 */;

const require = globalThis.__r;

const require = fn;
const GuildFeatures = fn(1085).GuildFeatures;
const ReactCompilerGating = fn(558);
function isGuildEligibleForStageChannels(id) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [GuildStore];
    tmp = items;
  }
  [obj] = tmp;
  guild = obj.getGuild(id);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.COMMUNITY);
  }
  return Boolean(hasItem);
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useGuildEligibleForStageChannels.tsx");

export { isGuildEligibleForStageChannels };
export const useGuildEligibleForStageChannels = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      const items = [GuildStore];
      [obj] = items;
      guild = obj.getGuild(closure_0);
      let hasItem;
      if (guild != null) {
        const features = guild.features;
        hasItem = features.has(GuildFeatures.COMMUNITY);
      }
      return Boolean(hasItem);
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
}) : ((arg0) => {
  _require = arg0;
  let items = [GuildStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const items = [GuildStore];
    [obj] = items;
    guild = obj.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.COMMUNITY);
    }
    return Boolean(hasItem);
  }, items1);
});
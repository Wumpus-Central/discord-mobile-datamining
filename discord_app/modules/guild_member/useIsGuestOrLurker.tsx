// === Module 11122: useIsGuestOrLurker ===

// Module 11122 (useIsGuestOrLurker)
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import GuildStore from "GuildStore" /* 2086 */;

const require = globalThis.__r;

const require = fn;
const GuildFeatures = fn(1085).GuildFeatures;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member/useIsGuestOrLurker.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useIsGuestOrLurker(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, GuildMemberStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === arg1) {
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
    }
    return tmp(504).useStateFromStores(first, tmp7, tmp8);
  }
  class G {
    constructor() {
      obj = closure_2;
      tmp = closure_0;
      tmp2 = closure_1;
      guild = closure_3.getGuild(closure_0);
      hasItem = undefined;
      if (guild != null) {
        features = guild.features;
        tmp5 = GuildFeatures;
        hasItem = features.has(GuildFeatures.CONFERENCE);
      }
      tmp6 = true !== hasItem && obj.isGuestOrLurker(tmp, tmp2);
      return tmp6;
    }
  }
  const items1 = [arg0, arg1];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = G;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = G;
  const obj = require("c");
  tmp = _require;
}) : (function useIsGuestOrLurker(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [GuildStore, GuildMemberStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(items, () => {
    guild = GuildStore.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.CONFERENCE);
    }
    return true !== hasItem && GuildMemberStore.isGuestOrLurker(closure_0, closure_1);
  }, items1);
});
export const isGuestOrLurkerInGuild = function isGuestOrLurkerInGuild(guild_id, id) {
  guild = GuildStore.getGuild(guild_id);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.CONFERENCE);
  }
  let isGuestOrLurkerResult = true !== hasItem;
  if (isGuestOrLurkerResult) {
    isGuestOrLurkerResult = GuildMemberStore.isGuestOrLurker(guild_id, id);
  }
  return isGuestOrLurkerResult;
};
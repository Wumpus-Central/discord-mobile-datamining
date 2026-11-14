// === Module 13089: useIsGuestOrLurker ===

// Module 13089 (useIsGuestOrLurker)
import GuildMemberStore from "GuildMemberStore" /* 5218 */;
import GuildStore from "GuildStore" /* 5177 */;

const require = globalThis.__r;

const require = fn;
const GuildFeatures = fn(1072).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member/useIsGuestOrLurker.tsx");

export default function useIsGuestOrLurker(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  items = [GuildStore, GuildMemberStore];
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
};
export function isGuestOrLurkerInGuild(guild_id, id) {
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
}
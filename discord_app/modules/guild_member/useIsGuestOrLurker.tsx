// === Module 12607: useIsGuestOrLurker ===

// Module 12607 (useIsGuestOrLurker)
import closure_2 from "trackCommunicationDisabled" /* 1990 */;
import closure_3 from "createGuildRecordFromRust" /* 1910 */;
import { GuildFeatures } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_member/useIsGuestOrLurker.tsx");

export default function useIsGuestOrLurker(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const items = [closure_3, closure_2];
  const items1 = [arg0, arg1];
  return _require(589).useStateFromStores(items, () => {
    const guild = closure_1_3.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(closure_1_4.CONFERENCE);
    }
    return true !== hasItem && closure_1_2.isGuestOrLurker(closure_0, closure_1);
  }, items1);
};
export const isGuestOrLurkerInGuild = function isGuestOrLurkerInGuild(guild_id, id) {
  guild = guild.getGuild(guild_id);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.CONFERENCE);
  }
  let isGuestOrLurkerResult = true !== hasItem;
  if (isGuestOrLurkerResult) {
    isGuestOrLurkerResult = closure_2.isGuestOrLurker(guild_id, id);
  }
  return isGuestOrLurkerResult;
};
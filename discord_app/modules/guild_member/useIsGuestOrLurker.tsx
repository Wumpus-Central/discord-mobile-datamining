import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
// discord_app/modules/guild_member/useIsGuestOrLurker.tsx
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { GuildFeatures } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/guild_member/useIsGuestOrLurker.tsx");

export default function useIsGuestOrLurker(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  const items = [createGuildRecordFromRust, trackCommunicationDisabled];
  const items1 = [arg0, arg1];
  return _initialize.useStateFromStores(items, () => {
    const guild = outer1_3.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(outer1_4.CONFERENCE);
    }
    return true !== hasItem && outer1_2.isGuestOrLurker(closure_0, closure_1);
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
    isGuestOrLurkerResult = trackCommunicationDisabled.isGuestOrLurker(guild_id, id);
  }
  return isGuestOrLurkerResult;
};
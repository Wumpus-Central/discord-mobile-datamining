// === Module 11344: isInviteActive ===

// Module 11344 (isInviteActive)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DurationsDefault from "Durations" /* 1104 */;
import RequestToStreamNonGamesExperimentDefault from "RequestToStreamNonGamesExperiment" /* 11345 */;
import ChannelStore from "ChannelStore" /* 4823 */;

const result = 2 * DurationsDefault.Millis.HOUR;
let c3 = result;
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/activities/utils/isInviteActive.tsx");

export default function isInviteActive(party, id, id1) {
  const sum = SnowflakeUtilsDefault.extractTimestamp(id.id) + result;
  if (sum < Date.now()) {
    return false;
  } else {
    if (null == id1) {
      const basicChannel = ChannelStore.getBasicChannel(id.channel_id);
      let str;
      if (basicChannel != null) {
        str = basicChannel.guild_id;
      }
      if (str == null) {
        str = "";
      }
      const obj2 = { guildId: str, location: "canFulfillStreamRequest" };
      if (tmpResult.getConfig(obj2).enabled) {
        return true;
      }
      tmpResult = RequestToStreamNonGamesExperimentDefault;
    }
    if (null == party) {
      return false;
    } else {
      let party_id = null;
      if (null != id.activity) {
        party_id = id.activity.party_id;
      }
      let tmp8 = null != party_id;
      if (tmp8) {
        party = party.party;
        id = undefined;
        if (party != null) {
          id = party.id;
        }
        tmp8 = id !== party_id;
      }
      let tmp11 = !tmp8;
      if (!tmp8) {
        tmp11 = !tmp10;
      }
      return tmp11;
    }
  }
};
export const EMBED_LIFETIME = result;
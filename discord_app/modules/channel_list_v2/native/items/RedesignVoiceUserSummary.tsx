import noop from "noop";
import handleConnectionOpen from "handleConnectionOpen";
import getVoiceStatesForGuild from "getVoiceStatesForGuild";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getVoiceStatesForGuild").fileFinishedImporting("modules/channel_list_v2/native/items/RedesignVoiceUserSummary.tsx");

export default function RedesignVoiceUserSummary(channels) {
  channels = channels.channels;
  const guildId = channels.guildId;
  let stateFromStores;
  let stateFromStores1;
  let obj = channels(stateFromStores[4]);
  const items = [getVoiceStatesForGuild];
  const items1 = [guildId];
  stateFromStores = obj.useStateFromStores(items, () => outer1_5.getVoiceStates(guildId), items1);
  const items2 = [handleConnectionOpen];
  stateFromStores1 = channels(stateFromStores[4]).useStateFromStores(items2, () => voiceChannelId.getVoiceChannelId());
  const items3 = [channels, stateFromStores1, stateFromStores];
  const stageIcon = stateFromStores1.useMemo(() => channels(stateFromStores[5]).isAnyVoiceStateStage(channels, stateFromStores1, stateFromStores), items3);
  const obj2 = channels(stateFromStores[4]);
  obj = { channels, selectedChannelId: "r", selectedVoiceChannelId: "ct", voiceStates: null };
  obj[2] = stateFromStores1;
  obj[3] = stateFromStores;
  const summarizedVoiceUsers = channels(stateFromStores[5]).computeSummarizedVoiceUsers(obj);
  const users = summarizedVoiceUsers.filter((arg0) => null != arg0);
  return jsx(guildId(stateFromStores[6]), { users, max: 8, renderIcon: true, guildId, stageIcon });
};
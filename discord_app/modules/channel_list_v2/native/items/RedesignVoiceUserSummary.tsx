// === Module 15720: RedesignVoiceUserSummary ===

// Module 15720 (RedesignVoiceUserSummary)
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleConnectionOpen" /* 1981 */;
import closure_5 from "getVoiceStatesForGuild" /* 4555 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/channel_list_v2/native/items/RedesignVoiceUserSummary.tsx");

export default function RedesignVoiceUserSummary(channels) {
  channels = channels.channels;
  const guildId = channels.guildId;
  let stateFromStores;
  let stateFromStores1;
  let obj = channels(stateFromStores[4]);
  const items = [closure_5];
  const items1 = [guildId];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getVoiceStates(guildId), items1);
  const items2 = [closure_4];
  stateFromStores1 = channels(stateFromStores[4]).useStateFromStores(items2, () => voiceChannelId.getVoiceChannelId());
  const items3 = [channels, stateFromStores1, stateFromStores];
  const stageIcon = stateFromStores1.useMemo(() => channels(stateFromStores[5]).isAnyVoiceStateStage(channels, stateFromStores1, stateFromStores), items3);
  const obj2 = channels(stateFromStores[4]);
  obj = { channels, selectedChannelId: "r", selectedVoiceChannelId: "PX_16", voiceStates: null };
  obj[2] = stateFromStores1;
  obj[3] = stateFromStores;
  const summarizedVoiceUsers = channels(stateFromStores[5]).computeSummarizedVoiceUsers(obj);
  const users = summarizedVoiceUsers.filter((arg0) => null != arg0);
  return jsx(guildId(stateFromStores[6]), { users, max: 8, renderIcon: true, guildId, stageIcon });
};
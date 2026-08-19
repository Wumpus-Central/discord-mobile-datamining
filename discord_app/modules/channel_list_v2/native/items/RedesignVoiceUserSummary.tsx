// discord_app/modules/channel_list_v2/native/items/RedesignVoiceUserSummary.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import handleConnectionOpen from "../../../../stores/SelectedChannelStore.tsx";
import getVoiceStatesForGuild from "../../../../stores/views/SortedVoiceStateStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/channel_list_v2/native/items/RedesignVoiceUserSummary.tsx");

export default function RedesignVoiceUserSummary(channels) {
  channels = channels.channels;
  const guildId = channels.guildId;
  let stateFromStores;
  let obj = channels(stateFromStores[4]);
  const items = [closure_5];
  const items1 = [guildId];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getVoiceStates(guildId), items1);
  const items2 = [closure_4];
  const stateFromStores1 = channels(stateFromStores[4]).useStateFromStores(items2, () => voiceChannelId.getVoiceChannelId());
  const items3 = [channels, stateFromStores1, stateFromStores];
  const stageIcon = stateFromStores1.useMemo(() => channels(stateFromStores[5]).isAnyVoiceStateStage(channels, stateFromStores1, stateFromStores), items3);
  const obj2 = channels(stateFromStores[4]);
  obj = { channels, selectedChannelId: "r", selectedVoiceChannelId: "ct", voiceStates: null };
  obj[2] = stateFromStores1;
  obj[3] = stateFromStores;
  const summarizedVoiceUsers = channels(stateFromStores[5]).computeSummarizedVoiceUsers(obj);
  const users = summarizedVoiceUsers.filter((item, index) => null != item);
  return jsx(guildId(stateFromStores[6]), { users, max: 8, renderIcon: true, guildId, stageIcon });
};
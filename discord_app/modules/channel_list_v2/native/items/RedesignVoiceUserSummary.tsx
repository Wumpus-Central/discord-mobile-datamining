// === Module 16470: RedesignVoiceUserSummary ===

// Module 16470 (RedesignVoiceUserSummary)
import ChannelUtils from "ChannelUtils" /* 4901 */;
import noop from "module_19" /* 19 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2095 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4780 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/RedesignVoiceUserSummary.tsx");

export default function RedesignVoiceUserSummary(channels) {
  channels = channels.channels;
  const guildId = channels.guildId;
  let stateFromStores;
  const items = [SortedVoiceStateStore];
  const items1 = [guildId];
  stateFromStores = channels(stateFromStores[4]).useStateFromStores(items, () => SortedVoiceStateStore.getVoiceStates(guildId), items1);
  const obj = channels(stateFromStores[4]);
  const items2 = [SelectedChannelStore];
  const stateFromStores1 = channels(stateFromStores[4]).useStateFromStores(items2, () => voiceChannelId.getVoiceChannelId());
  const items3 = [channels, stateFromStores1, stateFromStores];
  const stageIcon = stateFromStores1.useMemo(() => ChannelUtils.isAnyVoiceStateStage(channels, stateFromStores1, stateFromStores), items3);
  const obj2 = channels(stateFromStores[4]);
  const obj4 = { channels, selectedChannelId: "r", selectedVoiceChannelId: stateFromStores1, voiceStates: stateFromStores };
  const summarizedVoiceUsers = channels(stateFromStores[5]).computeSummarizedVoiceUsers(obj4);
  const users = summarizedVoiceUsers.filter((item) => null != item);
  return jsx(guildId(stateFromStores[6]), { users, max: 8, renderIcon: true, guildId, stageIcon });
};
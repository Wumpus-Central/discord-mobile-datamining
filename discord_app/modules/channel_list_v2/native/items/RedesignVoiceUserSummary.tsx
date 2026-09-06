// discord_app/modules/channel_list_v2/native/items/RedesignVoiceUserSummary.tsx
import ChannelUtils from "../../../../utils/ChannelUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";
import SortedVoiceStateStore from "../../../../stores/views/SortedVoiceStateStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/RedesignVoiceUserSummary.tsx");

export default function RedesignVoiceUserSummary(channels) {
  channels = channels.channels;
  const guildId = channels.guildId;
  let stateFromStores;
  let obj = channels(stateFromStores[4]);
  const items = [SortedVoiceStateStore];
  const items1 = [guildId];
  stateFromStores = obj.useStateFromStores(items, () => SortedVoiceStateStore.getVoiceStates(guildId), items1);
  const items2 = [SelectedChannelStore];
  const stateFromStores1 = channels(stateFromStores[4]).useStateFromStores(items2, () =>
    voiceChannelId.getVoiceChannelId(),
  );
  const items3 = [channels, stateFromStores1, stateFromStores];
  const stageIcon = stateFromStores1.useMemo(
    () => ChannelUtils.isAnyVoiceStateStage(channels, stateFromStores1, stateFromStores),
    items3,
  );
  const obj2 = channels(stateFromStores[4]);
  obj = { channels, selectedChannelId: "r", selectedVoiceChannelId: stateFromStores1, voiceStates: stateFromStores };
  const summarizedVoiceUsers = channels(stateFromStores[5]).computeSummarizedVoiceUsers(obj);
  const users = summarizedVoiceUsers.filter((item) => null != item);
  return jsx(guildId(stateFromStores[6]), { users, max: 8, renderIcon: true, guildId, stageIcon });
}

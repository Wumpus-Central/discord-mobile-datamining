// === Module 11269: ChannelInfoActionCreators ===

// Module 11269 (ChannelInfoActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5753 */;
import ChannelStatusStore from "ChannelStatusStore" /* 7240 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/ChannelInfoActionCreators.tsx");

export const fetchChannelInfo = function fetchChannelInfo(guild_id) {
  if (!ChannelStatusStore.hasRequestedStatuses(guild_id)) {
    const obj2 = { type: "FETCH_CHANNEL_INFO", guildId: guild_id };
    DispatcherDefault.dispatch(obj2);
    const socket = GatewayConnectionStore.getSocket();
    const channelInfo = socket.requestChannelInfo(guild_id, ["status", "voice_start_time"]);
  }
};
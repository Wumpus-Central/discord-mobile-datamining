// === Module 11477: ChannelInfoActionCreators ===

// Module 11477 (ChannelInfoActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5277 */;
import ChannelStatusStore from "ChannelStatusStore" /* 7529 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/ChannelInfoActionCreators.tsx");

export const fetchChannelInfo = function fetchChannelInfo(guild_id) {
  if (!ChannelStatusStore.hasRequestedStatuses(guild_id)) {
    const obj = { type: "FETCH_CHANNEL_INFO", guildId: guild_id };
    obj.dispatch(obj);
    const socket = GatewayConnectionStore.getSocket();
    const channelInfo = socket.requestChannelInfo(guild_id, ["status", "voice_start_time"]);
  }
};
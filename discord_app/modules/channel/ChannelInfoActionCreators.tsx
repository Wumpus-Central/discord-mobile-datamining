// === Module 11631: ChannelInfoActionCreators ===

// Module 11631 (ChannelInfoActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5365 */;
import ChannelStatusStore from "ChannelStatusStore" /* 7643 */;

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
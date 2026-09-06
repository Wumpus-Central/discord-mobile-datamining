// discord_app/modules/channel/ChannelInfoActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import GatewayConnectionStore from "../gateway/GatewayConnectionStore.tsx";
import ChannelStatusStore from "ChannelStatusStore.tsx";

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

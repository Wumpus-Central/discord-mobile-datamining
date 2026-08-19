// discord_app/modules/channel/ChannelInfoActionCreators.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import _handleConnectionOpen from "../gateway/GatewayConnectionStore.tsx";
import handleConnectionReset from "ChannelStatusStore.tsx";

const result = require("obj132").fileFinishedImporting("modules/channel/ChannelInfoActionCreators.tsx");

export const fetchChannelInfo = function fetchChannelInfo(guild_id) {
  if (!closure_3.hasRequestedStatuses(guild_id)) {
    const obj = { type: "FETCH_CHANNEL_INFO", guildId: null };
    obj[1] = guild_id;
    obj.dispatch(obj);
    socket = socket.getSocket();
    const channelInfo = socket.requestChannelInfo(guild_id, ["status", "voice_start_time"]);
  }
};
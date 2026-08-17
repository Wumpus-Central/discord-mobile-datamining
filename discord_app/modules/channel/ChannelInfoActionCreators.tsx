// discord_app/modules/channel/ChannelInfoActionCreators.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import closure_2 from "../gateway/GatewayConnectionStore.tsx";
import closure_3 from "ChannelStatusStore.tsx";

const result = require("set").fileFinishedImporting("modules/channel/ChannelInfoActionCreators.tsx");

export const fetchChannelInfo = function fetchChannelInfo(guild_id) {
  if (!closure_3.hasRequestedStatuses(guild_id)) {
    let obj = dispatcherDefault;
    obj = { type: "FETCH_CHANNEL_INFO", guildId: null };
    obj[1] = guild_id;
    obj.dispatch(obj);
    socket = socket.getSocket();
    const channelInfo = socket.requestChannelInfo(guild_id, ["status", "voice_start_time"]);
  }
};
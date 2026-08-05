// discord_app/modules/channel/ChannelInfoActionCreators.tsx
import _handleConnectionOpen from "_handleConnectionOpen";
import handleConnectionReset from "handleConnectionReset";

const result = require("dispatcher").fileFinishedImporting("modules/channel/ChannelInfoActionCreators.tsx");

export const fetchChannelInfo = function fetchChannelInfo(guild_id) {
  if (!handleConnectionReset.hasRequestedStatuses(guild_id)) {
    let obj = require("../../Dispatcher.tsx");
    obj = { type: "FETCH_CHANNEL_INFO", guildId: null };
    obj[1] = guild_id;
    obj.dispatch(obj);
    socket = socket.getSocket();
    const channelInfo = socket.requestChannelInfo(guild_id, ["status", "voice_start_time"]);
  }
};
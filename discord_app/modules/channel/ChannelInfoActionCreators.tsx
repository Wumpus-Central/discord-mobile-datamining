// === Module 10678: fetchChannelInfo ===

// Module 10678 (fetchChannelInfo)
import dispatcherDefault from "dispatcher" /* 709 */;
import _handleConnectionOpen from "_handleConnectionOpen" /* 4495 */;
import handleConnectionReset from "handleConnectionReset" /* 5273 */;

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
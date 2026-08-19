// discord_app/modules/game_console/trackVoiceCallTransfer.tsx
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import createRTCConnection from "../../stores/RTCConnectionStore.tsx";
import handleUpdate from "../../stores/SessionsStore.tsx";
import { AnalyticEvents } from "../../Constants.tsx";

const result = require("obj132").fileFinishedImporting("modules/game_console/trackVoiceCallTransfer.tsx");

export default function trackVoiceCallTransfer(arg0, arg1, sessionId) {
  let obj = expandEventPropertiesDefault;
  let str = "discord_client";
  if (null != sessionId) {
    sessionById = sessionById.getSessionById(sessionId);
    let os;
    if (sessionById != null) {
      os = sessionById.clientInfo.os;
    }
    str = os;
  }
  obj = { source_platform: str, guild_id: null, channel_id: null, rtc_connection_id: null, target_platform: null };
  channel = channel.getChannel(arg0);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj[1] = guild_id;
  obj[2] = arg0;
  obj[3] = rTCConnectionId.getRTCConnectionId();
  obj[4] = arg1;
  obj.track(AnalyticEvents.VOICE_CALL_TRANSFER, obj);
};
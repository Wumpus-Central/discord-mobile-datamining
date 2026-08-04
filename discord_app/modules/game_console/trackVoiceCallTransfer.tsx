// discord_app/modules/game_console/trackVoiceCallTransfer.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import createRTCConnection from "createRTCConnection";
import handleUpdate from "handleUpdate";
import { AnalyticEvents } from "ME";

const result = require("handleUpdate").fileFinishedImporting("modules/game_console/trackVoiceCallTransfer.tsx");

export default function trackVoiceCallTransfer(arg0, arg1, sessionId) {
  let obj = importDefault(698);
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
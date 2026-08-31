// === Module 9845: trackVoiceCallTransfer ===

// Module 9845 (trackVoiceCallTransfer)
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import closure_2 from "ensureGuildLoaded" /* 1387 */;
import closure_3 from "createRTCConnection" /* 4522 */;
import closure_4 from "handleUpdate" /* 4466 */;
import { AnalyticEvents } from "ME" /* 676 */;

const result = require("set").fileFinishedImporting("modules/game_console/trackVoiceCallTransfer.tsx");

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
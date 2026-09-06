// discord_app/modules/game_console/trackVoiceCallTransfer.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import SessionsStore from "../../stores/SessionsStore.tsx";

const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/trackVoiceCallTransfer.tsx");

export default function trackVoiceCallTransfer(channel_id, target_platform, sessionId) {
  let obj = AnalyticsUtilsDefault;
  let str = "discord_client";
  if (null != sessionId) {
    const sessionById = SessionsStore.getSessionById(sessionId);
    let os;
    if (sessionById != null) {
      os = sessionById.clientInfo.os;
    }
    str = os;
  }
  obj = { source_platform: str, guild_id: null, channel_id: null, rtc_connection_id: null, target_platform: null };
  const channel = ChannelStore.getChannel(channel_id);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj.guild_id = guild_id;
  obj.channel_id = channel_id;
  obj.rtc_connection_id = RTCConnectionStore.getRTCConnectionId();
  obj.target_platform = target_platform;
  obj.track(AnalyticEvents.VOICE_CALL_TRANSFER, obj);
}

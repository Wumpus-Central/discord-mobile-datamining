// discord_app/modules/activities/utils/getActivityChannelId.tsx
import ChannelRecord from "../../../records/ChannelRecord.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const isTextChannel = ChannelRecord.isTextChannel;
const result = size.fileFinishedImporting("modules/activities/utils/getActivityChannelId.tsx");

export default function getActivityChannelId(userId) {
  ({ channelId, activity } = userId);
  const channel = ChannelStore.getChannel(channelId);
  let session_id;
  if (activity != null) {
    session_id = activity.session_id;
  }
  let tmp3 = channelId;
  if (null != session_id) {
    if (null == channel) {
      let session_id1;
      if (activity != null) {
        session_id1 = activity.session_id;
      }
      const voiceStateForSession = VoiceStateStore.getVoiceStateForSession(userId.userId, session_id1);
      channelId = undefined;
      if (voiceStateForSession != null) {
        channelId = voiceStateForSession.channelId;
      }
      tmp3 = channelId;
    } else {
      tmp3 = channelId;
    }
  }
  return tmp3;
}

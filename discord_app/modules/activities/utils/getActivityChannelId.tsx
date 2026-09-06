// === Module 13033: getActivityChannelId ===

// Module 13033 (getActivityChannelId)
import ChannelRecord from "ChannelRecord" /* 1961 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;
import size from "module_2" /* 2 */;

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
};
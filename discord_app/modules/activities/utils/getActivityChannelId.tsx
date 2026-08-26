// === Module 12586: getActivityChannelId ===

// Module 12586 (getActivityChannelId)
import set from "set" /* 2 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;
import closure_1 from "ensureGuildLoaded" /* 1391 */;
import closure_2 from "updateVoiceState" /* 4463 */;

const isTextChannel = createChannelRecord.isTextChannel;
const result = set.fileFinishedImporting("modules/activities/utils/getActivityChannelId.tsx");

export default function getActivityChannelId(userId) {
  ({ channelId, activity } = userId);
  channel = channel.getChannel(channelId);
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
      voiceStateForSession = voiceStateForSession.getVoiceStateForSession(userId.userId, session_id1);
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
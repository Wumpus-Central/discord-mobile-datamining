// === Module 13042: useUserProfileVoiceActivity ===

// Module 13042 (useUserProfileVoiceActivity)
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7739 */;
import PresenceStore from "PresenceStore" /* 4600 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileVoiceActivity.tsx");

export default function useUserProfileVoiceActivity(guildId) {
  const userId = guildId.userId;
  let id;
  const tmp2 = id(10879)({ userId, guildId: guildId.guildId });
  const voiceChannel = tmp2.voiceChannel;
  id = undefined;
  if (voiceChannel != null) {
    id = voiceChannel.id;
  }
  const obj = { voiceState: tmp2.voiceState, voiceChannel, voiceActivity: null };
  const items = [PresenceStore, VoiceStateStore];
  obj.voiceActivity = userId(504).useStateFromStores(items, () => {
    if (null != userId) {
      if (null != id) {
        return PresenceStore.findActivity(tmp, (session_id) => {
          voiceStateForSession = voiceStateForSession.getVoiceStateForSession(userId, session_id.session_id);
          let tmp3 = id(dependencyMap[2])(session_id);
          if (tmp3) {
            let channelId;
            if (voiceStateForSession != null) {
              channelId = voiceStateForSession.channelId;
            }
            tmp3 = channelId === closure_1_1;
          }
          return tmp3;
        });
      }
    }
  });
  return obj;
};
export const isUserProfileVoiceActivityForChannel = function isUserProfileVoiceActivityForChannel(voiceStateForSession) {
  voiceStateForSession = voiceStateForSession.voiceStateForSession;
  ({ activity, voiceChannelId } = voiceStateForSession);
  let tmp = isEmbeddedActivityDefault(activity);
  if (tmp) {
    let channelId;
    if (voiceStateForSession != null) {
      channelId = voiceStateForSession.channelId;
    }
    tmp = channelId === voiceChannelId;
  }
  return tmp;
};
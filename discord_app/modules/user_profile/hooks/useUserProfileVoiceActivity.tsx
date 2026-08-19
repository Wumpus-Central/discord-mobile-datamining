// === Module 12145: useUserProfileVoiceActivity ===

// Module 12145 (useUserProfileVoiceActivity)
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7259 */;
import sortActivity from "sortActivity" /* 4559 */;
import updateVoiceState from "updateVoiceState" /* 4542 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/user_profile/hooks/useUserProfileVoiceActivity.tsx");

export default function useUserProfileVoiceActivity(guildId) {
  const userId = guildId.userId;
  let id;
  const tmp2 = id(9896)({ userId, guildId: guildId.guildId });
  const voiceChannel = tmp2.voiceChannel;
  id = undefined;
  if (voiceChannel != null) {
    id = voiceChannel.id;
  }
  const obj = {
    voiceState: tmp2.voiceState,
    voiceChannel,
    voiceActivity: userId(589).useStateFromStores(items, () => {
      if (null != userId) {
        if (null != id) {
          return closure_1_3.findActivity(tmp, (session_id) => {
            const voiceStateForSession = closure_1_4.getVoiceStateForSession(closure_0, session_id.session_id);
            let tmp3 = id(closure_1_2[2])(session_id);
            if (tmp3) {
              let channelId;
              if (voiceStateForSession != null) {
                channelId = voiceStateForSession.channelId;
              }
              tmp3 = channelId === closure_1;
            }
            return tmp3;
          });
        }
      }
    })
  };
  items = [closure_3, closure_4];
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
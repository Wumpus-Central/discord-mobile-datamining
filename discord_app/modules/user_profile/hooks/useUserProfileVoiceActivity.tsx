// discord_app/modules/user_profile/hooks/useUserProfileVoiceActivity.tsx
import sortActivity from "sortActivity";
import updateVoiceState from "updateVoiceState";
import { isEmbeddedActivity } from "../../activities/utils/isEmbeddedActivity.tsx";

const require = arg1;
const result = require("isEmbeddedActivity").fileFinishedImporting("modules/user_profile/hooks/useUserProfileVoiceActivity.tsx");

export default function useUserProfileVoiceActivity(guildId) {
  const userId = guildId.userId;
  let id;
  const tmp2 = id(9641)({ userId, guildId: guildId.guildId });
  const voiceChannel = tmp2.voiceChannel;
  id = undefined;
  if (voiceChannel != null) {
    id = voiceChannel.id;
  }
  const obj = { voiceState: tmp2.voiceState, voiceChannel, voiceActivity: null };
  const items = [sortActivity, updateVoiceState];
  obj[2] = userId(589).useStateFromStores(items, () => {
    if (null != userId) {
      if (null != id) {
        const findActivityResult = outer1_3.findActivity(tmp, (session_id) => {
          const voiceStateForSession = outer1_4.getVoiceStateForSession(closure_0, session_id.session_id);
          let tmp3 = outer1_1(outer1_2[2])(session_id);
          if (tmp3) {
            let channelId;
            if (voiceStateForSession != null) {
              channelId = voiceStateForSession.channelId;
            }
            tmp3 = channelId === closure_1;
          }
          return tmp3;
        });
        return findActivityResult;
      }
    }
  });
  return obj;
};
export const isUserProfileVoiceActivityForChannel = function isUserProfileVoiceActivityForChannel(voiceStateForSession) {
  let activity;
  let voiceChannelId;
  voiceStateForSession = voiceStateForSession.voiceStateForSession;
  ({ activity, voiceChannelId } = voiceStateForSession);
  let tmp = isEmbeddedActivity(activity);
  if (tmp) {
    let channelId;
    if (voiceStateForSession != null) {
      channelId = voiceStateForSession.channelId;
    }
    tmp = channelId === voiceChannelId;
  }
  return tmp;
};
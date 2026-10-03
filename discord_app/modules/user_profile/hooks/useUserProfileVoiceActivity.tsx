// === Module 12865: useUserProfileVoiceActivity ===

// Module 12865 (useUserProfileVoiceActivity)
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7229 */;
import PresenceStore from "PresenceStore" /* 4930 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;

const require = fn;
const ReactCompilerGating = fn(558);
function isUserProfileVoiceActivityForChannel(voiceStateForSession) {
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
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileVoiceActivity.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  const cResult = userId(576).c(11);
  userId = userId.userId;
  const guildId = userId.guildId;
  if (cResult[0] === guildId) {
    if (cResult[1] === userId) {
      let tmp4 = cResult[2];
    }
    ({ voiceState, voiceChannel } = id(10612)(tmp4));
    id = undefined;
    if (voiceChannel != null) {
      id = voiceChannel.id;
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [PresenceStore, VoiceStateStore];
      cResult[3] = items;
      let tmp10 = items;
    } else {
      tmp10 = cResult[3];
    }
    if (cResult[4] === userId) {
      if (cResult[5] === id) {
        let tmp13 = cResult[6];
      }
      const stateFromStores = tmp(504).useStateFromStores(tmp10, tmp13);
      if (cResult[7] === stateFromStores) {
        if (cResult[8] === voiceChannel) {
          if (cResult[9] === voiceState) {
            let tmp15 = cResult[10];
          }
          return tmp15;
        }
      }
      const obj2 = { voiceState, voiceChannel, voiceActivity: stateFromStores };
      cResult[7] = stateFromStores;
      cResult[8] = voiceChannel;
      cResult[9] = voiceState;
      cResult[10] = obj2;
      tmp15 = obj2;
      const tmpResult = tmp(504);
    }
    const fn = function f() {
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
    };
    cResult[4] = userId;
    cResult[5] = id;
    cResult[6] = fn;
    tmp13 = fn;
    const tmp6 = id(10612)(tmp4);
  }
  const obj3 = { userId, guildId };
  cResult[0] = guildId;
  cResult[1] = userId;
  cResult[2] = obj3;
  tmp4 = obj3;
  const obj = userId(576);
  tmp = userId;
}) : ((guildId) => {
  const userId = guildId.userId;
  let id;
  const tmp2 = id(10612)({ userId, guildId: guildId.guildId });
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
});
export { isUserProfileVoiceActivityForChannel };
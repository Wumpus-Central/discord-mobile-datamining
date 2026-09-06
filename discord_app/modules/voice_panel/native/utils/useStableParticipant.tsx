// === Module 17104: useStableParticipant ===

// Module 17104 (useStableParticipant)
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 558 */;
import NicknameUtils from "NicknameUtils" /* 4712 */;
import useAvatarDecoration from "useAvatarDecoration" /* 8217 */;
import participantHasVideoDefault from "participantHasVideo" /* 9622 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function areStableParticipantsEqual(arg0, arg1) {
  let tmp = arg0 === arg1;
  if (!tmp) {
    let tmp3 = null != arg0 && null != arg1;
    if (tmp3) {
      tmp3 = discord_common_shallowEqualDefault(arg0, arg1);
    }
    tmp = tmp3;
  }
  return tmp;
}
const ParticipantTypes = fn(4581).ParticipantTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/useStableParticipant.tsx");

export default function useStableParticipant(arg0, arg1, arg2) {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  const items = [ChannelRTCStore, UserStore, AuthenticationStore, MediaEngineStore];
  const items1 = [arg0, arg1, arg2];
  return require("initialize").useStateFromStores(items, () => {
    if (null != closure_0) {
      const participant = ChannelRTCStore.getParticipant(closure_1, tmp);
      if (null == participant) {
        const user = UserStore.getUser(tmp);
        if (null != user) {
          let obj = { type: ParticipantTypes.USER, id: tmp, user, selfVideo: false, canRenderVideo: false, userNick: null, userAvatarDecoration: null, streamId: "flex", ringing: null, hasVideo: 0, isSelf: 1 };
          const id = AuthenticationStore.getId();
          obj.userNick = NicknameUtils.getName(closure_2, tmp3, user);
          obj.userAvatarDecoration = useAvatarDecoration.getAvatarDecoration(user, closure_2);
          obj.isSelf = user.id === id;
          return obj;
        }
      } else {
        const tmp15 = participantHasVideoDefault(participant);
        const type = participant.type;
        if (ParticipantTypes.ACTIVITY === type) {
          obj = { type: participant.type, id: tmp, applicationId: participant.applicationId };
          return obj;
        } else {
          if (tmp16.STREAM !== type) {
            if (tmp16.HIDDEN_STREAM !== type) {
              if (tmp16.USER === type) {
                obj = { type: participant.type, id: tmp, user: null, selfVideo: null, userNick: null, userAvatarDecoration: null, streamId: null, ringing: null, hasVideo: null, canRenderVideo: null, isSelf: null };
                ({ user: obj.user, voiceState } = participant);
                let flag;
                const id1 = AuthenticationStore.getId();
                if (voiceState != null) {
                  flag = voiceState.selfVideo;
                }
                if (flag == null) {
                  flag = false;
                }
                obj.selfVideo = flag;
                ({ userNick: obj.userNick, userAvatarDecoration: obj.userAvatarDecoration, streamId } = participant);
                obj.streamId = streamId;
                obj.ringing = participant.ringing;
                obj.hasVideo = tmp15;
                let tmp7 = tmp15;
                if (tmp15) {
                  tmp7 = !MediaEngineStore.isLocalVideoDisabled(participant.user.id);
                }
                obj.canRenderVideo = tmp7;
                obj.isSelf = participant.user.id === id1;
                return obj;
              }
            }
          }
          const obj1 = { type: participant.type, id: tmp, user: null, userNick: null, streamId: null, streamGuildId: null, hasVideo: null, isSelf: null };
          ({ user: obj2.user, userNick: obj2.userNick, streamId: streamId2 } = participant);
          const id2 = AuthenticationStore.getId();
          obj1.streamId = streamId2;
          const guildId = participant.stream.guildId;
          obj1.streamGuildId = guildId;
          obj1.hasVideo = tmp15;
          obj1.isSelf = participant.user.id === id2;
          return obj1;
        }
      }
      tmp3 = closure_1;
    }
  }, items1, areStableParticipantsEqual);
};
export const isStableStreamParticipant = function isStableStreamParticipant(participant) {
  let type;
  if (participant != null) {
    type = participant.type;
  }
  let tmp3 = type === ParticipantTypes.STREAM;
  if (!tmp3) {
    let type1;
    if (participant != null) {
      type1 = participant.type;
    }
    tmp3 = type1 === tmp2.HIDDEN_STREAM;
  }
  return Boolean(tmp3);
};
export const isStableUserParticipant = function isStableUserParticipant(type) {
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  return Boolean(type === ParticipantTypes.USER);
};
export const isStableActivityParticipant = function isStableActivityParticipant(participant) {
  let type;
  if (participant != null) {
    type = participant.type;
  }
  return Boolean(type === ParticipantTypes.ACTIVITY);
};
export const isStableParticipantWithUser = function isStableParticipantWithUser(participant) {
  let type;
  if (participant != null) {
    type = participant.type;
  }
  let tmp3 = type === ParticipantTypes.STREAM;
  if (!tmp3) {
    let type1;
    if (participant != null) {
      type1 = participant.type;
    }
    tmp3 = type1 === tmp2.HIDDEN_STREAM;
  }
  let BooleanResult = Boolean(tmp3);
  if (!BooleanResult) {
    let type2;
    if (participant != null) {
      type2 = participant.type;
    }
    BooleanResult = Boolean(type2 === tmp2.USER);
  }
  return BooleanResult;
};
export const stableParticipantHasVideo = function stableParticipantHasVideo(arg0) {
  let streamId = arg0;
  let type;
  if (arg0 != null) {
    type = streamId.type;
  }
  const BooleanResult = Boolean(type === ParticipantTypes.ACTIVITY);
  if (BooleanResult) {
    return !BooleanResult;
  } else {
    let type1;
    if (streamId != null) {
      type1 = streamId.type;
    }
    let tmp5 = type1 === tmp2.STREAM;
    if (!tmp5) {
      let type2;
      if (streamId != null) {
        type2 = streamId.type;
      }
      tmp5 = type2 === tmp2.HIDDEN_STREAM;
    }
    if (Boolean(tmp5)) {
      streamId = streamId.streamId;
      let selfVideo = null != streamId;
    } else {
      selfVideo = streamId.selfVideo;
    }
  }
};
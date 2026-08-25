// discord_app/modules/voice_panel/native/utils/useStableParticipant.tsx
import shallowEqualDefault from "../../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import closure_3 from "../../../calls/ChannelRTCStore.tsx";
import closure_4 from "../../../../stores/AuthenticationStore.tsx";
import closure_5 from "../../../../stores/MediaEngineStore.tsx";
import closure_6 from "../../../../stores/UserStore.tsx";
import { ParticipantTypes } from "../../../calls/CallConstants.tsx";

const require = arg1;
function areStableParticipantsEqual(arg0, arg1) {
  let tmp = arg0 === arg1;
  if (!tmp) {
    let tmp3 = null != arg0 && null != arg1;
    if (tmp3) {
      tmp3 = shallowEqualDefault(arg0, arg1);
    }
    tmp = tmp3;
  }
  return tmp;
}
const result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/useStableParticipant.tsx");

export default function useStableParticipant(arg0, arg1, arg2) {
  const _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  const items = [closure_3, closure_6, closure_4, closure_5];
  const items1 = [arg0, arg1, arg2];
  return require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    if (null != callback) {
      const participant = closure_1_3.getParticipant(callback2, tmp);
      if (null == participant) {
        const user = closure_1_6.getUser(tmp);
        if (null != user) {
          let obj = { type: null, id: null, user: null, selfVideo: false, canRenderVideo: false, userNick: null, userAvatarDecoration: null, streamId: "PX_16", ringing: null, hasVideo: 0.778, isSelf: 0.275 };
          obj[0] = closure_1_7.USER;
          obj[1] = tmp;
          obj[2] = user;
          const id = closure_1_4.getId();
          obj[5] = callback(4573).getName(dependencyMap, tmp3, user);
          const obj5 = callback(4573);
          obj[6] = callback(8960).getAvatarDecoration(user, dependencyMap);
          obj[10] = user.id === id;
          return obj;
        }
      } else {
        const tmp15 = callback2(10794)(participant);
        const type = participant.type;
        if (closure_1_7.ACTIVITY === type) {
          obj = { type: null, id: null, applicationId: null };
          obj[0] = participant.type;
          obj[1] = tmp;
          obj[2] = participant.applicationId;
          return obj;
        } else {
          if (tmp16.STREAM !== type) {
            if (tmp16.HIDDEN_STREAM !== type) {
              if (tmp16.USER === type) {
                obj = { type: null, id: null, user: null, selfVideo: null, userNick: null, userAvatarDecoration: null, streamId: null, ringing: null, hasVideo: null, canRenderVideo: null, isSelf: null };
                obj[0] = participant.type;
                obj[1] = tmp;
                ({ user: obj[2], voiceState } = participant);
                let flag;
                const id1 = closure_1_4.getId();
                if (voiceState != null) {
                  flag = voiceState.selfVideo;
                }
                if (flag == null) {
                  flag = false;
                }
                obj[3] = flag;
                ({ userNick: obj[4], userAvatarDecoration: obj[5], streamId } = participant);
                obj[6] = streamId;
                obj[7] = participant.ringing;
                obj[8] = tmp15;
                let tmp7 = tmp15;
                if (tmp15) {
                  tmp7 = !closure_1_5.isLocalVideoDisabled(participant.user.id);
                }
                obj[9] = tmp7;
                obj[10] = participant.user.id === id1;
                return obj;
              }
            }
          }
          obj1 = { type: null, id: null, user: null, userNick: null, streamId: null, streamGuildId: null, hasVideo: null, isSelf: null };
          obj1[0] = participant.type;
          obj1[1] = tmp;
          ({ user: obj2[2], userNick: obj2[3], streamId: streamId2 } = participant);
          const id2 = closure_1_4.getId();
          obj1[4] = streamId2;
          const guildId = participant.stream.guildId;
          obj1[5] = guildId;
          obj1[6] = tmp15;
          obj1[7] = participant.user.id === id2;
          return obj1;
        }
      }
      tmp3 = callback2;
    }
  }, items1, areStableParticipantsEqual);
};
export const isStableStreamParticipant = function isStableStreamParticipant(controlsHidden) {
  let type;
  if (controlsHidden != null) {
    type = controlsHidden.type;
  }
  let tmp3 = type === ParticipantTypes.STREAM;
  if (!tmp3) {
    let type1;
    if (controlsHidden != null) {
      type1 = controlsHidden.type;
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
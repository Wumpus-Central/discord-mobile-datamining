// === Module 17248: useStableParticipant ===

// Module 17248 (useStableParticipant)
import shallowEqualDefault from "shallowEqual" /* 568 */;
import CallConstants from "CallConstants" /* 4917 */;
import NicknameUtils from "NicknameUtils" /* 5048 */;
import useAvatarDecoration from "useAvatarDecoration" /* 7898 */;
import participantHasVideoDefault from "participantHasVideo" /* 9154 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4912 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, id;

function areStableParticipantsEqual(arg0, arg1) {
  let tmp = arg0 === arg1;
  if (!tmp) {
    tmp = null != arg0 && null != arg1 && shallowEqualDefault(arg0, arg1);
    const tmp3 = null != arg0 && null != arg1 && shallowEqualDefault(arg0, arg1);
  }
  return tmp;
}
const ParticipantTypes = CallConstants.ParticipantTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1, arg2) => {
  let closure_2;
  let first;
  _require = id;
  let closure_1 = arg1;
  dependencyMap = arg2;
  let obj = require("react");
  const cResult = obj.c(6);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore, UserStore, AuthenticationStore, MediaEngineStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg2) {
      let tmp9;
      let tmp10;
      if (cResult[3] === id) {
        tmp9 = cResult[4];
        tmp10 = cResult[5];
      }
      let tmp15 = tmp10;
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp9, tmp10, areStableParticipantsEqual);
    }
  }
  const fn = function v() {
    let flag;
    let guildId;
    let id1;
    let id4;
    let id5;
    let obj5;
    let obj6;
    let streamId;
    let streamId2;
    let tmp7;
    let voiceState;
    if (null != id) {
      const participant = ChannelRTCStore.getParticipant(closure_1, id);
      if (null == participant) {
        const user = UserStore.getUser(id);
        if (null != user) {
          const id3 = user.id;
          const obj3 = { type: ParticipantTypes.USER, id, user, selfVideo: false, canRenderVideo: false, userNick: obj5.getName(closure_2, closure_1, user), userAvatarDecoration: obj6.getAvatarDecoration(user, closure_2), streamId: "Set", ringing: null, hasVideo: 465.988, isSelf: id3 === id1 };
          id1 = AuthenticationStore.getId();
          obj5 = NicknameUtils;
          obj6 = useAvatarDecoration;
          return obj3;
        }
      } else {
        const tmp15 = participantHasVideoDefault(participant);
        const type = participant.type;
        if (ParticipantTypes.ACTIVITY === type) {
          return { type: participant.type, id, applicationId: participant.applicationId };
        } else {
          if (ParticipantTypes.STREAM !== type) {
            if (ParticipantTypes.HIDDEN_STREAM !== type) {
              if (ParticipantTypes.USER === type) {
                id = participant.user.id;
                const obj = { type: participant.type, id, user: null, selfVideo: flag, userNick: null, userAvatarDecoration: null, streamId, ringing: participant.ringing, hasVideo: tmp15, canRenderVideo: tmp7, isSelf: id === id4 };
                ({ user: obj.user, voiceState } = participant);
                flag = undefined;
                id4 = AuthenticationStore.getId();
                if (voiceState != null) {
                  flag = voiceState.selfVideo;
                }
                if (flag == null) {
                  flag = false;
                }
                ({ userNick: obj.userNick, userAvatarDecoration: obj.userAvatarDecoration, streamId } = participant);
                tmp7 = tmp15 && !MediaEngineStore.isLocalVideoDisabled(participant.user.id);
                return obj;
              }
            }
          }
          const id2 = participant.user.id;
          const obj9 = { type: participant.type, id, user: null, userNick: null, streamId: streamId2, streamGuildId: guildId, hasVideo: tmp15, isSelf: id2 === id5 };
          ({ user: obj2.user, userNick: obj2.userNick, streamId: streamId2 } = participant);
          id5 = AuthenticationStore.getId();
          guildId = participant.stream.guildId;
          return obj9;
        }
      }
    }
  };
  const items1 = [id, arg1, arg2];
  cResult[1] = arg1;
  cResult[2] = arg2;
  cResult[3] = id;
  cResult[4] = fn;
  cResult[5] = items1;
  tmp10 = items1;
  tmp9 = fn;
}) : ((id, arg1, arg2) => {
  let closure_2;
  _require = id;
  let closure_1 = arg1;
  dependencyMap = arg2;
  let obj = require("get initialized");
  const items = [ChannelRTCStore, UserStore, AuthenticationStore, MediaEngineStore];
  const items1 = [id, arg1, arg2];
  return obj.useStateFromStores(items, () => {
    let flag;
    let guildId;
    let id1;
    let id4;
    let id5;
    let obj5;
    let obj6;
    let streamId;
    let streamId2;
    let tmp7;
    let voiceState;
    if (null != id) {
      const participant = ChannelRTCStore.getParticipant(closure_1, id);
      if (null == participant) {
        const user = UserStore.getUser(id);
        if (null != user) {
          const id3 = user.id;
          const obj3 = { type: ParticipantTypes.USER, id, user, selfVideo: false, canRenderVideo: false, userNick: obj5.getName(closure_2, closure_1, user), userAvatarDecoration: obj6.getAvatarDecoration(user, closure_2), streamId: "Set", ringing: null, hasVideo: 465.988, isSelf: id3 === id1 };
          id1 = AuthenticationStore.getId();
          obj5 = NicknameUtils;
          obj6 = useAvatarDecoration;
          return obj3;
        }
      } else {
        const tmp15 = participantHasVideoDefault(participant);
        const type = participant.type;
        if (ParticipantTypes.ACTIVITY === type) {
          return { type: participant.type, id, applicationId: participant.applicationId };
        } else {
          if (ParticipantTypes.STREAM !== type) {
            if (ParticipantTypes.HIDDEN_STREAM !== type) {
              if (ParticipantTypes.USER === type) {
                id = participant.user.id;
                const obj = { type: participant.type, id, user: null, selfVideo: flag, userNick: null, userAvatarDecoration: null, streamId, ringing: participant.ringing, hasVideo: tmp15, canRenderVideo: tmp7, isSelf: id === id4 };
                ({ user: obj.user, voiceState } = participant);
                flag = undefined;
                id4 = AuthenticationStore.getId();
                if (voiceState != null) {
                  flag = voiceState.selfVideo;
                }
                if (flag == null) {
                  flag = false;
                }
                ({ userNick: obj.userNick, userAvatarDecoration: obj.userAvatarDecoration, streamId } = participant);
                tmp7 = tmp15 && !MediaEngineStore.isLocalVideoDisabled(participant.user.id);
                return obj;
              }
            }
          }
          const id2 = participant.user.id;
          const obj9 = { type: participant.type, id, user: null, userNick: null, streamId: streamId2, streamGuildId: guildId, hasVideo: tmp15, isSelf: id2 === id5 };
          ({ user: obj2.user, userNick: obj2.userNick, streamId: streamId2 } = participant);
          id5 = AuthenticationStore.getId();
          guildId = participant.stream.guildId;
          return obj9;
        }
      }
    }
  }, items1, areStableParticipantsEqual);
});
function isStableStreamParticipant(participant) {
  let type;
  const _Boolean = Boolean;
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
  return _Boolean(tmp3);
}
function isStableUserParticipant(type) {
  type = undefined;
  const _Boolean = Boolean;
  if (type != null) {
    type = type.type;
  }
  return _Boolean(type === ParticipantTypes.USER);
}
function isStableActivityParticipant(participant) {
  let type;
  const _Boolean = Boolean;
  if (participant != null) {
    type = participant.type;
  }
  return _Boolean(type === ParticipantTypes.ACTIVITY);
}
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/useStableParticipant.tsx");

export default tmp2;
export { isStableStreamParticipant };
export { isStableUserParticipant };
export { isStableActivityParticipant };
export const isStableParticipantWithUser = function isStableParticipantWithUser(participant) {
  let type;
  const _Boolean = Boolean;
  if (participant != null) {
    type = participant.type;
  }
  let tmp3 = type === ParticipantTypes.STREAM;
  if (!tmp3) {
    let type1;
    if (participant != null) {
      type1 = participant.type;
    }
    tmp3 = type1 === ParticipantTypes.HIDDEN_STREAM;
  }
  let _BooleanResult = _Boolean(tmp3);
  if (!_BooleanResult) {
    let type2;
    const _Boolean2 = Boolean;
    if (participant != null) {
      type2 = participant.type;
    }
    _BooleanResult = _Boolean2(type2 === ParticipantTypes.USER);
  }
  return _BooleanResult;
};
export const stableParticipantHasVideo = function stableParticipantHasVideo(type) {
  type = undefined;
  const _Boolean = Boolean;
  if (type != null) {
    type = type.type;
  }
  let tmp4 = !_Boolean(type === ParticipantTypes.ACTIVITY);
  _Boolean(type === ParticipantTypes.ACTIVITY);
  if (tmp4) {
    let selfVideo;
    let type1;
    const _Boolean2 = Boolean;
    if (type != null) {
      type1 = type.type;
    }
    let tmp6 = type1 === ParticipantTypes.STREAM;
    if (!tmp6) {
      let type2;
      if (type != null) {
        type2 = type.type;
      }
      tmp6 = type2 === ParticipantTypes.HIDDEN_STREAM;
    }
    if (_Boolean2(tmp6)) {
      selfVideo = null != type.streamId;
    } else {
      selfVideo = type.selfVideo;
    }
    tmp4 = selfVideo;
  }
  return tmp4;
};
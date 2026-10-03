// discord_app/modules/voice_panel/native/utils/useStableParticipant.tsx
import discord_common_shallowEqualDefault from "../../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import NicknameUtils from "../../../../utils/NicknameUtils.tsx";
import useAvatarDecoration from "../../../collectibles/avatar_decorations/useAvatarDecoration.tsx";
import participantHasVideoDefault from "../../../video_calls/participantHasVideo.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

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
const ParticipantTypes = fn(4911).ParticipantTypes;
const ReactCompilerGating = fn(558);
function isStableStreamParticipant(participant) {
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
}
function isStableUserParticipant(type) {
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  return Boolean(type === ParticipantTypes.USER);
}
function isStableActivityParticipant(participant) {
  let type;
  if (participant != null) {
    type = participant.type;
  }
  return Boolean(type === ParticipantTypes.ACTIVITY);
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/useStableParticipant.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (id, arg1, arg2) => {
      _require = id;
      closure_1 = arg1;
      dependencyMap = arg2;
      const cResult = require("c").c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelRTCStore, UserStore, AuthenticationStore, MediaEngineStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg1) {
        if (cResult[2] === arg2) {
          if (cResult[3] === id) {
            let tmp9 = cResult[4];
            let tmp10 = cResult[5];
          }
          const tmpResult = tmp(504);
          return tmpResult.useStateFromStores(first, tmp9, tmp10, areStableParticipantsEqual);
        }
      }
      const fn = function v() {
        if (null != id) {
          const participant = ChannelRTCStore.getParticipant(closure_1, id);
          if (null == participant) {
            const user = UserStore.getUser(id);
            if (null != user) {
              const obj3 = {
                type: ParticipantTypes.USER,
                id,
                user,
                selfVideo: false,
                canRenderVideo: false,
                userNick: null,
                userAvatarDecoration: null,
                streamId: "Set",
                ringing: null,
                hasVideo: "2026-05-quest-home-tile-redesign",
                isSelf: "user",
              };
              id = AuthenticationStore.getId();
              obj3.userNick = NicknameUtils.getName(closure_2, closure_1, user);
              obj3.userAvatarDecoration = useAvatarDecoration.getAvatarDecoration(user, closure_2);
              obj3.isSelf = user.id === id;
              return obj3;
            }
          } else {
            const tmp15 = participantHasVideoDefault(participant);
            const type = participant.type;
            if (ParticipantTypes.ACTIVITY === type) {
              const obj4 = { type: participant.type, id, applicationId: participant.applicationId };
              return obj4;
            } else {
              if (ParticipantTypes.STREAM !== type) {
                if (ParticipantTypes.HIDDEN_STREAM !== type) {
                  if (ParticipantTypes.USER === type) {
                    const obj = {
                      type: participant.type,
                      id,
                      user: null,
                      selfVideo: null,
                      userNick: null,
                      userAvatarDecoration: null,
                      streamId: null,
                      ringing: null,
                      hasVideo: null,
                      canRenderVideo: null,
                      isSelf: null,
                    };
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
                    ({
                      userNick: obj.userNick,
                      userAvatarDecoration: obj.userAvatarDecoration,
                      streamId,
                    } = participant);
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
              const obj9 = {
                type: participant.type,
                id,
                user: null,
                userNick: null,
                streamId: null,
                streamGuildId: null,
                hasVideo: null,
                isSelf: null,
              };
              ({ user: obj2.user, userNick: obj2.userNick, streamId: streamId2 } = participant);
              const id2 = AuthenticationStore.getId();
              obj9.streamId = streamId2;
              const guildId = participant.stream.guildId;
              obj9.streamGuildId = guildId;
              obj9.hasVideo = tmp15;
              obj9.isSelf = participant.user.id === id2;
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
      let obj = require("c");
      tmp = _require;
    }
  : (id, arg1, arg2) => {
      _require = id;
      closure_1 = arg1;
      dependencyMap = arg2;
      const items = [ChannelRTCStore, UserStore, AuthenticationStore, MediaEngineStore];
      const items1 = [id, arg1, arg2];
      return require("initialize").useStateFromStores(
        items,
        () => {
          if (null != id) {
            const participant = ChannelRTCStore.getParticipant(closure_1, id);
            if (null == participant) {
              const user = UserStore.getUser(id);
              if (null != user) {
                const obj3 = {
                  type: ParticipantTypes.USER,
                  id,
                  user,
                  selfVideo: false,
                  canRenderVideo: false,
                  userNick: null,
                  userAvatarDecoration: null,
                  streamId: "Set",
                  ringing: null,
                  hasVideo: "2026-05-quest-home-tile-redesign",
                  isSelf: "user",
                };
                id = AuthenticationStore.getId();
                obj3.userNick = NicknameUtils.getName(closure_2, closure_1, user);
                obj3.userAvatarDecoration = useAvatarDecoration.getAvatarDecoration(user, closure_2);
                obj3.isSelf = user.id === id;
                return obj3;
              }
            } else {
              const tmp15 = participantHasVideoDefault(participant);
              const type = participant.type;
              if (ParticipantTypes.ACTIVITY === type) {
                const obj4 = { type: participant.type, id, applicationId: participant.applicationId };
                return obj4;
              } else {
                if (ParticipantTypes.STREAM !== type) {
                  if (ParticipantTypes.HIDDEN_STREAM !== type) {
                    if (ParticipantTypes.USER === type) {
                      const obj = {
                        type: participant.type,
                        id,
                        user: null,
                        selfVideo: null,
                        userNick: null,
                        userAvatarDecoration: null,
                        streamId: null,
                        ringing: null,
                        hasVideo: null,
                        canRenderVideo: null,
                        isSelf: null,
                      };
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
                      ({
                        userNick: obj.userNick,
                        userAvatarDecoration: obj.userAvatarDecoration,
                        streamId,
                      } = participant);
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
                const obj9 = {
                  type: participant.type,
                  id,
                  user: null,
                  userNick: null,
                  streamId: null,
                  streamGuildId: null,
                  hasVideo: null,
                  isSelf: null,
                };
                ({ user: obj2.user, userNick: obj2.userNick, streamId: streamId2 } = participant);
                const id2 = AuthenticationStore.getId();
                obj9.streamId = streamId2;
                const guildId = participant.stream.guildId;
                obj9.streamGuildId = guildId;
                obj9.hasVideo = tmp15;
                obj9.isSelf = participant.user.id === id2;
                return obj9;
              }
            }
          }
        },
        items1,
        areStableParticipantsEqual,
      );
    };
export { isStableStreamParticipant };
export { isStableUserParticipant };
export { isStableActivityParticipant };
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
    tmp3 = type1 === ParticipantTypes.HIDDEN_STREAM;
  }
  let BooleanResult = Boolean(tmp3);
  if (!BooleanResult) {
    let type2;
    if (participant != null) {
      type2 = participant.type;
    }
    BooleanResult = Boolean(type2 === ParticipantTypes.USER);
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
    let tmp5 = type1 === ParticipantTypes.STREAM;
    if (!tmp5) {
      let type2;
      if (streamId != null) {
        type2 = streamId.type;
      }
      tmp5 = type2 === ParticipantTypes.HIDDEN_STREAM;
    }
    if (Boolean(tmp5)) {
      streamId = streamId.streamId;
      let selfVideo = null != streamId;
    } else {
      selfVideo = streamId.selfVideo;
    }
  }
};

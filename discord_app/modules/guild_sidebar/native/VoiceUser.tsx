// discord_app/modules/guild_sidebar/native/VoiceUser.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react from "../../../../_runtime/00019_react.js";
import EmbeddedActivitiesStore_mod from "../../activities/EmbeddedActivitiesStore.tsx";
import ApplicationStreamingStore from "../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import SessionsStore from "../../../stores/SessionsStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let channel, userIds;

let EmbeddedActivitiesStore = EmbeddedActivitiesStore_mod;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let closure_3;
      let collapsed;
      let deaf;
      let first;
      let isGuest;
      let member;
      let mute;
      let selfDeaf;
      let selfMute;
      let selfVideo;
      let sessionId;
      let tmp21;
      let tmp22;
      let tmp29;
      let tmp8;
      const tmp = channel;
      let tmp2 = sessionId;
      let obj = channel(sessionId[9]);
      const cResult = obj.c(43);
      channel = channel.channel;
      const user = channel.user;
      sessionId = channel.sessionId;
      ({ member, selfMute, selfDeaf, selfVideo, mute, deaf, collapsed, isGuest } = channel);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const id1 = AuthenticationStore.getId();
        cResult[0] = id1;
        first = id1;
      } else {
        first = cResult[0];
      }
      EmbeddedActivitiesStore = tmp7;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MediaEngineStore];
        cResult[1] = items;
        tmp8 = items;
      } else {
        tmp8 = cResult[1];
      }
      if ((cResult[2] === first) === user.id) {
        let tmp10;
        let tmp12;
        if (cResult[3] === user.id) {
          tmp10 = cResult[4];
        }
        const tmpResult = tmp(tmp2[10]);
        const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp8, tmp10);
        const localMute = stateFromStoresObject.localMute;
        const _Symbol = Symbol;
        const localVideo = stateFromStoresObject.localVideo;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [ApplicationStreamingStore];
          cResult[5] = items1;
          tmp12 = items1;
        } else {
          tmp12 = cResult[5];
        }
        if (cResult[6] === channel) {
          let tmp14;
          let tmp16;
          let tmp20;
          if (cResult[7] === user.id) {
            tmp14 = cResult[8];
          }
          const tmpResult5 = tmp(tmp2[10]);
          const stateFromStores = tmpResult5.useStateFromStores(tmp12, tmp14);
          const _Symbol2 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const items2 = [SessionsStore];
            cResult[9] = items2;
            tmp16 = items2;
          } else {
            tmp16 = cResult[9];
          }
          if (cResult[10] !== sessionId) {
            class R {
              constructor() {
                let tmp2;
                if (null != sessionId) {
                  const sessionById = SessionsStore.getSessionById(tmp);
                  let os;
                  if (sessionById != null) {
                    os = sessionById.clientInfo.os;
                  }
                  tmp2 = os;
                }
                return tmp2;
              }
            }
            cResult[10] = sessionId;
            cResult[11] = R;
          } else {
            class R {
              constructor() {
                let tmp2;
                if (null != sessionId) {
                  const sessionById = SessionsStore.getSessionById(tmp);
                  let os;
                  if (sessionById != null) {
                    os = sessionById.clientInfo.os;
                  }
                  tmp2 = os;
                }
                return tmp2;
              }
            }
          }
          const tmpResult6 = tmp(tmp2[10]);
          const stateFromStores1 = tmpResult6.useStateFromStores(tmp16, R);
          class O {
            constructor() {
              return ApplicationStreamingStore.getStreamForUser(user.id, channel.getGuildId());
            }
          }
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            class R {
              constructor() {
                let tmp2;
                if (null != sessionId) {
                  const sessionById = SessionsStore.getSessionById(tmp);
                  let os;
                  if (sessionById != null) {
                    os = sessionById.clientInfo.os;
                  }
                  tmp2 = os;
                }
                return tmp2;
              }
            }
            const items3 = [VoiceStateStore];
            cResult[12] = items3;
            tmp20 = items3;
          } else {
            class R {
              constructor() {
                let tmp2;
                if (null != sessionId) {
                  const sessionById = SessionsStore.getSessionById(tmp);
                  let os;
                  if (sessionById != null) {
                    os = sessionById.clientInfo.os;
                  }
                  tmp2 = os;
                }
                return tmp2;
              }
            }
          }
          if (cResult[13] === channel.id) {
            class R {
              constructor() {
                let tmp2;
                if (null != sessionId) {
                  const sessionById = SessionsStore.getSessionById(tmp);
                  let os;
                  if (sessionById != null) {
                    os = sessionById.clientInfo.os;
                  }
                  tmp2 = os;
                }
                return tmp2;
              }
            }
            const tmpResult7 = tmp(tmp2[10]);
            const stateFromStores2 = tmpResult7.useStateFromStores(tmp20, tmp22, tmp21);
            if ((cResult[17] === first) === user.id) {
              let tmp27;
              class R {
                constructor() {
                  let tmp2;
                  if (null != sessionId) {
                    const sessionById = SessionsStore.getSessionById(tmp);
                    let os;
                    if (sessionById != null) {
                      os = sessionById.clientInfo.os;
                    }
                    tmp2 = os;
                  }
                  return tmp2;
                }
              }
              if (!selfVideo) {
                class R {
                  constructor() {
                    let tmp2;
                    if (null != sessionId) {
                      const sessionById = SessionsStore.getSessionById(tmp);
                      let os;
                      if (sessionById != null) {
                        os = sessionById.clientInfo.os;
                      }
                      tmp2 = os;
                    }
                    return tmp2;
                  }
                }
              }
              const _Symbol3 = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                class R {
                  constructor() {
                    let tmp2;
                    if (null != sessionId) {
                      const sessionById = SessionsStore.getSessionById(tmp);
                      let os;
                      if (sessionById != null) {
                        os = sessionById.clientInfo.os;
                      }
                      tmp2 = os;
                    }
                    return tmp2;
                  }
                }
                const items4 = [EmbeddedActivitiesStore];
                cResult[20] = items4;
                tmp27 = items4;
              } else {
                class R {
                  constructor() {
                    let tmp2;
                    if (null != sessionId) {
                      const sessionById = SessionsStore.getSessionById(tmp);
                      let os;
                      if (sessionById != null) {
                        os = sessionById.clientInfo.os;
                      }
                      tmp2 = os;
                    }
                    return tmp2;
                  }
                }
              }
              if (cResult[21] === channel.id) {
                class R {
                  constructor() {
                    let tmp2;
                    if (null != sessionId) {
                      const sessionById = SessionsStore.getSessionById(tmp);
                      let os;
                      if (sessionById != null) {
                        os = sessionById.clientInfo.os;
                      }
                      tmp2 = os;
                    }
                    return tmp2;
                  }
                }
                const tmpResult8 = tmp(tmp2[10]);
                const stateFromStores3 = tmpResult8.useStateFromStores(tmp27, Q, tmp29);
                if (!mute) {
                  class R {
                    constructor() {
                      let tmp2;
                      if (null != sessionId) {
                        const sessionById = SessionsStore.getSessionById(tmp);
                        let os;
                        if (sessionById != null) {
                          os = sessionById.clientInfo.os;
                        }
                        tmp2 = os;
                      }
                      return tmp2;
                    }
                  }
                }
                class Q {
                  constructor() {
                    embeddedActivitiesForChannel = closure_3.getEmbeddedActivitiesForChannel(channel.id);
                    return embeddedActivitiesForChannel.find((userIds) => {
                      userIds = userIds.userIds;
                      return userIds.has(id.id);
                    });
                  }
                }
                const id = channel.id;
                class O {
                  constructor() {
                    return ApplicationStreamingStore.getStreamForUser(user.id, channel.getGuildId());
                  }
                }
                if (cResult[25] === channel.guild_id) {
                  class R {
                    constructor() {
                      let tmp2;
                      if (null != sessionId) {
                        const sessionById = SessionsStore.getSessionById(tmp);
                        let os;
                        if (sessionById != null) {
                          os = sessionById.clientInfo.os;
                        }
                        tmp2 = os;
                      }
                      return tmp2;
                    }
                  }
                }
                let obj2 = {
                  guildId: null,
                  channelId: null,
                  member,
                  user,
                  collapsed,
                  serverMute: mute,
                  serverDeaf: deaf,
                  mute: selfMute,
                  deaf: selfDeaf,
                  localMute,
                  video: selfVideo,
                  stream: undefined === id,
                  platform: stateFromStores1,
                  disabled: null == stateFromStores1,
                  isInEmbeddedActivity: null != stateFromStores3,
                  isGuest,
                  voicePlatform: stateFromStores2,
                };
                ({ guild_id: obj7.guildId, id: obj7.channelId } = channel);
                class P {
                  constructor() {
                    let obj;
                    if (closure_3) {
                      obj = { localMute: false, localDeaf: false, localVideo: MediaEngineStore.isVideoEnabled() };
                      const obj2 = {
                        localMute: false,
                        localDeaf: false,
                        localVideo: MediaEngineStore.isVideoEnabled(),
                      };
                    } else {
                      obj = { localMute: MediaEngineStore.isLocalMute(user.id), localDeaf: false, localVideo: false };
                    }
                    return obj;
                  }
                }
                cResult[25] = channel.guild_id;
                cResult[26] = channel.id;
                cResult[27] = collapsed;
                cResult[28] = deaf;
                cResult[29] = isGuest;
                cResult[30] = selfVideo;
                cResult[31] = localMute;
                cResult[32] = member;
                cResult[33] = stateFromStores1;
                cResult[34] = selfDeaf;
                cResult[35] = selfMute;
                cResult[36] = mute;
                cResult[37] = undefined === id;
                cResult[38] = null == stateFromStores1;
                cResult[39] = null != stateFromStores3;
                cResult[40] = user;
                cResult[41] = stateFromStores2;
                cResult[42] = tmp39;
              }
              class Q {
                constructor() {
                  embeddedActivitiesForChannel = closure_3.getEmbeddedActivitiesForChannel(channel.id);
                  return embeddedActivitiesForChannel.find((userIds) => {
                    userIds = userIds.userIds;
                    return userIds.has(id.id);
                  });
                }
              }
              const items5 = [user.id];
              class O {
                constructor() {
                  return ApplicationStreamingStore.getStreamForUser(user.id, channel.getGuildId());
                }
              }
              cResult[21] = channel.id;
              cResult[22] = user.id;
              cResult[23] = Q;
              cResult[24] = items5;
              tmp29 = items5;
            }
            cResult[17] = first === user.id;
            class O {
              constructor() {
                return ApplicationStreamingStore.getStreamForUser(user.id, channel.getGuildId());
              }
            }
            cResult[18] = sessionId;
            cResult[19] = null != sessionId && first === user.id;
          }
          const fn = function z() {
            return VoiceStateStore.getVoicePlatformForChannel(channel.id, user.id);
          };
          const items6 = [channel.id, user.id];
          cResult[13] = channel.id;
          cResult[14] = user.id;
          cResult[15] = items6;
          cResult[16] = fn;
          tmp21 = items6;
          tmp22 = fn;
        }
        class O {
          constructor() {
            return ApplicationStreamingStore.getStreamForUser(user.id, channel.getGuildId());
          }
        }
        cResult[6] = channel;
        cResult[7] = user.id;
        cResult[8] = O;
        tmp14 = O;
      }
      class P {
        constructor() {
          let obj;
          if (closure_3) {
            obj = { localMute: false, localDeaf: false, localVideo: MediaEngineStore.isVideoEnabled() };
            const obj2 = { localMute: false, localDeaf: false, localVideo: MediaEngineStore.isVideoEnabled() };
          } else {
            obj = { localMute: MediaEngineStore.isLocalMute(user.id), localDeaf: false, localVideo: false };
          }
          return obj;
        }
      }
      cResult[2] = first === user.id;
      cResult[3] = user.id;
      cResult[4] = P;
      tmp10 = P;
    }
  : (channel) => {
      let collapsed;
      let deaf;
      let isGuest;
      let localMute;
      let localVideo;
      let member;
      let mute;
      let selfDeaf;
      let selfMute;
      let selfVideo;
      let suppress;
      channel = channel.channel;
      const user = channel.user;
      const sessionId = channel.sessionId;
      ({ selfVideo, mute } = channel);
      ({ member, selfMute, selfDeaf, deaf, suppress, collapsed, isGuest } = channel);
      const tmp = AuthenticationStore.getId() === user.id;
      let closure_3 = tmp;
      let tmp2 = channel;
      let obj2 = channel(sessionId[10]);
      const items = [MediaEngineStore];
      const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
        let obj;
        if (closure_3) {
          obj = { localMute: false, localDeaf: false, localVideo: MediaEngineStore.isVideoEnabled() };
          const obj2 = { localMute: false, localDeaf: false, localVideo: MediaEngineStore.isVideoEnabled() };
        } else {
          obj = { localMute: MediaEngineStore.isLocalMute(user.id), localDeaf: false, localVideo: false };
        }
        return obj;
      });
      ({ localMute, localVideo } = stateFromStoresObject);
      const items1 = [ApplicationStreamingStore];
      const obj3 = channel(sessionId[10]);
      const stateFromStores = obj3.useStateFromStores(items1, () =>
        ApplicationStreamingStore.getStreamForUser(user.id, channel.getGuildId()),
      );
      const items2 = [SessionsStore];
      const obj4 = channel(sessionId[10]);
      const stateFromStores1 = obj4.useStateFromStores(items2, () => {
        let tmp2;
        if (null != sessionId) {
          const sessionById = SessionsStore.getSessionById(tmp);
          let os;
          if (sessionById != null) {
            os = sessionById.clientInfo.os;
          }
          tmp2 = os;
        }
        return tmp2;
      });
      const items3 = [VoiceStateStore];
      const items4 = [channel.id, user.id];
      let tmp8 = null != sessionId;
      const obj5 = channel(sessionId[10]);
      const stateFromStores2 = obj5.useStateFromStores(
        items3,
        () => VoiceStateStore.getVoicePlatformForChannel(channel.id, user.id),
        items4,
      );
      if (tmp8) {
        tmp8 = tmp;
      }
      if (tmp8) {
        tmp8 = sessionId !== AuthenticationStore.getSessionId();
      }
      const items5 = [closure_3];
      const items6 = [user.id, channel.id];
      const tmp2Result = tmp2(sessionId[10]);
      const stateFromStores3 = tmp2Result.useStateFromStores(
        items5,
        () => {
          let id;
          const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id);
          return embeddedActivitiesForChannel.find((userIds) => {
            userIds = userIds.userIds;
            return userIds.has(id.id);
          });
        },
        items6,
      );
      user(sessionId[11]);
      if (!mute) {
        mute = suppress;
      }
      if (!selfVideo) {
        selfVideo = localVideo;
      }
      let channelId;
      if (stateFromStores != null) {
        channelId = stateFromStores.channelId;
      }
      return (
        <tmp11
          guildId={channel.guild_id}
          channelId={channel.id}
          member={member}
          user={user}
          collapsed={collapsed}
          serverMute={mute}
          serverDeaf={deaf}
          mute={selfMute}
          deaf={selfDeaf}
          localMute={localMute}
          video={selfVideo}
          stream={channelId === channel.id}
          platform={stateFromStores1}
          disabled={null == stateFromStores1 && tmp8}
          isInEmbeddedActivity={null != stateFromStores3}
          isGuest={isGuest}
          voicePlatform={stateFromStores2}
        />
      );
    };
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUser.tsx");

export default tmp3;

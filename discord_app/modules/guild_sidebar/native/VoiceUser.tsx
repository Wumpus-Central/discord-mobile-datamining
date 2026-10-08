// === Module 16344: VoiceUser ===

// Module 16344 (VoiceUser)
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2062 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5893 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 2011 */;
import SessionsStore from "SessionsStore" /* 5110 */;
import VoiceStateStore from "VoiceStateStore" /* 5111 */;

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUser.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceUserConnected(channel) {
  const cResult = channel(sessionId[9]).c(43);
  channel = channel.channel;
  const user = channel.user;
  sessionId = channel.sessionId;
  ({ member, selfMute, selfDeaf, selfVideo, mute, deaf, collapsed, isGuest } = channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const id = AuthenticationStore.getId();
    cResult[0] = id;
    let first = id;
  } else {
    first = cResult[0];
  }
  EmbeddedActivitiesStore = tmp7;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    cResult[1] = items;
    let tmp8 = items;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === first === user.id) {
    if (cResult[3] === user.id) {
      let tmp10 = cResult[4];
    }
    const stateFromStoresObject = tmp(tmp2[10]).useStateFromStoresObject(tmp8, tmp10);
    const localMute = stateFromStoresObject.localMute;
    const _Symbol = Symbol;
    const localVideo = stateFromStoresObject.localVideo;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [ApplicationStreamingStore];
      cResult[5] = items1;
      let tmp12 = items1;
    } else {
      tmp12 = cResult[5];
    }
    if (cResult[6] === channel) {
      if (cResult[7] === user.id) {
        let tmp14 = cResult[8];
      }
      const stateFromStores = tmp(tmp2[10]).useStateFromStores(tmp12, tmp14);
      const _Symbol2 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [SessionsStore];
        cResult[9] = items2;
        let tmp16 = items2;
      } else {
        tmp16 = cResult[9];
      }
      if (cResult[10] !== sessionId) {
        class R {
          constructor() {
            tmp2 = undefined;
            if (null != sessionId) {
              tmp3 = closure_7;
              sessionById = closure_7.getSessionById(tmp);
              os = undefined;
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
            tmp2 = undefined;
            if (null != sessionId) {
              tmp3 = closure_7;
              sessionById = closure_7.getSessionById(tmp);
              os = undefined;
              if (sessionById != null) {
                os = sessionById.clientInfo.os;
              }
              tmp2 = os;
            }
            return tmp2;
          }
        }
      }
      const tmpResult5 = tmp(tmp2[10]);
      const stateFromStores1 = tmp(tmp2[10]).useStateFromStores(tmp16, R);
      class A {
        constructor() {
          return closure_4.getStreamForUser(user.id, channel.getGuildId());
        }
      }
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            tmp2 = undefined;
            if (null != sessionId) {
              tmp3 = closure_7;
              sessionById = closure_7.getSessionById(tmp);
              os = undefined;
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
        const tmp20 = items3;
      } else {
        class R {
          constructor() {
            tmp2 = undefined;
            if (null != sessionId) {
              tmp3 = closure_7;
              sessionById = closure_7.getSessionById(tmp);
              os = undefined;
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
            tmp2 = undefined;
            if (null != sessionId) {
              tmp3 = closure_7;
              sessionById = closure_7.getSessionById(tmp);
              os = undefined;
              if (sessionById != null) {
                os = sessionById.clientInfo.os;
              }
              tmp2 = os;
            }
            return tmp2;
          }
        }
        const stateFromStores2 = tmp(tmp2[10]).useStateFromStores(tmp20, tmp22, tmp21);
        if (cResult[17] === tmp7) {
          class R {
            constructor() {
              tmp2 = undefined;
              if (null != sessionId) {
                tmp3 = closure_7;
                sessionById = closure_7.getSessionById(tmp);
                os = undefined;
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
                tmp2 = undefined;
                if (null != sessionId) {
                  tmp3 = closure_7;
                  sessionById = closure_7.getSessionById(tmp);
                  os = undefined;
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
                tmp2 = undefined;
                if (null != sessionId) {
                  tmp3 = closure_7;
                  sessionById = closure_7.getSessionById(tmp);
                  os = undefined;
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
            const tmp27 = items4;
          } else {
            class R {
              constructor() {
                tmp2 = undefined;
                if (null != sessionId) {
                  tmp3 = closure_7;
                  sessionById = closure_7.getSessionById(tmp);
                  os = undefined;
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
                tmp2 = undefined;
                if (null != sessionId) {
                  tmp3 = closure_7;
                  sessionById = closure_7.getSessionById(tmp);
                  os = undefined;
                  if (sessionById != null) {
                    os = sessionById.clientInfo.os;
                  }
                  tmp2 = os;
                }
                return tmp2;
              }
            }
            const stateFromStores3 = tmp(tmp2[10]).useStateFromStores(tmp27, Q, tmp29);
            if (!mute) {
              class R {
                constructor() {
                  tmp2 = undefined;
                  if (null != sessionId) {
                    tmp3 = closure_7;
                    sessionById = closure_7.getSessionById(tmp);
                    os = undefined;
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
            class A {
              constructor() {
                return closure_4.getStreamForUser(user.id, channel.getGuildId());
              }
            }
            if (cResult[25] === channel.guild_id) {
              class R {
                constructor() {
                  tmp2 = undefined;
                  if (null != sessionId) {
                    tmp3 = closure_7;
                    sessionById = closure_7.getSessionById(tmp);
                    os = undefined;
                    if (sessionById != null) {
                      os = sessionById.clientInfo.os;
                    }
                    tmp2 = os;
                  }
                  return tmp2;
                }
              }
            }
            let obj2 = { guildId: null, channelId: null, member: null, user: null, collapsed: null, serverMute: null, serverDeaf: null, mute: null, deaf: null, localMute: null, video: null, stream: null, platform: null, disabled: null, isInEmbeddedActivity: null, isGuest: null, voicePlatform: null };
            ({ guild_id: obj7.guildId, id: obj7.channelId } = channel);
            obj2.member = member;
            obj2.user = user;
            obj2.collapsed = collapsed;
            obj2.serverMute = mute;
            obj2.serverDeaf = deaf;
            obj2.mute = selfMute;
            obj2.deaf = selfDeaf;
            obj2.localMute = localMute;
            obj2.video = selfVideo;
            obj2.stream = undefined === channel.id;
            obj2.platform = stateFromStores1;
            obj2.disabled = null == stateFromStores1;
            obj2.isInEmbeddedActivity = null != stateFromStores3;
            obj2.isGuest = isGuest;
            obj2.voicePlatform = stateFromStores2;
            class P {
              constructor() {
                if (closure_3) {
                  obj1 = { localMute: false, localDeaf: false, localVideo: null };
                  tmp3 = closure_6;
                  obj1.localVideo = closure_6.isVideoEnabled();
                  obj = obj1;
                } else {
                  obj = { localMute: null, localDeaf: false, localVideo: false };
                  tmp = closure_6;
                  tmp2 = user;
                  obj.localMute = closure_6.isLocalMute(user.id);
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
            cResult[37] = undefined === channel.id;
            cResult[38] = null == stateFromStores1;
            cResult[39] = null != stateFromStores3;
            cResult[40] = user;
            cResult[41] = stateFromStores2;
            cResult[42] = tmp39;
            const tmpResult8 = tmp(tmp2[10]);
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
          const items5 = [user.id, ];
          class A {
            constructor() {
              return closure_4.getStreamForUser(user.id, channel.getGuildId());
            }
          }
          cResult[21] = channel.id;
          cResult[22] = user.id;
          cResult[23] = Q;
          cResult[24] = items5;
          tmp29 = items5;
        }
        cResult[17] = tmp7;
        class A {
          constructor() {
            return closure_4.getStreamForUser(user.id, channel.getGuildId());
          }
        }
        cResult[18] = sessionId;
        cResult[19] = null != sessionId && tmp7;
        const tmpResult7 = tmp(tmp2[10]);
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
      const tmpResult6 = tmp(tmp2[10]);
    }
    class A {
      constructor() {
        return closure_4.getStreamForUser(user.id, channel.getGuildId());
      }
    }
    cResult[6] = channel;
    cResult[7] = user.id;
    cResult[8] = A;
    tmp14 = A;
    const tmpResult = tmp(tmp2[10]);
  }
  class P {
    constructor() {
      if (closure_3) {
        obj1 = { localMute: false, localDeaf: false, localVideo: null };
        tmp3 = closure_6;
        obj1.localVideo = closure_6.isVideoEnabled();
        obj = obj1;
      } else {
        obj = { localMute: null, localDeaf: false, localVideo: false };
        tmp = closure_6;
        tmp2 = user;
        obj.localMute = closure_6.isLocalMute(user.id);
      }
      return obj;
    }
  }
  cResult[2] = first === user.id;
  cResult[3] = user.id;
  cResult[4] = P;
  tmp10 = P;
  let obj = channel(sessionId[9]);
}) : (function VoiceUserConnected(channel) {
  channel = channel.channel;
  const user = channel.user;
  const sessionId = channel.sessionId;
  ({ selfVideo, mute } = channel);
  ({ member, selfMute, selfDeaf, deaf, suppress, collapsed, isGuest } = channel);
  const tmp = AuthenticationStore.getId() === user.id;
  closure_3 = tmp;
  const items = [MediaEngineStore];
  const stateFromStoresObject = channel(sessionId[10]).useStateFromStoresObject(items, () => {
    if (closure_3) {
      const obj2 = { localMute: false, localDeaf: false, localVideo: MediaEngineStore.isVideoEnabled() };
      let obj = obj2;
    } else {
      obj = { localMute: MediaEngineStore.isLocalMute(user.id), localDeaf: false, localVideo: false };
    }
    return obj;
  });
  ({ localMute, localVideo } = stateFromStoresObject);
  let obj2 = channel(sessionId[10]);
  let tmp2 = channel;
  const items1 = [ApplicationStreamingStore];
  const stateFromStores = channel(sessionId[10]).useStateFromStores(items1, () => ApplicationStreamingStore.getStreamForUser(user.id, channel.getGuildId()));
  const obj3 = channel(sessionId[10]);
  const items2 = [SessionsStore];
  const stateFromStores1 = channel(sessionId[10]).useStateFromStores(items2, () => {
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
  const obj4 = channel(sessionId[10]);
  const items3 = [VoiceStateStore];
  const items4 = [channel.id, user.id];
  let tmp8 = null != sessionId;
  const stateFromStores2 = channel(sessionId[10]).useStateFromStores(items3, () => VoiceStateStore.getVoicePlatformForChannel(channel.id, user.id), items4);
  if (tmp8) {
    tmp8 = tmp;
  }
  if (tmp8) {
    tmp8 = sessionId !== AuthenticationStore.getSessionId();
  }
  const obj5 = channel(sessionId[10]);
  const items5 = [closure_3];
  const items6 = [user.id, channel.id];
  const stateFromStores3 = tmp2(sessionId[10]).useStateFromStores(items5, () => {
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id);
    return embeddedActivitiesForChannel.find((userIds) => {
      userIds = userIds.userIds;
      return userIds.has(id.id);
    });
  }, items6);
  const obj6 = { guildId: channel.guild_id, channelId: channel.id, member, user, collapsed, serverMute: null, serverDeaf: null, mute: null, deaf: null, localMute: null, video: null, stream: null, platform: null, disabled: null, isInEmbeddedActivity: null, isGuest: null, voicePlatform: null };
  const tmp2Result = tmp2(sessionId[10]);
  if (!mute) {
    mute = suppress;
  }
  obj6.serverMute = mute;
  obj6.serverDeaf = deaf;
  obj6.mute = selfMute;
  obj6.deaf = selfDeaf;
  obj6.localMute = localMute;
  if (!selfVideo) {
    selfVideo = localVideo;
  }
  obj6.video = selfVideo;
  let channelId;
  if (stateFromStores != null) {
    channelId = stateFromStores.channelId;
  }
  obj6.stream = channelId === channel.id;
  obj6.platform = stateFromStores1;
  obj6.disabled = null == stateFromStores1 && tmp8;
  obj6.isInEmbeddedActivity = null != stateFromStores3;
  obj6.isGuest = isGuest;
  obj6.voicePlatform = stateFromStores2;
  return jsx(user(sessionId[11]), { guildId: channel.guild_id, channelId: channel.id, member, user, collapsed, serverMute: null, serverDeaf: null, mute: null, deaf: null, localMute: null, video: null, stream: null, platform: null, disabled: null, isInEmbeddedActivity: null, isGuest: null, voicePlatform: null });
});
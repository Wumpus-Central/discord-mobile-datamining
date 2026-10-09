// === Module 13307: useUserProfileActivityTabContent ===

// Module 13307 (useUserProfileActivityTabContent)
import LoggerDefault from "Logger" /* 3 */;
import ContentInventoryTypes from "ContentInventoryTypes" /* 8443 */;
import maybeFetchContentInventoryOutboxDefault from "maybeFetchContentInventoryOutbox" /* 13308 */;
import noop from "module_19" /* 19 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 8977 */;
import PresenceStore from "PresenceStore" /* 5107 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5756 */;
import VoiceStateStore from "VoiceStateStore" /* 5112 */;
import UserProfileStore from "UserProfileStore" /* 7314 */;

require = fn;
const StatusTypes = fn(1085).StatusTypes;
let closure_10 = new LoggerDefault("useUserProfileActivityTabContent");
const ReactCompilerGating = fn(558);
let tmp2 = new LoggerDefault("useUserProfileActivityTabContent");
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileActivityTabContent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useUserProfileActivityTabContent(userId) {
  const cResult = userId(voiceActivity[9]).c(30);
  userId = userId.userId;
  ({ guildId, currentUserId } = userId);
  if (cResult[0] !== userId) {
    const fn = function h() {
      const promise = maybeFetchContentInventoryOutboxDefault(userId);
      if (promise != null) {
        promise.catch((error) => {
          logger.log("Failed to fetch content inventory outbox for " + userId + ":", error);
        });
      }
    };
    const items = [userId];
    cResult[0] = userId;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp5 = items;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = noop.useEffect(tmp4, tmp5);
  const obj = userId(voiceActivity[9]);
  const tmp7 = voiceChannel;
  ({ live, recent, stream } = voiceChannel(voiceActivity[11])(userId));
  if (cResult[3] === guildId) {
    if (cResult[4] === userId) {
      let tmp9 = cResult[5];
    }
    const tmp10 = tmp7(tmp2[12])(tmp9);
    voiceChannel = tmp10.voiceChannel;
    voiceActivity = tmp10.voiceActivity;
    if (cResult[6] !== recent) {
      const found = recent.filter(tmp(tmp2[13]).isRecentActivityEntry);
      cResult[6] = recent;
      cResult[7] = found;
      let arr2 = found;
    } else {
      arr2 = cResult[7];
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [ContentInventoryOutboxStore];
      cResult[8] = items1;
      let tmp13 = items1;
    } else {
      tmp13 = cResult[8];
    }
    if (cResult[9] !== userId) {
      class T {
        constructor() {
          return closure_4.isFetchingUserOutbox(userId);
        }
      }
      cResult[9] = userId;
      cResult[10] = T;
    } else {
      class T {
        constructor() {
          return closure_4.isFetchingUserOutbox(userId);
        }
      }
    }
    const stateFromStores = tmp(tmp2[14]).useStateFromStores(tmp13, T);
    noop = tmp17;
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor() {
          return closure_4.isFetchingUserOutbox(userId);
        }
      }
      const items2 = [SelfPresenceStore, PresenceStore];
      cResult[11] = items2;
      const tmp18 = items2;
    } else {
      class T {
        constructor() {
          return closure_4.isFetchingUserOutbox(userId);
        }
      }
    }
    if (cResult[12] === userId === currentUserId) {
      class T {
        constructor() {
          return closure_4.isFetchingUserOutbox(userId);
        }
      }
      const stateFromStores1 = tmp(tmp2[14]).useStateFromStores(tmp18, B);
      const _Symbol3 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor() {
            return closure_4.isFetchingUserOutbox(userId);
          }
        }
        const items3 = [UserProfileStore];
        cResult[15] = items3;
        const tmp22 = items3;
      } else {
        class T {
          constructor() {
            return closure_4.isFetchingUserOutbox(userId);
          }
        }
      }
      if (cResult[16] !== userId) {
        class T {
          constructor() {
            return closure_4.isFetchingUserOutbox(userId);
          }
        }
        cResult[16] = userId;
        cResult[17] = tmp24;
      } else {
        class T {
          constructor() {
            return closure_4.isFetchingUserOutbox(userId);
          }
        }
      }
      const tmpResult4 = tmp(tmp2[14]);
      const stateFromStores2 = tmp(tmp2[14]).useStateFromStores(tmp22, tmp24);
      const _Symbol4 = Symbol;
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor() {
            return closure_4.isFetchingUserOutbox(userId);
          }
        }
        const items4 = [VoiceStateStore];
        cResult[18] = items4;
      } else {
        class T {
          constructor() {
            return closure_4.isFetchingUserOutbox(userId);
          }
        }
      }
      if (cResult[19] !== voiceChannel) {
        class T {
          constructor() {
            return closure_4.isFetchingUserOutbox(userId);
          }
        }
        cResult[19] = voiceChannel;
        cResult[20] = tmp28;
      } else {
        class T {
          constructor() {
            return closure_4.isFetchingUserOutbox(userId);
          }
        }
      }
      tmp(tmp2[14]);
      if (cResult[21] === live) {
        class T {
          constructor() {
            return closure_4.isFetchingUserOutbox(userId);
          }
        }
        let tmp32 = stateFromStores1;
        if (!stateFromStores1) {
          class T {
            constructor() {
              return closure_4.isFetchingUserOutbox(userId);
            }
          }
        }
        if (tmp32) {
          class T {
            constructor() {
              return closure_4.isFetchingUserOutbox(userId);
            }
          }
          tmp32 = null != voiceChannel;
        }
        if (tmp32) {
          class T {
            constructor() {
              return closure_4.isFetchingUserOutbox(userId);
            }
          }
        }
        let tmp33 = !tmp32;
        if (!tmp32) {
          class T {
            constructor() {
              return closure_4.isFetchingUserOutbox(userId);
            }
          }
        }
        if (tmp33) {
          class T {
            constructor() {
              return closure_4.isFetchingUserOutbox(userId);
            }
          }
          let tmp34 = live.length > 0;
          if (!tmp34) {
            class T {
              constructor() {
                return closure_4.isFetchingUserOutbox(userId);
              }
            }
            if (!stateFromStores2) {
              class T {
                constructor() {
                  return closure_4.isFetchingUserOutbox(userId);
                }
              }
              const tmp35 = null != voiceChannel;
            }
            tmp34 = tmp35;
          }
          if (!tmp34) {
            class T {
              constructor() {
                return closure_4.isFetchingUserOutbox(userId);
              }
            }
            if (!stateFromStores2) {
              class T {
                constructor() {
                  return closure_4.isFetchingUserOutbox(userId);
                }
              }
              let tmp36 = null != stream;
            }
            if (tmp36) {
              class T {
                constructor() {
                  return closure_4.isFetchingUserOutbox(userId);
                }
              }
              if (voiceChannel != null) {
                class T {
                  constructor() {
                    return closure_4.isFetchingUserOutbox(userId);
                  }
                }
              }
              tmp36 = stream.channelId !== tmp37;
            }
            tmp34 = tmp36;
          }
          tmp33 = tmp34;
        }
        if (cResult[24] === tmp33) {
          class T {
            constructor() {
              return closure_4.isFetchingUserOutbox(userId);
            }
          }
        }
        const obj2 = { recent: arr2, isFetching: stateFromStores, isCurrentUser: tmp17, hasCurrentActivity: tmp33, hasRecentActivity: arr2.length > 0 };
        cResult[24] = tmp33;
        cResult[25] = arr2.length > 0;
        class B {
          constructor() {
            if (closure_3) {
              tmp4 = closure_6;
              status = closure_6.getStatus();
            } else {
              tmp = closure_5;
              tmp2 = userId;
              status = closure_5.getStatus(userId);
            }
            tmp5 = status === StatusTypes.OFFLINE || status === StatusTypes.INVISIBLE;
            return tmp5;
          }
        }
        cResult[26] = tmp17;
        cResult[27] = stateFromStores;
        cResult[28] = arr2;
        cResult[29] = obj2;
      }
      if (null != voiceActivity) {
        class T {
          constructor() {
            return closure_4.isFetchingUserOutbox(userId);
          }
        }
      }
      cResult[21] = live;
      class B {
        constructor() {
          if (closure_3) {
            tmp4 = closure_6;
            status = closure_6.getStatus();
          } else {
            tmp = closure_5;
            tmp2 = userId;
            status = closure_5.getStatus(userId);
          }
          tmp5 = status === StatusTypes.OFFLINE || status === StatusTypes.INVISIBLE;
          return tmp5;
        }
      }
      cResult[23] = live;
      const tmpResult5 = tmp(tmp2[14]);
    }
    class B {
      constructor() {
        if (closure_3) {
          tmp4 = closure_6;
          status = closure_6.getStatus();
        } else {
          tmp = closure_5;
          tmp2 = userId;
          status = closure_5.getStatus(userId);
        }
        tmp5 = status === StatusTypes.OFFLINE || status === StatusTypes.INVISIBLE;
        return tmp5;
      }
    }
    cResult[12] = userId === currentUserId;
    cResult[13] = userId;
    cResult[14] = B;
    const tmpResult = tmp(tmp2[14]);
  }
  const obj3 = { userId: null, guildId };
  cResult[3] = guildId;
  cResult[4] = userId;
  cResult[5] = obj3;
  tmp9 = obj3;
  const tmp8 = voiceChannel(voiceActivity[11])(userId);
}) : (function useUserProfileActivityTabContent(userId) {
  userId = userId.userId;
  recent = undefined;
  let voiceChannel;
  let voiceActivity;
  closure_4 = undefined;
  const items = [userId];
  ({ currentUserId, guildId } = userId);
  const effect = voiceActivity.useEffect(() => {
    const promise = maybeFetchContentInventoryOutboxDefault(userId);
    if (promise != null) {
      promise.catch((error) => {
        logger.log("Failed to fetch content inventory outbox for " + userId + ":", error);
      });
    }
  }, items);
  const tmp2 = recent(voiceChannel[11])(userId);
  ({ live, recent } = tmp2);
  const stream = tmp2.stream;
  const tmp3 = recent(voiceChannel[12])({ userId, guildId });
  voiceChannel = tmp3.voiceChannel;
  voiceActivity = tmp3.voiceActivity;
  const items1 = [recent];
  const memo = voiceActivity.useMemo(() => recent.filter(ContentInventoryTypes.isRecentActivityEntry), items1);
  const items2 = [closure_4];
  closure_4 = tmp5;
  const stateFromStores = userId(voiceChannel[14]).useStateFromStores(items2, () => ContentInventoryOutboxStore.isFetchingUserOutbox(userId));
  const obj = userId(voiceChannel[14]);
  const items3 = [SelfPresenceStore, PresenceStore];
  const stateFromStores1 = userId(voiceChannel[14]).useStateFromStores(items3, () => {
    if (closure_4) {
      let status = SelfPresenceStore.getStatus();
    } else {
      status = PresenceStore.getStatus(userId);
    }
    return status === StatusTypes.OFFLINE || status === StatusTypes.INVISIBLE;
  });
  const obj2 = userId(voiceChannel[14]);
  const items4 = [UserProfileStore];
  const stateFromStores2 = userId(voiceChannel[14]).useStateFromStores(items4, () => {
    const userProfile = UserProfileStore.getUserProfile(userId);
    let _private;
    if (userProfile != null) {
      _private = userProfile.private;
    }
    return true === _private;
  });
  const obj3 = userId(voiceChannel[14]);
  const items5 = [VoiceStateStore];
  let found = live;
  const stateFromStores3 = userId(voiceChannel[14]).useStateFromStores(items5, () => {
    let isInChannelResult = null != voiceChannel;
    if (isInChannelResult) {
      isInChannelResult = VoiceStateStore.isInChannel(tmp.id);
    }
    return isInChannelResult;
  });
  if (null != voiceActivity) {
    found = live.filter((item) => item !== voiceActivity);
  }
  let tmp9 = stateFromStores1;
  if (!stateFromStores1) {
    tmp9 = stateFromStores2;
  }
  if (tmp9) {
    tmp9 = null != voiceChannel;
  }
  if (tmp9) {
    tmp9 = stateFromStores3;
  }
  let tmp10 = !tmp9;
  if (!tmp9) {
    tmp10 = !stateFromStores1;
  }
  if (tmp10) {
    let tmp11 = found.length > 0;
    if (!tmp11) {
      let tmp12 = !stateFromStores2;
      if (!stateFromStores2) {
        tmp12 = null != voiceChannel;
      }
      tmp11 = tmp12;
    }
    if (!tmp11) {
      let tmp13 = !stateFromStores2;
      if (!stateFromStores2) {
        tmp13 = null != stream;
      }
      if (tmp13) {
        let id;
        if (voiceChannel != null) {
          id = voiceChannel.id;
        }
        tmp13 = stream.channelId !== id;
      }
      tmp11 = tmp13;
    }
    tmp10 = tmp11;
  }
  return { recent: memo, isFetching: stateFromStores, isCurrentUser: userId === currentUserId, hasCurrentActivity: tmp10, hasRecentActivity: memo.length > 0 };
});
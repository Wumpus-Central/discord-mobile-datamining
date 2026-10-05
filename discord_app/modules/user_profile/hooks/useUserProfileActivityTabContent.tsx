// === Module 12916: useUserProfileActivityTabContent ===

// Module 12916 (useUserProfileActivityTabContent)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 1085 */;
import ContentInventoryTypes from "ContentInventoryTypes" /* 8017 */;
import maybeFetchContentInventoryOutboxDefault from "maybeFetchContentInventoryOutbox" /* 12917 */;
import react_mod from "react" /* 19 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 8447 */;
import PresenceStore from "PresenceStore" /* 4930 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5438 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import UserProfileStore from "UserProfileStore" /* 7111 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let userId;

let react = react_mod;
const StatusTypes = Constants.StatusTypes;
let tmp2 = new LoggerDefault("useUserProfileActivityTabContent");
let closure_10 = tmp2;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let closure_3;
  let currentUserId;
  let guildId;
  let live;
  let logger;
  let recent;
  let stream;
  let tmp36;
  let tmp4;
  let tmp5;
  let voiceActivity;
  let voiceChannel;
  const tmp = userId;
  const obj = userId(voiceActivity[9]);
  const cResult = obj.c(30);
  userId = userId.userId;
  ({ guildId, currentUserId } = userId);
  if (cResult[0] !== userId) {
    const fn = function f() {
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
    tmp5 = items;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = react.useEffect(tmp4, tmp5);
  ({ live, recent, stream } = voiceChannel(voiceActivity[11])(userId));
  voiceChannel(voiceActivity[11])(userId);
  const tmp7 = voiceChannel;
  if (cResult[3] === guildId) {
    let tmp9;
    let arr2;
    let tmp13;
    let tmp18;
    if (cResult[4] === userId) {
      tmp9 = cResult[5];
    }
    const tmp10 = tmp7(voiceActivity[12])(tmp9);
    voiceChannel = tmp10.voiceChannel;
    voiceActivity = tmp10.voiceActivity;
    if (cResult[6] !== recent) {
      const found = recent.filter(tmp(tmp2[13]).isRecentActivityEntry);
      cResult[6] = recent;
      cResult[7] = found;
      arr2 = found;
    } else {
      arr2 = cResult[7];
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [ContentInventoryOutboxStore];
      cResult[8] = items1;
      tmp13 = items1;
    } else {
      tmp13 = cResult[8];
    }
    if (cResult[9] !== userId) {
      class L {
        constructor() {
          return ContentInventoryOutboxStore.isFetchingUserOutbox(userId);
        }
      }
      cResult[9] = userId;
      cResult[10] = L;
    } else {
      class L {
        constructor() {
          return ContentInventoryOutboxStore.isFetchingUserOutbox(userId);
        }
      }
    }
    const tmpResult = tmp(voiceActivity[14]);
    const stateFromStores = tmpResult.useStateFromStores(tmp13, L);
    react = tmp17;
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class L {
        constructor() {
          return ContentInventoryOutboxStore.isFetchingUserOutbox(userId);
        }
      }
      const items2 = [SelfPresenceStore, PresenceStore];
      cResult[11] = items2;
      tmp18 = items2;
    } else {
      class L {
        constructor() {
          return ContentInventoryOutboxStore.isFetchingUserOutbox(userId);
        }
      }
    }
    if (cResult[12] === userId === currentUserId) {
      let tmp22;
      class L {
        constructor() {
          return ContentInventoryOutboxStore.isFetchingUserOutbox(userId);
        }
      }
      const tmpResult4 = tmp(voiceActivity[14]);
      const stateFromStores1 = tmpResult4.useStateFromStores(tmp18, B);
      const _Symbol3 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            return ContentInventoryOutboxStore.isFetchingUserOutbox(userId);
          }
        }
        const items3 = [UserProfileStore];
        cResult[15] = items3;
        tmp22 = items3;
      } else {
        class L {
          constructor() {
            return ContentInventoryOutboxStore.isFetchingUserOutbox(userId);
          }
        }
      }
      if (cResult[16] !== userId) {
        class L {
          constructor() {
            return ContentInventoryOutboxStore.isFetchingUserOutbox(userId);
          }
        }
        cResult[16] = userId;
        cResult[17] = tmp24;
      } else {
        class L {
          constructor() {
            return ContentInventoryOutboxStore.isFetchingUserOutbox(userId);
          }
        }
      }
      const tmpResult5 = tmp(voiceActivity[14]);
      const stateFromStores2 = tmpResult5.useStateFromStores(tmp22, tmp24);
      const _Symbol4 = Symbol;
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            return ContentInventoryOutboxStore.isFetchingUserOutbox(userId);
          }
        }
        const items4 = [VoiceStateStore];
        cResult[18] = items4;
      } else {
        class L {
          constructor() {
            return ContentInventoryOutboxStore.isFetchingUserOutbox(userId);
          }
        }
      }
      if (cResult[19] !== voiceChannel) {
        class L {
          constructor() {
            return ContentInventoryOutboxStore.isFetchingUserOutbox(userId);
          }
        }
        cResult[19] = voiceChannel;
        cResult[20] = tmp28;
      } else {
        class L {
          constructor() {
            return ContentInventoryOutboxStore.isFetchingUserOutbox(userId);
          }
        }
      }
      tmp(voiceActivity[14]);
      if (cResult[21] === live) {
        class L {
          constructor() {
            return ContentInventoryOutboxStore.isFetchingUserOutbox(userId);
          }
        }
        let tmp32 = stateFromStores1 || stateFromStores2;
        if (tmp32) {
          class L {
            constructor() {
              return ContentInventoryOutboxStore.isFetchingUserOutbox(userId);
            }
          }
          tmp32 = null != voiceChannel;
        }
        if (tmp32) {
          class L {
            constructor() {
              return ContentInventoryOutboxStore.isFetchingUserOutbox(userId);
            }
          }
        }
        let tmp33 = !tmp32 && !stateFromStores1;
        if (tmp33) {
          class L {
            constructor() {
              return ContentInventoryOutboxStore.isFetchingUserOutbox(userId);
            }
          }
          let tmp34 = live.length > 0;
          if (!tmp34) {
            class L {
              constructor() {
                return ContentInventoryOutboxStore.isFetchingUserOutbox(userId);
              }
            }
            if (tmp35) {
              class L {
                constructor() {
                  return ContentInventoryOutboxStore.isFetchingUserOutbox(userId);
                }
              }
            }
            tmp34 = tmp35;
          }
          if (!tmp34) {
            class L {
              constructor() {
                return ContentInventoryOutboxStore.isFetchingUserOutbox(userId);
              }
            }
            if (tmp36) {
              class L {
                constructor() {
                  return ContentInventoryOutboxStore.isFetchingUserOutbox(userId);
                }
              }
              tmp36 = null != stream;
            }
            if (tmp36) {
              class L {
                constructor() {
                  return ContentInventoryOutboxStore.isFetchingUserOutbox(userId);
                }
              }
              const channelId = stream.channelId;
              if (voiceChannel != null) {
                class L {
                  constructor() {
                    return ContentInventoryOutboxStore.isFetchingUserOutbox(userId);
                  }
                }
              }
              tmp36 = channelId !== tmp37;
            }
            tmp34 = tmp36;
          }
          tmp33 = tmp34;
        }
        if (cResult[24] === tmp33) {
          class L {
            constructor() {
              return ContentInventoryOutboxStore.isFetchingUserOutbox(userId);
            }
          }
        }
        const obj2 = { recent: arr2, isFetching: stateFromStores, isCurrentUser: userId === currentUserId, hasCurrentActivity: tmp33, hasRecentActivity: arr2.length > 0 };
        cResult[24] = tmp33;
        cResult[25] = arr2.length > 0;
        cResult[26] = userId === currentUserId;
        class B {
          constructor() {
            let status;
            if (closure_3) {
              status = SelfPresenceStore.getStatus();
            } else {
              status = PresenceStore.getStatus(userId);
            }
            return status === StatusTypes.OFFLINE || status === StatusTypes.INVISIBLE;
          }
        }
        cResult[27] = stateFromStores;
        cResult[28] = arr2;
        cResult[29] = obj2;
      }
      if (null != voiceActivity) {
        class L {
          constructor() {
            return ContentInventoryOutboxStore.isFetchingUserOutbox(userId);
          }
        }
      }
      cResult[21] = live;
      class B {
        constructor() {
          let status;
          if (closure_3) {
            status = SelfPresenceStore.getStatus();
          } else {
            status = PresenceStore.getStatus(userId);
          }
          return status === StatusTypes.OFFLINE || status === StatusTypes.INVISIBLE;
        }
      }
      cResult[23] = live;
    }
    class B {
      constructor() {
        let status;
        if (closure_3) {
          status = SelfPresenceStore.getStatus();
        } else {
          status = PresenceStore.getStatus(userId);
        }
        return status === StatusTypes.OFFLINE || status === StatusTypes.INVISIBLE;
      }
    }
    cResult[12] = userId === currentUserId;
    cResult[13] = userId;
    cResult[14] = B;
  }
  const obj3 = { userId: null, guildId };
  cResult[3] = guildId;
  cResult[4] = userId;
  cResult[5] = obj3;
  tmp9 = obj3;
}) : ((userId) => {
  let currentUserId;
  let guildId;
  let live;
  let logger;
  let recent;
  userId = userId.userId;
  recent = undefined;
  let voiceChannel;
  let voiceActivity;
  let closure_4;
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
  const obj = userId(voiceChannel[14]);
  const stateFromStores = obj.useStateFromStores(items2, () => ContentInventoryOutboxStore.isFetchingUserOutbox(userId));
  const items3 = [SelfPresenceStore, PresenceStore];
  const obj2 = userId(voiceChannel[14]);
  const stateFromStores1 = obj2.useStateFromStores(items3, () => {
    let status;
    if (closure_4) {
      status = SelfPresenceStore.getStatus();
    } else {
      status = PresenceStore.getStatus(userId);
    }
    return status === StatusTypes.OFFLINE || status === StatusTypes.INVISIBLE;
  });
  const items4 = [UserProfileStore];
  const obj3 = userId(voiceChannel[14]);
  const stateFromStores2 = obj3.useStateFromStores(items4, () => {
    const userProfile = UserProfileStore.getUserProfile(userId);
    let _private;
    if (userProfile != null) {
      _private = userProfile.private;
    }
    return true === _private;
  });
  const items5 = [VoiceStateStore];
  let found = live;
  const obj4 = userId(voiceChannel[14]);
  const stateFromStores3 = obj4.useStateFromStores(items5, () => {
    const isInChannelResult = null != voiceChannel && VoiceStateStore.isInChannel(tmp.id);
    return isInChannelResult;
  });
  if (null != voiceActivity) {
    found = live.filter((item) => item !== voiceActivity);
  }
  let tmp10 = !((stateFromStores1 || stateFromStores2) && null != voiceChannel && stateFromStores3) && !stateFromStores1;
  if (tmp10) {
    let tmp11 = found.length > 0;
    if (!tmp11) {
      tmp11 = !stateFromStores2 && null != voiceChannel;
    }
    if (!tmp11) {
      let tmp13 = !stateFromStores2 && null != stream;
      if (tmp13) {
        let id;
        const channelId = stream.channelId;
        if (voiceChannel != null) {
          id = voiceChannel.id;
        }
        tmp13 = channelId !== id;
      }
      tmp11 = tmp13;
    }
    tmp10 = tmp11;
  }
  return { recent: memo, isFetching: stateFromStores, isCurrentUser: userId === currentUserId, hasCurrentActivity: tmp10, hasRecentActivity: memo.length > 0 };
});
const result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileActivityTabContent.tsx");

export default tmp3;
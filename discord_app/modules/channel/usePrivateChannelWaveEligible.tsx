// === Module 16004: usePrivateChannelWaveEligible ===

// Module 16004 (usePrivateChannelWaveEligible)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef4467 from "module_4467" /* 4467 */;
import MessageStore from "MessageStore" /* 5116 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;

const require = globalThis.__r;

const require = fn;
const ChannelFlags = fn(2058).ChannelFlags;
const MessageTypes = fn(1085).MessageTypes;
let c7 = 1814400000;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/usePrivateChannelWaveEligible.tsx");

export const usePrivateChannelWaveEligible = ReactCompilerGating.isReactCompilerEnabled() ? ((isDM, arg1) => {
  const _require = isDM;
  const cResult = require("c").c(21);
  if (cResult[0] !== isDM) {
    let tmp5 = isDM.isDM() && !isDM.isSystemDM();
    if (tmp5) {
      const rawRecipients = isDM.rawRecipients;
      tmp5 = !rawRecipients.some((bot) => bot.bot);
    }
    cResult[0] = isDM;
    cResult[1] = tmp5;
    let tmp4 = tmp5;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === isDM) {
    if (cResult[3] === tmp4) {
      let tmp6 = cResult[4];
    }
    importDefault = tmp6;
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [RelationshipStore];
      cResult[5] = items;
      let tmp9 = items;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] !== tmp6) {
      class F {
        constructor() {
          isFriendResult = null != closure_1;
          if (isFriendResult) {
            tmp3 = closure_4;
            isFriendResult = closure_4.isFriend(tmp);
          }
          return isFriendResult;
        }
      }
      cResult[6] = tmp6;
      cResult[7] = F;
    } else {
      class F {
        constructor() {
          isFriendResult = null != closure_1;
          if (isFriendResult) {
            tmp3 = closure_4;
            isFriendResult = closure_4.isFriend(tmp);
          }
          return isFriendResult;
        }
      }
    }
    const _Symbol2 = Symbol;
    const stateFromStores = tmp(504).useStateFromStores(tmp9, F);
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          isFriendResult = null != closure_1;
          if (isFriendResult) {
            tmp3 = closure_4;
            isFriendResult = closure_4.isFriend(tmp);
          }
          return isFriendResult;
        }
      }
      const items1 = [RelationshipStore];
      cResult[8] = items1;
      const tmp13 = items1;
    } else {
      class F {
        constructor() {
          isFriendResult = null != closure_1;
          if (isFriendResult) {
            tmp3 = closure_4;
            isFriendResult = closure_4.isFriend(tmp);
          }
          return isFriendResult;
        }
      }
    }
    if (cResult[9] !== tmp6) {
      class F {
        constructor() {
          isFriendResult = null != closure_1;
          if (isFriendResult) {
            tmp3 = closure_4;
            isFriendResult = closure_4.isFriend(tmp);
          }
          return isFriendResult;
        }
      }
      cResult[9] = tmp6;
      cResult[10] = tmp15;
    } else {
      class F {
        constructor() {
          isFriendResult = null != closure_1;
          if (isFriendResult) {
            tmp3 = closure_4;
            isFriendResult = closure_4.isFriend(tmp);
          }
          return isFriendResult;
        }
      }
    }
    const tmpResult = tmp(504);
    const _Symbol3 = Symbol;
    const stateFromStores1 = tmp(504).useStateFromStores(tmp13, tmp15);
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          isFriendResult = null != closure_1;
          if (isFriendResult) {
            tmp3 = closure_4;
            isFriendResult = closure_4.isFriend(tmp);
          }
          return isFriendResult;
        }
      }
      const items2 = [MessageStore];
      cResult[11] = items2;
      const tmp17 = items2;
    } else {
      class F {
        constructor() {
          isFriendResult = null != closure_1;
          if (isFriendResult) {
            tmp3 = closure_4;
            isFriendResult = closure_4.isFriend(tmp);
          }
          return isFriendResult;
        }
      }
    }
    if (cResult[12] !== isDM.id) {
      class C {
        constructor() {
          messages = closure_3.getMessages(closure_0.id);
          tmp = 1 === messages.length;
          if (tmp) {
            firstResult = messages.first();
            tmp3 = null;
            type = undefined;
            if (firstResult != null) {
              type = firstResult.type;
            }
            tmp5 = MessageTypes;
            tmp = type === MessageTypes.FRIEND_REQUEST_ACCEPTED;
          }
          return tmp;
        }
      }
      cResult[12] = isDM.id;
      cResult[13] = C;
    } else {
      class C {
        constructor() {
          messages = closure_3.getMessages(closure_0.id);
          tmp = 1 === messages.length;
          if (tmp) {
            firstResult = messages.first();
            tmp3 = null;
            type = undefined;
            if (firstResult != null) {
              type = firstResult.type;
            }
            tmp5 = MessageTypes;
            tmp = type === MessageTypes.FRIEND_REQUEST_ACCEPTED;
          }
          return tmp;
        }
      }
    }
    const tmpResult6 = tmp(504);
    const stateFromStores2 = tmp(504).useStateFromStores(tmp17, C);
    if (cResult[14] !== isDM) {
      class C {
        constructor() {
          messages = closure_3.getMessages(closure_0.id);
          tmp = 1 === messages.length;
          if (tmp) {
            firstResult = messages.first();
            tmp3 = null;
            type = undefined;
            if (firstResult != null) {
              type = firstResult.type;
            }
            tmp5 = MessageTypes;
            tmp = type === MessageTypes.FRIEND_REQUEST_ACCEPTED;
          }
          return tmp;
        }
      }
      const hasFlagResult = isDM.hasFlag(ChannelFlags.HAS_ONLY_SYSTEM_MESSAGES);
      cResult[14] = isDM;
      cResult[15] = hasFlagResult;
    } else {
      class C {
        constructor() {
          messages = closure_3.getMessages(closure_0.id);
          tmp = 1 === messages.length;
          if (tmp) {
            firstResult = messages.first();
            tmp3 = null;
            type = undefined;
            if (firstResult != null) {
              type = firstResult.type;
            }
            tmp5 = MessageTypes;
            tmp = type === MessageTypes.FRIEND_REQUEST_ACCEPTED;
          }
          return tmp;
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor() {
          messages = closure_3.getMessages(closure_0.id);
          tmp = 1 === messages.length;
          if (tmp) {
            firstResult = messages.first();
            tmp3 = null;
            type = undefined;
            if (firstResult != null) {
              type = firstResult.type;
            }
            tmp5 = MessageTypes;
            tmp = type === MessageTypes.FRIEND_REQUEST_ACCEPTED;
          }
          return tmp;
        }
      }
      const items3 = [MessageStore];
      cResult[16] = items3;
      const tmp22 = items3;
    } else {
      class C {
        constructor() {
          messages = closure_3.getMessages(closure_0.id);
          tmp = 1 === messages.length;
          if (tmp) {
            firstResult = messages.first();
            tmp3 = null;
            type = undefined;
            if (firstResult != null) {
              type = firstResult.type;
            }
            tmp5 = MessageTypes;
            tmp = type === MessageTypes.FRIEND_REQUEST_ACCEPTED;
          }
          return tmp;
        }
      }
    }
    if (cResult[17] !== isDM.id) {
      class W {
        constructor() {
          return closure_3.hasCurrentUserSentWaveBlockingMessage(closure_0.id);
        }
      }
      cResult[17] = isDM.id;
      cResult[18] = W;
    } else {
      class W {
        constructor() {
          return closure_3.hasCurrentUserSentWaveBlockingMessage(closure_0.id);
        }
      }
    }
    const tmpResult7 = tmp(504);
    const stateFromStores3 = tmp(504).useStateFromStores(tmp22, W);
    if (cResult[19] !== isDM.id) {
      class W {
        constructor() {
          return closure_3.hasCurrentUserSentWaveBlockingMessage(closure_0.id);
        }
      }
      const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(isDM.id);
      const tmpResult9 = tmp(4558);
      const isWithinIntervalResult = tmpResult9.isWithinInterval(_modDef4467(), _modDef4467(extractTimestampResult), c7);
      cResult[19] = isDM.id;
      cResult[20] = isWithinIntervalResult;
      const tmp27 = _modDef4467();
    } else {
      class W {
        constructor() {
          return closure_3.hasCurrentUserSentWaveBlockingMessage(closure_0.id);
        }
      }
    }
    const tmpResult8 = tmp(504);
    const strangerDangerWarning = tmp(9798).useStrangerDangerWarning(isDM.id);
    if (tmp4) {
      class W {
        constructor() {
          return closure_3.hasCurrentUserSentWaveBlockingMessage(closure_0.id);
        }
      }
    }
    if (tmp4) {
      class W {
        constructor() {
          return closure_3.hasCurrentUserSentWaveBlockingMessage(closure_0.id);
        }
      }
    }
    if (tmp4) {
      class W {
        constructor() {
          return closure_3.hasCurrentUserSentWaveBlockingMessage(closure_0.id);
        }
      }
      if (!tmp20) {
        class W {
          constructor() {
            return closure_3.hasCurrentUserSentWaveBlockingMessage(closure_0.id);
          }
        }
      }
      tmp4 = tmp20;
    }
    if (tmp4) {
      class W {
        constructor() {
          return closure_3.hasCurrentUserSentWaveBlockingMessage(closure_0.id);
        }
      }
    }
    if (tmp4) {
      class W {
        constructor() {
          return closure_3.hasCurrentUserSentWaveBlockingMessage(closure_0.id);
        }
      }
    }
    if (tmp4) {
      class W {
        constructor() {
          return closure_3.hasCurrentUserSentWaveBlockingMessage(closure_0.id);
        }
      }
      tmp4 = null == strangerDangerWarning;
    }
    return tmp4;
  }
  if (tmp4) {
    class W {
      constructor() {
        return closure_3.hasCurrentUserSentWaveBlockingMessage(closure_0.id);
      }
    }
  }
  cResult[2] = isDM;
  cResult[3] = tmp4;
  cResult[4] = null;
  tmp6 = tmp7;
  const obj = require("c");
}) : ((isDM, arg1) => {
  const _require = isDM;
  let tmp = isDM.isDM() && !isDM.isSystemDM();
  if (tmp) {
    const rawRecipients = isDM.rawRecipients;
    tmp = !rawRecipients.some((bot) => bot.bot);
  }
  let recipientId = null;
  if (tmp) {
    recipientId = isDM.getRecipientId();
  }
  const items = [RelationshipStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let isFriendResult = null != recipientId;
    if (isFriendResult) {
      isFriendResult = RelationshipStore.isFriend(tmp);
    }
    return isFriendResult;
  });
  const obj = require("initialize");
  const items1 = [RelationshipStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    let isIgnoredResult = null != recipientId;
    if (isIgnoredResult) {
      isIgnoredResult = RelationshipStore.isIgnored(tmp);
    }
    return isIgnoredResult;
  });
  const obj2 = require("initialize");
  const items2 = [MessageStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () => {
    const messages = MessageStore.getMessages(isDM.id);
    let tmp = 1 === messages.length;
    if (tmp) {
      const firstResult = messages.first();
      let type;
      if (firstResult != null) {
        type = firstResult.type;
      }
      tmp = type === MessageTypes.FRIEND_REQUEST_ACCEPTED;
    }
    return tmp;
  });
  let hasFlagResult = isDM.hasFlag(ChannelFlags.HAS_ONLY_SYSTEM_MESSAGES);
  const obj3 = require("initialize");
  const items3 = [MessageStore];
  const stateFromStores3 = require("initialize").useStateFromStores(items3, () => MessageStore.hasCurrentUserSentWaveBlockingMessage(isDM.id));
  const obj4 = require("initialize");
  const obj5 = recipientId(11);
  const extractTimestampResult = recipientId(11).extractTimestamp(isDM.id);
  const obj6 = require("DateUtils");
  const tmp9 = recipientId(4467)();
  const isWithinIntervalResult = obj6.isWithinInterval(recipientId(4467)(), recipientId(4467)(extractTimestampResult), c7);
  const strangerDangerWarning = require("useStrangerDangerWarning").useStrangerDangerWarning(isDM.id);
  if (tmp) {
    tmp = stateFromStores;
  }
  if (tmp) {
    tmp = !stateFromStores1;
  }
  if (tmp) {
    if (!hasFlagResult) {
      hasFlagResult = null == arg1;
    }
    if (!hasFlagResult) {
      hasFlagResult = stateFromStores2;
    }
    tmp = hasFlagResult;
  }
  if (tmp) {
    tmp = !stateFromStores3;
  }
  if (tmp) {
    tmp = isWithinIntervalResult;
  }
  if (tmp) {
    tmp = null == strangerDangerWarning;
  }
  return tmp;
});
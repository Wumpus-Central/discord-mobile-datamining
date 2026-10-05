// discord_app/modules/channel/usePrivateChannelWaveEligible.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import Constants from "../../Constants.tsx";
import ChannelConstants from "ChannelConstants.tsx";
import _modDef4461 from "../../../_runtime/metro/04461__.js";
import MessageStore from "../../stores/MessageStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let importDefault;

const ChannelFlags = ChannelConstants.ChannelFlags;
const MessageTypes = Constants.MessageTypes;
let c7 = 1814400000;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isDM, arg1) => {
      let closure_1;
      let tmp4;
      const _require = isDM;
      let tmp = _require;
      const obj = require("react");
      const cResult = obj.c(21);
      if (cResult[0] !== isDM) {
        let tmp5 = isDM.isDM() && !isDM.isSystemDM();
        if (tmp5) {
          const rawRecipients = isDM.rawRecipients;
          tmp5 = !rawRecipients.some((bot) => bot.bot);
        }
        cResult[0] = isDM;
        cResult[1] = tmp5;
        tmp4 = tmp5;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === isDM) {
        let tmp6;
        let tmp9;
        let tmp13;
        let tmp17;
        let tmp22;
        if (cResult[3] === tmp4) {
          tmp6 = cResult[4];
        }
        importDefault = tmp6;
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [RelationshipStore];
          cResult[5] = items;
          tmp9 = items;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] !== tmp6) {
          class F {
            constructor() {
              const isFriendResult = null != closure_1 && RelationshipStore.isFriend(tmp);
              return isFriendResult;
            }
          }
          cResult[6] = tmp6;
          cResult[7] = F;
        } else {
          class F {
            constructor() {
              const isFriendResult = null != closure_1 && RelationshipStore.isFriend(tmp);
              return isFriendResult;
            }
          }
        }
        const _Symbol2 = Symbol;
        const tmpResult = tmp(504);
        const stateFromStores = tmpResult.useStateFromStores(tmp9, F);
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor() {
              const isFriendResult = null != closure_1 && RelationshipStore.isFriend(tmp);
              return isFriendResult;
            }
          }
          const items1 = [RelationshipStore];
          cResult[8] = items1;
          tmp13 = items1;
        } else {
          class F {
            constructor() {
              const isFriendResult = null != closure_1 && RelationshipStore.isFriend(tmp);
              return isFriendResult;
            }
          }
        }
        if (cResult[9] !== tmp6) {
          class F {
            constructor() {
              const isFriendResult = null != closure_1 && RelationshipStore.isFriend(tmp);
              return isFriendResult;
            }
          }
          cResult[9] = tmp6;
          cResult[10] = tmp15;
        } else {
          class F {
            constructor() {
              const isFriendResult = null != closure_1 && RelationshipStore.isFriend(tmp);
              return isFriendResult;
            }
          }
        }
        const _Symbol3 = Symbol;
        const tmpResult6 = tmp(504);
        const stateFromStores1 = tmpResult6.useStateFromStores(tmp13, tmp15);
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor() {
              const isFriendResult = null != closure_1 && RelationshipStore.isFriend(tmp);
              return isFriendResult;
            }
          }
          const items2 = [MessageStore];
          cResult[11] = items2;
          tmp17 = items2;
        } else {
          class F {
            constructor() {
              const isFriendResult = null != closure_1 && RelationshipStore.isFriend(tmp);
              return isFriendResult;
            }
          }
        }
        if (cResult[12] !== isDM.id) {
          class C {
            constructor() {
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
            }
          }
          cResult[12] = isDM.id;
          cResult[13] = C;
        } else {
          class C {
            constructor() {
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
            }
          }
        }
        const tmpResult7 = tmp(504);
        const stateFromStores2 = tmpResult7.useStateFromStores(tmp17, C);
        if (cResult[14] !== isDM) {
          class C {
            constructor() {
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
            }
          }
          cResult[14] = isDM;
          cResult[15] = isDM.hasFlag(ChannelFlags.HAS_ONLY_SYSTEM_MESSAGES);
          const hasFlagResult = isDM.hasFlag(ChannelFlags.HAS_ONLY_SYSTEM_MESSAGES);
        } else {
          class C {
            constructor() {
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
            }
          }
        }
        const _Symbol4 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor() {
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
            }
          }
          const items3 = [MessageStore];
          cResult[16] = items3;
          tmp22 = items3;
        } else {
          class C {
            constructor() {
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
            }
          }
        }
        if (cResult[17] !== isDM.id) {
          class W {
            constructor() {
              return MessageStore.hasCurrentUserSentWaveBlockingMessage(isDM.id);
            }
          }
          cResult[17] = isDM.id;
          cResult[18] = W;
        } else {
          class W {
            constructor() {
              return MessageStore.hasCurrentUserSentWaveBlockingMessage(isDM.id);
            }
          }
        }
        const tmpResult8 = tmp(504);
        const stateFromStores3 = tmpResult8.useStateFromStores(tmp22, W);
        if (cResult[19] !== isDM.id) {
          class W {
            constructor() {
              return MessageStore.hasCurrentUserSentWaveBlockingMessage(isDM.id);
            }
          }
          const obj6 = SnowflakeUtilsDefault;
          const extractTimestampResult = obj6.extractTimestamp(isDM.id);
          const isWithinInterval = tmp(4552).isWithinInterval;
          tmp(4552);
          const tmp28 = _modDef4461();
          cResult[19] = isDM.id;
          cResult[20] = isWithinInterval(tmp28, _modDef4461(extractTimestampResult), c7);
          const isWithinIntervalResult = isWithinInterval(tmp28, _modDef4461(extractTimestampResult), c7);
        } else {
          class W {
            constructor() {
              return MessageStore.hasCurrentUserSentWaveBlockingMessage(isDM.id);
            }
          }
        }
        const tmpResult10 = tmp(9785);
        const strangerDangerWarning = tmpResult10.useStrangerDangerWarning(isDM.id);
        if (tmp4) {
          class W {
            constructor() {
              return MessageStore.hasCurrentUserSentWaveBlockingMessage(isDM.id);
            }
          }
        }
        if (tmp4) {
          class W {
            constructor() {
              return MessageStore.hasCurrentUserSentWaveBlockingMessage(isDM.id);
            }
          }
        }
        if (tmp4) {
          class W {
            constructor() {
              return MessageStore.hasCurrentUserSentWaveBlockingMessage(isDM.id);
            }
          }
          if (!tmp20) {
            class W {
              constructor() {
                return MessageStore.hasCurrentUserSentWaveBlockingMessage(isDM.id);
              }
            }
          }
          tmp4 = tmp20;
        }
        if (tmp4) {
          class W {
            constructor() {
              return MessageStore.hasCurrentUserSentWaveBlockingMessage(isDM.id);
            }
          }
        }
        if (tmp4) {
          class W {
            constructor() {
              return MessageStore.hasCurrentUserSentWaveBlockingMessage(isDM.id);
            }
          }
        }
        if (tmp4) {
          class W {
            constructor() {
              return MessageStore.hasCurrentUserSentWaveBlockingMessage(isDM.id);
            }
          }
          tmp4 = null == strangerDangerWarning;
        }
        return tmp4;
      }
      if (tmp4) {
        class W {
          constructor() {
            return MessageStore.hasCurrentUserSentWaveBlockingMessage(isDM.id);
          }
        }
      }
      cResult[2] = isDM;
      cResult[3] = tmp4;
      cResult[4] = null;
      tmp6 = tmp7;
    }
  : (isDM, arg1) => {
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
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => {
        const isFriendResult = null != recipientId && RelationshipStore.isFriend(tmp);
        return isFriendResult;
      });
      const items1 = [RelationshipStore];
      const obj2 = require("get initialized");
      const stateFromStores1 = obj2.useStateFromStores(items1, () => {
        const isIgnoredResult = null != recipientId && RelationshipStore.isIgnored(tmp);
        return isIgnoredResult;
      });
      const items2 = [MessageStore];
      const obj3 = require("get initialized");
      const stateFromStores2 = obj3.useStateFromStores(items2, () => {
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
      const items3 = [MessageStore];
      const obj4 = require("get initialized");
      const stateFromStores3 = obj4.useStateFromStores(items3, () =>
        MessageStore.hasCurrentUserSentWaveBlockingMessage(isDM.id),
      );
      const obj5 = recipientId(11);
      const extractTimestampResult = obj5.extractTimestamp(isDM.id);
      const isWithinInterval = require("DateUtils").isWithinInterval;
      require("DateUtils");
      const tmp10 = recipientId(4461)();
      const isWithinIntervalResult = isWithinInterval(tmp10, recipientId(4461)(extractTimestampResult), c7);
      const obj6 = require("useStrangerDangerWarning");
      const strangerDangerWarning = obj6.useStrangerDangerWarning(isDM.id);
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
    };
const result = size.fileFinishedImporting("modules/channel/usePrivateChannelWaveEligible.tsx");

export const usePrivateChannelWaveEligible = tmp2;

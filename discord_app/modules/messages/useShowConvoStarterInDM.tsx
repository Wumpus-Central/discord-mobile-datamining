// === Module 11895: useShowConvoStarterInDM ===

// Module 11895 (useShowConvoStarterInDM)
import _mod19 from "module_19" /* 19 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import MessageRequestStore from "MessageRequestStore" /* 6720 */;
import MessageStore from "MessageStore" /* 5110 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let useRef = _mod19.useRef;
({ RelationshipTypes: closure_7, UserFlags: closure_8 } = Constants);
const ChannelFlags = ChannelConstants.ChannelFlags;
let result = size.fileFinishedImporting("modules/messages/useShowConvoStarterInDM.tsx");

export const MAX_MESSAGES_ALLOWED_FOR_GREETING = 25;
export const useShowConvoStarterInDM = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  const _require = id;
  const cResult = require("c").c(15);
  dependencyMap = useRef(false);
  useRef = useRef(id.id);
  if (cResult[0] !== id) {
    let tmp5 = id.isDM() && !id.isSystemDM();
    if (tmp5) {
      const rawRecipients = id.rawRecipients;
      tmp5 = !rawRecipients.some((bot) => bot.bot);
    }
    cResult[0] = id;
    cResult[1] = tmp5;
    let tmp4 = tmp5;
  } else {
    tmp4 = cResult[1];
  }
  MessageRequestStore = tmp4;
  if (cResult[2] === id) {
    if (cResult[3] === tmp4) {
      let tmp6 = cResult[4];
    }
    MessageStore = tmp6;
    const strangerDangerWarning = tmp(9785).useStrangerDangerWarning(id.id);
    if (cResult[5] !== id) {
      const hasFlagResult = id.hasFlag(ChannelFlags.HAS_ONLY_SYSTEM_MESSAGES);
      cResult[5] = id;
      cResult[6] = hasFlagResult;
      let tmp9 = hasFlagResult;
    } else {
      tmp9 = cResult[6];
    }
    UserStore = tmp9;
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [MessageStore, MessageRequestStore, strangerDangerWarning, UserStore];
      cResult[7] = items;
      let tmp13 = items;
    } else {
      tmp13 = cResult[7];
    }
    if (cResult[8] === id.id) {
      if (cResult[9] === tmp4) {
        if (cResult[10] === tmp9) {
          if (cResult[11] === strangerDangerWarning) {
            if (cResult[12] === tmp6) {
              let tmp18 = cResult[13];
              let tmp19 = cResult[14];
            }
            return tmp(504).useStateFromStores(tmp13, tmp18, tmp19);
          }
        }
      }
    }
    class D {
      constructor() {
        tmp2 = closure_0;
        if (closure_2.current !== closure_0.id) {
          tmp3 = closure_1;
          flag = false;
          closure_1.current = false;
          tmp.current = tmp2.id;
        }
        if (null != closure_5) {
          flag6 = false;
          return false;
        } else {
          tmp15 = closure_3;
          if (closure_3) {
            tmp4 = closure_3;
            if (closure_3.isMessageRequest(tmp2.id)) {
              flag5 = false;
              return false;
            } else {
              tmp5 = closure_4;
              if (null != closure_4) {
                tmp6 = closure_5;
                tmp7 = RelationshipTypes;
                if (closure_5.getRelationshipType(tmp5) === RelationshipTypes.BLOCKED) {
                  flag4 = false;
                  return false;
                }
              }
              if (null != tmp5) {
                tmp8 = closure_6;
                user = closure_6.getUser(tmp5);
                if (null != user) {
                  tmp9 = UserFlags;
                  if (user.hasFlag(UserFlags.PROVISIONAL_ACCOUNT)) {
                    flag3 = false;
                    return false;
                  }
                }
              }
              obj2 = closure_4;
              messages = closure_4.getMessages(tmp2.id);
              hasMoreBefore = messages.hasMoreBefore;
              tmp10 = !hasMoreBefore;
              if (!hasMoreBefore) {
                tmp10 = !messages.hasMoreAfter;
              }
              if (tmp10) {
                num = 25;
                tmp10 = messages.length < 25;
              }
              current = messages.ready;
              result = obj2.hasCurrentUserSentWaveBlockingMessage(tmp2.id);
              if (!current) {
                tmp12 = closure_1;
                current = closure_1.current;
              }
              if (current) {
                tmp13 = closure_6;
                if (!closure_6) {
                  tmp13 = tmp10;
                }
                current = tmp13;
              }
              if (current) {
                current = !result;
              }
              tmp14 = closure_1;
              closure_1.current = current;
              return current;
            }
          } else {
            flag2 = false;
            return false;
          }
        }
      }
    }
    const items1 = [strangerDangerWarning, tmp4, id.id, tmp6, tmp9];
    cResult[8] = id.id;
    cResult[9] = tmp4;
    cResult[10] = tmp9;
    cResult[11] = strangerDangerWarning;
    cResult[12] = tmp6;
    cResult[13] = D;
    cResult[14] = items1;
    tmp19 = items1;
    tmp18 = D;
    const tmpResult = tmp(9785);
  }
  let recipientId = null;
  if (tmp4) {
    recipientId = id.getRecipientId();
  }
  cResult[2] = id;
  cResult[3] = tmp4;
  cResult[4] = recipientId;
  tmp6 = recipientId;
  const obj = require("c");
}) : ((id) => {
  const _require = id;
  dependencyMap = useRef(false);
  useRef = useRef(id.id);
  let tmp = id.isDM() && !id.isSystemDM();
  if (tmp) {
    const rawRecipients = id.rawRecipients;
    tmp = !rawRecipients.some((bot) => bot.bot);
  }
  closure_3 = tmp;
  let recipientId = null;
  if (tmp) {
    recipientId = id.getRecipientId();
  }
  const strangerDangerWarning = require("useStrangerDangerWarning").useStrangerDangerWarning(id.id);
  const hasFlagResult = id.hasFlag(ChannelFlags.HAS_ONLY_SYSTEM_MESSAGES);
  UserStore = hasFlagResult;
  const obj = require("useStrangerDangerWarning");
  const items = [recipientId, closure_3, strangerDangerWarning, UserStore];
  const items1 = [strangerDangerWarning, tmp, id.id, recipientId, hasFlagResult];
  return require("initialize").useStateFromStores(items, () => {
    if (ref2.current !== id.id) {
      ref.current = false;
      tmp.current = id.id;
    }
    if (null != strangerDangerWarning) {
      return false;
    } else if (closure_3) {
      if (MessageRequestStore.isMessageRequest(id.id)) {
        return false;
      } else {
        if (null != recipientId) {
          if (RelationshipStore.getRelationshipType(recipientId) === constants.BLOCKED) {
            return false;
          }
        }
        if (null != recipientId) {
          const user = UserStore.getUser(recipientId);
          if (null != user) {
            if (user.hasFlag(constants2.PROVISIONAL_ACCOUNT)) {
              return false;
            }
          }
        }
        const messages = MessageStore.getMessages(id.id);
        const hasMoreBefore = messages.hasMoreBefore;
        let tmp10 = !hasMoreBefore;
        if (!hasMoreBefore) {
          tmp10 = !messages.hasMoreAfter;
        }
        if (tmp10) {
          tmp10 = messages.length < 25;
        }
        let current = messages.ready;
        const result = MessageStore.hasCurrentUserSentWaveBlockingMessage(id.id);
        if (!current) {
          current = ref.current;
        }
        if (current) {
          let tmp13 = hasFlagResult;
          if (!hasFlagResult) {
            tmp13 = tmp10;
          }
          current = tmp13;
        }
        if (current) {
          current = !result;
        }
        ref.current = current;
        return current;
      }
    } else {
      return false;
    }
  }, items1);
});
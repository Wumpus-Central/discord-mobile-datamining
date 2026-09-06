// === Module 12266: useShowConvoStarterInDM ===

// Module 12266 (useShowConvoStarterInDM)
import _mod19 from "module_19" /* 19 */;
import ChannelConstants from "ChannelConstants" /* 1964 */;
import MessageRequestStore from "MessageRequestStore" /* 7219 */;
import MessageStore from "MessageStore" /* 4781 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let useRef = _mod19.useRef;
({ RelationshipTypes: closure_7, UserFlags: closure_8 } = Constants);
const ChannelFlags = ChannelConstants.ChannelFlags;
let result = size.fileFinishedImporting("modules/messages/useShowConvoStarterInDM.tsx");

export const MAX_MESSAGES_ALLOWED_FOR_GREETING = 25;
export const useShowConvoStarterInDM = function useShowConvoStarterInDM(channel) {
  _require = channel;
  dependencyMap = useRef(false);
  useRef = useRef(channel.id);
  let tmp = channel.isDM() && !channel.isSystemDM();
  if (tmp) {
    const rawRecipients = channel.rawRecipients;
    tmp = !rawRecipients.some((bot) => bot.bot);
  }
  closure_3 = tmp;
  let recipientId = null;
  if (tmp) {
    recipientId = channel.getRecipientId();
  }
  const strangerDangerWarning = require("useStrangerDangerWarning").useStrangerDangerWarning(channel.id);
  const hasFlagResult = channel.hasFlag(ChannelFlags.HAS_ONLY_SYSTEM_MESSAGES);
  UserStore = hasFlagResult;
  const obj = require("useStrangerDangerWarning");
  const items = [recipientId, closure_3, strangerDangerWarning, UserStore];
  const items1 = [strangerDangerWarning, tmp, channel.id, recipientId, hasFlagResult];
  return require("initialize").useStateFromStores(items, () => {
    if (ref2.current !== id.id) {
      ref.current = false;
      tmp.current = tmp2.id;
    }
    if (null != strangerDangerWarning) {
      return false;
    } else if (closure_3) {
      if (MessageRequestStore.isMessageRequest(tmp2.id)) {
        return false;
      } else {
        if (null != recipientId) {
          if (RelationshipStore.getRelationshipType(tmp5) === constants.BLOCKED) {
            return false;
          }
        }
        if (null != recipientId) {
          const user = UserStore.getUser(tmp5);
          if (null != user) {
            if (user.hasFlag(constants2.PROVISIONAL_ACCOUNT)) {
              return false;
            }
          }
        }
        const messages = MessageStore.getMessages(tmp2.id);
        const hasMoreBefore = messages.hasMoreBefore;
        let tmp10 = !hasMoreBefore;
        if (!hasMoreBefore) {
          tmp10 = !messages.hasMoreAfter;
        }
        if (tmp10) {
          tmp10 = messages.length < 25;
        }
        let current = messages.ready;
        const result = MessageStore.hasCurrentUserSentWaveBlockingMessage(tmp2.id);
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
};
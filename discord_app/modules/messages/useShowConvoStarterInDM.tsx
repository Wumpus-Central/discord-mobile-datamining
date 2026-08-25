// === Module 11834: MAX_MESSAGES_ALLOWED_FOR_GREETING ===

// Module 11834 (MAX_MESSAGES_ALLOWED_FOR_GREETING)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import set2 from "set" /* 1398 */;
import closure_3 from "processChannel" /* 5947 */;
import closure_4 from "reinjectEphemerals" /* 4623 */;
import closure_5 from "markAllUserIdListsStale" /* 4034 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;

let useRef = noop.useRef;
({ RelationshipTypes: error, UserFlags: closure_8 } = ME);
const ChannelFlags = set2.ChannelFlags;
let result = set.fileFinishedImporting("modules/messages/useShowConvoStarterInDM.tsx");

export const MAX_MESSAGES_ALLOWED_FOR_GREETING = 25;
export const useShowConvoStarterInDM = function useShowConvoStarterInDM(channel) {
  const _require = channel;
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
  const strangerDangerWarning = _require(10407).useStrangerDangerWarning(channel.id);
  const hasFlagResult = channel.hasFlag(ChannelFlags.HAS_ONLY_SYSTEM_MESSAGES);
  const obj = _require(10407);
  const items = [recipientId, closure_3, strangerDangerWarning, hasFlagResult];
  const items1 = [strangerDangerWarning, tmp, channel.id, recipientId, hasFlagResult];
  return _require(589).useStateFromStores(items, () => {
    if (ref2.current !== id.id) {
      ref.current = false;
      tmp.current = tmp2.id;
    }
    if (null != strangerDangerWarning) {
      return false;
    } else if (messageRequest) {
      if (messageRequest.isMessageRequest(tmp2.id)) {
        return false;
      } else {
        if (null != recipientId) {
          if (strangerDangerWarning.getRelationshipType(tmp5) === closure_1_7.BLOCKED) {
            return false;
          }
        }
        if (null != recipientId) {
          const user = hasFlagResult.getUser(tmp5);
          if (null != user) {
            if (user.hasFlag(closure_1_8.PROVISIONAL_ACCOUNT)) {
              return false;
            }
          }
        }
        const messages = recipientId.getMessages(tmp2.id);
        const hasMoreBefore = messages.hasMoreBefore;
        let tmp10 = !hasMoreBefore;
        if (!hasMoreBefore) {
          tmp10 = !messages.hasMoreAfter;
        }
        if (tmp10) {
          tmp10 = messages.length < 25;
        }
        let current = messages.ready;
        const result = recipientId.hasCurrentUserSentWaveBlockingMessage(tmp2.id);
        if (!current) {
          current = ref.current;
        }
        if (current) {
          let tmp13 = closure_6;
          if (!closure_6) {
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
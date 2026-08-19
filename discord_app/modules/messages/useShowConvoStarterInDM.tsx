// discord_app/modules/messages/useShowConvoStarterInDM.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import noop from "../../../_runtime/00019_noop.js";
import set from "../channel/ChannelConstants.tsx";
import processChannel from "../message_request/MessageRequestStore.tsx";
import reinjectEphemerals from "../../stores/MessageStore.tsx";
import markAllUserIdListsStale from "../../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import ME from "../../Constants.tsx";
import { useStrangerDangerWarning } from "../self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx";

let useRef = noop.useRef;
({ RelationshipTypes: error, UserFlags: closure_8 } = ME);
const ChannelFlags = set.ChannelFlags;
let result = obj132.fileFinishedImporting("modules/messages/useShowConvoStarterInDM.tsx");

export const MAX_MESSAGES_ALLOWED_FOR_GREETING = 25;
export const useShowConvoStarterInDM = function useShowConvoStarterInDM(channel) {
  const _require = channel;
  dependencyMap = useRef(false);
  useRef = useRef(channel.id);
  let tmp = channel.isDM() && !channel.isSystemDM();
  if (tmp) {
    const rawRecipients = channel.rawRecipients;
    tmp = !rawRecipients.some((item, index) => item.bot);
  }
  closure_3 = tmp;
  let recipientId = null;
  if (tmp) {
    recipientId = channel.getRecipientId();
  }
  const strangerDangerWarning = require("../self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx").useStrangerDangerWarning(channel.id);
  const hasFlagResult = channel.hasFlag(ChannelFlags.HAS_ONLY_SYSTEM_MESSAGES);
  const obj = useStrangerDangerWarning;
  const items = [recipientId, closure_3, strangerDangerWarning, hasFlagResult];
  const items1 = [strangerDangerWarning, tmp, channel.id, recipientId, hasFlagResult];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    if (ref2.current !== id.id) {
      ref.current = false;
      tmp.current = id.id;
    }
    if (null != strangerDangerWarning) {
      return false;
    } else if (messageRequest) {
      if (messageRequest.isMessageRequest(id.id)) {
        return false;
      } else {
        if (null != recipientId) {
          if (strangerDangerWarning.getRelationshipType(recipientId) === closure_1_7.BLOCKED) {
            return false;
          }
        }
        if (null != recipientId) {
          const user = hasFlagResult.getUser(recipientId);
          if (null != user) {
            if (user.hasFlag(closure_1_8.PROVISIONAL_ACCOUNT)) {
              return false;
            }
          }
        }
        const messages = recipientId.getMessages(id.id);
        const hasMoreBefore = messages.hasMoreBefore;
        let tmp10 = !hasMoreBefore;
        if (!hasMoreBefore) {
          tmp10 = !messages.hasMoreAfter;
        }
        if (tmp10) {
          tmp10 = messages.length < 25;
        }
        let current = messages.ready;
        const result = recipientId.hasCurrentUserSentWaveBlockingMessage(id.id);
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
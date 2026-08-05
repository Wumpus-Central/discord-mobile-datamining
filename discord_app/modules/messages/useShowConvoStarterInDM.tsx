// discord_app/modules/messages/useShowConvoStarterInDM.tsx
import { useRef } from "noop";
import processChannel from "processChannel";
import reinjectEphemerals from "reinjectEphemerals";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { ChannelFlags } from "set";

let error;
let metroImportAll;
({ RelationshipTypes: error, UserFlags: metroImportAll } = ME);
let result = require("reinjectEphemerals").fileFinishedImporting("modules/messages/useShowConvoStarterInDM.tsx");

export const MAX_MESSAGES_ALLOWED_FOR_GREETING = 25;
export const useShowConvoStarterInDM = function useShowConvoStarterInDM(channel) {
  const _require = channel;
  const dependencyMap = useRef(false);
  useRef = useRef(channel.id);
  let tmp = channel.isDM() && !channel.isSystemDM();
  if (tmp) {
    const rawRecipients = channel.rawRecipients;
    tmp = !rawRecipients.some((bot) => bot.bot);
  }
  let processChannel = tmp;
  let recipientId = null;
  if (tmp) {
    recipientId = channel.getRecipientId();
  }
  const strangerDangerWarning = _require("../self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx").useStrangerDangerWarning(channel.id);
  const hasFlagResult = channel.hasFlag(ChannelFlags.HAS_ONLY_SYSTEM_MESSAGES);
  const obj = _require("../self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");
  const items = [recipientId, processChannel, strangerDangerWarning, hasFlagResult];
  const items1 = [strangerDangerWarning, tmp, channel.id, recipientId, hasFlagResult];
  return _require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    if (ref2.current !== id.id) {
      ref.current = false;
      tmp.current = tmp2.id;
    }
    if (null != strangerDangerWarning) {
      return false;
    } else if (tmp) {
      if (tmp.isMessageRequest(tmp2.id)) {
        return false;
      } else {
        if (null != recipientId) {
          if (strangerDangerWarning.getRelationshipType(tmp5) === outer1_7.BLOCKED) {
            return false;
          }
        }
        if (null != recipientId) {
          const user = hasFlagResult.getUser(tmp5);
          if (null != user) {
            if (user.hasFlag(outer1_8.PROVISIONAL_ACCOUNT)) {
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
          let tmp13 = mergeGuildAvatar;
          if (!mergeGuildAvatar) {
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
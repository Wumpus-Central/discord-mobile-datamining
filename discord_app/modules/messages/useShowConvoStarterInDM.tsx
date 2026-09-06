// discord_app/modules/messages/useShowConvoStarterInDM.tsx
import _mod19 from "../../../_runtime/metro/00019__.js";
import ChannelConstants from "../channel/ChannelConstants.tsx";
import MessageRequestStore from "../message_request/MessageRequestStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  return require("initialize").useStateFromStores(
    items,
    () => {
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
    },
    items1,
  );
};

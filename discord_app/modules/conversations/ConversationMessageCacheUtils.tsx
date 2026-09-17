// discord_app/modules/conversations/ConversationMessageCacheUtils.tsx
import ReactionUtils from "../reactions/ReactionUtils.tsx";
import MessageRecordUtils from "../messages/MessageRecordUtils.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/ConversationMessageCacheUtils.tsx");

export const applyHydratedMessages = function applyHydratedMessages(arg0) {
  ({ meta, messages, fullyHydrated, messageReferences } = arg0);
  if (messageReferences === undefined) {
    messageReferences = [];
  }
  ({ upsertMessage, upsertReference } = arg0);
  if (!fullyHydrated) {
    if (meta.fullyHydrated) {
      return false;
    }
  }
  const items = [];
  for (const item10014 of messages) {
    let obj = MessageRecordUtils;
    let messageRecord = obj.createMessageRecord(item10014);
    let arr = items.push(messageRecord);
    let upsertMessageResult = upsertMessage(messageRecord);
    continue;
  }
  meta.hydratedMessages = items;
  meta.fullyHydrated = fullyHydrated;
  for (const item10029 of messageReferences) {
    let obj2 = MessageRecordUtils;
    let upsertReferenceResult = upsertReference(obj2.createMessageRecord(item10029));
    continue;
  }
  return true;
};
export const replaceHydratedMessage = function replaceHydratedMessage(peekResult, messageId, addReactionBatchResult) {
  closure_0 = messageId;
  let hydratedMessages1;
  if (peekResult != null) {
    hydratedMessages1 = peekResult.hydratedMessages;
  }
  if (null != hydratedMessages1) {
    const hydratedMessages = peekResult.hydratedMessages;
    const findIndexResult = hydratedMessages.findIndex((id) => id.id === closure_0);
    if (-1 !== findIndexResult) {
      const hydratedMessages2 = peekResult.hydratedMessages;
      const substr = hydratedMessages2.slice();
      substr[findIndexResult] = addReactionBatchResult;
      peekResult.hydratedMessages = substr;
    }
  }
};
export const removeHydratedMessage = function removeHydratedMessage(peekResult, id) {
  closure_0 = id;
  let hydratedMessages;
  if (peekResult != null) {
    hydratedMessages = peekResult.hydratedMessages;
  }
  if (null != hydratedMessages) {
    const hydratedMessages1 = peekResult.hydratedMessages;
    peekResult.hydratedMessages = hydratedMessages1.filter((id) => id.id !== closure_0);
  }
};
export const applyRelationshipFlags = function applyRelationshipFlags(message) {
  const isBlockedForMessageResult = RelationshipStore.isBlockedForMessage(message);
  const isIgnoredForMessageResult = RelationshipStore.isIgnoredForMessage(message);
  if (message.blocked !== isBlockedForMessageResult) {
    const result = message.set("blocked", isBlockedForMessageResult);
    let result1 = result.set("ignored", isIgnoredForMessageResult);
  } else {
    result1 = null;
  }
  return result1;
};
export const applyReaction = function applyReaction(userId, message) {
  if (obj.shouldApplyReaction(userId)) {
    const tmp4 = AuthenticationStore.getId() === userId.userId;
    if ("MESSAGE_REACTION_ADD" === userId.type) {
      ({ colors: obj2.colors, reactionType: obj2.reactionType } = userId);
      let addReactionResult = message.addReaction(userId.emoji, tmp4, { colors: null, reactionType: null });
      const obj3 = { colors: null, reactionType: null };
    } else {
      addReactionResult = message.removeReaction(userId.emoji, tmp4, userId.reactionType);
    }
    return addReactionResult;
  } else {
    return null;
  }
  obj = ReactionUtils;
};

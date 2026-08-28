// === Module 11186: createPendingReply ===

// Module 11186 (createPendingReply)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("modules/replies/PendingReplyActionCreators.tsx");

export const createPendingReply = function createPendingReply(arg0) {
  ({ message, channel, shouldMention, showMentionToggle, source, mediaMention } = arg0);
  dispatcherDefault.dispatch({ type: "CREATE_PENDING_REPLY", message, channel, shouldMention, showMentionToggle, source, mediaMention });
};
export const createShallowPendingReply = function createShallowPendingReply(arg0) {
  ({ messageId, channel, shouldMention, showMentionToggle } = arg0);
  return dispatcherDefault.dispatch({ type: "CREATE_SHALLOW_PENDING_REPLY", messageId, channel, shouldMention, showMentionToggle });
};
export const setPendingReplyShouldMention = function setPendingReplyShouldMention(id, shouldMention) {
  let obj = dispatcherDefault;
  obj = { type: "SET_PENDING_REPLY_SHOULD_MENTION", channelId: id, shouldMention };
  obj.dispatch(obj);
};
export const deletePendingReply = function deletePendingReply(id) {
  let obj = dispatcherDefault;
  obj = { type: "DELETE_PENDING_REPLY", channelId: id };
  obj.dispatch(obj);
};
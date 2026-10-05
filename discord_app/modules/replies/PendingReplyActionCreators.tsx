// === Module 11292: PendingReplyActionCreators ===

// Module 11292 (PendingReplyActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/replies/PendingReplyActionCreators.tsx");

export const createPendingReply = function createPendingReply(arg0) {
  let channel;
  let mediaMention;
  let message;
  let shouldMention;
  let showMentionToggle;
  let source;
  ({ message, channel, shouldMention, showMentionToggle, source, mediaMention } = arg0);
  const obj = DispatcherDefault;
  obj.dispatch({ type: "CREATE_PENDING_REPLY", message, channel, shouldMention, showMentionToggle, source, mediaMention });
};
export const createShallowPendingReply = function createShallowPendingReply(arg0) {
  let channel;
  let messageId;
  let shouldMention;
  let showMentionToggle;
  ({ messageId, channel, shouldMention, showMentionToggle } = arg0);
  const obj = DispatcherDefault;
  return obj.dispatch({ type: "CREATE_SHALLOW_PENDING_REPLY", messageId, channel, shouldMention, showMentionToggle });
};
export const setPendingReplyShouldMention = function setPendingReplyShouldMention(id, shouldMention) {
  const obj = DispatcherDefault;
  const obj2 = { type: "SET_PENDING_REPLY_SHOULD_MENTION", channelId: id, shouldMention };
  obj.dispatch(obj2);
};
export const deletePendingReply = function deletePendingReply(id) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DELETE_PENDING_REPLY", channelId: id };
  obj.dispatch(obj2);
};
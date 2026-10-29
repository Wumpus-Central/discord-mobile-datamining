// === Module 10154: PendingReplyActionCreators ===

// Module 10154 (PendingReplyActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/replies/PendingReplyActionCreators.tsx");

export function createPendingReply(arg0) {
  ({ message, channel, shouldMention, showMentionToggle, source, mediaMention } = arg0);
  DispatcherDefault.dispatch({ type: "CREATE_PENDING_REPLY", message, channel, shouldMention, showMentionToggle, source, mediaMention });
}
export function createShallowPendingReply(arg0) {
  ({ messageId, channel, shouldMention, showMentionToggle } = arg0);
  return DispatcherDefault.dispatch({ type: "CREATE_SHALLOW_PENDING_REPLY", messageId, channel, shouldMention, showMentionToggle });
}
export function setPendingReplyShouldMention(id, shouldMention) {
  DispatcherDefault.dispatch({ type: "SET_PENDING_REPLY_SHOULD_MENTION", channelId: id, shouldMention });
}
export function deletePendingReply(id) {
  DispatcherDefault.dispatch({ type: "DELETE_PENDING_REPLY", channelId: id });
}
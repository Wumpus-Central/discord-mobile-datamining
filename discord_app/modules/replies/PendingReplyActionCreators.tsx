// discord_app/modules/replies/PendingReplyActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/replies/PendingReplyActionCreators.tsx");

export const createPendingReply = function createPendingReply(arg0) {
  ({ message, channel, shouldMention, showMentionToggle, source, mediaMention } = arg0);
  DispatcherDefault.dispatch({
    type: "CREATE_PENDING_REPLY",
    message,
    channel,
    shouldMention,
    showMentionToggle,
    source,
    mediaMention,
  });
};
export const createShallowPendingReply = function createShallowPendingReply(arg0) {
  ({ messageId, channel, shouldMention, showMentionToggle } = arg0);
  return DispatcherDefault.dispatch({
    type: "CREATE_SHALLOW_PENDING_REPLY",
    messageId,
    channel,
    shouldMention,
    showMentionToggle,
  });
};
export const setPendingReplyShouldMention = function setPendingReplyShouldMention(id, shouldMention) {
  const obj = { type: "SET_PENDING_REPLY_SHOULD_MENTION", channelId: id, shouldMention };
  obj.dispatch(obj);
};
export const deletePendingReply = function deletePendingReply(id) {
  const obj = { type: "DELETE_PENDING_REPLY", channelId: id };
  obj.dispatch(obj);
};

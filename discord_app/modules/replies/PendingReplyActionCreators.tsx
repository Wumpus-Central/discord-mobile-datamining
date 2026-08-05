// discord_app/modules/replies/PendingReplyActionCreators.tsx
import { dispatcher } from "../../Dispatcher.tsx";
const result = require("set").fileFinishedImporting("modules/replies/PendingReplyActionCreators.tsx");

export const createPendingReply = function createPendingReply(arg0) {
  let channel;
  let mediaMention;
  let message;
  let shouldMention;
  let showMentionToggle;
  let source;
  ({ message, channel, shouldMention, showMentionToggle, source, mediaMention } = arg0);
  dispatcher.dispatch({ type: "CREATE_PENDING_REPLY", message, channel, shouldMention, showMentionToggle, source, mediaMention });
};
export const createShallowPendingReply = function createShallowPendingReply(arg0) {
  let channel;
  let messageId;
  let shouldMention;
  let showMentionToggle;
  ({ messageId, channel, shouldMention, showMentionToggle } = arg0);
  return dispatcher.dispatch({ type: "CREATE_SHALLOW_PENDING_REPLY", messageId, channel, shouldMention, showMentionToggle });
};
export const setPendingReplyShouldMention = function setPendingReplyShouldMention(id, shouldMention) {
  let obj = dispatcher;
  obj = { type: "SET_PENDING_REPLY_SHOULD_MENTION", channelId: id, shouldMention };
  obj.dispatch(obj);
};
export const deletePendingReply = function deletePendingReply(id) {
  let obj = dispatcher;
  obj = { type: "DELETE_PENDING_REPLY", channelId: id };
  obj.dispatch(obj);
};
// === Module 11267: MessagePreviewReactions ===

// Module 11267 (MessagePreviewReactions)
import noop from "module_19" /* 19 */;
import ConversationsStore from "ConversationsStore" /* 7596 */;
import MessagePreviewStore from "MessagePreviewStore" /* 8360 */;

const require = fn;
const jsx = fn(21).jsx;
let closure_6 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/native/MessagePreviewReactions.tsx");

export default function MessagePreviewReactions(emoji) {
  ({ channelId, messageId } = emoji);
  let obj = channelId(504);
  const items = [MessagePreviewStore, ConversationsStore];
  const items1 = [channelId, messageId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let message = MessagePreviewStore.getMessage(messageId);
    if (message == null) {
      message = ConversationsStore.getMessage(channelId, messageId);
    }
    return null != message ? message.reactions : closure_6;
  }, items1);
  obj = { value: messageId(7162)(messageId(7182).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null };
  if (stateFromStores.length > 0) {
    obj = { channelId, messageId, emoji: emoji.emoji, reactions: stateFromStores };
    let tmp4Result = tmp4(tmp(11256).MessageReactionsContent, obj);
  } else {
    tmp4Result = tmp4(tmp(11256).MessageReactionsEmpty, {});
  }
  obj.children = tmp4Result;
  return jsx(channelId(7162).AnalyticsLocationProvider, { value: messageId(7162)(messageId(7182).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null });
};
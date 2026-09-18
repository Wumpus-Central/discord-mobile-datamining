// === Module 11519: MessagePreviewReactions ===

// Module 11519 (MessagePreviewReactions)
import noop from "module_19" /* 19 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7790 */;
import ConversationsStore from "ConversationsStore" /* 7794 */;
import MessagePreviewStore from "MessagePreviewStore" /* 8592 */;

const require = fn;
const jsx = fn(21).jsx;
let closure_7 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/native/MessagePreviewReactions.tsx");

export default function MessagePreviewReactions(emoji) {
  ({ channelId, messageId } = emoji);
  const items = [MessagePreviewStore, ConversationsStore, ConversationPreviewStore];
  const items1 = [channelId, messageId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => {
    let message = MessagePreviewStore.getMessage(messageId);
    if (message == null) {
      message = ConversationsStore.getMessage(channelId, messageId);
    }
    if (message == null) {
      message = ConversationPreviewStore.getMessage(messageId);
    }
    return null != message ? message.reactions : closure_7;
  }, items1);
  const obj = channelId(504);
  const obj2 = { value: messageId(7358)(messageId(7378).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null };
  if (stateFromStores.length > 0) {
    const obj3 = { channelId, messageId, emoji: emoji.emoji, reactions: stateFromStores };
    let tmp4Result = jsx(channelId(11508).MessageReactionsContent, { channelId, messageId, emoji: emoji.emoji, reactions: stateFromStores });
  } else {
    tmp4Result = jsx(channelId(11508).MessageReactionsEmpty, {});
  }
  obj2.children = tmp4Result;
  return jsx(channelId(7358).AnalyticsLocationProvider, { value: messageId(7358)(messageId(7378).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null });
};
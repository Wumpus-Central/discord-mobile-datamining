// === Module 11405: MessagePreviewReactions ===

// Module 11405 (MessagePreviewReactions)
import noop from "module_19" /* 19 */;
import ConversationsStore from "ConversationsStore" /* 7701 */;
import MessagePreviewStore from "MessagePreviewStore" /* 8481 */;

const require = fn;
const jsx = fn(21).jsx;
let closure_6 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/native/MessagePreviewReactions.tsx");

export default function MessagePreviewReactions(emoji) {
  ({ channelId, messageId } = emoji);
  const items = [MessagePreviewStore, ConversationsStore];
  const items1 = [channelId, messageId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => {
    let message = MessagePreviewStore.getMessage(messageId);
    if (message == null) {
      message = ConversationsStore.getMessage(channelId, messageId);
    }
    return null != message ? message.reactions : closure_6;
  }, items1);
  const obj = channelId(504);
  const obj2 = { value: messageId(7269)(messageId(7289).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null };
  if (stateFromStores.length > 0) {
    const obj3 = { channelId, messageId, emoji: emoji.emoji, reactions: stateFromStores };
    let tmp4Result = jsx(channelId(11394).MessageReactionsContent, { channelId, messageId, emoji: emoji.emoji, reactions: stateFromStores });
  } else {
    tmp4Result = jsx(channelId(11394).MessageReactionsEmpty, {});
  }
  obj2.children = tmp4Result;
  return jsx(channelId(7269).AnalyticsLocationProvider, { value: messageId(7269)(messageId(7289).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null });
};
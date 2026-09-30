// === Module 11042: MessagePreviewReactions ===

// Module 11042 (MessagePreviewReactions)
import noop from "module_19" /* 19 */;
import ChannelConversationsStore from "ChannelConversationsStore" /* 7209 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7214 */;
import MessagePreviewStore from "MessagePreviewStore" /* 8003 */;

const require = fn;
const jsx = fn(21).jsx;
let closure_7 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/native/MessagePreviewReactions.tsx");

export default function MessagePreviewReactions(emoji) {
  ({ channelId, messageId } = emoji);
  const items = [MessagePreviewStore, ChannelConversationsStore, ConversationPreviewStore];
  const items1 = [channelId, messageId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => {
    let message = MessagePreviewStore.getMessage(messageId);
    if (message == null) {
      message = ChannelConversationsStore.getMessage(channelId, messageId);
    }
    if (message == null) {
      message = ConversationPreviewStore.getMessage(messageId);
    }
    return null != message ? message.reactions : closure_7;
  }, items1);
  const obj = channelId(504);
  const obj2 = { value: messageId(6779)(messageId(6799).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null };
  if (stateFromStores.length > 0) {
    const obj3 = { channelId, messageId, emoji: emoji.emoji, reactions: stateFromStores };
    let tmp4Result = jsx(channelId(11031).MessageReactionsContent, { channelId, messageId, emoji: emoji.emoji, reactions: stateFromStores });
  } else {
    tmp4Result = jsx(channelId(11031).MessageReactionsEmpty, {});
  }
  obj2.children = tmp4Result;
  return jsx(channelId(6779).AnalyticsLocationProvider, { value: messageId(6779)(messageId(6799).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null });
};
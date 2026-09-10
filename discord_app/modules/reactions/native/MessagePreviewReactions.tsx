// === Module 11339: MessagePreviewReactions ===

// Module 11339 (MessagePreviewReactions)
import noop from "module_19" /* 19 */;
import ConversationsStore from "ConversationsStore" /* 7647 */;
import MessagePreviewStore from "MessagePreviewStore" /* 8425 */;

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
  obj = { value: messageId(7214)(messageId(7234).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null };
  if (stateFromStores.length > 0) {
    obj = { channelId, messageId, emoji: emoji.emoji, reactions: stateFromStores };
    let tmp4Result = jsx(channelId(11328).MessageReactionsContent, { channelId, messageId, emoji: emoji.emoji, reactions: stateFromStores });
  } else {
    tmp4Result = jsx(channelId(11328).MessageReactionsEmpty, {});
  }
  obj.children = tmp4Result;
  return jsx(channelId(7214).AnalyticsLocationProvider, { value: messageId(7214)(messageId(7234).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null });
};
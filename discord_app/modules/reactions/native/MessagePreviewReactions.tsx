// discord_app/modules/reactions/native/MessagePreviewReactions.tsx
import noop from "../../../../_runtime/metro/00019__.js";
import ConversationsStore from "../../conversations/ConversationsStore.tsx";
import MessagePreviewStore from "../../../stores/native/MessagePreviewStore.tsx";

const require = fn;
const jsx = fn(21).jsx;
let closure_6 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/native/MessagePreviewReactions.tsx");

export default function MessagePreviewReactions(emoji) {
  ({ channelId, messageId } = emoji);
  const items = [MessagePreviewStore, ConversationsStore];
  const items1 = [channelId, messageId];
  const stateFromStores = channelId(504).useStateFromStores(
    items,
    () => {
      let message = MessagePreviewStore.getMessage(messageId);
      if (message == null) {
        message = ConversationsStore.getMessage(channelId, messageId);
      }
      return null != message ? message.reactions : closure_6;
    },
    items1,
  );
  const obj = channelId(504);
  const obj2 = { value: messageId(7265)(messageId(7285).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null };
  if (stateFromStores.length > 0) {
    const obj3 = { channelId, messageId, emoji: emoji.emoji, reactions: stateFromStores };
    let tmp4Result = jsx(channelId(11390).MessageReactionsContent, {
      channelId,
      messageId,
      emoji: emoji.emoji,
      reactions: stateFromStores,
    });
  } else {
    tmp4Result = jsx(channelId(11390).MessageReactionsEmpty, {});
  }
  obj2.children = tmp4Result;
  return jsx(channelId(7265).AnalyticsLocationProvider, {
    value: messageId(7265)(messageId(7285).MESSAGE_PREVIEW_REACTIONS).analyticsLocations,
    children: null,
  });
}

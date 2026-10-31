// === Module 18976: MessageRequestsPreviewScreen ===

// Module 18976 (MessageRequestsPreviewScreen)
import MessageManagerDefault from "MessageManager" /* 9830 */;
import ChatViewDefault from "ChatView" /* 11214 */;
import RestrictedMessageRequestPreviewDefault from "RestrictedMessageRequestPreview" /* 18977 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6842 */;

const require = fn;
const ME = fn(1072).ME;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx");

export default function MessageRequestsScreen(route) {
  const channelId = route.route.params.channelId;
  const ref = noop.useRef(null);
  const items = [channelId];
  const isMessageRequestRestrictedViewer = channelId(13999).useIsMessageRequestRestrictedViewer();
  const effect = noop.useEffect(() => {
    const obj = MessageManagerDefault;
    const messages = obj.fetchMessages({ channelId, messageId: ReadStateStore.lastMessageId(channelId) });
  }, items);
  const obj2 = { guildId: ME, channelId, children: null };
  if (isMessageRequestRestrictedViewer) {
    const obj3 = { channelId };
    let tmp5Result = jsx(RestrictedMessageRequestPreviewDefault, { channelId });
  } else {
    const obj4 = { guildId: tmp6, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, screenIndex: "message-request" };
    tmp5Result = jsx(ChatViewDefault, { guildId: tmp6, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, screenIndex: "message-request" });
  }
  obj2.children = tmp5Result;
  return jsx(channelId(11007).ChannelContainer, { guildId: ME, channelId, children: null });
};
// === Module 19061: MessageRequestsPreviewScreen ===

// Module 19061 (MessageRequestsPreviewScreen)
import MessageManagerDefault from "MessageManager" /* 8825 */;
import ChatViewDefault from "ChatView" /* 11626 */;
import RestrictedMessageRequestPreviewDefault from "RestrictedMessageRequestPreview" /* 19062 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6806 */;

const require = fn;
const ME = fn(1071).ME;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx");

export default function MessageRequestsScreen(route) {
  const channelId = route.route.params.channelId;
  const ref = noop.useRef(null);
  items = [channelId];
  const isMessageRequestRestrictedViewer = channelId(13249).useIsMessageRequestRestrictedViewer();
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
  return jsx(channelId(10448).ChannelContainer, { guildId: ME, channelId, children: null });
};
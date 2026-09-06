// discord_app/modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx
import MessageManagerDefault from "../../../../messages/MessageManager.tsx";
import ChatViewDefault from "../../../../chat/native/ChatView.tsx";
import RestrictedMessageRequestPreviewDefault from "../../../../message_request/native/RestrictedMessageRequestPreview.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ReadStateStore from "../../../../../stores/ReadStateStore.tsx";

const require = fn;
const ME = fn(1074).ME;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx",
);

export default function MessageRequestsScreen(route) {
  const channelId = route.route.params.channelId;
  let obj = channelId(12440);
  const items = [channelId];
  const isMessageRequestRestrictedViewer = obj.useIsMessageRequestRestrictedViewer("MessageRequestsPreviewScreen");
  const effect = noop.useEffect(() => {
    const obj = { channelId, messageId: ReadStateStore.lastMessageId(channelId) };
    const messages = obj.fetchMessages(obj);
  }, items);
  obj = { guildId: ME, channelId, children: null };
  if (isMessageRequestRestrictedViewer) {
    obj = { channelId };
    let tmp5Result = jsx(RestrictedMessageRequestPreviewDefault, { channelId });
  } else {
    const obj1 = {
      guildId: tmp6,
      channelId,
      chatInputRef: ref,
      HACK_fixModalInteraction: true,
      screenIndex: "message-request",
    };
    tmp5Result = jsx(ChatViewDefault, {
      guildId: tmp6,
      channelId,
      chatInputRef: ref,
      HACK_fixModalInteraction: true,
      screenIndex: "message-request",
    });
  }
  obj.children = tmp5Result;
  return jsx(channelId(10077).ChannelContainer, { guildId: ME, channelId, children: null });
}

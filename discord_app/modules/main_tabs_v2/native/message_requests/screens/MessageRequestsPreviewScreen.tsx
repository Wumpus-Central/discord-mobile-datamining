// discord_app/modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx
import fetchMessagesDefault from "../../../../messages/MessageManager.tsx";
import _modDef10546 from "../../../../chat/native/ChatView.tsx";
import RestrictedMessageRequestPreviewDefault from "../../../../message_request/native/RestrictedMessageRequestPreview.tsx";
import noop from "../../../../../../_runtime/00019_noop.js";
import generateOldThreadCutoff from "../../../../../stores/ReadStateStore.tsx";
import { ME } from "../../../../../Constants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx");

export default function MessageRequestsScreen(route) {
  const channelId = route.route.params.channelId;
  let obj = channelId(11608);
  const items = [channelId];
  const isMessageRequestRestrictedViewer = obj.useIsMessageRequestRestrictedViewer("MessageRequestsPreviewScreen");
  const effect = React.useEffect(() => {
    const obj = { channelId, messageId: closure_1_4.lastMessageId(channelId) };
    const messages = obj.fetchMessages(obj);
  }, items);
  obj = { guildId: ME, channelId, children: null };
  if (isMessageRequestRestrictedViewer) {
    obj = { channelId: null };
    obj[0] = channelId;
    let tmp5Result = jsx(RestrictedMessageRequestPreviewDefault, { channelId: null });
  } else {
    obj1 = { guildId: null, channelId: null, chatInputRef: null, HACK_fixModalInteraction: true, screenIndex: "message-request" };
    obj1[0] = tmp6;
    obj1[1] = channelId;
    obj1[2] = ref;
    tmp5Result = jsx(_modDef10546, { guildId: null, channelId: null, chatInputRef: null, HACK_fixModalInteraction: true, screenIndex: "message-request" });
  }
  obj[2] = tmp5Result;
  return jsx(channelId(10011).ChannelContainer, { guildId: ME, channelId, children: null });
};
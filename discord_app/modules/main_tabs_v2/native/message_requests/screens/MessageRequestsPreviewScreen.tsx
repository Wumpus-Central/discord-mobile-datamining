// === Module 16110: MessageRequestsScreen ===

// Module 16110 (MessageRequestsScreen)
import fetchMessagesDefault from "fetchMessages" /* 9084 */;
import _modDef10546 from "module_10546" /* 10546 */;
import RestrictedMessageRequestPreviewDefault from "RestrictedMessageRequestPreview" /* 16111 */;
import noop from "noop" /* 19 */;
import generateOldThreadCutoff from "generateOldThreadCutoff" /* 4772 */;
import { ME } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

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
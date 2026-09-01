// === Module 16474: MessageRequestsScreen ===

// Module 16474 (MessageRequestsScreen)
import closure_3 from "noop" /* 19 */;
import closure_4 from "generateOldThreadCutoff" /* 4493 */;
import { ME } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx");

export default function MessageRequestsScreen(route) {
  const channelId = route.route.params.channelId;
  let obj = channelId(12004);
  const items = [channelId];
  const isMessageRequestRestrictedViewer = obj.useIsMessageRequestRestrictedViewer("MessageRequestsPreviewScreen");
  const effect = React.useEffect(() => {
    let obj = closure_1_1(closure_1_2[5]);
    obj = { channelId, messageId: closure_1_4.lastMessageId(channelId) };
    const messages = obj.fetchMessages(obj);
  }, items);
  obj = { guildId: ME, channelId, children: null };
  if (isMessageRequestRestrictedViewer) {
    obj = { channelId: null };
    obj[0] = channelId;
    let tmp5Result = tmp5(tmp7(16475), obj);
  } else {
    obj1 = { guildId: null, channelId: null, chatInputRef: null, HACK_fixModalInteraction: true, screenIndex: "message-request" };
    obj1[0] = tmp6;
    obj1[1] = channelId;
    obj1[2] = ref;
    tmp5Result = tmp5(tmp7(10977), obj1);
  }
  obj[2] = tmp5Result;
  return jsx(channelId(10160).ChannelContainer, { guildId: ME, channelId, children: null });
};
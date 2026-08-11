// discord_app/modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx
import noop from "noop";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import { ME } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx");

export default function MessageRequestsScreen(route) {
  const channelId = route.route.params.channelId;
  let obj = channelId(11804);
  const items = [channelId];
  const isMessageRequestRestrictedViewer = obj.useIsMessageRequestRestrictedViewer("MessageRequestsPreviewScreen");
  const effect = React.useEffect(() => {
    let obj = outer1_1(outer1_2[5]);
    obj = { channelId, messageId: outer1_4.lastMessageId(channelId) };
    const messages = obj.fetchMessages(obj);
  }, items);
  obj = { guildId: ME, channelId, children: null };
  if (isMessageRequestRestrictedViewer) {
    obj = { channelId: null };
    obj[0] = channelId;
    let tmp5Result = tmp5(tmp7(15985), obj);
  } else {
    const obj1 = { guildId: null, channelId: null, chatInputRef: null, HACK_fixModalInteraction: true, screenIndex: "message-request" };
    obj1[0] = tmp6;
    obj1[1] = channelId;
    obj1[2] = ref;
    tmp5Result = tmp5(tmp7(10321), obj1);
  }
  obj[2] = tmp5Result;
  return jsx(channelId(9754).ChannelContainer, { guildId: ME, channelId, children: null });
};